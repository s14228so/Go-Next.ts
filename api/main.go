package main

import (
	"github.com/s14228so/todo/api/infrastructure/db"
	"github.com/s14228so/todo/api/infrastructure/server"
)

func main() {
	db.Init()
	server.Init()
}
