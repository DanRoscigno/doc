"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74240],{81210:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(85893),a=s(11151);const i={},r="ALTER DATABASE",l={id:"sql-reference/sql-statements/data-definition/ALTER DATABASE",title:"ALTER DATABASE",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER DATABASE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER DATABASE",permalink:"/docs/sql-reference/sql-statements/data-definition/ALTER DATABASE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER DATABASE.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"UNINSTALL PLUGIN",permalink:"/docs/sql-reference/sql-statements/Administration/UNINSTALL PLUGIN"},next:{title:"ALTER MATERIALIZED VIEW",permalink:"/docs/sql-reference/sql-statements/data-definition/ALTER MATERIALIZED VIEW"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function A(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code",ul:"ul",a:"a"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-database",children:"ALTER DATABASE"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Configures the properties of the specified database. (Administrator only)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set database data quota in B/K/KB/M/MB/G/GB/T/TB/P/PB unit."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET DATA QUOTA quota;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rename the database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name RENAME new_db_name;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set database replica quota"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET REPLICA QUOTA quota;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"After renaming the database, use REVOKE and GRANT commands to modify the corresponding user permission if necessary.\nThe database's default data quota and the default replica quota are 2^63-1.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set specified database data quota"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET DATA QUOTA 10995116277760;\n-- The above unit is bytes, equivalent to the following statement.\nALTER DATABASE example_db SET DATA QUOTA 10T;\nALTER DATABASE example_db SET DATA QUOTA 100G;\nALTER DATABASE example_db SET DATA QUOTA 200M;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Rename the database example_db as example_db2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db RENAME example_db2;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set specified database replica quota"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET REPLICA QUOTA 102400;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-definition/CREATE%20DATABASE",children:"CREATE DATABASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/SHOW%20DATABASES",children:"SHOW DATABASES"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-definition/DROP%20DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(A,e)})):A(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const a=t.createContext({});function i(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(a.Provider,{value:l},n)}}}]);