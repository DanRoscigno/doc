"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75422],{88905:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=s(85893),l=s(11151);const i={displayed_sidebar:"English"},a="DROP MATERIALIZED VIEW",r={id:"sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",title:"DROP MATERIALIZED VIEW",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP INDEX",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/DROP_INDEX"},next:{title:"DROP REPOSITORY",permalink:"/docs/2.2/sql-reference/sql-statements/data-definition/DROP_REPOSITORY"}},d={},o=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-materialized-view",children:"DROP MATERIALIZED VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to delete a materialized view. Synchronization syntax."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"IF EXISTS\nIf the materialized view does not exist, don't throw an error. If this keyword is not declared, an error will be reported if the materialized view does not exist."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"mv_name\nThe name of the materialized view to be deleted. Required."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"table_name\nThe name of the table to which the materialized view to be deleted belongs. Required."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.p,{children:"The structure of the table is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> desc all_type_table all;\n+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n|                |       |          |      |       |         |       |\n| k1_sumk2       | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | SUM   |\n+----------------+-------+----------+------+-------+---------+-------+\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drop the materialized view named k1_sumk2 onthe table all_type_table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_sumk2 on all_type_table;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The structure of table whose materialized view is deleted is as follows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------------+-------+----------+------+-------+---------+-------+\n| IndexName      | Field | Type     | Null | Key   | Default | Extra |\n+----------------+-------+----------+------+-------+---------+-------+\n| all_type_table | k1    | TINYINT  | Yes  | true  | N/A     |       |\n|                | k2    | SMALLINT | Yes  | false | N/A     | NONE  |\n|                | k3    | INT      | Yes  | false | N/A     | NONE  |\n|                | k4    | BIGINT   | Yes  | false | N/A     | NONE  |\n|                | k5    | LARGEINT | Yes  | false | N/A     | NONE  |\n|                | k6    | FLOAT    | Yes  | false | N/A     | NONE  |\n|                | k7    | DOUBLE   | Yes  | false | N/A     | NONE  |\n+----------------+-------+----------+------+-------+---------+-------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drop a non-existing materialized view on the table all_type_table."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The delete request reports an error."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drop the materialized view k1_k2 on the table all_type_table. No error is reported if  Materialized view does not exist."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"If it exists, it will be dropped; If it does not exist, no error will be reported."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"DROP, MATERIALIZED, VIEW"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>i});var t=s(67294);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(l.Provider,{value:r},n)}}}]);