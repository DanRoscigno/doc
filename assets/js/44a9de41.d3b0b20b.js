"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48887],{59850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=r(85893),n=r(11151);const o={displayed_sidebar:"English"},a="Export data using brokers",i={id:"unloading/Export",title:"Export data using brokers",description:"This topic describes how to export data from specified tables or partitions in your StarRocks cluster as CSV data files by using brokers to HDFS, Alibaba Cloud OSS, AWS S3, or other S3-compatible object storage systems.",source:"@site/versioned_docs/version-2.3/unloading/Export.md",sourceDirName:"unloading",slug:"/unloading/Export",permalink:"/docs/2.3/unloading/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/unloading/Export.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Temporary partition",permalink:"/docs/2.3/table_design/Temporary_partition"},next:{title:"Read data from StarRocks using Flink connector",permalink:"/docs/2.3/unloading/Flink_connector"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Principles",id:"principles",level:2},{value:"Related parameters",id:"related-parameters",level:2},{value:"FE parameters",id:"fe-parameters",level:3},{value:"Broker parameters",id:"broker-parameters",level:3},{value:"Basic operations",id:"basic-operations",level:2},{value:"Submit an export job",id:"submit-an-export-job",level:3},{value:"Obtain the query ID of an export job",id:"obtain-the-query-id-of-an-export-job",level:3},{value:"View the status of an export job",id:"view-the-status-of-an-export-job",level:3},{value:"Cancel an export job",id:"cancel-an-export-job",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Query plan splitting",id:"query-plan-splitting",level:3}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ul:"ul",li:"li",img:"img",ol:"ol",code:"code",h3:"h3",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"export-data-using-brokers",children:"Export data using brokers"}),"\n",(0,s.jsx)(t.p,{children:"This topic describes how to export data from specified tables or partitions in your StarRocks cluster as CSV data files by using brokers to HDFS, Alibaba Cloud OSS, AWS S3, or other S3-compatible object storage systems."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Brokers are deployed in your StarRocks cluster."}),"\n",(0,s.jsxs)(t.p,{children:["You can use the ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/Administration/SHOW_BROKER",children:"SHOW BROKER"})," statement to check for brokers that are deployed in your StarRocks cluster. If no brokers are deployed, you must deploy brokers by following the instructions provided in ",(0,s.jsx)(t.a,{href:"/docs/2.3/administration/deploy_broker",children:"Deploy a broker"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In this topic, assume that a group of brokers collectively named 'mybroker' are deployed in your StarRocks cluster."}),"\n",(0,s.jsx)(t.h2,{id:"precautions",children:"Precautions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"We recommend that the data you export at a time do not exceed a few dozen GB. If you export an exceedingly large amount of data at a time, the export may fail and the cost of retrying the export increases."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the source StarRocks table contains a large amount of data, we recommend that you export data from only a few partitions of the table each time until all data from the table is exported."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"If the FEs in your StarRocks cluster restart or a new leader FE is elected when an export job is running, the export job fails. In this situation, you must submit the export job again."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If the FEs in your StarRocks cluster restart or a new leader FE is elected after an export job finishes, some of the job information returned by the ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"})," statement may be lost."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"StarRocks exports only the data of base tables. StarRocks does not export the data of materialized views created on base tables."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Export jobs require data scans, which occupy I/O resources and consequently increase query latency."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,s.jsx)(t.p,{children:"After you submit an export job, StarRocks identifies all tablets involved in the export job. Then, StarRocks divides the involved tablets into groups and generates query plans. The query plans are used to read data from the involved tablets and invoke brokers to write the data to a specified path of the destination storage system."}),"\n",(0,s.jsx)(t.p,{children:"The following figure shows the general workflow."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img",src:r(85652).Z+"",width:"1738",height:"924"})}),"\n",(0,s.jsx)(t.p,{children:"The general workflow consists of the following three steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The user submits an export job to the leader FE."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The leader FE issues ",(0,s.jsx)(t.code,{children:"snapshot"})," instructions to all BEs in the StarRocks cluster, so the BEs can take snapshots of the involved tablets to ensure the consistency of the data to be exported. The leader FE also generates multiple export tasks. Each export task is a query plan, and each query plan is used to process a portion of the involved tablets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The leader FE distributes the export tasks to the BEs."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(t.p,{children:["When StarRocks execute query plans, it first creates a temporary folder named ",(0,s.jsx)(t.code,{children:"__starrocks_export_tmp_xxx"})," in the specified path of the destination storage system. In the name of the temporary folder, ",(0,s.jsx)(t.code,{children:"xxx"})," represents the ID of the export job. An example name for the temporary folder is ",(0,s.jsx)(t.code,{children:"__starrocks_export_tmp_921d8f80-7c9d-11eb-9342-acde48001122"}),". After StarRocks successfully executes a query plan, it generates a temporary file in the temporary folder and writes the exported data into the generated temporary file."]}),"\n",(0,s.jsx)(t.p,{children:"After all data is exported, StarRocks uses the RENAME statement to save the generated temporary files to a specified path."}),"\n",(0,s.jsx)(t.h2,{id:"related-parameters",children:"Related parameters"}),"\n",(0,s.jsx)(t.p,{children:"This section describes some export-related parameters that you can configure in the FEs and brokers."}),"\n",(0,s.jsx)(t.h3,{id:"fe-parameters",children:"FE parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"export_checker_interval_second"}),": the interval at which export jobs are scheduled. The default interval is 5 seconds. After you reconfigure this parameter for an FE, you need to restart the FE to make the new parameter setting take effect."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"export_running_job_num_limit"}),": the maximum number of running export jobs that are allowed. If the number of running export jobs exceeds this limit, excessive export jobs enter a waiting state after ",(0,s.jsx)(t.code,{children:"snapshot"})," is run. The default maximum number is 5. You can reconfigure this parameter when export jobs are running."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"export_task_default_timeout_second"}),": the timeout period for export jobs. The default timeout period is 2 hours. You can reconfigure this parameter when export jobs are running."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"export_max_bytes_per_be_per_task"}),": the maximum amount of data as compressed that can be exported per export task from each BE. This parameter provides a policy based on which StarRocks splits export jobs into export tasks that can be concurrently run. The default maximum amount is 256 MB."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"export_task_pool_size"}),": the maximum number of export tasks that can be concurrently run by the thread pool. The default maximum number is 5."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"broker-parameters",children:"Broker parameters"}),"\n",(0,s.jsxs)(t.p,{children:["Different brokers require different parameter configurations. For more information, see ",(0,s.jsx)(t.a,{href:"/docs/2.3/administration/Configuration",children:"Broker parameters"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,s.jsx)(t.h3,{id:"submit-an-export-job",children:"Submit an export job"}),"\n",(0,s.jsxs)(t.p,{children:["Suppose that your StarRocks database ",(0,s.jsx)(t.code,{children:"db1"})," contains a table named ",(0,s.jsx)(t.code,{children:"tbl1"}),". To export the data of columns ",(0,s.jsx)(t.code,{children:"col1"})," and ",(0,s.jsx)(t.code,{children:"col3"})," from partitions ",(0,s.jsx)(t.code,{children:"p1"})," and ",(0,s.jsx)(t.code,{children:"p2"})," of ",(0,s.jsx)(t.code,{children:"tbl1"})," to the ",(0,s.jsx)(t.code,{children:"export"})," path of your HDFS cluster, run the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'EXPORT TABLE db1.tbl1 \nPARTITION (p1,p2)\n(col1, col3)\nTO "hdfs://HDFS_IP:HDFS_Port/export/lineorder_" \nPROPERTIES\n(\n    "column_separator"=",",\n    "load_mem_limit"="2147483648",\n    "timeout" = "3600"\n)\nWITH BROKER "mybroker"\n(\n    "username" = "user",\n    "password" = "passwd"\n);\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-manipulation/EXPORT",children:"EXPORT"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"obtain-the-query-id-of-an-export-job",children:"Obtain the query ID of an export job"}),"\n",(0,s.jsx)(t.p,{children:"After you submit an export job, you can use the SELECT LAST_QUERY_ID() statement to query the query ID of the export job. With the query ID, you can view or cancel the export job."}),"\n",(0,s.jsxs)(t.p,{children:["For the detailed syntax and parameter descriptions, see ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-functions/utility-functions/last_query_id",children:"last_query_id"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"view-the-status-of-an-export-job",children:"View the status of an export job"}),"\n",(0,s.jsx)(t.p,{children:"After you submit an export job, you can use the SHOW EXPORT statement to view the status of the export job. Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'SHOW EXPORT WHERE queryid = "edee47f0-abe1-11ec-b9d1-00163e1e238f";\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["In the preceding example, ",(0,s.jsx)(t.code,{children:"queryid"})," is the query ID of the export job."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Information similar to the following output is returned:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:'JobId: 14008\nState: FINISHED\nProgress: 100%\nTaskInfo: {"partitions":["*"],"mem limit":2147483648,"column separator":",","line delimiter":"\\n","tablet num":1,"broker":"hdfs","coord num":1,"db":"default_cluster:db1","tbl":"tbl3",columns:["col1", "col3"]}\nPath: oss://bj-test/export/\nCreateTime: 2019-06-25 17:08:24\nStartTime: 2019-06-25 17:08:28\nFinishTime: 2019-06-25 17:08:34\nTimeout: 3600\nErrorMsg: N/A\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"cancel-an-export-job",children:"Cancel an export job"}),"\n",(0,s.jsx)(t.p,{children:"You can use the CANCEL EXPORT statement to cancel an export job that you have submitted. Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CANCEL EXPORT WHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["In the preceding example, ",(0,s.jsx)(t.code,{children:"queryid"})," is the query ID of the export job."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For detailed syntax and parameter descriptions, see ",(0,s.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-manipulation/CANCEL_EXPORT",children:"CANCEL EXPORT"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,s.jsx)(t.h3,{id:"query-plan-splitting",children:"Query plan splitting"}),"\n",(0,s.jsxs)(t.p,{children:["The number of query plans into which an export job is split varies depending on the number of tablets involved in the export job and on the maximum amount of data that can be processed per query plan. Export jobs are retried as query plans. If the amount of data processed by a query plan exceeds the maximum amount allowed, the query plan encounters errors such as RPC failures in brokers and jitters in remote storage. As a result, the cost of retrying the query plan increases. The maximum amount of data that can be processed per query plan by each BE is specified by the ",(0,s.jsx)(t.code,{children:"export_max_bytes_per_be_per_task"})," parameter, which defaults to 256 MB. In a query plan, each BE is allocated at least one tablet and can export a data amount that does not exceed the limit specified by the ",(0,s.jsx)(t.code,{children:"export_max_bytes_per_be_per_task"})," parameter."]}),"\n",(0,s.jsxs)(t.p,{children:["The multiple query plans of an export job are concurrently executed. You can use the FE parameter ",(0,s.jsx)(t.code,{children:"export_task_pool_size"})," to specify the maximum number of export tasks that are allowed to concurrently run by the thread pool. This parameter defaults to ",(0,s.jsx)(t.code,{children:"5"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In normal cases, each query plan of an export job consists of only two parts: scanning and exporting. The logic for performing computations required by query plans does not consume much memory. Therefore, the default memory limit of 2 GB can meet most of your business requirements. However, in certain circumstances, such as when a query plan requires scanning many tablets on a BE or a tablet has many versions, the 2-GB memory capacity may be insufficient. In these circumstances, you need to use the ",(0,s.jsx)(t.code,{children:"load_mem_limit"})," parameter to specify a higher memory capacity limit, such as 4 GB or 8 GB."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},85652:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/5.3.1-1-682b6dbafbc8c86e423ff8729cb10a88.png"},11151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>o});var s=r(67294);const n=s.createContext({});function o(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:o(e),s.createElement(n.Provider,{value:i},t)}}}]);