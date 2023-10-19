"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54307],{64994:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=r(85893),i=r(11151);const a={displayed_sidebar:"Chinese"},t="cardinality",c={id:"sql-reference/sql-functions/array-functions/cardinality",title:"cardinality",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/cardinality.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/cardinality",permalink:"/zh/docs/sql-reference/sql-functions/array-functions/cardinality",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/cardinality.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"arrays_overlap",permalink:"/zh/docs/sql-reference/sql-functions/array-functions/arrays_overlap"},next:{title:"element_at",permalink:"/zh/docs/sql-reference/sql-functions/array-functions/element_at"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"cardinality",children:"cardinality"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u8ba1\u7b97\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\u662f INT\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u8fd4\u56de\u503c\u4e5f\u662f NULL\u3002\u6570\u7ec4\u4e2d\u7684 NULL \u5143\u7d20\u4f1a\u8ba1\u5165\u957f\u5ea6\uff0c\u6bd4\u5982 ",(0,s.jsx)(e.code,{children:"[1,2,3,null]"})," \u4f1a\u8ba1\u7b97\u4e3a 4 \u4e2a\u5143\u7d20\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002\u522b\u540d\u4e3a ",(0,s.jsx)(e.a,{href:"/zh/docs/sql-reference/sql-functions/array-functions/array_length",children:"array_length()"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"INT cardinality(any_array)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"any_array"}),": ARRAY \u8868\u8fbe\u5f0f\uff0c\u5fc5\u9009\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u5143\u7d20\u4e2a\u6570\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"mysql> select cardinality([1,2,3]);\n+-----------------------+\n|  cardinality([1,2,3]) |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\nmysql> select cardinality([1,2,3,null]);\n+------------------------------+\n| cardinality([1, 2, 3, NULL]) |\n+------------------------------+\n|                            4 |\n+------------------------------+\n\nmysql> select cardinality([[1,2], [3,4]]);\n+-----------------------------+\n|  cardinality([[1,2],[3,4]]) |\n+-----------------------------+\n|                           2 |\n+-----------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"CARDINALITY, ARRAY_LENGTH, ARRAY"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>c,ah:()=>a});var s=r(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function c({components:n,children:e,disableParentContext:r}){let c;return c=r?"function"==typeof n?n({}):n||t:a(n),s.createElement(i.Provider,{value:c},e)}}}]);