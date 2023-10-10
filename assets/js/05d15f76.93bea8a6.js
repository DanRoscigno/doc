"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59210],{92901:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});var a=s(85893),d=s(11151);const r={},i="Data lake-related FAQ",n={id:"data_source/datalake_faq",title:"Data lake-related FAQ",description:"This topic describes some commonly asked questions (FAQ) about data lake and provides solutions to these issues. Some metrics mentioned in this topic can be obtained only from the profiles of the SQL queries. To obtain the profiles of SQL queries, you must specify set enable_profile=true.",source:"@site/versioned_docs/version-3.0/data_source/datalake_faq.md",sourceDirName:"data_source",slug:"/data_source/datalake_faq",permalink:"/docs/3.0/data_source/datalake_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/data_source/datalake_faq.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Data Cache",permalink:"/docs/3.0/data_source/data_cache"},next:{title:"File external table",permalink:"/docs/3.0/data_source/file_external_table"}},o={},l=[{value:"Slow HDFS nodes",id:"slow-hdfs-nodes",level:2},{value:"Issue description",id:"issue-description",level:3},{value:"Solution",id:"solution",level:3},{value:"[Recommended] Data Cache",id:"recommended-data-cache",level:4},{value:"Hedged Read",id:"hedged-read",level:4}];function c(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong",a:"a",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"data-lake-related-faq",children:"Data lake-related FAQ"}),"\n",(0,a.jsxs)(t.p,{children:["This topic describes some commonly asked questions (FAQ) about data lake and provides solutions to these issues. Some metrics mentioned in this topic can be obtained only from the profiles of the SQL queries. To obtain the profiles of SQL queries, you must specify ",(0,a.jsx)(t.code,{children:"set enable_profile=true"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"slow-hdfs-nodes",children:"Slow HDFS nodes"}),"\n",(0,a.jsx)(t.h3,{id:"issue-description",children:"Issue description"}),"\n",(0,a.jsxs)(t.p,{children:["When you access the data files stored in your HDFS cluster, you may find a huge difference between the values of the ",(0,a.jsx)(t.code,{children:"__MAX_OF_FSIOTime"})," and ",(0,a.jsx)(t.code,{children:"__MIN_OF_FSIOTime"})," metrics from the profiles of the SQL queries you run, which indicates slow HDFS nodes. The following example is a typical profile that indicates an HDFS node slowdown issue:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plaintext",children:" - InputStream: 0\n   - AppIOBytesRead: 22.72 GB\n     - __MAX_OF_AppIOBytesRead: 187.99 MB\n     - __MIN_OF_AppIOBytesRead: 64.00 KB\n   - AppIOCounter: 964.862K (964862)\n     - __MAX_OF_AppIOCounter: 7.795K (7795)\n     - __MIN_OF_AppIOCounter: 1\n   - AppIOTime: 1s372ms\n     - __MAX_OF_AppIOTime: 4s358ms\n     - __MIN_OF_AppIOTime: 1.539ms\n   - FSBytesRead: 15.40 GB\n     - __MAX_OF_FSBytesRead: 127.41 MB\n     - __MIN_OF_FSBytesRead: 64.00 KB\n   - FSIOCounter: 1.637K (1637)\n     - __MAX_OF_FSIOCounter: 12\n     - __MIN_OF_FSIOCounter: 1\n   - FSIOTime: 9s357ms\n     - __MAX_OF_FSIOTime: 60s335ms\n     - __MIN_OF_FSIOTime: 1.536ms\n"})}),"\n",(0,a.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,a.jsx)(t.p,{children:"You can use one of the following solutions to resolve this issue:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"[Recommended]"})," Enable the ",(0,a.jsx)(t.a,{href:"/docs/3.0/data_source/data_cache",children:"data cache"})," feature, which eliminates the impact of slow HDFS nodes on queries by automatically caching the data from external storage systems to the BEs of your StarRocks cluster."]}),"\n",(0,a.jsxs)(t.li,{children:["Enable the ",(0,a.jsx)(t.a,{href:"https://hadoop.apache.org/docs/r2.8.3/hadoop-project-dist/hadoop-common/release/2.4.0/RELEASENOTES.2.4.0.html",children:"Hedged Read"})," feature. With this feature enabled, if a read from a block is slow, StarRocks starts up a new read, which runs in parallel to the original read, to read against a different block replica. Whenever one of the two reads returns, the other read is cancelled. ",(0,a.jsx)(t.strong,{children:"The Hedged Read feature can help accelerate reads, but it also significantly increases heap memory consumption on Java virtual machines (JVMs). Therefore, if your physical machines provide a small memory capacity, we recommend that you do not enable the Hedged Read feature."})]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"recommended-data-cache",children:"[Recommended] Data Cache"}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"/docs/3.0/data_source/data_cache",children:"Data Cache"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"hedged-read",children:"Hedged Read"}),"\n",(0,a.jsxs)(t.p,{children:["Use the following parameters (supported from v3.0 onwards) in the BE configuration file ",(0,a.jsx)(t.code,{children:"be.conf"})," to enable and configure the Hedged Read feature in your HDFS cluster."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Default value"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hdfs_client_enable_hedged_read"}),(0,a.jsx)(t.td,{children:"false"}),(0,a.jsx)(t.td,{children:"Specifies whether to enable the hedged read feature."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hdfs_client_hedged_read_threadpool_size"}),(0,a.jsx)(t.td,{children:"128"}),(0,a.jsxs)(t.td,{children:["Specifies the size of the Hedged Read thread pool on your HDFS client. The thread pool size limits the number of threads to dedicate to the running of hedged reads in your HDFS client. This parameter is equivalent to the ",(0,a.jsx)(t.code,{children:"dfs.client.hedged.read.threadpool.size"})," parameter in the ",(0,a.jsx)(t.code,{children:"hdfs-site.xml"})," file of your HDFS cluster."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"hdfs_client_hedged_read_threshold_millis"}),(0,a.jsx)(t.td,{children:"2500"}),(0,a.jsxs)(t.td,{children:["Specifies the number of milliseconds to wait before starting up a hedged read. For example, you have set this parameter to ",(0,a.jsx)(t.code,{children:"30"}),". In this situation, if a read from a block has not returned within 30 milliseconds, your HDFS client immediately starts up a hedged read against a different block replica. This parameter is equivalent to the ",(0,a.jsx)(t.code,{children:"dfs.client.hedged.read.threshold.millis"})," parameter in the ",(0,a.jsx)(t.code,{children:"hdfs-site.xml"})," file of your HDFS cluster."]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["If the value of any of the following metrics in your query profiles exceeds ",(0,a.jsx)(t.code,{children:"0"}),", the Hedged Read feature is enabled."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Metric"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TotalHedgedReadOps"}),(0,a.jsx)(t.td,{children:"The number of hedged reads that are started up."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TotalHedgedReadOpsInCurThread"}),(0,a.jsxs)(t.td,{children:["The number of times that StarRocks has to start up a hedged read in the current thread instead of in a new thread because the Hedged Read thread pool has reached its maximum size specified by the ",(0,a.jsx)(t.code,{children:"hdfs_client_hedged_read_threadpool_size"})," parameter."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TotalHedgedReadOpsWin"}),(0,a.jsx)(t.td,{children:"The number of times that a hedged read beats its original read."})]})]})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>n,ah:()=>r});var a=s(67294);const d=a.createContext({});function r(e){const t=a.useContext(d);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function n({components:e,children:t,disableParentContext:s}){let n;return n=s?"function"==typeof e?e({}):e||i:r(e),a.createElement(d.Provider,{value:n},t)}}}]);