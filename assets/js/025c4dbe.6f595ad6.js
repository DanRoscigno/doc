"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45368],{46342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const a={displayed_sidebar:"English"},r="Deploy StarRocks",o={id:"quick_start/Deploy",title:"Deploy StarRocks",description:"Manual deployment allows users to quickly leverage StarRocks to do operation and maintenance tasks.",source:"@site/versioned_docs/version-2.2/quick_start/Deploy.md",sourceDirName:"quick_start",slug:"/quick_start/Deploy",permalink:"/docs/2.2/quick_start/Deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/quick_start/Deploy.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Data Flow and Control Flow",permalink:"/docs/2.2/quick_start/Data_flow_and_control_flow"},next:{title:"Data import and query",permalink:"/docs/2.2/quick_start/Import_and_query"}},l={},c=[{value:"Get the Binary Package",id:"get-the-binary-package",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"FE Deployment",id:"fe-deployment",level:2},{value:"Basic Configuration for FE",id:"basic-configuration-for-fe",level:3},{value:"FE Single Instance Deployment",id:"fe-single-instance-deployment",level:3},{value:"Use MySQL Client to Access FE",id:"use-mysql-client-to-access-fe",level:3},{value:"FE High-Availability Cluster Deployment",id:"fe-high-availability-cluster-deployment",level:3},{value:"BE Deployment",id:"be-deployment",level:2},{value:"Basic Configuration for BE",id:"basic-configuration-for-be",level:3},{value:"BE Instance Deployment",id:"be-instance-deployment",level:3},{value:"Broker Deployment",id:"broker-deployment",level:2},{value:"Parameter Settings",id:"parameter-settings",level:2},{value:"Use MySQL Client to Access StarRocks",id:"use-mysql-client-to-access-starrocks",level:2},{value:"Root User Login",id:"root-user-login",level:3},{value:"Create a New User",id:"create-a-new-user",level:3},{value:"Create a Database",id:"create-a-database",level:3},{value:"Authorization an Account",id:"authorization-an-account",level:3},{value:"Create Tables",id:"create-tables",level:3},{value:"Build in docker",id:"build-in-docker",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3",blockquote:"blockquote",a:"a",div:"div",strong:"strong",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-starrocks",children:"Deploy StarRocks"}),"\n",(0,s.jsx)(n.p,{children:"Manual deployment allows users to quickly leverage StarRocks to do operation and maintenance tasks."}),"\n",(0,s.jsx)(n.h2,{id:"get-the-binary-package",children:"Get the Binary Package"}),"\n",(0,s.jsx)(n.p,{children:"Please download the latest stable version of the StarRocks binary package."}),"\n",(0,s.jsx)(n.p,{children:"For example, below is what you get after decompressing the package \u201cstarrocks-1.0.0.tar.gz\u201d:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"StarRocks-XX-1.0.0\n\n\u251c\u2500\u2500 be \xa0# BE Catalog\n\u2502 \xa0 \u251c\u2500\u2500 bin\n\u2502 \xa0 \u2502 \xa0 \u251c\u2500\u2500 start_be.sh # BE start command\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 stop_be.sh \xa0# BE shutdown command\n\u2502 \xa0 \u251c\u2500\u2500 conf\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 be.conf \xa0 \xa0 # BE configuration file\n\u2502 \xa0 \u251c\u2500\u2500 lib\n\u2502 \xa0 \u2502 \xa0 \u251c\u2500\u2500 starrocks_be \xa0# BE executable file\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 meta_tool\n\u2502 \xa0 \u2514\u2500\u2500 www\n\u251c\u2500\u2500 fe \xa0# FE Catalog\n\u2502 \xa0 \u251c\u2500\u2500 bin\n\u2502 \xa0 \u2502 \xa0 \u251c\u2500\u2500 start_fe.sh # FE start command\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 stop_fe.sh \xa0# FE shutdown command\n\u2502 \xa0 \u251c\u2500\u2500 conf\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 fe.conf \xa0 \xa0 # FE configuration file\n\u2502 \xa0 \u251c\u2500\u2500 lib\n\u2502 \xa0 \u2502 \xa0 \u251c\u2500\u2500 starrocks-fe.jar \xa0# FE jar package\n\u2502 \xa0 \u2502 \xa0 \u2514\u2500\u2500 *.jar \xa0 \xa0 \xa0 \xa0 \xa0 # FE dependent jar packages\n\u2502 \xa0 \u2514\u2500\u2500 webroot\n\u2514\u2500\u2500 udf\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsx)(n.p,{children:"You need three physical machines that support:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux (Centos 7+)"}),"\n",(0,s.jsx)(n.li,{children:"Java 1.8+"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The CPU needs to support AVX2 instruction sets. When running ",(0,s.jsx)(n.code,{children:"cat /proc/cpuinfo |grep avx2"}),", you should get a result output indicating the support. If not, we recommend that you replace the machine. StarRocks uses vectorization technology that requires instruction set support to be effective."]}),"\n",(0,s.jsx)(n.p,{children:"You can distribute and decompress the binary package to the deployment path of your target host, and create a user account to manage it."}),"\n",(0,s.jsx)(n.h2,{id:"fe-deployment",children:"FE Deployment"}),"\n",(0,s.jsx)(n.h3,{id:"basic-configuration-for-fe",children:"Basic Configuration for FE"}),"\n",(0,s.jsxs)(n.p,{children:["The FE configuration file is ",(0,s.jsx)(n.code,{children:"StarRocks-XX-1.0.0/fe/conf/fe.conf"}),". The default configuration is sufficient to start the cluster."]}),"\n",(0,s.jsx)(n.h3,{id:"fe-single-instance-deployment",children:"FE Single Instance Deployment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd StarRocks-XX-1.0.0/fe\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Step 1: Customize the configuration file ",(0,s.jsx)(n.code,{children:"conf/fe.conf"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'JAVA_OPTS = "-Xmx4096m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$STARROCKS_HOME/log/fe.gc.log"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can adjust ",(0,s.jsx)(n.code,{children:"-Xmx4096m"})," based on the FE memory size. It is recommended to set the memory size to 16G or above to avoid GC. All StarRocks metadata is stored in the memory."]}),"\n",(0,s.jsxs)(n.p,{children:["Step 2: Create a metadata directory and add the meta_dir config to ",(0,s.jsx)(n.code,{children:"conf/fe.conf"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p meta\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Add the meta_dir config to ",(0,s.jsx)(n.code,{children:"conf/fe.conf"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"meta_dir = the absolute path of meta dir you created before\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 3: Start the FE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bin/start_fe.sh --daemon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Step 4: Look up the log file (",(0,s.jsx)(n.code,{children:"log/fe.log"}),") to confirm that the FE has been started successfully."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["check ",(0,s.jsx)(n.code,{children:"log/fe.log"})," to confirm."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"2020-03-16 20:32:14,686 INFO 1 [FeServer.start():46] thrift server started.\n\n2020-03-16 20:32:14,696 INFO 1 [NMysqlServer.start():71] Open mysql server success on 9030\n\n2020-03-16 20:32:14,696 INFO 1 [QeService.start():60] QE service start.\n\n2020-03-16 20:32:14,825 INFO 76 [HttpServer$HttpServerThread.run():210] HttpServer started with port 8030\n\n...\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the FE fails to start, check if the port number is occupied. If so, modify the port number (",(0,s.jsx)(n.code,{children:"http_port"}),") in the configuration file."]}),"\n",(0,s.jsx)(n.li,{children:"You can also use the jps command to view the java process and see if StarRocks FE exists."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"use-mysql-client-to-access-fe",children:"Use MySQL Client to Access FE"}),"\n",(0,s.jsx)(n.p,{children:"Step 1: Install the MySQL client if you haven\u2019t done so."}),"\n",(0,s.jsx)(n.p,{children:"Ubuntu\uff1asudo apt-get install mysql-client"}),"\n",(0,s.jsx)(n.p,{children:"Centos\uff1asudo yum install mysql-client"}),"\n",(0,s.jsx)(n.p,{children:"Step 2: Connect using the MySQL client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql -h 127.0.0.1 -P9030 -uroot\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: The default root user password is empty. The port is query_port in fe/conf/fe.conf, default to 9030."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Step 3: Check the FE status."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SHOW PROC '/frontends'\\G\n\n***1\\. row***\n\nName: 172.16.139.24_9010_1594200991015\n\nIP: 172.16.139.24\n\nHostName: starrocks-sandbox01\n\nEditLogPort: 9010\n\nHttpPort: 8030\n\nQueryPort: 9030\n\nRpcPort: 9020\n\nRole: FOLLOWER\n\nIsMaster: true\n\nClusterId: 861797858\n\nJoin: true\n\nAlive: true\n\nReplayedJournalId: 64\n\nLastHeartbeat: 2020-03-23 20:15:07\n\nIsHelper: true\n\nErrMsg:\n\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Role"})," is ",(0,s.jsx)(n.code,{children:"FOLLOWER"}),", indicating that the FE is eligible to be elected as the leader. ",(0,s.jsx)(n.code,{children:"IsMaster"})," is true, indicating that the FE is currently the leader node."]}),"\n",(0,s.jsxs)(n.p,{children:["If the MySQL client connection is not successful, use the log file (",(0,s.jsx)(n.code,{children:"log/fe.warn.log"}),") for troubleshooting. Since it is the initial setup, feel free to start over if you encounter any unexpected problems."]}),"\n",(0,s.jsx)(n.h3,{id:"fe-high-availability-cluster-deployment",children:"FE High-Availability Cluster Deployment"}),"\n",(0,s.jsx)(n.p,{children:"FE's high-availability clusters use a primary-secondary replication architecture to avoid single points of failure. FE uses the raft-like BDBJE protocol to complete leader selection, log replication, and failover. In FE clusters, instances are divided into two roles -- follower and observer. The follower is a voting member of the replication protocol, participating in the selection of the leader and submitting logs. Its general number is odd (2n+1). It takes majority (n+1) for confirmation and tolerates minority (n) failure. The observer is a non-voting member and is used to subscribe to replication logs asynchronously. The status of the observer lags behind the follower, similar to the leaner role in other replication protocols."}),"\n",(0,s.jsx)(n.p,{children:"The FE cluster automatically selects the leader node from the followers. The leader node executes all state changes. A change can be initiated from a non-leader node, and then forwarded to the leader node for execution. The non-leader node records the LSN of the most recent change in the replication log. The read operation can be performed directly on the non-leader node, but it needs to wait until the state of the non-leader node gets synchronized with the LSN of the last operation. Observer nodes can increase the read load capacity of the FE cluster. Users with little urgency can read the observer nodes."}),"\n",(0,s.jsx)(n.p,{children:"The clock difference between the FE nodes should not exceed 5s. Use the NTP protocol to calibrate the time."}),"\n",(0,s.jsx)(n.p,{children:"A single FE node can only be deployed on one machine. The HTTP ports of all FE nodes need to be the same."}),"\n",(0,s.jsx)(n.p,{children:"For cluster deployment, follow the following steps to add FE instances one by one."}),"\n",(0,s.jsx)(n.p,{children:"Step 1: Distribute binary and configuration files (same as a single instance)."}),"\n",(0,s.jsx)(n.p,{children:"Step 2: Connect the MySQL client to the existing FE, and add the information of the new instance, including role, IP, port:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM ADD FOLLOWER "host:port";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM ADD OBSERVER "host:port";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The host is the IP of the machine. If the machine has multiple IPs, select the IP in priority_networks. For example, ",(0,s.jsx)(n.code,{children:"priority_networks=192.168.1.0/24"})," can be set to use the subnet ",(0,s.jsx)(n.code,{children:"192.168.1.x"})," for communication. The port is ",(0,s.jsx)(n.code,{children:"edit_log_port"}),", default to ",(0,s.jsx)(n.code,{children:"9010"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: Due to security considerations, StarRocks' FE and BE can only listen to one IP for communication. If a machine has multiple network cards, StarRocks may not be able to automatically find the correct IP. For example, run the ",(0,s.jsx)(n.code,{children:"ifconfig"})," command to get that ",(0,s.jsx)(n.code,{children:"eth0 IP"})," is ",(0,s.jsx)(n.code,{children:"192.168.1.1"}),", ",(0,s.jsx)(n.code,{children:"docker0 : 172.17.0.1"}),". We can set the word network ",(0,s.jsx)(n.code,{children:"192.168.1.0/24"})," to designate eth0 as the communication IP. Here we use ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",children:"CIDR"})," notation to specify the subnet range where the IP is located, so that it can be used on all BE and FE. ",(0,s.jsx)(n.code,{children:"priority_networks"})," is written in both ",(0,s.jsx)(n.code,{children:"fe.conf"})," and ",(0,s.jsx)(n.code,{children:"be.conf"}),". This attribute indicates which IP to use when the FE or BE is started. The example is as follows: ",(0,s.jsx)(n.code,{children:"priority_networks=10.1.3.0/24"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If an error occurs, delete the FE by using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'alter system drop follower "fe_host:edit_log_port";\nalter system drop observer "fe_host:edit_log_port";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Step 3: FE nodes need to be interconnected in pairs to complete master selection, voting, log submission, and replication. When the FE node is first initiated, a node in the existing cluster needs to be designated as a helper. The helper node gets the configuration information of all the FE nodes in the cluster to establish a connection. Therefore, during initiation, specify the ",(0,s.jsx)(n.code,{children:"--helper"})," parameter:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./bin/start_fe.sh --helper host:port --daemon\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The host is the IP of the helper node. If there are multiple IPs, select the IP in ",(0,s.jsx)(n.code,{children:"priority_networks"}),". The port is ",(0,s.jsx)(n.code,{children:"edit_log_port"}),", default to ",(0,s.jsx)(n.code,{children:"9010"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There is no need to specify the ",(0,s.jsx)(n.code,{children:"--helper"})," parameter for future starts. The FE stores other FEs\u2019 configuration information in the local directory. To start directly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./bin/start_fe.sh --daemon\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 4: Check the cluster status and confirm that the deployment is successful:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SHOW PROC '/frontends'\\G\n\n***1\\. row***\n\nName: 172.26.108.172_9010_1584965098874\n\nIP: 172.26.108.172\n\nHostName: starrocks-sandbox01\n\n......\n\nRole: FOLLOWER\n\nIsMaster: true\n\n......\n\nAlive: true\n\n......\n\n***2\\. row***\n\nName: 172.26.108.174_9010_1584965098874\n\nIP: 172.26.108.174\n\nHostName: starrocks-sandbox02\n\n......\n\nRole: FOLLOWER\n\nIsMaster: false\n\n......\n\nAlive: true\n\n......\n\n***3\\. row***\n\nName: 172.26.108.175_9010_1584965098874\n\nIP: 172.26.108.175\n\nHostName: starrocks-sandbox03\n\n......\n\nRole: FOLLOWER\n\nIsMaster: false\n\n......\n\nAlive: true\n\n......\n\n3 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alive is true, indicating the node is successfully added. In the above example, 172.26.108.172_9010_1584965098874 is the main FE node."}),"\n",(0,s.jsx)(n.h2,{id:"be-deployment",children:"BE Deployment"}),"\n",(0,s.jsx)(n.h3,{id:"basic-configuration-for-be",children:"Basic Configuration for BE"}),"\n",(0,s.jsxs)(n.p,{children:["The BE configuration file is ",(0,s.jsx)(n.code,{children:"StarRocks-XX-1.0.0/be/conf/be.conf"}),". The default configuration is sufficient to start the cluster."]}),"\n",(0,s.jsx)(n.h3,{id:"be-instance-deployment",children:"BE Instance Deployment"}),"\n",(0,s.jsx)(n.p,{children:"Users can use the following steps to add BE to the StarRocks cluster. In most cases, at least three BE instances are deployed. The steps for adding each instance are the same."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd StarRocks-XX-1.0.0/be\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 1: Create a data storage directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mkdir -p storage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 2: Add a BE node via the MySQL client."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM ADD BACKEND "host:port";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The IP address should match the ",(0,s.jsx)(n.code,{children:"priority_networks"})," setting; ",(0,s.jsx)(n.code,{children:"portheartbeat_service_port"})," defaults to ",(0,s.jsx)(n.code,{children:"9050"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If an error occurs, delete the BE node using the following commands:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'alter system decommission backend "be_host:be_heartbeat_service_port";'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'alter system dropp backend "be_host:be_heartbeat_service_port";'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Step 3: Start the BE."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"bin/start_be.sh --daemon\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 4: Check the BE status to confirm it is ready."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> SHOW PROC '/backends'\\G\n\n***1\\. row***\n\nBackendId: 10002\n\nCluster: default\\_cluster\n\nIP: 172.16.139.24\n\nHostName: starrocks-sandbox01\n\nHeartbeatPort: 9050\n\nBePort: 9060\n\nHttpPort: 8040\n\nBrpcPort: 8060\n\nLastStartTime: 2020-03-23 20:19:07\n\nLastHeartbeat: 2020-03-23 20:34:49\n\nAlive: true\n\nSystemDecommissioned: false\n\nClusterDecommissioned: false\n\nTabletNum: 0\n\nDataUsedCapacity: .000\n\nAvailCapacity: 327.292 GB\n\nTotalCapacity: 450.905 GB\n\nUsedPct: 27.41 %\n\nMaxDiskUsedPct: 27.41 %\n\nErrMsg:\n\nVersion:\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"isAlive"})," is true, indicating that the BE is successfully connected to the cluster. If not, check the log file (",(0,s.jsx)(n.code,{children:"be.WARNING"}),") to determine the root cause."]}),"\n",(0,s.jsxs)(n.p,{children:["The following message indicates that there is a problem with the ",(0,s.jsx)(n.code,{children:"priority_networks"})," settings."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"W0708 17:16:27.308156 11473 heartbeat\\_server.cpp:82\\] backend ip saved in leader does not equal to backend local ip127.0.0.1 vs. 172.16.179.26\n"})}),"\n",(0,s.jsx)(n.p,{children:"At this time, you need to use the following command to drop the originally added BE, and then add it back with the correct IP."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> ALTER SYSTEM DROP BACKEND "172.16.139.24:9050";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Since it is the initial setup, feel free to start over if you encounter any unexpected problems."}),"\n",(0,s.jsx)(n.h2,{id:"broker-deployment",children:"Broker Deployment"}),"\n",(0,s.jsxs)(n.p,{children:["The configuration file is ",(0,s.jsx)(n.code,{children:"apache_hdfs_broker/conf/apache_hdfs_broker.conf"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Note: If the machine has multiple IPs, priority_networks needs to be configured in the same way as the FE."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If there is a special HDFS configuration, copy ",(0,s.jsx)(n.code,{children:"hdfs-site.xml"})," to the conf directory."]}),"\n",(0,s.jsxs)(n.p,{children:["Step 1",(0,s.jsx)(n.div,{})," start the broker:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./apache_hdfs_broker/bin/start_broker.sh --daemon\n"})}),"\n",(0,s.jsx)(n.p,{children:"Step 2: Add the broker node to the cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL> ALTER SYSTEM ADD BROKER broker1 "172.16.139.24:8000";\n'})}),"\n",(0,s.jsx)(n.p,{children:"Step 3: Check the broker status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL> SHOW PROC '/brokers'\\G\n*************************** 1. row ***************************\n          Name: broker1\n            IP: 172.16.139.24\n          Port: 8000\n         Alive: true\n LastStartTime: 2020-04-01 19:08:35\nLastUpdateTime: 2020-04-01 19:08:45\n        ErrMsg: \n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Alive"})," is true, indicating the state is normal."]}),"\n",(0,s.jsx)(n.h2,{id:"parameter-settings",children:"Parameter Settings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Swappiness"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Shut down the swap space to avoid impacting performance when transferring data from the real memory to the virtual memory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo 0 | sudo tee /proc/sys/vm/swappiness\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Compaction"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When using aggregate models or updating models, data gets imported at a high speed. You can modify the following parameters to speed up compaction."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cumulative_compaction_num_threads_per_disk = 4\nbase_compaction_num_threads_per_disk = 2\ncumulative_compaction_check_interval_seconds = 2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Parallelism"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can modify the parallelism of StarRocks (similar to clickhouse set max_threads= 8) when executing commands via the client. The parallelism can be set to half the number of the current machine's CPU cores."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set global parallel_fragment_exec_instance_num =  8;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"use-mysql-client-to-access-starrocks",children:"Use MySQL Client to Access StarRocks"}),"\n",(0,s.jsx)(n.h3,{id:"root-user-login",children:"Root User Login"}),"\n",(0,s.jsxs)(n.p,{children:["Use the MySQL client to connect to ",(0,s.jsx)(n.code,{children:"query_port (9030)"})," of a certain FE instance. StarRocks has a built-in root user, its password is empty by default."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mysql -h fe_host -P9030 -u root\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clean up the environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql > drop database if exists example_db;\n\nmysql > drop user test;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-new-user",children:"Create a New User"}),"\n",(0,s.jsx)(n.p,{children:"Create a user using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql > create user 'test' identified by '123456';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-database",children:"Create a Database"}),"\n",(0,s.jsx)(n.p,{children:"Only root account has the right to create a database. Log in as root user to create a database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql > create database example_db;\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the database is created, you can view the database information using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql > show databases;\n\n+--------------------+\n| Database \xa0 \xa0 \xa0 \xa0 \xa0 |\n+--------------------+\n| example_db \xa0 \xa0 \xa0 \xa0 |\n| information_schema |\n+--------------------+\n2 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"information_schema"})," exists to be compatible with the MySQL protocol. In reality, the information may not be accurate. Therefore, it is recommended to directly query the corresponding database to get information."]}),"\n",(0,s.jsx)(n.h3,{id:"authorization-an-account",children:"Authorization an Account"}),"\n",(0,s.jsx)(n.p,{children:"Once the database is created, you can authorize test accounts to have root account permissions. Once done, log in to the test account and manage the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql > grant all on example_db to test;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log out of the root account and log in as a test user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql > exit\n\nmysql -h 127.0.0.1 -P9030 -utest -p123456\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-tables",children:"Create Tables"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports two ways of creating tables -- bucketing and composite partition."}),"\n",(0,s.jsx)(n.p,{children:"In a composite partition:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first level is partition. Users can specify a certain key as the partition key (currently only integer and time are supported), and set the value range of each partition."}),"\n",(0,s.jsx)(n.li,{children:"The second level is called tablet, which is bucket. Users can specify several keys (or none, that is, all KEY columns) and the number of buckets for distributing data by HASH."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Composite partitions are recommended for the following scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There are time keys or similar keys with ordered values. Such keys can be used as partition keys. Partition granularity can be evaluated based on import frequency, partition data volume, etc."}),"\n",(0,s.jsxs)(n.li,{children:["If there is a requirement to delete historical data (for example, only keep the data of the last N days), use composite partitions to achieve that goal. You can also delete data by sending a ",(0,s.jsx)(n.code,{children:"DELETE"})," statement in the specified partition."]}),"\n",(0,s.jsx)(n.li,{children:"To solve the problem of data skew. Each partition can individually specify the number of buckets. For example, when partitioning by day and the amount of data varies greatly each day, you can specify the number of buckets in the partition to reasonably divide the data into different partitions. It is recommended to choose easily differentiable keys as the bucket keys."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Users can use buckets, in which case the data is only distributed by HASH."}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s see how to create a table with buckets."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Switch to the database: ",(0,s.jsx)(n.code,{children:"mysql> use example_db"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Create a logical table named table1. Use the full hash to divide buckets; list the buckets as siteid and the number of buckets as 10. The schema of the table is as follows:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"siteid: The type is INT (4 bytes), the default value is 10"}),"\n",(0,s.jsx)(n.li,{children:"cidy_code: The type is SMALLINT (2 bytes)"}),"\n",(0,s.jsx)(n.li,{children:"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string"}),"\n",(0,s.jsx)(n.li,{children:"pv: The type is BIGINT (8 bytes), and the default value is 0. This is an indicator column. StarRocks internally aggregates indicator columns. The aggregation method is sum (SUM)."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql >\nCREATE TABLE table1\n(\n    siteid INT DEFAULT '10',\n    citycode SMALLINT,\n    username VARCHAR(32) DEFAULT '',\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, let\u2019s see how to create a composite partition table. The schema of the table is as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"event_day: The type is DATE, no default value"}),"\n",(0,s.jsx)(n.li,{children:"siteid: The type is INT (4 bytes), the default value is 10"}),"\n",(0,s.jsx)(n.li,{children:"cidy_code: The type is SMALLINT (2 bytes)"}),"\n",(0,s.jsx)(n.li,{children:"username: The type is VARCHAR, the maximum length is 32, and the default value is an empty string"}),"\n",(0,s.jsx)(n.li,{children:"pv: The type is BIGINT (8 bytes), the default value is 0. This is an indicator column. StarRocks internally aggregates indicator columns. The aggregation method of this column is sum (SUM)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.code,{children:"event_day"})," as the partition key to create three partitions (p1, p2, p3)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"p1: The range is [minimum value, 2017-06-30)"}),"\n",(0,s.jsx)(n.li,{children:"p2: The range is [2017-06-30, 2017-07-31)"}),"\n",(0,s.jsx)(n.li,{children:"p3: The range is [2017-07-31, 2017-08-31)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each partition is hashed into buckets using ",(0,s.jsx)(n.code,{children:"siteid"}),"; the number of buckets is 10."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE table2\n(\nevent_day DATE,\nsiteid INT DEFAULT '10',\ncitycode SMALLINT,\nusername VARCHAR(32) DEFAULT '',\npv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(event_day, siteid, citycode, username)\nPARTITION BY RANGE(event_day)\n(\nPARTITION p1 VALUES LESS THAN ('2017-06-30'),\nPARTITION p2 VALUES LESS THAN ('2017-07-31'),\nPARTITION p3 VALUES LESS THAN ('2017-08-31')\n)\nDISTRIBUTED BY HASH(siteid) BUCKETS 10\nPROPERTIES(\"replication_num\" = \"1\");\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once the table is created, you can view the table information using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> show tables;\n\n+-------------------------+\n| Tables_in_example_db    |\n+-------------------------+\n| table1 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0    |\n| table2 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0    |\n+-------------------------+\n2 rows in set (0.01 sec)\n\n\nmysql> desc table1;\n\n+----------+-------------+------+-------+---------+-------+\n| Field \xa0 \xa0| Type \xa0 \xa0 \xa0 \xa0| Null | Key \xa0 | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid \xa0 | int(11) \xa0 \xa0 | Yes \xa0| true \xa0| 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| citycode | smallint(6) | Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| username | varchar(32) | Yes \xa0| true \xa0| \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| pv \xa0 \xa0 \xa0 | bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM \xa0 |\n+----------+-------------+------+-------+---------+-------+\n4 rows in set (0.00 sec)\n\n\n\nmysql> desc table2;\n\n+-----------+-------------+------+-------+---------+-------+\n| Field \xa0 \xa0 | Type \xa0 \xa0 \xa0 \xa0| Null | Key \xa0 | Default | Extra |\n+-----------+-------------+------+-------+---------+-------+\n| event_day | date \xa0 \xa0 \xa0 \xa0| Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| siteid \xa0 \xa0| int(11) \xa0 \xa0 | Yes \xa0| true \xa0| 10 \xa0 \xa0 \xa0| \xa0 \xa0 \xa0 |\n| citycode \xa0| smallint(6) | Yes \xa0| true \xa0| N/A \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| username \xa0| varchar(32) | Yes \xa0| true \xa0| \xa0 \xa0 \xa0 \xa0 | \xa0 \xa0 \xa0 |\n| pv \xa0 \xa0 \xa0 \xa0| bigint(20) \xa0| Yes \xa0| false | 0 \xa0 \xa0 \xa0 | SUM \xa0 |\n+-----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-in-docker",children:"Build in docker"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to",(0,s.jsx)(n.a,{href:"/docs/2.2/administration/Build_in_docker",children:"Build in docker"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},n)}}}]);