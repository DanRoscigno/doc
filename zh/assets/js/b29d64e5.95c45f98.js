"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72947],{12796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var l=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese31"},r="\u7ba1\u7406\u526f\u672c",d={id:"administration/Replica",title:"\u7ba1\u7406\u526f\u672c",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406 StarRocks \u4e2d\u7684\u6570\u636e\u526f\u672c (replica)\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Replica.md",sourceDirName:"administration",slug:"/administration/Replica",permalink:"/doc/zh/docs/administration/Replica",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Replica.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/doc/zh/docs/administration/Load_balance"},next:{title:"\u7ba1\u7406\u9ed1\u540d\u5355",permalink:"/doc/zh/docs/administration/Blacklist"}},a={},t=[{value:"\u4fee\u590d\u526f\u672c",id:"\u4fee\u590d\u526f\u672c",level:2},{value:"\u67e5\u770b\u526f\u672c\u72b6\u6001",id:"\u67e5\u770b\u526f\u672c\u72b6\u6001",level:3},{value:"\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7",id:"\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7",level:3},{value:"\u5747\u8861\u526f\u672c",id:"\u5747\u8861\u526f\u672c",level:2},{value:"BE \u8282\u70b9\u8d1f\u8f7d",id:"be-\u8282\u70b9\u8d1f\u8f7d",level:3},{value:"\u5747\u8861\u7b56\u7565",id:"\u5747\u8861\u7b56\u7565",level:3},{value:"\u67e5\u770b\u526f\u672c\u8c03\u5ea6\u4efb\u52a1",id:"\u67e5\u770b\u526f\u672c\u8c03\u5ea6\u4efb\u52a1",level:3},{value:"\u8d44\u6e90\u63a7\u5236",id:"\u8d44\u6e90\u63a7\u5236",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",ol:"ol",pre:"pre",code:"code",a:"a"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u7ba1\u7406\u526f\u672c",children:"\u7ba1\u7406\u526f\u672c"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406 StarRocks \u4e2d\u7684\u6570\u636e\u526f\u672c (replica)\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4fdd\u8bc1\u5143\u6570\u636e\u4e00\u81f4\uff0c\u60a8\u9700\u8981\u5728 Leader FE \u8282\u70b9\u8fdb\u884c\u526f\u672c\u7ba1\u7406\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4fee\u590d\u526f\u672c",children:"\u4fee\u590d\u526f\u672c"}),"\n",(0,l.jsx)(n.p,{children:"TabletChecker \u4f5c\u4e3a\u5e38\u9a7b\u7684\u540e\u53f0\u8fdb\u7a0b\uff0c\u4f1a\u5b9a\u671f\u68c0\u67e5\u6240\u6709\u5206\u7247\u7684\u72b6\u6001\u3002\u5bf9\u4e8e\u975e\u5065\u5eb7\u72b6\u6001\u7684\u5206\u7247\uff0c\u5c06\u4f1a\u4ea4\u7ed9 TabletScheduler \u8fdb\u884c\u8c03\u5ea6\u548c\u4fee\u590d\u3002\u4fee\u590d\u7684\u5b9e\u9645\u64cd\u4f5c\uff0c\u90fd\u7531 BE \u8282\u70b9\u4e0a\u7684 Clone \u4efb\u52a1\u5b8c\u6210\u3002FE \u8282\u70b9\u53ea\u8d1f\u8d23\u751f\u6210\u8fd9\u4e9b Clone \u4efb\u52a1\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u526f\u672c\u4fee\u590d\u7684\u4e3b\u8981\u601d\u60f3\u662f\u5148\u901a\u8fc7\u521b\u5efa\u6216\u8865\u9f50\u4f7f\u5f97\u5206\u7247\u7684\u526f\u672c\u6570\u8fbe\u5230\u671f\u671b\u503c\uff0c\u7136\u540e\u518d\u5220\u9664\u591a\u4f59\u7684\u526f\u672c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4e00\u4e2a Clone \u4efb\u52a1\u5c31\u662f\u5b8c\u6210\u4ece\u4e00\u4e2a\u6307\u5b9a\u8fdc\u7aef BE \u62f7\u8d1d\u6307\u5b9a\u6570\u636e\u5230\u6307\u5b9a\u76ee\u7684\u7aef BE \u7684\u8fc7\u7a0b\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u526f\u672c\u72b6\u6001",children:"\u67e5\u770b\u526f\u672c\u72b6\u6001"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u67e5\u770b\u526f\u672c\u7684\u5065\u5eb7\u72b6\u6001\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u68c0\u67e5\u96c6\u7fa4\u4e2d\u6240\u6709\u526f\u672c\u7684\u72b6\u6001\u3002"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/statistic';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------+-----------------------------+----------+--------------+----------+-----------+------------+--------------------+-----------------------+\n| DbId     | DbName                      | TableNum | PartitionNum | IndexNum | TabletNum | ReplicaNum | UnhealthyTabletNum | InconsistentTabletNum |\n+----------+-----------------------------+----------+--------------+----------+-----------+------------+--------------------+-----------------------+\n| 35153636 | default_cluster:DF_Newrisk  | 3        | 3            | 3        | 96        | 288        | 0                  | 0                     |\n| 48297972 | default_cluster:PaperData   | 0        | 0            | 0        | 0         | 0          | 0                  | 0                     |\n| 5909381  | default_cluster:UM_TEST     | 7        | 7            | 10       | 320       | 960        | 1                  | 0                     |\n| Total    | 240                         | 10       | 10           | 13       | 416       | 1248       | 1                  | 0                     |\n+----------+-----------------------------+----------+--------------+----------+-----------+------------+--------------------+-----------------------+\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"UnhealthyTabletNum"})," \u5217\u663e\u793a\u4e86\u5bf9\u5e94\u7684 Database \u4e2d\uff0c\u6709\u591a\u5c11 Tablet \u5904\u4e8e\u975e\u5065\u5eb7\u72b6\u6001\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"InconsistentTabletNum"})," \u5217\u663e\u793a\u4e86\u5bf9\u5e94\u7684 Database \u4e2d\uff0c\u6709\u591a\u5c11 Tablet \u5904\u4e8e\u526f\u672c\u4e0d\u4e00\u81f4\u7684\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Total"})," \u884c\u5bf9\u6574\u4e2a\u96c6\u7fa4\u8fdb\u884c\u4e86\u7edf\u8ba1\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b ",(0,l.jsx)(n.code,{children:"UnhealthyTabletNum"})," \u548c ",(0,l.jsx)(n.code,{children:"InconsistentTabletNum"})," \u5e94\u4e3a 0\u3002\u5982\u679c\u4e0d\u4e3a\u96f6\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u770b\u5177\u4f53\u6709\u54ea\u4e9b Tablet\u3002\u5982\u4e0a\u56fe\u4e2d\uff0cUM_TEST \u6570\u636e\u5e93\u6709 1 \u4e2a Tablet \u72b6\u6001\u4e0d\u5065\u5eb7\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u67e5\u8be2\u72b6\u6001\u4e0d\u5065\u5eb7\u7684 Tablet\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/statistic/DbId';\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"DbId"})," \u4e3a\u6570\u636e\u5e93\u6240\u5bf9\u5e94\u7684 ID\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+------------------+---------------------+\n| UnhealthyTablets | InconsistentTablets |\n+------------------+---------------------+\n| [40467980]       | []                  |\n+------------------+---------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u8fd4\u56de\u72b6\u6001\u4e0d\u5065\u5eb7\u7684 Tablet ID \u4e3a 40467980\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u68c0\u67e5\u8868\u6216\u5206\u533a\u4e2d\u7684\u526f\u672c\u72b6\u6001\u3002"}),"\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u72b6\u6001\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7 WHERE \u8bed\u53e5\u5bf9\u72b6\u6001\u8fdb\u884c\u8fc7\u6ee4\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM tbl PARTITION (p1, p2, ...) WHERE STATUS = "STATUS";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:'mysql> ADMIN SHOW REPLICA STATUS FROM tbl PARTITION (p1, p2) WHERE STATUS = "NORMAL";\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+--------+--------+\n| TabletId | ReplicaId | BackendId | Version | LastFailedVersion | LastSuccessVersion | CommittedVersion | SchemaHash | VersionNum | IsBad | State  | Status |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+--------+--------+\n| 29502429 | 29502432  | 10006     | 2       | -1                | 2                  | 1                | -1         | 2          | false | NORMAL | OK     |\n| 29502429 | 36885996  | 10002     | 2       | -1                | -1                 | 1                | -1         | 2          | false | NORMAL | OK     |\n| 29502429 | 48100551  | 10007     | 2       | -1                | -1                 | 1                | -1         | 2          | false | NORMAL | OK     |\n| 29502433 | 29502434  | 10001     | 2       | -1                | 2                  | 1                | -1         | 2          | false | NORMAL | OK     |\n| 29502433 | 44900737  | 10004     | 2       | -1                | -1                 | 1                | -1         | 2          | false | NORMAL | OK     |\n| 29502433 | 48369135  | 10006     | 2       | -1                | -1                 | 1                | -1         | 2          | false | NORMAL | OK     |\n+----------+-----------+-----------+---------+-------------------+--------------------+------------------+------------+------------+-------+--------+--------+\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7ed3\u679c\u5c55\u793a\u6240\u6709\u526f\u672c\u7684\u72b6\u6001\u3002\u5176\u4e2d ",(0,l.jsx)(n.code,{children:"IsBad"})," \u5217\u4e3a ",(0,l.jsx)(n.code,{children:"true"})," \u5219\u8868\u793a\u526f\u672c\u5df2\u7ecf\u635f\u574f\u3002\u800c ",(0,l.jsx)(n.code,{children:"Status"})," \u5217\u5219\u4f1a\u663e\u793a\u53e6\u5916\u7684\u5176\u4ed6\u72b6\u6001\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"../sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",children:"ADMIN SHOW REPLICA STATUS"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6307\u5b9a\u8868\u4e2d\u526f\u672c\u7684\u4e00\u4e9b\u989d\u5916\u4fe1\u606f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET FROM tbl1;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+----------------------+--------------+----------------------+----------------------+----------------------+\n| TabletId | ReplicaId | BackendId | SchemaHash | Version | VersionHash | LstSuccessVersion | LstSuccessVersionHash | LstFailedVersion | LstFailedVersionHash | LstFailedTime | DataSize | RowCount | State  | LstConsistencyCheckTime | CheckVersion |     CheckVersionHash | VersionCount | PathHash             | MetaUrl              | CompactionStatus     |\n+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+----------------------+--------------+----------------------+----------------------+----------------------+\n| 29502429 | 29502432  | 10006     | 1421156361 | 2       | 0           | 2                 | 0                     | -1               | 0                    | N/A           | 784      | 0        | NORMAL | N/A                     | -1           |     -1               | 2            | -5822326203532286804 | url                  | url                  |\n| 29502429 | 36885996  | 10002     | 1421156361 | 2       | 0           | -1                | 0                     | -1               | 0                    | N/A           | 784      | 0        | NORMAL | N/A                     | -1           |     -1               | 2            | -1441285706148429853 | url                  | url                  |\n| 29502429 | 48100551  | 10007     | 1421156361 | 2       | 0           | -1                | 0                     | -1               | 0                    | N/A           | 784      | 0        | NORMAL | N/A                     | -1           |     -1               | 2            | -4784691547051455525 | url                  | url                  |\n+----------+-----------+-----------+------------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+----------+----------+--------+-------------------------+--------------+----------------------+--------------+----------------------+----------------------+----------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u679c\u5c55\u793a\u4e86\u5305\u62ec\u526f\u672c\u5927\u5c0f\u3001\u884c\u6570\u3001\u7248\u672c\u6570\u91cf\u3001\u6240\u5728\u6570\u636e\u8def\u5f84\u7b49\u4e00\u4e9b\u989d\u5916\u7684\u4fe1\u606f\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8fd9\u91cc\u663e\u793a\u7684 ",(0,l.jsx)(n.code,{children:"State"})," \u5217\u7684\u5185\u5bb9\u4e0d\u4ee3\u8868\u526f\u672c\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u800c\u662f\u526f\u672c\u5904\u4e8e\u67d0\u79cd\u4efb\u52a1\u4e0b\u7684\u72b6\u6001\uff0c\u6bd4\u5982 CLONE\u3001SCHEMA_CHANGE\u3001ROLLUP \u7b49\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u5206\u5e03\u60c5\u51b5\uff0c\u6765\u68c0\u67e5\u526f\u672c\u5206\u5e03\u662f\u5426\u5747\u5300\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM tbl1;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-----------+------------+-------+---------+\n| BackendId | ReplicaNum | Graph | Percent |\n+-----------+------------+-------+---------+\n| 10000     | 7          |       | 7.29 %  |\n| 10001     | 9          |       | 9.38 %  |\n| 10002     | 7          |       | 7.29 %  |\n| 10003     | 7          |       | 7.29 %  |\n| 10004     | 9          |       | 9.38 %  |\n| 10005     | 11         | >     | 11.46 % |\n| 10006     | 18         | >     | 18.75 % |\n| 10007     | 15         | >     | 15.62 % |\n| 10008     | 13         | >     | 13.54 % |\n+-----------+------------+-------+---------+\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u7ed3\u679c\u5c55\u793a\u4e86\u8868 ",(0,l.jsx)(n.code,{children:"tbl1"})," \u7684\u526f\u672c\u5728\u5404\u4e2a BE \u8282\u70b9\u4e0a\u7684\u4e2a\u6570\u3001\u767e\u5206\u6bd4\uff0c\u4ee5\u53ca\u4e00\u4e2a\u7b80\u5355\u7684\u56fe\u5f62\u5316\u663e\u793a\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u68c0\u67e5 Tablet \u4e2d\u7684\u526f\u672c\u72b6\u6001\u3002"}),"\n\u5f53\u5b9a\u4f4d\u81f3\u5177\u4f53\u7684 Tablet \u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u7279\u5b9a Tablet \u7684\u72b6\u6001\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET tablet_id;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SHOW TABLET 29502553;\n+------------------------+-----------+---------------+-----------+----------+----------+-------------+----------+--------+---------------------------------------------------------------------------+\n| DbName                 | TableName | PartitionName | IndexName | DbId     | TableId  | PartitionId | IndexId  | IsSync | DetailCmd                                                                 |\n+------------------------+-----------+---------------+-----------+----------+----------+-------------+----------+--------+---------------------------------------------------------------------------+\n| default_cluster:test   | test      | test          | test      | 29502391 | 29502428 | 29502427    | 29502428 | true   | SHOW PROC '/dbs/29502391/29502428/partitions/29502427/29502428/29502553'; |\n+------------------------+-----------+---------------+-----------+----------+----------+-------------+----------+--------+---------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u679c\u5c55\u793a\u4e86\u5f53\u524d Tablet \u6240\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u3001\u8868\u3001\u5206\u533a\u3001\u4e0a\u5377\u8868\u7b49\u4fe1\u606f\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u590d\u5236\u5e76\u6267\u884c ",(0,l.jsx)(n.code,{children:"DetailCmd"})," \u5217\u4e2d\u7684\u547d\u4ee4\u4ee5\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> SHOW PROC '/dbs/29502391/29502428/partitions/29502427/29502428/29502553';\n+-----------+-----------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+------------+----------+----------+--------+-------+--------------+----------------------+----------+------------------+\n| ReplicaId | BackendId | Version | VersionHash | LstSuccessVersion | LstSuccessVersionHash | LstFailedVersion | LstFailedVersionHash | LstFailedTime | SchemaHash | DataSize | RowCount | State  | IsBad | VersionCount | PathHash             | MetaUrl  | CompactionStatus |\n+-----------+-----------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+------------+----------+----------+--------+-------+--------------+----------------------+----------+------------------+\n| 43734060  | 10004     | 2       | 0           | -1                | 0                     | -1               | 0                    | N/A           | -1         | 784      | 0        | NORMAL | false | 2            | -8566523878520798656 | url      | url              |\n| 29502555  | 10002     | 2       | 0           | 2                 | 0                     | -1               | 0                    | N/A           | -1         | 784      | 0        | NORMAL | false | 2            | 1885826196444191611  | url      | url              |\n| 39279319  | 10007     | 2       | 0           | -1                | 0                     | -1               | 0                    | N/A           | -1         | 784      | 0        | NORMAL | false | 2            | 1656508631294397870  | url      | url              |\n+-----------+-----------+---------+-------------+-------------------+-----------------------+------------------+----------------------+---------------+------------+----------+----------+--------+-------+--------------+----------------------+----------+------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u679c\u5c55\u793a\u4e86\u5bf9\u5e94 Tablet \u7684\u6240\u6709\u526f\u672c\u60c5\u51b5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7",children:"\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7"}),"\n",(0,l.jsx)(n.p,{children:"TabletScheduler \u91cc\u7b49\u5f85\u88ab\u8c03\u5ea6\u7684\u5206\u7247\u4f1a\u6839\u636e\u72b6\u6001\u4e0d\u540c\uff0c\u88ab\u8d4b\u4e88\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5224\u65ad\u5e76\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7\u3002\u4f46\u5982\u679c\u60a8\u5e0c\u671b\u67d0\u4e9b\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u80fd\u591f\u66f4\u5feb\u7684\u88ab\u4fee\u590d\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8c03\u5ea6\u526f\u672c\u4f18\u5148\u7ea7\uff0c\u5bf9\u9700\u8981\u4f18\u5148\u4fee\u590d\u7684\u8868\u6216\u5206\u533a\u4e2d\u7684\u6709\u95ee\u9898\u7684 Tablet\uff0c\u7ed9\u4e88 VERY_HIGH \u7684\u4f18\u5148\u7ea7\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl [PARTITION (p1, p2, ...)];\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6b64\u547d\u4ee4\u53ea\u662f\u4e00\u4e2a Hint\uff0c\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u4e00\u5b9a\u80fd\u4fee\u590d\u6210\u529f\uff0c\u4e14\u526f\u672c\u7684\u4f18\u5148\u7ea7\u4ecd\u4f1a\u968f TabletScheduler \u7684\u8c03\u5ea6\u800c\u53d1\u751f\u53d8\u5316\u3002\u5f53 Leader FE \u8282\u70b9\u5207\u6362\u6216\u91cd\u542f\u540e\uff0c\u8be5\u547d\u4ee4\u6240\u5305\u542b\u7684\u4fe1\u606f\u4f1a\u4e22\u5931\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53d6\u6d88\u4f18\u5148\u7ea7\u8c03\u5ea6\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ADMIN CANCEL REPAIR TABLE tbl [PARTITION (p1, p2, ...)];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5747\u8861\u526f\u672c",children:"\u5747\u8861\u526f\u672c"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u4f1a\u81ea\u52a8\u8fdb\u884c\u96c6\u7fa4\u5185\u7684\u526f\u672c\u5747\u8861\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5747\u8861\u7684\u4e3b\u8981\u601d\u60f3\uff0c\u5bf9\u4e8e\u67d0\u4e9b\u5206\u7247\uff0c\u9996\u5148\u5728\u4f4e\u8d1f\u8f7d\u7684\u8282\u70b9\u4e0a\u521b\u5efa\u4e00\u4e2a\u526f\u672c\uff0c\u7136\u540e\u518d\u5220\u9664\u8fd9\u4e9b\u5206\u7247\u5728\u9ad8\u8d1f\u8f7d\u8282\u70b9\u4e0a\u7684\u526f\u672c\u3002\u540c\u65f6\uff0c\u56e0\u4e3a\u4e0d\u540c\u5b58\u50a8\u4ecb\u8d28\u7684\u5b58\u5728\uff0c\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u5185\u7684\u4e0d\u540c BE \u8282\u70b9\u4e0a\uff0c\u53ef\u80fd\u5b58\u5728\u4e00\u79cd\u6216\u4e24\u79cd\u5b58\u50a8\u4ecb\u8d28\u3002StarRocks \u8981\u6c42\u5b58\u50a8\u4ecb\u8d28\u4e3a A \u7684\u5206\u7247\u5728\u5747\u8861\u540e\uff0c\u5c3d\u91cf\u4f9d\u7136\u5b58\u50a8\u5728\u5b58\u50a8\u4ecb\u8d28 A \u4e2d\u3002\u6240\u4ee5 StarRocks \u6839\u636e\u5b58\u50a8\u4ecb\u8d28\uff0c\u5bf9\u96c6\u7fa4\u7684 BE \u8282\u70b9\u8fdb\u884c\u5212\u5206\u3002\u7136\u540e\u9488\u5bf9\u4e0d\u540c\u7684\u5b58\u50a8\u4ecb\u8d28\u7684 BE \u8282\u70b9\u96c6\u5408\uff0c\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u8c03\u5ea6\u3002\u540c\u6837\uff0c\u526f\u672c\u5747\u8861\u4f1a\u4fdd\u8bc1\u4e0d\u4f1a\u5c06\u540c\u4e00\u4e2a Tablet \u7684\u526f\u672c\u90e8\u7f72\u5728\u540c\u4e00\u4e2a host \u7684 BE \u4e0a\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"be-\u8282\u70b9\u8d1f\u8f7d",children:"BE \u8282\u70b9\u8d1f\u8f7d"}),"\n",(0,l.jsxs)(n.p,{children:["StarRocks \u4f7f\u7528 ClusterLoadStatistics\uff08CLS\uff09\u8868\u793a\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u5404\u4e2a BE \u7684\u8d1f\u8f7d\u5747\u8861\u60c5\u51b5\u3002TabletScheduler \u6839\u636e\u6b64\u7edf\u8ba1\u503c\uff0c\u6765\u89e6\u53d1\u96c6\u7fa4\u5747\u8861\u3002StarRocks \u5f53\u524d\u901a\u8fc7 ",(0,l.jsx)(n.strong,{children:"\u78c1\u76d8\u4f7f\u7528\u7387"})," \u548c ",(0,l.jsx)(n.strong,{children:"\u526f\u672c\u6570\u91cf"})," \u4e24\u4e2a\u6307\u6807\uff0c\u4e3a\u6bcf\u4e2a BE \u8ba1\u7b97\u5f97\u51fa\u4e00\u4e2a loadScore\uff0c\u4f5c\u4e3a BE \u7684\u8d1f\u8f7d\u5206\u6570\u3002\u5206\u6570\u8d8a\u9ad8\uff0c\u8868\u793a\u8be5 BE \u7684\u8d1f\u8f7d\u8d8a\u91cd\u3002TabletScheduler \u4f1a\u6bcf\u9694 1 \u5206\u949f\u66f4\u65b0\u4e00\u6b21 CLS\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u78c1\u76d8\u4f7f\u7528\u7387\u548c\u526f\u672c\u6570\u91cf\u5404\u6709\u4e00\u4e2a\u6743\u91cd\u7cfb\u6570\uff0c\u5206\u522b\u4e3a ",(0,l.jsx)(n.code,{children:"capacityCoefficient"})," \u548c ",(0,l.jsx)(n.code,{children:"replicaNumCoefficient"}),"\uff0c\u5176\u548c\u8861\u4e3a ",(0,l.jsx)(n.code,{children:"1"}),"\u3002\u5176\u4e2d ",(0,l.jsx)(n.code,{children:"capacityCoefficient"})," \u4f1a\u6839\u636e\u5b9e\u9645\u78c1\u76d8\u4f7f\u7528\u7387\u52a8\u6001\u8c03\u6574\u3002\u5f53\u4e00\u4e2a BE \u7684\u603b\u4f53\u78c1\u76d8\u4f7f\u7528\u7387\u5728 50% \u4ee5\u4e0b\uff0c\u5219 ",(0,l.jsx)(n.code,{children:"capacityCoefficient"})," \u503c\u4e3a ",(0,l.jsx)(n.code,{children:"0.5"}),"\uff0c\u5982\u679c\u78c1\u76d8\u4f7f\u7528\u7387\u5728 75% \u4ee5\u4e0a\uff0c\u5219\u503c\u4e3a ",(0,l.jsx)(n.code,{children:"1"}),"\uff08\u60a8\u53ef\u4ee5\u901a\u8fc7 FE \u914d\u7f6e\u9879 ",(0,l.jsx)(n.code,{children:"capacity_used_percent_high_water"})," \u914d\u7f6e\uff09\u3002\u5982\u679c\u4f7f\u7528\u7387\u4ecb\u4e8e 50% ~ 75% \u4e4b\u95f4\uff0c\u5219\u8be5\u6743\u91cd\u7cfb\u6570\u5e73\u6ed1\u589e\u52a0\uff0c\u516c\u5f0f\u4e3a\uff1a",(0,l.jsx)(n.code,{children:"capacityCoefficient = 2 * \u78c1\u76d8\u4f7f\u7528\u7387 - 0.5"}),"\u3002\u8be5\u6743\u91cd\u7cfb\u6570\u4fdd\u8bc1\u5f53\u78c1\u76d8\u4f7f\u7528\u7387\u8fc7\u9ad8\u65f6\uff0c\u8be5 BE \u7684\u8d1f\u8f7d\u5206\u6570\u4f1a\u66f4\u9ad8\uff0c\u4ee5\u4f7f\u7cfb\u7edf\u5c3d\u5feb\u964d\u4f4e\u8fd9\u4e2a BE \u7684\u8d1f\u8f7d\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5747\u8861\u7b56\u7565",children:"\u5747\u8861\u7b56\u7565"}),"\n",(0,l.jsx)(n.p,{children:"TabletScheduler \u5728\u6bcf\u8f6e\u8c03\u5ea6\u65f6\uff0c\u90fd\u4f1a\u901a\u8fc7 LoadBalancer \u6765\u9009\u62e9\u4e00\u5b9a\u6570\u76ee\u7684\u5065\u5eb7\u5206\u7247\u4f5c\u4e3a Balance \u7684\u5019\u9009\u5206\u7247\u3002\u5728\u4e0b\u4e00\u6b21\u8c03\u5ea6\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u6839\u636e\u8fd9\u4e9b\u5019\u9009\u5206\u7247\uff0c\u8fdb\u884c\u5747\u8861\u8c03\u5ea6\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u526f\u672c\u8c03\u5ea6\u4efb\u52a1",children:"\u67e5\u770b\u526f\u672c\u8c03\u5ea6\u4efb\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u526f\u672c\u8c03\u5ea6\u4efb\u52a1\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u7b49\u5f85\u88ab\u6267\u884c\u7684\u8c03\u5ea6\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/cluster_balance/pending_tablets';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------+--------+-----------------+---------+----------+----------+-------+---------+--------+----------+---------+---------------------+---------------------+---------------------+----------+------+-------------+---------------+---------------------+------------+---------------------+--------+---------------------+-------------------------------+\n| TabletId | Type   | Status          | State   | OrigPrio | DynmPrio | SrcBe | SrcPath | DestBe | DestPath | Timeout | Create              | LstSched            | LstVisit            | Finished | Rate | FailedSched | FailedRunning | LstAdjPrio          | VisibleVer | VisibleVerHash      | CmtVer | CmtVerHash          | ErrMsg                        |\n+----------+--------+-----------------+---------+----------+----------+-------+---------+--------+----------+---------+---------------------+---------------------+---------------------+----------+------+-------------+---------------+---------------------+------------+---------------------+--------+---------------------+-------------------------------+\n| 4203036  | REPAIR | REPLICA_MISSING | PENDING | HIGH     | LOW      | -1    | -1      | -1     | -1       | 0       | 2019-02-21 15:00:20 | 2019-02-24 11:18:41 | 2019-02-24 11:18:41 | N/A      | N/A  | 2           | 0             | 2019-02-21 15:00:43 | 1          | 0                   | 2      | 0                   | unable to find source replica |\n+----------+--------+-----------------+---------+----------+----------+-------+---------+--------+----------+---------+---------------------+---------------------+---------------------+----------+------+-------------+---------------+---------------------+------------+---------------------+--------+---------------------+-------------------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5404\u5217\u7684\u5177\u4f53\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TabletId"}),"\uff1a\u7b49\u5f85\u8c03\u5ea6\u7684 Tablet \u7684 ID\u3002\u4e00\u4e2a\u8c03\u5ea6\u4efb\u52a1\u53ea\u9488\u5bf9\u4e00\u4e2a Tablet\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Type"}),"\uff1a\u4efb\u52a1\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f REPAIR\uff08\u4fee\u590d\uff09 \u6216 BALANCE\uff08\u5747\u8861\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Status"}),"\uff1a\u8be5 Tablet \u5f53\u524d\u7684\u72b6\u6001\uff0c\u5982 REPLICA_MISSING\uff08\u526f\u672c\u7f3a\u5931\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"State"}),"\uff1a\u8be5\u8c03\u5ea6\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u53ef\u80fd\u4e3a PENDING/RUNNING/FINISHED/CANCELLED/TIMEOUT/UNEXPECTED\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"OrigPrio"}),"\uff1a\u521d\u59cb\u7684\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DynmPrio"}),"\uff1a\u5f53\u524d\u52a8\u6001\u8c03\u6574\u540e\u7684\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SrcBe"}),"\uff1a\u6e90\u7aef BE \u8282\u70b9\u7684 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SrcPath"}),"\uff1a\u6e90\u7aef BE \u8282\u70b9\u7684\u8def\u5f84\u7684 hash \u503c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DestBe"}),"\uff1a\u76ee\u7684\u7aef BE \u8282\u70b9\u7684 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DestPath"}),"\uff1a\u76ee\u7684\u7aef BE \u8282\u70b9\u7684\u8def\u5f84\u7684 hash \u503c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Timeout"}),"\uff1a\u5f53\u4efb\u52a1\u88ab\u8c03\u5ea6\u6210\u529f\u540e\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Create"}),"\uff1a\u4efb\u52a1\u88ab\u521b\u5efa\u7684\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LstSched"}),"\uff1a\u4e0a\u4e00\u6b21\u4efb\u52a1\u88ab\u8c03\u5ea6\u7684\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LstVisit"}),"\uff1a\u4e0a\u4e00\u6b21\u4efb\u52a1\u88ab\u8bbf\u95ee\u7684\u65f6\u95f4\u3002\u8fd9\u91cc\u201c\u88ab\u8bbf\u95ee\u201d\u6307\u5305\u62ec\u88ab\u8c03\u5ea6\uff0c\u4efb\u52a1\u6267\u884c\u6c47\u62a5\u7b49\u548c\u8fd9\u4e2a\u4efb\u52a1\u76f8\u5173\u7684\u88ab\u5904\u7406\u7684\u65f6\u95f4\u70b9\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Finished"}),"\uff1a\u4efb\u52a1\u7ed3\u675f\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Rate"}),"\uff1aclone \u4efb\u52a1\u7684\u6570\u636e\u62f7\u8d1d\u901f\u7387\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FailedSched"}),"\uff1a\u4efb\u52a1\u8c03\u5ea6\u5931\u8d25\u7684\u6b21\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"FailedRunning"}),"\uff1a\u4efb\u52a1\u6267\u884c\u5931\u8d25\u7684\u6b21\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LstAdjPrio"}),"\uff1a\u4e0a\u4e00\u6b21\u4f18\u5148\u7ea7\u8c03\u6574\u7684\u65f6\u95f4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CmtVer/CmtVerHash/VisibleVer/VisibleVerHash"}),"\uff1a\u7528\u4e8e\u6267\u884c Clone \u4efb\u52a1\u7684 version \u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ErrMsg"}),"\uff1a\u4efb\u52a1\u88ab\u8c03\u5ea6\u548c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u51fa\u73b0\u7684\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u8c03\u5ea6\u4efb\u52a1\u3002"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/cluster_balance/running_tablets';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u7ed3\u679c\u4e2d\u5404\u5217\u7684\u542b\u4e49\u548c ",(0,l.jsx)(n.code,{children:"pending_tablets"})," \u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5df2\u7ed3\u675f\u7684\u8c03\u5ea6\u4efb\u52a1\u3002"})}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u9ed8\u8ba4\u4fdd\u7559\u6700\u8fd1 1000 \u4e2a\u5b8c\u6210\u7684\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW PROC '/cluster_balance/history_tablets';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u7ed3\u679c\u4e2d\u5404\u5217\u7684\u542b\u4e49\u548c ",(0,l.jsx)(n.code,{children:"pending_tablets"})," \u76f8\u540c\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"State"})," \u5217\u4e3a ",(0,l.jsx)(n.code,{children:"FINISHED"}),"\uff0c\u5219\u8bf4\u660e\u4efb\u52a1\u6b63\u5e38\u5b8c\u6210\u3002\u5982\u679c\u4e3a\u5176\u4ed6\uff0c\u5219\u53ef\u4ee5\u6839\u636e ",(0,l.jsx)(n.code,{children:"ErrMsg"})," \u5217\u7684\u9519\u8bef\u4fe1\u606f\u67e5\u770b\u5177\u4f53\u539f\u56e0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8d44\u6e90\u63a7\u5236",children:"\u8d44\u6e90\u63a7\u5236"}),"\n",(0,l.jsxs)(n.p,{children:["\u65e0\u8bba\u662f\u526f\u672c\u4fee\u590d\u8fd8\u662f\u5747\u8861\uff0c\u90fd\u662f\u901a\u8fc7\u526f\u672c\u5728\u5404\u4e2a BE \u4e4b\u95f4\u62f7\u8d1d\u5b8c\u6210\u7684\u3002\u5982\u679c\u540c\u4e00\u53f0 BE \u540c\u4e00\u65f6\u95f4\u6267\u884c\u8fc7\u591a\u7684\u4efb\u52a1\uff0c\u5219\u4f1a\u5e26\u6765\u8f83\u5927\u7684 IO \u538b\u529b\u3002\u56e0\u6b64\uff0cStarRocks \u5728\u8c03\u5ea6\u65f6\u63a7\u5236\u4e86\u6bcf\u4e2a\u8282\u70b9\u4e0a\u80fd\u591f\u6267\u884c\u7684\u4efb\u52a1\u6570\u76ee\u3002\u6700\u5c0f\u7684\u8d44\u6e90\u63a7\u5236\u5355\u4f4d\u662f\u78c1\u76d8\uff08\u5373\u5728 ",(0,l.jsx)(n.strong,{children:"be.conf"})," \u4e2d\u6307\u5b9a\u7684\u4e00\u4e2a\u6570\u636e\u8def\u5f84\uff09\u3002StarRocks \u9ed8\u8ba4\u4e3a\u6bcf\u5757\u78c1\u76d8\u914d\u7f6e\u4e24\u4e2a slot \u7528\u4e8e\u526f\u672c\u4fee\u590d\u3002\u4e00\u4e2a clone \u4efb\u52a1\u4f1a\u5360\u7528\u6e90\u7aef\u548c\u76ee\u7684\u7aef\u5404\u4e00\u4e2a slot\u3002\u5982\u679c slot \u6570\u76ee\u4e3a\u96f6\uff0c\u5219\u4e0d\u4f1a\u518d\u5bf9\u8fd9\u5757\u78c1\u76d8\u5206\u914d\u4efb\u52a1\u3002\u8be5 slot \u4e2a\u6570\u53ef\u4ee5\u901a\u8fc7 FE \u7684 ",(0,l.jsx)(n.code,{children:"tablet_sched_slot_num_per_path"})," \u53c2\u6570\u52a8\u6001\u914d\u7f6e\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u53e6\u5916\uff0cStarRocks \u9ed8\u8ba4\u4e3a\u6bcf\u5757\u78c1\u76d8\u63d0\u4f9b 2 \u4e2a\u5355\u72ec\u7684 slot \u7528\u4e8e\u5747\u8861\u4efb\u52a1\u3002\u76ee\u7684\u662f\u9632\u6b62\u9ad8\u8d1f\u8f7d\u7684\u8282\u70b9\u56e0\u4e3a slot \u88ab\u4fee\u590d\u4efb\u52a1\u5360\u7528\uff0c\u800c\u65e0\u6cd5\u901a\u8fc7\u5747\u8861\u91ca\u653e\u7a7a\u95f4\u3002"})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>c});var l=s(67294);const i=l.createContext({});function c(e){const n=l.useContext(i);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:c(e),l.createElement(i.Provider,{value:d},n)}}}]);