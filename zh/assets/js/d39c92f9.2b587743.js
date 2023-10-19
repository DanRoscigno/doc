"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22752],{78913:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var c=s(85893),t=s(11151);const o={displayed_sidebar:"Chinese"},r="JSON_OBJECT",i={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",title:"JSON_OBJECT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"JSON_ARRAY",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array"},next:{title:"PARSE_JSON",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,t.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json_object",children:"JSON_OBJECT"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(e.p,{children:"\u63a5\u6536\u952e\u503c\u96c6\u5408\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u8fd9\u4e9b\u952e\u503c\u5bf9\u7684 JSON \u7c7b\u578b\u7684\u5bf9\u8c61\uff08\u4ee5\u4e0b\u7b80\u79f0JSON\u5bf9\u8c61\uff09\uff0c\u5e76\u6309\u7167\u952e\u7684\u5b57\u5178\u5e8f\u6392\u5217\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"JSON_OBJECT(key, value, ...)\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"key"}),": JSON \u5bf9\u8c61\u7684\u952e\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"value"}),": JSON \u5bf9\u8c61\u7684\u503c\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u578b\uff08STRING\u3001VARCHAR\u3001CHAR\uff09\u3001JSON\u3001\u6570\u5b57\u578b\uff08TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001DOUBLE\u3001FLOAT\uff09\u3001BOOLEAN\u3001\u4ee5\u53caNULL\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u4e00\u4e2aJSON \u5bf9\u8c61\u3002"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u53c2\u6570",(0,c.jsx)(e.code,{children:"key"}),"\u548c",(0,c.jsx)(e.code,{children:"value"}),"\u7684\u603b\u6570\u4e3a\u5947\u6570\uff0c\u5219\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u7684\u503c\u4f1a\u8865\u4e3a null\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u6784\u9020\u4e00\u4e2a\u7531\u591a\u79cd\u6570\u636e\u7c7b\u578b\u7ec4\u6210\u7684 JSON \u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_OBJECT('name', 'starrocks', 'active', true, 'published', 2020);\n       -> {\"active\": true, \"name\": \"starrocks\", \"published\": 2020}            \n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u6784\u9020\u4e00\u4e2a\u591a\u5c42\u5d4c\u5957\u7684 JSON \u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_OBJECT('k1', 1, 'k2', json_object('k2', 2), 'k3', json_array(4, 5));\n       -> {\"k1\": 1, \"k2\": {\"k2\": 2}, \"k3\": [4, 5]} \n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e09\uff1a\u6784\u9020\u4e00\u4e2a\u7a7a\u7684JSON\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_OBJECT();\n       -> {}\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>o});var c=s(67294);const t=c.createContext({});function o(n){const e=c.useContext(t);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||r:o(n),c.createElement(t.Provider,{value:i},e)}}}]);