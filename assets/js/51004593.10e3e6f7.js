"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83838],{65703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(85893),i=a(11151);const s={displayed_sidebar:"English"},o="Data Flow and Control Flow",l={id:"quick_start/Data_flow_and_control_flow",title:"Data Flow and Control Flow",description:"Query",source:"@site/versioned_docs/version-2.3/quick_start/Data_flow_and_control_flow.md",sourceDirName:"quick_start",slug:"/quick_start/Data_flow_and_control_flow",permalink:"/docs/2.3/quick_start/Data_flow_and_control_flow",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/quick_start/Data_flow_and_control_flow.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Create a table",permalink:"/docs/2.3/quick_start/Create_table"},next:{title:"Deploy StarRocks",permalink:"/docs/2.3/quick_start/Deploy"}},r={},c=[{value:"Query",id:"query",level:2},{value:"Data Import",id:"data-import",level:2},{value:"Modify Metadata",id:"modify-metadata",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",img:"img"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-flow-and-control-flow",children:"Data Flow and Control Flow"}),"\n",(0,n.jsx)(t.h2,{id:"query",children:"Query"}),"\n",(0,n.jsx)(t.p,{children:"User can use MySQL client to connect to FE, execute SQL queries, and get results."}),"\n",(0,n.jsx)(t.p,{children:"The query process is as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The MySQL client executes DQL SQL commands."}),"\n",(0,n.jsx)(t.li,{children:"Through analysis, modification, and optimization, the FE generates distributed execution plans."}),"\n",(0,n.jsxs)(t.li,{children:["The distributed execution plan consists of several plan fragments that can be executed on a single BE. The FE executes ",(0,n.jsx)(t.code,{children:"exec\\_plan\\_fragment"}),", distributes the fragments to the BE, and designates one of the BEs as the coordinator."]}),"\n",(0,n.jsx)(t.li,{children:"The BE performs local calculations, such as scanning data."}),"\n",(0,n.jsxs)(t.li,{children:["Other BEs call ",(0,n.jsx)(t.code,{children:"transimit\\_data"})," to send the intermediate results to the BE coordinator to aggregate the final result."]}),"\n",(0,n.jsxs)(t.li,{children:["The FE calls ",(0,n.jsx)(t.code,{children:"fetch\\_data"})," to get the final result."]}),"\n",(0,n.jsx)(t.li,{children:"The FE sends the final result to the MySQL client."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The actual execution process is complicated given that vectorization is adopted. For example, one operator generates 4096 results and then outputs to the next operator for calculation rather than batching or one-tuple-at-a-time."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"query_plan",src:a(25292).Z+"",width:"1833",height:"1202"})}),"\n",(0,n.jsx)(t.h2,{id:"data-import",children:"Data Import"}),"\n",(0,n.jsx)(t.p,{children:"After creating the table, user can import data."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Supported data sources: local files, HDFS, Kafka, and S3."}),"\n",(0,n.jsx)(t.li,{children:"Supported import methods: batching import, streaming, real-time import."}),"\n",(0,n.jsx)(t.li,{children:"Supported data formats: CSV, Parquet, ORC, and etc."}),"\n",(0,n.jsx)(t.li,{children:"Supported import initiation methods: use RESTful interface, execute SQL commands."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The data import process is as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The user selects a BE as the coordinator, initiates a data import request that specifies the data format, data source, and label. The label is an identifier used to avoid repeated data imports. The user can also initiate a request to the FE, and the FE will redirect the request to the BE."}),"\n",(0,n.jsxs)(t.li,{children:["After receiving the request, the BE reports to the leader FE node, executes ",(0,n.jsx)(t.code,{children:"loadTxnBegin"}),", and creates a global transaction. Due to that the base table and multiple buckets of the materialized index need to be updated at the same time, the global transaction is used to control the atomicity of this import to ensure consistency."]}),"\n",(0,n.jsxs)(t.li,{children:["When the transaction is created successfully, it executes the ",(0,n.jsx)(t.code,{children:"streamLoadPut"})," call to obtain the data import plan from the FE. Data import can be regarded as distributing data to all tablets copies involved, and the import plan contains data schemas and tablet replication information."]}),"\n",(0,n.jsx)(t.li,{children:"The BE pulls data from the data source, and constructs the internal data format based on the schemas of the base table and materialized index table."}),"\n",(0,n.jsx)(t.li,{children:"According to the partitioning and bucketing rules and the copy location information, the BE coordinator packs and sends the data batches. The receiving BE writes the data to the corresponding bucket replication."}),"\n",(0,n.jsxs)(t.li,{children:["When the BE coordinator node completes the data import, it executes ",(0,n.jsx)(t.code,{children:"loadTxnCommit"})," to the leader FE node, submits the global transaction, and sends the execution status. The leader FE confirms that most of the tablets involved are successfully copied, and makes the data publicly visible. If the import fails, the data won\u2019t be visible and inconsistent data will be cleaned up in the background."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"load",src:a(96110).Z+"",width:"1650",height:"912"})}),"\n",(0,n.jsx)(t.h2,{id:"modify-metadata",children:"Modify Metadata"}),"\n",(0,n.jsx)(t.p,{children:"The following operations involve metadata modification: create a database, a table, a materialized view, and modify a schema, which requires:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Data persistence;"}),"\n",(0,n.jsx)(t.li,{children:"Ensure high availability, replicate the FE on multiple instances to avoid single points of failure;"}),"\n",(0,n.jsx)(t.li,{children:"Some operations need to be performed on the BE. For example, when creating a table, you need to create a tablet copy on the BE."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The updating process of metadata is as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The user uses the MySQL client to execute SQL DDL commands and initiate a request to the leader FE. For example, create a table."}),"\n",(0,n.jsx)(t.li,{children:"FE checks the validity of the request and then initiates a synchronization command to the BE. In other words, the FE first determines whether the column type of the table is valid, calculates the placement position of the tablet copy, and then requests the BE to create a copy."}),"\n",(0,n.jsx)(t.li,{children:"If the BE executes successfully, the memory catalog will be modified. That is, the information of the table, partition, index, and tablet copy will be saved in the catalog."}),"\n",(0,n.jsxs)(t.li,{children:["FE appends and materializes this operation to ",(0,n.jsx)(t.code,{children:"EditLog"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["FE synchronizes the new operation of ",(0,n.jsx)(t.code,{children:"EditLog"})," to follower FEs through the replication protocol."]}),"\n",(0,n.jsx)(t.li,{children:"After receiving the newly added operation item, follower FEs will play back it in sequence on its own catalog to ensure it catches up with the leader FE node."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If any part of the execution fails, this metadata modification will fail.\n",(0,n.jsx)(t.img,{alt:"meta_change",src:a(92336).Z+"",width:"1401",height:"1165"})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},25292:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.4.1-1-6fc4d3ec50cfebd53482c84fe8edcc2a.png"},96110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.4.2-1-b5c45a3f63cf429413b7f464edf5d78d.png"},92336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.4.3-1-064247c94dadafa7772a5d43c426d3c7.png"},11151:(e,t,a)=>{a.d(t,{Zo:()=>l,ah:()=>s});var n=a(67294);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||o:s(e),n.createElement(i.Provider,{value:l},t)}}}]);