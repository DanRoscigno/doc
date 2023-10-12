"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61538],{76867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var s=t(85893),a=t(11151);const o={displayed_sidebar:"documentation"},r="JSON",d={id:"sql-reference/sql-statements/data-types/JSON",title:"JSON",description:"StarRocks starts to support the JSON data type since v2.2.0. This topic describes the basic concepts of JSON. It also describes how to create a JSON column, load JSON data, query JSON data, and use JSON functions and operators to construct and process JSON data.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/JSON.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/JSON",permalink:"/doc/docs/sql-reference/sql-statements/data-types/JSON",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/JSON.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ARRAY",permalink:"/doc/docs/sql-reference/sql-statements/data-types/Array"},next:{title:"MAP",permalink:"/doc/docs/sql-reference/sql-statements/data-types/Map"}},c={},i=[{value:"What is JSON",id:"what-is-json",level:2},{value:"Use JSON data",id:"use-json-data",level:2},{value:"Create a JSON column",id:"create-a-json-column",level:3},{value:"Load data and store the data as JSON data",id:"load-data-and-store-the-data-as-json-data",level:3},{value:"Query and process JSON data",id:"query-and-process-json-data",level:3},{value:"JSON functions and operators",id:"json-functions-and-operators",level:2},{value:"Limits and usage notes",id:"limits-and-usage-notes",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"json",children:"JSON"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks starts to support the JSON data type since v2.2.0. This topic describes the basic concepts of JSON. It also describes how to create a JSON column, load JSON data, query JSON data, and use JSON functions and operators to construct and process JSON data."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-json",children:"What is JSON"}),"\n",(0,s.jsxs)(n.p,{children:["JSON is a lightweight, data-interchange format that is designed for semi-structured data. JSON presents data in a hierarchical tree structure, which is flexible and easy to read and write in a wide range of data storage and analytics scenarios. JSON supports ",(0,s.jsx)(n.code,{children:"NULL"})," values and the following data types: NUMBER, STRING, BOOLEAN, ARRAY, and OBJECT."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about JSON, visit the ",(0,s.jsx)(n.a,{href:"http://www.json.org/?spm=a2c63.p38356.0.0.50756b9fVEfwCd",children:"JSON website"}),". For information about the input and output syntax of JSON, see JSON specifications at ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7159?spm=a2c63.p38356.0.0.14d26b9fcp7fcf#page-4",children:"RFC 7159"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports both storage and efficient querying and analytics of JSON data. StarRocks does not directly store the input text. Instead, it stores JSON data in a binary format to reduce the cost of parsing and increase query efficiency."}),"\n",(0,s.jsx)(n.h2,{id:"use-json-data",children:"Use JSON data"}),"\n",(0,s.jsx)(n.h3,{id:"create-a-json-column",children:"Create a JSON column"}),"\n",(0,s.jsxs)(n.p,{children:["When you create a table, you can use the ",(0,s.jsx)(n.code,{children:"JSON"})," keyword to specify the ",(0,s.jsx)(n.code,{children:"j"})," column as a JSON column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `tj` (\n    `id` INT(11) NOT NULL COMMENT "",\n    `j`  JSON NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"load-data-and-store-the-data-as-json-data",children:"Load data and store the data as JSON data"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks provides the following three methods for you to load data and store the data as JSON data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Method 1: Use ",(0,s.jsx)(n.code,{children:"INSERT INTO"})," to write data to a JSON column of a table. In the following example, a table named ",(0,s.jsx)(n.code,{children:"tj"})," is used, and the ",(0,s.jsx)(n.code,{children:"j"})," column of the table is a JSON column."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'INSERT INTO tj (id, j) VALUES (1, parse_json(\'{"a": 1, "b": true}\'));\nINSERT INTO tj (id, j) VALUES (2, parse_json(\'{"a": 2, "b": false}\'));\nINSERT INTO tj (id, j) VALUES (3, parse_json(\'{"a": 3, "b": true}\'));\nINSERT INTO tj (id, j) VALUES (4, json_object(\'a\', 4, \'b\', false)); \n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The parse_json function can interpret STRING data as JSON data. The json_object function can construct a JSON object or convert an existing table to a JSON file. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",children:"parse_json"})," and ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",children:"json_object"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Method 2: Use Stream Load to load a JSON file and store the file as JSON data. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/loading/StreamLoad#load-json-data",children:"Load JSON data"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you want to load a root JSON object, set ",(0,s.jsx)(n.code,{children:"jsonpaths"})," to ",(0,s.jsx)(n.code,{children:"$"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you want to load specific values of a JSON object, set ",(0,s.jsx)(n.code,{children:"jsonpaths"})," to ",(0,s.jsx)(n.code,{children:"$.a"}),", in which ",(0,s.jsx)(n.code,{children:"a"})," specifies a key. For more information about JSON path expressions supported in StarRocks, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators#json-path-expressions",children:"JSON path"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Method 3: Use Broker Load to load a Parquet file and store the file as JSON data. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports the following data type conversions at Parquet file loading."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Data type of Parquet file"}),(0,s.jsx)(n.th,{children:"JSON data type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INTEGER (INT8, INT16, INT32, INT64, UINT8, UINT16, UINT32, and UINT64)"}),(0,s.jsx)(n.td,{children:"NUMBER"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FLOAT and DOUBLE"}),(0,s.jsx)(n.td,{children:"NUMBER"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BOOLEAN"}),(0,s.jsx)(n.td,{children:"BOOLEAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"STRING"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAP"}),(0,s.jsx)(n.td,{children:"OBJECT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"STRUCT"}),(0,s.jsx)(n.td,{children:"OBJECT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LIST"}),(0,s.jsx)(n.td,{children:"ARRAY"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Other data types such as UNION and TIMESTAMP"}),(0,s.jsx)(n.td,{children:"Not supported"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"query-and-process-json-data",children:"Query and process JSON data"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports the querying and processing of JSON data and the use of JSON functions and operators."}),"\n",(0,s.jsxs)(n.p,{children:["In the following examples, a table named ",(0,s.jsx)(n.code,{children:"tj"})," is used, and the ",(0,s.jsx)(n.code,{children:"j"})," column of the table is specified as the JSON column."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'mysql> select * from tj;\n+------+----------------------+\n| id   |          j           |\n+------+----------------------+\n| 1    | {"a": 1, "b": true}  |\n| 2    | {"a": 2, "b": false} |\n| 3    | {"a": 3, "b": true}  |\n| 4    | {"a": 4, "b": false} |\n+------+----------------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Filter the data of the JSON column to retrieve the data that meets the ",(0,s.jsx)(n.code,{children:"id=1"})," filter condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'mysql> select * from tj where id = 1;\n+------+---------------------+\n| id   |           j         |\n+------+---------------------+\n| 1    | {"a": 1, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Filter data of the JSON column ",(0,s.jsx)(n.code,{children:"j"})," to retrieve the data that meets the specified filter condition."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"j->'a'"})," returns JSON data. You can use the first example to compare data (Note that implicit conversion is performed in this example). Alternatively, you can convert JSON data to INT by using the CAST function and then compare the data."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'mysql> select * from tj where j->\'a\' = 1;\n+------+---------------------+\n| id   | j                   |\n+------+---------------------+\n|    1 | {"a": 1, "b": true} |\n\n\nmysql> select * from tj where cast(j->\'a\' as INT) = 1;\n+------+---------------------+\n| id   | j                   |\n+------+---------------------+\n|    1 | {"a": 1, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example 3: Use the CAST function to convert the values in the JSON column of the table to BOOLEAN values. Then, filter the data of the JSON column to retrieve the data that meets the specified filter condition."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'mysql> select * from tj where cast(j->\'b\' as boolean);\n+------+---------------------+\n|  id  |          j          |\n+------+---------------------+\n| 1    | {"a": 1, "b": true} |\n| 3    | {"a": 3, "b": true} |\n+------+---------------------+\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example 4: Use the CAST function to convert the values in the JSON column of the table to BOOLEAN values. Then, filter the data of the JSON column to retrieve the data that meets the specified filter condition, and perform arithmetic operations on the data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select cast(j->'a' as int) from tj where cast(j->'b' as boolean);\n+-----------------------+\n|  CAST(j->'a' AS INT)  |\n+-----------------------+\n|          3            |\n|          1            |\n+-----------------------+\n\nmysql> select sum(cast(j->'a' as int)) from tj where cast(j->'b' as boolean);\n+----------------------------+\n| sum(CAST(j->'a' AS INT))  |\n+----------------------------+\n|              4             |\n+----------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 5: Sort the data of the table by using the JSON column as a sort key."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'mysql> select * from tj\n    ->        where j->\'a\' <= parse_json(\'3\')\n    ->        order by cast(j->\'a\' as int);\n+------+----------------------+\n| id   | j                    |\n+------+----------------------+\n|    1 | {"a": 1, "b": true}  |\n|    2 | {"a": 2, "b": false} |\n|    3 | {"a": 3, "b": true}  |\n|    4 | {"a": 4, "b": false} |\n+------+----------------------+\n4 rows in set (0.05 sec)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"json-functions-and-operators",children:"JSON functions and operators"}),"\n",(0,s.jsxs)(n.p,{children:["You can use JSON functions and operators to construct and process JSON data. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",children:"Overview of JSON functions and operators"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"limits-and-usage-notes",children:"Limits and usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The maximum length of a JSON value is 16 MB."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ORDER BY, GROUP BY, and JOIN clauses do not support references to JSON columns. If you want to create references to JSON columns, use the CAST function to convert JSON columns to SQL columns before you create the references. For more information, see ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"cast"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON columns are supported in Duplicate Key, Primary Key, and Unique Key tables. They are not supported in Aggregate tables."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON columns cannot be used as partition keys, bucketing keys, or dimension columns of DUPLICATE KEY, PRIMARY KEY, and UNIQUE KEY tables. They cannot be used in ORDER BY, GROUP BY, and JOIN clauses."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["StarRocks allows you to use the following JSON comparison operators to query JSON data: ",(0,s.jsx)(n.code,{children:"<"}),", ",(0,s.jsx)(n.code,{children:"<="}),", ",(0,s.jsx)(n.code,{children:">"}),", ",(0,s.jsx)(n.code,{children:">="}),", ",(0,s.jsx)(n.code,{children:"="}),", and ",(0,s.jsx)(n.code,{children:"!="}),". It does not allow you to use ",(0,s.jsx)(n.code,{children:"IN"})," to query JSON data."]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>o});var s=t(67294);const a=s.createContext({});function o(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||r:o(e),s.createElement(a.Provider,{value:d},n)}}}]);