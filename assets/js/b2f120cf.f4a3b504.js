"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62951],{97066:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=s(85893),a=s(11151);const c={displayed_sidebar:"English"},l="array_contains_all",i={id:"sql-reference/sql-functions/array-functions/array_contains_all",title:"array_contains_all",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_contains_all.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains_all",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_contains_all",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_contains_all.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_contains",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_contains"},next:{title:"array_cum_sum",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_cum_sum"}},t={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a",ul:"ul",li:"li",ol:"ol"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_contains_all",children:"array_contains_all"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Checks whether ",(0,r.jsx)(n.code,{children:"arr1"})," contains all the elements of ",(0,r.jsx)(n.code,{children:"arr2"}),", that is, whether ",(0,r.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,r.jsx)(n.code,{children:"arr1"}),". If yes, 1 is returned. If not, 0 is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN array_contains_all(arr1, arr2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"arr"}),": the two arrays to compare. This syntax checks whether ",(0,r.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,r.jsx)(n.code,{children:"arr1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The data types of elements in the two arrays must be the same. For the data types of array elements supported by StarRocks, see ",(0,r.jsx)(n.a,{href:"/docs/2.5/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of the BOOLEAN type."}),"\n",(0,r.jsxs)(n.p,{children:["1 is returned if ",(0,r.jsx)(n.code,{children:"arr2"})," is a subset of ",(0,r.jsx)(n.code,{children:"arr1"}),". Otherwise, 0 is returned."]}),"\n",(0,r.jsx)(n.p,{children:"If any of the two arrays is NULL, NULL is returned."}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If an array contains ",(0,r.jsx)(n.code,{children:"null"})," elements, ",(0,r.jsx)(n.code,{children:"null"})," is processed as a value."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"An empty array is a subset of any array."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Elements in the two arrays can have different order."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a table named ",(0,r.jsx)(n.code,{children:"t1"})," and insert data into this table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE t1 (\n    c0 INT,\n    c1 ARRAY<INT>,\n    c2 ARRAY<INT>\n) ENGINE=OLAP\nDUPLICATE KEY(c0)\nDISTRIBUTED BY HASH(c0) BUCKETS 8;\n\nINSERT INTO t1 VALUES\n    (1,[1,2,3],[1,2]),\n    (2,[1,2,3],[1,4]),\n    (3,NULL,[1]),\n    (4,[1,2,null],NULL),\n    (5,[1,2,null],[null]),\n    (6,[2,3],[]);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Query data from this table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SELECT * FROM t1 ORDER BY c0;\n+------+------------+----------+\n| c0   | c1         | c2       |\n+------+------------+----------+\n|    1 | [1,2,3]    | [1,2]    |\n|    2 | [1,2,3]    | [1,4]    |\n|    3 | NULL       | [1]      |\n|    4 | [1,2,null] | NULL     |\n|    5 | [1,2,null] | [null]   |\n|    6 | [2,3]      | []       |\n+------+------------+----------+\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Check whether each row of ",(0,r.jsx)(n.code,{children:"c2"})," is a subset of the corresponding row of ",(0,r.jsx)(n.code,{children:"c1"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"SELECT c0, c1, c2, array_contains_all(c1, c2) FROM t1 ORDER BY c0;\n+------+------------+----------+----------------------------+\n| c0   | c1         | c2       | array_contains_all(c1, c2) |\n+------+------------+----------+----------------------------+\n|    1 | [1,2,3]    | [1,2]    |                          1 |\n|    2 | [1,2,3]    | [1,4]    |                          0 |\n|    3 | NULL       | [1]      |                       NULL |\n|    4 | [1,2,null] | NULL     |                       NULL |\n|    5 | [1,2,null] | [null]   |                          1 |\n|    6 | [2,3]      | []       |                          1 |\n+------+------------+----------+----------------------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In the output:"}),"\n",(0,r.jsxs)(n.p,{children:["For row 1, ",(0,r.jsx)(n.code,{children:"c2"})," is a subset of ",(0,r.jsx)(n.code,{children:"c1"})," and 1 is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For row 2, ",(0,r.jsx)(n.code,{children:"c2"})," is not a subset of ",(0,r.jsx)(n.code,{children:"c1"})," and 0 is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For row 3, ",(0,r.jsx)(n.code,{children:"c1"})," is NULL and NULL is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For row 4, ",(0,r.jsx)(n.code,{children:"c2"})," is NULL and NULL is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For row 5, the two arrays contain ",(0,r.jsx)(n.code,{children:"null"})," and ",(0,r.jsx)(n.code,{children:"null"})," is processed as a normal value, ",(0,r.jsx)(n.code,{children:"1"})," is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["For row 6, ",(0,r.jsx)(n.code,{children:"c2"})," is an empty array and considered a subset of ",(0,r.jsx)(n.code,{children:"c1"}),". Therefore, ",(0,r.jsx)(n.code,{children:"1"})," is returned."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(67294);const a=r.createContext({});function c(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:c(e),r.createElement(a.Provider,{value:i},n)}}}]);