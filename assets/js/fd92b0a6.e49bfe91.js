"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49579],{30208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=r(85893),s=r(11151);const a={},i="cardinality",l={id:"sql-reference/sql-functions/array-functions/cardinality",title:"cardinality",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/cardinality.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/cardinality",permalink:"/docs/sql-reference/sql-functions/array-functions/cardinality",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/cardinality.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"arrays_overlap",permalink:"/docs/sql-reference/sql-functions/array-functions/arrays_overlap"},next:{title:"element_at",permalink:"/docs/sql-reference/sql-functions/array-functions/element_at"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cardinality",children:"cardinality"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Returns the number of elements in an array. The result type is INT. If the input parameter is NULL, the result is also NULL. Null elements are counted in the length."}),"\n",(0,t.jsxs)(n.p,{children:["It is the alias of ",(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-functions/array-functions/array_length",children:"array_length()"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This function is supported from v3.0 onwards."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"INT cardinality(any_array)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"any_array"}),": the ARRAY value from which you want to retrieve the number of elements."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns an INT value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select cardinality([1,2,3]);\n+-----------------------+\n|  cardinality([1,2,3]) |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\nmysql> select cardinality([1,2,3,null]);\n+------------------------------+\n| cardinality([1, 2, 3, NULL]) |\n+------------------------------+\n|                            4 |\n+------------------------------+\n\nmysql> select cardinality([[1,2], [3,4]]);\n+-----------------------------+\n|  cardinality([[1,2],[3,4]]) |\n+-----------------------------+\n|                           2 |\n+-----------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"CARDINALITY, ARRAY_LENGTH, ARRAY"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>a});var t=r(67294);const s=t.createContext({});function a(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:a(e),t.createElement(s.Provider,{value:l},n)}}}]);