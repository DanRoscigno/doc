"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27106],{9332:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=s(85893),i=s(11151);const l={displayed_sidebar:"documentation"},r="ISNULL",c={id:"sql-reference/sql-functions/utility-functions/isnull",title:"ISNULL",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/utility-functions/isnull.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/isnull",permalink:"/doc/docs/2.5/sql-reference/sql-functions/utility-functions/isnull",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/utility-functions/isnull.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"host_name",permalink:"/doc/docs/2.5/sql-reference/sql-functions/utility-functions/host_name"},next:{title:"last_query_id",permalink:"/doc/docs/2.5/sql-reference/sql-functions/utility-functions/last_query_id"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example",id:"example",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"isnull",children:"ISNULL"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Checks whether the value is ",(0,t.jsx)(n.code,{children:"NULL"}),", returns ",(0,t.jsx)(n.code,{children:"1"})," if it is ",(0,t.jsx)(n.code,{children:"NULL"}),", and returns ",(0,t.jsx)(n.code,{children:"0"})," if it is not ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"ISNULL(v)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"v"}),": the value to check. All date types is supported."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsxs)(n.p,{children:["Returns 1 if it is ",(0,t.jsx)(n.code,{children:"NULL"}),", and returns 0 if it is not ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MYSQL > SELECT c1, isnull(c1) FROM t1;\n+------+--------------+\n| c1   | `c1` IS NULL |\n+------+--------------+\n| NULL |            1 |\n|    1 |            0 |\n+------+--------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>l});var t=s(67294);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(i.Provider,{value:c},n)}}}]);