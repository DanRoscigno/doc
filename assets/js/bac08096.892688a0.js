"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27039],{83283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},o="DROP FUNCTION",a={id:"sql-reference/sql-statements/data-definition/drop-function",title:"DROP FUNCTION",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/drop-function.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/drop-function",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/drop-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/drop-function.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"CREATE FUNCTION",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/create-function"},next:{title:"SHOW FUNCTIONS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/show-functions"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-function",children:"DROP FUNCTION"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Deletes a custom function. The function can only be deleted when its name and parameter type are consistent."}),"\n",(0,s.jsx)(n.p,{children:"Only the owner of the custom function have the permissions to delete the function."}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION function_name(arg_type [, ...])\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"function_name"}),": the name of function to be dropped."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arg_type"}),": the argument type of function to be dropped."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop a function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);