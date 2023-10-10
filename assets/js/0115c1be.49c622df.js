"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44691],{92083:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(85893),n=t(11151);const r={},l="Overview",c={id:"data_source/catalog/catalog_overview",title:"Overview",description:"This topic describes what a catalog is, and how to manage and query internal data and external data by using a catalog.",source:"@site/versioned_docs/version-3.0/data_source/catalog/catalog_overview.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/catalog_overview",permalink:"/docs/3.0/data_source/catalog/catalog_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/data_source/catalog/catalog_overview.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"(To be deprecated) External table",permalink:"/docs/3.0/data_source/External_table"},next:{title:"Default catalog",permalink:"/docs/3.0/data_source/catalog/default_catalog"}},o={},d=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Access catalog",id:"access-catalog",level:2},{value:"Query data",id:"query-data",level:2},{value:"Query internal data",id:"query-internal-data",level:3},{value:"Query external data",id:"query-external-data",level:3},{value:"Cross-catalog query",id:"cross-catalog-query",level:3}];function i(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",a:"a",h3:"h3",code:"code",pre:"pre"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(a.p,{children:"This topic describes what a catalog is, and how to manage and query internal data and external data by using a catalog."}),"\n",(0,s.jsx)(a.p,{children:"StarRocks supports the catalog feature from v2.3 onwards. Catalogs enable you to manage internal and external data in one system and offer a flexible way for you to easily query and analyze data that is stored in various external systems."}),"\n",(0,s.jsx)(a.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Internal data"}),": refers to the data stored in StarRocks."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"External data"}),": refers to the data stored in an external data source, such as Apache Hive\u2122, Apache Iceberg, Apache Hudi, Delta Lake, and JDBC."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(a.p,{children:"Currently, StarRocks provides two types of catalogs: internal catalog and external catalog."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"figure1",src:t(95060).Z+"",width:"682",height:"516"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Internal catalog"})," manages internal data of StarRocks. For example, if you execute the CREATE DATABASE or CREATE TABLE statements to create a database or a table, the database or table is stored in the internal catalog. Each StarRocks cluster has only one internal catalog named ",(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/default_catalog",children:"default_catalog"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"External catalog"})," acts like a link to externally managed metastores, which grants StarRocks direct access to external data sources. You can query external data directly with zero data loading or migration. Currently, StarRocks supports the following types of external catalogs:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/hive_catalog",children:"Hive catalog"}),": used to query data from Hive."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),": used to query data from Iceberg."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),": used to query data from Hudi."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"}),": used to query data from Delta Lake."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/jdbc_catalog",children:"JDBC catalog"}),": used to query data from JDBC-compatible data sources."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"StarRocks interacts with the following two components of external data sources when you query external data:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Metastore service"}),": used by the FEs to access the metadata of external data sources. The FEs generate a query execution plan based on the metadata."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Data storage system"}),": used to store external data. Both distributed file systems and object\nstorage systems can be used as data storage systems to store data files in various formats. After the FEs distribute the query execution plan to all BEs, all BEs scan the target external data in parallel, perform calculations, and then return the query result."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"access-catalog",children:"Access catalog"}),"\n",(0,s.jsxs)(a.p,{children:["You can use the ",(0,s.jsx)(a.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/SET%20CATALOG",children:"SET CATALOG"})," statement to switch to a specified catalog in the current session. Then, you can query data by using that catalog."]}),"\n",(0,s.jsx)(a.h2,{id:"query-data",children:"Query data"}),"\n",(0,s.jsx)(a.h3,{id:"query-internal-data",children:"Query internal data"}),"\n",(0,s.jsxs)(a.p,{children:["To query data in StarRocks, see ",(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/default_catalog",children:"Default catalog"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"query-external-data",children:"Query external data"}),"\n",(0,s.jsxs)(a.p,{children:["To query data from external data sources, see ",(0,s.jsx)(a.a,{href:"/docs/3.0/data_source/catalog/query_external_data",children:"Query external data"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"cross-catalog-query",children:"Cross-catalog query"}),"\n",(0,s.jsxs)(a.p,{children:["To perform a cross-catalog federated query from your current catalog, specify the data you want to query in the ",(0,s.jsx)(a.code,{children:"catalog_name.database_name"})," or ",(0,s.jsx)(a.code,{children:"catalog_name.database_name.table_name"})," format."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Query ",(0,s.jsx)(a.code,{children:"hive_table"})," in ",(0,s.jsx)(a.code,{children:"hive_db"})," when the current session is ",(0,s.jsx)(a.code,{children:"default_catalog.olap_db"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_catalog.hive_db.hive_table;\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Query ",(0,s.jsx)(a.code,{children:"olap_table"})," in ",(0,s.jsx)(a.code,{children:"default_catalog"})," when the current session is ",(0,s.jsx)(a.code,{children:"hive_catalog.hive_db"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:" SELECT * FROM default_catalog.olap_db.olap_table;\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Perform a JOIN query on ",(0,s.jsx)(a.code,{children:"hive_table"})," in ",(0,s.jsx)(a.code,{children:"hive_catalog"})," and ",(0,s.jsx)(a.code,{children:"olap_table"})," in ",(0,s.jsx)(a.code,{children:"default_catalog"})," when the current session is ",(0,s.jsx)(a.code,{children:"hive_catalog.hive_db"}),"."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n"})}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Perform a JOIN query on ",(0,s.jsx)(a.code,{children:"hive_table"})," in ",(0,s.jsx)(a.code,{children:"hive_catalog"})," and ",(0,s.jsx)(a.code,{children:"olap_table"})," in ",(0,s.jsx)(a.code,{children:"default_catalog"})," by using a JOIN clause when the current session is another catalog."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_catalog.hive_db.hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},95060:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/3.8.1-3877496808d343156c79175992f421b3.png"},11151:(e,a,t)=>{t.d(a,{Zo:()=>c,ah:()=>r});var s=t(67294);const n=s.createContext({});function r(e){const a=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const l={};function c({components:e,children:a,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(n.Provider,{value:c},a)}}}]);