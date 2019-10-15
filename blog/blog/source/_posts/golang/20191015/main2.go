package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	fmt.Println("helo")
	ReSetPhotoNames2()
}

func ReSetPhotoNames2() {
	photoFolder := "E:\\app\\im-ai\\knowledge-base\\blog\\blog\\source\\_posts\\golang\\20191015"

	files, _ := ioutil.ReadDir(photoFolder)
	for _, file := range files {
		if file.IsDir() {
			continue
		} else {
			fileName := file.Name()
			dotIndex := strings.LastIndex(fileName, ".")
			if fileName[dotIndex:] == ".md"{
				fpath := photoFolder + "\\" + fileName
				fmt.Println(fpath)
				title := fileName[:dotIndex]
				fmt.Println(title)
				bytes, err := ioutil.ReadFile(fpath)
				if err != nil {
					fmt.Println("error : %s", err)
					continue
				}
				content := string(bytes)
				prx :=`---
title: go入门教程-`+title+`   
date: 2019-09-16 17:48:16   
categories: Java   
tags: [java]   
---
`;

				fmt.Println(prx+content)
			}

		}
	}
}
