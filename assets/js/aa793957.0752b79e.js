"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74037],{82833:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(85893),t=s(11151);const r={displayed_sidebar:"documentation"},i="map_size",o={id:"sql-reference/sql-functions/map-functions/map_size",title:"map_size",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/map-functions/map_size.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_size",permalink:"/doc/docs/2.5/sql-reference/sql-functions/map-functions/map_size",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/map-functions/map_size.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"map_keys",permalink:"/doc/docs/2.5/sql-reference/sql-functions/map-functions/map_keys"},next:{title:"map_values",permalink:"/doc/docs/2.5/sql-reference/sql-functions/map-functions/map_values"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"map_size",children:"map_size"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns the number of elements in a MAP value."}),"\n",(0,a.jsxs)(n.p,{children:["From version 2.5, StarRocks supports querying complex data types MAP and STRUCT from data lakes. MAP is an unordered collection of key-value pairs, for example, ",(0,a.jsx)(n.code,{children:'{"a":1, "b":2}'}),". One key-value pair constitutes one element, for example, ",(0,a.jsx)(n.code,{children:'{"a":1, "b":2}'})," contains two elements."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use external catalogs provided by StarRocks to query MAP and STRUCT data from Apache Hive\u2122, Apache Hudi, and Apache Iceberg. You can only query data from ORC and Parquet files. For more information about how to use external catalogs to query external data sources, see ",(0,a.jsx)(n.a,{href:"/doc/docs/2.5/data_source/catalog/catalog_overview",children:"Overview of catalogs"})," and topics related to the required catalog type."]}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"INT map_size(any_map)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),": the MAP value from which you want to retrieve the number of elements."]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a value of the INT value."}),"\n",(0,a.jsx)(n.p,{children:"If the input is NULL, NULL is returned."}),"\n",(0,a.jsx)(n.p,{children:"If a key or value in the MAP value is NULL, NULL is processed as a normal value."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["This example uses the Hive table ",(0,a.jsx)(n.code,{children:"hive_map"}),", which contains the following data:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:'select * from hive_map order by col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After a Hive catalog is created in your database, you can use this catalog and the map_size() function to obtain the number of elements in each row of the ",(0,a.jsx)(n.code,{children:"col_map"})," column."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plaintext",children:"select map_size(col_map) from hive_map order by col_int;\n+-------------------+\n| map_size(col_map) |\n+-------------------+\n|                 2 |\n|                 1 |\n|                 2 |\n+-------------------+\n3 rows in set (0.05 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var a=s(67294);const t=a.createContext({});function r(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),a.createElement(t.Provider,{value:o},n)}}}]);