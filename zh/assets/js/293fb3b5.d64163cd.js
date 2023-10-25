"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88108],{92860:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>U,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var a=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese"},c="GROUP BY",l={id:"sql-reference/sql-statements/data-manipulation/GROUP_BY",title:"GROUP BY",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/GROUP_BY.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/GROUP_BY",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/GROUP_BY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/GROUP_BY.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"EXPORT",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/EXPORT"},next:{title:"PAUSE ROUTINE LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD"}},i={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"group-by",children:"GROUP BY"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,a.jsxs)(n.p,{children:["GROUP BY ",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," \uff5c ",(0,a.jsx)(n.code,{children:"CUBE"})," \uff5c ",(0,a.jsx)(n.code,{children:"ROLLUP"})," \u662f\u5bf9 GROUP BY \u5b50\u53e5\u7684\u6269\u5c55\uff0c\u5b83\u80fd\u591f\u5728\u4e00\u4e2a GROUP BY \u5b50\u53e5\u4e2d\u5b9e\u73b0\u591a\u4e2a\u96c6\u5408\u7684\u5206\u7ec4\u7684\u805a\u5408\u3002\u5176\u7ed3\u679c\u7b49\u4ef7\u4e8e\u5c06\u591a\u4e2a\u76f8\u5e94 GROUP BY \u5b50\u53e5\u8fdb\u884c UNION \u64cd\u4f5c\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"GROUP BY \u5b50\u53e5\u662f\u53ea\u542b\u6709\u4e00\u4e2a\u5143\u7d20\u7684 GROUP BY GROUPING SETS \u7684\u7279\u4f8b\u3002\n\u4f8b\u5982\uff0cGROUPING SETS \u8bed\u53e5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5176\u67e5\u8be2\u7ed3\u679c\u7b49\u4ef7\u4e8e\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY a, b\nUNION\nSELECT a, null, SUM( c ) FROM tab1 GROUP BY a\nUNION\nSELECT null, b, SUM( c ) FROM tab1 GROUP BY b\nUNION\nSELECT null, null, SUM( c ) FROM tab1\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING(expr)"})," \u6307\u793a\u4e00\u4e2a\u5217\u662f\u5426\u4e3a\u805a\u5408\u5217\uff0c\u5982\u679c\u662f\u805a\u5408\u5217\u4e3a0\uff0c\u5426\u5219\u4e3a1"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"GROUPING_ID(expr  [ , expr [ , ... ] ])"})," \u4e0eGROUPING \u7c7b\u4f3c\uff0cGROUPING_ID\u6839\u636e\u6307\u5b9a\u7684column \u987a\u5e8f\uff0c\u8ba1\u7b97\u51fa\u4e00\u4e2a\u5217\u5217\u8868\u7684 bitmap \u503c\uff0c\u6bcf\u4e00\u4f4d\u4e3aGROUPING\u7684\u503c. GROUPING_ID()\u51fd\u6570\u8fd4\u56de\u4f4d\u5411\u91cf\u7684\u5341\u8fdb\u5236\u503c\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT ...\nFROM ...\n[ ... ]\nGROUP BY [\n    , ... |\n    GROUPING SETS [, ...] (  groupSet [ , groupSet [ , ... ] ] ) |\n    ROLLUP(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH ROLLUP |\n    CUBE(expr  [ , expr [ , ... ] ]) |\n    expr  [ , expr [ , ... ] ] WITH CUBE\n    ]\n[ ... ]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"groupSet"})," \u8868\u793a select list \u4e2d\u7684\u5217\uff0c\u522b\u540d\u6216\u8005\u8868\u8fbe\u5f0f\u7ec4\u6210\u7684\u96c6\u5408 ",(0,a.jsx)(n.code,{children:"groupSet ::= { ( expr  [ , expr [ , ... ] ] )}"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"expr"}),"  \u8868\u793a select list \u4e2d\u7684\u5217\uff0c\u522b\u540d\u6216\u8005\u8868\u8fbe\u5f0f"]}),"\n",(0,a.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,a.jsx)(n.p,{children:"starrocks \u652f\u6301\u7c7b\u4f3cPostgreSQL \u8bed\u6cd5, \u8bed\u6cd5\u5b9e\u4f8b\u5982\u4e0b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT a, b, SUM( c ) FROM tab1 GROUP BY GROUPING SETS ( (a, b), (a), (b), ( ) );\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\nSELECT a, b,c, SUM( d ) FROM tab1 GROUP BY CUBE(a,b,c)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ROLLUP(a,b,c)"})," \u7b49\u4ef7\u4e8e\u5982\u4e0b",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," \u8bed\u53e5"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"CUBE ( a, b, c )"})," \u7b49\u4ef7\u4e8e\u5982\u4e0b",(0,a.jsx)(n.code,{children:"GROUPING SETS"})," \u8bed\u53e5"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u5b9e\u9645\u6570\u636e\u7684\u4f8b\u5b50"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n+------+------+---------------+----------------+\n| k1   | k2   | grouping_id(k1,k2) | sum(`k3`) |\n+------+------+---------------+----------------+\n| a    | A    |             0 |              3 |\n| a    | B    |             0 |              4 |\n| a    | NULL |             1 |              7 |\n| b    | A    |             0 |              5 |\n| b    | B    |             0 |              6 |\n| b    | NULL |             1 |             11 |\n| NULL | A    |             2 |              8 |\n| NULL | B    |             2 |             10 |\n| NULL | NULL |             3 |             18 |\n+------+------+---------------+----------------+\n9 rows in set (0.02 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"GROUP, GROUPING, GROUPING_ID, GROUPING_SETS, GROUPING SETS, CUBE, ROLLUP"})]})}const U=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var a=s(67294);const r=a.createContext({});function t(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:t(e),a.createElement(r.Provider,{value:l},n)}}}]);