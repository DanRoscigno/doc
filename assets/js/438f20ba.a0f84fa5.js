"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22810],{64369:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},d="weeks_add",a={id:"sql-reference/sql-functions/date-time-functions/weeks_add",title:"weeks_add",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/date-time-functions/weeks_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/weeks_add",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/weeks_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/weeks_add.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"weekofyear",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/weekofyear"},next:{title:"weeks_diff",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/weeks_diff"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"weeks_add",children:"weeks_add"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds a specified number of weeks to a date."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME weeks_add(DATETIME|DATE expr1, INT expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": the original date. It must be of the DATETIME or DATE type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": the number of weeks to add. It must be of the ",(0,t.jsx)(n.code,{children:"INT"})," type."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a DATETIME value."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NULL"})," is returned if the date does not exist."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select weeks_add('2022-12-20',2);\n+----------------------------+\n| weeks_add('2022-12-20', 2) |\n+----------------------------+\n|        2023-01-03 00:00:00 |\n+----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||d:r(e),t.createElement(i.Provider,{value:a},n)}}}]);