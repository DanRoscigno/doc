"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48877],{25639:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=n(85893),i=n(11151);const r={displayed_sidebar:"English"},c="SHOW GRANTS",a={id:"sql-reference/sql-statements/account-management/SHOW_GRANTS",title:"SHOW GRANTS",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/account-management/SHOW_GRANTS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SHOW_GRANTS",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/SHOW_GRANTS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/account-management/SHOW_GRANTS.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW AUTHENTICATION",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION"},next:{title:"SHOW ROLES",permalink:"/docs/2.3/sql-reference/sql-statements/account-management/SHOW_ROLES"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-grants",children:"SHOW GRANTS"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"This statement is used to view user permissions."}),"\n",(0,t.jsx)(s.p,{children:"Syntax:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW [ALL] GRANTS [FOR user_identity]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Note:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"1. SHOW ALL GRANTS can view the privileges of all users. \n2. When user_identity is specified, the permissions of the user thus specified will be showed. Meanwhile, this user_identity must be created through CREATE USER command. \n3. When user_identity is not specified, the permissions of the current user will be showed. \n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View all users' permissions."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW ALL GRANTS; \n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View specified users' permissions."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW GRANTS FOR jack@'%';\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View the current user's permissions."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW GRANTS;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:a},s)}}}]);