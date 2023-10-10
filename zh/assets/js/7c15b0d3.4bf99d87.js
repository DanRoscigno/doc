"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21217],{82983:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var s=e(85893),c=e(11151);const l={},a="array_sortby",d={id:"sql-reference/sql-functions/array-functions/array_sortby",title:"array_sortby",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_sortby.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sortby",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sortby",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_sortby.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_sort",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sort"},next:{title:"array_sum",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sum"}},i={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",ul:"ul",li:"li"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"array_sortby",children:"array_sortby"}),"\n",(0,s.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(r.p,{children:["\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u6839\u636e\u53e6\u5916\u4e00\u4e2a\u952e\u503c\u6570\u7ec4\u5143\u7d20\u6216\u8005 Lambda \u51fd\u6570\u751f\u6210\u7684\u952e\u503c\u6570\u7ec4\u5143\u7d20\u8fdb\u884c\u5347\u5e8f\u6392\u5217\u3002\u6709\u5173 Lambda \u8868\u8fbe\u5f0f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,s.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u4e3e\u4f8b\uff0c\u6709\u4e24\u4e2a\u6570\u7ec4 a = [3,1,4]\uff0cb = [7,5,6]\u3002\u5c06 ",(0,s.jsx)(r.code,{children:"b"})," \u4f5c\u4e3a\u6392\u5e8f\u952e\uff0c\u5bf9 ",(0,s.jsx)(r.code,{children:"a"})," \u91cc\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u6839\u636e\u952e\u503c\u5bf9\u5173\u7cfb\uff0c",(0,s.jsx)(r.code,{children:"b"})," \u7684\u5143\u7d20 [7,5,6] \u4e00\u4e00\u5bf9\u5e94 ",(0,s.jsx)(r.code,{children:"a"})," \u7684 \u5143\u7d20[3,1,4]\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"\u8f6c\u6362\u524d\uff1a"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u6570\u7ec4"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e00\u4e2a\u5143\u7d20"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e8c\u4e2a\u5143\u7d20"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e09\u4e2a\u5143\u7d20"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"a"}),(0,s.jsx)(r.td,{children:"3"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"b"}),(0,s.jsx)(r.td,{children:"7"}),(0,s.jsx)(r.td,{children:"5"}),(0,s.jsx)(r.td,{children:"6"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"\u8f6c\u6362\u540e\uff0cb \u6309\u7167\u5347\u5e8f\u6392\u5217\u4e3a [5,6,7]\uff0c\u5bf9\u5e94 a \u7684\u5143\u7d20\u4f4d\u7f6e\u4e5f\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\uff0c\u53d8\u4e3a [1,4,3]\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u6570\u7ec4"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e00\u4e2a\u5143\u7d20"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e8c\u4e2a\u5143\u7d20"}),(0,s.jsx)(r.th,{children:"\u7b2c\u4e09\u4e2a\u5143\u7d20"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"a"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"4"}),(0,s.jsx)(r.td,{children:"3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"b"}),(0,s.jsx)(r.td,{children:"5"}),(0,s.jsx)(r.td,{children:"6"}),(0,s.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Haskell",children:"array_sortby(array0, array1)\narray_sortby(<lambda function>, array0 [, array1...])\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"array_sortby(array0, array1)"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6839\u636e ",(0,s.jsx)(r.code,{children:"array1"})," \u7684\u952e\u503c\u6570\u7ec4\u5143\u7d20\u5bf9 ",(0,s.jsx)(r.code,{children:"array0"})," \u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"array_sortby(<lambda_function>, array0 [, array1...])"})}),"\n",(0,s.jsxs)(r.p,{children:["\u6839\u636e ",(0,s.jsx)(r.code,{children:"lambda_function"})," \u751f\u6210\u7684\u952e\u503c\u6570\u7ec4\u5143\u7d20\uff0c\u5bf9 ",(0,s.jsx)(r.code,{children:"array0"})," \u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"array0"}),"\uff1a\u9700\u8981\u6392\u5e8f\u7684\u6570\u7ec4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\uff0c\u6216\u8005 ",(0,s.jsx)(r.code,{children:"null"}),"\u3002\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u4e3a\u53ef\u6392\u5e8f\u7684\u5143\u7d20\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"array1"}),"\uff1a\u7528\u4e8e\u6392\u5e8f\u7684\u952e\u503c\u6570\u7ec4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\uff0c\u6216\u8005 ",(0,s.jsx)(r.code,{children:"null"}),"\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"lambda_function"}),"\uff1alambda \u51fd\u6570\uff0c\u7528\u4e8e\u751f\u6210\u6392\u5e8f\u952e\u503c\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(r.p,{children:"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u53ea\u652f\u6301\u5347\u5e8f\u6392\u5e8f\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c\u9700\u8981\u964d\u5e8f\u6392\u5217\uff0c\u53ef\u4ee5\u5bf9\u6392\u5e8f\u540e\u7684\u7ed3\u679c\uff0c\u8c03\u7528 ",(0,s.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/reverse",children:"reverse()"})," \u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"null"})," \u503c\u4f1a\u6392\u5728\u6700\u524d\u9762\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u548c\u8f93\u5165\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e00\u81f4\uff0c",(0,s.jsx)(r.code,{children:"null"})," \u5c5e\u6027\u4e00\u81f4\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c\u7528\u4e8e\u6392\u5e8f\u7684\u952e\u503c\u6570\u7ec4\u6216\u8868\u8fbe\u5f0f\u4e3a ",(0,s.jsx)(r.code,{children:"null"}),"\uff0c\u6570\u636e\u4fdd\u6301\u4e0d\u53d8\u3002"]}),"\n",(0,s.jsx)(r.li,{children:"\u6392\u5e8f\u6d89\u53ca\u7684\u4e24\u4e2a\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\u5fc5\u987b\u4e00\u81f4\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(r.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u6570\u636e\u8868\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-SQL",children:'CREATE TABLE `test_array` (\n  `c1` int(11) NULL COMMENT "",\n  `c2` ARRAY<int(11)> NULL COMMENT "",\n  `c3` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`c1`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT",\n"enable_persistent_index" = "false",\n"compression" = "LZ4"\n);\n\ninsert into test_array values\n(1,[4,3,5],[82,1,4]),\n(2,null,[23]),\n(3,[4,2],[6,5]),\n(4,null,null),\n(5,[],[]),\n(6,NULL,[]),\n(7,[],null),\n(8,[null,null],[3,6]),\n(9,[432,21,23],[5,4,null]);\n\nselect * from test_array order by c1;\n+------+-------------+------------+\n| c1   | c2          | c3         |\n+------+-------------+------------+\n|    1 | [4,3,5]     | [82,1,4]   |\n|    2 | NULL        | [23]       |\n|    3 | [4,2]       | [6,5]      |\n|    4 | NULL        | NULL       |\n|    5 | []          | []         |\n|    6 | NULL        | []         |\n|    7 | []          | NULL       |\n|    8 | [null,null] | [3,6]      |\n|    9 | [432,21,23] | [5,4,null] |\n+------+-------------+------------+\n9 rows in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06\u6570\u7ec4 ",(0,s.jsx)(r.code,{children:"c3"})," \u6309\u7167 ",(0,s.jsx)(r.code,{children:"c2"})," \u7684\u503c\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plaintext",children:"select c1, c3, c2, array_sort(c2), array_sortby(c3,c2)\nfrom test_array order by c1;\n+------+------------+-------------+----------------+----------------------+\n| c1   | c3         | c2          | array_sort(c2) | array_sortby(c3, c2) |\n+------+------------+-------------+----------------+----------------------+\n|    1 | [82,1,4]   | [4,3,5]     | [3,4,5]        | [1,82,4]             |\n|    2 | [23]       | NULL        | NULL           | [23]                 |\n|    3 | [6,5]      | [4,2]       | [2,4]          | [5,6]                |\n|    4 | NULL       | NULL        | NULL           | NULL                 |\n|    5 | []         | []          | []             | []                   |\n|    6 | []         | NULL        | NULL           | []                   |\n|    7 | NULL       | []          | []             | NULL                 |\n|    8 | [3,6]      | [null,null] | [null,null]    | [3,6]                |\n|    9 | [5,4,null] | [432,21,23] | [21,23,432]    | [4,null,5]           |\n+------+------------+-------------+----------------+----------------------+\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06\u6570\u7ec4 ",(0,s.jsx)(r.code,{children:"c3"})," \u6309\u7167 Lambda \u8868\u8fbe\u5f0f\u751f\u6210\u7684\u952e\u503c\u6570\u7ec4\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\u3002\u8be5\u51fd\u6570\u4e0e\u4e0a\u4e2a\u793a\u4f8b\u529f\u80fd\u5bf9\u7b49\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plaintext",children:"select \n    c1,\n    c3,\n    c2,\n    array_sort(c2) as sorted_c2_asc,\n    array_sortby((x,y) -> y, c3, c2) as sorted_c3_by_c2\nfrom test_array order by c1;\n+------+------------+-------------+---------------+-----------------+\n| c1   | c3         | c2          | sorted_c2_asc | sorted_c3_by_c2 |\n+------+------------+-------------+---------------+-----------------+\n|    1 | [82,1,4]   | [4,3,5]     | [3,4,5]       | [1,82,4]        |\n|    2 | [23]       | NULL        | NULL          | [23]            |\n|    3 | [6,5]      | [4,2]       | [2,4]         | [5,6]           |\n|    4 | NULL       | NULL        | NULL          | NULL            |\n|    5 | []         | []          | []            | []              |\n|    6 | []         | NULL        | NULL          | []              |\n|    7 | NULL       | []          | []            | NULL            |\n|    8 | [3,6]      | [null,null] | [null,null]   | [3,6]           |\n|    9 | [5,4,null] | [432,21,23] | [21,23,432]   | [4,null,5]      |\n+------+------------+-------------+---------------+-----------------+\n"})}),"\n",(0,s.jsxs)(r.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u6570\u7ec4 ",(0,s.jsx)(r.code,{children:"c3"})," \u6309\u7167\u6309\u7167 c2+c3 \u7684\u548c\u7684\u5347\u5e8f\u6392\u5e8f\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-SQL",children:"select\n    c3,\n    c2,\n    array_map((x,y)-> x+y,c3,c2) as sum,\n    array_sort(array_map((x,y)-> x+y,c3,c2)) as sorted_sum,\n    array_sortby((x,y) -> x+y , c3,c2) as sorted_c3_by_sum\nfrom test_array where c1=1;\n+----------+---------+----------+------------+------------------+\n| c3       | c2      | sum      | sorted_sum | sorted_c3_by_sum |\n+----------+---------+----------+------------+------------------+\n| [82,1,4] | [4,3,5] | [86,4,9] | [4,9,86]   | [1,4,82]         |\n+----------+---------+----------+------------+------------------+\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sort",children:"array_sort"})})]})}const h=function(n={}){const{wrapper:r}=Object.assign({},(0,c.ah)(),n.components);return r?(0,s.jsx)(r,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},11151:(n,r,e)=>{e.d(r,{Zo:()=>d,ah:()=>l});var s=e(67294);const c=s.createContext({});function l(n){const r=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(r):{...r,...n}),[r,n])}const a={};function d({components:n,children:r,disableParentContext:e}){let d;return d=e?"function"==typeof n?n({}):n||a:l(n),s.createElement(c.Provider,{value:d},r)}}}]);