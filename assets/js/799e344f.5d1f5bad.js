"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71565],{57652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},c="bitand",l={id:"sql-reference/sql-functions/bit-functions/bitand",title:"bitand",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bit-functions/bitand.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bitand",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bitand",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bit-functions/bitand.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"bit_shift_right",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bit_shift_right_logical"},next:{title:"bitnot",permalink:"/doc/docs/sql-reference/sql-functions/bit-functions/bitnot"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitand",children:"bitand"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the bitwise AND of two numeric expressions."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"BITAND(x,y);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"}),": This expression must evaluate to any of the following data types: TINYINT, SMALLINT, INT, BIGINT, LARGEINT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"y"}),": This expression must evaluate to any of the following data types: TINYINT, SMALLINT, INT, BIGINT, LARGEINT."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," must agree in data type."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["The return value has the same type as ",(0,s.jsx)(n.code,{children:"x"}),". If any value is NULL, the result is NULL."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select bitand(3,0);\n+--------------+\n| bitand(3, 0) |\n+--------------+\n|            0 |\n+--------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:l},n)}}}]);