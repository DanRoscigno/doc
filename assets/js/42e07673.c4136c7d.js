"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60148],{88496:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=l(85893),a=l(11151);const s={displayed_sidebar:"documentation"},d="ALTER TABLE",r={id:"sql-reference/sql-statements/data-definition/ALTER_TABLE",title:"ALTER TABLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/ALTER_TABLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ALTER RESOURCE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE"},next:{title:"ALTER VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_VIEW"}},t={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Modify partition",id:"modify-partition",level:3},{value:"Add a partition",id:"add-a-partition",level:4},{value:"Drop a partition",id:"drop-a-partition",level:4},{value:"Add a temporary partition",id:"add-a-temporary-partition",level:4},{value:"Use a temporary partition to replace current partition",id:"use-a-temporary-partition-to-replace-current-partition",level:4},{value:"Drop a temporary partition",id:"drop-a-temporary-partition",level:4},{value:"Modify partition properties",id:"modify-partition-properties",level:4},{value:"Modify rollup index",id:"modify-rollup-index",level:3},{value:"Create a rollup index",id:"create-a-rollup-index",level:4},{value:"Create rollup indexes in batches",id:"create-rollup-indexes-in-batches",level:4},{value:"Drop a rollup index",id:"drop-a-rollup-index",level:4},{value:"Batch drop rollup indexes",id:"batch-drop-rollup-indexes",level:4},{value:"Schema change",id:"schema-change",level:3},{value:"Add a column to specified location of specified index",id:"add-a-column-to-specified-location-of-specified-index",level:4},{value:"Add multiple columns to specified index",id:"add-multiple-columns-to-specified-index",level:4},{value:"Drop a column from specified index",id:"drop-a-column-from-specified-index",level:4},{value:"Modify the column type and column position of specified index",id:"modify-the-column-type-and-column-position-of-specified-index",level:4},{value:"Reorder the columns of specified index",id:"reorder-the-columns-of-specified-index",level:4},{value:"Modify table properties",id:"modify-table-properties",level:4},{value:"Rename",id:"rename",level:3},{value:"Rename a table",id:"rename-a-table",level:4},{value:"Rename a rollup index",id:"rename-a-rollup-index",level:4},{value:"Rename a partition",id:"rename-a-partition",level:4},{value:"Modify bitmap indexes",id:"modify-bitmap-indexes",level:3},{value:"Create a bitmap index",id:"create-a-bitmap-index",level:4},{value:"Drop an index",id:"drop-an-index",level:4},{value:"Swap",id:"swap",level:3},{value:"Examples",id:"examples",level:2},{value:"Table",id:"table",level:3},{value:"Partition",id:"partition",level:3},{value:"Rollup",id:"rollup",level:3},{value:"Schema Change",id:"schema-change-1",level:3},{value:"Rename",id:"rename-1",level:3},{value:"Index",id:"index",level:3},{value:"Swap",id:"swap-1",level:3},{value:"References",id:"references",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3",h4:"h4",ol:"ol"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"alter-table",children:"ALTER TABLE"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Modifies an existing table."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsx)(n.p,{children:"This operation requires the ALTER privilege on the destination table."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE [database.]table\nalter_clause1[, alter_clause2, ...]\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alter_clause"})," is classified into six operations: partition, rollup, schema change, rename, index, and swap."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"partition: modifies partition properties, drops a partition, or adds a partition."}),"\n",(0,i.jsx)(n.li,{children:"rollup: creates or drops a rollup index."}),"\n",(0,i.jsx)(n.li,{children:"schema change: adds, drops, or reorders columns, or modifies column type."}),"\n",(0,i.jsxs)(n.li,{children:["rename: renames a table, rollup index, or partition. ",(0,i.jsx)(n.strong,{children:"Note that column names cannot be modified."})]}),"\n",(0,i.jsx)(n.li,{children:"index: modifies index (only Bitmap index can be modified)."}),"\n",(0,i.jsx)(n.li,{children:"swap: atomic exchange of two tables."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Schema change, rollup, and partition operations cannot be performed in one ALTER TABLE statement."}),"\n",(0,i.jsxs)(n.li,{children:["Schema change and rollup are asynchronous operations and are returned if the task is submitted successfully. Users can run the ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})," command to check the progress."]}),"\n",(0,i.jsx)(n.li,{children:"Partition, rename, swap, and index are synchronous operations, and a command return indicates that the execution is finished."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modify-partition",children:"Modify partition"}),"\n",(0,i.jsx)(n.h4,{id:"add-a-partition",children:"Add a partition"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE [database.]table \nADD PARTITION [IF NOT EXISTS] <partition_name>\npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]];\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Partition_desc supports the following two expressions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",children:'VALUES LESS THAN [MAXVALUE|("value1", ...)]\nVALUES [("value1", ...), ("value1", ...))\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"partition is the left-closed-right-open interval. If the user only specifies the right boundary, the system will automatically determine the left boundary."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the bucket mode is not specified, the bucket method used by the built-in table is automatically used."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the bucket mode is specified, only the bucket number can be modified, and the bucket mode or bucket column cannot be modified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['User can set some properties of the partition in ["key"="value"]. See ',(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"drop-a-partition",children:"Drop a partition"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- Before 2.0\nALTER TABLE [database.]table\nDROP PARTITION [IF EXISTS | FORCE] <partition_name>\n-- 2.0 or later\nALTER TABLE [database.]table\nDROP PARTITION [IF EXISTS] <partition_name> [FORCE]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Keep at least one partition for partitioned tables."}),"\n",(0,i.jsx)(n.li,{children:"After executing DROP PARTITION for a while, the dropped partition can be recovered by the RECOVER statement. See the RECOVER statement for details."}),"\n",(0,i.jsx)(n.li,{children:"If DROP PARTITION FORCE is executed, the partition will be deleted directly and cannot be recovered without checking whether there are any unfinished activities on the partition. Thus, generally this operation is not recommended."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"add-a-temporary-partition",children:"Add a temporary partition"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table \nADD TEMPORARY PARTITION [IF NOT EXISTS] <partition_name>\npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"use-a-temporary-partition-to-replace-current-partition",children:"Use a temporary partition to replace current partition"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nREPLACE PARTITION <partition_name>\npartition_desc ["key"="value"]\nWITH TEMPORARY PARTITION\npartition_desc ["key"="value"]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"drop-a-temporary-partition",children:"Drop a temporary partition"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nDROP TEMPORARY PARTITION <partition_name>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"modify-partition-properties",children:"Modify partition properties"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\n    MODIFY PARTITION { <partition_name> | partition_name_list | (*) }\n        SET ("key" = "value", ...);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usages"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following properties of a partition can be modified:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"storage_medium"}),"\n",(0,i.jsx)(n.li,{children:"storage_cooldown_ttl or storage_cooldown_time"}),"\n",(0,i.jsx)(n.li,{children:"replication_num"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For the table that has only one partition, the partition name is the same as the table name. If the table is divided into multiple partitions, you can use ",(0,i.jsx)(n.code,{children:"(*)"}),"to modify the properties of all partitions, which is more convenient."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Execute ",(0,i.jsx)(n.code,{children:"SHOW PARTITIONS FROM <table_name>"})," to view the partition properties after modification."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modify-rollup-index",children:"Modify rollup index"}),"\n",(0,i.jsx)(n.h4,{id:"create-a-rollup-index",children:"Create a rollup index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE [database.]table \nADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.p,{children:"PROPERTIES: Support setting timeout time and the default timeout time is one day."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE [database.]table \nADD ROLLUP r1(col1,col2) from r0;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"create-rollup-indexes-in-batches",children:"Create rollup indexes in batches"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE [database.]table\nADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)],...];\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nADD ROLLUP r1(col1,col2) from r0, r2(col3,col4) from r0;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"If from_index_name is not specified, then create from base index by default."}),"\n",(0,i.jsx)(n.li,{children:"The columns in the rollup table must be existing columns in from_index."}),"\n",(0,i.jsx)(n.li,{children:"In properties, user can specify the storage format. See CREATE TABLE for details."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"drop-a-rollup-index",children:"Drop a rollup index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nDROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table DROP ROLLUP r1;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"batch-drop-rollup-indexes",children:"Batch drop rollup indexes"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nDROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...];\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table DROP ROLLUP r1, r2;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: You cannot drop the base index."}),"\n",(0,i.jsx)(n.h3,{id:"schema-change",children:"Schema change"}),"\n",(0,i.jsx)(n.p,{children:"Schema change supports the following modifications."}),"\n",(0,i.jsx)(n.h4,{id:"add-a-column-to-specified-location-of-specified-index",children:"Add a column to specified location of specified index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. If you add a value column to an Aggregate table, you need to specify agg_type.\n2. If you add a key column to a non-Aggregate table (such as a Duplicate Key table), you need to specify the KEY keyword.\n3. You cannot add a column that already exists in the base index to the rollup index. (You can recreate a rollup index if needed.)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"add-multiple-columns-to-specified-index",children:"Add multiple columns to specified index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you add a value column to an aggregate table, you need to specify ",(0,i.jsx)(n.code,{children:"agg_type"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you add a key column to a non-aggregate table, you need to specify the KEY keyword."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You cannot add a column that already exists in the base index to the rollup index. (You can create another rollup index if needed.)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"drop-a-column-from-specified-index",children:"Drop a column from specified index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nDROP COLUMN column_name\n[FROM rollup_index_name];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"You cannot drop partition column."}),"\n",(0,i.jsx)(n.li,{children:"If the column is dropped from the base index, it will also be dropped if it is included in the rollup index."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"modify-the-column-type-and-column-position-of-specified-index",children:"Modify the column type and column position of specified index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nMODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you modify the value column in aggregation models, you need to specify agg_type."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you modify the key column in non-aggregation models, you need to specify the KEY keyword."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Only the type of column can be modified. The other properties of the column remain as they are currently. (i.e. other properties need to be explicitly written in the statement according to the original property, see example 8)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The partition column cannot be modified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following types of conversions are currently supported (accuracy loss is guaranteed by the user)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Convert TINYINT/SMALLINT/INT/BIGINT to TINYINT/SMALLINT/INT/BIGINT/DOUBLE."}),"\n",(0,i.jsx)(n.li,{children:"Convert TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL to VARCHAR. VARCHAR supports modification of maximum length."}),"\n",(0,i.jsx)(n.li,{children:"Convert VARCHAR to TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE."}),"\n",(0,i.jsx)(n.li,{children:'Convert VARCHAR to DATE (currently support six formats: "%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d")'}),"\n",(0,i.jsxs)(n.li,{children:["Convert DATETIME to DATE(only year-month-day information is retained, i.e.  ",(0,i.jsx)(n.code,{children:"2019-12-09 21:47:05"})," ",(0,i.jsx)(n.code,{children:"<--\x3e"})," ",(0,i.jsx)(n.code,{children:"2019-12-09"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Convert DATE to DATETIME (set hour, minute, second to zero, For example: ",(0,i.jsx)(n.code,{children:"2019-12-09"})," ",(0,i.jsx)(n.code,{children:"<--\x3e"})," ",(0,i.jsx)(n.code,{children:"2019-12-09 00:00:00"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Convert FLOAT to DOUBLE"}),"\n",(0,i.jsx)(n.li,{children:"Convert INT to DATE (If the INT data fails to convert, the original data remains the same)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Conversion from NULL to NOT NULL is not supported."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"reorder-the-columns-of-specified-index",children:"Reorder the columns of specified index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE [database.]table\nORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"All columns in the index must be written."}),"\n",(0,i.jsx)(n.li,{children:"The value column is listed after the key column."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"modify-table-properties",children:"Modify table properties"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, StarRocks supports modifying ",(0,i.jsx)(n.code,{children:"bloom_filter_columns"})," property,",(0,i.jsx)(n.code,{children:"colocate_with"})," property, dynamic partitioning related properties, ",(0,i.jsx)(n.code,{children:"enable_persistent_index"})," property, ",(0,i.jsx)(n.code,{children:"replication_num"})," property and ",(0,i.jsx)(n.code,{children:"default.replication_num"})," property, ",(0,i.jsx)(n.code,{children:"storage_cooldown_ttl"})," property and ",(0,i.jsx)(n.code,{children:"storage_cooldown_time"})," property."]}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'PROPERTIES ("key"="value")\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note:\nYou can also modify the properties by merging into the above schema change operation. See the following examples."}),"\n",(0,i.jsx)(n.h3,{id:"rename",children:"Rename"}),"\n",(0,i.jsx)(n.p,{children:"Rename supports modification of table name, rollup index, and partition name."}),"\n",(0,i.jsx)(n.h4,{id:"rename-a-table",children:"Rename a table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE <table_name> RENAME <new_table_name>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rename-a-rollup-index",children:"Rename a rollup index"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nRENAME ROLLUP <old_rollup_name> <new_rollup_name>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rename-a-partition",children:"Rename a partition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nRENAME PARTITION <old_partition_name> <new_partition_name>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"modify-bitmap-indexes",children:"Modify bitmap indexes"}),"\n",(0,i.jsx)(n.p,{children:"Bitmap index supports the following modifications:"}),"\n",(0,i.jsx)(n.h4,{id:"create-a-bitmap-index",children:"Create a bitmap index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:" ALTER TABLE [database.]table\nADD INDEX index_name (column [, ...],) [USING BITMAP] [COMMENT 'balabala'];\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. Bitmap index is only supported for the current version.\n2. A BITMAP index is created only in a single column.\n"})}),"\n",(0,i.jsx)(n.h4,{id:"drop-an-index",children:"Drop an index"}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP INDEX index_name;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"swap",children:"Swap"}),"\n",(0,i.jsx)(n.p,{children:"Swap supports atomic exchange of two tables."}),"\n",(0,i.jsx)(n.p,{children:"Syntax:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE [database.]table\nSWAP WITH table_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"table",children:"Table"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modify the default number of replicas of the table, which is used as the default number of replicas for newly added partitions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("default.replication_num" = "2");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modify the actual number of replicas of a single-partition table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("replication_num" = "3");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modify data writing and replication mode among replicas."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("replicated_storage" = "false");\n'})}),"\n",(0,i.jsxs)(n.p,{children:['This example sets the data writing and replication mode among replicas to "leaderless replication", which means data is written to multiple replicas at the same time without differentiating primary and secondary replicas. For more information, see the ',(0,i.jsx)(n.code,{children:"replicated_storage"})," parameter in ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"partition",children:"Partition"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a partition and use the default bucketing mode. The existing partition is [MIN, 2013-01-01). The added partition is [2013-01-01, 2014-01-01)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a partition and use the new number of buckets."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a partition and use the new number of replicas."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Alter the number of replicas for a partition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Batch alter the number of replicas for specified partitions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("replication_num"="1");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Batch alter the storage medium of all partitions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Drop a partition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a partition that has upper and lower boundaries."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rollup",children:"Rollup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an index ",(0,i.jsx)(n.code,{children:"example_rollup_index"})," based on the base index (k1,k2,k3,v1,v2). Column-based storage is used."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2)\nPROPERTIES("storage_type"="column");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an index ",(0,i.jsx)(n.code,{children:"example_rollup_index2"})," based on ",(0,i.jsx)(n.code,{children:"example_rollup_index(k1,k3,v1,v2)"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create an index ",(0,i.jsx)(n.code,{children:"example_rollup_index3"})," based on the base index (k1, k2, k3, v1). The rollup timeout time is set to one hour."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index3(k1, k3, v1)\nPROPERTIES("storage_type"="column", "timeout" = "3600");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Drop an index ",(0,i.jsx)(n.code,{children:"example_rollup_index2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"schema-change-1",children:"Schema Change"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a key column ",(0,i.jsx)(n.code,{children:"new_col"})," (non-aggregate column) after the ",(0,i.jsx)(n.code,{children:"col1"})," column of ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER col1\nTO example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a value column ",(0,i.jsx)(n.code,{children:"new_col"})," (non-aggregate column) after the ",(0,i.jsx)(n.code,{children:"col1"})," column of ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER col1\nTO example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a key column ",(0,i.jsx)(n.code,{children:"new_col"})," (aggregate column) after the ",(0,i.jsx)(n.code,{children:"col1"})," column of ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER col1\nTO example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a value column ",(0,i.jsx)(n.code,{children:"new_col SUM"})," (aggregate column) after the ",(0,i.jsx)(n.code,{children:"col1"})," column of ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT SUM DEFAULT "0" AFTER col1\nTO example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add multiple columns to ",(0,i.jsx)(n.code,{children:"example_rollup_index"})," (aggregate)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN (col1 INT DEFAULT "1", col2 FLOAT SUM DEFAULT "2.3")\nTO example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Drop a column from ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nDROP COLUMN col2\nFROM example_rollup_index;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify the column type of col1 of the base index to BIGINT and put it after ",(0,i.jsx)(n.code,{children:"col2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY COLUMN col1 BIGINT DEFAULT "1" AFTER col2;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify the maximum length of the ",(0,i.jsx)(n.code,{children:"val1"})," column of the base index to 64. The original length is 32."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Reorder the columns in ",(0,i.jsx)(n.code,{children:"example_rollup_index"}),". The original column order is k1, k2, k3, v1, v2."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_db.my_table\nORDER BY (k3,k1,k2,v2,v1)\nFROM example_rollup_index;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Perform two operations (ADD COLUMN and ORDER BY) at one time."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nADD COLUMN v2 INT MAX DEFAULT "0" AFTER k2 TO example_rollup_index,\nORDER BY (k3,k1,k2,v2,v1) FROM example_rollup_index;\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Alter the bloomfilter columns of the table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n",(0,i.jsx)(n.p,{children:"This operation can also be merged into the above schema change operation (note that the syntax of multiple clauses is slightly different)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Alter the Colocate property of the table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("colocate_with" = "t1");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Alter the bucketing mode of the table from Random Distribution to Hash Distribution."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("distribution_type" = "hash");\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Alter the dynamic partition property of the table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET ("dynamic_partition.enable" = "false");\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you need to add dynamic partition properties to a table with no dynamic partition properties configured, you need to specify all the dynamic partition properties."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER TABLE example_db.my_table\nSET (\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n    );\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rename-1",children:"Rename"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename ",(0,i.jsx)(n.code,{children:"table1"})," to ",(0,i.jsx)(n.code,{children:"table2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 RENAME table2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename rollup index ",(0,i.jsx)(n.code,{children:"rollup1"})," of ",(0,i.jsx)(n.code,{children:"example_table"})," to ",(0,i.jsx)(n.code,{children:"rollup2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_table RENAME ROLLUP rollup1 rollup2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename partition ",(0,i.jsx)(n.code,{children:"p1"})," of ",(0,i.jsx)(n.code,{children:"example_table"})," to ",(0,i.jsx)(n.code,{children:"p2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE example_table RENAME PARTITION p1 p2;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"index",children:"Index"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a bitmap index for column ",(0,i.jsx)(n.code,{children:"siteid"})," in ",(0,i.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1\nADD INDEX index_1 (siteid) [USING BITMAP] COMMENT 'balabala';\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Drop the bitmap index of column ",(0,i.jsx)(n.code,{children:"siteid"})," in ",(0,i.jsx)(n.code,{children:"table1"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1\nDROP INDEX index_1;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"swap-1",children:"Swap"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Atomic swap between ",(0,i.jsx)(n.code,{children:"table1"})," and ",(0,i.jsx)(n.code,{children:"table2"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 SWAP WITH table2\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},11151:(e,n,l)=>{l.d(n,{Zo:()=>r,ah:()=>s});var i=l(67294);const a=i.createContext({});function s(e){const n=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:l}){let r;return r=l?"function"==typeof e?e({}):e||d:s(e),i.createElement(a.Provider,{value:r},n)}}}]);