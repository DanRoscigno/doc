"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71026],{93587:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var d=s(85893),n=s(11151);const c={},i="CREATE RESOURCE",t={id:"sql-reference/sql-statements/data-definition/CREATE RESOURCE",title:"CREATE RESOURCE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/CREATE RESOURCE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE RESOURCE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE RESOURCE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/CREATE RESOURCE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE REPOSITORY",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE REPOSITORY"},next:{title:"CREATE TABLE AS SELECT",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE TABLE AS SELECT"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"resource_name",id:"resource_name",level:3},{value:"PROPERTIES",id:"properties",level:3},{value:"Spark \u8d44\u6e90",id:"spark-\u8d44\u6e90",level:4},{value:"Hive \u8d44\u6e90",id:"hive-\u8d44\u6e90",level:4},{value:"Iceberg \u8d44\u6e90",id:"iceberg-\u8d44\u6e90",level:4},{value:"Hudi \u8d44\u6e90",id:"hudi-\u8d44\u6e90",level:4},{value:"JDBC \u8d44\u6e90",id:"jdbc-\u8d44\u6e90",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u64cd\u4f5c",id:"\u76f8\u5173\u64cd\u4f5c",level:2}];function a(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"create-resource",children:"CREATE RESOURCE"}),"\n",(0,d.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsxs)(r.p,{children:["\u521b\u5efa\u8d44\u6e90\u3002StarRocks \u652f\u6301\u521b\u5efa\u4ee5\u4e0b\u8d44\u6e90\uff1aApache Spark\u2122\u3001Apache Hive\u2122\u3001Apache Iceberg\u3001 Apache Hudi \u548c JDBC\u3002\u5176\u4e2d Spark \u8d44\u6e90\u7528\u4e8e ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/loading/SparkLoad",children:"Spark Load"}),"\uff0c\u8d1f\u8d23\u7ba1\u7406\u6570\u636e\u5bfc\u5165\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u6bd4\u5982 YARN \u914d\u7f6e\uff0c\u4e2d\u95f4\u6570\u636e\u5b58\u50a8\u7684\u8def\u5f84\u4ee5\u53ca Broker \u914d\u7f6e\u7b49\uff1bHive\u3001Iceberg\u3001Hudi \u548c JDBC \u8d44\u6e90\u7528\u4e8e\u5728\u67e5\u8be2",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/data_source/External_table",children:"\u5916\u90e8\u8868"}),"\u662f\u7ba1\u7406\u6570\u636e\u6e90\u7684\u8bbf\u95ee\u4fe1\u606f\u3002"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"\u53ea\u6709\u62e5\u6709 System \u7ea7 CREATE RESOURCE \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u8d44\u6e90\u3002"}),"\n",(0,d.jsx)(r.li,{children:"StarRocks 2.3 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301\u521b\u5efa JDBC \u8d44\u6e90\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "resource_name"\nPROPERTIES ("key"="value"[, ...])\n'})}),"\n",(0,d.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsx)(r.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,d.jsx)(r.p,{children:"\u8d44\u6e90\u540d\u79f0\u3002\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"\u5fc5\u987b\u7531\u6570\u5b57(0-9)\u3001\u4e0b\u5212\u7ebf(_)\u6216\u5b57\u6bcd(a-z\u6216A-Z)\u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,d.jsx)(r.li,{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002"}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"properties",children:"PROPERTIES"}),"\n",(0,d.jsx)(r.p,{children:"\u8d44\u6e90\u914d\u7f6e\u9879\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u8d44\u6e90\u53ef\u8bbe\u7f6e\u4e0d\u540c\u914d\u7f6e\u9879\u3002"}),"\n",(0,d.jsx)(r.h4,{id:"spark-\u8d44\u6e90",children:"Spark \u8d44\u6e90"}),"\n",(0,d.jsx)(r.p,{children:"Spark \u96c6\u7fa4\u914d\u7f6e\u4e0d\u540c\uff0c\u8d44\u6e90\u9700\u8981\u6dfb\u52a0\u7684\u914d\u7f6e\u9879\u4e5f\u4e0d\u540c\u3002\u5f53\u524d Spark Load \u4ec5\u652f\u6301 Spark \u7684 cluster manager \u4e3a YARN \u4e14\u6570\u636e\u5b58\u50a8\u7cfb\u7edf\u4e3a HDFS\uff0c\u4e14 YARN \u548c HDFS \u5747\u652f\u6301 HA\uff08\u9ad8\u53ef\u7528\uff09\u3002\u5177\u4f53\u53ef\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"\u5982\u679c\u9009\u62e9\u4f7f\u7528Broker \u8fdb\u7a0b\u7684\u65b9\u5f0f\u5bfc\u5165"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"\u5982\u679c Spark \u7684 cluster manager \u4e3a YARN\uff0c\u6570\u636e\u5b58\u50a8\u7cfb\u7edf\u4e3a HDFS\uff0c\u5219\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"spark"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.master"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u7684 cluster manager\u3002\u5f53\u524d\u4ec5\u652f\u6301 YARN\uff0c\u6240\u4ee5\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"yarn"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.submit.deployMode"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark driver \u7684\u90e8\u7f72\u6a21\u5f0f\u3002\u53d6\u503c\u5305\u62ec",(0,d.jsx)(r.code,{children:"cluster"}),"\u548c",(0,d.jsx)(r.code,{children:"client"}),"\u3002\u5173\u4e8e\u53d6\u503c\u8bf4\u660e\uff0c\u53c2\u8003 ",(0,d.jsx)(r.a,{href:"https://spark.apache.org/docs/3.3.0/running-on-yarn.html#launching-spark-on-yarn",children:"Launching Spark on YARN"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.executor.memory"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"Spark executor \u5360\u7528\u7684\u5185\u5b58\u91cf\uff0c\u5355\u4f4d\u4e3a KB\u3001MB\u3001GB \u6216 TB\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.yarn.queue"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"YARN \u961f\u5217\u540d\u79f0\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.address"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"YARN ResourceManager \u5730\u5740\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.fs.defaultFS"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["HDFS \u4e2d NameNode \u7684\u5730\u5740\u3002\u683c\u5f0f\u4e3a\uff1a",(0,d.jsx)(r.code,{children:"hdfs://namenode_host:port"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"working_dir"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u4e00\u4e2a HDFS \u6587\u4ef6\u8def\u5f84\uff0c\u7528\u4e8e\u5b58\u653e ETL \u4f5c\u4e1a\u751f\u6210\u7684\u6587\u4ef6\u3002\u4f8b\u5982\uff1a",(0,d.jsx)(r.code,{children:"hdfs://host: port/tmp/starrocks"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Broker \u540d\u79f0\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20BROKER",children:"SHOW BROKER"})," \u8bed\u53e5\u67e5\u770b\u5f53\u524d\u6240\u6709 Broker \u7684\u540d\u79f0\u3002\u5982\u672a\u6dfb\u52a0\u8fc7 Broker\uff0c\u53ef\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ALTER%20SYSTEM",children:"ALTER SYSTEM"})," \u8bed\u53e5\u6dfb\u52a0 Broker\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.username"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"\u901a\u8fc7\u6307\u5b9a\u7684 HDFS \u7528\u6237\u53bb\u8bbf\u95eeHDFS\u4e2d\u7684\u6587\u4ef6\u3002\u5982\u679c HDFS \u6587\u4ef6\u53ea\u80fd\u7531\u7279\u5b9a\u7528\u6237\u8bbf\u95ee\uff0c\u5219\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u662f\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684\u8bdd\uff0c\u5219\u4e0d\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.password"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"HDFS \u7528\u6237\u5bc6\u7801\u3002"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"\u5982\u679c Spark \u7684 cluster manager \u4e3a YARN\uff0c\u5e76\u4e14\u4e3a YARN ResourceManager HA\uff0c\u6570\u636e\u5b58\u50a8\u7cfb\u7edf\u4e3a HDFS\uff0c\u5219\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a",(0,d.jsx)(r.code,{children:"spark"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.master"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u7684 cluster manager\u3002\u5f53\u524d\u4ec5\u652f\u6301 YARN\uff0c\u6240\u4ee5\u53d6\u503c\u4e3a",(0,d.jsx)(r.code,{children:"yarn"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.submit.deployMode"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u9a71\u52a8\u7a0b\u5e8f\u7684\u90e8\u7f72\u6a21\u5f0f\u3002\u53d6\u503c\u5305\u62ec",(0,d.jsx)(r.code,{children:"cluster"}),"\u548c",(0,d.jsx)(r.code,{children:"client"}),"\u3002\u5173\u4e8e\u53d6\u503c\u8bf4\u660e\uff0c\u53c2\u8003 ",(0,d.jsx)(r.a,{href:"https://spark.apache.org/docs/3.3.0/running-on-yarn.html#launching-spark-on-yarn",children:"Launching Spark on YARN"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.ha.enabled"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["YARN ResourceManager \u662f\u5426\u542f\u7528 HA\u3002\u9700\u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a",(0,d.jsx)(r.code,{children:"true"}),"\uff0c\u5373\u542f\u7528 HA\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.ha.rm-ids"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["YARN ResourceManager \u7684\u903b\u8f91 ID \u5217\u8868\u3002\u591a\u4e2a\u903b\u8f91 ID \u4e4b\u95f4\u7528\u9017\u53f7 (",(0,d.jsx)(r.code,{children:","}),") \u9694\u5f00\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.hostname.rm-id"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u5bf9\u4e8e\u6bcf\u4e2a rm-id\uff0c\u9700\u6307\u5b9a ResourceManager \u5bf9\u5e94\u7684\u4e3b\u673a\u540d\u3002\u5982\u5df2\u6dfb\u52a0\u8be5\u914d\u7f6e\u9879\uff0c\u5219\u4e0d\u9700\u8981\u518d\u6dfb\u52a0",(0,d.jsx)(r.code,{children:"spark.hadoop.yarn.resourcemanager.address.rm-id"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.address.rm-id"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u5bf9\u4e8e\u6bcf\u4e2arm-id\uff0c\u9700\u6307\u5b9a ResourceManager \u5bf9\u5e94 ",(0,d.jsx)(r.code,{children:"host:port"}),"\u3002\u5982\u5df2\u6dfb\u52a0\u8be5\u914d\u7f6e\u9879\uff0c\u5219\u4e0d\u9700\u8981\u518d\u6dfb\u52a0",(0,d.jsx)(r.code,{children:"spark.hadoop.yarn.resourcemanager.hostname.rm-id"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.fs.defaultFS"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u4f7f\u7528\u7684 HDFS \u4e2d NameNode \u8282\u70b9\u5730\u5740\u3002\u683c\u5f0f\u4e3a\uff1a",(0,d.jsx)(r.code,{children:"hdfs://namenode_host:port"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"working_dir"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["ETL \u4f5c\u4e1a\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e ETL \u4f5c\u4e1a\u751f\u6210\u7684\u4e2d\u95f4\u6570\u636e\u3002\u4f8b\u5982\uff1a",(0,d.jsx)(r.code,{children:"hdfs://host: port/tmp/starrocks"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Broker \u540d\u79f0\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20BROKER",children:"SHOW BROKER"})," \u8bed\u53e5\u67e5\u770b\u5f53\u524d\u6240\u6709 Broker \u7684\u540d\u79f0\u3002\u5982\u672a\u6dfb\u52a0\u8fc7 Broker\uff0c\u53ef\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ALTER%20SYSTEM",children:"ALTER SYSTEM"})," \u8bed\u53e5\u6dfb\u52a0 Broker\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.username"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"\u901a\u8fc7\u6307\u5b9a\u7684 HDFS \u7528\u6237\u53bb\u8bbf\u95eeHDFS\u4e2d\u7684\u6587\u4ef6\u3002\u5982\u679c HDFS \u6587\u4ef6\u53ea\u80fd\u7531\u7279\u5b9a\u7528\u6237\u8bbf\u95ee\uff0c\u5219\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u662f\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684\u8bdd\uff0c\u5219\u4e0d\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.password"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"HDFS \u7528\u6237\u5bc6\u7801\u3002"})]})]})]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"\u5982\u679c Spark \u7684 cluster manager \u4e3a YARN\uff0c\u6570\u636e\u5b58\u50a8\u7cfb\u7edf\u4e3a HDFS HA\uff0c\u5219\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a",(0,d.jsx)(r.code,{children:"spark"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.master"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u7684 cluster manager\u3002\u5f53\u524d\u4ec5\u652f\u6301 YARN\uff0c\u6240\u4ee5\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"yarn"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.yarn.resourcemanager.address"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"YARN ResourceManager \u5730\u5740\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.fs.defaultFS"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Spark \u4f7f\u7528\u7684 HDFS \u4e2d NameNode \u8282\u70b9\u5730\u5740\u3002\u683c\u5f0f\u4e3a\uff1a",(0,d.jsx)(r.code,{children:"hdfs://namenode_host:port"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.dfs.nameservices"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"HDFS nameservice \u7684 ID\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Spark \u4f7f\u7528\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.dfs.ha.namenodes.[nameservice ID]"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["HDFS NameNode \u7684 ID\u3002\u60a8\u53ef\u914d\u7f6e\u591a\u4e2a NameNode ID\u3002\u591a\u4e2a NameNode ID \u4e4b\u95f4\u8981\u7528\u9017\u53f7 (",(0,d.jsx)(r.code,{children:","}),") \u9694\u5f00\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Spark \u4f7f\u7528\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.dfs.namenode.rpc-address.[nameservice ID].[name node ID]"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u6bcf\u4e2a HDFS NameNode \u76d1\u542c\u7684 RPC \u5730\u5740\u3002\u6ce8\u610f\u9700\u914d\u7f6e\u5b8c\u5168\u9650\u5b9a\u7684 RPC \u5730\u5740\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Spark \u4f7f\u7528\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"spark.hadoop.dfs.client.failover.proxy.provider"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"HDFS \u7684 Java \u7c7b\uff0c\u5176\u7528\u6765\u8054\u7cfb Active \u72b6\u6001\u7684 NameNode\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Spark \u4f7f\u7528\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"working_dir"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["ETL \u4f5c\u4e1a\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e ETL \u4f5c\u4e1a\u751f\u6210\u7684\u4e2d\u95f4\u6570\u636e\u3002\u4f8b\u5982\uff1a",(0,d.jsx)(r.code,{children:"hdfs://host: port/tmp/starrocks"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Broker \u540d\u79f0\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20BROKER",children:"SHOW BROKER"})," \u8bed\u53e5\u67e5\u770b\u5f53\u524d\u6240\u6709 Broker \u7684\u540d\u79f0\u3002\u5982\u672a\u6dfb\u52a0\u8fc7 Broker\uff0c\u53ef\u4f7f\u7528 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ALTER%20SYSTEM",children:"ALTER SYSTEM"})," \u8bed\u53e5\u6dfb\u52a0 Broker\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.username"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"\u901a\u8fc7\u6307\u5b9a\u7684 HDFS \u7528\u6237\u53bb\u8bbf\u95eeHDFS\u4e2d\u7684\u6587\u4ef6\u3002\u5982\u679c HDFS \u6587\u4ef6\u53ea\u80fd\u7531\u7279\u5b9a\u7528\u6237\u8bbf\u95ee\uff0c\u5219\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u662f\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u5219\u4e0d\u9700\u8981\u4f20\u5165\u8be5\u53c2\u6570\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.password"}),(0,d.jsx)(r.td,{children:"\u5426"}),(0,d.jsx)(r.td,{children:"HDFS \u7528\u6237\u5bc6\u7801\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.dfs.nameservices"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"HDFS nameservice \u7684 ID\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Broker \u4f7f\u7528\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.dfs.ha.namenodes. [nameservice ID]"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["HDFS NameNode \u7684 ID\u3002\u60a8\u53ef\u914d\u7f6e\u591a\u4e2a NameNode ID\u3002\u591a\u4e2a NameNode ID \u4e4b\u95f4\u8981\u7528\u9017\u53f7 (",(0,d.jsx)(r.code,{children:","}),") \u9694\u5f00\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Broker \u4f7f\u7528\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.dfs.namenode.rpc-address. [nameservice ID].[name node ID]"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u6bcf\u4e2a HDFS NameNode \u76d1\u542c\u7684 RPC \u5730\u5740\u3002\u6ce8\u610f\u9700\u914d\u7f6e\u5b8c\u5168\u9650\u5b9a\u7684 RPC \u5730\u5740\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Broker \u4f7f\u7528\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"broker.dfs.client.failover.proxy.provider"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"HDFS \u7684 Java \u7c7b\uff0c\u5176\u7528\u6765\u8054\u7cfb Active \u72b6\u6001\u7684 NameNode\u3002\u8be5\u914d\u7f6e\u9879\u4f9b Broker \u4f7f\u7528\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"\u5982\u679c\u4f7f\u7528\u65e0 Broker \u8fdb\u7a0b\u7684\u65b9\u5f0f\u5bfc\u5165\uff0c\u5219\u5728\u521b\u5efa\u8d44\u6e90\u65f6\u53c2\u6570\u8bbe\u7f6e\u4e0e\u4f7f\u7528Broker \u8fdb\u7a0b\u7684\u65b9\u5f0f\u5bfc\u5165\u7a0d\u6709\u5dee\u5f02\uff0c\u5177\u4f53\u5dee\u5f02\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\u65e0\u9700\u4f20\u5165 ",(0,d.jsx)(r.code,{children:"broker"}),"\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u5982\u679c\u60a8\u9700\u8981\u914d\u7f6e\u7528\u6237\u8eab\u4efd\u8ba4\u8bc1\u3001NameNode \u8282\u70b9\u7684 HA\uff0c\u5219\u9700\u8981\u5728 HDFS \u96c6\u7fa4\u4e2d\u7684 ",(0,d.jsx)(r.strong,{children:"hdfs-site.xml"})," \u6587\u4ef6\u4e2d\u914d\u7f6e\u53c2\u6570\uff0c\u5177\u4f53\u53c2\u6570\u548c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD#hdfs",children:"broker_properties"}),"\u3002\u5e76\u4e14\u5c06 ",(0,d.jsx)(r.strong,{children:"hdfs-site.xml"})," \u6587\u4ef6\u653e\u5230\u6bcf\u4e00\u4e2a FE \u7684 ",(0,d.jsx)(r.strong,{children:"$FE_HOME/conf"})," \u4e0b\u4ee5\u53ca\u6bcf\u4e2a BE \u7684 ",(0,d.jsx)(r.strong,{children:"$BE_HOME/conf"})," \u4e0b\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\u4f7f\u7528\u65e0 Broker \u8fdb\u7a0b\u7684\u65b9\u5f0f\u5bfc\u5165\u65f6\uff0c\u5982\u679c HDFS \u6587\u4ef6\u53ea\u80fd\u7531\u7279\u5b9a\u7528\u6237\u8bbf\u95ee\uff0c\u5219\u60a8\u4ecd\u7136\u9700\u8981\u4f20\u5165 HDFS \u7528\u6237\u540d ",(0,d.jsx)(r.code,{children:"broker.name"}),"\u548c HDFS \u7528\u6237\u5bc6\u7801",(0,d.jsx)(r.code,{children:"broker.password"}),"\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u5728\u4ee5\u4e0a\u51e0\u79cd\u60c5\u51b5\u4e2d\uff0c\u5982\u8981\u6dfb\u52a0\u9664\u8868\u683c\u4ee5\u5916\u7684\u914d\u7f6e\u9879\uff0c\u53ef\u53c2\u8003 ",(0,d.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/configuration.html",children:"Spark Configuration"})," \u548c ",(0,d.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/running-on-yarn.html",children:"Running Spark on YARN"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(r.h4,{id:"hive-\u8d44\u6e90",children:"Hive \u8d44\u6e90"}),"\n",(0,d.jsx)(r.p,{children:"\u5982\u521b\u5efa\u4e00\u4e2a Hive \u8d44\u6e90\uff0c\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"hive"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hive.metastore.uris"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"Hive metastore \u7684 URI\u3002"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"iceberg-\u8d44\u6e90",children:"Iceberg \u8d44\u6e90"}),"\n",(0,d.jsx)(r.p,{children:"\u5982\u521b\u5efa\u4e00\u4e2a Iceberg \u8d44\u6e90\uff0c\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"iceberg"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"starrocks.catalog-type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["Iceberg \u7684 catalog \u7c7b\u578b\u3002StarRocks 2.3 \u4ee5\u4e0b\u7248\u672c\u4ec5\u652f\u6301 Hive catalog\uff1bStarRocks 2.3 \u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301 Hive catalog \u548c custom catalog\u3002 \u5982\u8981\u4f7f\u7528 Hive catalog\uff0c \u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a ",(0,d.jsx)(r.code,{children:"HIVE"}),"\u3002 \u5982\u8981\u4f7f\u7528 custom catalog\uff0c\u8bbe\u7f6e\u8be5\u53c2\u6570\u4e3a ",(0,d.jsx)(r.code,{children:"CUSTOM"}),"\u3002\u8be6\u7ec6\u4fe1\u606f\u53c2\u89c1",(0,d.jsx)(r.a,{href:"/data_source/External_table#%E6%AD%A5%E9%AA%A4%E4%B8%80%E5%88%9B%E5%BB%BA--iceberg-%E8%B5%84%E6%BA%90",children:"\u521b\u5efa Iceberg \u8d44\u6e90"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"iceberg.catalog.hive.metastore.uris"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"Hive metastore \u7684URI\u3002"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"hudi-\u8d44\u6e90",children:"Hudi \u8d44\u6e90"}),"\n",(0,d.jsx)(r.p,{children:"\u5982\u521b\u5efa\u4e00\u4e2a Hudi \u8d44\u6e90\uff0c\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"hudi"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"hive.metastore.uris"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"Hive metastore \u7684 URI\u3002"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"jdbc-\u8d44\u6e90",children:"JDBC \u8d44\u6e90"}),"\n",(0,d.jsx)(r.p,{children:"\u5982\u521b\u5efa\u4e00\u4e2a JDBC \u8d44\u6e90\uff0c\u9700\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u914d\u7f6e\u9879"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(r.th,{children:(0,d.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"type"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u53d6\u503c\u4e3a ",(0,d.jsx)(r.code,{children:"jdbc"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"user"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u767b\u5f55\u5230\u652f\u6301\u7684 JDBC \u6570\u636e\u5e93 \uff08\u4ee5\u4e0b\u7b80\u79f0\u201c\u76ee\u6807\u6570\u636e\u5e93\u201d\uff09\u7684\u7528\u6237\u540d\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"password"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsx)(r.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7684\u767b\u5f55\u5bc6\u7801\u3002"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"jdbc_uri"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u7528\u4e8e\u8fde\u63a5\u76ee\u6807\u6570\u636e\u5e93\u7684JDBC URI\uff0c\u9700\u8981\u6ee1\u8db3\u76ee\u6807\u6570\u636e\u5e93 URI \u7684\u8bed\u6cd5\u3002\u5e38\u89c1\u7684\u76ee\u6807\u6570\u636e\u5e93 URI\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(r.a,{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html",children:"MySQL"}),"\u3001",(0,d.jsx)(r.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/jjdbc/data-sources-and-URLs.html#GUID-6D8EFA50-AB0F-4A2B-88A0-45B4A67C361E",children:"Oracle"}),"\u3001",(0,d.jsx)(r.a,{href:"https://jdbc.postgresql.org/documentation/head/connect.html",children:"PostgreSQL"}),"\u3001",(0,d.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver16",children:"SQL Server"})," \u5b98\u7f51\u6587\u6863\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"driver_url"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u7528\u4e8e\u4e0b\u8f7d JDBC \u9a71\u52a8\u7a0b\u5e8f JAR \u5305\u7684 URL\uff0c\u652f\u6301\u4f7f\u7528 HTTP \u534f\u8bae \u6216\u8005 file \u534f\u8bae\u3002\u4f8b\u5982 ",(0,d.jsx)(r.code,{children:"https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar"}),"\uff0c ",(0,d.jsx)(r.code,{children:"file:///home/disk1/postgresql-42.3.3.jar"}),"\u3002"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"driver_class"}),(0,d.jsx)(r.td,{children:"\u662f"}),(0,d.jsxs)(r.td,{children:["\u76ee\u6807\u6570\u636e\u5e93\u4f7f\u7528\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u7c7b\u540d\u79f0\u3002\u5e38\u89c1\u7684\u7c7b\u540d\u79f0\u5982\u4e0b\uff1a ",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"MySQL\uff1acom.mysql.jdbc.Driver\uff08MySQL 5.x \u53ca\u4ee5\u4e0b\u7248\u672c\uff09\u548ccom.mysql.cj.jdbc.Driver \uff08MySQL 6.x \u53ca\u4ee5\u4e0a\u7248\u672c\uff09"}),(0,d.jsx)("li",{children:"SQL Server\uff1acom.microsoft.sqlserver.jdbc.SQLServerDriver "}),(0,d.jsx)("li",{children:"Oracle\uff1a oracle.jdbc.driver.OracleDriver "}),(0,d.jsx)("li",{children:"PostgreSQL\uff1aorg.postgresql.Driver"})]})]})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u4e00\uff1a \u5f53\u4f7f\u7528 YARN \u4f5c\u4e3a Spark \u7684 cluster manager\uff0cHDFS \u6765\u5b58\u50a8\u6570\u636e\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"spark0"}),"\u7684 Spark \u8d44\u6e90\uff0c\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES (\n    "type" = "spark",\n    "spark.master" = "yarn",\n    "spark.submit.deployMode" = "cluster",\n    "spark.executor.memory" = "1g",\n    "spark.yarn.queue" = "queue0",\n    "spark.hadoop.yarn.resourcemanager.address" = "resourcemanager_host:8032",\n    "spark.hadoop.fs.defaultFS" = "hdfs://namenode_host:9000",\n    "working_dir" = "hdfs://namenode_host:9000/tmp/starrocks",\n    "broker" = "broker0",\n    "broker.username" = "user0",\n    "broker.password" = "password0"\n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5f53\u4f7f\u7528 YARN HA \u4f5c\u4e3a Spark \u7684 cluster manager\uff0cHDFS \u6765\u5b58\u50a8\u6570\u636e\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"spark1"}),"\u7684 Spark \u8d44\u6e90\uff0c\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "spark1"\nPROPERTIES (\n    "type" = "spark",\n    "spark.master" = "yarn",\n    "spark.submit.deployMode" = "cluster",\n    "spark.hadoop.yarn.resourcemanager.ha.enabled" = "true",\n    "spark.hadoop.yarn.resourcemanager.ha.rm-ids" = "rm1,rm2",\n    "spark.hadoop.yarn.resourcemanager.hostname.rm1" = "host1",\n    "spark.hadoop.yarn.resourcemanager.hostname.rm2" = "host2",\n    "spark.hadoop.fs.defaultFS" = "hdfs://namenode_host:9000",\n    "working_dir" = "hdfs://namenode_host:9000/tmp/starrocks",\n    "broker" = "broker1"\n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5f53\u4f7f\u7528 YARN \u4f5c\u4e3a Spark \u7684 cluster manager\uff0cHDFS HA \u6765\u5b58\u50a8\u6570\u636e\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"spark2"}),"\u7684 Spark \u8d44\u6e90\uff0c\u8bed\u53e5\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "spark2"\nPROPERTIES (\n    "type" = "spark", \n    "spark.master" = "yarn",\n    "spark.hadoop.yarn.resourcemanager.address" = "resourcemanager_host:8032",\n    "spark.hadoop.fs.defaultFS" = "hdfs://myha",\n    "spark.hadoop.dfs.nameservices" = "myha",\n    "spark.hadoop.dfs.ha.namenodes.myha" = "mynamenode1,mynamenode2",\n    "spark.hadoop.dfs.namenode.rpc-address.myha.mynamenode1" = "nn1_host:rpc_port",\n    "spark.hadoop.dfs.namenode.rpc-address.myha.mynamenode2" = "nn2_host:rpc_port",\n    "spark.hadoop.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "working_dir" = "hdfs://myha/tmp/starrocks",\n    "broker" = "broker2",\n    "broker.dfs.nameservices" = "myha",\n    "broker.dfs.ha.namenodes.myha" = "mynamenode1,mynamenode2",\n    "broker.dfs.namenode.rpc-address.myha.mynamenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.myha.mynamenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u56db\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"hive0"}),"\u7684 Hive \u8d44\u6e90\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "hive0"\nPROPERTIES (\n  "type" = "hive",\n  "hive.metastore.uris" = "thrift://10.10.44.98:9083"\n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u4e94\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"iceberg0"}),"\u7684 Iceberg \u8d44\u6e90\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "iceberg0" \nPROPERTIES ( \n   "type" = "iceberg", \n   "starrocks.catalog-type"="HIVE", \n   "iceberg.catalog.hive.metastore.uris"="thrift://192.168.0.81:9083" \n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u516d\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"hudi0"}),"\u7684 Hudi \u8d44\u6e90\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'CREATE EXTERNAL RESOURCE "hudi0" \nPROPERTIES ( \n    "type" = "hudi", \n    "hive.metastore.uris" = "thrift://192.168.7.251:9083"\n);\n'})}),"\n",(0,d.jsxs)(r.p,{children:["\u793a\u4f8b\u4e03\uff1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,d.jsx)(r.code,{children:"jdbc0"}),"\u7684 JDBC \u8d44\u6e90\u3002"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-SQL",children:'create external resource jdbc0\nproperties (\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="changeme",\n    "jdbc_uri"="jdbc:postgresql://127.0.0.1:5432/jdbc_test",\n    "driver_url"="https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar",\n    "driver_class"="org.postgresql.Driver"\n);\n'})}),"\n",(0,d.jsx)(r.h2,{id:"\u76f8\u5173\u64cd\u4f5c",children:"\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\u5982\u8981\u4fee\u6539\u8d44\u6e90\u5c5e\u6027\uff0c\u53c2\u89c1 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER%20RESOURCE",children:"ALTER RESOURCE"}),"\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u5982\u8981\u5220\u9664\u8d44\u6e90\uff0c\u53c2\u89c1 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20RESOURCE",children:"DROP RESOURCE"}),"\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u5982\u8981\u4f7f\u7528 Spark \u8d44\u6e90\u8fdb\u884c Spark Load\uff0c\u53c2\u89c1 ",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/loading/SparkLoad",children:"Spark Load"}),"\u3002"]}),"\n",(0,d.jsxs)(r.li,{children:["\u5982\u8981\u5f15\u7528 Hive\u3001Iceberg\u3001Hudi \u548c JDBC \u8d44\u6e90\u521b\u5efa\u5916\u90e8\u8868\uff0c\u53c2\u89c1",(0,d.jsx)(r.a,{href:"/zh/docs/3.0/data_source/External_table",children:"\u5916\u90e8\u8868"}),"\u3002"]}),"\n"]})]})}const o=function(e={}){const{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>t,ah:()=>c});var d=s(67294);const n=d.createContext({});function c(e){const r=d.useContext(n);return d.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function t({components:e,children:r,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||i:c(e),d.createElement(n.Provider,{value:t},r)}}}]);