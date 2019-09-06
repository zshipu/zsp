package main

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
func (s *Lvdb) CreateItem(item *models.IP) error {

	db := s.con
	err := db.Put([]byte(item.Type+"-"+item.Data), []byte(item.Data), nil)
	if err != nil {
		return err
	}
	return nil
}

// Create insert new item
func (s *Lvdb) DeleteItem(item *models.IP) error {

	db := s.con
	err := db.Delete([]byte(item.Type+"-"+item.Data), nil)
	if err != nil {
		return err
	}
	return nil
}

// GetDBSession returns a new connection from the pool
func (s *Lvdb) GetLevelDB() *leveldb.DB {
	return s.con
}

func (s *Lvdb) GetLevlOne(keyPrefix string) (*models.IP, error) {

	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	total := s.GetTotal()
	randnum := 0
	if total > 0 {
		randnum = r.Intn(total)
	}
	db := s.con
	t := models.NewIP()

	// keyPrefix "https-"  "http-"
	iter := db.NewIterator(utildb.BytesPrefix([]byte(keyPrefix)), nil)
	iflag := 0
	for iter.Next() {
		value := iter.Value()
		if iflag >= randnum {
			t.Data = string(value)
			return t, nil
		}
		iflag++
	}
	iter.Release()
	err := iter.Error()

	return nil, err
}

func (s *Lvdb) GetLevlPre(keyPrefix string, data string) (*models.IP, error) {

	db := s.con
	t := models.NewIP()

	// keyPrefix "https-"  "http-"
	iter := db.NewIterator(utildb.BytesPrefix([]byte(keyPrefix)), nil)
	iflag := 0
	for iter.Next() {
		value := iter.Value()
		if string(value) == data {
			t.Data = string(value)
			return t, nil
		}
		iflag++
	}
	iter.Release()
	err := iter.Error()

	return nil, err
}

func (s *Lvdb) GetLevlList(keyPrefix string) ([]*models.IP, error) {

	var ips []*models.IP

	db := s.con
	iter := db.NewIterator(utildb.BytesPrefix([]byte(keyPrefix)), nil)
	k := 0
	for iter.Next() {
		k++
		value := iter.Value()
		ips[k] = &models.IP{Data: string(value)}
	}
	iter.Release()

	return ips, nil

}

// GetAll .
func (s *Lvdb) GetAll() ([]*models.IP, error) {

	var ips []*models.IP

	db := s.con
	iter := db.NewIterator(nil, nil)
	k := 0
	for iter.Next() {
		k++
		value := iter.Value()
		ips[k] = &models.IP{Data: string(value)}
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
