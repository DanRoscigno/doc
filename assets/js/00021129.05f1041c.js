"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67060],{63622:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=s(85893),i=s(11151);const n={displayed_sidebar:"English"},d="SHOW BACKENDS",a={id:"sql-reference/sql-statements/Administration/SHOW_BACKENDS",title:"SHOW BACKENDS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_BACKENDS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_BACKENDS",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BACKENDS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/SHOW_BACKENDS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SET",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/SET"},next:{title:"SHOW BROKER",permalink:"/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BROKER"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Return",id:"return",level:2},{value:"Example",id:"example",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"show-backends",children:"SHOW BACKENDS"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Shows the information of all BE nodes in the cluster."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,r.jsx)(t.p,{children:"Only users with the OPERATE or NODE privilege on the SYSTEM level can perform this operation."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"SHOW BACKENDS\n"})}),"\n",(0,r.jsx)(t.h2,{id:"return",children:"Return"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"+-----------+-----+---------------+--------+----------+----------+---------------+---------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------+--------+-------------------+-------------+----------+\n| BackendId | IP  | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime | LastHeartbeat | Alive | SystemDecommissioned | ClusterDecommissioned | TabletNum | DataUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | ErrMsg | Version  | Status | DataTotalCapacity | DataUsedPct | CpuCores |\n+-----------+-----+---------------+--------+----------+----------+---------------+---------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------+--------+-------------------+-------------+----------+\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Return"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Description"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BackendId"}),(0,r.jsx)(t.td,{children:"The ID of the BE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IP"}),(0,r.jsx)(t.td,{children:"The IP address of the BE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HeartbeatPort"}),(0,r.jsx)(t.td,{children:"The heartbeat port of the BE node. It is used to receive heartbeats from the FE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BePort"}),(0,r.jsx)(t.td,{children:"Thrift server port of the BE node. It is used to receive requests from the FE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"HttpPort"}),(0,r.jsx)(t.td,{children:"HTTP server port of the BE node. It is used to access the BE node via web page."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BrpcPort"}),(0,r.jsx)(t.td,{children:"BRPC port of the BE node. It is used for communication across BE nodes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastStartTime"}),(0,r.jsx)(t.td,{children:"The last time when the BE node is started."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"LastHeartbeat"}),(0,r.jsx)(t.td,{children:"The last time when the FE node sends a heartbeat and the BE responds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alive"}),(0,r.jsxs)(t.td,{children:["Whether the BE node is alive or not.",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"true"}),": the BE node is alive."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"false"}),": the BE node is not alive. "]})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SystemDecommissioned"}),(0,r.jsxs)(t.td,{children:["Whether the BE node is decommissioned or not. Before it is decommissioned, the BE node migrates the data to other BE nodes. Data loading and queries are not affected during migration.",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"true"}),": the cluster has marked the BE node as decommissioned. The data could be successfully migrated or migrating."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"false"}),": the BE node is running."]})]})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ClusterDecommissioned"}),(0,r.jsx)(t.td,{children:"This parameter is used for system compatibility."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TabletNum"}),(0,r.jsx)(t.td,{children:"The number of tablets on the BE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataUsedCapacity"}),(0,r.jsx)(t.td,{children:"The storage capacity occupied by the data file."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"AvailCapacity"}),(0,r.jsx)(t.td,{children:"Available storage capacity in the BE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TotalCapacity"}),(0,r.jsxs)(t.td,{children:["The total storage capacity. It is equivalent to ",(0,r.jsx)(t.code,{children:"DataUsedCapacity"})," + ",(0,r.jsx)(t.code,{children:"AvailCapacity"})," + Storage capacity occupied by the non-data files."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UsedPct"}),(0,r.jsx)(t.td,{children:"The percentage of the used storage capacity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"MaxDiskUsedPct"}),(0,r.jsx)(t.td,{children:"If a BE node has multiple directories to store data, this parameter shows the maximum percentage of the used storage capacity among all directories."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ErrMsg"}),(0,r.jsx)(t.td,{children:"The error message returned when the BE node fails to receive the heartbeat from the FE node."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Version"}),(0,r.jsx)(t.td,{children:"The StarRocks version of cluster."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Status"}),(0,r.jsx)(t.td,{children:"The last time when the BE node reports the tablet number to the FE node. Displayed in JSON format."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataTotalCapacity"}),(0,r.jsxs)(t.td,{children:["It is equivalent to ",(0,r.jsx)(t.code,{children:"DataUsedCapacity"})," + ",(0,r.jsx)(t.code,{children:"AvailCapacity"}),". It indicates the sum of the storage capacity occupied by the data file and the available storage capacity in the BE node."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataUsedPct"}),(0,r.jsxs)(t.td,{children:["It is equivalent to ",(0,r.jsx)(t.code,{children:"DataUsedCapacity"}),"/",(0,r.jsx)(t.code,{children:"DataTotalCapacity"}),". It indicates the proportion of the storage capacity occupied by the data file to the sum of the data-occupied storage capacity and the available storage capacity."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CpuCores"}),(0,r.jsx)(t.td,{children:"The number of CPU cores in the BE node."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"View the information of all BE nodes in the cluster."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:'SHOW BACKENDS;\n\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n| BackendId | IP      | HeartbeatPort | BePort | HttpPort | BrpcPort | LastStartTime       | LastHeartbeat       | Alive | SystemDecommissioned | ClusterDecommissioned | TabletNum | DataUsedCapacity | AvailCapacity | TotalCapacity | UsedPct | MaxDiskUsedPct | ErrMsg | Version              | Status                                                 | DataTotalCapacity | DataUsedPct | CpuCores |\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n| 10002     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:10 | 2022-09-08 15:14:21 | true  | false                | false                 | 21753     | 25.122 GB        | 1.088 TB      | 1.968 TB      | 44.72 % | 44.72 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:14:13"} | 1.113 TB          | 2.20 %      | 16       |\n| 10003     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:20 | 2022-09-08 15:14:21 | true  | false                | false                 | 21754     | 25.121 GB        | 1.169 TB      | 1.968 TB      | 40.61 % | 40.61 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:14:22"} | 1.194 TB          | 2.06 %      | 16       |\n| 10004     | x.x.x.x | 9254          | 9260   | 8238     | 8260     | 2022-09-08 14:37:39 | 2022-09-08 15:14:21 | true  | false                | false                 | 21754     | 25.112 GB        | 1.172 TB      | 1.968 TB      | 40.46 % | 40.46 %        |        | MAIN-RELEASE-d094052 | {"lastSuccessReportTabletsTime":"2022-09-08 15:13:42"} | 1.197 TB          | 2.05 %      | 16       |\n+-----------+---------+---------------+--------+----------+----------+---------------------+---------------------+-------+----------------------+-----------------------+-----------+------------------+---------------+---------------+---------+----------------+--------+----------------------+--------------------------------------------------------+-------------------+-------------+----------+\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>n});var r=s(67294);const i=r.createContext({});function n(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||d:n(e),r.createElement(i.Provider,{value:a},t)}}}]);