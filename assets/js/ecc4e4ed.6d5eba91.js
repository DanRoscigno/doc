"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76426],{90535:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(85893),a=s(11151);const o={},r="Enable FQDN access",c={id:"administration/enable_fqdn",title:"Enable FQDN access",description:"This topic describes how to enable cluster access by using a fully qualified domain name (FQDN). An FQDN is a complete domain name for a specific entity that can be accessed over the Internet. The FQDN consists of two parts: the hostname and the domain name.",source:"@site/versioned_docs/version-3.0/administration/enable_fqdn.md",sourceDirName:"administration",slug:"/administration/enable_fqdn",permalink:"/docs/3.0/administration/enable_fqdn",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/enable_fqdn.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Manage audit logs within StarRocks via Audit Loader",permalink:"/docs/3.0/administration/audit_loader"},next:{title:"File manager",permalink:"/docs/3.0/administration/filemanager"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up a new cluster with FQDN access",id:"set-up-a-new-cluster-with-fqdn-access",level:2},{value:"Enable FQDN access in an existing cluster",id:"enable-fqdn-access-in-an-existing-cluster",level:2},{value:"Enable FQDN access for FE nodes",id:"enable-fqdn-access-for-fe-nodes",level:3},{value:"Enable FQDN access for non-Leader Follower FE nodes",id:"enable-fqdn-access-for-non-leader-follower-fe-nodes",level:4},{value:"Enable FQDN access for the Leader FE node",id:"enable-fqdn-access-for-the-leader-fe-node",level:4},{value:"Enable FQDN access for BE nodes",id:"enable-fqdn-access-for-be-nodes",level:3},{value:"Rollback",id:"rollback",level:2},{value:"FAQ",id:"faq",level:2}];function i(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",a:"a",h3:"h3",blockquote:"blockquote",h4:"h4",ol:"ol"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"enable-fqdn-access",children:"Enable FQDN access"}),"\n",(0,t.jsxs)(n.p,{children:["This topic describes how to enable cluster access by using a fully qualified domain name (FQDN). An FQDN is a ",(0,t.jsx)(n.strong,{children:"complete domain name"})," for a specific entity that can be accessed over the Internet. The FQDN consists of two parts: the hostname and the domain name."]}),"\n",(0,t.jsx)(n.p,{children:"Before 2.4, StarRocks supports access to FEs and BEs via IP address only. Even if an FQDN is used to add a node to a cluster, it is transformed into an IP address eventually. This causes a huge inconvenience for DBAs because changing the IP addresses of certain nodes in a StarRocks cluster can lead to access failures to the nodes. In version 2.4, StarRocks decouples each node from its IP address. You can now manage nodes in StarRocks solely via their FQDNs."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To enable FQDN access for a StarRocks cluster, make sure the following requirements are satisfied:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Each machine in the cluster must have a hostname."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the file ",(0,t.jsx)(n.strong,{children:"/etc/hosts"})," on each machine, you must specify the corresponding IP addresses and FQDNs of other machines in the cluster."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["IP addresses in the ",(0,t.jsx)(n.strong,{children:"/etc/hosts"})," file must be uniqule."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-a-new-cluster-with-fqdn-access",children:"Set up a new cluster with FQDN access"}),"\n",(0,t.jsxs)(n.p,{children:["By default, FE nodes in a new cluster are started via IP address access. To start a new cluster with FQDN access, you must start the FE nodes by running the following commands ",(0,t.jsx)(n.strong,{children:"when you start the cluster for the first time"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"./bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The property ",(0,t.jsx)(n.code,{children:"--host_type"})," specifies the access method that is used to start the node. Valid values include ",(0,t.jsx)(n.code,{children:"FQDN"})," and ",(0,t.jsx)(n.code,{children:"IP"}),". You only need to specify this property ONCE when you start the node for the first time."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/3.0/deployment/deploy_manually",children:"Deploy StarRocks"})," for detailed instructions on how to install StarRocks."]}),"\n",(0,t.jsxs)(n.p,{children:["Each BE node identifies itself with ",(0,t.jsx)(n.code,{children:"BE Address"})," defined in the FE metadata. Therefore, you DO NOT need to specify ",(0,t.jsx)(n.code,{children:"--host_type"})," when you start BE nodes. If the ",(0,t.jsx)(n.code,{children:"BE Address"})," defines a BE node with an FQDN, the BE node identifies itself with this FQDN."]}),"\n",(0,t.jsx)(n.h2,{id:"enable-fqdn-access-in-an-existing-cluster",children:"Enable FQDN access in an existing cluster"}),"\n",(0,t.jsxs)(n.p,{children:["To enable FQDN access in an existing cluster that was previously started via IP addresses, you must first ",(0,t.jsx)(n.strong,{children:"upgrade"})," StarRocks to version 2.4.0 or later."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-fqdn-access-for-fe-nodes",children:"Enable FQDN access for FE nodes"}),"\n",(0,t.jsx)(n.p,{children:"You need to enable FQDN access for all the non-Leader Follower FE nodes before enabling that for the Leader FE node."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CAUTION"})}),"\n",(0,t.jsx)(n.p,{children:"Make sure that the cluster has at least three Follower FE nodes before you enable FQDN access for FE nodes."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"enable-fqdn-access-for-non-leader-follower-fe-nodes",children:"Enable FQDN access for non-Leader Follower FE nodes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the deployment directory of the FE node, and run the following command to stop the FE node:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"./bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Execute the following statement via your MySQL client to check the ",(0,t.jsx)(n.code,{children:"Alive"})," status of the FE node that you have stopped. Wait until the ",(0,t.jsx)(n.code,{children:"Alive"})," status becomes ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following statement to replace the IP address with FQDN."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_ip>" TO "<fe_hostname>";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to start the FE node with FQDN access."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"./bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The property ",(0,t.jsx)(n.code,{children:"--host_type"})," specifies the access method that is used to start the node. Valid values include ",(0,t.jsx)(n.code,{children:"FQDN"})," and ",(0,t.jsx)(n.code,{children:"IP"}),". You only need to specify this property ONCE when you restart the node after you modify the node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.code,{children:"Alive"})," status of the FE node. Wait until the ",(0,t.jsx)(n.code,{children:"Alive"})," status becomes ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Repeat the above steps to enable FQDN access for the other non-Leader Follower FE nodes one after another when the ",(0,t.jsx)(n.code,{children:"Alive"})," status of the current FE node is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"enable-fqdn-access-for-the-leader-fe-node",children:"Enable FQDN access for the Leader FE node"}),"\n",(0,t.jsx)(n.p,{children:"After all the non-Leader FE nodes have been modified and restarted successfully, you can now enable FQDN access for the Leader FE node."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(n.p,{children:"Before the Leader FE node is enabled with FQDN access, the FQDNs used to add nodes to a cluster are still transformed into the corresponding IP addresses. After a Leader FE node with FQDN access enabled is elected for the cluster, the FQDNs will not be transformed into IP addresses."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the deployment directory of the Leader FE node, and run the following command to stop the Leader FE node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"./bin/stop_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following statement via your MySQL client to check whether a new Leader FE node has been elected for the cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW PROC '/frontends'\\G\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Any FE node with status ",(0,t.jsx)(n.code,{children:"Alive"})," and ",(0,t.jsx)(n.code,{children:"isMaster"})," being ",(0,t.jsx)(n.code,{children:"true"})," is a Leader FE that is running."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following statement to replace the IP address with FQDN."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_ip>" TO "<fe_hostname>";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the following command to start the FE node with FQDN access."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"./bin/start_fe.sh --host_type FQDN --daemon\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The property ",(0,t.jsx)(n.code,{children:"--host_type"})," specifies the access method that is used to start the node. Valid values include ",(0,t.jsx)(n.code,{children:"FQDN"})," and ",(0,t.jsx)(n.code,{children:"IP"}),". You only need to specify this property ONCE when you restart the node after you modify the node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.code,{children:"Alive"})," status of the FE node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"SHOW PROC '/frontends'\\G\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"Alive"})," status becomes ",(0,t.jsx)(n.code,{children:"true"}),", the FE node is successfully modified and added to the cluster as a Follower FE node."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-fqdn-access-for-be-nodes",children:"Enable FQDN access for BE nodes"}),"\n",(0,t.jsx)(n.p,{children:"Execute the following statement via your MySQL client to replace the IP address with FQDN to enable FQDN access for the BE node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY BACKEND HOST "<be_ip>" TO "<be_hostname>";\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(n.p,{children:"You DO NOT need to restart the BE node after FQDN access is enabled."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rollback",children:"Rollback"}),"\n",(0,t.jsxs)(n.p,{children:["To rollback an FQDN access-enabled StarRocks cluster to an earlier version that does not support FQDN access, you must first enable IP address access for all nodes in the cluster. You can refer ",(0,t.jsx)(n.a,{href:"#enable-fqdn-access-in-an-existing-cluster",children:"Enable FQDN access in an existing cluster"})," for the general guidance except that you need to change the SQL commands to the following ones:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enable IP address access for an FE node:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY FRONTEND HOST "<fe_hostname>" TO "<fe_ip>";\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enable IP address access for a BE node:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER SYSTEM MODIFY BACKEND HOST "<be_hostname>" TO "<be_ip>";\n'})}),"\n",(0,t.jsx)(n.p,{children:"The modification takes effect after your cluster is successfully restarted."}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:'Q: An error occurs when I enable FQDN access for an FE node: "required 1 replica. But none were active with this master". What should I do?'})}),"\n",(0,t.jsx)(n.p,{children:"A: Make sure the cluster has at least three Follower FE nodes before you enable FQDN access for FE nodes."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Q: Can I add a new node by using IP address to a cluster with FQDN access enabled?"})}),"\n",(0,t.jsx)(n.p,{children:"A: Yes."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>o});var t=s(67294);const a=t.createContext({});function o(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:o(e),t.createElement(a.Provider,{value:c},n)}}}]);