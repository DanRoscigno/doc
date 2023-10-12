"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97852],{73894:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=r(85893),s=r(11151);const t={displayed_sidebar:"Chinese31"},i="array_min",c={id:"sql-reference/sql-functions/array-functions/array_min",title:"array_min",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_min.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_min",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_min",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_min.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"array_max",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_max"},next:{title:"array_position",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_position"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"array_min",children:"array_min"}),"\n",(0,a.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(e.p,{children:"\u6c42\u53d6\u4e00\u4e2aARRAY\u4e2d\u7684\u6240\u6709\u6570\u636e\u4e2d\u7684\u6700\u5c0f\u503c\uff0c\u8fd4\u56de\u8fd9\u4e2a\u7ed3\u679c\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-Haskell",children:"array_min(array(type))\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select array_min([113, 11, 12]);\n+------------------------+\n| array_min([113,11,12]) |\n+------------------------+\n| 11                     |\n+------------------------+\n\nmysql> select array_min([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_min([11.33,11.11,12.324]) |\n+---------------------------------+\n| 11.11                           |\n+---------------------------------+\n\nmysql> select array_min([cast('2020-02-25 11:35:17' as datetime), cast('2019-08-25 17:07:10' as datetime), cast('2025-08-25 17:07:10' as datetime)]);\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| array_min([CAST('2020-02-25 11:35:17' AS DATETIME),CAST('2019-08-25 17:07:10' AS DATETIME),CAST('2025-08-25 17:07:10' AS DATETIME)]) |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n| 2019-08-25 17:07:10                                                                                                                  |\n+--------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>c,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function c({components:n,children:e,disableParentContext:r}){let c;return c=r?"function"==typeof n?n({}):n||i:t(n),a.createElement(s.Provider,{value:c},e)}}}]);