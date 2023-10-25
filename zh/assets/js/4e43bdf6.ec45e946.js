"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55542],{36410:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var i=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},c="\u7cfb\u7edf\u53d8\u91cf",d={id:"reference/System_variable",title:"\u7cfb\u7edf\u53d8\u91cf",description:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0/reference/System_variable.md",sourceDirName:"reference",slug:"/reference/System_variable",permalink:"/zh/docs/2.0/reference/System_variable",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/reference/System_variable.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u7cfb\u7edf\u9650\u5236",permalink:"/zh/docs/2.0/reference/System_limit"},next:{title:"StarRocks version 1.19",permalink:"/zh/docs/2.0/release_notes/release-1.19"}},h={},x=[{value:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",level:2},{value:"\u67e5\u770b",id:"\u67e5\u770b",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:3},{value:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",level:3},{value:"\u652f\u6301\u7684\u53d8\u91cf",id:"\u652f\u6301\u7684\u53d8\u91cf",level:2}];function t(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",a:"a",div:"div"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u7cfb\u7edf\u53d8\u91cf",children:"\u7cfb\u7edf\u53d8\u91cf"}),"\n",(0,i.jsx)(e.h2,{id:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b",children:"\u53d8\u91cf\u8bbe\u7f6e\u4e0e\u67e5\u770b"}),"\n",(0,i.jsxs)(e.p,{children:["\u672c\u8282\u4ecb\u7ecdStarRocks\u7cfb\u7edf\u652f\u6301\u7684\u53d8\u91cf\uff08variables\uff09\u3002\u5b83\u4eec\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4 ",(0,i.jsx)(e.code,{children:"SHOW VARIABLES"})," \u67e5\u770b\uff0c\u80fd\u5728\u7cfb\u7edf\u5168\u5c40\u8303\u56f4\u5185\u751f\u6548\uff0c\u6216\u8005\u4ec5\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u751f\u6548\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["StarRocks \u4e2d\u7684\u53d8\u91cf\u53c2\u8003 MySQL \u4e2d\u7684\u53d8\u91cf\u8bbe\u7f6e\uff0c\u4f46",(0,i.jsx)(e.strong,{children:"\u90e8\u5206\u53d8\u91cf\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u534f\u8bae\uff0c\u5e76\u4e0d\u4ea7\u751f\u5176\u5728 MySQL \u6570\u636e\u5e93\u4e2d\u7684\u5b9e\u9645\u610f\u4e49"}),"\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u67e5\u770b",children:"\u67e5\u770b"}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"SHOW VARIABLES [LIKE 'xxx']"}),"; \u67e5\u770b\u6240\u6709\u6216\u6307\u5b9a\u7684\u53d8\u91cf\u3002\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"SHOW VARIABLES;\n\nSHOW VARIABLES LIKE '%time_zone%';\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u8bbe\u7f6e",children:"\u8bbe\u7f6e"}),"\n",(0,i.jsxs)(e.p,{children:["\u53d8\u91cf\u4e00\u822c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,i.jsx)(e.strong,{children:"\u5168\u5c40"}),"\u751f\u6548\u6216",(0,i.jsx)(e.strong,{children:"\u4ec5\u5f53\u524d\u4f1a\u8bdd"}),"\u751f\u6548\u3002\u8bbe\u7f6e\u4e3a\u5168\u5c40\u751f\u6548\u540e\uff0c",(0,i.jsx)(e.strong,{children:"\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd"}),"\u8fde\u63a5\u4e2d\u4f1a\u4f7f\u7528\u65b0\u8bbe\u7f6e\u7684\u503c\uff0c\u800c\u4e0d\u5f71\u54cd\u5f53\u524d\u4f1a\u8bdd\uff1b\u8bbe\u7f6e\u4e3a\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u65f6\uff0c\u53d8\u91cf\u4ec5\u5bf9\u5f53\u524d\u4f1a\u8bdd\u4ea7\u751f\u4f5c\u7528\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"SET var_name=xxx;"})," \u8bed\u53e5\u8bbe\u7f6e\u7684\u53d8\u91cf\u4ec5\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u3002\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:'SET exec_mem_limit = 137438953472;\n\nSET forward_to_master = true;\n\nSET time_zone = "Asia/Shanghai";\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"SET GLOBAL var_name=xxx;"})," \u8bed\u53e5\u8bbe\u7f6e\u7684\u53d8\u91cf\u5168\u5c40\u751f\u6548\u3002\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"SET GLOBAL exec_mem_limit = 137438953472;\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\uff1a\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u53d8\u91cf\u4e3a\u5168\u5c40\u751f\u6548\u3002 \u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u4e0d\u5f71\u54cd\u5f53\u524d\u4f1a\u8bdd\uff0c\u4ec5\u5f71\u54cd\u540e\u7eed\u65b0\u7684\u4f1a\u8bdd\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u65e2\u652f\u6301\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u53c8\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"batch_size"}),"\n",(0,i.jsx)(e.li,{children:"disable_streaming_preaggregations"}),"\n",(0,i.jsx)(e.li,{children:"exec_mem_limit"}),"\n",(0,i.jsx)(e.li,{children:"force_streaming_aggregate"}),"\n",(0,i.jsx)(e.li,{children:"is_report_success"}),"\n",(0,i.jsx)(e.li,{children:"hash_join_push_down_right_table"}),"\n",(0,i.jsx)(e.li,{children:"parallel_fragment_exec_instance_num"}),"\n",(0,i.jsx)(e.li,{children:"parallel_exchange_instance_num"}),"\n",(0,i.jsx)(e.li,{children:"query_timeout"}),"\n",(0,i.jsx)(e.li,{children:"sql_mode"}),"\n",(0,i.jsx)(e.li,{children:"time_zone"}),"\n",(0,i.jsx)(e.li,{children:"vectorized_engine_enable"}),"\n",(0,i.jsx)(e.li,{children:"wait_timeout"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u53ea\u652f\u6301\u5168\u5c40\u751f\u6548\u7684\u53d8\u91cf\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"default_rowset_type"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u53d8\u91cf\u8bbe\u7f6e\u4e5f\u652f\u6301\u5e38\u91cf\u8868\u8fbe\u5f0f\uff0c\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"SET exec_mem_limit = 10 * 1024 * 1024 * 1024;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"SET forward_to_master = concat('tr', 'u', 'e');\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf",children:"\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u8bbe\u7f6e\u53d8\u91cf"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u9488\u5bf9\u67d0\u4e9b\u67e5\u8be2\u4e13\u95e8\u8bbe\u7f6e\u53d8\u91cf\u3002 \u901a\u8fc7\u4f7f\u7528SET_VAR\u63d0\u793a\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u8bbe\u7f6e\u4ec5\u5728\u5355\u4e2a\u8bed\u53e5\u5185\u751f\u6548\u7684\u4f1a\u8bdd\u53d8\u91cf\u3002\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT /*+ SET_VAR(exec_mem_limit = 8589934592) */ name FROM people ORDER BY name;\n\nSELECT /*+ SET_VAR(query_timeout = 1) */ sleep(3);\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:'\u6ce8\uff1a\u63d0\u793a\u5fc5\u987b\u4ee5"/*+"\u5f00\u5934\uff0c\u5e76\u4e14\u53ea\u80fd\u8ddf\u968f\u5728SELECT\u5173\u952e\u5b57\u4e4b\u540e\u3002'}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u652f\u6301\u7684\u53d8\u91cf",children:"\u652f\u6301\u7684\u53d8\u91cf"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SQL_AUTO_IS_NULL"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 JDBC \u8fde\u63a5\u6c60 C3P0\u3002 \u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"auto_increment_increment"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"autocommit"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"batch_size"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u5728\u67e5\u8be2\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5404\u4e2a\u8282\u70b9\u4f20\u8f93\u7684\u5355\u4e2a\u6570\u636e\u5305\u7684\u884c\u6570\u3002\u9ed8\u8ba4\u4e00\u4e2a\u6570\u636e\u5305\u7684\u884c\u6570\u4e3a 1024 \u884c\uff0c\u5373\u6e90\u7aef\u8282\u70b9\u6bcf\u4ea7\u751f 1024 \u884c\u6570\u636e\u540e\uff0c\u6253\u5305\u53d1\u7ed9\u76ee\u7684\u8282\u70b9\u3002\u8f83\u5927\u7684\u884c\u6570\uff0c\u4f1a\u5728\u626b\u63cf\u5927\u6570\u636e\u91cf\u573a\u666f\u4e0b\u63d0\u5347\u67e5\u8be2\u7684\u541e\u5410\uff0c\u4f46\u53ef\u80fd\u4f1a\u5728\u5c0f\u67e5\u8be2\u573a\u666f\u4e0b\u589e\u52a0\u67e5\u8be2\u5ef6\u8fdf\u3002\u540c\u65f6\uff0c\u4e5f\u4f1a\u589e\u52a0\u67e5\u8be2\u7684\u5185\u5b58\u5f00\u9500\u3002\u5efa\u8bae\u8bbe\u7f6e\u8303\u56f4 1024 \u81f3 4096\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"default_rowset_type"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u8ba1\u7b97\u8282\u70b9\u5b58\u50a8\u5f15\u64ce\u9ed8\u8ba4\u7684\u5b58\u50a8\u683c\u5f0f\u3002\u5f53\u524d\u652f\u6301\u7684\u5b58\u50a8\u683c\u5f0f\u5305\u62ec\uff1aalpha/beta\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"disable_colocate_join"}),"\n",(0,i.jsx)(e.p,{children:"\u63a7\u5236\u662f\u5426\u542f\u7528 Colocation Join \u529f\u80fd\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u8868\u793a\u542f\u7528\u8be5\u529f\u80fd\u3002true \u8868\u793a\u7981\u7528\u8be5\u529f\u80fd\u3002\u5f53\u8be5\u529f\u80fd\u88ab\u7981\u7528\u540e\uff0c\u67e5\u8be2\u89c4\u5212\u5c06\u4e0d\u4f1a\u5c1d\u8bd5\u6267\u884c Colocation Join\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"disable_streaming_preaggregations"}),"\n",(0,i.jsx)(e.p,{children:"\u63a7\u5236\u662f\u5426\u5f00\u542f\u6d41\u5f0f\u9884\u805a\u5408\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u5f00\u542f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"div_precision_increment"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"enable_insert_strict"}),"\n",(0,i.jsxs)(e.p,{children:["\u7528\u4e8e\u8bbe\u7f6e\u901a\u8fc7 INSERT \u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u65f6\uff0c\u662f\u5426\u5f00\u542f strict \u6a21\u5f0f\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u5f00\u542f strict \u6a21\u5f0f\u3002\u5173\u4e8e\u8be5\u6a21\u5f0f\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u9605\u300a",(0,i.jsx)(e.a,{href:"/zh/docs/2.0/loading/Loading_intro",children:"\u6570\u636e\u5bfc\u5165"}),"\u300b\u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"enable_spilling"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u5f00\u542f\u5927\u6570\u636e\u91cf\u843d\u76d8\u6392\u5e8f\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u5173\u95ed\u8be5\u529f\u80fd\u3002\u5f53\u7528\u6237\u672a\u6307\u5b9a ORDER BY \u5b50\u53e5\u7684 LIMIT \u6761\u4ef6\uff0c\u540c\u65f6\u8bbe\u7f6e enable_spilling \u4e3a true \u65f6\uff0c\u624d\u4f1a\u5f00\u542f\u843d\u76d8\u6392\u5e8f\u3002\u8be5\u529f\u80fd\u542f\u7528\u540e\uff0c\u4f1a\u4f7f\u7528 BE \u6570\u636e\u76ee\u5f55\u4e0b starrocks-scratch/ \u76ee\u5f55\u5b58\u653e\u4e34\u65f6\u7684\u843d\u76d8\u6570\u636e\uff0c\u5e76\u5728\u67e5\u8be2\u7ed3\u675f\u540e\u6e05\u7a7a\u4e34\u65f6\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8be5\u529f\u80fd\u4e3b\u8981\u7528\u4e8e\u4f7f\u7528\u6709\u9650\u7684\u5185\u5b58\u8fdb\u884c\u5927\u6570\u636e\u91cf\u7684\u6392\u5e8f\u64cd\u4f5c\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\uff1a\u8be5\u529f\u80fd\u4e3a\u5b9e\u9a8c\u6027\u8d28\uff0c\u4e0d\u4fdd\u8bc1\u7a33\u5b9a\u6027\uff0c\u8bf7\u8c28\u614e\u5f00\u542f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"event_scheduler"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"exec_mem_limit"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u5355\u4e2a\u67e5\u8be2\u8ba1\u5212\u5b9e\u4f8b\u6240\u80fd\u4f7f\u7528\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\uff1aB/K/KB/M/MB/G/GB/T/TB/P/PB, \u9ed8\u8ba4\u4e3aB\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u53ef\u80fd\u6709\u591a\u4e2a\u5b9e\u4f8b\uff0c\u4e00\u4e2a BE \u8282\u70b9\u53ef\u80fd\u6267\u884c\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u4f8b\u3002\u6240\u4ee5\u8be5\u53c2\u6570\u5e76\u4e0d\u80fd\u51c6\u786e\u9650\u5236\u4e00\u4e2a\u67e5\u8be2\u5728\u6574\u4e2a\u96c6\u7fa4\u4e2d\u7684\u5185\u5b58\u4f7f\u7528\uff0c\u4e5f\u4e0d\u80fd\u51c6\u786e\u9650\u5236\u4e00\u4e2a\u67e5\u8be2\u5728\u5355\u4e00 BE \u8282\u70b9\u4e0a\u7684\u5185\u5b58\u4f7f\u7528\u3002\u5177\u4f53\u9700\u8981\u6839\u636e\u751f\u6210\u7684\u67e5\u8be2\u8ba1\u5212\u5224\u65ad\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u5e38\u53ea\u6709\u5728\u4e00\u4e9b\u963b\u585e\u8282\u70b9\uff08\u5982\u6392\u5e8f\u8282\u70b9\u3001\u805a\u5408\u8282\u70b9\u3001Join \u8282\u70b9\uff09\u4e0a\u624d\u4f1a\u6d88\u8017\u8f83\u591a\u7684\u5185\u5b58\uff0c\u800c\u5176\u4ed6\u8282\u70b9\uff08\u5982\u626b\u63cf\u8282\u70b9\uff09\u4e2d\uff0c\u6570\u636e\u4e3a\u6d41\u5f0f\u901a\u8fc7\uff0c\u5e76\u4e0d\u4f1a\u5360\u7528\u8f83\u591a\u7684\u5185\u5b58\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u51fa\u73b0 Memory Exceed Limit \u9519\u8bef\u65f6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u6307\u6570\u7ea7\u589e\u52a0\u8be5\u53c2\u6570\uff0c\u5982 4G\u30018G\u300116G \u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"force_streaming_aggregate"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u63a7\u5236\u805a\u5408\u8282\u70b9\u662f\u5426\u542f\u7528\u6d41\u5f0f\u805a\u5408\u8ba1\u7b97\u7b56\u7565\u3002\u9ed8\u8ba4\u4e3afalse\uff0c\u8868\u793a\u4e0d\u542f\u7528\u8be5\u7b56\u7565\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"forward_to_master"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u5c06\u4e00\u4e9b\u547d\u4ee4\u8f6c\u53d1\u5230 Master FE \u8282\u70b9\u6267\u884c\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u8f6c\u53d1\u3002StarRocks \u4e2d\u5b58\u5728\u591a\u4e2a FE \u8282\u70b9\uff0c\u5176\u4e2d\u4e00\u4e2a\u4e3a Master \u8282\u70b9\u3002\u901a\u5e38\u7528\u6237\u53ef\u4ee5\u8fde\u63a5\u4efb\u610f FE \u8282\u70b9\u8fdb\u884c\u5168\u529f\u80fd\u64cd\u4f5c\u3002\u4f46\u90e8\u5206\u4fe1\u606f\u67e5\u770b\u6307\u4ee4\u53ea\u6709\u4ece Master FE \u8282\u70b9\u624d\u80fd\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982 ",(0,i.jsx)(e.code,{children:"SHOW BACKENDS;"})," \u547d\u4ee4\uff0c\u5982\u679c\u4e0d\u8f6c\u53d1\u5230 Master FE \u8282\u70b9\uff0c\u5219\u4ec5\u80fd\u770b\u5230\u8282\u70b9\u662f\u5426\u5b58\u6d3b\u7b49\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\uff0c\u800c\u8f6c\u53d1\u5230 Master FE \u5219\u53ef\u4ee5\u83b7\u53d6\u5305\u62ec\u8282\u70b9\u542f\u52a8\u65f6\u95f4\u3001\u6700\u540e\u4e00\u6b21\u5fc3\u8df3\u65f6\u95f4\u7b49\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u524d\u53d7\u8be5\u53c2\u6570\u5f71\u54cd\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SHOW FRONTENDS;"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u53d1\u5230 Master \u53ef\u4ee5\u67e5\u770b\u6700\u540e\u4e00\u6b21\u5fc3\u8df3\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SHOW BACKENDS;"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u53d1\u5230 Master \u53ef\u4ee5\u67e5\u770b\u542f\u52a8\u65f6\u95f4\u3001\u6700\u540e\u4e00\u6b21\u5fc3\u8df3\u4fe1\u606f\u3001\u78c1\u76d8\u5bb9\u91cf\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SHOW BROKER;"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u53d1\u5230 Master \u53ef\u4ee5\u67e5\u770b\u542f\u52a8\u65f6\u95f4\u3001\u6700\u540e\u4e00\u6b21\u5fc3\u8df3\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SHOW TABLET;"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ADMIN SHOW REPLICA DISTRIBUTION;"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"ADMIN SHOW REPLICA STATUS;"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u53d1\u5230 Master \u53ef\u4ee5\u67e5\u770b Master FE \u5143\u6570\u636e\u4e2d\u5b58\u50a8\u7684 tablet \u4fe1\u606f\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e0d\u540c FE \u5143\u6570\u636e\u4e2d tablet \u4fe1\u606f\u5e94\u8be5\u662f\u4e00\u81f4\u7684\u3002\u5f53\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u6bd4\u8f83\u5f53\u524d FE \u548c Master FE \u5143\u6570\u636e\u7684\u5dee\u5f02\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"SHOW PROC;"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6c\u53d1\u5230 Master \u53ef\u4ee5\u67e5\u770b Master FE \u5143\u6570\u636e\u4e2d\u5b58\u50a8\u7684\u76f8\u5173 PROC \u7684\u4fe1\u606f\u3002\u4e3b\u8981\u7528\u4e8e\u5143\u6570\u636e\u6bd4\u5bf9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"hash_join_push_down_right_table"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u63a7\u5236\u5728Join\u67e5\u8be2\u4e2d\u662f\u5426\u53ef\u4ee5\u4f7f\u7528\u9488\u5bf9\u53f3\u8868\u7684\u8fc7\u6ee4\u6761\u4ef6\u6765\u8fc7\u6ee4\u5de6\u8868\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u51cf\u5c11Join\u8fc7\u7a0b\u4e2d\u9700\u8981\u5904\u7406\u7684\u5de6\u8868\u7684\u6570\u636e\u91cf\u3002\u53d6\u503c\u4e3atrue\u65f6\u8868\u793a\u5141\u8bb8\u8be5\u64cd\u4f5c\uff0c\u7cfb\u7edf\u5c06\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u51b3\u5b9a\u662f\u5426\u80fd\u5bf9\u5de6\u8868\u8fdb\u884c\u8fc7\u6ee4\uff1b\u53d6\u503c\u4e3afalse\u8868\u793a\u7981\u7528\u8be5\u64cd\u4f5c\u3002\u7f3a\u7701\u503c\u4e3atrue\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"init_connect"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"interactive_timeout"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"is_report_success"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u67e5\u770b\u67e5\u8be2\u7684 profile\u3002\u9ed8\u8ba4\u4e3a false\uff0c\u5373\u4e0d\u9700\u8981 profile\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u5728\u67e5\u8be2\u53d1\u751f\u9519\u8bef\u65f6\uff0cBE \u624d\u4f1a\u53d1\u9001 profile \u7ed9 FE\uff0c\u7528\u4e8e\u67e5\u770b\u9519\u8bef\u3002\u6b63\u5e38\u7ed3\u675f\u7684\u67e5\u8be2\u4e0d\u4f1a\u53d1\u9001 profile\u3002\u53d1\u9001 profile \u4f1a\u4ea7\u751f\u4e00\u5b9a\u7684\u7f51\u7edc\u5f00\u9500\uff0c\u5bf9\u9ad8\u5e76\u53d1\u67e5\u8be2\u573a\u666f\u4e0d\u5229\u3002 \u5f53\u7528\u6237\u5e0c\u671b\u5bf9\u4e00\u4e2a\u67e5\u8be2\u7684 profile \u8fdb\u884c\u5206\u6790\u65f6\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u53d8\u91cf\u8bbe\u4e3a true \u540e\uff0c\u53d1\u9001\u67e5\u8be2\u3002\u67e5\u8be2\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u5f53\u524d\u8fde\u63a5\u7684 FE \u7684 web \u9875\u9762\uff08\u5730\u5740\uff1afe_host",(0,i.jsx)(e.div,{}),"/query\uff09\u67e5\u770b profile\u3002\u8be5\u9875\u9762\u4f1a\u663e\u793a\u6700\u8fd1100\u6761\u5f00\u542f\u4e86 is_report_success \u7684\u67e5\u8be2\u7684 profile\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"language"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"license"}),"\n",(0,i.jsx)(e.p,{children:"\u663e\u793a StarRocks \u7684 License\u3002\u65e0\u5176\u4ed6\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"load_mem_limit"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u64cd\u4f5c\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 0\uff0c\u5373\u8868\u793a\u4e0d\u4f7f\u7528\u8be5\u53d8\u91cf\uff0c\u800c\u91c7\u7528 exec_mem_limit \u4f5c\u4e3a\u5bfc\u5165\u64cd\u4f5c\u7684\u5185\u5b58\u9650\u5236\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u53d8\u91cf\u4ec5\u7528\u4e8e INSERT \u64cd\u4f5c\u3002\u56e0\u4e3a INSERT \u64cd\u4f5c\u6d89\u53ca\u67e5\u8be2\u548c\u5bfc\u5165\u4e24\u4e2a\u90e8\u5206\uff0c\u5982\u679c\u7528\u6237\u4e0d\u8bbe\u7f6e\u6b64\u53d8\u91cf\uff0c\u5219\u67e5\u8be2\u548c\u5bfc\u5165\u64cd\u4f5c\u5404\u81ea\u7684\u5185\u5b58\u9650\u5236\u5747\u4e3a exec_mem_limit\u3002\u5426\u5219\uff0cINSERT \u7684\u67e5\u8be2\u90e8\u5206\u5185\u5b58\u9650\u5236\u4e3a exec_mem_limit\uff0c\u800c\u5bfc\u5165\u90e8\u5206\u9650\u5236\u4e3a load_mem_limit\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4ed6\u5bfc\u5165\u65b9\u5f0f\uff0c\u5982 BROKER LOAD\uff0cSTREAM LOAD \u7684\u5185\u5b58\u9650\u5236\u4f9d\u7136\u4f7f\u7528 exec_mem_limit\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"lower_case_table_names"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\uff0c\u65e0\u5b9e\u9645\u4f5c\u7528\u3002StarRocks \u4e2d\u7684\u8868\u540d\u662f\u5927\u5c0f\u5199\u654f\u611f\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"max_allowed_packet"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 JDBC \u8fde\u63a5\u6c60 C3P0\u3002 \u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"max_pushdown_conditions_per_column"}),"\n",(0,i.jsx)(e.p,{children:"\u8be5\u53d8\u91cf\u7684\u5177\u4f53\u542b\u4e49\u8bf7\u53c2\u9605 BE \u914d\u7f6e\u9879\u4e2d max_pushdown_conditions_per_column \u7684\u8bf4\u660e\u3002\u8be5\u53d8\u91cf\u9ed8\u8ba4\u7f6e\u4e3a -1\uff0c\u8868\u793a\u4f7f\u7528 be.conf \u4e2d\u7684\u914d\u7f6e\u503c\u3002\u5982\u679c\u8bbe\u7f6e\u5927\u4e8e 0\uff0c\u5219\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u67e5\u8be2\u4f1a\u4f7f\u7528\u8be5\u53d8\u91cf\u503c\uff0c\u800c\u5ffd\u7565 be.conf \u4e2d\u7684\u914d\u7f6e\u503c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"max_scan_key_num"}),"\n",(0,i.jsx)(e.p,{children:"\u8be5\u53d8\u91cf\u7684\u5177\u4f53\u542b\u4e49\u8bf7\u53c2\u9605 BE \u914d\u7f6e\u9879\u4e2d starrocks_max_scan_key_num \u7684\u8bf4\u660e\u3002\u8be5\u53d8\u91cf\u9ed8\u8ba4\u7f6e\u4e3a -1\uff0c\u8868\u793a\u4f7f\u7528 be.conf \u4e2d\u7684\u914d\u7f6e\u503c\u3002\u5982\u679c\u8bbe\u7f6e\u5927\u4e8e 0\uff0c\u5219\u5f53\u524d\u4f1a\u8bdd\u4e2d\u7684\u67e5\u8be2\u4f1a\u4f7f\u7528\u8be5\u53d8\u91cf\u503c\uff0c\u800c\u5ffd\u7565 be.conf \u4e2d\u7684\u914d\u7f6e\u503c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"net_buffer_length"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"net_read_timeout"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"net_write_timeout"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"parallel_exchange_instance_num"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u6267\u884c\u8ba1\u5212\u4e2d\uff0c\u4e00\u4e2a\u4e0a\u5c42\u8282\u70b9\u63a5\u6536\u4e0b\u5c42\u8282\u70b9\u6570\u636e\u6240\u4f7f\u7528\u7684 exchange node \u6570\u91cf\u3002\u9ed8\u8ba4\u4e3a -1\uff0c\u5373\u8868\u793a exchange node \u6570\u91cf\u7b49\u4e8e\u4e0b\u5c42\u8282\u70b9\u6267\u884c\u5b9e\u4f8b\u7684\u4e2a\u6570\uff08\u9ed8\u8ba4\u884c\u4e3a\uff09\u3002\u5f53\u8bbe\u7f6e\u5927\u4e8e0\uff0c\u5e76\u4e14\u5c0f\u4e8e\u4e0b\u5c42\u8282\u70b9\u6267\u884c\u5b9e\u4f8b\u7684\u4e2a\u6570\uff0c\u5219 exchange node \u6570\u91cf\u7b49\u4e8e\u8bbe\u7f6e\u503c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u67e5\u8be2\u6267\u884c\u8ba1\u5212\u4e2d\uff0c\u4e0a\u5c42\u8282\u70b9\u901a\u5e38\u6709\u4e00\u4e2a\u6216\u591a\u4e2a exchange node \u7528\u4e8e\u63a5\u6536\u6765\u81ea\u4e0b\u5c42\u8282\u70b9\u5728\u4e0d\u540c BE \u4e0a\u7684\u6267\u884c\u5b9e\u4f8b\u7684\u6570\u636e\u3002\u901a\u5e38 exchange node \u6570\u91cf\u7b49\u4e8e\u4e0b\u5c42\u8282\u70b9\u6267\u884c\u5b9e\u4f8b\u6570\u91cf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4e00\u4e9b\u805a\u5408\u67e5\u8be2\u573a\u666f\u4e0b\uff0c\u5982\u679c\u5e95\u5c42\u9700\u8981\u626b\u63cf\u7684\u6570\u636e\u91cf\u8f83\u5927\uff0c\u4f46\u805a\u5408\u4e4b\u540e\u7684\u6570\u636e\u91cf\u5f88\u5c0f\uff0c\u5219\u53ef\u4ee5\u5c1d\u8bd5\u4fee\u6539\u6b64\u53d8\u91cf\u4e3a\u4e00\u4e2a\u8f83\u5c0f\u7684\u503c\uff0c\u53ef\u4ee5\u964d\u4f4e\u6b64\u7c7b\u67e5\u8be2\u7684\u8d44\u6e90\u5f00\u9500\u3002\u5982\u5728 DUPLICATE KEY \u660e\u7ec6\u6a21\u578b\u4e0a\u8fdb\u884c\u805a\u5408\u67e5\u8be2\u7684\u573a\u666f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"parallel_fragment_exec_instance_num"}),"\n",(0,i.jsx)(e.p,{children:"\u9488\u5bf9\u626b\u63cf\u8282\u70b9\uff0c\u8bbe\u7f6e\u5176\u5728\u6bcf\u4e2a BE \u8282\u70b9\u4e0a\u6267\u884c\u5b9e\u4f8b\u7684\u4e2a\u6570\u3002\u9ed8\u8ba4\u4e3a 1\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u4e2a\u67e5\u8be2\u8ba1\u5212\u901a\u5e38\u4f1a\u4ea7\u751f\u4e00\u7ec4 scan range\uff0c\u5373\u9700\u8981\u626b\u63cf\u7684\u6570\u636e\u8303\u56f4\u3002\u8fd9\u4e9b\u6570\u636e\u5206\u5e03\u5728\u591a\u4e2a BE \u8282\u70b9\u4e0a\u3002\u4e00\u4e2a BE \u8282\u70b9\u4f1a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a scan range\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a BE \u8282\u70b9\u7684\u4e00\u7ec4 scan range \u53ea\u7531\u4e00\u4e2a\u6267\u884c\u5b9e\u4f8b\u5904\u7406\u3002\u5f53\u673a\u5668\u8d44\u6e90\u6bd4\u8f83\u5145\u88d5\u65f6\uff0c\u53ef\u4ee5\u5c06\u589e\u52a0\u8be5\u53d8\u91cf\uff0c\u8ba9\u66f4\u591a\u7684\u6267\u884c\u5b9e\u4f8b\u540c\u65f6\u5904\u7406\u4e00\u7ec4 scan range\uff0c\u4ece\u800c\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u800c scan \u5b9e\u4f8b\u7684\u6570\u91cf\u51b3\u5b9a\u4e86\u4e0a\u5c42\u5176\u4ed6\u6267\u884c\u8282\u70b9\uff0c\u5982\u805a\u5408\u8282\u70b9\uff0cjoin \u8282\u70b9\u7684\u6570\u91cf\u3002\u56e0\u6b64\u76f8\u5f53\u4e8e\u589e\u52a0\u4e86\u6574\u4e2a\u67e5\u8be2\u8ba1\u5212\u6267\u884c\u7684\u5e76\u53d1\u5ea6\u3002\u4fee\u6539\u8be5\u53c2\u6570\u4f1a\u5bf9\u5927\u67e5\u8be2\u6548\u7387\u63d0\u5347\u6709\u5e2e\u52a9\uff0c\u4f46\u8f83\u5927\u6570\u503c\u4f1a\u6d88\u8017\u66f4\u591a\u7684\u673a\u5668\u8d44\u6e90\uff0c\u5982CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8IO\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"performance_schema"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 8.0.16\u53ca\u4ee5\u4e0a\u7248\u672c\u7684MySQL JDBC\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"query_cache_size"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"query_cache_type"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 JDBC \u8fde\u63a5\u6c60 C3P0\u3002 \u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"query_timeout"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u67e5\u8be2\u8d85\u65f6\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002\u8be5\u53d8\u91cf\u4f1a\u4f5c\u7528\u4e8e\u5f53\u524d\u8fde\u63a5\u4e2d\u6240\u6709\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u4ee5\u53ca INSERT \u8bed\u53e5\u3002\u9ed8\u8ba4\u4e3a300\u79d2\uff0c\u5373 5 \u5206\u949f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"resource_group"}),"\n",(0,i.jsx)(e.p,{children:"\u6682\u4e0d\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"rewrite_count_distinct_to_bitmap_hll"}),"\n",(0,i.jsx)(e.p,{children:"\u662f\u5426\u5c06 Bitmap \u548c HLL \u7c7b\u578b\u7684 count distinct \u67e5\u8be2\u91cd\u5199\u4e3a bitmap_union_count \u548c hll_union_agg \u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"sql_mode"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a SQL \u6a21\u5f0f\uff0c\u4ee5\u9002\u5e94\u67d0\u4e9b SQL \u65b9\u8a00\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"sql_safe_updates"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"sql_select_limit"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"storage_engine"}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5b9a\u7cfb\u7edf\u4f7f\u7528\u7684\u5b58\u50a8\u5f15\u64ce\u3002StarRocks\u652f\u6301\u7684\u5f15\u64ce\u7c7b\u578b\u5305\u62ec\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"olap\uff1aStarRocks\u7cfb\u7edf\u81ea\u6709\u5f15\u64ce\u3002"}),"\n",(0,i.jsx)(e.li,{children:"mysql\uff1a\u4f7f\u7528MySQL\u5916\u90e8\u8868\u3002"}),"\n",(0,i.jsx)(e.li,{children:"broker\uff1a\u901a\u8fc7Broker\u7a0b\u5e8f\u8bbf\u95ee\u5916\u90e8\u8868\u3002"}),"\n",(0,i.jsx)(e.li,{children:"elasticsearch \u6216\u8005 es\uff1a\u4f7f\u7528Elasticsearch\u5916\u90e8\u8868\u3002"}),"\n",(0,i.jsx)(e.li,{children:"hive\uff1a\u4f7f\u7528Hive\u5916\u90e8\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"system_time_zone"}),"\n",(0,i.jsx)(e.p,{children:"\u663e\u793a\u5f53\u524d\u7cfb\u7edf\u65f6\u533a\u3002\u4e0d\u53ef\u66f4\u6539\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"time_zone"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u4f1a\u8bdd\u7684\u65f6\u533a\u3002\u65f6\u533a\u4f1a\u5bf9\u67d0\u4e9b\u65f6\u95f4\u51fd\u6570\u7684\u7ed3\u679c\u4ea7\u751f\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"tx_isolation"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"use_v2_rollup"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u63a7\u5236\u67e5\u8be2\u4f7f\u7528segment v2\u5b58\u50a8\u683c\u5f0f\u7684Rollup\u7d22\u5f15\u83b7\u53d6\u6570\u636e\u3002\u8be5\u53d8\u91cf\u7528\u4e8e\u4e0a\u7ebfsegment v2\u7684\u65f6\u8fdb\u884c\u9a8c\u8bc1\u4f7f\u7528\u3002\u5176\u4ed6\u60c5\u51b5\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"vectorized_engine_enable"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u63a7\u5236\u662f\u5426\u4f7f\u7528\u5411\u91cf\u5316\u5f15\u64ce\u6267\u884c\u67e5\u8be2\u3002\u503c\u4e3atrue\u65f6\u8868\u793a\u4f7f\u7528\u5411\u91cf\u5316\u5f15\u64ce\uff0c\u5426\u5219\u4f7f\u7528\u975e\u5411\u91cf\u5316\u5f15\u64ce\u3002\u7f3a\u7701\u503c\u4e3atrue\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"version"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u517c\u5bb9 MySQL \u5ba2\u6237\u7aef\u3002\u65e0\u5b9e\u9645\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"version_comment"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u663e\u793a StarRocks \u7684\u7248\u672c\u3002\u4e0d\u53ef\u66f4\u6539\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"wait_timeout"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u4e8e\u8bbe\u7f6e\u7a7a\u95f2\u8fde\u63a5\u7684\u8fde\u63a5\u65f6\u957f\u3002\u5f53\u4e00\u4e2a\u7a7a\u95f2\u8fde\u63a5\u5728\u8be5\u65f6\u957f\u5185\u4e0e StarRocks \u6ca1\u6709\u4efb\u4f55\u4ea4\u4e92\uff0c\u5219 StarRocks \u4f1a\u4e3b\u52a8\u65ad\u5f00\u8fd9\u4e2a\u94fe\u63a5\u3002\u9ed8\u8ba4\u4e3a 8 \u5c0f\u65f6\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002"}),"\n"]}),"\n"]})]})}const j=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(t,n)})):t(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(n){const e=i.useContext(l);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||c:r(n),i.createElement(l.Provider,{value:d},e)}}}]);