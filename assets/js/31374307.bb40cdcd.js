"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56704],{79441:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),t=n(11151);const s={displayed_sidebar:"documentation"},l="GRANT",i={id:"sql-reference/sql-statements/account-management/GRANT",title:"GRANT",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/GRANT.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/GRANT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/GRANT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/account-management/GRANT.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"EXECUTE AS",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/EXECUTE_AS"},next:{title:"REVOKE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/account-management/REVOKE"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"db_name[.tbl_name]",id:"db_nametbl_name",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"Examples",id:"examples",level:2},{value:"Best practices - Customize roles based on scenarios",id:"best-practices---customize-roles-based-on-scenarios",level:2},{value:"Grant global read-only privileges on StarRocks tables",id:"grant-global-read-only-privileges-on-starrocks-tables",level:3},{value:"Grant global write privileges on StarRocks tables",id:"grant-global-write-privileges-on-starrocks-tables",level:3},{value:"Grant read-only privileges on a specific external catalog",id:"grant-read-only-privileges-on-a-specific-external-catalog",level:3},{value:"Grant write-only privileges on a specific external catalog",id:"grant-write-only-privileges-on-a-specific-external-catalog",level:3},{value:"Grant privileges to perform backup and restore operations on global, database, table, and partition levels",id:"grant-privileges-to-perform-backup-and-restore-operations-on-global-database-table-and-partition-levels",level:3}];function d(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"grant",children:"GRANT"}),"\n",(0,r.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(a.p,{children:"You can use the GRANT statement to perform the following operations:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Grant specific privileges to a user or a role."}),"\n",(0,r.jsx)(a.li,{children:"Grant a role to a user. This feature is supported only in StarRock 2.4 and later versions."}),"\n",(0,r.jsxs)(a.li,{children:["Grant user ",(0,r.jsx)(a.code,{children:"a"})," the privilege to impersonate user ",(0,r.jsx)(a.code,{children:"b"}),". Then user ",(0,r.jsx)(a.code,{children:"a"})," can perform operations as user ",(0,r.jsx)(a.code,{children:"b"})," by using the ",(0,r.jsx)(a.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/account-management/EXECUTE_AS",children:"EXECUTE AS"})," statement. This feature is supported only in StarRock 2.4 and later versions."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant specific privileges on a database and a table to a user or a role. If the role that is granted these privileges does not exist, the system automatically creates the role when you execute this statement."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT privilege_list ON db_name[.tbl_name] TO {user_identity | ROLE 'role_name'}\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant specific privileges on a resource to a user or a role. If the role that is granted these privileges does not exist, the system automatically creates the role when you execute this statement."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT privilege_list ON RESOURCE 'resource_name' TO {user_identity | ROLE 'role_name'};\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Grant user ",(0,r.jsx)(a.code,{children:"a"})," the privilege to impersonate user ",(0,r.jsx)(a.code,{children:"b"})," to perform operations."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT IMPERSONATE ON user_identity_b TO user_identity_a;\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant a role to a user. The role to be granted must exist."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT 'role_name' TO user_identity;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(a.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,r.jsxs)(a.p,{children:["The privileges that can be granted to a user or a role. If you want to grant multiple privileges at a time, separate the privileges with commas (",(0,r.jsx)(a.code,{children:","}),"). The following privileges are supported:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"NODE_PRIV"}),": the privilege to manage cluster nodes such as enabling nodes and disabling nodes."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"ADMIN_PRIV"}),": all privileges except ",(0,r.jsx)(a.code,{children:"NODE_PRIV"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"GRANT_PRIV"}),": the privilege of performing operations such as creating users and roles, deleting users and roles, granting privileges, revoking privileges, and setting passwords for accounts."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"SELECT_PRIV"}),": the read privilege on databases and tables."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"LOAD_PRIV"}),": the privilege to load data into databases and tables."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"ALTER_PRIV"}),": the privilege to change schemas of databases and tables."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"CREATE_PRIV"}),": the privilege to create databases and tables."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"DROP_PRIV"}),": the privilege to delete databases and tables."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"USAGE_PRIV"}),": the privilege to use resources."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"The preceding privileges can be classified into the following three categories:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Node privilege: ",(0,r.jsx)(a.code,{children:"NODE_PRIV"})]}),"\n",(0,r.jsxs)(a.li,{children:["Database and table privilege: ",(0,r.jsx)(a.code,{children:"SELECT_PRIV"}),", ",(0,r.jsx)(a.code,{children:"LOAD_PRIV"}),", ",(0,r.jsx)(a.code,{children:"ALTER_PRIV"}),", ",(0,r.jsx)(a.code,{children:"CREATE_PRIV"}),", and ",(0,r.jsx)(a.code,{children:"DROP_PRIV"})]}),"\n",(0,r.jsxs)(a.li,{children:["Resource privilege: ",(0,r.jsx)(a.code,{children:"USAGE_PRIV"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"db_nametbl_name",children:"db_name[.tbl_name]"}),"\n",(0,r.jsx)(a.p,{children:"The database and table. This parameter supports the following three formats:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"*.*"}),": indicates all databases and tables. If this format is specified, the global privilege is granted."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"db.*"}),": indicates a specific database and all tables in this database."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"db.tbl"}),": indicates a specific table in a specific database."]}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["Note: When you use the ",(0,r.jsx)(a.code,{children:"db.*"})," or ",(0,r.jsx)(a.code,{children:"db.tbl"})," format, you can specify a database or a table that does not exist."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,r.jsx)(a.p,{children:"The resource name. This parameter supports the following two formats:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"*"}),": indicates all the resources."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"resource"}),": indicates a specific resource."]}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsxs)(a.p,{children:["Note: When you use the ",(0,r.jsx)(a.code,{children:"resource"})," format, you can specify a resource that does not exist."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,r.jsxs)(a.p,{children:["This parameter contains two parts: ",(0,r.jsx)(a.code,{children:"user_name"})," and ",(0,r.jsx)(a.code,{children:"host"}),". ",(0,r.jsx)(a.code,{children:"user_name"})," indicates the user name. ",(0,r.jsx)(a.code,{children:"host"})," indicates the IP address of the user. You can leave ",(0,r.jsx)(a.code,{children:"host"})," unspecified or you can specify a domain for ",(0,r.jsx)(a.code,{children:"host"}),". If you leave ",(0,r.jsx)(a.code,{children:"host"})," unspecified, ",(0,r.jsx)(a.code,{children:"host"})," defaults to ",(0,r.jsx)(a.code,{children:"%"}),", which means you can access StarRocks from any host. If you specify a domain for ",(0,r.jsx)(a.code,{children:"host"}),", it may take one minute for the privilege to take effect. The ",(0,r.jsx)(a.code,{children:"user_identity"})," parameter must be created by the CREATE USER statement."]}),"\n",(0,r.jsx)(a.h3,{id:"role_name",children:"role_name"}),"\n",(0,r.jsx)(a.p,{children:"The role name."}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(a.p,{children:["Example 1: Grant the read privilege on all databases and tables to user ",(0,r.jsx)(a.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT SELECT_PRIV ON *.* TO 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 2: Grant the data loading privilege on ",(0,r.jsx)(a.code,{children:"db1"})," and all tables in this database to ",(0,r.jsx)(a.code,{children:"my_role"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 3: Grant the read privilege, schema change privilege, and data loading privilege on ",(0,r.jsx)(a.code,{children:"db1"})," and ",(0,r.jsx)(a.code,{children:"tbl1"})," to user ",(0,r.jsx)(a.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 4: Grant the privilege to use all the resources to user ",(0,r.jsx)(a.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 5: Grant the privilege to use spark_resource to user ",(0,r.jsx)(a.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 6: Grant the privilege to use spark_resource to the ",(0,r.jsx)(a.code,{children:"my_role"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 7: Grant ",(0,r.jsx)(a.code,{children:"my_role"})," to user ",(0,r.jsx)(a.code,{children:"jack"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT 'my_role' TO 'jack'@'%';\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Example 8: Grant user ",(0,r.jsx)(a.code,{children:"jack"})," the privilege to impersonate user ",(0,r.jsx)(a.code,{children:"rose"})," to perform operations."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"GRANT IMPERSONATE ON 'rose'@'%' TO 'jack'@'%';\n"})}),"\n",(0,r.jsx)(a.h2,{id:"best-practices---customize-roles-based-on-scenarios",children:"Best practices - Customize roles based on scenarios"}),"\n",(0,r.jsx)(a.p,{children:"We recommend you customize roles to manage privileges and users. The following examples classify a few combinations of privileges for some common scenarios."}),"\n",(0,r.jsx)(a.h3,{id:"grant-global-read-only-privileges-on-starrocks-tables",children:"Grant global read-only privileges on StarRocks tables"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE read_only;\n-- Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE read_only;\n-- Grant the privilege to query all tables to the role.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_only;\n-- Grant the privilege to query all views to the role.\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_only;\n-- Grant the privilege to query all materialized views and the privilege to accelerate queries with them to the role.\nGRANT SELECT ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE read_only;\n"})}),"\n",(0,r.jsx)(a.p,{children:"And you can further grant the privilege to use UDFs in queries:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Grant the USAGE privilege on all database-level UDF to the role.\nGRANT USAGE ON ALL FUNCTIONS IN ALL DATABASES TO ROLE read_only;\n-- Grant the USAGE privilege on global UDF to the role.\nGRANT USAGE ON ALL GLOBAL FUNCTIONS TO ROLE read_only;\n"})}),"\n",(0,r.jsx)(a.h3,{id:"grant-global-write-privileges-on-starrocks-tables",children:"Grant global write privileges on StarRocks tables"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE write_only;\n-- Grant the USAGE privilege on all catalogs to the role.\nGRANT USAGE ON ALL CATALOGS TO ROLE write_only;\n-- Grant the INSERT and UPDATE privileges on all tables to the role.\nGRANT INSERT, UPDATE ON ALL TABLES IN ALL DATABASES TO ROLE write_only;\n-- Grant the REFRESH privilege on all materialized views to the role.\nGRANT REFRESH ON ALL MATERIALIZED VIEWS IN ALL DATABASES TO ROLE write_only;\n"})}),"\n",(0,r.jsx)(a.h3,{id:"grant-read-only-privileges-on-a-specific-external-catalog",children:"Grant read-only privileges on a specific external catalog"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE read_catalog_only;\n-- Switch to the corresponding catalog.\nSET CATALOG hive_catalog;\n-- Grant the privileges to query all tables and all views in all databases.\nGRANT SELECT ON ALL TABLES IN ALL DATABASES TO ROLE read_catalog_only;\nGRANT SELECT ON ALL VIEWS IN ALL DATABASES TO ROLE read_catalog_only;\n"})}),"\n",(0,r.jsx)(a.p,{children:"Note: You can query only Hive table views (since v3.1)."}),"\n",(0,r.jsx)(a.h3,{id:"grant-write-only-privileges-on-a-specific-external-catalog",children:"Grant write-only privileges on a specific external catalog"}),"\n",(0,r.jsx)(a.p,{children:"You can only write data into Iceberg tables (since v3.1)."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE write_catalog_only;\n-- Switch to the corresponding catalog.\nSET CATALOG iceberg_catalog;\n-- Grant the privilege to write data into Iceberg tables.\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE write_catalog_only;\n"})}),"\n",(0,r.jsx)(a.h3,{id:"grant-privileges-to-perform-backup-and-restore-operations-on-global-database-table-and-partition-levels",children:"Grant privileges to perform backup and restore operations on global, database, table, and partition levels"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant privileges to perform global backup and restore operations:"}),"\n",(0,r.jsx)(a.p,{children:"The privileges to perform global backup and restore operations allow the role to back up and restore any database, table, or partition. It requires the REPOSITORY privilege on the SYSTEM level, the privileges to create databases in the default catalog, to create tables in any database, and to load and export data on any table."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover;\n-- Grant the privilege to create databases in the default catalog.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover;\n-- Grant the privilege to create tables in any database.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover;\n-- Grant the privilege to load and export data on any table.\nGRANT INSERT, EXPORT ON ALL TABLES IN ALL DATABASES TO ROLE recover;\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant the privileges to perform database-level backup and restore operations:"}),"\n",(0,r.jsx)(a.p,{children:"The privileges to perform database-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create databases in the default catalog, the privilege to create tables in any database, the privilege to load data into any table, and the privilege export data from any table in the database to be backed up."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_db;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_db;\n-- Grant the privilege to create databases.\nGRANT CREATE DATABASE ON CATALOG default_catalog TO ROLE recover_db;\n-- Grant the privilege to create tables.\nGRANT CREATE TABLE ON ALL DATABASE TO ROLE recover_db;\n-- Grant the privilege to load data into any table.\nGRANT INSERT ON ALL TABLES IN ALL DATABASES TO ROLE recover_db;\n-- Grant the privilege to export data from any table in the database to be backed up.\nGRANT EXPORT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant the privileges to perform table-level backup and restore operations:"}),"\n",(0,r.jsx)(a.p,{children:"The privileges to perform table-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, the privilege to create tables in corresponding databases, the privilege to load data into any table in the database, and the privilege to export data from the table to be backed up."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_tbl;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_tbl;\n-- Grant the privilege to create tables in corresponding databases.\nGRANT CREATE TABLE ON DATABASE <db_name> TO ROLE recover_tbl;\n-- Grant the privilege to load data into any table in a database.\nGRANT INSERT ON ALL TABLES IN DATABASE <db_name> TO ROLE recover_db;\n-- Grant the privilege to export data from the table you want to back up.\nGRANT EXPORT ON TABLE <table_name> TO ROLE recover_tbl;     \n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Grant the privileges to perform partition-level backup and restore operations:"}),"\n",(0,r.jsx)(a.p,{children:"The privileges to perform partition-level backup and restore operations require the REPOSITORY privilege on the SYSTEM level, and the privilege to load and export data on the corresponding table."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:"-- Create a role.\nCREATE ROLE recover_par;\n-- Grant the REPOSITORY privilege on the SYSTEM level.\nGRANT REPOSITORY ON SYSTEM TO ROLE recover_par;\n-- Grant the privilege to load and export data on the corresponding table.\nGRANT INSERT, EXPORT ON TABLE <table_name> TO ROLE recover_par;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["For the best practices of multi-service access control, see ",(0,r.jsx)(a.a,{href:"/doc/docs/2.5/administration/User_privilege#multi-service-access-control",children:"Multi-service access control"}),"."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>i,ah:()=>s});var r=n(67294);const t=r.createContext({});function s(e){const a=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const l={};function i({components:e,children:a,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||l:s(e),r.createElement(t.Provider,{value:i},a)}}}]);