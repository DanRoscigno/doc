"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51741],{89018:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=t(85893),s=t(11151);const r={displayed_sidebar:"documentation"},c="Query external data",o={id:"data_source/catalog/query_external_data",title:"Query external data",description:"This topic guides you through querying data from external data sources by using external catalogs.",source:"@site/versioned_docs/version-3.1/data_source/catalog/query_external_data.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/query_external_data",permalink:"/doc/docs/data_source/catalog/query_external_data",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/data_source/catalog/query_external_data.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Paimon catalog",permalink:"/doc/docs/data_source/catalog/paimon_catalog"},next:{title:"(To be deprecated) External table",permalink:"/doc/docs/data_source/External_table"}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",ul:"ul",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"query-external-data",children:"Query external data"}),"\n",(0,n.jsx)(a.p,{children:"This topic guides you through querying data from external data sources by using external catalogs."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(a.p,{children:["External catalogs are created based on external data sources. For information about supported types of external catalogs, see ",(0,n.jsx)(a.a,{href:"/doc/docs/data_source/catalog/catalog_overview#catalog",children:"Catalog"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Connect your StarRocks cluster."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["If you use the MySQL client to connect the StarRocks cluster, you go to ",(0,n.jsx)(a.code,{children:"default_catalog"})," by default after connecting."]}),"\n",(0,n.jsxs)(a.li,{children:["If you use JDBC to connect the StarRocks cluster, you can go directly to the destination database in the default catalog by specifying ",(0,n.jsx)(a.code,{children:"default_catalog.db_name"})," when connecting."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["(Optional) Execute the following statement to view all the catalogs and find the external catalog you have created. See ",(0,n.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," to check the output of this statement."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SHOW CATALOGS;\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["(Optional) Execute the following statement to view all the databases in the external catalog. See ",(0,n.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})," to check the output of this statement."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES FROM catalog_name;\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"(Optional) Execute the following statement to go to the destination database in the external catalog."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"USE catalog_name.db_name;\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Query external data. For more usages of the SELECT statement, see ",(0,n.jsx)(a.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM table_name;\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you do not specify the external catalog and database in the preceding steps, you can directly specify them in a select query."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM catalog_name.db_name.table_name;\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(a.p,{children:["If you already created a Hive catalog named ",(0,n.jsx)(a.code,{children:"hive1"})," and want to use ",(0,n.jsx)(a.code,{children:"hive1"})," to query data from ",(0,n.jsx)(a.code,{children:"hive_db.hive_table"})," of an Apache Hive\u2122 cluster, you can perform one of the following operations:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"USE hive1.hive_db;\nSELECT * FROM hive_table limit 1;\n"})}),"\n",(0,n.jsx)(a.p,{children:"Or"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive1.hive_db.hive_table limit 1;\n"})}),"\n",(0,n.jsx)(a.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(a.p,{children:["To query data from your StarRocks cluster, see ",(0,n.jsx)(a.a,{href:"/doc/docs/data_source/catalog/default_catalog",children:"Default catalog"}),"."]})]})}const u=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>r});var n=t(67294);const s=n.createContext({});function r(e){const a=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:r(e),n.createElement(s.Provider,{value:o},a)}}}]);