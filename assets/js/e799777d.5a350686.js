"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50505],{20799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},a="DROP DATABASE",d={id:"sql-reference/sql-statements/data-definition/DROP_DATABASE",title:"DROP DATABASE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/DROP_DATABASE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_DATABASE",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_DATABASE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_DATABASE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"DROP CATALOG",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_CATALOG"},next:{title:"DROP INDEX",permalink:"/doc/docs/sql-reference/sql-statements/data-definition/DROP_INDEX"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",ol:"ol",li:"li",ul:"ul",a:"a"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-database",children:"DROP DATABASE"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Drops a database in StarRocks."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"This operation requires the DROP privilege on the destination database."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP DATABASE [IF EXISTS] <db_name> [FORCE]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"After executing DROP DATABASE for a while, you can restore the dropped database through RECOVER statement. See RECOVER statement for more detail."}),"\n",(0,s.jsx)(n.li,{children:"If DROP DATABASE FORCE is executed, the database will be deleted directly and cannot be recovered without checking whether there are unfinished activities in the database.  Generally this operation is not recommended."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop database db_text."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP DATABASE db_test;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:d},n)}}}]);