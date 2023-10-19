"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44509],{79809:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var r=s(85893),a=s(11151);const l={displayed_sidebar:"Chinese"},c="\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e",d={id:"quick_start/Import_and_query",title:"\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/quick_start/Import_and_query.md",sourceDirName:"quick_start",slug:"/quick_start/Import_and_query",permalink:"/zh/docs/quick_start/Import_and_query",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/quick_start/Import_and_query.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u521b\u5efa\u8868",permalink:"/zh/docs/quick_start/Create_table"},next:{title:"\u90e8\u7f72\u603b\u89c8",permalink:"/zh/docs/deployment/deployment_overview"}},i={},t=[{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"Broker Load",id:"broker-load",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"Insert Into",id:"insert-into",level:3},{value:"\u901a\u8fc7 Stream Load \u5bfc\u5165\u6570\u636e",id:"\u901a\u8fc7-stream-load-\u5bfc\u5165\u6570\u636e",level:3},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u7b80\u5355\u67e5\u8be2",id:"\u7b80\u5355\u67e5\u8be2",level:3},{value:"\u901a\u8fc7\u6807\u51c6 SQL \u67e5\u8be2",id:"\u901a\u8fc7\u6807\u51c6-sql-\u67e5\u8be2",level:3},{value:"\u6269\u5c55\u652f\u6301",id:"\u6269\u5c55\u652f\u6301",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:3},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:3},{value:"\u5916\u90e8\u8868",id:"\u5916\u90e8\u8868",level:3},{value:"\u6162\u67e5\u8be2\u5206\u6790",id:"\u6162\u67e5\u8be2\u5206\u6790",level:2},{value:"\u901a\u8fc7\u8c03\u6574\u5e76\u884c\u5ea6\u4f18\u5316\u67e5\u8be2\u6548\u7387",id:"\u901a\u8fc7\u8c03\u6574\u5e76\u884c\u5ea6\u4f18\u5316\u67e5\u8be2\u6548\u7387",level:3},{value:"\u67e5\u770b Profile \u5e76\u5206\u6790\u67e5\u8be2\u74f6\u9888",id:"\u67e5\u770b-profile-\u5e76\u5206\u6790\u67e5\u8be2\u74f6\u9888",level:3}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",code:"code",strong:"strong",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e",children:"\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u5bfc\u5165\u548c\u67e5\u8be2\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5bfc\u5165\u6570\u636e",children:"\u5bfc\u5165\u6570\u636e"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u9700\u6c42\uff0cStarRocks \u7cfb\u7edf\u63d0\u4f9b\u4e86\u4e94\u79cd\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u4ee5\u652f\u6301\u4e0d\u540c\u7684\u6570\u636e\u6e90\u6216\u8005\u5bfc\u5165\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,r.jsxs)(n.p,{children:["Broker Load\uff08\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/loading/hdfs_load",children:"\u4ece HDFS \u5bfc\u5165"}),"\u548c",(0,r.jsx)(n.a,{href:"/zh/docs/loading/cloud_storage_load",children:"\u4ece\u4e91\u5b58\u50a8\u5bfc\u5165"}),"\uff09\u662f\u4e00\u79cd\u5f02\u6b65\u6570\u636e\u5bfc\u5165\u6a21\u5f0f\uff0c\u901a\u8fc7 Broker \u8fdb\u7a0b\u8bbf\u95ee\u5e76\u8bfb\u53d6\u5916\u90e8\u6570\u636e\u6e90\uff0c\u7136\u540e\u91c7\u7528 MySQL \u534f\u8bae\u5411 StarRocks \u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Broker Load \u6a21\u5f0f\u9002\u7528\u4e8e\u6e90\u6570\u636e\u5728 Broker \u8fdb\u7a0b\u53ef\u8bbf\u95ee\u7684\u5b58\u50a8\u7cfb\u7edf\uff08\u5982 HDFS\uff0cS3\uff09\u4e2d\u7684\u60c5\u666f\uff0c\u53ef\u4ee5\u652f\u6491\u6570\u636e\u91cf\u8fbe\u6570\u767e GB \u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u8be5\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u6e90\u6709 Apache Hive\u2122 \u7b49\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/loading/SparkLoad",children:"Spark Load"})," \u662f\u4e00\u79cd\u5f02\u6b65\u6570\u636e\u5bfc\u5165\u6a21\u5f0f\uff0c\u901a\u8fc7\u5916\u90e8\u7684 Apache Spark\u2122 \u8d44\u6e90\u5b9e\u73b0\u5bf9\u5bfc\u5165\u6570\u636e\u7684\u9884\u5904\u7406\uff0c\u63d0\u9ad8 StarRocks \u5927\u6570\u636e\u91cf\u7684\u5bfc\u5165\u6027\u80fd\u5e76\u4e14\u8282\u7701 StarRocks \u96c6\u7fa4\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Spark Load \u6a21\u5f0f\u9002\u7528\u4e8e\u521d\u6b21\u5411 StarRocks \u8fc1\u79fb\u5927\u6570\u636e\u91cf\uff08TB \u7ea7\u522b\uff09\u7684\u573a\u666f\u3002\u8be5\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u6e90\u5e94\u4f4d\u4e8e Apache Spark\u2122 \u53ef\u8bbf\u95ee\u7684\u5b58\u50a8\u7cfb\u7edf\uff08\u5982 HDFS\uff09\u4e2d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 Spark Load \u53ef\u4ee5\u57fa\u4e8e Apache Hive\u2122 \u8868\u5b9e\u73b0 ",(0,r.jsx)(n.a,{href:"/zh/docs/loading/SparkLoad",children:"\u5168\u5c40\u5b57\u5178"})," \u7684\u6570\u636e\u7ed3\u6784\uff0c\u5bf9\u8f93\u5165\u6570\u636e\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4fdd\u5b58\u539f\u59cb\u503c\u5230\u7f16\u7801\u503c\u7684\u6620\u5c04\uff0c\u4f8b\u5982\u5c06\u5b57\u7b26\u4e32\u7c7b\u578b\u6620\u5c04\u6210\u6574\u578b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/loading/StreamLoad",children:"Stream Load"})," \u662f\u4e00\u79cd\u540c\u6b65\u6570\u636e\u5bfc\u5165\u6a21\u5f0f\u3002\u7528\u6237\u901a\u8fc7 HTTP \u534f\u8bae\u53d1\u9001\u8bf7\u6c42\u5c06\u672c\u5730\u6587\u4ef6\u6216\u6570\u636e\u6d41\u5bfc\u5165\u5230 StarRocks \u4e2d\uff0c\u5e76\u7b49\u5f85\u7cfb\u7edf\u8fd4\u56de\u5bfc\u5165\u7684\u7ed3\u679c\u72b6\u6001\uff0c\u4ece\u800c\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Stream Load \u6a21\u5f0f\u9002\u7528\u4e8e\u5bfc\u5165\u672c\u5730\u6587\u4ef6\uff0c\u6216\u901a\u8fc7\u7a0b\u5e8f\u5bfc\u5165\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u3002\u8be5\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u6e90\u6709 Apache Flink\xae\u3001CSV \u6587\u4ef6\u7b49\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/loading/RoutineLoad",children:"Routine Load"}),"\uff08\u4f8b\u884c\u5bfc\u5165\uff09\u63d0\u4f9b\u4ece\u6307\u5b9a\u6570\u636e\u6e90\u8fdb\u884c\u81ea\u52a8\u6570\u636e\u5bfc\u5165\u7684\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 MySQL \u534f\u8bae\u63d0\u4ea4\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u751f\u6210\u4e00\u4e2a\u5e38\u9a7b\u7ebf\u7a0b\uff0c\u4e0d\u95f4\u65ad\u5730\u4ece\u6570\u636e\u6e90\uff08\u5982 Apache Kafka\xae\uff09\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/loading/InsertInto",children:"Insert Into"})," \u5bfc\u5165\u6a21\u5f0f\u662f\u4e00\u79cd\u540c\u6b65\u6570\u636e\u5bfc\u5165\u6a21\u5f0f\uff0c\u7c7b\u4f3c MySQL \u4e2d\u7684 Insert \u8bed\u53e5\uff0cStarRocks \u652f\u6301\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"INSERT INTO tbl SELECT ...;"})," \u7684\u65b9\u5f0f\u4ece StarRocks \u7684\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230\u53e6\u4e00\u5f20\u8868\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"INSERT INTO tbl VALUES(...);"})," \u63d2\u5165\u5355\u6761\u6570\u636e\u3002\u8be5\u5bfc\u5165\u65b9\u5f0f\u652f\u6301\u7684\u6570\u636e\u6e90\u6709 DataX/DTS\u3001Kettle/Informatic\u3001\u4ee5\u53ca StarRocks \u672c\u8eab\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/zh/docs/loading/Loading_intro",children:"\u6570\u636e\u5bfc\u5165"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7-stream-load-\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7 Stream Load \u5bfc\u5165\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 Stream Load \u5bfc\u5165\u65b9\u5f0f\u4e3a\u4f8b\uff0c\u5c06\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 ",(0,r.jsx)(n.a,{href:"/zh/docs/quick_start/Create_table",children:"\u5efa\u8868"})," \u7ae0\u8282\u4e2d\u521b\u5efa\u7684 ",(0,r.jsx)(n.code,{children:"detailDemo"})," \u8868\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u672c\u5730\u521b\u5efa\u6570\u636e\u6587\u4ef6 ",(0,r.jsx)(n.strong,{children:"detailDemo_data"}),"\uff0c\u4ee5\u9017\u53f7\u4f5c\u4e3a\u6570\u636e\u4e4b\u95f4\u7684\u5206\u9694\u7b26\uff0c\u63d2\u5165\u4e24\u6761\u6570\u636e\u3002\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"2022-03-13,1,1212,1231231231,123412341234,123452342342343324,hello,welcome,starrocks,2022-03-15 12:21:32,123.04,21.12345,123456.123456,true\n2022-03-14,2,1212,1231231231,123412341234,123452342342343324,hello,welcome,starrocks,2022-03-15 12:21:32,123.04,21.12345,123456.123456,false\n"})}),"\n",(0,r.jsxs)(n.p,{children:['\u63a5\u7740\uff0c\u4ee5 "streamDemo" \u4e3a Label\uff0c\u901a\u8fc7 curl \u547d\u4ee4\u5c01\u88c5 HTTP \u8bf7\u6c42\uff0c\u5c06\u672c\u5730\u6587\u4ef6 ',(0,r.jsx)(n.strong,{children:"detailDemo_data"})," \u5bfc\u5165 ",(0,r.jsx)(n.code,{children:"detailDemo"})," \u8868\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -T detailDemo_data -H "label: streamDemo" \\\n-H "column_separator:," \\\nhttp://127.0.0.1:8030/api/example_db/detailDemo/_stream_load\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8d26\u53f7\u6ca1\u6709\u8bbe\u7f6e\u5bc6\u7801\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u4f20\u5165 ",(0,r.jsx)(n.code,{children:"<username>:"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["HTTP \u5730\u5740\u4e2d IP \u4e3a FE \u8282\u70b9 IP\uff0c\u7aef\u53e3\u4e3a ",(0,r.jsx)(n.strong,{children:"fe.conf"})," \u4e2d\u914d\u7f6e\u7684 ",(0,r.jsx)(n.code,{children:"http port"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u5176\u67e5\u8be2\u8bed\u53e5\u57fa\u672c\u7b26\u5408 SQL-92 \u6807\u51c6\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u7b80\u5355\u67e5\u8be2",children:"\u7b80\u5355\u67e5\u8be2"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u767b\u5f55 StarRocks\uff0c\u67e5\u8be2\u8868\u4e2d\u5168\u90e8\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"use example_db;\nselect * from detailDemo;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7\u6807\u51c6-sql-\u67e5\u8be2",children:"\u901a\u8fc7\u6807\u51c6 SQL \u67e5\u8be2"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u67e5\u8be2\u7ed3\u679c\u4ee5 ",(0,r.jsx)(n.code,{children:"region_num"})," \u5b57\u6bb5\u964d\u5e8f\u6392\u5217\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select * from detailDemo order by region_num desc;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u591a\u79cd select \u7528\u6cd5\uff0c\u5305\u62ec\uff1a",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SELECT#%E8%BF%9E%E6%8E%A5-join",children:"Join"}),"\uff0c",(0,r.jsx)(n.a,{href:"/sql-reference/sql-statements/data-manipulation/SELECT.md#%E5%AD%90%E6%9F%A5%E8%AF%A2",children:"\u5b50\u67e5\u8be2"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SELECT#with",children:"With \u5b50\u53e5"})," \u7b49\uff0c\u8be6\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"\u67e5\u8be2\u7ae0\u8282"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6269\u5c55\u652f\u6301",children:"\u6269\u5c55\u652f\u6301"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u62d3\u5c55\u652f\u6301\u591a\u79cd\u51fd\u6570\u3001\u89c6\u56fe\u3001\u4ee5\u53ca\u5916\u90e8\u8868\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u4e2d\u652f\u6301\u591a\u79cd\u51fd\u6570\uff0c\u5305\u62ec\uff1a",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/date-time-functions/convert_tz",children:"\u65e5\u671f\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/spatial-functions/st_astext",children:"\u5730\u7406\u4f4d\u7f6e\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",children:"\u5b57\u7b26\u4e32\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",children:"\u805a\u5408\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and",children:"Bitmap \u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/array-functions/array_append",children:"\u6570\u7ec4\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/cast",children:"cast \u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/hash-functions/murmur_hash3_32",children:"hash \u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/crytographic-functions/md5",children:"\u52a0\u5bc6\u51fd\u6570"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/Window_function",children:"\u7a97\u53e3\u51fd\u6570"})," \u7b49\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u89c6\u56fe",children:"\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u521b\u5efa ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE_VIEW#%E5%8A%9F%E8%83%BD",children:"\u903b\u8f91\u89c6\u56fe"})," \u548c ",(0,r.jsx)(n.a,{href:"/zh/docs/using_starrocks/Materialized_view",children:"\u7269\u5316\u89c6\u56fe"}),"\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u8be6\u89c1\u5bf9\u5e94\u7ae0\u8282\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5916\u90e8\u8868",children:"\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u591a\u79cd\u5916\u90e8\u8868\uff1a",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#deprecated-mysql-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"MySQL \u5916\u90e8\u8868"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#deprecated-elasticsearch-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"Elasticsearch \u5916\u90e8\u8868"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#deprecated-hive-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"Apache Hive\u2122 \u5916\u8868"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#starrocks-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"StarRocks \u5916\u90e8\u8868"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#deprecated-iceberg-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"Apache Iceberg \u5916\u8868"}),"\uff0c",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#deprecated-hudi-%E5%A4%96%E9%83%A8%E8%A1%A8",children:"Apache Hudi \u5916\u8868"}),"\u3002\u6210\u529f\u521b\u5efa\u5916\u90e8\u8868\u540e\uff0c\u53ef\u901a\u8fc7\u67e5\u8be2\u5916\u90e8\u8868\u7684\u65b9\u5f0f\u63a5\u5165\u5176\u4ed6\u6570\u636e\u6e90\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6162\u67e5\u8be2\u5206\u6790",children:"\u6162\u67e5\u8be2\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u652f\u6301\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u5206\u6790\u67e5\u8be2\u74f6\u9888\u4ee5\u53ca\u4f18\u5316\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u901a\u8fc7\u8c03\u6574\u5e76\u884c\u5ea6\u4f18\u5316\u67e5\u8be2\u6548\u7387",children:"\u901a\u8fc7\u8c03\u6574\u5e76\u884c\u5ea6\u4f18\u5316\u67e5\u8be2\u6548\u7387"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u63a8\u8350\u60a8\u901a\u8fc7\u8bbe\u7f6e Pipeline \u6267\u884c\u5f15\u64ce\u53d8\u91cf\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u4e00\u4e2a ",(0,r.jsx)(n.a,{href:"/zh/docs/introduction/Features#mpp-%E5%88%86%E5%B8%83%E5%BC%8F%E6%89%A7%E8%A1%8C%E6%A1%86%E6%9E%B6",children:"Fragment"})," \u5b9e\u4f8b\u7684\u5e76\u884c\u6570\u91cf ",(0,r.jsx)(n.code,{children:"set  parallel_fragment_exec_instance_num = 8;"})," \u6765\u8bbe\u7f6e\u67e5\u8be2\u5e76\u884c\u5ea6\uff0c\u4ece\u800c\u63d0\u9ad8 CPU \u8d44\u6e90\u5229\u7528\u7387\u548c\u67e5\u8be2\u6548\u7387\u3002\u8be6\u7ec6\u7684\u53c2\u6570\u4ecb\u7ecd\u53ca\u8bbe\u7f6e\uff0c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/zh/docs/administration/Query_management",children:"\u67e5\u8be2\u5e76\u884c\u5ea6\u76f8\u5173\u53c2\u6570"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u770b-profile-\u5e76\u5206\u6790\u67e5\u8be2\u74f6\u9888",children:"\u67e5\u770b Profile \u5e76\u5206\u6790\u67e5\u8be2\u74f6\u9888"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u67e5\u8be2\u8ba1\u5212\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"explain costs select * from detailDemo;\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks 1.19 \u4ee5\u524d\u7248\u672c\u9700\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"explain sql"})," \u67e5\u770b\u67e5\u8be2\u8ba1\u5212\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f Profile \u4e0a\u62a5\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set enable_profile = true;\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u6b64\u65b9\u5f0f\u8bbe\u7f6e Profile \u4e0a\u62a5\u4ec5\u5728\u5f53\u524d session \u751f\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u793e\u533a\u7248\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"http://FE_IP:FE_HTTP_PORT/query"})," \u67e5\u770b\u5f53\u524d\u7684\u67e5\u8be2\u548c Profile \u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f01\u4e1a\u7248\u7528\u6237\u53ef\u4ee5\u5728 StarRocks Manager \u7684\u67e5\u8be2\u9875\u9762\u67e5\u770b\u56fe\u5f62\u5316 Profile \u5c55\u793a\uff0c\u70b9\u51fb\u67e5\u8be2\u94fe\u63a5\u53ef\u4ee5\u5728 ",(0,r.jsx)(n.strong,{children:"\u6267\u884c\u65f6\u95f4"})," \u9875\u9762\u770b\u5230\u6811\u72b6\u5c55\u793a\uff0c\u5e76\u53ef\u4ee5\u5728 ",(0,r.jsx)(n.strong,{children:"\u6267\u884c\u8be6\u60c5"})," \u9875\u9762\u770b\u5230\u5b8c\u6574\u7684 Profile \u8be6\u7ec6\u4fe1\u606f\u3002\u5982\u679c\u4ee5\u4e0a\u65b9\u6cd5\u4ecd\u8fbe\u4e0d\u5230\u9884\u671f\uff0c\u60a8\u53ef\u4ee5\u53d1\u9001\u6267\u884c\u8be6\u60c5\u9875\u9762\u7684\u6587\u672c\u5230\u793e\u533a\u6216\u8005\u6280\u672f\u652f\u6301\u7fa4\u4ee5\u5bfb\u6c42\u5e2e\u52a9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173 Plan \u548c Profile \u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/zh/docs/administration/Query_planning",children:"\u67e5\u8be2\u5206\u6790"})," \u548c ",(0,r.jsx)(n.a,{href:"/zh/docs/administration/Profiling",children:"\u6027\u80fd\u4f18\u5316"})," \u7ae0\u8282\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var r=s(67294);const a=r.createContext({});function l(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:l(e),r.createElement(a.Provider,{value:d},n)}}}]);