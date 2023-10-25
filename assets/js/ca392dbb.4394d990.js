"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64881],{26180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},c="timediff",d={id:"sql-reference/sql-functions/date-time-functions/timediff",title:"timediff",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/date-time-functions/timediff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timediff",permalink:"/docs/2.2/sql-reference/sql-functions/date-time-functions/timediff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/timediff.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"str_to_date",permalink:"/docs/2.2/sql-reference/sql-functions/date-time-functions/str_to_date"},next:{title:"timestampadd",permalink:"/docs/2.2/sql-reference/sql-functions/date-time-functions/timestampadd"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"timediff",children:"timediff"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the difference between two DATETIME expressions."}),"\n",(0,s.jsx)(n.p,{children:"The return value must be of the TIME type."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TIME TIMEDIFF(DATETIME expr1, DATETIME expr2)`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT TIMEDIFF(now(),utc_timestamp());\n+----------------------------------+\n| timediff(now(), utc_timestamp()) |\n+----------------------------------+\n| 08:00:00                         |\n+----------------------------------+\n\nMySQL > SELECT TIMEDIFF('2019-07-11 16:59:30','2019-07-11 16:59:21');\n+--------------------------------------------------------+\n| timediff('2019-07-11 16:59:30', '2019-07-11 16:59:21') |\n+--------------------------------------------------------+\n| 00:00:09                                               |\n+--------------------------------------------------------+\n\nMySQL > SELECT TIMEDIFF('2019-01-01 00:00:00', NULL);\n+---------------------------------------+\n| timediff('2019-01-01 00:00:00', NULL) |\n+---------------------------------------+\n| NULL                                  |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"TIMEDIFF"})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:d},n)}}}]);