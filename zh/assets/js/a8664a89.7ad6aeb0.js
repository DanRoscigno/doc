"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58763],{16341:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var t=n(85893),i=n(11151);const c={displayed_sidebar:"Chinese"},l="ST_AsText, ST_AsWKT",r={id:"sql-reference/sql-functions/spatial-functions/st_astext",title:"ST_AsText, ST_AsWKT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-functions/spatial-functions/st_astext.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_astext",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_astext",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/spatial-functions/st_astext.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SQUARE",permalink:"/zh/docs/2.2/sql-reference/sql-functions/math-functions/square"},next:{title:"ST_Circle",permalink:"/zh/docs/2.2/sql-reference/sql-functions/spatial-functions/st_circle"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"st_astext-st_aswkt",children:"ST_AsText, ST_AsWKT"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u5c06\u4e00\u4e2a\u51e0\u4f55\u56fe\u5f62\u8f6c\u5316\u4e3a WKT\uff08Well Known Text\uff09\u7684\u8868\u793a\u5f62\u5f0f"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"ST_AsText(geo)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"geo"}),": \u5f85\u8f6c\u5316\u7684\u53c2\u6570, \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a GEOMETRY"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR"}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u5173\u952e\u8bcd",children:"\u5173\u952e\u8bcd"}),"\n",(0,t.jsx)(s.p,{children:"ST_ASTEXT, ST_ASWKT, ST, ASTEXT, ASWKT"})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>r,ah:()=>c});var t=n(67294);const i=t.createContext({});function c(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function r({components:e,children:s,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:c(e),t.createElement(i.Provider,{value:r},s)}}}]);