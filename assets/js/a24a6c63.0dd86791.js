"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57102],{6187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(85893),o=t(11151);const i={displayed_sidebar:"documentation"},r="HLL_UNION_AGG",a={id:"sql-reference/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union_agg",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_union_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"HLL_UNION",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_union"},next:{title:"MAX",permalink:"/doc/docs/sql-reference/sql-functions/aggregate-functions/max"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll_union_agg",children:"HLL_UNION_AGG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"HLL is an engineering implementation based on the HyperLogLog algorithm, which is used to save the intermediate results of HyperLogGog calculation process."}),"\n",(0,s.jsx)(n.p,{children:"It can only be used as the value column of a table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."}),"\n",(0,s.jsx)(n.p,{children:"An estimated result with an error of about 1% based on HLL. The HLL column is generated by other columns or based on data loaded into the table."}),"\n",(0,s.jsxs)(n.p,{children:["During loading, the ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"hll_hash"})," function is used to specify which column is used to generate the HLL column. It is often used to replace Count Distinct, and to calculate UVs quickly in business by combining rollup."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"HLL_UNION_AGG(hll)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"HLL_UNION_AGG,HLL,UNION,AGG"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var s=t(67294);const o=s.createContext({});function i(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(o.Provider,{value:a},n)}}}]);