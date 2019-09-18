package main

import (
	"github.com/gogf/gf/g"
	"github.com/gogf/gf/g/net/ghttp"
	log "github.com/gogf/gf/g/os/glog"
)

func main() {



	s := g.Server()
	s.BindHandler("/", func(r *ghttp.Request) {
		log.Debug("index")
		r.Response.Write("index！")
	})

	s.BindHandler("/ip", func(r *ghttp.Request) {
		log.Debug("ip")
		r.Response.Write("ip！")
	})

	log.Debug("listen on 8112")
	s.SetPort(8112)
	s.Run()
}
