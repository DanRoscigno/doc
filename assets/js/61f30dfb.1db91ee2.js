"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93451],{47594:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},d="SHOW RESTORE",a={id:"sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",title:"SHOW RESTORE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW REPOSITORIES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES"},next:{title:"SHOW ROUTINE LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"show-restore",children:"SHOW RESTORE"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Views the last RESTORE task in a specified database. For more information, see ",(0,n.jsx)(s.a,{href:"/doc/docs/3.0/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"Only the information of the last RESTORE task is saved in StarRocks."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW RESTORE [FROM <db_name>]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_name"}),(0,n.jsx)(s.td,{children:"Name of the database that the RESTORE task belongs to."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"return",children:"Return"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Return"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JobId"}),(0,n.jsx)(s.td,{children:"Unique job ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Label"}),(0,n.jsx)(s.td,{children:"Name of the data snapshot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timestamp"}),(0,n.jsx)(s.td,{children:"Backup timestamp."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DbName"}),(0,n.jsx)(s.td,{children:"Name of the database that the RESTORE task belongs to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"State"}),(0,n.jsxs)(s.td,{children:["Current state of the RESTORE task:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"PENDING: Initial state after submitting a job."}),(0,n.jsx)("li",{children:"SNAPSHOTING: Executing the local snapshot."}),(0,n.jsx)("li",{children:"DOWNLOAD: Submitting snapshot download task."}),(0,n.jsx)("li",{children:"DOWNLOADING: Downloading the snapshot."}),(0,n.jsx)("li",{children:"COMMIT: To commit the downloaded snapshot."}),(0,n.jsx)("li",{children:"COMMITTING: Committing the downloaded snapshot."}),(0,n.jsx)("li",{children:"FINISHED: RESTORE task finished."}),(0,n.jsx)("li",{children:"CANCELLED: RESTORE task failed or cancelled."})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AllowLoad"}),(0,n.jsx)(s.td,{children:"If loading data is allowed during the RESTORE task."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ReplicationNum"}),(0,n.jsx)(s.td,{children:"Number of replicas to be restored."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RestoreObjs"}),(0,n.jsx)(s.td,{children:"The restored objects (tables and partitions)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CreateTime"}),(0,n.jsx)(s.td,{children:"Task submission time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"MetaPreparedTime"}),(0,n.jsx)(s.td,{children:"Local metadata completion time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SnapshotFinishedTime"}),(0,n.jsx)(s.td,{children:"Snapshot completion time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DownloadFinishedTime"}),(0,n.jsx)(s.td,{children:"Snapshot download completion time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"FinishedTime"}),(0,n.jsx)(s.td,{children:"Task completion Time."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UnfinishedTasks"}),(0,n.jsx)(s.td,{children:"Unfinished subtask IDs in the SNAPSHOTTING, DOWNLOADING, and COMMITTING phases."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Progress"}),(0,n.jsx)(s.td,{children:"The progress of snapshot downloading tasks."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TaskErrMsg"}),(0,n.jsx)(s.td,{children:"Error messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Status"}),(0,n.jsx)(s.td,{children:"Status information."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Timeout"}),(0,n.jsx)(s.td,{children:"Task timeout. Unit: second."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Views the last RESTORE task in the database ",(0,n.jsx)(s.code,{children:"example_db"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SHOW RESTORE FROM example_db;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>r});var n=t(67294);const i=n.createContext({});function r(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||d:r(e),n.createElement(i.Provider,{value:a},s)}}}]);