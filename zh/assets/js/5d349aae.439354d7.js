"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65098],{36426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>a});var l=s(85893),d=s(11151);const t={displayed_sidebar:"Chinese"},r="BACKUP",i={id:"sql-reference/sql-statements/data-definition/BACKUP",title:"BACKUP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/BACKUP",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/BACKUP.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ANALYZE TABLE",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE"},next:{title:"CANCEL ALTER TABLE",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u6743\u9650\u8981\u6c42",id:"\u6743\u9650\u8981\u6c42",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"backup",children:"BACKUP"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsxs)(n.p,{children:["\u5907\u4efd\u6307\u5b9a\u6570\u636e\u5e93\u3001\u8868\u6216\u5206\u533a\u7684\u6570\u636e\u3002\u5f53\u524d StarRocks \u4ec5\u652f\u6301\u5907\u4efd OLAP \u7c7b\u578b\u8868\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,l.jsx)(n.a,{href:"/zh/docs/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6570\u636e\u5907\u4efd\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"})," \u8bed\u53e5\u67e5\u770b\u5907\u4efd\u4f5c\u4e1a\u72b6\u6001\uff0c\u6216\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"})," \u8bed\u53e5\u53d6\u6d88\u5907\u4efd\u4f5c\u4e1a\u3002\u4f5c\u4e1a\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"})," \u67e5\u770b\u7279\u5b9a\u4ed3\u5e93\u5bf9\u5e94\u7684\u6570\u636e\u5feb\u7167\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5355\u4e00\u6570\u636e\u5e93\u5185\uff0c\u4ec5\u53ef\u540c\u65f6\u6267\u884c\u4e00\u4e2a\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\uff0c\u5426\u5219\u7cfb\u7edf\u62a5\u9519\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d StarRocks \u4e0d\u652f\u6301\u5728\u5907\u4efd\u6570\u636e\u65f6\u4f7f\u7528\u538b\u7f29\u7b97\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6743\u9650\u8981\u6c42",children:"\u6743\u9650\u8981\u6c42"}),"\n",(0,l.jsx)(n.p,{children:"3.0 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u62e5\u6709 admin_priv \u6743\u9650\u624d\u53ef\u6267\u884c\u6b64\u64cd\u4f5c\u30023.0 \u53ca\u4e4b\u540e\u7684\u7248\u672c\u4e2d\uff0c\u5982\u9700\u5907\u4efd\u6307\u5b9a\u6570\u636e\u8868\u6216\u6574\u4e2a\u6570\u636e\u5e93\uff0c\u9700\u8981\u62e5\u6709 System \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u4ee5\u53ca\u5bf9\u5e94\u8868\u6216\u5bf9\u5e94\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684 EXPORT \u6743\u9650\u3002\u4f8b\u5982\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u4ece\u6307\u5b9a\u7684\u8868\u4e2d\u5bfc\u51fa\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE backup_tbl;\nGRANT EXPORT ON TABLE <table_name> TO ROLE backup_tbl;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u4ece\u6307\u5b9a\u6570\u636e\u4e0b\u6240\u6709\u8868\u4e2d\u5bfc\u51fa\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE backup_db;\nGRANT EXPORT ON ALL TABLES IN DATABASE <database_name> TO ROLE backup_db;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6388\u4e88\u89d2\u8272\u4ece\u6240\u6709\u6570\u636e\u5e93\u7684\u6240\u6709\u8868\u4e2d\u5bfc\u51fa\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT REPOSITORY ON SYSTEM TO ROLE backup;\nGRANT EXPORT ON ALL TABLES IN ALL DATABASES TO ROLE backup;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'BACKUP SNAPSHOT <db_name>.<snapshot_name>\nTO <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n       [, ...] ) ]\n[ PROPERTIES ("key"="value" [, ...] ) ]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"db_name"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u5907\u4efd\u7684\u6570\u636e\u6240\u5c5e\u7684\u6570\u636e\u5e93\u540d\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"snapshot_name"}),(0,l.jsx)(n.td,{children:"\u6307\u5b9a\u6570\u636e\u5feb\u7167\u540d\u3002\u5168\u5c40\u8303\u56f4\u5185\uff0c\u5feb\u7167\u540d\u4e0d\u53ef\u91cd\u590d\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"repository_name"}),(0,l.jsxs)(n.td,{children:["\u4ed3\u5e93\u540d\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"})," \u521b\u5efa\u4ed3\u5e93\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ON"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u5907\u4efd\u7684\u8868\u540d\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u5907\u4efd\u6574\u4e2a\u6570\u636e\u5e93\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"PARTITION"}),(0,l.jsx)(n.td,{children:"\u9700\u8981\u5907\u4efd\u7684\u5206\u533a\u540d\u3002\u5982\u4e0d\u6307\u5b9a\u5219\u5907\u4efd\u5bf9\u5e94\u8868\u7684\u6240\u6709\u5206\u533a\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"PROPERTIES"}),(0,l.jsxs)(n.td,{children:["\u6570\u636e\u5feb\u7167\u5c5e\u6027\u3002\u73b0\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a",(0,l.jsx)(n.code,{children:"type"}),"\uff1a\u5907\u4efd\u7c7b\u578b\u3002\u5f53\u524d\u4ec5\u652f\u6301 ",(0,l.jsx)(n.code,{children:"FULL"}),"\uff0c\u5373\u5168\u91cf\u5907\u4efd\u3002\u9ed8\u8ba4\uff1a",(0,l.jsx)(n.code,{children:"FULL"}),"\u3002",(0,l.jsx)(n.code,{children:"timeout"}),"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\u3002\u5355\u4f4d\uff1a\u79d2\u3002\u9ed8\u8ba4\uff1a",(0,l.jsx)(n.code,{children:"86400"}),"\u3002"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5168\u91cf\u5907\u4efd ",(0,l.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u5230\u4ed3\u5e93 ",(0,l.jsx)(n.code,{children:"example_repo"})," \u4e2d\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nPROPERTIES ("type" = "full");\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5168\u91cf\u5907\u4efd ",(0,l.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u4e0b\u7684\u8868 ",(0,l.jsx)(n.code,{children:"example_tbl"})," \u5230\u4ed3\u5e93 ",(0,l.jsx)(n.code,{children:"example_repo"})," \u4e2d\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON (example_tbl);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5168\u91cf\u5907\u4efd ",(0,l.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u4e2d\u8868 ",(0,l.jsx)(n.code,{children:"example_tbl"})," \u7684 ",(0,l.jsx)(n.code,{children:"p1"}),"\u3001",(0,l.jsx)(n.code,{children:"p2"})," \u5206\u533a\u548c\u8868 ",(0,l.jsx)(n.code,{children:"example_tbl2"})," \u5230\u4ed3\u5e93 ",(0,l.jsx)(n.code,{children:"example_repo"})," \u4e2d\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nON(\n    example_tbl PARTITION (p1, p2),\n    example_tbl2\n);\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>t});var l=s(67294);const d=l.createContext({});function t(e){const n=l.useContext(d);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:t(e),l.createElement(d.Provider,{value:i},n)}}}]);