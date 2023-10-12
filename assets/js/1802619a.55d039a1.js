"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90060],{60645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(85893),a=n(11151);const r={displayed_sidebar:"documentation"},i="BACKUP",d={id:"sql-reference/sql-statements/data-definition/BACKUP",title:"BACKUP",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/BACKUP",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/BACKUP.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ANALYZE TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/ANALYZE_TABLE"},next:{title:"CANCEL ALTER TABLE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"backup",children:"BACKUP"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Backs up data in a specified database, table, or partition. Currently, StarRocks only supports backing up data in OLAP tables. For more information, see ",(0,s.jsx)(t.a,{href:"/doc/docs/administration/Backup_and_restore",children:"data backup and restoration"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["BACKUP is an asynchronous operation. You can check the status of a BACKUP job status using ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"}),", or cancel a BACKUP job using ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"}),". You can view the snapshot information using ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"}),"."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Only users with the ADMIN privilege can back up data."}),"\n",(0,s.jsx)(t.li,{children:"In each database, only one running BACKUP or RESTORE job is allowed each time. Otherwise, StarRocks returns an error."}),"\n",(0,s.jsx)(t.li,{children:"StarRocks does not support specifying data compression algorithm for data backup."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'BACKUP SNAPSHOT <db_name>.<snapshot_name>\nTO <repository_name>\n[ ON ( <table_name> [ PARTITION ( <partition_name> [, ...] ) ]\n       [, ...] ) ]\n[ PROPERTIES ("key"="value" [, ...] ) ]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_name"}),(0,s.jsx)(t.td,{children:"Name of the database that stores the data to be backed up."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"snapshot_name"}),(0,s.jsx)(t.td,{children:"Specify a name for the data snapshot. Globally unique."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"repository_name"}),(0,s.jsxs)(t.td,{children:["Repository name. You can create a repository using ",(0,s.jsx)(t.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ON"}),(0,s.jsx)(t.td,{children:"Name of the tables to be backed up. The whole database is backed up if this parameter is not specified."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PARTITION"}),(0,s.jsx)(t.td,{children:"Name of the partitions to be backed up. The whole table is backed up if this parameter is not specified."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PROPERTIES"}),(0,s.jsxs)(t.td,{children:["Properties of the data snapshot. Valid keys:",(0,s.jsx)(t.code,{children:"type"}),": Backup type. Currently, only full backup ",(0,s.jsx)(t.code,{children:"FULL"})," is supported. Default: ",(0,s.jsx)(t.code,{children:"FULL"}),".",(0,s.jsx)(t.code,{children:"timeout"}),": Task timeout. Unit: second. Default: ",(0,s.jsx)(t.code,{children:"86400"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Example 1: Backs up the database ",(0,s.jsx)(t.code,{children:"example_db"})," to the repository ",(0,s.jsx)(t.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nPROPERTIES ("type" = "full");\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Example 2: Backs up the table ",(0,s.jsx)(t.code,{children:"example_tbl"})," in ",(0,s.jsx)(t.code,{children:"example_db"})," to ",(0,s.jsx)(t.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON (example_tbl);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Example 2: Backs up the partitions ",(0,s.jsx)(t.code,{children:"p1"})," and ",(0,s.jsx)(t.code,{children:"p2"})," of ",(0,s.jsx)(t.code,{children:"example_tbl"})," and the table ",(0,s.jsx)(t.code,{children:"example_tbl2"})," in ",(0,s.jsx)(t.code,{children:"example_db"})," to ",(0,s.jsx)(t.code,{children:"example_repo"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nON(\n    example_tbl PARTITION (p1, p2),\n    example_tbl2\n);\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>d,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:d},t)}}}]);