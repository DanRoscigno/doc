"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6995],{95938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(85893),a=s(11151);const i={displayed_sidebar:"documentation"},l="SHOW ALTER TABLE",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_ALTER",title:"SHOW ALTER TABLE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SELECT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT"},next:{title:"SHOW ALTER MATERIALIZED VIEW",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-alter-table",children:"SHOW ALTER TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Shows the execution of ongoing ALTER TABLE tasks."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE {COLUMN | ROLLUP} [FROM <db_name>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"COLUMN | ROLLUP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If COLUMN is specified, this statement shows tasks for modifying columns. If you need to nest a WHERE clause, the supported syntax is ",(0,t.jsx)(n.code,{children:"[WHERE TableName|CreateTime|FinishTime|State] [ORDER BY] [LIMIT]"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If ROLLUP is specified, this statement shows tasks for creating or deleting ROLLUP indexes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"db_name"}),": optional. If ",(0,t.jsx)(n.code,{children:"db_name"})," is not specified, the current database is used by default."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Show column modification tasks in the current database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE COLUMN;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Show the latest column modification task of a table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW ALTER TABLE COLUMN WHERE TableName = "table1"\nORDER BY CreateTime DESC LIMIT 1;\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 3: Show tasks for creating or deleting ROLLUP indexes in a specified database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE ROLLUP FROM example_db;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",children:"SHOW TABLES"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(a.Provider,{value:r},n)}}}]);