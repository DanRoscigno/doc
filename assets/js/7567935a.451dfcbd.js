"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88021],{38511:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),i=n(11151);const r={displayed_sidebar:"English"},a="ADMIN SET CONFIG",o={id:"sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",title:"ADMIN SET CONFIG",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",permalink:"/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ADMIN REPAIR",permalink:"/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_REPAIR"},next:{title:"ADMIN SET REPLICA STATUS",permalink:"/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"admin-set-config",children:"ADMIN SET CONFIG"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["This statement is used to set configuration items for the cluster (Currently, only FE dynamic configuration items can be set using this command). You can view these configuration items using the ",(0,t.jsx)(s.a,{href:"/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SHOW FRONTEND CONFIG"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["The configurations will be restored to the default values in the ",(0,t.jsx)(s.code,{children:"fe.conf"})," file after the FE restarts. Therefore, we recommend that you also modify the configuration items in ",(0,t.jsx)(s.code,{children:"fe.conf"})," to prevent the loss of modifications."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("key" = "value")\n'})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set ",(0,t.jsx)(s.code,{children:"disable_balance"})," to ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>r});var t=n(67294);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:o},s)}}}]);