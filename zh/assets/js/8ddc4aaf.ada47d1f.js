"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87519],{23574:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>d,toc:()=>t});var r=s(85893),l=s(11151);const a={},c="REVOKE",d={id:"sql-reference/sql-statements/account-management/REVOKE",title:"REVOKE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/account-management/REVOKE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/REVOKE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/account-management/REVOKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/REVOKE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"GRANT",permalink:"/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT"},next:{title:"SET PASSWORD",permalink:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SET PASSWORD"}},i={},t=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u64a4\u9500\u6307\u5b9a\u6743\u9650",id:"\u64a4\u9500\u6307\u5b9a\u6743\u9650",level:3},{value:"System \u76f8\u5173",id:"system-\u76f8\u5173",level:4},{value:"Resource group \u76f8\u5173",id:"resource-group-\u76f8\u5173",level:4},{value:"Resource \u76f8\u5173",id:"resource-\u76f8\u5173",level:4},{value:"User \u76f8\u5173",id:"user-\u76f8\u5173",level:4},{value:"\u5168\u5c40 UDF \u76f8\u5173",id:"\u5168\u5c40-udf-\u76f8\u5173",level:4},{value:"Internal catalog \u76f8\u5173",id:"internal-catalog-\u76f8\u5173",level:4},{value:"External catalog \u76f8\u5173",id:"external-catalog-\u76f8\u5173",level:4},{value:"Database \u76f8\u5173",id:"database-\u76f8\u5173",level:4},{value:"Table \u76f8\u5173",id:"table-\u76f8\u5173",level:4},{value:"View \u76f8\u5173",id:"view-\u76f8\u5173",level:4},{value:"Materialized view \u76f8\u5173",id:"materialized-view-\u76f8\u5173",level:4},{value:"Function \u76f8\u5173",id:"function-\u76f8\u5173",level:4},{value:"\u64a4\u9500\u6307\u5b9a\u89d2\u8272",id:"\u64a4\u9500\u6307\u5b9a\u89d2\u8272",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u64a4\u9500\u6743\u9650",id:"\u64a4\u9500\u6743\u9650",level:3},{value:"\u64a4\u9500\u89d2\u8272",id:"\u64a4\u9500\u89d2\u8272",level:3}];function E(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"revoke",children:"REVOKE"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ece\u7528\u6237\u6216\u89d2\u8272\u4e2d\u64a4\u9500\u6307\u5b9a\u7684\u6743\u9650\u6216\u89d2\u8272\u3002\u6709\u5173 StarRocks \u652f\u6301\u7684\u6743\u9650\u9879\uff0c\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/3.0/administration/privilege_item",children:"\u6743\u9650\u9879"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u666e\u901a\u7528\u6237\u53ef\u4ee5\u5c06\u81ea\u8eab\u62e5\u6709\u7684\u6388\u6743\u4e2d\u5e26\u6709 WITH GRANT OPTION \u5173\u952e\u5b57\u7684\u6743\u9650\u4ece\u5176\u4ed6\u7528\u6237\u6216\u89d2\u8272\u5904\u6536\u56de\u3002\u5173\u4e8e WITH GRANT OPTION\uff0c\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53ea\u6709\u62e5\u6709 ",(0,r.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6536\u56de\u5176\u4ed6\u7528\u6237\u7684\u6743\u9650\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u64a4\u9500\u6307\u5b9a\u6743\u9650",children:"\u64a4\u9500\u6307\u5b9a\u6743\u9650"}),"\n",(0,r.jsx)(n.p,{children:"\u80fd\u64a4\u9500\u7684\u6743\u9650\u56e0\u5bf9\u8c61 (object) \u800c\u5f02\u3002\u4e0b\u9762\u8bb2\u89e3\u4e0d\u540c\u5bf9\u8c61\u53ef\u4ee5\u64a4\u9500\u7684\u4e0d\u540c\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"system-\u76f8\u5173",children:"System \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { CREATE RESOURCE GROUP | CREATE RESOURCE | CREATE EXTERNAL CATALOG | REPOSITORY | BLACKLIST | FILE | OPERATE } \n    ON SYSTEM\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"resource-group-\u76f8\u5173",children:"Resource group \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE GROUP <resourcegroup_name> [, <resourcegroup_name>,...] \uff5c ALL RESOURCE GROUPS}\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"resource-\u76f8\u5173",children:"Resource \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE <resource_name> [, <resource_name>,...] \uff5c ALL RESOURCES} \n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"user-\u76f8\u5173",children:"User \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE IMPERSONATE ON USER <user_identity> FROM USER <user_identity>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5168\u5c40-udf-\u76f8\u5173",children:"\u5168\u5c40 UDF \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { GLOBAL FUNCTION <function_name> [, <function_name>,...]    \n       | ALL GLOBAL FUNCTIONS }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"internal-catalog-\u76f8\u5173",children:"Internal catalog \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | CREATE DATABASE | ALL [PRIVILEGES]} \n    ON CATALOG default_catalog\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"external-catalog-\u76f8\u5173",children:"External catalog \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE  \n   { USAGE | DROP | ALL [PRIVILEGES] }\n   ON { CATALOG <catalog_name> [, <catalog_name>,...] | ALL CATALOGS}\n   FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"database-\u76f8\u5173",children:"Database \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE \n    { ALTER | DROP | CREATE TABLE | CREATE VIEW | CREATE FUNCTION | CREATE MATERIALIZED VIEW | ALL [PRIVILEGES] } \n    ON { DATABASE <database_name> [, <database_name>,...] | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"table-\u76f8\u5173",children:"Table \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { ALTER | DROP | SELECT | INSERT | EXPORT | UPDATE | DELETE | ALL [PRIVILEGES]} \n    ON { TABLE <table_name> [, < table_name >,...]\n       | ALL TABLES} IN \n           { DATABASE <database_name> | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002table \u8fd8\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:"db.tbl"})," \u7684\u65b9\u5f0f\u6765\u8868\u793a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON TABLE db.tbl FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"view-\u76f8\u5173",children:"View \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { ALTER | DROP | SELECT | ALL [PRIVILEGES]} \n    ON { VIEW <view_name> [, < view_name >,...]\n       \uff5c ALL VIEWS} IN \n           { DATABASE <database_name> | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002view \u8fd8\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:"db.view"})," \u7684\u65b9\u5f0f\u6765\u8868\u793a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON VIEW db.view FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"materialized-view-\u76f8\u5173",children:"Materialized view \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { SELECT | ALTER | REFRESH | DROP | ALL [PRIVILEGES]} \n    ON { MATERIALIZED VIEW <mv_name> [, < mv_name >,...]\n       \uff5c ALL MATERIALIZED VIEWS} IN \n           { DATABASE <database_name> | ALL [DATABASES] }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002mv \u8fd8\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:"db.mv"})," \u7684\u65b9\u5f0f\u6765\u8868\u793a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON MATERIALIZED VIEW db.mv FROM {ROLE <role_name> | USER <user_identity>};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"function-\u76f8\u5173",children:"Function \u76f8\u5173"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { FUNCTION <function_name> [, < function_name >,...]\n       \uff5c ALL FUNCTIONS } IN \n           { DATABASE <database_name> | ALL DATABASES }\n    FROM { ROLE | USER} {<role_name>|<user_identity>}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9700\u8981\u6267\u884c SET CATALOG \u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002function \u8fd8\u53ef\u4ee5\u7528 ",(0,r.jsx)(n.code,{children:"db.function"})," \u7684\u65b9\u5f0f\u6765\u8868\u793a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE <priv> ON FUNCTION db.function FROM {ROLE <role_name> | USER <user_identity>}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u64a4\u9500\u6307\u5b9a\u89d2\u8272",children:"\u64a4\u9500\u6307\u5b9a\u89d2\u8272"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE <role_name> [,<role_name>, ...] FROM ROLE <role_name>\nREVOKE <role_name> [,<role_name>, ...] FROM USER <user_identity>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"role_name"}),(0,r.jsx)(n.td,{children:"\u89d2\u8272\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user_identity"}),(0,r.jsx)(n.td,{children:"\u7528\u6237\u6807\u8bc6\uff0c\u4f8b\u5982 'jack'@'192.%'\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resourcegroup_name"}),(0,r.jsx)(n.td,{children:"\u8d44\u6e90\u7ec4\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resource_name"}),(0,r.jsx)(n.td,{children:"\u8d44\u6e90\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"function_name"}),(0,r.jsx)(n.td,{children:"\u51fd\u6570\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"catalog_name"}),(0,r.jsx)(n.td,{children:"External catalog \u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"database_name"}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"table_name"}),(0,r.jsx)(n.td,{children:"\u8868\u540d"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"view_name"}),(0,r.jsx)(n.td,{children:"\u89c6\u56fe\u540d\u79f0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mv_name"}),(0,r.jsx)(n.td,{children:"\u7269\u5316\u89c6\u56fe\u540d\u79f0"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u64a4\u9500\u6743\u9650",children:"\u64a4\u9500\u6743\u9650"}),"\n",(0,r.jsxs)(n.p,{children:["\u64a4\u9500\u7528\u6237 ",(0,r.jsx)(n.code,{children:"jack"})," \u5bf9\u8868 ",(0,r.jsx)(n.code,{children:"sr_member"})," \u7684 SELECT \u6743\u9650\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE SELECT ON TABLE sr_member FROM USER 'jack@'172.10.1.10'';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u64a4\u9500\u89d2\u8272 ",(0,r.jsx)(n.code,{children:"test_role"})," \u5bf9\u8d44\u6e90 ",(0,r.jsx)(n.code,{children:"spark_resource"})," \u7684\u4f7f\u7528\u6743\u9650\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE USAGE ON RESOURCE 'spark_resource' FROM ROLE 'test_role';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u64a4\u9500\u89d2\u8272",children:"\u64a4\u9500\u89d2\u8272"}),"\n",(0,r.jsxs)(n.p,{children:["\u64a4\u9500\u5148\u524d\u6388\u4e88\u7528\u6237 ",(0,r.jsx)(n.code,{children:"jack"})," \u7684 ",(0,r.jsx)(n.code,{children:"example_role"})," \u89d2\u8272\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u64a4\u9500\u5148\u524d\u6388\u4e88\u89d2\u8272 ",(0,r.jsx)(n.code,{children:"test_role"})," \u7684 ",(0,r.jsx)(n.code,{children:"example_role"})," \u89d2\u8272\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"REVOKE example_role FROM ROLE 'test_role';\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(E,e)})):E(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>a});var r=s(67294);const l=r.createContext({});function a(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:a(e),r.createElement(l.Provider,{value:d},n)}}}]);