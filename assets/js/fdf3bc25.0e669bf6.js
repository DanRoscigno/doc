"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91311],{36972:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},a="DECIMAL",o={id:"sql-reference/sql-statements/data-types/DECIMAL",title:"DECIMAL",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-types/DECIMAL.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DECIMAL",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/DECIMAL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-types/DECIMAL.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"LARGEINT",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/LARGEINT"},next:{title:"DOUBLE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-types/DOUBLE"}},c={},l=[{value:"Description",id:"description",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"decimal",children:"DECIMAL"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"DECIMAL(P[,S])"}),"\n",(0,n.jsx)(t.p,{children:"High-precision fixed-point, P stands for the total number of significant numbers (precision), S stands for the maximum number of decimal points (scale)."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Decimal V2"}),"\n",(0,n.jsx)(t.p,{children:"The range of P is [1,27], the range of S is [0,9], in addition, P must be greater than or equal to the value of S. The default value of S is 0."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Fast Decimal (version 1.18 default)"}),"\n",(0,n.jsx)(t.p,{children:"The range of P is [1,38], and the range of S is [0, P]. The default value of S is 0. Since starrocks-1.18, the decimal type supports FastDecimal with higher precision."}),"\n",(0,n.jsx)(t.p,{children:"The main optimizations are:"}),"\n",(0,n.jsx)(t.p,{children:"\u200b    1. Multiple width integers are used internally to represent decimal. Decimal (P < = 18, S) uses 64bit integers. Compared with the original decimal V2 implementation, 128bit integers are used uniformly. Arithmetic operations and conversion operations use fewer instructions on 64bit processors, so the performance is greatly improved."}),"\n",(0,n.jsx)(t.p,{children:"\u200b    2. Compared with decimal V2, the Fast Decimal implementation has made extreme optimization of specific algorithms, especially multiplication, and the performance is improved by about 4 times."}),"\n",(0,n.jsx)(t.p,{children:"Current restrictions:"}),"\n",(0,n.jsx)(t.p,{children:"\u200b     1. At present, fast decimal does not support array type. If users want to use array (decimal) type, please use array (double) type, or use array (decimal) type after closing decimal v3."}),"\n",(0,n.jsx)(t.p,{children:"\u200b     2. In hive direct connection, orc and parquet data formats do not support decimal yet."}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:o},t)}}}]);