"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78157],{88608:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var i=l(85893),s=l(11151);const r={},d="Keywords",c={id:"sql-reference/sql-statements/keywords",title:"Keywords",description:"This topic describes non-reserved keywords and reserved keywords. It also provides a list of reserved keywords supported by StarRocks.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/keywords.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/keywords",permalink:"/docs/3.0/sql-reference/sql-statements/keywords",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/keywords.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Data type overview",permalink:"/docs/3.0/sql-reference/sql-statements/data-types/data-type-list"},next:{title:"Introduction",permalink:"/docs/3.0/table_design/"}},h={},x=[{value:"Introduction",id:"introduction",level:2},{value:"Reserved keywords",id:"reserved-keywords",level:2},{value:"A",id:"a",level:3},{value:"B",id:"b",level:3},{value:"C",id:"c",level:3},{value:"D",id:"d",level:3},{value:"E",id:"e",level:3},{value:"F",id:"f",level:3},{value:"G",id:"g",level:3},{value:"H",id:"h",level:3},{value:"I",id:"i",level:3},{value:"J",id:"j",level:3},{value:"K",id:"k",level:3},{value:"L",id:"l",level:3},{value:"M",id:"m",level:3},{value:"N",id:"n",level:3},{value:"O",id:"o",level:3},{value:"P",id:"p",level:3},{value:"Q",id:"q",level:3},{value:"R",id:"r",level:3},{value:"S",id:"s",level:3},{value:"T",id:"t",level:3},{value:"U",id:"u",level:3},{value:"V",id:"v",level:3},{value:"W",id:"w",level:3}];function j(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre",h3:"h3"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(e.p,{children:"This topic describes non-reserved keywords and reserved keywords. It also provides a list of reserved keywords supported by StarRocks."}),"\n",(0,i.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(e.p,{children:["Keywords in SQL statements, such as ",(0,i.jsx)(e.code,{children:"CREATE"})," and ",(0,i.jsx)(e.code,{children:"DROP"}),", have special meanings when parsed by StarRocks. Keywords are classified into non-reserved keywords and reserved keywords."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Non-reserved keywords"})," can be directly used as identifiers, such as table names and column names. For example, DB is a non-reserved keyword. You can use the following statement to create a database named ",(0,i.jsx)(e.code,{children:"DB"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE DATABASE DB;\nQuery OK, 0 rows affected (0.00 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Reserved keywords"})," can be used as identifiers only after special treatment. For example, LIKE is a reserved keyword. If you want to use it to identify a database, enclose it in a pair of backticks (`)."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE DATABASE `LIKE`;\nQuery OK, 0 rows affected (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"reserved-keywords",children:"Reserved keywords"}),"\n",(0,i.jsx)(e.p,{children:"Following are the reserved keywords supported by StarRocks."}),"\n",(0,i.jsx)(e.h3,{id:"a",children:"A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ADD"}),"\n",(0,i.jsx)(e.li,{children:"ALL"}),"\n",(0,i.jsx)(e.li,{children:"ALTER"}),"\n",(0,i.jsx)(e.li,{children:"ANALYZE"}),"\n",(0,i.jsx)(e.li,{children:"AND"}),"\n",(0,i.jsx)(e.li,{children:"ANTI"}),"\n",(0,i.jsx)(e.li,{children:"ARRAY"}),"\n",(0,i.jsx)(e.li,{children:"AS"}),"\n",(0,i.jsx)(e.li,{children:"ASC"}),"\n",(0,i.jsx)(e.li,{children:"AUTHENTICATION"}),"\n",(0,i.jsx)(e.li,{children:"AUTO_INCREMENT (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"b",children:"B"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"BETWEEN"}),"\n",(0,i.jsx)(e.li,{children:"BIGINT"}),"\n",(0,i.jsx)(e.li,{children:"BITMAP"}),"\n",(0,i.jsx)(e.li,{children:"BOTH"}),"\n",(0,i.jsx)(e.li,{children:"BY"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"c",children:"C"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"CANCEL"}),"\n",(0,i.jsx)(e.li,{children:"CASE"}),"\n",(0,i.jsx)(e.li,{children:"CHAR"}),"\n",(0,i.jsx)(e.li,{children:"CHARACTER"}),"\n",(0,i.jsx)(e.li,{children:"CHECK"}),"\n",(0,i.jsx)(e.li,{children:"COLLATE"}),"\n",(0,i.jsx)(e.li,{children:"COLUMN"}),"\n",(0,i.jsx)(e.li,{children:"CONVERT"}),"\n",(0,i.jsx)(e.li,{children:"CREATE"}),"\n",(0,i.jsx)(e.li,{children:"CROSS"}),"\n",(0,i.jsx)(e.li,{children:"CUBE"}),"\n",(0,i.jsx)(e.li,{children:"CURRENT_DATE"}),"\n",(0,i.jsx)(e.li,{children:"CURRENT_TIME"}),"\n",(0,i.jsx)(e.li,{children:"CURRENT_TIMESTAMP"}),"\n",(0,i.jsx)(e.li,{children:"CURRENT_USER"}),"\n",(0,i.jsx)(e.li,{children:"CURRENT_ROLE (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"d",children:"D"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"DATABASE"}),"\n",(0,i.jsx)(e.li,{children:"DATABASES"}),"\n",(0,i.jsx)(e.li,{children:"DECIMAL"}),"\n",(0,i.jsx)(e.li,{children:"DECIMALV2"}),"\n",(0,i.jsx)(e.li,{children:"DECIMAL32"}),"\n",(0,i.jsx)(e.li,{children:"DECIMAL64"}),"\n",(0,i.jsx)(e.li,{children:"DECIMAL128"}),"\n",(0,i.jsx)(e.li,{children:"DEFAULT"}),"\n",(0,i.jsx)(e.li,{children:"DELETE"}),"\n",(0,i.jsx)(e.li,{children:"DENSE_RANK"}),"\n",(0,i.jsx)(e.li,{children:"DESC"}),"\n",(0,i.jsx)(e.li,{children:"DESCRIBE"}),"\n",(0,i.jsx)(e.li,{children:"DISTINCT"}),"\n",(0,i.jsx)(e.li,{children:"DISTRIBUTED"}),"\n",(0,i.jsx)(e.li,{children:"DOUBLE"}),"\n",(0,i.jsx)(e.li,{children:"DROP"}),"\n",(0,i.jsx)(e.li,{children:"DUAL"}),"\n",(0,i.jsx)(e.li,{children:"DEFERRED (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"e",children:"E"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ELSE"}),"\n",(0,i.jsx)(e.li,{children:"EXCEPT"}),"\n",(0,i.jsx)(e.li,{children:"EXISTS"}),"\n",(0,i.jsx)(e.li,{children:"EXPLAIN"}),"\n",(0,i.jsx)(e.li,{children:"EXPORT"}),"\n",(0,i.jsx)(e.li,{children:"ENCLOSE (v3.0 and later)"}),"\n",(0,i.jsx)(e.li,{children:"ESCAPE (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"f",children:"F"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"FALSE"}),"\n",(0,i.jsx)(e.li,{children:"FIRST_VALUE"}),"\n",(0,i.jsx)(e.li,{children:"FLOAT"}),"\n",(0,i.jsx)(e.li,{children:"FOR"}),"\n",(0,i.jsx)(e.li,{children:"FORCE"}),"\n",(0,i.jsx)(e.li,{children:"FROM"}),"\n",(0,i.jsx)(e.li,{children:"FULL"}),"\n",(0,i.jsx)(e.li,{children:"FUNCTION"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"g",children:"G"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"GRANT"}),"\n",(0,i.jsx)(e.li,{children:"GROUP"}),"\n",(0,i.jsx)(e.li,{children:"GROUPS"}),"\n",(0,i.jsx)(e.li,{children:"GROUPING"}),"\n",(0,i.jsx)(e.li,{children:"GROUPING_ID"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"h",children:"H"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"HAVING"}),"\n",(0,i.jsx)(e.li,{children:"HLL"}),"\n",(0,i.jsx)(e.li,{children:"HOST"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"i",children:"I"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"IF"}),"\n",(0,i.jsx)(e.li,{children:"IGNORE"}),"\n",(0,i.jsx)(e.li,{children:"IN"}),"\n",(0,i.jsx)(e.li,{children:"INDEX"}),"\n",(0,i.jsx)(e.li,{children:"INFILE"}),"\n",(0,i.jsx)(e.li,{children:"INNER"}),"\n",(0,i.jsx)(e.li,{children:"INSERT"}),"\n",(0,i.jsx)(e.li,{children:"INT"}),"\n",(0,i.jsx)(e.li,{children:"INTEGER"}),"\n",(0,i.jsx)(e.li,{children:"INTERSECT"}),"\n",(0,i.jsx)(e.li,{children:"INTO"}),"\n",(0,i.jsx)(e.li,{children:"IS"}),"\n",(0,i.jsx)(e.li,{children:"IMMEDIATE (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"j",children:"J"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"JOIN"}),"\n",(0,i.jsx)(e.li,{children:"JSON"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"k",children:"K"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"KEY"}),"\n",(0,i.jsx)(e.li,{children:"KEYS"}),"\n",(0,i.jsx)(e.li,{children:"KILL"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"l",children:"L"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"LAG"}),"\n",(0,i.jsx)(e.li,{children:"LARGEINT"}),"\n",(0,i.jsx)(e.li,{children:"LAST_VALUE"}),"\n",(0,i.jsx)(e.li,{children:"LATERAL"}),"\n",(0,i.jsx)(e.li,{children:"LEAD"}),"\n",(0,i.jsx)(e.li,{children:"LEFT"}),"\n",(0,i.jsx)(e.li,{children:"LIKE"}),"\n",(0,i.jsx)(e.li,{children:"LIMIT"}),"\n",(0,i.jsx)(e.li,{children:"LOAD"}),"\n",(0,i.jsx)(e.li,{children:"LOCALTIME"}),"\n",(0,i.jsx)(e.li,{children:"LOCALTIMESTAMP"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"m",children:"M"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"MAXVALUE"}),"\n",(0,i.jsx)(e.li,{children:"MINUS"}),"\n",(0,i.jsx)(e.li,{children:"MOD"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"n",children:"N"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"NTILE"}),"\n",(0,i.jsx)(e.li,{children:"NODES"}),"\n",(0,i.jsx)(e.li,{children:"NOT"}),"\n",(0,i.jsx)(e.li,{children:"NULL"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"o",children:"O"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ON"}),"\n",(0,i.jsx)(e.li,{children:"OR"}),"\n",(0,i.jsx)(e.li,{children:"ORDER"}),"\n",(0,i.jsx)(e.li,{children:"OUTER"}),"\n",(0,i.jsx)(e.li,{children:"OUTFILE"}),"\n",(0,i.jsx)(e.li,{children:"OVER"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"p",children:"P"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"PARTITION"}),"\n",(0,i.jsx)(e.li,{children:"PERCENTILE"}),"\n",(0,i.jsx)(e.li,{children:"PRIMARY"}),"\n",(0,i.jsx)(e.li,{children:"PROCEDURE"}),"\n",(0,i.jsx)(e.li,{children:"PRIVILEGES (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"q",children:"Q"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"QUALIFY"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"r",children:"R"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"RANGE"}),"\n",(0,i.jsx)(e.li,{children:"RANK"}),"\n",(0,i.jsx)(e.li,{children:"READ"}),"\n",(0,i.jsx)(e.li,{children:"REGEXP"}),"\n",(0,i.jsx)(e.li,{children:"RELEASE"}),"\n",(0,i.jsx)(e.li,{children:"RENAME"}),"\n",(0,i.jsx)(e.li,{children:"REPLACE"}),"\n",(0,i.jsx)(e.li,{children:"REVOKE"}),"\n",(0,i.jsx)(e.li,{children:"RIGHT"}),"\n",(0,i.jsx)(e.li,{children:"RLIKE"}),"\n",(0,i.jsx)(e.li,{children:"ROW"}),"\n",(0,i.jsx)(e.li,{children:"ROWS"}),"\n",(0,i.jsx)(e.li,{children:"ROW_NUMBER"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"s",children:"S"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"SCHEMA"}),"\n",(0,i.jsx)(e.li,{children:"SCHEMAS"}),"\n",(0,i.jsx)(e.li,{children:"SELECT"}),"\n",(0,i.jsx)(e.li,{children:"SEMI"}),"\n",(0,i.jsx)(e.li,{children:"SET"}),"\n",(0,i.jsx)(e.li,{children:"SET_VAR"}),"\n",(0,i.jsx)(e.li,{children:"SHOW"}),"\n",(0,i.jsx)(e.li,{children:"SMALLINT"}),"\n",(0,i.jsx)(e.li,{children:"SYSTEM"}),"\n",(0,i.jsx)(e.li,{children:"SWAP"}),"\n",(0,i.jsx)(e.li,{children:"SKIP_HEADER (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"t",children:"T"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"TABLE"}),"\n",(0,i.jsx)(e.li,{children:"TERMINATED"}),"\n",(0,i.jsx)(e.li,{children:"THEN"}),"\n",(0,i.jsx)(e.li,{children:"TINYINT"}),"\n",(0,i.jsx)(e.li,{children:"TO"}),"\n",(0,i.jsx)(e.li,{children:"TRUE"}),"\n",(0,i.jsx)(e.li,{children:"TRIM_SPACE (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"u",children:"U"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"UNION"}),"\n",(0,i.jsx)(e.li,{children:"UNIQUE"}),"\n",(0,i.jsx)(e.li,{children:"UNSIGNED"}),"\n",(0,i.jsx)(e.li,{children:"UPDATE"}),"\n",(0,i.jsx)(e.li,{children:"USE"}),"\n",(0,i.jsx)(e.li,{children:"USING"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"v",children:"V"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"VALUES"}),"\n",(0,i.jsx)(e.li,{children:"VARCHAR"}),"\n",(0,i.jsx)(e.li,{children:"VARBINARY (v3.0 and later)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"w",children:"W"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"WHEN"}),"\n",(0,i.jsx)(e.li,{children:"WHERE"}),"\n",(0,i.jsx)(e.li,{children:"WITH"}),"\n"]})]})}const t=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(j,n)})):j(n)}},11151:(n,e,l)=>{l.d(e,{Zo:()=>c,ah:()=>r});var i=l(67294);const s=i.createContext({});function r(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function c({components:n,children:e,disableParentContext:l}){let c;return c=l?"function"==typeof n?n({}):n||d:r(n),i.createElement(s.Provider,{value:c},e)}}}]);