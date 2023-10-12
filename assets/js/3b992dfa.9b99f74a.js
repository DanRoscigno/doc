"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51916],{38263:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var a=s(85893),r=s(11151);const t={displayed_sidebar:"documentation"},c="any_match",l={id:"sql-reference/sql-functions/array-functions/any_match",title:"any_match",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/any_match.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/any_match",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/any_match",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/any_match.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"all_match",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/all_match"},next:{title:"array_agg",permalink:"/doc/docs/sql-reference/sql-functions/array-functions/array_agg"}},i={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",a:"a"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"any_match",children:"any_match"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns whether any elements of an array match the given predicate."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Returns ",(0,a.jsx)(n.code,{children:"true"})," (1) if one or more elements match the predicate."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Returns ",(0,a.jsx)(n.code,{children:"false"})," (0) if none of the elements matches (a special case is when the array is empty)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Returns NULL if the predicate returns NULL for one or more elements and ",(0,a.jsx)(n.code,{children:"false"})," for all other elements."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This function is supported from v3.0.6 onwards."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"any_match(lambda_function, arr1, arr2...)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns whether any elements of ",(0,a.jsx)(n.code,{children:"arr1"})," match the given predicate in the lambda function."]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"arr1"}),": the array to match."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"arrN"}),": optional arrays used in the lambda function."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_function"}),": the lambda function used to match values."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns a BOOLEAN value."}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The lambda function follows the usage notes in ",(0,a.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/array-functions/array_map",children:"array_map()"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"If the input array is null or the lambda function results in null, null is returned."}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"arr1"})," is empty, ",(0,a.jsx)(n.code,{children:"false"})," is returned."]}),"\n",(0,a.jsxs)(n.li,{children:["To apply this function to MAP, rewrite ",(0,a.jsx)(n.code,{children:"any_match((k,v)->k>v,map)"})," to ",(0,a.jsx)(n.code,{children:"any_match(map_values(transform_values((k,v)->k>v, map)))"}),". For example, ",(0,a.jsx)(n.code,{children:"select any_match(map_values(transform_values((k,v)->k>v, map{2:1})));"})," returns 1."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.p,{children:["Check whether any element in ",(0,a.jsx)(n.code,{children:"x"})," is less than the elements in ",(0,a.jsx)(n.code,{children:"y"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",children:"select any_match((x,y) -> x < y, [1,2,8], [4,5,6]);\n+--------------------------------------------------+\n| any_match((x, y) -> x < y, [1, 2, 8], [4, 5, 6]) |\n+--------------------------------------------------+\n|                                                1 |\n+--------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [11,12,8], [4,5,6]);\n+----------------------------------------------------+\n| any_match((x, y) -> x < y, [11, 12, 8], [4, 5, 6]) |\n+----------------------------------------------------+\n|                                                  0 |\n+----------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [11,12,null], [4,5,6]);\n+-------------------------------------------------------+\n| any_match((x, y) -> x < y, [11, 12, NULL], [4, 5, 6]) |\n+-------------------------------------------------------+\n|                                                  NULL |\n+-------------------------------------------------------+\n\nselect any_match((x,y) -> x < y, [], []);\n+------------------------------------+\n| any_match((x, y) -> x < y, [], []) |\n+------------------------------------+\n|                                  0 |\n+------------------------------------+\n\nselect any_match((x,y) -> x < y, null, [4,5,6]);\n+---------------------------------------------+\n| any_match((x, y) -> x < y, NULL, [4, 5, 6]) |\n+---------------------------------------------+\n|                                        NULL |\n+---------------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>t});var a=s(67294);const r=a.createContext({});function t(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:t(e),a.createElement(r.Provider,{value:l},n)}}}]);