package models

import "gopkg.in/mgo.v2/bson"

// article struct 文章结构
type Article struct {
	ID      bson.ObjectId `bson:"_id"      json:"-"`
	Type    string        `bson:"type"     json:"type"`
	Title   string        `bson:"title"    json:"title"`   //文章标题
	Content string        `bson:"content"  json:"content"` // 文章内容
	Url     string        `bson:"url"      json:"url"`     // url
	Source  string        `bson:"source"   json:"source"`
	Date    string        `bson:"date"     json:"date"`
}

// NewArticle 文章结构 .
func NewArticle() *Article {
	return &Article{
		ID: bson.NewObjectId(),
	}
}
