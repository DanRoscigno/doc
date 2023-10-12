"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11865],{39931:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=i(85893),l=i(11151);const c={displayed_sidebar:"Chinese31"},t="ifnull",r={id:"sql-reference/sql-functions/condition-functions/ifnull",title:"ifnull",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/condition-functions/ifnull.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/ifnull",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/ifnull",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/condition-functions/ifnull.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"if",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/if"},next:{title:"nullif",permalink:"/doc/zh/docs/sql-reference/sql-functions/condition-functions/nullif"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,l.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"ifnull",children:"ifnull"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u82e5 ",(0,s.jsx)(e.code,{children:"expr1"})," \u4e0d\u4e3a NULL\uff0c\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"expr1"}),"\u3002\u82e5 ",(0,s.jsx)(e.code,{children:"expr1"})," \u4e3a NULL\uff0c\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"expr2"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"ifnull(expr1,expr2);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"expr1"})," \u4e0e ",(0,s.jsx)(e.code,{children:"expr2"})," \u5fc5\u987b\u5728\u6570\u636e\u7c7b\u578b\u4e0a\u80fd\u591f\u517c\u5bb9\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,s.jsx)(e.code,{children:"expr1"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select ifnull(2,4);\n+--------------+\n| ifnull(2, 4) |\n+--------------+\n|            2 |\n+--------------+\n\nmysql> select ifnull(NULL,2);\n+-----------------+\n| ifnull(NULL, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n"})})]})}const a=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>r,ah:()=>c});var s=i(67294);const l=s.createContext({});function c(n){const e=s.useContext(l);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function r({components:n,children:e,disableParentContext:i}){let r;return r=i?"function"==typeof n?n({}):n||t:c(n),s.createElement(l.Provider,{value:r},e)}}}]);