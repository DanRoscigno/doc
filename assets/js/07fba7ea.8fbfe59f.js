"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89625],{78256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(85893),a=s(11151);const r={displayed_sidebar:"English"},i="any_value",c={id:"sql-reference/sql-functions/aggregate-functions/any_value",title:"any_value",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/aggregate-functions/any_value.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/any_value",permalink:"/docs/2.2/sql-reference/sql-functions/aggregate-functions/any_value",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/any_value.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Window function",permalink:"/docs/2.2/sql-reference/sql-functions/Window_function"},next:{title:"APPROX_COUNT_DISTINCT",permalink:"/docs/2.2/sql-reference/sql-functions/aggregate-functions/approx_count_distinct"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"any_value",children:"any_value"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Select the columns that are not involved in the aggregate operation in the aggregation statement and then obtain an arbitrary row from each aggregated group. You can use this function to optimize a query that has a ",(0,t.jsx)(n.code,{children:"GROUP BY"})," clause."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"ANY_VALUE(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": the expression that gets aggregated."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an arbitrary row from each aggregated group. The return value is non-deterministic."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"// original data\n\nmysql> select * from any_value_test;\n\n+------+------+------+\n\n| a    | b    | c    |\n\n+------+------+------+\n\n|    1 |    1 |    1 |\n\n|    1 |    2 |    1 |\n\n|    2 |    1 |    1 |\n\n|    2 |    2 |    2 |\n\n|    3 |    1 |    1 |\n\n+------+------+------+\n\n5 rows in set (0.01 sec)\n\n\n\n// after use ANY_VALUE\n\nmysql> select a,any_value(b),sum(c) from any_value_test group by a;\n\n+------+----------------+----------+\n\n| a    | any_value(`b`) | sum(`c`) |\n\n+------+----------------+----------+\n\n|    1 |              1 |        2 |\n\n|    2 |              1 |        3 |\n\n|    3 |              1 |        1 |\n\n+------+----------------+----------+\n\n3 rows in set (0.01 sec)\n\n\n\nmysql> select c,any_value(a),sum(b) from any_value_test group by c;\n\n+------+----------------+----------+\n\n| c    | any_value(`a`) | sum(`b`) |\n\n+------+----------------+----------+\n\n|    1 |              1 |        5 |\n\n|    2 |              2 |        2 |\n\n+------+----------------+----------+\n\n2 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"ANY_VALUE"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:c},n)}}}]);