"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57977],{5549:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=s(85893),i=s(11151);const t={displayed_sidebar:"English"},o="Monitor and manage big queries",a={id:"administration/monitor_manage_big_queries",title:"Monitor and manage big queries",description:"This topic describes how to monitor and manage big queries in your StarRocks cluster.",source:"@site/versioned_docs/version-3.0/administration/monitor_manage_big_queries.md",sourceDirName:"administration",slug:"/administration/monitor_manage_big_queries",permalink:"/docs/3.0/administration/monitor_manage_big_queries",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/monitor_manage_big_queries.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Information Schema",permalink:"/docs/3.0/administration/information_schema"},next:{title:"Privilege FAQ",permalink:"/docs/3.0/administration/privilege_faq"}},c={},l=[{value:"Set precautions against big queries",id:"set-precautions-against-big-queries",level:2},{value:"Filter out big queries via resource groups",id:"filter-out-big-queries-via-resource-groups",level:3},{value:"Ease system overload via query queues",id:"ease-system-overload-via-query-queues",level:3},{value:"Monitor big queries in real-time",id:"monitor-big-queries-in-real-time",level:2},{value:"Monitor via MySQL client",id:"monitor-via-mysql-client",level:3},{value:"Monitor via FE console",id:"monitor-via-fe-console",level:3},{value:"Manually terminate big queries",id:"manually-terminate-big-queries",level:3},{value:"Analyze Big Query Logs",id:"analyze-big-query-logs",level:2},{value:"Fine-tune precautions",id:"fine-tune-precautions",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code",ul:"ul",img:"img",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"monitor-and-manage-big-queries",children:"Monitor and manage big queries"}),"\n",(0,r.jsx)(n.p,{children:"This topic describes how to monitor and manage big queries in your StarRocks cluster."}),"\n",(0,r.jsx)(n.p,{children:"Big queries include queries that scan too many rows or occupy too many CPU and memory resources. They can easily exhaust cluster resources and cause system overload if no restrictions are imposed on them. To tackle this issue, StarRocks provides a series of measures to monitor and manage big queries, preventing queries from monopolizing cluster resources."}),"\n",(0,r.jsx)(n.p,{children:"The overall idea of handling big queries in StarRocks is as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Set automatic precautions against big queries with resource groups and query queues."}),"\n",(0,r.jsx)(n.li,{children:"Monitor big queries in real-time, and terminate those who bypass the precautions."}),"\n",(0,r.jsx)(n.li,{children:"Analyze audit logs and Big Query Logs to study the patterns of big queries, and fine-tune the precaution mechanisms you set earlier."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This feature is supported from v3.0."}),"\n",(0,r.jsx)(n.h2,{id:"set-precautions-against-big-queries",children:"Set precautions against big queries"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks provides two precautionary instruments for dealing with big queries - resource groups and query queues. You can use resource groups to stop big queries from being executed. Query queues, on the other hand, can help you queue the incoming queries when the concurrency threshold or resource limit is reached, preventing system overload."}),"\n",(0,r.jsx)(n.h3,{id:"filter-out-big-queries-via-resource-groups",children:"Filter out big queries via resource groups"}),"\n",(0,r.jsxs)(n.p,{children:["Resource groups can automatically identify and terminate big queries. When creating a resource group, you can specify the upper limit of CPU time, memory usage, or scan row count that a query is entitled to. Among all queries that hit the resource group, any queries that require more resources are rejected and returned with an error. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/3.0/administration/resource_group",children:"Resource Isolation"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Before creating resource groups, you must execute the following statement to enable the resource group feature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_resource_group = true;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The following example creates a resource group ",(0,r.jsx)(n.code,{children:"bigQuery"})," that limits the CPU time upper limit to ",(0,r.jsx)(n.code,{children:"100"})," seconds, scan row count upper limit to ",(0,r.jsx)(n.code,{children:"100000"}),", and memory usage upper limit to ",(0,r.jsx)(n.code,{children:"1073741824"})," bytes (1 GB):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP bigQuery\nTO \n    (db='sr_hub')\nWITH (\n    'cpu_core_limit' = '10',\n    'mem_limit' = '20%',\n    'big_query_cpu_second_limit' = '100',\n    'big_query_scan_rows_limit' = '100000',\n    'big_query_mem_limit' = '1073741824'\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the required resources of a query exceed any of the limits, the query will not be executed and is returned with an error. The following example shows the error message returned when a query demands too many scan rows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"ERROR 1064 (HY000): exceed big query scan_rows limit: current is 4 but limit is 1\n"})}),"\n",(0,r.jsx)(n.p,{children:"If it is your first time setting up resource groups, we recommend you set relatively higher limits so that they will not hinder regular queries. You can fine-tune these limits after you have a better knowledge of the big query patterns."}),"\n",(0,r.jsx)(n.h3,{id:"ease-system-overload-via-query-queues",children:"Ease system overload via query queues"}),"\n",(0,r.jsxs)(n.p,{children:["Query queues are designed to cushion the system overload deterioration when the cluster resource occupation exceeds the prespecified thresholds. You can set thresholds for maximum concurrency, memory usage, and CPU usage. StarRocks automatically queues the incoming queries when any of these thresholds is reached. Pending queries either wait in the queue for execution or get cancelled when the prespecified resource threshold is reached. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/3.0/administration/query_queues",children:"Query Queues"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Execute the following statements to enable query queues for the SELECT queries:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_query_queue_select = true;\n"})}),"\n",(0,r.jsx)(n.p,{children:"After the query queue feature is enabled, you can then define the rules to trigger query queues."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the concurrency threshold for triggering the query queue."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the concurrency threshold to ",(0,r.jsx)(n.code,{children:"100"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_concurrency_limit = 100;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the memory usage ratio threshold for triggering the query queue."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the memory usage ratio threshold to ",(0,r.jsx)(n.code,{children:"0.9"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_mem_used_pct_limit = 0.9;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the CPU usage ratio threshold for triggering the query queue."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the CPU usage permille (CPU usage * 1000) threshold to ",(0,r.jsx)(n.code,{children:"800"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_cpu_used_permille_limit = 800;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can also decide how to deal with these queued queries by configuring the maximum queue length and the timeout for each pending query in the queue."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the maximum query queue length. When this threshold is reached, incoming queries are rejected."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the query queue length to ",(0,r.jsx)(n.code,{children:"100"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_max_queued_queries = 100;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the maximum timeout of a pending query in a queue. When this threshold is reached, the corresponding query is rejected."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the maximum timeout to ",(0,r.jsx)(n.code,{children:"480"})," seconds:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL query_queue_pending_timeout_second = 480;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can check whether a query is pending using ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",children:"SHOW PROCESSLIST"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PROCESSLIST;\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info              | IsPending |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n|    2 | root | xxx.xx.xxx.xx:xxxxx |       | Query   | 2022-11-24 18:08:29 |    0 | OK    | SHOW PROCESSLIST  | false     |\n+------+------+---------------------+-------+---------+---------------------+------+-------+-------------------+-----------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"IsPending"})," is ",(0,r.jsx)(n.code,{children:"true"}),", the corresponding query is pending in the query queue."]}),"\n",(0,r.jsx)(n.h2,{id:"monitor-big-queries-in-real-time",children:"Monitor big queries in real-time"}),"\n",(0,r.jsx)(n.p,{children:"From v3.0 onwards, StarRocks supports viewing the queries that are currently processed in the cluster and the resources they occupy. This allows you to monitor the cluster in case any big queries bypass the precautions and cause unexpected system overload."}),"\n",(0,r.jsx)(n.h3,{id:"monitor-via-mysql-client",children:"Monitor via MySQL client"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You can view the queries that are currently processed (",(0,r.jsx)(n.code,{children:"current_queries"}),") using ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/current_queries';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks returns the query ID (",(0,r.jsx)(n.code,{children:"QueryId"}),"), connection ID (",(0,r.jsx)(n.code,{children:"ConnectionId"}),"), and the resource consumption of each query, including the scanned data size (",(0,r.jsx)(n.code,{children:"ScanBytes"}),"), processed row count (",(0,r.jsx)(n.code,{children:"ProcessRows"}),"), CPU time (",(0,r.jsx)(n.code,{children:"CPUCostSeconds"}),"), memory usage (",(0,r.jsx)(n.code,{children:"MemoryUsageBytes"}),"), and execution time (",(0,r.jsx)(n.code,{children:"ExecTime"}),")."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW PROC '/current_queries';\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n| QueryId                              | ConnectionId | Database   | User | ScanBytes | ProcessRows    | CPUCostSeconds | MemoryUsageBytes | ExecTime |\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n| 7c56495f-ae8b-11ed-8ebf-00163e00accc | 4            | tpcds_100g | root | 37.88 MB  | 1075769 Rows   | 11.13 Seconds  | 146.70 MB        | 3804     |\n| 7d543160-ae8b-11ed-8ebf-00163e00accc | 6            | tpcds_100g | root | 13.02 GB  | 487873176 Rows | 81.23 Seconds  | 6.37 GB          | 2090     |\n+--------------------------------------+--------------+------------+------+-----------+----------------+----------------+------------------+----------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You can further examine a query's resource consumption on each BE node by specifying the query ID."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/current_queries/<QueryId>/hosts';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks returns the query's scanned data size (",(0,r.jsx)(n.code,{children:"ScanBytes"}),"), scanned row count (",(0,r.jsx)(n.code,{children:"ScanRows"}),"), CPU time (",(0,r.jsx)(n.code,{children:"CPUCostSeconds"}),"), and memory usage (",(0,r.jsx)(n.code,{children:"MemUsageBytes"}),") on each BE node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> show proc '/current_queries/7c56495f-ae8b-11ed-8ebf-00163e00accc/hosts';\n+--------------------+-----------+-------------+----------------+---------------+\n| Host               | ScanBytes | ScanRows    | CpuCostSeconds | MemUsageBytes |\n+--------------------+-----------+-------------+----------------+---------------+\n| 172.26.34.185:8060 | 11.61 MB  | 356252 Rows | 52.93 Seconds  | 51.14 MB      |\n| 172.26.34.186:8060 | 14.66 MB  | 362646 Rows | 52.89 Seconds  | 50.44 MB      |\n| 172.26.34.187:8060 | 11.60 MB  | 356871 Rows | 52.91 Seconds  | 48.95 MB      |\n+--------------------+-----------+-------------+----------------+---------------+\n3 rows in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"monitor-via-fe-console",children:"Monitor via FE console"}),"\n",(0,r.jsx)(n.p,{children:"In addition to MySQL client, you can use the FE console for visualized, interactive monitoring."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Navigate to the FE console in your browser using the following URL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"http://<fe_IP>:<fe_http_port>/system?path=//current_queries\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"FE console 1",src:s(47147).Z+"",width:"971",height:"259"})}),"\n",(0,r.jsxs)(n.p,{children:["You can view the queries that are currently processed and their resource consumption on the ",(0,r.jsx)(n.strong,{children:"System Info"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"QueryID"})," of the query."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"FE console 2",src:s(2586).Z+"",width:"957",height:"252"})}),"\n",(0,r.jsx)(n.p,{children:"You can view the detailed, node-specific resource consumption information on the page that appears."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"manually-terminate-big-queries",children:"Manually terminate big queries"}),"\n",(0,r.jsxs)(n.p,{children:["If any big queries bypass the precautions you have set and threaten the system availability, you can terminate them manually using the corresponding connection ID in the ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Administration/KILL",children:"KILL"})," statement:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"KILL QUERY <ConnectionId>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"analyze-big-query-logs",children:"Analyze Big Query Logs"}),"\n",(0,r.jsxs)(n.p,{children:["From v3.0 onwards, StarRocks supports Big Query Logs, which are stored in the file ",(0,r.jsx)(n.strong,{children:"fe/log/fe.big_query.log"}),". Compared to the StarRocks audit logs, Big Query Logs print additional three fields:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bigQueryLogCPUSecondThreshold"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bigQueryLogScanBytesThreshold"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"bigQueryLogScanRowsThreshold"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These three fields correspond to the resource consumption thresholds you defined to determine whether a query is a big query."}),"\n",(0,r.jsx)(n.p,{children:"To enable Big Query Logs, execute the following statement:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_big_query_log = true;\n"})}),"\n",(0,r.jsx)(n.p,{children:"After Big Query Logs are enabled, you can then define the rules to trigger Big Query Logs."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the CPU time threshold for triggering Big Query Logs."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the CPU time threshold to ",(0,r.jsx)(n.code,{children:"600"})," seconds:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_cpu_second_threshold = 600;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the scan data size threshold for triggering Big Query Logs."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the scan data size threshold to ",(0,r.jsx)(n.code,{children:"10737418240"})," bytes (10 GB):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_scan_bytes_threshold = 10737418240;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify the scan row count threshold for triggering Big Query Logs."}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the scan row count threshold to ",(0,r.jsx)(n.code,{children:"1500000000"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL big_query_log_scan_rows_threshold = 1500000000;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fine-tune-precautions",children:"Fine-tune precautions"}),"\n",(0,r.jsx)(n.p,{children:"From the statistics obtained from real-time monitoring and Big Query Logs, you can study the pattern of the omitted big queries (or regular queries that are mistakenly diagnosed as big queries) in your cluster, and then optimize the settings for resource groups and the query queue."}),"\n",(0,r.jsxs)(n.p,{children:["If a notable proportion of big queries conform to a certain SQL pattern, and you want to permanently forbid this SQL pattern, you can add this pattern to SQL Blacklist. StarRocks rejects all queries that match any patterns specified in SQL Blacklist, and returns an error. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/3.0/administration/Blacklist",children:"Manage SQL Blacklist"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To enable SQL Blacklist, execute the following statement:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("enable_sql_blacklist" = "true");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can add the regular expression that represents the SQL pattern to SQL Blacklist using ",(0,r.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",children:"ADD SQLBLACKLIST"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The following example adds ",(0,r.jsx)(n.code,{children:"COUNT(DISTINCT)"})," to SQL Blacklist:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ADD SQLBLACKLIST "SELECT COUNT(DISTINCT .+) FROM .+";\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},47147:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/console_1-cbd35b88e205f18566c1a3ecdb888f4c.png"},2586:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/console_2-b772487ce01c6612ba48da1e08fd7609.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:t(e),r.createElement(i.Provider,{value:a},n)}}}]);