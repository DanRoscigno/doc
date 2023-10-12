"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[99766],{47474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},l="SHOW TABLET",d={id:"sql-reference/sql-statements/data-manipulation/SHOW_TABLET",title:"SHOW TABLET",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW TABLES",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TABLES"},next:{title:"SHOW TRANSACTION",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Query information of tablets in a table or a partition",id:"query-information-of-tablets-in-a-table-or-a-partition",level:3},{value:"Query information of a single tablet",id:"query-information-of-a-single-tablet",level:3},{value:"Description of return fields",id:"description-of-return-fields",level:2},{value:"Query information of tablets in a table or a partition",id:"query-information-of-tablets-in-a-table-or-a-partition-1",level:3},{value:"Query information of a specific tablet",id:"query-information-of-a-specific-tablet",level:3},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-tablet",children:"SHOW TABLET"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Displays tablet related information."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"For v3.0 and later, this operation requires the SYSTEM-level OPERATE privilege and TABLE-level SELECT privilege. For v2.5 and earlier, this operation requires the ADMIN_PRIV privilege."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.h3,{id:"query-information-of-tablets-in-a-table-or-a-partition",children:"Query information of tablets in a table or a partition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW TABLET\nFROM [<db_name>.]<table_name>\n[PARTITION(<partition_name>, ...]\n[\nWHERE [version = <version_number>] \n    [[AND] backendid = <backend_id>] \n    [[AND] STATE = "NORMAL"|"ALTER"|"CLONE"|"DECOMMISSION"]\n]\n[ORDER BY <field_name> [ASC | DESC]]\n[LIMIT [<offset>,]<limit>]\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The database name. If you do not specify this parameter, the current database is used by default."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table_name"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"The name of the table from which you want to query tablet information. You must specify this parameter. Otherwise, an error is returned."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"partition_name"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The name of the partition from which you want to query tablet information."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"version_number"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The data version number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"backend_id"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"The ID of the BE where the replica of the tablet is located."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"STATE"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsxs)(n.td,{children:["The status of tablet replicas. ",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"NORMAL"}),": The replica is normal."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"ALTER"}),": A Rollup or schema change is being performed on the replica."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"CLONE"}),": The replica is being cloned. (Replicas in this state are not available for use). "]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(n.code,{children:"DECOMMISSION"}),": The replica is being decommissioned. "]})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"field_name"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsxs)(n.td,{children:["The field by which the results are sorted. All the fields returned by ",(0,s.jsx)(n.code,{children:"SHOW TABLET FROM <table_name>"})," are sortable.",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["If you want to display results in ascending order, use ",(0,s.jsx)(n.code,{children:"ORDER BY field_name ASC"}),". "]}),(0,s.jsxs)("li",{children:["If you want to display results in descending order, use ",(0,s.jsx)(n.code,{children:"ORDER BY field_name DESC"}),"."]})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsxs)(n.td,{children:["The number of tablets to skip from the results. For example, ",(0,s.jsx)(n.code,{children:"OFFSET 5"})," means to skip the first five tablets. Default value: 0."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsxs)(n.td,{children:["The number of tablets to return. For example, ",(0,s.jsx)(n.code,{children:"LIMIT 10"})," means to return only 10 tablets. If this parameter is not specified, all the tablets that meet the filter conditions are returned."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"query-information-of-a-single-tablet",children:"Query information of a single tablet"}),"\n",(0,s.jsxs)(n.p,{children:["After obtaining all tablet IDs using ",(0,s.jsx)(n.code,{children:"SHOW TABLET FROM <table_name>"}),", you can query the information of a single tablet."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET <tablet_id>\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tablet_id"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Tablet ID"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description-of-return-fields",children:"Description of return fields"}),"\n",(0,s.jsx)(n.h3,{id:"query-information-of-tablets-in-a-table-or-a-partition-1",children:"Query information of tablets in a table or a partition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+------------------+--------------+----------+----------+-------------------+\n| TabletId | ReplicaId | BackendId | SchemaHash | Version | VersionHash | LstSuccessVersion | LstSuccessVersionHash | LstFailedVersion | LstFailedVersionHash | LstFailedTime | DataSize | RowCount | State  | LstConsistencyCheckTime | CheckVersion | CheckVersionHash | VersionCount | PathHash | MetaUrl  | CompactionStatus  |\n+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+------------------+--------------+----------+----------+-------------------+\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Field"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TabletId"}),(0,s.jsx)(n.td,{children:"Table ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ReplicaId"}),(0,s.jsx)(n.td,{children:"Replica ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BackendId"}),(0,s.jsx)(n.td,{children:"The ID of the BE where the replica is located."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SchemaHash"}),(0,s.jsx)(n.td,{children:"Schema hash (randomly generated)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Version"}),(0,s.jsx)(n.td,{children:"Data version number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VersionHash"}),(0,s.jsx)(n.td,{children:"Hash of data version number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstSuccessVersion"}),(0,s.jsx)(n.td,{children:"The last successfully loaded version."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstSuccessVersionHash"}),(0,s.jsx)(n.td,{children:"The hash of the last successfully loaded version."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstFailedVersion"}),(0,s.jsxs)(n.td,{children:["The version of the last failed loading. ",(0,s.jsx)(n.code,{children:"-1"})," indicates no version failed to be loaded."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstFailedVersionHash"}),(0,s.jsx)(n.td,{children:"The hash of the last failed version."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstFailedTime"}),(0,s.jsxs)(n.td,{children:["The time of the last failed loading. ",(0,s.jsx)(n.code,{children:"NULL"})," indicates there is no load failure."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DataSize"}),(0,s.jsx)(n.td,{children:"Data size of the tablet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RowCount"}),(0,s.jsx)(n.td,{children:"The number of data rows of the tablet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"State"}),(0,s.jsx)(n.td,{children:"Replica status of the tablet."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LstConsistencyCheckTime"}),(0,s.jsxs)(n.td,{children:["The time of the last consistency check. ",(0,s.jsx)(n.code,{children:"NULL"})," indicates no consistency check was performed."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CheckVersion"}),(0,s.jsxs)(n.td,{children:["The data version on which consistency check was performed. ",(0,s.jsx)(n.code,{children:"-1"})," indicates no version was checked."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CheckVersionHash"}),(0,s.jsx)(n.td,{children:"The hash of the version on which consistency check was performed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VersionCount"}),(0,s.jsx)(n.td,{children:"The total number of data versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PathHash"}),(0,s.jsx)(n.td,{children:"The hash of the directory in which the tablet is stored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MetaUrl"}),(0,s.jsx)(n.td,{children:"The URL used to query more meta information."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CompactionStatus"}),(0,s.jsx)(n.td,{children:"The URL used to query data version compaction status."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"query-information-of-a-specific-tablet",children:"Query information of a specific tablet"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+--------+-----------+---------------+-----------+------+---------+-------------+---------+--------+-----------+\n| DbName | TableName | PartitionName | IndexName | DbId | TableId | PartitionId | IndexId | IsSync | DetailCmd |\n+--------+-----------+---------------+-----------+------+---------+-------------+---------+--------+-----------+\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Field"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DbName"}),(0,s.jsx)(n.td,{children:"The name of the database to which the tablet belongs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TableName"}),(0,s.jsx)(n.td,{children:"The name of the table to which the tablet belongs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PartitionName"}),(0,s.jsx)(n.td,{children:"The name of the partition to which the tablet belongs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IndexName"}),(0,s.jsx)(n.td,{children:"The index name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DbId"}),(0,s.jsx)(n.td,{children:"The database ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TableId"}),(0,s.jsx)(n.td,{children:"The table ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PartitionId"}),(0,s.jsx)(n.td,{children:"The partition ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IndexId"}),(0,s.jsx)(n.td,{children:"The index ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"IsSync"}),(0,s.jsxs)(n.td,{children:["Whether data on the tablet is consistent with table meta. ",(0,s.jsx)(n.code,{children:"true"})," indicates data is consistent and the tablet is normal. ",(0,s.jsx)(n.code,{children:"false"})," indicates data is missing on the tablet."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DetailCmd"}),(0,s.jsx)(n.td,{children:"The URL used to query more information."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Create table ",(0,s.jsx)(n.code,{children:"test_show_tablet"})," in the database ",(0,s.jsx)(n.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `test_show_tablet` (\n  `k1` date NULL COMMENT "",\n  `k2` datetime NULL COMMENT "",\n  `k3` char(20) NULL COMMENT "",\n  `k4` varchar(20) NULL COMMENT "",\n  `k5` boolean NULL COMMENT "",\n  `k6` tinyint(4) NULL COMMENT "",\n  `k7` smallint(6) NULL COMMENT "",\n  `k8` int(11) NULL COMMENT "",\n  `k9` bigint(20) NULL COMMENT "",\n  `k10` largeint(40) NULL COMMENT "",\n  `k11` float NULL COMMENT "",\n  `k12` double NULL COMMENT "",\n  `k13` decimal128(27, 9) NULL COMMENT ""\n) ENGINE=OLAP \nDUPLICATE KEY(`k1`, `k2`, `k3`, `k4`, `k5`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`k1`)\n(PARTITION p20210101 VALUES [("2021-01-01"), ("2021-01-02")),\nPARTITION p20210102 VALUES [("2021-01-02"), ("2021-01-03")),\nPARTITION p20210103 VALUES [("2021-01-03"), ("2021-01-04")),\nPARTITION p20210104 VALUES [("2021-01-04"), ("2021-01-05")),\nPARTITION p20210105 VALUES [("2021-01-05"), ("2021-01-06")),\nPARTITION p20210106 VALUES [("2021-01-06"), ("2021-01-07")),\nPARTITION p20210107 VALUES [("2021-01-07"), ("2021-01-08")),\nPARTITION p20210108 VALUES [("2021-01-08"), ("2021-01-09")),\nPARTITION p20210109 VALUES [("2021-01-09"), ("2021-01-10")))\nDISTRIBUTED BY HASH(`k1`, `k2`, `k3`);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example 1: Query information of all the tablets in the specified table. The following example excerpts information of only one tablet from the return information."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"    mysql> show tablet from example_db.test_show_tablet\\G\n    *************************** 1. row ***************************\n            TabletId: 9588955\n            ReplicaId: 9588956\n            BackendId: 10004\n            SchemaHash: 0\n                Version: 1\n            VersionHash: 0\n      LstSuccessVersion: 1\n  LstSuccessVersionHash: 0\n       LstFailedVersion: -1\n   LstFailedVersionHash: 0\n        LstFailedTime: NULL\n            DataSize: 0B\n            RowCount: 0\n                State: NORMAL\nLstConsistencyCheckTime: NULL\n        CheckVersion: -1\n    CheckVersionHash: 0\n        VersionCount: 1\n            PathHash: 0\n             MetaUrl: http://172.26.92.141:8038/api/meta/header/9588955\n    CompactionStatus: http://172.26.92.141:8038/api/compaction/show?tablet_id=9588955\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example 2: Query information of tablet 9588955."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"    mysql> show tablet 9588955\\G\n    *************************** 1. row ***************************\n    DbName: example_db\n    TableName: test_show_tablet\n    PartitionName: p20210103\n    IndexName: test_show_tablet\n        DbId: 11145\n    TableId: 9588953\nPartitionId: 9588946\n    IndexId: 9588954\n    IsSync: true\n    DetailCmd: SHOW PROC '/dbs/11145/9588953/partitions/9588946/9588954/9588955';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Example 3: Query information of tablets in partition ",(0,s.jsx)(n.code,{children:"p20210103"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET FROM test_show_tablet partition(p20210103);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example 4: Return information of 10 tablets."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM test_show_tablet limit 10;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Example 5: Return information of 10 tablets with an offset 5."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET FROM test_show_tablet limit 5,10;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Example 6: Filter tablets by ",(0,s.jsx)(n.code,{children:"backendid"}),", ",(0,s.jsx)(n.code,{children:"version"}),", and ",(0,s.jsx)(n.code,{children:"state"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'    SHOW TABLET FROM test_show_tablet\n    WHERE backendid = 10004 and version = 1 and state = "NORMAL";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Example 7: Sort tablets by ",(0,s.jsx)(n.code,{children:"version"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"    SHOW TABLET FROM table_name where backendid = 10004 order by version;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Example 8: Return information of tablets whose index name is ",(0,s.jsx)(n.code,{children:"test_show_tablet"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW TABLET FROM test_show_tablet where indexname = "test_show_tablet";\n'})}),"\n"]}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:d},n)}}}]);