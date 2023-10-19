"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49925],{4038:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var i=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},d="ANALYZE TABLE",t={id:"sql-reference/sql-statements/data-definition/ANALYZE_TABLE",title:"ANALYZE TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/ANALYZE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/ANALYZE_TABLE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER VIEW",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/ALTER_VIEW"},next:{title:"BACKUP",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/BACKUP"}},c={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u624b\u52a8\u91c7\u96c6\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",id:"\u624b\u52a8\u91c7\u96c6\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"\u624b\u52a8\u91c7\u96c6\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",id:"\u624b\u52a8\u91c7\u96c6\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:4},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",h3:"h3",a:"a",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"analyze-table",children:"ANALYZE TABLE"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u521b\u5efa\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\uff0c\u8fdb\u884c CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u3002",(0,i.jsx)(n.strong,{children:"\u624b\u52a8\u91c7\u96c6\u9ed8\u8ba4\u4e3a\u540c\u6b65\u64cd\u4f5c\u3002\u60a8\u4e5f\u53ef\u4ee5\u5c06\u624b\u52a8\u4efb\u52a1\u8bbe\u7f6e\u4e3a\u5f02\u6b65\uff0c\u6267\u884c\u547d\u4ee4\u540e\uff0c\u4f1a\u7acb\u5373\u8fd4\u56de\u547d\u4ee4\u7684\u72b6\u6001\uff0c\u4f46\u662f\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u4efb\u52a1\u4f1a\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u8fd0\u884c\u7684\u72b6\u6001\u53ef\u4ee5\u4f7f\u7528 SHOW ANALYZE STATUS \u67e5\u770b\u3002\u624b\u52a8\u4efb\u52a1\u521b\u5efa\u540e\u4ec5\u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u65e0\u9700\u624b\u52a8\u5220\u9664\u3002"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u624b\u52a8\u91c7\u96c6\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",children:"\u624b\u52a8\u91c7\u96c6\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4e8e\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"/zh/docs/using_starrocks/Cost_based_optimizer#%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"ANALYZE [FULL|SAMPLE] TABLE tbl_name (col_name [,col_name])\n[WITH SYNC | ASYNC MODE]\nPROPERTIES (property [,property])\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u91c7\u96c6\u7c7b\u578b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FULL\uff1a\u5168\u91cf\u91c7\u96c6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"SAMPLE\uff1a\u62bd\u6837\u91c7\u96c6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u6307\u5b9a\u91c7\u96c6\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a\u5168\u91cf\u91c7\u96c6\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WITH SYNC | ASYNC MODE"}),": \u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u540c\u6b65\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"col_name"}),": \u8981\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u5217\uff0c\u591a\u5217\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u8868\u793a\u91c7\u96c6\u6574\u5f20\u8868\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PROPERTIES: \u91c7\u96c6\u4efb\u52a1\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u5219\u91c7\u7528",(0,i.jsx)(n.code,{children:"fe.conf"}),"\u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002\u4efb\u52a1\u5b9e\u9645\u6267\u884c\u4e2d\u4f7f\u7528\u7684 PROPERTIES\uff0c\u53ef\u4ee5\u901a\u8fc7 SHOW ANALYZE STATUS \u8fd4\u56de\u7ed3\u679c\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"Properties"})," \u5217\u67e5\u770b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PROPERTIES"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u7c7b\u578b"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statistic_sample_collect_rows"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"200000"}),(0,i.jsx)(n.td,{children:"\u6700\u5c0f\u91c7\u6837\u884c\u6570\u3002\u5982\u679c\u53c2\u6570\u53d6\u503c\u8d85\u8fc7\u4e86\u5b9e\u9645\u7684\u8868\u884c\u6570\uff0c\u9ed8\u8ba4\u8fdb\u884c\u5168\u91cf\u91c7\u96c6\u3002"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b1\uff1a\u624b\u52a8\u5168\u91cf\u91c7\u96c6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"-- \u624b\u52a8\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nANALYZE TABLE tbl_name;\n\n-- \u624b\u52a8\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nANALYZE FULL TABLE tbl_name;\n\n-- \u624b\u52a8\u5168\u91cf\u91c7\u96c6\u6307\u5b9a\u8868\u6307\u5b9a\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nANALYZE TABLE tbl_name(c1, c2, c3);\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b2\uff1a\u624b\u52a8\u62bd\u6837\u91c7\u96c6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'-- \u624b\u52a8\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nANALYZE SAMPLE TABLE tbl_name;\n\n-- \u624b\u52a8\u62bd\u6837\u91c7\u96c6\u6307\u5b9a\u8868\u6307\u5b9a\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u8bbe\u7f6e\u62bd\u6837\u884c\u6570\u3002\nANALYZE SAMPLE TABLE tbl_name (v1, v2, v3) PROPERTIES(\n    "statistic_sample_collect_rows" = "1000000"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u624b\u52a8\u91c7\u96c6\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",children:"\u624b\u52a8\u91c7\u96c6\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4e8e\u76f4\u65b9\u56fe\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"/zh/docs/using_starrocks/Cost_based_optimizer#%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"ANALYZE TABLE tbl_name UPDATE HISTOGRAM ON col_name [, col_name]\n[WITH SYNC | ASYNC MODE]\n[WITH N BUCKETS]\nPROPERTIES (property [,property]);\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u53c2\u6570\u8bf4\u660e-1",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"col_name"}),": \u8981\u91c7\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u5217\uff0c\u591a\u5217\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002\u8be5\u53c2\u6570\u5fc5\u586b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WITH SYNC | ASYNC MODE"}),": \u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u540c\u6b65\u91c7\u96c6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WITH ``N`` BUCKETS"}),": ",(0,i.jsx)(n.code,{children:"N"}),"\u4e3a\u76f4\u65b9\u56fe\u7684\u5206\u6876\u6570\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528",(0,i.jsx)(n.code,{children:"fe.conf"}),"\u4e2d\u7684\u9ed8\u8ba4\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PROPERTIES: \u91c7\u96c6\u4efb\u52a1\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528",(0,i.jsx)(n.code,{children:"fe.conf"}),"\u4e2d\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PROPERTIES"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u7c7b\u578b"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"statistic_sample_collect_rows"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"200000"}),(0,i.jsx)(n.td,{children:"\u6700\u5c0f\u91c7\u6837\u884c\u6570\u3002\u5982\u679c\u53c2\u6570\u53d6\u503c\u8d85\u8fc7\u4e86\u5b9e\u9645\u7684\u8868\u884c\u6570\uff0c\u9ed8\u8ba4\u8fdb\u884c\u5168\u91cf\u91c7\u96c6\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"histogram_mcv_size"}),(0,i.jsx)(n.td,{children:"INT"}),(0,i.jsx)(n.td,{children:"100"}),(0,i.jsx)(n.td,{children:"\u76f4\u65b9\u56fe most common value (MCV) \u7684\u6570\u91cf\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"histogram_sample_ratio"}),(0,i.jsx)(n.td,{children:"FLOAT"}),(0,i.jsx)(n.td,{children:"0.1"}),(0,i.jsx)(n.td,{children:"\u76f4\u65b9\u56fe\u91c7\u6837\u6bd4\u4f8b\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"histogram_max_sample_row_count"}),(0,i.jsx)(n.td,{children:"LONG"}),(0,i.jsx)(n.td,{children:"10000000"}),(0,i.jsx)(n.td,{children:"\u76f4\u65b9\u56fe\u6700\u5927\u91c7\u6837\u884c\u6570\u3002"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u76f4\u65b9\u56fe\u7684\u91c7\u6837\u884c\u6570\u7531\u591a\u4e2a\u53c2\u6570\u5171\u540c\u63a7\u5236\uff0c\u91c7\u6837\u884c\u6570\u53d6 ",(0,i.jsx)(n.code,{children:"statistic_sample_collect_rows"})," \u548c\u8868\u603b\u884c\u6570 ",(0,i.jsx)(n.code,{children:"histogram_sample_ratio"})," \u4e24\u8005\u4e2d\u7684\u6700\u5927\u503c\u3002\u6700\u591a\u4e0d\u8d85\u8fc7 ",(0,i.jsx)(n.code,{children:"histogram_max_sample_row_count"})," \u6307\u5b9a\u7684\u884c\u6570\u3002\u5982\u679c\u8d85\u8fc7\uff0c\u5219\u6309\u7167\u8be5\u53c2\u6570\u5b9a\u4e49\u7684\u4e0a\u9650\u884c\u6570\u8fdb\u884c\u91c7\u96c6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u76f4\u65b9\u56fe\u4efb\u52a1\u5b9e\u9645\u6267\u884c\u4e2d\u4f7f\u7528\u7684",(0,i.jsx)(n.strong,{children:"PROPERTIES"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7 SHOW ANALYZE STATUS \u8fd4\u56de\u7ed3\u679c\u4e2d\u7684",(0,i.jsx)(n.strong,{children:"PROPERTIES"}),"\u5217\u67e5\u770b\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'-- \u624b\u52a8\u91c7\u96c6v1\u5217\u7684\u76f4\u65b9\u56fe\u4fe1\u606f\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u3002\nANALYZE TABLE tbl_name UPDATE HISTOGRAM ON v1;\n\n-- \u624b\u52a8\u91c7\u96c6 v1 \u5217\u7684\u76f4\u65b9\u56fe\u4fe1\u606f\uff0c\u6307\u5b9a 32 \u4e2a\u5206\u6876\uff0cMCV \u6307\u5b9a\u4e3a 32 \u4e2a\uff0c\u91c7\u6837\u6bd4\u4f8b\u4e3a 50%\u3002\nANALYZE TABLE tbl_name UPDATE HISTOGRAM ON v1,v2 WITH 32 BUCKETS \nPROPERTIES(\n   "histogram_mcv_size" = "32",\n   "histogram_sample_ratio" = "0.5"\n);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",children:"SHOW ANALYZE STATUS"}),"\uff1a\u67e5\u770b\u5f53\u524d\u6240\u6709",(0,i.jsx)(n.strong,{children:"\u624b\u52a8\u91c7\u96c6\u4efb\u52a1"}),"\u7684\u72b6\u6001\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"}),"\uff1a\u53d6\u6d88**\u6b63\u5728\u8fd0\u884c\u4e2d\uff08Running\uff09**\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1",(0,i.jsx)(n.a,{href:"/zh/docs/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||d:r(e),i.createElement(l.Provider,{value:t},n)}}}]);