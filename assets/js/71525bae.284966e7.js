"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62286],{98686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(85893),s=n(11151);const r={displayed_sidebar:"English"},d="timestampdiff",a={id:"sql-reference/sql-functions/date-time-functions/timestampdiff",title:"timestampdiff",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/date-time-functions/timestampdiff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampdiff",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/timestampdiff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/timestampdiff.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"timestampadd",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/timestampadd"},next:{title:"to_date",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/to_date"}},o={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,i.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"INT TIMESTAMPDIFF(unit,DATETIME datetime_expr1, DATETIME datetime_expr2)"})}),"\n",(0,i.jsx)(t.p,{children:"Timestampdiff returns the interval from datetime_expr2 to datetime_expr1. Here, datetime_expr1 and datetime_expr2 should be date or datetime expressions."}),"\n",(0,i.jsx)(t.p,{children:"The unit for the integer result and the interval should be one of the following:"}),"\n",(0,i.jsx)(t.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plain",metastring:"text",children:"\nMySQL> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(t.p,{children:"TIMESTAMPDIFF"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var i=n(67294);const s=i.createContext({});function r(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||d:r(e),i.createElement(s.Provider,{value:a},t)}}}]);