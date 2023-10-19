"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31226],{90978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},c="APPROX_TOP_K",o={id:"sql-reference/sql-functions/aggregate-functions/approx_top_k",title:"APPROX_TOP_K",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/approx_top_k.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/approx_top_k",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/approx_top_k",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/approx_top_k.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"APPROX_COUNT_DISTINCT",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/approx_count_distinct"},next:{title:"AVG",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/avg"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"approx_top_k",children:"APPROX_TOP_K"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the top ",(0,s.jsx)(n.code,{children:"k"})," most frequently occurring item values in an ",(0,s.jsx)(n.code,{children:"expr"})," along with their approximate counts."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"APPROX_TOP_K(<expr> [ , <k> [ , <counter_num> ] ] )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expr"}),": An expression of STRING, BOOLEAN, DATE, DATETIME, or numeric type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k"}),": An optional INTEGER literal greater than 0. If ",(0,s.jsx)(n.code,{children:"k"})," is not specified, it defaults to ",(0,s.jsx)(n.code,{children:"5"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The maximum value is ",(0,s.jsx)(n.code,{children:"100000"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"counter_num"}),": An optional INTEGER literal greater than or equal to ",(0,s.jsx)(n.code,{children:"k"}),", The larger the ",(0,s.jsx)(n.code,{children:"counter_num"})," is, the more accurate the result will be. However, this also comes with increased CPU and memory costs.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The maximum value is ",(0,s.jsx)(n.code,{children:"100000"})]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"counter_num"})," is not specified, it defaults to ",(0,s.jsx)(n.code,{children:"max(min(2 * k, 100), 100000)"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Results are returned as an ARRAY of type STRUCT, where each STRUCT contains an ",(0,s.jsx)(n.code,{children:"item"})," field for the value (with its original input type) and a ",(0,s.jsx)(n.code,{children:"count"})," field (of type BIGINT) with the approximate number of occurrences. The array is sorted by ",(0,s.jsx)(n.code,{children:"count"})," descending."]}),"\n",(0,s.jsxs)(n.p,{children:["The aggregate function returns the top ",(0,s.jsx)(n.code,{children:"k"})," most frequently occurring item values in an expression expr along with their approximate counts. The error in each count may be up to ",(0,s.jsx)(n.code,{children:"2.0 * numRows / counter_num"})," where ",(0,s.jsx)(n.code,{children:"numRows"})," is the total number of rows. Higher values of ",(0,s.jsx)(n.code,{children:"counter_num"})," provide better accuracy at the cost of increased memory usage. Expressions that have fewer than ",(0,s.jsx)(n.code,{children:"counter_num"})," distinct items will yield exact item counts. Results include ",(0,s.jsx)(n.code,{children:"NULL"})," values as their own item in the results."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:'MySQL > SELECT APPROX_TOP_K(L_LINESTATUS) FROM lineitem;\n+-------------------------------------------------------------+\n| approx_top_k(L_LINESTATUS)                                  |\n+-------------------------------------------------------------+\n| [{"item":"O","count":3004998},{"item":"F","count":2996217}] |\n+-------------------------------------------------------------+\n\nMySQL > SELECT APPROX_TOP_K(L_LINENUMBER) FROM lineitem GROUP BY L_RETURNFLAG\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| approx_top_k(L_LINENUMBER)                                                                                                          |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| [{"item":1,"count":761151},{"item":2,"count":652280},{"item":3,"count":543265},{"item":4,"count":434834},{"item":5,"count":326135}] |\n| [{"item":1,"count":368853},{"item":2,"count":316830},{"item":3,"count":263950},{"item":4,"count":211270},{"item":5,"count":158495}] |\n| [{"item":1,"count":369996},{"item":2,"count":316718},{"item":3,"count":264179},{"item":4,"count":210911},{"item":5,"count":158657}] |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n'})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"APPROX_TOP_K"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},n)}}}]);