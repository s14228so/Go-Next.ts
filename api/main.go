package main

import (
	"fmt"
	"net/http"
)

type String string

// String に ServeHTTP 関数を追加
func (s String) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, s)
}

func main() {

	// DuckTyping的に、ServeHTTP関数があれば良い.
	http.Handle("/c", String("Duck Typing!!!"))

	// 8080ポートで起動
	http.ListenAndServe(":8080", nil)
}
