"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55923],{66350:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese"},i="get_json_double",r={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",title:"get_json_double",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",permalink:"/zh/docs/2.3/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"cast",permalink:"/zh/docs/2.3/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast"},next:{title:"get_json_int",permalink:"/zh/docs/2.3/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li"},(0,t.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"get_json_double",children:"get_json_double"}),"\n",(0,o.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,o.jsxs)(e.p,{children:["\u89e3\u6790\u5e76\u83b7\u53d6 ",(0,o.jsx)(e.code,{children:"json_str"})," \u5185 ",(0,o.jsx)(e.code,{children:"json_path"})," \u7684\u6d6e\u70b9\u578b\u5185\u5bb9\u3002\u5982\u679c ",(0,o.jsx)(e.code,{children:"json_str"})," \u683c\u5f0f\u4e0d\u5bf9\u6216 ",(0,o.jsx)(e.code,{children:"json_path"})," \u683c\u5f0f\u4e0d\u5bf9\uff0c\u6216\u8005\u65e0\u6cd5\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Haskell",children:"get_json_double(json_str, json_path)\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"json_str"}),": json \u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"json_path"}),": \u6307\u5b9a\u7684\u8def\u5f84\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\uff0c\u5176\u4e2d json_path \u5fc5\u987b\u4ee5 $ \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff0c\u4f7f\u7528 . \u4f5c\u4e3a\u8def\u5f84\u5206\u5272\u7b26\uff0c\u5982\u679c\u8def\u5f84\u4e2d\u5305\u542b ",(0,o.jsx)(e.code,{children:"."}),'\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u53cc\u5f15\u53f7\u5305\u56f4\u3002\u4f7f\u7528 [ ] \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\uff0cpath \u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b ", [ \u548c ]\u3002']}),"\n",(0,o.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,o.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'\u83b7\u53d6 key \u4e3a "k1" \u7684 value'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:'\u83b7\u53d6 key \u4e3a "my.key" \u7684\u6570\u7ec4\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u83b7\u53d6\u4e8c\u7ea7\u8def\u5f84\u4e3a k1.key -> k2 \u7684\u6570\u7ec4\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n'})}),"\n"]}),"\n"]})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>r,ah:()=>c});var o=s(67294);const t=o.createContext({});function c(n){const e=o.useContext(t);return o.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function r({components:n,children:e,disableParentContext:s}){let r;return r=s?"function"==typeof n?n({}):n||i:c(n),o.createElement(t.Provider,{value:r},e)}}}]);