"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76776],{384:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var c=s(85893),t=s(11151);const i={},r="microseconds_sub",o={id:"sql-reference/sql-functions/date-time-functions/microseconds_sub",title:"microseconds_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/microseconds_sub",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/microseconds_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/microseconds_sub.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"microseconds_add",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/microseconds_add"},next:{title:"minute",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/minute"}},d={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"microseconds_sub",children:"microseconds_sub"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ece ",(0,c.jsx)(n.code,{children:"expr1"})," \u4e2d\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"DATETIME microseconds_sub(DATETIME expr1,INT expr2);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\uff0c\u5355\u4f4d\u4e3a\u5fae\u79d2\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a DATE \u7c7b\u578b\uff0c\u5219\u65f6-\u5206-\u79d2\u90e8\u5206\u9ed8\u8ba4\u6309\u7167 00:00:00 \u5904\u7406\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select microseconds_sub('2010-11-30 23:50:50', 2);\n+--------------------------------------------+\n| microseconds_sub('2010-11-30 23:50:50', 2) |\n+--------------------------------------------+\n| 2010-11-30 23:50:49.999998                 |\n+--------------------------------------------+\n\nselect microseconds_sub('2010-11-30', 2);\n+-----------------------------------+\n| microseconds_sub('2010-11-30', 2) |\n+-----------------------------------+\n| 2010-11-29 23:59:59.999998        |\n+-----------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var c=s(67294);const t=c.createContext({});function i(e){const n=c.useContext(t);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:i(e),c.createElement(t.Provider,{value:o},n)}}}]);