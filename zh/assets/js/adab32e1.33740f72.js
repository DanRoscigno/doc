"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68141],{8748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=s(85893),i=s(11151);const r={},t="if",o={id:"sql-reference/sql-functions/condition-functions/if",title:"if",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/condition-functions/if.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/if",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/if",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/condition-functions/if.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"coalesce",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/coalesce"},next:{title:"ifnull",permalink:"/zh/docs/3.0/sql-reference/sql-functions/condition-functions/ifnull"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"if",children:"if"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u82e5\u53c2\u6570 ",(0,c.jsx)(n.code,{children:"expr1"})," \u6210\u7acb\uff0c\u8fd4\u56de\u7ed3\u679c ",(0,c.jsx)(n.code,{children:"expr2"}),"\uff0c\u5426\u5219\u8fd4\u56de\u7ed3\u679c ",(0,c.jsx)(n.code,{children:"expr3"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"if(expr1,expr2,expr3);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DATETIME\u3001DATE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001VARCHAR\u3001BITMAP\u3001PERCENTILE\u3001HLL\u3001TIME\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr3"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DATETIME\u3001DATE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001VARCHAR\u3001BITMAP\u3001PERCENTILE\u3001HLL\u3001TIME\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u6ce8\uff1a",(0,c.jsx)(n.code,{children:"expr2"})," \u4e0e ",(0,c.jsx)(n.code,{children:"expr3"})," \u7c7b\u578b\u9700\u8981\u4e00\u81f4\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,c.jsx)(n.code,{children:"expr2"})," \u7c7b\u578b\u4e00\u81f4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select if(false,1,2);\n+-----------------+\n| if(FALSE, 1, 2) |\n+-----------------+\n|               2 |\n+-----------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var c=s(67294);const i=c.createContext({});function r(e){const n=c.useContext(i);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||t:r(e),c.createElement(i.Provider,{value:o},n)}}}]);