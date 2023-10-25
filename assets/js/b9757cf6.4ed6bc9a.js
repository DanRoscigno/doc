"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69733],{37622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},l="DROP TABLE",r={id:"sql-reference/sql-statements/data-definition/DROP_TABLE",title:"DROP TABLE",description:"description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-statements/data-definition/DROP_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_TABLE",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/DROP_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_TABLE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP RESOURCE",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/DROP_RESOURCE"},next:{title:"DROP VIEW",permalink:"/docs/2.3/sql-reference/sql-statements/data-definition/DROP_VIEW"}},d={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-table",children:"DROP TABLE"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to delete a table."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP TABLE [IF EXISTS] [db_name.]table_name [FORCE]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If a table was deleted within 24 hours by using the DROP TABLE statement, you can use the ",(0,s.jsx)(n.a,{href:"/docs/2.3/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})," statement to restore the table."]}),"\n",(0,s.jsx)(n.li,{children:"If DROP Table FORCE is executed, the table will be deleted directly and cannot be recovered without checking whether there are unfinished activities in the database.  Generally this operation is not recommended."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop a table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If it exists, then drop the table on the specified database."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS example_db.my_table;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Force to drop the table and clear its data on disk."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP TABLE my_table FORCE;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"DROP,TABLE"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:a(e),s.createElement(i.Provider,{value:r},n)}}}]);