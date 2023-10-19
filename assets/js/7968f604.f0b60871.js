"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4111],{67360:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(85893),t=s(11151);const i={displayed_sidebar:"English"},r="BINARY/VARBINARY",l={id:"sql-reference/sql-statements/data-types/BINARY",title:"BINARY/VARBINARY",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/BINARY.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/BINARY",permalink:"/docs/sql-reference/sql-statements/data-types/BINARY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/BINARY.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"String",permalink:"/docs/category/string"},next:{title:"CHAR",permalink:"/docs/sql-reference/sql-statements/data-types/CHAR"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Limits and usage notes",id:"limits-and-usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Create a column of VARBINARY type",id:"create-a-column-of-varbinary-type",level:3},{value:"Load data and store it as BINARY type",id:"load-data-and-store-it-as-binary-type",level:3},{value:"Query and process BINARY data",id:"query-and-process-binary-data",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",a:"a"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"binaryvarbinary",children:"BINARY/VARBINARY"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"BINARY(M)"}),"\n",(0,a.jsx)(n.p,{children:"VARBINARY(M)"}),"\n",(0,a.jsxs)(n.p,{children:["Since v3.0, StarRocks supports the BINARY/VARBINARY data type, which is used to store binary data. The maximum supported length is the same as VARCHAR (1~1048576). The unit is byte. If ",(0,a.jsx)(n.code,{children:"M"})," is not specified, 1048576 is used by default. Binary data types contain byte strings while character data types contain character strings."]}),"\n",(0,a.jsx)(n.p,{children:"BINARY is an alias of VARBINARY. The usage is the same as VARBINARY."}),"\n",(0,a.jsx)(n.h2,{id:"limits-and-usage-notes",children:"Limits and usage notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"VARBINARY columns are supported in Duplicate Key, Primary Key, and Unique Key tables. They are not supported in Aggregate tables."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"VARBINARY columns cannot be used as partition keys, bucketing keys, or dimension columns of Duplicate Key, Primary Key, and Unique Key tables. They cannot be used in ORDER BY, GROUP BY, and JOIN clauses."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"BINARY(M)/VARBINARY(M) are not right-padded in the case of unaligned length."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-column-of-varbinary-type",children:"Create a column of VARBINARY type"}),"\n",(0,a.jsxs)(n.p,{children:["When creating a table, use the keyword ",(0,a.jsx)(n.code,{children:"VARBINARY"})," to specify column ",(0,a.jsx)(n.code,{children:"j"})," as a VARBINARY column."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `test_binary` (\n    `id` INT(11) NOT NULL COMMENT "",\n    `j`  VARBINARY NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n    "replication_num" = "3",\n    "storage_format" = "DEFAULT"\n);\n\nmysql> DESC test_binary;\n+-------+-----------+------+-------+---------+-------+\n| Field | Type      | Null | Key   | Default | Extra |\n+-------+-----------+------+-------+---------+-------+\n| id    | int       | NO   | true  | NULL    |       |\n| j     | varbinary | YES  | false | NULL    |       |\n+-------+-----------+------+-------+---------+-------+\n2 rows in set (0.01 sec)\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"load-data-and-store-it-as-binary-type",children:"Load data and store it as BINARY type"}),"\n",(0,a.jsx)(n.p,{children:"StarRocks supports the following ways to load data and store it as BINARY type."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 1: Use INSERT INTO to write data to a constant column of BINARY type (such as column ",(0,a.jsx)(n.code,{children:"j"}),"), where the constant column is prefixed with ",(0,a.jsx)(n.code,{children:"x''"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_binary (id, j) VALUES (1, x'abab');\nINSERT INTO test_binary (id, j) VALUES (2, x'baba');\nINSERT INTO test_binary (id, j) VALUES (3, x'010102');\nINSERT INTO test_binary (id, j) VALUES (4, x'0000'); \n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 2: Use the ",(0,a.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/binary-functions/to_binary",children:"to_binary"})," function to convert VARCHAR data to binary data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"INSERT INTO test_binary select 5, to_binary('abab', 'hex');\nINSERT INTO test_binary select 6, to_binary('abab', 'base64');\nINSERT INTO test_binary select 7, to_binary('abab', 'utf8');\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 3: Use Broker Load to load a Parquet or ORC file and store the file as BINARY data. For more information, see ",(0,a.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For Parquet files, convert ",(0,a.jsx)(n.code,{children:"parquet::Type::type::BYTE_ARRAY"})," to ",(0,a.jsx)(n.code,{children:"TYPE_VARBINARY"})," directly."]}),"\n",(0,a.jsxs)(n.li,{children:["For ORC files, convert ",(0,a.jsx)(n.code,{children:"orc::BINARY"})," to ",(0,a.jsx)(n.code,{children:"TYPE_VARBINARY"})," directly."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 4: Use Stream Load to load a CSV file and store the file as ",(0,a.jsx)(n.code,{children:"BINARY"})," data. For more information, see ",(0,a.jsx)(n.a,{href:"/docs/loading/StreamLoad#load-csv-data",children:"Load CSV data"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"CSV file uses the hex format for binary data. Please ensure the input binary value is a valid hex value."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"BINARY"})," type is only supported in CSV file. JSON file does not support ",(0,a.jsx)(n.code,{children:"BINARY"})," type."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For example, ",(0,a.jsx)(n.code,{children:"t1"})," is a table with a VARBINARY column ",(0,a.jsx)(n.code,{children:"b"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `t1` (\n`k` int(11) NOT NULL COMMENT "",\n`v` int(11) NOT NULL COMMENT "",\n`b` varbinary\n) ENGINE = OLAP\nDUPLICATE KEY(`k`)\nPARTITION BY RANGE(`v`) (\nPARTITION p1 VALUES [("-2147483648"), ("0")),\nPARTITION p2 VALUES [("0"), ("10")),\nPARTITION p3 VALUES [("10"), ("20")))\nDISTRIBUTED BY HASH(`k`)\nPROPERTIES ("replication_num" = "1");\n\n-- csv file\n-- cat temp_data\n0,0,ab\n\n-- Load CSV file using Stream Load.\ncurl --location-trusted -u <username>:<password> -T temp_data -XPUT -H column_separator:, -H label:xx http://172.17.0.1:8131/api/test_mv/t1/_stream_load\n\n-- Query the loaded data.\nmysql> select * from t1;\n+------+------+------------+\n| k    | v    | xx         |\n+------+------+------------+\n|    0 |    0 | 0xAB       |\n+------+------+------------+\n1 rows in set (0.11 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"query-and-process-binary-data",children:"Query and process BINARY data"}),"\n",(0,a.jsxs)(n.p,{children:["StarRocks supports querying and processing BINARY data, and supports the use of BINARY functions and operators. This example uses table ",(0,a.jsx)(n.code,{children:"test_binary"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: If you add the ",(0,a.jsx)(n.code,{children:"--binary-as-hex"})," option When you access StarRocks from your MySQL client, binary data will be displayed using hex notation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from test_binary;\n+------+------------+\n| id   | j          |\n+------+------------+\n|    1 | 0xABAB     |\n|    2 | 0xBABA     |\n|    3 | 0x010102   |\n|    4 | 0x0000     |\n|    5 | 0xABAB     |\n|    6 | 0xABAB     |\n|    7 | 0x61626162 |\n+------+------------+\n7 rows in set (0.08 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 1: View binary data using the ",(0,a.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/string-functions/hex",children:"hex"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"mysql> select id, hex(j) from test_binary;\n+------+----------+\n| id   | hex(j)   |\n+------+----------+\n|    1 | ABAB     |\n|    2 | BABA     |\n|    3 | 010102   |\n|    4 | 0000     |\n|    5 | ABAB     |\n|    6 | ABAB     |\n|    7 | 61626162 |\n+------+----------+\n7 rows in set (0.02 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 2: View binary data using the ",(0,a.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/crytographic-functions/to_base64",children:"to_base64"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"mysql> select id, to_base64(j) from test_binary;\n+------+--------------+\n| id   | to_base64(j) |\n+------+--------------+\n|    1 | q6s=         |\n|    2 | uro=         |\n|    3 | AQEC         |\n|    4 | AAA=         |\n|    5 | q6s=         |\n|    6 | q6s=         |\n|    7 | YWJhYg==     |\n+------+--------------+\n7 rows in set (0.01 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example 3: View binary data using the ",(0,a.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/binary-functions/from_binary",children:"from_binary"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"mysql> select id, from_binary(j, 'hex') from test_binary;\n+------+-----------------------+\n| id   | from_binary(j, 'hex') |\n+------+-----------------------+\n|    1 | ABAB                  |\n|    2 | BABA                  |\n|    3 | 010102                |\n|    4 | 0000                  |\n|    5 | ABAB                  |\n|    6 | ABAB                  |\n|    7 | 61626162              |\n+------+-----------------------+\n7 rows in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var a=s(67294);const t=a.createContext({});function i(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:i(e),a.createElement(t.Provider,{value:l},n)}}}]);