"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31333],{21491:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=d(85893),r=d(11151);const c={displayed_sidebar:"Chinese31"},l="\u4e25\u683c\u6a21\u5f0f",i={id:"loading/load_concept/strict_mode",title:"\u4e25\u683c\u6a21\u5f0f",description:"\u4e25\u683c\u6a21\u5f0f (Strict Mode) \u662f\u5bfc\u5165\u64cd\u4f5c\u4e2d\u7684\u4e00\u4e2a\u9009\u914d\u9879\uff0c\u5176\u8bbe\u7f6e\u4f1a\u5f71\u54cd StarRocks \u5bf9\u67d0\u4e9b\u6570\u636e\u7684\u5bfc\u5165\u884c\u4e3a\u548c\u6700\u7ec8\u5bfc\u5165\u5230 StarRocks \u4e2d\u7684\u7ed3\u679c\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/loading/load_concept/strict_mode.md",sourceDirName:"loading/load_concept",slug:"/loading/load_concept/strict_mode",permalink:"/doc/zh/docs/2.5/loading/load_concept/strict_mode",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/load_concept/strict_mode.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u6982\u5ff5\u4ecb\u7ecd",permalink:"/doc/zh/docs/2.5/category/\u6982\u5ff5\u4ecb\u7ecd"},next:{title:"\u901a\u8fc7 HTTP PUT \u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e",permalink:"/doc/zh/docs/2.5/loading/StreamLoad"}},t={},a=[{value:"\u4e25\u683c\u6a21\u5f0f\u4ecb\u7ecd",id:"\u4e25\u683c\u6a21\u5f0f\u4ecb\u7ecd",level:2},{value:"\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f",id:"\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"INSERT",id:"insert",level:3}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4e25\u683c\u6a21\u5f0f",children:"\u4e25\u683c\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u4e25\u683c\u6a21\u5f0f (Strict Mode) \u662f\u5bfc\u5165\u64cd\u4f5c\u4e2d\u7684\u4e00\u4e2a\u9009\u914d\u9879\uff0c\u5176\u8bbe\u7f6e\u4f1a\u5f71\u54cd StarRocks \u5bf9\u67d0\u4e9b\u6570\u636e\u7684\u5bfc\u5165\u884c\u4e3a\u548c\u6700\u7ec8\u5bfc\u5165\u5230 StarRocks \u4e2d\u7684\u7ed3\u679c\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u4ec0\u4e48\u662f\u4e25\u683c\u6a21\u5f0f\u3001\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e25\u683c\u6a21\u5f0f\u4ecb\u7ecd",children:"\u4e25\u683c\u6a21\u5f0f\u4ecb\u7ecd"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u539f\u59cb\u5217\u8ddf\u76ee\u6807\u5217\u7684\u6570\u636e\u7c7b\u578b\u53ef\u80fd\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cStarRocks \u4f1a\u5bf9\u5b58\u5728\u6570\u636e\u7c7b\u578b\u4e0d\u4e00\u81f4\u7684\u539f\u59cb\u5217\u503c\u8fdb\u884c\u8f6c\u6362\u3002\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u53d1\u751f\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d\u3001\u5b57\u6bb5\u8d85\u957f\u7b49\u8f6c\u6362\u5931\u8d25\u7684\u60c5\u51b5\u3002\u8f6c\u6362\u5931\u8d25\u7684\u5b57\u6bb5\u79f0\u4e3a\u201c\u9519\u8bef\u5b57\u6bb5\u201d\uff0c\u5305\u542b\u9519\u8bef\u5b57\u6bb5\u7684\u6570\u636e\u884c\u79f0\u4e3a\u201c\u9519\u8bef\u7684\u6570\u636e\u884c\u201d\u3002\u4e25\u683c\u6a21\u5f0f\u7528\u4e8e\u63a7\u5236\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u662f\u5426\u4f1a\u5bf9\u8fd9\u4e9b\u9519\u8bef\u7684\u6570\u636e\u884c\u8fdb\u884c\u8fc7\u6ee4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e25\u683c\u6a21\u5f0f\u7684\u8fc7\u6ee4\u7b56\u7565\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0cStarRocks \u4f1a\u628a\u9519\u8bef\u7684\u6570\u636e\u884c\u8fc7\u6ee4\u6389\uff0c\u53ea\u5bfc\u5165\u6b63\u786e\u7684\u6570\u636e\u884c\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u6570\u636e\u8be6\u60c5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5173\u95ed\u4e25\u683c\u6a21\u5f0f\uff0cStarRocks \u4f1a\u628a\u8f6c\u6362\u5931\u8d25\u7684\u9519\u8bef\u5b57\u6bb5\u8f6c\u6362\u6210 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\uff0c\u5e76\u628a\u8fd9\u4e9b\u5305\u542b ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u7684\u9519\u8bef\u6570\u636e\u884c\u8ddf\u6b63\u786e\u7684\u6570\u636e\u884c\u4e00\u8d77\u5bfc\u5165\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5b9e\u9645\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u6b63\u786e\u7684\u6570\u636e\u884c\u548c\u9519\u8bef\u7684\u6570\u636e\u884c\u90fd\u6709\u53ef\u80fd\u5b58\u5728 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u3002\u5982\u679c\u76ee\u6807\u5217\u4e0d\u5141\u8bb8 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\uff0c\u5219 StarRocks \u4f1a\u62a5\u9519\uff0c\u5e76\u628a\u8fd9\u4e9b\u5305\u542b ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u7684\u6570\u636e\u884c\u8fc7\u6ee4\u6389\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"}),"\u3001",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),"\u3001",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"Routine Load"})," \u548c ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"Spark Load"}),"\uff0c\u5bfc\u5165\u4f5c\u4e1a\u80fd\u591f\u5bb9\u5fcd\u7684\u56e0\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u800c\u8fc7\u6ee4\u6389\u7684\u9519\u8bef\u6570\u636e\u884c\u6240\u5360\u7684\u6700\u5927\u6bd4\u4f8b\uff0c\u7531\u4f5c\u4e1a\u7684\u53ef\u9009\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"max_filter_ratio"})," \u63a7\u5236\u3002",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," \u5bfc\u5165\u65b9\u5f0f\u5f53\u524d\u4e0d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"max_filter_ratio"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u9762\u4ee5 CSV \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u4e3a\u4f8b\u6765\u8bf4\u660e\u4e25\u683c\u6a21\u5f0f\u7684\u6548\u679c\u3002\u5047\u8bbe\u76ee\u6807\u5217\u6570\u636e\u7c7b\u578b\u4e3a TINYINT [-128, 127]\u3002\u4ee5 ",(0,s.jsx)(n.code,{children:"\\N"}),"\uff08\u8868\u793a\u7a7a\u503c null\uff09\u3001",(0,s.jsx)(n.code,{children:"abc"}),"\u3001",(0,s.jsx)(n.code,{children:"2000"})," \u548c ",(0,s.jsx)(n.code,{children:"1"})," \u56db\u4e2a\u539f\u59cb\u5217\u503c\u4e3a\u4f8b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u539f\u59cb\u5217\u503c ",(0,s.jsx)(n.code,{children:"\\N"})," \u5728\u8f6c\u6362\u4e3a TINYINT \u7c7b\u578b\u540e\u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["\u539f\u59cb\u5217\u503c ",(0,s.jsx)(n.code,{children:"\\N"})," \u4e0d\u7ba1\u76ee\u6807\u5217\u7684\u6570\u636e\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c\u8f6c\u6362\u540e\u90fd\u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u539f\u59cb\u5217\u503c ",(0,s.jsx)(n.code,{children:"abc"})," \u7531\u4e8e\u6570\u636e\u7c7b\u578b\u4e0e\u76ee\u6807\u5217\u7684\u6570\u636e\u7c7b\u578b TINYINT \u4e0d\u4e00\u81f4\uff0c\u56e0\u6b64\u8f6c\u6362\u5931\u8d25\uff0c\u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u539f\u59cb\u5217\u503c ",(0,s.jsx)(n.code,{children:"2000"})," \u7531\u4e8e\u4e0d\u5728\u76ee\u6807\u5217\u7684\u6570\u636e\u7c7b\u578b TINYINT \u7684\u5141\u8bb8\u8303\u56f4\u4e4b\u5185\uff0c\u56e0\u6b64\u8f6c\u6362\u5931\u8d25\uff0c\u53d8\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u539f\u59cb\u5217\u503c ",(0,s.jsx)(n.code,{children:"1"})," \u53ef\u4ee5\u6b63\u5e38\u8f6c\u6362\u4e3a TINYINT \u7c7b\u578b\u7684\u6570\u503c ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u6240\u6709\u6570\u636e\u884c\u90fd\u53ef\u4ee5\u5bfc\u5165\u3002\u5982\u679c\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u5219\u53ea\u6709\u5305\u542b ",(0,s.jsx)(n.code,{children:"\\N"})," \u6216 ",(0,s.jsx)(n.code,{children:"1"})," \u7684\u6570\u636e\u884c\u53ef\u4ee5\u5bfc\u5165\uff0c\u800c\u5305\u542b ",(0,s.jsx)(n.code,{children:"abc"})," \u6216 ",(0,s.jsx)(n.code,{children:"2000"})," \u7684\u6570\u636e\u884c\u4f1a\u88ab\u8fc7\u6ee4\u6389\u3002\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u8bb0\u5165\u5bfc\u5165\u4f5c\u4e1a\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"max_filter_ratio"})," \u5141\u8bb8\u7684\u56e0\u6570\u636e\u8d28\u91cf\u4e0d\u5408\u683c\u800c\u8fc7\u6ee4\u6389\u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5173\u95ed\u4e25\u683c\u6a21\u5f0f\u65f6\u7684\u5bfc\u5165\u7ed3\u679c"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u539f\u59cb\u5217\u503c\u4e3e\u4f8b"}),(0,s.jsx)(n.th,{children:"\u8f6c\u6362\u4e3a TINYINT \u7c7b\u578b\u540e\u7684\u5217\u503c"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5217\u5141\u8bb8\u7a7a\u503c\u65f6\u7684\u5bfc\u5165\u7ed3\u679c"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5217\u4e0d\u5141\u8bb8\u7a7a\u503c\u65f6\u7684\u5bfc\u5165\u7ed3\u679c"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\N"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"abc"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2000"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\u65f6\u7684\u5bfc\u5165\u7ed3\u679c"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u539f\u59cb\u5217\u503c\u4e3e\u4f8b"}),(0,s.jsx)(n.th,{children:"\u8f6c\u6362\u4e3a TINYINT \u7c7b\u578b\u540e\u7684\u5217\u503c"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5217\u5141\u8bb8\u7a7a\u503c\u7684\u5bfc\u5165\u7ed3\u679c"}),(0,s.jsx)(n.th,{children:"\u76ee\u6807\u5217\u4e0d\u5141\u8bb8\u7a7a\u503c\u7684\u5bfc\u5165\u7ed3\u679c"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\\N"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"abc"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u975e\u6cd5\uff0c\u8fc7\u6ee4\u6389\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2000"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"NULL"})," \u503c\u975e\u6cd5\uff0c\u8fc7\u6ee4\u6389\u3002"]}),(0,s.jsx)(n.td,{children:"\u62a5\u9519\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]}),(0,s.jsxs)(n.td,{children:["\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"1"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f",children:"\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/StreamLoad",children:"Stream Load"}),"\u3001",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/BrokerLoad",children:"Broker Load"}),"\u3001",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/RoutineLoad",children:"Routine Load"})," \u548c ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/SparkLoad",children:"Spark Load"})," \u6267\u884c\u6570\u636e\u5bfc\u5165\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"strict_mode"})," \u6765\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f\u3002\u53c2\u6570\u53d6\u503c\u8303\u56f4\uff1a",(0,s.jsx)(n.code,{children:"true"})," \u548c ",(0,s.jsx)(n.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,s.jsx)(n.code,{children:"false"}),"\u3002",(0,s.jsx)(n.code,{children:"true"})," \u8868\u793a\u5f00\u542f\uff0c",(0,s.jsx)(n.code,{children:"false"})," \u8868\u793a\u5173\u95ed\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/InsertInto",children:"INSERT"})," \u6267\u884c\u6570\u636e\u5bfc\u5165\u65f6\uff0c\u9700\u8981\u901a\u8fc7\u4f1a\u8bdd\u53d8\u91cf ",(0,s.jsx)(n.code,{children:"enable_insert_strict"})," \u6765\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f\u3002\u53d8\u91cf\u53d6\u503c\u8303\u56f4\uff1a",(0,s.jsx)(n.code,{children:"true"})," \u548c ",(0,s.jsx)(n.code,{children:"false"}),"\u3002\u9ed8\u8ba4\u503c\uff1a",(0,s.jsx)(n.code,{children:"true"}),"\u3002",(0,s.jsx)(n.code,{children:"true"})," \u8868\u793a\u5f00\u542f\uff0c",(0,s.jsx)(n.code,{children:"false"})," \u8868\u793a\u5173\u95ed\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u4ecb\u7ecd\u4f7f\u7528\u4e0d\u540c\u7684\u5bfc\u5165\u65b9\u5f0f\u65f6\u8bbe\u7f6e\u4e25\u683c\u6a21\u5f0f\u7684\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> \\\n    -H "strict_mode: {true | false}" \\\n    -T <file_name> -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/<database_name>/<table_name>/_stream_load\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173 Stream Load \u7684\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL [<database_name>.]<label_name>\n(\n    DATA INFILE ("<file_path>"[, "<file_path>" ...])\n    INTO TABLE <table_name>\n)\nWITH BROKER\n(\n    "username" = "<hdfs_username>",\n    "password" = "<hdfs_password>"\n)\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u4ee5 HDFS \u6570\u636e\u6e90\u4e3a\u4f8b\u3002\u6709\u5173 Broker Load \u7684\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD [<database_name>.]<job_name> ON <table_name>\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"\n) \nFROM KAFKA\n(\n    "kafka_broker_list" ="<kafka_broker1_ip>:<kafka_broker1_port>[,<kafka_broker2_ip>:<kafka_broker2_port>...]",\n    "kafka_topic" = "<topic_name>"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u4ee5 Apache Kafka\xae \u6570\u636e\u6e90\u4e3a\u4f8b\u3002\u6709\u5173 Routine Load \u7684\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL [<database_name>.]<label_name>\n(\n    DATA INFILE ("<file_path>"[, "<file_path>" ...])\n    INTO TABLE <table_name>\n)\nWITH RESOURCE <resource_name>\n(\n    "spark.executor.memory" = "3g",\n    "broker.username" = "<hdfs_username>",\n    "broker.password" = "<hdfs_password>"\n)\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"   \n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u4ee5 HDFS \u6570\u636e\u6e90\u4e3a\u4f8b\u3002\u6709\u5173 Spark Load \u7684\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"SPARK LOAD"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"insert",children:"INSERT"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SET enable_insert_strict = {true | false};\nINSERT INTO <table_name> ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173 INSERT \u7684\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,d)=>{d.d(n,{Zo:()=>i,ah:()=>c});var s=d(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:d}){let i;return i=d?"function"==typeof e?e({}):e||l:c(e),s.createElement(r.Provider,{value:i},n)}}}]);