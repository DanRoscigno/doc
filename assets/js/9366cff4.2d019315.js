"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[91587],{88416:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=s(85893),t=s(11151);const a={displayed_sidebar:"documentation"},i="Query Management",o={id:"administration/Query_management",title:"Query Management",description:"Number of user connections",source:"@site/versioned_docs/version-2.5/administration/Query_management.md",sourceDirName:"administration",slug:"/administration/Query_management",permalink:"/doc/docs/2.5/administration/Query_management",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/Query_management.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Query queues",permalink:"/doc/docs/2.5/administration/query_queues"},next:{title:"Memory Management",permalink:"/doc/docs/2.5/administration/Memory_management"}},c={},l=[{value:"Number of user connections",id:"number-of-user-connections",level:2},{value:"Query-related session variables",id:"query-related-session-variables",level:2},{value:"capacity quota of database storage",id:"capacity-quota-of-database-storage",level:2},{value:"Kill queries",id:"kill-queries",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"query-management",children:"Query Management"}),"\n",(0,r.jsx)(n.h2,{id:"number-of-user-connections",children:"Number of user connections"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Property"})," is set for user granularity. To set the maximum number of connections between Client and FE, use the following command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n"})}),"\n",(0,r.jsxs)(n.p,{children:["User properties include the resources assigned to the user. The properties set here are for the user, not ",(0,r.jsx)(n.code,{children:"user_identity"}),". That is, if two users ",(0,r.jsx)(n.code,{children:"jack'@'%"})," and ",(0,r.jsx)(n.code,{children:"jack'@'192.%"})," are created by the ",(0,r.jsx)(n.code,{children:"CREATE USER"})," statement, then the ",(0,r.jsx)(n.code,{children:"SET PROPERTY"})," statement can work on the user ",(0,r.jsx)(n.code,{children:"jack"}),", not ",(0,r.jsx)(n.code,{children:"jack'@'%"})," or ",(0,r.jsx)(n.code,{children:"jack'@'192.%"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Example 1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"For the user `jack`, change the maximum number of connections to 1000\nSET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n\nCheck the connection limit for the root user\nSHOW PROPERTY FOR 'root'; \n"})}),"\n",(0,r.jsx)(n.h2,{id:"query-related-session-variables",children:"Query-related session variables"}),"\n",(0,r.jsx)(n.p,{children:"The session variables can be set by 'key' = 'value', which can limit the concurrency, memory and other query parameters in the current session. For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"parallel_fragment_exec_instance_num"}),"\n",(0,r.jsx)(n.p,{children:"The parallelism of the query with a default value of 1. It indicates the number of fragment instances on each BE. You can set this to half the number of CPU cores of the BE to improve query performance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"exec_mem_limit"}),"\n",(0,r.jsx)(n.p,{children:"Memory limit of query, can be adjusted when a query reports insufficient memory."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"load_mem_limit"}),"\n",(0,r.jsx)(n.p,{children:"Memory limit for import, can be adjusted when an import job reports insufficient memory."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example 2:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set parallel_fragment_exec_instance_num  = 8; \nset exec_mem_limit  = 137438953472;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"capacity-quota-of-database-storage",children:"capacity quota of database storage"}),"\n",(0,r.jsxs)(n.p,{children:["The default capacity limit of each DB is 1TB. The quota value can be changed by ",(0,r.jsx)(n.code,{children:"alter database"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE db_name SET DATA QUOTA quota;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The quota units are: B/K/KB/M/MB/G/GB/T/TB/P/PB"}),"\n",(0,r.jsx)(n.p,{children:"Example 3:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER DATABASE example_db SET DATA QUOTA 10T;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kill-queries",children:"Kill queries"}),"\n",(0,r.jsx)(n.p,{children:"To terminate a query on a particular connection with the following  command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"kill connection_id;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"connection_id"})," can be seen by ",(0,r.jsx)(n.code,{children:"show processlist;"})," or ",(0,r.jsx)(n.code,{children:"select connection_id();"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:" show processlist;\n+------+------------+---------------------+-----------------+---------------+---------+------+-------+------+\n| Id   | User       | Host                | Cluster         | Db            | Command | Time | State | Info |\n+------+------------+---------------------+-----------------+---------------+---------+------+-------+------+\n|    1 | starrocksmgr | 172.26.34.147:56208 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\n|  129 | root       | 172.26.92.139:54818 | default_cluster |               | Query   |    0 |       |      |\n|  114 | test       | 172.26.34.147:57974 | default_cluster | ssb_100g      | Query   |    3 |       |      |\n|    3 | starrocksmgr | 172.26.34.147:57268 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\n|  100 | root       | 172.26.34.147:58472 | default_cluster | ssb_100       | Sleep   |  637 |       |      |\n|  117 | starrocksmgr | 172.26.34.147:33790 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\n|    6 | starrocksmgr | 172.26.34.147:57632 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\n|  119 | starrocksmgr | 172.26.34.147:33804 | default_cluster | starrocks_monitor | Sleep   |    8 |       |      |\n|  111 | root       | 172.26.92.139:55472 | default_cluster |               | Sleep   | 2758 |       |      |\n+------+------------+---------------------+-----------------+---------------+---------+------+-------+------+\n9 rows in set (0.00 sec)\n\nmysql> select connection_id();\n+-----------------+\n| CONNECTION_ID() |\n+-----------------+\n|              98 |\n+-----------------+\n\n\nmysql> kill 114;\nQuery OK, 0 rows affected (0.02 sec)\n\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>a});var r=s(67294);const t=r.createContext({});function a(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||i:a(e),r.createElement(t.Provider,{value:o},n)}}}]);