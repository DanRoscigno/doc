"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85070],{80386:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=e(85893),o=e(11151);const c={displayed_sidebar:"Chinese31"},t="JSON_QUERY",i={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",title:"JSON_QUERY",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"json_length",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length"},next:{title:"json_string",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string"}},l={},d=[{value:"<strong>\u529f\u80fd</strong>",id:"\u529f\u80fd",level:2},{value:"<strong>\u8bed\u6cd5</strong>",id:"\u8bed\u6cd5",level:2},{value:"<strong>\u53c2\u6570\u8bf4\u660e</strong>",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"<strong>\u8fd4\u56de\u503c\u8bf4\u660e</strong>",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"<strong>\u793a\u4f8b</strong>",id:"\u793a\u4f8b",level:2}];function a(n){const s=Object.assign({h1:"h1",h2:"h2",strong:"strong",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",blockquote:"blockquote"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"json_query",children:"JSON_QUERY"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:(0,r.jsx)(s.strong,{children:"\u529f\u80fd"})}),"\n",(0,r.jsxs)(s.p,{children:["\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u6307\u5b9a\u8def\u5f84\uff08",(0,r.jsx)(s.code,{children:"json_path"}),"\uff09\u7684\u503c\uff0c\u5e76\u8f93\u51fa JSON \u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:(0,r.jsx)(s.strong,{children:"\u8bed\u6cd5"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"JSON_QUERY(json_object_expr, json_path)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"json_object_expr"}),"\uff1aJSON \u5bf9\u8c61\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u662f JSON \u7c7b\u578b\u7684\u5217\uff0c\u6216\u8005 PARSE_JSON \u7b49 JSON \u51fd\u6570\u6784\u9020\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"json_path"}),": \u67e5\u8be2 JSON \u5bf9\u8c61\u65f6\u7684\u8def\u5f84\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002StarRocks \u652f\u6301\u7684 JSON Path \u7684\u8bed\u6cd5\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(s.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators#json-path",children:"JSON Path \u8bed\u6cd5"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:(0,r.jsx)(s.strong,{children:"\u8fd4\u56de\u503c\u8bf4\u660e"})}),"\n",(0,r.jsx)(s.p,{children:"\u8fd4\u56de JSON \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u67e5\u8be2\u7684\u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:(0,r.jsx)(s.strong,{children:"\u793a\u4f8b"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,r.jsx)(s.code,{children:"'$.a.b'"})," \u6307\u5b9a\u7684\u503c\uff0c\u8fd4\u56de JSON \u7c7b\u578b\u7684 1\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_QUERY(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.b') ;\n       -> 1\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,r.jsx)(s.code,{children:"'$.a.c'"})," \u6307\u5b9a\u7684\u503c\uff0c\u7531\u4e8e\u4e0d\u5b58\u5728\u8be5\u503c\uff0c\u56e0\u6b64\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_QUERY(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.c') ;\n       -> NULL\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,r.jsx)(s.code,{children:"'$.a[2]'"})," \uff08a \u6570\u7ec4\u7684\u7b2c 2 \u4e2a\u5143\u7d20\uff09\u6307\u5b9a\u7684\u503c\uff0c\u8fd4\u56de JSON \u7c7b\u578b\u7684 3\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_QUERY(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[2]') ;\n       -> 3\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u56db\uff1a\u67e5\u8be2 JSON \u5bf9\u8c61\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f ",(0,r.jsx)(s.code,{children:"'$.a[3]'"})," \uff08a \u6570\u7ec4\u7684\u7b2c 3 \u4e2a\u5143\u7d20\uff09\u6307\u5b9a\u7684\u503c\uff0c\u7531\u4e8e\u4e0d\u5b58\u5728\u8be5\u503c\uff0c\u56e0\u6b64\u8fd4\u56de SQL \u7c7b\u578b\u7684 NULL\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT JSON_QUERY(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[3]') ;\n       -> NULL\n"})})]})}const u=function(n={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),n.components);return s?(0,r.jsx)(s,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,s,e)=>{e.d(s,{Zo:()=>i,ah:()=>c});var r=e(67294);const o=r.createContext({});function c(n){const s=r.useContext(o);return r.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const t={};function i({components:n,children:s,disableParentContext:e}){let i;return i=e?"function"==typeof n?n({}):n||t:c(n),r.createElement(o.Provider,{value:i},s)}}}]);