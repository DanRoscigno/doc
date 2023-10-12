"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35367],{87320:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var t=r(85893),a=r(11151);const d={displayed_sidebar:"documentation"},s="SSB Flat-table Benchmarking",i={id:"benchmarking/SSB_Benchmarking",title:"SSB Flat-table Benchmarking",description:"Star schema benchmark (SSB) is designed to test basic performance metrics of OLAP database products. SSB uses a star schema test set that is widely applied in academia and industry. For more information, see the paper Star Schema Benchmark.",source:"@site/versioned_docs/version-3.0/benchmarking/SSB_Benchmarking.md",sourceDirName:"benchmarking",slug:"/benchmarking/SSB_Benchmarking",permalink:"/doc/docs/3.0/benchmarking/SSB_Benchmarking",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/benchmarking/SSB_Benchmarking.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Benchmarks",permalink:"/doc/docs/3.0/category/benchmarks"},next:{title:"TPC-H Benchmarking",permalink:"/doc/docs/3.0/benchmarking/TPC-H_Benchmarking"}},l={},c=[{value:"Test conclusion",id:"test-conclusion",level:2},{value:"Test preparation",id:"test-preparation",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Test data and results",id:"test-data-and-results",level:2},{value:"Test data",id:"test-data",level:3},{value:"Test results",id:"test-results",level:3},{value:"Test procedure",id:"test-procedure",level:2},{value:"Generate data",id:"generate-data",level:3},{value:"Create table schema",id:"create-table-schema",level:3},{value:"Query data",id:"query-data",level:3},{value:"Enable Bitmap Indexing",id:"enable-bitmap-indexing",level:3},{value:"Test SQL and table creation statements",id:"test-sql-and-table-creation-statements",level:2},{value:"Test SQL",id:"test-sql",level:3},{value:"Table creation statements",id:"table-creation-statements",level:3},{value:"Default <code>lineorder_flat</code> table",id:"default-lineorder_flat-table",level:4},{value:"<code>lineorder_flat</code> table with Bitmap Indexes",id:"lineorder_flat-table-with-bitmap-indexes",level:4}];function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",ol:"ol",h4:"h4"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ssb-flat-table-benchmarking",children:"SSB Flat-table Benchmarking"}),"\n",(0,t.jsxs)(n.p,{children:["Star schema benchmark (SSB) is designed to test basic performance metrics of OLAP database products. SSB uses a star schema test set that is widely applied in academia and industry. For more information, see the paper ",(0,t.jsx)(n.a,{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",children:"Star Schema Benchmark"}),".\nClickHouse flattens the star schema into a wide flat table and rewrites the SSB into a single-table benchmark. For more information, see ",(0,t.jsx)(n.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"Star schema benchmark of ClickHouse"}),".\nThis test compares the performance of StarRocks, Apache Druid, and ClickHouse against SSB single-table datasets."]}),"\n",(0,t.jsx)(n.h2,{id:"test-conclusion",children:"Test conclusion"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Among the 13 queries performed on SSB standard datasets, StarRocks has an overall query performance ",(0,t.jsx)(n.strong,{children:"2.1x that of ClickHouse and 8.7x that of Apache Druid"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["After Bitmap Indexing of StarRocks is enabled, the performance is 1.3x compared to when this feature is disabled. The overall performance of StarRocks is ",(0,t.jsx)(n.strong,{children:"2.8x that of ClickHouse and 11.4x that of Apache Druid"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"overall comparison",src:r(98526).Z+"",width:"2032",height:"894"})}),"\n",(0,t.jsx)(n.h2,{id:"test-preparation",children:"Test preparation"}),"\n",(0,t.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Machine"}),(0,t.jsx)(n.th,{children:"3 cloud hosts"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsxs)(n.td,{children:["16-Core Intel (R) Xeon (R) Platinum 8269CY CPU @2.50GHz ",(0,t.jsx)("br",{}),"Cache size: 36608 KB"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Memory"}),(0,t.jsx)(n.td,{children:"64 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Network bandwidth"}),(0,t.jsx)(n.td,{children:"5 Gbit/s"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Disk"}),(0,t.jsx)(n.td,{children:"ESSD"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"software",children:"Software"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks, Apache Druid, and ClickHouse are deployed on hosts of the same configurations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"StarRocks: one FE and three BEs. The FE can be separately or hybrid deployed with BEs."}),"\n",(0,t.jsx)(n.li,{children:"ClickHouse: three nodes with distributed tables"}),"\n",(0,t.jsx)(n.li,{children:"Apache Druid: three nodes. One is deployed with Master Servers and Data Servers, one is deployed with Query Servers and Data Servers, and the third is deployed only with Data Servers."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Kernel version: Linux 3.10.0-1160.59.1.el7.x86_64"}),"\n",(0,t.jsx)(n.p,{children:"OS version: CentOS Linux release 7.9.2009"}),"\n",(0,t.jsx)(n.p,{children:"Software version: StarRocks Community Version 3.0, ClickHouse 23.3, Apache Druid 25.0.0"}),"\n",(0,t.jsx)(n.h2,{id:"test-data-and-results",children:"Test data and results"}),"\n",(0,t.jsx)(n.h3,{id:"test-data",children:"Test data"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Table"}),(0,t.jsx)(n.th,{children:"Record"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lineorder"}),(0,t.jsx)(n.td,{children:"600 million"}),(0,t.jsx)(n.td,{children:"Lineorder fact table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"customer"}),(0,t.jsx)(n.td,{children:"3 million"}),(0,t.jsx)(n.td,{children:"Customer dimension table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"part"}),(0,t.jsx)(n.td,{children:"1.4 million"}),(0,t.jsx)(n.td,{children:"Parts dimension table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"supplier"}),(0,t.jsx)(n.td,{children:"200 thousand"}),(0,t.jsx)(n.td,{children:"Supplier dimension table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dates"}),(0,t.jsx)(n.td,{children:"2,556"}),(0,t.jsx)(n.td,{children:"Date dimension table"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lineorder_flat"}),(0,t.jsx)(n.td,{children:"600 million"}),(0,t.jsx)(n.td,{children:"lineorder flat table"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"test-results",children:"Test results"}),"\n",(0,t.jsxs)(n.p,{children:["The following table shows the performance test results on thirteen queries. The unit of query latency is ms. ",(0,t.jsx)(n.code,{children:"ClickHouse vs StarRocks"})," in the table header means using the query response time of ClickHouse to divide the query response time of StarRocks. A larger value indicates better performance of StarRocks."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"StarRocks-3.0"}),(0,t.jsx)(n.th,{children:"StarRocks-3.0-index"}),(0,t.jsx)(n.th,{children:"ClickHouse-23.3"}),(0,t.jsx)(n.th,{children:"ClickHouse vs StarRocks"}),(0,t.jsx)(n.th,{children:"Druid-25.0.0"}),(0,t.jsx)(n.th,{children:"Druid vs StarRocks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q1.1"}),(0,t.jsx)(n.td,{children:"33"}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"48"}),(0,t.jsx)(n.td,{children:"1.45"}),(0,t.jsx)(n.td,{children:"430"}),(0,t.jsx)(n.td,{children:"13.03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q1.2"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"1.50"}),(0,t.jsx)(n.td,{children:"270"}),(0,t.jsx)(n.td,{children:"27.00"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q1.3"}),(0,t.jsx)(n.td,{children:"23"}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"0.61"}),(0,t.jsx)(n.td,{children:"820"}),(0,t.jsx)(n.td,{children:"35.65"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q2.1"}),(0,t.jsx)(n.td,{children:"186"}),(0,t.jsx)(n.td,{children:"116"}),(0,t.jsx)(n.td,{children:"301"}),(0,t.jsx)(n.td,{children:"1.62"}),(0,t.jsx)(n.td,{children:"760"}),(0,t.jsx)(n.td,{children:"4.09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q2.2"}),(0,t.jsx)(n.td,{children:"156"}),(0,t.jsx)(n.td,{children:"50"}),(0,t.jsx)(n.td,{children:"273"}),(0,t.jsx)(n.td,{children:"1.75"}),(0,t.jsx)(n.td,{children:"920"}),(0,t.jsx)(n.td,{children:"5.90"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q2.3"}),(0,t.jsx)(n.td,{children:"73"}),(0,t.jsx)(n.td,{children:"36"}),(0,t.jsx)(n.td,{children:"255"}),(0,t.jsx)(n.td,{children:"3.49"}),(0,t.jsx)(n.td,{children:"910"}),(0,t.jsx)(n.td,{children:"12.47"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q3.1"}),(0,t.jsx)(n.td,{children:"173"}),(0,t.jsx)(n.td,{children:"233"}),(0,t.jsx)(n.td,{children:"398"}),(0,t.jsx)(n.td,{children:"2.30"}),(0,t.jsx)(n.td,{children:"1080"}),(0,t.jsx)(n.td,{children:"6.24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q3.2"}),(0,t.jsx)(n.td,{children:"120"}),(0,t.jsx)(n.td,{children:"80"}),(0,t.jsx)(n.td,{children:"319"}),(0,t.jsx)(n.td,{children:"2.66"}),(0,t.jsx)(n.td,{children:"850"}),(0,t.jsx)(n.td,{children:"7.08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q3.3"}),(0,t.jsx)(n.td,{children:"123"}),(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"227"}),(0,t.jsx)(n.td,{children:"1.85"}),(0,t.jsx)(n.td,{children:"890"}),(0,t.jsx)(n.td,{children:"7.24"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q3.4"}),(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"1.38"}),(0,t.jsx)(n.td,{children:"750"}),(0,t.jsx)(n.td,{children:"57.69"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q4.1"}),(0,t.jsx)(n.td,{children:"203"}),(0,t.jsx)(n.td,{children:"196"}),(0,t.jsx)(n.td,{children:"469"}),(0,t.jsx)(n.td,{children:"2.31"}),(0,t.jsx)(n.td,{children:"1230"}),(0,t.jsx)(n.td,{children:"6.06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q4.2"}),(0,t.jsx)(n.td,{children:"73"}),(0,t.jsx)(n.td,{children:"76"}),(0,t.jsx)(n.td,{children:"160"}),(0,t.jsx)(n.td,{children:"2.19"}),(0,t.jsx)(n.td,{children:"1020"}),(0,t.jsx)(n.td,{children:"13.97"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Q4.3"}),(0,t.jsx)(n.td,{children:"50"}),(0,t.jsx)(n.td,{children:"36"}),(0,t.jsx)(n.td,{children:"148"}),(0,t.jsx)(n.td,{children:"2.96"}),(0,t.jsx)(n.td,{children:"820"}),(0,t.jsx)(n.td,{children:"16.40"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sum"}),(0,t.jsx)(n.td,{children:"1236"}),(0,t.jsx)(n.td,{children:"939"}),(0,t.jsx)(n.td,{children:"2645"}),(0,t.jsx)(n.td,{children:"2.14"}),(0,t.jsx)(n.td,{children:"10750"}),(0,t.jsx)(n.td,{children:"8.70"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"test-procedure",children:"Test procedure"}),"\n",(0,t.jsxs)(n.p,{children:["For more information about how to create a ClickHouse table and load data to the table, see ",(0,t.jsx)(n.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"ClickHouse official doc"}),". The following sections describe data generation and data loading of StarRocks."]}),"\n",(0,t.jsx)(n.h3,{id:"generate-data",children:"Generate data"}),"\n",(0,t.jsx)(n.p,{children:"Download the ssb-poc toolkit and compile it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"wget https://starrocks-public.oss-cn-zhangjiakou.aliyuncs.com/ssb-poc-1.0.zip\nunzip ssb-poc-1.0.zip\ncd ssb-poc-1.0/\nmake && make install\ncd output/\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the compilation, all the related tools are installed to the ",(0,t.jsx)(n.code,{children:"output"})," directories and the following operations are all performed under this directory."]}),"\n",(0,t.jsxs)(n.p,{children:["First, generate data for SSB standard dataset ",(0,t.jsx)(n.code,{children:"scale factor=100"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"sh bin/gen-ssb.sh 100 data_dir\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-table-schema",children:"Create table schema"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the configuration file ",(0,t.jsx)(n.code,{children:"conf/starrocks.conf"})," and specify the cluster address. Pay special attention to ",(0,t.jsx)(n.code,{children:"mysql_host"})," and ",(0,t.jsx)(n.code,{children:"mysql_port"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to create a table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"sh bin/create_db_table.sh ddl_100\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"query-data",children:"Query data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"sh bin/benchmark.sh ssb-flat\n"})}),"\n",(0,t.jsx)(n.h3,{id:"enable-bitmap-indexing",children:"Enable Bitmap Indexing"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks performs better with Bitmap Indexing enabled. If you want to test the performance of StarRocks with Bitmap Indexing enabled, especially on Q2.2, Q2.3, and Q3.3, you can create Bitmap Indexes for all STRING columns."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create another ",(0,t.jsx)(n.code,{children:"lineorder_flat"})," table and create Bitmap Indexes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"sh bin/create_db_table.sh ddl_100_bitmap_index\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the following configuration to the ",(0,t.jsx)(n.code,{children:"be.conf"})," file of all BEs and restart the BEs for the configurations to take effect."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"bitmap_max_filter_ratio=1000\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the data loading script."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"sh bin/flat_insert.sh data_dir\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After data is loaded, wait for data version compaction to complete and then perform ",(0,t.jsx)(n.a,{href:"#query-data",children:"4.4"})," again to query the data after Bitmap Indexing is enabled."]}),"\n",(0,t.jsxs)(n.p,{children:["You can view the progress of data version compaction by running ",(0,t.jsx)(n.code,{children:"select CANDIDATES_NUM from information_schema.be_compactions"}),". For the three BE nodes, the following results show compaction is completed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> select CANDIDATES_NUM from information_schema.be_compactions;\n+----------------+\n| CANDIDATES_NUM |\n+----------------+\n|              0 |\n|              0 |\n|              0 |\n+----------------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"test-sql-and-table-creation-statements",children:"Test SQL and table creation statements"}),"\n",(0,t.jsx)(n.h3,{id:"test-sql",children:"Test SQL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"--Q1.1 \nSELECT sum(lo_extendedprice * lo_discount) AS `revenue` \nFROM lineorder_flat \nWHERE lo_orderdate >= '1993-01-01' and lo_orderdate <= '1993-12-31'\nAND lo_discount BETWEEN 1 AND 3 AND lo_quantity < 25; \n \n--Q1.2 \nSELECT sum(lo_extendedprice * lo_discount) AS revenue FROM lineorder_flat  \nWHERE lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-01-31'\nAND lo_discount BETWEEN 4 AND 6 AND lo_quantity BETWEEN 26 AND 35; \n \n--Q1.3 \nSELECT sum(lo_extendedprice * lo_discount) AS revenue \nFROM lineorder_flat \nWHERE weekofyear(lo_orderdate) = 6\nAND lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-12-31' \nAND lo_discount BETWEEN 5 AND 7 AND lo_quantity BETWEEN 26 AND 35; \n \n--Q2.1 \nSELECT sum(lo_revenue), year(lo_orderdate) AS year,  p_brand \nFROM lineorder_flat \nWHERE p_category = 'MFGR#12' AND s_region = 'AMERICA' \nGROUP BY year, p_brand \nORDER BY year, p_brand; \n \n--Q2.2\nSELECT \nsum(lo_revenue), year(lo_orderdate) AS year, p_brand \nFROM lineorder_flat \nWHERE p_brand >= 'MFGR#2221' AND p_brand <= 'MFGR#2228' AND s_region = 'ASIA' \nGROUP BY year, p_brand \nORDER BY year, p_brand; \n  \n--Q2.3\nSELECT sum(lo_revenue), year(lo_orderdate) AS year, p_brand \nFROM lineorder_flat \nWHERE p_brand = 'MFGR#2239' AND s_region = 'EUROPE' \nGROUP BY year, p_brand \nORDER BY year, p_brand; \n \n--Q3.1\nSELECT\n    c_nation,\n    s_nation,\n    year(lo_orderdate) AS year,\n    sum(lo_revenue) AS revenue FROM lineorder_flat \nWHERE c_region = 'ASIA' AND s_region = 'ASIA' AND lo_orderdate >= '1992-01-01'\nAND lo_orderdate <= '1997-12-31' \nGROUP BY c_nation, s_nation, year \nORDER BY  year ASC, revenue DESC; \n \n--Q3.2 \nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue\nFROM lineorder_flat \nWHERE c_nation = 'UNITED STATES' AND s_nation = 'UNITED STATES'\nAND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \nGROUP BY c_city, s_city, year \nORDER BY year ASC, revenue DESC; \n \n--Q3.3 \nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \nFROM lineorder_flat \nWHERE c_city in ( 'UNITED KI1' ,'UNITED KI5') AND s_city in ('UNITED KI1', 'UNITED KI5')\nAND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \nGROUP BY c_city, s_city, year \nORDER BY year ASC, revenue DESC; \n \n--Q3.4 \nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \nFROM lineorder_flat \nWHERE c_city in ('UNITED KI1', 'UNITED KI5') AND s_city in ('UNITED KI1', 'UNITED KI5')\nAND lo_orderdate  >= '1997-12-01' AND lo_orderdate <= '1997-12-31' \nGROUP BY c_city, s_city, year \nORDER BY year ASC, revenue DESC; \n \n--Q4.1 \nSELECT year(lo_orderdate) AS year, c_nation, sum(lo_revenue - lo_supplycost) AS profit\nFROM lineorder_flat \nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA' AND p_mfgr in ('MFGR#1', 'MFGR#2') \nGROUP BY year, c_nation \nORDER BY year ASC, c_nation ASC; \n \n--Q4.2 \nSELECT year(lo_orderdate) AS year, \n    s_nation, p_category, sum(lo_revenue - lo_supplycost) AS profit \nFROM lineorder_flat \nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA'\nAND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31'\nAND p_mfgr in ( 'MFGR#1' , 'MFGR#2') \nGROUP BY year, s_nation, p_category \nORDER BY year ASC, s_nation ASC, p_category ASC; \n \n--Q4.3 \nSELECT year(lo_orderdate) AS year, s_city, p_brand, \n    sum(lo_revenue - lo_supplycost) AS profit \nFROM lineorder_flat \nWHERE s_nation = 'UNITED STATES'\nAND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31'\nAND p_category = 'MFGR#14' \nGROUP BY year, s_city, p_brand \nORDER BY year ASC, s_city ASC, p_brand ASC; \n"})}),"\n",(0,t.jsx)(n.h3,{id:"table-creation-statements",children:"Table creation statements"}),"\n",(0,t.jsxs)(n.h4,{id:"default-lineorder_flat-table",children:["Default ",(0,t.jsx)(n.code,{children:"lineorder_flat"})," table"]}),"\n",(0,t.jsx)(n.p,{children:"The following statement matches the current cluster size and data size (three BEs, scale factor = 100). If your cluster has more BE nodes or larger data size, you can adjust the number of buckets, create the table again, and load data again to achieve better test results."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `lineorder_flat` (\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\nCOMMENT "OLAP"\nPARTITION BY date_trunc(\'year\', `LO_ORDERDATE`)\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"lineorder_flat-table-with-bitmap-indexes",children:[(0,t.jsx)(n.code,{children:"lineorder_flat"})," table with Bitmap Indexes"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `lineorder_flat` (\n  `LO_ORDERDATE` date NOT NULL COMMENT "",\n  `LO_ORDERKEY` int(11) NOT NULL COMMENT "",\n  `LO_LINENUMBER` tinyint(4) NOT NULL COMMENT "",\n  `LO_CUSTKEY` int(11) NOT NULL COMMENT "",\n  `LO_PARTKEY` int(11) NOT NULL COMMENT "",\n  `LO_SUPPKEY` int(11) NOT NULL COMMENT "",\n  `LO_ORDERPRIORITY` varchar(100) NOT NULL COMMENT "",\n  `LO_SHIPPRIORITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_QUANTITY` tinyint(4) NOT NULL COMMENT "",\n  `LO_EXTENDEDPRICE` int(11) NOT NULL COMMENT "",\n  `LO_ORDTOTALPRICE` int(11) NOT NULL COMMENT "",\n  `LO_DISCOUNT` tinyint(4) NOT NULL COMMENT "",\n  `LO_REVENUE` int(11) NOT NULL COMMENT "",\n  `LO_SUPPLYCOST` int(11) NOT NULL COMMENT "",\n  `LO_TAX` tinyint(4) NOT NULL COMMENT "",\n  `LO_COMMITDATE` date NOT NULL COMMENT "",\n  `LO_SHIPMODE` varchar(100) NOT NULL COMMENT "",\n  `C_NAME` varchar(100) NOT NULL COMMENT "",\n  `C_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `C_CITY` varchar(100) NOT NULL COMMENT "",\n  `C_NATION` varchar(100) NOT NULL COMMENT "",\n  `C_REGION` varchar(100) NOT NULL COMMENT "",\n  `C_PHONE` varchar(100) NOT NULL COMMENT "",\n  `C_MKTSEGMENT` varchar(100) NOT NULL COMMENT "",\n  `S_NAME` varchar(100) NOT NULL COMMENT "",\n  `S_ADDRESS` varchar(100) NOT NULL COMMENT "",\n  `S_CITY` varchar(100) NOT NULL COMMENT "",\n  `S_NATION` varchar(100) NOT NULL COMMENT "",\n  `S_REGION` varchar(100) NOT NULL COMMENT "",\n  `S_PHONE` varchar(100) NOT NULL COMMENT "",\n  `P_NAME` varchar(100) NOT NULL COMMENT "",\n  `P_MFGR` varchar(100) NOT NULL COMMENT "",\n  `P_CATEGORY` varchar(100) NOT NULL COMMENT "",\n  `P_BRAND` varchar(100) NOT NULL COMMENT "",\n  `P_COLOR` varchar(100) NOT NULL COMMENT "",\n  `P_TYPE` varchar(100) NOT NULL COMMENT "",\n  `P_SIZE` tinyint(4) NOT NULL COMMENT "",\n  `P_CONTAINER` varchar(100) NOT NULL COMMENT "",\n  index bitmap_lo_orderpriority (lo_orderpriority) USING BITMAP,\n  index bitmap_lo_shipmode (lo_shipmode) USING BITMAP,\n  index bitmap_c_name (c_name) USING BITMAP,\n  index bitmap_c_address (c_address) USING BITMAP,\n  index bitmap_c_city (c_city) USING BITMAP,\n  index bitmap_c_nation (c_nation) USING BITMAP,\n  index bitmap_c_region (c_region) USING BITMAP,\n  index bitmap_c_phone (c_phone) USING BITMAP,\n  index bitmap_c_mktsegment (c_mktsegment) USING BITMAP,\n  index bitmap_s_region (s_region) USING BITMAP,\n  index bitmap_s_nation (s_nation) USING BITMAP,\n  index bitmap_s_city (s_city) USING BITMAP,\n  index bitmap_s_name (s_name) USING BITMAP,\n  index bitmap_s_address (s_address) USING BITMAP,\n  index bitmap_s_phone (s_phone) USING BITMAP,\n  index bitmap_p_name (p_name) USING BITMAP,\n  index bitmap_p_mfgr (p_mfgr) USING BITMAP,\n  index bitmap_p_category (p_category) USING BITMAP,\n  index bitmap_p_brand (p_brand) USING BITMAP,\n  index bitmap_p_color (p_color) USING BITMAP,\n  index bitmap_p_type (p_type) USING BITMAP,\n  index bitmap_p_container (p_container) USING BITMAP\n) ENGINE=OLAP\nDUPLICATE KEY(`LO_ORDERDATE`, `LO_ORDERKEY`)\nCOMMENT "OLAP"\nPARTITION BY date_trunc(\'year\', `LO_ORDERDATE`)\nDISTRIBUTED BY HASH(`LO_ORDERKEY`) BUCKETS 48\nPROPERTIES ("replication_num" = "1");\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},98526:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/7.1-1-3ca20bcf9a779105869b33b104b3e0a3.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>d});var t=r(67294);const a=t.createContext({});function d(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:d(e),t.createElement(a.Provider,{value:i},n)}}}]);