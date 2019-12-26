package controller

//serverにレスポンスを返すところ

import (
	"fmt"

	"github.com/gin-gonic/gin"

	"github.com/s14228so/todo/api/domain/service"
)

// TodoController is user controlller
type TodoController struct{}

// Index action: GET /todos
func (pc TodoController) Index(c *gin.Context) {
	var s service.Service

	p, err := s.GetTodoAll()

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}

}

// Create action: POST /todos
func (pc TodoController) Create(c *gin.Context) {
	var s service.Service
	p, errs := s.CreateTodoModel(c)

	if len(errs) != 0 {
		c.AbortWithStatus(400)
		fmt.Println(errs)
	} else {
		c.JSON(201, p)
	}
}

// Show action: GET /users/:id
func (pc TodoController) Show(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service
	p, err := s.GetTodoByID(id)

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

// Update action: PUT /users/:id
func (pc TodoController) Update(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service
	p, err := s.UpdateTodoByID(id, c)

	if err != nil {
		c.AbortWithStatus(400)
		fmt.Println(err)
	} else {
		c.JSON(200, p)
	}
}

// Delete action: DELETE /users/:id
func (pc TodoController) Delete(c *gin.Context) {
	id := c.Params.ByName("id")
	var s service.Service

	if err := s.DeleteTodoByID(id); err != nil {
		c.AbortWithStatus(403)
		fmt.Println(err)
	} else {
		c.JSON(204, gin.H{"id #" + id: "deleted"})
	}
}
