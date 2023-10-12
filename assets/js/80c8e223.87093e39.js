"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32479],{75989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(85893),i=a(11151);const s={displayed_sidebar:"documentation"},r="Architecture",o={id:"introduction/Architecture",title:"Architecture",description:"StarRocks has a simple architecture. The entire system consists of only two types of components, frontends (FEs) and backends (BEs). StarRocks does not rely on any external components, simplifying deployment and maintenance. FEs and BEs can be horizontally scaled without service downtime. In addition, StarRocks has a replica mechanism for metadata and service data, which increases data reliability and efficiently prevents single points of failure (SPOFs).",source:"@site/versioned_docs/version-3.0/introduction/Architecture.md",sourceDirName:"introduction",slug:"/introduction/Architecture",permalink:"/doc/docs/3.0/introduction/Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/introduction/Architecture.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"What is StarRocks?",permalink:"/doc/docs/3.0/introduction/what_is_starrocks"},next:{title:"Features",permalink:"/doc/docs/3.0/introduction/Features"}},c={},l=[{value:"FE and BE",id:"fe-and-be",level:2},{value:"Data management",id:"data-management",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",img:"img",h2:"h2",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks has a simple architecture. The entire system consists of only two types of components, frontends (FEs) and backends (BEs). StarRocks does not rely on any external components, simplifying deployment and maintenance. FEs and BEs can be horizontally scaled without service downtime. In addition, StarRocks has a replica mechanism for metadata and service data, which increases data reliability and efficiently prevents single points of failure (SPOFs)."}),"\n",(0,n.jsx)(t.p,{children:"StarRocks is compatible with MySQL protocols and supports standard SQL. Users can easily connect to StarRocks from MySQL clients to gain instant and valuable insights."}),"\n",(0,n.jsx)(t.p,{children:"The following figure shows the architecture of StarRocks."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture",src:a(87368).Z+"",width:"1478",height:"1018"})}),"\n",(0,n.jsx)(t.h2,{id:"fe-and-be",children:"FE and BE"}),"\n",(0,n.jsx)(t.p,{children:"FEs are responsible for metadata management, client connection management, query planning, and query scheduling. Each FE stores and maintains a complete copy of metadata in its memory, which guarantees indiscriminate services among the FEs. FEs can work as the leader, followers, and observers. Followers can elect a leader according to the Paxos-like BDB JE protocol. BDB JE is short for Berkeley DB Java Edition."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Leader"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The leader FE is elected from follower FEs. To perform leader election, more than half of the follower FEs in the cluster must be active. When the leader FE fails, follower FEs will start another round of leader election."}),"\n",(0,n.jsx)(t.li,{children:"The leader FE reads and writes metadata. Follower and observer FEs can only read metadata. They route metadata write requests to the leader FE. The leader FE updates the metadata and then uses BDE JE to synchronize the metadata changes to the follower and observer FEs. Data writes are considered successful only after the metadata changes are synchronized to more than half of the follower FEs."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Follower"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Followers can only read metadata. They synchronize and replay logs from the leader FE to update metadata."}),"\n",(0,n.jsx)(t.li,{children:"Followers participate in leader election, which requires more than half of the followers in the cluster be active."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Observer"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Observers are mainly used to increase the query concurrency of the cluster."}),"\n",(0,n.jsx)(t.li,{children:"Observers do not participate in leader election and therefore, will not add leader selection pressure to the cluster."}),"\n",(0,n.jsx)(t.li,{children:"Observers synchronize and replay logs from the leader FE to update metadata."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"BEs are responsible for data storage and SQL execution."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Data storage: BEs have equivalent data storage capabilities. FEs distribute data to BEs based on predefined rules. BEs transform the ingested data, write the data into the required format, and generate indexes for the data."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"SQL execution: When an SQL query arrives, FEs parse it into a logical execution plan according to the semantics of the query, and then transform the logical plan into physical execution plans that can be executed on BEs. BEs that store the destination data execute the query. This eliminates the need for data transmission and copy, achieving high query performance."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"data-management",children:"Data management"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks is a column-oriented database system. It uses the partitioning and bucketing mechanism to manage data. Data in a table is first divided into multiple partitions and then into multiple tablets. Tablets are the basic logical units of data management in StarRocks. Each tablet can have multiple replicas that can be stored across different BEs. You can specify the number of tablets and leave StarRocks to take care of the tablets."}),"\n",(0,n.jsx)(t.p,{children:"Partitions and tablets reduce table scans and increase query concurrency. Replicas facilitate data backup and restoration, preventing data loss."}),"\n",(0,n.jsx)(t.p,{children:"In the following figure, the table is divided into four partitions based on time. Data in the first partition is further split into four tablets. Each tablet has three replicas, which are stored on three different BEs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture",src:a(96224).Z+"",width:"1200",height:"478"})}),"\n",(0,n.jsx)(t.p,{children:"Since one table is split into multiple tablets, StarRocks can schedule one SQL statement to all the tablets for parallel processing, fully utilizing the computing power of multiple physical machines and cores. This also helps offload the query pressure to multiple nodes, increasing service availability. You can add physical machines on demand to achieve high concurrency."}),"\n",(0,n.jsx)(t.p,{children:"The distribution of tablets is not affected or confined by physical nodes. If the number of BEs changes (for example, when you add or remove a BE), ongoing services can proceed without any interruption. Node changes will trigger automatic migration of tablets. If BEs are added, some tablets will be automatically migrated to the new BEs for more even data distribution. If BEs are removed, tablets on these BEs will be automatically migrated to other BEs, ensuring unchanged number of replicas. Auto tablet migration helps easily achieve auto scaling of StarRocks clusters, eliminating the need for manual data re-distribution."}),"\n",(0,n.jsx)(t.p,{children:"StarRocks uses a multi-replica mechanism (3 by default) for tablets. Replicas ensure high data reliability and service availability. The failure of one node will not affect the availability of the overall services. You can also increase the number of replicas to achieve high query concurrency."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},87368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.1-1-7b2a08db757d1d30c17b6b6b47d127d8.png"},96224:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1.1-2-1d76fff4b6ab967556255e7e637feda1.png"},11151:(e,t,a)=>{a.d(t,{Zo:()=>o,ah:()=>s});var n=a(67294);const i=n.createContext({});function s(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||r:s(e),n.createElement(i.Provider,{value:o},t)}}}]);