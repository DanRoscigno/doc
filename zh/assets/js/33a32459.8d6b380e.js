"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50149],{53901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var i=s(85893),l=s(11151);const d={displayed_sidebar:"Chinese"},r="\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e",t={id:"loading/InsertInto",title:"\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5411 StarRocks \u5bfc\u5165\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/loading/InsertInto.md",sourceDirName:"loading",slug:"/loading/InsertInto",permalink:"/zh/docs/2.3/loading/InsertInto",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/InsertInto.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u4ece MySQL \u5b9e\u65f6\u540c\u6b65",permalink:"/zh/docs/2.3/loading/Flink_cdc_load"},next:{title:"Introduction",permalink:"/zh/docs/2.3/loading/Json_loading"}},c={},a=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u901a\u8fc7 INSERT INTO VALUES \u8bed\u53e5\u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7-insert-into-values-\u8bed\u53e5\u5bfc\u5165\u6570\u636e",level:2},{value:"\u901a\u8fc7 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u6570\u636e",level:2},{value:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",level:2},{value:"\u901a\u8fc7\u7ed3\u679c\u8fd4\u56de\u67e5\u770b",id:"\u901a\u8fc7\u7ed3\u679c\u8fd4\u56de\u67e5\u770b",level:3},{value:"\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b",id:"\u901a\u8fc7-show-load-\u8bed\u53e5\u67e5\u770b",level:3},{value:"\u901a\u8fc7 curl \u547d\u4ee4\u67e5\u770b",id:"\u901a\u8fc7-curl-\u547d\u4ee4\u67e5\u770b",level:3},{value:"\u76f8\u5173\u914d\u7f6e\u9879",id:"\u76f8\u5173\u914d\u7f6e\u9879",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u901a\u8fc7-insert-into-\u8bed\u53e5\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5411 StarRocks \u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0e MySQL \u7b49\u6570\u636e\u5e93\u7cfb\u7edf\u7c7b\u4f3c\uff0cStarRocks \u652f\u6301\u901a\u8fc7 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 INSERT INTO VALUES \u8bed\u53e5\u76f4\u63a5\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7 INSERT INTO SELECT \u8bed\u53e5\u5c06\u5176\u4ed6 StarRocks \u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u65b0\u7684 StarRocks \u8868\u4e2d\uff0c\u6216\u8005\u5c06\u5176\u4ed6\u6570\u636e\u6e90\u7684\u6570\u636e\u901a\u8fc7",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/data_source/External_table",children:"\u5916\u90e8\u8868\u529f\u80fd"}),"\u5bfc\u5165\u81f3 StarRocks \u5185\u90e8\u8868\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5f53\u524d\u7248\u672c\u4e2d\uff0cINSERT INTO \u8bed\u53e5\u5bfc\u5165\u65b9\u5f0f\u4ec5\u652f\u6301\u5728 MySQL \u5ba2\u6237\u7aef\u901a\u8fc7 ",(0,i.jsx)(n.strong,{children:"ctrl"})," + ",(0,i.jsx)(n.strong,{children:"c"})," \u6309\u952e\u5f3a\u5236\u53d6\u6d88\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5f53\u524d\u7248\u672c\u4e2d\uff0cStarRocks \u5728\u6267\u884c INSERT INTO \u8bed\u53e5\u65f6\uff0c\u5982\u679c\u6709\u6570\u636e\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff08\u4f8b\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u60c5\u51b5\uff09\uff0cINSERT \u64cd\u4f5c\u9ed8\u8ba4\u6267\u884c\u5931\u8d25\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," \u4e3a ",(0,i.jsx)(n.code,{children:"false"})," \u4ee5\u786e\u4fdd INSERT \u64cd\u4f5c\u4ec5\u8fc7\u6ee4\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u5e76\u7ee7\u7eed\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u9891\u7e41\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u5c0f\u6279\u91cf\u6570\u636e\u4f1a\u4ea7\u751f\u8fc7\u591a\u7684\u6570\u636e\u7248\u672c\uff0c\u4ece\u800c\u5f71\u54cd\u67e5\u8be2\u6027\u80fd\uff0c\u56e0\u6b64\u4e0d\u5efa\u8bae\u60a8\u9891\u7e41\u4f7f\u7528 INSERT INTO \u8bed\u53e5\u5bfc\u5165\u6570\u636e\u6216\u5c06\u5176\u4f5c\u4e3a\u751f\u4ea7\u73af\u5883\u7684\u65e5\u5e38\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u5982\u679c\u60a8\u7684\u4e1a\u52a1\u573a\u666f\u9700\u8981\u6d41\u5f0f\u5bfc\u5165\u6216\u8005\u5c0f\u6279\u91cf\u591a\u6b21\u5bfc\u5165\u6570\u636e\uff0c\u5efa\u8bae\u4f7f\u7528 Apache Kafka\xae \u4f5c\u4e3a\u6570\u636e\u6e90\u5e76\u901a\u8fc7 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/loading/RoutineLoad",children:"Routine Load"})," \u65b9\u5f0f\u8fdb\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 StarRocks \u4e2d\u521b\u5efa\u6570\u636e\u5e93 ",(0,i.jsx)(n.code,{children:"load_test"}),"\uff0c\u5e76\u5728\u5176\u4e2d\u521b\u5efa\u805a\u5408\u6a21\u578b\u8868 ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," \u4ee5\u53ca\u6570\u636e\u6e90\u8868 ",(0,i.jsx)(n.code,{children:"source_wiki_edit"}),"\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6587\u4e2d\u6f14\u793a\u7684\u64cd\u4f5c\u793a\u4f8b\u5747\u57fa\u4e8e\u8868 ",(0,i.jsx)(n.code,{children:"insert_wiki_edit"})," \u548c\u6570\u636e\u6e90\u8868 ",(0,i.jsx)(n.code,{children:"source_wiki_edit"}),"\u3002\u5982\u679c\u60a8\u9009\u62e9\u4f7f\u7528\u81ea\u5df1\u7684\u8868\u4ee5\u53ca\u6570\u636e\uff0c\u8bf7\u8df3\u8fc7\u5f53\u524d\u6b65\u9aa4\uff0c\u5e76\u6839\u636e\u4f7f\u7528\u573a\u666f\u4fee\u6539\u9700\u8981\u5bfc\u5165\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE IF NOT EXISTS load_test;\nUSE load_test;\nCREATE TABLE insert_wiki_edit\n(\n    event_time DATETIME,\n    channel VARCHAR(32) DEFAULT '',\n    user VARCHAR(128) DEFAULT '',\n    is_anonymous TINYINT DEFAULT '0',\n    is_minor TINYINT DEFAULT '0',\n    is_new TINYINT DEFAULT '0',\n    is_robot TINYINT DEFAULT '0',\n    is_unpatrolled TINYINT DEFAULT '0',\n    delta INT SUM DEFAULT '0',\n    added INT SUM DEFAULT '0',\n    deleted INT SUM DEFAULT '0'\n)\nAGGREGATE KEY\n(\n    event_time,\n    channel,\n    user,\n    is_anonymous,\n    is_minor,\n    is_new,\n    is_robot,\n    is_unpatrolled\n)\nPARTITION BY RANGE(event_time)\n(\n    PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),\n    PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),\n    PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),\n    PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')\n)\nDISTRIBUTED BY HASH(user) BUCKETS 3;\n\nCREATE TABLE source_wiki_edit\n(\n    event_time DATETIME,\n    channel VARCHAR(32) DEFAULT '',\n    user VARCHAR(128) DEFAULT '',\n    is_anonymous TINYINT DEFAULT '0',\n    is_minor TINYINT DEFAULT '0',\n    is_new TINYINT DEFAULT '0',\n    is_robot TINYINT DEFAULT '0',\n    is_unpatrolled TINYINT DEFAULT '0',\n    delta INT SUM DEFAULT '0',\n    added INT SUM DEFAULT '0',\n    deleted INT SUM DEFAULT '0'\n)\nAGGREGATE KEY\n(\n    event_time,\n    channel,\n    user,\n    is_anonymous,\n    is_minor,\n    is_new,\n    is_robot,\n    is_unpatrolled\n)\nPARTITION BY RANGE(event_time)\n(\n    PARTITION p06 VALUES LESS THAN ('2015-09-12 06:00:00'),\n    PARTITION p12 VALUES LESS THAN ('2015-09-12 12:00:00'),\n    PARTITION p18 VALUES LESS THAN ('2015-09-12 18:00:00'),\n    PARTITION p24 VALUES LESS THAN ('2015-09-13 00:00:00')\n)\nDISTRIBUTED BY HASH(user) BUCKETS 3;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u8fc7-insert-into-values-\u8bed\u53e5\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7 INSERT INTO VALUES \u8bed\u53e5\u5bfc\u5165\u6570\u636e"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 INSERT INTO VALUES \u8bed\u53e5\u5411\u6307\u5b9a\u7684\u8868\u4e2d\u76f4\u63a5\u5bfc\u5165\u6570\u636e\u3002\u6b64\u5bfc\u5165\u65b9\u5f0f\u4e2d\uff0c\u591a\u6761\u6570\u636e\u7528\u9017\u53f7\uff08,\uff09\u5206\u9694\u3002\u8be6\u7ec6\u4f7f\u7528\u65b9\u5f0f\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"\u3002\u8be6\u7ec6\u53c2\u6570\u4fe1\u606f\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/insert#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"INSERT \u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO VALUES \u8bed\u53e5\u5bfc\u5165\u65b9\u5f0f\u4ec5\u9002\u7528\u4e8e\u5bfc\u5165\u5c11\u91cf\u6570\u636e\u4f5c\u4e3a\u9a8c\u8bc1 DEMO \u7528\u9014\uff0c\u4e0d\u9002\u7528\u4e8e\u5927\u89c4\u6a21\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u3002\u5982\u9700\u5927\u89c4\u6a21\u5bfc\u5165\u6570\u636e\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u5bfc\u5165\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"})," \u4e3a Label \u5411\u6e90\u8868 ",(0,i.jsx)(n.code,{children:"source_wiki_edit"})," \u4e2d\u5bfc\u5165\u4e24\u6761\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'INSERT INTO source_wiki_edit\nWITH LABEL insert_load_wikipedia\nVALUES\n    ("2015-09-12 00:00:00","#en.wikipedia","AustinFF",0,0,0,0,0,21,5,0),\n    ("2015-09-12 00:00:00","#ca.wikipedia","helloSR",0,1,0,1,0,3,23,0);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u8fc7-insert-into-select-\u8bed\u53e5\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7 INSERT INTO SELECT \u8bed\u53e5\u5bfc\u5165\u6570\u636e"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 INSERT INTO SELECT \u8bed\u53e5\u5c06\u6e90\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u4e2d\u3002\u8be6\u7ec6\u4f7f\u7528\u65b9\u5f0f\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"\u3002\u8be6\u7ec6\u53c2\u6570\u4fe1\u606f\uff0c\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/insert#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"INSERT \u53c2\u6570"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia_1"})," \u4e3a Label \u5c06\u6e90\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO insert_wiki_edit\nWITH LABEL insert_load_wikipedia_1\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia_2"})," \u4e3a Label \u5c06\u6e90\u8868\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u7684 ",(0,i.jsx)(n.code,{children:"p06"})," \u548c ",(0,i.jsx)(n.code,{children:"p12"})," \u5206\u533a\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO insert_wiki_edit PARTITION(p06, p12)\nWITH LABEL insert_load_wikipedia_2\nSELECT * FROM source_wiki_edit;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u6e90\u8868\u4e2d\u6307\u5b9a\u5217\u7684\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u4e2d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO insert_wiki_edit\n    WITH LABEL insert_load_wikipedia_3 (event_time, channel)\n    SELECT event_time, channel FROM routine_wiki_edit;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u6e05\u7a7a ",(0,i.jsx)(n.code,{children:"p06"})," \u548c ",(0,i.jsx)(n.code,{children:"p12"})," \u5206\u533a\uff0c\u5219\u67e5\u8be2\u4e0d\u5230\u5148\u524d\u63d2\u5165\u81f3\u5bf9\u5e94\u5206\u533a\u7684\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL [load_test]> select * from insert_wiki_edit;\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| event_time          | channel       | user     | is_anonymous | is_minor | is_new | is_robot | is_unpatrolled | delta | added | deleted |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n| 2015-09-12 00:00:00 | #en.wikipedia | AustinFF |            0 |        0 |      0 |        0 |              0 |    21 |     5 |       0 |\n| 2015-09-12 00:00:00 | #ca.wikipedia | helloSR  |            0 |        1 |      0 |        1 |              0 |     3 |    23 |       0 |\n+---------------------+---------------+----------+--------------+----------+--------+----------+----------------+-------+-------+---------+\n2 rows in set (0.00 sec)\n\nMySQL [load_test]> truncate table insert_wiki_edit PARTITION(p06, p12);\nQuery OK, 0 rows affected (0.01 sec)\n\nMySQL [load_test]> select * from insert_wiki_edit;\nEmpty set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia_3"})," \u4e3a Label \u5c06\u6e90\u8868\u4e2d ",(0,i.jsx)(n.code,{children:"event_time"})," \u548c ",(0,i.jsx)(n.code,{children:"channel"})," \u5217\u7684\u6570\u636e\u5bfc\u5165\u81f3\u76ee\u6807\u8868\u7684\u5bf9\u5e94\u5217\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO insert_wiki_edit\nWITH LABEL insert_load_wikipedia_3 \n(\n    event_time, \n    channel\n)\nSELECT event_time, channel FROM source_wiki_edit;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001",children:"\u67e5\u770b\u5bfc\u5165\u4efb\u52a1\u72b6\u6001"}),"\n",(0,i.jsx)(n.h3,{id:"\u901a\u8fc7\u7ed3\u679c\u8fd4\u56de\u67e5\u770b",children:"\u901a\u8fc7\u7ed3\u679c\u8fd4\u56de\u67e5\u770b"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO \u5bfc\u5165\u4efb\u52a1\u4f1a\u6839\u636e\u6267\u884c\u7ed3\u679c\u7684\u4e0d\u540c\uff0c\u8fd4\u56de\u4ee5\u4e0b\u4e24\u79cd\u4efb\u52a1\u72b6\u6001\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u6267\u884c\u6210\u529f"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5bfc\u5165\u6267\u884c\u6210\u529f\uff0cStarRocks \u7684\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"Query OK, 2 rows affected, 2 warnings (0.05 sec)\n{'label':'insert_load_wikipedia', 'status':'VISIBLE', 'txnId':'1006'}\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u8fd4\u56de"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rows affected"}),(0,i.jsxs)(n.td,{children:["\u8868\u793a\u603b\u5171\u6709\u591a\u5c11\u884c\u6570\u636e\u88ab\u5bfc\u5165\u3002",(0,i.jsx)(n.code,{children:"warnings"})," \u8868\u793a\u88ab\u8fc7\u6ee4\u7684\u884c\u6570\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"label"}),(0,i.jsx)(n.td,{children:"\u7528\u6237\u6307\u5b9a\u6216\u81ea\u52a8\u751f\u6210\u7684 Label\u3002Label \u662f\u8be5 INSERT INTO \u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u8bc6\uff0c\u5f53\u524d\u6570\u636e\u5e93\u5185\u552f\u4e00\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"status"}),(0,i.jsx)(n.td,{children:"\u8868\u793a\u5bfc\u5165\u6570\u636e\u662f\u5426\u53ef\u89c1\u3002VISIBLE \u8868\u793a\u53ef\u89c1\uff0cCOMMITTED \u8868\u793a\u5df2\u63d0\u4ea4\u4f46\u6682\u4e0d\u53ef\u89c1\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"txnId"}),(0,i.jsx)(n.td,{children:"\u8be5 INSERT INTO \u5bfc\u5165\u5bf9\u5e94\u7684\u5bfc\u5165\u4e8b\u52a1 ID\u3002"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u6267\u884c\u5931\u8d25"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u6240\u6709\u6570\u636e\u90fd\u65e0\u6cd5\u88ab\u5bfc\u5165\uff0c\u5219\u5bfc\u5165\u6267\u884c\u5931\u8d25\uff0cStarRocks \u5c06\u8fd4\u56de\u76f8\u5e94\u9519\u8bef\u4ee5\u53ca ",(0,i.jsx)(n.code,{children:"tracking_url"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"tracking_url"})," \u67e5\u770b\u9519\u8bef\u76f8\u5173\u7684\u65e5\u5fd7\u4fe1\u606f\u5e76\u6392\u67e5\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"ERROR 1064 (HY000): Insert has filtered data in strict mode, tracking_url=http://x.x.x.x:yyyy/api/_load_error_log?file=error_log_9f0a4fd0b64e11ec_906bbede076e9d08\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u901a\u8fc7-show-load-\u8bed\u53e5\u67e5\u770b",children:"\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b INSERT INTO \u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b Label \u4e3a ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"})," \u7684\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WHERE label="insert_load_wikipedia"\\G\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:'*************************** 1. row ***************************\n         JobId: 13525\n         Label: insert_load_wikipedia\n         State: FINISHED\n      Progress: ETL:100%; LOAD:100%\n          Type: INSERT\n       EtlInfo: NULL\n      TaskInfo: cluster:N/A; timeout(s):3600; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2022-08-02 11:41:26\n  EtlStartTime: 2022-08-02 11:41:26\n EtlFinishTime: 2022-08-02 11:41:26\n LoadStartTime: 2022-08-02 11:41:26\nLoadFinishTime: 2022-08-02 11:41:26\n           URL: \n    JobDetails: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"All backends":{},"FileNumber":0,"FileSize":0}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u901a\u8fc7-curl-\u547d\u4ee4\u67e5\u770b",children:"\u901a\u8fc7 curl \u547d\u4ee4\u67e5\u770b"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7 curl \u547d\u4ee4\u67e5\u770b INSERT INTO \u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"curl --location-trusted -u {user}:{passwd} \\\n  http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7 curl \u547d\u4ee4\u67e5\u770b Label \u4e3a ",(0,i.jsx)(n.code,{children:"insert_load_wikipedia"})," \u7684\u5bfc\u5165\u4f5c\u4e1a\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"curl --location-trusted -u <username>:<password> \\\n  http://x.x.x.x:8030/api/load_test/_load_info?label=insert_load_wikipedia\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8d26\u53f7\u6ca1\u6709\u8bbe\u7f6e\u5bc6\u7801\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u4f20\u5165 ",(0,i.jsx)(n.code,{children:"<username>:"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:'{\n  "jobInfo": {\n    "dbName": "default_cluster:load_test",\n    "tblNames": [\n      "source_wiki_edit"\n    ],\n    "label": "insert_load_wikipedia",\n    "clusterName": "default_cluster",\n    "state": "FINISHED",\n    "failMsg": "",\n    "trackingUrl": ""\n  },\n  "status": "OK",\n  "msg": "Success"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u914d\u7f6e\u9879",children:"\u76f8\u5173\u914d\u7f6e\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4e3a INSERT INTO \u5bfc\u5165\u4f5c\u4e1a\u8bbe\u5b9a\u4ee5\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"FE \u914d\u7f6e\u9879"})}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"FE \u914d\u7f6e\u9879"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"insert_load_default_timeout_second"}),(0,i.jsx)(n.td,{children:"INSERT INTO \u5bfc\u5165\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u5982\u679c\u5f53\u524d INSERT INTO \u5bfc\u5165\u4efb\u52a1\u5728\u8be5\u53c2\u6570\u8bbe\u5b9a\u7684\u65f6\u95f4\u5185\u672a\u5b8c\u6210\u5219\u4f1a\u88ab\u7cfb\u7edf\u53d6\u6d88\uff0c\u72b6\u6001\u4e3a CANCELLED\u3002\u76ee\u524d\u4ec5\u652f\u6301\u901a\u8fc7\u8be5\u53c2\u6570\u4e3a\u6240\u6709 INSERT INTO \u5bfc\u5165\u4f5c\u4e1a\u7edf\u4e00\u8bbe\u5b9a\u8d85\u65f6\u65f6\u95f4\uff0c\u4e0d\u652f\u6301\u4e3a\u5355\u72ec\u7684\u5bfc\u5165\u4f5c\u4e1a\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 3600 \u79d2\uff081 \u5c0f\u65f6\uff09\u3002\u5982\u679c\u5bfc\u5165\u4efb\u52a1\u65e0\u6cd5\u5728\u89c4\u5b9a\u65f6\u95f4\u5185\u5b8c\u6210\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u8be5\u53c2\u6570\u5ef6\u957f\u8d85\u65f6\u65f6\u95f4\u3002"})]})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Session \u53d8\u91cf"})}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Session \u53d8\u91cf"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enable_insert_strict"}),(0,i.jsxs)(n.td,{children:["INSERT \u5bfc\u5165\u662f\u5426\u5bb9\u5fcd\u9519\u8bef\u6570\u636e\u884c\u3002\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"true"})," \u65f6\uff0c\u5982\u679c\u6709\u4e00\u6761\u6570\u636e\u9519\u8bef\uff0c\u5219\u8fd4\u56de\u5bfc\u5165\u5931\u8d25\u3002\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"false"})," \u65f6\uff0c\u5982\u679c\u81f3\u5c11\u6709\u4e00\u6761\u6570\u636e\u88ab\u6b63\u786e\u5bfc\u5165\uff0c\u5219\u8fd4\u56de\u5bfc\u5165\u6210\u529f\uff0c\u5e76\u4f1a\u8fd4\u56de\u4e00\u4e2a Label\u3002\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"true"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"SET enable_insert_strict = true;"})," \u547d\u4ee4\u6765\u8bbe\u5b9a\u8be5\u53c2\u6570\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"query_timeout"}),(0,i.jsxs)(n.td,{children:["SQL \u547d\u4ee4\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002INSERT \u8bed\u53e5\u4f5c\u4e3a SQL \u547d\u4ee4\uff0c\u540c\u6837\u53d7\u5230\u8be5 Session \u53d8\u91cf\u7684\u9650\u5236\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"SET query_timeout = xxx;"})," \u547d\u4ee4\u6765\u8bbe\u5b9a\u8be5\u53c2\u6570\u3002"]})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>d});var i=s(67294);const l=i.createContext({});function d(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||r:d(e),i.createElement(l.Provider,{value:t},n)}}}]);