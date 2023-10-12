"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62707],{56829:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(85893),n=s(11151);const r={displayed_sidebar:"documentation"},a="SHOW PARTITIONS",d={id:"sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",title:"SHOW PARTITIONS",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW MATERIALIZED VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW"},next:{title:"SHOW PROPERTY",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_PROPERTY"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Description of return fields",id:"description-of-return-fields",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",blockquote:"blockquote",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",div:"div",ol:"ol"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"show-partitions",children:"SHOW PARTITIONS"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Displays partition information, including common partitions and ",(0,i.jsx)(t.a,{href:"/doc/docs/2.5/table_design/Temporary_partition",children:"temporary partitions"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Syntax:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT]\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"NOTE"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["This syntax only supports StarRocks tables (",(0,i.jsx)(t.code,{children:'"ENGINE" = "OLAP"'}),"). For Elasticsearch and Hive tables, use SHOW PROC '/dbs/db_id/table_id/partitions'."]}),"\n",(0,i.jsx)(t.li,{children:"This operation requires the SELECT__PRIV privilege on the specified table."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"description-of-return-fields",children:"Description of return fields"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+-------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n| PartitionId | PartitionName | VisibleVersion | VisibleVersionTime  | VisibleVersionHash | State  | PartitionKey | Range | DistributionKey    | Buckets | ReplicationNum | StorageMedium | CooldownTime        | LastConsistencyCheckTime | DataSize | IsInMemory | RowCount |\n+-------------+---------------+----------------+---------------------+--------------------+--------+--------------+-------+--------------------+---------+----------------+---------------+---------------------+--------------------------+----------+------------+----------+\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Field"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PartitionId"}),(0,i.jsx)(t.td,{children:"The ID of the partition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PartitionName"}),(0,i.jsx)(t.td,{children:"The name of the partition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VisibleVersion"}),(0,i.jsx)(t.td,{children:"The version number of the last successful load transaction. The version number increases by 1 with each successful load transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VisibleVersionTime"}),(0,i.jsx)(t.td,{children:"The timestamp of the last successful load transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VisibleVersionHash"}),(0,i.jsx)(t.td,{children:"The hash value for the version number of the last successful load transaction."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"State"}),(0,i.jsxs)(t.td,{children:["The status of the partition. Fixed value: ",(0,i.jsx)(t.code,{children:"Normal"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PartitionKey"}),(0,i.jsx)(t.td,{children:"The partition key that consists of one or more partition columns."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Range"}),(0,i.jsx)(t.td,{children:"The range of the partition, which is a right half-open interval."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DistributionKey"}),(0,i.jsx)(t.td,{children:"The bucket key of hash bucketing."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Buckets"}),(0,i.jsx)(t.td,{children:"The number of buckets for the partition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ReplicationNum"}),(0,i.jsx)(t.td,{children:"The number of replicas per tablet in the partition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"StorageMedium"}),(0,i.jsxs)(t.td,{children:["The storage medium to store the data in the partition. The value ",(0,i.jsx)(t.code,{children:"HHD"})," indicates hard disk drives, and the value ",(0,i.jsx)(t.code,{children:"SSD"})," indicates solid-state drives."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CooldownTime"}),(0,i.jsxs)(t.td,{children:['The cooldown time for data in the partition. If the initial storage medium is SSD, the storage medium is switched from SSD to HDD after the time specified by this parameter. Format: "yyyy-MM-dd HH:mm',(0,i.jsx)(t.div,{}),'".']})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LastConsistencyCheckTime"}),(0,i.jsxs)(t.td,{children:["The time of the last consistency check. ",(0,i.jsx)(t.code,{children:"NULL"})," indicates no consistency check was performed."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DataSize"}),(0,i.jsx)(t.td,{children:"The size of data in the partition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IsInMemory"}),(0,i.jsx)(t.td,{children:"Whether all data in the partition is stored in memory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RowCount"}),(0,i.jsx)(t.td,{children:"The number of data rows of the partition."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Display information of all regular partitions from the specified table ",(0,i.jsx)(t.code,{children:"site_access"})," under the specified database ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-SQL",children:"MySQL > show partitions from test.site_access\\G\n*************************** 1. row ***************************\n            PartitionId: 20990\n        PartitionName: p2019 \n        VisibleVersion: 1\n    VisibleVersionTime: 2023-08-08 15:45:13\n    VisibleVersionHash: 0\n                State: NORMAL\n            PartitionKey: datekey\n                Range: [types: [DATE]; keys: [2019-01-01]; ..types: [DATE]; keys: [2020-01-01]; )\n        DistributionKey: site_id\n                Buckets: 6\n        ReplicationNum: 3\n        StorageMedium: HDD\n            CooldownTime: 9999-12-31 23:59:59\nLastConsistencyCheckTime: NULL\n                DataSize:  4KB   \n            IsInMemory: false\n                RowCount: 3 \n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Display information of all temporary partitions from the specified table ",(0,i.jsx)(t.code,{children:"site_access"})," under the specified database ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SHOW TEMPORARY PARTITIONS FROM test.site_access;\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Display the information of the specified partition ",(0,i.jsx)(t.code,{children:"p1"})," of the specified table ",(0,i.jsx)(t.code,{children:"site_access"})," under the specified database ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'-- Regular partition\nSHOW PARTITIONS FROM test.site_access WHERE PartitionName = "p1";\n-- Temporary partition\nSHOW TEMPORARY PARTITIONS FROM test.site_access WHERE PartitionName = "p1";\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Display the latest partition information of the specified table ",(0,i.jsx)(t.code,{children:"site_access"})," under the specified database ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"-- Regular partition\nSHOW PARTITIONS FROM test.site_access ORDER BY PartitionId DESC LIMIT 1;\n-- Temporary partition\nSHOW TEMPORARY PARTITIONS FROM test.site_access ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var i=s(67294);const n=i.createContext({});function r(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:r(e),i.createElement(n.Provider,{value:d},t)}}}]);