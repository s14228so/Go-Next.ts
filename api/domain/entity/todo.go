package entity

//Todo is
type Todo struct {
	MainColumn
	Title     string `json:"title"`
	User      User   `json:"user"`
	UserID    uint   `json:"user_id"`
	IsDeleted string `json:"is_deleted"`
}
