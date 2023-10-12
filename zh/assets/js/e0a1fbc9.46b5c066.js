"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38644],{94553:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var d=s(85893),c=s(11151);const o={displayed_sidebar:"Chinese31"},i="fmod",t={id:"sql-reference/sql-functions/math-functions/fmod",title:"fmod",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/math-functions/fmod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/fmod",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/fmod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/fmod.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"floor, dfloor",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/floor"},next:{title:"greatest",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/greatest"}},r={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,c.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"fmod",children:"fmod"}),"\n",(0,d.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,d.jsx)(n.p,{children:"\u53d6\u6a21\u51fd\u6570\uff0c\u8fd4\u56de\u4e24\u4e2a\u6570\u76f8\u9664\u4e4b\u540e\u7684\u6d6e\u70b9\u4f59\u6570\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u6839\u636e\u4e0b\u5217\u8bed\u6cd5\uff0c\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"dividend"})," \u9664\u4ee5 ",(0,d.jsx)(n.code,{children:"divisor"})," \u540e\u6240\u5f97\u7684\u6d6e\u70b9\u4f59\u6570\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Haskell",children:"fmod(dividend,devisor);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dividend"}),": \u88ab\u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3001FLOAT\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"devisor"}),": \u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3001FLOAT\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dividend"})," \u548c ",(0,d.jsx)(n.code,{children:"devisor"})," \u6570\u636e\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u548c\u7b26\u53f7\u4e0e ",(0,d.jsx)(n.code,{children:"dividend"})," \u76f8\u540c\u3002\u5982\u679c ",(0,d.jsx)(n.code,{children:"divisor"})," \u4e3a 0\uff0c \u8fd4\u56de NULL\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-Plain",children:"mysql> select fmod(3.14,3.14);\n+------------------+\n| fmod(3.14, 3.14) |\n+------------------+\n|                0 |\n+------------------+\n\nmysql> select fmod(11.5,3);\n+---------------+\n| fmod(11.5, 3) |\n+---------------+\n|           2.5 |\n+---------------+\n\nmysql> select fmod(3,6);\n+------------+\n| fmod(3, 6) |\n+------------+\n|          3 |\n+------------+\n\nmysql> select fmod(3,0);\n+------------+\n| fmod(3, 0) |\n+------------+\n|       NULL |\n+------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>o});var d=s(67294);const c=d.createContext({});function o(e){const n=d.useContext(c);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||i:o(e),d.createElement(c.Provider,{value:t},n)}}}]);