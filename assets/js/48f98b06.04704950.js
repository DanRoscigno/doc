"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29678],{38158:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(85893),a=t(11151);const r={displayed_sidebar:"documentation"},i="last_day",d={id:"sql-reference/sql-functions/date-time-functions/last_day",title:"last_day",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/last_day.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/last_day",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/last_day",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/last_day.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"jodatime_format",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/jodatime_format"},next:{title:"makedate",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/makedate"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"last_day",children:"last_day"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the last day of an input DATE or DATETIME expression based on the specified date part. For example, ",(0,s.jsx)(n.code,{children:"last_day('2023-05-10', 'month')"})," returns the last day of the month in which '2023-05-10' falls."]}),"\n",(0,s.jsx)(n.p,{children:"If the date part is not specified, this function returns the last day of the month for a given date."}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v3.1."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DATE last_day(DATETIME|DATE date_expr[, VARCHAR unit])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"date_expr"}),": a DATE or DATETIME expression, required."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"unit"}),": the date part, optional. Valid values include ",(0,s.jsx)(n.code,{children:"month"}),", ",(0,s.jsx)(n.code,{children:"quarter"}),", and ",(0,s.jsx)(n.code,{children:"year"}),", default to ",(0,s.jsx)(n.code,{children:"month"}),". If ",(0,s.jsx)(n.code,{children:"unit"})," is invalid, an error is returned."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a DATE value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"MySQL > select last_day('2023-05-10', 'month');\n+----------------------------------+\n| last_day('2023-05-10', 'month')  |\n+----------------------------------+\n| 2023-05-31                       |\n+----------------------------------+\n\nMySQL > select last_day('2023-05-10');\n+------------------------+\n| last_day('2023-05-10') |\n+------------------------+\n| 2023-05-31             |\n+------------------------+\n\nMySQL > select last_day('2023-05-10', 'quarter');\n+-----------------------------------+\n| last_day('2023-05-10', 'quarter') |\n+-----------------------------------+\n| 2023-06-30                        |\n+-----------------------------------+\n\nMySQL > select last_day('2023-05-10', 'year');\n+---------------------------------------+\n| last_day('2023-05-10', 'year')        |\n+---------------------------------------+\n| 2023-12-31                            |\n+---------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"LAST_DAY, LAST"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:d},n)}}}]);