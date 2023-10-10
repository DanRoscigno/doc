"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49217],{18451:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(85893),a=t(11151);const s={},r="Plan StarRocks cluster",i={id:"deployment/plan_cluster",title:"Plan StarRocks cluster",description:"This topic describes how to plan resources for your StarRocks cluster in production from the perspectives of node count, CPU core count, memory size, and storage size.",source:"@site/versioned_docs/version-3.1/deployment/plan_cluster.md",sourceDirName:"deployment",slug:"/deployment/plan_cluster",permalink:"/docs/deployment/plan_cluster",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/deployment/plan_cluster.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Deployment prerequisites",permalink:"/docs/deployment/deployment_prerequisites"},next:{title:"Check environment configurations",permalink:"/docs/deployment/environment_configurations"}},l={},c=[{value:"Node count",id:"node-count",level:2},{value:"FE node count",id:"fe-node-count",level:3},{value:"BE node count",id:"be-node-count",level:3},{value:"CN node count",id:"cn-node-count",level:3},{value:"CPU and memory",id:"cpu-and-memory",level:2},{value:"Storage capacity",id:"storage-capacity",level:2},{value:"FE storage",id:"fe-storage",level:3},{value:"BE storage",id:"be-storage",level:3},{value:"Estimate initial storage space for BE",id:"estimate-initial-storage-space-for-be",level:4},{value:"Add extra storage as you go",id:"add-extra-storage-as-you-go",level:4}];function d(e){const o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"plan-starrocks-cluster",children:"Plan StarRocks cluster"}),"\n",(0,n.jsx)(o.p,{children:"This topic describes how to plan resources for your StarRocks cluster in production from the perspectives of node count, CPU core count, memory size, and storage size."}),"\n",(0,n.jsx)(o.h2,{id:"node-count",children:"Node count"}),"\n",(0,n.jsx)(o.p,{children:"StarRocks mainly consists of two types of components: FE nodes and BE nodes. Each node must be deployed separately on a physical or virtual machine."}),"\n",(0,n.jsx)(o.h3,{id:"fe-node-count",children:"FE node count"}),"\n",(0,n.jsx)(o.p,{children:"FE nodes are mainly responsible for metadata management, client connection management, query planning, and query scheduling."}),"\n",(0,n.jsxs)(o.p,{children:["In production, we recommend you deploy at least ",(0,n.jsx)(o.strong,{children:"THREE"})," Follower FE nodes in your StarRocks cluster to prevent single points of failure (SPOFs)."]}),"\n",(0,n.jsx)(o.p,{children:"StarRocks uses the BDB JE protocol to manage the metadata across FE nodes. StarRocks elects a Leader FE node from all Follower FE nodes. Only the Leader FE node can write metadata. The other Follower FE nodes only update their metadata based on the logs from the Leader FE node. Each time the Leader FE node fails, StarRocks re-elects a new Leader FE node as long as more than half of the Follower FE nodes are alive."}),"\n",(0,n.jsx)(o.p,{children:"If your application generates highly concurrent query requests, you can add Observer FE nodes to your cluster. Observer FE nodes only process the query requests and do not participate in the election for the Leader FE node."}),"\n",(0,n.jsx)(o.h3,{id:"be-node-count",children:"BE node count"}),"\n",(0,n.jsx)(o.p,{children:"BE nodes are responsible for data storage and SQL execution."}),"\n",(0,n.jsxs)(o.p,{children:["In production, we recommend you deploy at least ",(0,n.jsx)(o.strong,{children:"THREE"})," BE nodes in your StarRocks cluster to ensure high data reliability and service availability. A high-availability cluster of BEs is automatically formed when at least three BE nodes are deployed and added to your StarRocks cluster. The failure of one BE node will not affect the overall availability of the BE services."]}),"\n",(0,n.jsx)(o.p,{children:"You can increase the number of BE nodes to enable your StarRocks cluster to process highly concurrent queries."}),"\n",(0,n.jsx)(o.h3,{id:"cn-node-count",children:"CN node count"}),"\n",(0,n.jsx)(o.p,{children:"CN nodes are optional components of StarRocks, and are only responsible for SQL execution."}),"\n",(0,n.jsx)(o.p,{children:"You can increase the number of CN nodes to elastically scale compute resources without changing the data distribution in your StarRocks cluster."}),"\n",(0,n.jsx)(o.h2,{id:"cpu-and-memory",children:"CPU and memory"}),"\n",(0,n.jsx)(o.p,{children:"Usually, the FE service does not consume a lot of CPU and memory resources. We recommend allocating 8 CPU cores and 16 GB RAM to each FE node."}),"\n",(0,n.jsx)(o.p,{children:"Unlike the FE service, the BE service can be significantly CPU- and memory-intensive if your application works with highly concurrent or complex queries on a large dataset. Therefore, we recommend allocating 16 CPU cores and 64 GB RAM to each BE node."}),"\n",(0,n.jsx)(o.h2,{id:"storage-capacity",children:"Storage capacity"}),"\n",(0,n.jsx)(o.h3,{id:"fe-storage",children:"FE storage"}),"\n",(0,n.jsx)(o.p,{children:"Because FE nodes only maintain StarRocks' metadata in their storage, 100 GB of HDD storage is enough for each FE node in most scenarios."}),"\n",(0,n.jsx)(o.h3,{id:"be-storage",children:"BE storage"}),"\n",(0,n.jsx)(o.h4,{id:"estimate-initial-storage-space-for-be",children:"Estimate initial storage space for BE"}),"\n",(0,n.jsx)(o.p,{children:"The total storage space that your StarRocks cluster will need is simultaneously influenced by the size of your raw data, the data replica count, and the compression ratio of the data compression algorithm you use."}),"\n",(0,n.jsx)(o.p,{children:"With the following formula, you can estimate the total storage space you will need for all BE nodes:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-Plain",children:"Total BE storage space = Raw data size * Replica count/Compression ratio\n\nRaw data size = Sum of the space taken up by all fields in a row * Row count\n"})}),"\n",(0,n.jsx)(o.p,{children:"In StarRocks, data in a table is first divided into multiple partitions and then into multiple tablets. Tablets are the basic logical units of data management in StarRocks. To ensure high data reliability, you can maintain multiple replicas of each tablet and store them across different BEs. By default, StarRocks maintains three replicas."}),"\n",(0,n.jsx)(o.p,{children:"Currently, StarRocks supports four data compression algorithms, which are listed in order from higher to lower compression ratio: zlib, Zstandard (or zstd), LZ4, and Snappy. They can provide a compression ratio from 3:1 to 5:1."}),"\n",(0,n.jsx)(o.p,{children:"After determining the total storage space, you can simply divide it by the number of BE nodes in your cluster to estimate the average storage space per BE node."}),"\n",(0,n.jsx)(o.h4,{id:"add-extra-storage-as-you-go",children:"Add extra storage as you go"}),"\n",(0,n.jsx)(o.p,{children:"If the BE storage space runs out as your raw data grows, you can supplement it by scaling your cluster vertically or horizontally, or simply scaling up your cloud storage."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Add new BE nodes to your StarRocks cluster"}),"\n",(0,n.jsxs)(o.p,{children:["You can add new BE nodes to your StarRocks cluster so that the data can be re-distributed evenly to more nodes. For detailed instructions, see ",(0,n.jsx)(o.a,{href:"/docs/administration/Scale_up_down",children:"Scale your StarRocks cluster - Scale BE out"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"After new BE nodes are added, StarRocks automatically re-balances the data among all BE nodes. Such auto-balancing is supported on all table types."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Add extra storage volumes to your BE nodes"}),"\n",(0,n.jsxs)(o.p,{children:["You can also add extra storage volumes to existing BE nodes. For detailed instructions, see ",(0,n.jsx)(o.a,{href:"/docs/administration/Scale_up_down",children:"Scale your StarRocks cluster - Scale BE up"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"After extra storage volumes are added, StarRocks automatically re-balances the data in all tables except Primary Key tables. In this situation, the distribution of data from Primary Key tables may be imbalanced across nodes, and consequently, queries against these tables are run slowly. Therefore, adding extra storage volumes to BE nodes is not recommended if your StarRocks cluster contains Primary Key tables."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Add cloud storage"}),"\n",(0,n.jsx)(o.p,{children:"If your StarRocks cluster is deployed on cloud, you can scale up your cloud storage on demand. For detailed instructions, contact your cloud provider."}),"\n"]}),"\n"]})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,a.ah)(),e.components);return o?(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,o,t)=>{t.d(o,{Zo:()=>i,ah:()=>s});var n=t(67294);const a=n.createContext({});function s(e){const o=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const r={};function i({components:e,children:o,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||r:s(e),n.createElement(a.Provider,{value:i},o)}}}]);