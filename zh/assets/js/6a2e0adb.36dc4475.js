"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46667],{46382:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=e(85893),s=e(11151);const r={displayed_sidebar:"Chinese31"},o="bitmap_to_string",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_string",title:"bitmap_to_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_string.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"bitmap_to_base64",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64"},next:{title:"bitmap_union",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_union"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bitmap_to_string",children:"bitmap_to_string"}),"\n",(0,i.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(t.p,{children:"\u5c06\u4e00\u4e2a bitmap \u8f6c\u5316\u6210\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u5b57\u7b26\u4e32\u3002\u5b57\u7b26\u4e32\u4e2d\u5305\u542b bitmap \u4e2d\u6240\u6709 bit \u4f4d\u3002\u8f93\u5165\u662f null \u7684\u8bdd\u4f1a\u8fd4\u56de null\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Haskell",children:"BITMAP_TO_STRING(input)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"input"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(t.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nselect bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nselect bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n| 1                              |\n+--------------------------------+\n\nselect bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n| 1,2                                                     |\n+---------------------------------------------------------+\n\n"})})]})}const d=function(n={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),n.components);return t?(0,i.jsx)(t,Object.assign({},n,{children:(0,i.jsx)(p,n)})):p(n)}},11151:(n,t,e)=>{e.d(t,{Zo:()=>a,ah:()=>r});var i=e(67294);const s=i.createContext({});function r(n){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const o={};function a({components:n,children:t,disableParentContext:e}){let a;return a=e?"function"==typeof n?n({}):n||o:r(n),i.createElement(s.Provider,{value:a},t)}}}]);