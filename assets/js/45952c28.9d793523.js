"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37518],{5089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const a={displayed_sidebar:"English"},i="atan2",c={id:"sql-reference/sql-functions/math-functions/atan2",title:"atan2",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/atan2.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/atan2",permalink:"/docs/sql-reference/sql-functions/math-functions/atan2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/math-functions/atan2.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"atan",permalink:"/docs/sql-reference/sql-functions/math-functions/atan"},next:{title:"bin",permalink:"/docs/sql-reference/sql-functions/math-functions/bin"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"atan2",children:"atan2"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns the arc tangent of ",(0,s.jsx)(n.code,{children:"x"})," divided by ",(0,s.jsx)(n.code,{children:"y"}),", that is, the arc tangent of ",(0,s.jsx)(n.code,{children:"x/y"}),". The signs of the two parameters are used to determine the quadrant of the result."]}),"\n",(0,s.jsx)(n.p,{children:"The return value is in the range of [-\u03c0, \u03c0]."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ATAN2(x,y);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x"}),": The supported data type is DOUBLE."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"y"}),": The supported data type is DOUBLE."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a value of the DOUBLE type. Returns NULL if ",(0,s.jsx)(n.code,{children:"x"})," or ",(0,s.jsx)(n.code,{children:"y"})," is NULL."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select atan2(-0.8,2);\n+---------------------+\n| atan2(-0.8, 2)      |\n+---------------------+\n| -0.3805063771123649 |\n+---------------------+\n1 row in set (0.01 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var s=t(67294);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:c},n)}}}]);