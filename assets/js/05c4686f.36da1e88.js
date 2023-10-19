"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14626],{20131:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var n=a(85893),s=a(11151);const t={displayed_sidebar:"English"},i="array_sum",l={id:"sql-reference/sql-functions/array-functions/array_sum",title:"array_sum",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_sum.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sum",permalink:"/docs/sql-reference/sql-functions/array-functions/array_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_sum.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_sortby",permalink:"/docs/sql-reference/sql-functions/array-functions/array_sortby"},next:{title:"array_to_bitmap",permalink:"/docs/sql-reference/sql-functions/array-functions/array_to_bitmap"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Use array_sum without lambda function",id:"use-array_sum-without-lambda-function",level:3},{value:"Use array_sum with lambda function",id:"use-array_sum-with-lambda-function",level:3},{value:"keyword",id:"keyword",level:2}];function o(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"array_sum",children:"array_sum"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Sums all the elements in an array."}),"\n",(0,n.jsxs)(r.p,{children:["From StarRocks 2.5, array_sum() can take a lambda expression as an argument. However, it cannot work directly with the Lambda expression. It must work on the result converted from ",(0,n.jsx)(r.a,{href:"/docs/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Haskell",children:"array_sum(array(type))\narray_sum(lambda_function, arr1,arr2...) = array_sum(array_map(lambda_function, arr1,arr2...))\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"array(type)"}),": the array you want to calculate the sum. Array elements support the following data types: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, and DECIMALV2."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"lambda_function"}),": the lambda expression used to calculate the target array for array_sum()."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsx)(r.p,{children:"Returns a numeric value."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.h3,{id:"use-array_sum-without-lambda-function",children:"Use array_sum without lambda function"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"mysql> select array_sum([11, 11, 12]);\n+-----------------------+\n| array_sum([11,11,12]) |\n+-----------------------+\n| 34                    |\n+-----------------------+\n\nmysql> select array_sum([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_sum([11.33,11.11,12.324]) |\n+---------------------------------+\n| 34.764                          |\n+---------------------------------+\n"})}),"\n",(0,n.jsx)(r.h3,{id:"use-array_sum-with-lambda-function",children:"Use array_sum with lambda function"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"-- Multiply [1,2,3] by [1,2,3] and sum the elements.\nselect array_sum(array_map(x->x*x,[1,2,3]));\n+---------------------------------------------+\n| array_sum(array_map(x -> x * x, [1, 2, 3])) |\n+---------------------------------------------+\n|                                          14 |\n+---------------------------------------------+\n"})}),"\n",(0,n.jsx)(r.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(r.p,{children:"ARRAY_SUM,ARRAY"})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,r,a)=>{a.d(r,{Zo:()=>l,ah:()=>t});var n=a(67294);const s=n.createContext({});function t(e){const r=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function l({components:e,children:r,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||i:t(e),n.createElement(s.Provider,{value:l},r)}}}]);