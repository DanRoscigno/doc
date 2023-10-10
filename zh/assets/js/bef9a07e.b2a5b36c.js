"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11299],{4302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const i={},c="hours_sub",o={id:"sql-reference/sql-functions/date-time-functions/hours_sub",title:"hours_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/hours_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/hours_sub",permalink:"/zh/docs/sql-reference/sql-functions/date-time-functions/hours_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/hours_sub.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"hours_diff",permalink:"/zh/docs/sql-reference/sql-functions/date-time-functions/hours_diff"},next:{title:"jodatime_format",permalink:"/zh/docs/sql-reference/sql-functions/date-time-functions/jodatime_format"}},u={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hours_sub",children:"hours_sub"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u6307\u5b9a\u7684\u65e5\u671f\u65f6\u95f4\u4e2d\u51cf\u5c11\u6307\u5b9a\u7684\u5c0f\u65f6\u6570\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME hours_sub(DATETIME|DATE date, INT hours);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"date"}),": \u6307\u5b9a\u7684\u65f6\u95f4\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME \u6216 DATE\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hours"}),": \u51cf\u5c11\u7684\u5c0f\u65f6\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"date"})," \u6216 ",(0,t.jsx)(n.code,{children:"hours"})," \u4efb\u610f\u4e00\u8005\u4e3a NULL \u6216\u8005\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select hours_sub('2022-01-01 01:01:01', 1);\n+-------------------------------------+\n| hours_sub('2022-01-01 01:01:01', 1) |\n+-------------------------------------+\n| 2022-01-01 00:01:01                 |\n+-------------------------------------+\n\nselect hours_sub('2022-01-01 01:01:01', -1);\n+--------------------------------------+\n| hours_sub('2022-01-01 01:01:01', -1) |\n+--------------------------------------+\n| 2022-01-01 02:01:01                  |\n+--------------------------------------+\n\nselect hours_sub('2022-01-01', 1);\n+----------------------------+\n| hours_sub('2022-01-01', 1) |\n+----------------------------+\n| 2021-12-31 23:00:00        |\n+----------------------------+\n\nselect hours_sub('2022-01-01', -1);\n+-----------------------------+\n| hours_sub('2022-01-01', -1) |\n+-----------------------------+\n| 2022-01-01 01:00:00         |\n+-----------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:o},n)}}}]);