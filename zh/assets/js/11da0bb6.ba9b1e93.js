"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39400],{23726:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=s(85893),d=s(11151);const c={displayed_sidebar:"Chinese31"},o="mod",l={id:"sql-reference/sql-functions/math-functions/mod",title:"mod",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/math-functions/mod.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/mod",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/mod",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/math-functions/mod.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"log2",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/log2"},next:{title:"multiply",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/math-functions/multiply"}},t={},r=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mod",children:"mod"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u53d6\u6a21\u51fd\u6570\uff0c\u8fd4\u56de\u4e24\u4e2a\u6570\u76f8\u9664\u4e4b\u540e\u7684\u4f59\u6570\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6839\u636e\u4e0b\u5217\u8bed\u6cd5\uff0c\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"dividend"})," \u9664\u4ee5 ",(0,i.jsx)(n.code,{children:"divisor"})," \u540e\u6240\u5f97\u7684\u4f59\u6570\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"mod(dividend,divisor);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dividend"}),": \u88ab\u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"divisor"}),": \u9664\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u548c ",(0,i.jsx)(n.code,{children:"dividend"})," \u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6ce8\uff1a",(0,i.jsx)(n.code,{children:"dividend"})," \u548c ",(0,i.jsx)(n.code,{children:"divisor"})," \u6570\u636e\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u548c\u7b26\u53f7\u4e0e ",(0,i.jsx)(n.code,{children:"dividend"})," \u76f8\u540c\u3002\u5982\u679c ",(0,i.jsx)(n.code,{children:"divisor"})," \u4e3a 0\uff0c \u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> select mod(3.14,3.14);\n+-----------------+\n| mod(3.14, 3.14) |\n+-----------------+\n|               0 |\n+-----------------+\n\nmysql> select mod(3.14, 3);\n+--------------+\n| mod(3.14, 3) |\n+--------------+\n|         0.14 |\n+--------------+\n\nselect mod(11,-5);\n+------------+\n| mod(11, -5)|\n+------------+\n|          1 |\n+------------+\n\nselect mod(-11,5);\n+-------------+\n| mod(-11, 5) |\n+-------------+\n|          -1 |\n+-------------+\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var i=s(67294);const d=i.createContext({});function c(e){const n=i.useContext(d);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||o:c(e),i.createElement(d.Provider,{value:l},n)}}}]);