"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74183],{44686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(85893),t=s(11151);const i={},d="ALTER SYSTEM",o={id:"sql-reference/sql-statements/Administration/ALTER SYSTEM",title:"ALTER SYSTEM",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ALTER SYSTEM.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ALTER SYSTEM",permalink:"/docs/sql-reference/sql-statements/Administration/ALTER SYSTEM",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ALTER SYSTEM.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER STORAGE VOLUME",permalink:"/docs/sql-reference/sql-statements/Administration/ALTER STORAGE VOLUME"},next:{title:"CANCEL DECOMMISSION",permalink:"/docs/sql-reference/sql-statements/Administration/CANCEL DECOMMISSION"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax and parameters",id:"syntax-and-parameters",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3},{value:"CN",id:"cn",level:3},{value:"Broker",id:"broker",level:3},{value:"Create image",id:"create-image",level:3},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-system",children:"ALTER SYSTEM"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Manages FE, BE, CN, Broker nodes, and metadata snapshots in a cluster."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(n.p,{children:["Only the ",(0,r.jsx)(n.code,{children:"cluster_admin"})," role has the privilege to execute this SQL statement."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"syntax-and-parameters",children:"Syntax and parameters"}),"\n",(0,r.jsx)(n.h3,{id:"fe",children:"FE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a Follower FE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD FOLLOWER "<fe_host>:<edit_log_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can check the status of the new Follower FE by executing ",(0,r.jsx)(n.code,{children:"SHOW PROC '/frontends'\\G"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop a Follower FE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP FOLLOWER "<fe_host>:<edit_log_port>"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add an Observer FE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD OBSERVER "<fe_host>:<edit_log_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can check the status of the new Observer FE by executing ",(0,r.jsx)(n.code,{children:"SHOW PROC '/frontends'\\G"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop an Observer FE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP OBSERVER "<fe_host>:<edit_log_port>"[, ...]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fe_host"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["The host name or IP address of the FE instance. Use the value of configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," if your instance has multiple IP addresses."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"edit_log_port"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["BDB JE communication port of the FE node. Default: ",(0,r.jsx)(n.code,{children:"9010"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"be",children:"BE"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a BE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BACKEND "<be_host>:<heartbeat_service_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can check the status of the new BE by executing ",(0,r.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Administration/SHOW%20BACKENDS",children:"SHOW BACKENDS"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop a BE node."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,r.jsx)(n.p,{children:"You cannot drop the BE node that stores the tablets of single-replica tables."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BACKEND "<be_host>:<heartbeat_service_port>"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Decommission a BE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DECOMMISSION BACKEND "<be_host>:<heartbeat_service_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Unlike dropping a BE node, which is removing it forcibly from the cluster, decommissioning a BE means removing it safely. It is an asynchronous operation. When a BE is decommissioned, the data on the BE is first migrated to other BEs, and then the BE is removed from the cluster. Data loading and query will not be affected during the data migration. You can check whether the operation is successful using ",(0,r.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Administration/SHOW%20BACKENDS",children:"SHOW BACKENDS"}),". If the operation is successful, the decommissioned BE will not be returned. If the operation fails, the BE will still be online. You can manually cancel the operation using ",(0,r.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Administration/CANCEL%20DECOMMISSION",children:"CANCEL DECOMMISSION"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"be_host"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["The host name or IP address of the BE instance. Use the value of configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," if your instance has multiple IP addresses."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"heartbeat_service_port"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["BE heartbeat service port. BE uses this port to receive heartbeat from FE. Default: ",(0,r.jsx)(n.code,{children:"9050"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"cn",children:"CN"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add a CN node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD COMPUTE NODE "<cn_host>:<heartbeat_service_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can check the status of the new CN by executing ",(0,r.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Administration/SHOW%20COMPUTE%20NODES",children:"SHOW COMPUTE NODES"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop a CN node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP COMPUTE NODE "<cn_host>:<heartbeat_service_port>"[, ...]\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cn_host"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["The host name or IP address of the CN instance. Use the value of configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," if your instance has multiple IP addresses."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"heartbeat_service_port"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["CN heartbeat service port. CN uses this port to receive heartbeat from FE. Default: ",(0,r.jsx)(n.code,{children:"9050"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"broker",children:"Broker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add Broker nodes. You can use Broker nodes to load data from HDFS or cloud storage into StarRocks. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/loading/hdfs_load",children:"Load data from HDFS"})," or ",(0,r.jsx)(n.a,{href:"/docs/loading/cloud_storage_load",children:"Load data from cloud storage"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BROKER <broker_name> "<broker_host>:<broker_ipc_port>"[, ...]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can add multiple Broker nodes with one SQL. Each ",(0,r.jsx)(n.code,{children:"<broker_host>:<broker_ipc_port>"})," pair represents one Broker node. And they share a common ",(0,r.jsx)(n.code,{children:"broker_name"}),". You can check the status of the new Broker node by executing ",(0,r.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/Administration/SHOW%20BROKER",children:"SHOW BROKER"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Drop Broker nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,r.jsx)(n.p,{children:"Dropping a Broker node terminates the tasks currently running on it."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Drop one or multiple Broker nodes with the same ",(0,r.jsx)(n.code,{children:"broker_name"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BROKER <broker_name> "<broker_host>:<broker_ipc_port>"[, ...]\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Drop all Broker nodes with the same ",(0,r.jsx)(n.code,{children:"broker_name"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM DROP ALL BROKER <broker_name>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"broker_name"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsx)(n.td,{children:"The name of the Broker node(s). Multiple Broker nodes can use the same name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"broker_host"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["The host name or IP address of the Broker instance. Use the value of configuration item ",(0,r.jsx)(n.code,{children:"priority_networks"})," if your instance has multiple IP addresses."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"broker_ipc_port"}),(0,r.jsx)(n.td,{children:"Yes"}),(0,r.jsxs)(n.td,{children:["The thrift server port on the Broker node. The Broker node uses it to receive requests from FE or BE. Default: ",(0,r.jsx)(n.code,{children:"8000"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-image",children:"Create image"}),"\n",(0,r.jsx)(n.p,{children:"Create an image file. An image file is a snapshot of the FE metadata."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM CREATE IMAGE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Creating an image is an asynchronous operation on the Leader FE. You can check the start time and end time of the operation in the FE log file ",(0,r.jsx)(n.strong,{children:"fe.log"}),". A log like ",(0,r.jsx)(n.code,{children:"triggering a new checkpoint manually..."})," indicates that the image creation has started, and a log like ",(0,r.jsx)(n.code,{children:"finished save image..."})," indicates the image has been created."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Adding and dropping FE, BE, CN, or Broker nodes are synchronous operations. You cannot cancel the node dropping operations."}),"\n",(0,r.jsx)(n.li,{children:"You cannot drop the FE node in a single-FE cluster."}),"\n",(0,r.jsx)(n.li,{children:"You cannot directly drop the Leader FE node in a multi-FE cluster. To drop it, you must first restart it. After StarRocks elects a new Leader FE, you can then drop the previous one."}),"\n",(0,r.jsx)(n.li,{children:"You cannot drop BE nodes if the number of the remained BE nodes is less than the number of data replicas. For example, if you have three BE nodes in your cluster and you store your data in three replicas, you cannot drop any of the BE nodes. And if you have four BE nodes and three replicas, you can drop one BE node."}),"\n",(0,r.jsx)(n.li,{children:"The difference between dropping and decommissioning a BE node is that, when you drop a BE node, StarRocks removes it forcibly from the cluster and make up the dropped tablets after the removal, and when you decommission a BE node, StarRocks first migrates the tablets on the decommissioned BE node to others, and then removes the node."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Add a Follower FE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD FOLLOWER "x.x.x.x:9010";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Drop two Observer FE nodes simultaneously."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP OBSERVER "x.x.x.x:9010","x.x.x.x:9010";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: Add a BE node."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BACKEND "x.x.x.x:9050";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 4: Drop two BE nodes simultaneously."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BACKEND "x.x.x.x:9050", "x.x.x.x:9050";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 5: Decommission two BE nodes simultaneously."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DECOMMISSION BACKEND "x.x.x.x:9050", "x.x.x.x:9050";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 6: Add two Broker nodes with the same ",(0,r.jsx)(n.code,{children:"broker_name"})," - ",(0,r.jsx)(n.code,{children:"hdfs"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM ADD BROKER hdfs "x.x.x.x:8000", "x.x.x.x:8000";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 7: Drop two Broker nodes from ",(0,r.jsx)(n.code,{children:"amazon_s3"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM DROP BROKER amazon_s3 "x.x.x.x:8000", "x.x.x.x:8000";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Example 8: Drop all Broker nodes in ",(0,r.jsx)(n.code,{children:"amazon_s3"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER SYSTEM DROP ALL BROKER amazon_s3;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||d:i(e),r.createElement(t.Provider,{value:o},n)}}}]);