"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26781],{56536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const r={displayed_sidebar:"documentation"},o="str_to_jodatime",a={id:"sql-reference/sql-functions/date-time-functions/str_to_jodatime",title:"str_to_jodatime",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/str_to_jodatime.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/str_to_jodatime",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/str_to_jodatime",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/str_to_jodatime.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"str_to_date",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/str_to_date"},next:{title:"time_slice",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/time_slice"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",div:"div",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"str_to_jodatime",children:"str_to_jodatime"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a joda-formatted string into a DATETIME value according to the specified format."}),"\n",(0,s.jsxs)(t.p,{children:["The format is ",(0,s.jsx)(t.a,{href:"https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html",children:"Joda DateTime"}),", which is like 'yyyy-MM-dd HH:mm",(0,s.jsx)(t.div,{}),"'."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DATETIME str_to_jodatime(VARCHAR str, VARCHAR format)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"str"}),": the time expression you want to convert. It must be of the VARCHAR type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"format"}),": the Joda DateTime format"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Returns a `DATETIME`` value if parse succeed."}),"\n",(0,s.jsxs)(t.li,{children:["Returns ",(0,s.jsx)(t.code,{children:"NULL"})," if parse failed"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Convert the input into a DATETIME value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select str_to_jodatime('2014-12-21 12:34:56', 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------------------+\n| str_to_jodatime('2014-12-21 12:34:56', 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Convert the input into a DATETIME value with text-style month"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select str_to_jodatime('21/December/23 12:34:56', 'dd/MMMM/yy HH:mm:ss');\n+------------------------------------------------------------------+\n| str_to_jodatime('21/December/23 12:34:56', 'dd/MMMM/yy HH:mm:ss') |\n+------------------------------------------------------------------+\n| 2023-12-21 12:34:56                                              |\n+------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 3: Convert the input into a DATETIME value with milliseconds precision"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL root@127.1:(none)> select str_to_jodatime('21/December/23 12:34:56.123', 'dd/MMMM/yy HH:mm:ss.SSS');\n+--------------------------------------------------------------------------+\n| str_to_jodatime('21/December/23 12:34:56.123', 'dd/MMMM/yy HH:mm:ss.SSS') |\n+--------------------------------------------------------------------------+\n| 2023-12-21 12:34:56.123000                                               |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"str_to_jodatime, DATETIME"})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},t)}}}]);