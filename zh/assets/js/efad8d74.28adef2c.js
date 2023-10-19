"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10186],{38922:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var c=l(85893),n=l(11151);const t={displayed_sidebar:"Chinese"},s="\u6982\u8ff0",o={id:"data_source/catalog/catalog_overview",title:"\u6982\u8ff0",description:"\u672c\u6587\u4ecb\u7ecd\u4ec0\u4e48\u662f Catalog\uff0c \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Catalog \u7ba1\u7406\u548c\u67e5\u8be2\u5185\u5916\u90e8\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/data_source/catalog/catalog_overview.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/catalog_overview",permalink:"/zh/docs/2.5/data_source/catalog/catalog_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/data_source/catalog/catalog_overview.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"(To be deprecated) \u5916\u90e8\u8868",permalink:"/zh/docs/2.5/data_source/External_table"},next:{title:"Default catalog",permalink:"/zh/docs/2.5/data_source/catalog/default_catalog"}},d={},i=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"Catalog",id:"catalog",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2},{value:"\u67e5\u8be2\u5185\u90e8\u6570\u636e",id:"\u67e5\u8be2\u5185\u90e8\u6570\u636e",level:3},{value:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",level:3},{value:"\u8de8 catalog \u67e5\u8be2\u6570\u636e",id:"\u8de8-catalog-\u67e5\u8be2\u6570\u636e",level:3}];function r(e){const a=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",a:"a",h3:"h3",code:"code",pre:"pre"},(0,n.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.h1,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,c.jsx)(a.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4ec0\u4e48\u662f Catalog\uff0c \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Catalog \u7ba1\u7406\u548c\u67e5\u8be2\u5185\u5916\u90e8\u6570\u636e\u3002"}),"\n",(0,c.jsx)(a.p,{children:"StarRocks \u81ea 2.3 \u7248\u672c\u8d77\u652f\u6301 Catalog\uff08\u6570\u636e\u76ee\u5f55\uff09\u529f\u80fd\uff0c\u5b9e\u73b0\u5728\u4e00\u5957\u7cfb\u7edf\u5185\u540c\u65f6\u7ef4\u62a4\u5185\u3001\u5916\u90e8\u6570\u636e\uff0c\u65b9\u4fbf\u60a8\u8f7b\u677e\u8bbf\u95ee\u5e76\u67e5\u8be2\u5b58\u50a8\u5728\u5404\u7c7b\u5916\u90e8\u6e90\u7684\u6570\u636e\u3002"}),"\n",(0,c.jsx)(a.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.strong,{children:"\u5185\u90e8\u6570\u636e"}),"\uff1a\u6307\u4fdd\u5b58\u5728 StarRocks \u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.strong,{children:"\u5916\u90e8\u6570\u636e"}),"\uff1a\u6307\u4fdd\u5b58\u5728\u5916\u90e8\u6570\u636e\u6e90\uff08\u5982 Apache Hive\u2122\u3001Apache Iceberg\u3001Apache Hudi\u3001Delta Lake\uff09\u4e2d\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,c.jsx)(a.h2,{id:"catalog",children:"Catalog"}),"\n",(0,c.jsx)(a.p,{children:"\u5f53\u524d StarRocks \u63d0\u4f9b\u4e24\u79cd\u7c7b\u578b Catalog\uff1ainternal catalog \u548c external catalog\u3002"}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.img,{alt:"figure1",src:l(10653).Z+"",width:"682",height:"516"})}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.strong,{children:"Internal catalog"}),": \u5185\u90e8\u6570\u636e\u76ee\u5f55\uff0c\u7528\u4e8e\u7ba1\u7406 StarRocks \u6240\u6709\u5185\u90e8\u6570\u636e\u3002\u4f8b\u5982\uff0c\u6267\u884c CREATE DATABASE \u548c CREATE TABLE \u8bed\u53e5\u521b\u5efa\u7684\u6570\u636e\u5e93\u548c\u6570\u636e\u8868\u90fd\u7531 internal catalog \u7ba1\u7406\u3002 \u6bcf\u4e2a StarRocks \u96c6\u7fa4\u90fd\u6709\u4e14\u53ea\u6709\u4e00\u4e2a internal catalog \u540d\u4e3a ",(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/default_catalog",children:"default catalog"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.strong,{children:"External catalog"}),": \u5916\u90e8\u6570\u636e\u76ee\u5f55\uff0c\u7528\u4e8e\u8fde\u63a5\u5916\u90e8 metastore\u3002\u5728 StarRocks \u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 external catalog \u76f4\u63a5\u67e5\u8be2\u5916\u90e8\u6570\u636e\uff0c\u65e0\u9700\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u6216\u8fc1\u79fb\u3002\u5f53\u524d\u652f\u6301\u521b\u5efa\u4ee5\u4e0b\u7c7b\u578b\u7684 external catalog\uff1a"]}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/hive_catalog",children:"Hive catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Hive \u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Iceberg \u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Hudi \u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Delta Lake \u6570\u636e\u3002"]}),"\n"]}),"\n",(0,c.jsx)(a.p,{children:"\u4f7f\u7528 external catalog \u67e5\u8be2\u6570\u636e\u65f6\uff0cStarRocks \u4f1a\u7528\u5230\u5916\u90e8\u6570\u636e\u6e90\u7684\u4e24\u4e2a\u7ec4\u4ef6\uff1a"}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.strong,{children:"\u5143\u6570\u636e\u670d\u52a1"}),"\uff1a\u7528\u4e8e\u5c06\u5143\u6570\u636e\u66b4\u9732\u51fa\u6765\u4f9b StarRocks \u7684 FE \u8fdb\u884c\u67e5\u8be2\u89c4\u5212\u3002"]}),"\n",(0,c.jsxs)(a.li,{children:[(0,c.jsx)(a.strong,{children:"\u5b58\u50a8\u7cfb\u7edf"}),"\uff1a\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u3002\u6570\u636e\u6587\u4ef6\u4ee5\u4e0d\u540c\u7684\u683c\u5f0f\u5b58\u50a8\u5728\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u6216\u5bf9\u8c61\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u5f53 FE \u5c06\u751f\u6210\u7684\u67e5\u8be2\u8ba1\u5212\u5206\u53d1\u7ed9\u5404\u4e2a BE \u540e\uff0c\u5404\u4e2a BE \u4f1a\u5e76\u884c\u626b\u63cf Hive \u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u76ee\u6807\u6570\u636e\uff0c\u5e76\u6267\u884c\u8ba1\u7b97\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(a.h2,{id:"\u67e5\u8be2\u6570\u636e",children:"\u67e5\u8be2\u6570\u636e"}),"\n",(0,c.jsx)(a.h3,{id:"\u67e5\u8be2\u5185\u90e8\u6570\u636e",children:"\u67e5\u8be2\u5185\u90e8\u6570\u636e"}),"\n",(0,c.jsxs)(a.p,{children:["\u5982\u8981\u67e5\u8be2\u5b58\u50a8\u5728 StarRocks \u4e2d\u7684\u6570\u636e\uff0c\u8bf7\u53c2\u89c1 ",(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/default_catalog",children:"Default catalog"}),"\u3002"]}),"\n",(0,c.jsx)(a.h3,{id:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",children:"\u67e5\u8be2\u5916\u90e8\u6570\u636e"}),"\n",(0,c.jsxs)(a.p,{children:["\u5982\u8981\u67e5\u8be2\u5b58\u50a8\u5728\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\uff0c\u8bf7\u53c2\u89c1",(0,c.jsx)(a.a,{href:"/zh/docs/2.5/data_source/catalog/query_external_data",children:"\u67e5\u8be2\u5916\u90e8\u6570\u636e"}),"\u3002"]}),"\n",(0,c.jsx)(a.h3,{id:"\u8de8-catalog-\u67e5\u8be2\u6570\u636e",children:"\u8de8 catalog \u67e5\u8be2\u6570\u636e"}),"\n",(0,c.jsxs)(a.p,{children:["\u5982\u60f3\u5728\u4e00\u4e2a catalog \u4e2d\u67e5\u8be2\u5176\u4ed6 catalog \u4e2d\u6570\u636e\uff0c\u53ef\u901a\u8fc7 ",(0,c.jsx)(a.code,{children:"catalog_name.db_name"})," \u6216 ",(0,c.jsx)(a.code,{children:"catalog_name.db_name.table_name"})," \u7684\u683c\u5f0f\u6765\u5f15\u7528\u76ee\u6807\u6570\u636e\u3002\u4e3e\u4f8b\uff1a"]}),"\n",(0,c.jsxs)(a.ul,{children:["\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:["\u5728 ",(0,c.jsx)(a.code,{children:"default_catalog.olap_db"})," \u4e0b\u67e5\u8be2 ",(0,c.jsx)(a.code,{children:"hive_catalog"})," \u4e2d\u7684 ",(0,c.jsx)(a.code,{children:"hive_table"}),"\u3002"]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_catalog.hive_db.hive_table;\n"})}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:["\u5728 ",(0,c.jsx)(a.code,{children:"hive_catalog.hive_db"})," \u4e0b\u67e5\u8be2 ",(0,c.jsx)(a.code,{children:"default_catalog"})," \u4e2d\u7684 ",(0,c.jsx)(a.code,{children:"olap_table"}),"\u3002"]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM default_catalog.olap_db.olap_table;\n"})}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:["\u5728 ",(0,c.jsx)(a.code,{children:"hive_catalog.hive_db"})," \u4e2d\uff0c\u5bf9 ",(0,c.jsx)(a.code,{children:"hive_table"})," \u548c ",(0,c.jsx)(a.code,{children:"default_catalog"})," \u4e2d\u7684 ",(0,c.jsx)(a.code,{children:"olap_table"})," \u8fdb\u884c\u8054\u90a6\u67e5\u8be2\u3002"]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n"})}),"\n"]}),"\n",(0,c.jsxs)(a.li,{children:["\n",(0,c.jsxs)(a.p,{children:["\u5728\u5176\u4ed6\u76ee\u5f55\u4e0b\uff0c\u5bf9 ",(0,c.jsx)(a.code,{children:"hive_catalog"})," \u4e2d\u7684 ",(0,c.jsx)(a.code,{children:"hive_table"})," \u548c ",(0,c.jsx)(a.code,{children:"default_catalog"})," \u4e2d\u7684 ",(0,c.jsx)(a.code,{children:"olap_table"})," \u8fdb\u884c\u8054\u90a6\u67e5\u8be2\u3002"]}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-SQL",children:"SELECT * FROM hive_catalog.hive_db.hive_table h JOIN default_catalog.olap_db.olap_table o WHERE h.id = o.id;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,c.jsx)(a,Object.assign({},e,{children:(0,c.jsx)(r,e)})):r(e)}},10653:(e,a,l)=>{l.d(a,{Z:()=>c});const c=l.p+"assets/images/3.12-1-270ed6cf4b040c60c29fc2351566b4f7.png"},11151:(e,a,l)=>{l.d(a,{Zo:()=>o,ah:()=>t});var c=l(67294);const n=c.createContext({});function t(e){const a=c.useContext(n);return c.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function o({components:e,children:a,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||s:t(e),c.createElement(n.Provider,{value:o},a)}}}]);