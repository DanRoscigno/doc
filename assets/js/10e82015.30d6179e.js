"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29783],{99065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(85893),s=t(11151);const i={displayed_sidebar:"documentation"},c="percentile_approx_raw",l={id:"sql-reference/sql-functions/percentile-functions/percentile_approx_raw",title:"percentile_approx_raw",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_approx_raw.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_approx_raw",permalink:"/doc/docs/sql-reference/sql-functions/percentile-functions/percentile_approx_raw",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/percentile-functions/percentile_approx_raw.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Percentile Functions",permalink:"/doc/docs/category/percentile-functions"},next:{title:"percentile_empty",permalink:"/doc/docs/sql-reference/sql-functions/percentile-functions/percentile_empty"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"percentile_approx_raw",children:"percentile_approx_raw"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Returns the value that corresponds to a specified percentile from ",(0,r.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"x"})," is a column, this function first sorts values in ",(0,r.jsx)(n.code,{children:"x"})," in ascending order and returns the value that corresponds to percentile ",(0,r.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_APPROX_RAW(x, y);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"x"}),": It can be a column or a set of values. It must evaluate to PERCENTILE."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"y"}),": the percentile. The supported data type is DOUBLE. Value range: [0.0,1.0]."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a PERCENTILE value."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Create table ",(0,r.jsx)(n.code,{children:"aggregate_tbl"}),", where the ",(0,r.jsx)(n.code,{children:"percent"})," column is the input of percentile_approx_raw()."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `aggregate_tbl` (\n  `site_id` largeint(40) NOT NULL COMMENT "id of site",\n  `date` date NOT NULL COMMENT "time of event",\n  `city_code` varchar(20) NULL COMMENT "city_code of user",\n  `pv` bigint(20) SUM NULL DEFAULT "0" COMMENT "total page views",\n  `percent` PERCENTILE PERCENTILE_UNION COMMENT "others"\n) ENGINE=OLAP\nAGGREGATE KEY(`site_id`, `date`, `city_code`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`site_id`)\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,r.jsx)(n.p,{children:"Insert data into the table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"insert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(1));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(2));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(3));\ninsert into aggregate_tbl values (5, '2020-02-23', 'city_code', 555, percentile_hash(4));\n"})}),"\n",(0,r.jsx)(n.p,{children:"Calculate the value corresponding to percentile 0.5."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select percentile_approx_raw(percent, 0.5) from aggregate_tbl;\n+-------------------------------------+\n| percentile_approx_raw(percent, 0.5) |\n+-------------------------------------+\n|                                 2.5 |\n+-------------------------------------+\n1 row in set (0.03 sec)\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var r=t(67294);const s=r.createContext({});function i(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:i(e),r.createElement(s.Provider,{value:l},n)}}}]);