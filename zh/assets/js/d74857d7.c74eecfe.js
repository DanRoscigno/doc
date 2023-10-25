"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21005],{33694:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var c=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},a="CREATE USER",i={id:"sql-reference/sql-statements/account-management/CREATE_USER",title:"CREATE USER",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/account-management/CREATE_USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/CREATE_USER",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/CREATE_USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/CREATE_USER.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE ROLE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/CREATE_ROLE"},next:{title:"DROP ROLE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/DROP_ROLE"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57(keywords)",id:"\u5173\u952e\u5b57keywords",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",strong:"strong",a:"a"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"create-user",children:"CREATE USER"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa StarRocks \u7528\u6237\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"-- \u547d\u4ee4\nCREATE USER user_identity [auth_option] \n[DEFAULT ROLE 'role_name'];\n\n-- \u53c2\u6570\u8bf4\u660e\nuser_identity:'user_name'@'host'\n\nauth_option: {\n    IDENTIFIED BY 'auth_string'\n    IDENTIFIED WITH auth_plugin\n    IDENTIFIED WITH auth_plugin BY 'auth_string'\n    IDENTIFIED WITH auth_plugin AS 'auth_string'\n}\n"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"CREATE USER"})}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a StarRocks \u7528\u6237\u3002\u5728 StarRocks \u4e2d\uff0c\u4e00\u4e2a user_identity \u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u7528\u6237\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"user_identity"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0c",(0,c.jsx)(n.code,{children:"user_name"})," \u548c ",(0,c.jsx)(n.code,{children:"host"}),"\uff0c\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"user_name"})," \u4e3a\u7528\u6237\u540d\u3002host \u6807\u8bc6\u7528\u6237\u7aef\u8fde\u63a5\u6240\u5728\u7684\u4e3b\u673a\u5730\u5740\u3002host \u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 % \u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a host\uff0c\u9ed8\u8ba4\u4e3a '%'\uff0c\u5373\u8868\u793a\u8be5\u7528\u6237\u53ef\u4ee5\u4ece\u4efb\u610f host \u8fde\u63a5\u5230 StarRocks\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"auth_option"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6307\u5b9a\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u76ee\u524d\u652f\u6301 ",(0,c.jsx)(n.code,{children:"mysql_native_password"})," \u548c ",(0,c.jsx)(n.code,{children:"authentication_ldap_simple"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"DEFAULT ROLE"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u6307\u5b9a\u4e86\u89d2\u8272\uff08ROLE\uff09\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u8be5\u89d2\u8272\u6240\u62e5\u6709\u7684\u6743\u9650\u8d4b\u4e88\u65b0\u521b\u5efa\u7684\u8fd9\u4e2a\u7528\u6237\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u8be5\u7528\u6237\u9ed8\u8ba4\u6ca1\u6709\u4efb\u4f55\u6743\u9650\u3002\u6307\u5b9a\u7684 ROLE \u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\u89d2\u8272\u521b\u5efa\u8bf7\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/zh/docs/2.2/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65e0\u5bc6\u7801\u7528\u6237\uff08\u4e0d\u6307\u5b9a host\uff0c\u5219\u7b49\u4ef7\u4e8e jack@'%'\uff09\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER 'jack';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u6709\u5bc6\u7801\u7528\u6237\uff0c\u5141\u8bb8\u4ece '172.10.1.10' \u767b\u5f55\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u907f\u514d\u4f20\u9012\u660e\u6587\uff0c\u7528\u4f8b 2 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u521b\u5efa\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u540e\u9762\u52a0\u5bc6\u7684\u5185\u5bb9\u53ef\u4ee5\u901a\u8fc7 PASSWORD()\u83b7\u5f97\u5230, \u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT PASSWORD('123456');\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a ldap \u8ba4\u8bc1\u7684\u7528\u6237\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a ldap \u8ba4\u8bc1\u7684\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u7528\u6237\u5728 ldap \u4e2d\u7684 DN(Distinguished Name)\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece '192.168' \u5b50\u7f51\u767b\u5f55\u7684\u7528\u6237\uff0c\u540c\u65f6\u6307\u5b9a\u5176\u89d2\u8272\u4e3a example_role\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece\u57df\u540d 'example_domain' \u767b\u5f55\u7684\u7528\u6237\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u89d2\u8272\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5173\u952e\u5b57keywords",children:"\u5173\u952e\u5b57(keywords)"}),"\n",(0,c.jsx)(n.p,{children:"CREATE, USER"})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var c=s(67294);const l=c.createContext({});function r(e){const n=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:r(e),c.createElement(l.Provider,{value:i},n)}}}]);