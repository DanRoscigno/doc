"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93593],{7983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},a="ADMIN SHOW CONFIG",o={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",title:"ADMIN SHOW CONFIG",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ADMIN SET REPLICA STATUS",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS"},next:{title:"ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"admin-show-config",children:"ADMIN SHOW CONFIG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Displays the configuration of the current cluster (Currently, only FE configuration items can be displayed). For detailed description of these configuration items, see ",(0,s.jsx)(n.a,{href:"/docs/3.0/administration/Configuration#fe-configuration-items",children:"Configuration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to set or modify a configuration item, use ",(0,s.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET CONFIG"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW FRONTEND CONFIG [LIKE "pattern"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsx)(n.p,{children:"Description of the return parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. Key:        Configuration item name\n2. Value:      Configuration item value\n3. Type:       Configuration item type \n4. IsMutable:  Whether it can be set through the ADMIN SET CONFIG command\n5. MasterOnly: Whether it only applies to leader FE\n6. Comment:    Configuration item description \n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"View the configuration of the current FE node."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW FRONTEND CONFIG;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Search for the configuration of the current FE node by using the ",(0,s.jsx)(n.code,{children:"like"})," predicate."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> ADMIN SHOW FRONTEND CONFIG LIKE '%check_java_version%';\n+--------------------+-------+---------+-----------+------------+---------+\n| Key                | Value | Type    | IsMutable | MasterOnly | Comment |\n+--------------------+-------+---------+-----------+------------+---------+\n| check_java_version | true  | boolean | false     | false      |         |\n+--------------------+-------+---------+-----------+------------+---------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:o},n)}}}]);