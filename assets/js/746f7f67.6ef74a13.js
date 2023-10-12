"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76066],{47336:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=r(85893),a=r(11151);const l={displayed_sidebar:"documentation"},t="array_agg",c={id:"sql-reference/sql-functions/array-functions/array_agg",title:"array_agg",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_agg.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_agg",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_agg.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"any_match",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/any_match"},next:{title:"array_append",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_append"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_agg",children:"array_agg"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Aggregates values (including ",(0,s.jsx)(n.code,{children:"NULL"}),") in a column into an array (multiple rows to one row), and optionally order the elements by specific columns. From v3.0, array_agg() supports using ORDER BY to sort elements."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ARRAY_AGG([distinct] col [order by col0 [desc | asc] [nulls first | nulls last] ...])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"col"}),": the column whose values you want to aggregate. Supported data types are BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, CHAR, DATETIME, and DATE."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"col0"}),": the column which decides the order of ",(0,s.jsx)(n.code,{children:"col"}),". There may be more than one ORDER BY column."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"[desc | asc]"}),": specifies whether to sort the elements in ascending order (default) or descending order of ",(0,s.jsx)(n.code,{children:"col0"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"[nulls first | nulls last]"}),": specifies whether null values are placed at the first or last place."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a value of the ARRAY type, optionally sorted by ",(0,s.jsx)(n.code,{children:"col0"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The order of the elements in an array is random, which means it may be different from the order of the values in the column if no ORDER BY columns or no sorted by order by columns are specified."}),"\n",(0,s.jsx)(n.li,{children:"The data type of the elements in the returned array is the same as the data type of the values in the column."}),"\n",(0,s.jsxs)(n.li,{children:["Returns ",(0,s.jsx)(n.code,{children:"NULL"})," if the input is empty and without group-by columns."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Take the following data table as an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from t;\n+------+------+------+\n| a    | name | pv   |\n+------+------+------+\n|   11 |      |   33 |\n|    2 | NULL |  334 |\n|    1 | fzh  |    3 |\n|    1 | fff  |    4 |\n|    1 | fff  |    5 |\n+------+------+------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 1: Group the values in column ",(0,s.jsx)(n.code,{children:"a"})," and aggregate values in column ",(0,s.jsx)(n.code,{children:"pv"})," into an array by ordering ",(0,s.jsx)(n.code,{children:"a"})," by ",(0,s.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select a, array_agg(pv order by name nulls first) from t group by a;\n+------+---------------------------------+\n| a    | array_agg(pv ORDER BY name ASC) |\n+------+---------------------------------+\n|    2 | [334]                           |\n|   11 | [33]                            |\n|    1 | [4,5,3]                         |\n+------+---------------------------------+\n\n-- Aggregate values with no order.\nmysql> select a, array_agg(pv) from t group by a;\n+------+---------------+\n| a    | array_agg(pv) |\n+------+---------------+\n|   11 | [33]          |\n|    2 | [334]         |\n|    1 | [3,4,5]       |\n+------+---------------+\n3 rows in set (0.03 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 2: Aggregate values in column ",(0,s.jsx)(n.code,{children:"pv"})," into an array with ordering by ",(0,s.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select array_agg(pv order by name desc nulls last) from t;\n+----------------------------------+\n| array_agg(pv ORDER BY name DESC) |\n+----------------------------------+\n| [3,4,5,33,334]                   |\n+----------------------------------+\n1 row in set (0.02 sec)\n\n-- Aggregate values with no order.\nmysql> select array_agg(pv) from t;\n+----------------+\n| array_agg(pv)  |\n+----------------+\n| [3,4,5,33,334] |\n+----------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example 3: Aggregate values in column ",(0,s.jsx)(n.code,{children:"pv"})," using the WHERE clause. If no data in ",(0,s.jsx)(n.code,{children:"pv"})," meets the filter condition, a ",(0,s.jsx)(n.code,{children:"NULL"})," value is returned."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"mysql> select array_agg(pv order by name desc nulls last) from t where a < 0;\n+----------------------------------+\n| array_agg(pv ORDER BY name DESC) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n1 row in set (0.02 sec)\n\n-- Aggregate values with no order.\nmysql> select array_agg(pv) from t where a < 0;\n+---------------+\n| array_agg(pv) |\n+---------------+\n| NULL          |\n+---------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY_AGG, ARRAY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>l});var s=r(67294);const a=s.createContext({});function l(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||t:l(e),s.createElement(a.Provider,{value:c},n)}}}]);