"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79479],{81942:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=r(85893),s=r(11151);const t={displayed_sidebar:"Chinese31"},c="array_contains",i={id:"sql-reference/sql-functions/array-functions/array_contains",title:"array_contains",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/array-functions/array_contains.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_contains",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_contains",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/array-functions/array_contains.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"array_concat",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_concat"},next:{title:"array_contains_all",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_contains_all"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"array_contains",children:"array_contains"}),"\n",(0,a.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(e.p,{children:"\u68c0\u67e5\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542b\u67d0\u4e2a\u5143\u7d20\uff0c\u662f\u7684\u8bdd\u8fd4\u56de 1\uff0c\u5426\u5219\u8fd4\u56de 0\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"array_contains(any_array, any_element)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([\"apple\",\"orange\",\"pear\"], \"orange\");\n+-----------------------------------------------------+\n| array_contains(['apple','orange','pear'], 'orange') |\n+-----------------------------------------------------+\n|                                                   1 |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u68c0\u67e5\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542b NULL\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([1, NULL], NULL);\n+--------------------------------+\n| array_contains([1,NULL], NULL) |\n+--------------------------------+\n|                              1 |\n+--------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u53ef\u4ee5\u68c0\u67e5\u591a\u7ef4\u6570\u7ec4\u4e2d\u662f\u5426\u5305\u542b\u67d0\u4e2a\u5b50\u6570\u7ec4\uff0c\u6b64\u65f6\u8981\u6c42\u5b50\u6570\u7ec4\u5143\u7d20\u5b8c\u5168\u5339\u914d\uff0c\u5305\u62ec\u5143\u7d20\u6392\u5217\u987a\u5e8f"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_contains([[1,2,3], [4,5,6]], [4,5,6]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,5,6]) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_contains([[1,2,3], [4,5,6]], [4,6,5]);\n+--------------------------------------------+\n| array_contains([[1,2,3],[4,5,6]], [4,6,5]) |\n+--------------------------------------------+\n|                                          0 |\n+--------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:r}){let i;return i=r?"function"==typeof n?n({}):n||c:t(n),a.createElement(s.Provider,{value:i},e)}}}]);