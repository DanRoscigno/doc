"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39766],{2003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const l={},a="SHOW GRANTS",c={id:"sql-reference/sql-statements/account-management/SHOW GRANTS",title:"SHOW GRANTS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/account-management/SHOW GRANTS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW GRANTS",permalink:"/zh/docs/sql-reference/sql-statements/account-management/SHOW GRANTS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SHOW GRANTS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW AUTHENTICATION",permalink:"/zh/docs/sql-reference/sql-statements/account-management/SHOW AUTHENTICATION"},next:{title:"SHOW ROLES",permalink:"/zh/docs/sql-reference/sql-statements/account-management/SHOW ROLES"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function i(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",code:"code",pre:"pre",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-grants",children:"SHOW GRANTS"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u7528\u6237\uff0c\u6307\u5b9a\u7528\u6237\uff0c\u6216\u6307\u5b9a\u89d2\u8272\u7684\u6743\u9650\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u6bcf\u4e2a\u7528\u6237\u90fd\u6709\u6743\u9650\u67e5\u770b\u81ea\u5df1\u548c\u81ea\u5df1\u6240\u62e5\u6709\u89d2\u8272\u7684\u6743\u9650\u4fe1\u606f\u3002\u53ea\u6709 ",(0,s.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u53ef\u4ee5\u67e5\u770b\u6307\u5b9a\u7528\u6237\u6216\u89d2\u8272\u7684\u6743\u9650\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW GRANTS; -- \u67e5\u770b\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\u4fe1\u606f\u3002\nSHOW GRANTS FOR ROLE <role_name>; -- \u67e5\u770b\u6307\u5b9a\u89d2\u8272\u7684\u6743\u9650\u4fe1\u606f\u3002\nSHOW GRANTS FOR <user_identity>; -- \u67e5\u770b\u6307\u5b9a\u7528\u6237\u7684\u6743\u9650\u4fe1\u606f\u3002\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"role_name\uff1a\u89d2\u8272\u540d"}),"\n",(0,s.jsx)(n.li,{children:"user_identity\uff1a\u7528\u6237\u6807\u8bc6"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5b57\u6bb5\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- \u7528\u6237\u7684\u6388\u6743\u4fe1\u606f\u3002\n+--------------+--------+---------------------------------------------+\n|UserIdentity  |Catalog | Grants                                      |\n+--------------+--------+---------------------------------------------+\n\n-- \u89d2\u8272\u7684\u6388\u6743\u4fe1\u606f\u3002\n+-------------+--------+-------------------------------------------------------+\n|RoleName     |Catalog | Grants                                                |\n+-------------+-----------------+----------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5b57\u6bb5"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UserIdentity"}),(0,s.jsx)(n.td,{children:"\u7528\u6237\u6807\u8bc6\u3002\u67e5\u8be2\u7528\u6237\u6388\u6743\u4fe1\u606f\u65f6\u8fd4\u56de\u8be5\u5b57\u6bb5\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RoleName"}),(0,s.jsx)(n.td,{children:"\u89d2\u8272\u540d\u3002\u67e5\u8be2\u89d2\u8272\u6388\u6743\u4fe1\u606f\u65f6\u8fd4\u56de\u8be5\u5b57\u6bb5\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Catalog"}),(0,s.jsxs)(n.td,{children:["Catalog \u540d\u79f0\u3002\u5982\u679c\u662f StarRocks \u5185\u90e8\u6570\u636e\u76ee\u5f55\uff0c\u5219\u663e\u793a\u4e3a default\u3002\u5982\u679c\u662f\u5916\u90e8\u6570\u636e\u76ee\u5f55 (external catalog)\uff0c \u5219\u663e\u793a external catalog \u7684\u540d\u79f0\u3002\u5982\u679c ",(0,s.jsx)(n.code,{children:"Grants"})," \u5217\u663e\u793a\u7684\u662f\u6388\u4e88\u89d2\u8272\u7684\u64cd\u4f5c\uff0c\u5219\u8be5\u5b57\u6bb5\u4e3a NULL\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Grants"}),(0,s.jsx)(n.td,{children:"\u5177\u4f53\u7684\u6388\u6743\u64cd\u4f5c\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"mysql> SHOW GRANTS;\n+--------------+---------+----------------------------------------+\n| UserIdentity | Catalog | Grants                                 |\n+--------------+---------+----------------------------------------+\n| 'root'@'%'   | NULL    | GRANT 'root', 'testrole' TO 'root'@'%' |\n+--------------+---------+----------------------------------------+\n\nmysql> SHOW GRANTS FOR 'user_g'@'%';\n+-------------+-------------+-----------------------------------------------------------------------------------------------+\n|UserIdentity |Catalog      |Grants                                                                                         |\n+-------------+-------------------------------------------------------------------------------------------------------------+\n|'user_g'@'%' |NULL         |GRANT role_g, public to `user_g`@`%`;                                                          | \n|'user_g'@'%' |NULL         |GRANT IMPERSONATE ON `user_a`@`%`, `user_b`@`%`TO `user_g`@`%`;                                | \n|'user_g'@'%' |default      |GRANT CREATE DATABASE ON CATALOG default_catalog TO USER `user_g`@`%`;                         |\n|'user_g'@'%' |default      |GRANT ALTER, DROP, CREATE_TABLE ON DATABASE db1 TO USER `user_g`@`%`;                          |\n|'user_g'@'%' |default      |GRANT CREATE_VIEW ON DATABASE db1 TO USER `user_g`@`%` WITH GRANT OPTION;                      |\n|'user_g'@'%' |Hive_catalog |GRANT USAGE ON CATALOG Hive_catalog TO USER `user_g`@`%`                                       |\n+-------------+--------------+-----------------------------------------------------------------------------------------------+\n\nmysql> SHOW GRANTS FOR ROLE role_g;\n+-------------+--------+-------------------------------------------------------+\n|RoleName     |Catalog | Grants                                                |\n+-------------+-----------------+----------------------------------------------+\n|role_g       |NULL    | GRANT role_p, role_test TO ROLE role_g;               | \n+-------------+--------+--------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>l});var s=t(67294);const r=s.createContext({});function l(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:l(e),s.createElement(r.Provider,{value:c},n)}}}]);