"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87750],{65765:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=t(85893),n=t(11151);const l={displayed_sidebar:"Chinese31"},c="CREATE EXTERNAL CATALOG",r={id:"sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",title:"CREATE EXTERNAL CATALOG",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"CREATE DATABASE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_DATABASE"},next:{title:"CREATE INDEX",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_INDEX"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u64cd\u4f5c",id:"\u76f8\u5173\u64cd\u4f5c",level:2}];function o(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"create-external-catalog",children:"CREATE EXTERNAL CATALOG"}),"\n",(0,s.jsx)(a.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(a.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa External Catalog\u3002\u521b\u5efa\u540e\uff0c\u65e0\u9700\u6570\u636e\u5bfc\u5165\u6216\u521b\u5efa\u5916\u90e8\u8868\u5373\u53ef\u67e5\u8be2\u5916\u90e8\u6570\u636e\u3002\u5f53\u524d\u652f\u6301\u521b\u5efa\u5982\u4e0b External Catalog\uff1a"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Apache Hive\u2122 \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Apache Iceberg \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Apache Hudi \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 Delta Lake \u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/jdbc_catalog",children:"JDBC catalog"}),"\uff1a\u7528\u4e8e\u67e5\u8be2 JDBC \u6570\u636e\u6e90\u7684\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"\u5728 3.0 \u53ca\u4ee5\u540e\u7248\u672c\uff0c\u4f7f\u7528\u8be5\u8bed\u53e5\u9700\u8981\u6709 System \u7ea7 CREATE EXTERNAL CATALOG \u6743\u9650\u3002"}),"\n",(0,s.jsx)(a.li,{children:"\u5728\u521b\u5efa External Catalog \u524d\uff0c\u9700\u8981\u6839\u636e\u6570\u636e\u6e90\u7684\u5b58\u50a8\u7cfb\u7edf\uff08\u5982 AWS S3\uff09\u3001\u5143\u6570\u636e\u670d\u52a1\uff08\u5982 Hive metastore\uff09\u548c\u8ba4\u8bc1\u65b9\u5f0f\uff08\u5982 Kerberos\uff09\u5728 StarRocks \u4e2d\u505a\u76f8\u5e94\u7684\u914d\u7f6e\u3002\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u4ee5\u4e0a\u5404\u4e2a External Catalog \u6587\u6863\u4e2d\u7684\u300c\u524d\u63d0\u6761\u4ef6\u300d\u5c0f\u8282\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,s.jsx)(a.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"\u53c2\u6570"}),(0,s.jsx)(a.th,{children:"\u5fc5\u9009"}),(0,s.jsx)(a.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"catalog_name"}),(0,s.jsx)(a.td,{children:"\u662f"}),(0,s.jsxs)(a.td,{children:["External catalog \u7684\u540d\u79f0\uff0c\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),(0,s.jsx)("li",{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 1023 \u4e2a\u5b57\u7b26\u3002"}),(0,s.jsx)("li",{children:"Catalog \u540d\u79f0\u5927\u5c0f\u5199\u654f\u611f\u3002"})]})]})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"comment"}),(0,s.jsx)(a.td,{children:"\u5426"}),(0,s.jsx)(a.td,{children:"External catalog \u7684\u63cf\u8ff0\u3002"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"PROPERTIES"}),(0,s.jsx)(a.td,{children:"\u662f"}),(0,s.jsxs)(a.td,{children:["External catalog \u7684\u5c5e\u6027\uff0c\u4e0d\u540c\u7684 external catalog \u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u5c5e\u6027\u3002\u8be6\u7ec6\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),"\u3001",(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"}),"\u3001",(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hudi_catalog",children:"Hudi catalog"}),"\u3001",(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"})," \u548c ",(0,s.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/jdbc_catalog",children:"JDBC Catalog"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(a.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u4e00\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"hive_metastore_catalog"})," \u7684 Hive catalog\u3002\u5176\u5bf9\u5e94\u7684 Hive \u96c6\u7fa4\u4f7f\u7528 Hive metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_metastore_catalog\nPROPERTIES(\n   "type"="hive", \n   "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"hive_glue_catalog"})," \u7684 Hive catalog\u3002\u5176\u5bf9\u5e94\u7684 Hive \u96c6\u7fa4\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_glue_catalog\nPROPERTIES(\n    "type"="hive", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u4e09\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"iceberg_metastore_catalog"})," \u7684 Iceberg catalog\u3002\u5176\u5bf9\u5e94\u7684 Iceberg \u96c6\u7fa4\u4f7f\u7528 Hive metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_metastore_catalog\nPROPERTIES(\n    "type"="iceberg",\n    "iceberg.catalog.type"="hive",\n    "iceberg.catalog.hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u56db\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"iceberg_glue_catalog"})," \u7684 Iceberg catalog\u3002\u5176\u5bf9\u5e94\u7684 Iceberg \u96c6\u7fa4\u4f7f\u7528  AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG iceberg_glue_catalog\nPROPERTIES(\n    "type"="iceberg", \n    "iceberg.catalog.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u4e94\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"hudi_metastore_catalog"})," \u7684 Hudi catalog\u3002\u5176\u5bf9\u5e94\u7684 Hudi \u96c6\u7fa4\u4f7f\u7528 Hive metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hudi_metastore_catalog\nPROPERTIES(\n    "type"="hudi",\n    "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u516d\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"hudi_glue_catalog"})," \u7684 Hudi catalog\u3002\u5176\u5bf9\u5e94\u7684 Hudi \u96c6\u7fa4\u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hudi_glue_catalog\nPROPERTIES(\n    "type"="hudi", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u4e03\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"delta_metastore_catalog"})," \u7684 Delta Lake catalog\u3002\u5176\u5bf9\u5e94\u7684 Delta Lake \u4f7f\u7528 Hive metastore \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG delta_metastore_catalog\nPROPERTIES(\n    "type"="deltalake",\n    "hive.metastore.uris"="thrift://x.x.x.x:9083"\n);\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u793a\u4f8b\u516b\uff1a\u521b\u5efa\u540d\u4e3a ",(0,s.jsx)(a.code,{children:"delta_glue_catalog"})," \u7684 Delta Lake catalog\u3002\u5176\u5bf9\u5e94\u7684 Delta Lake \u4f7f\u7528 AWS Glue \u4f5c\u4e3a\u5143\u6570\u636e\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG delta_glue_catalog\nPROPERTIES(\n    "type"="deltalake", \n    "hive.metastore.type"="glue",\n    "aws.hive.metastore.glue.aws-access-key"="xxxxxx",\n    "aws.hive.metastore.glue.aws-secret-key"="xxxxxxxxxxxx",\n    "aws.hive.metastore.glue.endpoint"="https://glue.x-x-x.amazonaws.com"\n);\n'})}),"\n",(0,s.jsx)(a.h2,{id:"\u76f8\u5173\u64cd\u4f5c",children:"\u76f8\u5173\u64cd\u4f5c"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\u5982\u8981\u67e5\u770b\u6240\u6709 Catalog\uff0c\u53c2\u89c1 ",(0,s.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"}),"\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:["\u5982\u8981\u67e5\u770b\u67d0\u4e2a External Catalog \u7684\u521b\u5efa\u8bed\u53e5\uff0c\u53c2\u89c1 ",(0,s.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"}),"\u3002"]}),"\n",(0,s.jsxs)(a.li,{children:["\u5982\u8981\u5220\u9664 External Catalog\uff0c\u53c2\u89c1 ",(0,s.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"}),"\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>r,ah:()=>l});var s=t(67294);const n=s.createContext({});function l(e){const a=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function r({components:e,children:a,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:l(e),s.createElement(n.Provider,{value:r},a)}}}]);