"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22657],{71607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=t(85893),r=t(11151);const i={displayed_sidebar:"English"},c="percentile_empty",l={id:"sql-reference/sql-functions/percentile-functions/percentile_empty",title:"percentile_empty",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/percentile-functions/percentile_empty.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_empty",permalink:"/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/percentile-functions/percentile_empty.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"percentile_approx_raw",permalink:"/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_approx_raw"},next:{title:"percentile_hash",permalink:"/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_hash"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_empty",children:"percentile_empty"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Constructs a PERCENTILE value, which is used to fill in null values for data loading using ",(0,s.jsx)(n.a,{href:"/docs/2.5/loading/StreamLoad",children:"Stream Load"})," or ",(0,s.jsx)(n.a,{href:"/docs/2.5/loading/InsertInto",children:"INSERT INTO"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_EMPTY();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a PERCENTILE value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Create a table. The ",(0,s.jsx)(n.code,{children:"percent"})," column is a PERCENTILE column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `aggregate_tbl` (\n  `site_id` largeint(40) NOT NULL COMMENT "id of site",\n  `date` date NOT NULL COMMENT "time of event",\n  `city_code` varchar(20) NULL COMMENT "city_code of user",\n  `pv` bigint(20) SUM NULL DEFAULT "0" COMMENT "total page views",\n  `percent` PERCENTILE PERCENTILE_UNION COMMENT "others"\n) ENGINE=OLAP\nAGGREGATE KEY(`site_id`, `date`, `city_code`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`site_id`) BUCKETS 8\nPROPERTIES ("replication_num" = "3");\n'})}),"\n",(0,s.jsx)(n.p,{children:"Insert data into the table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aggregate_tbl VALUES\n(5, '2020-02-23', 'city_code', 555, percentile_empty());\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:i(e),s.createElement(r.Provider,{value:l},n)}}}]);