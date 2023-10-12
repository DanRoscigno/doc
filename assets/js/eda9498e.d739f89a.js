"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79462],{76901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const c={displayed_sidebar:"documentation"},i="row",o={id:"sql-reference/sql-functions/struct-functions/row",title:"row",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/struct-functions/row.md",sourceDirName:"sql-reference/sql-functions/struct-functions",slug:"/sql-reference/sql-functions/struct-functions/row",permalink:"/doc/docs/3.0/sql-reference/sql-functions/struct-functions/row",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/struct-functions/row.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Struct Functions",permalink:"/doc/docs/3.0/category/struct-functions"},next:{title:"Utility Functions",permalink:"/doc/docs/3.0/category/utility-functions"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"row",children:"row"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Create an unnamed STRUCT/ROW value from the given values."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"STRUCT row(ANY val, ...)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"This function is a variable argument function. Callers should give at least one argument."}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Return a STRUCT value which is consisted from the input values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:'select row(1,"Star","Rocks");\n+-------------------------+\n| row(1, \'Star\', \'Rocks\') |\n+-------------------------+\n| {1,"Star","Rocks"}      |\n+-------------------------+\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:'select row("StarRocks", NULL);\n+------------------------+\n| row(\'StarRocks\', NULL) |\n+------------------------+\n| {"StarRocks",null}     |\n+------------------------+\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>c});var s=t(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:c(e),s.createElement(r.Provider,{value:o},n)}}}]);