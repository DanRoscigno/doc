"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[22801],{55101:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>E,contentTitle:()=>c,default:()=>A,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var l=a(85893),r=a(11151);const s={displayed_sidebar:"Chinese31"},c="GRANT",d={id:"sql-reference/sql-statements/account-management/GRANT",title:"GRANT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/account-management/GRANT.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/GRANT",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/GRANT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/GRANT.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"EXECUTE AS",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/EXECUTE_AS"},next:{title:"REVOKE",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/REVOKE"}},E={},i=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u6388\u4e88\u6743\u9650\u7ed9\u7528\u6237\u6216\u8005\u89d2\u8272",id:"\u6388\u4e88\u6743\u9650\u7ed9\u7528\u6237\u6216\u8005\u89d2\u8272",level:3},{value:"System \u76f8\u5173",id:"system-\u76f8\u5173",level:4},{value:"Resource group \u76f8\u5173",id:"resource-group-\u76f8\u5173",level:4},{value:"Resource \u76f8\u5173",id:"resource-\u76f8\u5173",level:4},{value:"Global UDF \u76f8\u5173",id:"global-udf-\u76f8\u5173",level:4},{value:"Internal catalog \u76f8\u5173",id:"internal-catalog-\u76f8\u5173",level:4},{value:"External catalog \u76f8\u5173",id:"external-catalog-\u76f8\u5173",level:4},{value:"Database \u76f8\u5173",id:"database-\u76f8\u5173",level:4},{value:"Table \u76f8\u5173",id:"table-\u76f8\u5173",level:4},{value:"View \u76f8\u5173",id:"view-\u76f8\u5173",level:4},{value:"Materialized view \u76f8\u5173",id:"materialized-view-\u76f8\u5173",level:4},{value:"Function \u76f8\u5173",id:"function-\u76f8\u5173",level:4},{value:"User \u76f8\u5173",id:"user-\u76f8\u5173",level:4},{value:"Storage volume \u76f8\u5173",id:"storage-volume-\u76f8\u5173",level:4},{value:"\u6388\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u6216\u8005\u5176\u4ed6\u89d2\u8272",id:"\u6388\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u6216\u8005\u5176\u4ed6\u89d2\u8272",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5 - \u5e38\u89c1\u573a\u666f\u6240\u9700\u7684\u6743\u9650\u9879",id:"\u6700\u4f73\u5b9e\u8df5---\u5e38\u89c1\u573a\u666f\u6240\u9700\u7684\u6743\u9650\u9879",level:2},{value:"StarRocks \u5185\u8868\u5168\u5c40\u67e5\u8be2\u6743\u9650",id:"starrocks-\u5185\u8868\u5168\u5c40\u67e5\u8be2\u6743\u9650",level:3},{value:"StarRocks \u5185\u8868\u5168\u5c40\u5199\u6743\u9650",id:"starrocks-\u5185\u8868\u5168\u5c40\u5199\u6743\u9650",level:3},{value:"\u6307\u5b9a External Catalog \u4e0b\u7684\u67e5\u8be2\u6743\u9650",id:"\u6307\u5b9a-external-catalog-\u4e0b\u7684\u67e5\u8be2\u6743\u9650",level:3},{value:"\u6307\u5b9a External Catalog \u4e0b\u7684\u5199\u6743\u9650",id:"\u6307\u5b9a-external-catalog-\u4e0b\u7684\u5199\u6743\u9650",level:3},{value:"\u5168\u5c40\u3001\u6570\u636e\u5e93\u7ea7\u3001\u8868\u7ea7\u4ee5\u53ca\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650",id:"\u5168\u5c40\u6570\u636e\u5e93\u7ea7\u8868\u7ea7\u4ee5\u53ca\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650",level:3}];function T(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"grant",children:"GRANT"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u6743\u9650\u6388\u4e88\u7ed9\u89d2\u8272\u6216\u7528\u6237\uff0c\u4ee5\u53ca\u5c06\u89d2\u8272\u6388\u4e88\u7ed9\u7528\u6237\u6216\u5176\u4ed6\u89d2\u8272\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u6709\u5173\u6743\u9650\u9879\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1",(0,l.jsx)(n.a,{href:"/doc/zh/docs/administration/privilege_item",children:"\u6743\u9650\u9879"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6388\u6743\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})," \u6765\u67e5\u770b\u6743\u9650\u6388\u4e88\u7684\u4fe1\u606f\uff1b\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})," \u6765\u64a4\u9500\u6743\u9650\u6216\u89d2\u8272\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6267\u884c GRANT \u64cd\u4f5c\u524d\uff0c\u786e\u4fdd\u60a8\u5df2\u7ecf\u5728\u7cfb\u7edf\u4e2d\u521b\u5efa\u4e86\u7528\u6237\u6216\u89d2\u8272\u3002\u66f4\u591a\u521b\u5efa\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," \u548c ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"}),"\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53ea\u6709\u62e5\u6709 ",(0,l.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u7684\u7528\u6237\u624d\u53ef\u4ee5\u5c06\u4efb\u610f\u6743\u9650\u6388\u4e88\u7ed9\u4efb\u610f\u7528\u6237\u548c\u89d2\u8272\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u89d2\u8272\u88ab\u8d4b\u4e88\u7ed9\u7528\u6237\u4e4b\u540e\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})," \u624b\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0c\u65b9\u53ef\u5229\u7528\u89d2\u8272\u7684\u6743\u9650\u3002\u5982\u679c\u5e0c\u671b\u7528\u6237\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})," \u6216 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," \u4e3a\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u3002\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u5185\u6240\u6709\u7528\u6237\u90fd\u80fd\u591f\u5728\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u6240\u6709\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"SET GLOBAL activate_all_roles_on_login = TRUE;"}),"\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u666e\u901a\u7528\u6237\u53ef\u4ee5\u5c06\u81ea\u8eab\u62e5\u6709\u7684\u6388\u6743\u4e2d\u5e26\u6709 WITH GRANT OPTION \u5173\u952e\u5b57\u7684\u6743\u9650\u8d4b\u4e88\u7ed9\u5176\u4ed6\u7528\u6237\u548c\u89d2\u8272\uff0c\u53c2\u89c1\u793a\u4f8b\u4e03\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsx)(n.h3,{id:"\u6388\u4e88\u6743\u9650\u7ed9\u7528\u6237\u6216\u8005\u89d2\u8272",children:"\u6388\u4e88\u6743\u9650\u7ed9\u7528\u6237\u6216\u8005\u89d2\u8272"}),"\n",(0,l.jsx)(n.h4,{id:"system-\u76f8\u5173",children:"System \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { CREATE RESOURCE GROUP | CREATE RESOURCE | CREATE EXTERNAL CATALOG | REPOSITORY | BLACKLIST | FILE | OPERATE } \n    ON SYSTEM\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"resource-group-\u76f8\u5173",children:"Resource group \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE GROUP <resource_group_name> [, <resource_group_name >,...] \uff5c ALL RESOURCE GROUPS} \n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"resource-\u76f8\u5173",children:"Resource \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE <resource_name> [, < resource_name >,...] \uff5c ALL RESOURCES} \n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"global-udf-\u76f8\u5173",children:"Global UDF \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { GLOBAL FUNCTION <function_name> [, < function_name >,...]    \n       | ALL GLOBAL FUNCTIONS }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"internal-catalog-\u76f8\u5173",children:"Internal catalog \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | CREATE DATABASE | ALL [PRIVILEGES]} \n    ON CATALOG default_catalog\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"external-catalog-\u76f8\u5173",children:"External catalog \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n   { USAGE | DROP | ALL [PRIVILEGES] } \n   ON { CATALOG <catalog_name> [, <catalog_name>,...] | ALL CATALOGS}\n   TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"database-\u76f8\u5173",children:"Database \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | CREATE TABLE | CREATE VIEW | CREATE FUNCTION | CREATE MATERIALIZED VIEW | ALL [PRIVILEGES] } \n    ON { DATABASE <db_name> [, <db_name>,...] | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.p,{children:"*\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"table-\u76f8\u5173",children:"Table \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | SELECT | INSERT | EXPORT | UPDATE | DELETE | ALL [PRIVILEGES]} \n    ON { TABLE <table_name> [, <table_name>,...]\n       | ALL TABLES } IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["*\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002table \u8fd8\u53ef\u4ee5\u7528 ",(0,l.jsx)(n.code,{children:"<db_name>.<table_name>"})," \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8868\u793a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON TABLE <db_name>.<table_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"view-\u76f8\u5173",children:"View \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT  \n    { ALTER | DROP | SELECT | ALL [PRIVILEGES]} \n    ON { VIEW <view_name> [, < view_name >,...]\n       \uff5c ALL VIEWS } IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["*\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002view \u8fd8\u53ef\u4ee5\u7528 ",(0,l.jsx)(n.code,{children:"<db_name>.<view_name>"})," \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8868\u793a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON VIEW <db_name>.<view_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"materialized-view-\u76f8\u5173",children:"Materialized view \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { SELECT | ALTER | REFRESH | DROP | ALL [PRIVILEGES]} \n    ON { MATERIALIZED VIEW <mv_name> [, < mv_name >,...]\n       \uff5c ALL MATERIALIZED VIEWS } IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["*\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002\u7269\u5316\u89c6\u56fe\u8fd8\u53ef\u4ee5\u7528 ",(0,l.jsx)(n.code,{children:"<db_name>.<mv_name>"})," \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8868\u793a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON MATERIALIZED_VIEW <db_name>.<mv_name> TO {ROLE <role_name> | USER <user_name>};\n"})}),"\n",(0,l.jsx)(n.h4,{id:"function-\u76f8\u5173",children:"Function \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { FUNCTION <function_name> [, < function_name >,...]\n       \uff5c ALL FUNCTIONS } IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["*\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002function \u8fd8\u53ef\u4ee5\u7528 ",(0,l.jsx)(n.code,{children:"<db_name>.<function_name>"})," \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8868\u793a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON FUNCTION <db_name>.<function_name> TO {ROLE <role_name> | USER <user_name>};\n"})}),"\n",(0,l.jsx)(n.h4,{id:"user-\u76f8\u5173",children:"User \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT IMPERSONATE ON USER <user_identity> TO USER <user_identity> [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"storage-volume-\u76f8\u5173",children:"Storage volume \u76f8\u5173"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    CREATE STORAGE VOLUME \n    ON SYSTEM\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n\nGRANT  \n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { STORAGE VOLUME < name > [, < name >,...] \uff5c ALL STORAGE VOLUME} \n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6388\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u6216\u8005\u5176\u4ed6\u89d2\u8272",children:"\u6388\u4e88\u89d2\u8272\u7ed9\u7528\u6237\u6216\u8005\u5176\u4ed6\u89d2\u8272"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT <role_name> [,<role_name>, ...] TO ROLE <role_name>\nGRANT <role_name> [,<role_name>, ...] TO USER <user_identity>\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728\u89d2\u8272\u88ab\u8d4b\u4e88\u7ed9\u7528\u6237\u4e4b\u540e\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})," \u624b\u52a8\u6fc0\u6d3b\u89d2\u8272\uff0c\u65b9\u53ef\u5229\u7528\u89d2\u8272\u7684\u6743\u9650\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u5e0c\u671b\u7528\u6237\u767b\u5f55\u65f6\u5c31\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})," \u6216\u8005 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," \u4e3a\u7528\u6237\u8bbe\u7f6e\u9ed8\u8ba4\u89d2\u8272\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u5185\u6240\u6709\u7528\u6237\u90fd\u80fd\u591f\u5728\u767b\u5f55\u65f6\u9ed8\u8ba4\u6fc0\u6d3b\u6240\u6709\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"SET GLOBAL activate_all_roles_on_login = TRUE;"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06\u6240\u6709\u6570\u636e\u5e93\u53ca\u5e93\u4e2d\u6240\u6709\u8868\u7684\u8bfb\u53d6\u6743\u9650\u6388\u4e88\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"})," \u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON *.* TO 'jack'@'%';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06\u6570\u636e\u5e93 ",(0,l.jsx)(n.code,{children:"db1"})," \u53ca\u5e93\u4e2d\u6240\u6709\u8868\u7684\u5bfc\u5165\u6743\u9650\u6388\u4e88\u89d2\u8272 ",(0,l.jsx)(n.code,{children:"my_role"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT INSERT ON db1.* TO ROLE 'my_role';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u6570\u636e\u5e93 ",(0,l.jsx)(n.code,{children:"db1"})," \u548c\u8868 ",(0,l.jsx)(n.code,{children:"tbl1"})," \u7684\u8bfb\u53d6\u3001\u7ed3\u6784\u53d8\u66f4\u548c\u5bfc\u5165\u6743\u9650\u6388\u4e88\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT,ALTER,INSERT ON db1.tbl1 TO 'jack'@'192.8.%';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u5c06\u6240\u6709\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u6388\u4e88\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE * TO 'jack'@'%';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u5c06\u8d44\u6e90 ",(0,l.jsx)(n.code,{children:"spark_resource"})," \u7684\u4f7f\u7528\u6743\u9650\u6388\u4e88\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u5c06\u8d44\u6e90 ",(0,l.jsx)(n.code,{children:"spark_resource"})," \u7684\u4f7f\u7528\u6743\u9650\u6388\u4e88\u89d2\u8272 ",(0,l.jsx)(n.code,{children:"my_role"})," \u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e03\uff1a\u5c06\u8868 ",(0,l.jsx)(n.code,{children:"sr_member"})," \u7684 SELECT \u6743\u9650\u6388\u4e88\u7ed9\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"}),"\uff0c\u5e76\u5141\u8bb8 ",(0,l.jsx)(n.code,{children:"jack"})," \u5c06\u6b64\u6743\u9650\u6388\u4e88\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\uff08\u901a\u8fc7\u5728 SQL \u4e2d\u6307\u5b9a WITH GRANT OPTION\uff09\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON TABLE sr_member TO USER jack@'172.10.1.10' WITH GRANT OPTION;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u516b\uff1a\u5c06\u7cfb\u7edf\u9884\u7f6e\u89d2\u8272 ",(0,l.jsx)(n.code,{children:"db_admin"}),"\u3001",(0,l.jsx)(n.code,{children:"user_admin"})," \u4ee5\u53ca ",(0,l.jsx)(n.code,{children:"cluster_admin"})," \u8d4b\u4e88\u7ed9\u5e73\u53f0\u8fd0\u7ef4\u89d2\u8272\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT db_admin, user_admin, cluster_admin TO USER user_platform;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e5d\uff1a\u6388\u4e88\u7528\u6237 ",(0,l.jsx)(n.code,{children:"jack"})," \u4ee5\u7528\u6237 ",(0,l.jsx)(n.code,{children:"rose"})," \u7684\u8eab\u4efd\u6267\u884c\u64cd\u4f5c\u7684\u6743\u9650\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"GRANT IMPERSONATE ON 'rose'@'%' TO 'jack'@'%';\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5---\u5e38\u89c1\u573a\u666f\u6240\u9700\u7684\u6743\u9650\u9879",children:"\u6700\u4f73\u5b9e\u8df5 - \u5e38\u89c1\u573a\u666f\u6240\u9700\u7684\u6743\u9650\u9879"}),"\n",(0,l.jsx)(n.h3,{id:"starrocks-\u5185\u8868\u5168\u5c40\u67e5\u8be2\u6743\u9650",children:"StarRocks \u5185\u8868\u5168\u5c40\u67e5\u8be2\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE read_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709 Catalog \u7684\u4f7f\u7528\u6743\u9650\u3002\nGRANT USAGE ON ALL CATALOGS TO ROLE read_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u8868\u7684\u67e5\u8be2\u6743\u9650\u3002\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u89c6\u56fe\u7684\u67e5\u8be2\u6743\u9650\u3002\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684\u67e5\u8be2\u548c\u52a0\u901f\u6743\u9650\u3002\nGRANT SELECT ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE read_only;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u6388\u4e88\u89d2\u8272\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528 UDF \u7684\u6743\u9650\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u5e93\u7ea7\u522b UDF \u7684\u4f7f\u7528\u6743\u9650\u3002\nGRANT USAGE ON ALL FUNCTIONS IN ALL DATABASES TO ROLE read_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u5168\u5c40 UDF \u7684\u4f7f\u7528\u6743\u9650\u3002\nGRANT USAGE ON ALL GLOBAL FUNCTIONS TO ROLE read_only;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"starrocks-\u5185\u8868\u5168\u5c40\u5199\u6743\u9650",children:"StarRocks \u5185\u8868\u5168\u5c40\u5199\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE write_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709 Catalog \u7684\u4f7f\u7528\u6743\u9650\u3002\nGRANT USAGE ON ALL CATALOGS TO ROLE write_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u8868\u7684\u5bfc\u5165\u3001\u66f4\u65b0\u6743\u9650\u3002\nGRANT INSERT, UPDATE ON ALL TABLES IN ALL DATABASES TO ROLE write_only;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684\u66f4\u65b0\u6743\u9650\u3002\nGRANT REFRESH ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE write_only;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6307\u5b9a-external-catalog-\u4e0b\u7684\u67e5\u8be2\u6743\u9650",children:"\u6307\u5b9a External Catalog \u4e0b\u7684\u67e5\u8be2\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE read_catalog_only;\n-- \u8d4b\u4e88\u89d2\u8272\u76ee\u6807 Catalog \u7684 USAGE \u6743\u9650\u3002\nGRANT USAGE ON CATALOG hive_catalog TO ROLE read_catalog_only;\n-- \u5207\u6362\u5230\u5bf9\u5e94\u6570\u636e\u76ee\u5f55\u3002\nSET CATALOG hive_catalog;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709\u8868\u548c\u89c6\u56fe\u7684\u67e5\u8be2\u6743\u9650\u3002\u6ce8\u610f\u5f53\u524d\u4ec5\u652f\u6301\u67e5\u8be2 Hive \u8868\u7684\u89c6\u56fe (\u81ea 3.1 \u7248\u672c\u8d77)\u3002\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_catalog_only;\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_catalog_only;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6307\u5b9a-external-catalog-\u4e0b\u7684\u5199\u6743\u9650",children:"\u6307\u5b9a External Catalog \u4e0b\u7684\u5199\u6743\u9650"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u524d\u4ec5\u652f\u6301\u5199\u5165\u6570\u636e\u5230 Iceberg \u8868 (\u81ea 3.1 \u7248\u672c\u8d77)\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE write_catalog_only;\n-- \u8d4b\u4e88\u89d2\u8272\u76ee\u6807 Catalog \u7684 USAGE \u6743\u9650\u3002\nGRANT USAGE ON CATALOG iceberg_catalog TO ROLE read_catalog_only;\n-- \u5207\u6362\u5230\u5bf9\u5e94\u6570\u636e\u76ee\u5f55\u3002\nSET CATALOG iceberg_catalog;\n-- \u8d4b\u4e88\u89d2\u8272\u6240\u6709 Iceberg \u8868\u7684\u5199\u5165\u6743\u9650\u3002\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE write_catalog_only;\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5168\u5c40\u6570\u636e\u5e93\u7ea7\u8868\u7ea7\u4ee5\u53ca\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650",children:"\u5168\u5c40\u3001\u6570\u636e\u5e93\u7ea7\u3001\u8868\u7ea7\u4ee5\u53ca\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5168\u5c40\u5907\u4efd\u6062\u590d\u6743\u9650"}),"\n",(0,l.jsx)(n.p,{children:"\u5168\u5c40\u5907\u4efd\u6062\u590d\u6743\u9650\u53ef\u4ee5\u5bf9\u4efb\u610f\u5e93\u3001\u8868\u3001\u5206\u533a\u8fdb\u884c\u5907\u4efd\u6062\u590d\u3002\u9700\u8981 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u5728 Default Catalog \u4e0b\u521b\u5efa\u6570\u636e\u5e93\u7684\u6743\u9650\uff0c\u5728\u4efb\u610f\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u7684\u6743\u9650\uff0c\u4ee5\u53ca\u5bf9\u4efb\u610f\u8868\u8fdb\u884c\u5bfc\u5165\u3001\u5bfc\u51fa\u7684\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE recover;\n-- \u8d4b\u4e88\u89d2\u8272 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\u3002\nGRANT REPOSITORY ON SYSTEM TO ROLE recover;\n-- \u8d4b\u4e88\u89d2\u8272\u521b\u5efa\u6570\u636e\u5e93\u7684\u6743\u9650\u3002\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover;\n-- \u8d4b\u4e88\u89d2\u8272\u521b\u5efa\u4efb\u610f\u8868\u7684\u6743\u9650\u3002\nGRANT CREATE TABLE ON ALL DATABASES TO ROLE recover;\n-- \u8d4b\u4e88\u89d2\u8272\u5411\u4efb\u610f\u8868\u5bfc\u5165\u3001\u5bfc\u51fa\u6570\u636e\u7684\u6743\u9650\u3002\nGRANT INSERT, EXPORT ON ALL TABLES IN ALL DATABASES TO ROLE recover;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650"}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650\u53ef\u4ee5\u5bf9\u6574\u4e2a\u6570\u636e\u5e93\u8fdb\u884c\u5907\u4efd\u6062\u590d\uff0c\u9700\u8981 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u5728 Default Catalog \u4e0b\u521b\u5efa\u6570\u636e\u5e93\u7684\u6743\u9650\uff0c\u5728\u4efb\u610f\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u7684\u6743\u9650\uff0c\u4ee5\u53ca\u5f85\u5907\u4efd\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u5bfc\u51fa\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\u3002\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272\u521b\u5efa\u6570\u636e\u5e93\u7684\u6743\u9650\u3002\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272\u521b\u5efa\u4efb\u610f\u8868\u7684\u6743\u9650\u3002\nGRANT CREATE TABLE ON ALL DATABASES TO ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272\u5411\u4efb\u610f\u8868\u5bfc\u5165\u6570\u636e\u7684\u6743\u9650\u3002\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272\u5411\u5f85\u5907\u4efd\u6570\u636e\u5e93\u4e0b\u6240\u6709\u8868\u7684\u5bfc\u51fa\u6743\u9650\u3002\nGRANT EXPORT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8868\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650"}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650\u9700\u8981 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u5728\u5f85\u5907\u4efd\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u53ca\u5bfc\u5165\u6570\u636e\u7684\u6743\u9650\uff0c\u4ee5\u53ca\u5f85\u5907\u4efd\u8868\u7684\u5bfc\u51fa\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE recover_tbl;\n-- \u8d4b\u4e88\u89d2\u8272 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\u3002\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_tbl;\n-- \u8d4b\u4e88\u89d2\u8272\u5728\u5bf9\u5e94\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u8868\u7684\u6743\u9650\u3002\nGRANT CREATE TABLE ON DATABASE <db_name> TO ROLE recover_tbl;\n-- \u8d4b\u4e88\u89d2\u8272\u5411\u4efb\u610f\u8868\u5bfc\u5165\u6570\u636e\u7684\u6743\u9650\u3002\nGRANT INSERT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n-- \u8d4b\u4e88\u89d2\u8272\u5bfc\u51fa\u5f85\u5907\u4efd\u8868\u6570\u636e\u7684\u6743\u9650\u3002\nGRANT EXPORT ON TABLE <table_name> TO ROLE recover_tbl;     \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650"}),"\n",(0,l.jsx)(n.p,{children:"\u5206\u533a\u7ea7\u5907\u4efd\u6062\u590d\u6743\u9650\u9700\u8981 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\uff0c\u4ee5\u53ca\u5bf9\u5f85\u5907\u4efd\u8868\u7684\u5bfc\u5165\u3001\u5bfc\u51fa\u6743\u9650\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"-- \u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\nCREATE ROLE recover_par;\n-- \u8d4b\u4e88\u89d2\u8272 SYSTEM \u7ea7\u7684 REPOSITORY \u6743\u9650\u3002\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_par;\n-- \u8d4b\u4e88\u89d2\u8272\u5bf9\u5bf9\u5e94\u8868\u8fdb\u884c\u5bfc\u5165\u7684\u6743\u9650\u3002\nGRANT INSERT, EXPORT ON TABLE <table_name> TO ROLE recover_par;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6709\u5173\u591a\u4e1a\u52a1\u7ebf\u6743\u9650\u7ba1\u7406\u7684\u76f8\u5173\u5b9e\u8df5\uff0c\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/doc/zh/docs/administration/User_privilege#%E5%A4%9A%E4%B8%9A%E5%8A%A1%E7%BA%BF%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86",children:"\u591a\u4e1a\u52a1\u7ebf\u6743\u9650\u7ba1\u7406"}),"\u3002"]})]})}const A=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(T,e)})):T(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>d,ah:()=>s});var l=a(67294);const r=l.createContext({});function s(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:a}){let d;return d=a?"function"==typeof e?e({}):e||c:s(e),l.createElement(r.Provider,{value:d},n)}}}]);