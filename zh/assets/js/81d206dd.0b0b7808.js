"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11388],{98293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=s(85893),c=s(11151);const l={displayed_sidebar:"Chinese"},t="ifnull",r={id:"sql-reference/sql-functions/condition-functions/ifnull",title:"ifnull",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/condition-functions/ifnull.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/ifnull",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/ifnull",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/condition-functions/ifnull.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"if",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/if"},next:{title:"nullif",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/nullif"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ifnull",children:"ifnull"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5\u53c2\u6570 ",(0,i.jsx)(n.code,{children:"expr1"})," \u4e0d\u4e3a NULL\uff0c\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"expr1"}),"\uff0c\u5426\u5219\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"expr2"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"ifnull(expr1,expr2);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DATETIME\u3001DATE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001VARCHAR\u3001BITMAP\u3001PERCENTILE\u3001HLL\u3001TIME\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DATETIME\u3001DATE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001VARCHAR\u3001BITMAP\u3001PERCENTILE\u3001HLL\u3001TIME\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6ce8\uff1a",(0,i.jsx)(n.code,{children:"expr1"})," \u4e0e ",(0,i.jsx)(n.code,{children:"expr2"})," \u7c7b\u578b\u9700\u8981\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,i.jsx)(n.code,{children:"expr1"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select ifnull(NULL,2);\n+-----------------+\n| ifnull(NULL, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n1 row in set (0.01 sec)\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(67294);const c=i.createContext({});function l(e){const n=i.useContext(c);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||t:l(e),i.createElement(c.Provider,{value:r},n)}}}]);