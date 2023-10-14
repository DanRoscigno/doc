"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62417],{44674:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(85893),i=t(11151);const r={},o="bitor",c={id:"sql-reference/sql-functions/bit-functions/bitor",title:"bitor",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bit-functions/bitor.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bitor",permalink:"/doc/en/2.5/sql-reference/sql-functions/bit-functions/bitor",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bit-functions/bitor.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"bitnot",permalink:"/doc/en/2.5/sql-reference/sql-functions/bit-functions/bitnot"},next:{title:"bitxor",permalink:"/doc/en/2.5/sql-reference/sql-functions/bit-functions/bitxor"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitor",children:"bitor"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the bitwise OR of two numeric expressions."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITOR(x,y);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"}),": This expression must evaluate to any of the following data types: TINYINT, SMALLINT, INT, BIGINT, LARGEINT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"y"}),": This expression must evaluate to any of the following data types: TINYINT, SMALLINT, INT, BIGINT, LARGEINT."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," must agree in data type."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["The return value has the same type as ",(0,s.jsx)(n.code,{children:"x"}),". If any value is NULL, the result is NULL."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select bitor(3,0);\n+-------------+\n| bitor(3, 0) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:c},n)}}}]);