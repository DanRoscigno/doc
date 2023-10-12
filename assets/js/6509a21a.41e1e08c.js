"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[2356],{52292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var s=n(85893),r=n(11151);const a={displayed_sidebar:"documentation"},d="CREATE FUNCTION",i={id:"sql-reference/sql-statements/data-definition/create-function",title:"CREATE FUNCTION",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/create-function.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/create-function",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/create-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/create-function.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"USE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/USE"},next:{title:"DROP FUNCTION",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/drop-function"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",blockquote:"blockquote",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-function",children:"CREATE FUNCTION"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Creates a user-defined function (UDF). Currently, you can only create Java UDFs, including Scalar functions, user-defined aggregate functions (UDAFs), user-defined window functions (UDWFs), and user-defined table functions (UDTFs)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["For details about how to compile, create, and use a Java UDF, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/JAVA_UDF",children:"Java UDF"}),"."]})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(t.p,{children:"To create a global UDF, you must have the SYSTEM-level CREATE GLOBAL FUNCTION privilege. To create a database-wide UDF, you must have the DATABASE-level CREATE FUNCTION privilege."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE [GLOBAL][AGGREGATE | TABLE] FUNCTION function_name\n(arg_type [, ...])\nRETURNS return_type\nPROPERTIES ("key" = "value" [, ...])\n'})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GLOBAL"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Whether to create a global UDF, supported from v3.0."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AGGREGATE"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Whether to create a UDAF or UDWF."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TABLE"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Whether to create a UDTF. If both ",(0,s.jsx)(t.code,{children:"AGGREGATE"})," and ",(0,s.jsx)(t.code,{children:"TABLE"})," are not specified, a Scalar function is created."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"function_name"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["The name of the function you want to create. You can include the name of the database in this parameter, for example,",(0,s.jsx)(t.code,{children:"db1.my_func"}),". If ",(0,s.jsx)(t.code,{children:"function_name"})," includes the database name, the UDF is created in that database. Otherwise, the UDF is created in the current database. The name of the new function and its parameters cannot be the same as an existing name in the destination database. Otherwise, the function cannot be created. The creation succeeds if the function name is the same but the parameters are different."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arg_type"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["Argument type of the function. The added argument can be represented by ",(0,s.jsx)(t.code,{children:", ..."}),". For the supported data types, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/JAVA_UDF#mapping-between-sql-data-types-and-java-data-types",children:"Java UDF"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"return_type"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["The return type of the function. For the supported data types, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/JAVA_UDF#mapping-between-sql-data-types-and-java-data-types",children:"Java UDF"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PROPERTIES"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsxs)(t.td,{children:["Properties of the function, which vary depending on the type of the UDF to create. For details, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/JAVA_UDF#step-6-create-the-udf-in-starrocks",children:"Java UDF"}),"\u3002"]})]})]})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var s=n(67294);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||d:a(e),s.createElement(r.Provider,{value:i},t)}}}]);