(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(467)),i={sidebar_label:"Synopsis",title:"Synopsis"},s={unversionedId:"api/manual/synopsis",id:"api/manual/synopsis",isDocsHomePage:!1,title:"Synopsis",description:"How to use Node.js and NodeGui's APIs.",source:"@site/docs/api/manual/synopsis.md",slug:"/api/manual/synopsis",permalink:"/docs/api/manual/synopsis",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/manual/synopsis.md",version:"current",sidebar_label:"Synopsis",sidebar:"api",next:{title:"CacheTestQObject",permalink:"/docs/api/generated/classes/cachetestqobject"}},c=[{value:"Destructuring assignment",id:"destructuring-assignment",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"How to use Node.js and NodeGui's APIs.")),Object(a.b)("p",null,"All of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/"}),"Node.js's built-in modules")," are available in\nNodeGui. Also, third-party node modules that are known to work with Node.Js are fully supported as well (including\nthe native node modules)."),Object(a.b)("p",null,"Apart from Node.Js ecosystem, NodeGui also provides some extra built-in widget and modules for developing native\ndesktop applications. So, you can think of NodeGui as NodeJs + Gui Widgets powered by Qt."),Object(a.b)("p",null,"The app script is like a normal Node.js script:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const { QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nwin.show();\n\nglobal.win = win; // To prevent win from being garbage collected.\n')),Object(a.b)("p",null,"To run your app, read ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/tutorial"}),"Run your app"),"."),Object(a.b)("h2",{id:"destructuring-assignment"},"Destructuring assignment"),Object(a.b)("p",null,"You can use\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}),"destructuring assignment")," to make it easier to use\nbuilt-in modules."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'const {\n  QMainWindow,\n  QWidget,\n  QLabel,\n  FlexLayout\n} = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\n\nconst centralWidget = new QWidget();\ncentralWidget.setObjectName("myroot");\nconst rootLayout = new FlexLayout();\ncentralWidget.setLayout(rootLayout);\n\nconst label = new QLabel();\nlabel.setInlineStyle("font-size: 16px; font-weight: bold;");\nlabel.setText("Hello World");\n\nrootLayout.addWidget(label);\nwin.setCentralWidget(centralWidget);\nwin.setStyleSheet(\n  `\n    #myroot {\n      background-color: #009688;\n    }\n  `\n);\nwin.show();\n\nglobal.win = win;\n')))}u.isMDXComponent=!0},467:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);