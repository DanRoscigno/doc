"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76108],{77558:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=r(85893),s=r(11151);const t={displayed_sidebar:"English"},c="array_contains",i={id:"sql-reference/sql-functions/array-functions/array_contains",title:"array_contains",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/array-functions/array_contains.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains",permalink:"/docs/2.1/sql-reference/sql-functions/array-functions/array_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_contains.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_avg",permalink:"/docs/2.1/sql-reference/sql-functions/array-functions/array_avg"},next:{title:"array_length",permalink:"/docs/2.1/sql-reference/sql-functions/array-functions/array_length"}},o={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"array_contains",children:"array_contains"}),"\n",(0,a.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"array_contains(any_array, any_element)\n"})}),"\n",(0,a.jsx)(e.p,{children:"Check whether the array contains a certain element. If yes, it returns 1; otherwise, it returns 0."}),"\n",(0,a.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([\"apple\",\"orange\",\"pear\"], \"orange\");\n+-----------------------------------------------------+\n| array_contains(['apple','orange','pear'], 'orange') |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(e.p,{children:"You can also check whether the array contains NULL."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([1, NULL], NULL);\n+--------------------------------+\n| array_contains([1,NULL], NULL) |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsx)(e.p,{children:"You can check whether the multi-dimensional array contains a certain subarray. At this time, you need to ensure that the subarray elements match exactly, including the element arrangement order."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([[1,2,3], [4,5,6]], [4,5,6]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,5,6]) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_contains([[1,2,3], [4,5,6]], [4,6,5]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,6,5]) |\n+--------------------------------------------+\n|                                          0 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(e.p,{children:"ARRAY_CONTAINS,ARRAY"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:r}){let i;return i=r?"function"==typeof n?n({}):n||c:t(n),a.createElement(s.Provider,{value:i},e)}}}]);