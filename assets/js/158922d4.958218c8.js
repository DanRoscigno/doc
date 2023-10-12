"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6234],{92385:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>E,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(85893),l=r(11151);const s={displayed_sidebar:"documentation"},t="GRANT",o={id:"sql-reference/sql-statements/account-management/GRANT",title:"GRANT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/account-management/GRANT.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/GRANT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/GRANT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/GRANT.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"EXECUTE AS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/EXECUTE_AS"},next:{title:"REVOKE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/account-management/REVOKE"}},i={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Grant privileges to roles or users",id:"grant-privileges-to-roles-or-users",level:3},{value:"System",id:"system",level:4},{value:"Resource group",id:"resource-group",level:4},{value:"Resource",id:"resource",level:4},{value:"Global UDF",id:"global-udf",level:4},{value:"Internal catalog",id:"internal-catalog",level:4},{value:"External catalog",id:"external-catalog",level:4},{value:"Database",id:"database",level:4},{value:"Table",id:"table",level:4},{value:"View",id:"view",level:4},{value:"Materialized view",id:"materialized-view",level:4},{value:"Function",id:"function",level:4},{value:"User",id:"user",level:4},{value:"Grant roles to roles or users",id:"grant-roles-to-roles-or-users",level:3},{value:"Examples",id:"examples",level:2},{value:"Best practices - Customize roles based on scenarios",id:"best-practices---customize-roles-based-on-scenarios",level:2},{value:"Grant global read-only privileges on StarRocks tables",id:"grant-global-read-only-privileges-on-starrocks-tables",level:3},{value:"Grant global write privileges on StarRocks tables",id:"grant-global-write-privileges-on-starrocks-tables",level:3},{value:"Grant read-only privileges on a specific external catalog",id:"grant-read-only-privileges-on-a-specific-external-catalog",level:3},{value:"Grant privileges to perform backup and restore operations on global, database, table, and partition levels",id:"grant-privileges-to-perform-backup-and-restore-operations-on-global-database-table-and-partition-levels",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",code:"code",h3:"h3",h4:"h4",pre:"pre",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"grant",children:"GRANT"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Grants one or more privileges on specific objects to a user or a role."}),"\n",(0,a.jsx)(n.p,{children:"Grants roles to users or other roles."}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the privileges that can be granted, see ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/administration/privilege_item",children:"Privilege items"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["After a GRANT operation is performed, you can run ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})," to view detailed privilege information or run ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})," to revoke a privilege or role."]}),"\n",(0,a.jsxs)(n.p,{children:["Before a GRANT operation is performed, make sure that the related user or role has been created. For more information, see ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," and ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(n.p,{children:["Only users with the ",(0,a.jsx)(n.code,{children:"user_admin"})," role can grant any privilege to other users and roles.\nOther users can only grant privileges with the WITH GRANT OPTION keyword to other users and roles."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.h3,{id:"grant-privileges-to-roles-or-users",children:"Grant privileges to roles or users"}),"\n",(0,a.jsx)(n.h4,{id:"system",children:"System"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { CREATE RESOURCE GROUP | CREATE RESOURCE | CREATE EXTERNAL CATALOG | REPOSITORY | BLACKLIST | FILE | OPERATE } \n    ON SYSTEM\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"resource-group",children:"Resource group"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE GROUP <resource_group_name> [, <resource_group_name >,...] \uff5c ALL RESOURCE GROUPS} \n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"resource",children:"Resource"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | ALTER | DROP | ALL [PRIVILEGES] } \n    ON { RESOURCE <resource_name> [, < resource_name >,...] \uff5c ALL RESOURCES} \n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"global-udf",children:"Global UDF"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { GLOBAL FUNCTION <function_name> [, < function_name >,...]    \n       | ALL GLOBAL FUNCTIONS }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"internal-catalog",children:"Internal catalog"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | CREATE DATABASE | ALL [PRIVILEGES]} \n    ON CATALOG default_catalog\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"external-catalog",children:"External catalog"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n   { USAGE | DROP | ALL [PRIVILEGES] } \n   ON { CATALOG <catalog_name> [, <catalog_name>,...] | ALL CATALOGS}\n   TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h4,{id:"database",children:"Database"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | CREATE TABLE | CREATE VIEW | CREATE FUNCTION | CREATE MATERIALIZED VIEW | ALL [PRIVILEGES] } \n    ON { DATABASE <db_name> [, <db_name>,...] | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"table",children:"Table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { ALTER | DROP | SELECT | INSERT | EXPORT | UPDATE | DELETE | ALL [PRIVILEGES]} \n    ON { TABLE <table_name> [, < table_name >,...]\n       | ALL TABLES} IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"<db_name>.<table_name>"})," to represent a table."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON TABLE <db_name>.<table_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"view",children:"View"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT  \n    { ALTER | DROP | SELECT | ALL [PRIVILEGES]} \n    ON { VIEW <view_name> [, < view_name >,...]\n       \uff5c ALL VIEWS} IN \n           {  DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"<db_name>.<view_name>"})," to represent a view."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON VIEW <db_name>.<view_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"materialized-view",children:"Materialized view"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { SELECT | ALTER | REFRESH | DROP | ALL [PRIVILEGES]} \n    ON { MATERIALIZED VIEW <mv_name> [, < mv_name >,...]\n       \uff5c ALL MATERIALIZED VIEWS} IN \n           { DATABASE <db_name> | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"<db_name>.<mv_name>"})," to represent an mv."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON MATERIALIZED_VIEW <db_name>.<mv_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"function",children:"Function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT\n    { USAGE | DROP | ALL [PRIVILEGES]} \n    ON { FUNCTION <function_name> [, < function_name >,...]\n       \uff5c ALL FUNCTIONS} IN \n           {  DATABASE <db_name>  | ALL DATABASES }\n    TO { ROLE | USER} {<role_name>|<user_identity>} [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"You must first run SET CATALOG before you run this command."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You can also use ",(0,a.jsx)(n.code,{children:"<db_name>.<function_name>"})," to represent a function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT <priv> ON FUNCTION <db_name>.<function_name> TO {ROLE <role_name> | USER <user_name>}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"user",children:"User"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT IMPERSONATE\nON USER <user_identity>\nTO USER <user_identity> [ WITH GRANT OPTION ]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"grant-roles-to-roles-or-users",children:"Grant roles to roles or users"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT <role_name> [,<role_name>, ...] TO ROLE <role_name>;\nGRANT <role_name> [,<role_name>, ...] TO USER <user_identity>;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Example 1: Grant the privilege to read data from all tables in all databases to user ",(0,a.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON *.* TO 'jack'@'%';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 2: Grant the privilege to load data into all tables of database ",(0,a.jsx)(n.code,{children:"db1"})," to role ",(0,a.jsx)(n.code,{children:"my_role"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT INSERT ON db1.* TO ROLE 'my_role';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 3: Grant the privileges to read, update, and load data into table ",(0,a.jsx)(n.code,{children:"tbl1"})," of database ",(0,a.jsx)(n.code,{children:"db1"})," to user ",(0,a.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT,ALTER,INSERT ON db1.tbl1 TO 'jack'@'192.8.%';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 4: Grant the privilege to use all the resources to user ",(0,a.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE * TO 'jack'@'%';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 5: Grant the privilege to use resource ",(0,a.jsx)(n.code,{children:"spark_resource"})," to user ",(0,a.jsx)(n.code,{children:"jack"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 6: Grant the privilege to use resource ",(0,a.jsx)(n.code,{children:"spark_resource"})," to role ",(0,a.jsx)(n.code,{children:"my_role"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT USAGE ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 7: Grant the privilege to read data from table ",(0,a.jsx)(n.code,{children:"sr_member"})," to user ",(0,a.jsx)(n.code,{children:"jack"})," and allow user ",(0,a.jsx)(n.code,{children:"jack"})," to grant this privilege to other users or roles (by specifying WITH GRANT OPTION)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT SELECT ON TABLE sr_member TO USER jack@'172.10.1.10' WITH GRANT OPTION;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 8: Grant system-defined roles ",(0,a.jsx)(n.code,{children:"db_admin"}),", ",(0,a.jsx)(n.code,{children:"user_admin"}),", and ",(0,a.jsx)(n.code,{children:"cluster_admin"})," to user ",(0,a.jsx)(n.code,{children:"user_platform"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT db_admin, user_admin, cluster_admin TO USER user_platform;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 9: Allow user ",(0,a.jsx)(n.code,{children:"jack"})," to perform operations as user ",(0,a.jsx)(n.code,{children:"rose"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"GRANT IMPERSONATE ON 'rose'@'%' TO 'jack'@'%';\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practices---customize-roles-based-on-scenarios",children:"Best practices - Customize roles based on scenarios"}),"\n",(0,a.jsx)(n.p,{children:"We recommend you customize roles to manage privileges and users. The following examples classify a few combinations of privileges for some common scenarios."}),"\n",(0,a.jsx)(n.h3,{id:"grant-global-read-only-privileges-on-starrocks-tables",children:"Grant global read-only privileges on StarRocks tables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE read_only;\n-- Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE read_only;\n-- Grant the privilege to query all tables to the role.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_only;\n-- Grant the privilege to query all views to the role.\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_only;\n-- Grant the privilege to query all materialized views and the privilege to accelerate queries with them to the role.\nGRANT SELECT ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE read_only;\n"})}),"\n",(0,a.jsx)(n.p,{children:"And you can further grant the privilege to use UDFs in queries:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Grant the USAGE privilege on all database-level UDF to the role.\nGRANT USAGE ON ALL FUNCTIONS IN ALL DATABASES TO ROLE read_only;\n-- Grant the USAGE privilege on global UDF to the role.\nGRANT USAGE ON ALL GLOBAL FUNCTIONS TO ROLE read_only;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"grant-global-write-privileges-on-starrocks-tables",children:"Grant global write privileges on StarRocks tables"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE write_only;\n-- Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE write_only;\n-- Grant the INSERT and UPDATE privileges on all tables to the role.\nGRANT INSERT, UPDATE ON ALL TABLES IN ALL DATABASES TO ROLE write_only;\n-- Grant the REFRESH privilege on all materialized views to the role.\nGRANT REFRESH ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE write_only;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"grant-read-only-privileges-on-a-specific-external-catalog",children:"Grant read-only privileges on a specific external catalog"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE read_catalog_only;\n-- Grant the USAGE privilege on the destination catalog to the role.\nGRANT USAGE ON CATALOG hive_catalog TO ROLE read_catalog_only;\n-- Switch to the corresponding catalog.\nSET CATALOG hive_catalog;\n-- Grant the privileges to query all tables and all views in all databases.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_catalog_only;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"grant-privileges-to-perform-backup-and-restore-operations-on-global-database-table-and-partition-levels",children:"Grant privileges to perform backup and restore operations on global, database, table, and partition levels"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Grant privileges to perform global backup and restore operations:"}),"\n",(0,a.jsx)(n.p,{children:"The privileges to perform global backup and restore operations allow the role to back up and restore any database, table, or partition. It requires the REPOSITORY privilege on the SYSTEM level, the privileges to create databases in the default catalog, to create tables in any database, and to load and export data on any table."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover;\n-- Grant the privilege to create databases in the default catalog.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover;\n-- Grant the privilege to create tables in any database.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover;\n-- Grant the privilege to load and export data on any table.\nGRANT INSERT, EXPORT ON ALL TABLES IN ALL DATABASES TO ROLE recover;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Grant the privileges to perform database-level backup and restore operations:"}),"\n",(0,a.jsx)(n.p,{children:"The privileges to perform database-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create databases in the default catalog, the privilege to create tables in any database, the privilege to load data into any table, and the privilege export data from any table in the database to be backed up."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_db;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\n-- Grant the privilege to create databases.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover_db;\n-- Grant the privilege to create tables.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover_db;\n-- Grant the privilege to load data into any table.\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE recover_db;\n-- Grant the privilege to export data from any table in the database to be backed up.\nGRANT EXPORT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Grant the privileges to perform table-level backup and restore operations:"}),"\n",(0,a.jsx)(n.p,{children:"The privileges to perform table-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create tables in corresponding databases, the privilege to load data into any table in the database, and the privilege to export data from the table to be backed up."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_tbl;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_tbl;\n-- Grant the privilege to create tables in corresponding databases.\nGRANT CREATE TABLE ON DATABASE <db_name> TO ROLE recover_tbl;\n-- Grant the privilege to load data into any table in a database.\nGRANT INSERT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n-- Grant the privilege to export data from the table you want to back up.\nGRANT EXPORT ON TABLE <table_name> TO ROLE recover_tbl;     \n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Grant the privileges to perform partition-level backup and restore operations:"}),"\n",(0,a.jsx)(n.p,{children:"The privileges to perform partition-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, and the privilege to load and export data on the corresponding table."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_par;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_par;\n-- Grant the privilege to load and export data on the corresponding table.\nGRANT INSERT, EXPORT ON TABLE <table_name> TO ROLE recover_par;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For the best practices of multi-service access control, see ",(0,a.jsx)(n.a,{href:"/doc/docs/3.0/administration/User_privilege#multi-service-access-control",children:"Multi-service access control"}),"."]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>s});var a=r(67294);const l=a.createContext({});function s(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||t:s(e),a.createElement(l.Provider,{value:o},n)}}}]);