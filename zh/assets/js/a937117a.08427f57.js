"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58933],{62655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var r=s(85893),l=s(11151);const d={displayed_sidebar:"Chinese31"},i="\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e",c={id:"unloading/Export",title:"\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 EXPORT \u8bed\u53e5\u628a StarRocks \u96c6\u7fa4\u4e2d\u6307\u5b9a\u8868\u6216\u5206\u533a\u4e0a\u7684\u6570\u636e\u4ee5 CSV \u7684\u683c\u5f0f\u5bfc\u51fa\u5230\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u3002\u5f53\u524d\u652f\u6301\u5bfc\u51fa\u5230\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf HDFS \u6216 AWS S3\u3001\u963f\u91cc\u4e91 OSS\u3001\u817e\u8baf\u4e91 COS\u3001\u534e\u4e3a\u4e91 OBS \u7b49\u4e91\u5b58\u50a8\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/unloading/Export.md",sourceDirName:"unloading",slug:"/unloading/Export",permalink:"/doc/zh/docs/2.5/unloading/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/unloading/Export.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u5bfc\u51fa\u6570\u636e",permalink:"/doc/zh/docs/2.5/category/\u5bfc\u51fa\u6570\u636e"},next:{title:"\u4f7f\u7528 Spark Connector \u8bfb\u53d6\u6570\u636e",permalink:"/doc/zh/docs/2.5/unloading/Spark_connector"}},o={},t=[{value:"\u80cc\u666f\u4fe1\u606f",id:"\u80cc\u666f\u4fe1\u606f",level:2},{value:"\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf",id:"\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5bfc\u51fa\u6d41\u7a0b",id:"\u5bfc\u51fa\u6d41\u7a0b",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2},{value:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",id:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",level:3},{value:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2 ID",id:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2-id",level:3},{value:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001",id:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001",level:3},{value:"\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a",id:"\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",level:3}];function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",img:"img",ol:"ol",h3:"h3",pre:"pre"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f7f\u7528-export-\u5bfc\u51fa\u6570\u636e",children:"\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/EXPORT",children:"EXPORT"})," \u8bed\u53e5\u628a StarRocks \u96c6\u7fa4\u4e2d\u6307\u5b9a\u8868\u6216\u5206\u533a\u4e0a\u7684\u6570\u636e\u4ee5 CSV \u7684\u683c\u5f0f\u5bfc\u51fa\u5230\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u3002\u5f53\u524d\u652f\u6301\u5bfc\u51fa\u5230\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf HDFS \u6216 AWS S3\u3001\u963f\u91cc\u4e91 OSS\u3001\u817e\u8baf\u4e91 COS\u3001\u534e\u4e3a\u4e91 OBS \u7b49\u4e91\u5b58\u50a8\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u80cc\u666f\u4fe1\u606f",children:"\u80cc\u666f\u4fe1\u606f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 v2.4 \u53ca\u4ee5\u524d\u7248\u672c\uff0cStarRocks \u5728\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e\u65f6\u9700\u8981\u501f\u52a9 Broker \u624d\u80fd\u8bbf\u95ee\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\uff0c\u79f0\u4e3a\u201c\u6709 Broker \u7684\u5bfc\u51fa\u201d\u3002\u5bfc\u51fa\u8bed\u53e5\u4e2d\u9700\u8981\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:'WITH BROKER "<broker_name>"'})," \u6765\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a Broker\u3002Broker \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u5c01\u88c5\u4e86\u6587\u4ef6\u7cfb\u7edf\u63a5\u53e3\uff0c\u80fd\u591f\u5e2e\u52a9 StarRocks \u5c06\u6570\u636e\u5bfc\u51fa\u5230\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea v2.5 \u8d77\uff0cStarRocks \u5728\u4f7f\u7528 EXPORT \u5bfc\u51fa\u6570\u636e\u65f6\u4e0d\u9700\u8981\u501f\u52a9 Broker \u5373\u53ef\u8bbf\u95ee\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\uff0c\u79f0\u4e3a\u201c\u65e0 Broker \u7684\u5bfc\u51fa\u201d\u3002\u5bfc\u51fa\u8bed\u53e5\u4e2d\u4e5f\u4e0d\u518d\u9700\u8981\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"broker_name"}),"\uff0c\u4f46\u7ee7\u7eed\u4fdd\u7559 ",(0,r.jsx)(n.code,{children:"WITH BROKER"})," \u5173\u952e\u5b57\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u65e0 Broker \u7684\u5bfc\u51fa\u5728\u6570\u636e\u6e90\u4e3a HDFS \u7684\u67d0\u4e9b\u573a\u666f\u4e0b\u4f1a\u53d7\u9650\uff0c\u8fd9\u65f6\u60a8\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c\u6709 Broker \u7684\u5bfc\u51fa\uff0c\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u914d\u7f6e\u4e86\u591a HDFS \u96c6\u7fa4\u65f6\uff0c\u60a8\u9700\u8981\u4e3a\u6bcf\u4e00\u4e2a HDFS \u96c6\u7fa4\u90e8\u7f72\u4e00\u4e2a\u72ec\u7acb\u7684 Broker\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u914d\u7f6e\u4e86\u5355 HDFS \u96c6\u7fa4\u3001\u4f46\u662f\u591a Kerberos \u7528\u6237\u65f6\uff0c\u60a8\u53ea\u9700\u8981\u90e8\u7f72\u4e00\u4e2a\u72ec\u7acb\u7684 Broker\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_BROKER",children:"SHOW BROKER"})," \u8bed\u53e5\u6765\u67e5\u770b\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u90e8\u7f72\u7684 Broker\u3002\u5982\u679c\u96c6\u7fa4\u4e2d\u6ca1\u6709\u90e8\u7f72 Broker\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/deployment/deploy_broker",children:"\u90e8\u7f72 Broker \u8282\u70b9"}),"\u5b8c\u6210 Broker \u90e8\u7f72\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf",children:"\u652f\u6301\u7684\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf HDFS"}),"\n",(0,r.jsx)(n.li,{children:"\u4e91\u5b58\u50a8\u7cfb\u7edf\uff0c\u5305\u62ec AWS S3\u3001\u963f\u91cc\u4e91 OSS\u3001\u817e\u8baf\u4e91 COS\u3001\u534e\u4e3a\u4e91 OBS"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5efa\u8bae\u4e0d\u8981\u4e00\u6b21\u6027\u5bfc\u51fa\u5927\u91cf\u6570\u636e\u3002\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u5efa\u8bae\u7684\u5bfc\u51fa\u6570\u636e\u91cf\u6700\u5927\u4e3a\u51e0\u5341 GB\u3002\u4e00\u6b21\u6027\u5bfc\u51fa\u8fc7\u91cf\u6570\u636e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5bfc\u51fa\u5931\u8d25\uff0c\u91cd\u8bd5\u7684\u6210\u672c\u4e5f\u4f1a\u589e\u52a0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8868\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u5efa\u8bae\u6309\u7167\u5206\u533a\u5bfc\u51fa\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u5bfc\u51fa\u4f5c\u4e1a\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c FE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u4f1a\u5bfc\u81f4\u5bfc\u51fa\u4f5c\u4e1a\u5931\u8d25\uff0c\u60a8\u9700\u8981\u91cd\u65b0\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5bfc\u51fa\u4f5c\u4e1a\u8fd0\u884c\u5b8c\u6210\u540e\uff08\u6210\u529f\u6216\u5931\u8d25\uff09\uff0c\u82e5 FE \u53d1\u751f\u91cd\u542f\u6216\u5207\u4e3b\uff0c\u5219 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"})," \u8bed\u53e5\u8fd4\u56de\u7684\u5bfc\u51fa\u4f5c\u4e1a\u4fe1\u606f\u4f1a\u53d1\u751f\u90e8\u5206\u4e22\u5931\uff0c\u65e0\u6cd5\u67e5\u770b\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u53ea\u4f1a\u5bfc\u51fa\u539f\u59cb\u8868 (Base Table) \u7684\u6570\u636e\uff0c\u4e0d\u4f1a\u5bfc\u51fa\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u4f1a\u626b\u63cf\u6570\u636e\uff0c\u5360\u7528 I/O \u8d44\u6e90\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u7684\u67e5\u8be2\u5ef6\u8fdf\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5bfc\u51fa\u6d41\u7a0b",children:"\u5bfc\u51fa\u6d41\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4ea4\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u540e\uff0cStarRocks \u4f1a\u7edf\u8ba1\u8fd9\u4e2a\u4f5c\u4e1a\u6d89\u53ca\u7684\u6240\u6709 Tablet\uff0c\u7136\u540e\u5bf9\u8fd9\u4e9b Tablet \u8fdb\u884c\u5206\u7ec4\uff0c\u6bcf\u7ec4\u751f\u6210\u4e00\u4e2a\u7279\u6b8a\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u8be5\u67e5\u8be2\u8ba1\u5212\u4f1a\u8bfb\u53d6\u6240\u5305\u542b\u7684 Tablet \u4e0a\u7684\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u5199\u5230\u8fdc\u7aef\u5b58\u50a8\u4e0a\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u603b\u4f53\u5904\u7406\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u5bfc\u51fa\u4f5c\u4e1a\u6d41\u7a0b\u56fe",src:s(99986).Z+"",width:"3488",height:"1476"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bfc\u51fa\u4f5c\u4e1a\u7684\u603b\u4f53\u5904\u7406\u6d41\u7a0b\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u5230 Leader FE\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["Leader FE \u4f1a\u5148\u5411\u96c6\u7fa4\u4e2d\u6240\u6709\u7684 BE \u53d1\u9001 ",(0,r.jsx)(n.code,{children:"snapshot"})," \u547d\u4ee4\uff0c\u5bf9\u6240\u6709\u6d89\u53ca\u5230\u7684 Tablet \u505a\u4e00\u4e2a\u5feb\u7167\uff0c\u4ee5\u4fdd\u6301\u5bfc\u51fa\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u5e76\u751f\u6210\u591a\u4e2a\u5bfc\u51fa\u5b50\u4efb\u52a1\u3002\u6bcf\u4e2a\u5b50\u4efb\u52a1\u5373\u4e3a\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4f1a\u8d1f\u8d23\u5904\u7406\u4e00\u90e8\u5206 Tablet\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"Leader FE \u4f1a\u628a\u4e00\u4e2a\u4e2a\u5bfc\u51fa\u5b50\u4efb\u52a1\u53d1\u9001\u7ed9 BE \u6267\u884c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u539f\u7406",children:"\u57fa\u672c\u539f\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6267\u884c\u67e5\u8be2\u8ba1\u5212\u7684\u65f6\u5019\uff0cStarRocks \u4f1a\u9996\u5148\u5728\u6307\u5b9a\u7684\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u8def\u5f84\u4e2d\uff0c\u5efa\u7acb\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"__starrocks_export_tmp_xxx"})," \u7684\u4e34\u65f6\u76ee\u5f55\uff0c\u5176\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"xxx"})," \u4e3a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2 ID\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"__starrocks_export_tmp_921d8f80-7c9d-11eb-9342-acde48001122"}),"\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u6267\u884c\u6210\u529f\u4ee5\u540e\uff0c\u5bfc\u51fa\u7684\u6570\u636e\u90fd\u4f1a\u5148\u5199\u5165\u5230\u8fd9\u4e2a\u4e34\u65f6\u76ee\u5f55\u4e0b\u751f\u6210\u7684\u4e00\u4e2a\u4e34\u65f6\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6240\u6709\u6570\u636e\u90fd\u5bfc\u51fa\u540e\uff0cStarRocks \u4f1a\u901a\u8fc7 RENAME \u8bed\u53e5\u628a\u8fd9\u4e9b\u6587\u4ef6\u4fdd\u5b58\u5230\u5230\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u914d\u7f6e",children:"\u76f8\u5173\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd FE \u4e0a\u4e00\u4e9b\u8ddf\u6570\u636e\u5bfc\u51fa\u6709\u5173\u7684\u53c2\u6570\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export_checker_interval_second"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u8c03\u5ea6\u5668\u7684\u8c03\u5ea6\u95f4\u9694\u3002\u9ed8\u8ba4\u4e3a 5 \u79d2\u3002\u8bbe\u7f6e\u8be5\u53c2\u6570\u9700\u91cd\u542f FE\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export_running_job_num_limit"}),"\uff1a\u6b63\u5728\u8fd0\u884c\u7684\u5bfc\u51fa\u4f5c\u4e1a\u6570\u91cf\u9650\u5236\u3002\u5982\u679c\u8d85\u8fc7\u8fd9\u4e00\u9650\u5236\uff0c\u5219\u4f5c\u4e1a\u5728\u6267\u884c\u5b8c ",(0,r.jsx)(n.code,{children:"snapshot"})," \u540e\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\u3002\u9ed8\u8ba4\u4e3a 5\u3002\u53ef\u4ee5\u5728\u5bfc\u51fa\u4f5c\u4e1a\u8fd0\u884c\u65f6\u8c03\u6574\u8be5\u53c2\u6570\u7684\u53d6\u503c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export_task_default_timeout_second"}),"\uff1a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e3a 2 \u5c0f\u65f6\u3002\u53ef\u4ee5\u5728\u5bfc\u51fa\u4f5c\u4e1a\u8fd0\u884c\u65f6\u8c03\u6574\u8be5\u53c2\u6570\u7684\u53d6\u503c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"}),"\uff1a\u6bcf\u4e2a\u5bfc\u51fa\u5b50\u4efb\u52a1\u5728\u6bcf\u4e2a BE \u4e0a\u5bfc\u51fa\u7684\u6700\u5927\u6570\u636e\u91cf\uff0c\u7528\u4e8e\u62c6\u5206\u5bfc\u51fa\u4f5c\u4e1a\u5e76\u884c\u5904\u7406\u3002\u6309\u538b\u7f29\u540e\u6570\u636e\u91cf\u8ba1\u7b97\uff0c\u9ed8\u8ba4\u4e3a 256 MB\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"export_task_pool_size"}),"\uff1a\u5bfc\u51fa\u5b50\u4efb\u52a1\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\uff0c\u5373\u7ebf\u7a0b\u6c60\u4e2d\u5141\u8bb8\u5e76\u884c\u6267\u884c\u7684\u6700\u5927\u5b50\u4efb\u52a1\u6570\u3002\u9ed8\u8ba4\u4e3a 5\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a",children:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u628a ",(0,r.jsx)(n.code,{children:"db1"})," \u6570\u636e\u5e93\u4e2d ",(0,r.jsx)(n.code,{children:"tbl1"})," \u8868\u5728 ",(0,r.jsx)(n.code,{children:"p1"})," \u548c ",(0,r.jsx)(n.code,{children:"p2"})," \u5206\u533a\u4e0a ",(0,r.jsx)(n.code,{children:"col1"})," \u548c ",(0,r.jsx)(n.code,{children:"col3"})," \u4e24\u5217\u7684\u6570\u636e\u5bfc\u51fa\u5230 HDFS \u5b58\u50a8\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"export"})," \u76ee\u5f55\u4e2d\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n(col1, col3)\nTO "hdfs://HDFS_IP:HDFS_Port/export/lineorder_" \nPROPERTIES\n(\n    "column_separator"=",",\n    "load_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173 EXPORT \u8bed\u53e5\u7684\u8be6\u7ec6\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\u3001\u4ee5\u53ca\u5bfc\u51fa\u6570\u636e\u5230 AWS S3\u3001\u963f\u91cc\u4e91 OSS\u3001\u817e\u8baf\u4e91 COS\u3001\u534e\u4e3a\u4e91 OBS \u7b49\u4e91\u5b58\u50a8\u7cfb\u7edf\u7684\u547d\u4ee4\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/EXPORT",children:"EXPORT"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2-id",children:"\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2 ID"}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 SELECT LAST_QUERY_ID() \u8bed\u53e5\u83b7\u53d6\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2 ID\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u5230\u7684 ID \u67e5\u770b\u6216\u8005\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173 SELECT LAST_QUERY_ID() \u8bed\u53e5\u7684\u8be6\u7ec6\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/utility-functions/last_query_id",children:"last_query_id"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001",children:"\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001"}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 SHOW EXPORT \u8bed\u53e5\u67e5\u770b\u5bfc\u51fa\u4f5c\u4e1a\u7684\u72b6\u6001\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT WHERE queryid = "edee47f0-abe1-11ec-b9d1-00163e1e238f";\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"queryid"})," \u4e3a\u5bfc\u51fa\u4f5c\u4e1a\u7684 ID\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u7cfb\u7edf\u8fd4\u56de\u5982\u4e0b\u5bfc\u51fa\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain_Text",children:'JobId: 14008\nState: FINISHED\nProgress: 100%\nTaskInfo: {"partitions":["*"],"mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3",columns:["col1", "col3"]}\nPath: oss://bj-test/export/\nCreateTime: 2019-06-25 17:08:24\nStartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\nTimeout: 3600\nErrorMsg: N/A\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173 SHOW EXPORT \u8bed\u53e5\u7684\u8be6\u7ec6\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a",children:"\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a"}),"\n",(0,r.jsx)(n.p,{children:"\u63d0\u4ea4\u5bfc\u51fa\u4f5c\u4e1a\u540e\uff0c\u5728\u5bfc\u51fa\u4f5c\u4e1a\u6267\u884c\u5b8c\u6210\u4ee5\u524d\uff0c\u53ef\u4ee5\u901a\u8fc7 CANCEL EXPORT \u8bed\u53e5\u53d6\u6d88\u5bfc\u51fa\u4f5c\u4e1a\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'CANCEL EXPORT WHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"queryid"})," \u4e3a\u5bfc\u51fa\u4f5c\u4e1a\u7684 ID\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173 CANCEL EXPORT \u8bed\u53e5\u7684\u8be6\u7ec6\u8bed\u6cd5\u548c\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/CANCEL_EXPORT",children:"CANCEL EXPORT"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206",children:"\u67e5\u8be2\u8ba1\u5212\u7684\u62c6\u5206"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u6709\u591a\u5c11\u67e5\u8be2\u8ba1\u5212\u9700\u8981\u6267\u884c\uff0c\u53d6\u51b3\u4e8e\u603b\u5171\u6709\u591a\u5c11 Tablet\u3001\u4ee5\u53ca\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u53ef\u4ee5\u5904\u7406\u7684\u6700\u5927\u6570\u636e\u91cf\u3002 \u5bfc\u51fa\u4f5c\u4e1a\u662f\u6309\u7167\u67e5\u8be2\u8ba1\u5212\u6765\u91cd\u8bd5\u7684\u3002\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u5904\u7406\u7684\u6570\u636e\u91cf\u8d85\u8fc7\u5141\u8bb8\u7684\u6700\u5927\u6570\u636e\u91cf\uff0c\u67e5\u8be2\u8ba1\u5212\u51fa\u9519\uff0c\u6bd4\u5982\u8c03\u7528 Broker \u7684 RPC \u5931\u8d25\u3001\u8fdc\u7aef\u5b58\u50a8\u51fa\u73b0\u6296\u52a8\u7b49\u3002\u8fd9\u4f1a\u5bfc\u81f4\u8be5\u67e5\u8be2\u8ba1\u5212\u7684\u91cd\u8bd5\u6210\u672c\u53d8\u9ad8\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d\u6bcf\u4e2a BE \u626b\u63cf\u7684\u6570\u636e\u91cf\u901a\u8fc7 FE \u914d\u7f6e\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"})," \u6765\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 256 MB\u3002\u6bcf\u4e2a\u67e5\u8be2\u8ba1\u5212\u4e2d\u6bcf\u4e2a BE \u6700\u5c11\u5206\u914d\u4e00\u4e2a Tablet\uff0c\u5bfc\u51fa\u7684\u6700\u5927\u6570\u636e\u91cf\u4e0d\u8d85\u8fc7\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"export_max_bytes_per_be_per_task"})," \u7684\u53d6\u503c\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u591a\u4e2a\u67e5\u8be2\u8ba1\u5212\u5e76\u884c\u6267\u884c\uff0c\u5b50\u4efb\u52a1\u7ebf\u7a0b\u6c60\u7684\u5927\u5c0f\u901a\u8fc7 FE \u914d\u7f6e\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"export_task_pool_size"})," \u6765\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a 5\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\u4e00\u4e2a\u5bfc\u51fa\u4f5c\u4e1a\u7684\u67e5\u8be2\u8ba1\u5212\u53ea\u6709\u201c\u626b\u63cf\u201d\u548c\u201c\u5bfc\u51fa\u201d\u4e24\u90e8\u5206\uff0c\u8ba1\u7b97\u903b\u8f91\u4e0d\u4f1a\u6d88\u8017\u592a\u591a\u5185\u5b58\u3002\u6240\u4ee5\u901a\u5e38 2 GB \u7684\u9ed8\u8ba4\u5185\u5b58\u9650\u5236\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u6bd4\u5982\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\uff0c\u5728\u540c\u4e00\u4e2a BE \u4e0a\u9700\u8981\u626b\u63cf\u7684 Tablet \u8fc7\u591a\u3001\u6216\u8005 Tablet \u7684\u6570\u636e\u7248\u672c\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5185\u5b58\u4e0d\u8db3\u3002\u6b64\u65f6\u9700\u8981\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"load_mem_limit"})," \u53c2\u6570\uff0c\u8bbe\u7f6e\u66f4\u5927\u7684\u5185\u5b58\uff0c\u6bd4\u5982 4 GB\u30018 GB \u7b49\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},99986:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/5.1-2-55392a80a2dda7a0aeb83052d6737fb4.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>d});var r=s(67294);const l=r.createContext({});function d(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:d(e),r.createElement(l.Provider,{value:c},n)}}}]);