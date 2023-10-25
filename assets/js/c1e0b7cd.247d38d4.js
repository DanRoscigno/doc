"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43420],{18338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(85893),i=t(11151);const s={displayed_sidebar:"English"},l="CREATE TABLE",r={id:"sql-reference/sql-statements/data-definition/CREATE_TABLE",title:"CREATE TABLE",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_TABLE",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE RESOURCE",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_RESOURCE"},next:{title:"CREATE TABLE AS SELECT",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"column_definition",id:"column_definition",level:3},{value:"index_definition",id:"index_definition",level:3},{value:"ENGINE type",id:"engine-type",level:3},{value:"key_desc",id:"key_desc",level:3},{value:"partition_desc",id:"partition_desc",level:3},{value:"LESS THAN",id:"less-than",level:4},{value:"Fixed Range",id:"fixed-range",level:4},{value:"Create partitions in bulk",id:"create-partitions-in-bulk",level:4},{value:"distribution_desc",id:"distribution_desc",level:3},{value:"PROPERTIES",id:"properties",level:3},{value:"Specify storage medium, storage cooldown time, replica number",id:"specify-storage-medium-storage-cooldown-time-replica-number",level:4},{value:"Add bloom filter index for a column",id:"add-bloom-filter-index-for-a-column",level:4},{value:"Use Colocate Join",id:"use-colocate-join",level:4},{value:"Configure dynamic partitions",id:"configure-dynamic-partitions",level:4},{value:"Create rollup in bulk",id:"create-rollup-in-bulk",level:4},{value:"Examples",id:"examples",level:2},{value:"Create an Aggregate Key table that uses Hash bucketing and column-based storage",id:"create-an-aggregate-key-table-that-uses-hash-bucketing-and-column-based-storage",level:3},{value:"Create an Aggregate Key table and set the storage medium and cooldown time",id:"create-an-aggregate-key-table-and-set-the-storage-medium-and-cooldown-time",level:3},{value:"Create a Duplicate Key table that uses Range partition, Hash bucketing, and column-based storage, and set the storage medium and cooldown time",id:"create-a-duplicate-key-table-that-uses-range-partition-hash-bucketing-and-column-based-storage-and-set-the-storage-medium-and-cooldown-time",level:3},{value:"Create a MySQL external table",id:"create-a-mysql-external-table",level:3},{value:"Create a table that contains HLL columns",id:"create-a-table-that-contains-hll-columns",level:3},{value:"Create a table containing BITMAP_UNION aggregation type",id:"create-a-table-containing-bitmap_union-aggregation-type",level:3},{value:"Create two tables that support Colocate Join",id:"create-two-tables-that-support-colocate-join",level:3},{value:"Create a table with bitmap index",id:"create-a-table-with-bitmap-index",level:3},{value:"Create a dynamic partition table",id:"create-a-dynamic-partition-table",level:3},{value:"Create a Hive external table",id:"create-a-hive-external-table",level:3}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",a:"a",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote",h4:"h4",div:"div"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-table",children:"CREATE TABLE"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Creates a new table in StarRocks."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name\n(column_definition1[, column_definition2, ...]\n[, index_definition1[, index_definition12,]])\n[ENGINE = [olap|mysql|elasticsearch|hive|hudi|iceberg|jdbc]]\n[key_desc]\n[COMMENT "table comment"]\n[partition_desc]\n[distribution_desc]\n[rollup_index]\n[PROPERTIES ("key"="value", ...)]\n[BROKER PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.h3,{id:"column_definition",children:"column_definition"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'col_name col_type [agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"col_name: Column name\ncol_type: Column type\n\n\n\nSpecific column information, such as types and ranges: \n\n- DATE (3 bytes): Ranges from 0000-01-01 to 9999-12-31.\n- DATETIME (8 bytes): Ranges from 0000-01-01 00:00:00 to 9999-12-31 23:59:59.\n- CHAR[(length)]: Fixed length string. Range: 1 ~ 255. Default value: 1.\n- VARCHAR[(length)]: A variable-length string. The default value is 1. Unit: bytes. In versions earlier than StarRocks 2.1, the value range of `length` is 1\u201365533. [Preview] In StarRocks 2.1 and later versions, the value range of `length` is 1\u20131048576.\n- HLL (1~16385 bytes): For HLL type, there's no need to specify length or default value. The length will be controlled within the system according to data aggregation. HLL column can only be queried or used by [hll_union_agg](../../sql-functions/aggregate-functions/hll_union_agg.md), [Hll_cardinality](../../sql-functions/scalar-functions/hll_cardinality.md), and [hll_hash](../../sql-functions/aggregate-functions/hll_hash.md).\n- BITMAP: Bitmap type does not require specified length or default value. It represents a set of unsigned bigint numbers. The largest element could be up to 2^64 - 1.\n\n* TINYINT (1 byte)\n\nRange: -2^7 + 1 ~ 2^7 - 1\n\n* SMALLINT (2 bytes )\n\nRange: -2^15 + 1 ~ 2^15 - 1\n\n* INT (4 bytes)\n\nRange: -2^31 + 1 ~ 2^31 - 1\n\n* BIGINT (8 bytes)\n\nRange: -2^63 + 1 ~ 2^63 - 1\n\n* LARGEINT (16 bytes)\n\nRange: -2^127 + 1 ~ 2^127 - 1\n\n* FLOAT (4 bytes)\n\nSupport scientific notation \n\n* DOUBLE (8 bytes)\n\nSupport scientific notation \n\n* DECIMAL[(precision, scale)] (16 bytes) \n\n Default value: DECIMAL(10, 0)\n\n precision: 1 ~ 38\n\n scale: 0 ~ precision\n\nInteger part: precision - scale\n\nScientific notation is not supported \n\n* DATE (3 bytes)\n\nRange: 0000-01-01 ~ 9999-12-31\n\n* DATETIME (8 bytes)\n\nRange: 0000-01-01 00:00:00 ~ 9999-12-31 23:59:59\n\n* CHAR[(length)]\n\nFixed length string. Range: 1 ~ 255. Default value: 1.\n\n* VARCHAR[(length)]\n\nA variable-length string. The default value is 1. Unit: bytes.\n\n- In versions earlier than StarRocks 2.1, the value range of `length` is 1\u201365533.\n- [Preview] In StarRocks 2.1 and later versions, the value range of `length` is 1\u20131048576.\n\n* HLL (1~16385 bytes)\n\nFor HLL type, there's no need to specify length or default value. \n\nThe length will be controlled within the system according to data aggregation. \n\nHLL column can only be queried or used by hll_union_agg, Hll_cardinality, hll_hash.\n\n* BITMAP\n\n Bitmap type does not require specified length or default value. It represents a set of unsigned bigint numbers. The largest element could be up to 2^64 - 1.\nagg_type: aggregation type. If not specified, this column is key column. \n\nIf specified, it it value column. \n\nThe aggregation types supported are as follows: \n\n* SUM, MAX, MIN, REPLACE\n* HLL_UNION (only for HLL type) \n\n* BITMAP_UNION(only for BITMAP) \n\n* REPLACE_IF_NOT_NULL: This means the imported data will only be replaced when it is of non-null value. If it is of null value, StarRocks will retain the original value. \n\nNote: if NOT NULL is specified by REPLACE_IF_NOT_NULL column when the table was created, StarRocks will still convert the data to NULL without sending an error report to the user. With this, the user can import selected columns. \n\nThis aggregation type applies ONLY to the aggregation model whose key_desc type is AGGREGATE KEY. \nNULL is not allowed by default. NULL value should be represented by /N in the impored data. \n\nNote: \n\nWhen the column of aggregation type BITMAP_UNION is imported, its original data types must be TINYINT, SMALLINT, \n"})}),"\n",(0,a.jsx)(n.h3,{id:"index_definition",children:"index_definition"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"INDEX index_name (col_name[, col_name, ...]) [USING BITMAP] COMMENT 'xxxxxx'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can only create bitmap indexes when you create tables. For more information about parameter descriptions and usage notes, see ",(0,a.jsx)(n.a,{href:"/docs/2.3/using_starrocks/Bitmap_index#create-a-bitmap-index",children:"Bitmap indexing"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"engine-type",children:"ENGINE type"}),"\n",(0,a.jsx)(n.p,{children:"Default value: olap. If this parameter is not specified, an OLAP table (StarRocks native table) is created by default."}),"\n",(0,a.jsxs)(n.p,{children:["Optional value: mysql, elasticsearch, hive, jdbc (2.3 and later), iceberg, and hudi (2.2 and later). If you want to create an external table to query external data sources, specify ",(0,a.jsx)(n.code,{children:"CREATE EXTERNAL TABLE"})," and set ",(0,a.jsx)(n.code,{children:"ENGINE"})," to any of these values. You can refer to ",(0,a.jsx)(n.a,{href:"/docs/2.3/data_source/External_table",children:"External table"})," for more information."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For MySQL, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PROPERTIES (\n    "host" = "mysql_server_host",\n    "port" = "mysql_server_port",\n    "user" = "your_user_name",\n    "password" = "your_password",\n    "database" = "database_name",\n    "table" = "table_name"\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.p,{children:'"table_name" in MySQL should indicate the real table name. In contrast, "table_name" in CREATE TABLE statement indicates the name of this mysql table on StarRocks. They can either be different or the same.'}),"\n",(0,a.jsx)(n.p,{children:"The aim of creating MySQL tables in StarRocks is to access MySQL database. StarRocks itself does not maintain or store any MySQL data."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For Elasticsearch, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PROPERTIES (\n\n"hosts" = "http://192.168.0.1:8200,http://192.168.0.2:8200",\n"user" = "root",\n"password" = "root",\n"index" = "tindex",\n"type" = "doc"\n)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"hosts"}),": the URL that is used to connect your Elasticsearch cluster. You can specify one or more URLs."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"user"}),": the account of the root user that is used to log in to your Elasticsearch cluster for which basic authentication is enabled."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"password"}),": the password of the preceding root account."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"index"}),": the index of the StarRocks table in your Elasticsearch cluster. The index name is the same as the StarRocks table name. You can set this parameter to the alias of the StarRocks table."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"type"}),": the type of index. The default value is ",(0,a.jsx)(n.code,{children:"doc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For Hive, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PROPERTIES (\n\n    "database" = "hive_db_name",\n    "table" = "hive_table_name",\n    "hive.metastore.uris" = "thrift://127.0.0.1:9083"\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Here, database is the name of the corresponding database in Hive table. Table is the name of Hive table. hive.metastore.uris is the server address."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For JDBC, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PROPERTIES (\n"resource"="jdbc0",\n"table"="dest_tbl"\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"resource"})," is the JDBC resource name and ",(0,a.jsx)(n.code,{children:"table"})," is the destination table."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For Iceberg, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:' PROPERTIES (\n "resource" = "iceberg0", \n "database" = "iceberg", \n "table" = "iceberg_table"\n )\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"resource"})," is the Iceberg resource name. ",(0,a.jsx)(n.code,{children:"database"})," is the Iceberg database. ",(0,a.jsx)(n.code,{children:"table"})," is the Iceberg table."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For Hudi, specify the following properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'  PROPERTIES (\n  "resource" = "hudi0", \n  "database" = "hudi", \n  "table" = "hudi_table" \n  )\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"key_desc",children:"key_desc"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"key_type(k1[,k2 ...])\n"})}),"\n",(0,a.jsx)(n.p,{children:"Data is sequenced in specified key columns and has different attributes for different key types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"AGGREGATE KEY: Identical content in key columns will be aggregated into value columns according to the specified aggregation type. It usually applies to business scenarios such as financial statements and multi-dimensional analysis."}),"\n",(0,a.jsx)(n.li,{children:"UNIQUE KEY/PRIMARY KEY: Identical content in key columns will be replaced in value columns according to the import sequence. It can be applied to make addition, deletion, modification and query on key columns."}),"\n",(0,a.jsxs)(n.li,{children:["DUPLICATE KEY: Identical content in key columns, which also exists in StarRocks at the same time. It can be used to store detailed data or data with no aggregation attributes. ",(0,a.jsx)(n.strong,{children:"DUPLICATE KEY is the default type. Data will be sequenced according to key columns."})]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,a.jsx)(n.p,{children:"Value columns do not need to specify aggregation types when other key_type is used to create tables with the exception of AGGREGATE KEY."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"partition_desc",children:"partition_desc"}),"\n",(0,a.jsx)(n.p,{children:"Partition description can be used in the following three ways:"}),"\n",(0,a.jsx)(n.h4,{id:"less-than",children:"LESS THAN"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PARTITION BY RANGE (k1, k2, ...)\n(\n    PARTITION partition_name1 VALUES LESS THAN MAXVALUE|("value1", "value2", ...),\n    PARTITION partition_name2 VALUES LESS THAN MAXVALUE|("value1", "value2", ...)\n    ...\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.p,{children:"Please use specified key columns and specified value ranges for partitioning."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Partition name only supports [A-z0-9_]"}),"\n",(0,a.jsx)(n.li,{children:"Columns in Range partition only support the following types: TINYINT, SAMLLINT, INT, BIGINT, LARGEINT, DATE, and DATETIME."}),"\n",(0,a.jsx)(n.li,{children:"Partitions are left closed and right open. The left boundary of the first partition is of minimum value."}),"\n",(0,a.jsx)(n.li,{children:"NULL value is stored only in partitions that contain minimum values. When the partition containing the minimum value is deleted, NULL values can no longer be imported."}),"\n",(0,a.jsx)(n.li,{children:"Partition columns can either be single columns or multiple columns. The partition values are the default minimum values."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Please note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Partitions are often used for managing data related to time."}),"\n",(0,a.jsx)(n.li,{children:"When data backtracking is needed, you may want to consider emptying the first partition for adding partitions later when necessary."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"fixed-range",children:"Fixed Range"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY RANGE (k1, k2, k3, ...)\n(\n    PARTITION partition_name1 VALUES [("k1-lower1", "k2-lower1", "k3-lower1",...), ("k1-upper1", "k2-upper1", "k3-upper1", ...)),\n    PARTITION partition_name2 VALUES [("k1-lower1-2", "k2-lower1-2", ...), ("k1-upper1-2", MAXVALUE, )),\n    "k3-upper1-2", ...\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fixed Range is more flexible than LESS THAN. You can customize the left and right partitions."}),"\n",(0,a.jsx)(n.li,{children:"Fixed Range is the same as LESS THAN in the other aspects."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"create-partitions-in-bulk",children:"Create partitions in bulk"}),"\n",(0,a.jsx)(n.p,{children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PARTITION BY RANGE (datekey) (\n    START ("2021-01-01") END ("2021-01-04") EVERY (INTERVAL 1 day)\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify the value for ",(0,a.jsx)(n.code,{children:"START"})," and ",(0,a.jsx)(n.code,{children:"END"})," and the expression in ",(0,a.jsx)(n.code,{children:"EVERY"})," to create partitions in bulk ."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"datekey"})," supports DATE and INTEGER data type, the data type of ",(0,a.jsx)(n.code,{children:"START"}),", ",(0,a.jsx)(n.code,{children:"END"}),", and ",(0,a.jsx)(n.code,{children:"EVERY"})," must be the same as the data type of ",(0,a.jsx)(n.code,{children:"datekey"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"datekey"})," only supports DATE data type, you need to use the ",(0,a.jsx)(n.code,{children:"INTERVAL"})," keyword to specify the date interval. You can specify the date interval by day, week, month, or year. The naming conventions of partitions are the same as those for dynamic partitions."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more information, see ",(0,a.jsx)(n.a,{href:"/docs/2.3/table_design/Data_distribution#create-and-modify-partitions-in-bulk",children:"Data distribution"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"distribution_desc",children:"distribution_desc"}),"\n",(0,a.jsx)(n.p,{children:"Hash bucketing"}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"`DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]`\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.p,{children:"Please use specified key columns for Hash bucketing. The default bucket number is 10."}),"\n",(0,a.jsx)(n.p,{children:"It is recommended to use Hash bucketing method."}),"\n",(0,a.jsx)(n.h3,{id:"properties",children:"PROPERTIES"}),"\n",(0,a.jsx)(n.h4,{id:"specify-storage-medium-storage-cooldown-time-replica-number",children:"Specify storage medium, storage cooldown time, replica number"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If ENGINE type is olap. Users can specify storage medium, cooldown time, and replica number."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:'PROPERTIES (\n    "storage_medium" = "[SSD|HDD]",\n    [ "storage_cooldown_time" = "yyyy-MM-dd HH:mm:ss", ]\n    [ "replication_num" = "3" ]\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"storage_medium: SSD or HDD can be specified as the initial storage medium."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Note"})}),"\n",(0,a.jsxs)(n.p,{children:["When the FE configuration item ",(0,a.jsx)(n.code,{children:"enable_strict_storage_medium_check"})," is ",(0,a.jsx)(n.code,{children:"True"})," and the storage medium is not specified, the statement for creating a table will report an error: Failed to find enough host in all backends with storage medium is SSD|HDD."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:['storage_cooldown_time: the storage cooldown time for a partition. If the storage medium is SSD, SSD is switched to HDD after the time specified by this parameter. Format: "yyyy-MM-dd HH:mm',(0,a.jsx)(n.div,{}),'". The specified time must be later than the current time. If this parameter is not explicitly specified, auto-cooldown is not performed by default.']}),"\n",(0,a.jsx)(n.p,{children:"replication_num: number of replicas in the specified partition. Default number: 3."}),"\n",(0,a.jsx)(n.p,{children:"When the table has only one partition, the properties belongs to the table. When the table has two levels of partitions, the properties belong to each partition. Users can also specify different properties for different partitions through ADD ADDITION and MODIFY PARTITION statements."}),"\n",(0,a.jsx)(n.h4,{id:"add-bloom-filter-index-for-a-column",children:"Add bloom filter index for a column"}),"\n",(0,a.jsx)(n.p,{children:"If the Engine type is olap, you can specify a column to adopt bloom filter indexes."}),"\n",(0,a.jsx)(n.p,{children:"The following limits apply when you use bloom filter index:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You can create bloom filter indexes for all columns of a Duplicate Key or Primary Key table. For an Aggregate Key or Unique Key table, you can only create bloom filter indexes for key columns."}),"\n",(0,a.jsx)(n.li,{children:"TINYINT, FLOAT, DOUBLE, and DECIMAL columns do not support creating bloom filter indexes."}),"\n",(0,a.jsxs)(n.li,{children:["Bloom filter indexes can only improve the performance of queries that contain the ",(0,a.jsx)(n.code,{children:"in"})," and ",(0,a.jsx)(n.code,{children:"="})," operators, such as ",(0,a.jsx)(n.code,{children:"Select xxx from table where x in {}"})," and ",(0,a.jsx)(n.code,{children:"Select xxx from table where column = xxx"}),". More discrete values in this column will result in more precise queries."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more information, see ",(0,a.jsx)(n.a,{href:"/docs/2.3/using_starrocks/Bloomfilter_index",children:"Bloom filter indexing"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'PROPERTIES (\n    "bloom_filter_columns"="k1,k2,k3"\n)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"use-colocate-join",children:"Use Colocate Join"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use Colocate Join attributes, specify it in ",(0,a.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'PROPERTIES (\n    "colocate_with"="table1"\n)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"configure-dynamic-partitions",children:"Configure dynamic partitions"}),"\n",(0,a.jsx)(n.p,{children:"If you want to use dynamic partition attributes, please specify it in properties."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'PROPERTIES (\n\n    "dynamic_partition.enable" = "true|false",\n    "dynamic_partition.time_unit" = "DAY|WEEK|MONTH",\n    "dynamic_partition.start" = "${integer_value}",\n    "dynamic_partition.end" = "${integer_value}",\n    "dynamic_partition.prefix" = "${string_value}",\n    "dynamic_partition.buckets" = "${integer_value}"\n'})}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.enable: It is used to specify whether dynamic partitioning at the table level is enabled. Default value: true."}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.time_unit: It is used to specify the time unit for adding partitions dynamically. Time unit could be DAY, WEEK, MONTH."}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.start: It is used to specify how many partitions should be deleted. The value must be less than 0. Default value: integer.Min_VAULE."}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.end: It is used to specify the how many partitions will be created in advance. The value must be more than 0."}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.prefix: It is used to specify the prefix of the created partition. For instance, if the prefix is p, the partition will be named p20200108 automatically."}),"\n",(0,a.jsx)(n.p,{children:"dynamic_partition.buckets: It is used to specify the number of buckets automatically created in partitions."}),"\n",(0,a.jsx)(n.h4,{id:"create-rollup-in-bulk",children:"Create rollup in bulk"}),"\n",(0,a.jsx)(n.p,{children:"You can create rollup in bulk when you create a table."}),"\n",(0,a.jsx)(n.p,{children:"Syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'ROLLUP (rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)],...)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"create-an-aggregate-key-table-that-uses-hash-bucketing-and-column-based-storage",children:"Create an Aggregate Key table that uses Hash bucketing and column-based storage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10\nPROPERTIES ("storage_type"="column");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-an-aggregate-key-table-and-set-the-storage-medium-and-cooldown-time",children:"Create an Aggregate Key table and set the storage medium and cooldown time"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.table_hash\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 SMALLINT SUM DEFAULT "10"\n)\nENGINE=olap\nUNIQUE KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2) BUCKETS 10\nPROPERTIES(\n    "storage_type"="column",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Or"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.table_hash\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 SMALLINT SUM DEFAULT "10"\n)\nENGINE=olap\nPRIMARY KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2) BUCKETS 10\nPROPERTIES(\n    "storage_type"="column",\n    "storage_medium" = "SSD",\n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-duplicate-key-table-that-uses-range-partition-hash-bucketing-and-column-based-storage-and-set-the-storage-medium-and-cooldown-time",children:"Create a Duplicate Key table that uses Range partition, Hash bucketing, and column-based storage, and set the storage medium and cooldown time"}),"\n",(0,a.jsx)(n.p,{children:"LESS THAN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.table_range\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1)\n(\n    PARTITION p1 VALUES LESS THAN ("2014-01-01"),\n    PARTITION p2 VALUES LESS THAN ("2014-06-01"),\n    PARTITION p3 VALUES LESS THAN ("2014-12-01")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 10\nPROPERTIES(\n    "storage_medium" = "SSD", \n    "storage_cooldown_time" = "2015-06-04 00:00:00"\n);\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsx)(n.p,{children:"This statement will create three data partitions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'( {    MIN     },   {"2014-01-01"} )\n[ {"2014-01-01"},   {"2014-06-01"} )\n[ {"2014-06-01"},   {"2014-12-01"} )\n'})}),"\n",(0,a.jsx)(n.p,{children:"Data outside these ranges will be not be loaded."}),"\n",(0,a.jsx)(n.p,{children:"Fixed Range"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE table_range\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1, k2, k3)\n(\n    PARTITION p1 VALUES [("2014-01-01", "10", "200"), ("2014-01-01", "20", "300")),\n    PARTITION p2 VALUES [("2014-06-01", "100", "200"), ("2014-07-01", "100", "300"))\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 10\nPROPERTIES(\n    "storage_medium" = "SSD"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-mysql-external-table",children:"Create a MySQL external table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE example_db.table_mysql\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    k4 VARCHAR(2048),\n    k5 DATETIME\n)\nENGINE=mysql\nPROPERTIES\n(\n    "host" = "127.0.0.1",\n    "port" = "8239",\n    "user" = "mysql_user",\n    "password" = "mysql_passwd",\n    "database" = "mysql_db_test",\n    "table" = "mysql_table_test"\n)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-table-that-contains-hll-columns",children:"Create a table that contains HLL columns"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 HLL HLL_UNION,\n    v2 HLL HLL_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 10\nPROPERTIES ("storage_type"="column");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-table-containing-bitmap_union-aggregation-type",children:"Create a table containing BITMAP_UNION aggregation type"}),"\n",(0,a.jsxs)(n.p,{children:["The original data type of ",(0,a.jsx)(n.code,{children:"v1"})," and ",(0,a.jsx)(n.code,{children:"v2"})," columns must be TINYINT, SMALLINT, or INT."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.example_table\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 BITMAP BITMAP_UNION,\n    v2 BITMAP BITMAP_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 10\nPROPERTIES ("storage_type"="column");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-two-tables-that-support-colocate-join",children:"Create two tables that support Colocate Join"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `t1` \n(\n     `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n) \nENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES \n(\n    "colocate_with" = "t1"\n);\n\nCREATE TABLE `t2` \n(\n    `id` int(11) COMMENT "",\n    `value` varchar(8) COMMENT ""\n) \nENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES \n(\n    "colocate_with" = "t1"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-table-with-bitmap-index",children:"Create a table with bitmap index"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX k1_idx (k1) USING BITMAP COMMENT \'xxxxxx\'\n)\nENGINE=olap\nAGGREGATE KEY(k1, k2)\nCOMMENT "my first starrocks table"\nDISTRIBUTED BY HASH(k1) BUCKETS 10\nPROPERTIES ("storage_type"="column");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-dynamic-partition-table",children:"Create a dynamic partition table"}),"\n",(0,a.jsxs)(n.p,{children:['The dynamic partitioning function must be enabled ("dynamic_partition.enable" = "true") in FE configuration. For more information, see ',(0,a.jsx)(n.a,{href:"#configure-dynamic-partitions",children:"Configure dynamic partitions"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This example creates partitions for the next three days and deletes partitions created three days ago. For example, if today is 2020-01-08, partitions with the following names will be created: p20200108, p20200109, p20200110, p20200111, and their ranges are:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain_Text",children:"[types: [DATE]; keys: [2020-01-08]; \u2025types: [DATE]; keys: [2020-01-09]; )\n[types: [DATE]; keys: [2020-01-09]; \u2025types: [DATE]; keys: [2020-01-10]; )\n[types: [DATE]; keys: [2020-01-10]; \u2025types: [DATE]; keys: [2020-01-11]; )\n[types: [DATE]; keys: [2020-01-11]; \u2025types: [DATE]; keys: [2020-01-12]; )\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE example_db.dynamic_partition\n(\n    k1 DATE,\n    k2 INT,\n    k3 SMALLINT,\n    v1 VARCHAR(2048),\n    v2 DATETIME DEFAULT "2014-02-04 15:36:00"\n)\nENGINE=olap\nDUPLICATE KEY(k1, k2, k3)\nPARTITION BY RANGE (k1)\n(\n    PARTITION p1 VALUES LESS THAN ("2014-01-01"),\n    PARTITION p2 VALUES LESS THAN ("2014-06-01"),\n    PARTITION p3 VALUES LESS THAN ("2014-12-01")\n)\nDISTRIBUTED BY HASH(k2) BUCKETS 10\nPROPERTIES(\n    "storage_medium" = "SSD",\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-3",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "10"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-hive-external-table",children:"Create a Hive external table"}),"\n",(0,a.jsxs)(n.p,{children:["Before you create a Hive external table, you must create a Hive resource and database. For more information, see ",(0,a.jsx)(n.a,{href:"/docs/2.3/data_source/External_table#hive-external-table",children:"External table"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE example_db.table_hive\n(\n    k1 TINYINT,\n    k2 VARCHAR(50),\n    v INT\n)\nENGINE=hive\nPROPERTIES\n(\n    "resource" = "hive0",\n    "database" = "hive_db_name",\n    "table" = "hive_table_name"\n);\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>s});var a=t(67294);const i=a.createContext({});function s(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:s(e),a.createElement(i.Provider,{value:r},n)}}}]);