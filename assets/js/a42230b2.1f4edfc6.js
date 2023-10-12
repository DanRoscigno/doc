"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59730],{78737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const a={displayed_sidebar:"documentation"},r="Manage audit logs within StarRocks via Audit Loader",o={id:"administration/audit_loader",title:"Manage audit logs within StarRocks via Audit Loader",description:"This topic describes how to manage StarRocks audit logs within a table via the plugin - Audit Loader.",source:"@site/versioned_docs/version-3.0/administration/audit_loader.md",sourceDirName:"administration",slug:"/administration/audit_loader",permalink:"/doc/docs/3.0/administration/audit_loader",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/audit_loader.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Monitor and Alerting",permalink:"/doc/docs/3.0/administration/Monitor_and_Alert"},next:{title:"Enable FQDN access",permalink:"/doc/docs/3.0/administration/enable_fqdn"}},d={},l=[{value:"Create a table to store audit logs",id:"create-a-table-to-store-audit-logs",level:2},{value:"Download and configure Audit Loader",id:"download-and-configure-audit-loader",level:2},{value:"Install Audit Loader",id:"install-audit-loader",level:2},{value:"Verify the installation and query audit logs",id:"verify-the-installation-and-query-audit-logs",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"manage-audit-logs-within-starrocks-via-audit-loader",children:"Manage audit logs within StarRocks via Audit Loader"}),"\n",(0,i.jsx)(n.p,{children:"This topic describes how to manage StarRocks audit logs within a table via the plugin - Audit Loader."}),"\n",(0,i.jsxs)(n.p,{children:["StarRocks stores its audit logs in the local file ",(0,i.jsx)(n.strong,{children:"fe/log/fe.audit.log"})," rather than an internal database. The plugin Audit Loader allows you to manage audit logs directly within your cluster. Audit Loader reads logs from the file, and loads them into StarRocks via HTTP PUT."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-table-to-store-audit-logs",children:"Create a table to store audit logs"}),"\n",(0,i.jsxs)(n.p,{children:["Create a database and a table in your StarRocks cluster to store its audit logs. See ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})," and ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})," for detailed instructions."]}),"\n",(0,i.jsx)(n.p,{children:"Because the fields of audit logs vary among different StarRocks versions, you must choose among the following examples to create a table that is compatible with your StarRocks."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,i.jsx)(n.p,{children:"DO NOT change the table schema in the examples, or the log loading will fail."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StarRocks v2.4, v2.5, v3.0, v3.1, and later minor versions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\n\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__ (\n  `queryId`        VARCHAR(48)            COMMENT "Unique query ID",\n  `timestamp`      DATETIME     NOT NULL  COMMENT "Query start time",\n  `queryType`      VARCHAR(12)            COMMENT "Query type (query, slow_query)",\n  `clientIp`       VARCHAR(32)            COMMENT "Client IP address",\n  `user`           VARCHAR(64)            COMMENT "User who initiates the query",\n  `authorizedUser` VARCHAR(64)            COMMENT "user_identity",\n  `resourceGroup`  VARCHAR(64)            COMMENT "Resource group name",\n  `catalog`        VARCHAR(32)            COMMENT "Catalog name",\n  `db`             VARCHAR(96)            COMMENT "Database that the query scans",\n  `state`          VARCHAR(8)             COMMENT "Query state (EOF, ERR, OK)",\n  `errorCode`      VARCHAR(96)            COMMENT "Error code",\n  `queryTime`      BIGINT                 COMMENT "Query latency in milliseconds",\n  `scanBytes`      BIGINT                 COMMENT "Size of the scanned data in bytes",\n  `scanRows`       BIGINT                 COMMENT "Row count of the scanned data",\n  `returnRows`     BIGINT                 COMMENT "Row count of the result",\n  `cpuCostNs`      BIGINT                 COMMENT "CPU resources consumption time for query in nanoseconds",\n  `memCostBytes`   BIGINT                 COMMENT "Memory cost for query in bytes",\n  `stmtId`         INT                    COMMENT "Incremental SQL statement ID",\n  `isQuery`        TINYINT                COMMENT "If the SQL is a query (0 and 1)",\n  `feIp`           VARCHAR(32)            COMMENT "IP address of FE that executes the SQL",\n  `stmt`           STRING                 COMMENT "SQL statement",\n  `digest`         VARCHAR(32)            COMMENT "SQL fingerprint",\n  `planCpuCosts`   DOUBLE                 COMMENT "CPU resources consumption time for planning in nanoseconds",\n  `planMemCosts`   DOUBLE                 COMMENT "Memory cost for planning in bytes"\n) ENGINE = OLAP\nDUPLICATE KEY (`queryId`, `timestamp`, `queryType`)\nCOMMENT "Audit log table"\nPARTITION BY RANGE (`timestamp`) ()\nDISTRIBUTED BY HASH (`queryId`) BUCKETS 3 \nPROPERTIES (\n  "dynamic_partition.time_unit" = "DAY",\n  "dynamic_partition.start" = "-30",\n  "dynamic_partition.end" = "3",\n  "dynamic_partition.prefix" = "p",\n  "dynamic_partition.buckets" = "3",\n  "dynamic_partition.enable" = "true",\n  "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StarRocks v2.3.0 and later minor versions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__ (\n  `queryId`        VARCHAR(48)            COMMENT "Unique query ID",\n  `timestamp`      DATETIME     NOT NULL  COMMENT "Query start time",\n  `clientIp`       VARCHAR(32)            COMMENT "Client IP address",\n  `user`           VARCHAR(64)            COMMENT "User who initiates the query",\n  `resourceGroup`  VARCHAR(64)            COMMENT "Resource group name",\n  `db`             VARCHAR(96)            COMMENT "Database that the query scans",\n  `state`          VARCHAR(8)             COMMENT "Query state (EOF, ERR, OK)",\n  `errorCode`      VARCHAR(96)            COMMENT "Error code",\n  `queryTime`      BIGINT                 COMMENT "Query latency in milliseconds",\n  `scanBytes`      BIGINT                 COMMENT "Size of the scanned data in bytes",\n  `scanRows`       BIGINT                 COMMENT "Row count of the scanned data",\n  `returnRows`     BIGINT                 COMMENT "Row count of the result",\n  `cpuCostNs`      BIGINT                 COMMENT "CPU resources consumption time for query in nanoseconds",\n  `memCostBytes`   BIGINT                 COMMENT "Memory cost for query in bytes",\n  `stmtId`         INT                    COMMENT "Incremental SQL statement ID",\n  `isQuery`        TINYINT                COMMENT "If the SQL is a query (0 and 1)",\n  `feIp`           VARCHAR(32)            COMMENT "IP address of FE that executes the SQL",\n  `stmt`           STRING                 COMMENT "SQL statement",\n  `digest`         VARCHAR(32)            COMMENT "SQL fingerprint",\n  `planCpuCosts`   DOUBLE                 COMMENT "CPU resources consumption time for planning in nanoseconds",\n  `planMemCosts`   DOUBLE                 COMMENT "Memory cost for planning in bytes"\n) ENGINE = OLAP\nDUPLICATE KEY (`queryId`, `timestamp`, `clientIp`)\nCOMMENT "Audit log table"\nPARTITION BY RANGE (`timestamp`) ()\nDISTRIBUTED BY HASH (`queryId`) BUCKETS 3 \nPROPERTIES (\n  "dynamic_partition.time_unit" = "DAY",\n  "dynamic_partition.start" = "-30",\n  "dynamic_partition.end" = "3",\n  "dynamic_partition.prefix" = "p",\n  "dynamic_partition.enable" = "true",\n  "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StarRocks v2.2.1 and later minor versions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id         VARCHAR(48)            COMMENT "Unique query ID",\n    time             DATETIME     NOT NULL  COMMENT "Query start time",\n    client_ip        VARCHAR(32)            COMMENT "Client IP address",\n    user             VARCHAR(64)            COMMENT "User who initiates the query",\n    db               VARCHAR(96)            COMMENT "Database that the query scans",\n    state            VARCHAR(8)             COMMENT "Query state (EOF, ERR, OK)",\n    query_time       BIGINT                 COMMENT "Query latency in milliseconds",\n    scan_bytes       BIGINT                 COMMENT "Size of the scanned data in bytes",\n    scan_rows        BIGINT                 COMMENT "Row count of the scanned data",\n    return_rows      BIGINT                 COMMENT "Row count of the result",\n    cpu_cost_ns      BIGINT                 COMMENT "CPU resources consumption time for query in nanoseconds",\n    mem_cost_bytes   BIGINT                 COMMENT "Memory cost for query in bytes",\n    stmt_id          INT                    COMMENT "Incremental SQL statement ID",\n    is_query         TINYINT                COMMENT "If the SQL is a query (0 and 1)",\n    frontend_ip      VARCHAR(32)            COMMENT "IP address of FE that executes the SQL",\n    stmt             STRING                 COMMENT "SQL statement",\n    digest           VARCHAR(32)            COMMENT "SQL fingerprint"\n) engine=OLAP\nduplicate key(query_id, time, client_ip)\npartition by range(time) ()\ndistributed by hash(query_id) BUCKETS 3 \nproperties(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StarRocks v2.2.0, v2.1.0 and later minor versions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id        VARCHAR(48)           COMMENT "Unique query ID",\n    time            DATETIME    NOT NULL  COMMENT "Query start time",\n    client_ip       VARCHAR(32)           COMMENT "Client IP address",\n    user            VARCHAR(64)           COMMENT "User who initiates the query",\n    db              VARCHAR(96)           COMMENT "Database that the query scans",\n    state           VARCHAR(8)            COMMENT "Query state (EOFE, RR, OK)",\n    query_time      BIGINT                COMMENT "Query latency in milliseconds",\n    scan_bytes      BIGINT                COMMENT "Size of the scanned data in bytes",\n    scan_rows       BIGINT                COMMENT "Row count of the scanned data",\n    return_rows     BIGINT                COMMENT "Row count of the result",\n    stmt_id         INT                   COMMENT "Incremental SQL statement ID",\n    is_query        TINYINT               COMMENT "If the SQL is a query (0 and 1)",\n    frontend_ip     VARCHAR(32)           COMMENT "IP address of FE that executes the SQL",\n    stmt            STRING                COMMENT "SQL statement",\n    digest          VARCHAR(32)           COMMENT "SQL fingerprint"\n) engine=OLAP\nDUPLICATE KEY(query_id, time, client_ip)\nPARTITION BY RANGE(time) ()\nDISTRIBUTED BY HASH(query_id) BUCKETS 3 \nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StarRocks v2.0.0 and later minor versions, StarRocks v1.19.0 and later minor versions:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE starrocks_audit_db__;\nCREATE TABLE starrocks_audit_db__.starrocks_audit_tbl__\n(\n    query_id        VARCHAR(48)           COMMENT "Unique query ID",\n    time            DATETIME    NOT NULL  COMMENT "Query start time",\n    client_ip       VARCHAR(32)           COMMENT "Client IP address",\n    user            VARCHAR(64)           COMMENT "User who initiates the query",\n    db              VARCHAR(96)           COMMENT "Database that the query scans",\n    state           VARCHAR(8)            COMMENT "Query state (EOF, ERR, OK)",\n    query_time      BIGINT                COMMENT "Query latency in milliseconds",\n    scan_bytes      BIGINT                COMMENT "Size of the scanned data in bytes",\n    scan_rows       BIGINT                COMMENT "Row count of the scanned data",\n    return_rows     BIGINT                COMMENT "Row count of the result",\n    stmt_id         INT                   COMMENT "Incremental SQL statement ID",\n    is_query        TINYINT               COMMENT "If the SQL is a query (0 and 1)",\n    frontend_ip     VARCHAR(32)           COMMENT "IP address of FE that executes the SQL",\n    stmt            STRING                COMMENT "SQL statement"\n) engine=OLAP\nDUPLICATE KEY(query_id, time, client_ip)\nPARTITION BY RANGE(time) ()\nDISTRIBUTED BY HASH(query_id) BUCKETS 3 \nPROPERTIES(\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-30",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.enable" = "true",\n    "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"starrocks_audit_tbl__"})," is created with dynamic partitions. By default, the first dynamic partition is created 10 minutes after the table is created. Audit logs can then be loaded into the table. You can check the partitions in the table using the following statement:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SHOW PARTITIONS FROM starrocks_audit_db__.starrocks_audit_tbl__;\n"})}),"\n",(0,i.jsx)(n.p,{children:"After a partition is created, you can move on to the next step."}),"\n",(0,i.jsx)(n.h2,{id:"download-and-configure-audit-loader",children:"Download and configure Audit Loader"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://releases.starrocks.io/resources/AuditLoader.zip",children:"Download"})," the Audit Loader installation package. The package contains multiple directories for different StarRocks versions. You must navigate to the corresponding directory and install the package that is compatible with your StarRocks."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.4"}),": StarRocks v2.4.0 and later minor versions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.3"}),": StarRocks v2.3.0 and later minor versions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.2.1+"}),": StarRocks v2.2.1 and later minor versions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2.1-2.2.0"}),": StarRocks v2.2.0, StarRocks v2.1.0 and later minor versions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1.18.2-2.0"}),": StarRocks v2.0.0 and later minor versions, StarRocks v1.19.0 and later minor versions"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unzip the installation package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"unzip auditloader.zip\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following files are inflated:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"auditloader.jar"}),": the JAR file of Audit Loader."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"plugin.properties"}),": the properties file of Audit Loader."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"plugin.conf"}),": the configuration file of Audit Loader."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.strong,{children:"plugin.conf"})," to configure Audit Loader. You must configure the following items to make sure Audit Loader can work properly:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"frontend_host_port"}),": FE IP address and HTTP port, in the format ",(0,i.jsx)(n.code,{children:"<fe_ip>:<fe_http_port>"}),". The default value is ",(0,i.jsx)(n.code,{children:"127.0.0.1:8030"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"database"}),": name of the database you created to host audit logs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"table"}),": name of the table you created to host audit logs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"user"}),": your cluster username. You MUST have the privilege to load data (LOAD_PRIV) into the table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"password"}),": your user password."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Zip the files back into a package."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"zip -q -m -r auditloader.zip auditloader.jar plugin.conf plugin.properties\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dispatch the package to all machines that host FE nodes. Make sure all packages are stored in an identical path. Otherwise, the installation fails. Remember to copy the absolute path to the package after you dispatched the package."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-audit-loader",children:"Install Audit Loader"}),"\n",(0,i.jsx)(n.p,{children:"Execute the following statement along with the path you copied to install Audit Loader as a plugin in StarRocks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'INSTALL PLUGIN FROM "<absolute_path_to_package>";\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",children:"INSTALL PLUGIN"})," for detailed instructions."]}),"\n",(0,i.jsx)(n.h2,{id:"verify-the-installation-and-query-audit-logs",children:"Verify the installation and query audit logs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can check if the installation is successful via ",(0,i.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PLUGINS",children:"SHOW PLUGINS"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, the ",(0,i.jsx)(n.code,{children:"Status"})," of the plugin ",(0,i.jsx)(n.code,{children:"AuditLoader"})," is ",(0,i.jsx)(n.code,{children:"INSTALLED"}),",  meaning installation is successful."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PLUGINS\\G\n*************************** 1. row ***************************\n    Name: __builtin_AuditLogBuilder\n    Type: AUDIT\nDescription: builtin audit logger\n    Version: 0.12.0\nJavaVersion: 1.8.31\nClassName: com.starrocks.qe.AuditLogBuilder\n    SoName: NULL\n    Sources: Builtin\n    Status: INSTALLED\nProperties: {}\n*************************** 2. row ***************************\n    Name: AuditLoader\n    Type: AUDIT\nDescription: load audit log to olap load, and user can view the statistic of queries\n    Version: 1.0.1\nJavaVersion: 1.8.0\nClassName: com.starrocks.plugin.audit.AuditLoaderPlugin\n    SoName: NULL\n    Sources: /x/xx/xxx/xxxxx/auditloader.zip\n    Status: INSTALLED\nProperties: {}\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Execute some random SQLs to generate audit logs, and wait for 60 seconds (or the time you have specified in the item ",(0,i.jsx)(n.code,{children:"max_batch_interval_sec"})," when you configure Audit Loader) to allow Audit Loader to load audit logs into StarRocks."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the audit logs by querying the table."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following example shows when audit logs are loaded into the table successfully:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"mysql> SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__\\G\n*************************** 1. row ***************************\n    queryId: 082ddf02-6492-11ed-a071-6ae6b1db20eb\n    timestamp: 2022-11-15 11:03:08\n    clientIp: xxx.xx.xxx.xx:33544\n        user: root\nresourceGroup: default_wg\n            db: \n        state: EOF\n    errorCode: \n    queryTime: 8\n    scanBytes: 0\n    scanRows: 0\n    returnRows: 0\n    cpuCostNs: 62380\nmemCostBytes: 14504\n        stmtId: 33\n    isQuery: 1\n        feIp: xxx.xx.xxx.xx\n        stmt: SELECT * FROM starrocks_audit_db__.starrocks_audit_tbl__\n        digest: \nplanCpuCosts: 21\nplanMemCosts: 0\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["If no audit logs are loaded to the table after the dynamic partition is created and the plugin is installed, you can check whether ",(0,i.jsx)(n.strong,{children:"plugin.conf"})," is configured properly or not. To modify it, you must first uninstall the plugin:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:"UNINSTALL PLUGIN AuditLoader;\n"})}),"\n",(0,i.jsx)(n.p,{children:"After all configurations are set correctly, you can follow the above steps to install Audit Loader again."})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:o},n)}}}]);