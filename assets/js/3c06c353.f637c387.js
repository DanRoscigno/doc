"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61753],{27159:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=t(85893),s=t(11151);const r={displayed_sidebar:"English"},i="Data Recovery",d={id:"administration/Data_recovery",title:"Data Recovery",description:"StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After drop table or drop database, StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the RECOVER command.",source:"@site/versioned_docs/version-2.1/administration/Data_recovery.md",sourceDirName:"administration",slug:"/administration/Data_recovery",permalink:"/docs/2.1/administration/Data_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Data_recovery.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Parameter Configuration",permalink:"/docs/2.1/administration/Configuration"},next:{title:"Load Balancing",permalink:"/docs/2.1/administration/Load_balance"}},o={},l=[{value:"Related commands",id:"related-commands",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"data-recovery",children:"Data Recovery"}),"\n",(0,n.jsxs)(a.p,{children:["StarRocks supports data recovery for mistakenly deleted databases/tables/partitions. After ",(0,n.jsx)(a.code,{children:"drop table"})," or ",(0,n.jsx)(a.code,{children:"drop database"}),", StarRocks will not physically delete the data immediately, but keep it in Trash for a period of time (1 day by default). Administrators can recover the mistakenly deleted data with the ",(0,n.jsx)(a.code,{children:"RECOVER"})," command."]}),"\n",(0,n.jsx)(a.h2,{id:"related-commands",children:"Related commands"}),"\n",(0,n.jsx)(a.p,{children:"Syntax:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"-- 1) Recover database\nRECOVER DATABASE db_name;\n-- 2) Restore table\nRECOVER TABLE [db_name.]table_name;\n-- 3) Recover partition\nRECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,n.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["This operation can only restore the deleted meta information. The default time is 1 day, which can be configured by the ",(0,n.jsx)(a.code,{children:"catalog_trash_expire_second"})," parameter in ",(0,n.jsx)(a.code,{children:"fe.conf"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"If new meta information of the same name and type is created after the meta information is deleted, the previously deleted meta information cannot be restored."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Recover the database named ",(0,n.jsx)(a.code,{children:"example_db"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n~~~ 2.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Recover the table named ",(0,n.jsx)(a.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n~~~ 3.\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Recover the partition named ",(0,n.jsx)(a.code,{children:"p1"})," in the table ",(0,n.jsx)(a.code,{children:"example_tbl"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>d,ah:()=>r});var n=t(67294);const s=n.createContext({});function r(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function d({components:e,children:a,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:r(e),n.createElement(s.Provider,{value:d},a)}}}]);