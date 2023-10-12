"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93040],{94778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(85893),i=t(11151);const r={},c="negative",l={id:"sql-reference/sql-functions/math-functions/negative",title:"negative",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/negative.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/negative",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/negative",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/negative.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"multiply",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/multiply"},next:{title:"pi",permalink:"/doc/docs/2.5/sql-reference/sql-functions/math-functions/pi"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"negative",children:"negative"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the negative of input ",(0,s.jsx)(n.code,{children:"arg"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"negative(arg)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"arg"})," supports the following data types:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"BIGINT"}),"\n",(0,s.jsx)(n.li,{children:"DOUBLE"}),"\n",(0,s.jsx)(n.li,{children:"DECIMALV2"}),"\n",(0,s.jsx)(n.li,{children:"DECIMAL32"}),"\n",(0,s.jsx)(n.li,{children:"DECIMAL64"}),"\n",(0,s.jsx)(n.li,{children:"DECIMAL128"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the same data type as the input."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select negative(3);\n+-------------+\n| negative(3) |\n+-------------+\n|          -3 |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> select negative(cast(3.14 as decimalv2));\n+--------------------------------------+\n| negative(CAST(3.14 AS DECIMAL(9,0))) |\n+--------------------------------------+\n|                                -3.14 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:l},n)}}}]);