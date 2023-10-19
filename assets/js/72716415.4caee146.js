"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62692],{98701:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(85893),r=n(11151);const i={displayed_sidebar:"English"},c="strright",o={id:"sql-reference/sql-functions/string-functions/strright",title:"strright",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/strright.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strright",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/strright",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/strright.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"strleft",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/strleft"},next:{title:"substring, substr",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/substring"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"strright",children:"strright"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["This function extracts a number of characters from a string with specified length (starting from right). The unit for length: utf-8 character.\nNote: This function is also named as ",(0,t.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-functions/string-functions/right",children:"right"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"VARCHAR strright(VARCHAR str,INT len)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"MySQL > select strright(\"Hello starrocks\",9);\n+--------------------------------+\n| strright('Hello starrocks', 9) |\n+--------------------------------+\n| starrocks                      |\n+--------------------------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"STRRIGHT"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:o},s)}}}]);