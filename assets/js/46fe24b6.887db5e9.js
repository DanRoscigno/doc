"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56792],{68995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const o={},c="Quick start: Deploy StarRocks with Docker",a={id:"quick_start/deploy_in_docker",title:"Quick start: Deploy StarRocks with Docker",description:"This quickstart provides a guide to:",source:"@site/versioned_docs/version-3.0/quick_start/deploy_in_docker.md",sourceDirName:"quick_start",slug:"/quick_start/deploy_in_docker",permalink:"/docs/3.0/quick_start/deploy_in_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/quick_start/deploy_in_docker.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Load and query data",permalink:"/docs/3.0/quick_start/Import_and_query"},next:{title:"Deploy StarRocks with Docker",permalink:"/docs/3.0/quick_start/deploy_with_docker"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Deploy",id:"step-1-deploy",level:2},{value:"Step 2: Connect to StarRocks",id:"step-2-connect-to-starrocks",level:2},{value:"Step 3: Use StarRocks",id:"step-3-use-starrocks",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",ol:"ol",pre:"pre",code:"code",strong:"strong",em:"em"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quick-start-deploy-starrocks-with-docker",children:"Quick start: Deploy StarRocks with Docker"}),"\n",(0,s.jsx)(n.p,{children:"This quickstart provides a guide to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})," to deploy StarRocks with one FE and one BE."]}),"\n",(0,s.jsx)(n.li,{children:"Connect to StarRocks with MySQL client."}),"\n",(0,s.jsx)(n.li,{children:"Create a table, insert some data, and query the data."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Docker"}),"\n",(0,s.jsx)(n.li,{children:"MySQL client"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-deploy",children:"Step 1: Deploy"}),"\n",(0,s.jsxs)(n.p,{children:["To choose a StarRocks version, go to the ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/starrocks/allin1-ubuntu/tags",children:"StarRocks Dockerhub repository"})," and choose a version based on the version tag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker run -p 9030:9030 -p 8030:8030 -p 8040:8040 -itd starrocks/allin1-ubuntu:3.0.0-rc01\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then you can check the container status using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"docker ps\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-connect-to-starrocks",children:"Step 2: Connect to StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks needs some time to get ready. We recommend that you wait at least 30 seconds before connecting."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'mysql -P9030 -h127.0.0.1 -uroot --prompt="StarRocks > "\n'})}),"\n",(0,s.jsx)(n.h2,{id:"step-3-use-starrocks",children:"Step 3: Use StarRocks"}),"\n",(0,s.jsxs)(n.p,{children:["Use the following commands to check the status of FE and BE. If ",(0,s.jsx)(n.code,{children:"Alive"})," shows true for both FE and BE, StarRocks is healthy and ready to go."]}),"\n",(0,s.jsx)(n.p,{children:"FE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"StarRocks > SHOW PROC '/frontends'\\G\n*************************** 1. row ***************************\n             Name: 47ecfdef4bd0_9010_1680695755143\n               IP: 47ecfdef4bd0\n      EditLogPort: 9010\n         HttpPort: 8030\n        QueryPort: 9030\n          RpcPort: 9020\n             Role: LEADER\n        ClusterId: 293521004\n             Join: true\n            Alive: true\nReplayedJournalId: 115\n    LastHeartbeat: 2023-04-05 12:01:32\n         IsHelper: true\n           ErrMsg:\n        StartTime: 2023-04-05 11:56:02\n          Version: 3.0.0-RC01-a99fb8571\n1 row in set (0.17 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"BE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/backends'\\G\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'StarRocks > SHOW PROC \'/backends\'\\G\n*************************** 1. row ***************************\n            BackendId: 10004\n                   IP: 47ecfdef4bd0\n        HeartbeatPort: 9050\n               BePort: 9060\n             HttpPort: 8040\n             BrpcPort: 8060\n        LastStartTime: 2023-04-05 11:56:26\n        LastHeartbeat: 2023-04-05 12:00:22\n                Alive: true\n SystemDecommissioned: false\nClusterDecommissioned: false\n            TabletNum: 30\n     DataUsedCapacity: 0.000\n        AvailCapacity: 192.752 GB\n        TotalCapacity: 235.983 GB\n              UsedPct: 18.32 %\n       MaxDiskUsedPct: 18.32 %\n               ErrMsg:\n              Version: 3.0.0-RC01-a99fb8571\n               Status: {"lastSuccessReportTabletsTime":"2023-04-05 11:59:27"}\n    DataTotalCapacity: 192.752 GB\n          DataUsedPct: 0.00 %\n             CpuCores: 7\n    NumRunningQueries: 0\n           MemUsedPct: 0.08 %\n           CpuUsedPct: 0.4 %\n1 row in set (0.02 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now you can create a table and insert some data."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"NOTE:"})})," This quickstart deploys one BE, you need to add ",(0,s.jsx)(n.code,{children:'properties ("replication_num" = "1")'})," in the CREATE TABLE clause, so only one replica of data is persisted in the BE."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE DATABASE test;\n\nUSE test;\n\nCREATE TABLE tbl(c1 int, c2 int) distributed by hash(c1) properties ("replication_num" = "1");\n\nINSERT INTO tbl VALUES (1, 1), (2, 2), (3, 3);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Query the data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"StarRocks > SELECT * FROM tbl;\n+------+------+\n| c1   | c2   |\n+------+------+\n|    3 |    3 |\n|    1 |    1 |\n|    2 |    2 |\n+------+------+\n3 rows in set (0.03 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var s=t(67294);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:o(e),s.createElement(r.Provider,{value:a},n)}}}]);