"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36606],{59242:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},o="JSON_ARRAY",i={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",title:"JSON_ARRAY",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"JSON constructor functions",permalink:"/doc/zh/docs/2.5/category/json-constructor-functions-1"},next:{title:"JSON_OBJECT",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json_array",children:"JSON_ARRAY"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u6536 SQL \u6570\u7ec4\u5e76\u8fd4\u56de\u4e00\u4e2a JSON \u7c7b\u578b\u7684\u6570\u7ec4\uff08\u4ee5\u4e0b\u7b80\u79f0 JSON \u6570\u7ec4\uff09\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"JSON_ARRAY(value, ...)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"value"}),": \u6570\u7ec4\u7684\u5143\u7d20\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b (STRING\u3001VARCHAR\u3001CHAR)\u3001JSON\u3001\u6570\u5b57\u578b (TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001DOUBLE\u3001FLOAT)\u3001BOOLEAN\uff0c\u4ee5\u53ca NULL \u503c\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2a JSON \u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u6784\u9020\u4e00\u4e2a\u7531\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7ec4\u6210\u7684 JSON \u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_ARRAY(1, true, 'starrocks', 1.1);\n       -> [1, true, \"starrocks\", 1.1]\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u6784\u9020\u4e00\u4e2a\u7a7a\u7684 JSON \u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_ARRAY();\n       -> []\n"})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(n){const e=t.useContext(c);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||o:r(n),t.createElement(c.Provider,{value:i},e)}}}]);