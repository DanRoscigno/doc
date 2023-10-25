"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55038],{42962:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese"},r="weeks_diff",d={id:"sql-reference/sql-functions/date-time-functions/weeks_diff",title:"weeks_diff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-functions/date-time-functions/weeks_diff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/weeks_diff",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/weeks_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/weeks_diff.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"weekofyear",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/weekofyear"},next:{title:"year",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/year"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:2}];function f(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"weeks_diff",children:"weeks_diff"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u8ba1\u7b97\u5f00\u59cb\u65f6\u95f4\u548c\u7ed3\u675f\u65f6\u95f4\u76f8\u5dee\u51e0\u5468\uff08",(0,i.jsx)(n.code,{children:"expr1"})," - ",(0,i.jsx)(n.code,{children:"expr2"}),"\uff09\uff0c\u7ed3\u679c\u7cbe\u786e\u5230\u5468\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"BIGINT weeks_diff(DATETIME expr1,DATETIME expr2);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr1"}),": \u7ed3\u675f\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"expr2"}),": \u5f00\u59cb\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT\u3002\u5982\u679c\u65e5\u671f\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de NULL\u3002\u5982\u679c\u76f8\u5dee\u4e0d\u6ee1\u4e00\u5468\uff0c\u5219\u8fd4\u56de 0\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select weeks_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59');\n+--------------------------------------------------------+\n| weeks_diff('2010-11-30 23:59:59', '2010-1-1 23:59:59') |\n+--------------------------------------------------------+\n|                                                     47 |\n+--------------------------------------------------------+\n\nselect weeks_diff(current_time(), '2010-11-30 23:59:59');\n+---------------------------------------------------+\n| weeks_diff(current_time(), '2010-11-30 23:59:59') |\n+---------------------------------------------------+\n|                                               619 |\n+---------------------------------------------------+\n\nselect weeks_diff('2010-11-30 23:59:59', '2010-11-24 23:59:59');\n+----------------------------------------------------------+\n| weeks_diff('2010-11-30 23:59:59', '2010-11-24 23:59:59') |\n+----------------------------------------------------------+\n|                                                        0 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952e\u8bcd",children:"\u5173\u952e\u8bcd"}),"\n",(0,i.jsx)(n.p,{children:"WEEKS_DIFF"})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(f,e)})):f(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>c});var i=s(67294);const t=i.createContext({});function c(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:c(e),i.createElement(t.Provider,{value:d},n)}}}]);