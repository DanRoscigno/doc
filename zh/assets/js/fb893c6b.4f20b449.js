"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43746],{33906:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var d=s(85893),i=s(11151);const l={displayed_sidebar:"Chinese"},c="Bitmap \u7d22\u5f15",r={id:"using_starrocks/Bitmap_index",title:"Bitmap \u7d22\u5f15",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406 bitmap\uff08\u4f4d\u56fe\uff09\u7d22\u5f15\uff0c\u4ee5\u53ca Bitmap \u7d22\u5f15\u7684\u4f7f\u7528\u6848\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/using_starrocks/Bitmap_index.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Bitmap_index",permalink:"/zh/docs/2.5/using_starrocks/Bitmap_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Bitmap_index.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u4f7f\u7528 Spark Connector \u8bfb\u53d6\u6570\u636e",permalink:"/zh/docs/2.5/unloading/Spark_connector"},next:{title:"Bloom filter \u7d22\u5f15",permalink:"/zh/docs/2.5/using_starrocks/Bloomfilter_index"}},t={},h=[{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u521b\u5efa\u7d22\u5f15",id:"\u521b\u5efa\u7d22\u5f15",level:2},{value:"\u521b\u5efa\u8fdb\u5ea6",id:"\u521b\u5efa\u8fdb\u5ea6",level:2},{value:"\u67e5\u770b\u7d22\u5f15",id:"\u67e5\u770b\u7d22\u5f15",level:2},{value:"\u5220\u9664\u7d22\u5f15",id:"\u5220\u9664\u7d22\u5f15",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"<strong>\u5355\u5217\u67e5\u8be2</strong>",id:"\u5355\u5217\u67e5\u8be2",level:3},{value:"<strong>\u591a\u5217\u67e5\u8be2</strong>",id:"\u591a\u5217\u67e5\u8be2",level:3}];function a(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote",h3:"h3",img:"img",ol:"ol"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"bitmap-\u7d22\u5f15",children:"Bitmap \u7d22\u5f15"}),"\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u521b\u5efa\u548c\u7ba1\u7406 bitmap\uff08\u4f4d\u56fe\uff09\u7d22\u5f15\uff0c\u4ee5\u53ca Bitmap \u7d22\u5f15\u7684\u4f7f\u7528\u6848\u4f8b\u3002"}),"\n",(0,d.jsx)(n.p,{children:"Bitmap \u7d22\u5f15\u662f\u4e00\u79cd\u4f7f\u7528 bitmap \u7684\u7279\u6b8a\u6570\u636e\u5e93\u7d22\u5f15\u3002bitmap \u5373\u4e3a\u4e00\u4e2a bit \u6570\u7ec4\uff0c\u4e00\u4e2a bit \u7684\u53d6\u503c\u6709\u4e24\u79cd\uff1a0 \u6216 1\u3002\u6bcf\u4e00\u4e2a bit \u5bf9\u5e94\u6570\u636e\u8868\u4e2d\u7684\u4e00\u884c\uff0c\u5e76\u6839\u636e\u8be5\u884c\u7684\u53d6\u503c\u60c5\u51b5\u6765\u51b3\u5b9a bit \u7684\u53d6\u503c\u662f 0 \u8fd8\u662f 1\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["Bitmap \u7d22\u5f15\u80fd\u591f\u63d0\u9ad8\u6307\u5b9a\u5217\u7684\u67e5\u8be2\u6548\u7387\u3002\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u6761\u4ef6\u547d\u4e2d\u524d\u7f00\u7d22\u5f15\u5217\uff0cStarRocks \u5373\u53ef\u4f7f\u7528",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/table_design/Sort_key",children:"\u524d\u7f00\u7d22\u5f15"}),"\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\uff0c\u5feb\u901f\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002\u4f46\u662f\u524d\u7f00\u7d22\u5f15\u7684\u957f\u5ea6\u6709\u9650\uff0c\u5982\u679c\u60f3\u8981\u63d0\u9ad8\u4e00\u4e2a\u975e\u524d\u7f00\u7d22\u5f15\u5217\u7684\u67e5\u8be2\u6548\u7387\uff0c\u5373\u53ef\u4ee5\u4e3a\u8fd9\u4e00\u5217\u521b\u5efa Bitmap \u7d22\u5f15\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f18\u52bf",children:"\u4f18\u52bf"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5982\u5217\u57fa\u6570\u8f83\u4f4e\uff0c\u503c\u5927\u91cf\u91cd\u590d\uff0c\u4f8b\u5982 ENUM \u7c7b\u578b\u7684\u5217\uff0c\u4f7f\u7528 Bitmap \u7d22\u5f15\u80fd\u591f\u51cf\u5c11\u67e5\u8be2\u7684\u54cd\u5e94\u65f6\u95f4\u3002\u5982\u5217\u57fa\u6570\u8f83\u9ad8\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/using_starrocks/Bloomfilter_index",children:"Bloom filter \u7d22\u5f15"}),"\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"Bitmap \u7d22\u5f15\u6240\u5360\u7684\u5b58\u50a8\u7a7a\u95f4\u901a\u5e38\u53ea\u6709\u7d22\u5f15\u6570\u636e\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u4e0e\u5176\u4ed6\u7d22\u5f15\u6280\u672f\u76f8\u6bd4\uff0c\u66f4\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u4e3a\u591a\u4e2a\u5217\u521b\u5efa Bitmap \u7d22\u5f15\uff0c\u63d0\u9ad8\u591a\u5217\u67e5\u8be2\u7684\u6548\u7387\uff0c\u5177\u4f53\u53c2\u89c1",(0,d.jsx)(n.a,{href:"#%E5%A4%9A%E5%88%97%E6%9F%A5%E8%AF%A2",children:"\u591a\u5217\u67e5\u8be2"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Bitmap \u7d22\u5f15\u9002\u7528\u4e8e\u53ef\u4f7f\u7528\u7b49\u503c\u6761\u4ef6 (",(0,d.jsx)(n.code,{children:"="}),") \u67e5\u8be2\u6216 [NOT] IN \u8303\u56f4\u67e5\u8be2\u7684\u5217\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u4e3b\u952e\u6a21\u578b\u548c\u660e\u7ec6\u6a21\u578b\u4e2d\u6240\u6709\u5217\u90fd\u53ef\u4ee5\u521b\u5efa Bitmap \u7d22\u5f15\uff1b\u805a\u5408\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\u4e2d\uff0c\u53ea\u6709\u7ef4\u5ea6\u5217\uff08\u5373 Key \u5217\uff09\u652f\u6301\u521b\u5efa bitmap \u7d22\u5f15\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u4e0d\u652f\u6301\u4e3a FLOAT\u3001DOUBLE\u3001BOOLEAN \u548c DECIMAL \u7c7b\u578b\u7684\u5217\u521b\u5efa Bitmap \u7d22\u5f15\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5982\u8981\u4e86\u89e3\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86 Bitmap \u7d22\u5f15\uff0c\u53ef\u67e5\u770b\u8be5\u67e5\u8be2\u7684 Profile \u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"BitmapIndexFilterRows"})," \u5b57\u6bb5\u3002\u5173\u4e8e\u5982\u4f55\u67e5\u770b Profile\uff0c\u53c2\u89c1",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/administration/Query_planning#%E6%9F%A5%E7%9C%8B%E5%88%86%E6%9E%90-profile",children:"\u5206\u6790\u67e5\u8be2"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u521b\u5efa\u7d22\u5f15",children:"\u521b\u5efa\u7d22\u5f15"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5efa\u8868\u65f6\u521b\u5efa Bitmap \u7d22\u5f15\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE d0.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    v1 CHAR(10) REPLACE,\n    v2 INT SUM,\n    INDEX index_name (column_name) [USING BITMAP] [COMMENT \'\']\n)\nENGINE = olap\nAGGREGATE KEY(k1, k2)\nDISTRIBUTED BY HASH(k1) BUCKETS 10\nPROPERTIES ("storage_type" = "column");\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4e2d\u6709\u5173\u7d22\u5f15\u90e8\u5206\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"index_name"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"Bitmap \u7d22\u5f15\u540d\u79f0\u3002 \u5fc5\u987b\u7531\u5b57\u6bcd(a-z\u6216A-Z)\u3001\u6570\u5b57(0-9)\u6216\u4e0b\u5212\u7ebf(_)\u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002\u5728\u540c\u4e00\u5f20\u8868\u4e2d\u4e0d\u80fd\u521b\u5efa\u540d\u79f0\u76f8\u540c\u7684\u7d22\u5f15\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"column_name"}),(0,d.jsx)(n.td,{children:"\u662f"}),(0,d.jsx)(n.td,{children:"\u521b\u5efa Bitmap \u7d22\u5f15\u7684\u5217\u540d\u3002\u60a8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u5217\u540d\uff0c\u5373\u5728\u5efa\u8868\u65f6\u53ef\u540c\u65f6\u4e3a\u591a\u4e2a\u5217\u521b\u5efa Bitmap \u7d22\u5f15\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"COMMENT"}),(0,d.jsx)(n.td,{children:"\u5426"}),(0,d.jsx)(n.td,{children:"\u7d22\u5f15\u5907\u6ce8\u3002"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u6307\u5b9a\u591a\u6761 ",(0,d.jsx)(n.code,{children:"INDEX index_name (column_name) [USING BITMAP] [COMMENT '']"})," \u547d\u4ee4\u540c\u65f6\u4e3a\u591a\u4e2a\u5217\u521b\u5efa bitmap \u7d22\u5f15\uff0c\u4e14\u591a\u6761\u547d\u4ee4\u4e4b\u95f4\u7528\u9017\u53f7\uff08,\uff09\u9694\u5f00\u3002\n\u5173\u4e8e\u5efa\u8868\u7684\u5176\u4ed6\u53c2\u6570\u8bf4\u660e\uff0c\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5efa\u8868\u540e\u4f7f\u7528 CREATE INDEX \u521b\u5efa Bitmap \u7d22\u5f15\u3002\u8be6\u7ec6\u53c2\u6570\u8bf4\u660e\u548c\u793a\u4f8b\uff0c\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_INDEX",children:"CREATE INDEX"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index_name ON table_name (column_name) [USING BITMAP] [COMMENT ''];\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u521b\u5efa\u8fdb\u5ea6",children:"\u521b\u5efa\u8fdb\u5ea6"}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa Bitmap \u7d22\u5f15\u4e3a",(0,d.jsx)(n.strong,{children:"\u5f02\u6b65"}),"\u8fc7\u7a0b\uff0c\u6267\u884c\u7d22\u5f15\u521b\u5efa\u8bed\u53e5\u540e\u53ef\u901a\u8fc7 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})," \u547d\u4ee4\u67e5\u770b\u7d22\u5f15\u521b\u5efa\u8fdb\u5ea6\uff0c\u5f53\u8fd4\u56de\u503c\u4e2d ",(0,d.jsx)(n.code,{children:"State"})," \u5b57\u6bb5\u663e\u793a\u4e3a ",(0,d.jsx)(n.code,{children:"FINISHED"})," \u65f6\uff0c\u5373\u4e3a\u521b\u5efa\u6210\u529f\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SHOW ALTER TABLE COLUMN [FROM db_name];\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u5f53\u524d\u6bcf\u5f20\u8868\u53ea\u5141\u8bb8\u540c\u65f6\u8fdb\u884c\u4e00\u4e2a Schema Change \u4efb\u52a1\uff0c\u5728\u4e00\u4e2a Bitmap \u7d22\u5f15\u672a\u5f02\u6b65\u521b\u5efa\u5b8c\u6210\u524d\uff0c\u65e0\u6cd5\u8fdb\u884c\u65b0 Bitmap \u7d22\u5f15\u7684\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u67e5\u770b\u7d22\u5f15",children:"\u67e5\u770b\u7d22\u5f15"}),"\n",(0,d.jsxs)(n.p,{children:["\u67e5\u770b\u6307\u5b9a\u8868\u7684\u6240\u6709 Bitmap \u7d22\u5f15\u3002\u8be6\u7ec6\u53c2\u6570\u548c\u8fd4\u56de\u7ed3\u679c\u8bf4\u660e\uff0c\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_INDEX",children:"SHOW INDEX"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SHOW { INDEX[ES] | KEY[S] } FROM [db_name.]table_name [FROM db_name];\n"})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa Bitmap \u7d22\u5f15\u4e3a\u5f02\u6b65\u8fc7\u7a0b\uff0c\u4f7f\u7528\u5982\u4e0a\u8bed\u53e5\u53ea\u80fd\u67e5\u770b\u5230\u5df2\u7ecf\u521b\u5efa\u5b8c\u6210\u7684\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5220\u9664\u7d22\u5f15",children:"\u5220\u9664\u7d22\u5f15"}),"\n",(0,d.jsxs)(n.p,{children:["\u5220\u9664\u6307\u5b9a\u8868\u7684 Bitmap \u7d22\u5f15\u3002\u8be6\u7ec6\u53c2\u6570\u8bf4\u660e\u548c\u793a\u4f8b\uff0c\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/DROP_INDEX",children:"DROP INDEX"}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"DROP INDEX index_name ON [db_name.]table_name;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u6848\u4f8b",children:"\u4f7f\u7528\u6848\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u6709\u8868 ",(0,d.jsx)(n.code,{children:"employee"}),"\uff0c\u5176\u5305\u542b\u4e86\u67d0\u516c\u53f8\u7684\u5458\u5de5\u4fe1\u606f\u3002\u5982\u4e0b\u5c55\u793a\u4e86\u8868 ",(0,d.jsx)(n.code,{children:"employee"})," \u7684\u90e8\u5206\u6570\u636e\u3002"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"ID"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Gender"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Position"})}),(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Income_level"})})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"01"}),(0,d.jsx)(n.td,{children:"female"}),(0,d.jsx)(n.td,{children:"Developer"}),(0,d.jsx)(n.td,{children:"level_1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"02"}),(0,d.jsx)(n.td,{children:"female"}),(0,d.jsx)(n.td,{children:"Analyst"}),(0,d.jsx)(n.td,{children:"level_2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"03"}),(0,d.jsx)(n.td,{children:"female"}),(0,d.jsx)(n.td,{children:"Salesman"}),(0,d.jsx)(n.td,{children:"level_1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"04"}),(0,d.jsx)(n.td,{children:"male"}),(0,d.jsx)(n.td,{children:"Accountant"}),(0,d.jsx)(n.td,{children:"level_3"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5355\u5217\u67e5\u8be2",children:(0,d.jsx)(n.strong,{children:"\u5355\u5217\u67e5\u8be2"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u63d0\u9ad8 ",(0,d.jsx)(n.code,{children:"Gender"})," \u5217\u7684\u67e5\u8be2\u6548\u7387\uff0c\u5373\u53ef\u4e3a\u8be5\u5217\u521b\u5efa Bitmap \u7d22\u5f15\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index1 ON employee (Gender) USING BITMAP COMMENT 'index1';\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u4e0a\u8bed\u53e5\u6267\u884c\u540e\uff0cbitmap \u7d22\u5f15\u751f\u6210\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"figure",src:s(63614).Z+"",width:"781",height:"345"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u6784\u5efa\u5b57\u5178\uff1aStarRocks \u6839\u636e ",(0,d.jsx)(n.code,{children:"Gender"})," \u5217\u7684\u53d6\u503c\u6784\u5efa\u4e00\u4e2a\u5b57\u5178\uff0c\u5c06 ",(0,d.jsx)(n.code,{children:"female"})," \u548c ",(0,d.jsx)(n.code,{children:"male"})," \u5206\u522b\u6620\u5c04\u4e3a INT \u7c7b\u578b\u7684\u7f16\u7801\u503c\uff1a",(0,d.jsx)(n.code,{children:"0"})," \u548c ",(0,d.jsx)(n.code,{children:"1"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u751f\u6210 bitmap\uff1aStarRocks \u6839\u636e\u5b57\u5178\u7684\u7f16\u7801\u503c\u751f\u6210 bitmap\u3002\u56e0\u4e3a ",(0,d.jsx)(n.code,{children:"female"})," \u51fa\u73b0\u5728\u524d\u4e09\u884c\uff0c\u6240\u4ee5 ",(0,d.jsx)(n.code,{children:"female"})," \u7684 bitmap \u662f ",(0,d.jsx)(n.code,{children:"1110"}),"\uff1b",(0,d.jsx)(n.code,{children:"male"})," \u51fa\u73b0\u5728\u7b2c 4 \u884c\uff0c\u6240\u4ee5 ",(0,d.jsx)(n.code,{children:"male"})," \u7684 bitmap \u662f ",(0,d.jsx)(n.code,{children:"0001"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u67e5\u627e\u8be5\u516c\u53f8\u7684\u7537\u6027\u5458\u5de5\uff0c\u53ef\u6267\u884c\u5982\u4e0b\u8bed\u53e5\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM employee WHERE Gender = male;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8bed\u53e5\u6267\u884c\u540e\uff0cStarRocks \u4f1a\u5148\u67e5\u627e\u5b57\u5178\uff0c\u5f97\u5230 ",(0,d.jsx)(n.code,{children:"male"})," \u7684\u7f16\u7801\u503c\u662f ",(0,d.jsx)(n.code,{children:"1"}),"\uff0c\u7136\u540e\u518d\u53bb\u67e5\u627e bitmap\uff0c\u5f97\u5230 ",(0,d.jsx)(n.code,{children:"male"}),"\u5bf9\u5e94\u7684 bitmap \u662f ",(0,d.jsx)(n.code,{children:"0001"}),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u6709\u7b2c 4 \u884c\u6570\u636e\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u3002\u90a3\u4e48 StarRocks \u5c31\u4f1a\u8df3\u8fc7\u524d 3 \u884c\uff0c\u53ea\u8bfb\u53d6\u7b2c 4 \u884c\u6570\u636e\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u591a\u5217\u67e5\u8be2",children:(0,d.jsx)(n.strong,{children:"\u591a\u5217\u67e5\u8be2"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8981\u63d0\u9ad8 ",(0,d.jsx)(n.code,{children:"Gender"})," \u548c ",(0,d.jsx)(n.code,{children:"Income_level"})," \u5217\u7684\u67e5\u8be2\u6548\u7387\uff0c\u5373\u53ef\u4e3a\u8fd9\u4e24\u5217\u5206\u522b\u521b\u5efa Bitmap \u7d22\u5f15\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Gender"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index1 ON employee (Gender) USING BITMAP COMMENT 'index1';\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Income_level"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"CREATE INDEX index2 ON employee (Income_level) USING BITMAP COMMENT 'index2';\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u4e0a\u4e24\u4e2a\u8bed\u53e5\u6267\u884c\u540e\uff0cBitmap \u7d22\u5f15\u751f\u6210\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"figure",src:s(37630).Z+"",width:"921",height:"496"})}),"\n",(0,d.jsxs)(n.p,{children:["StarRocks \u4f1a\u4e3a ",(0,d.jsx)(n.code,{children:"Gender"})," \u548c ",(0,d.jsx)(n.code,{children:"Income_level"})," \u5217\u5206\u522b\u6784\u5efa\u4e00\u4e2a\u5b57\u5178\uff0c\u7136\u540e\u518d\u6839\u636e\u5b57\u5178\u751f\u6210 bitmap\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Gender"})," \u5217\uff1a",(0,d.jsx)(n.code,{children:"female"})," \u7684 bitmap \u4e3a ",(0,d.jsx)(n.code,{children:"1110"}),"\uff1b",(0,d.jsx)(n.code,{children:"male"})," \u7684 bitmap \u4e3a ",(0,d.jsx)(n.code,{children:"0001"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Income_level"})," \u5217\uff1a",(0,d.jsx)(n.code,{children:"level_1"})," \u7684 bitmap \u4e3a ",(0,d.jsx)(n.code,{children:"1010"}),"\uff1b",(0,d.jsx)(n.code,{children:"level_2"})," \u7684 bitmap \u4e3a ",(0,d.jsx)(n.code,{children:"0100"}),"\uff1b",(0,d.jsx)(n.code,{children:"level_3"})," \u7684 bitmap \u4e3a ",(0,d.jsx)(n.code,{children:"0001"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u8981\u67e5\u627e\u5de5\u8d44\u8303\u56f4\u5728 ",(0,d.jsx)(n.code,{children:"level_1"})," \u7684\u5973\u6027\u5458\u5de5\uff0c\u53ef\u6267\u884c\u5982\u4e0b\u8bed\u53e5\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:" SELECT * FROM employee \n WHERE Gender = female AND Income_level = level_1;\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8bed\u53e5\u6267\u884c\u540e\uff0cStarRocks \u4f1a\u540c\u65f6\u67e5\u627e ",(0,d.jsx)(n.code,{children:"Gender"})," \u548c ",(0,d.jsx)(n.code,{children:"Income_level"})," \u5217\u7684\u5b57\u5178\uff0c\u5f97\u5230\u4ee5\u4e0b\u4fe1\u606f\uff1a"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"female"}),"\u7684\u7f16\u7801\u503c\u4e3a",(0,d.jsx)(n.code,{children:"0"}),"\uff0c\u5bf9\u5e94\u7684 bitmap \u4e3a",(0,d.jsx)(n.code,{children:"1110"}),"\uff1b"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"level_1"}),"\u7684\u7f16\u7801\u503c\u4e3a",(0,d.jsx)(n.code,{children:"0"}),"\uff0c\u5bf9\u5e94\u7684 bitmap \u4e3a",(0,d.jsx)(n.code,{children:"1010"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u56e0\u4e3a\u67e5\u8be2\u8bed\u53e5\u4e2d ",(0,d.jsx)(n.code,{children:"Gender = female"})," \u548c ",(0,d.jsx)(n.code,{children:"Income_level = Level_1"})," \u8fd9\u4e24\u4e2a\u6761\u4ef6\u662f ",(0,d.jsx)(n.code,{children:"AND"})," \u5173\u7cfb\uff0c\u6240\u4ee5 StarRocks \u4f1a\u5bf9\u4e24\u4e2a bitmap \u8fdb\u884c\u4f4d\u8fd0\u7b97 ",(0,d.jsx)(n.code,{children:"1110 & 1010"}),"\uff0c\u5f97\u5230\u6700\u7ec8\u7ed3\u679c ",(0,d.jsx)(n.code,{children:"1010"}),"\u3002\u6839\u636e\u6700\u7ec8\u7ed3\u679c\uff0cStarRocks \u53ea\u8bfb\u53d6\u7b2c 1 \u884c\u548c\u7b2c 3 \u884c\u6570\u636e\uff0c\u4e0d\u4f1a\u8bfb\u53d6\u6240\u6709\u6570\u636e\u3002"]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},63614:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/3.6.1-2-06f7d3e690123d3a5b0b76a14b50ecb0.png"},37630:(e,n,s)=>{s.d(n,{Z:()=>d});const d=s.p+"assets/images/3.6.1-3-ed7b02a42b87d5df22f176d7b044d49b.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var d=s(67294);const i=d.createContext({});function l(e){const n=d.useContext(i);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:l(e),d.createElement(i.Provider,{value:r},n)}}}]);