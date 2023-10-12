"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48969],{59057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=a(85893),n=a(11151);const i={displayed_sidebar:"documentation"},r="Create a table",o={id:"quick_start/Create_table",title:"Create a table",description:"This QuickStart tutorial will walk you through the necessary steps to create a table in StarRocks, and introduce some basic features of StarRocks.",source:"@site/versioned_docs/version-3.0/quick_start/Create_table.md",sourceDirName:"quick_start",slug:"/quick_start/Create_table",permalink:"/doc/docs/3.0/quick_start/Create_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/quick_start/Create_table.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Deploy StarRocks with Docker",permalink:"/doc/docs/3.0/quick_start/deploy_with_docker"},next:{title:"Load and query data",permalink:"/doc/docs/3.0/quick_start/Import_and_query"}},c={},d=[{value:"Step 1: Log in to StarRocks",id:"step-1-log-in-to-starrocks",level:2},{value:"Step 2: Create a database",id:"step-2-create-a-database",level:2},{value:"Step 3: Create a table",id:"step-3-create-a-table",level:2},{value:"What to do next",id:"what-to-do-next",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",h2:"h2",pre:"pre",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-a-table",children:"Create a table"}),"\n",(0,s.jsx)(t.p,{children:"This QuickStart tutorial will walk you through the necessary steps to create a table in StarRocks, and introduce some basic features of StarRocks."}),"\n",(0,s.jsxs)(t.p,{children:["After the StarRocks instance is deployed (see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/quick_start/deploy_with_docker",children:"Deploy StarRocks"})," for details), you need to create a database and a table to ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/quick_start/Import_and_query",children:"load and query data"}),". Creating databases and tables requires corresponding ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/administration/User_privilege",children:"user privilege"}),". In this QuickStart tutorial, you can perform the following steps with the default ",(0,s.jsx)(t.code,{children:"root"})," user, which has the highest privileges on the StarRocks instance."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(t.p,{children:"You can complete this tutorial by using an existing StarRocks instance, database, table, and user privilege. However, for simplicity, we recommend that you use the schema and data the tutorial provides."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-1-log-in-to-starrocks",children:"Step 1: Log in to StarRocks"}),"\n",(0,s.jsxs)(t.p,{children:["Log in to StarRocks via your MySQL client. You can log in with the default user ",(0,s.jsx)(t.code,{children:"root"}),", and the password is empty by default."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql -h <fe_ip> -P<fe_query_port> -uroot\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Change the ",(0,s.jsx)(t.code,{children:"-P"})," value accordingly if you have assigned a different FE MySQL server port (",(0,s.jsx)(t.code,{children:"query_port"}),", Default: ",(0,s.jsx)(t.code,{children:"9030"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:["Change the ",(0,s.jsx)(t.code,{children:"-h"})," value accordingly if you have specified the configuration item ",(0,s.jsx)(t.code,{children:"priority_networks"})," in the FE configuration file."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-create-a-database",children:"Step 2: Create a database"}),"\n",(0,s.jsxs)(t.p,{children:["Create a database named ",(0,s.jsx)(t.code,{children:"sr_hub"})," by referring to ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"CREATE DATABASE IF NOT EXISTS sr_hub;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can view all databases in this StarRocks instance by executing ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})," SQL."]}),"\n",(0,s.jsx)(t.h2,{id:"step-3-create-a-table",children:"Step 3: Create a table"}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"USE sr_hub"})," to switch to the ",(0,s.jsx)(t.code,{children:"sr_hub"})," database and create a table named ",(0,s.jsx)(t.code,{children:"sr_member"})," by referring to ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"USE sr_hub;\nCREATE TABLE IF NOT EXISTS sr_member (\n    sr_id            INT,\n    name             STRING,\n    city_code        INT,\n    reg_date         DATE,\n    verified         BOOLEAN\n)\nPARTITION BY RANGE(reg_date)\n(\n    PARTITION p1 VALUES [('2022-03-13'), ('2022-03-14')),\n    PARTITION p2 VALUES [('2022-03-14'), ('2022-03-15')),\n    PARTITION p3 VALUES [('2022-03-15'), ('2022-03-16')),\n    PARTITION p4 VALUES [('2022-03-16'), ('2022-03-17')),\n    PARTITION p5 VALUES [('2022-03-17'), ('2022-03-18'))\n)\nDISTRIBUTED BY HASH(city_code);\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To create a table in StarRocks, you MUST specify a bucket key in the ",(0,s.jsx)(t.code,{children:"DISTRIBUTED BY HASH"})," clause to strategize the data distribution plan of the table. By default, the data is distributed to 10 tablets. See ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Data_distribution#data-distribution",children:"Data Distribution"})," for more information."]}),"\n",(0,s.jsxs)(t.li,{children:["You need to specify the table property ",(0,s.jsx)(t.code,{children:"replication_num"}),", which represents the number of data replicas, as ",(0,s.jsx)(t.code,{children:"1"})," because the StarRocks instance you deployed has only one BE node."]}),"\n",(0,s.jsxs)(t.li,{children:["If no ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/table_types/",children:"table type"})," is specified, a Duplicate Key table is created by default. See ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/table_types/duplicate_key_table",children:"Duplicate Key table"})]}),"\n",(0,s.jsxs)(t.li,{children:["The columns of the table exactly correspond to the fields of data that you will be loading into StarRocks in the tutorial on ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/quick_start/Import_and_query",children:"loading and querying data"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["To guarantee the high performance ",(0,s.jsx)(t.strong,{children:"in the production environment"}),", we strongly recommend that you strategize the data partitioning plan for the table by using the ",(0,s.jsx)(t.code,{children:"PARTITION BY"})," clause. See ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Data_distribution#design-partitioning-and-bucketing-rules",children:"Design partitioning and bucketing rules"})," for more instructions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After the table is created, you can check the details of the table using the DESC statement, and view all the tables in the database by executing ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",children:"SHOW TABLES"}),". Tables in StarRocks support schema changes. You can see ",(0,s.jsx)(t.a,{href:"../sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," for more information."]}),"\n",(0,s.jsx)(t.h2,{id:"what-to-do-next",children:"What to do next"}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about conceptual details of StarRocks tables, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/StarRocks_table_design",children:"StarRocks Table Design"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In addition to the features this tutorial has demonstrated, StarRocks also supports:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A variety of ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-types/BIGINT",children:"data types"})]}),"\n",(0,s.jsxs)(t.li,{children:["Multiple ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/table_types/",children:"table types"})]}),"\n",(0,s.jsxs)(t.li,{children:["Flexible ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/table_design/Data_distribution#dynamic-partition-management",children:"partitioning strategies"})]}),"\n",(0,s.jsxs)(t.li,{children:["Classic database query indexes, including ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/using_starrocks/Bitmap_index",children:"bitmap index"})," and ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/using_starrocks/Bloomfilter_index",children:"bloom filter index"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/docs/3.0/using_starrocks/Materialized_view",children:"Materialized view"})}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>i});var s=a(67294);const n=s.createContext({});function i(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||r:i(e),s.createElement(n.Provider,{value:o},t)}}}]);