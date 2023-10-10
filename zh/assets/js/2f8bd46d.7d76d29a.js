"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43799],{46251:(n,r,c)=>{c.r(r),c.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=c(85893),e=c(11151);const o={},t="Flink connector \u7248\u672c\u53d1\u5e03",l={id:"ecosystem_release/flink_connector",title:"Flink connector \u7248\u672c\u53d1\u5e03",description:"\u53d1\u5e03\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/ecosystem_release/flink_connector.md",sourceDirName:"ecosystem_release",slug:"/ecosystem_release/flink_connector",permalink:"/zh/docs/3.0/ecosystem_release/flink_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/ecosystem_release/flink_connector.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Trace",permalink:"/zh/docs/3.0/developers/trace-tools/Trace"},next:{title:"Kafka connector \u7248\u672c\u53d1\u5e03",permalink:"/zh/docs/3.0/ecosystem_release/kafka_connector"}},i={},a=[{value:"\u53d1\u5e03\u8bf4\u660e",id:"\u53d1\u5e03\u8bf4\u660e",level:2},{value:"\u53d1\u5e03\u8bb0\u5f55",id:"\u53d1\u5e03\u8bb0\u5f55",level:2},{value:"1.2",id:"12",level:3}];function h(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",a:"a",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote",h3:"h3"},(0,e.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"flink-connector-\u7248\u672c\u53d1\u5e03",children:"Flink connector \u7248\u672c\u53d1\u5e03"}),"\n",(0,s.jsx)(r.h2,{id:"\u53d1\u5e03\u8bf4\u660e",children:"\u53d1\u5e03\u8bf4\u660e"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u4f7f\u7528\u6587\u6863\uff1a"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/zh/docs/3.0/loading/Flink-connector-starrocks",children:"\u4f7f\u7528 Flink connector \u5bfc\u5165\u6570\u636e\u81f3 StarRocks"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/zh/docs/3.0/unloading/Flink_connector",children:"\u4f7f\u7528 Flink connector \u4ece StarRocks \u8bfb\u53d6\u6570\u636e"})}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u6e90\u7801\u4e0b\u8f7d\u5730\u5740\uff1a"}),(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink",children:"starrocks-connector-for-apache-flink"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"JAR \u5305\u547d\u540d\u89c4\u5219\uff1a"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Flink 1.15 \u53ca\u4e4b\u540e\uff1a",(0,s.jsx)(r.code,{children:"flink-connector-starrocks-${connector_version}_flink-${flink_version}.jar"})]}),"\n",(0,s.jsxs)(r.li,{children:["Flink 1.15 \u4e4b\u524d\uff1a",(0,s.jsx)(r.code,{children:"flink-connector-starrocks-${connector_version}_flink-${flink_version}_${scala_version}.jar"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"JAR \u5305\u83b7\u53d6\u65b9\u5f0f\uff1a"})}),"\n",(0,s.jsx)(r.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6 Flink connector \u7684 JAR \u5305\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u4ece ",(0,s.jsx)(r.a,{href:"https://repo1.maven.org/maven2/com/starrocks",children:"Maven Central Repository"})," \u76f4\u63a5\u4e0b\u8f7d\u7f16\u8bd1\u597d\u7684 JAR \u5305\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u5728 Maven \u9879\u76ee\u7684 pom \u6587\u4ef6\u6dfb\u52a0 Flink connector \u4e3a\u4f9d\u8d56\u9879\uff0c\u4f5c\u4e3a\u4f9d\u8d56\u4e0b\u8f7d\u3002\u5177\u4f53\u65b9\u5f0f\uff0c\u53c2\u89c1",(0,s.jsx)(r.a,{href:"/zh/docs/3.0/loading/Flink-connector-starrocks",children:"\u4f7f\u7528\u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsxs)(r.li,{children:["\u4f7f\u7528\u6e90\u7801\u624b\u52a8\u7f16\u8bd1\u6210 JAR \u5305\u3002\u5177\u4f53\u65b9\u5f0f\uff0c\u53c2\u89c1",(0,s.jsx)(r.a,{href:"/zh/docs/3.0/loading/Flink-connector-starrocks",children:"\u4f7f\u7528\u6587\u6863"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u7248\u672c\u8981\u6c42\uff1a"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Connector"}),(0,s.jsx)(r.th,{children:"Flink"}),(0,s.jsx)(r.th,{children:"StarRocks"}),(0,s.jsx)(r.th,{children:"Java"}),(0,s.jsx)(r.th,{children:"Scala"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1.2.8"}),(0,s.jsx)(r.td,{children:"1.13 ~ 1.17"}),(0,s.jsx)(r.td,{children:"2.1 \u53ca\u4ee5\u4e0a"}),(0,s.jsx)(r.td,{children:"8"}),(0,s.jsx)(r.td,{children:"2.11\u30012.12"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1.2.7"}),(0,s.jsx)(r.td,{children:"1.11 ~ 1.15"}),(0,s.jsx)(r.td,{children:"2.1 \u53ca\u4ee5\u4e0a"}),(0,s.jsx)(r.td,{children:"8"}),(0,s.jsx)(r.td,{children:"2.11\u30012.12"})]})]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsx)(r.p,{children:"\u6700\u65b0\u7248\u672c\u7684 Flink connector \u53ea\u7ef4\u62a4\u6700\u8fd13\u4e2a\u7248\u672c\u7684 Flink\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u53d1\u5e03\u8bb0\u5f55",children:"\u53d1\u5e03\u8bb0\u5f55"}),"\n",(0,s.jsx)(r.h3,{id:"12",children:"1.2"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"1.2.8"})}),"\n",(0,s.jsx)(r.p,{children:"\u672c\u7248\u672c\u53d1\u5e03\u5305\u542b\u5982\u4e0b\u529f\u80fd\u4f18\u5316\u548c\u95ee\u9898\u4fee\u590d\u3002\u5176\u4e2d\u91cd\u70b9\u4f18\u5316\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u652f\u6301 Flink 1.16 \u548c 1.17\u3002"}),"\n",(0,s.jsxs)(r.li,{children:["Sink \u8bed\u4e49\u914d\u7f6e\u4e3a exactly-once \u65f6\u5efa\u8bae\u8bbe\u7f6e ",(0,s.jsx)(r.code,{children:"sink.label-prefix"}),"\u3002\u4f7f\u7528\u8bf4\u660e\uff0c\u53c2\u8003 ",(0,s.jsx)(r.a,{href:"/zh/docs/3.0/loading/Flink-connector-starrocks#exactly-once",children:"Exactly Once"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u529f\u80fd\u4f18\u5316"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u652f\u6301\u914d\u7f6e\u662f\u5426\u4f7f\u7528 Stream Load \u4e8b\u52a1\u63a5\u53e3\u6765\u5b9e\u73b0 at-least-once \u8bed\u4e49\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/228",children:"#228"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u4e3a sink \u7248\u672c V1 \u6dfb\u52a0 retry \u6307\u6807\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/229",children:"#229"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c EXISTING_JOB_STATUS \u4e3a FINISHED\uff0c\u65e0\u9700 getLabelState\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/231",children:"#231"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u79fb\u9664 sink \u7248\u672c V1 \u4e2d\u65e0\u7528\u7684\u5806\u6808\u8ddf\u8e2a\u65e5\u5fd7\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/232",children:"#232"})]}),"\n",(0,s.jsxs)(r.li,{children:["[\u91cd\u6784] \u5c06 StarRocksSinkManagerV2 \u79fb\u52a8\u5230 stream-load-sdk\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/233",children:"#233"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u6839\u636e Flink \u4e2d\u7684\u8868\u7ed3\u6784\u81ea\u52a8\u5224\u65ad\u6570\u636e\u5bfc\u5165\u662f\u5426\u4ec5\u66f4\u65b0\u90e8\u5206\u5217\uff0c\u800c\u4e0d\u9700\u8981\u7528\u6237\u663e\u5f0f\u6307\u5b9a\u53c2\u6570 ",(0,s.jsx)(r.code,{children:"sink.properties.columns"}),"\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/235",children:"#235"})]}),"\n",(0,s.jsxs)(r.li,{children:["[\u91cd\u6784] \u5c06 probeTransactionStreamLoad \u79fb\u52a8\u5230 stream-load-sdk\u3002 ",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/240",children:"#240"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u4e3a stream-load-sdk \u6dfb\u52a0 git-commit-id-plugin\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/242",children:"#242"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5728 info \u7ea7\u522b\u7684 log \u4e2d\u8bb0\u5f55 DefaultStreamLoader#close\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/243",children:"#243"})]}),"\n",(0,s.jsxs)(r.li,{children:["stream-load-sdk \u652f\u6301\u751f\u6210\u4e0d\u5305\u542b\u4f9d\u8d56\u7684 jar\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/245",children:"#245"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5728 stream-load-sdk \u4e2d\u4f7f\u7528 jackson \u66ff\u6362 fastjson\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/247",children:"#247"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u652f\u6301\u5904\u7406 update_before \u8bb0\u5f55\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/250",children:"#250"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0 Apache license\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/251",children:"#251"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u652f\u6301\u83b7\u53d6 stream-load-sdk \u8fd4\u56de\u7684\u5f02\u5e38\u4fe1\u606f\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/252",children:"#252"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u9ed8\u8ba4\u542f\u7528 ",(0,s.jsx)(r.code,{children:"strip_outer_array"})," \u548c ",(0,s.jsx)(r.code,{children:"ignore_json_size"}),"\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/259",children:"#259"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u5982\u679c sink \u8bed\u4e49\u4e3a exactly-once\uff0c\u5f53 Flink job \u6062\u590d\u540e\uff0cFlink connector \u4f1a\u5c1d\u8bd5\u6e05\u7406 StarRocks \u4e2d\u672a\u5305\u542b\u5728checkpoint \u4e2d\u7684\u672a\u5b8c\u6210\u4e8b\u52a1\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/271",children:"#271"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u91cd\u8bd5\u5931\u8d25\u540e\u8fd4\u56de\u7b2c\u4e00\u6b21\u7684\u5f02\u5e38\u4fe1\u606f\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/279",children:"#279"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u95ee\u9898\u4fee\u590d"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u4fee\u590d StarRocksStreamLoadVisitor \u4e2d\u7684\u62fc\u5199\u9519\u8bef\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/230",children:"#230"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u4fee\u590d fastjson classloader \u6cc4\u6f0f\u95ee\u9898\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/260",children:"#260"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6d4b\u8bd5"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u589e\u52a0\u4ece Kafka \u5bfc\u5165 StarRock \u7684\u6d4b\u8bd5\u6846\u67b6\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/249",children:"#249"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6587\u6863"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\u91cd\u6784\u6587\u6863\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/262",children:"#262"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u6539\u8fdb sink \u529f\u80fd\u7684\u6587\u6863\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/268",children:"#268"})," ",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/275",children:"#275"})]}),"\n",(0,s.jsxs)(r.li,{children:["\u6dfb\u52a0\u793a\u4f8b\u8bf4\u660e\u5982\u4f55\u8c03\u7528 DataStream API \u5b9e\u73b0 sink \u529f\u80fd\u3002",(0,s.jsx)(r.a,{href:"https://github.com/StarRocks/starrocks-connector-for-apache-flink/pull/253",children:"#253"})]}),"\n"]})]})}const d=function(n={}){const{wrapper:r}=Object.assign({},(0,e.ah)(),n.components);return r?(0,s.jsx)(r,Object.assign({},n,{children:(0,s.jsx)(h,n)})):h(n)}},11151:(n,r,c)=>{c.d(r,{Zo:()=>l,ah:()=>o});var s=c(67294);const e=s.createContext({});function o(n){const r=s.useContext(e);return s.useMemo((()=>"function"==typeof n?n(r):{...r,...n}),[r,n])}const t={};function l({components:n,children:r,disableParentContext:c}){let l;return l=c?"function"==typeof n?n({}):n||t:o(n),s.createElement(e.Provider,{value:l},r)}}}]);