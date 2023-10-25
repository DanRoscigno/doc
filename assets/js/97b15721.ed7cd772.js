"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18526],{26741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(85893),a=t(11151);const i={displayed_sidebar:"English"},o="dayofweek",r={id:"sql-reference/sql-functions/date-time-functions/dayofweek",title:"dayofweek",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/date-time-functions/dayofweek.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/dayofweek",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/dayofweek",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/dayofweek.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"dayofmonth",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/dayofmonth"},next:{title:"dayofyear",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/dayofyear"}},d={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dayofweek",children:"dayofweek"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT dayofweek(DATETIME date)\n"})}),"\n",(0,s.jsx)(n.p,{children:"DAYOFWEEK function returns the weekday index for a given date. (e.g. Monday: 1, Tuesday: 2, Saturday: 7)"}),"\n",(0,s.jsx)(n.p,{children:"The parameter is Date or Datetime type. It can also be casted as numbers in Date or Datetime type."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select dayofweek('2019-06-25');\n+----------------------------------+\n| dayofweek('2019-06-25 00:00:00') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n\nMySQL > select dayofweek(cast(20190625 as date));\n+-----------------------------------+\n| dayofweek(CAST(20190625 AS DATE)) |\n+-----------------------------------+\n|                                 3 |\n+-----------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"DAYOFWEEK"})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:i(e),s.createElement(a.Provider,{value:r},n)}}}]);