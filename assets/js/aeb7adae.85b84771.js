"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55683],{87543:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={},c="bitmap_and",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_and",permalink:"/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_agg",permalink:"/docs/sql-reference/sql-functions/bitmap-functions/bitmap_agg"},next:{title:"bitmap_andnot",permalink:"/docs/sql-reference/sql-functions/bitmap-functions/bitmap_andnot"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_and",children:"bitmap_and"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Calculates the intersection of two input bitmaps and returns the new bitmap."}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"MySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP_AND,BITMAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function r({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||c:a(n),s.createElement(i.Provider,{value:r},e)}}}]);