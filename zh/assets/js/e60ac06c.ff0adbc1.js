"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28030],{47988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var l=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},d="\u68c0\u67e5\u73af\u5883\u914d\u7f6e",i={id:"deployment/environment_configurations",title:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e",description:"\u672c\u6587\u5217\u51fa\u4e86\u5728\u90e8\u7f72 StarRocks \u4e4b\u524d\u9700\u8981\u68c0\u67e5\u5e76\u914d\u7f6e\u7684\u6240\u6709\u73af\u5883\u548c\u7cfb\u7edf\u914d\u7f6e\u9879\u3002\u6b63\u786e\u8bbe\u7f6e\u8fd9\u4e9b\u914d\u7f6e\u9879\u53ef\u4ee5\u786e\u4fdd\u96c6\u7fa4\u7684\u9ad8\u53ef\u7528\u5e76\u63d0\u5347\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/deployment/environment_configurations.md",sourceDirName:"deployment",slug:"/deployment/environment_configurations",permalink:"/zh/docs/3.0/deployment/environment_configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/environment_configurations.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u964d\u7ea7 StarRocks",permalink:"/zh/docs/3.0/deployment/downgrade"},next:{title:"\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4",permalink:"/zh/docs/3.0/deployment/helm"}},a={},h=[{value:"\u7aef\u53e3",id:"\u7aef\u53e3",level:2},{value:"FE \u7aef\u53e3",id:"fe-\u7aef\u53e3",level:3},{value:"BE \u7aef\u53e3",id:"be-\u7aef\u53e3",level:3},{value:"CN \u7aef\u53e3",id:"cn-\u7aef\u53e3",level:3},{value:"\u4e3b\u673a\u540d",id:"\u4e3b\u673a\u540d",level:2},{value:"JDK \u8bbe\u7f6e",id:"jdk-\u8bbe\u7f6e",level:2},{value:"CPU Scaling Governor",id:"cpu-scaling-governor",level:2},{value:"\u5185\u5b58\u8bbe\u7f6e",id:"\u5185\u5b58\u8bbe\u7f6e",level:2},{value:"Memory Overcommit",id:"memory-overcommit",level:3},{value:"Transparent Huge Pages",id:"transparent-huge-pages",level:3},{value:"Swap Space",id:"swap-space",level:3},{value:"Swappiness",id:"swappiness",level:3},{value:"\u5b58\u50a8\u8bbe\u7f6e",id:"\u5b58\u50a8\u8bbe\u7f6e",level:2},{value:"SATA",id:"sata",level:3},{value:"SSD \u548c NVMe",id:"ssd-\u548c-nvme",level:3},{value:"SELinux",id:"selinux",level:2},{value:"\u9632\u706b\u5899",id:"\u9632\u706b\u5899",level:2},{value:"LANG \u53d8\u91cf",id:"lang-\u53d8\u91cf",level:2},{value:"\u65f6\u533a",id:"\u65f6\u533a",level:2},{value:"ulimit \u8bbe\u7f6e",id:"ulimit-\u8bbe\u7f6e",level:2},{value:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",id:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",level:3},{value:"\u6700\u5927\u7528\u6237\u8fdb\u7a0b",id:"\u6700\u5927\u7528\u6237\u8fdb\u7a0b",level:3},{value:"\u6587\u4ef6\u7cfb\u7edf\u914d\u7f6e",id:"\u6587\u4ef6\u7cfb\u7edf\u914d\u7f6e",level:2},{value:"\u7f51\u7edc\u914d\u7f6e",id:"\u7f51\u7edc\u914d\u7f6e",level:2},{value:"tcp_abort_on_overflow",id:"tcp_abort_on_overflow",level:3},{value:"somaxconn",id:"somaxconn",level:3},{value:"NTP \u8bbe\u7f6e",id:"ntp-\u8bbe\u7f6e",level:2},{value:"\u9ad8\u5e76\u53d1\u914d\u7f6e",id:"\u9ad8\u5e76\u53d1\u914d\u7f6e",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",a:"a",strong:"strong",blockquote:"blockquote",ol:"ol"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e",children:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u5217\u51fa\u4e86\u5728\u90e8\u7f72 StarRocks \u4e4b\u524d\u9700\u8981\u68c0\u67e5\u5e76\u914d\u7f6e\u7684\u6240\u6709\u73af\u5883\u548c\u7cfb\u7edf\u914d\u7f6e\u9879\u3002\u6b63\u786e\u8bbe\u7f6e\u8fd9\u4e9b\u914d\u7f6e\u9879\u53ef\u4ee5\u786e\u4fdd\u96c6\u7fa4\u7684\u9ad8\u53ef\u7528\u5e76\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7aef\u53e3",children:"\u7aef\u53e3"}),"\n",(0,l.jsx)(n.p,{children:"StarRocks \u4e3a\u4e0d\u540c\u7684\u670d\u52a1\u4f7f\u7528\u7279\u5b9a\u7684\u7aef\u53e3\u3002\u5982\u679c\u60a8\u5728\u8fd9\u4e9b\u5b9e\u4f8b\u4e0a\u90e8\u7f72\u4e86\u5176\u4ed6\u670d\u52a1\uff0c\u8bf7\u68c0\u67e5\u8fd9\u4e9b\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"fe-\u7aef\u53e3",children:"FE \u7aef\u53e3"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u7528\u4e8e FE \u90e8\u7f72\u7684\u5b9e\u4f8b\u4e0a\uff0c\u60a8\u9700\u8981\u68c0\u67e5\u4ee5\u4e0b\u7aef\u53e3\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"8030"}),"\uff1aFE HTTP Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"http_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9020"}),"\uff1aFE Thrift Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"rpc_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9030"}),"\uff1aFE MySQL Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"query_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9010"}),"\uff1aFE \u5185\u90e8\u901a\u8baf\u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"edit_log_port"}),"\uff09"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 FE \u5b9e\u4f8b\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u8fd9\u4e9b\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 8030\nnetstat -tunlp | grep 9020\nnetstat -tunlp | grep 9030\nnetstat -tunlp | grep 9010\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4e0a\u8ff0\u4efb\u4f55\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u60a8\u5fc5\u987b\u5728\u90e8\u7f72 FE \u8282\u70b9\u65f6\u6307\u5b9a\u53ef\u7528\u4e8e\u66ff\u6362\u7684\u7aef\u53e3\u3002\u8be6\u7ec6\u8bf4\u660e\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/zh/docs/3.0/deployment/deploy_manually#%E7%AC%AC%E4%B8%80%E6%AD%A5%E5%90%AF%E5%8A%A8-leader-fe-%E8%8A%82%E7%82%B9",children:"\u624b\u52a8\u90e8\u7f72 StarRocks - \u542f\u52a8 Leader FE \u8282\u70b9"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"be-\u7aef\u53e3",children:"BE \u7aef\u53e3"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u7528\u4e8e BE \u90e8\u7f72\u7684\u5b9e\u4f8b\u4e0a\uff0c\u60a8\u9700\u8981\u68c0\u67e5\u4ee5\u4e0b\u7aef\u53e3\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9060"}),"\uff1aBE Thrift Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"be_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"8040"}),"\uff1aBE HTTP Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"be_http_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9050"}),"\uff1aBE \u5fc3\u8df3\u670d\u52a1\u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"heartbeat_service_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"8060"}),"\uff1aBE BRPC \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"brpc_port"}),"\uff09"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 BE \u5b9e\u4f8b\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u8fd9\u4e9b\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 9060\nnetstat -tunlp | grep 8040\nnetstat -tunlp | grep 9050\nnetstat -tunlp | grep 8060\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4e0a\u8ff0\u4efb\u4f55\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u60a8\u5fc5\u987b\u5728\u90e8\u7f72 BE \u8282\u70b9\u65f6\u6307\u5b9a\u53ef\u7528\u4e8e\u66ff\u6362\u7684\u7aef\u53e3\u3002\u8be6\u7ec6\u8bf4\u660e\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/zh/docs/3.0/deployment/deploy_manually#%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%90%AF%E5%8A%A8-be-%E6%9C%8D%E5%8A%A1",children:"\u90e8\u7f72 StarRocks - \u542f\u52a8 BE \u670d\u52a1"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"cn-\u7aef\u53e3",children:"CN \u7aef\u53e3"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u7528\u4e8e CN \u90e8\u7f72\u7684\u5b9e\u4f8b\u4e0a\uff0c\u60a8\u9700\u8981\u68c0\u67e5\u4ee5\u4e0b\u7aef\u53e3\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9060"}),"\uff1aCN Thrift Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"thrift_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"8040"}),"\uff1aCN HTTP Server \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"be_http_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"9050"}),"\uff1aCN \u5fc3\u8df3\u670d\u52a1\u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"heartbeat_service_port"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"8060"}),"\uff1aCN BRPC \u7aef\u53e3\uff08",(0,l.jsx)(n.code,{children:"brpc_port"}),"\uff09"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 CN \u5b9e\u4f8b\u4e0a\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u8fd9\u4e9b\u7aef\u53e3\u662f\u5426\u88ab\u5360\u7528\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"netstat -tunlp | grep 9060\nnetstat -tunlp | grep 8040\nnetstat -tunlp | grep 9050\nnetstat -tunlp | grep 8060\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4e0a\u8ff0\u4efb\u4f55\u7aef\u53e3\u88ab\u5360\u7528\uff0c\u60a8\u5fc5\u987b\u5728\u90e8\u7f72 CN \u8282\u70b9\u65f6\u6307\u5b9a\u53ef\u7528\u4e8e\u66ff\u6362\u7684\u7aef\u53e3\u3002\u8be6\u7ec6\u8bf4\u660e\u53c2\u89c1 ",(0,l.jsx)(n.a,{href:"/zh/docs/3.0/deployment/deploy_manually#%E7%AC%AC%E4%B8%89%E6%AD%A5%E5%8F%AF%E9%80%89%E5%90%AF%E5%8A%A8-cn-%E6%9C%8D%E5%8A%A1",children:"\u90e8\u7f72 StarRocks - \u542f\u52a8 CN \u670d\u52a1"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e3b\u673a\u540d",children:"\u4e3b\u673a\u540d"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u9700\u4e3a\u60a8\u7684 StarRocks \u96c6\u7fa4 ",(0,l.jsx)(n.a,{href:"/zh/docs/3.0/administration/enable_fqdn",children:"\u542f\u7528 FQDN \u8bbf\u95ee"}),"\uff0c\u60a8\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u5b9e\u4f8b\u8bbe\u7f6e\u4e00\u4e2a\u4e3b\u673a\u540d\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u7684 ",(0,l.jsx)(n.strong,{children:"/etc/hosts"})," \u6587\u4ef6\u4e2d\uff0c\u60a8\u5fc5\u987b\u6307\u5b9a\u96c6\u7fa4\u4e2d\u5176\u4ed6\u5b9e\u4f8b\u7684 IP \u5730\u5740\u548c\u76f8\u5e94\u7684\u4e3b\u673a\u540d\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"/etc/hosts"})," \u6587\u4ef6\u4e2d\u7684\u6240\u6709 IP \u5730\u5740\u90fd\u5fc5\u987b\u662f\u552f\u4e00\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"jdk-\u8bbe\u7f6e",children:"JDK \u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.p,{children:["StarRocks \u4f9d\u9760\u73af\u5883\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"JAVA_HOME"})," \u5b9a\u4f4d\u5b9e\u4f8b\u4e0a\u7684 Java \u4f9d\u8d56\u9879\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u73af\u5883\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"JAVA_HOME"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo $JAVA_HOME\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"JAVA_HOME"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.strong,{children:"/etc/profile"})," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,l.jsx)(n.code,{children:"JAVA_HOME"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"sudo  vi /etc/profile\n# Replace <path_to_JDK> with the path where JDK is installed.\nexport JAVA_HOME=<path_to_JDK>\nexport PATH=$PATH:$JAVA_HOME/bin\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f7f\u53d8\u66f4\u751f\u6548\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"source /etc/profile\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u53d8\u66f4\u662f\u5426\u6210\u529f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"java -version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"cpu-scaling-governor",children:"CPU Scaling Governor"}),"\n",(0,l.jsxs)(n.p,{children:["\u8be5\u914d\u7f6e\u9879\u4e3a",(0,l.jsx)(n.strong,{children:"\u53ef\u9009\u914d\u7f6e\u9879"}),"\u3002\u5982\u679c\u60a8\u7684 CPU \u4e0d\u652f\u6301 Scaling Governor\uff0c\u5219\u53ef\u4ee5\u8df3\u8fc7\u8be5\u9879\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["CPU Scaling Governor \u7528\u4e8e\u63a7\u5236 CPU \u80fd\u8017\u6a21\u5f0f\u3002\u5982\u679c\u60a8\u7684 CPU \u652f\u6301\u8be5\u914d\u7f6e\u9879\uff0c\u5efa\u8bae\u60a8\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(n.code,{children:"performance"})," \u4ee5\u83b7\u5f97\u66f4\u597d\u7684 CPU \u6027\u80fd\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5185\u5b58\u8bbe\u7f6e",children:"\u5185\u5b58\u8bbe\u7f6e"}),"\n",(0,l.jsx)(n.h3,{id:"memory-overcommit",children:"Memory Overcommit"}),"\n",(0,l.jsx)(n.p,{children:"Memory Overcommit \u5141\u8bb8\u64cd\u4f5c\u7cfb\u7edf\u5c06\u989d\u5916\u7684\u5185\u5b58\u8d44\u6e90\u5206\u914d\u7ed9\u8fdb\u7a0b\u3002\u5efa\u8bae\u60a8\u542f\u7528 Memory Overcommit\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 1 | sudo tee /proc/sys/vm/overcommit_memory\n"})}),"\n",(0,l.jsx)(n.h3,{id:"transparent-huge-pages",children:"Transparent Huge Pages"}),"\n",(0,l.jsx)(n.p,{children:"Transparent Huge Pages \u9ed8\u8ba4\u542f\u7528\u3002\u56e0\u5176\u4f1a\u5e72\u6270\u5185\u5b58\u5206\u914d\uff0c\u8fdb\u800c\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\uff0c\u5efa\u8bae\u60a8\u7981\u7528\u6b64\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 'madvise' | sudo tee /sys/kernel/mm/transparent_hugepage/enabled\n"})}),"\n",(0,l.jsx)(n.h3,{id:"swap-space",children:"Swap Space"}),"\n",(0,l.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u7981\u7528 Swap Space\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u5e76\u7981\u7528 Swap Space \u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5173\u95ed Swap Space\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"swapoff /<path_to_swap_space>\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4ece ",(0,l.jsx)(n.strong,{children:"/etc/fstab"})," \u6587\u4ef6\u4e2d\u5220\u9664 Swap Space \u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"/<path_to_swap_space> swap swap defaults 0 0\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u786e\u8ba4 Swap Space \u5df2\u5173\u95ed\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"free -m\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"swappiness",children:"Swappiness"}),"\n",(0,l.jsx)(n.p,{children:"Swappiness \u4f1a\u5bf9\u6027\u80fd\u9020\u6210\u5f71\u54cd\uff0c\u56e0\u6b64\u5efa\u8bae\u60a8\u7981\u7528 Swappiness\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 0 | sudo tee /proc/sys/vm/swappiness\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b58\u50a8\u8bbe\u7f6e",children:"\u5b58\u50a8\u8bbe\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u6839\u636e\u6240\u9009\u7528\u7684\u5b58\u50a8\u4ecb\u8d28\u6765\u786e\u5b9a\u5408\u9002\u7684\u8c03\u5ea6\u7b97\u6cd5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u60a8\u5f53\u524d\u4f7f\u7528\u7684\u8c03\u5ea6\u7b97\u6cd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"cat /sys/block/${disk}/queue/scheduler\n# \u4f8b\u5982\uff0c\u8fd0\u884c cat /sys/block/vdb/queue/scheduler\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u63a8\u8350\u60a8\u4e3a SATA \u78c1\u76d8\u4f7f\u7528 mq-deadline \u8c03\u5ea6\u7b97\u6cd5\uff0c\u4e3a NVMe \u6216 SSD \u78c1\u76d8\u4f7f\u7528 kyber \u8c03\u5ea6\u7b97\u6cd5\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"sata",children:"SATA"}),"\n",(0,l.jsx)(n.p,{children:"mq-deadline \u8c03\u5ea6\u7b97\u6cd5\u9002\u5408 SATA \u78c1\u76d8\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4e34\u65f6\u4fee\u6539\u6b64\u9879\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo mq-deadline | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u4f7f\u53d8\u66f4\u6c38\u4e45\u751f\u6548\uff0c\u8bf7\u5728\u4fee\u6539\u8be5\u9879\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"chmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,l.jsx)(n.h3,{id:"ssd-\u548c-nvme",children:"SSD \u548c NVMe"}),"\n",(0,l.jsx)(n.p,{children:"kyber \u8c03\u5ea6\u7b97\u6cd5\u9002\u5408 NVMe \u6216 SSD \u78c1\u76d8\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4e34\u65f6\u4fee\u6539\u6b64\u9879\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo kyber | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684\u7cfb\u7edf\u4e0d\u652f\u6301 SSD \u548c NVMe \u7684 kyber \u8c03\u5ea6\u7b97\u6cd5\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528 none\uff08\u6216 noop\uff09\u8c03\u5ea6\u7b97\u6cd5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo none | sudo tee /sys/block/${disk}/queue/scheduler\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u4f7f\u53d8\u66f4\u6c38\u4e45\u751f\u6548\uff0c\u8bf7\u5728\u4fee\u6539\u8be5\u9879\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"chmod +x /etc/rc.d/rc.local\n"})}),"\n",(0,l.jsx)(n.h2,{id:"selinux",children:"SELinux"}),"\n",(0,l.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u7981\u7528 SELinux\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"sed -i 's/SELINUX=.*/SELINUX=disabled/' /etc/selinux/config\nsed -i 's/SELINUXTYPE/#SELINUXTYPE/' /etc/selinux/config\nsetenforce 0 \n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9632\u706b\u5899",children:"\u9632\u706b\u5899"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60a8\u542f\u7528\u4e86\u9632\u706b\u5899\uff0c\u8bf7\u4e3a FE\u3001BE \u548c Broker \u5f00\u542f\u5185\u90e8\u7aef\u53e3\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"systemctl stop firewalld.service\nsystemctl disable firewalld.service\n"})}),"\n",(0,l.jsx)(n.h2,{id:"lang-\u53d8\u91cf",children:"LANG \u53d8\u91cf"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u624b\u52a8\u68c0\u67e5\u548c\u914d\u7f6e LANG \u53d8\u91cf\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:'echo "export LANG=en_US.UTF8" >> /etc/profile\nsource /etc/profile\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u65f6\u533a",children:"\u65f6\u533a"}),"\n",(0,l.jsx)(n.p,{children:"\u8bf7\u6839\u636e\u60a8\u6240\u5728\u7684\u5b9e\u9645\u65f6\u533a\u8bbe\u7f6e\u6b64\u9879\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u65f6\u533a\u8bbe\u7f6e\u4e3a ",(0,l.jsx)(n.code,{children:"/Asia/Shanghai"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ulimit-\u8bbe\u7f6e",children:"ulimit \u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c",(0,l.jsx)(n.strong,{children:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26"}),"\u548c",(0,l.jsx)(n.strong,{children:"\u6700\u5927\u7528\u6237\u8fdb\u7a0b"}),"\u7684\u503c\u8bbe\u7f6e\u5f97\u8fc7\u5c0f\uff0cStarRocks \u8fd0\u884c\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26",children:"\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8bbe\u7f6e\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"ulimit -n 65535\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6700\u5927\u7528\u6237\u8fdb\u7a0b",children:"\u6700\u5927\u7528\u6237\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8bbe\u7f6e\u6700\u5927\u7528\u6237\u8fdb\u7a0b\u6570\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"ulimit -u 40960\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6587\u4ef6\u7cfb\u7edf\u914d\u7f6e",children:"\u6587\u4ef6\u7cfb\u7edf\u914d\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"\u5efa\u8bae\u60a8\u4f7f\u7528 ext4 \u6216 xfs \u65e5\u5fd7\u6587\u4ef6\u7cfb\u7edf\u3002\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u6302\u8f7d\u7c7b\u578b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"df -Th\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7f51\u7edc\u914d\u7f6e",children:"\u7f51\u7edc\u914d\u7f6e"}),"\n",(0,l.jsx)(n.h3,{id:"tcp_abort_on_overflow",children:"tcp_abort_on_overflow"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u7cfb\u7edf\u5f53\u524d\u56e0\u540e\u53f0\u8fdb\u7a0b\u65e0\u6cd5\u5904\u7406\u7684\u65b0\u8fde\u63a5\u800c\u6ea2\u51fa\uff0c\u5219\u5141\u8bb8\u7cfb\u7edf\u91cd\u7f6e\u65b0\u8fde\u63a5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 1 | sudo tee /proc/sys/net/ipv4/tcp_abort_on_overflow\n"})}),"\n",(0,l.jsx)(n.h3,{id:"somaxconn",children:"somaxconn"}),"\n",(0,l.jsxs)(n.p,{children:["\u8bbe\u7f6e\u76d1\u542c Socket \u961f\u5217\u7684\u6700\u5927\u8fde\u63a5\u8bf7\u6c42\u6570\u4e3a ",(0,l.jsx)(n.code,{children:"1024"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 1024 | sudo tee /proc/sys/net/core/somaxconn\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ntp-\u8bbe\u7f6e",children:"NTP \u8bbe\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"\u9700\u8981\u5728 StarRocks \u96c6\u7fa4\u5404\u8282\u70b9\u4e4b\u95f4\u914d\u7f6e\u65f6\u95f4\u540c\u6b65\uff0c\u4ece\u800c\u4fdd\u8bc1\u4e8b\u52a1\u7684\u7ebf\u6027\u4e00\u81f4\u6027\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 pool.ntp.org \u63d0\u4f9b\u7684\u4e92\u8054\u7f51\u65f6\u95f4\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u79bb\u7ebf\u73af\u5883\u5185\u7f6e\u7684 NTP \u670d\u52a1\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u63d0\u4f9b\u7684 NTP \u670d\u52a1\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b NTP \u65f6\u95f4\u670d\u52a1\u5668\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"rpm -qa | grep ntp\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u4e0d\u5b58\u5728\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 NTP \u65f6\u95f4\u670d\u52a1\u5668\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"sudo yum install ntp ntpdate && \\\nsudo systemctl start ntpd.service && \\\nsudo systemctl enable ntpd.service\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5 NTP \u670d\u52a1\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"systemctl list-unit-files | grep ntp\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5 NTP \u670d\u52a1\u8fde\u63a5\u548c\u76d1\u63a7\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"netstat -tlunp | grep ntp\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u670d\u52a1\u662f\u5426\u4e0e NTP \u670d\u52a1\u5668\u540c\u6b65\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"ntpstat\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u68c0\u67e5\u7f51\u7edc\u4e2d\u7684 NTP \u670d\u52a1\u5668\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"ntpq -p\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9ad8\u5e76\u53d1\u914d\u7f6e",children:"\u9ad8\u5e76\u53d1\u914d\u7f6e"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60a8\u7684 StarRocks \u96c6\u7fa4\u8d1f\u8f7d\u5e76\u53d1\u8f83\u9ad8\uff0c\u5efa\u8bae\u60a8\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Bash",children:"echo 120000 > /proc/sys/kernel/threads-max\necho 262144 > /proc/sys/vm/max_map_count\necho 200000 > /proc/sys/kernel/pid_max\n"})})]})}const t=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var l=s(67294);const c=l.createContext({});function r(e){const n=l.useContext(c);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||d:r(e),l.createElement(c.Provider,{value:i},n)}}}]);