"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78184],{41803:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const r={displayed_sidebar:"English"},c="find_in_set",o={id:"sql-reference/sql-functions/string-functions/find_in_set",title:"find_in_set",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/string-functions/find_in_set.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/find_in_set",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/find_in_set",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/find_in_set.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ends_with",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/ends_with"},next:{title:"get_json_double",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/get_json_double"}},d={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"find_in_set",children:"find_in_set"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"INT find_in_set(VARCHAR str, VARCHAR strlist)\n"})}),"\n",(0,t.jsx)(n.p,{children:"This function returns the position of the first str in strlist (start counting with 1). Strlist is a sting separated by commas. If it does not find any str, it returns 0. When the argument is NULL, the result is NULL."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select find_in_set(\"b\", \"a,b,c\");\n+---------------------------+\n| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"FIND_IN_SET,FIND,IN,SET"})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:o},n)}}}]);