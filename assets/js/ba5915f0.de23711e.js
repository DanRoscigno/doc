"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91433],{60223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},c="APPROX_COUNT_DISTINCT",o={id:"sql-reference/sql-functions/aggregate-functions/approx_count_distinct",title:"APPROX_COUNT_DISTINCT",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/aggregate-functions/approx_count_distinct.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/approx_count_distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/approx_count_distinct.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"any_value",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/any_value"},next:{title:"AVG",permalink:"/docs/2.3/sql-reference/sql-functions/aggregate-functions/avg"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"approx_count_distinct",children:"APPROX_COUNT_DISTINCT"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the approximate value of aggregate function similar to the result of COUNT(DISTINCT col)."}),"\n",(0,s.jsx)(n.p,{children:"It is faster than the COUNT and DISTINCT combination and uses a fixed-size memory, so less memory is used for columns of high cardinality."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"APPROX_COUNT_DISTINCT(expr)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------------------------+\n| approx_count_distinct(`query_id`) |\n+-----------------------------------+\n| 17721                             |\n+-----------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"APPROX_COUNT_DISTINCT"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},n)}}}]);