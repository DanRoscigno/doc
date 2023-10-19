"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47352],{94866:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(85893),a=s(11151);const r={displayed_sidebar:"English"},i="Synchronize data from MySQL in real time",o={id:"loading/Flink_cdc_load",title:"Synchronize data from MySQL in real time",description:"StarRocks supports real-time data synchronization from MySQL within seconds, delivering ultra-low latency real-time analytics at scale and enabling users to query real-time data as they happen.",source:"@site/versioned_docs/version-2.5/loading/Flink_cdc_load.md",sourceDirName:"loading",slug:"/loading/Flink_cdc_load",permalink:"/docs/2.5/loading/Flink_cdc_load",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/Flink_cdc_load.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Continuously load data from Apache Flink\xae",permalink:"/docs/2.5/loading/Flink-connector-starrocks"},next:{title:"Load data using INSERT",permalink:"/docs/2.5/loading/InsertInto"}},l={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Scenarios",id:"scenarios",level:2},{value:"Preparations",id:"preparations",level:2},{value:"Download and install synchronization tools",id:"download-and-install-synchronization-tools",level:3},{value:"Enable MySQL binary log",id:"enable-mysql-binary-log",level:3},{value:"Synchronize database &amp; table schema",id:"synchronize-database--table-schema",level:2},{value:"Synchronize data",id:"synchronize-data",level:2},{value:"FAQ",id:"faq",level:2},{value:"Use different flink-connector-starrocks configurations for different tables",id:"use-different-flink-connector-starrocks-configurations-for-different-tables",level:3},{value:"Synchronize multiple tables after MySQL sharding to one table in StarRocks",id:"synchronize-multiple-tables-after-mysql-sharding-to-one-table-in-starrocks",level:3},{value:"Import data in JSON format",id:"import-data-in-json-format",level:3},{value:"Execute multiple INSERT INTO statements as one Flink job",id:"execute-multiple-insert-into-statements-as-one-flink-job",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",blockquote:"blockquote",strong:"strong",ol:"ol",li:"li",code:"code",a:"a",h3:"h3",pre:"pre",ul:"ul"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"synchronize-data-from-mysql-in-real-time",children:"Synchronize data from MySQL in real time"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks supports real-time data synchronization from MySQL within seconds, delivering ultra-low latency real-time analytics at scale and enabling users to query real-time data as they happen."}),"\n",(0,t.jsx)(n.p,{children:"This tutorial helps you learn how you can bring real-time analytics to your business and users. It demonstrates how to synchronize data from MySQL to StarRocks in real time by using the following tools: StarRocks Migration Tools (SMT), Flink, Flink CDC Connector, and flink-starrocks-connector."}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"The following figure illustrates the entire synchronization process."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img",src:s(29282).Z+"",width:"1354",height:"326"})}),"\n",(0,t.jsx)(n.p,{children:"Real-time synchronization from MySQL is implemented in two stages: synchronizing database & table schema and synchronizing data. First, the SMT converts MySQL database & table schema into table creation statements for StarRocks. Then, the Flink cluster runs Flink jobs to synchronize full and incremental MySQL data to StarRocks."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"The synchronization process guarantees exactly-once semantics."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Synchronization process"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Synchronize database & table schema."}),"\n",(0,t.jsx)(n.p,{children:"The SMT reads the schema of the MySQL database & table to be synchronized and generates SQL files for creating a destination database & table in StarRocks. This operation is based on the MySQL and StarRocks information in SMT's configuration file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Synchronize data."}),"\n",(0,t.jsxs)(n.p,{children:["a. The Flink SQL client executes the data loading statement ",(0,t.jsx)(n.code,{children:"INSERT INTO SELECT"})," to submit one or more Flink jobs to the Flink cluster."]}),"\n",(0,t.jsxs)(n.p,{children:["b. The Flink cluster runs the Flink jobs to obtain data. The ",(0,t.jsx)(n.a,{href:"https://github.com/ververica/flink-cdc-connectors/blob/master/docs/content/quickstart/build-real-time-data-lake-tutorial.md",children:"Flink CDC connector"})," first reads full historical data from the source database, then seamlessly switches to incremental reading, and sends the data to flink-starrocks-connector."]}),"\n",(0,t.jsx)(n.p,{children:"c. flink-starrocks-connector accumulates data in mini-batches, and synchronizes each batch of data to StarRocks."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"Only data manipulation language (DML) operations in MySQL can be synchronized to StarRocks. Data definition language (DDL) operations cannot be synchronized."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,t.jsx)(n.p,{children:'Real-time synchronization from MySQL has a broad range of use cases where data is constantly changed. Take a real-world use case "real-time ranking of commodity sales" as an example.'}),"\n",(0,t.jsx)(n.p,{children:"Flink calculates the real-time ranking of commodity sales based on the original order table in MySQL and synchronizes the ranking to StarRocks' Primary Key table in real time. Users can connect a visualization tool to StarRocks to view the ranking in real time to gain on-demand operational insights."}),"\n",(0,t.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,t.jsx)(n.h3,{id:"download-and-install-synchronization-tools",children:"Download and install synchronization tools"}),"\n",(0,t.jsx)(n.p,{children:"To synchronize data from MySQL, you need to install the following tools: SMT, Flink, Flink CDC connector, and flink-starrocks-connector."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download and install Flink, and start the Flink cluster. You can also perform this step by following the instructions in ",(0,t.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/try-flink/local_installation/",children:"Flink official documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"a. Install Java 8 or Java 11 in your operating system before you run Flink. You can run the following command to check the installed Java version."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'    # View the Java version.\n    java -version\n    \n    # Java 8 is installed if the following output is returned.\n    java version "1.8.0_301"\n    Java(TM) SE Runtime Environment (build 1.8.0_301-b09)\n    Java HotSpot(TM) 64-Bit Server VM (build 25.301-b09, mixed mode)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["b. Download the ",(0,t.jsx)(n.a,{href:"https://flink.apache.org/downloads.html",children:"Flink installation package"})," and decompress it. We recommend that you use  Flink 1.14 or later. The minimum allowed version is Flink 1.11. This topic uses Flink 1.14.5."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"   # Download Flink.\n   wget https://archive.apache.org/dist/flink/flink-1.14.5/flink-1.14.5-bin-scala_2.11.tgz\n   # Decompress Flink.  \n   tar -xzf flink-1.14.5-bin-scala_2.11.tgz\n   # Go to the Flink directory.\n   cd flink-1.14.5\n"})}),"\n",(0,t.jsx)(n.p,{children:"c. Start the Flink cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"   # Start the Flink cluster.\n   ./bin/start-cluster.sh\n   \n   # The Flink cluster is started if the following output is returned.\n   Starting cluster.\n   Starting standalonesession daemon on host.\n   Starting taskexecutor daemon on host.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.a,{href:"https://github.com/ververica/flink-cdc-connectors/releases",children:"Flink CDC connector"}),". This topic uses MySQL as the data source and therefore, ",(0,t.jsx)(n.code,{children:"flink-sql-connector-mysql-cdc-x.x.x.jar"})," is downloaded. The connector version must match the ",(0,t.jsx)(n.a,{href:"https://github.com/ververica/flink-cdc-connectors/releases",children:"Flink"})," version. For detailed version mapping, see ",(0,t.jsx)(n.a,{href:"https://ververica.github.io/flink-cdc-connectors/release-2.2/content/about.html#supported-flink-versions",children:"Supported Flink Versions"}),". This topic uses Flink 1.14.5 and you can download ",(0,t.jsx)(n.code,{children:"flink-sql-connector-mysql-cdc-2.2.0.jar"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"wget https://repo1.maven.org/maven2/com/ververica/flink-sql-connector-mysql-cdc/2.1.1/flink-sql-connector-mysql-cdc-2.2.0.jar\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.a,{href:"https://search.maven.org/artifact/com.starrocks/flink-connector-starrocks",children:"flink-connector-starrocks"}),". The version must match the Flink version."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The flink-connector-starrocks package ",(0,t.jsx)(n.code,{children:"x.x.x_flink-y.yy _ z.zz.jar"})," contains three version numbers:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x.x.x"})," is the version number of flink-connector-starrocks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y.yy"})," is the supported Flink version."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"z.zz"})," is the Scala version supported by Flink. If the Flink version is 1.14.x or earlier, you must download a package that has the Scala version."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This topic uses Flink 1.14.5 and Scala 2.11. Therefore, you can download the following package: ",(0,t.jsx)(n.code,{children:"1.2.3_flink-14_2.11.jar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Move the JAR packages of Flink CDC connector (",(0,t.jsx)(n.code,{children:"flink-sql-connector-mysql-cdc-2.2.0.jar"}),") and flink-connector-starrocks (",(0,t.jsx)(n.code,{children:"1.2.3_flink-1.14_2.11.jar"}),") to the ",(0,t.jsx)(n.code,{children:"lib"})," directory of Flink."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"If a Flink cluster is already running in your system, you must stop the Flink cluster and restart it to load and validate the JAR packages."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"$ ./bin/stop-cluster.sh\n$ ./bin/start-cluster.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download and decompress the ",(0,t.jsx)(n.a,{href:"https://www.starrocks.io/download/community",children:"SMT package"})," and place it in the ",(0,t.jsx)(n.code,{children:"flink-1.14.5"})," directory. StarRocks provides SMT packages for Linux x86 and macos ARM64. You can choose one based on your operating system and CPU. You can also run the following command to obtain the SMT package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# for Linux x86\nwget https://releases.starrocks.io/resources/smt.tar.gz\n# for macOS ARM64\nwget https://releases.starrocks.io/resources/smt_darwin_arm64.tar.gz\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enable-mysql-binary-log",children:"Enable MySQL binary log"}),"\n",(0,t.jsx)(n.p,{children:"To synchronize data from MySQL in real time, the system needs to read data from MySQL binary log (binlog), parse the data, and then synchronize the data to StarRocks. Make sure that MySQL binary log is enabled."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the MySQL configuration file ",(0,t.jsx)(n.code,{children:"my.cnf"})," (default path: ",(0,t.jsx)(n.code,{children:"/etc/my.cnf"}),") to enable MySQL binary log."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# Enable MySQL Binlog.\nlog_bin = ON\n# Configure the save path for the Binlog.\nlog_bin =/var/lib/mysql/mysql-bin\n# Configure server_id.\n# If server_id is not configured for MySQL 5.7.3 or later, the MySQL service cannot be used. \nserver_id = 1\n# Set the Binlog format to ROW. \nbinlog_format = ROW\n# The base name of the Binlog file. An identifier is appended to identify each Binlog file.\nlog_bin_basename =/var/lib/mysql/mysql-bin\n# The index file of Binlog files, which manages the directory of all Binlog files.  \nlog_bin_index =/var/lib/mysql/mysql-bin.index\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run one of the following commands to restart MySQL for the modified configuration file to take effect."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# Use service to restart MySQL.\nservice mysqld restart\n# Use mysqld script to restart MySQL.\n/etc/init.d/mysqld restart\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Connect to MySQL and check whether MySQL binary log is enabled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"-- Connect to MySQL.\nmysql -h xxx.xx.xxx.xx -P 3306 -u root -pxxxxxx\n\n-- Check whether MySQL binary log is enabled.\nmysql> SHOW VARIABLES LIKE 'log_bin'; \n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| log_bin       | ON    |\n+---------------+-------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"synchronize-database--table-schema",children:"Synchronize database & table schema"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the SMT configuration file.\nGo to the SMT ",(0,t.jsx)(n.code,{children:"conf"})," directory and edit the configuration file ",(0,t.jsx)(n.code,{children:"config_prod.conf"}),", such as MySQL connection information, the matching rules of the database & table to be synchronized, and configuration information of flink-starrocks-connector."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"[db]\nhost = xxx.xx.xxx.xx\nport = 3306\nuser = user1\npassword = xxxxxx\n\n[other]\n# Number of BEs in StarRocks\nbe_num = 3\n# `decimal_v3` is supported since StarRocks-1.18.1.\nuse_decimal_v3 = true\n# File to save the converted DDL SQL\noutput_dir = ./result\n\n[table-rule.1]\n# Pattern to match databases for setting properties\ndatabase = ^demo.*$\n# Pattern to match tables for setting properties\ntable = ^.*$\n\n############################################\n### Flink sink configurations\n### DO NOT set `connector`, `table-name`, `database-name`. They are auto-generated.\n############################################\nflink.starrocks.jdbc-url=jdbc:mysql://<fe_host>:<fe_query_port>\nflink.starrocks.load-url= <fe_host>:<fe_http_port>\nflink.starrocks.username=user2\nflink.starrocks.password=xxxxxx\nflink.starrocks.sink.properties.format=csv\nflink.starrocks.sink.properties.column_separator=\\x01\nflink.starrocks.sink.properties.row_delimiter=\\x02\nflink.starrocks.sink.buffer-flush.interval-ms=15000\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[db]"}),": MySQL connection information."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"host"}),": IP address of the MySQL server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"}),": port number of the MySQL database, defaults to ",(0,t.jsx)(n.code,{children:"3306"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"user"}),": username for accessing the MySQL database"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"password"}),": password of the username"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[table-rule]"}),": database & table matching rules and the corresponding flink-connector-starrocks configuration."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Database"}),", ",(0,t.jsx)(n.code,{children:"table"}),": the names of the database & table in MySQL. Regular expressions are supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"flink.starrocks.*"}),": configuration information of flink-connector-starrocks. For more configurations and information, see ",(0,t.jsx)(n.a,{href:"/docs/2.5/loading/Flink-connector-starrocks",children:"flink-connector-starrocks"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you need to use different flink-connector-starrocks configurations for different tables. For example, if some tables are frequently updated and you need to accelerate data loading, see ",(0,t.jsx)(n.a,{href:"#use-different-flink-connector-starrocks-configurations-for-different-tables",children:"Use different flink-connector-starrocks configurations for different tables"}),". If you need to load multiple tables obtained from MySQL sharding into the same StarRocks table, see ",(0,t.jsx)(n.a,{href:"#synchronize-multiple-tables-after-mysql-sharding-to-one-table-in-starrocks",children:"Synchronize multiple tables after MySQL sharding to one table in StarRocks"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[other]"}),": other information"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"be_num"}),": The number of BEs in your StarRocks cluster (This parameter will be used for setting a reasonable number of tablets in subsequent StarRocks table creation)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"use_decimal_v3"}),": Whether to enable ",(0,t.jsx)(n.a,{href:"/docs/2.5/sql-reference/sql-statements/data-types/DECIMAL",children:"Decimal V3"}),". After Decimal V3 is enabled, MySQL decimal data will be converted into Decimal V3 data when data is synchronized to StarRocks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"output_dir"}),": The path to save the SQL files to be generated. The SQL files will be used to create a database & table in StarRocks and submit a Flink job to the Flink cluster. The default path is ",(0,t.jsx)(n.code,{children:"./result"})," and we recommend that you retain the default settings."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the SMT to read the database & table schema in MySQL and generate SQL files in the ",(0,t.jsx)(n.code,{children:"./result"})," directory based on the configuration file. The ",(0,t.jsx)(n.code,{children:"starrocks-create.all.sql"})," file is used to create a database & table in StarRocks and the ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"})," file is used to submit a Flink job to the Flink cluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# Run the SMT.\n./starrocks-migrate-tool\n\n# Go to the result directory and check the files in this directory.\ncd result\nls result\nflink-create.1.sql    smt.tar.gz              starrocks-create.all.sql\nflink-create.all.sql  starrocks-create.1.sql\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the following command to connect to StarRocks and execute the ",(0,t.jsx)(n.code,{children:"starrocks-create.all.sql"})," file to create a database and table in StarRocks. We recommend that you use the default table creation statement in the SQL file to create a table of the ",(0,t.jsx)(n.a,{href:"/docs/2.5/table_design/table_types/primary_key_table",children:"Primary Key table"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"You can also modify the table creation statement based on your business needs and create a table that does not use the Primary Key table. However, the DELETE operation in the source MySQL database cannot be synchronized to the non-primary key table. Exercise caution when you create such a table."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"mysql -h <fe_host> -P <fe_query_port> -u user2 -pxxxxxx < starrocks-create.all.sql\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the data needs to be processed by Flink before it is written to the destination StarRocks table, the table schema will be different between the source and destination tables. In this case, you must modify the table creation statement. In this example, the destination table requires only the ",(0,t.jsx)(n.code,{children:"product_id"})," and ",(0,t.jsx)(n.code,{children:"product_name"})," columns and real-time ranking of commodity sales. You can use the following table creation statement."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'CREATE DATABASE IF NOT EXISTS `demo`;\n\nCREATE TABLE IF NOT EXISTS `demo`.`orders` (\n`product_id` INT(11) NOT NULL COMMENT "",\n`product_name` STRING NOT NULL COMMENT "",\n`sales_cnt` BIGINT NOT NULL COMMENT ""\n) ENGINE=olap\nPRIMARY KEY(`product_id`)\nDISTRIBUTED BY HASH(`product_id`) BUCKETS 1\nPROPERTIES (\n"replication_num" = "3"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"synchronize-data",children:"Synchronize data"}),"\n",(0,t.jsx)(n.p,{children:"Run the Flink cluster and submit a Flink job to continuously synchronize full and incremental data from MySQL to StarRocks."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the Flink directory and run the following command to run the ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"})," file on your Flink SQL client."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"./bin/sql-client.sh -f flink-create.all.sql\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This SQL file defines dynamic tables ",(0,t.jsx)(n.code,{children:"source table"})," and ",(0,t.jsx)(n.code,{children:"sink table"}),", query statement ",(0,t.jsx)(n.code,{children:"INSERT INTO SELECT"}),", and specifies the connector, source database, and destination database. After this file is executed, a Flink job is submitted to the Flink cluster to start data synchronization."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure that the Flink cluster has been started. You can start the Flink cluster by running ",(0,t.jsx)(n.code,{children:"flink/bin/start-cluster.sh"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If your Flink version is earlier than 1.13, you may not be able to directly run the SQL file ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"}),". You need to execute SQL statements one by one in this file in the command line interface (CLI) of the SQL client. You also need to escape the ",(0,t.jsx)(n.code,{children:"\\"})," character."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"'sink.properties.column_separator' = '\\\\x01'\n'sink.properties.row_delimiter' = '\\\\x02'  \n"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Process data during synchronization"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["If you need to process data during synchronization, such as performing GROUP BY or JOIN on the data, you can modify the ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"})," file. The following example calculates real-time ranking of commodity sales by executing COUNT (*) and GROUP BY."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"    $ ./bin/sql-client.sh -f flink-create.all.sql\n    No default environment is specified.\n    Searching for '/home/disk1/flink-1.13.6/conf/sql-client-defaults.yaml'...not found.\n    [INFO] Executing SQL from file.\n\n    Flink SQL> CREATE DATABASE IF NOT EXISTS `default_catalog`.`demo`;\n    [INFO] Execute statement succeed.\n\n    -- Create a dynamic table `source table` based on the order table in MySQL.\n    Flink SQL> \n    CREATE TABLE IF NOT EXISTS `default_catalog`.`demo`.`orders_src` (`order_id` BIGINT NOT NULL,\n    `product_id` INT NULL,\n    `order_date` TIMESTAMP NOT NULL,\n    `customer_name` STRING NOT NULL,\n    `product_name` STRING NOT NULL,\n    `price` DECIMAL(10, 5) NULL,\n    PRIMARY KEY(`order_id`)\n    NOT ENFORCED\n    ) with ('connector' = 'mysql-cdc',\n    'hostname' = 'xxx.xx.xxx.xxx',\n    'port' = '3306',\n    'username' = 'root',\n    'password' = '',\n    'database-name' = 'demo',\n    'table-name' = 'orders'\n    );\n    [INFO] Execute statement succeed.\n\n    -- Create a dynamic table `sink table`.\n    Flink SQL> \n    CREATE TABLE IF NOT EXISTS `default_catalog`.`demo`.`orders_sink` (`product_id` INT NOT NULL,\n    `product_name` STRING NOT NULL,\n    `sales_cnt` BIGINT NOT NULL,\n    PRIMARY KEY(`product_id`)\n    NOT ENFORCED\n    ) with ('sink.max-retries' = '10',\n    'jdbc-url' = 'jdbc:mysql://<fe_host>:<fe_query_port>',\n    'password' = '',\n    'sink.properties.strip_outer_array' = 'true',\n    'sink.properties.format' = 'json',\n    'load-url' = '<fe_host>:<fe_http_port>',\n    'username' = 'root',\n    'sink.buffer-flush.interval-ms' = '15000',\n    'connector' = 'starrocks',\n    'database-name' = 'demo',\n    'table-name' = 'orders'\n    );\n    [INFO] Execute statement succeed.\n\n    -- Implement real-time ranking of commodity sales, where `sink table` is dynamically updated to reflect data changes in `source table`.\n    Flink SQL> \n    INSERT INTO `default_catalog`.`demo`.`orders_sink` select product_id,product_name, count(*) as cnt from `default_catalog`.`demo`.`orders_src` group by product_id,product_name;\n    [INFO] Submitting SQL update statement to the cluster...\n    [INFO] SQL update statement has been successfully submitted to the cluster:\n    Job ID: 5ae005c4b3425d8bb13fe660260a35da\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you only need to synchronize only a portion of the data, such as data whose payment time is later than December 21, 2021, you can use the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause in ",(0,t.jsx)(n.code,{children:"INSERT INTO SELECT"})," to set a filter condition, such as ",(0,t.jsx)(n.code,{children:"WHERE pay_dt > '2021-12-21'"}),". Data that does not meet this condition will not be synchronized to StarRocks."]}),"\n",(0,t.jsx)(n.p,{children:"If the following result is returned, the Flink job has been submitted for full and incremental synchronization."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: 5ae005c4b3425d8bb13fe660260a35da\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/try-flink/flink-operations-playground/#flink-webui",children:"Flink WebUI"})," or run the ",(0,t.jsx)(n.code,{children:"bin/flink list -running"})," command on  your Flink SQL client to view Flink jobs that are running in the Flink cluster and the job IDs."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Flink WebUI\n",(0,t.jsx)(n.img,{alt:"img",src:s(56172).Z+"",width:"1123",height:"808"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"bin/flink list -running"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"    $ bin/flink list -running\n    Waiting for response...\n    ------------------ Running/Restarting Jobs -------------------\n    13.10.2022 15:03:54 : 040a846f8b58e82eb99c8663424294d5 : insert-into_default_catalog.lily.example_tbl1_sink (RUNNING)\n    --------------------------------------------------------------\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["If the job is abnormal, you can perform troubleshooting by using Flink WebUI or by viewing the log file in the ",(0,t.jsx)(n.code,{children:"/log"})," directory of Flink 1.14.5."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h3,{id:"use-different-flink-connector-starrocks-configurations-for-different-tables",children:"Use different flink-connector-starrocks configurations for different tables"}),"\n",(0,t.jsxs)(n.p,{children:["If some tables in the data source are frequently updated and you want to accelerate the loading speed of flink-connector-starrocks, you must set a separate flink-connector-starrocks configuration for each table in the SMT configuration file ",(0,t.jsx)(n.code,{children:"config_prod.conf"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"[table-rule.1]\n# Pattern to match databases for setting properties\ndatabase = ^order.*$\n# Pattern to match tables for setting properties\ntable = ^.*$\n\n############################################\n### Flink sink configurations\n### DO NOT set `connector`, `table-name`, `database-name`. They are auto-generated\n############################################\nflink.starrocks.jdbc-url=jdbc:mysql://<fe_host>:<fe_query_port>\nflink.starrocks.load-url= <fe_host>:<fe_http_port>\nflink.starrocks.username=user2\nflink.starrocks.password=xxxxxx\nflink.starrocks.sink.properties.format=csv\nflink.starrocks.sink.properties.column_separator=\\x01\nflink.starrocks.sink.properties.row_delimiter=\\x02\nflink.starrocks.sink.buffer-flush.interval-ms=15000[table-rule.2]\n# Pattern to match databases for setting properties\ndatabase = ^order2.*$\n# Pattern to match tables for setting properties\ntable = ^.*$\n\n############################################\n### Flink sink configurations\n### DO NOT set `connector`, `table-name`, `database-name`. They are auto-generated\n############################################\nflink.starrocks.jdbc-url=jdbc:mysql://<fe_host>:<fe_query_port>\nflink.starrocks.load-url= <fe_host>:<fe_http_port>\nflink.starrocks.username=user2\nflink.starrocks.password=xxxxxx\nflink.starrocks.sink.properties.format=csv\nflink.starrocks.sink.properties.column_separator=\\x01\nflink.starrocks.sink.properties.row_delimiter=\\x02\nflink.starrocks.sink.buffer-flush.interval-ms=10000\n"})}),"\n",(0,t.jsx)(n.h3,{id:"synchronize-multiple-tables-after-mysql-sharding-to-one-table-in-starrocks",children:"Synchronize multiple tables after MySQL sharding to one table in StarRocks"}),"\n",(0,t.jsxs)(n.p,{children:["After sharding is performed, data in one MySQL table may be split into multiple tables or even distributed to multiple databases. All the tables have the same schema. In this case, you can set ",(0,t.jsx)(n.code,{children:"[table-rule]"})," to synchronize these tables to one StarRocks table. For example, MySQL has two databases ",(0,t.jsx)(n.code,{children:"edu_db_1"})," and ",(0,t.jsx)(n.code,{children:"edu_db_2"}),", each of which has two tables ",(0,t.jsx)(n.code,{children:"course_1 and course_2"}),", and the schema of all tables is the same. You can use the following ",(0,t.jsx)(n.code,{children:"[table-rule]"})," configuration to synchronize all the tables to one StarRocks table."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the StarRocks table defaults to ",(0,t.jsx)(n.code,{children:"course__auto_shard"}),". If you need to use a different name, you can modify it in the SQL files ",(0,t.jsx)(n.code,{children:"starrocks-create.all.sql"})," and ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"[table-rule.1]\n# Pattern to match databases for setting properties\ndatabase = ^edu_db_[0-9]*$\n# Pattern to match tables for setting properties\ntable = ^course_[0-9]*$\n\n############################################\n### Flink sink configurations\n### DO NOT set `connector`, `table-name`, `database-name`. They are auto-generated\n############################################\nflink.starrocks.jdbc-url = jdbc: mysql://xxx.xxx.x.x:xxxx\nflink.starrocks.load-url = xxx.xxx.x.x:xxxx\nflink.starrocks.username = user2\nflink.starrocks.password = xxxxxx\nflink.starrocks.sink.properties.format=csv\nflink.starrocks.sink.properties.column_separator =\\x01\nflink.starrocks.sink.properties.row_delimiter =\\x02\nflink.starrocks.sink.buffer-flush.interval-ms = 5000\n"})}),"\n",(0,t.jsx)(n.h3,{id:"import-data-in-json-format",children:"Import data in JSON format"}),"\n",(0,t.jsxs)(n.p,{children:["Data in the preceding example is imported in CSV format. If you are unable to choose a suitable delimiter, you need to replace the following parameters of ",(0,t.jsx)(n.code,{children:"flink.starrocks.*"})," in ",(0,t.jsx)(n.code,{children:"[table-rule]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"flink.starrocks.sink.properties.format=csv\nflink.starrocks.sink.properties.column_separator =\\x01\nflink.starrocks.sink.properties.row_delimiter =\\x02\n"})}),"\n",(0,t.jsx)(n.p,{children:"Data is imported in JSON format after the following parameters are passed in."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"flink.starrocks.sink.properties.format=json\nflink.starrocks.sink.properties.strip_outer_array=true\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"This method slightly slows down the loading speed."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"execute-multiple-insert-into-statements-as-one-flink-job",children:"Execute multiple INSERT INTO statements as one Flink job"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sqlclient/#execute-a-set-of-sql-statements",children:"STATEMENT SET"})," syntax in the ",(0,t.jsx)(n.code,{children:"flink-create.all.sql"})," file to execute multiple INSERT INTO statements as one Flink job, which prevents multiple statements from taking up too many Flink job resources and improves the efficiency of executing multiple queries."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"Flink supports the STATEMENT SET syntax from 1.13 onwards."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"result/flink-create.all.sql"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the SQL statements in the file. Move all the INSERT INTO statements to the end of the file. Place ",(0,t.jsx)(n.code,{children:"EXECUTE STATEMENT SET BEGIN"})," before the first INSERT INTO statement and place ",(0,t.jsx)(n.code,{children:"END;"})," after the last INSERT INTO statement."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsx)(n.p,{children:"The positions of CREATE DATABASE and CREATE TABLE remain unchanged."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE DATABASE IF NOT EXISTS db;\nCREATE TABLE IF NOT EXISTS db.a1;\nCREATE TABLE IF NOT EXISTS db.b1;\nCREATE TABLE IF NOT EXISTS db.a2;\nCREATE TABLE IF NOT EXISTS db.b2;\nEXECUTE STATEMENT SET \nBEGIN-- one or more INSERT INTO statements\nINSERT INTO db.a1 SELECT * FROM db.b1;\nINSERT INTO db.a2 SELECT * FROM db.b2;\nEND;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},29282:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/4.9.2-bde39f3aa7c56cfb1c29cdeb7de03e0c.png"},56172:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/4.9.3-9e843337839f2cf335718301cd414239.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:o},n)}}}]);