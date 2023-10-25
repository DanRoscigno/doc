"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74267],{61007:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},i="SQUARE",l={id:"sql-reference/sql-functions/math-functions/square",title:"SQUARE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-functions/math-functions/square.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/square",permalink:"/zh/docs/2.2/sql-reference/sql-functions/math-functions/square",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/math-functions/square.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"RAND, RANDOM",permalink:"/zh/docs/2.2/sql-reference/sql-functions/math-functions/rand"},next:{title:"ST_AsText, ST_AsWKT",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_astext"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"square",children:"SQUARE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba1\u7b97\u53c2\u6570\u7684\u5e73\u65b9\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SQUARE(arg)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"arg"}),"\uff1a\u9700\u8981\u8ba1\u7b97\u5e73\u65b9\u7684\u53c2\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b\uff0c\u5b9e\u73b0\u65f6\u4f1a\u5c06\u8be5\u53c2\u6570\u8f6c\u6362\u4e3a DOUBLE \u7c7b\u578b\u8ba1\u7b97\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u6570\u4e3a\u975e\u6570\u503c\u7c7b\u578b\u65f6\u8fd4\u56de\u503c\u4e3aNULL\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8ba1\u7b97\u6570\u503c\u7c7b\u578b\u7684\u5e73\u65b9\u6570\u503c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql>  select square(11);\n+------------+\n| square(11) |\n+------------+\n|        121 |\n+------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u53c2\u6570\u7c7b\u578b\u4e3a\u975e\u6570\u503c\u7c7b\u578b\u65f6\u8fd4\u56deNULL\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql>  select square('2021-01-01');\n+----------------------+\n| square('2021-01-01') |\n+----------------------+\n|                 NULL |\n+----------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:l},n)}}}]);