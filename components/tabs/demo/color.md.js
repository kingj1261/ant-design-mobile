webpackJsonp([61],{3:function(n,t,a){"use strict";a(7),a(6)},6:function(n,t){},7:function(n,t){},14:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),u=e(r),k=a(2),f=s(k),d=function(n){function t(){return c(this,t),i(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.size,e=t.className,o=t.style,c=t.onClick,i=(0,f["default"])((n={},p(n,""+a,!0),p(n,e,!!e),p(n,a+"-ws"+s,!0),n));return u.createElement("div",{className:i,style:o,onClick:c})},t}(u.Component);t["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},15:function(n,t,a){"use strict";a(3),a(17)},17:function(n,t){},97:function(n,t,a){"use strict";a(3),a(99)},99:function(n,t){},265:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function r(n){var t=void 0;return k.Children.forEach(n.children,function(n){t||(t=n.key)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(1),k=e(u),f=a(2),d=s(f),y=a(266),v=s(y),b=function(n){function t(a){c(this,t);var s=i(this,n.call(this,a));s.onTabClick=function(n){var t=s.props,a=t.onTabClick,e=t.onChange;s.setActiveKey(n),a(n),s.state.activeKey!==n&&e(n)};var e=void 0;return e="activeKey"in a?a.activeKey:"defaultActiveKey"in a?a.defaultActiveKey:r(a),s.state={activeKey:e,tabMovingDirection:"forward"},s}return l(t,n),t.prototype.componentDidMount=function(){var n=this.state.activeKey,t=this.getIndexPair(this.props,n,n),a=t.nextIndex,s=t.paneLength;this.setInkBarStyle(s,a)},t.prototype.componentWillReceiveProps=function(n){var t=this.state.activeKey;if("activeKey"in n&&(t=n.activeKey,!t))return void this.setState({activeKey:t});var a=void 0;k.Children.forEach(n.children,function(n){n.key===t&&(a=!0)}),a?this.setActiveKey(t,n):this.setActiveKey(r(n),n)},t.prototype.getIndexPair=function(n,t,a){var s=[];k.Children.forEach(n.children,function(n){s.push(n.key)});var e=s.indexOf(t),o=s.indexOf(a);return{currentIndex:e,nextIndex:o,paneLength:s.length}},t.prototype.getPanes=function(){var n=this,t=this.props,a=t.children,s=t.prefixCls,e=t.animation,o=t.underlineColor,p=t.activeUnderlineColor,c=t.textColor,i=t.activeTextColor,l=[];return k.Children.forEach(a,function(t,a){l.push(k.cloneElement(t,{rootPrefixCls:s,activeKey:n.state.activeKey,onTabClick:n.onTabClick,itemKey:t.key,animation:e,key:t.key,underlineColor:o,activeUnderlineColor:p,textColor:c,activeTextColor:i}))}),l},t.prototype.setActiveKey=function(n,t){var a=t||this.props,s=this.state.activeKey;if(!(s===n||"activeKey"in a&&a===this.props))if(s){var e=this.getIndexPair(a,s,n),o=e.currentIndex,p=e.nextIndex,c=e.paneLength,i=o>p?"backward":"forward";this.setState({activeKey:n,tabMovingDirection:i}),this.setInkBarStyle(c,p)}else this.setState({activeKey:n})},t.prototype.setInkBarStyle=function(n,t){var a=t*(100/n)+"%",s=(n-t-1)*(100/n)+"%";this.refs.inkbar.style.left=a,this.refs.inkbar.style.right=s},t.prototype.render=function(){var n,t,a=this.props,s=a.className,e=a.animation,o=a.children,c=a.prefixCls,i=a.tabPosition,l=a.activeUnderlineColor,r=(0,d["default"])((n={},p(n,c+"-ink-bar",!0),p(n,c+"-ink-bar-transition-"+this.state.tabMovingDirection,e),n)),u=k.createElement("div",{ref:"inkbar",key:"inkbar",className:r,style:{backgroundColor:l}}),f=[this.getPanes(),u];"bottom"===i&&f.reverse();var y=[k.createElement("div",{key:"pane",className:c+"-tabpane"},f),k.createElement(v["default"],{key:"content",rootPrefixCls:c,activeKey:this.state.activeKey,contents:o,animation:e,tabMovingDirection:this.state.tabMovingDirection})];"bottom"===i&&y.reverse();var b=(0,d["default"])((t={},p(t,s,!!s),p(t,""+c,!0),p(t,c+"-bottom","bottom"===i),p(t,c+"-no-animation",!e),t));return k.createElement("div",{className:b},y)},t}(k.Component);t["default"]=b,b.defaultProps={prefixCls:"am-tab",onChange:function(n){},onTabClick:function(n){},animation:!0,underlineColor:"#ddd",activeUnderlineColor:"#108ee9",textColor:"#000",activeTextColor:"#108ee9",tabPosition:"top"},n.exports=t["default"]},266:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),u=e(r),k=a(2),f=s(k),d=a(50),y=s(d),v=function(n){function t(){return c(this,t),i(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.active,s=t.rootPrefixCls,e=t.children,o=(0,f["default"])((n={},p(n,s+"-content-item",!0),p(n,s+"-content-item-active",a),n));return u.createElement("div",{className:o},e)},t}(u.Component),b=function(n){function t(){return c(this,t),i(this,n.apply(this,arguments))}return l(t,n),t.prototype.getContents=function(){var n=this.props,t=n.contents,a=n.rootPrefixCls,s=n.activeKey;return t.map(function(n,t){return u.createElement(v,{key:t,rootPrefixCls:a,active:n.key===s},n.props.children)})},t.prototype.render=function(){var n=this.props,t=n.rootPrefixCls,a=n.tabMovingDirection,s=n.animation,e=s?t+"-slide-horizontal-"+(a||"backward"):null;return u.createElement("div",{className:t+"-content"},u.createElement(y["default"],{exclusive:!0,component:"div",showProp:"active",transitionName:e},this.getContents()))},t}(u.Component);t["default"]=b,n.exports=t["default"]},267:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),u=e(r),k=a(2),f=s(k),d=function(n){function t(){return c(this,t),i(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,a=t.rootPrefixCls,s=t.itemKey,e=t.tab,o=t.activeKey,c=t.onTabClick,i=t.underlineColor,l=t.activeUnderlineColor,r=t.textColor,k=t.activeTextColor,d=t.animation,y=(0,f["default"])((n={},p(n,a+"-tabpane-item-active",o===s),p(n,a+"-tabpane-item",!0),n));return u.createElement("div",{className:y,onClick:function(){return c(s)},style:{color:o===s?k:r,borderColor:d||o!==s?i:l}},e)},t}(u.Component);t["default"]=d,n.exports=t["default"]},268:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(265),o=s(e),p=a(267),c=s(p);o["default"].TabPane=c["default"],t["default"]=o["default"],n.exports=t["default"]},269:function(n,t,a){"use strict";a(3),a(286),a(97)},286:function(n,t){},797:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(15),a(14)),o=s(e),p=(a(269),a(268)),c=s(p),i=a(1),l=s(i),r=a(4);s(r);n.exports={content:[["p","text & line \u989c\u8272\u81ea\u5b9a\u4e49"]],meta:{order:3,title:"\u81ea\u5b9a\u4e49\u989c\u8272",filename:"components/tabs/demo/color.md",id:"components-tabs-demo-color"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >callback</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >let</span> TabExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >defaultActiveKey</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >underlineColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>blue<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >activeUnderlineColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>red<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >textColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>yellow<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >activeTextColor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>callback<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n              display<span class="token punctuation" >:</span> <span class="token string" >\'flex\'</span><span class="token punctuation" >,</span> alignItems<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> justifyContent<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n               \u9009\u9879\u5361\u4e00\u5185\u5bb9\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n              display<span class="token punctuation" >:</span> <span class="token string" >\'flex\'</span><span class="token punctuation" >,</span> alignItems<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> justifyContent<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n               \u9009\u9879\u5361\u4e8c\u5185\u5bb9\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n              display<span class="token punctuation" >:</span> <span class="token string" >\'flex\'</span><span class="token punctuation" >,</span> alignItems<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> justifyContent<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n               \u9009\u9879\u5361\u4e09\u5185\u5bb9\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}var t=c["default"].TabPane,a=l["default"].createClass({displayName:"TabExample",render:function(){return l["default"].createElement("div",null,l["default"].createElement(c["default"],{defaultActiveKey:"1",underlineColor:"blue",activeUnderlineColor:"red",textColor:"yellow",activeTextColor:"green",onChange:n},l["default"].createElement(t,{tab:"\u9009\u9879\u5361\u4e00",key:"1"},l["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:100}},"\u9009\u9879\u5361\u4e00\u5185\u5bb9")),l["default"].createElement(t,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},l["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:100}},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9")),l["default"].createElement(t,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},l["default"].createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:100}},"\u9009\u9879\u5361\u4e09\u5185\u5bb9"))),l["default"].createElement(o["default"],null))}});return l["default"].createElement(a,null)}}}});