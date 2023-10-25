"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48428],{18877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const a={displayed_sidebar:"English"},r="bitmap_union",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_union",title:"bitmap_union",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_union",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_union.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_to_string",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_to_string"},next:{title:"bitmap_xor",permalink:"/docs/2.2/sql-reference/sql-functions/bitmap-functions/bitmap_xor"}},c={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bitmap_union",children:"bitmap_union"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.p,{children:"Aggregation function, used to calculate the bitmap union after grouping. Common usage scenarios: calculating PV and UV."}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BITMAP BITMAP_UNION(BITMAP value)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Enter a set of bitmap values, calculate the union of this set of bitmap values, and return the result."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_union(user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Use with bitmap_count function to obtain the PV data of the web page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, bitmap_count(bitmap_union(user_id))\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the user_id field is int, the above query semantics is equivalent to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select page_id, count(distinct user_id)\nfrom table\ngroup by page_id;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(n.p,{children:"BITMAP_UNION, BITMAP"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:o},n)}}}]);