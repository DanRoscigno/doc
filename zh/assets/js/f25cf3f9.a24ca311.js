"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15577],{28003:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese31"},l="\u4f7f\u7528 Flink Connector \u8bfb\u53d6\u6570\u636e",d={id:"unloading/Flink_connector",title:"\u4f7f\u7528 Flink Connector \u8bfb\u53d6\u6570\u636e",description:"StarRocks \u63d0\u4f9b\u81ea\u7814\u7684 Apache Flink\xae Connector (StarRocks Connector for Apache Flink\xae)\uff0c\u652f\u6301\u901a\u8fc7 Flink \u6279\u91cf\u8bfb\u53d6\u67d0\u4e2a StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/unloading/Flink_connector.md",sourceDirName:"unloading",slug:"/unloading/Flink_connector",permalink:"/doc/zh/docs/3.0/unloading/Flink_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/unloading/Flink_connector.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u4f7f\u7528 Spark Connector \u8bfb\u53d6\u6570\u636e",permalink:"/doc/zh/docs/3.0/unloading/Spark_connector"},next:{title:"\u67e5\u8be2\u6570\u636e\u6e56",permalink:"/doc/zh/docs/3.0/category/\u67e5\u8be2\u6570\u636e\u6e56"}},t={},h=[{value:"\u529f\u80fd\u7b80\u4ecb",id:"\u529f\u80fd\u7b80\u4ecb",level:2},{value:"\u7248\u672c\u8981\u6c42",id:"\u7248\u672c\u8981\u6c42",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570",level:3},{value:"Flink DataStream \u4e13\u6709\u53c2\u6570",id:"flink-datastream-\u4e13\u6709\u53c2\u6570",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6570\u636e\u6837\u4f8b",id:"\u6570\u636e\u6837\u4f8b",level:3},{value:"\u4f7f\u7528 Flink SQL \u8bfb\u53d6\u6570\u636e",id:"\u4f7f\u7528-flink-sql-\u8bfb\u53d6\u6570\u636e",level:3},{value:"\u4f7f\u7528 Flink DataStream \u8bfb\u53d6\u6570\u636e",id:"\u4f7f\u7528-flink-datastream-\u8bfb\u53d6\u6570\u636e",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}];function o(n){const e=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",ul:"ul",li:"li",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ol:"ol",pre:"pre",code:"code",h3:"h3"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u4f7f\u7528-flink-connector-\u8bfb\u53d6\u6570\u636e",children:"\u4f7f\u7528 Flink Connector \u8bfb\u53d6\u6570\u636e"}),"\n",(0,r.jsx)(e.p,{children:"StarRocks \u63d0\u4f9b\u81ea\u7814\u7684 Apache Flink\xae Connector (StarRocks Connector for Apache Flink\xae)\uff0c\u652f\u6301\u901a\u8fc7 Flink \u6279\u91cf\u8bfb\u53d6\u67d0\u4e2a StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Flink Connector \u652f\u6301\u4e24\u79cd\u6570\u636e\u8bfb\u53d6\u65b9\u5f0f\uff1aFlink SQL \u548c Flink DataStream\u3002\u63a8\u8350\u4f7f\u7528 Flink SQL\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(e.p,{children:["Flink Connector \u8fd8\u652f\u6301\u5c06 Flink \u8bfb\u53d6\u5230\u7684\u6570\u636e\u5199\u5165\u53e6\u5916\u4e00\u4e2a StarRocks \u96c6\u7fa4\u6216\u5176\u4ed6\u5b58\u50a8\u7cfb\u7edf\u4e0a\u3002\u53c2\u89c1",(0,r.jsx)(e.a,{href:"/doc/zh/docs/3.0/loading/Flink-connector-starrocks",children:"\u4ece Apache Flink \u6301\u7eed\u5bfc\u5165"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd\u7b80\u4ecb",children:"\u529f\u80fd\u7b80\u4ecb"}),"\n",(0,r.jsx)(e.p,{children:"\u76f8\u8f83\u4e8e Flink \u5b98\u65b9\u63d0\u4f9b\u7684 Flink JDBC Connector (\u7b80\u79f0 JDBC Connector)\uff0cStarRocks \u81ea\u7814\u7684 Flink Connector \u5177\u5907\u4ece StarRocks \u96c6\u7fa4\u4e2d\u5404 BE \u8282\u70b9\u5e76\u884c\u8bfb\u53d6\u6570\u636e\u7684\u80fd\u529b\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u6570\u636e\u8bfb\u53d6\u6548\u7387\u3002\u4ee5\u4e0b\u662f\u4e24\u79cd Connector \u7684\u5b9e\u73b0\u65b9\u6848\u5bf9\u6bd4\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Flink Connector"}),"\n",(0,r.jsx)(e.p,{children:"Flink \u5148\u4ece FE \u8282\u70b9\u83b7\u53d6\u67e5\u8be2\u8ba1\u5212 (Query Plan)\uff0c\u7136\u540e\u5c06\u83b7\u53d6\u5230\u7684\u67e5\u8be2\u8ba1\u5212\u4f5c\u4e3a\u53c2\u6570\uff0c\u4e0b\u53d1\u81f3 BE \u8282\u70b9\uff0c\u6700\u540e\u83b7\u53d6 BE \u8282\u70b9\u8fd4\u56de\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Unload data - Flink Connector",src:s(61911).Z+"",width:"1762",height:"1026"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Flink JDBC Connector"}),"\n",(0,r.jsx)(e.p,{children:"Flink JDBC Connector \u4ec5\u80fd\u4ece FE \u5355\u70b9\u4e0a\u4e32\u884c\u8bfb\u53d6\u6570\u636e\uff0c\u6570\u636e\u8bfb\u53d6\u6548\u7387\u8f83\u4f4e\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Unload data - JDBC Connector",src:s(2983).Z+"",width:"1752",height:"880"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u7248\u672c\u8981\u6c42",children:"\u7248\u672c\u8981\u6c42"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Connector"}),(0,r.jsx)(e.th,{children:"Flink"}),(0,r.jsx)(e.th,{children:"StarRocks"}),(0,r.jsx)(e.th,{children:"Java"}),(0,r.jsx)(e.th,{children:"Scala"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1.2.8"}),(0,r.jsx)(e.td,{children:"1.13 ~ 1.17"}),(0,r.jsx)(e.td,{children:"2.1 \u53ca\u4ee5\u4e0a"}),(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"2.11\u30012.12"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"1.2.7"}),(0,r.jsx)(e.td,{children:"1.11 ~ 1.15"}),(0,r.jsx)(e.td,{children:"2.1 \u53ca\u4ee5\u4e0a"}),(0,r.jsx)(e.td,{children:"8"}),(0,r.jsx)(e.td,{children:"2.11\u30012.12"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u5df2\u90e8\u7f72 Flink\u3002\u82e5\u60a8\u5c1a\u672a\u90e8\u7f72 Flink\uff0c\u8bf7\u53c2\u7167\u5982\u4e0b\u6b65\u9aa4\u5b8c\u6210\u90e8\u7f72\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u5b89\u88c5 Java 8 \u6216\u8005 Java 11\uff0c\u4ee5\u6b63\u5e38\u8fd0\u884c Flink\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u5df2\u7ecf\u5b89\u88c5\u7684 Java \u7248\u672c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"java -version\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u547d\u4ee4\u56de\u663e\u5982\u4e0b\uff0c\u5219\u8bf4\u660e\u5df2\u7ecf\u5b89\u88c5 Java 8\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'openjdk version "1.8.0_322"\nOpenJDK Runtime Environment (Temurin)(build 1.8.0_322-b06)\nOpenJDK 64-Bit Server VM (Temurin)(build 25.322-b06, mixed mode)\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u8f7d\u5e76\u89e3\u538b ",(0,r.jsx)(e.a,{href:"https://flink.apache.org/downloads.html",children:"Flink"}),"\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsx)(e.p,{children:"\u63a8\u8350\u4f7f\u7528 1.14 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u6700\u4f4e\u652f\u6301 1.11 \u7248\u672c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"# \u4e0b\u8f7d Flink\nwget https://dlcdn.apache.org/flink/flink-1.14.5/flink-1.14.5-bin-scala_2.11.tgz\n# \u89e3\u538b Flink  \ntar -xzf flink-1.14.5-bin-scala_2.11.tgz\n# \u8fdb\u5165 Flink \u76ee\u5f55\ncd flink-1.14.5\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8 Flink \u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"# \u542f\u52a8 Flink \u96c6\u7fa4\n./bin/start-cluster.sh\n   \n# \u8fd4\u56de\u5982\u4e0b\u4fe1\u606f\uff0c\u8868\u793a\u6210\u529f\u542f\u52a8 flink \u96c6\u7fa4\nStarting cluster.\nStarting standalonesession daemon on host.\nStarting taskexecutor daemon on host.\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/",children:"Flink \u5b98\u65b9\u6587\u6863"})," \u5b8c\u6210\u90e8\u7f72\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u5982\u4e0b\u6b65\u9aa4\u5b8c\u6210 Flink Connector \u7684\u90e8\u7f72\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6839\u636e Flink \u7684\u7248\u672c\uff0c\u9009\u62e9\u548c\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684 ",(0,r.jsx)(e.a,{href:"https://github.com/StarRocks/flink-connector-starrocks/releases",children:"flink-connector-starrocks"})," JAR \u5305\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsxs)(e.p,{children:["\u63a8\u8350\u60a8\u4e0b\u8f7d Flink Connector \u7248\u672c\u5728 1.2.x \u53ca\u4ee5\u4e0a\u3001\u5e76\u4e14\u914d\u5957\u7684 Flink \u7248\u672c\u4e0e\u60a8\u7684\u4e1a\u52a1\u73af\u5883\u4e2d\u5b89\u88c5\u7684 Flink \u7248\u672c\u524d\u4e24\u4f4d\u4e00\u81f4\u7684 JAR \u5305\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u4e1a\u52a1\u73af\u5883\u4e2d\u5b89\u88c5\u7684 Flink \u7248\u672c\u4e3a 1.14.x\uff0c\u53ef\u4ee5\u4e0b\u8f7d ",(0,r.jsx)(e.code,{children:"flink-connector-starrocks-1.2.4_flink-1.14_x.yy.jar"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5982\u9700\u8c03\u8bd5\u4ee3\u7801\uff0c\u53ef\u9009\u62e9\u5bf9\u5e94\u5206\u652f\u4ee3\u7801\u81ea\u884c\u7f16\u8bd1\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5c06\u4e0b\u8f7d\u6216\u8005\u7f16\u8bd1\u7684 JAR \u5305\u653e\u5728 Flink \u7684 ",(0,r.jsx)(e.code,{children:"lib"})," \u76ee\u5f55\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u91cd\u542f Flink\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsx)(e.h3,{id:"\u901a\u7528\u53c2\u6570",children:"\u901a\u7528\u53c2\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u53c2\u6570\u9002\u7528\u4e8e Flink SQL \u548c Flink DataStream \u4e24\u79cd\u8bfb\u53d6\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53c2\u6570"}),(0,r.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(e.th,{children:"\u6570\u636e\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"connector"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["\u56fa\u5b9a\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(e.code,{children:"starrocks"}),"\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan-url"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["FE \u8282\u70b9\u7684\u8fde\u63a5\u5730\u5740\uff0c\u7528\u4e8e\u901a\u8fc7 Web \u670d\u52a1\u5668\u8bbf\u95ee FE \u8282\u70b9\u3002 \u683c\u5f0f\u5982\u4e0b\uff1a",(0,r.jsx)(e.code,{children:"<fe_host>:<fe_http_port>"}),"\u3002\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.jsx)(e.code,{children:"8030"}),"\u3002\u591a\u4e2a\u5730\u5740\u4e4b\u95f4\u7528\u9017\u53f7 (,) \u5206\u9694\u3002\u4f8b\u5982 ",(0,r.jsx)(e.code,{children:"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030"}),"\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"jdbc-url"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["FE \u8282\u70b9\u7684\u8fde\u63a5\u5730\u5740\uff0c\u7528\u4e8e\u8bbf\u95ee FE \u8282\u70b9\u4e0a\u7684 MySQL \u5ba2\u6237\u7aef\u3002\u683c\u5f0f\u5982\u4e0b\uff1a",(0,r.jsx)(e.code,{children:"jdbc:mysql://<fe_host>:<fe_query_port>"}),"\u3002\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a ",(0,r.jsx)(e.code,{children:"9030"}),"\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"username"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["\u7528\u4e8e\u8bbf\u95ee StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u540d\u3002\u8be5\u8d26\u53f7\u9700\u5177\u5907\u5f85\u8bfb\u53d6\u6570\u636e\u7684 StarRocks \u8868\u7684\u8bfb\u6743\u9650\u3002\u6709\u5173\u7528\u6237\u6743\u9650\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(e.a,{href:"/doc/zh/docs/3.0/administration/privilege_overview",children:"\u7528\u6237\u6743\u9650"}),"\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"password"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"\u7528\u4e8e\u8bbf\u95ee StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"database-name"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"\u5f85\u8bfb\u53d6\u6570\u636e\u7684 StarRocks \u6570\u636e\u5e93\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"table-name"}),(0,r.jsx)(e.td,{children:"\u662f"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"\u5f85\u8bfb\u53d6\u6570\u636e\u7684 StarRocks \u8868\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.connect.timeout-ms"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["Flink Connector \u8fde\u63a5 StarRocks \u96c6\u7fa4\u7684\u65f6\u95f4\u4e0a\u9650\u3002\u5355\u4f4d\uff1a\u6beb\u79d2\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(e.code,{children:"1000"}),"\u3002\u8d85\u8fc7\u8be5\u65f6\u95f4\u4e0a\u9650\uff0c\u5219\u6570\u636e\u8bfb\u53d6\u4efb\u52a1\u4f1a\u62a5\u9519\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.params.keep-alive-min"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["\u6570\u636e\u8bfb\u53d6\u4efb\u52a1\u7684\u4fdd\u6d3b\u65f6\u95f4\uff0c\u901a\u8fc7\u8f6e\u8be2\u673a\u5236\u5b9a\u671f\u68c0\u67e5\u3002\u5355\u4f4d\uff1a\u5206\u949f\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(e.code,{children:"10"}),"\u3002\u5efa\u8bae\u53d6\u503c\u5927\u4e8e\u7b49\u4e8e ",(0,r.jsx)(e.code,{children:"5"}),"\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.params.query-timeout-s"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["\u6570\u636e\u8bfb\u53d6\u4efb\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5728\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u68c0\u67e5\u3002\u5355\u4f4d\uff1a\u79d2\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(e.code,{children:"600"}),"\u3002\u5982\u679c\u8d85\u8fc7\u8be5\u65f6\u95f4\uff0c\u4ecd\u672a\u8fd4\u56de\u8bfb\u53d6\u7ed3\u679c\uff0c\u5219\u505c\u6b62\u6570\u636e\u8bfb\u53d6\u4efb\u52a1\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.params.mem-limit-byte"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["BE \u8282\u70b9\u4e2d\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u4e0a\u9650\u3002\u5355\u4f4d\uff1a\u5b57\u8282\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(e.code,{children:"1073741824"}),"\uff08\u5373 1 GB\uff09\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.max-retries"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsxs)(e.td,{children:["\u6570\u636e\u8bfb\u53d6\u5931\u8d25\u65f6\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(e.code,{children:"1"}),"\u3002\u8d85\u8fc7\u8be5\u6570\u91cf\u4e0a\u9650\uff0c\u5219\u6570\u636e\u8bfb\u53d6\u4efb\u52a1\u62a5\u9519\u3002"]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"flink-datastream-\u4e13\u6709\u53c2\u6570",children:"Flink DataStream \u4e13\u6709\u53c2\u6570"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u53c2\u6570\u4ec5\u9002\u7528\u4e8e Flink DataStream \u8bfb\u53d6\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53c2\u6570"}),(0,r.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,r.jsx)(e.th,{children:"\u6570\u636e\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.columns"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"\u6307\u5b9a\u8981\u8bfb\u53d6\u6570\u636e\u7684\u5217\u3002\u591a\u4e2a\u5217\u4e4b\u95f4\u4ee5\u9017\u53f7 (,) \u5206\u9694\u3002"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"scan.filter"}),(0,r.jsx)(e.td,{children:"\u5426"}),(0,r.jsx)(e.td,{children:"STRING"}),(0,r.jsx)(e.td,{children:"\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\u3002"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5047\u8bbe\u60a8\u5728 Flink \u4e2d\u521b\u5efa\u7684\u8868\u5305\u542b ",(0,r.jsx)(e.code,{children:"c1"}),"\u3001",(0,r.jsx)(e.code,{children:"c2"}),"\u3001",(0,r.jsx)(e.code,{children:"c3"})," \u4e09\u5217\u3002\u5982\u679c\u8981\u8bfb\u53d6\u8be5 Flink \u8868\u7684 ",(0,r.jsx)(e.code,{children:"c1"})," \u5217\u4e2d\u53d6\u503c\u7b49\u4e8e ",(0,r.jsx)(e.code,{children:"100"})," \u7684\u6570\u636e\u884c\uff0c\u53ef\u4ee5\u6307\u5b9a ",(0,r.jsx)(e.code,{children:'"scan.columns, "c1"'})," \u548c ",(0,r.jsx)(e.code,{children:'"scan.filter, "c1 = 100"'}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",children:"\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0b\u8ff0\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb\u4ec5\u9002\u7528\u4e8e Flink \u8bfb\u53d6 StarRocks \u4e2d\u7684\u6570\u636e\u3002\u6709\u5173 Flink \u5c06\u6570\u636e\u5199\u5165\u81f3 StarRocks \u65f6\u7684\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb\uff0c\u8bf7\u53c2\u89c1",(0,r.jsx)(e.a,{href:"../loading/",children:"\u4ece Apache Flink\xae \u6301\u7eed\u5bfc\u5165"}),"\u3002"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"StarRocks"}),(0,r.jsx)(e.th,{children:"Flink"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"NULL"}),(0,r.jsx)(e.td,{children:"NULL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BOOLEAN"}),(0,r.jsx)(e.td,{children:"BOOLEAN"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"TINYINT"}),(0,r.jsx)(e.td,{children:"TINYINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"SMALLINT"}),(0,r.jsx)(e.td,{children:"SMALLINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"INT"}),(0,r.jsx)(e.td,{children:"INT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"BIGINT"}),(0,r.jsx)(e.td,{children:"BIGINT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"LARGEINT"}),(0,r.jsx)(e.td,{children:"STRING"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"FLOAT"}),(0,r.jsx)(e.td,{children:"FLOAT"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DOUBLE"}),(0,r.jsx)(e.td,{children:"DOUBLE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DATE"}),(0,r.jsx)(e.td,{children:"DATE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DATETIME"}),(0,r.jsx)(e.td,{children:"TIMESTAMP"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMAL"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMALV2"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMAL32"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMAL64"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DECIMAL128"}),(0,r.jsx)(e.td,{children:"DECIMAL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"CHAR"}),(0,r.jsx)(e.td,{children:"CHAR"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"VARCHAR"}),(0,r.jsx)(e.td,{children:"STRING"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.p,{children:["\u5047\u8bbe\u60a8\u7684 StarRocks \u96c6\u7fa4\u4e2d\u5df2\u521b\u5efa\u6570\u636e\u5e93 ",(0,r.jsx)(e.code,{children:"test"}),"\uff0c\u5e76\u4e14\u60a8\u62e5\u6709 ",(0,r.jsx)(e.code,{children:"root"})," \u8d26\u53f7\u6743\u9650\u3002"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u8bfb\u53d6\u4efb\u52a1\u5931\u8d25\uff0c\u60a8\u9700\u8981\u91cd\u65b0\u521b\u5efa\u8bfb\u53d6\u4efb\u52a1\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6570\u636e\u6837\u4f8b",children:"\u6570\u636e\u6837\u4f8b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8fdb\u5165 ",(0,r.jsx)(e.code,{children:"test"})," \u6570\u636e\u5e93\uff0c\u521b\u5efa\u4e00\u5f20\u540d\u4e3a ",(0,r.jsx)(e.code,{children:"score_board"})," \u7684\u8868\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'MySQL [test]> CREATE TABLE `score_board`\n(\n    `id` int(11) NOT NULL COMMENT "",\n    `name` varchar(65533) NULL DEFAULT "" COMMENT "",\n    `score` int(11) NOT NULL DEFAULT "0" COMMENT ""\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES\n(\n    "replication_num" = "3"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5411 ",(0,r.jsx)(e.code,{children:"score_board"})," \u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"MySQL [test]> INSERT INTO score_board values\n    (1, 'Bob', 21),\n    (2, 'Stan', 21),\n    (3, 'Sam', 22),\n    (4, 'Tony', 22),\n    (5, 'Alice', 22),\n    (6, 'Lucy', 23),\n    (7, 'Polly', 23),\n    (8, 'Tom', 23),\n    (9, 'Rose', 24),\n    (10, 'Jerry', 24),\n    (11, 'Jason', 24),\n    (12, 'Lily', 25),\n    (13, 'Stephen', 25),\n    (14, 'David', 25),\n    (15, 'Eddie', 26),\n    (16, 'Kate', 27),\n    (17, 'Cathy', 27),\n    (18, 'Judy', 27),\n    (19, 'Julia', 28),\n    (20, 'Robert', 28),\n    (21, 'Jack', 29);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u67e5\u8be2 ",(0,r.jsx)(e.code,{children:"score_board"})," \u8868\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"MySQL [test]> SELECT * FROM score_board;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    1 | Bob     |    21 |\n|    2 | Stan    |    21 |\n|    3 | Sam     |    22 |\n|    4 | Tony    |    22 |\n|    5 | Alice   |    22 |\n|    6 | Lucy    |    23 |\n|    7 | Polly   |    23 |\n|    8 | Tom     |    23 |\n|    9 | Rose    |    24 |\n|   10 | Jerry   |    24 |\n|   11 | Jason   |    24 |\n|   12 | Lily    |    25 |\n|   13 | Stephen |    25 |\n|   14 | David   |    25 |\n|   15 | Eddie   |    26 |\n|   16 | Kate    |    27 |\n|   17 | Cathy   |    27 |\n|   18 | Judy    |    27 |\n|   19 | Julia   |    28 |\n|   20 | Robert  |    28 |\n|   21 | Jack    |    29 |\n+------+---------+-------+\n21 rows in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4f7f\u7528-flink-sql-\u8bfb\u53d6\u6570\u636e",children:"\u4f7f\u7528 Flink SQL \u8bfb\u53d6\u6570\u636e"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u6839\u636e\u8981\u5f85\u5bfc\u5165\u6570\u636e\u7684 StarRocks \u8868\uff0c\u5728 Flink \u4e2d\u521b\u5efa\u4e00\u5f20\u8868\uff0c\u4f8b\u5982 ",(0,r.jsx)(e.code,{children:"flink_test"}),"\uff0c\u5e76\u914d\u7f6e\u8bfb\u53d6\u4efb\u52a1\u5c5e\u6027\uff0c\u5305\u62ec\u8bbe\u7f6e Flink Connector \u548c\u5e93\u8868\u7684\u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"CREATE TABLE flink_test\n(\n    `id` INT,\n    `name` STRING,\n    `score` INT\n)\nWITH\n(\n    'connector'='starrocks',\n    'scan-url'='192.168.xxx.xxx:8030',\n    'jdbc-url'='jdbc:mysql://192.168.xxx.xxx:9030',\n    'username'='xxxxxx',\n    'password'='xxxxxx',\n    'database-name'='test',\n    'table-name'='score_board'\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528 SQL \u8bed\u53e5\u8bfb\u53d6 StarRocks \u7684\u6570\u636e\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"SELECT id, name FROM flink_test WHERE score > 20;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528 Flink SQL \u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u4ec5\u652f\u6301\u4f7f\u7528\u90e8\u5206 SQL \u8bed\u53e5\u8bfb\u53d6 StarRocks \u4e2d\u7684\u6570\u636e\uff0c\u5982 ",(0,r.jsx)(e.code,{children:"SELECT ... FROM <table_name> WHERE ..."}),"\u3002\u6682\u4e0d\u652f\u6301\u9664 ",(0,r.jsx)(e.code,{children:"count"})," \u4ee5\u5916\u7684\u805a\u5408\u51fd\u6570\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528 SQL \u8bed\u53e5\u65f6\uff0c\u652f\u6301\u81ea\u52a8\u8fdb\u884c\u8c13\u8bcd\u4e0b\u63a8\u3002\u5982\u8fc7\u6ee4\u6761\u4ef6 ",(0,r.jsx)(e.code,{children:"char_1 <> 'A' and int_1 = -126"}),"\uff0c\u4f1a\u4e0b\u63a8\u5230 Flink Connector \u4e2d\u5e76\u8f6c\u6362\u6210\u9002\u7528\u4e8e StarRocks \u7684\u8bed\u53e5\u540e\uff0c\u518d\u6267\u884c\u67e5\u8be2\uff0c\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u4e0d\u652f\u6301 LIMIT \u8bed\u53e5\u3002"}),"\n",(0,r.jsx)(e.li,{children:"StarRocks \u6682\u65f6\u4e0d\u652f\u6301 Checkpoint \u673a\u5236\u3002\u56e0\u6b64\uff0c\u5982\u679c\u8bfb\u53d6\u4efb\u52a1\u5931\u8d25\uff0c\u5219\u65e0\u6cd5\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\u6027\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4f7f\u7528-flink-datastream-\u8bfb\u53d6\u6570\u636e",children:"\u4f7f\u7528 Flink DataStream \u8bfb\u53d6\u6570\u636e"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5728 ",(0,r.jsx)(e.strong,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4f9d\u8d56\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"<dependency>\n    <groupId>com.starrocks</groupId>\n    <artifactId>flink-connector-starrocks</artifactId>\n    \x3c!-- for Apache Flink\xae 1.15 --\x3e\n    <version>x.x.x_flink-1.15</version>\n    \x3c!-- for Apache Flink\xae 1.14 --\x3e\n    <version>x.x.x_flink-1.14_2.11</version>\n    <version>x.x.x_flink-1.14_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.13 --\x3e\n    <version>x.x.x_flink-1.13_2.11</version>\n    <version>x.x.x_flink-1.13_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.12 --\x3e\n    <version>x.x.x_flink-1.12_2.11</version>\n    <version>x.x.x_flink-1.12_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.11 --\x3e\n    <version>x.x.x_flink-1.11_2.11</version>\n    <version>x.x.x_flink-1.11_2.12</version>\n</dependency>\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c",(0,r.jsx)(e.code,{children:"x.x.x"})," \u9700\u8981\u66ff\u6362\u4e3a Flink Connector \u7684\u6700\u65b0\u7248\u672c\u53f7\u3002\u5177\u4f53\u8bf7\u53c2\u89c1",(0,r.jsx)(e.a,{href:"https://search.maven.org/search?q=g:com.starrocks",children:"\u7248\u672c\u4fe1\u606f"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8c03\u7528 Flink Connector\uff0c\u8bfb\u53d6 StarRocks \u4e2d\u7684\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Java",children:'import com.starrocks.connector.flink.StarRocksSource;\nimport com.starrocks.connector.flink.table.source.StarRocksSourceOptions;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.api.DataTypes;\nimport org.apache.flink.table.api.TableSchema;\n   \npublic class StarRocksSourceApp {\n        public static void main(String[] args) throws Exception {\n            StarRocksSourceOptions options = StarRocksSourceOptions.builder()\n                   .withProperty("scan-url", "192.168.xxx.xxx:8030")\n                   .withProperty("jdbc-url", "jdbc:mysql://192.168.xxx.xxx:9030")\n                   .withProperty("username", "root")\n                   .withProperty("password", "")\n                   .withProperty("table-name", "score_board")\n                   .withProperty("database-name", "test")\n                   .build();\n            TableSchema tableSchema = TableSchema.builder()\n                   .field("id", DataTypes.INT())\n                   .field("name", DataTypes.STRING())\n                   .field("score", DataTypes.INT())\n                   .build();\n            StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n            env.addSource(StarRocksSource.source(tableSchema, options)).setParallelism(5).print();\n            env.execute("StarRocks flink source");\n        }\n\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u540e\u7eed\u64cd\u4f5c",children:"\u540e\u7eed\u64cd\u4f5c"}),"\n",(0,r.jsxs)(e.p,{children:["Flink \u6210\u529f\u8bfb\u53d6 StarRocks \u4e2d\u7684\u6570\u636e\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Flink \u5b98\u65b9\u7684 ",(0,r.jsx)(e.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/zh/docs/try-flink/flink-operations-playground/#flink-webui-%E7%95%8C%E9%9D%A2",children:"Flink WebUI"})," \u754c\u9762\u89c2\u5bdf\u8bfb\u53d6\u4efb\u52a1\uff0c\u6bd4\u5982\uff0c\u53ef\u4ee5\u5728 ",(0,r.jsx)(e.strong,{children:"Metrics"})," \u9875\u9762\u4e0a\u67e5\u770b ",(0,r.jsx)(e.code,{children:"totalScannedRows"})," \u6307\u6807\uff0c\u4ece\u800c\u83b7\u6089\u6210\u529f\u8bfb\u53d6\u7684\u6570\u636e\u884c\u6570\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 Flink SQL \u5bf9\u8bfb\u53d6\u7684\u6570\u636e\u8fdb\u884c\u8ba1\u7b97\uff0c\u6bd4\u5982 Join\u3002"]})]})}const x=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o(n)}},61911:(n,e,s)=>{s.d(e,{Z:()=>r});const r=s.p+"assets/images/unload_flink_connector_1-a7d5ea881d0f6bdbed8e979c210885a3.png"},2983:(n,e,s)=>{s.d(e,{Z:()=>r});const r=s.p+"assets/images/unload_flink_connector_2-27c9fda8f349bcf23c2eedb8aaf9e32a.png"},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>c});var r=s(67294);const i=r.createContext({});function c(n){const e=r.useContext(i);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||l:c(n),r.createElement(i.Provider,{value:d},e)}}}]);