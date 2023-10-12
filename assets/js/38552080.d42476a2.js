"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55365],{27478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(85893),s=t(11151);const l={displayed_sidebar:"documentation"},r="time_slice",c={id:"sql-reference/sql-functions/date-time-functions/time_slice",title:"time_slice",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/time_slice.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/time_slice",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/time_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/time_slice.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"str_to_jodatime",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/str_to_jodatime"},next:{title:"time_to_sec",permalink:"/doc/docs/sql-reference/sql-functions/date-time-functions/time_to_sec"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"time_slice",children:"time_slice"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Converts a given time into the beginning or end of a time interval based on the specified time granularity."}),"\n",(0,i.jsx)(n.p,{children:"This function is supported from v2.3. v2.5 supports converting a given time into the end of a time interval."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"DATETIME time_slice(DATETIME dt, INTERVAL N type[, boundary])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dt"}),": the time to convert, DATETIME."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INTERVAL N type"}),": the time granularity, for example, ",(0,i.jsx)(n.code,{children:"interval 5 second"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"N"})," is the length of time interval. It must be an INT value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," is the unit, which can be YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, MINUTE, SECOND."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundary"}),": optional. It is used to specify whether to return the beginning (",(0,i.jsx)(n.code,{children:"FLOOR"}),") or end (",(0,i.jsx)(n.code,{children:"CEIL"}),") of the time interval. Valid values: FLOOR, CEIL. If this parameter is not specified, ",(0,i.jsx)(n.code,{children:"FLOOR"})," is the default. This parameter is supported from v2.5."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the DATETIME type."}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,i.jsxs)(n.p,{children:["The time interval starts from A.D. ",(0,i.jsx)(n.code,{children:"0001-01-01 00:00:00"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["The following examples are provided based on the ",(0,i.jsx)(n.code,{children:"test_all_type_select"})," table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select * from test_all_type_select order by id_int;\n\n+------------+---------------------+--------+\n| id_date    | id_datetime         | id_int |\n+------------+---------------------+--------+\n| 2052-12-26 | 1691-12-23 04:01:09 |      0 |\n| 2168-08-05 | 2169-12-18 15:44:31 |      1 |\n| 1737-02-06 | 1840-11-23 13:09:50 |      2 |\n| 2245-10-01 | 1751-03-21 00:19:04 |      3 |\n| 1889-10-27 | 1861-09-12 13:28:18 |      4 |\n+------------+---------------------+--------+\n5 rows in set (0.06 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example 1: Convert a given DATETIME value to the beginning of a 5-second time interval without specifying the ",(0,i.jsx)(n.code,{children:"boundary"})," parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 second)\nfrom test_all_type_select\norder by id_int;\n\n+---------------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 second, floor) |\n+---------------------------------------------------+\n| 1691-12-23 04:01:05                               |\n| 2169-12-18 15:44:30                               |\n| 1840-11-23 13:09:50                               |\n| 1751-03-21 00:19:00                               |\n| 1861-09-12 13:28:15                               |\n+---------------------------------------------------+\n5 rows in set (0.16 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example 2: Convert a given DATETIME value to the beginning of a 5-day time interval with  ",(0,i.jsx)(n.code,{children:"boundary"})," set to FLOOR."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 day, FLOOR)\nfrom test_all_type_select\norder by id_int;\n\n+------------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 day, floor) |\n+------------------------------------------------+\n| 1691-12-22 00:00:00                            |\n| 2169-12-16 00:00:00                            |\n| 1840-11-21 00:00:00                            |\n| 1751-03-18 00:00:00                            |\n| 1861-09-12 00:00:00                            |\n+------------------------------------------------+\n5 rows in set (0.15 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 3: Convert a given DATETIME value to the end of a 5-day time interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select time_slice(id_datetime, interval 5 day, CEIL)\nfrom test_all_type_select\norder by id_int;\n\n+-----------------------------------------------+\n| time_slice(id_datetime, INTERVAL 5 day, ceil) |\n+-----------------------------------------------+\n| 1691-12-27 00:00:00                           |\n| 2169-12-21 00:00:00                           |\n| 1840-11-26 00:00:00                           |\n| 1751-03-23 00:00:00                           |\n| 1861-09-17 00:00:00                           |\n+-----------------------------------------------+\n5 rows in set (0.12 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>l});var i=t(67294);const s=i.createContext({});function l(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:l(e),i.createElement(s.Provider,{value:c},n)}}}]);