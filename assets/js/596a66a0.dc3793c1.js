"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33566],{75297:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(85893),l=t(11151);const r={},a="DESC",i={id:"sql-reference/sql-statements/Utility/DESCRIBE",title:"DESC",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Utility/DESCRIBE.md",sourceDirName:"sql-reference/sql-statements/Utility",slug:"/sql-reference/sql-statements/Utility/DESCRIBE",permalink:"/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Utility/DESCRIBE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SQL statement template",permalink:"/docs/3.0/sql-reference/sql-statements/SQL command template"},next:{title:"ALTER USER",permalink:"/docs/3.0/sql-reference/sql-statements/account-management/ALTER USER"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"desc",children:"DESC"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"You can use the statement to perform the following operations:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["View the schema of a table stored in your StarRocks cluster, along with the type of the ",(0,n.jsx)(s.a,{href:"../../../table_design/Sort_key",children:"sort key"})," and ",(0,n.jsx)(s.a,{href:"../../../using_starrocks/Materialized_view",children:"materialized view"})," of the table."]}),"\n",(0,n.jsx)(s.li,{children:"View the schema of a table stored in the following external data sources, such as Apache Hive\u2122. Note that you can perform this operation only in StarRocks 2.4 and later versions."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"DESC[RIBE] [catalog_name.][db_name.]table_name [ALL];\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"catalog_name"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The name of the internal catalog or an external catalog. ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If you set the value of the parameter to the name of the internal catalog, which is ",(0,n.jsx)(s.code,{children:"default_catalog"}),", you can view the schema of the table stored in your StarRocks cluster. "]}),(0,n.jsx)("li",{children:"If you set the value of the parameter to the name of an external catalog, you can view the schema of the table stored in the external data source."})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_name"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The database name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"table_name"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The table name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ALL"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"If this keyword is specified, you can view the type of the sort key, materialized view, and schema of a table stored in your StarRocks cluster. If this keyword is not specified, you only view the table schema. "}),(0,n.jsx)("li",{children:"Do not specify this keyword when you view the schema of a table stored in an external data source."})]})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"output",children:"Output"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"+-----------+---------------+-------+------+------+-----+---------+-------+\n| IndexName | IndexKeysType | Field | Type | Null | Key | Default | Extra |\n+-----------+---------------+-------+------+------+-----+---------+-------+\n"})}),"\n",(0,n.jsx)(s.p,{children:"The following table describes the parameters returned by this statement."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IndexName"}),(0,n.jsx)(s.td,{children:"The table name. If you view the schema of a table stored in an external data source, this parameter is not returned."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IndexKeysType"}),(0,n.jsx)(s.td,{children:"The type of the sort key of the table. If you view the schema of a table stored in an external data source, this parameter is not returned."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Field"}),(0,n.jsx)(s.td,{children:"The column name."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:"The data type of the column."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Null"}),(0,n.jsxs)(s.td,{children:["Whether the column values can be NULL. ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"yes"}),": indicates the values can be NULL. "]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"no"}),": indicates the values cannot be NULL. "]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Key"}),(0,n.jsxs)(s.td,{children:["Whether the column is used as the sort key. ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"true"}),": indicates the column is used as the sort key. "]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"false"}),": indicates the column is not used as the sort key. "]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"The default value for the data type of the column. If the data type does not have a default value, a NULL is returned."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Extra"}),(0,n.jsx)(s.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If you see the schema of a table stored in your StarRocks cluster, this field displays the following information about the column: ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["The aggregate function used by the column, such as ",(0,n.jsx)(s.code,{children:"SUM"})," and ",(0,n.jsx)(s.code,{children:"MIN"}),". "]}),(0,n.jsxs)("li",{children:["Whether a bloom filter index is created on the column. If so, the value of ",(0,n.jsx)(s.code,{children:"Extra"})," is ",(0,n.jsx)(s.code,{children:"BLOOM_FILTER"}),". "]})]})]}),(0,n.jsxs)("li",{children:["If you see the schema of a table stored in external data sources, this field displays whether the column is the partition column. If the column is the partition column, the value of ",(0,n.jsx)(s.code,{children:"Extra"})," is ",(0,n.jsx)(s.code,{children:"partition key"}),". "]})]})})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Note: For information about how a materialized view is displayed in the output, see Example 2."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: View the schema of ",(0,n.jsx)(s.code,{children:"example_table"})," stored in your StarRocks cluster."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"DESC example_table;\n"})}),"\n",(0,n.jsx)(s.p,{children:"Or"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"DESC default_catalog.example_db.example_table;\n"})}),"\n",(0,n.jsx)(s.p,{children:"The output of the preceding statements is as follows."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"+-------+---------------+------+-------+---------+-------+\n| Field | Type          | Null | Key   | Default | Extra |\n+-------+---------------+------+-------+---------+-------+\n| k1    | TINYINT       | Yes  | true  | NULL    |       |\n| k2    | DECIMAL(10,2) | Yes  | true  | 10.5    |       |\n| k3    | CHAR(10)      | Yes  | false | NULL    |       |\n| v1    | INT           | Yes  | false | NULL    |       |\n+-------+---------------+------+-------+---------+-------+\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 2: View the schema, type of the sort key, and materialized view of ",(0,n.jsx)(s.code,{children:"sales_records"})," stored in your StarRocks cluster. In the following example, one materialized view ",(0,n.jsx)(s.code,{children:"store_amt"})," is created based on ",(0,n.jsx)(s.code,{children:"sales_records"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"DESC db1.sales_records ALL;\n\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| IndexName     | IndexKeysType | Field     | Type   | Null | Key   | Default | Extra |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n| sales_records | DUP_KEYS      | record_id | INT    | Yes  | true  | NULL    |       |\n|               |               | seller_id | INT    | Yes  | true  | NULL    |       |\n|               |               | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_date | DATE   | Yes  | false | NULL    | NONE  |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | NONE  |\n|               |               |           |        |      |       |         |       |\n| store_amt     | AGG_KEYS      | store_id  | INT    | Yes  | true  | NULL    |       |\n|               |               | sale_amt  | BIGINT | Yes  | false | NULL    | SUM   |\n+---------------+---------------+-----------+--------+------+-------+---------+-------+\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Example 3: View the schema of ",(0,n.jsx)(s.code,{children:"hive_table"})," stored in your Hive cluster."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"DESC hive_catalog.hive_db.hive_table;\n\n+-------+----------------+------+-------+---------+---------------+ \n| Field | Type           | Null | Key   | Default | Extra         | \n+-------+----------------+------+-------+---------+---------------+ \n| id    | INT            | Yes  | false | NULL    |               | \n| name  | VARCHAR(65533) | Yes  | false | NULL    |               | \n| date  | DATE           | Yes  | false | NULL    | partition key | \n+-------+----------------+------+-------+---------+---------------+\n"})}),"\n",(0,n.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20DATABASE",children:"CREATE DATABASE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"SHOW%20CREATE%20DATABASE.md",children:"SHOW CREATE DATABASE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW%20DATABASES",children:"SHOW DATABASES"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20DATABASE",children:"DROP DATABASE"})}),"\n"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>r});var n=t(67294);const l=n.createContext({});function r(e){const s=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:r(e),n.createElement(l.Provider,{value:i},s)}}}]);