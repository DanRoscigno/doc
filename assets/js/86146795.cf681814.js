"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95569],{6795:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=n(85893),i=n(11151);const a={displayed_sidebar:"documentation"},r="ADMIN SHOW REPLICA STATUS",l={id:"sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",title:"ADMIN SHOW REPLICA STATUS",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION"},next:{title:"ALTER RESOURCE GROUP",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"admin-show-replica-status",children:"ADMIN SHOW REPLICA STATUS"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"This statement is used to show the status of replicas for a table or a partition."}),"\n",(0,t.jsx)(s.p,{children:"Syntax:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[where_clause]\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'where_clause:\nWHERE STATUS [!]= "replica_status"\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"replica_status:\nOK:            The replica is healthy\nDEAD:          The Backend of replica is not available\nVERSION_ERROR: The replica data version is missing\nSCHEMA_ERROR:  The schema hash of replica is incorrect\nMISSING:       The replica does not exist\n"})}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View the status of all replicas of the table."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"ADMIN SHOW REPLICA STATUS FROM db1.tbl1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View the replica of a partition with the status of VERSION_ERROR."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View all unhealthy replicas of the table."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>a});var t=n(67294);const i=t.createContext({});function a(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},s)}}}]);