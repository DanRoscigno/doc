"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22736],{58456:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=n(85893),a=n(11151);const t={displayed_sidebar:"documentation"},c="array_sortby",l={id:"sql-reference/sql-functions/array-functions/array_sortby",title:"array_sortby",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_sortby.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sortby",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_sortby",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_sortby.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"array_sort",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_sort"},next:{title:"array_sum",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_sum"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"array_sortby",children:"array_sortby"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Sorts elements in an array according to the ascending order of elements in another array or array converted from a lambda expression. For more information, see ",(0,s.jsx)(r.a,{href:"/doc/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),". This function is supported from v2.5."]}),"\n",(0,s.jsx)(r.p,{children:"Elements in the two arrays are like key-value pairs. For example, b = [7,5,6] is the sorting key of a = [3,1,4]. According to the key-value pair relationship, elements in the two arrays have the following one-to-one mapping."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Array"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 1"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 2"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 3"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"a"}),(0,s.jsx)(r.td,{children:"3"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"4"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"b"}),(0,s.jsx)(r.td,{children:"7"}),(0,s.jsx)(r.td,{children:"5"}),(0,s.jsx)(r.td,{children:"6"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["After array ",(0,s.jsx)(r.code,{children:"b"})," is sorted in ascending order, it becomes [5,6,7]. Array ",(0,s.jsx)(r.code,{children:"a"})," becomes [1,4,3] accordingly."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Array"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 1"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 2"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Element 3"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"a"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"4"}),(0,s.jsx)(r.td,{children:"3"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"b"}),(0,s.jsx)(r.td,{children:"5"}),(0,s.jsx)(r.td,{children:"6"}),(0,s.jsx)(r.td,{children:"7"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Haskell",children:"array_sortby(array0, array1)\narray_sortby(<lambda function>, array0 [, array1...])\n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"array_sortby(array0, array1)"})}),"\n",(0,s.jsxs)(r.p,{children:["Sorts ",(0,s.jsx)(r.code,{children:"array0"})," according to the ascending order of ",(0,s.jsx)(r.code,{children:"array1"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"array_sortby(<lambda function>, array0 [, array1...])"})}),"\n",(0,s.jsxs)(r.p,{children:["Sorts ",(0,s.jsx)(r.code,{children:"array0"})," according to the array returned from the lambda function."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"array0"}),": the array you want to sort. It must be an array, array expression, or ",(0,s.jsx)(r.code,{children:"null"}),". Elements in the array must be sortable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"array1"}),": the sorting array used to sort ",(0,s.jsx)(r.code,{children:"array0"}),". It must be an array, array expression, or ",(0,s.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"lambda function"}),": the lambda expression used to generate the sorting array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(r.p,{children:"Returns an array."}),"\n",(0,s.jsx)(r.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"This function can sort elements of an array only in ascending order."}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"NULL"})," values are placed at the beginning of the array that is returned."]}),"\n",(0,s.jsxs)(r.li,{children:["If you want to sort elements of an array in descending order, use the ",(0,s.jsx)(r.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/reverse",children:"reverse"})," function."]}),"\n",(0,s.jsxs)(r.li,{children:["If the sorting array (",(0,s.jsx)(r.code,{children:"array1"}),") is null, data in ",(0,s.jsx)(r.code,{children:"array0"})," remains unchanged."]}),"\n",(0,s.jsxs)(r.li,{children:["The elements of the returned array have the same data type as the elements of ",(0,s.jsx)(r.code,{children:"array0"}),". The attribute of null values are also the same."]}),"\n",(0,s.jsx)(r.li,{children:"The two arrays must have the same number of elements. Otherwise, an error is returned."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.p,{children:"The following table is used to demonstrate how to use this function."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-SQL",children:'CREATE TABLE `test_array` (\n  `c1` int(11) NULL COMMENT "",\n  `c2` ARRAY<int(11)> NULL COMMENT "",\n  `c3` ARRAY<int(11)> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`c1`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT",\n"enable_persistent_index" = "false",\n"compression" = "LZ4"\n);\n\ninsert into test_array values\n(1,[4,3,5],[82,1,4]),\n(2,null,[23]),\n(3,[4,2],[6,5]),\n(4,null,null),\n(5,[],[]),\n(6,NULL,[]),\n(7,[],null),\n(8,[null,null],[3,6]),\n(9,[432,21,23],[5,4,null]);\n\nselect * from test_array order by c1;\n+------+-------------+------------+\n| c1   | c2          | c3         |\n+------+-------------+------------+\n|    1 | [4,3,5]     | [82,1,4]   |\n|    2 | NULL        | [23]       |\n|    3 | [4,2]       | [6,5]      |\n|    4 | NULL        | NULL       |\n|    5 | []          | []         |\n|    6 | NULL        | []         |\n|    7 | []          | NULL       |\n|    8 | [null,null] | [3,6]      |\n|    9 | [432,21,23] | [5,4,null] |\n+------+-------------+------------+\n9 rows in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Example 1: Sort ",(0,s.jsx)(r.code,{children:"c3"})," according to ",(0,s.jsx)(r.code,{children:"c2"}),". This example also provides the result of array_sort() for comparison."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plaintext",children:"select c1, c3, c2, array_sort(c2), array_sortby(c3,c2)\nfrom test_array order by c1;\n+------+------------+-------------+----------------+----------------------+\n| c1   | c3         | c2          | array_sort(c2) | array_sortby(c3, c2) |\n+------+------------+-------------+----------------+----------------------+\n|    1 | [82,1,4]   | [4,3,5]     | [3,4,5]        | [1,82,4]             |\n|    2 | [23]       | NULL        | NULL           | [23]                 |\n|    3 | [6,5]      | [4,2]       | [2,4]          | [5,6]                |\n|    4 | NULL       | NULL        | NULL           | NULL                 |\n|    5 | []         | []          | []             | []                   |\n|    6 | []         | NULL        | NULL           | []                   |\n|    7 | NULL       | []          | []             | NULL                 |\n|    8 | [3,6]      | [null,null] | [null,null]    | [3,6]                |\n|    9 | [5,4,null] | [432,21,23] | [21,23,432]    | [4,null,5]           |\n+------+------------+-------------+----------------+----------------------+\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Example 2: Sort array ",(0,s.jsx)(r.code,{children:"c3"})," based on ",(0,s.jsx)(r.code,{children:"c2"})," generated from a lambda expression. This example is equivalent to Example 1. It also provides the result of array_sort() for comparison."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plaintext",children:"select\n    c1,\n    c3,\n    c2,\n    array_sort(c2) as sorted_c2_asc,\n    array_sortby((x,y) -> y, c3, c2) as sorted_c3_by_c2\nfrom test_array order by c1;\n+------+------------+-------------+---------------+-----------------+\n| c1   | c3         | c2          | sorted_c2_asc | sorted_c3_by_c2 |\n+------+------------+-------------+---------------+-----------------+\n|    1 | [82,1,4]   | [4,3,5]     | [3,4,5]       | [82,1,4]        |\n|    2 | [23]       | NULL        | NULL          | [23]            |\n|    3 | [6,5]      | [4,2]       | [2,4]         | [5,6]           |\n|    4 | NULL       | NULL        | NULL          | NULL            |\n|    5 | []         | []          | []            | []              |\n|    6 | []         | NULL        | NULL          | []              |\n|    7 | NULL       | []          | []            | NULL            |\n|    8 | [3,6]      | [null,null] | [null,null]   | [3,6]           |\n|    9 | [5,4,null] | [432,21,23] | [21,23,432]   | [4,null,5]      |\n+------+------------+-------------+---------------+-----------------+\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Example 3: Sort array ",(0,s.jsx)(r.code,{children:"c3"})," based on the ascending order of ",(0,s.jsx)(r.code,{children:"c2+c3"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Plain",children:"select\n    c3,\n    c2,\n    array_map((x,y)-> x+y,c3,c2) as sum,\n    array_sort(array_map((x,y)-> x+y, c3, c2)) as sorted_sum,\n    array_sortby((x,y) -> x+y, c3, c2) as sorted_c3_by_sum\nfrom test_array where c1=1;\n+----------+---------+----------+------------+------------------+\n| c3       | c2      | sum      | sorted_sum | sorted_c3_by_sum |\n+----------+---------+----------+------------+------------------+\n| [82,1,4] | [4,3,5] | [86,4,9] | [4,9,86]   | [1,4,82]         |\n+----------+---------+----------+------------+------------------+\n"})}),"\n",(0,s.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_sort",children:"array_sort"})})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>l,ah:()=>t});var s=n(67294);const a=s.createContext({});function t(e){const r=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function l({components:e,children:r,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||c:t(e),s.createElement(a.Provider,{value:l},r)}}}]);