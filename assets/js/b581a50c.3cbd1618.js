"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13314],{96035:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},c="find_in_set",o={id:"sql-reference/sql-functions/string-functions/find_in_set",title:"find_in_set",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/find_in_set.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/find_in_set",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/find_in_set",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/find_in_set.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ends_with",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/ends_with"},next:{title:"group_concat",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/group_concat"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"find_in_set",children:"find_in_set"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function returns the position of the first str in strlist (start counting with 1). Strlist is a sting separated by commas. If it does not find any str, it returns 0. When the argument is NULL, the result is NULL."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"INT find_in_set(VARCHAR str, VARCHAR strlist)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select find_in_set(\"b\", \"a,b,c\");\n+---------------------------+\n| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"FIND_IN_SET,FIND,IN,SET"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(l,n)})):l(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:r(n),t.createElement(i.Provider,{value:o},e)}}}]);