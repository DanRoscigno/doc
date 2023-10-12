"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[501],{4375:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var c=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese31"},t="base64_decode_binary",o={id:"sql-reference/sql-functions/crytographic-functions/base64_decode_binary",title:"base64_decode_binary",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/base64_decode_binary",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_binary.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"aes_encrypt",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/aes_encrypt"},next:{title:"base64_decode_string",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/base64_decode_string"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"base64_decode_binary",children:"base64_decode_binary"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u89e3\u7801\u67d0\u4e2a Base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a VARBINARY \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"VARBINARY base64_decode_binary(VARCHAR str);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"str"}),"\uff1a\u8981\u89e3\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u4e3a VARCHAR \u7c7b\u578b\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a VARBINARY \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u4e3a ",(0,c.jsx)(n.code,{children:"NULL"})," \u6216\u65e0\u6548\u7684 Base64 \u7f16\u7801\u5b57\u7b26\u4e32\uff0c\u5219\u8fd4\u56de ",(0,c.jsx)(n.code,{children:"NULL"}),"\u3002\u5982\u679c\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002 \u8be5\u51fd\u6570\u53ea\u652f\u6301\u8f93\u5165\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u8f93\u5165\u591a\u4e2a\u5b57\u7b26\u4e32\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"mysql> select hex(base64_decode_binary(to_base64(\"Hello StarRocks\")));\n+---------------------------------------------------------+\n| hex(base64_decode_binary(to_base64('Hello StarRocks'))) |\n+---------------------------------------------------------+\n| 48656C6C6F2053746172526F636B73                          |\n+---------------------------------------------------------+\n\nmysql> select base64_decode_binary(NULL);\n+--------------------------------------------------------+\n| base64_decode_binary(NULL)                             |\n+--------------------------------------------------------+\n| NULL                                                   |\n+--------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,c.jsx)(n.p,{children:"BASE64_DECODE_BINARY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var c=s(67294);const r=c.createContext({});function i(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||t:i(e),c.createElement(r.Provider,{value:o},n)}}}]);