"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26388],{62974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},o="bitmap_remove",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_remove",title:"bitmap_remove",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/bitmap-functions/bitmap_remove.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_remove",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_remove",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_remove.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_or",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_or"},next:{title:"bitmap_to_string",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"}},c={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function m(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_remove",children:"bitmap_remove"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bitmap_remove(BITMAP lhs, BIGINT input)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove input from lhs and return as a result set."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(**bitmap_remove**(bitmap_from_string('1, 3'), 3)) cnt;\n+------+\n|cnt   |\n+------+\n|1     |\n+------+\n\nmysql> select bitmap_to_string(**bitmap_remove**(bitmap_from_string('1,3,5'), 6)) cnt;\n+------+\n|cnt   |\n+------+\n|1,3,5 |\n+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_REMOVE, BITMAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},n)}}}]);