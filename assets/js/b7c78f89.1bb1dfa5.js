"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87911],{63304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={displayed_sidebar:"English"},i="Flink Connector",a={id:"faq/loading/Flink_connector_faq",title:"Flink Connector",description:"flink-connector-jdbc_2.11sink is 8 hours late in StarRocks",source:"@site/versioned_docs/version-3.0/faq/loading/Flink_connector_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Flink_connector_faq",permalink:"/docs/3.0/faq/loading/Flink_connector_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Flink_connector_faq.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DataX",permalink:"/docs/3.0/faq/loading/DataX_faq"},next:{title:"Insert Into",permalink:"/docs/3.0/faq/loading/Insert_into_faq"}},l={},c=[{value:"flink-connector-jdbc_2.11sink is 8 hours late in StarRocks",id:"flink-connector-jdbc_211sink-is-8-hours-late-in-starrocks",level:2},{value:"In flink import, only the kafka clusters deployed in StarRocks clusters can be imported",id:"in-flink-import-only-the-kafka-clusters-deployed-in-starrocks-clusters-can-be-imported",level:2},{value:"Can StarRocks export &#39;create table statements&#39; in batches?",id:"can-starrocks-export-create-table-statements-in-batches",level:2},{value:"Memory requested by BE is not released back to to the operation system",id:"memory-requested-by-be-is-not-released-back-to-to-the-operation-system",level:2},{value:"Flink connector does not work after being downloaded",id:"flink-connector-does-not-work-after-being-downloaded",level:2},{value:"The meaning of parameter sink.buffer-flush.interval-ms in Flink-connector-StarRocks",id:"the-meaning-of-parameter-sinkbuffer-flushinterval-ms-in-flink-connector-starrocks",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"flink-connector",children:"Flink Connector"}),"\n",(0,s.jsx)(n.h2,{id:"flink-connector-jdbc_211sink-is-8-hours-late-in-starrocks",children:"flink-connector-jdbc_2.11sink is 8 hours late in StarRocks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Issue description:"})}),"\n",(0,s.jsx)(n.p,{children:"The time generated by localtimestap function is normal in Flink. But it became 8 hours late when sunk to StarRocks. Flink server and StarRocks server are located in the same timezone, namely Asia/Shanghai UTC/GMT+08:00. Flink version is 1.12. Driver: flink-connector-jdbc_2.11. Can I ask how to resolve this issue?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"Please try configure the time parameter 'server-time-zone' = 'Asia/Shanghai' in Flink sink table. You may also add &serverTimezone=Asia/Shanghai in jdbc url. An example is shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE sk (\n    sid int,\n    local_dtm TIMESTAMP,\n    curr_dtm TIMESTAMP\n)\nWITH (\n    'connector' = 'jdbc',\n    'url' = 'jdbc:mysql://192.168.110.66:9030/sys_device?characterEncoding=utf-8&serverTimezone=Asia/Shanghai',\n    'table-name' = 'sink',\n    'driver' = 'com.mysql.jdbc.Driver',\n    'username' = 'sr',\n    'password' = 'sr123',\n    'server-time-zone' = 'Asia/Shanghai'\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"in-flink-import-only-the-kafka-clusters-deployed-in-starrocks-clusters-can-be-imported",children:"In flink import, only the kafka clusters deployed in StarRocks clusters can be imported"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Issue description:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"failed to query wartermark offset, err: Local: Bad message format\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"Kafka communication needs the hostname. Users need to configure the host name resolution /etc/hosts in StarRocks cluster nodes."}),"\n",(0,s.jsx)(n.h2,{id:"can-starrocks-export-create-table-statements-in-batches",children:"Can StarRocks export 'create table statements' in batches?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"You can use StarRocks Tools to export the statements."}),"\n",(0,s.jsx)(n.h2,{id:"memory-requested-by-be-is-not-released-back-to-to-the-operation-system",children:"Memory requested by BE is not released back to to the operation system"}),"\n",(0,s.jsx)(n.p,{children:"This is a normal phenomenon, as large blocks of memory allocated to the database from the operating system are reserved during allocation and deferred during release in order to reuse the memory and make memory allocation more convenient. It is recommended that users validate the test environment by monitoring memory usage over a longer period of time to see if the memory can be released."}),"\n",(0,s.jsx)(n.h2,{id:"flink-connector-does-not-work-after-being-downloaded",children:"Flink connector does not work after being downloaded"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Issue description:"})}),"\n",(0,s.jsx)(n.p,{children:"This package needs to be obtained through Aliyun mirror address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsxs)(n.p,{children:["Please make sure that the mirror part of ",(0,s.jsx)(n.code,{children:"/etc/maven/settings.xml"})," is all configured to be obtained through Aliyun mirror address."]}),"\n",(0,s.jsx)(n.p,{children:"If it is, change it to the following:"}),"\n",(0,s.jsxs)("mirror",{children:[(0,s.jsx)("id",{children:"aliyunmaven "}),(0,s.jsx)("mirrorf",{children:"central"}),(0,s.jsx)("name",{children:"aliyun public repo"}),(0,s.jsx)("url",{children:"https: //maven.aliyun.com/repository/public"})]}),"\n",(0,s.jsx)(n.h2,{id:"the-meaning-of-parameter-sinkbuffer-flushinterval-ms-in-flink-connector-starrocks",children:"The meaning of parameter sink.buffer-flush.interval-ms in Flink-connector-StarRocks"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Issue description:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+----------------------+--------------------------------------------------------------+\n|         Option       | Required |  Default   | Type   |       Description           |\n+-------------------------------------------------------------------------------------+\n|  sink.buffer-flush.  |  NO      |   300000   | String | the flushing time interval, |\n|  interval-ms         |          |            |        | range: [1000ms, 3600000ms]  |\n+----------------------+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"If this parameter is set as 15s with checkpoint interval being equal to 5 mins, does this value still take effect?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"Whichever of the three thresholds is reached first, that one will take effect first. This is not affected by the checkpoint interval value which only works for exactly once. Interval-ms is used by at_least_once."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>o});var s=t(67294);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:a},n)}}}]);