"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70339],{25648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=a(85893),n=a(11151);const r={displayed_sidebar:"documentation"},l="SHOW CREATE CATALOG",c={id:"sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",title:"SHOW CREATE CATALOG",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW CATALOGS",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS"},next:{title:"SHOW CREATE DATABASE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return result",id:"return-result",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-create-catalog",children:"SHOW CREATE CATALOG"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Queries the creation statement of an external catalog, such as a Hive, Iceberg, Hudi, Delta Lake, or JDBC catalog. See ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive Catalog"}),", ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/data_source/catalog/iceberg_catalog",children:"Iceberg Catalog"}),", ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/data_source/catalog/hudi_catalog",children:"Hudi Catalog"}),", ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/data_source/catalog/deltalake_catalog",children:"Delta Lake Catalog"}),", and ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/data_source/catalog/jdbc_catalog",children:"JDBC catalog"}),". Note that authentication-related information in the return result will be anonymized."]}),"\n",(0,s.jsx)(t.p,{children:"This command is supported from v3.0 onwards."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE CATALOG <catalog_name>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"catalog_name"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The name of the catalog whose creation statement you want to view."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"return-result",children:"Return result"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"+------------+-----------------+\n| Catalog    | Create Catalog  |\n+------------+-----------------+\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Field"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Catalog"}),(0,s.jsx)(t.td,{children:"The name of the catalog."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create Catalog"}),(0,s.jsx)(t.td,{children:"The statement that was executed to create the catalog."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["The following example queries the creation statement of a Hive catalog named ",(0,s.jsx)(t.code,{children:"hive_catalog_hms"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW CREATE CATALOG hive_catalog_hms;\n"})}),"\n",(0,s.jsx)(t.p,{children:"The return result is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG `hive_catalog_hms`\nPROPERTIES ("aws.s3.access_key"  =  "AK******M4",\n"hive.metastore.type"  =  "glue",\n"aws.s3.secret_key"  =  "iV******iD",\n"aws.glue.secret_key"  =  "iV******iD",\n"aws.s3.use_instance_profile"  =  "false",\n"aws.s3.region"  =  "us-west-1",\n"aws.glue.region"  =  "us-west-1",\n"type"  =  "hive",\n"aws.glue.access_key"  =  "AK******M4"\n)\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,a)=>{a.d(t,{Zo:()=>c,ah:()=>r});var s=a(67294);const n=s.createContext({});function r(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function c({components:e,children:t,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||l:r(e),s.createElement(n.Provider,{value:c},t)}}}]);