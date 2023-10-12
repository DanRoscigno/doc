"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27677],{43244:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=s(85893),n=s(11151);const r={displayed_sidebar:"documentation"},o="Table Types",i={id:"table_design/table_types/table_types",title:"Table Types",description:"You must specify a table type and define one or more columns as a sort key at table creation. This way, when data is initially loaded into the table that you created, StarRocks can sort, process, and store the data based on the sort key. This topic describes the table types that StarRocks provides to meet your varying business requirements.",source:"@site/versioned_docs/version-3.0/table_design/table_types/table_types.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/",permalink:"/doc/docs/3.0/table_design/table_types/",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/table_types/table_types.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Understand table design",permalink:"/doc/docs/3.0/table_design/StarRocks_table_design"},next:{title:"Duplicate Key table",permalink:"/doc/docs/3.0/table_design/table_types/duplicate_key_table"}},l={},d=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Table types",id:"table-types-1",level:3},{value:"Sort keys",id:"sort-keys",level:3},{value:"Precautions",id:"precautions",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",a:"a"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"table-types",children:"Table Types"}),"\n",(0,a.jsx)(t.p,{children:"You must specify a table type and define one or more columns as a sort key at table creation. This way, when data is initially loaded into the table that you created, StarRocks can sort, process, and store the data based on the sort key. This topic describes the table types that StarRocks provides to meet your varying business requirements."}),"\n",(0,a.jsx)(t.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,a.jsx)(t.h3,{id:"table-types-1",children:"Table types"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks provides four table types: Duplicate Key table, Aggregate table, Unique Key table, and Primary Key table. These four table types are well suited to a wide range of data analytics scenarios such as log analysis, data aggregation and analysis, and real-time data analysis."}),"\n",(0,a.jsx)(t.h3,{id:"sort-keys",children:"Sort keys"}),"\n",(0,a.jsx)(t.p,{children:"When data is loaded into a table created by using a certain table type, data is sorted and stored according to one or more columns defined as the sort key when the table is created. The sort key is usually one or more columns that are frequently used as filter conditions in queries, thereby accelerating queries."}),"\n",(0,a.jsxs)(t.p,{children:["In the Duplicate Key table, the sort key specified by ",(0,a.jsx)(t.code,{children:"DUPLICATE KEY"})," is used to sort data and is not assigned a UNIQUE constraint.\nIn the Aggregate table, the sort key specified by ",(0,a.jsx)(t.code,{children:"AGGREGATE KEY"})," is used to sort data and is assigned a UNIQUE constraint.\nIn the Unique Key table, the sort key specified by ",(0,a.jsx)(t.code,{children:"UNIQUE KEY"})," is used to sort data and is assigned a UNIQUE constraint.\nIn the Primary Key table, the primary key and sort key are decoupled. The primary key specified by ",(0,a.jsx)(t.code,{children:"PRIMARY KEY"})," is assigned UNIQUE and NOT NULL constraints. The sort key specified by ",(0,a.jsx)(t.code,{children:"ORDER BY"})," is used for sorting data."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"In versions earlier than v3.0, the Primary Key table does not support defining the primary key and sort key separately."}),"\n",(0,a.jsxs)(t.li,{children:["For more descriptions of sort keys, see ",(0,a.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Sort_key",children:"Sort keys and prefix indexes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Sort key columns must be defined prior to the other columns in the statement for table creation."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The order of sort key columns in the statement for table creation specifies the order of the conditions based on which the rows in the table are sorted."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"The length of the prefix index for a table is limited to 36 bytes. If the total length of the sort key columns exceeds 36 bytes, StarRocks stores only the first few sort key columns within the length limit for the prefix index."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If the records to be loaded into a table have the same primary key, StarRocks processes and stores the records based on the table type:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Duplicate Key table"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks loads each of the records as a separate row into the table. After the data load is complete, the table contains rows that have the same primary key, and the rows map the source records in a one-to-one relationship. You can recall all historical data that you loaded."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Aggregate table"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks aggregates the records into one record and loads the aggregated record as a row into the table. After the loading is complete, the table does not contain rows that have the same primary key. You can recall the aggregation results of all historical data that you loaded. However, you cannot recall all historical data."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Unique Key table and Primary Key table"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks replaces each newly loaded record with the previously loaded record and retains only the most recently loaded record as a row in the table. After the loading is complete, the table does not contain rows that have the same primary key. The Unique Key table and the Primary Key table can be considered a special Aggregate table in which the REPLACE aggregate function is specified for metric columns to return the most recent record among a group of records that have the same primary key."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>r});var a=s(67294);const n=a.createContext({});function r(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:r(e),a.createElement(n.Provider,{value:i},t)}}}]);