"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97197],{34694:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(85893),c=s(11151);const i={},t="CORR",l={id:"sql-reference/sql-functions/aggregate-functions/corr",title:"CORR",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/corr.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/corr",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/corr",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/corr.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"BITMAP",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/bitmap"},next:{title:"COUNT",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/count"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",img:"img",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"corr",children:"CORR"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u4e24\u4e2a\u968f\u673a\u53d8\u91cf\u7684\u76ae\u5c14\u900a\u76f8\u5173\u7cfb\u6570\uff08correlation coefficient\uff09\u3002\u8be5\u51fd\u6570\u4ece 2.5.10 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u4e5f\u53ef\u7528\u4f5c\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"CORR(expr1, expr2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f 1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr2"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f 2\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u8868\u8fbe\u5f0f\u4e3a\u8868\u4e2d\u4e00\u5217\u65f6\uff0c\u7528\u4e8e\u8ba1\u7b97\u4e24\u5217\u503c\u4e4b\u95f4\u7684\u76f8\u5173\u7cfb\u6570\u3002\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u4e3a DOUBLE \u7c7b\u578b\u3002\u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"n"})," \u4e3a\u8be5\u8868\u7684\u884c\u6570\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"corr_formula",src:s(73497).Z+"",width:"802",height:"372"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8ba1\u7b97\u76f8\u5173\u7cfb\u6570\u65f6\uff0c\u53ea\u6709\u540c\u4e00\u884c\u7684\u4e24\u5217\u6570\u636e\u90fd\u4e0d\u4e3a null \u65f6\uff0c\u8be5\u884c\u6570\u636e\u624d\u4f1a\u88ab\u7edf\u8ba1\u5230\u6700\u7ec8\u7ed3\u679c\u4e2d\uff0c\u5426\u5219\u8be5\u884c\u6570\u636e\u4f1a\u88ab\u5ffd\u7565\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f53 ",(0,r.jsx)(n.code,{children:"n"})," \u4e3a 1 \u65f6\uff0c\u8fd4\u56de\u503c\u4e3a 0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u4ee5\u4e0b\u6570\u636e\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select * from agg;\n+------+-------+-------+\n| no   | k     | v     |\n+------+-------+-------+\n|    1 | 10.00 |  NULL |\n|    2 | 10.00 | 11.00 |\n|    2 | 20.00 | 22.00 |\n|    2 | 25.00 |  NULL |\n|    2 | 30.00 | 35.00 |\n+------+-------+-------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba1\u7b97\u5217 ",(0,r.jsx)(n.code,{children:"k"})," \u548c \u5217 ",(0,r.jsx)(n.code,{children:"v"})," \u7684\u76f8\u5173\u7cfb\u6570:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"mysql> select no,CORR(k,v) from agg group by no;\n+------+--------------------+\n| no   | corr(k, v)         |\n+------+--------------------+\n|    1 |               NULL |\n|    2 | 0.9988445981121532 |\n+------+--------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},73497:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/corr_formula-75bf9b7aad75540526eddeb62d5e38a3.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const c=r.createContext({});function i(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:i(e),r.createElement(c.Provider,{value:l},n)}}}]);