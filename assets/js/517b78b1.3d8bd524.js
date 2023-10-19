"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92423],{68130:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(85893),a=r(11151);const i={displayed_sidebar:"English"},t="array_position",o={id:"sql-reference/sql-functions/array-functions/array_position",title:"array_position",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_position.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_position",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_position",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_position.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_min",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_min"},next:{title:"array_remove",permalink:"/docs/2.5/sql-reference/sql-functions/array-functions/array_remove"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_position",children:"array_position"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Obtains the position of an element in an array."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"array_position(any_array, any_element)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"any_array"}),": the array to be searched."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"any_element"}),": an expression that matches the element in an array."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(e.p,{children:"Returns the position of the specified element if the element can be found in the specified array and returns 0 if the element cannot be found in the array."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Example 1: Obtain the position of an element in an array."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:"mysql> select array_position([\"apple\",\"orange\",\"pear\"], \"orange\");\n\n+-----------------------------------------------------+\n\n| array_position(['apple','orange','pear'], 'orange') |\n\n+-----------------------------------------------------+\n\n|                                                   2 |\n\n+-----------------------------------------------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Example 2: Obtain the position of ",(0,s.jsx)(e.code,{children:"NULL"})," in an array."]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select array_position([1, NULL], NULL);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:"+--------------------------------+\n\n| array_position([1,NULL], NULL) |\n\n+--------------------------------+\n\n|                              2 |\n\n+--------------------------------+\n\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Example 3: Obtain the position of a sub-array in a multi-dimensional array. A position can be returned only when a sub-array that consists of the same elements in the same order as the specified sub-array can be found in the multi-dimensional array."}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Lua",children:"mysql> select array_position([[1,2,3], [4,5,6]], [4,5,6]);\n\n+--------------------------------------------+\n\n| array_position([[1,2,3],[4,5,6]], [4,5,6]) |\n\n+--------------------------------------------+\n\n|                                          2 |\n\n+--------------------------------------------+\n\n1 row in set (0.00 sec)\n\n\n\nmysql> select array_position([[1,2,3], [4,5,6]], [4,6,5]);\n\n+--------------------------------------------+\n\n| array_position([[1,2,3],[4,5,6]], [4,6,5]) |\n\n+--------------------------------------------+\n\n|                                          0 |\n\n+--------------------------------------------+\n\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"ARRAY_POSITION, ARRAY"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>o,ah:()=>i});var s=r(67294);const a=s.createContext({});function i(n){const e=s.useContext(a);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function o({components:n,children:e,disableParentContext:r}){let o;return o=r?"function"==typeof n?n({}):n||t:i(n),s.createElement(a.Provider,{value:o},e)}}}]);