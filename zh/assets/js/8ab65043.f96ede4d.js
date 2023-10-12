"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23385],{12428:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese31"},c="trim",l={id:"sql-reference/sql-functions/string-functions/trim",title:"trim",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/trim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/trim",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/trim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/trim.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"substring, substr",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/substring"},next:{title:"ucase",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/ucase"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"trim",children:"trim"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u5b57\u7b26\u4e32\u7684\u5de6\u4fa7\u548c\u53f3\u4fa7\u79fb\u9664\u8fde\u7eed\u51fa\u73b0\u7684\u7a7a\u683c\u6216\u6307\u5b9a\u7684\u5b57\u7b26\u3002\u4ece 2.5.0 \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u4ece\u5b57\u7b26\u4e32\u4e2d\u79fb\u9664\u6307\u5b9a\u5b57\u7b26\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"trim(str[,characters]);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"str"}),": \u5fc5\u9009\uff0c\u8981\u88c1\u526a\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"characters"}),": \u53ef\u9009\uff0c\u8981\u79fb\u9664\u7684\u5b57\u7b26\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u9ed8\u8ba4\u79fb\u9664\u7a7a\u683c\u3002\u5982\u679c\u8be5\u53c2\u6570\u4e3a\u7a7a\u5b57\u7b26\uff0c\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u5de6\u4fa7\u548c\u53f3\u4fa7\u5171 5 \u4e2a\u7a7a\u683c\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT trim(\"   ab c  \");\n+-------------------+\n| trim('   ab c  ') |\n+-------------------+\n| ab c              |\n+-------------------+\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u79fb\u9664\u5b57\u7b26\u4e32\u4e2d\u5de6\u4fa7\u548c\u53f3\u4fa7\u7684\u6307\u5b9a\u5b57\u7b26\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT trim(\"abcd\", \"ad\");\n+--------------------+\n| trim('abcd', 'ad') |\n+--------------------+\n| bc                 |\n+--------------------+\n\nMySQL > SELECT trim(\"xxabcdxx\", \"x\");\n+-----------------------+\n| trim('xxabcdxx', 'x') |\n+-----------------------+\n| abcd                  |\n+-----------------------+\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/rtrim",children:"rtrim"})}),"\n"]})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>t});var i=s(67294);const r=i.createContext({});function t(n){const e=i.useContext(r);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:t(n),i.createElement(r.Provider,{value:l},e)}}}]);