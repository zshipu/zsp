package storage

import (
	"github.com/syndtr/goleveldb/leveldb"
	utildb "github.com/syndtr/goleveldb/leveldb/util"
	"gowww/store/models"
	"math/rand"
	"time"
)

type Lvdb struct {
	con *leveldb.DB
}

var GlobalDB, _ = leveldb.OpenFile("./db", nil)

func NewLevDb() *Lvdb {
	return &Lvdb{con: GlobalDB}
}

// Create insert new item
func (s *Lvdb) CreateItem(item *models.Article) error {

	db := s.con
	err := db.Put([]byte(item.Type+"-"+item.Title), []byte(item.Content), nil)
	if err != nil {
		return err
	}
	return nil
}

// Create insert new item
func (s *Lvdb) DeleteItem(item *models.Article) error {

	db := s.con
	err := db.Delete([]byte(item.Type+"-"+item.Title), nil)
	if err != nil {
		return err
	}
	return nil
}

// GetDBSession returns a new connection from the pool
func (s *Lvdb) GetLevelDB() *leveldb.DB {
	return s.con
}

func (s *Lvdb) GetLevlOne(typestr string) (*models.Article, error) {

	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	total := s.GetTotal()
	randnum := 0
	if total > 0 {
		randnum = r.Intn(total)
	}
	db := s.con
	t := models.NewArticle()

	// type
	iter := db.NewIterator(utildb.BytesPrefix([]byte(typestr)), nil)
	iflag := 0
	for iter.Next() {
		value := iter.Value()
		if iflag >= randnum {
			t.Content = string(value)
			return t, nil
		}
		iflag++
	}
	iter.Release()
	err := iter.Error()

	return nil, err
}

func (s *Lvdb) GetLevlPre(typestr string, data string) (*models.Article, error) {

	db := s.con
	t := models.NewArticle()

	// type
	iter := db.NewIterator(utildb.BytesPrefix([]byte(typestr)), nil)
	iflag := 0
	for iter.Next() {
		value := iter.Value()
		if string(value) == data {
			t.Content = string(value)
			return t, nil
		}
		iflag++
	}
	iter.Release()
	err := iter.Error()

	return nil, err
}

func (s *Lvdb) GetLevlList(typestr string) ([]*models.Article, error) {

	ips := make([]*models.Article, 10)

	db := s.con
	iter := db.NewIterator(utildb.BytesPrefix([]byte(typestr)), nil)
	k := 0
	for iter.Next() {
		k++
		value := iter.Value()
		ips[k] = &models.Article{Content: string(value)}
		if k > 9 {
			break
		}
	}
	iter.Release()

	return ips, nil

}

// GetAll .
func (s *Lvdb) GetAll() ([]*models.Article, error) {

	icount := s.GetTotal()

	ips := make([]*models.Article, icount)

	db := s.con
	iter := db.NewIterator(nil, nil)
	k := 0
	for iter.Next() {

		value := iter.Value()
		if value != nil && len(value) > 0 {
			ips[k] = &models.Article{Content: string(value), Title: string(iter.Key())}
			k++
		}

	}
	iter.Release()

	return ips, nil
}

func (s *Lvdb) GetTotal() int {
	db := s.con
	iter := db.NewIterator(nil, nil)
	k := 0
	for iter.Next() {
		k++
	}
	iter.Release()
	return k
}
