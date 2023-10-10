"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[36648],{22996:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=s(85893),t=s(11151);const i={},c="pmod",d={id:"sql-reference/sql-functions/math-functions/pmod",title:"pmod",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/pmod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/pmod",permalink:"/zh/docs/sql-reference/sql-functions/math-functions/pmod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/pmod.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"pi",permalink:"/zh/docs/sql-reference/sql-functions/math-functions/pi"},next:{title:"positive",permalink:"/zh/docs/sql-reference/sql-functions/math-functions/positive"}},r={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote"},(0,t.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"pmod",children:"pmod"}),"\n",(0,o.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,o.jsx)(e.p,{children:"\u53d6\u6a21\u51fd\u6570\uff0c\u8fd4\u56de\u4e24\u4e2a\u6570\u76f8\u9664\u4e4b\u540e\u7684\u6b63\u4f59\u6570\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Haskell",children:"pmod(dividend,divisor);\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"dividend"}),": \u88ab\u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3001BIGINT\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"divisor"}),": \u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3001BIGINT\u3002"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["\u6ce8\uff1a",(0,o.jsx)(e.code,{children:"dividend"})," \u548c ",(0,o.jsx)(e.code,{children:"divisor"})," \u6570\u636e\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e\u53c2\u6570 ",(0,o.jsx)(e.code,{children:"dividend"})," \u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,o.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-Plain",children:"mysql> select pmod(3.14,3.14);\n+------------------+\n| pmod(3.14, 3.14) |\n+------------------+\n|                0 |\n+------------------+\n\nmysql> select pmod(3,6);\n+------------+\n| pmod(3, 6) |\n+------------+\n|          3 |\n+------------+\n\nmysql> select pmod(11,5);\n+-------------+\n| pmod(11, 5) |\n+-------------+\n|           1 |\n+-------------+\n\nmysql> select pmod(-11,5);\n+--------------+\n| pmod(-11, 5) |\n+--------------+\n|            4 |\n+--------------+\n\nmysql> SELECT pmod(11,-5);\n+--------------+\n| pmod(11, -5) |\n+--------------+\n|           -4 |\n+--------------+\n\nmysql> SELECT pmod(-11,-5);\n+---------------+\n| pmod(-11, -5) |\n+---------------+\n|            -1 |\n+---------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>i});var o=s(67294);const t=o.createContext({});function i(n){const e=o.useContext(t);return o.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||c:i(n),o.createElement(t.Provider,{value:d},e)}}}]);