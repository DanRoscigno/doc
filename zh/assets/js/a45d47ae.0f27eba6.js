"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1787],{62603:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>t,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var d=s(85893),c=s(11151);const l={displayed_sidebar:"Chinese31"},i="\u901a\u8fc7 HTTP PUT \u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e",r={id:"loading/StreamLoad",title:"\u901a\u8fc7 HTTP PUT \u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e",description:"StarRocks \u63d0\u4f9b\u57fa\u4e8e HTTP \u534f\u8bae\u7684 Stream Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u5e2e\u52a9\u60a8\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/loading/StreamLoad.md",sourceDirName:"loading",slug:"/loading/StreamLoad",permalink:"/doc/zh/docs/2.5/loading/StreamLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/loading/StreamLoad.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u4e25\u683c\u6a21\u5f0f",permalink:"/doc/zh/docs/2.5/loading/load_concept/strict_mode"},next:{title:"\u4ece Apache Kafka\xae \u5bfc\u5165",permalink:"/doc/zh/docs/2.5/category/\u4ece-apache-kafka-\u5bfc\u5165"}},o={},a=[{value:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",id:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5bfc\u5165\u672c\u5730\u6587\u4ef6",id:"\u5bfc\u5165\u672c\u5730\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u5bfc\u5165 CSV \u683c\u5f0f\u7684\u6570\u636e",id:"\u5bfc\u5165-csv-\u683c\u5f0f\u7684\u6570\u636e",level:4},{value:"\u6570\u636e\u6837\u4f8b",id:"\u6570\u636e\u6837\u4f8b",level:5},{value:"\u547d\u4ee4\u793a\u4f8b",id:"\u547d\u4ee4\u793a\u4f8b",level:5},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:5},{value:"\u5bfc\u5165 JSON \u683c\u5f0f\u7684\u6570\u636e",id:"\u5bfc\u5165-json-\u683c\u5f0f\u7684\u6570\u636e",level:4},{value:"\u6570\u636e\u6837\u4f8b",id:"\u6570\u636e\u6837\u4f8b-1",level:5},{value:"\u547d\u4ee4\u793a\u4f8b",id:"\u547d\u4ee4\u793a\u4f8b-1",level:5},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e-1",level:5},{value:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a",id:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a",level:3},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",blockquote:"blockquote",h2:"h2",code:"code",strong:"strong",img:"img",h3:"h3",h4:"h4",h5:"h5",ol:"ol",pre:"pre"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u901a\u8fc7-http-put-\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e",children:"\u901a\u8fc7 HTTP PUT \u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:"StarRocks \u63d0\u4f9b\u57fa\u4e8e HTTP \u534f\u8bae\u7684 Stream Load \u5bfc\u5165\u65b9\u5f0f\uff0c\u5e2e\u52a9\u60a8\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u6216\u6d41\u5f0f\u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u662f\u4e00\u79cd\u540c\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\u3002\u60a8\u63d0\u4ea4\u5bfc\u5165\u4f5c\u4e1a\u4ee5\u540e\uff0cStarRocks \u4f1a\u540c\u6b65\u5730\u6267\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5e76\u8fd4\u56de\u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de\u7684\u7ed3\u679c\u4fe1\u606f\u6765\u5224\u65ad\u5bfc\u5165\u4f5c\u4e1a\u662f\u5426\u6210\u529f\u3002"}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u9002\u7528\u4e8e\u4ee5\u4e0b\u4e1a\u52a1\u573a\u666f\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5bfc\u5165\u672c\u5730\u6570\u636e\u6587\u4ef6\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u822c\u53ef\u91c7\u7528 curl \u547d\u4ee4\u76f4\u63a5\u63d0\u4ea4\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5c06\u672c\u5730\u6570\u636e\u6587\u4ef6\u7684\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5bfc\u5165\u5b9e\u65f6\u4ea7\u751f\u7684\u6570\u636e\u6d41\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e00\u822c\u53ef\u91c7\u7528 Apache Flink\xae \u7b49\u7a0b\u5e8f\u63d0\u4ea4\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\uff0c\u6301\u7eed\u751f\u6210\u4e00\u7cfb\u5217\u5bfc\u5165\u4efb\u52a1\uff0c\u5c06\u5b9e\u65f6\u4ea7\u751f\u7684\u6570\u636e\u6d41\u6301\u7eed\u4e0d\u65ad\u5730\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Stream Load \u652f\u6301\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u505a\u6570\u636e\u8f6c\u6362\u3001\u4ee5\u53ca\u901a\u8fc7 UPSERT \u548c DELETE \u64cd\u4f5c\u5b9e\u73b0\u6570\u636e\u53d8\u66f4\u3002\u8bf7\u53c2\u89c1",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/Etl_in_loading",children:"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u6570\u636e\u8f6c\u6362"}),"\u548c",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/Load_to_Primary_Key_tables",children:"\u901a\u8fc7\u5bfc\u5165\u5b9e\u73b0\u6570\u636e\u53d8\u66f4"}),"\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6ce8\u610f\uff1aStream Load \u64cd\u4f5c\u4f1a\u540c\u65f6\u66f4\u65b0\u548c StarRocks \u539f\u59cb\u8868\u76f8\u5173\u7684\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f",children:"\u652f\u6301\u7684\u6570\u636e\u6587\u4ef6\u683c\u5f0f"}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u652f\u6301\u5982\u4e0b\u6570\u636e\u6587\u4ef6\u683c\u5f0f\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"CSV"}),"\n",(0,d.jsx)(n.li,{children:"JSON"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"streaming_load_max_mb"})," \u53c2\u6570\u6765\u8bbe\u7f6e\u5355\u4e2a\u6e90\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u4e0a\u9650\uff0c\u4f46\u4e00\u822c\u4e0d\u5efa\u8bae\u8c03\u5927\u6b64\u53c2\u6570\u3002\u5177\u4f53\u8bf7\u53c2\u89c1\u672c\u6587\u6863\u201c",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/StreamLoad#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE",children:"\u53c2\u6570\u914d\u7f6e"}),"\u201d\u7ae0\u8282\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsx)(n.p,{children:"\u5bf9\u4e8e CSV \u683c\u5f0f\u7684\u6570\u636e\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"StarRocks \u652f\u6301\u8bbe\u7f6e\u957f\u5ea6\u6700\u5927\u4e0d\u8d85\u8fc7 50 \u4e2a\u5b57\u8282\u7684 UTF-8 \u7f16\u7801\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5217\u5206\u9694\u7b26\uff0c\u5305\u62ec\u5e38\u89c1\u7684\u9017\u53f7 (,)\u3001Tab \u548c Pipe (|)\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u7a7a\u503c (null) \u7528 ",(0,d.jsx)(n.code,{children:"\\N"})," \u8868\u793a\u3002\u6bd4\u5982\uff0c\u6570\u636e\u6587\u4ef6\u4e00\u5171\u6709\u4e09\u5217\uff0c\u5176\u4e2d\u67d0\u884c\u6570\u636e\u7684\u7b2c\u4e00\u5217\u3001\u7b2c\u4e09\u5217\u6570\u636e\u5206\u522b\u4e3a ",(0,d.jsx)(n.code,{children:"a"})," \u548c ",(0,d.jsx)(n.code,{children:"b"}),"\uff0c\u7b2c\u4e8c\u5217\u6ca1\u6709\u6570\u636e\uff0c\u5219\u7b2c\u4e8c\u5217\u9700\u8981\u7528 ",(0,d.jsx)(n.code,{children:"\\N"})," \u6765\u8868\u793a\u7a7a\u503c\uff0c\u5199\u4f5c ",(0,d.jsx)(n.code,{children:"a,\\N,b"}),"\uff0c\u800c\u4e0d\u662f ",(0,d.jsx)(n.code,{children:"a,,b"}),"\u3002",(0,d.jsx)(n.code,{children:"a,,b"})," \u8868\u793a\u7b2c\u4e8c\u5217\u662f\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u5f53\u524d\u4e0d\u652f\u6301\u5bfc\u5165\u67d0\u4e00\u5217\u4e3a JSON \u7684 CSV \u6587\u4ef6\u7684\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u57fa\u672c\u539f\u7406",children:"\u57fa\u672c\u539f\u7406"}),"\n",(0,d.jsx)(n.p,{children:"\u60a8\u9700\u8981\u5728\u5ba2\u6237\u7aef\u4e0a\u901a\u8fc7 HTTP \u53d1\u9001\u5bfc\u5165\u4f5c\u4e1a\u8bf7\u6c42\u7ed9 FE\uff0cFE \u4f1a\u901a\u8fc7 HTTP \u91cd\u5b9a\u5411 (Redirect) \u6307\u4ee4\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u67d0\u4e00\u4e2a BE\u3002\u6216\u8005\uff0c\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u53d1\u9001\u5bfc\u5165\u4f5c\u4e1a\u8bf7\u6c42\u7ed9\u67d0\u4e00\u4e2a BE\u3002"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u628a\u5bfc\u5165\u4f5c\u4e1a\u8bf7\u6c42\u53d1\u9001\u7ed9 FE\uff0cFE \u4f1a\u901a\u8fc7\u8f6e\u8be2\u673a\u5236\u9009\u5b9a\u7531\u54ea\u4e00\u4e2a BE \u6765\u63a5\u6536\u8bf7\u6c42\uff0c\u4ece\u800c\u5b9e\u73b0 StarRocks \u96c6\u7fa4\u5185\u7684\u8d1f\u8f7d\u5747\u8861\u3002\u56e0\u6b64\uff0c\u63a8\u8350\u60a8\u628a\u5bfc\u5165\u4f5c\u4e1a\u8bf7\u6c42\u53d1\u9001\u7ed9 FE\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u63a5\u6536\u5bfc\u5165\u4f5c\u4e1a\u8bf7\u6c42\u7684 BE \u4f5c\u4e3a Coordinator BE\uff0c\u5c06\u6570\u636e\u6309\u8868\u7ed3\u6784\u5212\u5206\u3001\u5e76\u5206\u53d1\u6570\u636e\u5230\u5176\u4ed6\u5404\u76f8\u5173\u7684 BE\u3002\u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u4fe1\u606f\u7531 Coordinator BE \u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u60a8\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u505c\u6b62 Coordinator BE\uff0c\u4f1a\u5bfc\u81f4\u5bfc\u5165\u4f5c\u4e1a\u5931\u8d25\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86 Stream Load \u7684\u4e3b\u8981\u6d41\u7a0b\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Stream Load \u539f\u7406\u56fe",src:s(75635).Z+"",width:"1788",height:"1080"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5bfc\u5165\u672c\u5730\u6587\u4ef6",children:"\u5bfc\u5165\u672c\u5730\u6587\u4ef6"}),"\n",(0,d.jsx)(n.h3,{id:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a",children:"\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,d.jsxs)(n.p,{children:["\u672c\u6587\u4ee5 curl \u5de5\u5177\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Stream Load \u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u5bfc\u5165 CSV \u6216 JSON \u683c\u5f0f\u7684\u6570\u636e\u3002\u6709\u5173\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u7684\u8be6\u7ec6\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6ce8\u610f\u5728 StarRocks \u4e2d\uff0c\u90e8\u5206\u6587\u5b57\u662f SQL \u8bed\u8a00\u7684\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u4e0d\u80fd\u76f4\u63a5\u7528\u4e8e SQL \u8bed\u53e5\u3002\u5982\u679c\u60f3\u5728 SQL \u8bed\u53e5\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u4fdd\u7559\u5173\u952e\u5b57\uff0c\u5fc5\u987b\u7528\u53cd\u5f15\u53f7 (`) \u5305\u542b\u8d77\u6765\u3002\u53c2\u89c1",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/keywords",children:"\u5173\u952e\u5b57"}),"\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u5bfc\u5165-csv-\u683c\u5f0f\u7684\u6570\u636e",children:"\u5bfc\u5165 CSV \u683c\u5f0f\u7684\u6570\u636e"}),"\n",(0,d.jsx)(n.h5,{id:"\u6570\u636e\u6837\u4f8b",children:"\u6570\u636e\u6837\u4f8b"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u521b\u5efa\u4e00\u4e2a CSV \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"example1.csv"}),"\u3002\u6587\u4ef6\u4e00\u5171\u5305\u542b\u4e09\u5217\uff0c\u5206\u522b\u4ee3\u8868\u7528\u6237 ID\u3001\u7528\u6237\u59d3\u540d\u548c\u7528\u6237\u5f97\u5206\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain_Text",children:"1,Lily,23\n2,Rose,23\n3,Alice,24\n4,Julia,25\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"test_db"})," \u4e2d\u521b\u5efa\u4e00\u5f20\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"table1"})," \u7684\u4e3b\u952e\u6a21\u578b\u8868\u3002\u8868\u5305\u542b ",(0,d.jsx)(n.code,{children:"id"}),"\u3001",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"score"})," \u4e09\u5217\uff0c\u4e3b\u952e\u4e3a ",(0,d.jsx)(n.code,{children:"id"})," \u5217\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `table1`\n(\n    `id` int(11) NOT NULL COMMENT "\u7528\u6237 ID",\n    `name` varchar(65533) NULL COMMENT "\u7528\u6237\u59d3\u540d",\n    `score` int(11) NOT NULL COMMENT "\u7528\u6237\u5f97\u5206"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsxs)(n.p,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h5,{id:"\u547d\u4ee4\u793a\u4f8b",children:"\u547d\u4ee4\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff0c\u628a ",(0,d.jsx)(n.code,{children:"example1.csv"})," \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 ",(0,d.jsx)(n.code,{children:"table1"})," \u8868\u4e2d\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> -H "label:123" \\\n    -H "Expect:100-continue" \\\n    -H "column_separator:," \\\n    -H "columns: id, name, score" \\\n    -T example1.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table1/_stream_load\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"example1.csv"})," \u6587\u4ef6\u4e2d\u5305\u542b\u4e09\u5217\uff0c\u8ddf ",(0,d.jsx)(n.code,{children:"table1"})," \u8868\u7684 ",(0,d.jsx)(n.code,{children:"id"}),"\u3001",(0,d.jsx)(n.code,{children:"name"}),"\u3001",(0,d.jsx)(n.code,{children:"score"})," \u4e09\u5217\u4e00\u4e00\u5bf9\u5e94\uff0c\u5e76\u7528\u9017\u53f7 (,) \u4f5c\u4e3a\u5217\u5206\u9694\u7b26\u3002\u56e0\u6b64\uff0c\u9700\u8981\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"column_separator"})," \u53c2\u6570\u6307\u5b9a\u5217\u5206\u9694\u7b26\u4e3a\u9017\u53f7 (,)\uff0c\u5e76\u4e14\u5728 ",(0,d.jsx)(n.code,{children:"columns"})," \u53c2\u6570\u4e2d\u6309\u987a\u5e8f\u628a ",(0,d.jsx)(n.code,{children:"example1.csv"})," \u6587\u4ef6\u4e2d\u7684\u4e09\u5217\u4e34\u65f6\u547d\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"id"}),"\u3001",(0,d.jsx)(n.code,{children:"name"}),"\u3001",(0,d.jsx)(n.code,{children:"score"}),"\u3002",(0,d.jsx)(n.code,{children:"columns"})," \u53c2\u6570\u4e2d\u58f0\u660e\u7684\u4e09\u5217\uff0c\u6309\u540d\u79f0\u5bf9\u5e94 ",(0,d.jsx)(n.code,{children:"table1"})," \u8868\u4e2d\u7684\u4e09\u5217\u3002"]}),"\n",(0,d.jsx)(n.h5,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,d.jsxs)(n.p,{children:["\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u67e5\u8be2 ",(0,d.jsx)(n.code,{children:"table1"})," \u8868\u7684\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM table1;\n\n+------+-------+-------+\n| id   | name  | score |\n+------+-------+-------+\n|    1 | Lily  |    23 |\n|    2 | Rose  |    23 |\n|    3 | Alice |    24 |\n|    4 | Julia |    25 |\n+------+-------+-------+\n\n4 rows in set (0.00 sec)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5bfc\u5165-json-\u683c\u5f0f\u7684\u6570\u636e",children:"\u5bfc\u5165 JSON \u683c\u5f0f\u7684\u6570\u636e"}),"\n",(0,d.jsx)(n.h5,{id:"\u6570\u636e\u6837\u4f8b-1",children:"\u6570\u636e\u6837\u4f8b"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u521b\u5efa\u4e00\u4e2a JSON \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"example2.json"}),"\u3002\u6587\u4ef6\u4e00\u5171\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff0c\u5206\u522b\u4ee3\u8868\u57ce\u5e02\u540d\u79f0\u548c\u57ce\u5e02 ID\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{"name": "\u5317\u4eac", "code": 2}\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"test_db"})," \u4e2d\u521b\u5efa\u4e00\u5f20\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"table2"})," \u7684\u4e3b\u952e\u6a21\u578b\u8868\u3002\u8868\u5305\u542b ",(0,d.jsx)(n.code,{children:"id"})," \u548c ",(0,d.jsx)(n.code,{children:"city"})," \u4e24\u5217\uff0c\u4e3b\u952e\u4e3a ",(0,d.jsx)(n.code,{children:"id"})," \u5217\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `table2`\n(\n    `id` int(11) NOT NULL COMMENT "\u57ce\u5e02 ID",\n     `city` varchar(65533) NULL COMMENT "\u57ce\u5e02\u540d\u79f0"\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nDISTRIBUTED BY HASH(`id`);\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsxs)(n.p,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h5,{id:"\u547d\u4ee4\u793a\u4f8b-1",children:"\u547d\u4ee4\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u628a ",(0,d.jsx)(n.code,{children:"example2.json"})," \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230 ",(0,d.jsx)(n.code,{children:"table2"})," \u8868\u4e2d\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Bash",children:'curl -v --location-trusted -u <username>:<password> -H "strict_mode: true" \\\n    -H "Expect:100-continue" \\\n    -H "format: json" -H "jsonpaths: [\\"$.name\\", \\"$.code\\"]" \\\n    -H "columns: city,tmp_id, id = tmp_id * 100" \\\n    -T example2.json -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table2/_stream_load\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"example2.json"})," \u6587\u4ef6\u4e2d\u5305\u542b ",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"code"})," \u4e24\u4e2a\u952e\uff0c\u8ddf ",(0,d.jsx)(n.code,{children:"table2"})," \u8868\u4e2d\u7684\u5217\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u56fe\u6240\u793a\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"JSON \u6620\u5c04\u56fe",src:s(26931).Z+"",width:"1540",height:"1030"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0a\u56fe\u6240\u793a\u7684\u5bf9\u5e94\u5173\u7cfb\u63cf\u8ff0\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u63d0\u53d6 ",(0,d.jsx)(n.code,{children:"example2.json"})," \u6587\u4ef6\u4e2d\u5305\u542b\u7684 ",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"code"})," \u4e24\u4e2a\u5b57\u6bb5\uff0c\u6309\u987a\u5e8f\u4f9d\u6b21\u6620\u5c04\u5230 ",(0,d.jsx)(n.code,{children:"jsonpaths"})," \u53c2\u6570\u4e2d\u58f0\u660e\u7684 ",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"code"})," \u4e24\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u63d0\u53d6 ",(0,d.jsx)(n.code,{children:"jsonpaths"})," \u53c2\u6570\u4e2d\u58f0\u660e\u7684 ",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"code"})," \u4e24\u4e2a\u5b57\u6bb5\uff0c",(0,d.jsx)(n.strong,{children:"\u6309\u987a\u5e8f\u6620\u5c04"}),"\u5230 ",(0,d.jsx)(n.code,{children:"columns"})," \u53c2\u6570\u4e2d\u58f0\u660e\u7684 ",(0,d.jsx)(n.code,{children:"city"})," \u548c ",(0,d.jsx)(n.code,{children:"tmp_id"})," \u4e24\u5217\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u63d0\u53d6 ",(0,d.jsx)(n.code,{children:"columns"})," \u53c2\u6570\u58f0\u660e\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"city"})," \u548c ",(0,d.jsx)(n.code,{children:"id"})," \u4e24\u5217\uff0c",(0,d.jsx)(n.strong,{children:"\u6309\u540d\u79f0\u6620\u5c04"}),"\u5230 ",(0,d.jsx)(n.code,{children:"table2"})," \u8868\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"city"})," \u548c ",(0,d.jsx)(n.code,{children:"id"})," \u4e24\u5217\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5148\u5c06 ",(0,d.jsx)(n.code,{children:"example2.json"})," \u6587\u4ef6\u4e2d ",(0,d.jsx)(n.code,{children:"code"})," \u5b57\u6bb5\u5bf9\u5e94\u7684\u503c\u4e58\u4ee5 100\uff0c\u7136\u540e\u518d\u843d\u5165\u5230 ",(0,d.jsx)(n.code,{children:"table2"})," \u8868\u7684 ",(0,d.jsx)(n.code,{children:"id"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6709\u5173\u5bfc\u5165 JSON \u6570\u636e\u65f6 ",(0,d.jsx)(n.code,{children:"jsonpaths"}),"\u3001",(0,d.jsx)(n.code,{children:"columns"})," \u548c StarRocks \u8868\u4e2d\u7684\u5b57\u6bb5\u4e4b\u95f4\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u8bf7\u53c2\u89c1 STREAM LOAD \u6587\u6863\u4e2d\u201c",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD#%E5%88%97%E6%98%A0%E5%B0%84",children:"\u5217\u6620\u5c04"}),"\u201d\u7ae0\u8282\u3002"]}),"\n",(0,d.jsx)(n.h5,{id:"\u67e5\u8be2\u6570\u636e-1",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,d.jsxs)(n.p,{children:["\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u67e5\u8be2 ",(0,d.jsx)(n.code,{children:"table2"})," \u8868\u7684\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM table2;\n+------+--------+\n| id   | city   |\n+------+--------+\n| 200  | \u5317\u4eac    |\n+------+--------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a",children:"\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,d.jsxs)(n.p,{children:["\u5bfc\u5165\u4f5c\u4e1a\u7ed3\u675f\u540e\uff0cStarRocks \u4f1a\u4ee5 JSON \u683c\u5f0f\u8fd4\u56de\u672c\u6b21\u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u4fe1\u606f\uff0c\u5177\u4f53\u8bf7\u53c2\u89c1 STREAM LOAD \u6587\u6863\u4e2d\u201c",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD#%E8%BF%94%E5%9B%9E%E5%80%BC",children:"\u8fd4\u56de\u503c"}),"\u201d\u7ae0\u8282\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u4e0d\u652f\u6301\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a",children:"\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a"}),"\n",(0,d.jsx)(n.p,{children:"Stream Load \u4e0d\u652f\u6301\u624b\u52a8\u53d6\u6d88\u5bfc\u5165\u4f5c\u4e1a\u3002\u5982\u679c\u5bfc\u5165\u4f5c\u4e1a\u53d1\u751f\u8d85\u65f6\u6216\u8005\u5bfc\u5165\u9519\u8bef\uff0cStarRocks \u4f1a\u81ea\u52a8\u53d6\u6d88\u8be5\u4f5c\u4e1a\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u914d\u7f6e",children:"\u53c2\u6570\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u91cc\u4ecb\u7ecd\u4f7f\u7528 Stream Load \u5bfc\u5165\u65b9\u5f0f\u9700\u8981\u6ce8\u610f\u7684\u4e00\u4e9b\u7cfb\u7edf\u53c2\u6570\u914d\u7f6e\u3002\u8fd9\u4e9b\u53c2\u6570\u4f5c\u7528\u4e8e\u6240\u6709 Stream Load \u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"streaming_load_max_mb"}),"\uff1a\u5355\u4e2a\u6e90\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u4e0a\u9650\u3002\u9ed8\u8ba4\u6587\u4ef6\u5927\u5c0f\u4e0a\u9650\u4e3a 10 GB\u3002\u5177\u4f53\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/Configuration#be-%E9%85%8D%E7%BD%AE%E9%A1%B9",children:"BE \u914d\u7f6e\u9879"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5efa\u8bae\u4e00\u6b21\u5bfc\u5165\u7684\u6570\u636e\u91cf\u4e0d\u8981\u8d85\u8fc7 10 GB\u3002\u5982\u679c\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u8d85\u8fc7 10 GB\uff0c\u5efa\u8bae\u60a8\u62c6\u5206\u6210\u82e5\u5e72\u5c0f\u4e8e 10 GB \u7684\u6587\u4ef6\u5206\u6b21\u5bfc\u5165\u3002\u5982\u679c\u7531\u4e8e\u4e1a\u52a1\u573a\u666f\u9700\u8981\uff0c\u65e0\u6cd5\u62c6\u5206\u6570\u636e\u6587\u4ef6\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927\u8be5\u53c2\u6570\u7684\u53d6\u503c\uff0c\u4ece\u800c\u63d0\u9ad8\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u4e0a\u9650\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u60a8\u8c03\u5927\u8be5\u53c2\u6570\u7684\u53d6\u503c\uff0c\u9700\u8981\u91cd\u542f BE \u624d\u80fd\u751f\u6548\uff0c\u5e76\u4e14\u7cfb\u7edf\u6027\u80fd\u6709\u53ef\u80fd\u4f1a\u53d7\u5f71\u54cd\uff0c\u5e76\u4e14\u4e5f\u4f1a\u589e\u52a0\u5931\u8d25\u91cd\u8bd5\u65f6\u7684\u4ee3\u4ef7\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsx)(n.p,{children:"\u5bfc\u5165 JSON \u683c\u5f0f\u7684\u6570\u636e\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:'\u5355\u4e2a JSON \u5bf9\u8c61\u7684\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 4 GB\u3002\u5982\u679c JSON \u6587\u4ef6\u4e2d\u5355\u4e2a JSON \u5bf9\u8c61\u7684\u5927\u5c0f\u8d85\u8fc7 4 GB\uff0c\u4f1a\u63d0\u793a "This parser can\'t support a document that big." \u9519\u8bef\u3002'}),"\n",(0,d.jsxs)(n.li,{children:['HTTP \u8bf7\u6c42\u4e2d JSON Body \u7684\u5927\u5c0f\u9ed8\u8ba4\u4e0d\u80fd\u8d85\u8fc7 100 MB\u3002\u5982\u679c JSON Body \u7684\u5927\u5c0f\u8d85\u8fc7 100 MB\uff0c\u4f1a\u63d0\u793a "The size of this batch exceed the max size [104857600] of json type data data [8617627793]. Set ignore_json_size to skip check, although it may lead huge memory consuming." \u9519\u8bef\u3002\u4e3a\u907f\u514d\u8be5\u62a5\u9519\uff0c\u53ef\u4ee5\u5728 HTTP \u8bf7\u6c42\u5934\u4e2d\u6dfb\u52a0 ',(0,d.jsx)(n.code,{children:'"ignore_json_size:true"'})," \u8bbe\u7f6e\uff0c\u5ffd\u7565\u5bf9 JSON Body \u5927\u5c0f\u7684\u68c0\u67e5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"stream_load_default_timeout_second"}),"\uff1a\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a 600 \u79d2\u3002\u5177\u4f53\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/Configuration#%E9%85%8D%E7%BD%AE-fe-%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",children:"FE \u52a8\u6001\u53c2\u6570"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u60a8\u521b\u5efa\u7684\u5bfc\u5165\u4f5c\u4e1a\u7ecf\u5e38\u53d1\u751f\u8d85\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u9002\u5f53\u5730\u8c03\u5927\u8d85\u65f6\u65f6\u95f4\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u516c\u5f0f\u8ba1\u7b97\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4 > \u5f85\u5bfc\u5165\u6570\u636e\u91cf/\u5e73\u5747\u5bfc\u5165\u901f\u5ea6"})}),"\n",(0,d.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5982\u679c\u6e90\u6570\u636e\u6587\u4ef6\u7684\u5927\u5c0f\u4e3a 10 GB\uff0c\u5e76\u4e14\u5f53\u524d StarRocks \u96c6\u7fa4\u7684\u5e73\u5747\u5bfc\u5165\u901f\u5ea6\u4e3a 100 MB/s\uff0c\u5219\u8d85\u65f6\u65f6\u95f4\u5e94\u8be5\u8bbe\u7f6e\u4e3a\u5927\u4e8e 100 \u79d2\u3002"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsx)(n.p,{children:"\u201c\u5e73\u5747\u5bfc\u5165\u901f\u5ea6\u201d\u662f\u6307\u76ee\u524d StarRocks \u96c6\u7fa4\u7684\u5e73\u5747\u5bfc\u5165\u901f\u5ea6\u3002\u5bfc\u5165\u901f\u5ea6\u4e3b\u8981\u53d7\u9650\u4e8e\u96c6\u7fa4\u7684\u78c1\u76d8 I/O \u53ca BE \u4e2a\u6570\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Stream Load \u8fd8\u63d0\u4f9b ",(0,d.jsx)(n.code,{children:"timeout"})," \u53c2\u6570\u6765\u8bbe\u7f6e\u5f53\u524d\u5bfc\u5165\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u5177\u4f53\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,d.jsxs)(n.p,{children:["\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/faq/loading/Stream_load_faq",children:"Stream Load \u5e38\u89c1\u95ee\u9898"}),"\u3002"]})]})}const t=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(h,e)})):h(e)}},75635:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/4.2-1-zh-203b4b189c0e3796744f1032c326874f.png"},26931:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/4.2-2-593d191cb726e6eae8083ecea0c31d42.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var d=s(67294);const c=d.createContext({});function l(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:l(e),d.createElement(c.Provider,{value:r},n)}}}]);