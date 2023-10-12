"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79840],{10407:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=n(85893),c=n(11151);const r={displayed_sidebar:"Chinese31"},i="years_sub",d={id:"sql-reference/sql-functions/date-time-functions/years_sub",title:"years_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/years_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/years_sub",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/years_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/years_sub.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"years_diff",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/years_diff"},next:{title:"Geographic Functions",permalink:"/doc/zh/docs/category/geographic-functions-1"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"years_sub",children:"years_sub"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u4ece\u6307\u5b9a\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u51cf\u53bb\u6307\u5b9a\u5e74\u6570\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"DATETIME YEARS_SUB(DATETIME date, INT years)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"date"}),": \u539f\u59cb\u65e5\u671f\uff0c\u7c7b\u578b\u4e3a DATETIME \u6216\u8005 DATE\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"years"}),": \u9700\u8981\u51cf\u53bb\u7684\u5e74\u6570\u3002\u8be5\u503c\u53ef\u4ee5\u4e3a\u8d1f\u6570\uff0c\u4f46\u9700\u6ee1\u8db3 ",(0,t.jsx)(s.code,{children:"date"})," \u7684\u5e74\u4efd\u51cf\u53bb ",(0,t.jsx)(s.code,{children:"years"})," \u4e0d\u80fd\u8d85\u8fc7 10000\u3002\u5047\u5982 ",(0,t.jsx)(s.code,{children:"date"})," \u4e2d\u7684\u5e74\u4efd\u4e3a 2022\uff0c\u90a3\u4e48 ",(0,t.jsx)(s.code,{children:"years"})," \u4e0d\u80fd\u5c0f\u4e8e -7979\u3002\u540c\u65f6\uff0c\u8be5\u503c\u4e0d\u80fd\u8d85\u8fc7 ",(0,t.jsx)(s.code,{children:"date"})," \u4e2d\u7684\u5e74\u4efd\uff0c\u5047\u5982 ",(0,t.jsx)(s.code,{children:"date"})," \u4e2d\u7684\u5e74\u4efd\u4e3a 2022\uff0c\u90a3\u4e48 ",(0,t.jsx)(s.code,{children:"years"})," \u4e0d\u80fd\u5927\u4e8e 2022\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.p,{children:["\u8fd4\u56de\u503c\u4e0e\u53c2\u6570 ",(0,t.jsx)(s.code,{children:"date"})," \u7c7b\u578b\u4e00\u81f4\u3002\u5982\u679c\u8ba1\u7b97\u51fa\u7684\u7ed3\u679c\u5e74\u4efd\u8d85\u51fa\u8303\u56f4[0, 9999]\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"select years_sub(\"2022-12-20 15:50:21\", 2);\n+-------------------------------------+\n| years_sub('2022-12-20 15:50:21', 2) |\n+-------------------------------------+\n| 2020-12-20 15:50:21                 |\n+-------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>r});var t=n(67294);const c=t.createContext({});function r(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:d},s)}}}]);