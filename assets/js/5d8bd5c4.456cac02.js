"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85189],{96030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(85893),i=n(11151);const s={displayed_sidebar:"documentation"},o="Duplicate Key table",l={id:"table_design/table_types/duplicate_key_table",title:"Duplicate Key table",description:"The Duplicate Key table is the default model in StarRocks. If you did not specify a model when you create a table, a Duplicate Key table is created by default.",source:"@site/versioned_docs/version-3.1/table_design/table_types/duplicate_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/duplicate_key_table",permalink:"/doc/docs/table_design/table_types/duplicate_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/table_types/duplicate_key_table.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Table Types",permalink:"/doc/docs/table_design/table_types/"},next:{title:"Aggregate table",permalink:"/doc/docs/table_design/table_types/aggregate_table"}},d={},c=[{value:"Scenarios",id:"scenarios",level:2},{value:"Create a table",id:"create-a-table",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function r(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"duplicate-key-table",children:"Duplicate Key table"}),"\n",(0,a.jsx)(t.p,{children:"The Duplicate Key table is the default model in StarRocks. If you did not specify a model when you create a table, a Duplicate Key table is created by default."}),"\n",(0,a.jsx)(t.p,{children:"When you create a Duplicate Key table, you can define a sort key for that table. If the filter conditions contain the sort key columns, StarRocks can quickly filter data from the table to accelerate queries. The Duplicate Key table allows you to append new data to the table. However, it does not allow you to modify existing data in the table."}),"\n",(0,a.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,a.jsx)(t.p,{children:"The Duplicate Key table is suitable for the following scenarios:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Analyze raw data, such as raw logs and raw operation records."}),"\n",(0,a.jsx)(t.li,{children:"Query data by using a variety of methods without being limited by the pre-aggregation method."}),"\n",(0,a.jsx)(t.li,{children:"Load log data or time-series data. New data is written in append-only mode, and existing data is not updated."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-table",children:"Create a table"}),"\n",(0,a.jsxs)(t.p,{children:["Suppose that you want to analyze the event data over a specific time range. In this example, create a table named ",(0,a.jsx)(t.code,{children:"detail"})," and define ",(0,a.jsx)(t.code,{children:"event_time"})," and ",(0,a.jsx)(t.code,{children:"event_type"})," as sort key columns."]}),"\n",(0,a.jsx)(t.p,{children:"Statement for creating the table:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS detail (\n    event_time DATETIME NOT NULL COMMENT "datetime of event",\n    event_type INT NOT NULL COMMENT "type of event",\n    user_id INT COMMENT "id of user",\n    device_code INT COMMENT "device code",\n    channel INT COMMENT ""\n)\nDUPLICATE KEY(event_time, event_type)\nDISTRIBUTED BY HASH(user_id);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTICE"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["When you create a table, you must specify the bucketing column by using the ",(0,a.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause. For detailed information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"bucketing"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Since v2.5.7, StarRocks can automatically set the number of buckets (BUCKETS) when you create a table or add a partition. You no longer need to manually set the number of buckets. For detailed information, see ",(0,a.jsx)(t.a,{href:"/doc/docs/table_design/Data_distribution#determine-the-number-of-buckets",children:"determine the number of buckets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Take note of the following points about the sort key of a table:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use the ",(0,a.jsx)(t.code,{children:"DUPLICATE KEY"})," keyword to explicitly define the columns that are used in the sort key."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: By default, if you do not specify sort key columns, StarRocks uses the ",(0,a.jsx)(t.strong,{children:"first three"})," columns as sort key columns."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"In the Duplicate Key table, the sort key can consist of some or all of the dimension columns."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"You can create indexes such as BITMAP indexes and Bloomfilter indexes at table creation."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If two identical records are loaded, the Duplicate Key table retains them as two records, rather than one."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,a.jsxs)(t.p,{children:["After a table is created, you can use various data ingestion methods to load data into StarRocks. For information about the data ingestion methods that are supported by StarRocks, see ",(0,a.jsx)(t.a,{href:"/doc/docs/loading/Loading_intro",children:"Overview of data loading"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: When you load data into a table that uses the Duplicate Key table, you can only append data to the table. You cannot modify the existing data in the table."}),"\n"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>s});var a=n(67294);const i=a.createContext({});function s(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||o:s(e),a.createElement(i.Provider,{value:l},t)}}}]);