package controller

//serverにレスポンスを返すところ

import (
	"fmt"

	"github.com/gin-gonic/gin"

	"github.com/s14228so/todo/api/domain/service"
)

// UserController is user controlller
type UserController struct{}

// Index action: GET /users
func (pc UserController) Index(c *gin.Context) {
	var s service.Service

	email := c.Query("email")

	if email != "" {
		p, err := s.GetUserByEmail(email)
		if err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.JSON(200, p)
		}
	} else {
		p, err := s.GetUserAll()

		if err != nil {
			c.AbortWithStatus(404)
			fmt.Println(err)
		} else {
			c.JSON(200, p)
		}

	}

}

// Create action: POST /users
func (pc UserController) Create(c *gin.Context) {
	var s service.Service
	p, errs := s.CreateUserModel(c)

	if len(errs) != 0 {
		c.AbortWithStatus(400)
		fmt.Println(errs)
	} else {
		c.JSON(201, p)
	}
}

// Show action: GET /users/:id
func (pc UserController) Show(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service
	p, err := s.GetUserByID(id)

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

// Update action: PUT /users/:id
func (pc UserController) Update(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service
	p, err := s.UpdateUserByID(id, c)

	if err != nil {
		c.AbortWithStatus(400)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

// Delete action: DELETE /users/:id
func (pc UserController) Delete(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service

	if err := s.DeleteUserByID(id); err != nil {
		c.AbortWithStatus(403)
		fmt.Println(err)
	} else {
		c.JSON(204, gin.H{"id #" + id: "deleted"})
	}
}
