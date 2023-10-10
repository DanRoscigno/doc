"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77926],{59073:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var t=s(85893),r=s(11151);const a={},c="SET PROPERTY",o={id:"sql-reference/sql-statements/account-management/SET PROPERTY",title:"SET PROPERTY",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET PROPERTY.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET PROPERTY",permalink:"/docs/sql-reference/sql-statements/account-management/SET PROPERTY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/account-management/SET PROPERTY.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SET PASSWORD",permalink:"/docs/sql-reference/sql-statements/account-management/SET PASSWORD"},next:{title:"SET ROLE",permalink:"/docs/sql-reference/sql-statements/account-management/SET ROLE"}},l={},i=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-property",children:"SET PROPERTY"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n"})}),"\n",(0,t.jsx)(n.p,{children:"Set user attributes, including resources allocated to users and etc. The user properties here means the attributes for users, not for user_identity. That is to say, if two users, 'jack'@'%' and 'jack'@'192.%', are created through CREATE USER statement, then SET PROPERTY statement can only be used for user jack, not 'jack'@'%' or 'jack'@'192.%'."}),"\n",(0,t.jsx)(n.p,{children:"key:"}),"\n",(0,t.jsx)(n.p,{children:"Super user permission:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"max_user_connections: Maximum number of connections\nresource.cpu_share: cpu resource assignment\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ordinary user permission:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"quota.normal: Resource allocation at the normal level\nquota.high: Resource allocation at the high level \nquota.low: Resource allocation at the low level\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the maximum number of connections to 1000 for the user jack"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify cpu_share to 1000 for the user jack"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Modify the weight of the normal level for the user jack"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PROPERTY FOR 'jack' 'quota.normal' = '400';\n"})}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:a(e),t.createElement(r.Provider,{value:o},n)}}}]);