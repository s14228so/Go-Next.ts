package service

// user周りのメソッド。DBとの通信周り

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"

	"github.com/s14228so/todo/api/infrastructure/db"
)

// Service procides user's behavior
type Service struct{}

// GetTodoAll is get all User
func (s Service) GetTodoAll() ([]User, error) {
	db := db.GetDB()
	var u []Todo

	if err := db.Find(&u).Error; err != nil {
		return nil, err
	}

	for i, todo := range u {

		if err := db.Model(&todo).Related(&todo.User, "User"); err != nil {
			fmt.Println("プランが見つかりませんでした")
		}
		u[i] = user
	}

	return u, nil
}

// CreateUserModel is create User model
func (s Service) CreateUserModel(c *gin.Context) (User, []error) {
	db := db.GetDB()
	var u Todo

	if err := c.BindJSON(&u); err != nil {
		var errors []error
		errors = append(errors, err)
		return u, errors
	}

	return u, nil
}

// GetUserByID is get a User
func (s Service) GetTodoByID(id string) (User, error) {
	db := db.GetDB()
	var u Todo
	// var coach entity.Coach
	return u, nil
}

// UpdateUserByID is update a User
func (s Service) UpdateTodorByID(id string, c *gin.Context) (User, error) {
	db := db.GetDB()
	var u User

	if err := db.Where("id = ?", id).First(&u).Error; err != nil {
		fmt.Println(err)
		log.Printf("err: %v", err)
		return u, err
	}

	db.Save(&u)

	return u, nil
}

// DeleteUserByID is delete a User
func (s Service) DeleteTodoByID(id string) error {
	db := db.GetDB()
	var u User

	if err := db.Where("id = ?", id).Delete(&u).Error; err != nil {
		return err
	}

	return nil
}
