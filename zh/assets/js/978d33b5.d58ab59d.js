"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29831],{95247:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(85893),i=t(11151);const c={displayed_sidebar:"Chinese31"},o="bitmap_count",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_count",title:"bitmap_count",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_count.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_count",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_count.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"bitmap_contains",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_contains"},next:{title:"bitmap_empty",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_empty"}},r={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_count",children:"bitmap_count"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u7edf\u8ba1 bitmap \u4e2d\u4e0d\u91cd\u590d\u503c\u7684\u4e2a\u6570\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"INT BITMAP_COUNT(any_bitmap)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_from_string(\"1,2,4\"));\n+-------------------------------------------+\n| bitmap_count(bitmap_from_string('1,2,4')) |\n+-------------------------------------------+\n|                                         3 |\n+-------------------------------------------+\n\nMySQL > select bitmap_count(NULL);\n+--------------------+\n| bitmap_count(NULL) |\n+--------------------+\n|                  0 |\n+--------------------+\n"})})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>a,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function a({components:n,children:e,disableParentContext:t}){let a;return a=t?"function"==typeof n?n({}):n||o:c(n),s.createElement(i.Provider,{value:a},e)}}}]);