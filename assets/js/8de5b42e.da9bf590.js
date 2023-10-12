"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51985],{33274:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=e(85893),i=e(11151);const a={displayed_sidebar:"documentation"},o="bitmap_andnot",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_andnot",title:"bitmap_andnot",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_andnot",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_andnot.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"bitmap_and",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_and"},next:{title:"bitmap_contains",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_contains"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_andnot",children:"bitmap_andnot"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Returns bitmap values that exist in ",(0,s.jsx)(t.code,{children:"lhs"})," but do not exist in ",(0,s.jsx)(t.code,{children:"rhs"}),", and returns the new bitmap."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"bitmap_andnot(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_andnot(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,3   |\n+------+\n\nmysql> select bitmap_to_string(bitmap_andnot(bitmap_from_string('1,3,5'), bitmap_from_string('1'))) cnt;\n+------+\n|cnt   |\n+------+\n|3,5   |\n+------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"BITMAP_ANDNOT, BITMAP"})]})}const p=function(n={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),n.components);return t?(0,s.jsx)(t,Object.assign({},n,{children:(0,s.jsx)(l,n)})):l(n)}},11151:(n,t,e)=>{e.d(t,{Zo:()=>r,ah:()=>a});var s=e(67294);const i=s.createContext({});function a(n){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const o={};function r({components:n,children:t,disableParentContext:e}){let r;return r=e?"function"==typeof n?n({}):n||o:a(n),s.createElement(i.Provider,{value:r},t)}}}]);