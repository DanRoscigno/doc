"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17858],{34709:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var l=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},i="\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd",d={id:"using_starrocks/Using_HLL",title:"\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 HLL\uff08HyperLogLog\uff09\u5728 StarRocks \u4e2d\u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/using_starrocks/Using_HLL.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_HLL",permalink:"/doc/zh/docs/3.0/using_starrocks/Using_HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Using_HLL.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe",permalink:"/doc/zh/docs/3.0/using_starrocks/Materialized_view"},next:{title:"\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd",permalink:"/doc/zh/docs/3.0/using_starrocks/Using_bitmap"}},t={},h=[{value:"\u521b\u5efa\u5305\u542b HLL \u5217\u7684\u8868",id:"\u521b\u5efa\u5305\u542b-hll-\u5217\u7684\u8868",level:2},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u901a\u8fc7 HLL \u805a\u5408\u6570\u636e",id:"\u901a\u8fc7-hll-\u805a\u5408\u6570\u636e",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2},{value:"\u9009\u62e9\u53bb\u91cd\u65b9\u6848",id:"\u9009\u62e9\u53bb\u91cd\u65b9\u6848",level:2},{value:"\u76f8\u5173\u51fd\u6570",id:"\u76f8\u5173\u51fd\u6570",level:2}];function o(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",blockquote:"blockquote",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,c.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u4f7f\u7528-hyperloglog-\u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd",children:"\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd"}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 HLL\uff08HyperLogLog\uff09\u5728 StarRocks \u4e2d\u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd\u3002"}),"\n",(0,l.jsx)(e.p,{children:"HLL \u662f\u4e00\u79cd\u8fd1\u4f3c\u53bb\u91cd\u7b97\u6cd5\uff0c\u5728\u90e8\u5206\u5bf9\u53bb\u91cd\u7cbe\u5ea6\u8981\u6c42\u4e0d\u9ad8\u7684\u573a\u666f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 HLL \u7b97\u6cd5\u51cf\u8f7b\u6570\u636e\u53bb\u91cd\u5206\u6790\u7684\u8ba1\u7b97\u538b\u529b\u3002\u6839\u636e\u6570\u636e\u96c6\u5927\u5c0f\u4ee5\u53ca\u6240\u91c7\u7528\u7684\u54c8\u5e0c\u51fd\u6570\u7684\u7c7b\u578b\uff0cHLL \u7b97\u6cd5\u7684\u8bef\u5dee\u53ef\u63a7\u5236\u5728 1% \u81f3 10% \u5de6\u53f3\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u521b\u5efa\u5305\u542b-hll-\u5217\u7684\u8868",children:"\u521b\u5efa\u5305\u542b HLL \u5217\u7684\u8868"}),"\n",(0,l.jsxs)(e.p,{children:["\u4f7f\u7528 HLL \u53bb\u91cd\uff0c\u9700\u8981\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c\u5c06\u76ee\u6807\u6307\u6807\u5217\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(e.strong,{children:"HLL"}),"\uff0c\u805a\u5408\u51fd\u6570\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(e.strong,{children:"HLL_UNION"}),"\u3002\u53ea\u6709\u805a\u5408\u6a21\u578b\u8868 (Aggregate Key) \u652f\u6301 HLL \u7c7b\u578b\u5217\u3002"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u8bf4\u660e"}),"\n",(0,l.jsxs)(e.p,{children:["\u60a8\u65e0\u9700\u5411 HLL \u5217\u5bfc\u5165\u6570\u636e\u3002HLL \u5217\u7684\u6570\u636e\u5c06\u6839\u636e\u60a8\u6307\u5b9a\u7684 ",(0,l.jsx)(e.code,{children:"HLL_HASH"})," \u51fd\u6570\u57fa\u4e8e\u5bfc\u5165\u7684\u6570\u636e\u81ea\u52a8\u751f\u6210\u3002\u5bfc\u5165\u6570\u636e\u65f6\uff0c\u8be5\u51fd\u6570\u5c06\u81ea\u52a8\u6839\u636e\u6307\u5b9a\u7684\u5217\u751f\u6210 HLL \u5217\u3002HLL \u7b97\u6cd5\u5e38\u7528\u4e8e\u66ff\u4ee3 ",(0,l.jsx)(e.code,{children:"count distinct"}),"\uff0c\u901a\u8fc7\u7ed3\u5408\u7269\u5316\u89c6\u56fe\u5728\u4e1a\u52a1\u4e0a\u7528\u4e8e\u5feb\u901f\u8ba1\u7b97 uv\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa ",(0,l.jsx)(e.code,{children:"test"})," \u8868\uff0c\u5176\u4e2d\u5305\u542b DATE \u6570\u636e\u7c7b\u578b\u5217 ",(0,l.jsx)(e.code,{children:"dt"}),"\uff0cINT \u6570\u636e\u7c7b\u578b\u5217 ",(0,l.jsx)(e.code,{children:"id"}),"\uff0c\u4ee5\u53ca HLL \u7c7b\u578b\u5217 ",(0,l.jsx)(e.code,{children:"uv"}),"\uff0c\u5176\u4f7f\u7528\u7684 ",(0,l.jsx)(e.code,{children:"HLL_HASH"})," \u51fd\u6570\u4e3a ",(0,l.jsx)(e.code,{children:"HLL_UNION"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE test(\n        dt DATE,\n        id INT,\n        uv HLL HLL_UNION\n)\nDISTRIBUTED BY HASH(ID);\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6ce8\u610f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f53\u524d\u7248\u672c\u4e2d, \u4ec5\u805a\u5408\u8868\u652f\u6301 HLL \u7c7b\u578b\u7684\u6307\u6807\u5217\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5f53\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u5efa\u8bae\u4e3a\u9ad8\u9891\u7387\u7684 HLL \u67e5\u8be2\u5efa\u7acb\u5bf9\u5e94\u7684\u7269\u5316\u89c6\u56fe\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5bfc\u5165\u6570\u636e",children:"\u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsxs)(e.p,{children:["\u521b\u5efa\u6570\u636e\u6587\u4ef6 ",(0,l.jsx)(e.strong,{children:"test.csv"})," \u5e76\u5c06\u5176\u5bfc\u5165\u5148\u524d\u521b\u5efa\u7684\u8868 ",(0,l.jsx)(e.code,{children:"test"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u524d\u793a\u4f8b\u4f7f\u7528\u4ee5\u4e0b\u539f\u59cb\u6570\u636e\uff0c\u5176 10 \u884c\u6570\u636e\u4e2d\u6709 3 \u884c\u6570\u636e\u91cd\u590d\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plain",metastring:"text",children:"2022-03-10,0\n2022-03-11,1\n2022-03-12,2\n2022-03-13,3\n2022-03-14,4\n2022-03-15,5\n2022-03-16,6\n2022-03-14,4\n2022-03-15,5\n2022-03-16,6\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 Stream Load \u6216\u8005 Broker Load \u6a21\u5f0f\u5bfc\u5165 ",(0,l.jsx)(e.strong,{children:"test.csv"}),"\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"})," \u6a21\u5f0f:"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -H "label:987654321" -H "column_separator:," -H "columns:dt,id,uv=hll_hash(id)" -T test.csv http://fe_host:http_port/api/db_name/test/_stream_load\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"})," \u6a21\u5f0f:"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL test_db.label\n     (\n     DATA INFILE("hdfs://hdfs_host:hdfs_port/user/starRocks/data/input/file")\n     INTO TABLE `test`\n     COLUMNS TERMINATED BY ","\n     (dt, id, uv)\n     SET (\n          uv = HLL_HASH(id)\n     )\n     );\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u901a\u8fc7-hll-\u805a\u5408\u6570\u636e",children:"\u901a\u8fc7 HLL \u805a\u5408\u6570\u636e"}),"\n",(0,l.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u805a\u5408\u6570\u636e\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u57fa\u4e8e\u793a\u4f8b\u8868\u521b\u5efa\u7269\u5316\u89c6\u56fe\uff0c\u4f7f HLL \u5217\u4ea7\u751f\u805a\u5408\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE test ADD ROLLUP test_rollup(dt, uv);\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u521b\u5efa\u9488\u5bf9 HLL \u5217\u8ba1\u7b97\u7684\u65b0\u8868\uff0c\u5e76\u63d2\u5165\u539f\u793a\u4f8b\u8868\u4e2d\u7684\u76f8\u5173\u6570\u636e\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table test_uv1(\nid int,\nuv_set hll hll_union)\ndistributed by hash(id);\n\ninsert into test_uv1 select id, uv from test;\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u521b\u5efa\u9488\u5bf9 HLL \u5217\u8ba1\u7b97\u7684\u65b0\u8868\uff0c\u5e76\u63d2\u5165\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"HLL_HASH"})," \u57fa\u4e8e\u539f\u793a\u4f8b\u8868\u4e2d\u76f8\u5173\u6570\u636e\u751f\u6210\u7684 HLL \u5217\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"create table test_uv2(\nid int,\nuv_set hll hll_union)\ndistributed by hash(id);\n\ninsert into test_uv2 select id, hll_hash(id) from test;\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,l.jsxs)(e.p,{children:["HLL \u5217\u4e0d\u652f\u6301\u76f4\u63a5\u67e5\u8be2\u539f\u59cb\u503c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570 ",(0,l.jsx)(e.code,{children:"HLL_UNION_AGG"})," \u8fdb\u884c\u67e5\u8be2\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT HLL_UNION_AGG(uv) FROM test;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plain",metastring:"text",children:"+---------------------+\n| hll_union_agg(`uv`) |\n+---------------------+\n|                   7 |\n+---------------------+\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u5728 HLL \u7c7b\u578b\u5217\u4e0a\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"count distinct"})," \u65f6\uff0cStarRocks \u4f1a\u81ea\u52a8\u5c06\u5176\u8f6c\u5316\u4e3a ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union_agg",children:"HLL_UNION_AGG(hll)"})," \u8ba1\u7b97\u3002\u6240\u4ee5\u4ee5\u4e0a\u67e5\u8be2\u7b49\u4ef7\u4e8e\u4ee5\u4e0b\u67e5\u8be2\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"SELECT COUNT(DISTINCT uv) FROM test;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd4\u56de\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plain",metastring:"text",children:"+----------------------+\n| count(DISTINCT `uv`) |\n+----------------------+\n|                    7 |\n+----------------------+\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u9009\u62e9\u53bb\u91cd\u65b9\u6848",children:"\u9009\u62e9\u53bb\u91cd\u65b9\u6848"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u7684\u6570\u636e\u96c6\u57fa\u6570\u5728\u767e\u4e07\u3001\u5343\u4e07\u91cf\u7ea7\uff0c\u5e76\u62e5\u6709\u51e0\u5341\u53f0\u673a\u5668\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"count distinct"})," \u65b9\u5f0f\u3002\u5982\u679c\u60a8\u7684\u6570\u636e\u96c6\u57fa\u6570\u5728\u4ebf\u7ea7\u4ee5\u4e0a\uff0c\u5e76\u4e14\u9700\u8981\u7cbe\u786e\u53bb\u91cd\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u4f7f\u7528 ",(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/using_starrocks/Using_bitmap#%E5%9F%BA%E4%BA%8E-trie-%E6%A0%91%E6%9E%84%E5%BB%BA%E5%85%A8%E5%B1%80%E5%AD%97%E5%85%B8",children:"Bitmap \u53bb\u91cd"}),"\u3002\u5982\u679c\u60a8\u9009\u62e9\u8fd1\u4f3c\u53bb\u91cd\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 HLL \u7c7b\u578b\u53bb\u91cd\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["Bitmap \u7c7b\u578b\u4ec5\u652f\u6301 TINYINT\uff0cSMALLINT\uff0cINT\uff0cBIGINT\uff08\u6ce8\u610f\u4e0d\u652f\u6301 LARGEINT\uff09\u53bb\u91cd\u3002\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u6570\u636e\u96c6\u53bb\u91cd\uff0c\u60a8\u9700\u8981",(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/using_starrocks/Using_bitmap#%E5%9F%BA%E4%BA%8E-trie-%E6%A0%91%E6%9E%84%E5%BB%BA%E5%85%A8%E5%B1%80%E5%AD%97%E5%85%B8",children:"\u6784\u5efa\u8bcd\u5178"}),"\uff0c\u5c06\u539f\u7c7b\u578b\u6620\u5c04\u5230\u6574\u6570\u7c7b\u578b\u3002HLL \u53bb\u91cd\u65b9\u5f0f\u5219\u65e0\u9700\u6784\u5efa\u8bcd\u5178\uff0c\u4ec5\u8981\u6c42\u5bf9\u5e94\u7684\u6570\u636e\u7c7b\u578b\u652f\u6301\u54c8\u5e0c\u51fd\u6570\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5bf9\u4e8e\u666e\u901a\u5217\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"NDV"})," \u51fd\u6570\u8fdb\u884c\u8fd1\u4f3c\u53bb\u91cd\u8ba1\u7b97\u3002",(0,l.jsx)(e.code,{children:"NDV"})," \u51fd\u6570\u8fd4\u56de\u503c\u662f ",(0,l.jsx)(e.code,{children:"COUNT(DISTINCT col)"})," \u7ed3\u679c\u7684\u8fd1\u4f3c\u503c\u805a\u5408\u51fd\u6570\uff0c\u5e95\u5c42\u5b9e\u73b0\u5c06\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u8f6c\u4e3a HLL \u7c7b\u578b\u8fdb\u884c\u8ba1\u7b97\u3002\u4f46 ",(0,l.jsx)(e.code,{children:"NDV"})," \u51fd\u6570\u5728\u8ba1\u7b97\u7684\u65f6\u5019\u6d88\u8017\u8d44\u6e90\u8f83\u5927\uff0c\u4e0d\u9002\u5408\u4e8e\u5e76\u53d1\u9ad8\u7684\u573a\u666f\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u7684\u5e94\u7528\u573a\u666f\u4e3a\u7528\u6237\u884c\u4e3a\u5206\u6790\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"INTERSECT_COUNT"})," \u6216\u8005\u81ea\u5b9a\u4e49 UDAF \u53bb\u91cd\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u76f8\u5173\u51fd\u6570",children:"\u76f8\u5173\u51fd\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union_agg",children:"HLL_UNION_AGG(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u6ee1\u8db3\u6761\u4ef6\u7684\u6240\u6709\u6570\u636e\u7684\u57fa\u6570\u4f30\u7b97\u3002\u6b64\u51fd\u6570\u8fd8\u53ef\u7528\u4e8e\u5206\u6790\u51fd\u6570\uff0c\u53ea\u652f\u6301\u9ed8\u8ba4\u7a97\u53e3\uff0c\u4e0d\u652f\u6301\u7a97\u53e3\u5b50\u53e5\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",children:"HLL_RAW_AGG(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u805a\u5408 HLL \u7c7b\u578b\u5b57\u6bb5\uff0c\u8fd4\u56de HLL \u7c7b\u578b\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/scalar-functions/hll_cardinality",children:"HLL_CARDINALITY(hll)"})}),"\uff1a\u6b64\u51fd\u6570\u7528\u4e8e\u4f30\u7b97\u5355\u6761 HLL \u5217\u7684\u57fa\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"HLL_HASH(column_name"})}),"\uff1a\u751f\u6210 HLL \u5217\u7c7b\u578b\uff0c\u7528\u4e8e ",(0,l.jsx)(e.code,{children:"insert"})," \u6216\u5bfc\u5165 HLL \u7c7b\u578b\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_empty",children:"HLL_EMPTY()"})}),"\uff1a\u751f\u6210\u7a7a HLL \u5217\uff0c\u7528\u4e8e ",(0,l.jsx)(e.code,{children:"insert"})," \u6216\u5bfc\u5165\u6570\u636e\u65f6\u8865\u5145\u9ed8\u8ba4\u503c\u3002"]}),"\n"]})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>r});var l=s(67294);const c=l.createContext({});function r(n){const e=l.useContext(c);return l.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||i:r(n),l.createElement(c.Provider,{value:d},e)}}}]);