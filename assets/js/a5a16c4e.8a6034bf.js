"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[253],{68840:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(85893),a=n(11151);const r={displayed_sidebar:"English"},t="GRANT",l={id:"sql-reference/sql-statements/account-management/GRANT",title:"GRANT",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/account-management/GRANT.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/GRANT",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/GRANT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/GRANT.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP USER",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/DROP_USER"},next:{title:"REVOKE",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/REVOKE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"db_name[.tbl_name]",id:"db_nametbl_name",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote",a:"a"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"grant",children:"GRANT"}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"You can use the GRANT statement to grant specific privileges to a user or a role."}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Grant specific privileges on a database and a table to a user or a role. If the role that is granted these privileges does not exist, the system automatically creates the role when you execute this statement."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT privilege_list ON db_name[.tbl_name] TO {user_identity | ROLE 'role_name'}\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Grant specific privileges on a resource to a user or a role. If the role that is granted these privileges does not exist, the system automatically creates the role when you execute this statement."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT privilege_list ON RESOURCE 'resource_name' TO {user_identity | ROLE 'role_name'};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,i.jsxs)(s.p,{children:["The privileges that can be granted to a user or a role. If you want to grant multiple privileges at a time, separate the privileges with commas (",(0,i.jsx)(s.code,{children:","}),"). The following privileges are supported:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"NODE_PRIV"}),": the privilege to manage cluster nodes such as enabling nodes and disabling nodes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ADMIN_PRIV"}),": all privileges except ",(0,i.jsx)(s.code,{children:"NODE_PRIV"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GRANT_PRIV"}),": the privilege of performing operations such as creating users and roles, deleting users and roles, granting privileges, revoking privileges, and setting passwords for accounts."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SELECT_PRIV"}),": the read privilege on databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"LOAD_PRIV"}),": the privilege to load data into databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ALTER_PRIV"}),": the privilege to change schemas of databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"CREATE_PRIV"}),": the privilege to create databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"DROP_PRIV"}),": the privilege to delete databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"USAGE_PRIV"}),": the privilege to use resources."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The preceding privileges can be classified into the following three categories:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Node privilege: ",(0,i.jsx)(s.code,{children:"NODE_PRIV"})]}),"\n",(0,i.jsxs)(s.li,{children:["Database and table privilege: ",(0,i.jsx)(s.code,{children:"SELECT_PRIV"}),", ",(0,i.jsx)(s.code,{children:"LOAD_PRIV"}),", ",(0,i.jsx)(s.code,{children:"ALTER_PRIV"}),", ",(0,i.jsx)(s.code,{children:"CREATE_PRIV"}),", and ",(0,i.jsx)(s.code,{children:"DROP_PRIV"})]}),"\n",(0,i.jsxs)(s.li,{children:["Resource privilege: ",(0,i.jsx)(s.code,{children:"USAGE_PRIV"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"db_nametbl_name",children:"db_name[.tbl_name]"}),"\n",(0,i.jsx)(s.p,{children:"The database and table. This parameter supports the following three formats:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*.*"}),": indicates all databases and tables. If this format is specified, the global privilege is granted."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"db.*"}),": indicates a specific database and all tables in this database."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"db.tbl"}),": indicates a specific table in a specific database."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Note: When you use the ",(0,i.jsx)(s.code,{children:"db.*"})," or ",(0,i.jsx)(s.code,{children:"db.tbl"})," format, you can specify a database or a table that does not exist."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,i.jsx)(s.p,{children:"The resource name. This parameter supports the following two formats:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*"}),": indicates all the resources."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"resource"}),": indicates a specific resource."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Note: When you use the ",(0,i.jsx)(s.code,{children:"resource"})," format, you can specify a resource that does not exist."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,i.jsxs)(s.p,{children:["This parameter contains two parts: ",(0,i.jsx)(s.code,{children:"user_name"})," and ",(0,i.jsx)(s.code,{children:"host"}),". ",(0,i.jsx)(s.code,{children:"user_name"})," indicates the user name. ",(0,i.jsx)(s.code,{children:"host"})," indicates the IP address of the user. You can leave ",(0,i.jsx)(s.code,{children:"host"})," unspecified or you can specify a domain for ",(0,i.jsx)(s.code,{children:"host"}),". If you leave ",(0,i.jsx)(s.code,{children:"host"})," unspecified, ",(0,i.jsx)(s.code,{children:"host"})," defaults to ",(0,i.jsx)(s.code,{children:"%"}),", which means you can access StarRocks from any host. If you specify a domain for ",(0,i.jsx)(s.code,{children:"host"}),", it may take one minute for the privilege to take effect. The ",(0,i.jsx)(s.code,{children:"user_identity"})," parameter must be created by the ",(0,i.jsx)(s.a,{href:"/docs/2.3/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," statement."]}),"\n",(0,i.jsx)(s.h3,{id:"role_name",children:"role_name"}),"\n",(0,i.jsx)(s.p,{children:"The role name."}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["Example 1: Grant the read privilege on all databases and tables to user ",(0,i.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT SELECT_PRIV ON *.* TO 'jack'@'%';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Example 2: Grant the data loading privilege on ",(0,i.jsx)(s.code,{children:"db1"})," and all tables in this database to ",(0,i.jsx)(s.code,{children:"my_role"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Example 3: Grant the read privilege, schema change privilege, and data loading privilege on ",(0,i.jsx)(s.code,{children:"db1"})," and ",(0,i.jsx)(s.code,{children:"tbl1"})," to user ",(0,i.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Example 4: Grant the privilege to use all the resources to user ",(0,i.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Example 5: Grant the privilege to use ",(0,i.jsx)(s.code,{children:"spark_resource"})," to user ",(0,i.jsx)(s.code,{children:"jack"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Example 6: Grant the privilege to use ",(0,i.jsx)(s.code,{children:"spark_resource"})," to the ",(0,i.jsx)(s.code,{children:"my_role"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-SQL",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>r});var i=n(67294);const a=i.createContext({});function r(e){const s=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||t:r(e),i.createElement(a.Provider,{value:l},s)}}}]);