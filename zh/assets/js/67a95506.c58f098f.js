"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34072],{78454:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var c=s(85893),r=s(11151);const d={displayed_sidebar:"Chinese31"},i="round, dround",t={id:"sql-reference/sql-functions/math-functions/round",title:"round, dround",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/math-functions/round.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/round",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/round",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/math-functions/round.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"RAND, RANDOM",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/rand"},next:{title:"sign",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/sign"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"round-dround",children:"round, dround"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u53ea\u5b58\u5728 ",(0,c.jsx)(e.code,{children:"x"}),"\uff0c\u5219 ROUND \u5c06 ",(0,c.jsx)(e.code,{children:"x"})," \u5411\u6700\u8fd1\u7684\u6574\u6570\u820d\u5165\u3002\u5982\u679c\u5b58\u5728 ",(0,c.jsx)(e.code,{children:"n"}),"\uff0cROUND \u5c06 ",(0,c.jsx)(e.code,{children:"x"})," \u820d\u5165\u5230\u5c0f\u6570\u70b9\u540e ",(0,c.jsx)(e.code,{children:"n"})," \u4e2a\u5c0f\u6570\u4f4d\u3002\u82e5 n \u4e3a\u8d1f\u6570\uff0c\u5219 ROUND \u5c06\u820d\u6389\u5c0f\u6570\u70b9\u53d6\u6574\uff0c\u4e2d\u95f4\u6570\u5411\u8fdc\u79bb 0 \u7684\u65b9\u5411\u820d\u5165\u3002\u5982\u679c\u53d1\u751f\u6ea2\u51fa\uff0c\u5219\u751f\u6210\u9519\u8bef\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"ROUND(x [,n]);\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"x"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE \u6216 DECIMAL128\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"n"}),": \u53ef\u9009\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.p,{children:["\u82e5\u53ea\u6307\u5b9a ",(0,c.jsx)(e.code,{children:"x"}),"\uff0c\u5219\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a\uff1a"]}),"\n",(0,c.jsx)(e.p,{children:'["DECIMAL128"] -> "DECIMAL128"'}),"\n",(0,c.jsx)(e.p,{children:'["DOUBLE"] -> "BIGINT"'}),"\n",(0,c.jsxs)(e.p,{children:["\u82e5 ",(0,c.jsx)(e.code,{children:"x"})," \u548c ",(0,c.jsx)(e.code,{children:"n"})," \u90fd\u6307\u5b9a\uff0c\u5219\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a\uff1a"]}),"\n",(0,c.jsx)(e.p,{children:'["DECIMAL128", "INT"] -> "DECIMAL128"'}),"\n",(0,c.jsx)(e.p,{children:'["DOUBLE", "INT"] -> "DOUBLE"'}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"mysql> select round(3.14);\n+-------------+\n| round(3.14) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.00 sec)\n\nmysql> select round(3.14,1);\n+----------------+\n| round(3.14, 1) |\n+----------------+\n|            3.1 |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql> select round(13.14,-1);\n+------------------+\n| round(13.14, -1) |\n+------------------+\n|               10 |\n+------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>t,ah:()=>d});var c=s(67294);const r=c.createContext({});function d(n){const e=c.useContext(r);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function t({components:n,children:e,disableParentContext:s}){let t;return t=s?"function"==typeof n?n({}):n||i:d(n),c.createElement(r.Provider,{value:t},e)}}}]);