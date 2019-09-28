(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{50:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),n=r(1);const o=n.default.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1.4rem;
    height: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
`;var l=({currColor:e})=>{const[t,r]=Object(i.useState)(!1);Object(i.useEffect)(()=>{JSON.parse(localStorage.getItem("FAV_COLORS")||"[]").some(t=>t.name==e.name)?r(!0):r(!1)},[e]);return a.a.createElement(o,{onClick:()=>{let i=JSON.parse(localStorage.getItem("FAV_COLORS")||"[]");t?i=i.filter(t=>t.name!=e.name):i.push(e),r(e=>!e),localStorage.setItem("FAV_COLORS",JSON.stringify(i))}},a.a.createElement("svg",{t:"1568172188297",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2640",width:"32",height:"32"},a.a.createElement("path",{d:"M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z","p-id":"2641",fill:t?"#ef7a82":"#fff"})))},s=r(9),m=r(13);var c=n.keyframes`
from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const p=n.default.div`
  display: flex;
  align-self: flex-end;
  font-size: 0.6rem;
  line-height: 1.4;
  padding: 0.4rem;
  margin-top: 1rem;
  text-shadow: 0 0 4px rgba(33, 33, 33, 0.6);
  animation: ${c} 1s forwards;
  &.mobile {
    font-size: 0.8rem;
  }
  > h2 {
    color: inherit;
    font-size: 0.4rem;
    align-self: flex-end;
    writing-mode: vertical-lr;
    margin-right: 0.3rem;
  }
  .line {
    color: inherit;
    writing-mode: vertical-lr;
    letter-spacing: 0.14rem;
    font-weight: bold;
  }
`;var f=({content:e="",author:t="",title:r=""})=>{const{isMobile:i}=Object(s.b)();return a.a.createElement(p,{className:i?"mobile":""},a.a.createElement("h2",null,t," ·《 ",r," 》"),a.a.createElement("p",{className:"line"},"「",e.replace(/[，|。|！|？|、]/g," ").trim(),"」"))};const h=n.default.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: 2rem;
  margin-right: 0.5rem;
  min-height: 18rem;
  &.mobile {
    width: 5.8rem;
    margin-top: 8rem;
    > h1 {
      font-size: 3.6rem;
    }
  }
  &:hover > h1 {
    transform: scale(1.1);
  }

  > h1 {
    color: inherit;
    font-size: 3.2rem;
    letter-spacing: -0.5rem;
    writing-mode: vertical-lr;
    transition: transform 0.4s ease-in;

    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: capitalize;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
    color: inherit;
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    top: -2rem;
    display: flex;
  }
`;t.default=({name:e,pinyin:t,hex:r,RGB:i,CMYK:n})=>{const{isMobile:o}=Object(s.b)(),{poetry:c}=Object(s.d)(e);return a.a.createElement(h,{className:o?"mobile":"",style:{color:Object(m.a)(i)}},a.a.createElement("h1",null,e),a.a.createElement(l,{currColor:{hex:r,name:e,pinyin:t,RGB:i,CMYK:n}}),a.a.createElement("h2",null,t),c&&a.a.createElement(f,c))}}}]);