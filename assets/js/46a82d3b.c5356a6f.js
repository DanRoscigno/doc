"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18181],{29396:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(85893),t=a(11151);const s={displayed_sidebar:"documentation"},c="array_concat",l={id:"sql-reference/sql-functions/array-functions/array_concat",title:"array_concat",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_concat.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_concat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_concat.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"array_avg",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_avg"},next:{title:"array_contains",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_contains"}},o={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_concat",children:"array_concat"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Concatenates multiple arrays into one array that contains all the elements in the arrays."}),"\n",(0,r.jsx)(n.p,{children:"Elements in the arrays to concatenate can be of the same type or different types. However, we recommend that the elements be of the same type."}),"\n",(0,r.jsx)(n.p,{children:"Nulls are processed as normal values."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"array_concat(input0, input1, ...)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"input"}),": one or more arrays that you want to concatenate. Specify arrays in the ",(0,r.jsx)(n.code,{children:"(input0, input1, ...)"})," format. This function supports the following types of array elements: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, DECIMALV2, DATETIME, DATE, and JSON. ",(0,r.jsx)(n.strong,{children:"JSON is supported from 2.5."})]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an array that contains all the elements held in the arrays that are specified by the ",(0,r.jsx)(n.code,{children:"input"})," parameter. The elements of the returned array are of the same data type as the elements of the input arrays. Additionally, the elements of the returned array follow the order of the input arrays and their elements."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Concatenate arrays that contain numeric elements."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"select array_concat([57.73,97.32,128.55,null,324.2], [3], [5]) as res;\n\n+-------------------------------------+\n\n| res                                 |\n\n+-------------------------------------+\n\n| [57.73,97.32,128.55,null,324.2,3,5] |\n\n+-------------------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Concatenate arrays that contain string elements."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'select array_concat(["sql","storage","execute"], ["Query"], ["Vectorized", "cbo"]);\n\n+----------------------------------------------------------------------------+\n\n| array_concat([\'sql\',\'storage\',\'execute\'], [\'Query\'], [\'Vectorized\',\'cbo\']) |\n\n+----------------------------------------------------------------------------+\n\n| ["sql","storage","execute","Query","Vectorized","cbo"]                     |\n\n+----------------------------------------------------------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: Concatenate two arrays of different types."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'select array_concat([57,65], ["pear","apple"]);\n+-------------------------------------------+\n| array_concat([57, 65], [\'pear\', \'apple\']) |\n+-------------------------------------------+\n| ["57","65","pear","apple"]                |\n+-------------------------------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 4: Process nulls as normal values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'select array_concat(["sql",null], [null], ["Vectorized", null]);\n\n+---------------------------------------------------------+\n\n| array_concat([\'sql\',NULL], [NULL], [\'Vectorized\',NULL]) |\n\n+---------------------------------------------------------+\n\n| ["sql",null,null,"Vectorized",null]                     |\n\n+---------------------------------------------------------+\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>l,ah:()=>s});var r=a(67294);const t=r.createContext({});function s(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||c:s(e),r.createElement(t.Provider,{value:l},n)}}}]);