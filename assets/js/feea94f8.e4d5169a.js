"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89121],{99678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const o={displayed_sidebar:"documentation"},r="bitmap_or",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_or",title:"bitmap_or",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_or.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_or",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_or",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_or.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"bitmap_min",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_min"},next:{title:"bitmap_remove",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_remove"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_or",children:"bitmap_or"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Calculates the union of two input bitmaps and return a new bitmap."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BITMAP BITMAP_OR(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n\nMySQL > select bitmap_count(bitmap_or(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(n.p,{children:"BITMAP_OR,BITMAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var i=t(67294);const s=i.createContext({});function o(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:o(e),i.createElement(s.Provider,{value:c},n)}}}]);