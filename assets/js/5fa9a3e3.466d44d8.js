"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37708],{66755:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=s(85893),i=s(11151);const r={displayed_sidebar:"English"},a="timestamp",c={id:"sql-reference/sql-functions/date-time-functions/timestamp",title:"timestamp",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestamp",permalink:"/docs/sql-reference/sql-functions/date-time-functions/timestamp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/timestamp.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"timediff",permalink:"/docs/sql-reference/sql-functions/date-time-functions/timediff"},next:{title:"timestampadd",permalink:"/docs/sql-reference/sql-functions/date-time-functions/timestampadd"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"timestamp",children:"timestamp"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Returns the DATETIME value of a date or datetime expression."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Haskell",children:"DATETIME timestamp(DATETIME|DATE expr);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"expr"}),": the time expression you want to convert. It must be of the DATETIME or DATE type."]}),"\n",(0,n.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,n.jsxs)(t.p,{children:["Returns a DATETIME value. If the input time is empty or does not exist, such as ",(0,n.jsx)(t.code,{children:"2021-02-29"}),", NULL is returned."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"select timestamp(\"2019-05-27\");\n+-------------------------+\n| timestamp('2019-05-27') |\n+-------------------------+\n| 2019-05-27 00:00:00     |\n+-------------------------+\n1 row in set (0.00 sec)\n"})})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:c},t)}}}]);