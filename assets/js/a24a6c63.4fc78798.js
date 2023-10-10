"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57102],{6187:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(85893),o=s(11151);const r={},i="HLL_UNION_AGG",a={id:"sql-reference/sql-functions/aggregate-functions/hll_union_agg",title:"HLL_UNION_AGG",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_union_agg",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/hll_union_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/hll_union_agg.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"HLL_UNION",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/hll_union"},next:{title:"MAX",permalink:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/max"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hll_union_agg",children:"HLL_UNION_AGG"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"HLL is an engineering implementation based on the HyperLogLog algorithm, which is used to save the intermediate results of HyperLogGog calculation process."}),"\n",(0,t.jsx)(n.p,{children:"It can only be used as the value column of a table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."}),"\n",(0,t.jsx)(n.p,{children:"An estimated result with an error of about 1% based on HLL. The HLL column is generated by other columns or based on data loaded into the table."}),"\n",(0,t.jsxs)(n.p,{children:["During loading, the ",(0,t.jsx)(n.a,{href:"/docusaurusv3/docs/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"hll_hash"})," function is used to specify which column is used to generate the HLL column. It is often used to replace Count Distinct, and to calculate UVs quickly in business by combining rollup."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"HLL_UNION_AGG(hll)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;\n+-------------------------+\n| HLL_UNION_AGG(`uv_set`) |\n+-------------------------+\n| 17721                   |\n+-------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"HLL_UNION_AGG,HLL,UNION,AGG"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const o=t.createContext({});function r(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(o.Provider,{value:a},n)}}}]);