"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85059],{61542:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(85893),i=t(11151);const r={displayed_sidebar:"English"},a="SHOW BACKUP",d={id:"sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",title:"SHOW BACKUP",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",permalink:"/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW ALTER MATERIALIZED VIEW",permalink:"/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW"},next:{title:"SHOW CATALOGS",permalink:"/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-backup",children:"SHOW BACKUP"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Views the last BACKUP task in a specified database. For more information, see ",(0,n.jsx)(s.a,{href:"/docs/2.5/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"Only the information of the last BACKUP task is saved in StarRocks."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW BACKUP [FROM <db_name>]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_name"}),(0,n.jsx)(s.td,{children:"Name of the database that the BACKUP task belongs to."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"return",children:"Return"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Return"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JobId"}),(0,n.jsx)(s.td,{children:"Unique job ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SnapshotName"}),(0,n.jsx)(s.td,{children:"Name of the data snapshot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DbName"}),(0,n.jsx)(s.td,{children:"Name of the database that the BACKUP task belongs to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State"}),(0,n.jsxs)(s.td,{children:["Current state of the BACKUP task:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"PENDING: Initial state after submitting a job."}),(0,n.jsx)("li",{children:"SNAPSHOTING: Creating snapshot."}),(0,n.jsx)("li",{children:"UPLOAD_SNAPSHOT: Snapshot complete, ready for upload."}),(0,n.jsx)("li",{children:"UPLOADING: Uploading snapshot."}),(0,n.jsx)("li",{children:"SAVE_META: Creating local metadata files."}),(0,n.jsx)("li",{children:"UPLOAD_INFO: Uploading metadata files and information of the BACKUP task."}),(0,n.jsx)("li",{children:"FINISHED: BACKUP task finished."}),(0,n.jsx)("li",{children:"CANCELLED: BACKUP task failed or cancelled."})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"BackupObjs"}),(0,n.jsx)(s.td,{children:"Backed up objects."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreateTime"}),(0,n.jsx)(s.td,{children:"Task submission time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SnapshotFinishedTime"}),(0,n.jsx)(s.td,{children:"Snapshot completion time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UploadFinishedTime"}),(0,n.jsx)(s.td,{children:"Snapshot upload completion time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"FinishedTime"}),(0,n.jsx)(s.td,{children:"Task completion Time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UnfinishedTasks"}),(0,n.jsx)(s.td,{children:"Unfinished subtask IDs in the SNAPSHOTING and UPLOADING phases."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Progress"}),(0,n.jsx)(s.td,{children:"The progress of snapshot uploading tasks."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TaskErrMsg"}),(0,n.jsx)(s.td,{children:"Error messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Status"}),(0,n.jsx)(s.td,{children:"Status information."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timeout"}),(0,n.jsx)(s.td,{children:"Task timeout. Unit: second."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Views the last BACKUP task in the database ",(0,n.jsx)(s.code,{children:"example_db"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW BACKUP FROM example_db;\n"})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>d,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function d({components:e,children:s,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:d},s)}}}]);