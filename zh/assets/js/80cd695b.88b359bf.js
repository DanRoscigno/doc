"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6981],{26114:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var d=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},l="DELETE",i={id:"sql-reference/sql-statements/data-manipulation/DELETE",title:"DELETE",description:"\u8be5\u8bed\u53e5\u7528\u4e8e\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e\u884c\u3002\u8868\u53ef\u4ee5\u662f\u5206\u533a\u8868\u6216\u8005\u975e\u5206\u533a\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-manipulation/DELETE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DELETE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/DELETE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"CREATE ROUTINE LOAD",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD"},next:{title:"DROP TASK",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK"}},a={},o=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"DELETE \u4e0e\u660e\u7ec6\u7c7b\u578b\u3001\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u7c7b\u578b\u8868",id:"delete-\u4e0e\u660e\u7ec6\u7c7b\u578b\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u7c7b\u578b\u8868",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3},{value:"\u5f71\u54cd",id:"\u5f71\u54cd",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e",id:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e",level:4},{value:"\u67e5\u8be2\u8868\u6570\u636e",id:"\u67e5\u8be2\u8868\u6570\u636e",level:4},{value:"\u5220\u9664\u6570\u636e",id:"\u5220\u9664\u6570\u636e",level:4},{value:"DELETE \u4e0e\u4e3b\u952e\u7c7b\u578b\u8868",id:"delete-\u4e0e\u4e3b\u952e\u7c7b\u578b\u8868",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e",id:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e-1",level:4},{value:"\u67e5\u8be2\u8868\u6570\u636e",id:"\u67e5\u8be2\u8868\u6570\u636e-1",level:4},{value:"\u5220\u9664\u6570\u636e",id:"\u5220\u9664\u6570\u636e-1",level:4}];function t(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"delete",children:"DELETE"}),"\n",(0,d.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e\u884c\u3002\u8868\u53ef\u4ee5\u662f\u5206\u533a\u8868\u6216\u8005\u975e\u5206\u533a\u8868\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5bf9\u4e8e\u660e\u7ec6\u7c7b\u578b (Duplicate Key)\u3001\u805a\u5408\u7c7b\u578b (Aggregate Key)\uff0c\u4ee5\u53ca\u66f4\u65b0\u7c7b\u578b\u8868 (Unique Key)\uff0c\u652f\u6301\u5220\u9664\u8868\u4e2d",(0,d.jsx)(n.strong,{children:"\u6307\u5b9a\u5206\u533a"}),"\u7684\u6570\u636e\u3002\u4e3b\u952e\u7c7b\u578b\u8868 (Primary Key) \u76ee\u524d\u8fd8",(0,d.jsx)(n.strong,{children:"\u4e0d\u652f\u6301"}),"\u5220\u9664\u6307\u5b9a\u5206\u533a\u4e2d\u7684\u6570\u636e\u3002\u4ece 2.3 \u7248\u672c\u5f00\u59cb\uff0c\u4e3b\u952e\u7c7b\u578b\u8868\u652f\u6301\u5b8c\u6574\u7684 DELETE...WHERE \u8bed\u4e49\uff0c\u5373\u652f\u6301\u6309\u4e3b\u952e\u3001\u4efb\u610f\u5217\u3001\u4ee5\u53ca\u5b50\u67e5\u8be2\u7ed3\u679c\u5220\u9664\u6570\u636e\u3002\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0c\u4e3b\u952e\u7c7b\u578b\u8868\u4e30\u5bcc\u4e86 DELETE...WHERE \u8bed\u4e49\uff0c\u652f\u6301\u4f7f\u7528\u591a\u8868\u5173\u8054\u548c\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6267\u884c DELETE \u64cd\u4f5c\u9700\u8981\u6709\u5bf9\u5e94\u8868\u7684 DELETE \u6743\u9650\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u4e0d\u5efa\u8bae\u60a8\u6267\u884c\u9ad8\u9891\u7684 DELETE \u64cd\u4f5c\u3002\u5982\u9700\u8981\uff0c\u8bf7\u5728\u4e1a\u52a1\u4f4e\u5cf0\u671f\u8fdb\u884c\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["DELETE \u5220\u9664\u7684\u662f\u8868\u4e2d\u6570\u636e\uff0c\u8868\u4f9d\u7136\u5b58\u5728\u3002\u5982\u679c\u8981\u5220\u9664\u8868\uff0c\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"}),"\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u4e3a\u9632\u6b62\u8bef\u5220\u6574\u8868\uff0c\u5fc5\u987b\u5728 DELETE \u8bed\u53e5\u4e2d\u6307\u5b9a WHERE \u5b50\u53e5\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u5220\u9664\u7684\u6570\u636e\u4f1a\u6807\u8bb0\u4e3a\u201cDeleted\u201d\uff0c\u6682\u65f6\u4fdd\u7559\u5728 Segment \u4e2d\uff0c\u4e0d\u4f1a\u7acb\u5373\u8fdb\u884c\u7269\u7406\u5220\u9664\u3002Compaction\uff08\u6570\u636e\u7248\u672c\u5408\u5e76\uff09\u5b8c\u6210\u4e4b\u540e\u4f1a\u88ab\u56de\u6536\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u65f6\u5220\u9664\u548c\u8868\u76f8\u5173\u7684\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"delete-\u4e0e\u660e\u7ec6\u7c7b\u578b\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u7c7b\u578b\u8868",children:"DELETE \u4e0e\u660e\u7ec6\u7c7b\u578b\u3001\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u7c7b\u578b\u8868"}),"\n",(0,d.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM [<db_name>.]<table_name> [PARTITION <partition_name>]\nWHERE\ncolumn_name1 op { value | value_list } [ AND column_name2 op { value | value_list } ...]\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"db_name"})}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"\u8981\u64cd\u4f5c\u7684\u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"table_name"})}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"\u8981\u64cd\u4f5c\u7684\u8868\u540d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"partition_name"})}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"\u8981\u64cd\u4f5c\u7684\u5206\u533a\u540d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"column_name"})}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u7684\u5217\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"op"})}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsxs)(n.td,{children:["\u6307\u5b9a\u7684\u7b97\u5b50\u3002\u652f\u6301 ",(0,d.jsx)(n.code,{children:"="}),"\u3001",(0,d.jsx)(n.code,{children:">"}),"\u3001",(0,d.jsx)(n.code,{children:"<"}),"\u3001",(0,d.jsx)(n.code,{children:">="}),"\u3001",(0,d.jsx)(n.code,{children:"<="}),"\u3001",(0,d.jsx)(n.code,{children:"!="}),"\u3001",(0,d.jsx)(n.code,{children:"IN"})," \u548c ",(0,d.jsx)(n.code,{children:"NOT IN"}),"\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u7c7b\u578b\u8868",(0,d.jsx)(n.strong,{children:"\u4ec5\u652f\u6301 Key \u5217"}),"\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002\u660e\u7ec6\u7c7b\u578b\u8868\u652f\u6301",(0,d.jsx)(n.strong,{children:"\u4efb\u610f\u5217"}),"\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u6761\u4ef6\u4e4b\u95f4\u53ea\u80fd\u662f\u201cAND\u201d\u5173\u7cfb\u3002\u82e5\u5e0c\u671b\u8fbe\u6210\u201cOR\u201d\u7684\u5173\u7cfb\uff0c\u9700\u8981\u5c06\u6761\u4ef6\u5206\u522b\u5199\u5728\u4e24\u4e2a DELETE \u8bed\u53e5\u4e2d\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u660e\u7ec6\u7c7b\u578b\u3001\u805a\u5408\u7c7b\u578b\u548c\u66f4\u65b0\u8868\u7c7b\u578b\u4e0b\uff0cDELETE \u8bed\u53e5\u76ee\u524d\u4e0d\u652f\u6301\u4ee5\u5b50\u67e5\u8be2\u7ed3\u679c\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5f71\u54cd",children:"\u5f71\u54cd"}),"\n",(0,d.jsx)(n.p,{children:"\u6267\u884c DELETE \u8bed\u53e5\u540e\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u63a5\u4e0b\u6765\u4e00\u6bb5\u65f6\u95f4\u5185\uff08Compaction \u5b8c\u6210\u4e4b\u524d\uff09\u7684\u67e5\u8be2\u6548\u7387\u964d\u4f4e\u3002\u5f71\u54cd\u7a0b\u5ea6\u53d6\u51b3\u4e8e\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u7684\u6570\u91cf\u3002\u6307\u5b9a\u7684\u6761\u4ef6\u8d8a\u591a\uff0c\u5f71\u54cd\u8d8a\u5927\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.h4,{id:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e",children:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e00\u5f20\u660e\u7ec6\u7c7b\u578b\u7684\u5206\u533a\u8868\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE `my_table` (\n    `date` date NOT NULL,\n    `k1` int(11) NOT NULL COMMENT \"\",\n    `k2` varchar(65533) NULL DEFAULT \"\" COMMENT \"\")\nDUPLICATE KEY(`date`)\nPARTITION BY RANGE(`date`)\n(\n    PARTITION p1 VALUES [('2022-03-11'), ('2022-03-12')),\n    PARTITION p2 VALUES [('2022-03-12'), ('2022-03-13'))\n)\nDISTRIBUTED BY HASH(`date`)\nPROPERTIES\n(\"replication_num\" = \"3\");\n\nINSERT INTO `my_table` VALUES\n('2022-03-11', 3, 'abc'),\n('2022-03-11', 2, 'acb'),\n('2022-03-11', 4, 'abc'),\n('2022-03-12', 2, 'bca'),\n('2022-03-12', 4, 'cba'),\n('2022-03-12', 5, 'cba');\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u67e5\u8be2\u8868\u6570\u636e",children:"\u67e5\u8be2\u8868\u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"select * from my_table order by date; \n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    3 | abc  |\n| 2022-03-11 |    2 | acb  |\n| 2022-03-11 |    4 | abc  |\n| 2022-03-12 |    2 | bca  |\n| 2022-03-12 |    4 | cba  |\n| 2022-03-12 |    5 | cba  |\n+------------+------+------+\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5220\u9664\u6570\u636e",children:"\u5220\u9664\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u5220\u9664\u6307\u5b9a\u5206\u533a\u4e2d\u7684\u884c"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u8868 ",(0,d.jsx)(n.code,{children:"p1"})," \u5206\u533a\u4e2d ",(0,d.jsx)(n.code,{children:"k1"})," \u5217\u503c\u4e3a ",(0,d.jsx)(n.code,{children:"3"})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM my_table PARTITION p1\nWHERE k1 = 3;\n\n-- \u53ef\u4ee5\u770b\u5230 p1 \u5206\u533a\u4e2d k1 \u4e3a 3 \u7684\u90a3\u884c\u6570\u636e\u88ab\u5220\u9664\u3002\nselect * from my_table partition (p1);\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n| 2022-03-11 |    4 | abc  |\n+------------+------+------+\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u5220\u9664\u6307\u5b9a\u5206\u533a\u4e2d\u6ee1\u8db3 AND \u6761\u4ef6\u7684\u884c"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u8868 ",(0,d.jsx)(n.code,{children:"p1"})," \u5206\u533a\u4e2d ",(0,d.jsx)(n.code,{children:"k1"})," \u5217\u503c\u5927\u4e8e\u7b49\u4e8e ",(0,d.jsx)(n.code,{children:"3"})," \u4e14 ",(0,d.jsx)(n.code,{children:"k2"})," \u5217\u503c\u4e3a ",(0,d.jsx)(n.code,{children:'"abc"'})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n\nselect * from my_table partition (p1);\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n+------------+------+------+\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u5220\u9664\u6240\u6709\u5206\u533a\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u884c"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664 ",(0,d.jsx)(n.code,{children:"my_table"})," \u8868\u6240\u6709\u5206\u533a\u4e2d ",(0,d.jsx)(n.code,{children:"k2"})," \u5217\u503c\u4e3a ",(0,d.jsx)(n.code,{children:'"abc"'})," \u6216 ",(0,d.jsx)(n.code,{children:'"cba"'})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM my_table\nWHERE k2 in ("abc", "cba");\n\nselect * from my_table order by date;\n+------------+------+------+\n| date       | k1   | k2   |\n+------------+------+------+\n| 2022-03-11 |    2 | acb  |\n| 2022-03-12 |    2 | bca  |\n+------------+------+------+\n'})}),"\n",(0,d.jsx)(n.h2,{id:"delete-\u4e0e\u4e3b\u952e\u7c7b\u578b\u8868",children:"DELETE \u4e0e\u4e3b\u952e\u7c7b\u578b\u8868"}),"\n",(0,d.jsx)(n.p,{children:"\u4ece 2.3 \u7248\u672c\u5f00\u59cb\uff0c\u4e3b\u952e\u7c7b\u578b\u8868\u652f\u6301\u5b8c\u6574\u7684 DELETE...WHERE \u8bed\u4e49\u3002\u652f\u6301\u6309\u4e3b\u952e\u3001\u4efb\u610f\u5217\u3001\u4ee5\u53ca\u5b50\u67e5\u8be2\u7ed3\u679c\u5220\u9664\u6570\u636e\u3002\u4ece 3.0 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u4e30\u5bcc\u4e86 DELETE...WHERE \u8bed\u4e49\uff0c\u652f\u6301\u4f7f\u7528\u591a\u8868\u5173\u8054\u548c\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09\u3002\u5982\u679c\u9700\u8981\u5c06\u5f85\u64cd\u4f5c\u7684\u8868\u4e0e\u6570\u636e\u5e93\u4e2d\u5176\u4ed6\u8868\u5173\u8054\uff0c\u5219\u53ef\u4ee5\u5728 USING \u5b50\u53e5\u6216 CTE \u4e2d\u5f15\u7528\u5176\u4ed6\u7684\u8868\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"[ WITH <with_query> [, ...] ]\nDELETE FROM <table_name>\n[ USING <from_item> [, ...] ]\n[ WHERE <where_condition> ]\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e-1",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53c2\u6570"}),(0,d.jsx)(n.th,{children:"\u662f\u5426\u5fc5\u9009"}),(0,d.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"with_query"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsx)(n.td,{children:"\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u4ee5\u5728 DELETE \u8bed\u53e5\u4e2d\u901a\u8fc7\u540d\u5b57\u5f15\u7528\u7684 CTE\u3002CTE \u662f\u4e00\u4e2a\u4e34\u65f6\u7ed3\u679c\u96c6\uff0c\u53ef\u4ee5\u63d0\u9ad8\u590d\u6742\u8bed\u53e5\u7684\u6613\u8bfb\u6027\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"table_name"}),(0,d.jsx)(n.td,{children:"Yes"}),(0,d.jsx)(n.td,{children:"\u8981\u64cd\u4f5c\u7684\u8868\u540d\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"from_item"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsxs)(n.td,{children:["\u5f15\u7528\u6570\u636e\u5e93\u4e2d\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5176\u4ed6\u7684\u8868\u3002\u8be5\u8868\u4e0e\u5f85\u64cd\u4f5c\u7684\u8868\u8fdb\u884c\u8fde\u63a5\uff0cWHERE \u5b50\u53e5\u6307\u5b9a\u8fde\u63a5\u6761\u4ef6\uff0c\u6700\u7ec8 StarRocks \u57fa\u4e8e\u8fde\u63a5\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u5220\u9664\u5f85\u64cd\u4f5c\u8868\u4e2d\u7684\u5339\u914d\u884c\u3002 \u4f8b\u5982 USING \u5b50\u53e5\u4e3a ",(0,d.jsx)(n.code,{children:"USING t1 WHERE t0.pk = t1.pk;"}),"\uff0cStarRocks \u5b9e\u9645\u6267\u884c DELETE \u8bed\u53e5\u65f6\u4f1a\u5c06\u8be5 USING \u5b50\u53e5\u7684\u8868\u8868\u8fbe\u5f0f\u4f1a\u8f6c\u6362\u4e3a ",(0,d.jsx)(n.code,{children:"t0 JOIN t1 ON t0.pk=t1.pk;"}),"\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"where_condition"}),(0,d.jsx)(n.td,{children:"No"}),(0,d.jsxs)(n.td,{children:["\u53ea\u6709\u6ee1\u8db3 WHERE \u6761\u4ef6\u7684\u884c\u624d\u4f1a\u88ab\u5220\u9664\u3002\u8be5\u53c2\u6570\u4e3a\u5fc5\u9009\uff0c\u9632\u6b62\u8bef\u5220\u6574\u5f20\u8868\u3002\u5982\u9700\u5220\u9664\u8868\u4e2d\u7684\u6240\u6709\u884c\uff0c\u8bf7\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"WHERE true"}),"\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u6ce8\u610f\u4e8b\u9879-1",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u5982\u4e0b\u6bd4\u8f83\u8fd0\u7b97\u7b26\uff1a",(0,d.jsx)(n.code,{children:"="}),"\u3001",(0,d.jsx)(n.code,{children:">"}),"\u3001",(0,d.jsx)(n.code,{children:"<"}),"\u3001",(0,d.jsx)(n.code,{children:">="}),"\u3001",(0,d.jsx)(n.code,{children:"<="}),"\u3001",(0,d.jsx)(n.code,{children:"!="}),"\u3001",(0,d.jsx)(n.code,{children:"IN"})," \u548c ",(0,d.jsx)(n.code,{children:"NOT IN"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u5982\u4e0b\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a",(0,d.jsx)(n.code,{children:"AND"})," \u548c ",(0,d.jsx)(n.code,{children:"OR"}),"\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u5e76\u53d1\u5220\u9664\u6216\u5bfc\u5165\u6570\u636e\u65f6\u5220\u9664\uff0c\u56e0\u4e3a\u53ef\u80fd\u65e0\u6cd5\u4fdd\u8bc1\u5bfc\u5165\u7684\u4e8b\u52a1\u6027\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.h4,{id:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e-1",children:"\u521b\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"test"})," \u4e2d\u521b\u5efa\u4e00\u5f20\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"score_board"})," \u7684\u4e3b\u952e\u7c7b\u578b\u8868\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `score_board` (\n    `id` int(11) NOT NULL COMMENT "",\n    `name` varchar(65533) NULL DEFAULT "" COMMENT "",\n    `score` int(11) NOT NULL DEFAULT "0" COMMENT "")\nENGINE=OLAP\nPRIMARY KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT",\n    "enable_persistent_index" = "false"\n);\n\nINSERT INTO score_board VALUES\n(0, \'Jack\', 21),\n(1, \'Bob\', 21),\n(2, \'Stan\', 21),\n(3, \'Sam\', 22);\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u67e5\u8be2\u8868\u6570\u636e-1",children:"\u67e5\u8be2\u8868\u6570\u636e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"select * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    0 | Jack |   21 |\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n4 rows in set (0.00 sec)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5220\u9664\u6570\u636e-1",children:"\u5220\u9664\u6570\u636e"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6309\u4e3b\u952e\u5220\u9664\u6570\u636e"})}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u6307\u5b9a\u4e3b\u952e\uff0c\u53ef\u4ee5\u907f\u514d\u5168\u8868\u626b\u63cf\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664 ",(0,d.jsx)(n.code,{children:"score_board"})," \u8868\u4e2d ",(0,d.jsx)(n.code,{children:"id"})," \u5217\u503c\u4e3a ",(0,d.jsx)(n.code,{children:"0"})," \u7684\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM score_board WHERE id = 0;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6309\u6761\u4ef6\u5220\u9664\u6570\u636e"})}),"\n",(0,d.jsx)(n.p,{children:"\u6761\u4ef6\u4e2d\u7684\u5217\uff0c\u53ef\u4ee5\u4e3a\u4efb\u610f\u5217\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5220\u9664 ",(0,d.jsx)(n.code,{children:"score_board"})," \u8868\u4e2d ",(0,d.jsx)(n.code,{children:"score"})," \u5217\u503c\u7b49\u4e8e ",(0,d.jsx)(n.code,{children:"22"})," \u7684\u6240\u6709\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM score_board WHERE score = 22;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    0 | Jack |   21 |\n|    1 | Bob  |   21 |\n|    2 | Stan |   21 |\n+------+------+------+\n3 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5220\u9664 ",(0,d.jsx)(n.code,{children:"score_board"})," \u8868\u4e2d ",(0,d.jsx)(n.code,{children:"score"})," \u5217\u503c\u5c0f\u4e8e ",(0,d.jsx)(n.code,{children:"22"})," \u7684\u6240\u6709\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM score_board WHERE score < 22;\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    3 | Sam  |   22 |\n+------+------+------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5220\u9664 ",(0,d.jsx)(n.code,{children:"score_board"})," \u8868\u4e2d ",(0,d.jsx)(n.code,{children:"score"})," \u5217\u503c\u5c0f\u4e8e ",(0,d.jsx)(n.code,{children:"22"}),"\u3001\u4e14 ",(0,d.jsx)(n.code,{children:"name"})," \u5217\u503c\u4e0d\u4e3a ",(0,d.jsx)(n.code,{children:"Bob"})," \u7684\u6240\u6709\u6570\u636e\u884c\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM score_board WHERE score < 22 and name != "Bob";\n\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    1 | Bob  |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6309\u5b50\u67e5\u8be2\u7ed3\u679c\u5220\u9664\u6570\u636e"})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u5728 ",(0,d.jsx)(n.code,{children:"DELETE"})," \u8bed\u53e5\u4e2d\u5d4c\u5957\u4e00\u4e2a\u6216\u591a\u4e2a\u5b50\u67e5\u8be2\uff0c\u5e76\u4f7f\u7528\u5b50\u67e5\u8be2\u7ed3\u679c\u4f5c\u4e3a\u5220\u9664\u6761\u4ef6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f00\u59cb\u5220\u9664\u64cd\u4f5c\u4e4b\u524d\uff0c\u5148\u5728\u6570\u636e\u5e93 ",(0,d.jsx)(n.code,{children:"test"})," \u4e2d\u518d\u521b\u5efa\u4e00\u5f20\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"users"})," \u7684\u4e3b\u952e\u7c7b\u578b\u8868\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE\n    `users` (`uid` int(11) NOT NULL COMMENT "",\n    `name` varchar(65533) NOT NULL COMMENT "",\n    `country` varchar(65533) NULL COMMENT "")\nENGINE=OLAP\nPRIMARY KEY(`uid`)COMMENT "OLAP"\nDISTRIBUTED BY HASH(`uid`)\nPROPERTIES\n(\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT",\n    "enable_persistent_index" = "false"\n);\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5411 ",(0,d.jsx)(n.code,{children:"users"})," \u8868\u4e2d\u63d2\u5165\u6570\u636e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'INSERT INTO users VALUES\n(0, "Jack", "China"),\n(2, "Stan", "USA"),\n(1, "Bob", "China"),\n(3, "Sam", "USA");\nselect * from users;\n+------+------+---------+\n| uid  | name | country |\n+------+------+---------+\n|    0 | Jack | China   |\n|    1 | Bob  | China   |\n|    2 | Stan | USA     |\n|    3 | Sam  | USA     |\n+------+------+---------+\n4 rows in set (0.00 sec)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u67e5\u8be2 ",(0,d.jsx)(n.code,{children:"users"})," \u8868\u4e2d ",(0,d.jsx)(n.code,{children:"country"})," \u5217\u503c\u4e3a ",(0,d.jsx)(n.code,{children:"China"})," \u7684\u6570\u636e\u884c\uff0c\u7136\u540e\u5220\u9664 ",(0,d.jsx)(n.code,{children:"score_board"})," \u8868\u4e2d\u4e0e ",(0,d.jsx)(n.code,{children:"users"})," \u8868\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u884c\u5177\u6709\u76f8\u540c ",(0,d.jsx)(n.code,{children:"name"})," \u5217\u503c\u7684\u6240\u6709\u6570\u636e\u884c\u3002\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u65b9\u6cd5 1"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM score_board\nWHERE name IN (select name from users where country = "China");\nselect * from score_board;\n+------+------+------+\n| id   | name | score|\n+------+------+------+\n|    2 | Stan |   21 |\n|    3 | Sam  |   22 |\n+------+------+------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u65b9\u6cd5 2"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'DELETE FROM score_board\nWHERE EXISTS (select name from users\n              where score_board.name = users.name and country = "China");\nselect * from score_board;\n+------+------+-------+\n| id   | name | score |\n+------+------+-------+\n|    2 | Stan |    21 |\n|    3 | Sam  |    22 |\n+------+------+-------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6309\u591a\u8868\u5173\u8054\u6216\u8005 CTE \u7684\u7ed3\u679c\u96c6\u5220\u9664\u6570\u636e"})}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u5236\u7247\u4eba foo \u5236\u4f5c\u7684\u6240\u6709\u7535\u5f71\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM films USING producers\nWHERE producer_id = producers.id\n    AND producers.name = 'foo';\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 CTE \u6539\u5199\u4e0a\u8ff0\u8bed\u53e5\uff0c\u589e\u52a0\u6613\u8bfb\u6027\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"WITH foo_producers as (\n    SELECT * from producers\n    where producers.name = 'foo'\n)\nDELETE FROM films USING foo_producers\nWHERE producer_id = foo_producers.id;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var d=s(67294);const c=d.createContext({});function r(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),d.createElement(c.Provider,{value:i},n)}}}]);