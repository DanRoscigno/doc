"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63780],{74941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(85893),s=t(11151);const a={},l="date_slice",r={id:"sql-reference/sql-functions/date-time-functions/date_slice",title:"date_slice",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_slice.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_slice",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_slice.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"date_format",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format"},next:{title:"date_sub",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_sub"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"date_slice",children:"date_slice"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Converts a given time into the beginning or end of a time interval based on the specified time granularity."}),"\n",(0,i.jsx)(n.p,{children:"This function is supported from v2.5."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"DATE time_slice(DATE dt, INTERVAL N type[, boundary])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dt"}),": the time to convert, DATE."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INTERVAL N type"}),": the time granularity, for example, ",(0,i.jsx)(n.code,{children:"interval 5 day"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"N"})," is the length of time interval. It must be an INT value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," is the unit, which can be YEAR, QUARTER, MONTH, WEEK, DAY.  If ",(0,i.jsx)(n.code,{children:"type"})," is set to HOUR, MINUTE, or SECOND for a DATE value, an error is returned."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"boundary"}),": optional. It is used to specify whether to return the beginning (",(0,i.jsx)(n.code,{children:"FLOOR"}),") or end (",(0,i.jsx)(n.code,{children:"CEIL"}),") of the time interval. Valid values: FLOOR, CEIL. If this parameter is not specified, ",(0,i.jsx)(n.code,{children:"FLOOR"})," is the default."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Returns a value of the DATE type."}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,i.jsxs)(n.p,{children:["The time interval starts from A.D. ",(0,i.jsx)(n.code,{children:"0001-01-01 00:00:00"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Example 1: Convert a given time to the beginning of a 5-year time interval without specifying the ",(0,i.jsx)(n.code,{children:"boundary"})," parameter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice('2022-04-26', interval 5 year);\n+--------------------------------------------------+\n| date_slice('2022-04-26', INTERVAL 5 year, floor) |\n+--------------------------------------------------+\n| 2021-01-01                                       |\n+--------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 2: Convert a given time to the end of a 5-day time interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice('0001-01-07', interval 5 day, CEIL);\n+------------------------------------------------+\n| date_slice('0001-01-07', INTERVAL 5 day, ceil) |\n+------------------------------------------------+\n| 0001-01-11                                     |\n+------------------------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following examples are provided based on the ",(0,i.jsx)(n.code,{children:"test_all_type_select"})," table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select * from test_all_type_select order by id_int;\n+------------+---------------------+--------+\n| id_date    | id_datetime         | id_int |\n+------------+---------------------+--------+\n| 2052-12-26 | 1691-12-23 04:01:09 |      0 |\n| 2168-08-05 | 2169-12-18 15:44:31 |      1 |\n| 1737-02-06 | 1840-11-23 13:09:50 |      2 |\n| 2245-10-01 | 1751-03-21 00:19:04 |      3 |\n| 1889-10-27 | 1861-09-12 13:28:18 |      4 |\n+------------+---------------------+--------+\n5 rows in set (0.06 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 3: Convert a given DATE value to the beginning of a 5-second time interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 second, FLOOR)\nfrom test_all_type_select\norder by id_int;\nERROR 1064 (HY000): can't use date_slice for date with time(hour/minute/second)\n"})}),"\n",(0,i.jsx)(n.p,{children:"An error is returned because the system cannot find the second part of a DATE value."}),"\n",(0,i.jsx)(n.p,{children:"Example 4: Convert a given DATE value to the beginning of a 5-day time interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 day, FLOOR)\nfrom test_all_type_select\norder by id_int;\n+--------------------------------------------+\n| date_slice(id_date, INTERVAL 5 day, floor) |\n+--------------------------------------------+\n| 2052-12-24                                 |\n| 2168-08-03                                 |\n| 1737-02-04                                 |\n| 2245-09-29                                 |\n| 1889-10-25                                 |\n+--------------------------------------------+\n5 rows in set (0.14 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example 5: Convert a given DATE value to the end of a 5-day time interval."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plaintext",children:"select date_slice(id_date, interval 5 day, CEIL)\nfrom test_all_type_select\norder by id_int;\n+-------------------------------------------+\n| date_slice(id_date, INTERVAL 5 day, ceil) |\n+-------------------------------------------+\n| 2052-12-29                                |\n| 2168-08-08                                |\n| 1737-02-09                                |\n| 2245-10-04                                |\n| 1889-10-30                                |\n+-------------------------------------------+\n5 rows in set (0.17 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:a(e),i.createElement(s.Provider,{value:r},n)}}}]);