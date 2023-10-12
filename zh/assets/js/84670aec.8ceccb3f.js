"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33291],{80944:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var c=s(85893),l=s(11151);const t={displayed_sidebar:"Chinese31"},i="log",o={id:"sql-reference/sql-functions/math-functions/log",title:"log",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/math-functions/log.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/log",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/log",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/math-functions/log.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"ln, dlog1, log",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/ln"},next:{title:"log10, dlog10",permalink:"/doc/zh/docs/sql-reference/sql-functions/math-functions/log10"}},r={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"log",children:"log"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u4ee5 ",(0,c.jsx)(n.code,{children:"base"})," \u4e3a\u5e95\u6570\u7684 ",(0,c.jsx)(n.code,{children:"x"})," \u7684\u5bf9\u6570\u3002\u5982\u679c\u672a\u6307\u5b9a ",(0,c.jsx)(n.code,{children:"base"}),"\uff0c\u5219\u8be5\u51fd\u6570\u7b49\u540c\u4e8e ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/math-functions/ln",children:"ln()"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"log([base,] x);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"base"}),": \u5e95\u6570\uff0c\u53ef\u9009\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002",(0,c.jsx)(n.code,{children:"base"})," \u5fc5\u987b\u5927\u4e8e 0\uff0c\u4e14\u4e0d\u80fd\u4e3a 1\uff0c\u5426\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"x"}),": \u8981\u8ba1\u7b97\u5bf9\u6570\u7684\u6570\u503c\uff0c\u5fc5\u586b\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002",(0,c.jsx)(n.code,{children:"x"})," \u5fc5\u987b\u5927\u4e8e 0\uff0c\u5426\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8ba1\u7b97\u5e95\u6570\u4e3a 2 \u7684 8 \u7684\u5bf9\u6570\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select log(2,8);\n+-----------+\n| log(2, 8) |\n+-----------+\n|         3 |\n+-----------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u4e0d\u6307\u5b9a\u5e95\u6570\uff0c\u8fd4\u56de 2 \u7684\u81ea\u7136\u5bf9\u6570\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select log(2);\n+--------------------+\n| log(2)             |\n+--------------------+\n| 0.6931471805599453 |\n+--------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>t});var c=s(67294);const l=c.createContext({});function t(e){const n=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:t(e),c.createElement(l.Provider,{value:o},n)}}}]);