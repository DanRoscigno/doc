"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61645],{38331:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(85893),n=r(11151);const i={displayed_sidebar:"Chinese"},c="\u5185\u5b58\u7ba1\u7406",d={id:"administration/Memory_management",title:"\u5185\u5b58\u7ba1\u7406",description:"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd StarRocks BE \u4e2d\u5185\u5b58\u4f7f\u7528\u5206\u7c7b\u548c\u5185\u5b58\u7ba1\u7406\u3001\u5185\u5b58\u8c03\u4f18\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/administration/Memory_management.md",sourceDirName:"administration",slug:"/administration/Memory_management",permalink:"/zh/docs/2.2/administration/Memory_management",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Memory_management.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/2.2/administration/Load_balance"},next:{title:"\u5143\u6570\u636e\u6062\u590d\uff08\u6b64\u65b9\u6cd5\u5e76\u4e0d\u80fd\u6839\u672c\u89e3\u51b3\u95ee\u9898\uff0c\u53ea\u662f\u4e3a\u4e86\u5c3d\u5feb\u6062\u590d\u96c6\u7fa4\u624d\u9700\u8981\u5982\u6b64\u64cd\u4f5c\uff0c\u8bf7\u8054\u7cfb\u5b98\u65b9\u4eba\u5458\u534f\u52a9\uff09",permalink:"/zh/docs/2.2/administration/Metadata_recovery"}},l={},a=[{value:"\u5185\u5b58\u5206\u7c7b",id:"\u5185\u5b58\u5206\u7c7b",level:2},{value:"\u5185\u5b58\u76f8\u5173\u7684\u914d\u7f6e",id:"\u5185\u5b58\u76f8\u5173\u7684\u914d\u7f6e",level:2},{value:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",id:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",level:2},{value:"1. <strong>\u901a\u8fc7 Metrics \u63a5\u53e3\u5206\u6790\u5185\u5b58\u4f7f\u7528</strong>",id:"1-\u901a\u8fc7-metrics-\u63a5\u53e3\u5206\u6790\u5185\u5b58\u4f7f\u7528",level:3},{value:"2. <strong>\u901a\u8fc7 mem_tracker \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528</strong>",id:"2-\u901a\u8fc7-mem_tracker-\u63a5\u53e3\u5206\u6790-be-\u5185\u5b58\u4f7f\u7528",level:3},{value:"3. <strong>\u901a\u8fc7 tcmalloc \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528</strong>",id:"3-\u901a\u8fc7-tcmalloc-\u63a5\u53e3\u5206\u6790-be-\u5185\u5b58\u4f7f\u7528",level:3}];function m(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",strong:"strong",h3:"h3",pre:"pre",code:"code",a:"a",img:"img"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u5185\u5b58\u7ba1\u7406",children:"\u5185\u5b58\u7ba1\u7406"}),"\n",(0,t.jsx)(s.p,{children:"\u672c\u7ae0\u8282\u4e3b\u8981\u4ecb\u7ecd StarRocks BE \u4e2d\u5185\u5b58\u4f7f\u7528\u5206\u7c7b\u548c\u5185\u5b58\u7ba1\u7406\u3001\u5185\u5b58\u8c03\u4f18\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u5185\u5b58\u5206\u7c7b",children:"\u5185\u5b58\u5206\u7c7b"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u6807\u8bc6"}),(0,t.jsx)(s.th,{children:"Metric \u540d\u79f0"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"}),(0,t.jsx)(s.th,{children:"BE \u76f8\u5173\u914d\u7f6e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"process"}),(0,t.jsx)(s.td,{children:"starrocks_be_process_mem_bytes"}),(0,t.jsx)(s.td,{children:"BE \u8fdb\u7a0b\u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\uff08\u4e0d\u5305\u542b\u9884\u7559\u7684\u7a7a\u95f2\u5185\u5b58\uff09"}),(0,t.jsx)(s.td,{children:"mem_limit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"query_pool"}),(0,t.jsx)(s.td,{children:"starrocks_be_column_pool_mem_bytes"}),(0,t.jsx)(s.td,{children:"BE \u67e5\u8be2\u5c42\u4f7f\u7528\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"load"}),(0,t.jsx)(s.td,{children:"starrocks_be_load_mem_bytes"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u4f7f\u7528\u7684\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{children:"load_process_max_memory_limit_bytes, load_process_max_memory_limit_percent"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"table_meta"}),(0,t.jsx)(s.td,{children:"starrocks_be_tablet_meta_mem_bytes"}),(0,t.jsx)(s.td,{children:"\u5143\u6570\u636e\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"compaction"}),(0,t.jsx)(s.td,{children:"starrocks_be_compaction_mem_bytes"}),(0,t.jsx)(s.td,{children:"\u7248\u672c\u5408\u5e76\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{children:"compaction_max_memory_limit, compaction_max_memory_limit_percent"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"column_pool"}),(0,t.jsx)(s.td,{children:"starrocks_be_column_pool_mem_bytes"}),(0,t.jsx)(s.td,{children:"column pool \u5185\u5b58\u6c60\uff0c\u7528\u4e8e\u52a0\u901f\u5b58\u50a8\u5c42\u6570\u636e\u8bfb\u53d6\u7684 Column Cache"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"page_cache"}),(0,t.jsx)(s.td,{children:"starrocks_be_storage_page_cache_mem_bytes"}),(0,t.jsx)(s.td,{children:"BE \u5b58\u50a8\u5c42 page \u7f13\u5b58"}),(0,t.jsx)(s.td,{children:"disable_storage_page_cache, storage_page_cache_limit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"chunk_allocator"}),(0,t.jsx)(s.td,{children:"starrocks_be_chunk_allocator_mem_bytes"}),(0,t.jsx)(s.td,{children:"CPU per core \u7f13\u5b58\uff0c\u7528\u4e8e\u52a0\u901f\u5c0f\u5757\u5185\u5b58\u7533\u8bf7\u7684 Cache"}),(0,t.jsx)(s.td,{children:"chunk_reserved_bytes_limit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"consistency"}),(0,t.jsx)(s.td,{children:"starrocks_be_consistency_mem_bytes"}),(0,t.jsx)(s.td,{children:"\u5b9a\u671f\u4e00\u81f4\u6027\u6821\u9a8c\u4f7f\u7528\u7684\u5185\u5b58"}),(0,t.jsx)(s.td,{children:"consistency_max_memory_limit_percent, consistency_max_memory_limit"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"schema_change"}),(0,t.jsx)(s.td,{children:"starrocks_be_schema_change_mem_bytes"}),(0,t.jsx)(s.td,{children:"Schema Change \u4efb\u52a1\u4f7f\u7528\u7684\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{children:"memory_limitation_per_thread_for_schema_change"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"clone"}),(0,t.jsx)(s.td,{children:"starrocks_be_clone_mem_bytes"}),(0,t.jsx)(s.td,{children:"Tablet Clone \u4efb\u52a1\u4f7f\u7528\u7684\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"update"}),(0,t.jsx)(s.td,{children:"starrocks_be_update_mem_bytes"}),(0,t.jsx)(s.td,{children:"\u4e3b\u952e\u6a21\u578b\u4f7f\u7528\u7684\u603b\u5185\u5b58"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u5185\u5b58\u76f8\u5173\u7684\u914d\u7f6e",children:"\u5185\u5b58\u76f8\u5173\u7684\u914d\u7f6e"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"BE \u914d\u7f6e"})}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u540d\u79f0"}),(0,t.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"mem_limit"}),(0,t.jsx)(s.td,{children:"90%"}),(0,t.jsx)(s.td,{children:"BE \u8fdb\u7a0b\u5185\u5b58\u4e0a\u9650\uff0c\u9ed8\u8ba4\u786c\u9650\u4e3a BE \u6240\u5728\u673a\u5668\u5185\u5b58\u7684 90%, \u8f6f\u9650\u4e3a BE \u6240\u5728\u673a\u5668\u5185\u5b58\u7684 80%\u3002\u5982\u679c\u662f BE \u72ec\u7acb\u90e8\u7f72\u7684\u8bdd\uff0c\u4e0d\u9700\u8981\u914d\u7f6e\uff0c\u5982\u679c\u662f\u548c\u5176\u5b83\u5360\u7528\u5185\u5b58\u6bd4\u8f83\u591a\u7684\u670d\u52a1\u6df7\u5408\u90e8\u7f72\u7684\u8bdd\uff0c\u8981\u5408\u7406\u914d\u7f6e\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"load_process_max_memory_limit_bytes"}),(0,t.jsx)(s.td,{children:"107374182400"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u5185\u5b58\u4e0a\u9650, \u53d6 mem_limit * load_process_max_memory_limit_percent / 100 \u548c load_process_max_memory_limit_bytes \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c, \u5bfc\u5165\u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u89e6\u53d1\u5237\u76d8\u548c\u53cd\u538b\u903b\u8f91\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"load_process_max_memory_limit_percent"}),(0,t.jsx)(s.td,{children:"30"}),(0,t.jsx)(s.td,{children:"\u5bfc\u5165\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * load_process_max_memory_limit_percent / 100 \u548c load_process_max_memory_limit_bytes \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c\uff0c\u5bfc\u5165\u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u89e6\u53d1\u5237\u76d8\u548c\u53cd\u538b\u903b\u8f91\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"compaction_max_memory_limit"}),(0,t.jsx)(s.td,{children:"-1"}),(0,t.jsx)(s.td,{children:"Compaction \u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * compaction_max_memory_limit_percent / 100 \u548c compaction_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c\uff0c-1 \u8868\u793a\u6ca1\u6709\u9650\u5236\uff0c\u5f53\u524d\u4e0d\u5efa\u8bae\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002Compaction \u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u5bfc\u81f4 Compaction \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"compaction_max_memory_limit_percent"}),(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"Compaction \u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * compaction_max_memory_limit_percent / 100 \u548c compaction_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c\uff0c-1 \u8868\u793a\u6ca1\u6709\u9650\u5236\uff0c\u5f53\u524d\u4e0d\u5efa\u8bae\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002Compaction \u5185\u5b58\u5230\u8fbe\u9650\u5236\uff0c\u4f1a\u5bfc\u81f4 Compaction \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"disable_storage_page_cache"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"\u662f\u5426\u7981\u7528 BE \u5b58\u50a8\u5c42 page \u7f13\u5b58\uff0c\u548c storage_page_cache_limit \u914d\u5408\u4f7f\u7528\uff0c\u5728\u5185\u5b58\u8d44\u6e90\u5145\u8db3\u548c\u6709\u5927\u6570\u636e\u91cf Scan \u7684\u573a\u666f\u53ef\u4ee5\u6253\u5f00\uff0c\u80fd\u591f\u52a0\u901f\u67e5\u8be2\u6027\u80fd\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"storage_page_cache_limit"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"BE \u5b58\u50a8\u5c42 page \u7f13\u5b58\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"chunk_reserved_bytes_limit"}),(0,t.jsx)(s.td,{children:"2147483648"}),(0,t.jsx)(s.td,{children:"\u7528\u4e8e\u52a0\u901f\u5c0f\u5757\u5185\u5b58\u5206\u914d\u7684 Cache\uff0c\u9ed8\u8ba4\u4e0a\u9650\u4e3a 2G\uff0c\u5728\u5185\u5b58\u8d44\u6e90\u5145\u8db3\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8003\u8651\u6253\u5f00\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"consistency_max_memory_limit_percent"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * consistency_max_memory_limit_percent / 100 \u548c consistency_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c\u3002\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"consistency_max_memory_limit"}),(0,t.jsx)(s.td,{children:"10G"}),(0,t.jsx)(s.td,{children:"\u4e00\u81f4\u6027\u6821\u9a8c\u4efb\u52a1\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u53d6 mem_limit * consistency_max_memory_limit_percent / 100 \u548c consistency_max_memory_limit \u4e2d\u8f83\u5c0f\u7684\u90a3\u4e2a\u503c\u3002\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"memory_limitation_per_thread_for_schema_change"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"\u5355\u4e2a schema change \u4efb\u52a1\u7684\u5185\u5b58\u4f7f\u7528\u4e0a\u9650\uff0c\u5185\u5b58\u4f7f\u7528\u8d85\u9650\uff0c\u4f1a\u5bfc\u81f4 schema change \u4efb\u52a1\u5931\u8d25\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tc_use_memory_min"}),(0,t.jsx)(s.td,{children:"10737418240"}),(0,t.jsx)(s.td,{children:"TCmalloc \u6700\u5c0f\u9884\u7559\u5185\u5b58\uff0c\u5c0f\u4e8e\u8fd9\u4e2a\u503c\uff0cStarRocks \u4e0d\u4f1a\u5c06\u7a7a\u95f2\u5185\u5b58\u8fd4\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u3002"})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"Session \u53d8\u91cf"})}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u540d\u79f0"}),(0,t.jsx)(s.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"exec_mem_limit"}),(0,t.jsx)(s.td,{children:"2147483648"}),(0,t.jsx)(s.td,{children:"\u5355\u4e2a instance \u5185\u5b58\u9650\u5236"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"load_mem_limit"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"\u5355\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u5185\u5b58\u9650\u5236\uff0c\u5982\u679c\u662f0,\u4f1a\u53d6exec_mem_limit"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528",children:"\u67e5\u770b\u5185\u5b58\u4f7f\u7528"}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u524d\u6709\u4e09\u79cd\u65b9\u6cd5\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528:"}),"\n",(0,t.jsxs)(s.h3,{id:"1-\u901a\u8fc7-metrics-\u63a5\u53e3\u5206\u6790\u5185\u5b58\u4f7f\u7528",children:["1. ",(0,t.jsx)(s.strong,{children:"\u901a\u8fc7 Metrics \u63a5\u53e3\u5206\u6790\u5185\u5b58\u4f7f\u7528"})]}),"\n",(0,t.jsx)(s.p,{children:"Metrics \u7edf\u8ba1\u6bcf 10 \u79d2\u66f4\u65b0\u4e00\u6b21\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'# BE webserver_port \u9ed8\u8ba4\u662f 8040\r\ncurl -XGET -s http://BE_IP:8040/metrics | grep "^starrocks_be_.*_mem_bytes\\|^starrocks_be_tcmalloc_bytes_in_use" \n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u5bf9\u5e94\u6307\u6807\u7684\u542b\u4e49\u53c2\u8003\u7ae0\u8282: ",(0,t.jsx)(s.a,{href:"#%E5%86%85%E5%AD%98%E5%88%86%E7%B1%BB",children:"\u5185\u5b58\u5206\u7c7b"}),"\u3002"]}),"\n",(0,t.jsxs)(s.h3,{id:"2-\u901a\u8fc7-mem_tracker-\u63a5\u53e3\u5206\u6790-be-\u5185\u5b58\u4f7f\u7528",children:["2. ",(0,t.jsx)(s.strong,{children:"\u901a\u8fc7 mem_tracker \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528"})]}),"\n",(0,t.jsx)(s.p,{children:"\u901a\u8fc7\u6d4f\u89c8\u5668\u6216\u662f curl \u8bbf\u95ee\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# BE webserver_port \u9ed8\u8ba4\u662f 8040\r\nhttp://be_ip:8040/mem_tracker\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"MemTracker",src:r(46656).Z+"",width:"1312",height:"654"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"level: MemTracker \u662f\u4e00\u4e2a\u6811\u578b\u7ed3\u6784\uff0c\u7b2c\u4e00\u7ea7\u662f BE \u4f7f\u7528\u603b\u5185\u5b58\uff0c\u7b2c\u4e8c\u7ea7\u662f\u5206\u7c7b\u5185\u5b58\u4f7f\u7528\u3002"}),"\n",(0,t.jsxs)(s.li,{children:["Label: \u6807\u8bc6\u5185\u5b58\u5206\u7c7b\uff0c\u5bf9\u5e94\u6307\u6807\u7684\u542b\u4e49\u53c2\u8003\u7ae0\u8282: ",(0,t.jsx)(s.a,{href:"#%E5%86%85%E5%AD%98%E5%88%86%E7%B1%BB",children:"\u5185\u5b58\u5206\u7c7b"}),"\u3002"]}),"\n",(0,t.jsx)(s.li,{children:"Parent: \u7236\u7ed3\u70b9 Label\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Limit: \u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c-1 \u8868\u793a\u6ca1\u6709\u9650\u5236\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Current Consumption: \u5f53\u524d\u5185\u5b58\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Peak Consumption: \u5cf0\u503c\u5185\u5b58\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"3-\u901a\u8fc7-tcmalloc-\u63a5\u53e3\u5206\u6790-be-\u5185\u5b58\u4f7f\u7528",children:["3. ",(0,t.jsx)(s.strong,{children:"\u901a\u8fc7 tcmalloc \u63a5\u53e3\u5206\u6790 BE \u5185\u5b58\u4f7f\u7528"})]}),"\n",(0,t.jsx)(s.p,{children:"\u901a\u8fc7\u6d4f\u89c8\u5668\u6216\u662f curl \u8bbf\u95ee\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"# BE webserver_port \u9ed8\u8ba4\u662f 8040\r\nhttp://be_ip:8040/memz\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"------------------------------------------------\r\nMALLOC:      777276768 (  741.3 MiB) Bytes in use by application\r\nMALLOC: +   8851890176 ( 8441.8 MiB) Bytes in page heap freelist\r\nMALLOC: +    143722232 (  137.1 MiB) Bytes in central cache freelist\r\nMALLOC: +     21869824 (   20.9 MiB) Bytes in transfer cache freelist\r\nMALLOC: +    832509608 (  793.9 MiB) Bytes in thread cache freelists\r\nMALLOC: +     58195968 (   55.5 MiB) Bytes in malloc metadata\r\nMALLOC:   ------------\r\nMALLOC: =  10685464576 (10190.5 MiB) Actual memory used (physical + swap)\r\nMALLOC: +  25231564800 (24062.7 MiB) Bytes released to OS (aka unmapped)\r\nMALLOC:   ------------\r\nMALLOC: =  35917029376 (34253.1 MiB) Virtual address space used\r\nMALLOC:\r\nMALLOC:         112388              Spans in use\r\nMALLOC:            335              Thread heaps in use\r\nMALLOC:           8192              Tcmalloc page size\r\n------------------------------------------------\r\nCall ReleaseFreeMemory() to release freelist memory to the OS (via madvise()).\r\nBytes released to the OS take up virtual address space but no physical memory.\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u5404\u4e2a\u6307\u6807\u7684\u542b\u4e49:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Bytes in use by application: BE \u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Bytes in page heap freelist: BE \u5df2\u4e0d\u518d\u4f7f\u7528\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709\u5f52\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Actual memory used: \u64cd\u4f5c\u7cfb\u7edf\u770b\u5230\u7684 BE \u7684\u5b9e\u9645\u5185\u5b58\u4f7f\u7528\uff08BE \u4f1a\u9884\u7559\u4e00\u4e9b\u7a7a\u95f2\u5185\u5b58\uff0c\u4e0d\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u6216\u662f\u7f13\u6162\u8fd4\u8fd8\u7ed9\u64cd\u4f5c\u7cfb\u7edf\uff09\u3002"}),"\n",(0,t.jsx)(s.li,{children:"Bytes released to OS: BE \u5df2\u8bbe\u7f6e\u4e3a\u53ef\u56de\u6536\u72b6\u6001\uff0c\u4f46\u662f\u64cd\u4f5c\u7cfb\u7edf\u8fd8\u6ca1\u6709\u56de\u6536\u7684\u5185\u5b58\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(m,e)})):m(e)}},46656:(e,s,r)=>{r.d(s,{Z:()=>t});const t=r.p+"assets/images/memory_management_1-ebb466291a4956b60da63bb5c321314b.png"},11151:(e,s,r)=>{r.d(s,{Zo:()=>d,ah:()=>i});var t=r(67294);const n=t.createContext({});function i(e){const s=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function d({components:e,children:s,disableParentContext:r}){let d;return d=r?"function"==typeof e?e({}):e||c:i(e),t.createElement(n.Provider,{value:d},s)}}}]);