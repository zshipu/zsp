package main

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/seefan/gossdb"
	"github.com/seefan/gossdb/conf"
	"log"
)

func main() {
	pool, err := gossdb.NewPool(&conf.Config{
		Host:             "127.0.0.1",
		Port:             8888,
		MinPoolSize:      5,
		MaxPoolSize:      50,
		AcquireIncrement: 5,
	})
	if err != nil {
		log.Fatal(err)
		return
	}

	c, err := pool.NewClient()
	if err != nil {
		log.Println(err.Error())
		return
	}
	defer c.Close()
	c.Set("http://127.0.0.1",`try{BusuanziCallback_619841523380({"site_uv":10,"page_pv":1,"version":2.4,"site_pv":407});}catch(e){}`)
	re, err := c.Get("http://127.0.0.1")
	if err != nil {
		log.Println(err)
	} else {
		log.Println(re)
	}


	s := g.Server()
	s.BindHandler("/busuanzi", func(r *ghttp.Request) {
		r.Response.Write(`try{BusuanziCallback_619841523380({"site_uv":10,"page_pv":1,"version":2.4,"site_pv":407});}catch(e){}`)
	})
	s.SetPort(5040)
	s.Run()


}

