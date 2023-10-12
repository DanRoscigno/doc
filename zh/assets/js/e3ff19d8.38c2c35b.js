"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45546],{31091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>r});var s=t(85893),a=t(11151);const l={displayed_sidebar:"Chinese31"},c="catalog",i={id:"sql-reference/sql-functions/utility-functions/catalog",title:"catalog",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/utility-functions/catalog.md",sourceDirName:"sql-reference/sql-functions/utility-functions",slug:"/sql-reference/sql-functions/utility-functions/catalog",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/utility-functions/catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/utility-functions/catalog.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Utility Functions",permalink:"/doc/zh/docs/2.5/category/utility-functions-1"},next:{title:"current_version",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/utility-functions/current_version"}},o={},r=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"catalog",children:"catalog"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684 Catalog\u3002\u53ef\u4ee5\u662f Internal Catalog \u6216 External Catalog\u3002\u6709\u5173 Catalog \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/data_source/catalog/catalog_overview"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u672a\u9009\u5b9a Catalog\uff0c\u9ed8\u8ba4\u663e\u793a StarRocks \u7cfb\u7edf\u5185 Internal Catalog ",(0,s.jsx)(n.code,{children:"default_catalog"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"catalog()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4e0d\u9700\u8981\u4f20\u5165\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u7684 Catalog \u540d\u79f0\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5f53\u524d Catalog \u4e3a StarRocks \u7cfb\u7edf\u5185 Internal Catalog\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select catalog();\n+-----------------+\n| CATALOG()       |\n+-----------------+\n| default_catalog |\n+-----------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5f53\u524d Catalog \u4e3a External Catalog ",(0,s.jsx)(n.code,{children:"hudi_catalog"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- \u5207\u6362\u5230\u76ee\u6807 External Catalog\u3002\nset catalog hudi_catalog;\n\n-- \u8fd4\u56de\u5f53\u524d Catalog \u540d\u79f0\u3002\nselect catalog();\n+--------------+\n| CATALOG()    |\n+--------------+\n| hudi_catalog |\n+--------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../../sql-statements/data-definition/SET_CATALOG.md",children:"SET CATALOG"}),"\uff1a\u5207\u6362\u5230\u6307\u5b9a Catalog\u3002"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>l});var s=t(67294);const a=s.createContext({});function l(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:l(e),s.createElement(a.Provider,{value:i},n)}}}]);