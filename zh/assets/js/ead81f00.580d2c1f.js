"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58604],{35090:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var c=s(85893),l=s(11151);const a={displayed_sidebar:"Chinese31"},r="JDBC catalog",d={id:"data_source/catalog/jdbc_catalog",title:"JDBC catalog",description:"StarRocks \u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301 JDBC Catalog\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/data_source/catalog/jdbc_catalog.md",sourceDirName:"data_source/catalog",slug:"/data_source/catalog/jdbc_catalog",permalink:"/doc/zh/docs/3.0/data_source/catalog/jdbc_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/data_source/catalog/jdbc_catalog.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Delta Lake catalog",permalink:"/doc/zh/docs/3.0/data_source/catalog/deltalake_catalog"},next:{title:"\u67e5\u8be2\u5916\u90e8\u6570\u636e",permalink:"/doc/zh/docs/3.0/data_source/catalog/query_external_data"}},t={},o=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u521b\u5efa JDBC Catalog",id:"\u521b\u5efa-jdbc-catalog",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"<code>catalog_name</code>",id:"catalog_name",level:4},{value:"<code>comment</code>",id:"comment",level:4},{value:"PROPERTIES",id:"properties",level:4},{value:"\u521b\u5efa\u793a\u4f8b",id:"\u521b\u5efa\u793a\u4f8b",level:3},{value:"\u67e5\u770b JDBC Catalog",id:"\u67e5\u770b-jdbc-catalog",level:2},{value:"\u5220\u9664 JDBC Catalog",id:"\u5220\u9664-jdbc-catalog",level:2},{value:"\u67e5\u8be2 JDBC Catalog \u4e2d\u7684\u8868\u6570\u636e",id:"\u67e5\u8be2-jdbc-catalog-\u4e2d\u7684\u8868\u6570\u636e",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function i(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",h3:"h3",pre:"pre",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ol:"ol"},(0,l.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"jdbc-catalog",children:"JDBC catalog"}),"\n",(0,c.jsx)(n.p,{children:"StarRocks \u4ece 3.0 \u7248\u672c\u5f00\u59cb\u652f\u6301 JDBC Catalog\u3002"}),"\n",(0,c.jsx)(n.p,{children:"JDBC Catalog \u662f\u4e00\u79cd External Catalog\u3002\u901a\u8fc7 JDBC Catalog\uff0c\u60a8\u4e0d\u9700\u8981\u6267\u884c\u6570\u636e\u5bfc\u5165\u5c31\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2 JDBC \u6570\u636e\u6e90\u91cc\u7684\u6570\u636e\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u57fa\u4e8e JDBC Catalog \uff0c\u7ed3\u5408 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT INTO"})," \u80fd\u529b\u5bf9 JDBC \u6570\u636e\u6e90\u7684\u6570\u636e\u5b9e\u73b0\u8f6c\u6362\u548c\u5bfc\u5165\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u76ee\u524d JDBC Catalog \u652f\u6301 MySQL \u548c PostgreSQL\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u786e\u4fdd FE \u548c BE \u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"driver_url"})," \u6307\u5b9a\u7684\u4e0b\u8f7d\u8def\u5f84\uff0c\u4e0b\u8f7d\u6240\u9700\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["BE \u6240\u5728\u673a\u5668\u7684\u542f\u52a8\u811a\u672c ",(0,c.jsx)(n.strong,{children:"$BE_HOME/bin/start_be.sh"})," \u4e2d\u9700\u8981\u914d\u7f6e ",(0,c.jsx)(n.code,{children:"JAVA_HOME"}),"\uff0c\u8981\u914d\u7f6e\u6210 JDK \u73af\u5883\uff0c\u4e0d\u80fd\u914d\u7f6e\u6210 JRE \u73af\u5883\uff0c\u6bd4\u5982 ",(0,c.jsx)(n.code,{children:"export JAVA_HOME = <JDK \u7684\u7edd\u5bf9\u8def\u5f84>"}),"\u3002\u6ce8\u610f\u9700\u8981\u5c06\u8be5\u914d\u7f6e\u6dfb\u52a0\u5728 BE \u542f\u52a8\u811a\u672c\u6700\u5f00\u5934\uff0c\u6dfb\u52a0\u5b8c\u6210\u540e\u9700\u91cd\u542f BE\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u521b\u5efa-jdbc-catalog",children:"\u521b\u5efa JDBC Catalog"}),"\n",(0,c.jsx)(n.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG <catalog_name>\n[COMMENT <comment>]\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsx)(n.h4,{id:"catalog_name",children:(0,c.jsx)(n.code,{children:"catalog_name"})}),"\n",(0,c.jsx)(n.p,{children:"JDBC Catalog \u7684\u540d\u79f0\u3002\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5fc5\u987b\u7531\u5b57\u6bcd (a-z \u6216 A-Z)\u3001\u6570\u5b57 (0-9) \u6216\u4e0b\u5212\u7ebf (_) \u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 1023 \u4e2a\u5b57\u7b26\u3002"}),"\n",(0,c.jsx)(n.li,{children:"Catalog \u540d\u79f0\u5927\u5c0f\u5199\u654f\u611f\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"comment",children:(0,c.jsx)(n.code,{children:"comment"})}),"\n",(0,c.jsx)(n.p,{children:"JDBC Catalog \u7684\u63cf\u8ff0\u3002\u6b64\u53c2\u6570\u4e3a\u53ef\u9009\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"properties",children:"PROPERTIES"}),"\n",(0,c.jsx)(n.p,{children:"JDBC Catalog \u7684\u5c5e\u6027\uff0c\u5305\u542b\u5982\u4e0b\u5fc5\u586b\u914d\u7f6e\u9879\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,c.jsx)(n.th,{children:(0,c.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"type"}),(0,c.jsxs)(n.td,{children:["\u8d44\u6e90\u7c7b\u578b\uff0c\u56fa\u5b9a\u53d6\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"jdbc"}),"\u3002"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"user"}),(0,c.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u767b\u5f55\u7528\u6237\u540d\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"password"}),(0,c.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u5e93\u7528\u6237\u767b\u5f55\u5bc6\u7801\u3002"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"jdbc_uri"}),(0,c.jsxs)(n.td,{children:["JDBC \u9a71\u52a8\u7a0b\u5e8f\u8fde\u63a5\u76ee\u6807\u6570\u636e\u5e93\u7684 URI\u3002\u5982\u679c\u4f7f\u7528 MySQL\uff0c\u683c\u5f0f\u4e3a\uff1a",(0,c.jsx)(n.code,{children:'"jdbc:mysql://ip:port"'}),"\u3002\u5982\u679c\u4f7f\u7528 PostgreSQL\uff0c\u683c\u5f0f\u4e3a ",(0,c.jsx)(n.code,{children:'"jdbc:postgresql://ip:port/db_name"'}),"\u3002\u53c2\u89c1 ",(0,c.jsx)(n.a,{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html",children:"MySQL"})," \u548c ",(0,c.jsx)(n.a,{href:"https://jdbc.postgresql.org/documentation/head/connect.html",children:"PostgreSQL"})," \u5b98\u7f51\u6587\u6863\u3002"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"driver_url"}),(0,c.jsxs)(n.td,{children:["\u7528\u4e8e\u4e0b\u8f7d JDBC \u9a71\u52a8\u7a0b\u5e8f JAR \u5305\u7684 URL\u3002\u652f\u6301\u4f7f\u7528 HTTP \u534f\u8bae\u6216\u8005 file \u534f\u8bae\uff0c\u4f8b\u5982",(0,c.jsx)(n.code,{children:"https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar"})," \u548c ",(0,c.jsx)(n.code,{children:"file:///home/disk1/postgresql-42.3.3.jar"}),"\u3002",(0,c.jsx)("br",{}),(0,c.jsx)(n.strong,{children:"\u8bf4\u660e"}),(0,c.jsx)("br",{}),"\u60a8\u4e5f\u53ef\u4ee5\u628a JDBC \u9a71\u52a8\u7a0b\u5e8f\u90e8\u7f72\u5728 FE \u6216 BE \u6240\u5728\u8282\u70b9\u4e0a\u4efb\u610f\u76f8\u540c\u8def\u5f84\u4e0b\uff0c\u7136\u540e\u628a ",(0,c.jsx)(n.code,{children:"driver_url"})," \u8bbe\u7f6e\u4e3a\u8be5\u8def\u5f84\uff0c\u683c\u5f0f\u4e3a ",(0,c.jsx)(n.code,{children:"file:///<path>/to/the/driver"}),"\u3002"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"driver_class"}),(0,c.jsxs)(n.td,{children:["JDBC \u9a71\u52a8\u7a0b\u5e8f\u7684\u7c7b\u540d\u79f0\u3002\u4ee5\u4e0b\u662f\u5e38\u89c1\u6570\u636e\u5e93\u5f15\u64ce\u652f\u6301\u7684 JDBC \u9a71\u52a8\u7a0b\u5e8f\u7c7b\u540d\u79f0\uff1a",(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["MySQL\uff1a",(0,c.jsx)(n.code,{children:"com.mysql.jdbc.Driver"}),"\uff08MySQL 5.x \u53ca\u4e4b\u524d\u7248\u672c\uff09\u3001",(0,c.jsx)(n.code,{children:"com.mysql.cj.jdbc.Driver"}),"\uff08MySQL 6.x \u53ca\u4e4b\u540e\u7248\u672c\uff09"]}),(0,c.jsxs)("li",{children:["PostgreSQL: ",(0,c.jsx)(n.code,{children:"org.postgresql.Driver"})]})]})]})]})]})]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,c.jsx)(n.p,{children:"FE \u4f1a\u5728\u521b\u5efa JDBC Catalog \u65f6\u53bb\u83b7\u53d6 JDBC \u9a71\u52a8\u7a0b\u5e8f\uff0cBE \u4f1a\u5728\u7b2c\u4e00\u6b21\u6267\u884c\u67e5\u8be2\u65f6\u53bb\u83b7\u53d6\u9a71\u52a8\u7a0b\u5e8f\u3002\u83b7\u53d6\u9a71\u52a8\u7a0b\u5e8f\u7684\u8017\u65f6\u8ddf\u7f51\u7edc\u6761\u4ef6\u76f8\u5173\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u521b\u5efa\u793a\u4f8b",children:"\u521b\u5efa\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e24\u4e2a JDBC Catalog\uff1a",(0,c.jsx)(n.code,{children:"jdbc0"})," \u548c ",(0,c.jsx)(n.code,{children:"jdbc1"}),"\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG jdbc0\nPROPERTIES\n(\n    "type"="jdbc",\n    "user"="postgres",\n    "password"="changeme",\n    "jdbc_uri"="jdbc:postgresql://127.0.0.1:5432/jdbc_test",\n    "driver_url"="https://repo1.maven.org/maven2/org/postgresql/postgresql/42.3.3/postgresql-42.3.3.jar",\n    "driver_class"="org.postgresql.Driver"\n);\n\nCREATE EXTERNAL CATALOG jdbc1\nPROPERTIES\n(\n    "type"="jdbc",\n    "user"="root",\n    "password"="changeme",\n    "jdbc_uri"="jdbc:mysql://127.0.0.1:3306",\n    "driver_url"="https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar",\n    "driver_class"="com.mysql.cj.jdbc.Driver"\n);\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u770b-jdbc-catalog",children:"\u67e5\u770b JDBC Catalog"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})," \u67e5\u8be2\u5f53\u524d\u6240\u5728 StarRocks \u96c6\u7fa4\u91cc\u6240\u6709 Catalog\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW CATALOGS;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"})," \u67e5\u8be2\u67d0\u4e2a External Catalog \u7684\u521b\u5efa\u8bed\u53e5\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u8be2 JDBC Catalog ",(0,c.jsx)(n.code,{children:"jdbc0"})," \u7684\u521b\u5efa\u8bed\u53e5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW CREATE CATALOG jdbc0;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u5220\u9664-jdbc-catalog",children:"\u5220\u9664 JDBC Catalog"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"})," \u5220\u9664\u4e00\u4e2a JDBC Catalog\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664 JDBC Catalog ",(0,c.jsx)(n.code,{children:"jdbc0"}),"\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"DROP Catalog jdbc0;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u8be2-jdbc-catalog-\u4e2d\u7684\u8868\u6570\u636e",children:"\u67e5\u8be2 JDBC Catalog \u4e2d\u7684\u8868\u6570\u636e"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})," \u67e5\u770b\u6307\u5b9a Catalog \u6240\u5c5e\u7684\u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u5e93\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SHOW DATABASES from <catalog_name>;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/SET_CATALOG",children:"SET CATALOG"})," \u5207\u6362\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u7684 Catalog\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SET CATALOG <catalog_name>;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u518d\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," \u6307\u5b9a\u5f53\u524d\u4f1a\u8bdd\u751f\u6548\u7684\u6570\u636e\u5e93\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"USE <db_name>;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})," \u76f4\u63a5\u5c06\u4f1a\u8bdd\u5207\u6362\u5230\u76ee\u6807 Catalog \u4e0b\u7684\u6307\u5b9a\u6570\u636e\u5e93\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"USE <catalog_name>.<db_name>;\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,c.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," \u67e5\u8be2\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u7684\u76ee\u6807\u8868\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM <table_name>;\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,c.jsx)(n.p,{children:'\u7cfb\u7edf\u8fd4\u56de "Malformed database URL, failed to parse the main URL sections" \u62a5\u9519\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u62a5\u9519\u901a\u5e38\u662f\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"jdbc_uri"})," \u4e2d\u4f20\u5165\u7684 URI \u6709\u8bef\u800c\u5f15\u8d77\u7684\u3002\u8bf7\u68c0\u67e5\u5e76\u786e\u4fdd\u4f20\u5165\u7684 URI \u662f\u5426\u6b63\u786e\u65e0\u8bef\u3002\u53c2\u89c1\u672c\u6587\u201c",(0,c.jsx)(n.a,{href:"#properties",children:"PROPERTIES"}),"\u201d\u5c0f\u8282\u76f8\u5173\u7684\u53c2\u6570\u8bf4\u660e\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>a});var c=s(67294);const l=c.createContext({});function a(e){const n=c.useContext(l);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:a(e),c.createElement(l.Provider,{value:d},n)}}}]);