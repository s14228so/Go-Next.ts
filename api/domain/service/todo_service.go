package service

// user周りのメソッド。DBとの通信周り

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/s14228so/todo/api/domain/entity"

	"github.com/s14228so/todo/api/infrastructure/db"
)

// Service procides user's behavior
type Todo entity.Todo

// GetTodoAll is get all User
func (s Service) GetTodoAll() ([]Todo, error) {
	db := db.GetDB()
	var u []Todo

	if err := db.Find(&u).Error; err != nil {
		return nil, err
	}

	for i, todo := range u {

		if err := db.Model(&todo).Related(&todo.User, "User"); err != nil {
			fmt.Println("プランが見つかりませんでした")
		}
		u[i] = todo
	}

	return u, nil
}

// CreateUserModel is create User model
func (s Service) CreateTodoModel(c *gin.Context) (Todo, []error) {

	var u Todo

	if err := c.BindJSON(&u); err != nil {
		var errors []error
		errors = append(errors, err)
		return u, errors
	}

	return u, nil
}

// GetUserByID is get a User
func (s Service) GetTodoByID(id string) (Todo, error) {
	db := db.GetDB()
	var u Todo

	if err := db.First(&u, id).Related(&u.User, "User"); err != nil {
	}
	// var coach entity.Coach
	return u, nil
}

// UpdateUserByID is update a User
func (s Service) UpdateTodoByID(id string, c *gin.Context) (Todo, error) {
	db := db.GetDB()
	var u Todo

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
	var u Todo

	if err := db.Where("id = ?", id).Delete(&u).Error; err != nil {
		return err
	}

	return nil
}
