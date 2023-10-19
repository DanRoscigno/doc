"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71928],{38427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),i=t(11151);const s={displayed_sidebar:"English"},o="Understand table design",r={id:"table_design/StarRocks_table_design",title:"Understand table design",description:"Columnar storage",source:"@site/versioned_docs/version-3.1/table_design/StarRocks_table_design.md",sourceDirName:"table_design",slug:"/table_design/StarRocks_table_design",permalink:"/docs/table_design/StarRocks_table_design",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/StarRocks_table_design.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Downgrade StarRocks",permalink:"/docs/deployment/downgrade"},next:{title:"Table Types",permalink:"/docs/table_design/table_types/"}},d={},c=[{value:"Columnar storage",id:"columnar-storage",level:2},{value:"Indexing",id:"indexing",level:2},{value:"Accelerated processing",id:"accelerated-processing",level:2},{value:"Pre-aggregation",id:"pre-aggregation",level:3},{value:"Partitioning and bucketing",id:"partitioning-and-bucketing",level:3},{value:"Materialized view",id:"materialized-view",level:3},{value:"Per-column index",id:"per-column-index",level:3}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",code:"code",ul:"ul",li:"li",ol:"ol",h3:"h3"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"understand-table-design",children:"Understand table design"}),"\n",(0,a.jsx)(n.h2,{id:"columnar-storage",children:"Columnar storage"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Columnar Storage",src:t(40857).Z+"",width:"2062",height:"962"})}),"\n",(0,a.jsx)(n.p,{children:"Like in other relational databases, tables in StarRocks consist of rows and columns. Each row holds a record of user data, and data in each column has the same type. All rows in a table have the same number of columns. You can dynamically add columns to or delete columns from a table. The columns of a table can be categorized as dimension columns and metric columns. Dimension columns are also called key columns, and metric columns are also called value columns. Values in dimension columns are used to group and sort data, and values in metric columns can be accumulated by using functions such as sum, count, min, max, hll_union_agg, and bitmap_union."}),"\n",(0,a.jsx)(n.p,{children:"StarRocks uses columnar storage for tables. Physically, the data in a column is segregated into data blocks, encoded, compressed, and then persistently stored on disk. Logically, the data in a column can be compared to an array that consists of elements of the same data type. The column values held in a row keep are listed as elements in the column order in their respective arrays. This means the column values held in a row have the same array index. Array indexes are implicit and do not need to be stored. All rows in a table are sorted in the order specified by one or more dimension columns. The location of a row in the sorted table is represented by the sequence number of that row."}),"\n",(0,a.jsxs)(n.p,{children:["For a query on a table, if you specify equality or range conditions on specific dimension columns that can comprise a dimension column prefix, StarRocks can run binary searches to quickly locate the rows of interest among sorted data. For example, you want to query data from a table named ",(0,a.jsx)(n.code,{children:"table1"}),", and the table consists of four columns: ",(0,a.jsx)(n.code,{children:"event_day"}),", ",(0,a.jsx)(n.code,{children:"siteid"}),", ",(0,a.jsx)(n.code,{children:"citycode"}),", and ",(0,a.jsx)(n.code,{children:"username"}),", among which ",(0,a.jsx)(n.code,{children:"event_day"})," and ",(0,a.jsx)(n.code,{children:"siteid"})," are dimension columns. If you specify ",(0,a.jsx)(n.code,{children:"event_day = 2020-09-18"})," and ",(0,a.jsx)(n.code,{children:"siteid = 2"})," as query conditions, StarRocks can run binary searches and only needs to process the data within the specified range, because ",(0,a.jsx)(n.code,{children:"event_day"})," and ",(0,a.jsx)(n.code,{children:"siteid"})," can comprise a dimension column prefix. If you specify ",(0,a.jsx)(n.code,{children:"citycode = 4"})," and ",(0,a.jsx)(n.code,{children:"username = Andy"})," as query conditions, StarRocks cannot run binary searches and needs to process the data of the entire table, because ",(0,a.jsx)(n.code,{children:"citycode"})," and ",(0,a.jsx)(n.code,{children:"username"})," cannot comprise a dimension column prefix."]}),"\n",(0,a.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks uses prefix indexes and per-column indexes to quickly locate the starting rows of the data blocks taken by rows of interest."}),"\n",(0,a.jsx)(n.p,{children:"The following figure shows how the StarRocks table design works to accelerate queries on a table in StarRocks."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Indexing Overview",src:t(28713).Z+"",width:"1920",height:"1080"})}),"\n",(0,a.jsx)(n.p,{children:"The data of a table in StarRocks is organized into the following three parts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Prefix index"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks stores the data of every 1024 rows as a data block, for which an entry is maintained in the prefix index table. The content of the prefix index entry for each data block is the prefix composed of the dimension columns for the starting row in the data block and cannot exceed 36 bytes in length. The prefix index is a sparse index. When you query a row, StarRocks searches the prefix index table to retrieve the prefix that is composed of the dimension columns for the row. Then, StarRocks can quickly locate the sequence number of the starting row in the data block taken by the row of interest."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Per-column data block"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks segregates the data of each column into multiple 64-KB data blocks. Each data block is independently encoded and compressed as the minimal I/O unit and is read from or written to disk as a whole."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Per-column index"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks maintains a row number index for each column. In the row number index table, data blocks for the column are mapped one by one onto the sequence numbers of the rows held in the column. Additionally, each entry in the row number index table consists of the starting row number, address, and length of the data block that is mapped onto a specific row number. When you query a row, StarRocks searches the row number index table to retrieve the address of the data block mapped onto the sequence number of the row. Then, StarRocks reads the data block to locate the row."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In summary, StarRocks performs the following five steps to locate a row of a table by using the prefix that is composed of the dimension columns for the row:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Search the prefix index table to locate the sequence number of the starting row in the data block taken by the row of interest."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Search the row number index table of each dimension column to locate the data blocks for the dimension column."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Read the data blocks."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Decompress and decode the data blocks."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Search the data blocks to locate the row onto which the dimension column index is mapped."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"accelerated-processing",children:"Accelerated processing"}),"\n",(0,a.jsx)(n.p,{children:"This section introduces the mechanisms that help StarRocks process data at higher speeds."}),"\n",(0,a.jsx)(n.h3,{id:"pre-aggregation",children:"Pre-aggregation"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks provides the Aggregate table. For an Aggregate table, the rows that have the same values in the table's dimension columns can be aggregated into a single row. The value in each dimension column remains unchanged for the new row generated from the aggregation, and the values in each metric column are aggregated by the aggregate function you specify to produce the resulting value for the new row in the metric column. Pre-aggregation helps accelerate aggregate operations."}),"\n",(0,a.jsx)(n.h3,{id:"partitioning-and-bucketing",children:"Partitioning and bucketing"}),"\n",(0,a.jsx)(n.p,{children:"Each table in StarRocks is divided into multiple tablets. Each tablet is stored in multiple replicas on BEs. The number of BEs and the number of tablets can scale flexibly in line with changes in computing resources and data sizes. When you initiate a query, multiple BEs can search tablets in parallel to quickly locate the data of interest. Additionally, tablet replicas can be replicated and migrated, which increases data reliability and prevents data skews. Partitioning and bucketing help ensure the efficiency and stability of data retrieval."}),"\n",(0,a.jsx)(n.h3,{id:"materialized-view",children:"Materialized view"}),"\n",(0,a.jsx)(n.p,{children:"The prefix index of a table helps accelerate queries on the table but rely on the sequence of the table's dimension columns. If you construct query predicates by using dimension columns that are not included in a dimension column prefix, the prefix index does not work. In this case, you can create a materialized view for the table. The data of the materialized view is organized and stored in the same way as the data of the table. However, the materialized view can have its own prefix index. When you create a prefix index for the materialized view, you can specify appropriate aggregation granularity, column count, and dimension column ordering to ensure that frequently used query conditions can hit expected entries in the prefix index table for the materialized view."}),"\n",(0,a.jsx)(n.h3,{id:"per-column-index",children:"Per-column index"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks supports per-column indexes such as Bloom filters, zone maps, and bitmap indexes:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A Bloom filter is used to determine whether data blocks contain the values you want to query."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A zone map is used to locate the values within a specified range."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A bitmap index is used to locate the rows that meet specified query conditions in a column of the ENUM data type."}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},40857:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/3.1-1-043ac587c573e90f37d3aef66f5e49e8.png"},28713:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/3.1-2-8f6b6a932ed5d1fbe0e83146b827d0be.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>s});var a=t(67294);const i=a.createContext({});function s(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:s(e),a.createElement(i.Provider,{value:r},n)}}}]);