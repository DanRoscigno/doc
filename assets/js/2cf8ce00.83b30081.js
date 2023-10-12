"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52412],{11579:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>I,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},a="ADMIN SHOW REPLICA DISTRIBUTION",o={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",title:"ADMIN SHOW REPLICA DISTRIBUTION",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ADMIN SHOW CONFIG",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG"},next:{title:"ADMIN SHOW REPLICA STATUS",permalink:"/doc/docs/2.5/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"admin-show-replica-distribution",children:"ADMIN SHOW REPLICA DISTRIBUTION"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This statement is used to show the distribution status of a table or a partition replica."}),"\n",(0,n.jsx)(t.p,{children:"Syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note:"}),"\n",(0,n.jsx)(t.p,{children:"The Graph column in the result shows the distribution ratio of replicas graphically."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"View the replica distribution of tables"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM tbl1;\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"View the replica distribution of partitions in the table"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN SHOW REPLICA DISTRIBUTION FROM db1.tbl1 PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]})]})}const I=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:o},t)}}}]);