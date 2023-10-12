"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85005],{49392:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=s(85893),t=s(11151);const c={displayed_sidebar:"documentation"},i="murmur_hash3_32",a={id:"sql-reference/sql-functions/hash-functions/murmur_hash3_32",title:"murmur_hash3_32",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/hash-functions/murmur_hash3_32.md",sourceDirName:"sql-reference/sql-functions/hash-functions",slug:"/sql-reference/sql-functions/hash-functions/murmur_hash3_32",permalink:"/doc/docs/sql-reference/sql-functions/hash-functions/murmur_hash3_32",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/hash-functions/murmur_hash3_32.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"CAST",permalink:"/doc/docs/sql-reference/sql-functions/cast"},next:{title:"AUTO_INCREMENT",permalink:"/doc/docs/sql-reference/sql-statements/auto_increment"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"murmur_hash3_32",children:"murmur_hash3_32"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the 32-bit murmur3 hash value of the input string."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"INT MURMUR_HASH3_32(VARCHAR input, ...)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select murmur_hash3_32(null);\n+-----------------------+\n| murmur_hash3_32(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nMySQL > select murmur_hash3_32(\"hello\");\n+--------------------------+\n| murmur_hash3_32('hello') |\n+--------------------------+\n|               1321743225 |\n+--------------------------+\n\nMySQL > select murmur_hash3_32(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_32('hello', 'world') |\n+-----------------------------------+\n|                         984713481 |\n+-----------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"MURMUR_HASH3_32,HASH"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(t.Provider,{value:a},n)}}}]);