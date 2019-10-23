package main

import (
	"encoding/json"
	"fmt"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/seefan/gossdb"
	"github.com/seefan/gossdb/conf"
	"log"
)

type ReqUrlParam struct {
	JsonpCallback  string `params:"jsonpCallback"`
}

type SiteUvPv struct {
	SiteUv  int     `json:"site_uv"`
	PagePv  int     `json:"page_pv"`
	Version float64 `json:"version"`
	SitePv  int     `json:"site_pv"`
}
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

	s := g.Server()
	s.BindHandler("/pushtsua", func(r *ghttp.Request) {
		params := new(ReqUrlParam)
		r.GetToStruct(params)
		fmt.Println("params"+params.JsonpCallback)
		fmt.Println("param %v",params)

		refererstr := r.Header.Get("referer")
		fmt.Println(refererstr)

		strstr, err := c.Get(refererstr)
		if err != nil {
			log.Println(err)
		}

		if len(strstr) > 0 {
			fmt.Println(strstr)

			var pv SiteUvPv
			// 将字符串反解析为结构体
			json.Unmarshal([]byte(strstr), &pv)
			fmt.Println(pv) //

			pv.PagePv = pv.PagePv+1

			//Marshal失败时err!=nil
			marstr, err := json.Marshal(pv)
			if err != nil {
				fmt.Println("生成json字符串错误")
			}

			fmt.Println(string(marstr))
			c.Set(refererstr,string(marstr))

			r.Response.Write(`try{`+params.JsonpCallback+`(`+string(marstr)+`);}catch(e){}`)

		}else{
			pv :=&SiteUvPv{
				SiteUv:1,
				SitePv:1,
				PagePv:1,
			}

			//Marshal失败时err!=nil
			marstr, err := json.Marshal(pv)
			if err != nil {
				fmt.Println("生成json字符串错误")
			}
			c.Set(refererstr,marstr)

			r.Response.Write(`try{`+params.JsonpCallback+`({"site_uv":1,"page_pv":1,"version":2.4,"site_pv":1});}catch(e){}`)
		}

	})
	s.SetPort(5040)
	s.Run()


}

