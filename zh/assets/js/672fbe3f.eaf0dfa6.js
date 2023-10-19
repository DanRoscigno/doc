"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49099],{70663:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var c=s(85893),a=s(11151);const t={displayed_sidebar:"Chinese"},r="sha2",i={id:"sql-reference/sql-functions/crytographic-functions/sha2",title:"sha2",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/crytographic-functions/sha2.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/sha2",permalink:"/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/sha2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/crytographic-functions/sha2.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"md5sum_numeric",permalink:"/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5sum_numeric"},next:{title:"sm3",permalink:"/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/sm3"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"sha2",children:"sha2"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97 SHA-2 \u7cfb\u5217\u54c8\u5e0c\u51fd\u6570 (SHA-224/SHA-256/SHA-384/SHA-512)\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"sha2(expr, hash_length)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr"}),": \u5f85\u8ba1\u7b97\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"hash_length"}),": \u7ed3\u679c\u6240\u9700\u8981\u7684\u4f4d\u957f\u5ea6\uff0c\u503c\u5fc5\u987b\u4e3a 224, 256, 384, 512 \u6216\u8005 0 (\u76f8\u5f53\u4e8e 256)\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u54c8\u5e0c\u51fd\u6570\u7684\u8ba1\u7b97\u7ed3\u679c\uff0c\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u4efb\u610f\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u7ed3\u679c\u8fd4\u56de NULL\u3002\u5982\u679c ",(0,c.jsx)(n.code,{children:"hash_length"})," \u4e0d\u5728\u53c2\u6570\u8bf4\u660e\u4e2d\u7684\u53d6\u503c\u8303\u56f4\u5185\uff0c\u7ed3\u679c\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sha2('abc',224);\n+----------------------------------------------------------+\n| sha2('abc', 224)                                         |\n+----------------------------------------------------------+\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n+----------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select sha2('abc', 384);\n+--------------------------------------------------------------------------------------------------+\n| sha2('abc', 384)                                                                                 |\n+--------------------------------------------------------------------------------------------------+\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n+--------------------------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select sha2('abc', 1),sha2('abc', null), sha2(null, 384);\n+----------------+-------------------+-----------------+\n| sha2('abc', 1) | sha2('abc', NULL) | sha2(NULL, 384) |\n+----------------+-------------------+-----------------+\n| NULL           | NULL              | NULL            |\n+----------------+-------------------+-----------------+\n1 row in set (0.01 sec)\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>t});var c=s(67294);const a=c.createContext({});function t(e){const n=c.useContext(a);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:t(e),c.createElement(a.Provider,{value:i},n)}}}]);