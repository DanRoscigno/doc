"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17098],{8674:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=s(85893),a=s(11151);const c={displayed_sidebar:"Chinese"},l="map_from_arrays",i={id:"sql-reference/sql-functions/map-functions/map_from_arrays",title:"map_from_arrays",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/map_from_arrays.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_from_arrays",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_from_arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/map_from_arrays.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"map_filter",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_filter"},next:{title:"map_keys",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_keys"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"map_from_arrays",children:"map_from_arrays"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e24\u4e2a ARRAY \u6570\u7ec4\u4f5c\u4e3a Key \u548c Value \u7ec4\u5408\u6210\u4e00\u4e2a MAP \u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"MAP map_from_arrays(ARRAY keys, ARRAY values)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keys"}),": \u7528\u4e8e\u751f\u6210 MAP \u4e2d\u7684 Key \u503c\u3002",(0,r.jsx)(n.code,{children:"keys"})," \u4e2d\u7684\u5143\u7d20\u5fc5\u987b\u552f\u4e00\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"values"}),": \u7528\u4e8e\u751f\u6210 MAP \u4e2d\u7684 Value \u503c."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a MAP \u503c\uff0cMap \u4e2d\u7684 Key \u4e3a ",(0,r.jsx)(n.code,{children:"keys"})," \u4e2d\u7684\u5143\u7d20\uff0cMap \u4e2d\u7684 Value \u4e3a ",(0,r.jsx)(n.code,{children:"values"})," \u4e2d\u7684\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u89c4\u5219\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"keys"})," \u548c ",(0,r.jsx)(n.code,{children:"values"})," \u957f\u5ea6\uff08\u5143\u7d20\u4e2a\u6570\uff09\u5fc5\u987b\u76f8\u540c\uff0c\u5426\u5219\u8fd4\u56de\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c ",(0,r.jsx)(n.code,{children:"keys"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"values"})," \u4e3a NULL, \u5219\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], ['Star', 'Rocks']);\n+--------------------------------------------+\n| map_from_arrays([1, 2], ['Star', 'Rocks']) |\n+--------------------------------------------+\n| {1:\"Star\",2:\"Rocks\"}                       |\n+--------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"select map_from_arrays([1, 2], NULL);\n+-------------------------------+\n| map_from_arrays([1, 2], NULL) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(67294);const a=r.createContext({});function c(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:c(e),r.createElement(a.Provider,{value:i},n)}}}]);