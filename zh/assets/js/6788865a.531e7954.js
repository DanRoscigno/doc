"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43381],{46155:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var l=s(85893),c=s(11151);const t={displayed_sidebar:"Chinese"},i="CBO\u4f18\u5316\u5668",r={id:"using_starrocks/Cost_based_optimizer",title:"CBO\u4f18\u5316\u5668",description:"StarRocks 1.16.0 \u7248\u672c\u63a8\u51fa CBO \u4f18\u5316\u5668\uff08Cost-based Optimizer \uff09\u3002StarRocks 1.19 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u8be5\u7279\u6027\u9ed8\u8ba4\u5f00\u542f\u3002CBO \u4f18\u5316\u5668\u80fd\u591f\u57fa\u4e8e\u6210\u672c\u9009\u62e9\u6700\u4f18\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5927\u5e45\u63d0\u5347\u590d\u6742\u67e5\u8be2\u7684\u6548\u7387\u548c\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/using_starrocks/Cost_based_optimizer.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Cost_based_optimizer",permalink:"/zh/docs/2.3/using_starrocks/Cost_based_optimizer",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Cost_based_optimizer.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Colocate Join",permalink:"/zh/docs/2.3/using_starrocks/Colocate_join"},next:{title:"\u4f7f\u7528 Lateral Join \u5b9e\u73b0\u5217\u8f6c\u884c",permalink:"/zh/docs/2.3/using_starrocks/Lateral_join"}},d={},a=[{value:"\u4ec0\u4e48\u662fCBO\u4f18\u5316\u5668",id:"\u4ec0\u4e48\u662fcbo\u4f18\u5316\u5668",level:2},{value:"\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f",id:"\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"\u91c7\u96c6\u7b56\u7565",id:"\u91c7\u96c6\u7b56\u7565",level:3},{value:"\u5168\u91cf\u91c7\u96c6",id:"\u5168\u91cf\u91c7\u96c6",level:3},{value:"\u62bd\u6837\u91c7\u96c6",id:"\u62bd\u6837\u91c7\u96c6",level:3},{value:"\u67e5\u8be2\u6216\u5220\u9664\u91c7\u96c6\u4efb\u52a1",id:"\u67e5\u8be2\u6216\u5220\u9664\u91c7\u96c6\u4efb\u52a1",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"FE\u914d\u7f6e\u9879",id:"fe\u914d\u7f6e\u9879",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li",a:"a",pre:"pre"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"cbo\u4f18\u5316\u5668",children:"CBO\u4f18\u5316\u5668"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks 1.16.0 \u7248\u672c\u63a8\u51fa CBO \u4f18\u5316\u5668\uff08Cost-based Optimizer \uff09\u3002StarRocks 1.19 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u8be5\u7279\u6027\u9ed8\u8ba4\u5f00\u542f\u3002CBO \u4f18\u5316\u5668\u80fd\u591f\u57fa\u4e8e\u6210\u672c\u9009\u62e9\u6700\u4f18\u7684\u6267\u884c\u8ba1\u5212\uff0c\u5927\u5e45\u63d0\u5347\u590d\u6742\u67e5\u8be2\u7684\u6548\u7387\u548c\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4ec0\u4e48\u662fcbo\u4f18\u5316\u5668",children:"\u4ec0\u4e48\u662fCBO\u4f18\u5316\u5668"}),"\n",(0,l.jsx)(n.p,{children:"CBO \u4f18\u5316\u5668\u91c7\u7528 Cascades \u6846\u67b6\uff0c\u4f7f\u7528\u591a\u79cd\u7edf\u8ba1\u4fe1\u606f\u6765\u5b8c\u5584\u6210\u672c\u4f30\u7b97\uff0c\u540c\u65f6\u8865\u5145\u903b\u8f91\u8f6c\u6362\uff08Transformation Rule\uff09\u548c\u7269\u7406\u5b9e\u73b0\uff08Implementation Rule\uff09\u89c4\u5219\uff0c\u80fd\u591f\u5728\u6570\u4e07\u7ea7\u522b\u6267\u884c\u8ba1\u5212\u7684\u641c\u7d22\u7a7a\u95f4\u4e2d\uff0c\u9009\u62e9\u6210\u672c\u6700\u4f4e\u7684\u6700\u4f18\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f",children:"\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,l.jsxs)(n.p,{children:["CBO \u4f18\u5316\u5668\u4f1a\u5b9a\u671f\u91c7\u96c6\u7684\u591a\u79cd\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f8b\u5982\u884c\u6570\uff0c\u5217\u7684\u5e73\u5747\u5927\u5c0f\u3001\u57fa\u6570\u4fe1\u606f\u3001NULL \u503c\u6570\u636e\u91cf\u3001MAX/MIN \u503c\u7b49\uff0c\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u5b58\u50a8\u5728",(0,l.jsx)(n.code,{children:"_statistics_.table_statistic_v1"}),"\u4e2d\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u91c7\u96c6\u7b56\u7565",children:"\u91c7\u96c6\u7b56\u7565"}),"\n",(0,l.jsx)(n.p,{children:"\u7edf\u8ba1\u4fe1\u606f\u652f\u6301\u5168\u91cf\u6216\u62bd\u6837\u7684\u91c7\u96c6\u7c7b\u578b\uff0c\u5e76\u4e14\u652f\u6301\u624b\u52a8\u6216\u81ea\u52a8\u5b9a\u671f\u7684\u91c7\u96c6\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5e2e\u52a9 CBO \u4f18\u5316\u5668\u5b8c\u5584\u6210\u672c\u4f30\u7b97\uff0c\u9009\u62e9\u6700\u4f18\u6267\u884c\u8ba1\u5212\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u91c7\u96c6\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u91c7\u96c6\u65b9\u5f0f"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,l.jsx)(n.th,{children:"\u4f18\u7f3a\u70b9"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u5168\u91cf\u91c7\u96c6"}),(0,l.jsx)(n.td,{children:"\u624b\u52a8\u548c\u81ea\u52a8\u5b9a\u671f\u3002"}),(0,l.jsx)(n.td,{children:"\u5bf9\u6574\u4e2a\u8868\u7684\u6240\u6709\u6570\u636e\uff0c\u8ba1\u7b97\u7edf\u8ba1\u4fe1\u606f\u3002"}),(0,l.jsx)(n.td,{children:"\u4f18\u70b9\uff1a\u5168\u91cf\u91c7\u96c6\u7684\u7edf\u8ba1\u4fe1\u606f\u51c6\u786e\uff0c\u80fd\u591f\u5e2e\u52a9CBO\u66f4\u51c6\u786e\u5730\u8bc4\u4f30\u6267\u884c\u8ba1\u5212\u3002 \u7f3a\u70b9\uff1a\u5168\u91cf\u91c7\u96c6\u6d88\u8017\u5927\u91cf\u7cfb\u7edf\u8d44\u6e90\uff0c\u901f\u5ea6\u6162\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u62bd\u6837\u91c7\u96c6"}),(0,l.jsx)(n.td,{children:"\u624b\u52a8\u548c\u81ea\u52a8\u5b9a\u671f\u3002"}),(0,l.jsx)(n.td,{children:"\u4ece\u8868\u7684\u6bcf\u4e00\u4e2a\u5206\u533a\uff08Partition\uff09\u4e2d\u5747\u5300\u62bd\u53d6N\u884c\u6570\u636e\uff0c\u8ba1\u7b97\u7edf\u8ba1\u4fe1\u606f\u3002"}),(0,l.jsx)(n.td,{children:"\u4f18\u70b9\uff1a\u62bd\u6837\u91c7\u96c6\u6d88\u8017\u8f83\u5c11\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u901f\u5ea6\u5feb\u3002 \u7f3a\u70b9\uff1a\u62bd\u6837\u91c7\u96c6\u7684\u7edf\u8ba1\u4fe1\u606f\u5b58\u5728\u4e00\u5b9a\u8bef\u5dee\uff0c\u53ef\u80fd\u4f1a\u5f71\u54cdCBO\u8bc4\u4f30\u6267\u884c\u8ba1\u5212\u7684\u51c6\u786e\u6027\u3002"})]})]})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u624b\u52a8\u91c7\u96c6\uff1a\u624b\u52a8\u6267\u884c\u4e00\u6b21\u91c7\u96c6\u4efb\u52a1\uff0c\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\uff1a\u5468\u671f\u6027\u6267\u884c\u91c7\u96c6\u4efb\u52a1\uff0c\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u9ed8\u8ba4\u4e3a\u4e00\u5929\u3002StarRocks \u9ed8\u8ba4\u6bcf\u9694\u4e24\u4e2a\u5c0f\u65f6\u68c0\u67e5\u6570\u636e\u662f\u5426\u66f4\u65b0\u3002\u5982\u679c\u68c0\u67e5\u5230\u6570\u636e\u66f4\u65b0\uff0c\u4e14\u8ddd\u79bb\u4e0a\u4e00\u6b21\u91c7\u96c6\u65f6\u95f4\u5df2\u8d85\u8fc7\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\uff08\u9ed8\u8ba4\u4e3a\u4e00\u5929\uff09\uff0c\u5219 StarRocks \u4f1a\u91cd\u65b0\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\uff1b\u53cd\u4e4b\uff0c\u5219 StarRocks \u4e0d\u91cd\u65b0\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"CBO \u4f18\u5316\u5668\u5f00\u542f\u540e\uff0c\u9700\u8981\u4f7f\u7528\u7edf\u8ba1\u4fe1\u606f\uff0c\u7edf\u8ba1\u4fe1\u606f\u9ed8\u8ba4\u4e3a\u62bd\u6837\u4e14\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\u3002\u62bd\u6837\u884c\u6570\u4e3a20\u4e07\u884c\uff0c\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u4e3a\u4e00\u5929\u3002\u6bcf\u9694\u4e24\u5c0f\u65f6 StarRocks \u4f1a\u68c0\u67e5\u6570\u636e\u662f\u5426\u66f4\u65b0\u3002\u60a8\u4e5f\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u9700\u8981\uff0c\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e\uff0c\u8c03\u6574\u7edf\u8ba1\u4fe1\u606f\u7684\u91c7\u96c6\u7c7b\u578b\uff08\u5168\u91cf\u6216\u62bd\u6837\uff09\u548c\u91c7\u96c6\u65b9\u5f0f\uff08\u624b\u52a8\u6216\u81ea\u52a8\u5b9a\u671f\uff09\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5168\u91cf\u91c7\u96c6",children:"\u5168\u91cf\u91c7\u96c6"}),"\n",(0,l.jsxs)(n.p,{children:["\u9009\u62e9\u91c7\u96c6\u65b9\u5f0f\uff08\u624b\u52a8\u6216\u81ea\u52a8\u5b9a\u671f\uff09\uff0c\u5e76\u6267\u884c\u76f8\u5173\u547d\u4ee4\u3002\u76f8\u5173\u53c2\u6570\uff0c\u8bf7\u53c2\u89c1",(0,l.jsx)(n.a,{href:"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4e3a\u624b\u52a8\u91c7\u96c6\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"ANALYZE FULL TABLE tbl_name(columnA, columnB, columnC...);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4e3a\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u8bbe\u7f6e\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u3001\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u591a\u4e2a\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\u4efb\u52a1\u7684\u91c7\u96c6\u5bf9\u8c61\u5b8c\u5168\u4e00\u81f4\uff0c\u5219 CBO \u4ec5\u8fd0\u884c\u6700\u65b0\u521b\u5efa\u7684\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\u4efb\u52a1(\u5373 ID \u6700\u5927\u7684\u4efb\u52a1)\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6240\u6709\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE FULL ALL \nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE FULL DATABASE db_name \nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u8868\u3001\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE FULL TABLE tbl_name(columnA, columnB, columnC...) \nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u5b9a\u671f\u5168\u91cf\u91c7\u96c6 tpch \u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u4e3a\u9ed8\u8ba4\uff0c\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u4e3a\u9ed8\u8ba4\u3002\nCREATE ANALYZE FULL DATABASE tpch;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u62bd\u6837\u91c7\u96c6",children:"\u62bd\u6837\u91c7\u96c6"}),"\n",(0,l.jsxs)(n.p,{children:["\u9009\u62e9\u91c7\u96c6\u65b9\u5f0f\uff08\u624b\u52a8\u6216\u81ea\u52a8\u5b9a\u671f\uff09\uff0c\u5e76\u6267\u884c\u76f8\u5173\u547d\u4ee4\u3002\u76f8\u5173\u53c2\u6570\uff0c\u8bf7\u53c2\u89c1",(0,l.jsx)(n.a,{href:"#%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",children:"\u53c2\u6570\u8bf4\u660e"}),"\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4e3a\u624b\u52a8\u91c7\u96c6\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u8bbe\u7f6e\u62bd\u6837\u884c\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'ANALYZE TABLE tbl_name(columnA, columnB, columnC...)\nPROPERTIES(\n    "sample_collect_rows" = "100000"\n);\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u4e3a\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u8bbe\u7f6e\u62bd\u6837\u884c\u6570\u3001\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u3001\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u591a\u4e2a\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\u4efb\u52a1\u7684\u91c7\u96c6\u5bf9\u8c61\u5b8c\u5168\u4e00\u81f4\uff0c\u5219 CBO \u4ec5\u8fd0\u884c\u6700\u65b0\u521b\u5efa\u7684\u81ea\u52a8\u5b9a\u671f\u91c7\u96c6\u4efb\u52a1(\u5373 ID \u6700\u5927\u7684\u4efb\u52a1)\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6240\u6709\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE ALL\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE DATABASE db_name\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u8868\u3001\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\nCREATE ANALYZE TABLE tbl_name(columnA, columnB, columnC...)\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'-- \u6bcf\u9694 43200 \u79d2\uff0812\u5c0f\u65f6\uff09\u5b9a\u671f\u62bd\u6837\u91c7\u96c6\u6240\u6709\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u4e3a\u9ed8\u8ba4\u3002\nCREATE ANALYZE ALL PROPERTIES("update_interval_sec" = "43200");\n\n-- \u5b9a\u671f\u62bd\u6837\u91c7\u96c6 test \u8868\u4e2d v1 \u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\u4e3a\u9ed8\u8ba4\uff0c\u68c0\u67e5\u95f4\u9694\u65f6\u95f4\u4e3a\u9ed8\u8ba4\u3002\nCREATE ANALYZE TABLE test(v1);\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u8be2\u6216\u5220\u9664\u91c7\u96c6\u4efb\u52a1",children:"\u67e5\u8be2\u6216\u5220\u9664\u91c7\u96c6\u4efb\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u663e\u793a\u6240\u6709\u91c7\u96c6\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SHOW ANALYZE;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u5220\u9664\u6307\u5b9a\u91c7\u96c6\u4efb\u52a1\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ID"}),"\u4e3a\u91c7\u96c6\u4efb\u52a1 ID\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,l.jsx)(n.code,{children:"SHOW ANALYZE"}),"\u83b7\u53d6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"DROP ANALYZE <ID>;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"sample_collect_rows"}),"\uff1a\u62bd\u6837\u91c7\u96c6\u65f6\u7684\u62bd\u6837\u884c\u6570\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"update_interval_sec"}),"\uff1a\u81ea\u52a8\u5b9a\u671f\u4efb\u52a1\u7684\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 86400\uff08\u4e00\u5929\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"collect_interval_sec"}),"\uff1a\u81ea\u52a8\u5b9a\u671f\u4efb\u52a1\u4e2d\uff0c\u68c0\u6d4b\u6570\u636e\u66f4\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 7200\uff08\u4e24\u5c0f\u65f6\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u81ea\u52a8\u5b9a\u671f\u4efb\u52a1\u6267\u884c\u65f6\uff0cStarRocks \u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u4f1a\u68c0\u67e5\u8868\u4e2d\u6570\u636e\u662f\u5426\u66f4\u65b0\uff0c\u5982\u679c\u68c0\u67e5\u5230\u6570\u636e\u66f4\u65b0\uff0c\u4e14\u8ddd\u79bb\u4e0a\u4e00\u6b21\u91c7\u96c6\u65f6\u95f4\u5df2\u8d85\u8fc7",(0,l.jsx)(n.code,{children:"update_interval_sec"}),"\uff0c\u5219 StarRocks \u4f1a\u91cd\u65b0\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\uff1b\u53cd\u4e4b\uff0c\u5219 StarRocks \u4e0d\u91cd\u65b0\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"fe\u914d\u7f6e\u9879",children:"FE\u914d\u7f6e\u9879"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728FE\u914d\u7f6e\u6587\u4ef6 fe.conf \u4e2d\uff0c\u67e5\u8be2\u6216\u4fee\u6539\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain_Text",children:"# \u662f\u5426\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\nenable_statistic_collect = true\n\n# \u81ea\u52a8\u5b9a\u671f\u4efb\u52a1\u4e2d\uff0c\u68c0\u6d4b\u6570\u636e\u66f4\u65b0\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a7200\uff08\u4e24\u5c0f\u65f6\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\nstatistic_collect_interval_sec = 7200\n\n# \u81ea\u52a8\u5b9a\u671f\u4efb\u52a1\u7684\u91c7\u96c6\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a86400\uff08\u4e00\u5929\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\nstatistic_update_interval_sec = 86400\n\n# \u91c7\u6837\u7edf\u8ba1\u4fe1\u606fJob\u7684\u9ed8\u8ba4\u91c7\u6837\u884c\u6570\uff0c\u9ed8\u8ba4\u4e3a200000\u884c\u3002\nstatistic_sample_collect_rows = 200000\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>t});var l=s(67294);const c=l.createContext({});function t(e){const n=l.useContext(c);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:t(e),l.createElement(c.Provider,{value:r},n)}}}]);