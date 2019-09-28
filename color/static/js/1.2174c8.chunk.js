(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{41:function(e,t,r){"use strict";var a=r(1),n=r(0),i=r.n(n);const l=a.default.div`
  padding: 0;

  margin-bottom: 0.2rem;

  .circular-chart {
    display: block;
    max-width: 2.4rem;
    .circle-bg {
      fill: rgba(255, 255, 255, 0.8);
      stroke: #eee;
      stroke-width: 4.2;
    }
    .circle {
      fill: rgba(255, 255, 255, 0.6);
      stroke-width: 3.2;
      stroke-linecap: round;
      transition: all 1s ease-out;
    }
    .percentage {
      font-family: sans-serif;
      font-size: 0.5em;
      text-anchor: middle;
      font-weight: bold;
    }
  }
  &.percent .circular-chart {
    min-width: unset;
    overflow: unset;
    .circle-bg {
      stroke: none;
    }
    .circle {
      stroke-width: 8;
      stroke-linecap: butt;
    }
  }
`;t.a=({progress:e=10,color:t="#333",type:r=""})=>i.a.createElement(l,{className:`${"percent"==r?"percent":""}`,color:t},i.a.createElement("svg",{viewBox:"0 0 36 36",className:"circular-chart orange"},i.a.createElement("path",{className:"circle-bg",d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),i.a.createElement("path",{className:"circle",style:{stroke:t},strokeDasharray:`${e}, 100`,d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),"percent"!==r&&i.a.createElement("text",{x:"18",y:"22",style:{fill:t},className:"percentage"},e)))},51:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(1);function l(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&("visible"!==e&&"clip"!==e)}function c(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)}return!1}function s(e,t,r,a,n,i,l,o){return i<e&&l>t||i>e&&l<t?0:i<=e&&o<=r||l>=t&&o>=r?i-e-a:l>t&&o<r||i<e&&o>r?l-t+n:0}var d=function(e,t){var r=t.scrollMode,a=t.block,n=t.inline,i=t.boundary,o=t.skipOverflowHiddenElements,d="function"==typeof i?i:function(e){return e!==i};if(!l(e))throw new TypeError("Invalid target");for(var m=document.scrollingElement||document.documentElement,f=[],g=e;l(g)&&d(g);){if((g=g.parentNode)===m){f.push(g);break}g===document.body&&c(g)&&!c(document.documentElement)||c(g,o)&&f.push(g)}for(var p=window.visualViewport?visualViewport.width:innerWidth,u=window.visualViewport?visualViewport.height:innerHeight,h=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,w=e.getBoundingClientRect(),v=w.height,y=w.width,x=w.top,E=w.right,k=w.bottom,N=w.left,M="start"===a||"nearest"===a?x:"end"===a?k:x+v/2,W="center"===n?N+y/2:"end"===n?E:N,C=[],j=0;j<f.length;j++){var $=f[j],H=$.getBoundingClientRect(),O=H.height,B=H.width,T=H.top,z=H.right,I=H.bottom,R=H.left;if("if-needed"===r&&x>=0&&N>=0&&k<=u&&E<=p&&x>=T&&k<=I&&N>=R&&E<=z)return C;var V=getComputedStyle($),Y=parseInt(V.borderLeftWidth,10),q=parseInt(V.borderTopWidth,10),L=parseInt(V.borderRightWidth,10),X=parseInt(V.borderBottomWidth,10),D=0,J=0,S="offsetWidth"in $?$.offsetWidth-$.clientWidth-Y-L:0,G="offsetHeight"in $?$.offsetHeight-$.clientHeight-q-X:0;if(m===$)D="start"===a?M:"end"===a?M-u:"nearest"===a?s(b,b+u,u,q,X,b+M,b+M+v,v):M-u/2,J="start"===n?W:"center"===n?W-p/2:"end"===n?W-p:s(h,h+p,p,Y,L,h+W,h+W+y,y),D=Math.max(0,D+b),J=Math.max(0,J+h);else{D="start"===a?M-T-q:"end"===a?M-I+X+G:"nearest"===a?s(T,I,O,q,X+G,M,M+v,v):M-(T+O/2)+G/2,J="start"===n?W-R-Y:"center"===n?W-(R+B/2)+S/2:"end"===n?W-z+L+S:s(R,z,B,Y,L+S,W,W+y,y);var K=$.scrollLeft,A=$.scrollTop;M+=A-(D=Math.max(0,Math.min(A+D,$.scrollHeight-O+G))),W+=K-(J=Math.max(0,Math.min(K+J,$.scrollWidth-B+S)))}C.push({el:$,top:D,left:J})}return C};function m(e){return e===Object(e)&&0!==Object.keys(e).length}var f=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(m(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:d(e,t));if(!r){var a=function(e){return!1===e?{block:"end",inline:"nearest"}:m(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var a=e.el,n=e.top,i=e.left;a.scroll&&r?a.scroll({top:n,left:i,behavior:t}):(a.scrollTop=n,a.scrollLeft=i)}))}(d(e,a),a.behavior)}},g=r(41);const p=i.default.div`
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
`;var u=({progress:e=10,color:t="rgba(102, 87, 87, 0.96)"})=>n.a.createElement(p,null,n.a.createElement(g.a,{progress:e,color:t,type:"percent"}));const h=i.default.li.attrs(({color:e})=>({style:{borderTopColor:e}}))`
  color: #fff;
  border-top: 0.4rem solid;
  display: flex;
  flex-direction: row;
  writing-mode: vertical-lr;
  padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  margin: 0.4rem;
  cursor: pointer;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: all 0.5s;
  align-self: flex-start;
  opacity: 0.8;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  &.curr {
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    text-shadow: 0 0 10px black;
  }
  .line1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    min-height: 6.4rem;
    .name {
      color: ${({color:e})=>e};
      writing-mode: vertical-lr;
      align-self: flex-end;
      font-size: 0.8rem;
      margin-left: 0.2rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      height: 100%;
      .seq {
        opacity: 0.5;
      }
    }
    .cmyk {
      display: flex;
      justify-content: space-between;
      .circle:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }
  .line2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    color: #fff;
    .hex {
      font-size: 0.6rem;
    }
    .pinyin {
      text-transform: capitalize;
    }
    .rgb {
      display: flex;
      flex-direction: column;
      .line {
        /* background-image: linear-gradient(180deg, #ddd 45%, #fff 40%); */
        width: 2px;
        height: 6rem;
        margin: 0 1px;
        &.r {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({rgb:e})=>e[0]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[0]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.g {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({rgb:e})=>e[1]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[1]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.b {
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255) 0%,
            rgba(255, 255, 255) ${({rgb:e})=>e[2]/255*100}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>e[2]/255*100}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
      }
    }
  }
`;t.default=({setCurrColor:e,seq:t=1,isCurr:r,hex:i,name:l,pinyin:o,CMYK:c,RGB:s,intro:d})=>{const[m,g,p]=s,[b,w,v,y]=c,x=Object(a.useRef)(null);return Object(a.useEffect)(()=>{r&&f(x.current,{behavior:"smooth",block:"center",scrollMode:"if-needed"})},[r]),n.a.createElement(h,{ref:x,rgb:s,className:r&&"curr",onClick:e.bind(null,l),color:i,title:d||null},n.a.createElement("div",{className:"line1"},n.a.createElement("div",{className:"cmyk"},n.a.createElement("i",{className:"circle c"},n.a.createElement(u,{progress:b})),n.a.createElement("i",{className:"circle m"},n.a.createElement(u,{progress:w})),n.a.createElement("i",{className:"circle y"},n.a.createElement(u,{progress:v})),n.a.createElement("i",{className:"circle k"},n.a.createElement(u,{progress:y}))),n.a.createElement("h2",{className:"name"},n.a.createElement("span",{className:"seq"},t),n.a.createElement("span",{className:"txt"},l))),n.a.createElement("div",{className:"line2"},n.a.createElement("p",{className:"hex"},i),n.a.createElement("div",{className:"rgb"},n.a.createElement("i",{className:"line r",percent:m}),n.a.createElement("i",{className:"line g",percent:g}),n.a.createElement("i",{className:"line b",percent:p})),n.a.createElement("p",{className:"pinyin"},o)))}}}]);