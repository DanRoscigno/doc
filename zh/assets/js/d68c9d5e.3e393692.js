"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75809],{32307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var s=t(85893),a=t(11151);const l={displayed_sidebar:"Chinese31"},d="USE",c={id:"sql-reference/sql-statements/data-definition/USE",title:"USE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-definition/USE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/USE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/USE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/USE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"TRUNCATE TABLE",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE"},next:{title:"CREATE FUNCTION",permalink:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-definition/create-function"}},i={},r=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use",children:"USE"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u4f1a\u8bdd\u4f7f\u7528\u7684\u6570\u636e\u5e93\u3002\u6307\u5b9a\u6570\u636e\u5e93\u540e\uff0c\u5373\u53ef\u4ee5\u8fdb\u884c\u540e\u7eed\u7684\u5efa\u8868\u6216\u8005\u67e5\u8be2\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE [<catalog_name>.]<db_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"catalog_name"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsxs)(n.td,{children:["Catalog \u540d\u79f0\u3002",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["\u5982\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"default_catalog"})," \u4e0b\u7684\u6570\u636e\u5e93\u3002"]}),(0,s.jsx)("li",{children:"\u5982\u8981\u4f7f\u7528 external catalog \u4e0b\u7684\u6570\u636e\u5e93\uff0c\u5219\u5fc5\u987b\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5177\u4f53\u89c1\u300c\u793a\u4f8b\u4e8c\u300d\u3002"}),(0,s.jsx)("li",{children:"\u5982\u4ece\u4e00\u4e2a catalog \u4e0b\u7684\u6570\u636e\u5e93\u5207\u6362\u5230\u53e6\u4e00\u4e2a catalog \u4e0b\u7684\u6570\u636e\u5e93\uff0c\u5219\u5fc5\u987b\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5177\u4f53\u89c1\u300c\u793a\u4f8b\u4e09\u300d\u3002"})]}),"\u66f4\u591a\u6709\u5173 catalog \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/data_source/catalog/catalog_overview",children:"\u6982\u8ff0"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsx)(n.td,{children:"\u6570\u636e\u5e93\u540d\u79f0\u3002\u8be5\u6570\u636e\u5e93\u5fc5\u987b\u5b58\u5728\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"default_catalog"})," \u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"example_db"})," \u4f5c\u4e3a\u4f1a\u8bdd\u7684\u6570\u636e\u5e93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE default_catalog.example_db;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6216"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE example_db;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"hive_catalog"})," \u4e0b\u7684 ",(0,s.jsx)(n.code,{children:"example_db"})," \u4f5c\u4e3a\u4f1a\u8bdd\u7684\u6570\u636e\u5e93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE hive_catalog.example_db;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u4f1a\u8bdd\u4f7f\u7528\u7684\u6570\u636e\u5e93 ",(0,s.jsx)(n.code,{children:"hive_catalog.example_table1"})," \u5207\u6362\u5230  ",(0,s.jsx)(n.code,{children:"iceberg_catalog.example_table2"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE iceberg_catalog.example_table2;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>l});var s=t(67294);const a=s.createContext({});function l(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||d:l(e),s.createElement(a.Provider,{value:c},n)}}}]);