"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40599],{63779:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(85893),n=s(11151);const r={displayed_sidebar:"English"},a="Memory Management",d={id:"administration/Memory_management",title:"Memory Management",description:"This section briefly introduces memory classification and StarRocks\u2019 methods of managing memory.",source:"@site/versioned_docs/version-3.0/administration/Memory_management.md",sourceDirName:"administration",slug:"/administration/Memory_management",permalink:"/docs/3.0/administration/Memory_management",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Memory_management.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Load Balancing",permalink:"/docs/3.0/administration/Load_balance"},next:{title:"Monitor and Alerting",permalink:"/docs/3.0/administration/Monitor_and_Alert"}},c={},l=[{value:"Memory Classification",id:"memory-classification",level:2},{value:"Memory-related configuration",id:"memory-related-configuration",level:2},{value:"View memory usage",id:"view-memory-usage",level:2}];function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"memory-management",children:"Memory Management"}),"\n",(0,i.jsx)(t.p,{children:"This section briefly introduces memory classification and StarRocks\u2019 methods of managing memory."}),"\n",(0,i.jsx)(t.h2,{id:"memory-classification",children:"Memory Classification"}),"\n",(0,i.jsx)(t.p,{children:"Explanation:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Metric"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"process"}),(0,i.jsx)(t.td,{children:"Total memory used of BE"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"query_pool"}),(0,i.jsx)(t.td,{children:"Memory used by data querying"}),(0,i.jsx)(t.td,{children:"Consists of two parts: memory used by the execution layer and memory used by the storage layer."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"load"}),(0,i.jsx)(t.td,{children:"Memory used by data loading"}),(0,i.jsx)(t.td,{children:"Generally MemTable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"table_meta"}),(0,i.jsx)(t.td,{children:"Metadata memory"}),(0,i.jsx)(t.td,{children:"S Schema, Tablet metadata, RowSet metadata, Column metadata, ColumnReader, IndexReader"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"compaction"}),(0,i.jsx)(t.td,{children:"Multi-version memory compaction"}),(0,i.jsx)(t.td,{children:"compaction that happens after data import is complete"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"snapshot"}),(0,i.jsx)(t.td,{children:"Snapshot memory"}),(0,i.jsx)(t.td,{children:"Generally used for clone, little memory usage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"column_pool"}),(0,i.jsx)(t.td,{children:"Column pool memory"}),(0,i.jsx)(t.td,{children:"Request to release column cache for accelerated column"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"page_cache"}),(0,i.jsx)(t.td,{children:"BE's own PageCache"}),(0,i.jsx)(t.td,{children:"The default is off, the user can turn it on by modifying the BE file"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"memory-related-configuration",children:"Memory-related configuration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"BE Configuration"})}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vector_chunk_size"}),(0,i.jsx)(t.td,{children:"4096"}),(0,i.jsx)(t.td,{children:"Number of chunk rows"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mem_limit"}),(0,i.jsx)(t.td,{children:"80%"}),(0,i.jsx)(t.td,{children:"The percentage of total memory that BE can use. If BE is deployed as a standalone, there is no need to configure it. If it is deployed with other services that consume more memory, it should be configured separately."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"disable_storage_page_cache"}),(0,i.jsx)(t.td,{children:"false"}),(0,i.jsxs)(t.td,{children:["The boolean value to control whether to disable PageCache. When PageCache is enabled, StarRocks caches the recently scanned data. PageCache can significantly improve the query performance when similar queries are repeated frequently. ",(0,i.jsx)(t.code,{children:"true"})," indicates to disable PageCache. Use this item together with ",(0,i.jsx)(t.code,{children:"storage_page_cache_limit"}),", you can accelerate query performance in scenarios with sufficient memory resources and much data scan. The default value of this item has been changed from ",(0,i.jsx)(t.code,{children:"true"})," to ",(0,i.jsx)(t.code,{children:"false"})," since StarRocks v2.4."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"write_buffer_size"}),(0,i.jsx)(t.td,{children:"104857600"}),(0,i.jsx)(t.td,{children:"The capacity limit of a single MemTable, exceeding which a disk swipe will be performed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"load_process_max_memory_limit_bytes"}),(0,i.jsx)(t.td,{children:"107374182400"}),(0,i.jsxs)(t.td,{children:["The upper limit of memory resources that can be taken up by all load processes on a BE node. Its value is the smaller one between ",(0,i.jsx)(t.code,{children:"mem_limit * load_process_max_memory_limit_percent / 100"})," and ",(0,i.jsx)(t.code,{children:"load_process_max_memory_limit_bytes"}),". If this threshold is exceeded, a flush and backpressure will be triggered."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"load_process_max_memory_limit_percent"}),(0,i.jsx)(t.td,{children:"30"}),(0,i.jsxs)(t.td,{children:["The maximum percentage of memory resources that can be taken up by all load processes on a BE node. Its value is the smaller one between ",(0,i.jsx)(t.code,{children:"mem_limit * load_process_max_memory_limit_percent / 100"})," and ",(0,i.jsx)(t.code,{children:"load_process_max_memory_limit_bytes"}),". If this threshold is exceeded, a flush and backpressure will be triggered."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"default_load_mem_limit"}),(0,i.jsx)(t.td,{children:"2147483648"}),(0,i.jsxs)(t.td,{children:["If the memory limit on the receiving side is reached for a single import instance, a disk swipe will be triggered. This needs to be modified with the Session variable ",(0,i.jsx)(t.code,{children:"load_mem_limit"})," to take effect."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max_compaction_concurrency"}),(0,i.jsx)(t.td,{children:"-1"}),(0,i.jsx)(t.td,{children:"The maximum concurrency of compactions (both Base Compaction and Cumulative Compaction). The value -1 indicates that no limit is imposed on the concurrency."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cumulative_compaction_check_interval_seconds"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Interval of compaction check"})]})]})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Session variables"})}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"query_mem_limit"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Memory limit of a query on each backend node"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"load_mem_limit"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsxs)(t.td,{children:["Memory limit of a single import task. If the value is 0, ",(0,i.jsx)(t.code,{children:"exec_mem_limit"})," will be taken"]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"view-memory-usage",children:"View memory usage"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"mem_tracker"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"//View the overall memory statistics\n<http://be_ip:be_http_port/mem_tracker>\n\n// View fine-grained memory statistics\n<http://be_ip:be_http_port/mem_tracker?type=query_pool&upper_level=3>\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"tcmalloc"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"<http://be_ip:be_http_port/memz>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plain",metastring:"text",children:"------------------------------------------------\nMALLOC:      777276768 (  741.3 MiB) Bytes in use by application\nMALLOC: +   8851890176 ( 8441.8 MiB) Bytes in page heap freelist\nMALLOC: +    143722232 (  137.1 MiB) Bytes in central cache freelist\nMALLOC: +     21869824 (   20.9 MiB) Bytes in transfer cache freelist\nMALLOC: +    832509608 (  793.9 MiB) Bytes in thread cache freelists\nMALLOC: +     58195968 (   55.5 MiB) Bytes in malloc metadata\nMALLOC:   ------------\nMALLOC: =  10685464576 (10190.5 MiB) Actual memory used (physical + swap)\nMALLOC: +  25231564800 (24062.7 MiB) Bytes released to OS (aka unmapped)\nMALLOC:   ------------\nMALLOC: =  35917029376 (34253.1 MiB) Virtual address space used\nMALLOC:\nMALLOC:         112388              Spans in use\nMALLOC:            335              Thread heaps in use\nMALLOC:           8192              Tcmalloc page size\n------------------------------------------------\nCall ReleaseFreeMemory() to release freelist memory to the OS (via madvise()).\nBytes released to the OS take up virtual address space but no physical memory.\n"})}),"\n",(0,i.jsx)(t.p,{children:"The memory queried by this method is accurate. However, some memory in StarRocks is reserved but not in use. TcMalloc counts the memory that is reserved, not the memory used."}),"\n",(0,i.jsxs)(t.p,{children:["Here ",(0,i.jsx)(t.code,{children:"Bytes in use by application"})," refers to the memory currently in use."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"metrics"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -XGET http://be_ip:be_http_port/metrics | grep 'mem'\ncurl -XGET http://be_ip:be_http_port/metrics | grep 'column_pool'\n"})}),"\n",(0,i.jsx)(t.p,{children:"The value of metrics is updated every 10 seconds. It is possible to monitor some of the memory statistics with older versions."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var i=s(67294);const n=i.createContext({});function r(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:r(e),i.createElement(n.Provider,{value:d},t)}}}]);