"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27319],{47996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(85893),s=a(11151);const i={displayed_sidebar:"documentation"},d="REFRESH EXTERNAL TABLE",r={id:"sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE",title:"REFRESH EXTERNAL TABLE",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"RECOVER",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/RECOVER"},next:{title:"RESTORE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/RESTORE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Syntaxes and parameters",id:"syntaxes-and-parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"External table",id:"external-table",level:3},{value:"External catalog",id:"external-catalog",level:3}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"refresh-external-table",children:"REFRESH EXTERNAL TABLE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Updates Hive and Hudi metadata cached in StarRocks. This statement is used in one of the following scenarios:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"External table"}),": When using a Hive external table or Hudi external table to query data in Apache Hive\u2122 or Apache Hudi, you can execute this statement to update the metadata of a Hive table or Hudi table cached in StarRocks."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"External catalog"}),": When using a ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/data_source/catalog/hive_catalog",children:"Hive catalog"})," or ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/data_source/catalog/hudi_catalog",children:"Hudi catalog"})," to query data in Hive or Hudi, you can execute this statement to update the metadata of a Hive table or Hudi table cached in StarRocks."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hive external table"}),": is created and stored in StarRocks. You can use it to query Hive data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hudi external table"}),": is created and stored in StarRocks. You can use it to query Hudi data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hive table"}),": is created and stored in Hive."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hudi table"}),": is created and stored in Hudi."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"syntaxes-and-parameters",children:"Syntaxes and parameters"}),"\n",(0,n.jsx)(t.p,{children:"The following describes the syntaxes and parameters based on different cases:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"External table"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE table_name \n[PARTITION ('partition_name', ...)]\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"table_name"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The name of a Hive external table or Hudi external table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"partition_name"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The names of the partitions of a Hive table or Hudi table. Specifying this parameter updates the metadata of the partitions of the Hive table and Hudi table cached in StarRocks."})]})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"External catalog"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE [external_catalog.][db_name.]table_name\n[PARTITION ('partition_name', ...)]\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_catalog"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The name of a Hive catalog or Hudi catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"db_name"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The name of the database where a Hive table or Hudi table resides."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"table_name"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The name of a Hive table or a Hudi table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"partition_name"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The names of the partitions of a Hive table or Hudi table. Specifying this parameter updates the metadata of the partitions of the Hive table and Hudi table cached in StarRocks."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.p,{children:["Only users who have the ",(0,n.jsx)(t.code,{children:"ALTER_PRIV"})," privilege can execute this statement to update the metadata of Hive tables and Hudi tables cached in StarRocks."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Usage examples in different cases are as follows:"}),"\n",(0,n.jsx)(t.h3,{id:"external-table",children:"External table"}),"\n",(0,n.jsxs)(t.p,{children:["Example 1: Update the cached metadata of the corresponding Hive table in StarRocks by specifying the external table ",(0,n.jsx)(t.code,{children:"hive1"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hive1;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Example 2: Update the cached metadata of the partitions of the corresponding Hudi table in StarRocks by specifying the external table ",(0,n.jsx)(t.code,{children:"hudi1"})," and the partitions of the corresponding Hudi table."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hudi1\nPARTITION ('date=2022-12-20', 'date=2022-12-21');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"external-catalog",children:"External catalog"}),"\n",(0,n.jsxs)(t.p,{children:["Example 1: Update the cached metadata of ",(0,n.jsx)(t.code,{children:"hive_table"})," in StarRocks."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hive_catalog.hive_db.hive_table;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"USE hive_catalog.hive_db;\nREFRESH EXTERNAL TABLE hive_table;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Example 2: Update the cached metadata of the partitions of ",(0,n.jsx)(t.code,{children:"hudi_table"})," in StarRocks."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"REFRESH EXTERNAL TABLE hudi_catalog.hudi_db.hudi_table\nPARTITION ('date=2022-12-20', 'date=2022-12-21');\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>r,ah:()=>i});var n=a(67294);const s=n.createContext({});function i(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function r({components:e,children:t,disableParentContext:a}){let r;return r=a?"function"==typeof e?e({}):e||d:i(e),n.createElement(s.Provider,{value:r},t)}}}]);