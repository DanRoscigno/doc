"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88404],{32062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(11151);const a={displayed_sidebar:"English"},i="date",c={id:"sql-reference/sql-functions/date-time-functions/date",title:"date",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/date.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"curtime,current_time",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/curtime"},next:{title:"date_add",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_add"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date",children:"date"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Extracts the date part of a date or datetime expression."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATE date(DATETIME|DATE expr)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"expr"}),": the date or datetime expression."]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(t.p,{children:"Returns a value of the DATE type. NULL is returned if the input is NULL or invalid."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Extract the date part of a datetime value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"SELECT DATE(\"2017-12-31 11:20:59\");\n+-----------------------------+\n| date('2017-12-31 11:20:59') |\n+-----------------------------+\n| 2017-12-31                  |\n+-----------------------------+\n1 row in set (0.05 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Extract the date part of a date value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"SELECT DATE('2017-12-31');\n+--------------------+\n| date('2017-12-31') |\n+--------------------+\n| 2017-12-31         |\n+--------------------+\n1 row in set (0.08 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 3: Extract the date part of the current timestamp."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"SELECT DATE(current_timestamp());\n+---------------------------+\n| date(current_timestamp()) |\n+---------------------------+\n| 2022-11-08                |\n+---------------------------+\n1 row in set (0.05 sec)\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(67294);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:c},t)}}}]);