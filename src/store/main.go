package main

import (
	"encoding/json"
	"fmt"
	"gowww/store/models"
	"gowww/store/storage"
)

func main() {
	fmt.Println("hello")
	db := storage.NewLevDb()
	article := models.NewArticle()
	article.Content = "第一个文章5"
	article.Type = "t"
	article.Title = "第一个文章5"
	db.CreateItem(article)

	articles, _ := db.GetAll()

	bytes, _ := json.MarshalIndent(articles, "", "")
	fmt.Printf("%s", string(bytes))

}
