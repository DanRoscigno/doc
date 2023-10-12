"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41414],{34255:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese31"},l="split_part",c={id:"sql-reference/sql-functions/string-functions/split_part",title:"split_part",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/split_part.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split_part",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/split_part",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/split_part.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"split",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/split"},next:{title:"starts_with",permalink:"/doc/zh/docs/sql-reference/sql-functions/string-functions/starts_with"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"split_part",children:"split_part"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u5206\u5272\u7b26\u62c6\u5206\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u6307\u5b9a\u7684\u5206\u5272\u90e8\u5206\uff08\u4ece 1 \u5f00\u59cb\u8ba1\u6570\uff09\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"split_part(content, delimiter, field)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"content"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"delimiter"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"field"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n|split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\nMySQL > select split_part(\"hello world\", \" \", 2);\n+-----------------------------------+\n| split_part('hello world', ' ', 2) |\n+-----------------------------------+\n| world                             |\n+-----------------------------------+\n\nMySQL > select split_part(\"2019\u5e747\u67088\u53f7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5e747\u67088\u53f7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5e747                                 |\n+-----------------------------------------+\n\nMySQL > select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);