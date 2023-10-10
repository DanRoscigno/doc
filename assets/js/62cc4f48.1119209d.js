"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35559],{23041:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(85893),i=t(11151);const s={},r="Features",o={id:"introduction/Features",title:"Features",description:"StarRocks offers a rich set of features to deliver a blazing-fast, real-time analytics experience on data at scale.",source:"@site/versioned_docs/version-3.0/introduction/Features.md",sourceDirName:"introduction",slug:"/introduction/Features",permalink:"/docs/3.0/introduction/Features",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/introduction/Features.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Architecture",permalink:"/docs/3.0/introduction/Architecture"},next:{title:"What is StarRocks?",permalink:"/docs/3.0/introduction/what_is_starrocks"}},c={},l=[{value:"MPP framework",id:"mpp-framework",level:2},{value:"Fully vectorized execution engine",id:"fully-vectorized-execution-engine",level:2},{value:"Cost-based optimizer",id:"cost-based-optimizer",level:2},{value:"Real-time, updatable columnar storage engine",id:"real-time-updatable-columnar-storage-engine",level:2},{value:"Intelligent materialized view",id:"intelligent-materialized-view",level:2},{value:"Data lake analytics",id:"data-lake-analytics",level:2}];function d(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",strong:"strong"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"features",children:"Features"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks offers a rich set of features to deliver a blazing-fast, real-time analytics experience on data at scale."}),"\n",(0,n.jsx)(a.h2,{id:"mpp-framework",children:"MPP framework"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks adopts the massively parallel processing (MPP) framework. One query request is split into multiple physical computing units that can be executed in parallel on multiple machines. Each machine has dedicated CPU and memory resources. The MPP framework fully uses the resources of all CPU cores and machines. The performance of a single query can continuously increase as the cluster is scaled out."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"MPP",src:t(38180).Z+"",width:"1170",height:"610"})}),"\n",(0,n.jsxs)(a.p,{children:["In the preceding figure, StarRocks parses an SQL statement into multiple logical execution units (query fragments) according to the semantics of the statement. Each fragment is then implemented by one or multiple physical execution units (fragment instances) based on the computing complexity. A physical execution unit is the smallest scheduling unit in StarRocks. They will be scheduled to backends (BEs) for execution. One logical execution unit can contain one or more operators, such as the Scan, Project, and Agg operators, as shown on the right side of the figure. Each physical execution unit processes only part of the data and the result will be merged to generate the final data. ",(0,n.jsx)(a.strong,{children:"Parallel execution of logical execution units fully utilizes the resources of all CPU cores and physical machines and accelerates the query speed."})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"MPP",src:t(84691).Z+"",width:"1200",height:"855"})}),"\n",(0,n.jsx)(a.p,{children:"Unlike the Scatter-Gather framework used by many other data analytics systems, the MPP framework can utilize more resources to process query requests. In the Scatter-Gather framework, only the Gather node can perform the final merge operation. In the MPP framework, data is shuffled to multiple nodes for merge operations. For complex queries, such as Group By on high-cardinality fields and large table joins, StarRocks' MPP framework has noticeable performance advantages over the Scatter-Gather framework."}),"\n",(0,n.jsx)(a.h2,{id:"fully-vectorized-execution-engine",children:"Fully vectorized execution engine"}),"\n",(0,n.jsx)(a.p,{children:"The fully vectorized execution engine makes more efficient use of CPU processing power because this engine organizes and processes data in a columnar manner. Specifically, StarRocks stores data, organizes data in memory, and computes SQL operators all in a columnar manner. Columnar organization makes full use of CPU cache. Columnar computing reduces the number of virtual function calls and branch judgments, resulting in more sufficient CPU instruction flows."}),"\n",(0,n.jsx)(a.p,{children:"The vectorized execution engine also makes full use of SIMD instructions. This engine can complete more data operations with fewer instructions. Tests against standard datasets show that this engine enhances the overall performance of operators by 3 to 10 times."}),"\n",(0,n.jsx)(a.p,{children:"In addition to operator vectorization, StarRocks has implemented other optimizations for the query engine. For example, StarRocks uses the Operation on Encoded Data technology to directly execute operators on encoded strings, without the need for decoding. This noticeably reduces SQL complexity and increases the query speed by more than 2 times."}),"\n",(0,n.jsx)(a.h2,{id:"cost-based-optimizer",children:"Cost-based optimizer"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"CBO",src:t(87674).Z+"",width:"1200",height:"490"})}),"\n",(0,n.jsx)(a.p,{children:"Performance of multi-table join queries is difficult to optimize. Execution engines alone cannot deliver superior performance because the complexity of execution plans may vary by several orders of magnitude in multi-table join query scenarios. The more the associated tables, the more the execution plans, which makes it NP-hard to choose an optimal plan. Only a query optimizer excellent enough can choose a relatively optimal query plan for efficient multi-table analytics."}),"\n",(0,n.jsx)(a.p,{children:"StarRocks designs a brand-new CBO from scratch. This CBO adopts the cascades-like framework and is deeply customized for the vectorized execution engine with a number of optimizations and innovations. These optimizations include the reuse of common table expressions (CTEs), rewriting of subqueries, Lateral Join, Join Reorder, strategy selection for distributed Join execution, and low-cardinality optimization. The CBO supports a total of 99 TPC-DS SQL statements."}),"\n",(0,n.jsx)(a.p,{children:"The CBO enables StarRocks to deliver better multi-table join query performance than competitors, especially in complex multi-table join queries."}),"\n",(0,n.jsx)(a.h2,{id:"real-time-updatable-columnar-storage-engine",children:"Real-time, updatable columnar storage engine"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks is a columnar storage engine that allows data of the same type to be stored continuously. In columnar storage, data can be encoded in a more efficient way, increasing the compression ratio and lowering the storage cost. Columnar storage also reduces the total data read I/Os, improving query performance. In addition, in most OLAP scenarios, only specific columns are queried. Columnar storage enables users to query only part of the columns, significantly reducing disk I/Os."}),"\n",(0,n.jsx)(a.p,{children:"StarRocks can load data within seconds for near-real-time analytics. StarRocks' storage engine guarantees the atomicity, consistency, isolation, and durability (ACID) of each data ingestion operation. For a data loading transaction, the entire transaction either succeeds or fails. Concurrent transactions do not affect each other, providing transaction-level isolation."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Realtime",src:t(46929).Z+"",width:"1200",height:"341"})}),"\n",(0,n.jsx)(a.p,{children:"StarRocks' storage engine uses the Delete-and-insert pattern, which allows for efficient Partial Update and Upsert operations. The storage engine can quickly filter data using primary key indexes,  eliminating the need for Sort and Merge operations at data reading. The engine can also make full use of secondary indexes. It delivers fast and predictable query performance even on huge volume of data updates."}),"\n",(0,n.jsx)(a.h2,{id:"intelligent-materialized-view",children:"Intelligent materialized view"}),"\n",(0,n.jsx)(a.p,{children:"StarRocks uses intelligent materialized views to accelerate queries and data warehouse layering. Different from materialized views of other similar products that requires manual data synchronization with the base table, StarRocks' materialized views automatically update data according to the data changes in the base table without requiring additional maintenance operations. In addition, the selection of materialized views is also automatic. If StarRocks identifies a suitable materialized view (MV) to improve query performance, it will automatically rewrite the query to utilize the MV. This intelligent process significantly enhances query efficiency without requiring manual intervention."}),"\n",(0,n.jsx)(a.p,{children:"StarRocks' MV can replace the traditional ETL data modeling process: Instead of transforming data in the upstream applications, you now have the option to transform data with MV within StarRocks, simplifying the data processing pipeline."}),"\n",(0,n.jsx)(a.p,{children:"For example, in the figure, raw data on data lake can be used to create a normalized table based on an external MV. A denormalized table can be created from normalized tables through asynchronous materialized views. Another MV can be created from normalized tables to support high-concurrency queries and better query performance."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"MV",src:t(71466).Z+"",width:"1234",height:"866"})}),"\n",(0,n.jsx)(a.h2,{id:"data-lake-analytics",children:"Data lake analytics"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"DLA",src:t(25614).Z+"",width:"724",height:"693"})}),"\n",(0,n.jsx)(a.p,{children:"In addition to efficient analytics of local data, StarRocks can work as the compute engine to analyze data stored in data lakes such as Apache Hive, Apache Iceberg, Apache Hudi, and Delta Lake. One of the key features of StarRocks is its external catalog, which acts as a linkage to an externally maintained metastore. This functionality provides users with the capability to query external data sources seamlessly, eliminating the need for data migration. As such, users can analyze data from different systems such as HDFS and Amazon S3, in various file formats such as Parquet, ORC, and CSV, etc."}),"\n",(0,n.jsx)(a.p,{children:'The preceding figure shows a data lake analytics scenario where StarRocks is responsible for data computing and analysis, and the data lake is responsible for data storage, organization, and maintenance. Data lakes allow users to store data in open storage formats and use flexible schemas to produce reports on "single source of truth" for various BI, AI, ad-hoc, and reporting use cases. StarRocks fully leverages the advantages of its vectorization engine and CBO, significantly improving the performance of data lake analytics.'})]})}const u=function(e={}){const{wrapper:a}=Object.assign({},(0,i.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},38180:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-3-mpp-c5ce1abde88893a0f4305d0c05cb32d5.png"},84691:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-4-mpp-732a7a658d4e36f6f1e06a7cdb2d2f31.png"},87674:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-5-cbo-f19a682aada1f1179220212b5d969df3.png"},46929:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-6-realtime-6bdf15ff501788a248dec852f4d9f541.png"},71466:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-7-mv-7fb0ae6f680ae698965d29b4a7a6911d.png"},25614:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1.1-8-dla-08af019067c0b9b534fb8e9e3220b6e2.png"},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>s});var n=t(67294);const i=n.createContext({});function s(e){const a=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const r={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:s(e),n.createElement(i.Provider,{value:o},a)}}}]);