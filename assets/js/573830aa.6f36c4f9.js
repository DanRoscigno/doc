"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53993],{85:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=s(85893),t=s(11151);const l={displayed_sidebar:"English"},i="GROUP BY",r={id:"sql-reference/sql-statements/data-manipulation/GROUP_BY",title:"GROUP BY",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-statements/data-manipulation/GROUP_BY.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/GROUP_BY",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/GROUP_BY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/GROUP_BY.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"EXPORT",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/EXPORT"},next:{title:"PAUSE ROUTINE LOAD",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD"}},c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"group-by",children:"GROUP BY"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,a.jsxs)(n.p,{children:["GROUP BY ",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," \uff5c ",(0,a.jsx)(n.code,{children:"CUBE"})," \uff5c ",(0,a.jsx)(n.code,{children:"ROLLUP"})," is an extension of the GROUP BY clause. It can realize the aggregation of groups of multiple sets in a GROUP BY clause. The result is equivalent to the UNION operation of multiple corresponding GROUP BY clauses."]}),"\n",(0,a.jsx)(n.p,{children:"GROUP BY clause is a special case of GROUP BY GROUPING SETS containing only one element. For example, the GROUPING SETS statement:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n"})}),"\n",(0,a.jsx)(n.p,{children:"The query result is equivalent to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING(expr)"})," indicates whether a column is an aggregate column. If it is an aggregate column, it is 0, otherwise it is 1."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING_ID(expr  [ , expr [ , ... ] ])"})," is similar to GROUPING. GROUPING_ ID calculates the bitmap value of a column list according to the specified column order, and each bit is the value of GROUPING."]}),"\n",(0,a.jsx)(n.p,{children:"GROUPING_ID() function returns the decimal value of the bit vector."}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"groupSet"})," represents a set composed of columns, aliases or expressions in the select list.  ",(0,a.jsx)(n.code,{children:"groupSet ::= { ( expr  [ , expr [ , ... ] ] )}"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"expr"}),"  indicates the column, alias or expression in the select list."]}),"\n",(0,a.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,a.jsx)(n.p,{children:"starrocks supports syntax like PostgreSQL. The syntax examples are as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ROLLUP(a,b,c)"})," is equivalent to the following",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," statement:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CUBE ( a, b, c )"}),"  is equivalent to the following",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," statement:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"The following is an example of actual data:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"GROUP, GROUPING, GROUPING_ID, GROUPING_SETS, GROUPING SETS, CUBE, ROLLUP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var a=s(67294);const t=a.createContext({});function l(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:l(e),a.createElement(t.Provider,{value:r},n)}}}]);