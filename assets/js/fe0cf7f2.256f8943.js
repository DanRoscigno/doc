"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32577],{24587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>E,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(85893),a=n(11151);const i={displayed_sidebar:"English"},l="CREATE TABLE LIKE",r={id:"sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",title:"CREATE TABLE LIKE",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE TABLE AS SELECT",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT"},next:{title:"CREATE VIEW",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/CREATE_VIEW"}},d={},c=[{value:"description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-table-like",children:"CREATE TABLE LIKE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to create an identical empty table based on the structure of another table."}),"\n",(0,s.jsx)(t.p,{children:"Syntax:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The replicated table structures include Column Definition, Partitions, Table Properties, etc."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SELECT"}),"permission is required on the original table."]}),"\n",(0,s.jsx)(t.li,{children:"Support to copy external table such as MySQL."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test1 Database, create an empty table with the same table structure as table1, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test2 Database, create an empty table with the same table structure as test1.table1, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Under the test1 Database, create an empty table with the same table structure as MySQL external table, named table2."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"CREATE,TABLE,LIKE"})]})}const E=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>i});var s=n(67294);const a=s.createContext({});function i(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:i(e),s.createElement(a.Provider,{value:r},t)}}}]);