"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23584],{50978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(85893),t=r(11151);const c={displayed_sidebar:"Chinese31"},l="parse_url",i={id:"sql-reference/sql-functions/string-functions/parse_url",title:"parse_url",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/parse_url.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/parse_url",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/parse_url",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/parse_url.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"null_or_empty",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/null_or_empty"},next:{title:"repeat",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/repeat"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"parse_url",children:"parse_url"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u76ee\u6807 URL \u4e2d\u63d0\u53d6\u4e00\u90e8\u5206\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"parse_url(expr1,expr2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"}),": \u76ee\u6807 URL\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr2"}),": \u5f85\u63d0\u53d6\u7684\u4fe1\u606f\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u53d6\u503c\u5982\u4e0b\uff0c\u6ce8\u610f\u53d6\u503c",(0,s.jsx)(n.strong,{children:"\u5927\u5c0f\u5199\u654f\u611f"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PROTOCOL"}),"\n",(0,s.jsx)(n.li,{children:"HOST"}),"\n",(0,s.jsx)(n.li,{children:"PATH"}),"\n",(0,s.jsx)(n.li,{children:"REF"}),"\n",(0,s.jsx)(n.li,{children:"AUTHORITY"}),"\n",(0,s.jsx)(n.li,{children:"FILE"}),"\n",(0,s.jsx)(n.li,{children:"USERINFO"}),"\n",(0,s.jsxs)(n.li,{children:["QUERY\uff08\u4e0d\u652f\u6301\u8fd4\u56de QUERY \u91cc\u9762\u7684\u7279\u5b9a\u53c2\u6570\u3002\u5982\u679c\u60a8\u60f3\u8fd4\u56de\u7279\u5b9a\u53c2\u6570\uff0c\u53ef\u4ee5\u914d\u5408 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/trim",children:"trim"})," \u51fd\u6570\u4f7f\u7528\uff0c\u89c1\u793a\u4f8b\u3002\uff09"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u8f93\u5165\u7684 URL \u5b57\u7b26\u4e32\u65e0\u6548\uff0c\u8fd4\u56de\u62a5\u9519\u3002\u5982\u679c\u672a\u627e\u5230\u8bf7\u6c42\u7684\u4fe1\u606f\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select parse_url('http://facebook.com/path/p1.php?query=1', 'HOST');\n+--------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'HOST') |\n+--------------------------------------------------------------+\n| facebook.com                                                 |\n+--------------------------------------------------------------+\n\nselect parse_url('http://facebook.com/path/p1.php?query=1', 'AUTHORITY');\n+-------------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'AUTHORITY') |\n+-------------------------------------------------------------------+\n| facebook.com                                                      |\n+-------------------------------------------------------------------+\n\nselect parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY');\n+---------------------------------------------------------------+\n| parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY') |\n+---------------------------------------------------------------+\n| query=1                                                       |\n+---------------------------------------------------------------+\n\nselect trim(parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY'),'query='); \n+-------------------------------------------------------------------------------+\n| trim(parse_url('http://facebook.com/path/p1.php?query=1', 'QUERY'), 'query=') |\n+-------------------------------------------------------------------------------+\n| 1                                                                             |\n+-------------------------------------------------------------------------------+\n\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>c});var s=r(67294);const t=s.createContext({});function c(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||l:c(e),s.createElement(t.Provider,{value:i},n)}}}]);