"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46988],{39327:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var r=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese31"},i="array_slice",t={id:"sql-reference/sql-functions/array-functions/array_slice",title:"array_slice",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/array-functions/array_slice.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_slice",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_slice.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"array_remove",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_remove"},next:{title:"array_sort",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_sort"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_slice",children:"array_slice"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u6570\u7ec4\u7684\u4e00\u4e2a\u6570\u7ec4\u7247\u6bb5\u3002\u6839\u636e ",(0,r.jsx)(n.code,{children:"offset"})," \u6307\u5b9a\u7684\u4f4d\u7f6e\uff0c\u4ece ",(0,r.jsx)(n.code,{children:"input"})," \u4e2d\u622a\u53d6\u957f\u5ea6\u4e3a ",(0,r.jsx)(n.code,{children:"length"})," \u7684\u6570\u7ec4\u7247\u6bb5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"array_slice(input, offset, length)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),"\uff1a\u8f93\u5165\u6570\u7ec4\uff0c\u7c7b\u578b\u4e3a ARRAY\u3002\u6570\u7ec4\u5143\u7d20\u53ef\u4ee5\u662f\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3001VARCHAR\u3001DATETIME\u3001DATE\u3001JSON\u3002",(0,r.jsx)(n.strong,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u51fd\u6570\u652f\u6301 JSON \u7c7b\u578b\u7684\u6570\u7ec4\u5143\u7d20\u3002"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offset"}),": \u7ed3\u679c\u6570\u7ec4\u7247\u6bb5\u7684\u8d77\u59cb\u504f\u79fb (",(0,r.jsx)(n.strong,{children:"\u4ece 1 \u5f00\u59cb"}),")\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"length"}),": \u7ed3\u679c\u6570\u7ec4\u7247\u6bb5\u7684\u957f\u5ea6\uff0c\u5373\u5143\u7d20\u4e2a\u6570\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ARRAY (\u5143\u7d20\u7c7b\u578b\u4e0e\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"input"})," \u4fdd\u6301\u4e00\u81f4)\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u504f\u79fb\u91cf\u4ece 1 \u5f00\u59cb\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u6307\u5b9a\u7684\u622a\u53d6\u957f\u5ea6\u5927\u4e8e\u5b9e\u9645\u80fd\u622a\u53d6\u7684\u957f\u5ea6\uff0c\u5219\u8fd4\u56de\u5168\u90e8\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\uff0c\u89c1\u793a\u4f8b\u56db\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793a\u4f8b\u4e00"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_slice([1,2,4,5,6], 3, 2) as res;\n+-------+\n| res   |\n+-------+\n| [4,5] |\n+-------+\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793a\u4f8b\u4e8c"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:'mysql> select array_slice(["sql","storage","query","execute"], 1, 2) as res;\n+-------------------+\n| res               |\n+-------------------+\n| ["sql","storage"] |\n+-------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793a\u4f8b\u4e09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_slice([57.73,97.32,128.55,null,324.2], 3, 3) as res;\n+---------------------+\n| res                 |\n+---------------------+\n| [128.55,null,324.2] |\n+---------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u793a\u4f8b\u56db"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_slice([57.73,97.32,128.55,null,324.2], 3, 5) as res;\n+---------------------+\n| res                 |\n+---------------------+\n| [128.55,null,324.2] |\n+---------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u793a\u4f8b\u4e2d\uff0c\u6307\u5b9a\u7684\u957f\u5ea6\u4e3a 5\uff0c \u4f46\u662f\u53ea\u6709 3 \u4e2a\u5143\u7d20\u7b26\u5408\u6761\u4ef6\uff0c\u8fd4\u56de\u5168\u90e8 3 \u4e2a\u5143\u7d20\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>c});var r=s(67294);const l=r.createContext({});function c(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(l.Provider,{value:t},n)}}}]);