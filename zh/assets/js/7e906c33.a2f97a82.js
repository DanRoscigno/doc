"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79009],{65988:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese"},l="SPARK LOAD",i={id:"sql-reference/sql-statements/data-manipulation/SPARK_LOAD",title:"SPARK LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-manipulation/SPARK_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SPARK_LOAD.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW TRANSACTION",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION"},next:{title:"STOP ROUTINE LOAD",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/STOP_ROUTINE_LOAD"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4eceHDFS\u5bfc\u5165\u6570\u636e",id:"\u4ecehdfs\u5bfc\u5165\u6570\u636e",level:3},{value:"\u4eceHDFS\u5bfc\u5165&quot;\u8d1f&quot;\u6570\u636e",id:"\u4ecehdfs\u5bfc\u5165\u8d1f\u6570\u636e",level:3},{value:"\u4eceHDFS\u5bfc\u5165\u6570\u636e\u5230\u6307\u5b9a\u5206\u533a\u5e76\u8fdb\u884c\u5217\u8f6c\u6362",id:"\u4ecehdfs\u5bfc\u5165\u6570\u636e\u5230\u6307\u5b9a\u5206\u533a\u5e76\u8fdb\u884c\u5217\u8f6c\u6362",level:3},{value:"\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5",id:"\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5",level:3},{value:"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4",id:"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4",level:3},{value:"\u4ece Hive \u5916\u8868\u5bfc\u5165\u5e76\u6784\u5efa\u5168\u5c40\u5b57\u5178",id:"\u4ece-hive-\u5916\u8868\u5bfc\u5165\u5e76\u6784\u5efa\u5168\u5c40\u5b57\u5178",level:3}];function h(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,t.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"spark-load",children:"SPARK LOAD"}),"\n",(0,a.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(e.p,{children:"Spark load \u901a\u8fc7\u5916\u90e8\u7684 Spark \u8d44\u6e90\u5b9e\u73b0\u5bf9\u5bfc\u5165\u6570\u636e\u7684\u9884\u5904\u7406\uff0c\u63d0\u9ad8 StarRocks \u5927\u6570\u636e\u91cf\u7684\u5bfc\u5165\u6027\u80fd\u5e76\u4e14\u8282\u7701 StarRocks \u96c6\u7fa4\u7684\u8ba1\u7b97\u8d44\u6e90\u3002\u4e3b\u8981\u7528\u4e8e\u521d\u6b21\u8fc1\u79fb\uff0c\u5927\u6570\u636e\u91cf\u5bfc\u5165 StarRocks \u7684\u573a\u666f\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["Spark load \u662f\u4e00\u79cd\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7 MySQL \u534f\u8bae\u521b\u5efa Spark \u7c7b\u578b\u5bfc\u5165\u4efb\u52a1\uff0c\u5e76\u901a\u8fc7 ",(0,a.jsx)(e.code,{children:"SHOW LOAD"})," \u67e5\u770b\u5bfc\u5165\u7ed3\u679c\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH RESOURCE resource_name\n[resource_properties]\n[opt_properties]\n"})}),"\n",(0,a.jsx)(e.p,{children:"1.load_label"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u524d\u5bfc\u5165\u6279\u6b21\u7684\u6807\u7b7e\u3002\u5728\u4e00\u4e2a database \u5185\u552f\u4e00\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"[database_name.]your_label\n"})}),"\n",(0,a.jsx)(e.p,{children:"2.data_desc"}),"\n",(0,a.jsx)(e.p,{children:"\u7528\u4e8e\u63cf\u8ff0\u4e00\u6279\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'DATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE `table_name`\n[PARTITION (p1, p2)]\n[COLUMNS TERMINATED BY "column_separator"]\n[FORMAT AS "file_type"]\n[(column_list)]\n[COLUMNS FROM PATH AS (col2, ...)]\n[SET (k1 = func(k2))]\n[WHERE predicate]\n\nDATA FROM TABLE hive_external_tbl\n[NEGATIVE]\nINTO TABLE tbl_name\n[PARTITION (p1, p2)]\n[SET (k1=f1(xx), k2=f2(xx))]\n[WHERE predicate]\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'file_path:\n\n\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u6307\u5b9a\u5230\u4e00\u4e2a\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7528 * \u901a\u914d\u7b26\u6307\u5b9a\u67d0\u4e2a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\u3002\u901a\u914d\u7b26\u5fc5\u987b\u5339\u914d\u5230\u6587\u4ef6\uff0c\u800c\u4e0d\u80fd\u662f\u76ee\u5f55\u3002\n\nhive_external_tbl:\n\nhive \u5916\u90e8\u8868\u540d\u3002\n\u8981\u6c42\u5bfc\u5165\u7684 starrocks \u8868\u4e2d\u7684\u5217\u5fc5\u987b\u5728 hive \u5916\u90e8\u8868\u4e2d\u5b58\u5728\u3002\n\u6bcf\u4e2a\u5bfc\u5165\u4efb\u52a1\u53ea\u652f\u6301\u4ece\u4e00\u4e2a hive \u5916\u90e8\u8868\u5bfc\u5165\u3002\n\u4e0d\u80fd\u4e0e file_path \u65b9\u5f0f\u540c\u65f6\u4f7f\u7528\u3002\n\nPARTITION:\n\n\u5982\u679c\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u5219\u53ea\u4f1a\u5bfc\u5165\u6307\u5b9a\u7684\u5206\u533a\uff0c\u5bfc\u5165\u5206\u533a\u4ee5\u5916\u7684\u6570\u636e\u4f1a\u88ab\u8fc7\u6ee4\u6389\u3002\n\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u5bfc\u5165table\u7684\u6240\u6709\u5206\u533a\u3002\n\nNEGATIVE\uff1a\n\n\u5982\u679c\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u5219\u76f8\u5f53\u4e8e\u5bfc\u5165\u4e00\u6279\u201c\u8d1f\u201d\u6570\u636e\u3002\u7528\u4e8e\u62b5\u6d88\u4e4b\u524d\u5bfc\u5165\u7684\u540c\u4e00\u6279\u6570\u636e\u3002\n\u8be5\u53c2\u6570\u4ec5\u9002\u7528\u4e8e\u5b58\u5728 value \u5217\uff0c\u5e76\u4e14 value \u5217\u7684\u805a\u5408\u7c7b\u578b\u4ec5\u4e3a SUM \u7684\u60c5\u51b5\u3002\n\ncolumn_separator\uff1a\n\n\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5217\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a \\t\n\u5982\u679c\u662f\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u5219\u9700\u8981\u52a0\\\\x\u4f5c\u4e3a\u524d\u7f00\uff0c\u4f7f\u7528\u5341\u516d\u8fdb\u5236\u6765\u8868\u793a\u5206\u9694\u7b26\u3002\n\u5982hive\u6587\u4ef6\u7684\u5206\u9694\u7b26\\x01\uff0c\u6307\u5b9a\u4e3a"\\\\x01"\n\nfile_type\uff1a\n\n\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u4ec5\u652f\u6301csv\u3002\n\ncolumn_list\uff1a\n\n\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u5217\u548c table \u4e2d\u7684\u5217\u7684\u5bf9\u5e94\u5173\u7cfb\u3002\n\u5f53\u9700\u8981\u8df3\u8fc7\u5bfc\u5165\u6587\u4ef6\u4e2d\u7684\u67d0\u4e00\u5217\u65f6\uff0c\u5c06\u8be5\u5217\u6307\u5b9a\u4e3a table \u4e2d\u4e0d\u5b58\u5728\u7684\u5217\u540d\u5373\u53ef\u3002\n\n\u8bed\u6cd5\uff1a\n(col_name1, col_name2, ...)\n\nSET:\n\n\u5982\u679c\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u53ef\u4ee5\u5c06\u6e90\u6587\u4ef6\u67d0\u4e00\u5217\u6309\u7167\u51fd\u6570\u8fdb\u884c\u8f6c\u5316\uff0c\u7136\u540e\u5c06\u8f6c\u5316\u540e\u7684\u7ed3\u679c\u5bfc\u5165\u5230table\u4e2d\u3002\u8bed\u6cd5\u4e3a `column_name` = expression\u3002\n\u4ec5\u652f\u6301Spark SQL built-in functions\uff0c\u5177\u4f53\u53ef\u53c2\u8003 https://spark.apache.org/docs/2.4.6/api/sql/index.html\u3002\n\u4e3e\u51e0\u4e2a\u4f8b\u5b50\u5e2e\u52a9\u7406\u89e3\u3002\n\u4f8b1: \u8868\u4e2d\u67093\u4e2a\u5217\u201cc1, c2, c3", \u6e90\u6587\u4ef6\u4e2d\u524d\u4e24\u5217\u4f9d\u6b21\u5bf9\u5e94(c1,c2)\uff0c\u540e\u4e24\u5217\u4e4b\u548c\u5bf9\u5e94c3\uff1b\u90a3\u4e48\u9700\u8981\u6307\u5b9a columns (c1,c2,tmp_c3,tmp_c4) SET (c3=tmp_c3+tmp_c4);\n\u4f8b2: \u8868\u4e2d\u67093\u4e2a\u5217\u201cyear, month, day"\uff0c\u6e90\u6587\u4ef6\u4e2d\u53ea\u6709\u4e00\u4e2a\u65f6\u95f4\u5217\uff0c\u4e3a\u201d2018-06-01 01:02:03\u201c\u683c\u5f0f\u3002\n\u90a3\u4e48\u53ef\u4ee5\u6307\u5b9a columns(tmp_time) set (year = year(tmp_time), month=month(tmp_time), day=day(tmp_time)) \u5b8c\u6210\u5bfc\u5165\u3002\n\nWHERE:\n\n\u5bf9\u505a\u5b8c transform \u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\uff0c\u7b26\u5408 where \u6761\u4ef6\u7684\u6570\u636e\u624d\u80fd\u88ab\u5bfc\u5165\u3002WHERE \u8bed\u53e5\u4e2d\u53ea\u53ef\u5f15\u7528\u8868\u4e2d\u5217\u540d\u3002\n'})}),"\n",(0,a.jsx)(e.p,{children:"3.resource_name"}),"\n",(0,a.jsxs)(e.p,{children:["\u6240\u4f7f\u7528\u7684 spark \u8d44\u6e90\u540d\u79f0\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(e.code,{children:"SHOW RESOURCES"})," \u547d\u4ee4\u67e5\u770b\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"4.resource_properties"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u7528\u6237\u6709\u4e34\u65f6\u6027\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u589e\u52a0\u4efb\u52a1\u4f7f\u7528\u7684\u8d44\u6e90\u800c\u4fee\u6539 Spark configs\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u8bbe\u7f6e\uff0c\u8bbe\u7f6e\u4ec5\u5bf9\u672c\u6b21\u4efb\u52a1\u751f\u6548\uff0c\u5e76\u4e0d\u5f71\u54cd StarRocks \u96c6\u7fa4\u4e2d\u5df2\u6709\u7684\u914d\u7f6e\u3002\n\u53e6\u5916\u4e0d\u540c\u7684 broker\uff0c\u4ee5\u53ca\u4e0d\u540c\u7684\u8bbf\u95ee\u65b9\u5f0f\uff0c\u9700\u8981\u63d0\u4f9b\u7684\u4fe1\u606f\u4e0d\u540c\u3002\u53ef\u4ee5\u67e5\u770b broker \u4f7f\u7528\u6587\u6863\u3002"}),"\n",(0,a.jsx)(e.p,{children:"5.opt_properties"}),"\n",(0,a.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u4e00\u4e9b\u7279\u6b8a\u53c2\u6570\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'[PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u53ef\u4ee5\u6307\u5b9a\u5982\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'timeout\uff1a         \u6307\u5b9a\u5bfc\u5165\u64cd\u4f5c\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u8d85\u65f6\u4e3a 4 \u5c0f\u65f6\u3002\u5355\u4f4d\u79d2\u3002\nmax_filter_ratio\uff1a\u6700\u5927\u5bb9\u5fcd\u53ef\u8fc7\u6ee4\uff08\u6570\u636e\u4e0d\u89c4\u8303\u7b49\u539f\u56e0\uff09\u7684\u6570\u636e\u6bd4\u4f8b\u3002\u9ed8\u8ba4\u96f6\u5bb9\u5fcd\u3002\nstrict mode\uff1a     \u662f\u5426\u5bf9\u6570\u636e\u8fdb\u884c\u4e25\u683c\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a false\u3002\ntimezone:         \u6307\u5b9a\u67d0\u4e9b\u53d7\u65f6\u533a\u5f71\u54cd\u7684\u51fd\u6570\u7684\u65f6\u533a\uff0c\u5982 strftime/alignment_timestamp/from_unixtime \u7b49\u7b49\uff0c\u5177\u4f53\u8bf7\u67e5\u9605 [\u65f6\u533a] \u6587\u6863\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528 "Asia/Shanghai" \u65f6\u533a\u3002\n'})}),"\n",(0,a.jsx)(e.p,{children:"6.\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u6837\u4f8b"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'1.\u6574\u578b\u7c7b\uff08TINYINT/SMALLINT/INT/BIGINT/LARGEINT\uff09\uff1a1, 1000, 1234\u3002\n\n2.\u6d6e\u70b9\u7c7b\uff08FLOAT/DOUBLE/DECIMAL\uff09\uff1a1.1, 0.23, .356\n\n3.\u65e5\u671f\u7c7b\uff08DATE/DATETIME\uff09\uff1a2017-10-03, 2017-06-13 12: 34: 03\u3002\uff08\u6ce8\uff1a\u5982\u679c\u662f\u5176\u4ed6\u65e5\u671f\u683c\u5f0f\uff0c\u53ef\u4ee5\u5728\u5bfc\u5165\u547d\u4ee4\u4e2d\uff0c\u4f7f\u7528 strftime \u6216\u8005 time_format \u51fd\u6570\u8fdb\u884c\u8f6c\u6362\uff09\n\n4.\u5b57\u7b26\u4e32\u7c7b\uff08CHAR/VARCHAR\uff09\uff1a"I am a student", "a"\nNULL \u503c\uff1a\\N\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(e.h3,{id:"\u4ecehdfs\u5bfc\u5165\u6570\u636e",children:"\u4eceHDFS\u5bfc\u5165\u6570\u636e"}),"\n",(0,a.jsx)(e.p,{children:"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e\uff0c\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u548c\u8fc7\u6ee4\u6bd4\u4f8b\u3002\u4f7f\u7528\u540d\u4e3a my_spark \u7684 spark \u8d44\u6e90\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file")\nINTO TABLE `my_table`\n)\nWITH RESOURCE \'my_spark\'\nPROPERTIES\n(\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5176\u4e2d hdfs_host \u4e3a namenode \u7684 host\uff0chdfs_port \u4e3a fs.defaultFS \u7aef\u53e3\uff08\u9ed8\u8ba4 9000\uff09"}),"\n",(0,a.jsx)(e.h3,{id:"\u4ecehdfs\u5bfc\u5165\u8d1f\u6570\u636e",children:'\u4eceHDFS\u5bfc\u5165"\u8d1f"\u6570\u636e'}),"\n",(0,a.jsx)(e.p,{children:'\u4ece HDFS \u5bfc\u5165\u4e00\u6279 "\u8d1f" \u6570\u636e\uff0c\u6307\u5b9a\u5206\u9694\u7b26\u4e3a\u9017\u53f7\uff0c\u4f7f\u7528\u901a\u914d\u7b26*\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u5e76\u6307\u5b9a spark \u8d44\u6e90\u7684\u4e34\u65f6\u53c2\u6570\u3002"\u8d1f" \u6570\u636e\u8be6\u7ec6\u542b\u4e49\u89c1\u4e0a\u6587\u8bed\u6cd5\u53c2\u6570\u4ecb\u7ecd\u90e8\u5206\u3002'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label3\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/*")\nNEGATIVE\nINTO TABLE `my_table`\nCOLUMNS TERMINATED BY ","\n)\nWITH RESOURCE \'my_spark\'\n(\n    "spark.executor.memory" = "3g",\n    "broker.username" = "hdfs_user",\n    "broker.password" = "hdfs_passwd"\n);\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u4ecehdfs\u5bfc\u5165\u6570\u636e\u5230\u6307\u5b9a\u5206\u533a\u5e76\u8fdb\u884c\u5217\u8f6c\u6362",children:"\u4eceHDFS\u5bfc\u5165\u6570\u636e\u5230\u6307\u5b9a\u5206\u533a\u5e76\u8fdb\u884c\u5217\u8f6c\u6362"}),"\n",(0,a.jsx)(e.p,{children:"\u4ece HDFS \u5bfc\u5165\u4e00\u6279\u6570\u636e\uff0c\u6307\u5b9a\u5206\u533a\uff0c\u5e76\u5bf9\u5bfc\u5165\u6587\u4ef6\u7684\u5217\u505a\u4e00\u4e9b\u8f6c\u5316\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:'\u8868\u7ed3\u6784\u4e3a\uff1a\nk1 varchar(20)\nk2 int\n\n\u5047\u8bbe\u6570\u636e\u6587\u4ef6\u53ea\u6709\u4e00\u884c\u6570\u636e\uff1a\n\nAdele,1,1\n\n\u6570\u636e\u6587\u4ef6\u4e2d\u5404\u5217\uff0c\u5bf9\u5e94\u5bfc\u5165\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5404\u5217\uff1a\nk1,tmp_k2,tmp_k3\n\n\u8f6c\u6362\u5982\u4e0b\uff1a\n\n1. k1: \u4e0d\u53d8\u6362\n2. k2\uff1a\u662f tmp_k2 \u548c tmp_k3 \u6570\u636e\u4e4b\u548c\n\nLOAD LABEL example_db.label6\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file")\nINTO TABLE `my_table`\nPARTITION (p1, p2)\nCOLUMNS TERMINATED BY ","\n(k1, tmp_k2, tmp_k3)\nSET (\nk2 = tmp_k2 + tmp_k3\n)\n)\nWITH RESOURCE \'my_spark\';\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5",children:"\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\uff0c\u5219\u4f1a\u6839\u636e\u8868\u4e2d\u5b9a\u4e49\u7684\u5b57\u6bb5\u7c7b\u578b\u89e3\u6790\u6587\u4ef6\u8def\u5f84\u4e2d\u7684\u5206\u533a\u5b57\u6bb5\uff08partitioned fields\uff09\uff0c\u7c7b\u4f3c Spark \u4e2d Partition Discovery \u7684\u529f\u80fd"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"LOAD LABEL example_db.label10\n(\nDATA INFILE(\"hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/dir/city=beijing/*/*\")\nINTO TABLE `my_table`\n(k1, k2, k3)\nCOLUMNS FROM PATH AS (city, utc_date)\nSET (uniq_id = md5sum(k1, city))\n)\nWITH RESOURCE 'my_spark';\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"hdfs://hdfs_host: hdfs_port/user/starRocks/data/input/dir/city = beijing"})," \u76ee\u5f55\u4e0b\u5305\u62ec\u5982\u4e0b\u6587\u4ef6\uff1a"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"[hdfs://hdfs_host: hdfs_port/user/starRocks/data/input/dir/city = beijing/utc_date = 2019-06-26/0000.csv, hdfs://hdfs_host: hdfs_port/user/starRocks/data/input/dir/city = beijing/utc_date = 2019-06-26/0001.csv, ...]"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5219\u63d0\u53d6\u6587\u4ef6\u8def\u5f84\u7684\u4e2d\u7684 ",(0,a.jsx)(e.code,{children:"city"})," \u548c ",(0,a.jsx)(e.code,{children:"utc_date"})," \u5b57\u6bb5\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4",children:"\u5bf9\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4"}),"\n",(0,a.jsx)(e.p,{children:"\u5bf9\u5f85\u5bfc\u5165\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\uff0ck1 \u503c\u5927\u4e8e 10 \u7684\u5217\u624d\u80fd\u88ab\u5bfc\u5165\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"LOAD LABEL example_db.label10\n(\nDATA INFILE(\"hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file\")\nINTO TABLE `my_table`\nWHERE k1 > 10\n)\nWITH RESOURCE 'my_spark';\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u4ece-hive-\u5916\u8868\u5bfc\u5165\u5e76\u6784\u5efa\u5168\u5c40\u5b57\u5178",children:"\u4ece Hive \u5916\u8868\u5bfc\u5165\u5e76\u6784\u5efa\u5168\u5c40\u5b57\u5178"}),"\n",(0,a.jsx)(e.p,{children:"\u4ece hive \u5916\u90e8\u8868\u5bfc\u5165\uff0c\u5e76\u5c06\u6e90\u8868\u4e2d\u7684 uuid \u5217\u901a\u8fc7\u5168\u5c40\u5b57\u5178\u8f6c\u5316\u4e3a bitmap \u7c7b\u578b\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"LOAD LABEL db1.label1\n(\nDATA FROM TABLE hive_t1\nINTO TABLE tbl1\nSET\n(\nuuid=bitmap_dict(uuid)\n)\n)\nWITH RESOURCE 'my_spark';\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(h,n)})):h(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>r});var a=s(67294);const t=a.createContext({});function r(n){const e=a.useContext(t);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||l:r(n),a.createElement(t.Provider,{value:i},e)}}}]);