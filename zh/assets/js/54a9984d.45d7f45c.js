"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[5969],{81328:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const a={displayed_sidebar:"Chinese"},c="bitmap_and",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_and",title:"bitmap_and",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_and",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_and",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_and.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"array_sum",permalink:"/zh/docs/2.1/sql-reference/sql-functions/array-functions/array_sum"},next:{title:"bitmap_andnot",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_andnot"}},o={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_and",children:"bitmap_and"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8ba1\u7b97\u4e24\u4e2a\u8f93\u5165bitmap\u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u65b0\u7684bitmap."}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"MySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nMySQL > select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP_AND,BITMAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(l,n)})):l(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>r,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function r({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||c:a(n),s.createElement(i.Provider,{value:r},e)}}}]);