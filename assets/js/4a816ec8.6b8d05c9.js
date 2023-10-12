"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11775],{16612:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(85893),i=s(11151);const a={displayed_sidebar:"documentation"},r="RECOVER",l={id:"sql-reference/sql-statements/data-definition/RECOVER",title:"RECOVER",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/RECOVER.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/RECOVER",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/RECOVER.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"KILL ANALYZE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/KILL_ANALYZE"},next:{title:"REFRESH EXTERNAL TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"recover",children:"RECOVER"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to recover deleted database, table or partition."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE <db_name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [<db_name>.]<table_name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover partition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name FROM [<db_name>.]<table_name>\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"It can only recover meta-information deleted some time ago. The default time: one day. (You can change it through parameter configuration catalog_trash_expire_second in fe.conf. )"}),"\n",(0,t.jsx)(n.li,{children:"If the meta-information is deleted with an identical meta-information created, the previous one will not be recovered."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover database named example_db"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover table name example_tbl"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Recover partition named p1 in the example_tbl table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},n)}}}]);