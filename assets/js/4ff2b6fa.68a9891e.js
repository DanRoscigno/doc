"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11681],{91260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const i={displayed_sidebar:"English"},o="SHOW RESTORE",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",title:"SHOW RESTORE",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW REPOSITORIES",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES"},next:{title:"SHOW ROUTINE LOAD",permalink:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-restore",children:"SHOW RESTORE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to view RESTORE task."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW RESTORE [FROM <db_name>]\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"1. Only the latest RESTORE task is saved in StarRocks.\n2. The meanings of each column are as follows:\nJobId:                  unique job id\nLabel:                  name of the backup to restore\nTimestamp:              the time version of the backup to restore\nDbName:                 Owning Database\nState:                  current stage\nPENDING:                the initial status after submitting the job\nSNAPSHOTING:            executing snapshot\nDOWNLOAD:               the snapshot is completed and ready to download the snapshot in the repository.\nDOWNLOADING:            snapshot downloading\nCOMMIT:                 the snapshot download is complete and ready to take effect\nCOMMITING:              in effect\nFINISHED:               job succeeded\nCANCELLED:              job failed\nAllowLoad:              whether to allow import during recovery (currently not supported)\nReplicationNum:         Specifies the number of replicas to restore\nRestoreJobs:            tables and partitions to restore\nCreateTime:             ask submission time\nMetaPreparedTime:       metadata preparation completion time\nSnapshotFinishedTime:   snapshot completion time\nDownloadFinishedTime:   snapshot download completion time\nFinishedTime:           job end time\nUnfinishedTasks:        unfinished subtask id is displayed in the SNAPSHOTING, DOWNLOADING and COMMITING phases\nStatus:                 if the job fails, the failure information is displayed\nTimeout:                job timeout, in seconds\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["View the RESTORE task of ",(0,s.jsx)(t.code,{children:"example_db"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW RESTORE FROM example_db;\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>i});var s=n(67294);const a=s.createContext({});function i(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:i(e),s.createElement(a.Provider,{value:r},t)}}}]);