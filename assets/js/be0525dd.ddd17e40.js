"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3120],{184:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},c="repeat",a={id:"sql-reference/sql-functions/string-functions/repeat",title:"repeat",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/string-functions/repeat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/repeat",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/repeat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/repeat.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"parse_url",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/parse_url"},next:{title:"reverse",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/reverse"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"repeat",children:"repeat"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This function repeats str by a number of times according to count. When count is below 1, it returns an empty string. When str or count is NULL, it returns NULL."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR repeat(VARCHAR str, INT count)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT repeat(\"a\", 3);\n+----------------+\n| repeat('a', 3) |\n+----------------+\n| aaa            |\n+----------------+\n\nMySQL > SELECT repeat(\"a\", -1);\n+-----------------+\n| repeat('a', -1) |\n+-----------------+\n|                 |\n+-----------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"REPEAT,"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:a},n)}}}]);