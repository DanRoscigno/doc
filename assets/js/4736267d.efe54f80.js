"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34863],{68093:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(85893),r=t(11151);const a={},i="years_sub",c={id:"sql-reference/sql-functions/date-time-functions/years_sub",title:"years_sub",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/years_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/years_sub",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/years_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/years_sub.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"years_diff",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/years_diff"},next:{title:"Function list",permalink:"/docs/3.0/sql-reference/sql-functions/function-list"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"years_sub",children:"years_sub"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Subtracts the specified number of years from the specified datetime or date."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Haskell",children:"DATETIME YEARS_SUB(DATETIME date, INT years)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"date"}),": The original date time, of type DATETIME or DATE."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"years"}),": The number of years to subtract. The value can be negative, but date year minus years can't exceed 10000. For example, if the year of date is 2022, then years can't be less than -7979. At the same time, the years cann't exceed the year value of date, for example, if the year value of date is 2022, then years can't be greater than 2022."]}),"\n",(0,n.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsxs)(s.p,{children:["The return value type is the same as the parameter ",(0,n.jsx)(s.code,{children:"date"}),". Returns NULL if the result year is out of range [0, 9999]."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select years_sub(\"2022-12-20 15:50:21\", 2);\n+-------------------------------------+\n| years_sub('2022-12-20 15:50:21', 2) |\n+-------------------------------------+\n| 2020-12-20 15:50:21                 |\n+-------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:c},s)}}}]);