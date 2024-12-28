"use strict";(self.webpackChunknodegui=self.webpackChunknodegui||[]).push([[4110],{68053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const r={sidebar_label:"Networking",title:"Networking"},i=void 0,a={id:"guides/networking",title:"Networking",description:"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/docs/guides/networking.md",sourceDirName:"guides",slug:"/guides/networking",permalink:"/docs/guides/networking",draft:!1,unlisted:!1,editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/guides/networking.md",tags:[],version:"current",frontMatter:{sidebar_label:"Networking",title:"Networking"},sidebar:"guides",previous:{title:"Drag and drop",permalink:"/docs/guides/drag-drop"},next:{title:"Helpful Links",permalink:"/docs/guides/helpful-links"}},c={},d=[{value:"Using Node Fetch",id:"using-node-fetch",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Many apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."}),"\n",(0,o.jsx)(t.p,{children:"Remember that NodeGui apps do not run in a browser and hence do not have access to browser apis. NodeGui app is essentially a Node.js app."}),"\n",(0,o.jsxs)(t.p,{children:["And in a typical Node.js application you would use a third party library like ",(0,o.jsx)(t.a,{href:"https://github.com/axios/axios",children:"axios"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/node-fetch/node-fetch",children:"node-fetch"})," or ",(0,o.jsx)(t.a,{href:"https://github.com/niftylettuce/frisbee",children:"frisbee"})," for achieving this functionality."]}),"\n",(0,o.jsx)(t.h2,{id:"using-node-fetch",children:"Using Node Fetch"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/node-fetch/node-fetch",children:"Node Fetch"})," is a light-weight module that brings window.fetch to Node.js."]}),"\n",(0,o.jsx)(t.p,{children:"An example usage would look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const fetch = require('node-fetch');\nasync function getData() {\n    try {\n        let response = await fetch('https://somewebsite.com/some.json');\n        let responseJson = await response.json();\n        return responseJson.somecontent;\n    } catch (error) {\n        console.error(error);\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Take a look at the ",(0,o.jsx)(t.a,{href:"https://github.com/node-fetch/node-fetch",children:"Node Fetch docs"})," for a full list of properties."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);