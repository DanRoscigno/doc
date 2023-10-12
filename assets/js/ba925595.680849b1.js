"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25290],{21498:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var r=a(85893),s=a(11151);const t={displayed_sidebar:"documentation"},c="array_contains",i={id:"sql-reference/sql-functions/array-functions/array_contains",title:"array_contains",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_contains.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_contains.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"array_concat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_concat"},next:{title:"array_contains_all",permalink:"/doc/docs/3.0/sql-reference/sql-functions/array-functions/array_contains_all"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"array_contains",children:"array_contains"}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Checks whether the array contains a certain element. If yes, it returns 1; otherwise, it returns 0."}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Haskell",children:"array_contains(any_array, any_element)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([\"apple\",\"orange\",\"pear\"], \"orange\");\n+-----------------------------------------------------+\n| array_contains(['apple','orange','pear'], 'orange') |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"You can also check whether the array contains NULL."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([1, NULL], NULL);\n+--------------------------------+\n| array_contains([1,NULL], NULL) |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(e.p,{children:"You can check whether the multi-dimensional array contains a certain subarray. At this time, you need to ensure that the subarray elements match exactly, including the element arrangement order."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([[1,2,3], [4,5,6]], [4,5,6]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,5,6]) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_contains([[1,2,3], [4,5,6]], [4,6,5]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,6,5]) |\n+--------------------------------------------+\n|                                          0 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY_CONTAINS,ARRAY"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(d,n)})):d(n)}},11151:(n,e,a)=>{a.d(e,{Zo:()=>i,ah:()=>t});var r=a(67294);const s=r.createContext({});function t(n){const e=r.useContext(s);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:a}){let i;return i=a?"function"==typeof n?n({}):n||c:t(n),r.createElement(s.Provider,{value:i},e)}}}]);