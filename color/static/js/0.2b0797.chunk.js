(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,r){"use strict";var a=r(1),o=r(0),n=r.n(o);const c=a.default.div`
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
`;t.a=({progress:e=10,color:t="#333",type:r=""})=>n.a.createElement(c,{className:`${"percent"==r?"percent":""}`,color:t},n.a.createElement("svg",{viewBox:"0 0 36 36",className:"circular-chart orange"},n.a.createElement("path",{className:"circle-bg",d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),n.a.createElement("path",{className:"circle",style:{stroke:t},strokeDasharray:`${e}, 100`,d:"M18 2.0845\r a 15.9155 15.9155 0 0 1 0 31.831\r a 15.9155 15.9155 0 0 1 0 -31.831"}),"percent"!==r&&n.a.createElement("text",{x:"18",y:"22",style:{fill:t},className:"percentage"},e)))},42:function(e,t,r){"use strict";var a=r(43).CopyToClipboard;a.CopyToClipboard=a,e.exports=a},43:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=i(r(0)),c=i(r(44));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.onClick=function(e){var t=a.props,r=t.text,o=t.onCopy,i=t.children,l=t.options,s=n.default.Children.only(i),p=(0,c.default)(r,l);o&&o(r,p),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},l(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}(e,["text","onCopy","options","children"]),o=n.default.Children.only(t);return n.default.cloneElement(o,a({},r,{onClick:this.onClick}))}}]),t}(n.default.PureComponent)).defaultProps={onCopy:void 0,options:void 0}},44:function(e,t,r){"use strict";var a=r(45),o="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var r,n,c,i,l,s=!1;t||(t={}),t.debug;try{if(n=a(),c=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){r.stopPropagation(),t.format&&(r.preventDefault(),r.clipboardData.clearData(),r.clipboardData.setData(t.format,e))})),document.body.appendChild(l),c.selectNodeContents(l),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(a){try{window.clipboardData.setData(t.format||"text",e),s=!0}catch(a){r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:o),window.prompt(r,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),l&&document.body.removeChild(l),n()}return s}},45:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],a=0;a<e.rangeCount;a++)r.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},52:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(1),c=r(41),i=r(42);const l=n.default.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    width: 1.4rem;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.3rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
  }
  .copyTip {
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    padding: 0.3rem 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
  }
`;var s=({currColorHex:e})=>{const[t,r]=Object(a.useState)(!1);return o.a.createElement(i.CopyToClipboard,{text:e,onCopy:()=>{r(!0),setTimeout(()=>{r(!1)},1800)}},o.a.createElement(l,{onClick:()=>{}},o.a.createElement("svg",{t:"1568174087144",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7098",width:"36",height:"36"},o.a.createElement("path",{d:"M220.429 838.029c-18.2 0-32.9-14.7-32.9-32.9v-437c0-18.2 14.7-32.9 32.9-32.9h440c18.2 0 32.9 14.7 32.9 32.9v436.9c0 18.2-14.7 32.9-32.9 32.9h-440z m407-65.9v-371.1h-374.1v371.1h374.1z",fill:"#fff","p-id":"7099"}),o.a.createElement("path",{d:"M438.129 254.029c-18.2 0-32.9-14.7-32.9-32.9s14.7-32.9 32.9-32.9h369.6c18.2 0 32.9 14.7 32.9 32.9v363.5c0 18.2-14.7 32.9-32.9 32.9s-32.9-14.7-32.9-32.9v-330.6h-336.7z",fill:"#fff","p-id":"7100"})),o.a.createElement("span",{className:"hex"},e),t?o.a.createElement("span",{className:"copyTip"},"已复制!"):null))};const p=n.default.section`
  color: #333;
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  .item {
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding: 1rem 0.2rem 0.6rem 0.2rem;
    position: relative;
    &.cmyk {
      padding-left: 2.4rem;
    }
    &.rgb {
      color: #fff;
      text-align: right;
      &.r {
        color: rgb(255, 0, 0, 0.8);
      }
      &.g {
        color: rgb(0, 255, 0, 0.8);
      }
      &.b {
        color: rgb(0, 0, 255, 0.8);
      }
    }

    &:before {
      content: attr(data-id);
      text-transform: uppercase;
      position: absolute;
      font-size: 0.5rem;
      font-weight: 800;
      color: #fff;
      top: 0.4rem;
      left: 0;
      text-shadow: 0px 0 6px black;
    }
  }
`;t.default=({CMYK:e,RGB:t=[0,0,0],hex:r,...a})=>{const[n,i,l,d]=e,[m,u,f]=t;return o.a.createElement(p,a,o.a.createElement("div",{className:"item cmyk c","data-id":"c"},o.a.createElement(c.a,{progress:n,color:"#0093D3"})),o.a.createElement("div",{className:"item cmyk m","data-id":"m"},o.a.createElement(c.a,{progress:i,color:"#CC006B"})),o.a.createElement("div",{className:"item cmyk y","data-id":"y"},o.a.createElement(c.a,{progress:l,color:"#FFF10C"})),o.a.createElement("div",{className:"item cmyk k","data-id":"k"},o.a.createElement(c.a,{progress:d,color:"#333"})),o.a.createElement("div",{className:"item rgb r","data-id":"r"},m),o.a.createElement("div",{className:"item rgb g","data-id":"g"},u),o.a.createElement("div",{className:"item rgb b","data-id":"b"},f),o.a.createElement("div",{className:"item","data-id":"hex"},o.a.createElement(s,{currColorHex:r})))}}}]);