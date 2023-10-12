"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68567],{29207:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(85893),s=r(11151);const a={displayed_sidebar:"documentation"},i="array_distinct",c={id:"sql-reference/sql-functions/array-functions/array_distinct",title:"array_distinct",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_distinct.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_distinct",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_distinct.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"array_difference",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_difference"},next:{title:"array_filter",permalink:"/doc/docs/2.5/sql-reference/sql-functions/array-functions/array_filter"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"array_distinct",children:"array_distinct"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Removes duplicate elements from an array."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"array_distinct(array)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"array"}),": the array from which you want to remove duplicate elements. Only the ARRAY data type is supported."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an array."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The elements of the array that is returned may be sorted in a different order than the elements of the array that you specify."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The elements of the array that is returned are of the same data type as the elements of the array that you specify."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"In this section, the following table is used as an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from test;\n\n+------+---------------+\n\n| c1   | c2            |\n\n+------+---------------+\n\n|    1 | [1,1,2]       |\n\n|    2 | [1,null,null] |\n\n|    3 | NULL          |\n\n|    4 | [null]        |\n\n+------+---------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remove duplicate values from column ",(0,t.jsx)(n.code,{children:"c2"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> select c1, array_distinct(c2) from test;\n\n+------+----------------------+\n\n| c1   | array_distinct(`c2`) |\n\n+------+----------------------+\n\n|    1 | [2,1]                |\n\n|    2 | [null,1]             |\n\n|    3 | NULL                 |\n\n|    4 | [null]               |\n\n+------+----------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>a});var t=r(67294);const s=t.createContext({});function a(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:a(e),t.createElement(s.Provider,{value:c},n)}}}]);