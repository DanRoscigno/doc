"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27935],{30146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},l="SHOW PARTITIONS",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",title:"SHOW PARTITIONS",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW LOAD",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_LOAD"},next:{title:"SHOW PROPERTY",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_PROPERTY"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-partitions",children:"SHOW PARTITIONS"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to display partition information"}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"Support the filtering of PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime and other columns. This syntax only supports OLAP tables, ES tables and HIVE tables. Please use SHOW PROC '/dbs/db_id/table_id/partitions'SHOW PROC '/dbs/db_id/table_id/partitions'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Display all partition information of the specified table under the specified db"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM example_db.table_name;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Display the information of the specified partition of the specified table under the specified db"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Display the latest partition information of the specified table under the specified db"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:a(e),s.createElement(i.Provider,{value:r},n)}}}]);