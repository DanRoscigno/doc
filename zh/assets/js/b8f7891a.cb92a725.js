"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37541],{76739:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},o="to_base64",i={id:"sql-reference/sql-functions/crytographic-functions/to_base64",title:"to_base64",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/crytographic-functions/to_base64.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/to_base64",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/to_base64",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/crytographic-functions/to_base64.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"sm3",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/sm3"},next:{title:"Date Functions",permalink:"/doc/zh/docs/3.0/category/date-functions-1"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"to_base64",children:"to_base64"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06\u5b57\u7b26\u4e32 ",(0,t.jsx)(n.code,{children:"str"})," \u8fdb\u884c Base64 \u7f16\u7801\u3002\u53cd\u5411\u51fd\u6570\u4e3a ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/crytographic-functions/from_base64",children:"from_base64"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"to_base64(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": \u8981\u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u8f93\u5165\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ec5\u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8f93\u5165\u591a\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f1a\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select to_base64(\"starrocks\");\n+------------------------+\n| to_base64('starrocks') |\n+------------------------+\n| c3RhcnJvY2tz           |\n+------------------------+\n1 row in set (0.00 sec)\n\nmysql> select to_base64(123);\n+----------------+\n| to_base64(123) |\n+----------------+\n| MTIz           |\n+----------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(c.Provider,{value:i},n)}}}]);