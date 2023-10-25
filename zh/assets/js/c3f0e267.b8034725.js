"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10593],{70645:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var s=r(85893),l=r(11151);const i={displayed_sidebar:"Chinese"},d="\u5bfc\u51fa\u603b\u89c8",c={id:"unloading/Export",title:"\u5bfc\u51fa\u603b\u89c8",description:"\u6570\u636e\u5bfc\u51fa\uff08Export\uff09\u662f StarRocks \u63d0\u4f9b\u7684\u4e00\u79cd\u5c06\u6570\u636e\u5bfc\u51fa\u5e76\u5b58\u50a8\u5230\u5176\u4ed6\u4ecb\u8d28\u4e0a\u7684\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u4ee5\u6587\u672c\u7684\u683c\u5f0f\uff0c\u901a\u8fc7 Broker \u8fdb\u7a0b\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\uff0c\u5982 HDFS/\u963f\u91cc\u4e91OSS/AWS S3\uff08\u6216\u8005\u517c\u5bb9S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff09 \u7b49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/unloading/Export.md",sourceDirName:"unloading",slug:"/unloading/Export",permalink:"/zh/docs/2.1/unloading/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/unloading/Export.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7406\u89e3StarRocks\u8868\u8bbe\u8ba1",permalink:"/zh/docs/2.1/table_design/StarRocks_table_design"},next:{title:"Flink Connector",permalink:"/zh/docs/2.1/unloading/Flink_connector"}},o={},t=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u6d41\u7a0b",id:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u6d41\u7a0b",level:3},{value:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206",id:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206",level:3},{value:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c",id:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c",level:3},{value:"Broker \u53c2\u6570",id:"broker-\u53c2\u6570",level:4},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",id:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",level:4},{value:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a query id",id:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a-query-id",level:3},{value:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u4f5c\u4e1a",id:"\u53d6\u6d88\u4f5c\u4e1a",level:4},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",level:4},{value:"load_mem_limit",id:"load_mem_limit",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",img:"img",ol:"ol",code:"code",h4:"h4",pre:"pre"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5bfc\u51fa\u603b\u89c8",children:"\u5bfc\u51fa\u603b\u89c8"}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u5bfc\u51fa\uff08Export\uff09\u662f StarRocks \u63d0\u4f9b\u7684\u4e00\u79cd\u5c06\u6570\u636e\u5bfc\u51fa\u5e76\u5b58\u50a8\u5230\u5176\u4ed6\u4ecb\u8d28\u4e0a\u7684\u529f\u80fd\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5c06\u7528\u6237\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u4ee5",(0,s.jsx)(n.strong,{children:"\u6587\u672c"}),"\u7684\u683c\u5f0f\uff0c\u901a\u8fc7 Broker \u8fdb\u7a0b\u5bfc\u51fa\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\uff0c\u5982 HDFS/\u963f\u91cc\u4e91OSS/AWS S3\uff08\u6216\u8005\u517c\u5bb9S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff09 \u7b49\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u4ecb\u7ecdStarRocks\u6570\u636e\u5bfc\u51fa\u7684\u57fa\u672c\u539f\u7406\u3001\u4f7f\u7528\u65b9\u5f0f\u3001\u6700\u4f73\u5b9e\u8df5\u4ee5\u53ca\u6ce8\u610f\u4e8b\u9879\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u540d\u8bcd\u89e3\u91ca",children:"\u540d\u8bcd\u89e3\u91ca"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Broker"}),"\uff1aStarRocks \u53ef\u4ee5\u901a\u8fc7 Broker \u8fdb\u7a0b\u5bf9\u8fdc\u7aef\u5b58\u50a8\u8fdb\u884c\u6587\u4ef6\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tablet"}),"\uff1a\u6570\u636e\u5206\u7247\u3002\u4e00\u4e2a\u8868\u4f1a\u5206\u6210 1 \u4e2a\u6216\u591a\u4e2a\u5206\u533a\uff0c\u6bcf\u4e2a\u5206\u533a\u4f1a\u5212\u5206\u6210\u591a\u4e2a\u6570\u636e\u5206\u7247\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u6d41\u7a0b",children:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u6267\u884c\u6d41\u7a0b"}),"\n",(0,s.jsxs)(n.p,{children:["\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a",(0,s.jsx)(n.strong,{children:"\u5bfc\u51fa\u4f5c\u4e1a"}),"\u540e\uff0cStarRocks \u4f1a\u7edf\u8ba1\u8fd9\u4e2a\u4f5c\u4e1a\u6d89\u53ca\u7684\u6240\u6709 Tablet\uff0c\u7136\u540e\u5bf9\u8fd9\u4e9b Tablet \u8fdb\u884c",(0,s.jsx)(n.strong,{children:"\u5206\u7ec4"}),"\uff0c",(0,s.jsx)(n.strong,{children:"\u6bcf\u7ec4\u751f\u6210\u4e00\u4e2a"}),"\u7279\u6b8a\u7684",(0,s.jsx)(n.strong,{children:"\u67e5\u8be2\u8ba1\u5212"}),"\u3002\u8be5",(0,s.jsx)(n.strong,{children:"\u67e5\u8be2\u8ba1\u5212"}),"\u4f1a\u8bfb\u53d6\u6240\u5305\u542b\u7684 Tablet \u4e0a\u7684\u6570\u636e\uff0c\u7136\u540e\u901a\u8fc7 Broker \u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aef\u5b58\u50a8\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u603b\u4f53\u5904\u7406\u6d41\u7a0b\u5982\u4e0b:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"asset",src:r(78847).Z+"",width:"702",height:"362"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u56fe\u63cf\u8ff0\u7684\u5904\u7406\u6d41\u7a0b\u4e3b\u8981\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a Export \u4f5c\u4e1a\u5230 FE\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"FE \u7684\u5bfc\u51fa\u8c03\u5ea6\u5668\u4f1a\u901a\u8fc7\u4e24\u9636\u6bb5\u6765\u6267\u884c\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["a.  PENDING\uff1aFE \u751f\u6210",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a"})," ExportPendingTask\uff0c\u5411 BE \u53d1\u9001 snapshot \u547d\u4ee4\uff0c\u5bf9\u6240\u6709\u6d89\u53ca\u5230\u7684 Tablet \u505a\u4e00\u4e2a\u5feb\u7167\uff0c\u5e76\u751f\u6210",(0,s.jsx)(n.strong,{children:"\u591a\u4e2a"}),"\u67e5\u8be2\u8ba1\u5212\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["b.  EXPORTING\uff1aFE \u751f\u6210",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a"})," ExportExportingTask\uff0c\u5f00\u59cb\u6267\u884c",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a\u4e2a"}),"\u7684\u67e5\u8be2\u8ba1\u5212\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206",children:"\u67e5\u8be2\u8ba1\u5212\u62c6\u5206"}),"\n",(0,s.jsxs)(n.p,{children:["Export \u4f5c\u4e1a\u4f1a\u751f\u6210\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u8d1f\u8d23\u626b\u63cf\u4e00\u90e8\u5206 Tablet\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d",(0,s.jsx)(n.strong,{children:"\u6bcf\u4e2a BE"})," \u626b\u63cf\u7684\u6570\u636e\u91cf\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"})," \u8ba1\u7b97\u5f97\u5230\uff0c\u9ed8\u8ba4\u4e3a 256M\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d\u6bcf\u4e2a BE \u6700\u5c11\u4e00\u4e2a Tablet\uff0c\u6700\u591a\u5bfc\u51fa\u7684\u6570\u636e\u91cf\u4e0d\u8d85\u8fc7\u914d\u7f6e\u7684\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u4f5c\u4e1a\u7684\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212",(0,s.jsx)(n.strong,{children:"\u5e76\u884c\u6267\u884c"}),"\uff0c\u4efb\u52a1\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u901a\u8fc7 FE \u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_task_pool_size"})," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 5\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c",children:"\u67e5\u8be2\u8ba1\u5212\u6267\u884c"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u626b\u63cf\u591a\u4e2a\u5206\u7247\uff0c\u5c06\u8bfb\u53d6\u7684\u6570\u636e\u4ee5\u884c\u7684\u5f62\u5f0f\u7ec4\u7ec7\uff0c\u6bcf 1024 \u884c\u4e3a\u4e00\u4e2a batch\uff0c\u8c03\u7528 Broker \u5199\u5165\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u8be2\u8ba1\u5212\u9047\u5230\u9519\u8bef\u4f1a\u6574\u4f53\u81ea\u52a8\u91cd\u8bd5 3 \u6b21\u3002\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u91cd\u8bd5 3 \u6b21\u4f9d\u7136\u5931\u8d25\uff0c\u5219\u6574\u4e2a\u4f5c\u4e1a\u5931\u8d25\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks \u4f1a\u9996\u5148\u5728\u6307\u5b9a\u7684\u8fdc\u7aef\u5b58\u50a8\u7684\u8def\u5f84\u4e2d\uff0c\u5efa\u7acb\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"__starrocks_export_tmp_921d8f80-7c9d-11eb-9342-acde48001122"})," \u7684\u4e34\u65f6\u76ee\u5f55\uff08\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001122"})," \u4e3a\u4f5c\u4e1a\u7684 query id\uff09\u3002\u5bfc\u51fa\u7684\u6570\u636e\u9996\u5148\u4f1a\u5199\u5165\u8fd9\u4e2a\u4e34\u65f6\u76ee\u5f55\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4f1a\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"lineorder_921d8f80-7c9d-11eb-9342-acde48001122_1_2_0.csv.1615471540361"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1615471540361"})," \u4e3a\u65f6\u95f4\u6233\uff0c\u7528\u4e8e\u4fdd\u8bc1\u91cd\u8bd5\u751f\u6210\u7684\u6587\u4ef6\u4e0d\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u6240\u6709\u6570\u636e\u90fd\u5bfc\u51fa\u540e\uff0cStarRocks \u4f1a\u5c06\u8fd9\u4e9b\u6587\u4ef6 ",(0,s.jsx)(n.strong,{children:"rename"})," \u5230\u7528\u6237\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\uff0crename\u7684\u65f6\u5019\u4f1a\u53bb\u6389\u540e\u9762\u7684\u65f6\u95f4\u6233\u3002\u6700\u7ec8\u5bfc\u51fa\u7684\u6587\u4ef6\u540d\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"lineorder_921d8f80-7c9d-11eb-9342-acde48001122_1_2_0.csv"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lineorder_"}),"\uff1a\u4e3a\u5bfc\u51fa\u6587\u4ef6\u7684\u524d\u7f00\uff0c\u7531\u7528\u6237\u6307\u5b9a\u5230\u5bfc\u51fa\u8def\u5f84\u4e2d\uff0c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a",(0,s.jsx)(n.code,{children:"data_"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001122"}),"\uff1a\u4e3a\u4f5c\u4e1a\u7684 query id\u3002\u6587\u4ef6\u540d\u9ed8\u8ba4\u5305\u542b query id\uff0c\u6307\u5b9a\u53c2\u6570 include_query_id = false \u540e\u4e0d\u5305\u542b\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1_2_0"}),"\uff1a\u5206\u4e3a\u4e09\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u4e3a",(0,s.jsx)(n.strong,{children:"\u67e5\u8be2\u8ba1\u5212"}),"\u5bf9\u5e94\u4efb\u52a1\u7684\u5e8f\u53f7\uff0c\u7b2c\u4e8c\u90e8\u5206\u4e3a\u4efb\u52a1\u4e2d",(0,s.jsx)(n.strong,{children:"\u5b9e\u4f8b"}),"\u7684\u5e8f\u53f7\uff0c\u7b2c\u4e09\u90e8\u5206\u4e3a\u4e00\u4e2a\u5b9e\u4f8b\u4e2d",(0,s.jsx)(n.strong,{children:"\u751f\u6210\u6587\u4ef6"}),"\u7684\u5e8f\u53f7\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"csv"}),"\uff1a\u4e3a\u5bfc\u51fa\u6587\u4ef6\u683c\u5f0f\uff0c\u76ee\u524d\u53ea\u652f\u6301 csv \u683c\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"broker-\u53c2\u6570",children:"Broker \u53c2\u6570"}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 Broker\u6587\u6863\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h4,{id:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",children:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u636e\u5bfc\u51fa\u547d\u4ee4\u7684\u8be6\u7ec6\u8bed\u6cd5\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP EXPORT"})," \u67e5\u770b\u3002\u5bfc\u51fa\u4f5c\u4e1a\u4e3e\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n(col1, col3)\nTO "hdfs://host/path/to/export/lineorder_" \nPROPERTIES\n(\n    "column_separator"=",",\n    "load_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "hdfs"\n(\n    "username" = "user",\n    "password" = "passwd",\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u6307\u5b9a\u9700\u8981\u5bfc\u51fa\u7684\u5206\u533a\uff0c\u4e0d\u5199\u9ed8\u8ba4\u5bfc\u51fa\u8868\u4e2d\u6240\u6709\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u6307\u5b9a\u9700\u8981\u5bfc\u51fa\u7684\u5217\uff0c\u987a\u5e8f\u53ef\u4ee5\u8ddf schema \u4e0d\u540c\uff0c\u4e0d\u5199\u9ed8\u8ba4\u5bfc\u51fa\u8868\u4e2d\u6240\u6709\u5217\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bfc\u51fa\u8def\u5f84",(0,s.jsx)(n.strong,{children:"\u5982\u679c\u6307\u5b9a\u5230\u76ee\u5f55"}),"\uff0c\u9700\u8981\u6307\u5b9a\u6700\u540e\u7684",(0,s.jsx)(n.code,{children:"/"}),"\uff0c\u5426\u5219\u6700\u540e\u7684\u90e8\u5206\u4f1a\u88ab\u5f53\u505a\u5bfc\u51fa\u6587\u4ef6\u7684\u524d\u7f00\u3002\u4e0d\u6307\u5b9a\u524d\u7f00\u9ed8\u8ba4\u4e3a",(0,s.jsx)(n.code,{children:"data_"}),"\u3002\n\u793a\u4f8b\u4e2d\u5bfc\u51fa\u6587\u4ef6\u4f1a\u751f\u6210\u5230 export \u76ee\u5f55\u4e2d\uff0c\u6587\u4ef6\u524d\u7f00\u4e3a ",(0,s.jsx)(n.code,{children:"lineorder_"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"PROPERTIES\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"column_separator"}),"\uff1a\u5217\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"\\t"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"line_delimiter"}),"\uff1a\u884c\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"\\n"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"load_mem_limit"}),"\uff1a \u8868\u793a Export \u4f5c\u4e1a\u4e2d\uff0c",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212"}),"\u5728",(0,s.jsx)(n.strong,{children:"\u5355\u4e2a BE"})," \u4e0a\u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u9ed8\u8ba4 2GB\u3002\u5355\u4f4d\u5b57\u8282\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"}),"\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 2 \u5c0f\u65f6\u3002\u5355\u4f4d\u79d2\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"include_query_id"}),": \u5bfc\u51fa\u6587\u4ef6\u540d\u4e2d\u662f\u5426\u5305\u542b query id\uff0c\u9ed8\u8ba4\u4e3a true\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a-query-id",children:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a query id"}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SELECT LAST_QUERY_ID()"})," \u547d\u4ee4\u83b7\u5f97\u5bfc\u51fa\u4f5c\u4e1a\u7684 query id\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 query id \u67e5\u770b\u6216\u8005\u53d6\u6d88\u4f5c\u4e1a\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001",children:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001"}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4ea4\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SHOW EXPORT"})," \u547d\u4ee4\u67e5\u8be2\u5bfc\u51fa\u4f5c\u4e1a\u72b6\u6001\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW EXPORT WHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7ed3\u679c\u4e3e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'     JobId: 14008\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3",columns:["col1", "col3"]}\n      Path: oss://bj-test/export/\nCreateTime: 2019-06-25 17:08:24\n StartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\n   Timeout: 3600\n  ErrorMsg: N/A\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JobId\uff1a\u4f5c\u4e1a\u7684\u552f\u4e00 ID"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"State\uff1a\u4f5c\u4e1a\u72b6\u6001\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PENDING\uff1a\u4f5c\u4e1a\u5f85\u8c03\u5ea6"}),"\n",(0,s.jsx)(n.li,{children:"EXPORING\uff1a\u6570\u636e\u5bfc\u51fa\u4e2d"}),"\n",(0,s.jsx)(n.li,{children:"FINISHED\uff1a\u4f5c\u4e1a\u6210\u529f"}),"\n",(0,s.jsx)(n.li,{children:"CANCELLED\uff1a\u4f5c\u4e1a\u5931\u8d25"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Progress\uff1a\u4f5c\u4e1a\u8fdb\u5ea6\u3002\u8be5\u8fdb\u5ea6\u4ee5\u67e5\u8be2\u8ba1\u5212\u4e3a\u5355\u4f4d\u3002\u5047\u8bbe\u4e00\u5171 10 \u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5f53\u524d\u5df2\u5b8c\u6210 3 \u4e2a\uff0c\u5219\u8fdb\u5ea6\u4e3a 30%\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TaskInfo\uff1a\u4ee5 Json \u683c\u5f0f\u5c55\u793a\u7684\u4f5c\u4e1a\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"db\uff1a\u6570\u636e\u5e93\u540d"}),"\n",(0,s.jsx)(n.li,{children:"tbl\uff1a\u8868\u540d"}),"\n",(0,s.jsx)(n.li,{children:"partitions\uff1a\u6307\u5b9a\u5bfc\u51fa\u7684\u5206\u533a\u3002*\u8868\u793a\u6240\u6709\u5206\u533a\u3002"}),"\n",(0,s.jsx)(n.li,{children:"mem limit\uff1a\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u9650\u5236\u3002\u5355\u4f4d\u5b57\u8282\u3002"}),"\n",(0,s.jsx)(n.li,{children:"column separator\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u5217\u5206\u9694\u7b26\u3002"}),"\n",(0,s.jsx)(n.li,{children:"line delimiter\uff1a\u5bfc\u51fa\u6587\u4ef6\u7684\u884c\u5206\u9694\u7b26\u3002"}),"\n",(0,s.jsx)(n.li,{children:"tablet num\uff1a\u6d89\u53ca\u7684\u603b Tablet \u6570\u91cf\u3002"}),"\n",(0,s.jsx)(n.li,{children:"broker\uff1a\u4f7f\u7528\u7684 broker \u7684\u540d\u79f0\u3002"}),"\n",(0,s.jsx)(n.li,{children:"coord num\uff1a\u67e5\u8be2\u8ba1\u5212\u7684\u4e2a\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"columns\uff1a\u5bfc\u51fa\u7684\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Path\uff1a\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u5bfc\u51fa\u8def\u5f84\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CreateTime/StartTime/FinishTime\uff1a\u4f5c\u4e1a\u7684\u521b\u5efa\u65f6\u95f4\u3001\u5f00\u59cb\u8c03\u5ea6\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Timeout\uff1a\u4f5c\u4e1a\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002\u8be5\u65f6\u95f4\u4ece CreateTime \u5f00\u59cb\u8ba1\u7b97\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ErrorMsg\uff1a\u5982\u679c\u4f5c\u4e1a\u51fa\u73b0\u9519\u8bef\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u9519\u8bef\u539f\u56e0\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53d6\u6d88\u4f5c\u4e1a",children:"\u53d6\u6d88\u4f5c\u4e1a"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CANCEL EXPORT WHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsx)(n.h4,{id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",children:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a Export \u4f5c\u4e1a\u6709\u591a\u5c11\u67e5\u8be2\u8ba1\u5212\u9700\u8981\u6267\u884c\uff0c\u53d6\u51b3\u4e8e\u603b\u5171\u6709\u591a\u5c11 Tablet\uff0c\u4ee5\u53ca\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u53ef\u4ee5\u5904\u7406\u7684\u6700\u5927\u6570\u636e\u91cf\u3002\n\u4f5c\u4e1a\u662f\u6309\u7167\u67e5\u8be2\u8ba1\u5212\u6765\u91cd\u8bd5\u7684\uff0c\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u5904\u7406\u66f4\u591a\u7684\u6570\u636e\u91cf\uff0c\u67e5\u8be2\u8ba1\u5212\u51fa\u9519\uff08\u6bd4\u5982\u8c03\u7528 Broker \u7684 RPC \u5931\u8d25\uff0c\u8fdc\u7aef\u5b58\u50a8\u51fa\u73b0\u6296\u52a8\u7b49\uff09\uff0c\u4f1a\u5bfc\u81f4\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u7684\u91cd\u8bd5\u6210\u672c\u53d8\u9ad8\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d\u6bcf\u4e2a BE \u626b\u63cf\u7684\u6570\u636e\u91cf\u7531 FE \u914d\u7f6e\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"})," \u8ba1\u7b97\u5f97\u5230\uff0c\u9ed8\u8ba4\u4e3a 256M\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d\u6bcf\u4e2a BE \u6700\u5c11\u4e00\u4e2a Tablet\uff0c\u6700\u591a\u5bfc\u51fa\u7684\u6570\u636e\u91cf\u4e0d\u8d85\u8fc7\u914d\u7f6e\u7684\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u4f5c\u4e1a\u7684\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u5e76\u884c\u6267\u884c\uff0c\u4efb\u52a1\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u901a\u8fc7 FE \u53c2\u6570 ",(0,s.jsx)(n.code,{children:"export_task_pool_size"})," \u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 5\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"load_mem_limit",children:"load_mem_limit"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u5e38\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709\u300c\u626b\u63cf-\u5bfc\u51fa\u300d\u4e24\u90e8\u5206\uff0c\u4e0d\u6d89\u53ca\u9700\u8981\u592a\u591a\u5185\u5b58\u7684\u8ba1\u7b97\u903b\u8f91\u3002\u6240\u4ee5\u901a\u5e38 2GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\uff0c\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u6b64\u65f6\u9700\u8981\u4fee\u6539\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u66f4\u5927\u7684\u5185\u5b58\uff0c\u6bd4\u5982 4GB\u30018GB \u7b49\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e0d\u5efa\u8bae\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a Export \u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u5728\u51e0\u5341 GB\u3002\u8fc7\u5927\u7684\u5bfc\u51fa\u4f1a\u5bfc\u81f4\u66f4\u591a\u7684\u5783\u573e\u6587\u4ef6\u548c\u66f4\u9ad8\u7684\u91cd\u8bd5\u6210\u672c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728 Export \u4f5c\u4e1a\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c FE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219 Export \u4f5c\u4e1a\u4f1a\u5931\u8d25\uff0c\u9700\u8981\u7528\u6237\u91cd\u65b0\u63d0\u4ea4\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["Export \u4f5c\u4e1a\u4ea7\u751f\u7684",(0,s.jsx)(n.code,{children:"__starrocks_export_tmp_xxx"}),"\u4e34\u65f6\u76ee\u5f55\uff0c\u4f5c\u4e1a\u5931\u8d25\u6216\u6210\u529f\u540e\u4f1a\u81ea\u52a8\u5220\u9664\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f53 Export \u8fd0\u884c\u5b8c\u6210\u540e\uff08\u6210\u529f\u6216\u5931\u8d25\uff09\uff0cFE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219",(0,s.jsx)(n.code,{children:"SHOW EXPORT"}),"\u5c55\u793a\u7684\u4f5c\u4e1a\u7684\u90e8\u5206\u4fe1\u606f\u4f1a\u4e22\u5931\uff0c\u65e0\u6cd5\u67e5\u770b\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"Export \u4f5c\u4e1a\u53ea\u4f1a\u5bfc\u51fa Base \u8868\u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bfc\u51fa Rollup Index \u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Export \u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 IO \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u76f8\u5173\u914d\u7f6e",children:"\u76f8\u5173\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3b\u8981\u4ecb\u7ecd FE \u4e2d\u7684\u76f8\u5173\u914d\u7f6e\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"export_checker_interval_second"}),"\uff1aExport \u4f5c\u4e1a\u8c03\u5ea6\u5668\u7684\u8c03\u5ea6\u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 5 \u79d2\u3002\u8bbe\u7f6e\u8be5\u53c2\u6570\u9700\u91cd\u542f FE\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"export_running_job_num_limit"}),"\uff1a\u6b63\u5728\u8fd0\u884c\u7684 Export \u4f5c\u4e1a\u6570\u91cf\u9650\u5236\u3002\u5982\u679c\u8d85\u8fc7\uff0c\u5219\u4f5c\u4e1a\u5c06\u7b49\u5f85\u5e76\u5904\u4e8e PENDING \u72b6\u6001\u3002\u9ed8\u8ba4\u4e3a 5\uff0c\u53ef\u4ee5\u8fd0\u884c\u65f6\u8c03\u6574\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"export_task_default_timeout_second"}),"\uff1aExport \u4f5c\u4e1a\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 2 \u5c0f\u65f6\u3002\u53ef\u4ee5\u8fd0\u884c\u65f6\u8c03\u6574\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"}),": \u6bcf\u4e2a\u5bfc\u51fa\u4efb\u52a1\u5728\u6bcf\u4e2a BE \u4e0a\u6700\u591a\u5bfc\u51fa\u7684\u6570\u636e\u91cf\uff0c\u7528\u4e8e\u62c6\u5206\u5bfc\u51fa\u4f5c\u4e1a\u5e76\u884c\u5904\u7406\u3002\u6309\u538b\u7f29\u540e\u6570\u636e\u91cf\u8ba1\u7b97\uff0c\u9ed8\u8ba4\u4e3a 256M\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"export_task_pool_size"}),": \u5bfc\u51fa\u4efb\u52a1\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u3002\u9ed8\u8ba4\u4e3a 5\u3002"]}),"\n"]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},78847:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/5.3.1-1-1a6bbcd94c393cc58b7c7bfb3767d6c9.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var s=r(67294);const l=s.createContext({});function i(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||d:i(e),s.createElement(l.Provider,{value:c},n)}}}]);