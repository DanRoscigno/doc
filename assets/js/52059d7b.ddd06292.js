"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11552],{86428:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const a={displayed_sidebar:"English"},i="array_length",l={id:"sql-reference/sql-functions/array-functions/array_length",title:"array_length",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/array-functions/array_length.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_length",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_length",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_length.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_join",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_join"},next:{title:"array_max",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_max"}},c={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_length",children:"array_length"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"array_length(any_array)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns the number of elements in the array. The result type is INT. if the parameter is NULL, the result is also NULL."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_length([1,2,3]);\n+-----------------------+\n| array_length([1,2,3]) |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_length([[1,2], [3,4]]);\n+-----------------------------+\n| array_length([[1,2],[3,4]]) |\n+-----------------------------+\n|                           2 |\n+-----------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY_LENGTH,ARRAY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>a});var s=r(67294);const t=s.createContext({});function a(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(t.Provider,{value:l},n)}}}]);