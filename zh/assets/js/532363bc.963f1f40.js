"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55969],{5573:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=s(85893),c=s(11151);const l={displayed_sidebar:"Chinese"},t="GRANT",i={id:"sql-reference/sql-statements/account-management/GRANT",title:"GRANT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/account-management/GRANT.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/GRANT",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/GRANT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/GRANT.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"DROP USER",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/DROP_USER"},next:{title:"REVOKE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/account-management/REVOKE"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57(keywords)",id:"\u5173\u952e\u5b57keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",strong:"strong",a:"a",ol:"ol",li:"li"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"grant",children:"GRANT"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"GRANT \u547d\u4ee4\u7528\u4e8e\u8d4b\u4e88\u6307\u5b9a\u7528\u6237\u6216\u89d2\u8272\u6307\u5b9a\u7684\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"GRANT privilege_list ON db_name[.tbl_name] TO user_identity [ROLE role_name];\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name];\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"privilege_list"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u8d4b\u4e88\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5f53\u524d StarRocks \u652f\u6301\u5982\u4e0b\u6743\u9650\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5305\u62ec\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7b49\u64cd\u4f5c\uff0c\u53ea\u6709 root \u7528\u6237\u6709\u8be5\u6743\u9650\uff0c\u4e0d\u53ef\u8d4b\u4e88\u5176\u4ed6\u7528\u6237\u3002\nADMIN_PRIV\uff1a\u9664 NODE_PRIV \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002\nGRANT_PRIV: \u64cd\u4f5c\u6743\u9650\u7684\u6743\u9650\u3002\u5305\u62ec\u521b\u5efa\u5220\u9664\u7528\u6237\u3001\u89d2\u8272\uff0c\u6388\u6743\u548c\u64a4\u6743\uff0c\u8bbe\u7f6e\u5bc6\u7801\u7b49\u3002\nSELECT_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\nLOAD_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5bfc\u5165\u6743\u9650\nALTER_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684schema\u53d8\u66f4\u6743\u9650\nCREATE_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u521b\u5efa\u6743\u9650\nDROP_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\nUSAGE_PRIV: \u5bf9\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u65e7\u7248\u6743\u9650\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"ALL"})," \u548c ",(0,r.jsx)(n.code,{children:"READ_WRITE"})," \u4f1a\u88ab\u8f6c\u6362\u6210\uff1a",(0,r.jsx)(n.code,{children:"SELECT_PRIV\uff0cLOAD_PRIV\uff0cALTER_PRIV\uff0cCREATE_PRIV\uff0cDROP_PRIV"}),"\uff1b"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"READ_ONLY"})," \u4f1a\u88ab\u8f6c\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"SELECT_PRIV"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6743\u9650\u5206\u7c7b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. \u8282\u70b9\u6743\u9650\uff1aNODE_PRIV\n2. \u5e93\u8868\u6743\u9650\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. \u8d44\u6e90\u6743\u9650\uff1aUSAGE_PRIV\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"db_name [.tbl_name]"})}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u4ee5\u4e0b\u4e09\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. *.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709\u5e93\u53ca\u5176\u4e2d\u6240\u6709\u8868\n2. db.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\n3. db.tbl \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u6307\u5b9a\u7684\u5e93\u6216\u8868 ",(0,r.jsx)(n.strong,{children:"\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u5e93\u548c\u8868"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"resource_name"})}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. * \u6743\u9650\u5e94\u7528\u4e8e\u6240\u6709\u8d44\u6e90\n2. resource \u6743\u9650\u5e94\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u6307\u5b9a\u7684\u8d44\u6e90\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"user_identity"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684 ",(0,r.jsx)(n.code,{children:"user_identity"})," \u8bed\u6cd5\u4e0e ",(0,r.jsx)(n.a,{href:"/zh/docs/2.2/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," \u7ae0\u8282\u4e2d\u7684\u76f8\u540c\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"CREATE USER"})," \u521b\u5efa\u8fc7\u7684 ",(0,r.jsx)(n.code,{children:"user_identity"}),"\u3002",(0,r.jsx)(n.code,{children:"user_identity"})," \u4e2d\u7684 host \u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u6709 1 \u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5c06\u6743\u9650\u8d4b\u4e88\u6307\u5b9a\u7684 ROLE\uff0c\u5982\u679c\u6307\u5b9a\u7684 ROLE \u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6240\u6709\u5e93\u548c\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT SELECT_PRIV ON *.* TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON db1.tbl1 TO 'jack'@'192.8.%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u89d2\u8272"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT LOAD_PRIV ON db1.* TO ROLE 'my_role';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6240\u6709\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u89d2\u8272"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5173\u952e\u5b57keywords",children:"\u5173\u952e\u5b57(keywords)"}),"\n",(0,r.jsx)(n.p,{children:"GRANT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var r=s(67294);const c=r.createContext({});function l(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||t:l(e),r.createElement(c.Provider,{value:i},n)}}}]);