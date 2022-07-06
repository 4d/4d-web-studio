(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[45],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,p=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(p,i(i({ref:t},m),{},{components:r})):n.createElement(p,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6881:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return f}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={id:"create-webform",title:"Creating a webform"},c=void 0,l={unversionedId:"design-webforms/create-webform",id:"design-webforms/create-webform",isDocsHomePage:!1,title:"Creating a webform",description:"Creating a webform",source:"@site/docs/design-webforms/create-webform.md",sourceDirName:"design-webforms",slug:"/design-webforms/create-webform",permalink:"/4d-web-studio/docs/design-webforms/create-webform",editUrl:"https://github.com/4d/go-mobile/edit/main/docs/design-webforms/create-webform.md",version:"current",frontMatter:{id:"create-webform",title:"Creating a webform"},sidebar:"docs",previous:{title:"About license usage",permalink:"/4d-web-studio/docs/configuration/license-usage"},next:{title:"Components",permalink:"/4d-web-studio/docs/design-webforms/components"}},m=[{value:"Creating a webform",id:"creating-a-webform",children:[]},{value:"Webform Editor Interface",id:"webform-editor-interface",children:[]},{value:"Uploading images",id:"uploading-images",children:[]}],u={toc:m};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-a-webform"},"Creating a webform"),(0,a.kt)("p",null,"In 4D Web Studio, everything starts with a webform. A webform is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application."),(0,a.kt)("p",null,"To create a webform:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"from the homepage, click ",(0,a.kt)("strong",{parentName:"li"},"Webform")," and enter a name for the new webform"),(0,a.kt)("li",{parentName:"ul"},"from the Webform Editor, click the ",(0,a.kt)("strong",{parentName:"li"},"New +")," tab > ",(0,a.kt)("strong",{parentName:"li"},"Webform"))),(0,a.kt)("h2",{id:"webform-editor-interface"},"Webform Editor Interface"),(0,a.kt)("p",null,"The Webform Editor provides several tools to customize the interface and contents of your application:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"interface",src:r(6538).Z})),(0,a.kt)("ol",{class:"interface-numbers"},(0,a.kt)("li",{class:"interface-item"},"Explorer: Displays your project's webforms, methods and classes."),(0,a.kt)("li",{class:"interface-item"},"Tabs: They let you keep track of your currently opened elements, such as your forms and methods."),(0,a.kt)("li",{class:"interface-item"},"Components: The building blocks of your application."),(0,a.kt)("li",{class:"interface-item"},"Data Sources: Create and explore your datasources."),(0,a.kt)("li",{class:"interface-item"},"Styles Library: Holds predefined and customized styles for your components."),(0,a.kt)("li",{class:"interface-item"},"Outline: Presents the structure of your webform and allows you to navigate between the different elements. "),(0,a.kt)("li",{class:"interface-item"},"Canvas: This is where you combine your components, styles and datasources. You can drag and drop components onto your canvas, then drag and drop CSS classes and datasources onto these components, and preview or render your webforms."),(0,a.kt)("li",{class:"interface-item"},"Properties panel: Allows for advanced style customization. Also allows binding datasources to components."),(0,a.kt)("li",{class:"interface-item"},"Contextual configuration panel: Link events and methods to your components, edit CSS styles, etc."),(0,a.kt)("li",{class:"interface-item-2"}," Header: Save and preview your work, access the Data Explorer as well as additional settings.")),(0,a.kt)("h2",{id:"uploading-images"},"Uploading images"),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"/4d-web-studio/docs/design-webforms/components#component-list"},"Image")," component, you can upload an image to the studio and display it in your application. That image is available to all the webforms in your project and is stored in the ",(0,a.kt)("strong",{parentName:"p"},"Explorer")," panel > ",(0,a.kt)("strong",{parentName:"p"},"Assets")," > ",(0,a.kt)("strong",{parentName:"p"},"Images"),"."))}f.isMDXComponent=!0},6538:function(e,t,r){"use strict";t.Z=r.p+"assets/images/web-form-editor-interface-38963a6a0b857f82617c4ee6deffa902.png"}}]);