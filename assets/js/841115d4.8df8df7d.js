"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73413],{5787:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(85893),a=r(11151);const t={displayed_sidebar:"English"},i="Arrays",c={id:"using_starrocks/Array",title:"Arrays",description:"Background",source:"@site/versioned_docs/version-2.2/using_starrocks/Array.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Array",permalink:"/docs/2.2/using_starrocks/Array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Array.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Spark StarRocks Connector",permalink:"/docs/2.2/unloading/Spark_connector"},next:{title:"Colocate Join",permalink:"/docs/2.2/using_starrocks/Colocation_join"}},l={},o=[{value:"Background",id:"background",level:2},{value:"Array usage",id:"array-usage",level:2},{value:"Array definition",id:"array-definition",level:3},{value:"Construct arrays in SQL",id:"construct-arrays-in-sql",level:3},{value:"Array import",id:"array-import",level:3},{value:"Array element access",id:"array-element-access",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"arrays",children:"Arrays"}),"\n",(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(n.p,{children:"Arrays, as an extended type of database, are supported in PG, ClickHouse, Snowflake and other systems. They can be widely used in scenarios such as A/B tests, user tag analysis, and crowd profilings. StarRocks supports multidimensional array nesting, array slicing, comparison, and filtering."}),"\n",(0,s.jsx)(n.h2,{id:"array-usage",children:"Array usage"}),"\n",(0,s.jsx)(n.h3,{id:"array-definition",children:"Array definition"}),"\n",(0,s.jsx)(n.p,{children:"The following is an example of defining an array column in StarRocks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- One-dimensional arrays\ncreate table t0(\n  c0 INT,\n  c1 `ARRAY<INT>`\n)\nduplicate key(c0);\n\n-- Define nested arrays\ncreate table t1(\n  c0 INT,\n  c1 `ARRAY<ARRAY<VARCHAR(10)>>`\n)\nduplicate key(c0);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As above, the array column is defined in the form of ",(0,s.jsx)(n.code,{children:"ARRAY"})," and its ",(0,s.jsx)(n.code,{children:"TYPE"})," has  a default value of ",(0,s.jsx)(n.code,{children:"nullable"}),". Currently, StarRocks does not support specifying ",(0,s.jsx)(n.code,{children:"TYPE"})," as ",(0,s.jsx)(n.code,{children:"NOT NULL"}),", but you can define the array itself as ",(0,s.jsx)(n.code,{children:"NOT NULL"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"create table t2(\n  c0 INT,\n  c1 `ARRAY<INT>` NOT NULL\n)\nduplicate key(c0)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The array type has the following restrictions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The array columns can be only defined in duplicate tables"}),"\n",(0,s.jsx)(n.li,{children:"Array columns cannot be used as key columns (may be supported later)"}),"\n",(0,s.jsx)(n.li,{children:"Array columns cannot be used as distribution columns"}),"\n",(0,s.jsx)(n.li,{children:"Array columns cannot be used as partition columns"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"construct-arrays-in-sql",children:"Construct arrays in SQL"}),"\n",(0,s.jsx)(n.p,{children:'Arrays can be constructed in SQL using brackets ("[" and "]"), with each array element separated by a comma (",")'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select [1, 2, 3] as numbers;\nselect ["apple", "orange", "pear"] as fruit;\nselect [true, false] as booleans;\n'})}),"\n",(0,s.jsx)(n.p,{children:"When array elements have different types, StarRocks will automatically derive the appropriate type (supertype)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select [1, 1.2] as floats;\nselect [12, "100"]; -- The result is ["12", "100"].\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can use pointed brackets (",(0,s.jsx)(n.code,{children:"<>"}),") to show the declared array type."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select `ARRAY<float>`[1, 2];\nselect `ARRAY<INT>`["12", "100"]; -- The result is [12, 100].\n'})}),"\n",(0,s.jsx)(n.p,{children:"NULL can be included in the element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select [1, NULL];\n"})}),"\n",(0,s.jsx)(n.p,{children:"For empty arrays, you can use pointed brackets to show the declared type, or you can write [] directly for StarRocks to infer the type based on the context. If StarRocks can\u2019t infer the type, it will report an error."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select [];\nselect `ARRAY<VARCHAR(10)>`[];\nselect array_append([], 10);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"array-import",children:"Array import"}),"\n",(0,s.jsx)(n.p,{children:"There are three ways to write array values to StarRocks. Insert into is suitable for small-scale data testing. ORC Parquet inport and CSV import are suitable for large-scale data import."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"INSERT INTO"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"create table t0(c0 INT, c1 `ARRAY<INT>`)duplicate key(c0);\nINSERT INTO t0 VALUES(1, [1,2,3]);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Import from ORC Parquet file"})}),"\n",(0,s.jsx)(n.p,{children:"The array type in StarRocks corresponds to the list structure in ORC/Parquet format; no additional specification is needed. Currently ORC list structure can be imported directly."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Import from CSV file"})}),"\n",(0,s.jsx)(n.p,{children:"The array of CSV files is separated by comma by default. You can use stream load or routine load to import CSV files or CSV format data in Kafka."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"array-element-access",children:"Array element access"}),"\n",(0,s.jsxs)(n.p,{children:["Access an element of an array using ",(0,s.jsx)(n.code,{children:"[ ]"})," and subscripts, starting with ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][1];\n\n+------------+\n| [1,2,3][1] |\n+------------+\n|          1 |\n+------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the subscript is 0 or a negative number, ",(0,s.jsx)(n.strong,{children:"no error will be reported and NULL will be returned"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][0];\n\n+------------+\n| [1,2,3][0] |\n+------------+\n|       NULL |\n+------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the subscript exceeds the size of the array, ",(0,s.jsx)(n.strong,{children:"NULL will be returned"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select [1,2,3][4];\n\n+------------+\n| [1,2,3][4] |\n+------------+\n|       NULL |\n+------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For multidimensional arrays, the internal elements can be accessed ",(0,s.jsx)(n.strong,{children:"recursively"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql(ARRAY)> select [[1,2],[3,4]][2];\n\n+------------------+\n| [[1,2],[3,4]][2] |\n+------------------+\n| [3,4]            |\n+------------------+\n1 row in set (0.00 sec)\n\nmysql> select [[1,2],[3,4]][2][1];\n\n+---------------------+\n| [[1,2],[3,4]][2][1] |\n+---------------------+\n|                   3 |\n+---------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(a.Provider,{value:c},n)}}}]);