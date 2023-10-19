"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64421],{13981:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var c=s(85893),l=s(11151);const i={displayed_sidebar:"Chinese"},r="json_length",o={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",title:"json_length",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",permalink:"/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"json_keys",permalink:"/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys"},next:{title:"JSON_QUERY",permalink:"/zh/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query"}},d={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,l.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"json_length",children:"json_length"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd4\u56de JSON \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002\u5982\u679c\u6307\u5b9a\u4e86 ",(0,c.jsx)(e.code,{children:"path"}),"\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"path"})," \u6307\u5b9a\u7684\u503c\u7684\u957f\u5ea6\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u6309\u7167\u5982\u4e0b\u89c4\u5219\u8ba1\u7b97 JSON \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5355\u503c\u7684\u957f\u5ea6\u4e3a 1\u3002\u6bd4\u5982",(0,c.jsx)(e.code,{children:"1"}),"\uff0c",(0,c.jsx)(e.code,{children:'"a"'}),"\uff0c",(0,c.jsx)(e.code,{children:"true"}),"\uff0c",(0,c.jsx)(e.code,{children:"false"}),"\uff0c",(0,c.jsx)(e.code,{children:"null"})," \u7684\u957f\u5ea6\u90fd\u4e3a 1\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6570\u7ec4 (array) \u7684\u957f\u5ea6\u4e3a\u6570\u7ec4\u5185\u5143\u7d20\u7684\u6570\u91cf\u3002 \u6bd4\u5982",(0,c.jsx)(e.code,{children:"[1, 2]"})," \u7684\u957f\u5ea6\u4e3a 2\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5bf9\u8c61 (object) \u7684\u957f\u5ea6\u4e3a\u5bf9\u8c61\u5185\u6210\u5458 (key) \u7684\u6570\u91cf\u3002 \u6bd4\u5982 ",(0,c.jsx)(e.code,{children:'{"a": 1}'})," \u7684\u957f\u5ea6\u4e3a 1\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5185\u5d4c\u7684\u6570\u7ec4\u6216\u5bf9\u8c61\u4e0d\u53c2\u4e0e\u957f\u5ea6\u8ba1\u7b97\u3002 \u6bd4\u5982 ",(0,c.jsx)(e.code,{children:'{"a": [1, 2]}'})," \u7684\u957f\u5ea6\u4e3a 1\uff0c\u56e0\u4e3a\u4f1a\u8ba1\u7b97\u5916\u5c42 JSON \u5bf9\u8c61\u7684\u957f\u5ea6\uff0c\u4e0d\u8ba1\u7b97\u5185\u5d4c\u6570\u7ec4",(0,c.jsx)(e.code,{children:"[1, 2]"})," \u7684\u957f\u5ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-SQL",children:"json_length(json_doc[, path])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"json_doc"}),"\uff1a JSON \u5b57\u7b26\u4e32\uff0c\u5fc5\u9009\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"path"}),"\uff1a\u8def\u5f84\u8868\u8fbe\u5f0f\uff0c\u53ef\u9009\u3002\u53d6\u503c\u7c7b\u578b\u4e3a VARCHAR\u3002",(0,c.jsx)(e.code,{children:"path"})," \u4e00\u822c\u4ee5 ",(0,c.jsx)(e.code,{children:"$"})," \u7b26\u53f7\u4f5c\u4e3a\u5f00\u5934\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"."})," \u4f5c\u4e3a\u8def\u5f84\u5206\u9694\u7b26\uff1b\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"[]"})," \u8868\u793a\u6570\u7ec4\u4e0b\u6807\uff0c\u4ece 0 \u5f00\u59cb\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c",(0,c.jsx)(e.code,{children:"json_doc"}),"\u6307\u5b9a\u7684 JSON \u5b57\u7b26\u4e32\u4e3a\u65e0\u6548\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u5b58\u5728\u5982\u4e0b\u60c5\u51b5\uff0c\u8fd4\u56de 0\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["JSON \u5b57\u7b26\u4e32\u4e2d\u4e0d\u5b58\u5728",(0,c.jsx)(e.code,{children:"path"}),"\u6307\u5b9a\u7684\u8def\u5f84\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"path"}),"\u6307\u5b9a\u7684\u8def\u5f84\u4e0d\u662f\u6709\u6548\u7684\u8def\u5f84\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"path"})," \u4e2d\u5305\u542b ",(0,c.jsx)(e.code,{children:"*"})," \u6216 ",(0,c.jsx)(e.code,{children:"**"}),"\u901a\u914d\u7b26\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e00: \u8fd4\u56de\u5355\u503c\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select json_length('1');\n+------------------+\n| json_length('1') |\n+------------------+\n|                1 |\n+------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c: \u8fd4\u56de\u7a7a\u5bf9\u8c61\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select json_length('{}');\n+-------------------+\n| json_length('{}') |\n+-------------------+\n|                 0 |\n+-------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e09: \u8fd4\u56de JSON \u5bf9\u8c61\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:'select json_length(\'{"Name": "Alice"}\');\n+----------------------------------+\n| json_length(\'{"Name": "Alice"}\') |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u56db: \u8fd4\u56de JSON \u6570\u7ec4\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:"select json_length('[1, 2, 3]');\n+--------------------------+\n| json_length('[1, 2, 3]') |\n+--------------------------+\n|                        3 |\n+--------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e94: \u6570\u7ec4\u5143\u7d20\u5185\u5d4c\u4e86\u6570\u7ec4 [3, 4]\uff0c\u5185\u5d4c\u7684\u6570\u7ec4\u4e0d\u8ba1\u5165\u957f\u5ea6\uff0c\u6240\u4ee5\u957f\u5ea6\u4ecd\u4e3a 3\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:"select json_length('[1, 2, [3, 4]]');\n+-------------------------------+\n| json_length('[1, 2, [3, 4]]') |\n+-------------------------------+\n|                             3 |\n+-------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u516d: \u8fd4\u56de JSON \u5b57\u7b26\u4e32\u4e2d\u8def\u5f84\u8868\u8fbe\u5f0f\u6307\u5b9a\u503c\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-SQL",children:'SET @file = \'{  \n    "Employee": {    \n       "Name": "Alice", \n       "Age": 32,\n       "Hobbies": ["Dancing", "Shopping"]  \n    }\n }\';\n \nselect json_length(@file, \'$.Employee\');\n+----------------------------------+\n| json_length(@file, \'$.Employee\') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e03\uff1a\u8fd4\u56de\u8def\u5f84\u8868\u8fbe\u5f0f\u6307\u5b9a\u7684\u503c\u7684\u957f\u5ea6\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",metastring:"text",children:"select json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y');\n+---------------------------------------------+\n| json_length('{\"x\": 1, \"y\": [1, 2]}', '$.y') |\n+---------------------------------------------+\n|                                           2 |\n+---------------------------------------------+\n"})})]})}const j=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(h,n)})):h(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>i});var c=s(67294);const l=c.createContext({});function i(n){const e=c.useContext(l);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||r:i(n),c.createElement(l.Provider,{value:o},e)}}}]);