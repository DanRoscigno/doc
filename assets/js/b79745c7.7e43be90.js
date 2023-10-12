"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75242],{49751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={displayed_sidebar:"documentation"},o="bitmap_remove",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_remove",title:"bitmap_remove",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_remove.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_remove",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_remove",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_remove.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"bitmap_or",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_or"},next:{title:"bitmap_to_array",permalink:"/doc/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_array"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function m(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_remove",children:"bitmap_remove"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Removes ",(0,s.jsx)(n.code,{children:"input"})," from the Bitmap value ",(0,s.jsx)(n.code,{children:"lhs"})," and returns a result set."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bitmap_remove(BITMAP lhs, BIGINT input)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(**bitmap_remove**(bitmap_from_string('1, 3'), 3)) cnt;\n+------+\n|cnt   |\n+------+\n|1     |\n+------+\n\nmysql> select bitmap_to_string(**bitmap_remove**(bitmap_from_string('1,3,5'), 6)) cnt;\n+------+\n|cnt   |\n+------+\n|1,3,5 |\n+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_REMOVE, BITMAP"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:c},n)}}}]);