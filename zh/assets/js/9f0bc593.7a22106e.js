"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66641],{56586:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>t,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var c=s(85893),r=s(11151);const i={},l="\u76d1\u63a7\u7ba1\u7406\u5927\u67e5\u8be2",d={id:"administration/monitor_manage_big_queries",title:"\u76d1\u63a7\u7ba1\u7406\u5927\u67e5\u8be2",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u76d1\u63a7\u548c\u7ba1\u7406 StarRocks \u96c6\u7fa4\u4e2d\u7684\u5927\u67e5\u8be2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/administration/monitor_manage_big_queries.md",sourceDirName:"administration",slug:"/administration/monitor_manage_big_queries",permalink:"/zh/docs/3.0/administration/monitor_manage_big_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/monitor_manage_big_queries.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Information Schema",permalink:"/zh/docs/3.0/administration/information_schema"},next:{title:"\u6743\u9650\u7cfb\u7edf FAQ",permalink:"/zh/docs/3.0/administration/privilege_faq"}},o={},a=[{value:"\u8bbe\u7f6e\u5927\u67e5\u8be2\u9632\u5fa1\u673a\u5236",id:"\u8bbe\u7f6e\u5927\u67e5\u8be2\u9632\u5fa1\u673a\u5236",level:2},{value:"\u901a\u8fc7\u8d44\u6e90\u7ec4\u6ee4\u9664\u5927\u67e5\u8be2",id:"\u901a\u8fc7\u8d44\u6e90\u7ec4\u6ee4\u9664\u5927\u67e5\u8be2",level:3},{value:"\u901a\u8fc7\u67e5\u8be2\u961f\u5217\u7f13\u89e3\u7cfb\u7edf\u8fc7\u8f7d",id:"\u901a\u8fc7\u67e5\u8be2\u961f\u5217\u7f13\u89e3\u7cfb\u7edf\u8fc7\u8f7d",level:3},{value:"\u5b9e\u65f6\u76d1\u63a7\u5927\u67e5\u8be2",id:"\u5b9e\u65f6\u76d1\u63a7\u5927\u67e5\u8be2",level:2},{value:"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u76d1\u63a7",id:"\u901a\u8fc7-mysql-\u5ba2\u6237\u7aef\u76d1\u63a7",level:3},{value:"\u901a\u8fc7 FE \u63a7\u5236\u53f0\u76d1\u63a7",id:"\u901a\u8fc7-fe-\u63a7\u5236\u53f0\u76d1\u63a7",level:3},{value:"\u624b\u52a8\u7ec8\u6b62\u5927\u67e5\u8be2",id:"\u624b\u52a8\u7ec8\u6b62\u5927\u67e5\u8be2",level:3},{value:"\u5206\u6790\u5927\u67e5\u8be2\u65e5\u5fd7",id:"\u5206\u6790\u5927\u67e5\u8be2\u65e5\u5fd7",level:2},{value:"\u5fae\u8c03\u9632\u5fa1\u673a\u5236",id:"\u5fae\u8c03\u9632\u5fa1\u673a\u5236",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code",ul:"ul",img:"img",strong:"strong"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u76d1\u63a7\u7ba1\u7406\u5927\u67e5\u8be2",children:"\u76d1\u63a7\u7ba1\u7406\u5927\u67e5\u8be2"}),"\n",(0,c.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u76d1\u63a7\u548c\u7ba1\u7406 StarRocks \u96c6\u7fa4\u4e2d\u7684\u5927\u67e5\u8be2\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5927\u67e5\u8be2\u5305\u62ec\u626b\u63cf\u5927\u91cf\u6570\u636e\u6216\u5360\u7528\u8fc7\u591a CPU \u548c\u5185\u5b58\u8d44\u6e90\u7684\u67e5\u8be2\u3002\u5982\u679c\u4e0d\u65bd\u52a0\u9650\u5236\uff0c\u5927\u67e5\u8be2\u5f88\u5bb9\u6613\u8017\u5c3d\u96c6\u7fa4\u8d44\u6e90\u5e76\u5bfc\u81f4\u7cfb\u7edf\u8fc7\u8f7d\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cStarRocks \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u63aa\u65bd\u6765\u76d1\u63a7\u548c\u7ba1\u7406\u5927\u67e5\u8be2\uff0c\u9632\u6b62\u5927\u67e5\u8be2\u72ec\u5360\u96c6\u7fa4\u8d44\u6e90\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5904\u7406 StarRocks \u5927\u67e5\u8be2\u7684\u603b\u4f53\u601d\u8def\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u901a\u8fc7\u8d44\u6e90\u7ec4\u548c\u67e5\u8be2\u961f\u5217\u5bf9\u5927\u67e5\u8be2\u8bbe\u7f6e\u81ea\u52a8\u9884\u9632\u63aa\u65bd\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5b9e\u65f6\u76d1\u63a7\u5927\u67e5\u8be2\uff0c\u5e76\u53ca\u65f6\u7ec8\u6b62\u7ed5\u8fc7\u9884\u9632\u63aa\u65bd\u7684\u5927\u67e5\u8be2\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u5206\u6790\u5ba1\u8ba1\u65e5\u5fd7\u548c\u5927\u67e5\u8be2\u65e5\u5fd7\uff0c\u7814\u7a76\u5927\u67e5\u8be2\u7684\u6a21\u5f0f\uff0c\u4f18\u5316\u5148\u524d\u8bbe\u7f6e\u7684\u9884\u9632\u673a\u5236\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u529f\u80fd\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5927\u67e5\u8be2\u9632\u5fa1\u673a\u5236",children:"\u8bbe\u7f6e\u5927\u67e5\u8be2\u9632\u5fa1\u673a\u5236"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u63d0\u4f9b\u4e86\u4e24\u79cd\u9884\u9632\u5de5\u5177\u5904\u7406\u5927\u67e5\u8be2\u2014\u2014\u8d44\u6e90\u7ec4\u548c\u67e5\u8be2\u961f\u5217\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u8d44\u6e90\u7ec4\u6765\u8fc7\u6ee4\u5e76\u7194\u65ad\u5927\u67e5\u8be2\u3002\u800c\u67e5\u8be2\u961f\u5217\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5728\u7cfb\u7edf\u8fbe\u5230\u5e76\u53d1\u9608\u503c\u6216\u8d44\u6e90\u9650\u5236\u65f6\u5bf9\u65b0\u67e5\u8be2\u8bf7\u6c42\u8fdb\u884c\u6392\u961f\uff0c\u4ece\u800c\u9632\u6b62\u7cfb\u7edf\u8fc7\u8f7d\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7\u8d44\u6e90\u7ec4\u6ee4\u9664\u5927\u67e5\u8be2",children:"\u901a\u8fc7\u8d44\u6e90\u7ec4\u6ee4\u9664\u5927\u67e5\u8be2"}),"\n",(0,c.jsxs)(n.p,{children:["\u8d44\u6e90\u7ec4\u53ef\u4ee5\u81ea\u52a8\u8bc6\u522b\u548c\u7ec8\u6b62\u5927\u67e5\u8be2\u3002\u5728\u521b\u5efa\u8d44\u6e90\u7ec4\u65f6\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u5355\u4e2a\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7684 CPU \u65f6\u95f4\u3001\u5185\u5b58\u4f7f\u7528\u91cf\u6216 Scan \u884c\u6570\u7684\u4e0a\u9650\u3002\u5728\u547d\u4e2d\u8d44\u6e90\u7ec4\u7684\u6240\u6709\u67e5\u8be2\u4e2d\uff0c\u4efb\u4f55\u8981\u6c42\u66f4\u591a\u8d44\u6e90\u7684\u67e5\u8be2\u90fd\u5c06\u88ab\u62d2\u7edd\u6267\u884c\u5e76\u8fd4\u56de\u9519\u8bef\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/administration/resource_group",children:"\u8d44\u6e90\u9694\u79bb"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u521b\u5efa\u8d44\u6e90\u7ec4\u4e4b\u524d\uff0c\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u542f\u7528\u8d44\u6e90\u7ec4\u529f\u80fd\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_resource_group = true;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,c.jsx)(n.code,{children:"bigQuery"})," \u7684\u8d44\u6e90\u7ec4\uff0c\u5c06 CPU \u65f6\u95f4\u4e0a\u9650\u9650\u5236\u4e3a ",(0,c.jsx)(n.code,{children:"100"})," \u79d2\uff0c\u626b\u63cf\u884c\u6570\u4e0a\u9650\u4e3a ",(0,c.jsx)(n.code,{children:"100000"}),"\uff0c\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\u4e3a ",(0,c.jsx)(n.code,{children:"1073741824"})," \u5b57\u8282\uff081 GB\uff09\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP bigQuery\nTO \n    (db='sr_hub')\nWITH (\n    'cpu_core_limit' = '10',\n    'mem_limit' = '20%',\n    'big_query_cpu_second_limit' = '100',\n    'big_query_scan_rows_limit' = '100000',\n    'big_query_mem_limit' = '1073741824'\n);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u6240\u9700\u7684\u8d44\u6e90\u8d85\u8fc7\u4e86\u4ee5\u4e0a\u4efb\u4f55\u4e00\u4e2a\u9650\u5236\uff0cStarRocks \u5c06\u4e0d\u4f1a\u6267\u884c\u8be5\u67e5\u8be2\u5e76\u8fd4\u56de\u9519\u8bef\u3002\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u5f53\u67e5\u8be2 Scan \u884c\u6570\u8d85\u8fc7\u9650\u5236\u65f6\u8fd4\u56de\u7684\u9519\u8bef\u6d88\u606f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"ERROR 1064 (HY000): exceed big query scan_rows limit: current is 4 but limit is 1\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8fd9\u662f\u60a8\u9996\u6b21\u8bbe\u7f6e\u8d44\u6e90\u7ec4\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u8bbe\u7f6e\u76f8\u5bf9\u8f83\u9ad8\u7684\u9650\u5236\uff0c\u4ee5\u514d\u963b\u788d\u5e38\u89c4\u67e5\u8be2\u3002\u5728\u66f4\u597d\u5730\u4e86\u89e3\u96c6\u7fa4\u4e2d\u5927\u67e5\u8be2\u7684\u6a21\u5f0f\u4e4b\u540e\uff0c\u60a8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4f18\u5316\u8fd9\u4e9b\u9650\u5236\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7\u67e5\u8be2\u961f\u5217\u7f13\u89e3\u7cfb\u7edf\u8fc7\u8f7d",children:"\u901a\u8fc7\u67e5\u8be2\u961f\u5217\u7f13\u89e3\u7cfb\u7edf\u8fc7\u8f7d"}),"\n",(0,c.jsxs)(n.p,{children:["\u67e5\u8be2\u961f\u5217\u7528\u4e8e\u5728\u96c6\u7fa4\u8d44\u6e90\u5360\u7528\u8d85\u8fc7\u9884\u5b9a\u9608\u503c\u65f6\u9632\u6b62\u7cfb\u7edf\u8fc7\u8f7d\u60c5\u51b5\u6076\u5316\u3002\u60a8\u53ef\u4ee5\u4e3a\u6700\u5927\u5e76\u53d1\u6570\u3001\u5185\u5b58\u4f7f\u7528\u7387\u548c CPU \u4f7f\u7528\u7387\u8bbe\u7f6e\u9608\u503c\u3002\u5f53\u7cfb\u7edf\u8d44\u6e90\u5360\u7528\u8fbe\u5230\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u9608\u503c\u65f6\uff0cStarRocks \u4f1a\u81ea\u52a8\u5bf9\u65b0\u589e\u67e5\u8be2\u8fdb\u884c\u6392\u961f\u3002\u5f85\u5904\u7406\u67e5\u8be2\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c\uff0c\u6216\u5728\u8fbe\u5230\u8d44\u6e90\u9608\u503c\u65f6\u88ab\u53d6\u6d88\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/administration/query_queues",children:"\u67e5\u8be2\u961f\u5217"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u4e3a SELECT \u67e5\u8be2\u542f\u7528\u67e5\u8be2\u961f\u5217\u529f\u80fd\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_select = true;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u542f\u7528\u67e5\u8be2\u961f\u5217\u529f\u80fd\u540e\uff0c\u60a8\u53ef\u4ee5\u5b9a\u4e49\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u7684\u89c4\u5219\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u7684\u67e5\u8be2\u5e76\u53d1\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u5e76\u53d1\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"100"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_concurrency_limit = 100;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u7684\u5185\u5b58\u4f7f\u7528\u7387\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u5185\u5b58\u4f7f\u7528\u7387\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"0.9"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_mem_used_pct_limit = 0.9;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1\u67e5\u8be2\u961f\u5217\u7684 CPU \u4f7f\u7528\u7387\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06 CPU \u5343\u5206\u6bd4\u4f7f\u7528\u7387\uff08CPU \u4f7f\u7528\u7387 * 1000\uff09\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"800"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_cpu_used_permille_limit = 800;\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6700\u5927\u961f\u5217\u957f\u5ea6\u548c\u961f\u5217\u4e2d\u6bcf\u4e2a\u5f85\u5904\u7406\u67e5\u8be2\u7684\u8d85\u65f6\u65f6\u95f4\u6765\u51b3\u5b9a\u5982\u4f55\u5904\u7406\u961f\u5217\u4e2d\u7684\u67e5\u8be2\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u6700\u5927\u67e5\u8be2\u961f\u5217\u957f\u5ea6\u3002\u5f53\u961f\u5217\u957f\u5ea6\u8fbe\u5230\u6b64\u9608\u503c\u65f6\uff0c\u65b0\u589e\u67e5\u8be2\u5c06\u88ab\u62d2\u7edd\u6267\u884c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u67e5\u8be2\u961f\u5217\u957f\u5ea6\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"100"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_max_queued_queries = 100;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u961f\u5217\u4e2d\u7b49\u5f85\u5904\u7406\u7684\u67e5\u8be2\u7684\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u3002\u5f53\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\u65f6\uff0c\u8be5\u67e5\u8be2\u5c06\u88ab\u62d2\u7edd\u6267\u884c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"480"})," \u79d2\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_pending_timeout_second = 480;\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20PROCESSLIST",children:"SHOW PROCESSLIST"})," \u67e5\u770b\u67e5\u8be2\u662f\u5426\u4e3a\u5f85\u5904\u7406\uff08Pending\uff09\u72b6\u6001\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PROCESSLIST;\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info              | IsPending |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n|    2 | root | xxx.xx.xxx.xx:xxxxx |       | Query   | 2022-11-24 18:08:29 |    0 | OK    | SHOW PROCESSLIST  | false     |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c ",(0,c.jsx)(n.code,{children:"IsPending"})," \u4e3a ",(0,c.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u5bf9\u5e94\u7684\u67e5\u8be2\u5728\u67e5\u8be2\u961f\u5217\u4e2d\u4e3a\u5f85\u5904\u7406\u72b6\u6001\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5b9e\u65f6\u76d1\u63a7\u5927\u67e5\u8be2",children:"\u5b9e\u65f6\u76d1\u63a7\u5927\u67e5\u8be2"}),"\n",(0,c.jsx)(n.p,{children:"\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u652f\u6301\u67e5\u770b\u96c6\u7fa4\u4e2d\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u67e5\u8be2\u4ee5\u53ca\u5176\u5360\u7528\u7684\u8d44\u6e90\u3002\u60a8\u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7\u96c6\u7fa4\uff0c\u4ee5\u9632\u6709\u5927\u67e5\u8be2\u7ed5\u8fc7\u9884\u9632\u63aa\u65bd\u5e76\u610f\u5916\u5bfc\u81f4\u7cfb\u7edf\u8fc7\u8f7d\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7-mysql-\u5ba2\u6237\u7aef\u76d1\u63a7",children:"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u76d1\u63a7"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20PROC",children:"SHOW PROC"})," \u67e5\u770b\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u67e5\u8be2 ",(0,c.jsx)(n.code,{children:"current_queries"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/current_queries';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u8fd4\u56de\u6bcf\u4e2a\u67e5\u8be2\u7684 ID\uff08",(0,c.jsx)(n.code,{children:"QueryId"}),"\uff09\u3001\u5bf9\u5e94\u8fde\u63a5 ID\uff08",(0,c.jsx)(n.code,{children:"ConnectionId"}),"\uff09\uff0c\u4ee5\u53ca\u5176\u8d44\u6e90\u6d88\u8017\uff0c\u5305\u62ec\u626b\u63cf\u7684\u6570\u636e\u5927\u5c0f\uff08",(0,c.jsx)(n.code,{children:"ScanBytes"}),"\uff09\u3001\u5904\u7406\u7684\u6570\u636e\u884c\u6570\uff08",(0,c.jsx)(n.code,{children:"ProcessRows"}),"\uff09\u3001CPU \u65f6\u95f4\uff08",(0,c.jsx)(n.code,{children:"CPUCostSeconds"}),"\uff09\u3001\u5185\u5b58\u4f7f\u7528\u91cf\uff08",(0,c.jsx)(n.code,{children:"MemoryUsageBytes"}),"\uff09\u548c\u6267\u884c\u65f6\u95f4\uff08",(0,c.jsx)(n.code,{children:"ExecTime"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PROC '/current_queries';\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n| QueryId                              | ConnectionId | Database   | User | ScanBytes | ProcessRows    | CPUCostSeconds | MemoryUsageBytes | ExecTime |\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n| 7c56495f-ae8b-11ed-8ebf-00163e00accc | 4            | tpcds_100g | root | 37.88 MB  | 1075769 Rows   | 11.13 Seconds  | 146.70 MB        | 3804     |\n| 7d543160-ae8b-11ed-8ebf-00163e00accc | 6            | tpcds_100g | root | 13.02 GB  | 487873176 Rows | 81.23 Seconds  | 6.37 GB          | 2090     |\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u67e5\u8be2 ID \u8fdb\u4e00\u6b65\u67e5\u770b\u8be5\u67e5\u8be2\u5728\u6bcf\u4e2a BE \u8282\u70b9\u4e0a\u7684\u8d44\u6e90\u6d88\u8017\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/current_queries/<QueryId>/hosts';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["StarRocks \u8fd4\u56de\u8be5\u67e5\u8be2\u5728\u6bcf\u4e2a BE \u8282\u70b9\u4e0a\u7684\u626b\u63cf\u6570\u636e\u5927\u5c0f\uff08",(0,c.jsx)(n.code,{children:"ScanBytes"}),"\uff09\u3001\u626b\u63cf\u6570\u636e\u884c\u6570\uff08",(0,c.jsx)(n.code,{children:"ScanRows"}),"\uff09\u3001CPU \u65f6\u95f4\uff08",(0,c.jsx)(n.code,{children:"CPUCostSeconds"}),"\uff09\u548c\u5185\u5b58\u4f7f\u7528\u91cf\uff08",(0,c.jsx)(n.code,{children:"MemUsageBytes"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"mysql> show proc '/current_queries/7c56495f-ae8b-11ed-8ebf-00163e00accc/hosts';\n+--------------------+-----------+-------------+----------------+---------------+\n| Host               | ScanBytes | ScanRows    | CpuCostSeconds | MemUsageBytes |\n+--------------------+-----------+-------------+----------------+---------------+\n| 172.26.34.185:8060 | 11.61 MB  | 356252 Rows | 52.93 Seconds  | 51.14 MB      |\n| 172.26.34.186:8060 | 14.66 MB  | 362646 Rows | 52.89 Seconds  | 50.44 MB      |\n| 172.26.34.187:8060 | 11.60 MB  | 356871 Rows | 52.91 Seconds  | 48.95 MB      |\n+--------------------+-----------+-------------+----------------+---------------+\n3 rows in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u901a\u8fc7-fe-\u63a7\u5236\u53f0\u76d1\u63a7",children:"\u901a\u8fc7 FE \u63a7\u5236\u53f0\u76d1\u63a7"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86 MySQL \u5ba2\u6237\u7aef\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 FE \u63a7\u5236\u53f0\u8fdb\u884c\u53ef\u89c6\u5316\u3001\u4ea4\u4e92\u5f0f\u7684\u76d1\u63a7\u3002"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165\u4ee5\u4e0b URL \u8fdb\u5165 FE \u63a7\u5236\u53f0\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Bash",children:"http://<fe_IP>:<fe_http_port>/system?path=//current_queries\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"FE console 1",src:s(58710).Z+"",width:"971",height:"259"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 ",(0,c.jsx)(n.strong,{children:"System Info"})," \u9875\u9762\u4e0a\u67e5\u770b\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u67e5\u8be2\u53ca\u5176\u8d44\u6e90\u6d88\u8017\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u70b9\u51fb\u5bf9\u5e94\u67e5\u8be2\u7684 ",(0,c.jsx)(n.strong,{children:"QueryID"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"FE console 2",src:s(27841).Z+"",width:"957",height:"252"})}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u65b0\u9875\u9762\u4e2d\u67e5\u770b\u8be5\u67e5\u8be2\u5728\u5404\u8282\u70b9\u4e0a\u7684\u8d44\u6e90\u6d88\u8017\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u624b\u52a8\u7ec8\u6b62\u5927\u67e5\u8be2",children:"\u624b\u52a8\u7ec8\u6b62\u5927\u67e5\u8be2"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u6709\u5927\u67e5\u8be2\u7ed5\u8fc7\u4e86\u60a8\u8bbe\u7f6e\u7684\u9884\u9632\u63aa\u65bd\u5e76\u5a01\u80c1\u5230\u7cfb\u7edf\u53ef\u7528\u6027\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/KILL",children:"KILL"})," \u8bed\u53e5\u4e2d\u4f7f\u7528\u8be5\u67e5\u8be2\u5bf9\u5e94\u7684\u8fde\u63a5 ID \u624b\u52a8\u7ec8\u6b62\u8be5\u67e5\u8be2\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"KILL QUERY <ConnectionId>;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5206\u6790\u5927\u67e5\u8be2\u65e5\u5fd7",children:"\u5206\u6790\u5927\u67e5\u8be2\u65e5\u5fd7"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u652f\u6301\u5927\u67e5\u8be2\u65e5\u5fd7\uff0c\u4fdd\u5b58\u5728 ",(0,c.jsx)(n.strong,{children:"fe/log/fe.big_query.log"})," \u6587\u4ef6\u4e2d\u3002\u4e0e StarRocks \u5ba1\u8ba1\u65e5\u5fd7\u76f8\u6bd4\uff0c\u5927\u67e5\u8be2\u65e5\u5fd7\u989d\u5916\u6253\u5370\u4ee5\u4e0b\u4e09\u4e2a\u5b57\u6bb5\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"bigQueryLogCPUSecondThreshold"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"bigQueryLogScanBytesThreshold"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"bigQueryLogScanRowsThreshold"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e09\u4e2a\u5b57\u6bb5\u5bf9\u5e94\u60a8\u5b9a\u4e49\u7684\u8d44\u6e90\u6d88\u8017\u9608\u503c\uff0c\u7528\u4e8e\u786e\u5b9a\u67e5\u8be2\u662f\u5426\u4e3a\u5927\u67e5\u8be2\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u542f\u7528\u5927\u67e5\u8be2\u65e5\u5fd7\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_big_query_log = true;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u542f\u7528\u5927\u67e5\u8be2\u65e5\u5fd7\u540e\uff0c\u60a8\u53ef\u4ee5\u5b9a\u4e49\u89e6\u53d1\u6253\u5370\u5927\u67e5\u8be2\u65e5\u5fd7\u7684\u89c4\u5219\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1 Big Query Logs \u7684 CPU \u65f6\u95f4\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06 CPU \u65f6\u95f4\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"600"})," \u79d2\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_cpu_second_threshold = 600;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1\u5927\u67e5\u8be2\u65e5\u5fd7\u7684\u626b\u63cf\u6570\u636e\u5927\u5c0f\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u626b\u63cf\u6570\u636e\u5927\u5c0f\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"10737418240"})," Byte (10 GB)\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_scan_bytes_threshold = 10737418240;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6307\u5b9a\u89e6\u53d1\u5927\u67e5\u8be2\u65e5\u5fd7\u7684\u626b\u63cf\u6570\u636e\u884c\u6570\u9608\u503c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u626b\u63cf\u6570\u636e\u884c\u6570\u9608\u503c\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(n.code,{children:"1500000000"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_scan_rows_threshold = 1500000000;\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5fae\u8c03\u9632\u5fa1\u673a\u5236",children:"\u5fae\u8c03\u9632\u5fa1\u673a\u5236"}),"\n",(0,c.jsx)(n.p,{children:"\u4ece\u5b9e\u65f6\u76d1\u63a7\u548c\u5927\u67e5\u8be2\u65e5\u5fd7\u4e2d\u83b7\u5f97\u7684\u7edf\u8ba1\u6570\u636e\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u96c6\u7fa4\u4e2d\u88ab\u9057\u6f0f\u7684\u5927\u67e5\u8be2\uff08\u6216\u88ab\u9519\u8bef\u5f53\u6210\u5927\u67e5\u8be2\u7684\u5e38\u89c4\u67e5\u8be2\uff09\u7684\u6a21\u5f0f\uff0c\u7136\u540e\u4f18\u5316\u8d44\u6e90\u7ec4\u548c\u67e5\u8be2\u961f\u5217\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u6709\u8f83\u5927\u90e8\u5206\u7684\u5927\u67e5\u8be2\u7b26\u5408\u67d0\u79cd SQL \u6a21\u5f0f\uff0c\u800c\u60a8\u60f3\u6c38\u4e45\u7981\u6b62\u8fd9\u79cd SQL \u6a21\u5f0f\uff0c\u60a8\u53ef\u4ee5\u5c06\u8fd9\u79cd\u6a21\u5f0f\u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\u4e2d\u3002StarRocks \u4e0d\u4f1a\u6267\u884c\u4e0e SQL \u9ed1\u540d\u5355\u4e2d\u4efb\u610f\u6a21\u5f0f\u76f8\u5339\u914d\u7684\u67e5\u8be2\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/administration/Blacklist",children:"\u7ba1\u7406 SQL \u9ed1\u540d\u5355"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u542f\u7528SQL \u9ed1\u540d\u5355\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("enable_sql_blacklist" = "true");\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADD%20SQLBLACKLIST",children:"ADD SQLBLACKLIST"})," \u8bed\u53e5\u5c06\u4ee3\u8868\u8fd9\u79cd SQL \u6a21\u5f0f\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06 ",(0,c.jsx)(n.code,{children:"COUNT(DISTINCT)"})," \u6dfb\u52a0\u5230 SQL \u9ed1\u540d\u5355\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'ADD SQLBLACKLIST "SELECT COUNT(DISTINCT .+) FROM .+";\n'})})]})}const t=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},58710:(e,n,s)=>{s.d(n,{Z:()=>c});const c=s.p+"assets/images/console_1-cbd35b88e205f18566c1a3ecdb888f4c.png"},27841:(e,n,s)=>{s.d(n,{Z:()=>c});const c=s.p+"assets/images/console_2-b772487ce01c6612ba48da1e08fd7609.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>i});var c=s(67294);const r=c.createContext({});function i(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||l:i(e),c.createElement(r.Provider,{value:d},n)}}}]);