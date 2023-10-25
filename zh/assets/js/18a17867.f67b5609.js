"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75830],{14175:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var l=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese"},i="\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2",t={id:"quick_start/Import_and_query",title:"\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2",description:"\u672c\u5730\u6587\u4ef6\u5bfc\u5165",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.19/quick_start/Import_and_query.md",sourceDirName:"quick_start",slug:"/quick_start/Import_and_query",permalink:"/zh/docs/1.19/quick_start/Import_and_query",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/quick_start/Import_and_query.md",tags:[],version:"1.19",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u624b\u52a8\u90e8\u7f72",permalink:"/zh/docs/1.19/quick_start/Deploy"},next:{title:"\u6d4b\u8bd5\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/1.19/quick_start/Test_faq"}},c={},d=[{value:"\u672c\u5730\u6587\u4ef6\u5bfc\u5165",id:"\u672c\u5730\u6587\u4ef6\u5bfc\u5165",level:2},{value:"Broker Load",id:"broker-load",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"Stream Load",id:"stream-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"Insert Into",id:"insert-into",level:3},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u7b80\u5355\u67e5\u8be2",id:"\u7b80\u5355\u67e5\u8be2",level:3},{value:"order by\u67e5\u8be2",id:"order-by\u67e5\u8be2",level:3},{value:"\u5e26\u6709join\u7684\u67e5\u8be2",id:"\u5e26\u6709join\u7684\u67e5\u8be2",level:3},{value:"\u5e26\u6709\u5b50\u67e5\u8be2\u7684\u67e5\u8be2",id:"\u5e26\u6709\u5b50\u67e5\u8be2\u7684\u67e5\u8be2",level:3},{value:"Schema\u4fee\u6539",id:"schema\u4fee\u6539",level:2},{value:"\u4fee\u6539Schema",id:"\u4fee\u6539schema",level:3},{value:"\u521b\u5efaRollup",id:"\u521b\u5efarollup",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",img:"img",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2",children:"\u6570\u636e\u5bfc\u5165\u548c\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h2,{id:"\u672c\u5730\u6587\u4ef6\u5bfc\u5165",children:"\u672c\u5730\u6587\u4ef6\u5bfc\u5165"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u5165\u9700\u6c42\uff0cStarRocks \u7cfb\u7edf\u63d0\u4f9b\u4e865\u79cd\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u4ee5\u652f\u6301\u4e0d\u540c\u7684\u6570\u636e\u6e90\uff08\u5982HDFS\u3001Kafka\u3001\u672c\u5730\u6587\u4ef6\u7b49\uff09\uff0c\u6216\u8005\u6309\u4e0d\u540c\u7684\u65b9\u5f0f\uff08\u5f02\u6b65\u6216\u540c\u6b65\uff09\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,l.jsx)(n.p,{children:"Broker Load \u901a\u8fc7 Broker \u8fdb\u7a0b\u8bbf\u95ee\u5e76\u8bfb\u53d6\u5916\u90e8\u6570\u636e\u6e90\uff0c\u7136\u540e\u91c7\u7528 MySQL \u534f\u8bae\u5411 StarRocks \u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Broker Load\u9002\u7528\u4e8e\u6e90\u6570\u636e\u5728Broker\u8fdb\u7a0b\u53ef\u8bbf\u95ee\u7684\u5b58\u50a8\u7cfb\u7edf\uff08\u5982HDFS\uff09\u4e2d\uff0c\u6570\u636e\u91cf\u4e3a\u51e0\u5341GB\u5230\u4e0a\u767eGB\u3002\u6570\u636e\u6e90\u6709Hive\u7b49\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,l.jsx)(n.p,{children:"Spark Load \u901a\u8fc7\u5916\u90e8\u7684 Spark \u8d44\u6e90\u5b9e\u73b0\u5bf9\u5bfc\u5165\u6570\u636e\u7684\u9884\u5904\u7406\uff0c\u63d0\u9ad8 StarRocks \u5927\u6570\u636e\u91cf\u7684\u5bfc\u5165\u6027\u80fd\u5e76\u4e14\u8282\u7701 StarRocks \u96c6\u7fa4\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Spark Load\u9002\u7528\u4e8e\u521d\u6b21\u8fc1\u79fb\u5927\u6570\u636e\u91cf\uff08\u53ef\u5230TB\u7ea7\u522b\uff09\u5230StarRocks\u7684\u573a\u666f\uff0c\u4e14\u6e90\u6570\u636e\u5728Spark\u53ef\u8bbf\u95ee\u7684\u5b58\u50a8\u7cfb\u7edf\uff08\u5982HDFS\uff09\u4e2d\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,l.jsx)(n.p,{children:"Stream Load\u662f\u4e00\u79cd\u540c\u6b65\u6267\u884c\u7684\u5bfc\u5165\u65b9\u5f0f\u3002\u7528\u6237\u901a\u8fc7 HTTP \u534f\u8bae\u53d1\u9001\u8bf7\u6c42\u5c06\u672c\u5730\u6587\u4ef6\u6216\u6570\u636e\u6d41\u5bfc\u5165\u5230 StarRocks\u4e2d\uff0c\u5e76\u7b49\u5f85\u7cfb\u7edf\u8fd4\u56de\u5bfc\u5165\u7684\u7ed3\u679c\u72b6\u6001\uff0c\u4ece\u800c\u5224\u65ad\u5bfc\u5165\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"Stream Load\u9002\u7528\u4e8e\u5bfc\u5165\u672c\u5730\u6587\u4ef6\uff0c\u6216\u901a\u8fc7\u7a0b\u5e8f\u5bfc\u5165\u6570\u636e\u6d41\u4e2d\u7684\u6570\u636e\u3002\u6570\u636e\u6e90\u6709Flink\u3001CSV\u7b49\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,l.jsx)(n.p,{children:"Routine Load\uff08\u4f8b\u884c\u5bfc\u5165\uff09\u63d0\u4f9b\u4e86\u4e00\u79cd\u81ea\u52a8\u4ece\u6307\u5b9a\u6570\u636e\u6e90\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u7684\u529f\u80fd\u3002\u7528\u6237\u901a\u8fc7 MySQL \u534f\u8bae\u63d0\u4ea4\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u751f\u6210\u4e00\u4e2a\u5e38\u9a7b\u7ebf\u7a0b\uff0c\u4e0d\u95f4\u65ad\u7684\u4ece\u6570\u636e\u6e90\uff08\u5982 Kafka\uff09\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,l.jsx)(n.p,{children:"\u7c7b\u4f3c MySQL \u4e2d\u7684 Insert \u8bed\u53e5\uff0cStarRocks \u63d0\u4f9b INSERT INTO tbl SELECT ...; \u7684\u65b9\u5f0f\u4ece StarRocks \u7684\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u5bfc\u5165\u5230\u53e6\u4e00\u5f20\u8868\u3002\u6216\u8005\u901a\u8fc7 INSERT INTO tbl VALUES(...); \u63d2\u5165\u5355\u6761\u6570\u636e\u3002\u6570\u636e\u6e90\u6709DataX/DTS\u3001Kettle/Informatic\u3001StarRocks\u672c\u8eab\u3002"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"StarRocks\u6570\u636e\u5bfc\u5165\u6574\u4f53\u751f\u6001\u56fe\u5982\u4e0b\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"starrocks_ecology",src:s(7183).Z+"",width:"2471",height:"1219"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.p,{children:["\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.jsx)(n.a,{href:"../loading/Loading_intro.md",children:"\u6570\u636e\u5bfc\u5165"}),"\u3002\u8fd9\u91cc\u4e3a\u4e86\u5c3d\u5feb\u5bfc\u5165\u6d4b\u8bd5\u6570\u636e\uff0c\u6211\u4eec\u53ea\u4ecb\u7ecd\u5229\u7528HTTP\u534f\u8bae\u7684Stream load\u65b9\u5f0f\u5bfc\u5165\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u793a\u4f8b1"}),'\uff1a\u4ee5 "table1_20170707"\u4e3aLabel\uff0c\u4f7f\u7528\u672c\u5730\u6587\u4ef6table1_data\u5bfc\u5165table1\u8868\u3002']}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u672c\u5730\u521b\u5efa\u6570\u636e\u6587\u4ef6able1_data\uff0c\u4ee5\u9017\u53f7\u4f5c\u4e3a\u6570\u636e\u4e4b\u95f4\u7684\u5206\u9694\u7b26\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"1,1,jim,2\n2,1,grace,2\n3,2,tom,2\n4,3,bush,3\n5,3,helen,3\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5229\u7528curl\u547d\u4ee4\u5c01\u88c5HTTP\u8bf7\u6c42\uff0c\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u test:123456 -T table1_data -H "label: table1_20170707" \\\n    -H "column_separator:," \\\n    http://127.0.0.1:8030/api/example_db/table1/_stream_load\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u8fd9\u91cctest\u662ffe\u7684\u7528\u6237\u540d\uff0c\u7aef\u53e38030\u662ffe.conf\u4e2d\u914d\u7f6e\u7684http port\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u793a\u4f8b2"}),': \u4ee5"table2_20170707"\u4e3aLabel\uff0c\u4f7f\u7528\u672c\u5730\u6587\u4ef6table2_data\u5bfc\u5165table2\u8868\u3002']}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u672c\u5730\u521b\u5efa\u6570\u636e\u6587\u4ef6table2_data\uff0c\u4ee5\u9017\u53f7\u4f5c\u4e3a\u6570\u636e\u4e4b\u95f4\u7684\u5206\u9694\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"2017-07-03,1,1,jim,2\n2017-07-05,2,1,grace,2\n2017-07-12,3,2,tom,2\n2017-07-15,4,3,bush,3\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5229\u7528curl\u547d\u4ee4\u5c01\u88c5HTTP\u8bf7\u6c42\uff0c\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u test:123456 -T table2_data -H "label:table2_20170707" \\\n    -H "column_separator:," \\\n    http://127.0.0.1:8030/api/example_db/table2/_stream_load\n'})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,l.jsx)(n.h3,{id:"\u7b80\u5355\u67e5\u8be2",children:"\u7b80\u5355\u67e5\u8be2"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from table1;\n\n+--------+----------+----------+----+\n| siteid | citycode | username | pv |\n+--------+----------+----------+----+\n| \xa0 \xa0 \xa05 | \xa0 \xa0 \xa0 \xa03 | helen \xa0  | \xa03 |\n| \xa0 \xa0 \xa02 | \xa0 \xa0 \xa0 \xa01 | grace \xa0  | \xa02 |\n| \xa0 \xa0 \xa01 | \xa0 \xa0 \xa0 \xa01 | jim \xa0 \xa0  | \xa02 |\n| \xa0 \xa0 \xa04 | \xa0 \xa0 \xa0 \xa03 | bush \xa0   | \xa03 |\n| \xa0 \xa0 \xa03 | \xa0 \xa0 \xa0 \xa02 | tom \xa0 \xa0  | \xa02 |\n+--------+----------+----------+----+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"order-by\u67e5\u8be2",children:"order by\u67e5\u8be2"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from table1 order by citycode;\n\n+--------+----------+----------+----+\n| siteid | citycode | username | pv |\n+--------+----------+----------+----+\n| \xa0 \xa0 \xa02 | \xa0 \xa0 \xa0 \xa01 | grace \xa0  | \xa02 |\n| \xa0 \xa0 \xa01 | \xa0 \xa0 \xa0 \xa01 | jim \xa0 \xa0  | \xa02 |\n| \xa0 \xa0 \xa03 | \xa0 \xa0 \xa0 \xa02 | tom \xa0 \xa0  | \xa02 |\n| \xa0 \xa0 \xa04 | \xa0 \xa0 \xa0 \xa03 | bush \xa0   | \xa03 |\n| \xa0 \xa0 \xa05 | \xa0 \xa0 \xa0 \xa03 | helen \xa0  | \xa03 |\n+--------+----------+----------+----+\n5 rows in set (0.07 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5e26\u6709join\u7684\u67e5\u8be2",children:"\u5e26\u6709join\u7684\u67e5\u8be2"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = table2.siteid;\n\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n| 12                 |\n+--------------------+\n1 row in set (0.20 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5e26\u6709\u5b50\u67e5\u8be2\u7684\u67e5\u8be2",children:"\u5e26\u6709\u5b50\u67e5\u8be2\u7684\u67e5\u8be2"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sum(pv) from table2 where siteid in (select siteid from table1 where siteid > 2);\n\n+-----------+\n| sum(`pv`) |\n+-----------+\n| 8         |\n+-----------+\n1 row in set (0.13 sec)\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u5728StarRocksManager\u7684\u7f16\u8f91\u5668\u4e2d\u6267\u884c\u67e5\u8be2\u8bed\u53e5\uff0c\u53ef\u4ee5\u67e5\u770bProfile\uff0cProfile\u662fBE\u6267\u884c\u540e\u7684\u7ed3\u679c\uff0c\u5305\u542b\u4e86\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u7684\u8017\u65f6\u548c\u6570\u636e\u5904\u7406\u91cf\u7b49\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7StarRocksManager\u7684\u56fe\u5f62\u754c\u9762\u770b\u5230\u53ef\u89c6\u5316\u7684Profile\u6267\u884c\u6811\u3002\u5728StarRocksManager\u4e2d\u6267\u884c\u67e5\u8be2\uff0c\u70b9\u51fb\u67e5\u8be2\u5386\u53f2\uff0c\u5c31\u53ef\u770b\u5728\u201c\u6267\u884c\u8be6\u60c5\u201dtab\u4e2d\u770b\u5230Profile\u7684\u8be6\u7ec6\u6587\u672c\u4fe1\u606f\uff0c\u5728\u201c\u6267\u884c\u65f6\u95f4\u201dtab\u4e2d\u80fd\u770b\u5230\u56fe\u5f62\u5316\u7684\u5c55\u793a\u3002\u8be6\u60c5\u89c1",(0,l.jsx)(n.a,{href:"../administration/Query_planning.md",children:"\u67e5\u8be2\u5206\u6790"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"schema\u4fee\u6539",children:"Schema\u4fee\u6539"}),"\n",(0,l.jsx)(n.h3,{id:"\u4fee\u6539schema",children:"\u4fee\u6539Schema"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528ALTER TABLE\u547d\u4ee4\u53ef\u4ee5\u4fee\u6539\u8868\u7684Schema\uff0c\u5305\u62ec\u5982\u4e0b\u4fee\u6539\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u589e\u52a0\u5217"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5220\u9664\u5217"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u5217\u7c7b\u578b"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6539\u53d8\u5217\u987a\u5e8f"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3e\u4f8b\u8bf4\u660e\u3002"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u539f\u8868table1\u7684Schema\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"+----------+-------------+------+-------+---------+-------+\n| Field \xa0 \xa0| Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid \xa0 | int(11)     | Yes \xa0| true \xa0| 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| citycode | smallint(6) | Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| username | varchar(32) | Yes \xa0| true \xa0| \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| pv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM   |\n+----------+-------------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u65b0\u589e\u4e00\u5217uv\uff0c\u7c7b\u578b\u4e3aBIGINT\uff0c\u805a\u5408\u7c7b\u578b\u4e3aSUM\uff0c\u9ed8\u8ba4\u503c\u4e3a0:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN\\G\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u4f5c\u4e1a\u72b6\u6001\u4e3aFINISHED\uff0c\u5219\u8868\u793a\u4f5c\u4e1a\u5b8c\u6210\u3002\u65b0\u7684Schema \u5df2\u751f\u6548\u3002"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"ALTER TABLE\u5b8c\u6210\u4e4b\u540e, \u53ef\u4ee5\u901a\u8fc7desc table\u67e5\u770b\u6700\u65b0\u7684schema\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> desc table1;\n\n+----------+-------------+------+-------+---------+-------+\n| Field \xa0 \xa0| Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid \xa0 | int(11)     | Yes \xa0| true \xa0| 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| citycode | smallint(6) | Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| username | varchar(32) | Yes \xa0| true \xa0| \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| pv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM   |\n| uv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4f5c\u4e1a:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CANCEL ALTER TABLE COLUMN FROM table1\\G\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efarollup",children:"\u521b\u5efaRollup"}),"\n",(0,l.jsxs)(n.p,{children:["Rollup\u662fStarRocks\u4f7f\u7528\u7684\u4e00\u79cd\u65b0\u578b\u9884\u8ba1\u7b97\u52a0\u901f\u6280\u672f\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u57fa\u4e8e\u57fa\u7840\u8868\u6784\u5efa\u7684\u4e00\u4e2a\u7269\u5316\u7d22\u5f15\u7ed3\u6784\u3002",(0,l.jsx)(n.strong,{children:"\u7269\u5316"}),"\u662f\u56e0\u4e3a\u5176\u6570\u636e\u5728\u7269\u7406\u4e0a\u72ec\u7acb\u5b58\u50a8\uff0c\u800c",(0,l.jsx)(n.strong,{children:"\u7d22\u5f15"}),"\u7684\u610f\u601d\u662f\uff0cRollup\u53ef\u4ee5\u8c03\u6574\u5217\u987a\u5e8f\u4ee5\u589e\u52a0\u524d\u7f00\u7d22\u5f15\u7684\u547d\u4e2d\u7387\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11key\u5217\u4ee5\u589e\u52a0\u6570\u636e\u7684\u805a\u5408\u5ea6\u3002\u8fd9\u91cc\u4ec5\u7b80\u5355\u4e3e\u4f8b\u4ecb\u7ecd\uff0c\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u8bf7\u53c2\u8003\u76f8\u5173\u7ae0\u8282\u3002"]}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u539f\u8868table1\u7684Schema\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"+----------+-------------+------+-------+---------+-------+\n| Field \xa0 \xa0| Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid \xa0 | int(11)     | Yes \xa0| true \xa0| 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| citycode | smallint(6) | Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| username | varchar(32) | Yes \xa0| true \xa0| \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| pv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM   |\n| uv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM   |\n+----------+-------------+------+-------+---------+-------+\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e8etable1\u660e\u7ec6\u6570\u636e\u662fsiteid, citycode, username\u4e09\u8005\u6784\u6210\u4e00\u4e2akey\uff0c\u4ece\u800c\u5bf9pv\u5b57\u6bb5\u8fdb\u884c\u805a\u5408\uff1b\u5982\u679c\u4e1a\u52a1\u65b9\u7ecf\u5e38\u6709\u770b\u57ce\u5e02pv\u603b\u91cf\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u53ea\u6709citycode, pv\u7684rollup\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE ROLLUP\\G\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u4f5c\u4e1a\u72b6\u6001\u4e3a FINISHED\uff0c\u5219\u8868\u793a\u4f5c\u4e1a\u5b8c\u6210\u3002"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"Rollup\u5efa\u7acb\u5b8c\u6210\u4e4b\u540e\u53ef\u4ee5\u4f7f\u7528desc table1 all\u67e5\u770b\u8868\u7684rollup\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> desc table1 all;\n\n+-------------+----------+-------------+------+-------+---------+-------+\n| IndexName \xa0 | Field    | Type \xa0 \xa0 \xa0 \xa0| Null | Key \xa0 | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1 \xa0 \xa0 \xa0| siteid   | int(11) \xa0 \xa0 | Yes  | true  | 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | citycode | smallint(6) | Yes  | true  | N/A     | \xa0 \xa0 \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | username | varchar(32) | Yes  | true  | \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | pv       | bigint(20) \xa0| Yes  | false | 0 \xa0 \xa0 \xa0 | SUM \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | uv       | bigint(20) \xa0| Yes  | false | 0 \xa0 \xa0 \xa0 | SUM \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| rollup_city | citycode | smallint(6) | Yes  | true  | N/A     | \xa0 \xa0 \xa0 |\n| \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 | pv       | bigint(20) \xa0| Yes  | false | 0 \xa0 \xa0 \xa0 | SUM \xa0 |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n"})}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4f5c\u4e1a:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CANCEL ALTER TABLE ROLLUP FROM table1;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},7183:(e,n,s)=>{s.d(n,{Z:()=>l});const l=s.p+"assets/images/screenshot_1615530614737-aa681789287a731f1df67b61eff9c313.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>a});var l=s(67294);const r=l.createContext({});function a(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||i:a(e),l.createElement(r.Provider,{value:t},n)}}}]);