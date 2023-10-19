"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65954],{48169:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(85893),r=t(11151);const i={displayed_sidebar:"English"},a="ALTER RESOURCE",o={id:"sql-reference/sql-statements/data-definition/ALTER_RESOURCE",title:"ALTER RESOURCE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/ALTER_RESOURCE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ALTER MATERIALIZED VIEW",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW"},next:{title:"ALTER TABLE",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"alter-resource",children:"ALTER RESOURCE"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"You can use the ALTER RESOURCE statement to modify the properties of a resource."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'ALTER RESOURCE \'resource_name\' SET PROPERTIES ("key"="value", ...)\n'})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"resource_name"}),": the name of the resource to be modified."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:'PROPERTIES ("key"="value", ...)'}),": the properties of the resource. You can modify different properties based on resource types. Currently, StarRocks supports modifying the URI of the Hive metastore of the following resources."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Apache Iceberg resources support modifying the following properties:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"iceberg.catalog-impl"}),": the fully qualified class name of ",(0,n.jsx)(s.a,{href:"/docs/3.0/data_source/External_table#apache-iceberg-external-table",children:"custom catalog"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"iceberg.catalog.hive.metastore.uris"}),": the URI of the Hive metastore."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Apache Hive\u2122 resources and Apache Hudi resources support modifying ",(0,n.jsx)(s.code,{children:"hive.metastore.uris"}),", which indicates the URI of the Hive metastore."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsx)(s.p,{children:"After you reference a resource to create an external table, if you modify the URI of the Hive metastore of this resource, the external table becomes unavailable. If you still want to use the external table to query data, make sure that the new metastore contains a table whose name and schema are the same as that in the original metastore."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Modify the URI of the Hive metastore of Hive resource ",(0,n.jsx)(s.code,{children:"hive0"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'ALTER RESOURCE \'hive0\' SET PROPERTIES ("hive.metastore.uris" = "thrift://10.10.44.91:9083")\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),n.createElement(r.Provider,{value:o},s)}}}]);