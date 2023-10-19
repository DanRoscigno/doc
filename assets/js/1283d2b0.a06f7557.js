"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19106],{46452:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=n(85893),a=n(11151);const t={displayed_sidebar:"English"},i="array_remove",l={id:"sql-reference/sql-functions/array-functions/array_remove",title:"array_remove",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_remove.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_remove",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_remove",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_remove.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_position",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_position"},next:{title:"array_slice",permalink:"/docs/3.0/sql-reference/sql-functions/array-functions/array_slice"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"array_remove",children:"array_remove"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Removes an element from an array."}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Haskell",children:"array_remove(any_array, any_element)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"any_array"}),": the array to be searched."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"any_element"}),": an expression that matches the element in an array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(r.p,{children:"Returns the array from which specified element has been removed."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-plaintext",children:"mysql> select array_remove([1,2,3,null,3], 3);\n\n+---------------------------------+\n\n| array_remove([1,2,3,NULL,3], 3) |\n\n+---------------------------------+\n\n| [1,2,null]                      |\n\n+---------------------------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(r.p,{children:"ARRAY_REMOVE, ARRAY"})]})}const u=function(e={}){const{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>l,ah:()=>t});var s=n(67294);const a=s.createContext({});function t(e){const r=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function l({components:e,children:r,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:t(e),s.createElement(a.Provider,{value:l},r)}}}]);