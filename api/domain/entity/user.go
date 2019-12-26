package entity

//User is
type User struct {
	MainColumn
	Email    string `json:"email"`
	UID      string `json:"uid"`
	UserName string `json:"username"`
	Todos    []Todo `json:"todos"`
}
