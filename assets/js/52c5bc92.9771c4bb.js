"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21196],{2979:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(85893),i=r(11151);const l={displayed_sidebar:"English"},n="StarRocks version 1.19",o={id:"release_notes/release-1.19",title:"StarRocks version 1.19",description:"1.19.0",source:"@site/versioned_docs/version-2.3/release_notes/release-1.19.md",sourceDirName:"release_notes",slug:"/release_notes/release-1.19",permalink:"/docs/2.3/release_notes/release-1.19",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/release_notes/release-1.19.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"System variables",permalink:"/docs/2.3/reference/System_variable"},next:{title:"StarRocks version 2.0",permalink:"/docs/2.3/release_notes/release-2.0"}},a={},c=[{value:"1.19.0",id:"1190",level:2},{value:"New Feature",id:"new-feature",level:3},{value:"Improvement",id:"improvement",level:3},{value:"StarRocks",id:"starrocks",level:4},{value:"StarRocks-DataX Connector",id:"starrocks-datax-connector",level:4},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"1.19.1",id:"1191",level:2},{value:"Improvement",id:"improvement-1",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"1.19.2",id:"1192",level:2},{value:"Improvement",id:"improvement-2",level:3},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"1.19.3",id:"1193",level:2},{value:"Improvement",id:"improvement-3",level:3},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"1.19.4",id:"1194",level:2},{value:"Improvement",id:"improvement-4",level:3},{value:"Bug Fixes",id:"bug-fixes-4",level:3},{value:"1.19.5",id:"1195",level:2},{value:"Improvement",id:"improvement-5",level:3},{value:"Bug Fixes",id:"bug-fixes-5",level:3},{value:"1.19.7",id:"1197",level:2},{value:"Bug Fixes",id:"bug-fixes-6",level:3}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",h4:"h4",a:"a",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"starrocks-version-119",children:"StarRocks version 1.19"}),"\n",(0,t.jsx)(s.h2,{id:"1190",children:"1.19.0"}),"\n",(0,t.jsx)(s.p,{children:"Release date: Octorber 22, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"new-feature",children:"New Feature"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Implement Global Runtime Filter, which can enable runtime filter for shuffle join."}),"\n",(0,t.jsx)(s.li,{children:"CBO Planner is enabled by default, improved colocated join, bucket shuffle, statistical information estimation, etc."}),"\n",(0,t.jsx)(s.li,{children:"[Experimental Function] Primary Key model release: To better support real-time/frequent update feature, StarRocks has added a new table type: primary key model. The model supports Stream Load, Broker Load, Routine Load and also provides a second-level synchronization tool for MySQL data based on Flink-cdc."}),"\n",(0,t.jsx)(s.li,{children:"[Experimental Function] Support write function for external tables. Support writing data to another StarRocks cluster table by external tables to solve the read/write separation requirement and provide better resource isolation."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"improvement",children:"Improvement"}),"\n",(0,t.jsx)(s.h4,{id:"starrocks",children:"StarRocks"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Performance optimization.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"count distinct int statement"}),"\n",(0,t.jsx)(s.li,{children:"group by int statement"}),"\n",(0,t.jsx)(s.li,{children:"or statement"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Optimize disk balance algorithm. Data can be automatically balanced after adding disks to a single machine."}),"\n",(0,t.jsx)(s.li,{children:"Support partial column export."}),"\n",(0,t.jsx)(s.li,{children:"Optimize show processlist to show specific SQL."}),"\n",(0,t.jsx)(s.li,{children:"Support multiple variable settings in SET_VAR ."}),"\n",(0,t.jsx)(s.li,{children:"Improve the error reporting information, including table_sink, routine load, creation of materialized view, etc."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"starrocks-datax-connector",children:"StarRocks-DataX Connector"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Support setting interval flush StarRocks-DataX Writer."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Fix the issue that the dynamic partition table cannot be created automatically after the data recovery operation is completed. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/337",children:"# 337"})]}),"\n",(0,t.jsx)(s.li,{children:"Fix the problem of error reported by row_number function after CBO is opened."}),"\n",(0,t.jsx)(s.li,{children:"Fix the problem of FE stuck due to statistical information collection"}),"\n",(0,t.jsx)(s.li,{children:"Fix the problem that set_var takes effect for session but not for statements."}),"\n",(0,t.jsx)(s.li,{children:"Fix the problem that select count(*) returns abnormality on the Hive partition external table."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1191",children:"1.19.1"}),"\n",(0,t.jsx)(s.p,{children:"Release date: November 2, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"improvement-1",children:"Improvement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Optimize the performance of ",(0,t.jsx)(s.code,{children:"show frontends"}),". ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/507",children:"# 507"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/984",children:"# 984"})]}),"\n",(0,t.jsxs)(s.li,{children:["Add monitoring of slow queries. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/502",children:"# 502"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/891",children:"# 891"})]}),"\n",(0,t.jsxs)(s.li,{children:["Optimize the fetching of Hive external metadata to achieve parallel fetching.",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/425",children:"# 425"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/451",children:"# 451"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-1",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Fix the problem of Thrift protocol compatibility, so that the Hive external table can be connected with Kerberos. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/184",children:"# 184"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/947",children:"# 947"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/995",children:"# 995"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/999",children:"# 999"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix several bugs in view creation. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/972",children:"# 972"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/987",children:"# 987"}),(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1001",children:"# 1001"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the problem that FE cannot be upgraded in grayscale. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/485",children:"# 485"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/890",children:"# 890"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1192",children:"1.19.2"}),"\n",(0,t.jsx)(s.p,{children:"Release date: November 20, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"improvement-2",children:"Improvement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["bucket shuffle join support right join and full outer join ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1209",children:"# 1209"}),"  ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1234",children:"# 31234"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-2",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Fix the problem that repeat node cannot do predicate push-down",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1410",children:"# 1410"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1417",children:"# 1417"})]}),"\n",(0,t.jsxs)(s.li,{children:["Repair the problem that routine load may lost data when the cluster alter leader node during import.",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1074",children:"# 1074"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1272",children:"# 1272"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the problem that creation view cannot support union ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1083",children:"# 1083"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix some stability issues of Hive external table",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1408",children:"# 1408"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix an issue with group by view",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1231",children:"# 1231"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1193",children:"1.19.3"}),"\n",(0,t.jsx)(s.p,{children:"Release date: November 30, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"improvement-3",children:"Improvement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Upgrade jprotobuf version to improve security ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/1506",children:"# 1506"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-3",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Fix some problems with group by result correctness"}),"\n",(0,t.jsxs)(s.li,{children:["Fix some problems with grouping sets",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/issues/1395",children:"# 1395"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1119",children:"# 1119"})]}),"\n",(0,t.jsx)(s.li,{children:"Fix the problem of some indicators of date_format"}),"\n",(0,t.jsxs)(s.li,{children:["Fix a boundary condition issue with aggregated streamming",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1584",children:"# 1584"})]}),"\n",(0,t.jsxs)(s.li,{children:["For details, please refer to",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/compare/1.19.2...1.19.3",children:"link"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1194",children:"1.19.4"}),"\n",(0,t.jsx)(s.p,{children:"Release date: December 9, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"improvement-4",children:"Improvement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Support cast(varchar as bitmap) ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1941",children:"# 1941"})]}),"\n",(0,t.jsxs)(s.li,{children:["Update access policy of hive external table ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1394",children:"# 1394"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1807",children:"# 1807"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-4",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Fix the bug of wrong query result with predicate Cross Join ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1918",children:"# 1918"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the bug of decimal type and time type conversion ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1709",children:"# 1709"})," ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1738",children:"# 1738"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the bug of colocate join/replicate join selection error ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/1727",children:"# 1727"})]}),"\n",(0,t.jsx)(s.li,{children:"Fix several plan cost calculation problems"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1195",children:"1.19.5"}),"\n",(0,t.jsx)(s.p,{children:"Release date: December 20, 2021"}),"\n",(0,t.jsx)(s.h3,{id:"improvement-5",children:"Improvement"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A plan to optimize shuffle join ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/2184",children:"# 2184"})]}),"\n",(0,t.jsxs)(s.li,{children:["Optimize multiple large file imports ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/2067",children:"# 2067"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-5",children:"Bug Fixes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Upgrade Log4j2 to 2.17.0, fix security vulnerabilities",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/2284",children:"# 2284"}),(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/2290",children:"# 2290"})]}),"\n",(0,t.jsxs)(s.li,{children:["Fix the problem of empty partition in Hive external table",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/707",children:"# 707"}),(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/2082",children:"# 2082"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"1197",children:"1.19.7"}),"\n",(0,t.jsx)(s.p,{children:"Release date: March 18, 2022"}),"\n",(0,t.jsx)(s.h3,{id:"bug-fixes-6",children:"Bug Fixes"}),"\n",(0,t.jsx)(s.p,{children:"The following bugs are fixed:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["dataformat will produce different results in different versions. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/4165",children:"#4165"})]}),"\n",(0,t.jsxs)(s.li,{children:["BE nodes may fail because Parquet files are deleted by mistake during data loading. ",(0,t.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks/pull/3521",children:"#3521"})]}),"\n"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>o,ah:()=>l});var t=r(67294);const i=t.createContext({});function l(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const n={};function o({components:e,children:s,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||n:l(e),t.createElement(i.Provider,{value:o},s)}}}]);