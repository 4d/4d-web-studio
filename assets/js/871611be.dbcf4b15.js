(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[116],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(m,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7518:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={id:"WebFormItemClass",title:"WebFormItem"},m=void 0,s={unversionedId:"API/WebFormItemClass",id:"API/WebFormItemClass",isDocsHomePage:!1,title:"WebFormItem",description:"When working in 4D Web Studio, the WebFormItem class allows you to handle the behavior of webform components on the server side.",source:"@site/docs/API/WebFormItemClass.md",sourceDirName:"API",slug:"/API/WebFormItemClass",permalink:"/4d-web-studio/docs/API/WebFormItemClass",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/API/WebFormItemClass.md",version:"current",frontMatter:{id:"WebFormItemClass",title:"WebFormItem"},sidebar:"apiSidebar",previous:{title:"WebForm",permalink:"/4d-web-studio/docs/API/WebFormClass"}},p=[{value:"WebFormItem Objects",id:"webformitem-objects",children:[]},{value:".hide()",id:"hide",children:[]},{value:".show()",id:"show",children:[]},{value:".addCSSClass()",id:"addcssclass",children:[]},{value:".removeCSSClass()",id:"removecssclass",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When working in 4D Web Studio, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WebFormItem")," class allows you to handle the behavior of webform components on the server side."),(0,o.kt)("h3",{id:"webformitem-objects"},"WebFormItem Objects"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," objects are properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," object returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Web Form")," command. "),(0,o.kt)("p",null,"When you call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Web Form")," command, the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," object holds as many ",(0,o.kt)("inlineCode",{parentName:"p"},"4D.WebFormItems")," as there are components with ",(0,o.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/create-webform#server-side-reference"},"server-side references")," in your webform."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"WebFormObject.myImage")," refers to the image component with ",(0,o.kt)("inlineCode",{parentName:"p"},"myImage")," as server reference."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," objects have class functions that allow you to modify the behavior of webforms and their components."),(0,o.kt)("h2",{id:"hide"},".hide()"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),"|Version|Changes| |---|---| |v19 R3|Added|"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".hide()")),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},".hide()")," function ","hides the component","."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("p",null,"To call a function that hides an image when the user clicks a button: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"myImage"),"."),(0,o.kt)("li",{parentName:"ol"},"Create an exposed function named ",(0,o.kt)("inlineCode",{parentName:"li"},"isHidden")," that contains the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var $myComponent: 4D.WebFormItem\n\n$myComponent:=Web Form.myImage\n$myComponent.hide() // Hide the component that has "myImage" as server reference \n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the Button component and add an ",(0,o.kt)("inlineCode",{parentName:"li"},"onclick")," event to it."),(0,o.kt)("li",{parentName:"ol"},"Attach the ",(0,o.kt)("inlineCode",{parentName:"li"},"isHidden")," function to the event.")),(0,o.kt)("h2",{id:"show"},".show()"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),"|Version|Changes| |---|---| |v19 R3|Added|"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".show()")),(0,o.kt)("h4",{id:"description-1"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},".show")," function ","makes the component visible","."),(0,o.kt)("h2",{id:"addcssclass"},".addCSSClass()"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),"|Version|Changes| |---|---| |v19 R3|Added|"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".addCSSClass"),"(",(0,o.kt)("em",{parentName:"p"},"className")," : Text)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"className"),(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:"center"},"->"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the CSS class to add to the component")))),(0,o.kt)("h4",{id:"description-2"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},".addCSSClass")," function ","adds the class specified in ",(0,o.kt)("em",{parentName:"p"},"className")," to the component","."),(0,o.kt)("h2",{id:"removecssclass"},".removeCSSClass()"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"History"),"|Version|Changes| |---|---| |v19 R3|Added|"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},".removeCSSClass"),"(",(0,o.kt)("em",{parentName:"p"},"className"),": Text)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"className"),(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:"center"},"->"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the CSS class to remove from the component")))),(0,o.kt)("h4",{id:"description-3"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},".removeCSSClass()")," function ","removes the class specified in ",(0,o.kt)("em",{parentName:"p"},"className")," from the component","."))}d.isMDXComponent=!0}}]);