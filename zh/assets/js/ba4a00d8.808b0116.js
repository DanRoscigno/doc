"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20668],{23783:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=s(85893),o=s(11151);const c={displayed_sidebar:"Chinese"},i="JSON_EACH",r={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",title:"JSON_EACH",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"get_json_string",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string"},next:{title:"JSON_EXISTS",permalink:"/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong"},(0,o.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json_each",children:"JSON_EACH"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06 JSON \u5bf9\u8c61\u7684\u6700\u5916\u5c42\u6309\u7167\u952e\u548c\u503c\u5c55\u5f00\u4e3a\u4e24\u5217\uff0c\u8fd4\u56de\u4e00\u884c\u6216\u591a\u884c\u6570\u636e\u7684\u96c6\u5408\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"JSON_EACH(json_object_expr)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"json_object_expr"}),"\uff1aJSON \u5bf9\u8c61\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u662f JSON \u7c7b\u578b\u7684\u5217\uff0c\u6216\u8005 PARSE_JSON \u7b49 JSON \u51fd\u6570\u6784\u9020\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de\u952e\u548c\u503c\u4e24\u5217\u3002\u952e\u7684\u5217\u540d\u4e3a key\uff0c\u503c\u7684\u5217\u540d\u4e3a value\u3002\u952e\u3001\u503c\u7684\u5217\u7c7b\u578b\u5206\u522b\u4e3a VARCHAR \u548c JSON\u3002"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["\u7531\u4e8e key \u662f\u5173\u952e\u5b57\uff0c\u5728 select \u8bed\u53e5\u4e2d\u6307\u5b9a\u5217\u540d\u65f6\uff0c\u9700\u8981\u7528 ",(0,t.jsx)(e.strong,{children:"t.`key`"})," \u8fd9\u79cd\u65b9\u5f0f\uff08\u89c1\u4e0b\u9762\u793a\u4f8b\uff09\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(e.p,{children:"JSON_EACH \u5c5e\u4e8e\u8868\u51fd\u6570\uff0c\u8fd4\u56de\u7684\u662f\u884c\u7684\u96c6\u5408\u3002\u56e0\u6b64 JSON_EACH \u5fc5\u987b\u5728 FROM \u5b50\u53e5\u4e2d\u901a\u8fc7 LATERAL \u8fde\u63a5\u4f7f\u7528\uff08LATERAL \u5173\u952e\u5b57\u53ef\u7701\u7565\uff09\uff0c\u4e0d\u80fd\u7528\u4e8e SELECT \u5b50\u53e5\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'-- \u672c\u793a\u4f8b\u4ee5\u8868tj\u8fdb\u884c\u8bf4\u660e\u3002\nmysql> SELECT * FROM tj;\n+------+------------------+\n| id   | j                |\n+------+------------------+\n|    1 | {"a": 1, "b": 2} |\n|    3 | {"a": 3}         |\n+------+------------------+\n\n-- \u8868tj\u4e2dj\u5217\u4e3aJSON\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5c06\u5176\u6309\u7167\u952e\u548c\u503c\u5c55\u5f00\u4e3a\u4e24\u5217\uff0c\u5f97\u5230\u591a\u884c\u6570\u636e\u7684\u96c6\u5408\uff0c\u7136\u540e\u901a\u8fc7LATERAL\u8fde\u63a5\u8868tj\u3002\nmysql> SELECT * FROM tj, LATERAL JSON_EACH(j);\n+------+------------------+------+-------+\n| id   | j                | key  | value |\n+------+------------------+------+-------+\n|    1 | {"a": 1, "b": 2} | a    | 1     |\n|    1 | {"a": 1, "b": 2} | b    | 2     |\n|    3 | {"a": 3}         | a    | 3     |\n+------+------------------+------+-------+\n\nmysql> SELECT tj.*, t2.`key` as j_key, t2.value as j_val FROM tj, LATERAL JSON_EACH(j) as t2;\n+------+------------------+-------+-------+\n| id   | j                | j_key | j_val |\n+------+------------------+-------+-------+\n|    1 | {"a": 1, "b": 2} | a     | 1     |\n|    1 | {"a": 1, "b": 2} | b     | 2     |\n|    3 | {"a": 3}         | a     | 3     |\n+------+------------------+-------+-------+\n'})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>c});var t=s(67294);const o=t.createContext({});function c(n){const e=t.useContext(o);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||i:c(n),t.createElement(o.Provider,{value:r},e)}}}]);