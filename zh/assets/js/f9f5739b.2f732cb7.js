"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84523],{42986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=r(85893),c=r(11151);const l={displayed_sidebar:"Chinese"},a="array_sort",i={id:"sql-reference/sql-functions/array-functions/array_sort",title:"array_sort",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/array-functions/array_sort.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sort",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_sort",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_sort.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"array_slice",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_slice"},next:{title:"array_sum",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_sum"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_sort",children:"array_sort"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u5347\u5e8f\u6392\u5217\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"ARRAY_SORT(array)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),"\uff1a\u9700\u8981\u6392\u5e8f\u7684\u6570\u7ec4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ea\u652f\u6301\u5347\u5e8f\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"null"})," \u4f1a\u6392\u5728\u524d\u9762\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u964d\u5e8f\u6392\u5217\uff0c\u53ef\u4ee5\u5bf9\u6392\u5e8f\u540e\u7684\u7ed3\u679c\uff0c\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"reverse"})," \u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8fd4\u56de\u7ed3\u679c\u6570\u7ec4\u7684\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u548c\u53c2\u6570 ",(0,s.jsx)(n.code,{children:"array"})," \u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u5982\u4e0b\u6570\u636e\u8868\u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select * from test;\n+------+--------------+\n| c1   | c2           |\n+------+--------------+\n|    1 | [4,3,null,1] |\n|    2 | NULL         |\n|    3 | [null]       |\n|    4 | [8,5,1,4]    |\n+------+--------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9 ",(0,s.jsx)(n.code,{children:"c2"})," \u5217\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u6392\u5e8f\uff08\u5347\u5e8f\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select c1, array_sort(c2) from test;\n+------+------------------+\n| c1   | array_sort(`c2`) |\n+------+------------------+\n|    1 | [null,1,3,4]     |\n|    2 | NULL             |\n|    3 | [null]           |\n|    4 | [1,4,5,8]        |\n+------+------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>l});var s=r(67294);const c=s.createContext({});function l(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:l(e),s.createElement(c.Provider,{value:i},n)}}}]);