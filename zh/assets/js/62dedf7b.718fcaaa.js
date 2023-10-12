"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16191],{54563:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(85893),d=s(11151);const i={displayed_sidebar:"Chinese31"},c="months_add",o={id:"sql-reference/sql-functions/date-time-functions/months_add",title:"months_add",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/months_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/months_add",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/months_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/date-time-functions/months_add.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"monthname",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/monthname"},next:{title:"months_diff",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/months_diff"}},r={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"months_add",children:"months_add"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u65e5\u671f\u6dfb\u52a0\u6307\u5b9a\u7684\u6708\u6570\uff0c\u7cbe\u786e\u5230\u6708\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME months_add(DATETIME expr1, INT expr2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": \u5f85\u6dfb\u52a0\u6708\u6570\u7684\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u6216 DATE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr2"}),": \u589e\u52a0\u7684\u6708\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002\u53d6\u503c\u53ef\u4ee5\u5927\u4e8e\uff0c\u7b49\u4e8e\u6216\u8005\u5c0f\u4e8e 0\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select months_add('2019-08-01 13:21:03', 8);\n+--------------------------------------+\n| months_add('2019-08-01 13:21:03', 8) |\n+--------------------------------------+\n| 2020-04-01 13:21:03                  |\n+--------------------------------------+\n\nselect months_add('2019-08-01', 8);\n+-----------------------------+\n| months_add('2019-08-01', 8) |\n+-----------------------------+\n| 2020-04-01 00:00:00         |\n+-----------------------------+\n\nselect months_add('2019-08-01 13:21:03', -8);\n+---------------------------------------+\n| months_add('2019-08-01 13:21:03', -8) |\n+---------------------------------------+\n| 2018-12-01 13:21:03                   |\n+---------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const d=t.createContext({});function i(e){const n=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(d.Provider,{value:o},n)}}}]);