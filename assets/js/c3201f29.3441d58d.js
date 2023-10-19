"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24364],{83697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(85893),r=t(11151);const i={displayed_sidebar:"English"},a="Read data from StarRocks using Flink connector",o={id:"unloading/Flink_connector",title:"Read data from StarRocks using Flink connector",description:"StarRocks provides a self-developed connector named StarRocks Connector for Apache Flink\xae (Flink connector for short) to help you read data in bulk from a StarRocks cluster by using Flink.",source:"@site/versioned_docs/version-2.5/unloading/Flink_connector.md",sourceDirName:"unloading",slug:"/unloading/Flink_connector",permalink:"/docs/2.5/unloading/Flink_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/unloading/Flink_connector.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Export data using EXPORT",permalink:"/docs/2.5/unloading/Export"},next:{title:"Read data from StarRocks using Spark connector",permalink:"/docs/2.5/unloading/Spark_connector"}},l={},c=[{value:"Background information",id:"background-information",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Common parameters",id:"common-parameters",level:3},{value:"Parameters for Flink DataStream",id:"parameters-for-flink-datastream",level:3},{value:"Data type mapping between StarRocks and Flink",id:"data-type-mapping-between-starrocks-and-flink",level:2},{value:"Examples",id:"examples",level:2},{value:"Data example",id:"data-example",level:3},{value:"Read data using Flink SQL",id:"read-data-using-flink-sql",level:3},{value:"Read data using Flink DataStream",id:"read-data-using-flink-datastream",level:3},{value:"What&#39;s next",id:"whats-next",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",a:"a",h2:"h2",ul:"ul",li:"li",img:"img",ol:"ol",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"read-data-from-starrocks-using-flink-connector",children:"Read data from StarRocks using Flink connector"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks provides a self-developed connector named StarRocks Connector for Apache Flink\xae (Flink connector for short) to help you read data in bulk from a StarRocks cluster by using Flink."}),"\n",(0,s.jsx)(n.p,{children:"The Flink connector supports two reading methods: Flink SQL and Flink DataStream. Flink SQL is recommended."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["The Flink connector also supports writing the data read by Flink to another StarRocks cluster or storage system. See ",(0,s.jsx)(n.a,{href:"/docs/2.5/loading/Flink-connector-starrocks",children:"Continuously load data from Apache Flink\xae"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"background-information",children:"Background information"}),"\n",(0,s.jsx)(n.p,{children:"Unlike the JDBC connector provided by Flink, the Flink connector of StarRocks supports reading data from multiple BEs of your StarRocks cluster in parallel, greatly accelerating read tasks. The following comparison shows the difference in implementation between the two connectors."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Flink connector of StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"With the Flink connector of StarRocks, Flink can first obtain the query plan from the responsible FE, then distribute the obtained query plan as parameters to all the involved BEs, and finally obtain the data returned by the BEs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"- Flink connector of StarRocks",src:t(37925).Z+"",width:"1288",height:"864"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JDBC connector of Flink"}),"\n",(0,s.jsx)(n.p,{children:"With the JDBC connector of Flink, Flink can only read data from individual FEs, one at a time. Data reads are slow."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"JDBC connector of Flink",src:t(61531).Z+"",width:"1466",height:"722"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Flink has been deployed. If Flink has not been deployed, follow these steps to deploy it:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install Java 8 or Java 11 in your operating system to ensure Flink can run properly. You can use the following command to check the version of your Java installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"java -version\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example, if the following information is returned, Java 8 has been installed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'openjdk version "1.8.0_322"\nOpenJDK Runtime Environment (Temurin)(build 1.8.0_322-b06)\nOpenJDK 64-Bit Server VM (Temurin)(build 25.322-b06, mixed mode)\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download and unzip the ",(0,s.jsx)(n.a,{href:"https://flink.apache.org/downloads.html",children:"Flink package"})," of your choice."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"We recommend that you use Flink v1.14 or later. The minimum Flink version supported is v1.11."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"# Download the Flink package.\nwget https://dlcdn.apache.org/flink/flink-1.14.5/flink-1.14.5-bin-scala_2.11.tgz\n# Unzip the Flink package.\ntar -xzf flink-1.14.5-bin-scala_2.11.tgz\n# Go to the Flink directory.\ncd flink-1.14.5\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start your Flink cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"# Start your Flink cluster.\n./bin/start-cluster.sh\n      \n# When the following information is displayed, your Flink cluster has successfully started:\nStarting cluster.\nStarting standalonesession daemon on host.\nStarting taskexecutor daemon on host.\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can also deploy Flink by following the instructions provided in ",(0,s.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/",children:"Flink documentation"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,s.jsx)(n.p,{children:"Follow these steps to deploy the Flink connector:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select and download the ",(0,s.jsx)(n.a,{href:"https://github.com/StarRocks/flink-connector-starrocks/releases",children:"flink-connector-starrocks"})," JAR package matching the Flink version that you are using."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,s.jsxs)(n.p,{children:["We recommend that you download the Flink connector package whose version is 1.2.x or later and whose matching Flink version has the same first two digits as the Flink version that you are using. For example, if you use Flink v1.14.x, you can download ",(0,s.jsx)(n.code,{children:"flink-connector-starrocks-1.2.4_flink-1.14_x.yy.jar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If code debugging is needed, compile the Flink connector package to suit your business requirements."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Place the Flink connector package you downloaded or compiled into the ",(0,s.jsx)(n.code,{children:"lib"})," directory of Flink."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Restart your Flink cluster."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.h3,{id:"common-parameters",children:"Common parameters"}),"\n",(0,s.jsx)(n.p,{children:"The following parameters apply to both the Flink SQL and Flink DataStream reading methods."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Data type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connector"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The type of connector that you want to use to read data. Set the value to ",(0,s.jsx)(n.code,{children:"starrocks"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan-url"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The address that is used to connect the FE from the web server. Format: ",(0,s.jsx)(n.code,{children:"<fe_host>:<fe_http_port>"}),". The default port is ",(0,s.jsx)(n.code,{children:"8030"}),". You can specify multiple addresses, which must be separated with a comma (,). Example: ",(0,s.jsx)(n.code,{children:"192.168.xxx.xxx:8030,192.168.xxx.xxx:8030"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jdbc-url"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The address that is used to connect the MySQL client of the FE. Format: ",(0,s.jsx)(n.code,{children:"jdbc:mysql://<fe_host>:<fe_query_port>"}),". The default port number is ",(0,s.jsx)(n.code,{children:"9030"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"username"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The username of your StarRocks cluster account. The account must have read permissions on the StarRocks table you want to read. See ",(0,s.jsx)(n.a,{href:"/docs/2.5/administration/User_privilege",children:"User privileges"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"The password of your StarRocks cluster account."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"database-name"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"The name of the StarRocks database to which the StarRocks table you want to read belongs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"table-name"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"The name of the StarRocks table you want to read."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.connect.timeout-ms"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The maximum amount of time after which the connection from the Flink connector to your StarRocks cluster times out. Unit: milliseconds. Default value: ",(0,s.jsx)(n.code,{children:"1000"}),". If the amount of time taken to establish the connection exceeds this limit, the read task fails."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.params.keep-alive-min"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The maximum amount of time during which the read task keeps alive. The keep-alive time is checked on a regular basis by using a polling mechanism. Unit: minutes. Default value: ",(0,s.jsx)(n.code,{children:"10"}),". We recommend that you set this parameter to a value that is greater than or equal to ",(0,s.jsx)(n.code,{children:"5"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.params.query-timeout-s"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The maximum amount of time after which the read task times out. The timeout duration is checked during task execution. Unit: seconds. Default value: ",(0,s.jsx)(n.code,{children:"600"}),". If no read result is returned after the time duration elapses, the read task stops."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.params.mem-limit-byte"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The maximum amount of memory allowed per query on each BE. Unit: bytes. Default value: ",(0,s.jsx)(n.code,{children:"1073741824"}),", equal to 1 GB."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.max-retries"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsxs)(n.td,{children:["The maximum number of times that the read task can be retried upon failures. Default value: ",(0,s.jsx)(n.code,{children:"1"}),". If the number of times that the read task is retried exceeds this limit, the read task returns errors."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"parameters-for-flink-datastream",children:"Parameters for Flink DataStream"}),"\n",(0,s.jsx)(n.p,{children:"The following parameters apply only to the Flink DataStream reading method."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Data type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.columns"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"The column that you want to read. You can specify multiple columns, which must be separated by a comma (,)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scan.filter"}),(0,s.jsx)(n.td,{children:"No"}),(0,s.jsx)(n.td,{children:"STRING"}),(0,s.jsx)(n.td,{children:"The filter condition based on which you want to filter data."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Assume that in Flink you create a table that consists of three columns, which are ",(0,s.jsx)(n.code,{children:"c1"}),", ",(0,s.jsx)(n.code,{children:"c2"}),", ",(0,s.jsx)(n.code,{children:"c3"}),". To read the rows whose values in the ",(0,s.jsx)(n.code,{children:"c1"})," column of this Flink table are equal to ",(0,s.jsx)(n.code,{children:"100"}),", you can specify two filter conditions ",(0,s.jsx)(n.code,{children:'"scan.columns, "c1"'})," and ",(0,s.jsx)(n.code,{children:'"scan.filter, "c1 = 100"'}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"data-type-mapping-between-starrocks-and-flink",children:"Data type mapping between StarRocks and Flink"}),"\n",(0,s.jsxs)(n.p,{children:["The following data type mapping is valid only for Flink reading data from StarRocks. For the data type mapping used for Flink writing data into StarRocks, see ",(0,s.jsx)(n.a,{href:"/docs/2.5/loading/Flink-connector-starrocks",children:"Continuously load data from Apache Flink\xae"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"StarRocks"}),(0,s.jsx)(n.th,{children:"Flink"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BOOLEAN"}),(0,s.jsx)(n.td,{children:"BOOLEAN"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TINYINT"}),(0,s.jsx)(n.td,{children:"TINYINT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMALLINT"}),(0,s.jsx)(n.td,{children:"SMALLINT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INT"}),(0,s.jsx)(n.td,{children:"INT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BIGINT"}),(0,s.jsx)(n.td,{children:"BIGINT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LARGEINT"}),(0,s.jsx)(n.td,{children:"STRING"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FLOAT"}),(0,s.jsx)(n.td,{children:"FLOAT"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DOUBLE"}),(0,s.jsx)(n.td,{children:"DOUBLE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DATE"}),(0,s.jsx)(n.td,{children:"DATE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DATETIME"}),(0,s.jsx)(n.td,{children:"TIMESTAMP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DECIMAL"}),(0,s.jsx)(n.td,{children:"DECIMAL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DECIMALV2"}),(0,s.jsx)(n.td,{children:"DECIMAL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DECIMAL32"}),(0,s.jsx)(n.td,{children:"DECIMAL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DECIMAL64"}),(0,s.jsx)(n.td,{children:"DECIMAL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DECIMAL128"}),(0,s.jsx)(n.td,{children:"DECIMAL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CHAR"}),(0,s.jsx)(n.td,{children:"CHAR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VARCHAR"}),(0,s.jsx)(n.td,{children:"STRING"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["The following examples assume you have created a database named ",(0,s.jsx)(n.code,{children:"test"})," in your StarRocks cluster and you have the permissions of user ",(0,s.jsx)(n.code,{children:"root"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsx)(n.p,{children:"If a read task fails, you must re-create it."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"data-example",children:"Data example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.code,{children:"test"})," database and create a table named ",(0,s.jsx)(n.code,{children:"score_board"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'MySQL [test]> CREATE TABLE `score_board`\n(\n    `id` int(11) NOT NULL COMMENT "",\n    `name` varchar(65533) NULL DEFAULT "" COMMENT "",\n    `score` int(11) NOT NULL DEFAULT "0" COMMENT ""\n)\nENGINE=OLAP\nPRIMARY KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES\n(\n    "replication_num" = "3"\n);\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Insert data into the ",(0,s.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"MySQL [test]> INSERT INTO score_board\nVALUES\n    (1, 'Bob', 21),\n    (2, 'Stan', 21),\n    (3, 'Sam', 22),\n    (4, 'Tony', 22),\n    (5, 'Alice', 22),\n    (6, 'Lucy', 23),\n    (7, 'Polly', 23),\n    (8, 'Tom', 23),\n    (9, 'Rose', 24),\n    (10, 'Jerry', 24),\n    (11, 'Jason', 24),\n    (12, 'Lily', 25),\n    (13, 'Stephen', 25),\n    (14, 'David', 25),\n    (15, 'Eddie', 26),\n    (16, 'Kate', 27),\n    (17, 'Cathy', 27),\n    (18, 'Judy', 27),\n    (19, 'Julia', 28),\n    (20, 'Robert', 28),\n    (21, 'Jack', 29);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Query the ",(0,s.jsx)(n.code,{children:"score_board"})," table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"MySQL [test]> SELECT * FROM score_board;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    1 | Bob     |    21 |\n|    2 | Stan    |    21 |\n|    3 | Sam     |    22 |\n|    4 | Tony    |    22 |\n|    5 | Alice   |    22 |\n|    6 | Lucy    |    23 |\n|    7 | Polly   |    23 |\n|    8 | Tom     |    23 |\n|    9 | Rose    |    24 |\n|   10 | Jerry   |    24 |\n|   11 | Jason   |    24 |\n|   12 | Lily    |    25 |\n|   13 | Stephen |    25 |\n|   14 | David   |    25 |\n|   15 | Eddie   |    26 |\n|   16 | Kate    |    27 |\n|   17 | Cathy   |    27 |\n|   18 | Judy    |    27 |\n|   19 | Julia   |    28 |\n|   20 | Robert  |    28 |\n|   21 | Jack    |    29 |\n+------+---------+-------+\n21 rows in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"read-data-using-flink-sql",children:"Read data using Flink SQL"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In your Flink cluster, create a table named ",(0,s.jsx)(n.code,{children:"flink_test"})," based on the schema of the source StarRocks table (which is ",(0,s.jsx)(n.code,{children:"score_board"})," in this example). In the table creation command, you must configure the read task properties, including the information about the Flink connector, the source StarRock database, and the source StarRocks table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE flink_test\n(\n    `id` INT,\n    `name` STRING,\n    `score` INT\n)\nWITH\n(\n    'connector'='starrocks',\n    'scan-url'='192.168.xxx.xxx:8030',\n    'jdbc-url'='jdbc:mysql://192.168.xxx.xxx:9030',\n    'username'='xxxxxx',\n    'password'='xxxxxx',\n    'database-name'='test',\n    'table-name'='score_board'\n);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use SELECT to read data from StarRocks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SELECT id, name FROM flink_test WHERE score > 20;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When you read data by using Flink SQL, take note of the following points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can use only SQL statements like ",(0,s.jsx)(n.code,{children:"SELECT ... FROM <table_name> WHERE ..."})," to read data from StarRocks. Of all aggregate functions, only ",(0,s.jsx)(n.code,{children:"count"})," is supported."]}),"\n",(0,s.jsxs)(n.li,{children:["Predicate pushdown is supported. For example, if your query contains a filter condition ",(0,s.jsx)(n.code,{children:"char_1 <> 'A' and int_1 = -126"}),", the filter condition will be pushed down to the Flink connector and transformed into a statement that can be executed by StarRocks before the query is run. You do not need to perform extra configurations."]}),"\n",(0,s.jsx)(n.li,{children:"The LIMIT statement is not supported."}),"\n",(0,s.jsx)(n.li,{children:"StarRocks does not support the checkpointing mechanism. As a result, data consistency cannot be guaranteed if the read task fails."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"read-data-using-flink-datastream",children:"Read data using Flink DataStream"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following dependencies to the ",(0,s.jsx)(n.code,{children:"pom.xml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"<dependency>\n    <groupId>com.starrocks</groupId>\n    <artifactId>flink-connector-starrocks</artifactId>\n    \x3c!-- for Apache Flink\xae 1.15 --\x3e\n    <version>x.x.x_flink-1.15</version>\n    \x3c!-- for Apache Flink\xae 1.14 --\x3e\n    <version>x.x.x_flink-1.14_2.11</version>\n    <version>x.x.x_flink-1.14_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.13 --\x3e\n    <version>x.x.x_flink-1.13_2.11</version>\n    <version>x.x.x_flink-1.13_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.12 --\x3e\n    <version>x.x.x_flink-1.12_2.11</version>\n    <version>x.x.x_flink-1.12_2.12</version>\n    \x3c!-- for Apache Flink\xae 1.11 --\x3e\n    <version>x.x.x_flink-1.11_2.11</version>\n    <version>x.x.x_flink-1.11_2.12</version>\n</dependency>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You must replace ",(0,s.jsx)(n.code,{children:"x.x.x"})," in the preceding code example with the latest Flink connector version that you are using. See ",(0,s.jsx)(n.a,{href:"https://search.maven.org/search?q=g:com.starrocks",children:"Version information"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Call the Flink connector to read data from StarRocks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Java",children:'import com.starrocks.connector.flink.StarRocksSource;\nimport com.starrocks.connector.flink.table.source.StarRocksSourceOptions;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.api.DataTypes;\nimport org.apache.flink.table.api.TableSchema;\n\npublic class StarRocksSourceApp {\n        public static void main(String[] args) throws Exception {\n            StarRocksSourceOptions options = StarRocksSourceOptions.builder()\n                   .withProperty("scan-url", "192.168.xxx.xxx:8030")\n                   .withProperty("jdbc-url", "jdbc:mysql://192.168.xxx.xxx:9030")\n                   .withProperty("username", "root")\n                   .withProperty("password", "")\n                   .withProperty("table-name", "score_board")\n                   .withProperty("database-name", "test")\n                   .build();\n            TableSchema tableSchema = TableSchema.builder()\n                   .field("id", DataTypes.INT())\n                   .field("name", DataTypes.STRING())\n                   .field("score", DataTypes.INT())\n                   .build();\n            StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n            env.addSource(StarRocksSource.source(tableSchema, options)).setParallelism(5).print();\n            env.execute("StarRocks flink source");\n        }\n\n    }\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(n.p,{children:["After Flink successfully reads data from StarRocks, you can use the ",(0,s.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/try-flink/flink-operations-playground/#flink-webui",children:"Flink WebUI"})," to monitor the read task. For example, you can view the ",(0,s.jsx)(n.code,{children:"totalScannedRows"})," metric on the ",(0,s.jsx)(n.strong,{children:"Metrics"})," page of the WebUI to obtain the number of rows that are successfully read. You can also use Flink SQL to perform calculations such as joins on the data you have read."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},37925:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/5.3.2-1-754f40ad6d35622970a5f5ab2614e3b1.png"},61531:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/5.3.2-2-52b40ca88dc794d1a45bb4e472b5d655.png"},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:o},n)}}}]);