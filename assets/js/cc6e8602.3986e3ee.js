"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67981],{21679:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(85893),a=r(11151);const t={displayed_sidebar:"English"},i="array_join",l={id:"sql-reference/sql-functions/array-functions/array_join",title:"array_join",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_join.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_join",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_join",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_join.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_intersect",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_intersect"},next:{title:"array_length",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_length"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_join",children:"array_join"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Concatenates the elements of an array into a string."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"array_join(array, sep[, null_replace_str])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),": the array whose elements you want to concatenate. Only the ARRAY data type is supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sep"}),": the delimiter that is used to separate the concatenated array elements. Only the VARCHAR data type is supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"null_replace_str"}),": the string that is used to substitute ",(0,s.jsx)(n.code,{children:"NULL"})," values. Only the VARCHAR data type is supported."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the VARCHAR data type."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The value of the ",(0,s.jsx)(n.code,{children:"array"})," parameter must be a one-dimensional array."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"array"})," parameter does not support DECIMAL values."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you set the ",(0,s.jsx)(n.code,{children:"sep"})," parameter to ",(0,s.jsx)(n.code,{children:"NULL"}),", the return value is ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you do not specify the ",(0,s.jsx)(n.code,{children:"null_replace_str"})," parameter, ",(0,s.jsx)(n.code,{children:"NULL"})," values are discarded."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you set the ",(0,s.jsx)(n.code,{children:"null_replace_str"})," parameter to ",(0,s.jsx)(n.code,{children:"NULL"}),", the return value is ",(0,s.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Concatenate the elements of an array. In this example, the ",(0,s.jsx)(n.code,{children:"NULL"})," value in the array is discarded, and the concatenated array elements are separated by underscores (",(0,s.jsx)(n.code,{children:"_"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select array_join([1, 3, 5, null], '_');\n\n+-------------------------------+\n\n| array_join([1,3,5,NULL], '_') |\n\n+-------------------------------+\n\n| 1_3_5                         |\n\n+-------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Concatenate the elements of an array. In this example, the ",(0,s.jsx)(n.code,{children:"NULL"})," value in the array is substituted with ",(0,s.jsx)(n.code,{children:"NULL"})," strings, and the concatenated array elements are separated by underscores (",(0,s.jsx)(n.code,{children:"_"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select array_join([1, 3, 5, null], '_', 'NULL');\n\n+---------------------------------------+\n\n| array_join([1,3,5,NULL], '_', 'NULL') |\n\n+---------------------------------------+\n\n| 1_3_5_NULL                            |\n\n+---------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(a.Provider,{value:l},n)}}}]);