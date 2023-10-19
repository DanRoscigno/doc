"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95921],{79391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=a(85893),n=a(11151);const i={displayed_sidebar:"English"},r="Privilege FAQ",l={id:"administration/privilege_faq",title:"Privilege FAQ",description:'Why is the error message "no permission" still reported even after the required role has been assigned to a user?',source:"@site/versioned_docs/version-3.1/administration/privilege_faq.md",sourceDirName:"administration",slug:"/administration/privilege_faq",permalink:"/docs/administration/privilege_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/privilege_faq.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Manage user privileges",permalink:"/docs/administration/User_privilege"},next:{title:"Authentication methods",permalink:"/docs/administration/Authentication"}},o={},d=[{value:"Why is the error message &quot;no permission&quot; still reported even after the required role has been assigned to a user?",id:"why-is-the-error-message-no-permission-still-reported-even-after-the-required-role-has-been-assigned-to-a-user",level:2},{value:"I have granted a user the privilege on all tables in a database (<code>GRANT ALL ON ALL TABLES IN DATABASE &lt;db_name&gt; TO USER &lt;user_identity&gt;;</code>), but the user still cannot create tables in the database. Why?",id:"i-have-granted-a-user-the-privilege-on-all-tables-in-a-database-grant-all-on-all-tables-in-database-db_name-to-user-user_identity-but-the-user-still-cannot-create-tables-in-the-database-why",level:2},{value:"I have granted a user all the privileges on a database using <code>GRANT ALL ON DATABASE &lt;db_name&gt; TO USER &lt;user_identity&gt;;</code>, but nothing is returned when the user runs <code>SHOW TABLES;</code> in this database. Why?",id:"i-have-granted-a-user-all-the-privileges-on-a-database-using-grant-all-on-database-db_name-to-user-user_identity-but-nothing-is-returned-when-the-user-runs-show-tables-in-this-database-why",level:2}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"privilege-faq",children:"Privilege FAQ"}),"\n",(0,s.jsx)(t.h2,{id:"why-is-the-error-message-no-permission-still-reported-even-after-the-required-role-has-been-assigned-to-a-user",children:'Why is the error message "no permission" still reported even after the required role has been assigned to a user?'}),"\n",(0,s.jsxs)(t.p,{children:["This error may happen if the role is not activated. You can run ",(0,s.jsx)(t.code,{children:"select current_role();"})," to query the roles that have been activated for the user in the current session. If the required role is not activated, run ",(0,s.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})," to activate this role and perform operations using this role."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want roles to be automatically activated upon login, the ",(0,s.jsx)(t.code,{children:"user_admin"})," role can run ",(0,s.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})," or ",(0,s.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER DEFAULT ROLE"})," to set a default role for each user. After the default role is set, it will be automatically activated when the user logs in."]}),"\n",(0,s.jsx)(t.p,{children:"If you want all the assigned roles of all users to be automatically activated upon login, you can run the following command. This operation requires the OPERATE permission at the System level."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SET GLOBAL activate_all_roles_on_login = TRUE;\n"})}),"\n",(0,s.jsx)(t.p,{children:'However, we recommend that you follow the principle of "least privilege" by setting default roles with limited privileges to prevent potential risks. For example:'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For common users, you can set the ",(0,s.jsx)(t.code,{children:"read_only"})," role that has only the SELECT privilege as the default role, while avoiding setting roles with privileges like ALTER, DROP, and INSERT as default roles."]}),"\n",(0,s.jsxs)(t.li,{children:["For administrators, you can set the ",(0,s.jsx)(t.code,{children:"db_admin"})," role as the default role, while avoiding setting the ",(0,s.jsx)(t.code,{children:"node_admin"})," role, which has the privilege to add and drop nodes, as the default role."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This approach helps ensure that users are assigned roles with appropriate permissions, reducing the risk of unintended operations."}),"\n",(0,s.jsxs)(t.p,{children:["You can run ",(0,s.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," to assign the required privileges or roles to users."]}),"\n",(0,s.jsxs)(t.h2,{id:"i-have-granted-a-user-the-privilege-on-all-tables-in-a-database-grant-all-on-all-tables-in-database-db_name-to-user-user_identity-but-the-user-still-cannot-create-tables-in-the-database-why",children:["I have granted a user the privilege on all tables in a database (",(0,s.jsx)(t.code,{children:"GRANT ALL ON ALL TABLES IN DATABASE <db_name> TO USER <user_identity>;"}),"), but the user still cannot create tables in the database. Why?"]}),"\n",(0,s.jsx)(t.p,{children:"Creating tables within a database requires the database-level CREATE TABLE privilege. You need to grant the privilege to the user."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"GRANT CREATE TABLE ON DATABASE <db_name> TO USER <user_identity>;;\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"i-have-granted-a-user-all-the-privileges-on-a-database-using-grant-all-on-database-db_name-to-user-user_identity-but-nothing-is-returned-when-the-user-runs-show-tables-in-this-database-why",children:["I have granted a user all the privileges on a database using ",(0,s.jsx)(t.code,{children:"GRANT ALL ON DATABASE <db_name> TO USER <user_identity>;"}),", but nothing is returned when the user runs ",(0,s.jsx)(t.code,{children:"SHOW TABLES;"})," in this database. Why?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"SHOW TABLES;"})," returns only tables on which the user has any privilege. If the user has no privilege on a table, this table will not be returned. You can grant any privilege on all tables in this database (using SELECT for example) to the user:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"GRANT SELECT ON ALL TABLES IN DATABASE <db_name> TO USER <user_identity>;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The statement above is equivalent to ",(0,s.jsx)(t.code,{children:"GRANT select_priv ON db.* TO <user_identity>;"})," used in versions earlier than v3.0."]})]})}const c=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>i});var s=a(67294);const n=s.createContext({});function i(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||r:i(e),s.createElement(n.Provider,{value:l},t)}}}]);