"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53700],{45261:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var l=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese"},r="\u67e5\u8be2\u76f8\u5173\u95ee\u9898",a={id:"faq/Sql_faq",title:"\u67e5\u8be2\u76f8\u5173\u95ee\u9898",description:"\u6784\u5efa\u7269\u5316\u89c6\u56fe\u5931\u8d25\uff1afail to allocate memory",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/faq/Sql_faq.md",sourceDirName:"faq",slug:"/faq/Sql_faq",permalink:"/zh/docs/2.3/faq/Sql_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/faq/Sql_faq.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u5176\u4ed6",permalink:"/zh/docs/2.3/faq/Others"},next:{title:"Broker Load \u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/2.3/faq/loading/Broker_load_faq"}},t={},d=[{value:"\u6784\u5efa\u7269\u5316\u89c6\u56fe\u5931\u8d25\uff1afail to allocate memory",id:"\u6784\u5efa\u7269\u5316\u89c6\u56fe\u5931\u8d25fail-to-allocate-memory",level:2},{value:"StarRocks \u4f1a\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\u5417\uff1f",id:"starrocks-\u4f1a\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\u5417",level:2},{value:"\u5f53\u5b57\u6bb5\u4e3aNULL\u65f6\uff0c\u9664\u4e86is null\uff0c \u5176\u4ed6\u6240\u6709\u7684\u8ba1\u7b97\u7ed3\u679c\u90fd\u662ffalse",id:"\u5f53\u5b57\u6bb5\u4e3anull\u65f6\u9664\u4e86is-null-\u5176\u4ed6\u6240\u6709\u7684\u8ba1\u7b97\u7ed3\u679c\u90fd\u662ffalse",level:2},{value:"[BIGINT \u7b49\u503c\u67e5\u8be2\u4e2d\u52a0\u5f15\u53f7] \u51fa\u73b0\u591a\u4f59\u6570\u636e",id:"bigint-\u7b49\u503c\u67e5\u8be2\u4e2d\u52a0\u5f15\u53f7-\u51fa\u73b0\u591a\u4f59\u6570\u636e",level:2},{value:"StarRocks\u6709decode\u51fd\u6570\u5417\uff1f",id:"starrocks\u6709decode\u51fd\u6570\u5417",level:2},{value:"StarRocks\u7684\u4e3b\u952e\u8986\u76d6\u662f\u7acb\u523b\u751f\u6548\u7684\u5417\uff1f\u8fd8\u662f\u8bf4\u8981\u7b49\u540e\u53f0\u6162\u6162\u5408\u5e76\u6570\u636e?",id:"starrocks\u7684\u4e3b\u952e\u8986\u76d6\u662f\u7acb\u523b\u751f\u6548\u7684\u5417\u8fd8\u662f\u8bf4\u8981\u7b49\u540e\u53f0\u6162\u6162\u5408\u5e76\u6570\u636e",level:2},{value:"StarRocks \u5b58\u50a8 utf8mb4 \u7684\u5b57\u7b26\uff0c\u4f1a\u4e0d\u4f1a\u88ab\u622a\u65ad\u6216\u8005\u4e71\u7801\uff1f",id:"starrocks-\u5b58\u50a8-utf8mb4-\u7684\u5b57\u7b26\u4f1a\u4e0d\u4f1a\u88ab\u622a\u65ad\u6216\u8005\u4e71\u7801",level:2},{value:"[Schema change] alter table \u65f6\u663e\u793a\uff1atable&#39;s state is not normal",id:"schema-change-alter-table-\u65f6\u663e\u793atables-state-is-not-normal",level:2},{value:"[Hive\u5916\u90e8\u8868\u67e5\u8be2\u95ee\u9898] \u67e5\u8be2 Hive \u5916\u90e8\u8868\u65f6\u62a5\u9519\u83b7\u53d6\u5206\u533a\u5931\u8d25",id:"hive\u5916\u90e8\u8868\u67e5\u8be2\u95ee\u9898-\u67e5\u8be2-hive-\u5916\u90e8\u8868\u65f6\u62a5\u9519\u83b7\u53d6\u5206\u533a\u5931\u8d25",level:2},{value:"\u5927\u8868\u67e5\u8be2\u7ed3\u679c\u6162\uff0c\u6ca1\u6709\u8c13\u8bcd\u4e0b\u63a8",id:"\u5927\u8868\u67e5\u8be2\u7ed3\u679c\u6162\u6ca1\u6709\u8c13\u8bcd\u4e0b\u63a8",level:2},{value:"\u67e5\u8be2\u62a5\u9519 planner use long time 3000 remaining task num 1",id:"\u67e5\u8be2\u62a5\u9519-planner-use-long-time-3000-remaining-task-num-1",level:2},{value:"\u5f53A\u57fa\u6570\u5f88\u5c0f\u65f6\uff0cselect B from tbl order by A limit 10\u67e5\u8be2\u7ed3\u679c\u6bcf\u6b21\u4e0d\u4e00\u6837",id:"\u5f53a\u57fa\u6570\u5f88\u5c0f\u65f6select-b-from-tbl-order-by-a-limit-10\u67e5\u8be2\u7ed3\u679c\u6bcf\u6b21\u4e0d\u4e00\u6837",level:2},{value:"select * \u548c select \u7684\u5217\u6548\u7387\u5dee\u8ddd\u8fc7\u5927",id:"select--\u548c-select-\u7684\u5217\u6548\u7387\u5dee\u8ddd\u8fc7\u5927",level:2},{value:"\u76ee\u524d DELETE \u4e2d\u4e0d\u652f\u6301\u5d4c\u5957\u51fd\u6570",id:"\u76ee\u524d-delete-\u4e2d\u4e0d\u652f\u6301\u5d4c\u5957\u51fd\u6570",level:2},{value:"\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u6709\u4e0a\u767e\u5f20\u8868\uff0cuse database \u4f1a\u7279\u522b\u6162",id:"\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u6709\u4e0a\u767e\u5f20\u8868use-database-\u4f1a\u7279\u522b\u6162",level:2},{value:"BE \u548c FE \u65e5\u5fd7\u6587\u4ef6\u592a\u591a\uff0c\u600e\u4e48\u5904\u7406\uff1f",id:"be-\u548c-fe-\u65e5\u5fd7\u6587\u4ef6\u592a\u591a\u600e\u4e48\u5904\u7406",level:2},{value:"\u66f4\u6539\u526f\u672c\u6570\u5931\u8d25\uff1atable lineorder is colocate table, cannot change replicationNum",id:"\u66f4\u6539\u526f\u672c\u6570\u5931\u8d25table-lineorder-is-colocate-table-cannot-change-replicationnum",level:2},{value:"varchar \u8bbe\u7f6e\u6210\u6700\u5927\u503c\u5bf9\u5b58\u50a8\u6709\u6ca1\u6709\u5f71\u54cd",id:"varchar-\u8bbe\u7f6e\u6210\u6700\u5927\u503c\u5bf9\u5b58\u50a8\u6709\u6ca1\u6709\u5f71\u54cd",level:2},{value:"truncate table \u5931\u8d25\uff0c\u62a5\u9519create partititon timeout",id:"truncate-table-\u5931\u8d25\u62a5\u9519create-partititon-timeout",level:2},{value:"Hive \u5916\u8868\u8bbf\u95ee\u51fa\u9519\uff0cFailed to specify server&#39;s Kerberos principal name",id:"hive-\u5916\u8868\u8bbf\u95ee\u51fa\u9519failed-to-specify-servers-kerberos-principal-name",level:2},{value:"2021-10\u5728StarRocks\u91cc\u662f\u5408\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\u5417\uff1f\u53ef\u4ee5\u7528\u4f5c\u5206\u533a\u5b57\u6bb5\u5417\uff1f",id:"2021-10\u5728starrocks\u91cc\u662f\u5408\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\u5417\u53ef\u4ee5\u7528\u4f5c\u5206\u533a\u5b57\u6bb5\u5417",level:2},{value:"StarRocks on ES\uff0c\u521b\u5efa Elasticsearch \u5916\u8868\u65f6\uff0c\u5982\u679c\u76f8\u5173\u5b57\u7b26\u4e32\u957f\u5ea6\u8fc7\u957f\uff0c\u8d85\u8fc7 256\uff0c\u540c\u65f6 Elasticsearch \u4f7f\u7528\u52a8\u6001mapping\uff0c \u90a3\u4e48\u4f7f\u7528select\u8bed\u53e5\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u67e5\u8be2\u5230\u8be5\u5217",id:"starrocks-on-es\u521b\u5efa-elasticsearch-\u5916\u8868\u65f6\u5982\u679c\u76f8\u5173\u5b57\u7b26\u4e32\u957f\u5ea6\u8fc7\u957f\u8d85\u8fc7-256\u540c\u65f6-elasticsearch-\u4f7f\u7528\u52a8\u6001mapping-\u90a3\u4e48\u4f7f\u7528select\u8bed\u53e5\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u67e5\u8be2\u5230\u8be5\u5217",level:2},{value:"\u5982\u4f55\u5feb\u901f\u7edf\u8ba1 StarRocks \u5e93\u3001\u8868\u7684\u5927\u5c0f\uff0c\u6240\u5360\u7684\u78c1\u76d8\u8d44\u6e90\uff1f",id:"\u5982\u4f55\u5feb\u901f\u7edf\u8ba1-starrocks-\u5e93\u8868\u7684\u5927\u5c0f\u6240\u5360\u7684\u78c1\u76d8\u8d44\u6e90",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",ol:"ol",li:"li",ul:"ul",a:"a"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u67e5\u8be2\u76f8\u5173\u95ee\u9898",children:"\u67e5\u8be2\u76f8\u5173\u95ee\u9898"}),"\n",(0,l.jsx)(n.h2,{id:"\u6784\u5efa\u7269\u5316\u89c6\u56fe\u5931\u8d25fail-to-allocate-memory",children:"\u6784\u5efa\u7269\u5316\u89c6\u56fe\u5931\u8d25\uff1afail to allocate memory"}),"\n",(0,l.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,l.jsx)(n.code,{children:"be.conf"})," \u4e2d\u7684",(0,l.jsx)(n.code,{children:"memory_limitation_per_thread_for_schema_change"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u53c2\u6570\u8868\u793a\u5355\u4e2a schema change \u4efb\u52a1\u5141\u8bb8\u5360\u7528\u7684\u6700\u5927\u5185\u5b58\uff0c\u9ed8\u8ba4\u5927\u5c0f 2G\u3002\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u9700\u91cd\u542f BE \u4f7f\u914d\u7f6e\u751f\u6548\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"starrocks-\u4f1a\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\u5417",children:"StarRocks \u4f1a\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58\u5417\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["StarRocks \u4e0d\u76f4\u63a5\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u3002\u800c\u662f\u4f7f\u7528 Page Cache \u5c06\u539f\u59cb\u6570\u636e\u5206\u6210 page \u7f13\u5b58\u5728 BE \u5185\u5b58\u4e0a\uff0c\u540e\u7eed\u67e5\u8be2\u540c\u4e00\u4e2a page \u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 cache \u4e2d\u7684\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,l.jsx)(n.code,{children:"be.conf"})," \u6587\u4ef6\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"disable_storage_page_cache"})," \u4e3a ",(0,l.jsx)(n.code,{children:"false"})," \u6765\u5f00\u542f Page Cache\uff1b\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"storage_page_cache_limit"})," \u6765\u9650\u5236 page cache \u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a 0\u3002\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u9700\u91cd\u542f BE \u4f7f\u914d\u7f6e\u751f\u6548\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f53\u5b57\u6bb5\u4e3anull\u65f6\u9664\u4e86is-null-\u5176\u4ed6\u6240\u6709\u7684\u8ba1\u7b97\u7ed3\u679c\u90fd\u662ffalse",children:"\u5f53\u5b57\u6bb5\u4e3aNULL\u65f6\uff0c\u9664\u4e86is null\uff0c \u5176\u4ed6\u6240\u6709\u7684\u8ba1\u7b97\u7ed3\u679c\u90fd\u662ffalse"}),"\n",(0,l.jsx)(n.p,{children:"\u6807\u51c6 SQL \u4e2d null \u548c\u5176\u4ed6\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u90fd\u662fnull\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"bigint-\u7b49\u503c\u67e5\u8be2\u4e2d\u52a0\u5f15\u53f7-\u51fa\u73b0\u591a\u4f59\u6570\u636e",children:"[BIGINT \u7b49\u503c\u67e5\u8be2\u4e2d\u52a0\u5f15\u53f7] \u51fa\u73b0\u591a\u4f59\u6570\u636e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select cust_id,idno \nfrom llyt_dev.dwd_mbr_custinfo_dd \nwhere Pt= \u20182021-06-30\u2019 \nand cust_id = \u201820210129005809043707\u2019 \nlimit 10 offset 0;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+---------------------+-----------------------------------------+\n|   cust_id           |      idno                               |\n+---------------------+-----------------------------------------+\n|  20210129005809436  | yjdgjwsnfmdhjw294F93kmHCNMX39dw=        |\n|  20210129005809436  | sdhnswjwijeifme3kmHCNMX39gfgrdw=        |\n|  20210129005809436  | Tjoedk3js82nswndrf43X39hbggggbw=        |\n|  20210129005809436  | denuwjaxh73e39592jwshbnjdi22ogw=        |\n|  20210129005809436  | ckxwmsd2mei3nrunjrihj93dm3ijin2=        |\n|  20210129005809436  | djm2emdi3mfi3mfu4jro2ji2ndimi3n=        |\n+---------------------+-----------------------------------------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select cust_id,idno \nfrom llyt_dev.dwd_mbr_custinfo_dd \nwhere Pt= \u20182021-06-30\u2019 \nand cust_id = 20210129005809043707 \nlimit 10 offset 0;\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+---------------------+-----------------------------------------+\n|   cust_id           |      idno                               |\n+---------------------+-----------------------------------------+\n|  20210189979989976  | xuywehuhfuhruehfurhghcfCNMX39dw=        |\n+---------------------+-----------------------------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,l.jsx)(n.p,{children:"WHERE \u91cc\u4f7f\u7528 BIGINT \u7c7b\u578b\uff0c\u67e5\u8be2\u52a0\u5355\u5f15\u53f7\uff0c\u67e5\u51fa\u5f88\u591a\u65e0\u5173\u6570\u636e\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,l.jsx)(n.p,{children:"\u5b57\u7b26\u4e32\u548c INT \u6bd4\u8f83\uff0c\u76f8\u5f53\u4e8e CAST \u6210 DOUBLE\u3002INT \u6bd4\u8f83\u65f6\uff0c\u4e0d\u8981\u52a0\u5f15\u53f7\u3002\u52a0\u4e86\u5f15\u53f7\uff0c\u8fd8\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u547d\u4e2d\u7d22\u5f15\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"starrocks\u6709decode\u51fd\u6570\u5417",children:"StarRocks\u6709decode\u51fd\u6570\u5417\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u4e0d\u652f\u6301 Oracle \u4e2d\u7684 decode \u51fd\u6570\uff0cStarRocks \u8bed\u6cd5\u517c\u5bb9 MySQL\uff0c\u53ef\u4ee5\u4f7f\u7528case when\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"starrocks\u7684\u4e3b\u952e\u8986\u76d6\u662f\u7acb\u523b\u751f\u6548\u7684\u5417\u8fd8\u662f\u8bf4\u8981\u7b49\u540e\u53f0\u6162\u6162\u5408\u5e76\u6570\u636e",children:"StarRocks\u7684\u4e3b\u952e\u8986\u76d6\u662f\u7acb\u523b\u751f\u6548\u7684\u5417\uff1f\u8fd8\u662f\u8bf4\u8981\u7b49\u540e\u53f0\u6162\u6162\u5408\u5e76\u6570\u636e?"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u7684\u540e\u53f0\u5408\u5e76\u53c2\u8003 Google \u7684 MESA \u6a21\u578b\uff0c\u6709\u4e24\u5c42 compaction\uff0c\u4f1a\u540e\u53f0\u7b56\u7565\u89e6\u53d1\u5408\u5e76\u3002\u5982\u679c\u6ca1\u6709\u5408\u5e76\u5b8c\u6210\uff0c\u67e5\u8be2\u65f6\u4f1a\u5408\u5e76\uff0c\u4f46\u662f\u8bfb\u51fa\u6765\u53ea\u4f1a\u6709\u4e00\u4e2a\u6700\u65b0\u7684\u7248\u672c\uff0c\u4e0d\u5b58\u5728\u300c\u5bfc\u5165\u540e\u6570\u636e\u8bfb\u4e0d\u5230\u6700\u65b0\u7248\u672c\u300d\u7684\u60c5\u51b5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"starrocks-\u5b58\u50a8-utf8mb4-\u7684\u5b57\u7b26\u4f1a\u4e0d\u4f1a\u88ab\u622a\u65ad\u6216\u8005\u4e71\u7801",children:"StarRocks \u5b58\u50a8 utf8mb4 \u7684\u5b57\u7b26\uff0c\u4f1a\u4e0d\u4f1a\u88ab\u622a\u65ad\u6216\u8005\u4e71\u7801\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"MySQL\u7684\u201cutf8mb4\u201d\u662f\u6807\u51c6\u7684\u201cUTF-8\u201d\uff0cStarRocks \u53ef\u4ee5\u5b8c\u5168\u517c\u5bb9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"schema-change-alter-table-\u65f6\u663e\u793atables-state-is-not-normal",children:"[Schema change] alter table \u65f6\u663e\u793a\uff1atable's state is not normal"}),"\n",(0,l.jsx)(n.p,{children:"ALTER TABLE \u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u5982\u679c\u4e4b\u524d\u6709 ALTER TABLE \u64cd\u4f5c\u8fd8\u6ca1\u5b8c\u6210\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u67e5\u770b ALTER \u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'show tablet from lineitem where State="ALTER"; \n'})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u65f6\u95f4\u4e0e\u6570\u636e\u91cf\u5927\u5c0f\u6709\u5173\u7cfb\uff0c\u4e00\u822c\u662f\u5206\u949f\u7ea7\u522b\uff0c\u5efa\u8bae ALTER \u8fc7\u7a0b\u4e2d\u505c\u6b62\u6570\u636e\u5bfc\u5165\uff0c\u5bfc\u5165\u4f1a\u964d\u4f4e ALTER \u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"hive\u5916\u90e8\u8868\u67e5\u8be2\u95ee\u9898-\u67e5\u8be2-hive-\u5916\u90e8\u8868\u65f6\u62a5\u9519\u83b7\u53d6\u5206\u533a\u5931\u8d25",children:"[Hive\u5916\u90e8\u8868\u67e5\u8be2\u95ee\u9898] \u67e5\u8be2 Hive \u5916\u90e8\u8868\u65f6\u62a5\u9519\u83b7\u53d6\u5206\u533a\u5931\u8d25"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u8be2 Hive \u5916\u90e8\u8868\u65f6\u5177\u4f53\u62a5\u9519\u4fe1\u606f\uff1a\n",(0,l.jsx)(n.code,{children:"get partition detail failed: com.starrocks.common.DdlException: get hive partition meta data failed: java.net.UnknownHostException:hadooptest\uff08\u5177\u4f53hdfs-ha\u7684\u540d\u5b57\uff09"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06",(0,l.jsx)(n.code,{children:"core-site.xml"}),"\u548c",(0,l.jsx)(n.code,{children:"hdfs-site.xml"}),"\u6587\u4ef6\u62f7\u8d1d\u5230 ",(0,l.jsx)(n.code,{children:"fe/conf"})," \u548c ",(0,l.jsx)(n.code,{children:"be/conf"}),"\u4e2d\u5373\u53ef\uff0c\u7136\u540e\u91cd\u542f FE \u548c BE\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\u9898\u539f\u56e0"})}),"\n",(0,l.jsx)(n.p,{children:"\u83b7\u53d6\u914d\u7f6e\u5355\u5143\u5206\u533a\u5143\u6570\u636e\u5931\u8d25\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5927\u8868\u67e5\u8be2\u7ed3\u679c\u6162\u6ca1\u6709\u8c13\u8bcd\u4e0b\u63a8",children:"\u5927\u8868\u67e5\u8be2\u7ed3\u679c\u6162\uff0c\u6ca1\u6709\u8c13\u8bcd\u4e0b\u63a8"}),"\n",(0,l.jsx)(n.p,{children:"\u591a\u5f20\u5927\u8868\u5173\u8054\u65f6\uff0c\u65e7 planner\u6709\u65f6\u6ca1\u6709\u81ea\u52a8\u8c13\u8bcd\u4e0b\u63a8\uff0c\u6bd4\u5982\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"A JOIN B ON A.col1=B.col1 JOIN C on B.col1=C.col1 where A.col1='\u5317\u4eac'\uff0c\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u66f4\u6539\u4e3a\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"A JOIN B ON A.col1=B.col1 JOIN C on A.col1=C.col1 where A.col1='\u5317\u4eac'\uff0c\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6216\u8005\u5347\u7ea7\u5230\u8f83\u65b0\u7248\u672c\u5e76\u5f00\u542f CBO \u529f\u80fd\uff0c\u4f1a\u6709\u6b64\u7c7b\u8c13\u8bcd\u4e0b\u63a8\u64cd\u4f5c\uff0c\u4f18\u5316\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u67e5\u8be2\u62a5\u9519-planner-use-long-time-3000-remaining-task-num-1",children:"\u67e5\u8be2\u62a5\u9519 planner use long time 3000 remaining task num 1"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b",(0,l.jsx)(n.code,{children:"fe.gc"}),"\u65e5\u5fd7\u786e\u8ba4\u8be5\u95ee\u9898\u662f\u5426\u662f\u591a\u5e76\u53d1\u5f15\u8d77\u7684full gc\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u67e5\u770b\u540e\u53f0\u76d1\u63a7\u548c\u65e5\u5fd7\u521d\u6b65\u5224\u65ad\u6709\u9891\u7e41gc\uff0c\u53ef\u53c2\u8003\u4e24\u4e2a\u65b9\u6848\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u8ba9sqlclient\u540c\u65f6\u8bbf\u95ee\u591a\u4e2aFE\u53bb\u505a\u8d1f\u8f7d\u5747\u8861\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u4fee\u6539",(0,l.jsx)(n.code,{children:"fe.conf"}),"\u4e2d ",(0,l.jsx)(n.code,{children:"jvm8g"})," \u4e3a16g\uff08\u66f4\u5927\u5185\u5b58\uff0c\u51cf\u5c11 full gc \u5f71\u54cd\uff09\u3002\u4fee\u6539\u540e\u9700\u91cd\u542fFE\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f53a\u57fa\u6570\u5f88\u5c0f\u65f6select-b-from-tbl-order-by-a-limit-10\u67e5\u8be2\u7ed3\u679c\u6bcf\u6b21\u4e0d\u4e00\u6837",children:"\u5f53A\u57fa\u6570\u5f88\u5c0f\u65f6\uff0cselect B from tbl order by A limit 10\u67e5\u8be2\u7ed3\u679c\u6bcf\u6b21\u4e0d\u4e00\u6837"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"select B from tbl order by A,B limit 10"})," \uff0c\u5c06B\u4e5f\u8fdb\u884c\u6392\u5e8f\u5c31\u80fd\u4fdd\u8bc1\u7ed3\u679c\u4e00\u81f4\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u95ee\u9898\u539f\u56e0"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e0a\u9762\u7684SQL\u53ea\u80fd\u4fdd\u8bc1A\u662f\u6709\u5e8f\u7684\uff0c\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u6bcf\u6b21\u67e5\u8be2\u51fa\u6765\u7684B\u987a\u5e8f\u662f\u4e00\u81f4\u7684\uff0cMySQL\u80fd\u4fdd\u8bc1\u8fd9\u70b9\u56e0\u4e3a\u5b83\u662f\u5355\u673a\u6570\u636e\u5e93\uff0c\u800cStarRocks\u662f\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u5e95\u5c42\u8868\u6570\u636e\u5b58\u50a8\u662fsharding\u7684\u3002A\u7684\u6570\u636e\u5206\u5e03\u5728\u591a\u53f0\u673a\u5668\u4e0a\uff0c\u6bcf\u6b21\u67e5\u8be2\u591a\u53f0\u673a\u5668\u8fd4\u56de\u7684\u987a\u5e8f\u53ef\u80fd\u4e0d\u540c\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6bcf\u6b21B\u987a\u5e8f\u4e0d\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"select--\u548c-select-\u7684\u5217\u6548\u7387\u5dee\u8ddd\u8fc7\u5927",children:"select * \u548c select \u7684\u5217\u6548\u7387\u5dee\u8ddd\u8fc7\u5927"}),"\n",(0,l.jsx)(n.p,{children:"select * \u548c select \u65f6\u5177\u4f53\u5217\u6548\u7387\u5dee\u8ddd\u4f1a\u5f88\u5927\uff0c\u8fd9\u65f6\u5e94\u8be5\u53bb\u6392\u67e5profile\uff0c\u770b MERGE \u7684\u5177\u4f53\u4fe1\u606f\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u786e\u8ba4\u662f\u5426\u662f\u5b58\u50a8\u5c42\u805a\u5408\u6d88\u8017\u7684\u65f6\u95f4\u8fc7\u957f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u786e\u8ba4\u662f\u5426\u6307\u6807\u5217\u6709\u5f88\u591a\uff0c\u9700\u8981\u5bf9\u51e0\u767e\u4e07\u884c\u7684\u51e0\u767e\u5217\u8fdb\u884c\u805a\u5408\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MERGE:\n    - aggr: 26s270ms\n    - sort: 15s551ms\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u76ee\u524d-delete-\u4e2d\u4e0d\u652f\u6301\u5d4c\u5957\u51fd\u6570",children:"\u76ee\u524d DELETE \u4e2d\u4e0d\u652f\u6301\u5d4c\u5957\u51fd\u6570"}),"\n",(0,l.jsxs)(n.p,{children:["\u76ee\u524d\u4e0d\u652f\u6301\u7c7b\u4f3c\u5982\u4e0b\u7684\u5d4c\u5957\uff1a",(0,l.jsx)(n.code,{children:"DELETE from test_new WHERE to_days(now())-to_days(publish_time) >7;"}),"\u3002\u8fd9\u91cc'to_days(now())'\u5c5e\u4e8e\u5d4c\u5957\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u6709\u4e0a\u767e\u5f20\u8868use-database-\u4f1a\u7279\u522b\u6162",children:"\u5982\u679c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u6709\u4e0a\u767e\u5f20\u8868\uff0cuse database \u4f1a\u7279\u522b\u6162"}),"\n",(0,l.jsxs)(n.p,{children:["client\u8fde\u63a5\u7684\u65f6\u5019\u52a0\u4e0a",(0,l.jsx)(n.code,{children:"-A"}),"\u53c2\u6570\uff0c\u6bd4\u5982 ",(0,l.jsx)(n.code,{children:"mysql -uroot -h127.0.0.1 -P8867 -A"}),"\u3002",(0,l.jsx)(n.code,{children:"-A"}),"\u4e0d\u4f1a\u9884\u8bfb\u6570\u636e\u5e93\u4fe1\u606f\uff0c\u5207\u6362database\u4f1a\u5f88\u5feb\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"be-\u548c-fe-\u65e5\u5fd7\u6587\u4ef6\u592a\u591a\u600e\u4e48\u5904\u7406",children:"BE \u548c FE \u65e5\u5fd7\u6587\u4ef6\u592a\u591a\uff0c\u600e\u4e48\u5904\u7406\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u8c03\u6574\u65e5\u5fd7\u7ea7\u522b\u548c\u53c2\u6570\u5927\u5c0f\uff0c\u8be6\u60c5\u53c2\u8003 log \u76f8\u5173\u7684\u53c2\u6570\u9ed8\u8ba4\u503c\u548c\u4f5c\u7528\u8bf4\u660e\uff1a",(0,l.jsx)(n.a,{href:"/zh/docs/2.3/administration/Configuration",children:"\u53c2\u6570\u914d\u7f6e"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u66f4\u6539\u526f\u672c\u6570\u5931\u8d25table-lineorder-is-colocate-table-cannot-change-replicationnum",children:"\u66f4\u6539\u526f\u672c\u6570\u5931\u8d25\uff1atable lineorder is colocate table, cannot change replicationNum"}),"\n",(0,l.jsxs)(n.p,{children:["colocate table \u662f\u6709 \u5206\u7ec4 (group) \u7684\u3002\u4e00\u4e2a\u7ec4\u5305\u542b\u591a\u4e2a\u8868\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u5355\u4e2a\u8868\u7684\u526f\u672c\u6570\u3002\u9700\u8981\u628agroup\u5185\u7684\u6240\u6709\u8868\u7684",(0,l.jsx)(n.code,{children:"group_with"}),"\u5c5e\u6027\u8bbe\u7f6e\u6210\u7a7a\uff0c\u7136\u540e\u7ed9\u6240\u6709\u8868\u8bbe\u7f6e",(0,l.jsx)(n.code,{children:"replication_num"}),"\uff0c\u518d\u628a\u6240\u6709\u8868\u7684",(0,l.jsx)(n.code,{children:"group_with"}),"\u5c5e\u6027\u8bbe\u7f6e\u56de\u53bb\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"varchar-\u8bbe\u7f6e\u6210\u6700\u5927\u503c\u5bf9\u5b58\u50a8\u6709\u6ca1\u6709\u5f71\u54cd",children:"varchar \u8bbe\u7f6e\u6210\u6700\u5927\u503c\u5bf9\u5b58\u50a8\u6709\u6ca1\u6709\u5f71\u54cd"}),"\n",(0,l.jsx)(n.p,{children:"VARCHAR \u662f\u53d8\u957f\u5b58\u50a8\uff0c\u5b58\u50a8\u8ddf\u6570\u636e\u5b9e\u9645\u957f\u5ea6\u6709\u5173\uff0c\u5efa\u8868\u65f6\u6307\u5b9a\u4e0d\u540c\u7684 VARCHAR \u957f\u5ea6\u5bf9\u540c\u4e00\u6570\u636e\u7684\u67e5\u8be2\u6027\u80fd\u5f71\u54cd\u5f88\u5c0f\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"truncate-table-\u5931\u8d25\u62a5\u9519create-partititon-timeout",children:"truncate table \u5931\u8d25\uff0c\u62a5\u9519create partititon timeout"}),"\n",(0,l.jsxs)(n.p,{children:["\u76ee\u524d TRUNCATE \u4f1a\u5148\u521b\u5efa\u5bf9\u5e94\u7a7a\u5206\u533a\u518dswap\uff0c\u5982\u679c\u5b58\u5728\u5927\u91cf\u521b\u5efa\u5206\u533a\u4efb\u52a1\uff0c\u79ef\u538b\u5c31\u4f1a\u8d85\u65f6\uff0ccompaction\u8fc7\u7a0b\u4e2d\u4f1a\u6301\u9501\u5f88\u957f\u65f6\u95f4\uff0c\u4e5f\u5bfc\u81f4\u5efa\u8868\u62ff\u4e0d\u5230\u9501\u3002\u5982\u679c\u96c6\u7fa4\u5bfc\u5165\u6bd4\u8f83\u591a\uff0c\u8bbe\u7f6e",(0,l.jsx)(n.code,{children:"be.conf"}),"\u4e2d\u53c2\u6570",(0,l.jsx)(n.code,{children:"tablet_map_shard_size=512"}),"\uff0c\u53ef\u4ee5\u964d\u4f4e\u9501\u51b2\u7a81\u3002\u4fee\u6539\u53c2\u6570\u540e\u9700\u91cd\u542f FE\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"hive-\u5916\u8868\u8bbf\u95ee\u51fa\u9519failed-to-specify-servers-kerberos-principal-name",children:"Hive \u5916\u8868\u8bbf\u95ee\u51fa\u9519\uff0cFailed to specify server's Kerberos principal name"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728",(0,l.jsx)(n.code,{children:"fe.conf"})," \u548c",(0,l.jsx)(n.code,{children:"be.conf"}),"\u7684",(0,l.jsx)(n.code,{children:"hdfs-site.xml"}),"\u91cc\u6dfb\u52a0\u5982\u4e0b\u4fe1\u606f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",metastring:"text",children:"<property>\n<name>dfs.namenode.kerberos.principal.pattern</name>\n<value>*</value>\n</property>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"2021-10\u5728starrocks\u91cc\u662f\u5408\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\u5417\u53ef\u4ee5\u7528\u4f5c\u5206\u533a\u5b57\u6bb5\u5417",children:"2021-10\u5728StarRocks\u91cc\u662f\u5408\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\u5417\uff1f\u53ef\u4ee5\u7528\u4f5c\u5206\u533a\u5b57\u6bb5\u5417\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0d\u662f\u5408\u6cd5\u7684\u65e5\u671f\u683c\u5f0f\uff0c\u4e0d\u53ef\u4ee5\u7528\u4f5c\u5206\u533a\u5b57\u6bb5\uff0c\u9700\u8981\u8c03\u6574\u6210 ",(0,l.jsx)(n.code,{children:"2021-10-01"})," \u518d\u5206\u533a\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"starrocks-on-es\u521b\u5efa-elasticsearch-\u5916\u8868\u65f6\u5982\u679c\u76f8\u5173\u5b57\u7b26\u4e32\u957f\u5ea6\u8fc7\u957f\u8d85\u8fc7-256\u540c\u65f6-elasticsearch-\u4f7f\u7528\u52a8\u6001mapping-\u90a3\u4e48\u4f7f\u7528select\u8bed\u53e5\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u67e5\u8be2\u5230\u8be5\u5217",children:"StarRocks on ES\uff0c\u521b\u5efa Elasticsearch \u5916\u8868\u65f6\uff0c\u5982\u679c\u76f8\u5173\u5b57\u7b26\u4e32\u957f\u5ea6\u8fc7\u957f\uff0c\u8d85\u8fc7 256\uff0c\u540c\u65f6 Elasticsearch \u4f7f\u7528\u52a8\u6001mapping\uff0c \u90a3\u4e48\u4f7f\u7528select\u8bed\u53e5\u5c06\u4f1a\u5bfc\u81f4\u65e0\u6cd5\u67e5\u8be2\u5230\u8be5\u5217"}),"\n",(0,l.jsx)(n.p,{children:"\u52a8\u6001mapping \u65f6 Elasticsearch \u7684\u6570\u636e\u7c7b\u578b\u4e3a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'        "k4": {\n              "type": "text",\n              "fields": {\n                 "keyword": {\n                    "type": "keyword",\n                    "ignore_above": 256\n                 }\n              }\n           }\n'})}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u4f7f\u7528 keyword \u6570\u636e\u7c7b\u578b\u5bf9\u8be5\u67e5\u8be2\u8bed\u53e5\u8fdb\u884c\u8f6c\u6362\u3002\u56e0\u4e3a\u8be5\u5217\u7684\u6570\u636e keyword \u957f\u5ea6\u8d85\u8fc7 256\uff0c\u6240\u4ee5\u65e0\u6cd5\u67e5\u8be2\u8be5\u5217\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6848\uff1a\u53bb\u9664\u8be5\u5b57\u6bb5\u6620\u5c04\u4e2d\u7684"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'          "fields": {\n                 "keyword": {\n                    "type": "keyword",\n                    "ignore_above": 256\n                 }\n              }\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8ba9\u5176\u4f7f\u7528 text \u7c7b\u578b\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5982\u4f55\u5feb\u901f\u7edf\u8ba1-starrocks-\u5e93\u8868\u7684\u5927\u5c0f\u6240\u5360\u7684\u78c1\u76d8\u8d44\u6e90",children:"\u5982\u4f55\u5feb\u901f\u7edf\u8ba1 StarRocks \u5e93\u3001\u8868\u7684\u5927\u5c0f\uff0c\u6240\u5360\u7684\u78c1\u76d8\u8d44\u6e90\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u67e5\u770b\u5e93\u3001\u8868\u7684\u5b58\u50a8\u5927\u5c0f\u53ef\u4ee5\u7528 ",(0,l.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_DATA",children:"SHOW DATA"})," \u547d\u4ee4\u67e5\u770b\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SHOW DATA;"})," \u53ef\u4ee5\u5c55\u793a\u5f53\u524d\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u6570\u636e\u91cf\u548c\u526f\u672c\u6570\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"SHOW DATA FROM <db_name>.<table_name>;"})," \u53ef\u4ee5\u5c55\u793a\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u67d0\u4e2a\u8868\u7684\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u548c\u7edf\u8ba1\u884c\u6570\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var l=s(67294);const c=l.createContext({});function i(e){const n=l.useContext(c);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),l.createElement(c.Provider,{value:a},n)}}}]);