"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93665],{92986:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=a(85893),t=a(11151);const r={},i="cardinality",c={id:"sql-reference/sql-functions/map-functions/cardinality",title:"cardinality",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/cardinality.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/cardinality",permalink:"/docs/3.0/sql-reference/sql-functions/map-functions/cardinality",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/map-functions/cardinality.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"regexp_replace",permalink:"/docs/3.0/sql-reference/sql-functions/like_predicate-functions/regexp_replace"},next:{title:"element_at",permalink:"/docs/3.0/sql-reference/sql-functions/map-functions/element_at"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cardinality",children:"cardinality"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the number of elements in a MAP value. MAP is an unordered collection of key-value pairs, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'}),". One key-value pair constitutes one element. ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'})," contains two elements."]}),"\n",(0,s.jsxs)(n.p,{children:["This function is supported from v3.0 onwards. It is the alias of ",(0,s.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/map-functions/map_size",children:"map_size()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["From version 2.5, StarRocks supports querying complex data types MAP and STRUCT from data lakes. MAP is an unordered collection of key-value pairs, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'}),". One key-value pair constitutes one element, for example, ",(0,s.jsx)(n.code,{children:'{"a":1, "b":2}'})," contains two elements."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use external catalogs provided by StarRocks to query MAP and STRUCT data from Apache Hive\u2122, Apache Hudi, and Apache Iceberg. You can only query data from ORC and Parquet files. For more information about how to use external catalogs to query external data sources, see ",(0,s.jsx)(n.a,{href:"/docs/3.0/data_source/catalog/catalog_overview",children:"Overview of catalogs"})," and topics related to the required catalog type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT cardinality(any_map)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_map"}),": the MAP value from which you want to retrieve the number of elements."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the INT value."}),"\n",(0,s.jsx)(n.p,{children:"If the input is NULL, NULL is returned."}),"\n",(0,s.jsx)(n.p,{children:"If a key or value in the MAP value is NULL, NULL is processed as a normal value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["This example uses the Hive table ",(0,s.jsx)(n.code,{children:"hive_map"}),", which contains the following data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'select * from hive_map order by col_int;\n+---------+---------------+\n| col_int | col_map       |\n+---------+---------------+\n|       1 | {"a":1,"b":2} |\n|       2 | {"c":3}       |\n|       3 | {"d":4,"e":5} |\n+---------+---------------+\n3 rows in set (0.05 sec)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After a ",(0,s.jsx)(n.a,{href:"/docs/3.0/data_source/catalog/hive_catalog#create-a-hive-catalog",children:"Hive catalog"})," is created in your cluster, you can use this catalog and the cardinality() function to obtain the number of elements in each row of the ",(0,s.jsx)(n.code,{children:"cardinality"})," column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select cardinality(col_map) from hive_map order by col_int;\n+----------------------+\n| cardinality(col_map) |\n+----------------------+\n|                    2 |\n|                    1 |\n|                    2 |\n+----------------------+\n3 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"CARDINALITY,MAP_LENGTH,MAP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>r});var s=a(67294);const t=s.createContext({});function r(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||i:r(e),s.createElement(t.Provider,{value:c},n)}}}]);