"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64538],{45797:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var c=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese31"},i="concat_ws",o={id:"sql-reference/sql-functions/string-functions/concat_ws",title:"concat_ws",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/string-functions/concat_ws.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat_ws",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/concat_ws",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/concat_ws.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"concat",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/concat"},next:{title:"ends_with",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/string-functions/ends_with"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"concat_ws",children:"concat_ws"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u5206\u9694\u7b26\u5c06\u4e24\u4e2a\u6216\u4ee5\u4e0a\u7684\u5b57\u7b26\u4e32\u62fc\u63a5\u6210\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u3002\u65b0\u5b57\u7b26\u4e32\u4f7f\u7528\u5206\u9694\u7b26\u8fdb\u884c\u8fde\u63a5\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR concat_ws(VARCHAR sep, VARCHAR str,...)\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sep"}),": \u5206\u9694\u7b26\uff0c\u6570\u636e\u7c7b\u578b VARCHAR\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"str"}),": \u5f85\u62fc\u63a5\u7684\u5b57\u7b26\u4e32\uff0c\u6570\u636e\u7c7b\u578b VARCHAR\u3002\u8be5\u51fd\u6570\u4e0d\u4f1a\u8df3\u8fc7\u7a7a\u5b57\u7b26\u4e32\uff0c\u4f1a\u8df3\u8fc7 NULL \u503c\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de VARCHAR \u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5206\u9694\u7b26\u4e3a NULL\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b1\uff1a\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"r"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u8fd4\u56de ",(0,c.jsx)(e.code,{children:"starrocks"}),"\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select concat_ws(\"r\", \"sta\", \"rocks\");\n+--------------------------------+\n| concat_ws('r', 'sta', 'rocks') |\n+--------------------------------+\n| starrocks                      |\n+--------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b2\uff1a\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"NULL"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select concat_ws(NULL, \"star\", \"rocks\");\n+----------------------------------+\n| concat_ws(NULL, 'star', 'rocks') |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b3\uff1a\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"r"})," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u8df3\u8fc7 NULL \u503c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > select concat_ws("r", "sta", NULL,"rocks");\n+-------------------------------------+\n| concat_ws("r", "sta", NULL,"rocks") |\n+-------------------------------------+\n| starrocks                           |\n+-------------------------------------+\n'})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>r});var c=s(67294);const t=c.createContext({});function r(n){const e=c.useContext(t);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||i:r(n),c.createElement(t.Provider,{value:o},e)}}}]);