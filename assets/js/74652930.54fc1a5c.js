"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52613],{99637:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(85893),r=n(11151);const l={},t="User Privilege",o={id:"administration/User_privilege",title:"User Privilege",description:"Based on MySQL's permission management mechanism, StarRocks permission management system supports fine-grained permission control at table level, role-based access control, and whitelisting.",source:"@site/versioned_docs/version-2.5/administration/User_privilege.md",sourceDirName:"administration",slug:"/administration/User_privilege",permalink:"/doc/docs/2.5/administration/User_privilege",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/User_privilege.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u7ba1\u7406\u7528\u6237\u6743\u9650",permalink:"/doc/docs/2.5/category/\u7ba1\u7406\u7528\u6237\u6743\u9650"},next:{title:"Authentication methods",permalink:"/doc/docs/2.5/administration/Authentication"}},a={},c=[{value:"Terminology",id:"terminology",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Privilege Types",id:"privilege-types",level:2},{value:"Privilege Hierarchy",id:"privilege-hierarchy",level:2},{value:"Privilege Description",id:"privilege-description",level:2},{value:"Other notes",id:"other-notes",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Scenario 1 Permissions Assignment",id:"scenario-1-permissions-assignment",level:3},{value:"Scenario 2 Multiple lines of business",id:"scenario-2-multiple-lines-of-business",level:3},{value:"Scenario 3: Blacklisting",id:"scenario-3-blacklisting",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Reset password for root user",id:"reset-password-for-root-user",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",br:"br",h3:"h3",ol:"ol",strong:"strong",pre:"pre"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"user-privilege",children:"User Privilege"}),"\n",(0,i.jsx)(s.p,{children:"Based on MySQL's permission management mechanism, StarRocks permission management system supports fine-grained permission control at table level, role-based access control, and whitelisting."}),"\n",(0,i.jsx)(s.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"User Identity"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["In the privilege system, a user is identified as a User Identity. The user identity consists of two parts: username and userhost. ",(0,i.jsx)(s.code,{children:"user_identity"})," is presented as ",(0,i.jsx)(s.code,{children:"username@'userhost'"}),". The username is made of English characters. The userhost is the IP from which the user is linked."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"user_identity"})," can also be presented as ",(0,i.jsx)(s.code,{children:"username@['domain'],"})," where ",(0,i.jsx)(s.code,{children:"domain"})," is a domain name that can be resolved into a set of IPs by DNS. The final expression is a set of username@'userhost', so  we use username@'userhost' to represent it throughout this chapter."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Privilege"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Users can set privileges on nodes, databases, or tables. Different privileges represent different permissions to operate."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Role"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"StarRocks can create roles with customized names. A role is a collection of permissions. A newly created user can be given a role with corresponding permissions. Subsequent changes to the permissions apply to all users granted with the role."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"User Property"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["User properties are attached directly to a user, not to a user identity That is, both ",(0,i.jsx)(s.code,{children:"abc@'192.%'"})," and ",(0,i.jsx)(s.code,{children:"abc@['domain']"})," have the same set of user properties that belong to the user ",(0,i.jsx)(s.code,{children:"abc"}),", not ",(0,i.jsx)(s.code,{children:"abc@'192.%'"})," or ",(0,i.jsx)(s.code,{children:"abc@['domain']"}),". User attributes include, but are not limited to maximum number of user connections, import cluster configuration, and so on."]}),"\n",(0,i.jsx)(s.h2,{id:"supported-operations",children:"Supported operations"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create user: CREATE USER"}),"\n",(0,i.jsx)(s.li,{children:"Delete user: DROP USER"}),"\n",(0,i.jsx)(s.li,{children:"Authorization: GRANT"}),"\n",(0,i.jsx)(s.li,{children:"Revoke authority: REVOKE"}),"\n",(0,i.jsx)(s.li,{children:"Create Role: CREATE ROLE"}),"\n",(0,i.jsx)(s.li,{children:"Delete Role: DROP ROLE"}),"\n",(0,i.jsx)(s.li,{children:"View current user permissions: SHOW GRANTS"}),"\n",(0,i.jsx)(s.li,{children:"View all user permissions: SHOW ALL GRANTS"}),"\n",(0,i.jsx)(s.li,{children:"View created roles: SHOW ROLES"}),"\n",(0,i.jsx)(s.li,{children:"View user properties: SHOW PROPERTY"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"privilege-types",children:"Privilege Types"}),"\n",(0,i.jsx)(s.p,{children:"StarRocks currently supports the following types of  privileges."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Node_priv",(0,i.jsx)(s.br,{}),"\n","Privileges for Node changes. This allows you to add, delete, and disable FE, BE, and BROKER nodes. Currently, this privilege can only be granted to Root users."]}),"\n",(0,i.jsxs)(s.li,{children:["Grant_priv",(0,i.jsx)(s.br,{}),"\n","Privileges for privilege changes. This allows you to grant, revoke, and modify users/roles."]}),"\n",(0,i.jsxs)(s.li,{children:["Select_priv",(0,i.jsx)(s.br,{}),"\n","Read-only access to databases and tables."]}),"\n",(0,i.jsxs)(s.li,{children:["Load_priv",(0,i.jsx)(s.br,{}),"\n","Write access to databases and tables. This allows you to  Load, Insert, and Delete databases or tables."]}),"\n",(0,i.jsxs)(s.li,{children:["Alter_priv",(0,i.jsx)(s.br,{}),"\n","privileges to change databases and tables. This allows you to  rename, add/remove/change columns, add/remove partitions."]}),"\n",(0,i.jsxs)(s.li,{children:["Create_priv",(0,i.jsx)(s.br,{}),"\n","Privileges to create databases, tables, and views."]}),"\n",(0,i.jsxs)(s.li,{children:["Drop_priv",(0,i.jsx)(s.br,{}),"\n","Privileges to delete databases, tables, and views."]}),"\n",(0,i.jsxs)(s.li,{children:["Usage_priv",(0,i.jsx)(s.br,{}),"\n","Privileges to use resources."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"privilege-hierarchy",children:"Privilege Hierarchy"}),"\n",(0,i.jsx)(s.p,{children:"StarRocks classifies database and table privileges into three levels."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["GLOBAL LEVEL: Global privileges. This privilege is granted on ",(0,i.jsx)(s.code,{children:"."})," by the GRANT statement. The privilege granted applies to any table in any database."]}),"\n",(0,i.jsxs)(s.li,{children:["DATABASE LEVEL: Database level privileges. This  privilege is granted on ",(0,i.jsx)(s.code,{children:"db.*"})," by the ",(0,i.jsx)(s.code,{children:"GRANT"})," statement. The privilege granted applies to any table in a specific  database."]}),"\n",(0,i.jsxs)(s.li,{children:["TABLE LEVEL: Table level privileges. This privilege is granted on  ",(0,i.jsx)(s.code,{children:"db.tbl"})," by the ",(0,i.jsx)(s.code,{children:"GRANT"})," statement. The privilege granted applies to a specific table in a specific database."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"StarRocks classifies the resource privileges into two levels."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["GLOBAL LEVEL: Global privileges. This privilege is granted on ",(0,i.jsx)(s.code,{children:"*"})," by the ",(0,i.jsx)(s.code,{children:"GRANT"})," statement. The privilege granted applies to all resources."]}),"\n",(0,i.jsxs)(s.li,{children:["RESOURCE LEVEL: Resource level privileges. This privilege is granted  on ",(0,i.jsx)(s.code,{children:"resource_name"})," by the ",(0,i.jsx)(s.code,{children:"GRANT"})," statement. The privilege granted applies to a specific resource."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"privilege-description",children:"Privilege Description"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"ADMIN\\PRIV"})," and ",(0,i.jsx)(s.code,{children:"GRANT_PRIV"})," privileges are special because they both have the privilege to grant privileges."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"CREATE USER"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with ADMIN privilege or GRANT privilege at any level can create new users."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"DROP USER"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with ADMIN privilege can delete users."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"CREATE/DROP ROLE"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with  ADMIN privilege can create roles."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"GRANT/REVOKE"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with ADMIN privilege or GLOBAL level GRANT privilege can grant or revoke privileges to any user."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with DATABASE level GRANT privilege can grant or revoke privileges to any user for any table in a specific database."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with TABLE level GRANT privilege can grant or revoke privileges to any user for a specific table in a specific database."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"SET PASSWORD"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with ADMIN privilege or GLOBAL level GRANT privilege can set the user password."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Regular users can set passwords for their User Identity. Use the ",(0,i.jsx)(s.code,{children:"SELECT CURRENT_USER();"})," command to view User Identity."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Users with TABLE or DATABASE level GRANT privileges cannot set passwords for existing users, but can set passwords for new users."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"other-notes",children:"Other notes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"When StarRocks is initialized, the following users and roles are automatically created."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["operator role: This role has ",(0,i.jsx)(s.code,{children:"Node_priv"})," and ",(0,i.jsx)(s.code,{children:"Admin_priv"}),", i.e. all privileges. In a later upgrade, this role may be restricted to ",(0,i.jsx)(s.code,{children:"Node_priv"})," (privileges for node changes). This is to meet certain deployment requirements on the cloud."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["admin role: This role has ",(0,i.jsx)(s.code,{children:"Admin_priv"}),", i.e., all privileges except for the one for node changes."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["root@'%': Root user, allowed to log in from any node as ",(0,i.jsx)(s.code,{children:"operator"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["admin@'%': Admin user, allowed to log in from any node as ",(0,i.jsx)(s.code,{children:"admin"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"It is not supported to delete or change  default privileges set for roles or users."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Only one user can be granted the operator role. Multiple users can be granted the admin role."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Description of some potentially conflicting operations:"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Domain name and IP conflict"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Suppose the following user is created.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"CREATE USER abc@['domain'];"}),(0,i.jsx)(s.br,{}),"\n","and authorized:",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"GRANT SELECT_PRIV ON"})," ",(0,i.jsx)(s.code,{children:"*. *"})," ",(0,i.jsx)(s.code,{children:"TO abc@['domain']"}),(0,i.jsx)(s.br,{}),"\n","The domain is resolved to two IPs: ip1 and ip2. Suppose we then authorize abc@'ip1' separately:\n",(0,i.jsx)(s.code,{children:"GRANT ALTER_PRIV ON"})," ",(0,i.jsx)(s.code,{children:"*. *"})," ",(0,i.jsx)(s.code,{children:"TO abc@'ip1';"}),(0,i.jsx)(s.br,{}),"\n","Then the privileges of abc@'ip1' will be changed to ",(0,i.jsx)(s.code,{children:"SELECT_PRIV"}),", ",(0,i.jsx)(s.code,{children:"ALTER_PRIV"}),".Any future privileges changes to abc@['domain'] will not apply to abc@'ip1'."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Duplicate IP conflict"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Suppose the following user is created.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"CREATE USER abc@'%' IDENTIFIED BY \"12345\";"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"CREATE USER abc@'192.%' IDENTIFIED BY \"abcde\";"}),(0,i.jsx)(s.br,{}),"\n","'192.%' takes precedence over '%'. When the user requests to log in to StarRocks from 192.168.1.1 with the password '12345', the request will be denied."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Forgotten password",(0,i.jsx)(s.br,{}),"\n","If you forget your password, you can log in to StarRocks using the following command.",(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.code,{children:"mysql-client -h 127.0.0.1 -P query_port -uroot"}),(0,i.jsx)(s.br,{}),"\n","After logging in, you can reset the password with the ",(0,i.jsx)(s.code,{children:"SET PASSWORD"})," command."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Only root users can reset their password, other users cannot reset root user\u2019s  password."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The ADMIN_PRIV privilege can only be granted or revoked at the GLOBAL level."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"GRANT_PRIV"})," at GLOBAL level is similar to",(0,i.jsx)(s.code,{children:"ADMIN_PRIV"}),".",(0,i.jsx)(s.code,{children:"GRANT_PRIV"})," at GLOBAL level has the privilege to grant arbitrary privileges, so please use it carefully."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"current_user() and user()"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Users can use ",(0,i.jsx)(s.code,{children:"SELECT current_user();"})," and ",(0,i.jsx)(s.code,{children:"SELECT user();"})," to see ",(0,i.jsx)(s.code,{children:"current_user"})," and ",(0,i.jsx)(s.code,{children:"user"})," respectively. ",(0,i.jsx)(s.code,{children:"current_user"})," indicates the current user\u2019s identity under the authentication system, and ",(0,i.jsx)(s.code,{children:"user"})," is the actual ",(0,i.jsx)(s.code,{children:"user_identity"})," of the user."]}),"\n",(0,i.jsxs)(s.p,{children:["For example, suppose user1@'192.%' is created, and then user1 logs into the system from 192.168.10.1. In this case, ",(0,i.jsx)(s.code,{children:"current_user"})," is user1@'192.%', and ",(0,i.jsx)(s.code,{children:"user"})," is user1@'192.168.10.1'."]}),"\n",(0,i.jsxs)(s.p,{children:["All privileges are granted to ",(0,i.jsx)(s.code,{children:"current_user"}),", and the real user has all the privileges of the corresponding ",(0,i.jsx)(s.code,{children:"current_user"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(s.p,{children:"Here are some scenarios for using the StarRocks permission management system."}),"\n",(0,i.jsx)(s.h3,{id:"scenario-1-permissions-assignment",children:"Scenario 1 Permissions Assignment"}),"\n",(0,i.jsx)(s.p,{children:"StarRocks users are divided into Administrator (Admin), Development Engineer (RD) and User (Client). The administrators have all the privileges and are mainly responsible for cluster construction, node management, and so on. The development engineers are responsible for business modeling, including building databases and tables, importing and modifying data,and so on. Users access databases and tables to get data."}),"\n",(0,i.jsx)(s.p,{children:"In this scenario, Admins are granted ADMIN privileges or GRANT privileges. RDs are granted privileges to CREATE, DROP, ALTER, LOAD, and SELECT any or specific database tables. Clients are granted privileges to SELECT any or specific database tables. When there are multiple users, it is also possible to simplify the authorization by creating different roles."}),"\n",(0,i.jsx)(s.h3,{id:"scenario-2-multiple-lines-of-business",children:"Scenario 2 Multiple lines of business"}),"\n",(0,i.jsx)(s.p,{children:"There may be multiple use cases within a cluster, each of which may use one or more databases. Each use case needs to manage its own users. In this scenario, an ADMIN can grant one user with DATABASE level GRANT privilege for each database. This user can only authorize users for this specific database."}),"\n",(0,i.jsx)(s.h3,{id:"scenario-3-blacklisting",children:"Scenario 3: Blacklisting"}),"\n",(0,i.jsx)(s.p,{children:"StarRocks does not support blacklisting (only whitelisting is supported), but we can emulate blacklisting in some way. Suppose that the user named user@'192.%' is created first, indicating that the user f is allowed to log in from 192.*. At this point, if you want to prevent the user from logging in from 192.168.10.1, you can create another user abc@'192.168.10.1' and set a new password. Because 192.168.10.1 has a higher priority than 192.%, the user will no longer be able to log in from 192.168.10.1 with the old password."}),"\n",(0,i.jsx)(s.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(s.h2,{id:"reset-password-for-root-user",children:"Reset password for root user"}),"\n",(0,i.jsxs)(s.p,{children:["If you have lost the password for the user ",(0,i.jsx)(s.code,{children:"root"}),", you can reset it by following these procedures:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Add the following configuration item to the configuration files ",(0,i.jsx)(s.strong,{children:"fe/conf/fe.conf"})," of ",(0,i.jsx)(s.strong,{children:"all FE nodes"})," to disable authentication:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-plain",children:"enable_auth_check = false\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Restart ",(0,i.jsx)(s.strong,{children:"all FE nodes"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"./fe/bin/stop_fe.sh\n./fe/bin/start_fe.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Launch a MySQL client, and connect to StarRocks using the user ",(0,i.jsx)(s.code,{children:"root"})," without the password."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"mysql -h <fe_ip> -P<fe_query_port> -uroot\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Reset the password for the user ",(0,i.jsx)(s.code,{children:"root"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SET PASSWORD for root = PASSWORD('xxxxxx');\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Re-enable authentication by configuring the configuration item ",(0,i.jsx)(s.code,{children:"enable_auth_check"})," to ",(0,i.jsx)(s.code,{children:"true"})," in the configuration files ",(0,i.jsx)(s.strong,{children:"fe/conf/fe.conf"})," of ",(0,i.jsx)(s.strong,{children:"all FE nodes"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-plain",children:"enable_auth_check = true\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Restart ",(0,i.jsx)(s.strong,{children:"all FE nodes"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"./fe/bin/stop_fe.sh\n./fe/bin/start_fe.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Launch a MySQL client, and connect to StarRocks using the user ",(0,i.jsx)(s.code,{children:"root"})," and the new password to verify whether the password is reset successfully."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"mysql -h <fe_ip> -P<fe_query_port> -uroot -p<xxxxxx>\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>l});var i=n(67294);const r=i.createContext({});function l(e){const s=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||t:l(e),i.createElement(r.Provider,{value:o},s)}}}]);