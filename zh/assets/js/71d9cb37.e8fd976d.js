"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6179],{90129:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(85893),d=n(11151);const l={displayed_sidebar:"Chinese31"},c="\u90e8\u7f72 Broker \u8282\u70b9",i={id:"deployment/deploy_broker",title:"\u90e8\u7f72 Broker \u8282\u70b9",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u7ba1\u7406 Broker \u8282\u70b9\u3002\u901a\u8fc7 Broker\uff0cStarRocks \u53ef\u8bfb\u53d6\u5bf9\u5e94\u6570\u636e\u6e90\uff08\u5982 HDFS\u3001S3\uff09\u4e0a\u7684\u6570\u636e\uff0c\u5229\u7528\u81ea\u8eab\u7684\u8ba1\u7b97\u8d44\u6e90\u5bf9\u6570\u636e\u8fdb\u884c\u9884\u5904\u7406\u548c\u5bfc\u5165\u3002\u9664\u6b64\u4e4b\u5916\uff0cBroker \u4e5f\u88ab\u5e94\u7528\u4e8e\u6570\u636e\u5bfc\u51fa\uff0c\u5907\u4efd\u6062\u590d\u7b49\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/deployment/deploy_broker.md",sourceDirName:"deployment",slug:"/deployment/deploy_broker",permalink:"/doc/zh/docs/3.0/deployment/deploy_broker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/deployment/deploy_broker.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31"},o={},h=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u542f\u52a8 Broker \u670d\u52a1",id:"\u542f\u52a8-broker-\u670d\u52a1",level:2},{value:"\u6dfb\u52a0 Broker \u8282\u70b9\u81f3\u96c6\u7fa4",id:"\u6dfb\u52a0-broker-\u8282\u70b9\u81f3\u96c6\u7fa4",level:2},{value:"\u505c\u6b62 Broker \u8282\u70b9",id:"\u505c\u6b62-broker-\u8282\u70b9",level:2},{value:"\u5347\u7ea7 Broker \u8282\u70b9",id:"\u5347\u7ea7-broker-\u8282\u70b9",level:2},{value:"\u964d\u7ea7 Broker \u8282\u70b9",id:"\u964d\u7ea7-broker-\u8282\u70b9",level:2}];function t(e){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",ul:"ul"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\u90e8\u7f72-broker-\u8282\u70b9",children:"\u90e8\u7f72 Broker \u8282\u70b9"}),"\n",(0,s.jsx)(r.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u90e8\u7f72\u7ba1\u7406 Broker \u8282\u70b9\u3002\u901a\u8fc7 Broker\uff0cStarRocks \u53ef\u8bfb\u53d6\u5bf9\u5e94\u6570\u636e\u6e90\uff08\u5982 HDFS\u3001S3\uff09\u4e0a\u7684\u6570\u636e\uff0c\u5229\u7528\u81ea\u8eab\u7684\u8ba1\u7b97\u8d44\u6e90\u5bf9\u6570\u636e\u8fdb\u884c\u9884\u5904\u7406\u548c\u5bfc\u5165\u3002\u9664\u6b64\u4e4b\u5916\uff0cBroker \u4e5f\u88ab\u5e94\u7528\u4e8e\u6570\u636e\u5bfc\u51fa\uff0c\u5907\u4efd\u6062\u590d\u7b49\u529f\u80fd\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["\u5efa\u8bae\u60a8\u5728\u6bcf\u4e2a\u90e8\u7f72 BE \u8282\u70b9\u7684\u673a\u5668\u4e0a\u90e8\u7f72\u4e00\u4e2a Broker \u8282\u70b9\uff0c\u5e76\u5c06\u6240\u6709 Broker \u8282\u70b9\u6dfb\u52a0\u5230\u540c\u4e00 ",(0,s.jsx)(r.code,{children:"broker_name"})," \u4e0b\u3002Broker \u8282\u70b9\u5728\u5904\u7406\u4efb\u52a1\u65f6\u4f1a\u81ea\u52a8\u8c03\u5ea6\u6570\u636e\u4f20\u8f93\u538b\u529b\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"Broker \u8282\u70b9\u4e0e BE \u8282\u70b9\u4e4b\u95f4\u4f7f\u7528\u7f51\u7edc\u4f20\u8f93\u6570\u636e\u3002\u5f53 Broker \u8282\u70b9\u548c BE \u8282\u70b9\u90e8\u7f72\u5728\u76f8\u540c\u673a\u5668\u65f6\uff0c\u4f1a\u4f18\u5148\u9009\u62e9\u672c\u5730 BE \u8282\u70b9\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,s.jsxs)(r.p,{children:["\u8bf7\u53c2\u7167",(0,s.jsx)(r.a,{href:"/doc/zh/docs/3.0/deployment/deployment_prerequisites",children:"\u90e8\u7f72\u524d\u63d0\u6761\u4ef6"}),"\u3001",(0,s.jsx)(r.a,{href:"/doc/zh/docs/3.0/deployment/environment_configurations",children:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e"}),"\u3001",(0,s.jsx)(r.a,{href:"/doc/zh/docs/3.0/deployment/prepare_deployment_files",children:"\u51c6\u5907\u90e8\u7f72\u6587\u4ef6"}),"\u5b8c\u6210\u51c6\u5907\u5de5\u4f5c\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u542f\u52a8-broker-\u670d\u52a1",children:"\u542f\u52a8 Broker \u670d\u52a1"}),"\n",(0,s.jsx)(r.p,{children:"\u4ee5\u4e0b\u64cd\u4f5c\u5728 BE \u5b9e\u4f8b\u4e0a\u6267\u884c\u3002"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u8fdb\u5165\u5148\u524d\u51c6\u5907\u597d\u7684 ",(0,s.jsx)(r.a,{href:"/doc/zh/docs/3.0/deployment/prepare_deployment_files",children:"StarRocks Broker \u90e8\u7f72\u6587\u4ef6"}),"\u6240\u5728\u8def\u5f84\uff0c\u4fee\u6539 Broker \u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(r.strong,{children:"apache_hdfs_broker/conf/apache_hdfs_broker.conf"}),"\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c Broker \u8282\u70b9\u7684 HDFS Thrift RPC \u7aef\u53e3\uff08",(0,s.jsx)(r.code,{children:"broker_ipc_port"}),"\uff0c\u9ed8\u8ba4\u503c\uff1a",(0,s.jsx)(r.code,{children:"8000"}),"\uff09\u88ab\u5360\u7528\uff0c\u60a8\u5fc5\u987b\u5728 Broker \u914d\u7f6e\u6587\u4ef6\u4e2d\u4e3a\u5176\u5206\u914d\u5176\u4ed6\u53ef\u7528\u7aef\u53e3\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-YAML",children:"broker_ipc_port = aaaa        # \u9ed8\u8ba4\u503c\uff1a8000\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4e0b\u8868\u5217\u51fa\u4e86 Broker \u652f\u6301\u7684\u914d\u7f6e\u9879\u3002"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\u914d\u7f6e\u9879"}),(0,s.jsx)(r.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(r.th,{children:"\u5355\u4f4d"}),(0,s.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hdfs_read_buffer_size_kb"}),(0,s.jsx)(r.td,{children:"8192"}),(0,s.jsx)(r.td,{children:"KB"}),(0,s.jsx)(r.td,{children:"\u7528\u4e8e\u4ece HDFS \u8bfb\u53d6\u6570\u636e\u7684\u5185\u5b58\u7684\u5927\u5c0f\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"hdfs_write_buffer_size_kb"}),(0,s.jsx)(r.td,{children:"1024"}),(0,s.jsx)(r.td,{children:"KB"}),(0,s.jsx)(r.td,{children:"\u7528\u4e8e\u5411 HDFS \u5199\u5165\u6570\u636e\u7684\u5185\u5b58\u7684\u5927\u5c0f\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"client_expire_seconds"}),(0,s.jsx)(r.td,{children:"300"}),(0,s.jsx)(r.td,{children:"Second"}),(0,s.jsx)(r.td,{children:"\u5ba2\u6237\u7aef\u8fc7\u671f\u65f6\u95f4\u3002\u5982\u679c\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u672a\u6536\u5230\u4efb\u4f55 ping\uff0c\u5ba2\u6237\u7aef\u4f1a\u8bdd\u5c06\u88ab\u5220\u9664\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"broker_ipc_port"}),(0,s.jsx)(r.td,{children:"8000"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"HDFS thrift RPC \u7aef\u53e3\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"disable_broker_client_expiration_checking"}),(0,s.jsx)(r.td,{children:"false"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["\u662f\u5426\u5173\u95ed\u8fc7\u671f OSS \u6587\u4ef6\u53e5\u67c4\u7684\u68c0\u67e5\u548c\u6e05\u9664\u3002\u6e05\u9664\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4f1a\u5bfc\u81f4 OSS \u5173\u95ed\u65f6 Broker \u5361\u4f4f\u3002\u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(r.code,{children:"true"})," \u4ee5\u7981\u7528\u68c0\u67e5\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_dir"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"${BROKER_HOME}/log"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u7528\u4e8e\u5b58\u653e\u7cfb\u7edf\u65e5\u5fd7\uff08\u5305\u62ec INFO\u3001WARNING\u3001ERROR\u3001FATAL\uff09\u7684\u76ee\u5f55\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_level"}),(0,s.jsx)(r.td,{children:"INFO"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u65e5\u5fd7\u7ea7\u522b\u3002\u6709\u6548\u503c\u5305\u62ec INFO\u3001WARNING\u3001ERROR \u548c FATAL\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_roll_mode"}),(0,s.jsx)(r.td,{children:"SIZE-MB-1024"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u7cfb\u7edf\u65e5\u5fd7\u5206\u5377\u65b9\u5f0f\u3002\u6709\u6548\u503c\u5305\u62ec TIME-DAY\u3001TIME-HOUR \u548c SIZE-MB-nnn\u3002\u9ed8\u8ba4\u503c\u8868\u793a\u5c06\u65e5\u5fd7\u62c6\u5206\u4e3a\u6bcf\u4e2a 1 GB \u7684\u5377\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_roll_num"}),(0,s.jsx)(r.td,{children:"30"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u8981\u4fdd\u7559\u7684\u7cfb\u7edf\u65e5\u5fd7\u5377\u6570\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_dir"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"${BROKER_HOME}/log"})}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u5b58\u50a8\u5ba1\u8ba1\u65e5\u5fd7\u6587\u4ef6\u7684\u76ee\u5f55\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_modules"}),(0,s.jsx)(r.td,{children:"Empty string"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"StarRocks \u4e3a\u5176\u751f\u6210\u5ba1\u6838\u65e5\u5fd7\u6761\u76ee\u7684\u6a21\u5757\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cStarRocks \u4f1a\u4e3a slow_query \u6a21\u5757\u548c query \u6a21\u5757\u751f\u6210\u5ba1\u8ba1\u65e5\u5fd7\u3002\u60a8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u6a21\u5757\uff0c\u4f7f\u7528\u9017\u53f7\uff08,\uff09\u548c\u4e00\u4e2a\u7a7a\u683c\u5206\u9694\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_roll_mode"}),(0,s.jsx)(r.td,{children:"TIME-DAY"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsx)(r.td,{children:"\u5ba1\u8ba1\u65e5\u5fd7\u5206\u5377\u65b9\u5f0f\u3002\u6709\u6548\u503c\u5305\u62ec TIME-DAY\u3001TIME-HOUR \u548c SIZE-MB-nnn\u3002"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"audit_log_roll_num"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["\u8981\u4fdd\u7559\u7684\u5347\u7ea7\u65e5\u5fd7\u5377\u6570\u3002\u5982\u679c ",(0,s.jsx)(r.code,{children:"audit_log_roll_mode"})," \u8bbe\u7f6e\u4e3a ",(0,s.jsx)(r.code,{children:"SIZE-MB-nnn"}),"\uff0c\u5219\u6b64\u914d\u7f6e\u65e0\u6548\u3002"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sys_log_verbose_modules"}),(0,s.jsx)(r.td,{children:"com.starrocks"}),(0,s.jsx)(r.td,{children:"N/A"}),(0,s.jsxs)(r.td,{children:["StarRocks \u4e3a\u5176\u751f\u6210\u7cfb\u7edf\u65e5\u5fd7\u7684\u6a21\u5757\u3002 \u6709\u6548\u503c\u662f BE \u4e2d\u7684 namespace\uff0c\u5305\u62ec ",(0,s.jsx)(r.code,{children:"starrocks"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::debug"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::fs"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::io"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::lake"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::pipeline"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::query_cache"}),"\u3001",(0,s.jsx)(r.code,{children:"starrocks::stream"})," \u4ee5\u53ca ",(0,s.jsx)(r.code,{children:"starrocks::workgroup"}),"\u3002"]})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u542f\u52a8 Broker \u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"./apache_hdfs_broker/bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u67e5\u770b Broker \u65e5\u5fd7\uff0c\u68c0\u67e5 Broker \u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"cat apache_hdfs_broker/log/apache_hdfs_broker.log | grep thrift\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u5728\u5176\u4ed6 BE \u5b9e\u4f8b\u4e0a\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u5373\u53ef\u542f\u52a8\u65b0\u7684 Broker \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u6dfb\u52a0-broker-\u8282\u70b9\u81f3\u96c6\u7fa4",children:"\u6dfb\u52a0 Broker \u8282\u70b9\u81f3\u96c6\u7fa4"}),"\n",(0,s.jsx)(r.p,{children:"\u4ee5\u4e0b\u8fc7\u7a0b\u5728 MySQL \u5ba2\u6237\u7aef\u5b9e\u4f8b\u4e0a\u6267\u884c\u3002\u60a8\u5fc5\u987b\u5b89\u88c5 MySQL \u5ba2\u6237\u7aef\uff085.5.0 \u6216\u66f4\u9ad8\u7248\u672c\uff09\u3002"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 StarRocks\u3002\u60a8\u9700\u8981\u4f7f\u7528\u521d\u59cb\u7528\u6237 ",(0,s.jsx)(r.code,{children:"root"})," \u767b\u5f55\uff0c\u5bc6\u7801\u9ed8\u8ba4\u4e3a\u7a7a\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# \u5c06 <fe_address> \u66ff\u6362\u4e3a\u60a8\u8fde\u63a5\u7684 FE \u8282\u70b9\u7684 IP \u5730\u5740\uff08priority_networks\uff09\u6216 FQDN\uff0c\n# \u5e76\u5c06 <query_port>\uff08\u9ed8\u8ba4\uff1a9030\uff09\u66ff\u6362\u4e3a\u60a8\u5728 fe.conf \u4e2d\u6307\u5b9a\u7684 query_port\u3002\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u6267\u884c\u4ee5\u4e0b SQL \u5c06 Broker \u8282\u70b9\u6dfb\u52a0\u81f3\u96c6\u7fa4\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:'ALTER SYSTEM ADD BROKER <broker_name> "<broker_ip>:<broker_ipc_port>";\n'})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e00\u6761 SQL \u6dfb\u52a0\u591a\u4e2a Broker \u8282\u70b9\u3002\u6bcf\u5bf9 ",(0,s.jsx)(r.code,{children:"<broker_ip>:<broker_ipc_port>"})," \u4ee3\u8868\u4e00\u4e2a Broker \u8282\u70b9\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u60a8\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u5177\u6709\u76f8\u540c ",(0,s.jsx)(r.code,{children:"broker_name"})," \u7684 Brokers \u8282\u70b9\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u6267\u884c\u4ee5\u4e0b SQL \u67e5\u770b Broker \u8282\u70b9\u72b6\u6001\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sql",children:'SHOW PROC "/brokers"\\G\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-plain",metastring:"text",children:'MySQL [(none)]> SHOW PROC "/brokers"\\G\n*************************** 1. row ***************************\n          Name: broker1\n            IP: x.x.x.x\n          Port: 8000\n         Alive: true\n LastStartTime: 2022-05-19 11:21:36\nLastUpdateTime: 2022-05-19 11:28:31\n        ErrMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679c\u5b57\u6bb5 ",(0,s.jsx)(r.code,{children:"Alive"})," \u4e3a ",(0,s.jsx)(r.code,{children:"true"}),"\uff0c\u8bf4\u660e\u8be5 Broker \u8282\u70b9\u6b63\u5e38\u542f\u52a8\u5e76\u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u505c\u6b62-broker-\u8282\u70b9",children:"\u505c\u6b62 Broker \u8282\u70b9"}),"\n",(0,s.jsx)(r.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u505c\u6b62 Broker \u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"./bin/stop_broker.sh --daemon\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u5347\u7ea7-broker-\u8282\u70b9",children:"\u5347\u7ea7 Broker \u8282\u70b9"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u8fdb\u5165 Broker \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# \u5c06 <broker_dir> \u66ff\u6362\u4e3a Broker \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <broker_dir>/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,s.jsx)(r.strong,{children:"bin"})," \u548c ",(0,s.jsx)(r.strong,{children:"lib"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u542f\u52a8\u8be5 Broker \u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u5347\u7ea7\u5176\u4ed6 Broker \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u964d\u7ea7-broker-\u8282\u70b9",children:"\u964d\u7ea7 Broker \u8282\u70b9"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u8fdb\u5165 Broker \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"# \u5c06 <broker_dir> \u66ff\u6362\u4e3a Broker \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <broker_dir>/apache_hdfs_broker\nsh bin/stop_broker.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,s.jsx)(r.strong,{children:"bin"})," \u548c ",(0,s.jsx)(r.strong,{children:"lib"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/lib  .   \ncp -r /tmp/StarRocks-x.x.x/apache_hdfs_broker/bin  .\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u542f\u52a8\u8be5 Broker \u8282\u70b9\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"sh bin/start_broker.sh --daemon\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Bash",children:"ps aux | grep broker\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u964d\u7ea7\u5176\u4ed6 Broker \u8282\u70b9\u3002"}),"\n"]}),"\n"]})]})}const x=function(e={}){const{wrapper:r}=Object.assign({},(0,d.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>l});var s=n(67294);const d=s.createContext({});function l(e){const r=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:l(e),s.createElement(d.Provider,{value:i},r)}}}]);