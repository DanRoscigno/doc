"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37144],{81194:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>i});var l=n(85893),s=n(11151);const t={displayed_sidebar:"Chinese31"},c="\u67e5\u8be2\u5916\u90e8\u6570\u636e",r={id:"data_source/catalog/query_external_data",title:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 External Catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u3002External Catalog \u65b9\u4fbf\u60a8\u8f7b\u677e\u8bbf\u95ee\u5e76\u67e5\u8be2\u5b58\u50a8\u5728\u5404\u7c7b\u5916\u90e8\u6e90\u7684\u6570\u636e\uff0c\u65e0\u9700\u521b\u5efa\u5916\u90e8\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/data_source/catalog/query_external_data.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/query_external_data",permalink:"/doc/zh/docs/3.0/data_source/catalog/query_external_data",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/data_source/catalog/query_external_data.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"JDBC catalog",permalink:"/doc/zh/docs/3.0/data_source/catalog/jdbc_catalog"},next:{title:"(To be deprecated) \u5916\u90e8\u8868",permalink:"/doc/zh/docs/3.0/data_source/External_table"}},d={},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u64cd\u4f5c",id:"\u66f4\u591a\u64cd\u4f5c",level:2}];function o(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",ul:"ul",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",children:"\u67e5\u8be2\u5916\u90e8\u6570\u636e"}),"\n",(0,l.jsx)(a.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 External Catalog \u67e5\u8be2\u5916\u90e8\u6570\u636e\u3002External Catalog \u65b9\u4fbf\u60a8\u8f7b\u677e\u8bbf\u95ee\u5e76\u67e5\u8be2\u5b58\u50a8\u5728\u5404\u7c7b\u5916\u90e8\u6e90\u7684\u6570\u636e\uff0c\u65e0\u9700\u521b\u5efa\u5916\u90e8\u8868\u3002"}),"\n",(0,l.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,l.jsxs)(a.p,{children:["\u6839\u636e\u6570\u636e\u6e90\u5df2\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 External Catalog\u3002\u5173\u4e8e\u5f53\u524d\u652f\u6301\u7684 External Catalog \u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/data_source/catalog/catalog_overview#catalog",children:"Catalog"}),"\u3002"]}),"\n",(0,l.jsx)(a.h2,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:"\u64cd\u4f5c\u6b65\u9aa4"}),"\n",(0,l.jsxs)(a.ol,{children:["\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsx)(a.p,{children:"\u8fde\u63a5 StarRocks\u3002"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["\u5982\u4ece MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 StarRocks\u3002\u8fde\u63a5\u540e\uff0c\u9ed8\u8ba4\u8fdb\u5165\u5230 ",(0,l.jsx)(a.code,{children:"default_catalog"}),"\u3002"]}),"\n",(0,l.jsxs)(a.li,{children:["\u5982\u4f7f\u7528 JDBC \u8fde\u63a5\u5230 StarRocks\uff0c\u8fde\u63a5\u65f6\u5373\u53ef\u901a\u8fc7 ",(0,l.jsx)(a.code,{children:"default_catalog.db_name"})," \u7684\u65b9\u5f0f\u6307\u5b9a\u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\uff08\u53ef\u9009\uff09\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u67e5\u770b\u5f53\u524d StarRocks \u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Catalog \u5e76\u627e\u5230\u6307\u5b9a\u7684 External Catalog\u3002\u6709\u5173\u8fd4\u56de\u503c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"}),"\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"SHOW CATALOGS;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\uff08\u53ef\u9009\uff09\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u67e5\u770b\u6307\u5b9a external catalog \u4e2d\u7684\u6570\u636e\u5e93\u3002\u6709\u5173\u53c2\u6570\u548c\u8fd4\u56de\u503c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"}),"\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"SHOW DATABASES FROM catalog_name;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\uff08\u53ef\u9009\uff09\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u5c06\u5f53\u524d\u4f1a\u8bdd\u5207\u6362\u5230\u6307\u5b9a external catalog \u7684\u6307\u5b9a\u6570\u636e\u5e93\u3002\u6709\u5173\u53c2\u6570\u8bf4\u660e\u548c\u793a\u4f8b\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"}),"\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"USE catalog_name.db_name;\n"})}),"\n"]}),"\n",(0,l.jsxs)(a.li,{children:["\n",(0,l.jsxs)(a.p,{children:["\u67e5\u8be2\u5916\u90e8\u6570\u636e\u3002\u66f4\u591a SELECT \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u8bf7\u53c2\u89c1 ",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"}),"\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM table_name;\n"})}),"\n",(0,l.jsx)(a.p,{children:"\u5982\u5728\u4ee5\u4e0a\u6b65\u9aa4\u4e2d\u672a\u6307\u5b9a external catalog \u548c\u6570\u636e\u5e93\uff0c\u5219\u53ef\u4ee5\u5728\u67e5\u8be2\u8bed\u53e5\u4e2d\u76f4\u63a5\u6307\u5b9a\u3002\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM catalog_name.db_name.table_name;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(a.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.jsx)(a.code,{children:"hive1"})," \u7684 Hive catalog\u3002\u5982\u9700\u901a\u8fc7 ",(0,l.jsx)(a.code,{children:"hive1"})," \u67e5\u8be2 Apache Hive\u2122 \u96c6\u7fa4\u4e2d ",(0,l.jsx)(a.code,{children:"hive_db.hive_table"})," \u7684\u6570\u636e\uff0c\u64cd\u4f5c\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"USE hive1.hive_db;\nSELECT * FROM hive_table limit 1;\n"})}),"\n",(0,l.jsx)(a.p,{children:"\u6216"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive1.hive_db.hive_table limit 1;  \n"})}),"\n",(0,l.jsx)(a.h2,{id:"\u66f4\u591a\u64cd\u4f5c",children:"\u66f4\u591a\u64cd\u4f5c"}),"\n",(0,l.jsxs)(a.p,{children:["\u5982\u8981\u67e5\u8be2 StarRocks \u7684\u5185\u90e8\u6570\u636e\uff0c\u8bf7\u53c2\u89c1",(0,l.jsx)(a.a,{href:"/doc/zh/docs/3.0/data_source/catalog/default_catalog#%E6%9F%A5%E8%AF%A2%E5%86%85%E9%83%A8%E6%95%B0%E6%8D%AE",children:"\u67e5\u8be2\u5185\u90e8\u6570\u636e"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>r,ah:()=>t});var l=n(67294);const s=l.createContext({});function t(e){const a=l.useContext(s);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function r({components:e,children:a,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||c:t(e),l.createElement(s.Provider,{value:r},a)}}}]);