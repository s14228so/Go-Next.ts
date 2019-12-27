package service

// user周りのメソッド。DBとの通信周り

import (
	"errors"
	"fmt"
	"log"

	"github.com/jinzhu/gorm"

	"github.com/gin-gonic/gin"

	"github.com/s14228so/todo/api/domain/entity"
	"github.com/s14228so/todo/api/infrastructure/db"
)

// Service procides user's behavior
type Service struct{}
type User entity.User

// Validate is User validate
func (user User) Validate(db *gorm.DB) {
	if user.Email == "" {
		db.AddError(errors.New("Please be sure to enter your email address"))
	}
}

//GetUserByEmail is
func (s Service) GetUserByEmail(email string) (User, error) {
	db := db.GetDB()
	var u User
	// var coach entity.Coach

	if err := db.Where("Email = ?", email).First(&u).Error; err != nil {
		return u, err
	}

	if err := db.Model(&u).Related(&u.Todos, "Todos"); err != nil {
		fmt.Println("プランが見つかりませんでした")
	}

	return u, nil
}

func (s Service) GetUserAll() ([]User, error) {
	db := db.GetDB()
	var u []User

	if err := db.Find(&u).Error; err != nil {
		return nil, err
	}

	for i, user := range u {

		if err := db.Model(&user).Related(&user.Todos, "Todos"); err != nil {
			fmt.Println("プランが見つかりませんでした")
		}

		u[i] = user

	}

	return u, nil
}

// CreateUserModel is create User model
func (s Service) CreateUserModel(c *gin.Context) (User, []error) {
	var u User
	db := db.GetDB()

	if err := c.BindJSON(&u); err != nil {
		var errors []error
		errors = append(errors, err)
		return u, errors
	}

	if errors := db.Create(&u).GetErrors(); errors != nil {
		return u, errors
	}

	return u, nil

	return u, nil
}

// GetUserByID is get a User
func (s Service) GetUserByID(id string) (User, error) {
	db := db.GetDB()
	var u User

	if err := db.First(&u, id).Related(&u.Todos, "Todos"); err != nil {
		fmt.Println("プランが見つかりませんでした")
	}
	// var coach entity.Coach
	return u, nil
}

// UpdateUserByID is update a User
func (s Service) UpdateUserByID(id string, c *gin.Context) (User, error) {
	db := db.GetDB()
	var u User

	if err := db.Where("id = ?", id).First(&u).Error; err != nil {
		fmt.Println(err)
		log.Printf("err: %v", err)
		return u, err
	}

	if err := c.BindJSON(&u); err != nil {
		fmt.Println(err)
		return u, err
	}

	db.Save(&u)

	return u, nil
}

// DeleteUserByID is delete a User
func (s Service) DeleteUserByID(id string) error {
	db := db.GetDB()
	var u User

	if err := db.Where("id = ?", id).Delete(&u).Error; err != nil {
		return err
	}

	return nil
}
