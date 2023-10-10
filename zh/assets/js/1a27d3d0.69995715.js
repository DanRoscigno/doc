"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62450],{2293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=s(85893),r=s(11151);const l={},d="RESTORE",c={id:"sql-reference/sql-statements/data-definition/RESTORE",title:"RESTORE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/RESTORE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/RESTORE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"REFRESH EXTERNAL TABLE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/REFRESH EXTERNAL TABLE"},next:{title:"SET CATALOG",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SET CATALOG"}},i={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u6743\u9650\u8981\u6c42",id:"\u6743\u9650\u8981\u6c42",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"restore",children:"RESTORE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u6062\u590d\u6307\u5b9a\u6570\u636e\u5e93\u3001\u8868\u6216\u5206\u533a\u7684\u6570\u636e\u3002\u5f53\u524d StarRocks \u4ec5\u652f\u6301\u6062\u590d OLAP \u7c7b\u578b\u8868\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6570\u636e\u6062\u590d\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20RESTORE",children:"SHOW RESTORE"})," \u8bed\u53e5\u67e5\u770b\u6062\u590d\u4f5c\u4e1a\u72b6\u6001\uff0c\u6216\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL%20RESTORE",children:"CANCEL RESTORE"})," \u8bed\u53e5\u53d6\u6d88\u6062\u590d\u4f5c\u4e1a\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u4e00\u6570\u636e\u5e93\u5185\uff0c\u4ec5\u53ef\u540c\u65f6\u6267\u884c\u4e00\u4e2a\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\uff0c\u5426\u5219\u7cfb\u7edf\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6743\u9650\u8981\u6c42",children:"\u6743\u9650\u8981\u6c42"}),"\n",(0,t.jsx)(n.p,{children:"3.0 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u62e5\u6709 admin_priv \u6743\u9650\u624d\u53ef\u6267\u884c\u6b64\u64cd\u4f5c\u30023.0 \u53ca\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c\u5982\u9700\u6062\u590d\u6574\u4e2a\u6570\u636e\u5e93\uff0c\u9700\u8981\u62e5\u6709 System \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u4ee5\u53ca\u521b\u5efa\u6570\u636e\u5e93\u3001\u521b\u5efa\u8868\u3001\u5bfc\u5165\u6570\u636e\u7684\u6743\u9650\uff1b\u5982\u9700\u6062\u590d\u7279\u5b9a\u8868\uff0c\u5219\u9700\u8981\u62e5\u6709 System \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u4ee5\u53ca\u5bf9\u7279\u5b9a\u8868\u7684\u5bfc\u5165\u6743\u9650\uff08INSERT\uff09\u3002\u4f8b\u5982\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u6062\u590d\u6307\u5b9a\u8868\u4e2d\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE recover_tbl;\nGRANT INSERT ON TABLE <table_name> TO ROLE recover_tbl;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u6062\u590d\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u6240\u6709\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\nGRANT INSERT ON ALL TABLES ALL DATABASES TO ROLE recover_db;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u6062\u590d default_catalog \u4e0b\u5168\u90e8\u6570\u636e\u5e93\u4e2d\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'RESTORE SNAPSHOT <db_name>.<snapshot_name>\nFROM <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n    [ AS <table_alias>] [, ...] ) ]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u6062\u590d\u6570\u636e\u81f3\u8be5\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snapshot_name"}),(0,t.jsx)(n.td,{children:"\u6570\u636e\u5feb\u7167\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"repository_name"}),(0,t.jsx)(n.td,{children:"\u4ed3\u5e93\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ON"}),(0,t.jsx)(n.td,{children:"\u9700\u8981\u6062\u590d\u7684\u8868\u540d\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u6062\u590d\u6574\u4e2a\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PARTITION"}),(0,t.jsxs)(n.td,{children:["\u9700\u8981\u6062\u590d\u7684\u5206\u533a\u540d\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u6062\u590d\u5bf9\u5e94\u8868\u7684\u6240\u6709\u5206\u533a\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20PARTITIONS",children:"SHOW PARTITIONS"})," \u8bed\u53e5\u67e5\u770b\u5206\u533a\u540d\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PROPERTIES"}),(0,t.jsxs)(n.td,{children:["\u6062\u590d\u64cd\u4f5c\u5c5e\u6027\u3002\u73b0\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"backup_timestamp"}),"\uff1a\u5907\u4efd\u65f6\u95f4\u6233\uff0c",(0,t.jsx)(n.strong,{children:"\u5fc5\u586b"}),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20SNAPSHOT",children:"SHOW SNAPSHOT"})," \u67e5\u770b\u5907\u4efd\u65f6\u95f4\u6233\u3002"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"replication_num"}),"\uff1a\u6307\u5b9a\u6062\u590d\u7684\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u6570\u3002\u9ed8\u8ba4\uff1a",(0,t.jsx)(n.code,{children:"3"}),"\u3002"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"meta_version"}),"\uff1a\u8be5\u53c2\u6570\u4f5c\u4e3a\u4e34\u65f6\u65b9\u6848\uff0c\u4ec5\u7528\u4e8e\u6062\u590d\u65e7\u7248\u672c StarRocks \u5907\u4efd\u7684\u6570\u636e\u3002\u6700\u65b0\u7248\u672c\u7684\u5907\u4efd\u6570\u636e\u4e2d\u5df2\u7ecf\u5305\u542b ",(0,t.jsx)(n.code,{children:"meta version"}),"\uff0c\u65e0\u9700\u518d\u6307\u5b9a\u3002"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"timeout"}),"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\uff1a\u79d2\u3002\u9ed8\u8ba4\uff1a",(0,t.jsx)(n.code,{children:"86400"}),"\u3002"]})]})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4ece ",(0,t.jsx)(n.code,{children:"example_repo"})," \u4ed3\u5e93\u4e2d\u6062\u590d\u5907\u4efd ",(0,t.jsx)(n.code,{children:"snapshot_label1"})," \u4e2d\u7684\u8868 ",(0,t.jsx)(n.code,{children:"backup_tbl"})," \u81f3\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"}),"\uff0c\u5907\u4efd\u65f6\u95f4\u6233\u4e3a ",(0,t.jsx)(n.code,{children:"2018-05-04-16-45-08"}),"\u3002\u6062\u590d\u4e3a\u4e00\u4e2a\u526f\u672c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'RESTORE SNAPSHOT example_db.snapshot_label1\nFROM example_repo\nON ( backup_tbl )\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-16-45-08",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4ece ",(0,t.jsx)(n.code,{children:"example_repo"})," \u4ed3\u5e93\u4e2d\u6062\u590d\u5907\u4efd ",(0,t.jsx)(n.code,{children:"snapshot_label2"})," \u4e2d\u7684\u8868 ",(0,t.jsx)(n.code,{children:"backup_tbl"})," \u7684\u5206\u533a ",(0,t.jsx)(n.code,{children:"p1"})," \u53ca ",(0,t.jsx)(n.code,{children:"p2"}),"\uff0c\u4ee5\u53ca\u8868 ",(0,t.jsx)(n.code,{children:"backup_tbl2"})," \u5230\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"}),"\uff0c\u5e76\u91cd\u547d\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"new_tbl"}),"\uff0c\u5907\u4efd\u65f6\u95f4\u6233\u4e3a ",(0,t.jsx)(n.code,{children:"2018-05-04-17-11-01"}),"\u3002\u9ed8\u8ba4\u6062\u590d\u4e09\u4e2a\u526f\u672c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'RESTORE SNAPSHOT example_db.snapshot_label2\nFROM example_repo\nON(\n    backup_tbl PARTITION (p1, p2),\n    backup_tbl2 AS new_tbl\n)\nPROPERTIES\n(\n    "backup_timestamp"="2018-05-04-17-11-01"\n);\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>l});var t=s(67294);const r=t.createContext({});function l(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:l(e),t.createElement(r.Provider,{value:c},n)}}}]);