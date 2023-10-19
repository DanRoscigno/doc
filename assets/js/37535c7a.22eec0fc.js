"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63559],{19738:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(85893),a=s(11151);const r={displayed_sidebar:"English"},l="SHOW DATABASES",i={id:"sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",title:"SHOW DATABASES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW DATA",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATA"},next:{title:"SHOW DELETE",permalink:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DELETE"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-databases",children:"SHOW DATABASES"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Views databases in your current StarRocks cluster or an external data source. StarRocks supports viewing databases of an external data source from v2.3 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES [FROM <catalog_name>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"catalog_name"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["The name of the internal catalog or an external catalog.",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["If you do not specify the parameter or specify the name of the internal catalog, which is ",(0,t.jsx)(n.code,{children:"default_catalog"}),", you can view databases in your current StarRocks cluster."]}),(0,t.jsxs)("li",{children:["If you set the value of the parameter to the name of an external catalog, you can view databases in the corresponding external data source. You can run ",(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," to view internal and external catalogs."]})]})]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: View databases in your current StarRocks cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES FROM default_catalog;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output of the preceding statements is as follows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"+----------+\n| Database |\n+----------+\n| db1      |\n| db2      |\n| db3      |\n+----------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: View databases in a Hive cluster by using the ",(0,t.jsx)(n.code,{children:"Hive1"})," external catalog."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES FROM hive1;\n\n+-----------+\n| Database  |\n+-----------+\n| hive_db1  |\n| hive_db2  |\n| hive_db3  |\n+-----------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(a.Provider,{value:i},n)}}}]);