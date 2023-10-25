"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90091],{54221:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var l=s(85893),n=s(11151);const i={displayed_sidebar:"English"},c="Cost Based Optimizer",a={id:"using_starrocks/Cost_based_optimizer",title:"Cost Based Optimizer",description:"StarRocks 1.16.0 introduces cost-based optimizer (CBO). This feature is enabled by default in StarRocks 1.19 and later. CBO can select the optimal execution plan based on cost, significantly improving the performance of complex queries.",source:"@site/versioned_docs/version-2.2/using_starrocks/Cost_based_optimizer.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Cost_based_optimizer",permalink:"/docs/2.2/using_starrocks/Cost_based_optimizer",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Cost_based_optimizer.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Colocate Join",permalink:"/docs/2.2/using_starrocks/Colocation_join"},next:{title:"Lateral Join",permalink:"/docs/2.2/using_starrocks/Lateral_join"}},o={},r=[{value:"What is CBO",id:"what-is-cbo",level:2},{value:"Statistics Collection",id:"statistics-collection",level:2},{value:"Collect full statistics",id:"collect-full-statistics",level:3},{value:"Collect sampled statistics",id:"collect-sampled-statistics",level:3},{value:"View or delete collection tasks",id:"view-or-delete-collection-tasks",level:3},{value:"Parameters",id:"parameters",level:3},{value:"FE Configuration Items",id:"fe-configuration-items",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3",pre:"pre"},(0,n.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"cost-based-optimizer",children:"Cost Based Optimizer"}),"\n",(0,l.jsx)(t.p,{children:"StarRocks 1.16.0 introduces cost-based optimizer (CBO). This feature is enabled by default in StarRocks 1.19 and later. CBO can select the optimal execution plan based on cost, significantly improving the performance of complex queries."}),"\n",(0,l.jsx)(t.h2,{id:"what-is-cbo",children:"What is CBO"}),"\n",(0,l.jsx)(t.p,{children:"The CBO optimizer uses the Cascades framework, estimates costs by using a variety of statistical information, and adds the Transformation and Implementation rules. All these enable the CBO to select the optimal execution plan with the lowest cost among tens of thousands of execution plans in  the search space."}),"\n",(0,l.jsxs)(t.p,{children:["The CBO optimizer uses a variety of statistics that StarRocks collects periodically, such as the number of rows, average size of columns, cardinality information, amount of NULL-valued data, and MAX/MIN value. These statistics are stored in ",(0,l.jsx)(t.code,{children:"_statistics_.table_statistic_v1"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"StarRocks supports full or sampled statistics collection in a manual or periodic way, which can help the CBO optimizer refine cost estimation and choose the optimal execution plan."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:(0,l.jsx)(t.strong,{children:"Collection Type"})}),(0,l.jsx)(t.th,{children:(0,l.jsx)(t.strong,{children:"Collection Method"})}),(0,l.jsx)(t.th,{children:(0,l.jsx)(t.strong,{children:"Description"})}),(0,l.jsx)(t.th,{children:(0,l.jsx)(t.strong,{children:"Advantages and Disadvantages"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Full statistics collection"}),(0,l.jsx)(t.td,{children:"Manual collection  Periodic collection"}),(0,l.jsx)(t.td,{children:"Gather statistics for the full table."}),(0,l.jsx)(t.td,{children:"Advantages: Full statistics collection generates more accurate statistics that can help CBO more accurately evaluate execution plans.  Disadvantages: Full statistics collection consumes a lot of system resources and is relatively slow."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Sampled statistics collection"}),(0,l.jsx)(t.td,{children:"Manual collection  Periodic collection"}),(0,l.jsx)(t.td,{children:"Gather statistics of N rows of data from each partition of the table."}),(0,l.jsx)(t.td,{children:"Advantages: Sampled statistics collection consumes less system resources and is relatively fast.  Disadvantages: Sampled statistics collection may cause errors, which may affect the accuracy of the CBO's choice of the optimal execution plan."})]})]})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Manual collection: Manually perform a task to gather statistics."}),"\n",(0,l.jsx)(t.li,{children:"Periodic collection: Periodically perform a task to gather statistics. The collection interval is one day by default, and StarRocks checks for data updates every two hours by default. If data is updated and the collection interval has elapsed (one day by default), StarRocks collects the statistics again. If no data is updated or the collection interval has not elapsed, StarRocks does not collect the statistics again."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"statistics-collection",children:"Statistics Collection"}),"\n",(0,l.jsx)(t.p,{children:"When CBO is enabled, it consumes statistics collected by the Statistics Collector in a sampled and collected fashion. The Statistics Collector checks for data updates every two hours. If data is updated and the time from the previous collection has exceeded one day, Statistics Collector collects the statistics again by sampling 200,000 rows. You can also adjust the type of statistics collection (full or sampled) and the collection method (manual or periodic) according to your business needs."}),"\n",(0,l.jsx)(t.h3,{id:"collect-full-statistics",children:"Collect full statistics"}),"\n",(0,l.jsx)(t.p,{children:"Choose a collection method (manual or periodic) and run the relevant commands. For descriptions of relevant parameters, see Parameters."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If you need to perform manual collection, you can run the following command."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"ANALYZE FULL TABLE tbl_name(columnA, columnB, columnC...);\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If you need to perform periodic collection, you can run the following commands to configure the collection interval and check interval."}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"If multiple periodic collection tasks gather statistics from the same object, the CBO runs only the latest periodic collection task (task with the largest ID)."}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'-- Periodically collect full statistics from all databases.\nCREATE ANALYZE FULL ALL\nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- Periodically collect full statistics from all tables in a specified database.\nCREATE ANALYZE FULL DATABASE db_name\nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- Periodically collect full statistics from the specified tables and columns.\nCREATE ANALYZE FULL TABLE tbl_name(columnA, columnB, columnC...) \nPROPERTIES(\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n'})}),"\n",(0,l.jsx)(t.p,{children:"Example\uff1a"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"-- Periodically collect full statistics from all tables under the tpch database with default collection interval and default check interval.\nCREATE ANALYZE FULL DATABASE tpch;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"collect-sampled-statistics",children:"Collect sampled statistics"}),"\n",(0,l.jsx)(t.p,{children:"Choose a collection method (manual or periodic) and run the relevant commands. For descriptions of relevant parameters, see Parameters."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"you need to perform manual collection, you can run the following command to configure the number of rows to be sampled."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'ANALYZE TABLE tbl_name(columnA, columnB, columnC...)\nPROPERTIES(\n    "sample_collect_rows" = "100000"\n);\n'})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"If you need to perform periodic collection, you can run the following command to configure the number of rows to be sampled, collection interval, and check interval."}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"If multiple periodic collection tasks gather statistics from the same object, the CBO runs only the latest periodic collection task (task with the largest ID)."}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'-- Periodically collect sampled statistics from all databases.\nCREATE ANALYZE ALL\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- Periodically collect sampled statistics from all tables in a specified database.\nCREATE ANALYZE DATABASE db_name\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n\n-- Periodically collect sampled statistics from the specified tables and columns.\nCREATE ANALYZE TABLE tbl_name(columnA, columnB, columnC...)\nPROPERTIES(\n    "sample_collect_rows" = "100000",\n    "update_interval_sec" = "43200",\n    "collect_interval_sec" = "3600"\n);\n'})}),"\n",(0,l.jsx)(t.p,{children:"Example\uff1a"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'-- Periodically collect sampled statistics at intervals of 43,200 seconds (12 hours), with a default check interval.\nCREATE ANALYZE ALL PROPERTIES("update_interval_sec" = "43200");\n\n-- Periodically collect sampled statistics for column v1 in the table test, with the default collection interval and check interval.\nCREATE ANALYZE TABLE test(v1);\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"view-or-delete-collection-tasks",children:"View or delete collection tasks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Run the following command to view all collection tasks."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"SHOW ANALYZE;\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Run the following command to delete the specified collection task."}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"ID"})," is the collection task ID, which can be obtained by running the ",(0,l.jsx)(t.code,{children:"SHOW ANALYZE"})," command."]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"DROP ANALYZE <ID>;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"sample_collect_rows"}),": The number of rows to be sampled during sampled statistics collection."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"update_interval_sec"}),": The collection interval for periodic collection. Default value: 86400 seconds (one day). Unit: seconds."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"collect_interval_sec"}),": The interval for checking data updates in a periodic task. The default value is 7,200 seconds (two hours). During a periodic task, StarRocks will check whether the table is updated at the interval specified by this parameter. If data is updated and the time from the previous collection has exceeded ",(0,l.jsx)(t.code,{children:"update_interval_sec"}),", StarRocks collects the statistics again. If no  data is updated and the time from the last collection has not exceeded ",(0,l.jsx)(t.code,{children:"update_interval_sec"}),", StarRocks does not collect the statistics again."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"fe-configuration-items",children:"FE Configuration Items"}),"\n",(0,l.jsxs)(t.p,{children:["You can check or modify the default configuration for statistics collection in the FE configuration file ",(0,l.jsx)(t.strong,{children:"fe.conf"}),"."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"# Whether to collect statistics.\nenable_statistic_collect = true;\n\n# The interval for checking data updates in a periodic task. The default value is 7,200 seconds (two hours). \nstatistic_collect_interval_sec = 7200;\n\n# The collection interval for periodic collection. The default value is 86,400 seconds (one day).\nstatistic_update_interval_sec = 86400;\n\n# The number of rows to be sampled during sampled statistics collection. The default value is 200,000 rows.\nstatistic_sample_collect_rows = 200000;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>i});var l=s(67294);const n=l.createContext({});function i(e){const t=l.useContext(n);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),l.createElement(n.Provider,{value:a},t)}}}]);