"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44223],{26812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(85893),r=a(11151);const i={displayed_sidebar:"documentation"},s="Temporary partition",o={id:"table_design/Temporary_partition",title:"Temporary partition",description:"This topic describes how to use the temporary partition feature.",source:"@site/versioned_docs/version-3.0/table_design/Temporary_partition.md",sourceDirName:"table_design",slug:"/table_design/Temporary_partition",permalink:"/doc/docs/3.0/table_design/Temporary_partition",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/Temporary_partition.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Dynamic partitioning",permalink:"/doc/docs/3.0/table_design/dynamic_partitioning"},next:{title:"Data compression",permalink:"/doc/docs/3.0/table_design/data_compression"}},l={},d=[{value:"Create temporary partitions",id:"create-temporary-partitions",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Usage notes",id:"usage-notes",level:3},{value:"Show temporary partitions",id:"show-temporary-partitions",level:2},{value:"Load data into temporary partitions",id:"load-data-into-temporary-partitions",level:2},{value:"Load data by using <code>INSERT INTO</code> command",id:"load-data-by-using-insert-into-command",level:3},{value:"Load data by using STREAM LOAD",id:"load-data-by-using-stream-load",level:3},{value:"Load data by using BROKER LOAD",id:"load-data-by-using-broker-load",level:3},{value:"Load data by using ROUTINE LOAD",id:"load-data-by-using-routine-load",level:3},{value:"Query data in temporary partitions",id:"query-data-in-temporary-partitions",level:2},{value:"Replace original formal partitions with temporary partitions",id:"replace-original-formal-partitions-with-temporary-partitions",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Usage notes",id:"usage-notes-1",level:3},{value:"Delete temporary partitions",id:"delete-temporary-partitions",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",code:"code",h2:"h2",h3:"h3",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"temporary-partition",children:"Temporary partition"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to use the temporary partition feature."}),"\n",(0,n.jsx)(t.p,{children:"You can create temporary partitions on a partitioned table that already has defined partitioning rules and define new data distribution strategies for these temporary partitions. Temporary partitions can serve as temporary data carriers when you atomically overwrite data in a partition or when you adjust partitioning and bucketing strategies. For temporary partitions, you can reset data distribution strategies such as partition ranges, number of buckets, and properties such as the number of replicas, and the storage medium, to meet specific requirements."}),"\n",(0,n.jsx)(t.p,{children:"You can use the temporary partition feature in the following scenarios:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Atomic overwrite operation"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to rewrite the data in a partition while ensuring that the data can be queried during the rewriting process, you can first create a temporary partition based on the original formal partition, and load the new data into the temporary partition. Then you can use the replace operation to atomically replace the original formal partition with the temporary partition. For atomic overwrite operations on non-partitioned tables, see ",(0,n.jsx)(t.a,{href:"../sql-reference/sql-statements/data-definition/ALTER_TABLE#swap",children:"ALTER TABLE - SWAP"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Adjust partition data query concurrency"}),"\n",(0,n.jsxs)(t.p,{children:["If you need to modify the number of buckets for a partition, you can first create a temporary partition with the same partition range as the original formal partition and specify the new number of buckets. Then, you can use the ",(0,n.jsx)(t.code,{children:"INSERT INTO"})," command to load the data of the original formal partition into the temporary partition. Finally, you can use the replace operation to atomically replace the original formal partition with the temporary partition."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Modify partitioning rules"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to modify a partitioning strategy, such as merging partitions or splitting a large partition into multiple smaller partitions, you can first create temporary partitions with the expected merged or split ranges. Then, you can use the ",(0,n.jsx)(t.code,{children:"INSERT INTO"})," command to load the data of the original formal partitions into the temporary partitions. Finally, you can use the replace operation to atomically replace the original formal partitions with the temporary partitions."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"create-temporary-partitions",children:"Create temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["You can create one or more partitions at a time by using the ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," command."]}),"\n",(0,n.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a single temporary partition"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE <table_name>\nADD TEMPORARY PARTITION <temporary_partition_name> VALUES [("value1"), {MAXVALUE|("value2")})]\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\nALTER TABLE <table_name> \nADD TEMPORARY PARTITION <temporary_partition_name> VALUES LESS THAN {MAXVALUE|(<"value">)}\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create multiple partitions at a time"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE <table_name>\nADD TEMPORARY PARTITIONS START ("value1") END ("value2") EVERY {(INTERVAL <num> <time_unit>)|<num>}\n[(partition_desc)]\n[DISTRIBUTED BY HASH(<bucket_key>)];\n'})}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"partition_desc"}),": specifies the number of buckets and properties for temporary partitions, such as the number of replicas and the storage medium."]}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Create a temporary partition ",(0,n.jsx)(t.code,{children:"tp1"})," in the table ",(0,n.jsx)(t.code,{children:"site_access"})," and specify its range as ",(0,n.jsx)(t.code,{children:"[2020-01-01, 2020-02-01)"})," by using the ",(0,n.jsx)(t.code,{children:"VALUES [(...), (...)]"})," syntax."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Create a temporary partition ",(0,n.jsx)(t.code,{children:"tp2"})," in the table ",(0,n.jsx)(t.code,{children:"site_access"})," and specify its upper bound as ",(0,n.jsx)(t.code,{children:"2020-03-01"})," by using the ",(0,n.jsx)(t.code,{children:"VALUES LESS THAN (...)"})," syntax. StarRocks uses the upper bound of the previous temporary partition as the lower bound of this temporary partition, generating a temporary partition with the left-closed and right-open range of ",(0,n.jsx)(t.code,{children:"[2020-02-01, 2020-03-01)"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp2 VALUES LESS THAN ("2020-03-01");\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Create a temporary partition ",(0,n.jsx)(t.code,{children:"tp3"})," in the table ",(0,n.jsx)(t.code,{children:"site_access"}),", specify its upper bound as ",(0,n.jsx)(t.code,{children:"2020-04-01"})," by using the ",(0,n.jsx)(t.code,{children:"VALUES LESS THAN (...)"})," syntax, and specify the number of replicas as ",(0,n.jsx)(t.code,{children:"1"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access\nADD TEMPORARY PARTITION tp3 VALUES LESS THAN ("2020-04-01")\n ("replication_num" = "1")\nDISTRIBUTED BY HASH (site_id);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Create multiple partitions at a time in the table ",(0,n.jsx)(t.code,{children:"site_access"})," by using the ",(0,n.jsx)(t.code,{children:"START (...) END (...) EVERY (...)"})," syntax, and specify the range of these partitions as ",(0,n.jsx)(t.code,{children:"[2020-04-01, 2021-01-01)"})," with a monthly partition granularity."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access \nADD TEMPORARY PARTITIONS START ("2020-04-01") END ("2021-01-01") EVERY (INTERVAL 1 MONTH);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The partition column for a temporary partition must be the same as the partition column for the original formal partition based on which you create the temporary partition and cannot be changed."}),"\n",(0,n.jsx)(t.li,{children:"The name of a temporary partition cannot be the same as the name of any formal partition or other temporary partition."}),"\n",(0,n.jsx)(t.li,{children:"The ranges of all temporary partitions in a table cannot overlap, but the ranges of a temporary partition and a formal partition can overlap."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"show-temporary-partitions",children:"Show temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["You can view the temporary partitions by using the ",(0,n.jsx)(t.a,{href:"../sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW TEMPORARY PARTITIONS"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW TEMPORARY PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"load-data-into-temporary-partitions",children:"Load data into temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["You can load data into one or more temporary partitions by using the ",(0,n.jsx)(t.code,{children:"INSERT INTO"})," command, STREAM LOAD, or BROKER LOAD."]}),"\n",(0,n.jsxs)(t.h3,{id:"load-data-by-using-insert-into-command",children:["Load data by using ",(0,n.jsx)(t.code,{children:"INSERT INTO"})," command"]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'INSERT INTO site_access TEMPORARY PARTITION (tp1) VALUES ("2020-01-01",1,"ca","lily",4);\nINSERT INTO site_access TEMPORARY PARTITION (tp2) SELECT * FROM site_access_copy PARTITION p2;\nINSERT INTO site_access TEMPORARY PARTITION (tp3, tp4,...) SELECT * FROM site_access_copy PARTITION (p3, p4,...);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"load-data-by-using-stream-load",children:"Load data by using STREAM LOAD"}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl --location-trusted -u root: -H "label:123" -H "Expect:100-continue" -H "temporary_partitions: tp1, tp2, ..." -T testData \\\n    http://host:port/api/example_db/site_access/_stream_load    \n'})}),"\n",(0,n.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"load-data-by-using-broker-load",children:"Load data by using BROKER LOAD"}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'LOAD LABEL example_db.label1\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/starrocks/data/input/file")\n    INTO TABLE my_table\n    TEMPORARY PARTITION (tp1, tp2, ...)\n    ...\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Note that ",(0,n.jsx)(t.code,{children:"StorageCredentialParams"})," represents a group of authentication parameters which vary depending on the authentication method you choose. For detailed syntax and parameter descriptions, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"load-data-by-using-routine-load",children:"Load data by using ROUTINE LOAD"}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_db.site_access ON example_tbl\nCOLUMNS(col, col2,...),\nTEMPORARY PARTITIONS(tp1, tp2, ...)\nFROM KAFKA\n(\n    "kafka_broker_list" ="<kafka_broker1_ip>:<kafka_broker1_port>,<kafka_broker2_ip>:<kafka_broker2_port>",\n    "kafka_topic" = "ordertest"\n);\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"query-data-in-temporary-partitions",children:"Query data in temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," statement to query data in specified temporary partitions."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SELECT * FROM\nsite_access TEMPORARY PARTITION (tp1);\n\nSELECT * FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...);\n\nSELECT event_day,site_id,pv FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...);\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can use the JOIN clause to query data in temporary partitions from two tables."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SELECT * FROM\nsite_access TEMPORARY PARTITION (tp1, tp2, ...)\nJOIN\nsite_access_copy TEMPORARY PARTITION (tp1, tp2, ...)\nON site_access.site_id=site_access1.site_id and site_access.event_day=site_access1.event_day;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"replace-original-formal-partitions-with-temporary-partitions",children:"Replace original formal partitions with temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," statement to replace the original formal partition with a temporary partition, thereby creating a new formal partition."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(t.p,{children:"The original formal partition and temporary partition that you operated in the ALTER TABLE statement are deleted and cannot be recovered."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE table_name REPLACE PARTITION (partition_name) WITH TEMPORARY PARTITION (temporary_partition_name1, ...)\nPROPERTIES ("key" = "value");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"strict_range"})}),"\n",(0,n.jsxs)(t.p,{children:["Default value: ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When this parameter is set to ",(0,n.jsx)(t.code,{children:"true"}),", the unions of ranges of all original formal partitions must be exactly the same as the unions of ranges of the temporary partitions that are used for replacement. When this parameter is set to ",(0,n.jsx)(t.code,{children:"false"}),", you only need to make sure that the ranges of the new formal partitions do not overlap with other formal partitions after replacement."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Example 1:"}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, the unions of the original formal partitions ",(0,n.jsx)(t.code,{children:"p1"}),", ",(0,n.jsx)(t.code,{children:"p2"}),", and ",(0,n.jsx)(t.code,{children:"p3"})," are the same as the unions of the temporary partitions ",(0,n.jsx)(t.code,{children:"tp1"})," and ",(0,n.jsx)(t.code,{children:"tp2"}),", and you can use ",(0,n.jsx)(t.code,{children:"tp1"})," and ",(0,n.jsx)(t.code,{children:"tp2"})," to replace ",(0,n.jsx)(t.code,{children:"p1"}),", ",(0,n.jsx)(t.code,{children:"p2"}),", and ",(0,n.jsx)(t.code,{children:"p3"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:"# Ranges of original formal partitions p1, p2, and p3 => Unions of these ranges\n[10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n\n# Ranges of temporary partitions tp1 and tp2 => Unions of these ranges\n[10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Example 2:"}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, the union of ranges of the original formal partition differs from the union of ranges of the temporary partitions. If the value of the parameter ",(0,n.jsx)(t.code,{children:"strict_range"})," is set to ",(0,n.jsx)(t.code,{children:"true"}),", the temporary partitions ",(0,n.jsx)(t.code,{children:"tp1"})," and ",(0,n.jsx)(t.code,{children:"tp2"})," cannot replace the original formal partition ",(0,n.jsx)(t.code,{children:"p1"}),". If the value is set to ",(0,n.jsx)(t.code,{children:"false"}),", and the ranges [10, 30) and [40, 50) of the temporary partitions do not overlap with other formal partitions, the temporary partitions can replace the original formal partition."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:"# Range of original formal partition p1 => Union of the range\n[10, 50) => [10, 50)\n\n# Ranges of temporary partitions tp1 and tp2 => Unions of these ranges\n[10, 30), [40, 50) => [10, 30), [40, 50)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"use_temp_partition_name"})}),"\n",(0,n.jsxs)(t.p,{children:["Default value: ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If the number of original formal partitions is the same as the number of temporary partitions used for replacement, the names of the new formal partitions remain unchanged after replacement when this parameter is set to ",(0,n.jsx)(t.code,{children:"false"}),". When this parameter is set to ",(0,n.jsx)(t.code,{children:"true"}),", the names of the temporary partitions are used as the names of the new formal partitions after replacement."]}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, the partition name of the new formal partition remains ",(0,n.jsx)(t.code,{children:"p1"})," after replacement when this parameter is set to ",(0,n.jsx)(t.code,{children:"false"}),". However, its related data and properties are replaced with the data and properties of the temporary partition ",(0,n.jsx)(t.code,{children:"tp1"}),". When this parameter is set to ",(0,n.jsx)(t.code,{children:"true"}),", the partition name of the new formal partition is changed to ",(0,n.jsx)(t.code,{children:"tp1"})," after replacement. The original formal partition ",(0,n.jsx)(t.code,{children:"p1"})," no longer exists."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the number of formal partitions to be replaced is different from the number of temporary partitions used for replacement, and this parameter remains the default value ",(0,n.jsx)(t.code,{children:"false"}),", the value ",(0,n.jsx)(t.code,{children:"false"})," of this parameter is invalid."]}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, after replacement, the name for the new formal partition is changed to ",(0,n.jsx)(t.code,{children:"tp1"}),", and the original formal partitions ",(0,n.jsx)(t.code,{children:"p1"})," and ",(0,n.jsx)(t.code,{children:"p2"})," no longer exist."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"examples-1",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Replace the original formal partition ",(0,n.jsx)(t.code,{children:"p1"})," with the temporary partition ",(0,n.jsx)(t.code,{children:"tp1"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the original formal partitions ",(0,n.jsx)(t.code,{children:"p2"})," and ",(0,n.jsx)(t.code,{children:"p3"})," with the temporary partitions ",(0,n.jsx)(t.code,{children:"tp2"})," and ",(0,n.jsx)(t.code,{children:"tp3"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE site_access REPLACE PARTITION (p2, p3) WITH TEMPORARY PARTITION (tp2, tp3);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace the original formal partitions ",(0,n.jsx)(t.code,{children:"p4"})," and ",(0,n.jsx)(t.code,{children:"p5"})," with the temporary partitions ",(0,n.jsx)(t.code,{children:"tp4"})," and ",(0,n.jsx)(t.code,{children:"tp5"}),", and specify the parameters ",(0,n.jsx)(t.code,{children:"strict_range"})," as ",(0,n.jsx)(t.code,{children:"false"})," and ",(0,n.jsx)(t.code,{children:"use_temp_partition_name"})," as ",(0,n.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'ALTER TABLE site_access REPLACE PARTITION (p4, p5) WITH TEMPORARY PARTITION (tp4, tp5)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"usage-notes-1",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When a table has temporary partitions, you cannot use the ",(0,n.jsx)(t.code,{children:"ALTER"})," command to perform Schema Change operations on the table."]}),"\n",(0,n.jsx)(t.li,{children:"When performing Schema Change operations on a table, you cannot add temporary partitions to the table."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"delete-temporary-partitions",children:"Delete temporary partitions"}),"\n",(0,n.jsxs)(t.p,{children:["Use the following command to delete the temporary partition ",(0,n.jsx)(t.code,{children:"tp1"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"ALTER TABLE site_access DROP TEMPORARY PARTITION tp1;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Take note of the following limits:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you use the ",(0,n.jsx)(t.code,{children:"DROP"})," command to directly delete a database or table, you can recover the database or table within a limited time period by using the ",(0,n.jsx)(t.code,{children:"RECOVER"})," command. However, temporary partitions cannot be recovered."]}),"\n",(0,n.jsxs)(t.li,{children:["After using the ",(0,n.jsx)(t.code,{children:"ALTER"})," command to delete a formal partition, you can recover it within a limited time period by using the ",(0,n.jsx)(t.code,{children:"RECOVER"})," command. Temporary partitions are not bound with formal partitions, so operations on temporary partitions do not affect formal partitions."]}),"\n",(0,n.jsxs)(t.li,{children:["After using the ",(0,n.jsx)(t.code,{children:"ALTER"})," command to delete a temporary partition, you cannot recover it by using the ",(0,n.jsx)(t.code,{children:"RECOVER"})," command."]}),"\n",(0,n.jsxs)(t.li,{children:["When using the ",(0,n.jsx)(t.code,{children:"TRUNCATE"})," command to delete data in a table, the temporary partitions of the table are deleted and cannot be recovered."]}),"\n",(0,n.jsxs)(t.li,{children:["When using the ",(0,n.jsx)(t.code,{children:"TRUNCATE"})," command to delete data in a formal partition, the temporary partitions are not affected."]}),"\n",(0,n.jsx)(t.li,{children:"The TRUNCATE command cannot be used to delete data in a temporary partition."}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>i});var n=a(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||s:i(e),n.createElement(r.Provider,{value:o},t)}}}]);