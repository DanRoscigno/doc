"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23469],{5752:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=i(85893),c=i(11151);const d={},t="\u81ea\u52a8\u521b\u5efa\u5206\u533a",r={id:"table_design/automatic_partitioning",title:"\u81ea\u52a8\u521b\u5efa\u5206\u533a",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u652f\u6301\u81ea\u52a8\u5efa\u5206\u533a\u7684\u8868\u3001\u76f8\u5173\u4f7f\u7528\u8bf4\u660e\u548c\u9650\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/automatic_partitioning.md",sourceDirName:"table_design",slug:"/table_design/automatic_partitioning",permalink:"/docusaurusv3/zh/docs/3.0/table_design/automatic_partitioning",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/automatic_partitioning.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u4e34\u65f6\u5206\u533a",permalink:"/docusaurusv3/zh/docs/3.0/table_design/Temporary_partition"},next:{title:"\u6570\u636e\u538b\u7f29",permalink:"/docusaurusv3/zh/docs/3.0/table_design/data_compression"}},l={},a=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u81ea\u52a8\u521b\u5efa\u5206\u533a",children:"\u81ea\u52a8\u521b\u5efa\u5206\u533a"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u652f\u6301\u81ea\u52a8\u5efa\u5206\u533a\u7684\u8868\u3001\u76f8\u5173\u4f7f\u7528\u8bf4\u660e\u548c\u9650\u5236\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u63d0\u5347\u5206\u533a\u521b\u5efa\u7684\u6613\u7528\u6027\u548c\u7075\u6d3b\u6027\uff0cStarRocks \u81ea 3.0 \u7248\u672c\u8d77\u652f\u6301\u5206\u533a\u8868\u8fbe\u5f0f\u548c\u5bfc\u5165\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u529f\u80fd\u3002\u60a8\u53ea\u9700\u8981\u5728\u5305\u542b\u65f6\u95f4\u51fd\u6570\u7684\u5206\u533a\u8868\u8fbe\u5f0f\u4e2d\uff0c\u6307\u5b9a\u4e00\u4e2a DATE \u6216\u8005 DATETIME \u7c7b\u578b\u7684\u5206\u533a\u5217\uff0c\u4ee5\u53ca\u6307\u5b9a\u5206\u533a\u7c92\u5ea6\uff08\u5e74\u3001\u6708\u3001\u65e5\u6216\u5c0f\u65f6\uff09\u3002\u501f\u52a9\u8fd9\u79cd\u4f7f\u7528\u8868\u8fbe\u5f0f\u7684\u9690\u5f0f\u5206\u533a\u65b9\u5f0f\uff0c\u60a8\u4e0d\u9700\u8981\u9884\u5148\u521b\u5efa\u51fa\u5927\u91cf\u5206\u533a\uff0cStarRocks \u4f1a\u5199\u5165\u65b0\u6570\u636e\u65f6\u81ea\u52a8\u521b\u5efa\u5bf9\u5e94\u5206\u533a\u3002\u63a8\u8350\u60a8\u5728\u521b\u5efa\u5206\u533a\u65f6\u4f18\u5148\u4f7f\u7528\u81ea\u52a8\u521b\u5efa\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,s.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PARTITION BY"})," \u5b50\u53e5\u4e2d\u5305\u542b\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f\uff0c\u6307\u5b9a\u4e86\u81ea\u52a8\u521b\u5efa\u5206\u533a\u65f6\u5206\u533a\u7c92\u5ea6\u548c\u5206\u533a\u5217\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY date_trunc(<time_unit>,<partition_column_name>)\n...\n[PROPERTIES("partition_live_number" = "xxx")];\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'PARTITION BY time_slice(<partition_column_name>,INTERVAL N <time_unit>[, boundary]))\n...\n[PROPERTIES("partition_live_number" = "xxx")];\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u6570\u89e3\u91ca",children:"\u53c2\u6570\u89e3\u91ca"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u51fd\u6570\uff1a\u76ee\u524d\u4ec5\u652f\u6301 ",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_trunc",children:"date_trunc"})," \u548c ",(0,s.jsx)(n.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/time_slice",children:"time_slice"})," \u51fd\u6570\u3002\u5e76\u4e14\u5982\u679c\u60a8\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"time_slice"})," \u51fd\u6570\uff0c\u5219\u53ef\u4ee5\u4e0d\u4f20\u5165\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"boundary"}),"\uff0c\u56e0\u4e3a\u5728\u8be5\u573a\u666f\u4e2d\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e14\u4ec5\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"floor"}),"\uff0c\u4e0d\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"ceil"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"time_unit"})," \uff1a\u5206\u533a\u7c92\u5ea6\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"hour"}),"\u3001",(0,s.jsx)(n.code,{children:"day"}),"\u3001",(0,s.jsx)(n.code,{children:"month"})," \u6216 ",(0,s.jsx)(n.code,{children:"year"}),"\uff0c\u6682\u65f6\u4e0d\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"week"}),"\u3002\u5982\u679c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"hour"}),"\uff0c\u5219\u4ec5\u652f\u6301\u5206\u533a\u5217\u4e3a DATETIME \u7c7b\u578b\uff0c\u4e0d\u652f\u6301\u4e3a DATE \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"partition_column_name"}),"\uff1a\u5206\u533a\u5217\u3002\u7531\u4e8e\u5206\u533a\u7c7b\u578b\u4e3a RANGE \u7c7b\u578b\uff0c\u56e0\u6b64\u5206\u533a\u5217\u4ec5\u652f\u6301\u4e3a DATE \u6216 DATETIME \u7c7b\u578b\uff0c\u4e0d\u652f\u6301\u4e3a\u5176\u5b83\u7c7b\u578b\u3002\u76ee\u524d\u4ec5\u652f\u6301\u6307\u5b9a\u4e00\u4e2a\u5206\u533a\u5217\uff0c\u4e0d\u652f\u6301\u6307\u5b9a\u591a\u4e2a\u5206\u533a\u5217\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"date_trunc"})," \u51fd\u6570\uff0c\u5219\u5206\u533a\u5217\u652f\u6301\u4e3a DATE \u6216 DATETIME \u7c7b\u578b\u3002\u5982\u679c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"time_slice"})," \u51fd\u6570\uff0c\u5219\u5206\u533a\u5217\u4ec5\u652f\u6301\u4e3a DATETIME \u7c7b\u578b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5206\u533a\u5217\u7684\u503c\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002\u5982\u679c\u5206\u533a\u5217\u662f DATE \u7c7b\u578b\uff0c\u5219\u6570\u503c\u8303\u56f4\u4e3a [0000-01-01 ~ 9999-12-31]\u3002\u5982\u679c\u5206\u533a\u5217\u662f DATETIME \u7c7b\u578b\uff0c\u5219\u6570\u503c\u8303\u56f4\u4e3a [0000-01-01 01:01:01 ~ 9999-12-31 23:59:59]\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"partition_live_number"}),"\uff1a\u4fdd\u7559\u6700\u8fd1\u591a\u5c11\u6570\u91cf\u7684\u5206\u533a\u3002\u6700\u8fd1\u662f\u6307\u5206\u533a\u6309\u65f6\u95f4\u7684\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u4ee5\u5f53\u524d\u7684\u65f6\u95f4\u4e3a\u57fa\u51c6\uff0c\u7136\u540e\u4ece\u540e\u5f80\u524d\u6570\u7684\u5206\u533a\u7684\u4e2a\u6570\u4f1a\u4fdd\u7559\uff0c\u5176\u4f59\u5206\u533a\u4f1a\u5220\u9664\u3002\u540e\u53f0\u4f1a\u5b9a\u65f6\u8c03\u5ea6\u4efb\u52a1\u6765\u7ba1\u7406\u5206\u533a\u6570\u91cf\uff0c\u8c03\u5ea6\u95f4\u9694\u53ef\u4ee5\u901a\u8fc7 FE \u52a8\u6001\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"dynamic_partition_check_interval_seconds"})," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 600 \u79d2\uff0c\u5373 10 \u5206\u949f\u3002\u5047\u8bbe\u5f53\u524d\u4e3a 2023 \u5e74 4 \u6708 4 \u65e5\uff0c",(0,s.jsx)(n.code,{children:"partition_live_number"})," \u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"2"}),"\uff0c\u5206\u533a\u5305\u542b p20230401\u3001p20230402\u3001p20230403\u3001p20230404\uff0c\u5219\u5206\u533a p20230403\u3001p20230404 \u4f1a\u4fdd\u7559\uff0c\u5176\u4ed6\u5206\u533a\u4f1a\u5220\u9664\u3002\u5982\u679c\u5bfc\u5165\u4e86\u810f\u6570\u636e\uff0c\u6bd4\u5982\u672a\u6765\u65f6\u95f4 4 \u6708 5 \u65e5\u548c 6 \u65e5\u7684\u6570\u636e\uff0c\u5bfc\u81f4\u5206\u533a\u5305\u542b p20230401\u3001p20230402\u3001p20230403\u3001p20230404\u3001p20230405\u3001p20230406\uff0c\u5219\u5206\u533a p20230403\u3001p20230404\u3001p20230405\u3001p20230406 \u4f1a\u4fdd\u7559\uff0c\u5176\u4ed6\u5206\u533a\u4f1a\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528 date_trunc \u51fd\u6570\u521b\u5efa\u4e00\u5f20\u652f\u6301\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\uff0c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"day"}),"\uff0c\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"event_day"})," \u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access (\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY date_trunc('day', event_day)\nDISTRIBUTED BY HASH(event_day, site_id)\nPROPERTIES(\n    \"replication_num\" = \"1\"\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bfc\u5165\u5982\u4e0b\u4e24\u884c\u6570\u636e\uff0c\u5219 StarRocks \u4f1a\u6839\u636e\u5bfc\u5165\u6570\u636e\u81ea\u52a8\u521b\u5efa\u4e24\u4e2a\u5206\u533a ",(0,s.jsx)(n.code,{children:"p20230226"}),"\u3001",(0,s.jsx)(n.code,{children:"p20230227"}),"\uff0c\u8303\u56f4\u5206\u522b\u4e3a [2023-02-26 00:00:00,2023-02-27 00:00:00)\u3001[2023-02-27 00:00:00,2023-02-28 00:00:00)\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'-- \u5bfc\u5165\u4e24\u884c\u6570\u636e\nINSERT INTO site_access VALUES \n("2023-02-26 20:12:04",002,"New York","Sam Smith",1),\n("2023-02-27 21:06:54",001,"Los Angeles","Taylor Swift",1);\n\n-- \u67e5\u8be2\u5206\u533a\nSHOW PARTITIONS FROM site_access\\G\n*************************** 1. row ***************************\n             PartitionId: 135846228\n           PartitionName: p20230226\n          VisibleVersion: 2\n      VisibleVersionTime: 2023-03-22 14:50:17\n      VisibleVersionHash: 0\n                   State: NORMAL\n            PartitionKey: event_day\n                   Range: [types: [DATETIME]; keys: [2023-02-26 00:00:00]; ..types: [DATETIME]; keys: [2023-02-27 00:00:00]; )\n         DistributionKey: event_day, site_id\n                 Buckets: 6\n          ReplicationNum: 1\n           StorageMedium: HDD\n            CooldownTime: 9999-12-31 23:59:59\nLastConsistencyCheckTime: NULL\n                DataSize: 0B\n              IsInMemory: false\n                RowCount: 0\n*************************** 2. row ***************************\n             PartitionId: 135846215\n           PartitionName: p20230227\n          VisibleVersion: 2\n      VisibleVersionTime: 2023-03-22 14:50:17\n      VisibleVersionHash: 0\n                   State: NORMAL\n            PartitionKey: event_day\n                   Range: [types: [DATETIME]; keys: [2023-02-27 00:00:00]; ..types: [DATETIME]; keys: [2023-02-28 00:00:00]; )\n         DistributionKey: event_day, site_id\n                 Buckets: 6\n          ReplicationNum: 1\n           StorageMedium: HDD\n            CooldownTime: 9999-12-31 23:59:59\nLastConsistencyCheckTime: NULL\n                DataSize: 0B\n              IsInMemory: false\n                RowCount: 0\n2 rows in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528 date_trunc \u51fd\u6570\u521b\u5efa\u4e00\u5f20\u652f\u6301\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\uff0c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"month"}),"\uff0c\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"event_day"}),"\uff0c\u6b64\u5916\u5728\u5bfc\u5165\u6570\u636e\u524d\u6279\u91cf\u521b\u5efa\u4e00\u4e9b\u5386\u53f2\u5206\u533a\u3002\u5e76\u4e14\u8fd8\u6307\u5b9a\u8be5\u8868\u53ea\u4fdd\u7559\u6700\u8fd1 3 \u4e2a\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE site_access(\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT \'10\',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT \'\',\n    pv BIGINT DEFAULT \'0\'\n) \nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY date_trunc(\'month\', event_day)(\n    START ("2022-06-01") END ("2022-12-01") EVERY (INTERVAL 1 month)\n)\nDISTRIBUTED BY HASH(event_day, site_id)\nPROPERTIES(\n    "partition_live_number" = "3",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u4f7f\u7528 time_slice \u51fd\u6570\u521b\u5efa\u4e00\u5f20\u652f\u6301\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\uff0c\u5206\u533a\u7c92\u5ea6\u4e3a\u4e03\u5929\uff0c\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"event_day"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE site_access(\n    event_day DATETIME NOT NULL,\n    site_id INT DEFAULT '10',\n    city_code VARCHAR(100),\n    user_name VARCHAR(32) DEFAULT '',\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(event_day, site_id, city_code, user_name)\nPARTITION BY time_slice(event_day, INTERVAL 7 day)\nDISTRIBUTED BY HASH(event_day, site_id)\nPROPERTIES(\"replication_num\" = \"1\");\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["StarRocks \u4f1a\u6839\u636e\u5bfc\u5165\u7684\u6570\u636e\u548c\u5efa\u8868\u65f6\u8bbe\u7f6e\u7684\u81ea\u52a8\u521b\u5efa\u5206\u533a\u89c4\u5219\uff0c\u6765\u81ea\u52a8\u521b\u5efa\u5206\u533a\u5e76\u4e14\u8bbe\u7f6e\u5206\u533a\u7684\u8d77\u6b62\u65f6\u95f4\u3002 \u4f8b\u5982\u5bfc\u5165\u6570\u636e\u5206\u533a\u5217\u7684\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"2015-06-05"}),"\uff0c\u5206\u533a\u7c92\u5ea6\u4e3a ",(0,s.jsx)(n.code,{children:"month"}),"\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"p201506"})," \u7684\u5206\u533a\uff0c\u8303\u56f4\u4e3a [2015-06-01, 2015-07-01)\uff0c\u5e76\u4e0d\u4f1a\u662f [2015-06-05,2015-07-05)\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5bf9\u4e8e\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\uff0cStarRocks \u81ea\u52a8\u521b\u5efa\u5206\u533a\u6570\u91cf\u4e0a\u9650\u9ed8\u8ba4\u4e3a 4096\uff0c\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"max_automatic_partition_number"})," \u51b3\u5b9a\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u9632\u6b62\u60a8\u7531\u4e8e\u8bef\u64cd\u4f5c\u800c\u521b\u5efa\u5927\u91cf\u5206\u533a\uff0c\u4f8b\u5982\u4f7f\u7528\u4e86\u5206\u533a\u5217\u4e3a DATETIME \u7c7b\u578b\uff0c\u8bbe\u7f6e\u8fc7\u7ec6\u7684\u5206\u533a\u7c92\u5ea6 ",(0,s.jsx)(n.code,{children:"hour"}),"\uff0c\u5219\u53ef\u80fd\u4ea7\u751f\u5927\u91cf\u5206\u533a\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u5bfc\u5165\u7684\u8fc7\u7a0b\u4e2d StarRocks \u6839\u636e\u5bfc\u5165\u6570\u636e\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u4e86\u4e00\u4e9b\u5206\u533a\uff0c\u4f46\u662f\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u5bfc\u5165\u4efb\u52a1\u6700\u7ec8\u5931\u8d25\uff0c\u5219\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u5df2\u7ecf\u81ea\u52a8\u521b\u5efa\u7684\u5206\u533a\u5e76\u4e0d\u4f1a\u7531\u4e8e\u5bfc\u5165\u5931\u8d25\u800c\u81ea\u52a8\u5220\u9664\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cPARTITION BY \u5b50\u53e5\u53ea\u662f\u7528\u6765\u8ba1\u7b97\u5206\u533a\u8303\u56f4\uff0c\u4e0d\u4f1a\u6539\u53d8\u5199\u5165\u6570\u636e\u7684\u503c\u3002 \u4f8b\u5982\u5bfc\u5165\u7684\u539f\u59cb\u6570\u636e\u662f ",(0,s.jsx)(n.code,{children:"2023-02-27 21:06:54"}),"\uff0c\u7ecf\u8fc7 PARTITION BY \u5b50\u53e5\u7684\u51fd\u6570\u8868\u8fbe\u5f0f ",(0,s.jsx)(n.code,{children:"date_trunc('day', event_day)"})," \u8ba1\u7b97\u540e\u4e3a ",(0,s.jsx)(n.code,{children:"2023-02-27 00:00:00"}),"\uff0c\u5219\u6240\u5c5e\u5206\u533a\u7684\u8303\u56f4\u662f [2023-02-27 00:00:00,2023-02-28 00:00:00)\uff0c\u4f46\u662f\u5199\u5165\u7684\u6570\u636e\u4ecd\u662f ",(0,s.jsx)(n.code,{children:"2023-02-27 21:06:54"}),"\uff0c\u5982\u679c\u5e0c\u671b\u5199\u5165\u7684\u6570\u636e\u548c\u5206\u533a\u8303\u56f4\u7684\u5f00\u59cb\u65f6\u95f4\u4e00\u81f4\uff0c\u5219\u9700\u8981\u5728\u5bfc\u5165\u65f6\u5728 ",(0,s.jsx)(n.code,{children:"event_day"})," \u5217\u4e0a\u4f7f\u7528\u7528\u4e8e\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u51fd\u6570\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"date_trunc"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5bfc\u5165\u65f6\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u547d\u540d\u89c4\u5219\u4e0e\u52a8\u6001\u5206\u533a\u7684\u547d\u540d\u89c4\u5219\u4e00\u81f4\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ec5\u652f\u6301\u5206\u533a\u7c7b\u578b\u4e3a RANGE \u7c7b\u578b\uff0c\u76ee\u524d\u4e0d\u652f\u6301\u4e3a LIST \u7c7b\u578b\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5728\u5efa\u8868\u65f6\u542f\u7528\u4e86\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff0c\u6211\u4eec\u901a\u5e38\u4e0d\u5efa\u8bae\u518d\u63d0\u524d\u521b\u5efa\u5206\u533a\uff0c\u5982\u679c\u60a8\u786e\u5b9e\u6709\u63d0\u524d\u521b\u5efa\u5206\u533a\u7684\u9700\u6c42\uff0c\u5219\u4ec5\u652f\u6301\u6279\u91cf\u521b\u5efa\u5206\u533a\uff0c\u53c2\u8003\u4e0a\u8ff0\u793a\u4f8b\u4e8c\u7684\u8bed\u53e5\u3002\u4f46\u662f\u8be5\u8bed\u53e5\u5b58\u5728\u5982\u4e0b\u9650\u5236\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6279\u91cf\u521b\u5efa\u5206\u533a\u548c\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u7c92\u5ea6\u5fc5\u987b\u4e00\u81f4\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u81ea\u52a8\u521b\u5efa\u5206\u533a\u65f6\u4ec5\u652f\u6301\u4f7f\u7528\u51fd\u6570 ",(0,s.jsx)(n.code,{children:"date_trunc"}),"\uff0c\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"time_slice"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6279\u91cf\u521b\u5efa\u5206\u533a\u7684\u8bed\u6cd5\u4e2d ",(0,s.jsx)(n.code,{children:"INTERVAL"})," \u4ec5\u652f\u6301\u4e3a ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6279\u91cf\u521b\u5efa\u7684\u5206\u533a\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u95f4\u4e0d\u652f\u6301\u975e\u6807\u51c6\u683c\u5f0f\u3002\u6bd4\u5982\u6279\u91cf\u521b\u5efa\u5206\u533a\u7684\u7c92\u5ea6\u662f\u6708\uff0c\u5219\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"START"})," \u548c ",(0,s.jsx)(n.code,{children:"END"})," \u5b9a\u4e49\u975e\u6574\u6708\u8303\u56f4\uff0c\u6bd4\u5982\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:'START ("2022-06-06")'}),"\uff0c\u56e0\u4e3a\u5176\u5b9a\u4e49\u7684\u5206\u533a\u5f00\u59cb\u65e5\u671f\u4e0d\u662f 6 \u6708 1 \u65e5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"ALTER TABLE ADD PARTITION"})," \u589e\u52a0\u5206\u533a\uff0c\u4f46\u662f\u8be5\u8bed\u53e5\u4e5f\u5b58\u5728\u4e0a\u8ff0\u9650\u5236\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"StarRocks \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u6682\u65f6\u4e0d\u652f\u6301\u8be5\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6682\u65f6\u4e0d\u652f\u6301\u4f7f\u7528 CTAS \u521b\u5efa\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6682\u65f6\u4e0d\u652f\u6301\u4f7f\u7528 Spark Load \u5bfc\u5165\u6570\u636e\u81f3\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528\u81ea\u52a8\u521b\u5efa\u5206\u533a\uff0c\u5219\u4ec5\u652f\u6301\u56de\u6eda\u5230 2.5.4 \u53ca\u4ee5\u540e\u7684\u7248\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u81ea\u52a8\u521b\u5efa\u5206\u533a\u7684\u8868\uff0c\u5982\u679c\u9700\u8981\u67e5\u770b\u5177\u4f53\u7684\u5206\u533a\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 SHOW PARTITIONS FROM \u8bed\u53e5\u3002\u4e0d\u652f\u6301\u4f7f\u7528 SHOW CREATE TABLE \u8bed\u53e5\uff0c\u67e5\u770b\u5177\u4f53\u7684\u5206\u533a\u60c5\u51b5\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>r,ah:()=>d});var s=i(67294);const c=s.createContext({});function d(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||t:d(e),s.createElement(c.Provider,{value:r},n)}}}]);