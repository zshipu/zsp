package models

import "gopkg.in/mgo.v2/bson"

// article struct 文章结构
type Article struct {
	ID      bson.ObjectId `bson:"_id" json:"-"`
	Title   string        `bson:"title"`   //文章标题
	content string        `bson:"content"` // 文章内容

	Data string `bson:"data" json:"ip"`
	Type string `bson:"type" json:"type"` // http https
}

// NewArticle 文章结构 .
func NewArticle() *Article {
	return &Article{
		ID: bson.NewObjectId(),
	}
}
