"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4284],{1487:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var s=r(85893),i=r(11151);const c={displayed_sidebar:"Chinese31"},a="Flink Connector\u5e38\u89c1\u95ee\u9898",t={id:"faq/loading/Flink_connector_faq",title:"Flink Connector\u5e38\u89c1\u95ee\u9898",description:"\u4f7f\u7528\u4e8b\u52a1\u63a5\u53e3\u7684 exactly-once \u65f6\uff0c\u5bfc\u5165\u5931\u8d25",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/faq/loading/Flink_connector_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Flink_connector_faq",permalink:"/doc/zh/docs/2.5/faq/loading/Flink_connector_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/faq/loading/Flink_connector_faq.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"DataX \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/loading/DataX_faq"},next:{title:"INSERT INTO \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/loading/Insert_into_faq"}},o={},l=[{value:"\u4f7f\u7528\u4e8b\u52a1\u63a5\u53e3\u7684 exactly-once \u65f6\uff0c\u5bfc\u5165\u5931\u8d25",id:"\u4f7f\u7528\u4e8b\u52a1\u63a5\u53e3\u7684-exactly-once-\u65f6\u5bfc\u5165\u5931\u8d25",level:2},{value:"flink-connector-jdbc_2.11sink\u5230StarRocks\u65f6\u95f4\u843d\u540e8\u5c0f\u65f6",id:"flink-connector-jdbc_211sink\u5230starrocks\u65f6\u95f4\u843d\u540e8\u5c0f\u65f6",level:2},{value:"[Flink\u5bfc\u5165] \u5728starrocks\u96c6\u7fa4\u4e0a\u90e8\u7f72\u7684kafka\u96c6\u7fa4\u7684\u6570\u636e\u53ef\u4ee5\u5bfc\u5165\uff0c\u5176\u4ed6kafka\u96c6\u7fa4\u65e0\u6cd5\u5bfc\u5165",id:"flink\u5bfc\u5165-\u5728starrocks\u96c6\u7fa4\u4e0a\u90e8\u7f72\u7684kafka\u96c6\u7fa4\u7684\u6570\u636e\u53ef\u4ee5\u5bfc\u5165\u5176\u4ed6kafka\u96c6\u7fa4\u65e0\u6cd5\u5bfc\u5165",level:2},{value:"Be\u7533\u8bf7\u7684\u5185\u5b58\u4e0d\u4f1a\u91ca\u653e\u7ed9\u64cd\u4f5c\u7cfb\u7edf",id:"be\u7533\u8bf7\u7684\u5185\u5b58\u4e0d\u4f1a\u91ca\u653e\u7ed9\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"\u5173\u4e8e\u4e0b\u8f7dflink connector\u540e\u4e0d\u751f\u6548\u95ee\u9898",id:"\u5173\u4e8e\u4e0b\u8f7dflink-connector\u540e\u4e0d\u751f\u6548\u95ee\u9898",level:2},{value:"Flink-connector-StarRocks\u4e2dsink.buffer-flush.interval-ms\u53c2\u6570\u7684\u542b\u4e49",id:"flink-connector-starrocks\u4e2dsinkbuffer-flushinterval-ms\u53c2\u6570\u7684\u542b\u4e49",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"flink-connector\u5e38\u89c1\u95ee\u9898",children:"Flink Connector\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u4e8b\u52a1\u63a5\u53e3\u7684-exactly-once-\u65f6\u5bfc\u5165\u5931\u8d25",children:"\u4f7f\u7528\u4e8b\u52a1\u63a5\u53e3\u7684 exactly-once \u65f6\uff0c\u5bfc\u5165\u5931\u8d25"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:'com.starrocks.data.load.stream.exception.StreamLoadFailException: {\n    "TxnId": 33823381,\n    "Label": "502c2770-cd48-423d-b6b7-9d8f9a59e41a",\n    "Status": "Fail",\n    "Message": "timeout by txn manager",--\u5177\u4f53\u62a5\u9519\u4fe1\u606f\n    "NumberTotalRows": 1637,\n    "NumberLoadedRows": 1637,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 4284214,\n    "LoadTimeMs": 120294,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPlanTimeMs": 7,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 120278,\n    "CommitAndPublishTimeMs": 0\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u56e0\u5206\u6790\uff1a"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"sink.properties.timeout"}),"\u5c0f\u4e8eFlink checkpoint interval\uff0c\u5bfc\u81f4\u4e8b\u52a1\u8d85\u65f6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u9700\u8981\u5c06timeout\u8c03\u6574\u5927\u4e8echeckpoint interval"}),"\n",(0,s.jsx)(e.h2,{id:"flink-connector-jdbc_211sink\u5230starrocks\u65f6\u95f4\u843d\u540e8\u5c0f\u65f6",children:"flink-connector-jdbc_2.11sink\u5230StarRocks\u65f6\u95f4\u843d\u540e8\u5c0f\u65f6"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"Flink\u4e2dlocaltimestap\u51fd\u6570\u751f\u6210\u7684\u65f6\u95f4\uff0c\u5728Flink\u4e2d\u65f6\u95f4\u6b63\u5e38\uff0csink\u5230StarRocks\u540e\u53d1\u73b0\u65f6\u95f4\u843d\u540e8\u5c0f\u65f6\u3002\u5df2\u786e\u8ba4Flink\u6240\u5728\u670d\u52a1\u5668\u4e0eStarRocks\u6240\u5728\u670d\u52a1\u5668\u65f6\u533a\u5747\u4e3aAsia/ShangHai\u4e1c\u516b\u533a\u3002Flink\u7248\u672c\u4e3a1.12\uff0c\u9a71\u52a8\u4e3aflink-connector-jdbc_2.11\uff0c\u9700\u8981\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u5728Flink sink\u8868\u4e2d\u914d\u7f6e\u65f6\u533a\u53c2\u6570'server-time-zone' = 'Asia/Shanghai'\uff0c\u6216\u540c\u65f6\u5728jdbc url\u91cc\u6dfb\u52a0&serverTimezone=Asia/Shanghai\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE sk (\n    sid int,\n    local_dtm TIMESTAMP,\n    curr_dtm TIMESTAMP\n)\nWITH (\n    'connector' = 'jdbc',\n    'url' = 'jdbc:mysql://192.168.110.66:9030/sys_device?characterEncoding=utf-8&serverTimezone=Asia/Shanghai',\n    'table-name' = 'sink',\n    'driver' = 'com.mysql.jdbc.Driver',\n    'username' = 'sr',\n    'password' = 'sr123',\n    'server-time-zone' = 'Asia/Shanghai'\n);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"flink\u5bfc\u5165-\u5728starrocks\u96c6\u7fa4\u4e0a\u90e8\u7f72\u7684kafka\u96c6\u7fa4\u7684\u6570\u636e\u53ef\u4ee5\u5bfc\u5165\u5176\u4ed6kafka\u96c6\u7fa4\u65e0\u6cd5\u5bfc\u5165",children:"[Flink\u5bfc\u5165] \u5728starrocks\u96c6\u7fa4\u4e0a\u90e8\u7f72\u7684kafka\u96c6\u7fa4\u7684\u6570\u636e\u53ef\u4ee5\u5bfc\u5165\uff0c\u5176\u4ed6kafka\u96c6\u7fa4\u65e0\u6cd5\u5bfc\u5165"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"failed to query wartermark offset, err: Local: Bad message format\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"kafka\u901a\u4fe1\u4f1a\u7528\u5230hostname\uff0c\u9700\u8981\u5728starrocks\u96c6\u7fa4\u8282\u70b9\u914d\u7f6ekafka\u4e3b\u673a\u540d\u89e3\u6790/etc/hosts\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"be\u7533\u8bf7\u7684\u5185\u5b58\u4e0d\u4f1a\u91ca\u653e\u7ed9\u64cd\u4f5c\u7cfb\u7edf",children:"Be\u7533\u8bf7\u7684\u5185\u5b58\u4e0d\u4f1a\u91ca\u653e\u7ed9\u64cd\u4f5c\u7cfb\u7edf"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u662f\u4e00\u79cd\u6b63\u5e38\u73b0\u8c61\uff0c\u56e0\u4e3a\u6570\u636e\u5e93\u4ece\u64cd\u4f5c\u7cfb\u7edf\u83b7\u5f97\u7684\u5927\u5757\u7684\u5185\u5b58\u5206\u914d\uff0c\u5728\u5206\u914d\u7684\u65f6\u5019\u4f1a\u591a\u9884\u7559\uff0c\u91ca\u653e\u65f6\u5019\u4f1a\u5ef6\u540e\uff0c\u4e3a\u4e86\u91cd\u590d\u5229\u7528\uff0c\u56e0\u4e3a\u5927\u5757\u5185\u5b58\u7684\u5206\u914d\u7684\u4ee3\u4ef7\u6bd4\u8f83\u5927. \u5efa\u8bae\u6d4b\u8bd5\u73af\u5883\u9a8c\u8bc1\u65f6\uff0c\u5bf9\u5185\u5b58\u4f7f\u7528\u8fdb\u884c\u76d1\u63a7\uff0c\u5728\u8f83\u957f\u7684\u5468\u671f\u5185\u770b\u5185\u5b58\u662f\u5426\u80fd\u591f\u5b8c\u6210\u91ca\u653e\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5173\u4e8e\u4e0b\u8f7dflink-connector\u540e\u4e0d\u751f\u6548\u95ee\u9898",children:"\u5173\u4e8e\u4e0b\u8f7dflink connector\u540e\u4e0d\u751f\u6548\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u5305\u9700\u8981\u901a\u8fc7\u963f\u91cc\u4e91\u955c\u50cf\u5730\u5740\u6765\u83b7\u53d6\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u786e\u8ba4 /etc/maven/settings.xml\u7684 mirror \u90e8\u5206\u662f\u5426\u914d\u7f6e\u4e86\u5168\u90e8\u901a\u8fc7\u963f\u91cc\u4e91\u955c\u50cf\u83b7\u53d6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u662f\u8bf7\u4fee\u6539\u4e3a\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)("mirror",{children:[(0,s.jsx)("id",{children:"aliyunmaven "}),(0,s.jsx)("mirrorf",{children:"central"}),(0,s.jsx)("name",{children:"\u963f\u91cc\u4e91\u516c\u5171\u4ed3\u5e93"}),(0,s.jsx)("url",{children:"https\uff1a//maven.aliyun.com/repository/public"})]}),"\n",(0,s.jsx)(e.h2,{id:"flink-connector-starrocks\u4e2dsinkbuffer-flushinterval-ms\u53c2\u6570\u7684\u542b\u4e49",children:"Flink-connector-StarRocks\u4e2dsink.buffer-flush.interval-ms\u53c2\u6570\u7684\u542b\u4e49"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u95ee\u9898\u63cf\u8ff0:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"+----------------------+--------------------------------------------------------------+\n|         Option       | Required |  Default   | Type   |       Description           |\n+-------------------------------------------------------------------------------------+\n|  sink.buffer-flush.  |  NO      |   300000   | String | the flushing time interval, |\n|  interval-ms         |          |            |        | range: [1000ms, 3600000ms]  |\n+----------------------+--------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3a15s\uff0c\u4f46\u662fcheckpoint interval=5mins,\u90a3\u4e48\u8fd9\u4e2a\u503c\u8fd8\u751f\u6548\u4e48\uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848:"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e09\u4e2a\u9608\u503c\u5148\u8fbe\u5230\u5176\u4e2d\u7684\u54ea\u4e00\u4e2a\uff0c\u90a3\u4e00\u4e2a\u5c31\u5148\u751f\u6548\uff0c\u662f\u548ccheckpoint interval\u8bbe\u7f6e\u7684\u503c\u6ca1\u5173\u7cfb\u7684\uff0ccheckpoint interval \u5bf9\u4e8e exactly once \u624d\u6709\u6548\uff0cat_least_once \u7528 interval-ms\u3002"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>t,ah:()=>c});var s=r(67294);const i=s.createContext({});function c(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function t({components:n,children:e,disableParentContext:r}){let t;return t=r?"function"==typeof n?n({}):n||a:c(n),s.createElement(i.Provider,{value:t},e)}}}]);