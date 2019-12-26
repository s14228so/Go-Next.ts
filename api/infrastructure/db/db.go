package db

import (
	// Use PostgreSQL in gorm
	_ "github.com/go-sql-driver/mysql"

	"github.com/jinzhu/gorm"
	// Use PostgreSQL in gorm
	_ "github.com/jinzhu/gorm/dialects/mysql"

	"github.com/s14228so/todo/api/domain/entity"
)

var (
	db  *gorm.DB
	err error
)

// Init is initialize db from main function
func Init() {
	db, err = gorm.Open("mysql", "root:@/todo?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}

	// validations.RegisterCallbacks(db)

	autoMigration()
}

// GetDB is called in models
func GetDB() *gorm.DB {
	return db
}

func autoMigration() {
	db.AutoMigrate(&entity.User{})
	db.AutoMigrate(&entity.Todo{})
}
