"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10729],{7269:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(85893),n=t(11151);const r={displayed_sidebar:"documentation"},i="USE",d={id:"sql-reference/sql-statements/data-definition/USE",title:"USE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/USE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/USE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/USE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/USE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"TRUNCATE TABLE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE"},next:{title:"CREATE FUNCTION",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/create-function"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"use",children:"USE"}),"\n",(0,a.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(s.p,{children:"Specifies the active database for your session. You can then perform operations, such as creating tables and executing queries."}),"\n",(0,a.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"USE [<catalog_name>.]<db_name>\n"})}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Parameter"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Required"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Description"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"catalog_name"}),(0,a.jsx)(s.td,{children:"No"}),(0,a.jsxs)(s.td,{children:["The catalog name.",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["If this parameter is not specified, a database in ",(0,a.jsx)(s.code,{children:"default_catalog"})," is used by default."]}),(0,a.jsx)("li",{children:"You must specify this parameter when you use a database from an external catalog. For more information, see Example 2."}),(0,a.jsx)("li",{children:"You must specify this parameter when you switch databases between different catalogs. For more information, see Example 3."})]}),"For more information about catalogs, see ",(0,a.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/catalog_overview",children:"Overview"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"db_name"}),(0,a.jsx)(s.td,{children:"Yes"}),(0,a.jsx)(s.td,{children:"The database name. The database must exist."})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(s.p,{children:["Example 1: Use ",(0,a.jsx)(s.code,{children:"example_db"})," from ",(0,a.jsx)(s.code,{children:"default_catalog"})," as the active database of your session."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"USE default_catalog.example_db;\n"})}),"\n",(0,a.jsx)(s.p,{children:"Or"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"USE example_db;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Example 2: Use ",(0,a.jsx)(s.code,{children:"example_db"})," from ",(0,a.jsx)(s.code,{children:"hive_catalog"})," as the active database of your session."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"USE hive_catalog.example_db;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Example 3: Switch the active database of your session from ",(0,a.jsx)(s.code,{children:"hive_catalog.example_table1"})," to ",(0,a.jsx)(s.code,{children:"iceberg_catalog.example_table2"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"USE iceberg_catalog.example_table2;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>d,ah:()=>r});var a=t(67294);const n=a.createContext({});function r(e){const s=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:r(e),a.createElement(n.Provider,{value:d},s)}}}]);