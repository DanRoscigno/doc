"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95794],{16294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={displayed_sidebar:"Chinese"},o="bitmap_xor",c={id:"sql-reference/sql-functions/bitmap-functions/bitmap_xor",title:"bitmap_xor",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_xor",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_xor",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_xor.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_union",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_union"},next:{title:"to_bitmap",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap"}},a={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_xor",children:"bitmap_xor"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bitmap_xor(BITMAP lhs, BITMAP rhs)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f97\u5230 ",(0,s.jsx)(n.strong,{children:"lhs"})," \u72ec\u6709\u6216\u8005 ",(0,s.jsx)(n.strong,{children:"rhs"})," \u72ec\u6709\u7684\u5143\u7d20\u6240\u6784\u6210\u7684\u96c6\u5408\uff0c\u903b\u8f91\u4e0a\u7b49\u4ef7\u4e8e",(0,s.jsx)(n.code,{children:"bitmap_andnot(bitmap_or(lhs, rhs), bitmap_and(lhs, rhs))"}),"(\u8865\u96c6)"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select bitmap_to_string(bitmap_xor(bitmap_from_string('1, 3'), bitmap_from_string('2'))) cnt;\n+------+\n|cnt   |\n+------+\n|1,2,3 |\n+------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"BITMAP_XOR,  BITMAP"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:c},n)}}}]);