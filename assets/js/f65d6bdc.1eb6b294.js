"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67056],{67547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const i={displayed_sidebar:"English"},c="PERCENTILE_APPROX",o={id:"sql-reference/sql-functions/aggregate-functions/percentile_approx",title:"PERCENTILE_APPROX",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_approx.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_approx",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/percentile_approx",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/percentile_approx.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"multi_distinct_sum",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum"},next:{title:"percentile_cont",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/percentile_cont"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_approx",children:"PERCENTILE_APPROX"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the approximation of the pth percentile, where the value of p is between 0 and 1."}),"\n",(0,s.jsx)(n.p,{children:"Compression parameter is optional and has a setting range of [2048, 10000]. The larger the value, the higher the accuracy, the larger the memory consumption, and the longer the calculation time. If it is not specified or not beyond the range of [2048, 10000], the function runs with a default compression parameter of 10000."}),"\n",(0,s.jsx)(n.p,{children:"This function uses fixed size memory, so less memory can be used for columns with high cardinality, and can be used to calculate statistics such as tp99."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select `table`, percentile_approx(cost_time,0.99)\nfrom log_statis\ngroup by `table`;\n+----------+--------------------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096)\nfrom log_statis\ngroup by `table`;\n+----------+----------------------------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+----------------------------------------------+\n| test     |                                        54.21 |\n+----------+----------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"PERCENTILE_APPROX,PERCENTILE,APPROX"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:i(e),s.createElement(r.Provider,{value:o},n)}}}]);