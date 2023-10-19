"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41125],{21205:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(85893),r=s(11151);const a={displayed_sidebar:"English"},i="unnest",l={id:"sql-reference/sql-functions/array-functions/unnest",title:"unnest",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/unnest.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/unnest",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/unnest",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/unnest.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"reverse",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/reverse"},next:{title:"from_binary",permalink:"/docs/3.0/sql-reference/sql-functions/binary-functions/from_binary"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: UNNEST takes one parameter",id:"example-1-unnest-takes-one-parameter",level:3},{value:"Example 2: UNNEST takes multiple parameters",id:"example-2-unnest-takes-multiple-parameters",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"unnest",children:"unnest"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:'UNNEST is a table function that takes an array and converts elements in that array into multiple rows of a table. The conversion is also known as "flattening".'}),"\n",(0,t.jsxs)(n.p,{children:["You can use Lateral Join with UNNEST to implement common conversions, for example, from STRING, ARRAY, or BITMAP to multiple rows. For more information, see ",(0,t.jsx)(n.a,{href:"/docs/3.0/using_starrocks/Lateral_join",children:"Lateral join"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["From v2.5, UNNEST can take a variable number of array parameters. The arrays can vary in type and length (number of elements). If the arrays have different lengths, the largest length prevails, which means nulls will be added to arrays that are less than this length. See ",(0,t.jsx)(n.a,{href:"#example-2-unnest-takes-multiple-parameters",children:"Example 2"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"unnest(array0[, array1 ...])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"array"}),": the array you want to convert. It must be an array or expression that can evaluate to an ARRAY data type. You can specify one or more arrays or array expressions."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns the multiple rows converted from the array. The type of return value depends on the types of elements in the array."}),"\n",(0,t.jsxs)(n.p,{children:["For the element types supported in an array, see ",(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/data-types/Array",children:"ARRAY"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"UNNEST is a table function. It must be used with Lateral Join but the keyword Lateral Join does not need to be explicitly specified."}),"\n",(0,t.jsx)(n.li,{children:"If the array expression evaluates to NULL or it is empty, no rows will be returned."}),"\n",(0,t.jsx)(n.li,{children:"If an element in the array is NULL, NULL is returned for that element."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"example-1-unnest-takes-one-parameter",children:"Example 1: UNNEST takes one parameter"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Create table student_score where scores is an ARRAY column.\nCREATE TABLE student_score\n(\n    `id` bigint(20) NULL COMMENT "",\n    `scores` ARRAY<int> NULL COMMENT ""\n)\nDUPLICATE KEY (id)\nDISTRIBUTED BY HASH(`id`);\n\n-- Insert data into this table.\nINSERT INTO student_score VALUES\n(1, [80,85,87]),\n(2, [77, null, 89]),\n(3, null),\n(4, []),\n(5, [90,92]);\n\n-- Query data from this table.\nSELECT * FROM student_score ORDER BY id;\n+------+--------------+\n| id   | scores       |\n+------+--------------+\n|    1 | [80,85,87]   |\n|    2 | [77,null,89] |\n|    3 | NULL         |\n|    4 | []           |\n|    5 | [90,92]      |\n+------+--------------+\n\n-- Use UNNEST to flatten the scores column into multiple rows.\nSELECT id, scores, unnest FROM student_score, unnest(scores);\n+------+--------------+--------+\n| id   | scores       | unnest |\n+------+--------------+--------+\n|    1 | [80,85,87]   |     80 |\n|    1 | [80,85,87]   |     85 |\n|    1 | [80,85,87]   |     87 |\n|    2 | [77,null,89] |     77 |\n|    2 | [77,null,89] |   NULL |\n|    2 | [77,null,89] |     89 |\n|    5 | [90,92]      |     90 |\n|    5 | [90,92]      |     92 |\n+------+--------------+--------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:["[80,85,87] corresponding to ",(0,t.jsx)(n.code,{children:"id = 1"})," is converted into three rows."]}),"\n",(0,t.jsxs)(n.p,{children:["[77,null,89] corresponding to ",(0,t.jsx)(n.code,{children:"id = 2"})," retains the null value."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scores"})," corresponding to  ",(0,t.jsx)(n.code,{children:"id = 3"})," and ",(0,t.jsx)(n.code,{children:"id = 4"})," are NULL and empty, which are skipped."]}),"\n",(0,t.jsx)(n.h3,{id:"example-2-unnest-takes-multiple-parameters",children:"Example 2: UNNEST takes multiple parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Create table example_table where the type and scores columns vary in type.\nCREATE TABLE example_table (\nid varchar(65533) NULL COMMENT "",\ntype varchar(65533) NULL COMMENT "",\nscores ARRAY<int> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(id)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(id)\nPROPERTIES (\n"replication_num" = "3");\n\n-- Insert data into the table.\nINSERT INTO example_table VALUES\n("1", "typeA;typeB", [80,85,88]),\n("2", "typeA;typeB;typeC", [87,90,95]);\n\n-- Query data from the table.\nSELECT * FROM example_table;\n+------+-------------------+------------+\n| id   | type              | scores     |\n+------+-------------------+------------+\n| 1    | typeA;typeB       | [80,85,88] |\n| 2    | typeA;typeB;typeC | [87,90,95] |\n+------+-------------------+------------+\n\n-- Use UNNEST to convert type and scores into multiple rows.\nSELECT id, unnest.type, unnest.scores\nFROM example_table, unnest(split(type, ";"), scores) as unnest(type,scores);\n+------+-------+--------+\n| id   | type  | scores |\n+------+-------+--------+\n| 1    | typeA |     80 |\n| 1    | typeB |     85 |\n| 1    | NULL  |     88 |\n| 2    | typeA |     87 |\n| 2    | typeB |     90 |\n| 2    | typeC |     95 |\n+------+-------+--------+\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"})," and  ",(0,t.jsx)(n.code,{children:"scores"})," in ",(0,t.jsx)(n.code,{children:"UNNEST"})," vary in type and length."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"})," is a VARCHAR column while ",(0,t.jsx)(n.code,{children:"scores"})," is an ARRAY column. The split() function is used to convert ",(0,t.jsx)(n.code,{children:"type"})," into ARRAY."]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"id = 1"}),", ",(0,t.jsx)(n.code,{children:"type"}),' is converted into ["typeA","typeB"], which has two elements.']}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"id = 2"}),", ",(0,t.jsx)(n.code,{children:"type"}),' is converted into  ["typeA","typeB","typeC"], which has three elements.']}),"\n",(0,t.jsxs)(n.p,{children:["To ensure consistent numbers of rows for each ",(0,t.jsx)(n.code,{children:"id"}),', a null element is added to ["typeA","typeB"].']})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:l},n)}}}]);