package main

import (
	"github.com/s14228so/todo/infrastructure/db"
	"github.com/s14228so/todo/infrastructure/server"
)

func main() {
	db.Init()
	server.Init()
}
