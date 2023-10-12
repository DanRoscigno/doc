"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18558],{41245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=s(85893),i=s(11151);const t={displayed_sidebar:"Chinese31"},c="years_diff",d={id:"sql-reference/sql-functions/date-time-functions/years_diff",title:"years_diff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/years_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/years_diff",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/years_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/years_diff.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"years_add",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/years_add"},next:{title:"years_sub",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/years_sub"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"years_diff",children:"years_diff"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u5e74 \uff08",(0,r.jsx)(n.code,{children:"expr1"})," - ",(0,r.jsx)(n.code,{children:"expr2"}),"\uff09\uff0c\u7ed3\u679c\u7cbe\u786e\u5230\u5e74\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"BIGINT years_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u76f8\u5dee\u4e0d\u6ee1\u4e00\u5e74\uff0c\u5219\u8fd4\u56de 0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select years_diff('2010-11-30 23:59:59', '2000-11-1 23:59:59');\n+---------------------------------------------------------+\n| years_diff('2010-11-30 23:59:59', '2000-11-1 23:59:59') |\n+---------------------------------------------------------+\n|                                                      10 |\n+---------------------------------------------------------+\n\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:t(e),r.createElement(i.Provider,{value:d},n)}}}]);