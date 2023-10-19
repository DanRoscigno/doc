"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44032],{62045:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=a(85893),t=a(11151);const l={displayed_sidebar:"English"},r="MAP",c={id:"sql-reference/sql-statements/data-types/Map",title:"MAP",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/Map.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/Map",permalink:"/docs/sql-reference/sql-statements/data-types/Map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/Map.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"JSON",permalink:"/docs/sql-reference/sql-statements/data-types/JSON"},next:{title:"STRUCT",permalink:"/docs/sql-reference/sql-statements/data-types/STRUCT"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Define a MAP column in StarRocks",id:"define-a-map-column-in-starrocks",level:2},{value:"Construct maps in SQL",id:"construct-maps-in-sql",level:2},{value:"Load MAP data into StarRocks",id:"load-map-data-into-starrocks",level:2},{value:"INSERT INTO",id:"insert-into",level:3},{value:"Load MAP data from ORC and Parquet files",id:"load-map-data-from-orc-and-parquet-files",level:3},{value:"Access MAP data",id:"access-map-data",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",strong:"strong",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"map",children:"MAP"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["MAP is a complex data type that stores a set of key-value pairs, for example, ",(0,s.jsx)(n.code,{children:"{a:1, b:2, c:3}"}),". Keys in a map must be unique. A nested map can contain up to 14 levels of nesting."]}),"\n",(0,s.jsx)(n.p,{children:"The MAP data type is supported from v3.1 onwards. In v3.1, you can define MAP columns when you create a StarRocks table, load MAP data into that table, and query MAP data."}),"\n",(0,s.jsxs)(n.p,{children:["From v2.5 onwards, StarRocks supports querying complex data types MAP and STRUCT from data lakes. You can use external catalogs provided by StarRocks to query MAP and STRUCT data from Apache Hive\u2122, Apache Hudi, and Apache Iceberg. You can only query data from ORC and Parquet files. For more information about how to use external catalogs to query external data sources, see ",(0,s.jsx)(n.a,{href:"/docs/data_source/catalog/catalog_overview",children:"Overview of catalogs"})," and topics related to the required catalog type."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"MAP<key_type,value_type>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key_type"}),": the data type of the key. The key must be of a primitive type supported by StarRocks, such as numeric, string, or date. It cannot be of the HLL, JSON, ARRAY, MAP, BITMAP, or STRUCT type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value_type"}),": the data type of the value. The value can be of any supported type."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Keys and values are ",(0,s.jsx)(n.strong,{children:"natively nullable"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"define-a-map-column-in-starrocks",children:"Define a MAP column in StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"You can define a MAP column when you create a table and load MAP data into this column."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Define a one-dimensional map.\nCREATE TABLE t0(\n  c0 INT,\n  c1 MAP<INT,INT>\n)\nDUPLICATE KEY(c0);\n\n-- Define a nested map.\nCREATE TABLE t1(\n  c0 INT,\n  c1 MAP<DATE, MAP<VARCHAR(10), INT>>\n)\nDUPLICATE KEY(c0);\n\n-- Define a NOT NULL map.\nCREATE TABLE t2(\n  c0 INT,\n  c1 MAP<INT,DATETIME> NOT NULL\n)\nDUPLICATE KEY(c0);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Columns with the MAP type have the following restrictions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cannot be used as key columns in a table. They can only be used as value columns."}),"\n",(0,s.jsx)(n.li,{children:"Cannot be used as partition key columns (the columns following PARTITION BY) in a table."}),"\n",(0,s.jsx)(n.li,{children:"Cannot be used as bucketing columns (the columns following DISTRIBUTED BY) in a table."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"construct-maps-in-sql",children:"Construct maps in SQL"}),"\n",(0,s.jsx)(n.p,{children:"Map can be constructed in SQL using the following two syntaxes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"map{key_expr:value_expr, ...}"}),": Map elements are separated by a comma (",(0,s.jsx)(n.code,{children:","}),"), and keys and values are separated by a colon (",(0,s.jsx)(n.code,{children:":"}),"), for example, ",(0,s.jsx)(n.code,{children:"map{a:1, b:2, c:3}"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"map(key_expr, value_expr ...)"}),": The expressions of keys and values must be in pairs, for example, ",(0,s.jsx)(n.code,{children:"map(a,1,b,2,c,3)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"StarRocks can derive the data types of keys and values from all the input keys and values."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select map{1:1, 2:2, 3:3} as numbers;\nselect map(1,1,2,2,3,3) as numbers; -- Return {1:1,2:2,3:3}.\nselect map{1:"apple", 2:"orange", 3:"pear"} as fruit;\nselect map(1, "apple", 2, "orange", 3, "pear") as fruit; -- Return {1:"apple",2:"orange",3:"pear"}.\nselect map{true:map{3.13:"abc"}, false:map{}} as nest;\nselect map(true, map(3.13, "abc"), false, map{}) as nest; -- Return {1:{3.13:"abc"},0:{}}.\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the keys or values have different types, StarRocks automatically derives the appropriate type (supertype)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select map{1:2.2, 1.2:21} as floats_floats; -- Return {1.0:2.2,1.2:21.0}.\nselect map{12:"a", "100":1, NULL:NULL} as string_string; -- Return {"12":"a","100":"1",null:null}.\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also define the data type using ",(0,s.jsx)(n.code,{children:"<>"})," when you construct a map. The input keys or values must be able to cast into the specified types."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'select map<FLOAT,INT>{1:2}; -- Return {1:2}.\nselect map<INT,INT>{"12": "100"}; -- Return {12:100}.\n'})}),"\n",(0,s.jsx)(n.p,{children:"Keys and values are nullable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select map{1:NULL};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Construct empty maps."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select map{} as empty_map;\nselect map() as empty_map; -- Return {}.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"load-map-data-into-starrocks",children:"Load MAP data into StarRocks"}),"\n",(0,s.jsxs)(n.p,{children:["You can load map data into StarRocks using two methods: ",(0,s.jsx)(n.a,{href:"/docs/loading/InsertInto",children:"INSERT INTO"}),", and ",(0,s.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"ORC/Parquet loading"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Note that StarRocks will remove duplicate keys of each map when loading MAP data."}),"\n",(0,s.jsx)(n.h3,{id:"insert-into",children:"INSERT INTO"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"  CREATE TABLE t0(\n    c0 INT,\n    c1 MAP<INT,INT>\n  )\n  DUPLICATE KEY(c0);\n\n  INSERT INTO t0 VALUES(1, map{1:2,3:NULL});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"load-map-data-from-orc-and-parquet-files",children:"Load MAP data from ORC and Parquet files"}),"\n",(0,s.jsxs)(n.p,{children:["The MAP data type in StarRocks corresponds to the map structure in ORC or Parquet format. No additional specification is needed. You can load MAP data from ORC or Parquet files by following the instructions in ",(0,s.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"ORC/Parquet loading"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"access-map-data",children:"Access MAP data"}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Query MAP column ",(0,s.jsx)(n.code,{children:"c1"})," from table ",(0,s.jsx)(n.code,{children:"t0"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select c1 from t0;\n+--------------+\n| c1           |\n+--------------+\n| {1:2,3:null} |\n+--------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Use the ",(0,s.jsx)(n.code,{children:"[ ]"})," operator to retrieve values from a map by key, or use the ",(0,s.jsx)(n.code,{children:"element_at(any_map, any_key)"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example queries the value corresponding to key ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select map{1:2,3:NULL}[1];\n+-----------------------+\n| map(1, 2, 3, NULL)[1] |\n+-----------------------+\n|                     2 |\n+-----------------------+\n\nmysql> select element_at(map{1:2,3:NULL},1);\n+--------------------+\n| map{1:2,3:NULL}[1] |\n+--------------------+\n|                  2 |\n+--------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the key does not exist in the map, ",(0,s.jsx)(n.code,{children:"NULL"})," is returned."]}),"\n",(0,s.jsx)(n.p,{children:"The following example queries the value corresponding to key 2, which does not exist."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select map{1:2,3:NULL}[2];\n+-----------------------+\n| map(1, 2, 3, NULL)[2] |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 3: Query multidimensional maps ",(0,s.jsx)(n.strong,{children:"recursively"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The following example first queries the value corresponding to key ",(0,s.jsx)(n.code,{children:"1"}),", which is ",(0,s.jsx)(n.code,{children:"map{2:1}"})," and then recursively queries the value corresponding to key ",(0,s.jsx)(n.code,{children:"2"})," in ",(0,s.jsx)(n.code,{children:"map{2:1}"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select map{1:map{2:1},3:NULL}[1][2];\n\n+----------------------------------+\n| map(1, map(2, 1), 3, NULL)[1][2] |\n+----------------------------------+\n|                                1 |\n+----------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/map-functions/map_values",children:"Map functions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/array-functions/element_at",children:"element_at"})}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>l});var s=a(67294);const t=s.createContext({});function l(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||r:l(e),s.createElement(t.Provider,{value:c},n)}}}]);