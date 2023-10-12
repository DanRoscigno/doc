"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67369],{80113:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var c=s(85893),r=s(11151);const d={displayed_sidebar:"Chinese31"},l="ALTER USER",t={id:"sql-reference/sql-statements/account-management/ALTER_USER",title:"ALTER USER",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/account-management/ALTER_USER.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/ALTER_USER",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/ALTER_USER.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SQL\u53c2\u8003",permalink:"/doc/zh/docs/category/sql\u53c2\u8003"},next:{title:"CREATE ROLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/CREATE_ROLE"}},i={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"alter-user",children:"ALTER USER"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u66f4\u6539 StarRocks \u7528\u6237\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u6237\u5bc6\u7801\uff0c\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u6216\u9ed8\u8ba4\u89d2\u8272\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u4fee\u6539\u81ea\u5df1\u7684\u4fe1\u606f\u3002\u53ea\u6709 ",(0,c.jsx)(n.code,{children:"user_admin"})," \u53ef\u4ee5\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER user_identity [auth_option] [default_role]\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"user_identity"}),"\uff1a\u7528\u6237\u6807\u8bc6\u3002\u7531\u767b\u5f55IP\uff08userhost\uff09 \u548c\u7528\u6237\u540d\uff08username\uff09\u7ec4\u6210\uff0c\u5199\u4f5c\uff1a",(0,c.jsx)(n.code,{children:"username@'userhost'"}),"\u3002\u5176\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"userhost"})," \u7684\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"%"})," \u6765\u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,c.jsx)(n.code,{children:"userhost"}),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"%"}),"\uff0c\u5373\u8868\u793a\u53ef\u4ee5\u4ece\u4efb\u610f host \u4f7f\u7528",(0,c.jsx)(n.code,{children:"username"}),"\u8fde\u63a5\u5230 StarRocks \u7684\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"auth_option"}),"\uff1a\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002\u76ee\u524d\uff0cStarRocks \u652f\u6301\u539f\u751f\u5bc6\u7801\u3001mysql_native_password \u548c LDAP \u4e09\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u3002\u5176\u4e2d\uff0c\u539f\u751f\u5bc6\u7801\u4e0e mysql_native_password \u8ba4\u8bc1\u65b9\u5f0f\u7684\u5185\u5728\u903b\u8f91\u76f8\u540c\uff0c\u4ec5\u5728\u5177\u4f53\u8bbe\u7f6e\u8bed\u6cd5\u4e0a\u6709\u8f7b\u5fae\u5dee\u522b\u3002\u540c\u4e00\u4e2a user identity \u53ea\u80fd\u4f7f\u7528\u4e00\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u3002\u901a\u8fc7 ALTER \u8bed\u53e5\u53ef\u4ee5\u53d8\u66f4\u7528\u6237\u7684\u8ba4\u8bc1\u65b9\u5f0f\u548c\u5bc6\u7801\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"  auth_option: {\n      IDENTIFIED BY 'auth_string'\n      IDENTIFIED WITH mysql_native_password BY 'auth_string'\n      IDENTIFIED WITH mysql_native_password AS 'auth_string'\n      IDENTIFIED WITH authentication_ldap_simple AS 'auth_string'\n      \n  }\n"})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u8ba4\u8bc1\u65b9\u5f0f"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u521b\u5efa\u7528\u6237\u65f6\u7684\u5bc6\u7801"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u7528\u6237\u767b\u5f55\u65f6\u7684\u5bc6\u7801"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"\u539f\u751f\u5bc6\u7801"}),(0,c.jsx)(n.td,{children:"\u660e\u6587\u6216\u5bc6\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"mysql_native_password BY"})}),(0,c.jsx)(n.td,{children:"\u660e\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"mysql_native_password WITH"})}),(0,c.jsx)(n.td,{children:"\u5bc6\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"authentication_ldap_simple"})}),(0,c.jsx)(n.td,{children:"\u660e\u6587"}),(0,c.jsx)(n.td,{children:"\u660e\u6587"})]})]})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\uff1a\u5728\u6240\u6709\u8ba4\u8bc1\u65b9\u5f0f\u4e2d\uff0cStarRocks \u5747\u4f1a\u52a0\u5bc6\u5b58\u50a8\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"DEFAULT ROLE"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"-- \u5c06\u5217\u4e3e\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7528\u6237\u7684\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\u3002\nDEFAULT ROLE <role_name>[, <role_name>, ...]\n-- \u5c06\u7528\u6237\u62e5\u6709\u7684\u6240\u6709\u89d2\u8272\uff08\u5305\u542b\u672a\u6765\u8d4b\u4e88\u7ed9\u7528\u6237\u7684\u89d2\u8272\uff09\u8bbe\u7f6e\u4e3a\u7528\u6237\u7684\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\u3002\nDEFAULT ROLE ALL\n-- \u6e05\u7a7a\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272\u3002\u6ce8\u610f\uff1a\u4ecd\u7136\u4f1a\u4e3a\u7528\u6237\u81ea\u52a8\u6fc0\u6d3b public \u89d2\u8272\u3002\nDEFAULT ROLE NONE\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7 ALTER \u547d\u4ee4\u66f4\u6539\u7528\u6237\u9ed8\u8ba4\u89d2\u8272\u524d\u8bf7\u786e\u4fdd\u5bf9\u5e94\u89d2\u8272\u5df2\u7ecf\u8d4b\u4e88\u7ed9\u7528\u6237\u3002\u8bbe\u7f6e\u540e\uff0c\u7528\u6237\u518d\u6b21\u767b\u5f55\u65f6\u4f1a\u9ed8\u8ba4\u6fc0\u6d3b\u5bf9\u5e94\u89d2\u8272\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528\u660e\u6587\u4fee\u6539\u7528\u6237\u5bc6\u7801\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack' IDENTIFIED BY '123456';\nALTER USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password BY '123456';\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528\u5bc6\u6587\u4fee\u6539\u7528\u6237\u5bc6\u7801\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\nALTER USER jack@'172.10.1.10' IDENTIFIED WITH mysql_native_password AS '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u5bc6\u6587\u5bc6\u7801\u53ef\u4ee5\u901a\u8fc7 PASSWORD() \u51fd\u6570\u83b7\u5f97\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u4fee\u6539\u7528\u6237\u4e3a LDAP \u8ba4\u8bc1\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u4fee\u6539\u7528\u6237\u4e3a LDAP \u8ba4\u8bc1\uff0c\u5e76\u6307\u5b9a\u7528\u6237\u5728 LDAP \u4e2d\u7684 DN (Distinguished Name)\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED WITH authentication_ldap_simple AS 'uid=jack,ou=company,dc=example,dc=com';\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u4fee\u6539\u7528\u6237\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\u4e3a ",(0,c.jsx)(n.code,{children:"db_admin"})," \u548c ",(0,c.jsx)(n.code,{children:"user_admin"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE db_admin, user_admin;\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8be5\u7528\u6237\u9700\u8981\u5df2\u7ecf\u62e5\u6709 ",(0,c.jsx)(n.code,{children:"db_admin"})," \u548c ",(0,c.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u516d\uff1a\u4fee\u6539\u7528\u6237\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\u4e3a\u6240\u6709\u89d2\u8272\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE ALL;\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u672a\u6765\u8d4b\u4e88\u7ed9\u7528\u6237\u7684\u89d2\u8272\u4e5f\u4f1a\u9ed8\u8ba4\u6fc0\u6d3b"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e03\uff1a\u4fee\u6539\u7528\u6237\u9ed8\u8ba4\u6fc0\u6d3b\u89d2\u8272\u4e3a\u7a7a\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"ALTER USER 'jack'@'192.168.%' DEFAULT ROLE NONE;\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u7528\u6237\u8fd8\u5c06\u9ed8\u8ba4\u6fc0\u6d3b ",(0,c.jsx)(n.code,{children:"public"})," \u89d2\u8272\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/SHOW_USERS",children:"SHOW USERS"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>d});var c=s(67294);const r=c.createContext({});function d(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||l:d(e),c.createElement(r.Provider,{value:t},n)}}}]);