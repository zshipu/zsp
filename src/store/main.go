package main

import (
	"fmt"
	"gowww/store/models"
	"gowww/store/storage"
)

func main() {
	fmt.Println("hello")
	db := storage.NewLevDb()
	article := models.NewArticle()
	article.Content = "第一个文章3"
	article.Type = "t"
	article.Title = "第一个文章3"
	db.CreateItem(article)

	articles, _ := db.GetAll()

	fmt.Printf("%v", articles)

}
