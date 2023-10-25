"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6539],{55358:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=n(85893),s=n(11151);const l={displayed_sidebar:"Chinese"},d="\u67e5\u770b\u5206\u6790 Query Profile",c={id:"administration/query_profile",title:"\u67e5\u770b\u5206\u6790 Query Profile",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b\u5e76\u5206\u6790 Query Profile\u3002Query Profile \u8bb0\u5f55\u4e86\u67e5\u8be2\u4e2d\u6d89\u53ca\u7684\u6240\u6709\u5de5\u4f5c\u8282\u70b9\u7684\u6267\u884c\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 Query Profile \u5feb\u901f\u8bc6\u522b\u5f71\u54cd StarRocks \u96c6\u7fa4\u67e5\u8be2\u6027\u80fd\u7684\u74f6\u9888\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/administration/query_profile.md",sourceDirName:"administration",slug:"/administration/query_profile",permalink:"/zh/docs/2.3/administration/query_profile",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/query_profile.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",permalink:"/zh/docs/2.3/administration/filemanager"},next:{title:"\u8d44\u6e90\u9694\u79bb",permalink:"/zh/docs/2.3/administration/resource_group"}},t={},h=[{value:"\u542f\u7528 Query Profile",id:"\u542f\u7528-query-profile",level:2},{value:"\u83b7\u53d6 Query Profile",id:"\u83b7\u53d6-query-profile",level:2},{value:"\u5206\u6790 Query Profile",id:"\u5206\u6790-query-profile",level:2},{value:"Query Profile \u7ed3\u6784",id:"query-profile-\u7ed3\u6784",level:3},{value:"\u91cd\u8981\u6307\u6807",id:"\u91cd\u8981\u6307\u6807",level:3},{value:"Summary \u6307\u6807",id:"summary-\u6307\u6807",level:4},{value:"Operator \u901a\u7528\u6307\u6807",id:"operator-\u901a\u7528\u6307\u6807",level:4},{value:"Scan operator",id:"scan-operator",level:4},{value:"Exchange operator",id:"exchange-operator",level:4},{value:"Aggregate operator",id:"aggregate-operator",level:4},{value:"Join operator",id:"join-operator",level:4},{value:"Window Function operator",id:"window-function-operator",level:4},{value:"Sort operator",id:"sort-operator",level:4},{value:"TableFunction operator",id:"tablefunction-operator",level:4},{value:"Project operator",id:"project-operator",level:4},{value:"LocalExchange operator",id:"localexchange-operator",level:4},{value:"Operator \u8017\u65f6",id:"operator-\u8017\u65f6",level:3},{value:"Metric merging and MIN/MAX",id:"metric-merging-and-minmax",level:3},{value:"MIN \u548c MAX \u503c\u5dee\u5f02\u8fc7\u5927",id:"min-\u548c-max-\u503c\u5dee\u5f02\u8fc7\u5927",level:4},{value:"\u53ef\u89c6\u5316 Query Profile",id:"\u53ef\u89c6\u5316-query-profile",level:2},{value:"\u786e\u8ba4\u67e5\u8be2\u74f6\u9888",id:"\u786e\u8ba4\u67e5\u8be2\u74f6\u9888",level:3},{value:"\u786e\u8ba4\u6570\u636e\u662f\u5426\u503e\u659c",id:"\u786e\u8ba4\u6570\u636e\u662f\u5426\u503e\u659c",level:3},{value:"\u786e\u8ba4\u5206\u6876\u6216\u5206\u533a\u88c1\u526a\u662f\u5426\u751f\u6548",id:"\u786e\u8ba4\u5206\u6876\u6216\u5206\u533a\u88c1\u526a\u662f\u5426\u751f\u6548",level:3},{value:"\u786e\u8ba4\u7269\u5316\u89c6\u56fe\u9009\u62e9\u662f\u5426\u6b63\u786e",id:"\u786e\u8ba4\u7269\u5316\u89c6\u56fe\u9009\u62e9\u662f\u5426\u6b63\u786e",level:3},{value:"\u786e\u8ba4 Join \u5de6\u53f3\u8868 Plan \u662f\u5426\u5408\u7406",id:"\u786e\u8ba4-join-\u5de6\u53f3\u8868-plan-\u662f\u5426\u5408\u7406",level:3},{value:"\u786e\u8ba4 Join \u5206\u5e03\u65b9\u5f0f\u662f\u5426\u6b63\u786e",id:"\u786e\u8ba4-join-\u5206\u5e03\u65b9\u5f0f\u662f\u5426\u6b63\u786e",level:3},{value:"\u786e\u8ba4 JoinRuntimeFilter \u662f\u5426\u751f\u6548",id:"\u786e\u8ba4-joinruntimefilter-\u662f\u5426\u751f\u6548",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u4e3a\u4ec0\u4e48 Exchange Operator \u65f6\u95f4\u5f02\u5e38\uff1f",id:"\u4e3a\u4ec0\u4e48-exchange-operator-\u65f6\u95f4\u5f02\u5e38",level:3},{value:"\u4e3a\u4ec0\u4e48\u5404 Operator \u65f6\u95f4\u4e4b\u548c\u8fdc\u5c0f\u4e8e\u67e5\u8be2\u5b9e\u9645\u7684\u6267\u884c\u65f6\u95f4\uff1f",id:"\u4e3a\u4ec0\u4e48\u5404-operator-\u65f6\u95f4\u4e4b\u548c\u8fdc\u5c0f\u4e8e\u67e5\u8be2\u5b9e\u9645\u7684\u6267\u884c\u65f6\u95f4",level:3}];function o(e){const r=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",ol:"ol",li:"li",img:"img",h3:"h3",ul:"ul",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"\u67e5\u770b\u5206\u6790-query-profile",children:"\u67e5\u770b\u5206\u6790 Query Profile"}),"\n",(0,i.jsx)(r.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u67e5\u770b\u5e76\u5206\u6790 Query Profile\u3002Query Profile \u8bb0\u5f55\u4e86\u67e5\u8be2\u4e2d\u6d89\u53ca\u7684\u6240\u6709\u5de5\u4f5c\u8282\u70b9\u7684\u6267\u884c\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 Query Profile \u5feb\u901f\u8bc6\u522b\u5f71\u54cd StarRocks \u96c6\u7fa4\u67e5\u8be2\u6027\u80fd\u7684\u74f6\u9888\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u542f\u7528-query-profile",children:"\u542f\u7528 Query Profile"}),"\n",(0,i.jsxs)(r.p,{children:["\u9488\u5bf9 StarRocks v2.5 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u53d8\u91cf ",(0,i.jsx)(r.code,{children:"is_report_success"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(r.code,{children:"true"})," \u4ee5\u542f\u7528 Query Profile\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"set is_report_success = true;\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u9488\u5bf9 StarRocks v2.5 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u53d8\u91cf ",(0,i.jsx)(r.code,{children:"enable_profile"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(r.code,{children:"true"})," \u4ee5\u542f\u7528 Query Profile\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"set enable_profile = true;\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u83b7\u53d6-query-profile",children:"\u83b7\u53d6 Query Profile"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 StarRocks \u4f01\u4e1a\u7248\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 StarRocks Manager \u83b7\u53d6\u5e76\u53ef\u89c6\u5316 Query Profile\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u60a8\u4e0d\u662f StarRocks \u4f01\u4e1a\u7248\u7528\u6237\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u83b7\u53d6 Query Profile\uff1a"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,i.jsx)(r.code,{children:"http://<fe_ip>:<fe_http_port>"}),"\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["\u5728\u663e\u793a\u7684\u9875\u9762\u4e0a\uff0c\u5355\u51fb\u9876\u90e8\u5bfc\u822a\u4e2d\u7684 ",(0,i.jsx)(r.strong,{children:"queries"}),"\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["\u5728 ",(0,i.jsx)(r.strong,{children:"Finished Queries"})," \u5217\u8868\u4e2d\uff0c\u9009\u62e9\u60a8\u8981\u5206\u6790\u7684\u67e5\u8be2\u5e76\u5355\u51fb ",(0,i.jsx)(r.strong,{children:"Profile"})," \u5217\u4e2d\u7684\u94fe\u63a5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(1557).Z+"",width:"1280",height:"558"})}),"\n",(0,i.jsx)(r.p,{children:"\u9875\u9762\u5c06\u8df3\u8f6c\u81f3\u76f8\u5e94 Query Profile\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(21346).Z+"",width:"1280",height:"587"})}),"\n",(0,i.jsx)(r.h2,{id:"\u5206\u6790-query-profile",children:"\u5206\u6790 Query Profile"}),"\n",(0,i.jsx)(r.h3,{id:"query-profile-\u7ed3\u6784",children:"Query Profile \u7ed3\u6784"}),"\n",(0,i.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f\u793a\u4f8b Query Profile\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"Query:\n  Summary:\n  Planner:\n  Execution Profile 7de16a85-761c-11ed-917d-00163e14d435:\n    Fragment 0:\n      Pipeline (id=2):\n        EXCHANGE_SINK (plan_node_id=18):\n        LOCAL_MERGE_SOURCE (plan_node_id=17):\n      Pipeline (id=1):\n        LOCAL_SORT_SINK (plan_node_id=17):\n        AGGREGATE_BLOCKING_SOURCE (plan_node_id=16):\n      Pipeline (id=0):\n        AGGREGATE_BLOCKING_SINK (plan_node_id=16):\n        EXCHANGE_SOURCE (plan_node_id=15):\n    Fragment 1:\n       ...\n    Fragment 2:\n       ...\n"})}),"\n",(0,i.jsx)(r.p,{children:"Query Profile \u7531\u4ee5\u4e0b\u4e09\u90e8\u5206\u7ec4\u6210\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Fragment\uff1a\u6267\u884c\u6811\u3002\u4e00\u4e2a\u67e5\u8be2\u7531\u4e00\u4e2a\u6216\u591a\u4e2a Fragment \u7ec4\u6210\u3002"}),"\n",(0,i.jsx)(r.li,{children:"Pipeline\uff1a\u6267\u884c\u94fe\u3002\u6267\u884c\u94fe\u6ca1\u6709\u5206\u652f\u3002\u4e00\u4e2a Fragment \u53ef\u5206\u4e3a\u591a\u4e2a Pipeline\u3002"}),"\n",(0,i.jsx)(r.li,{children:"Operator\uff1a\u7b97\u5b50\u3002\u4e00\u4e2a Pipeline \u7531\u591a\u4e2a Operator \u7ec4\u6210\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(39925).Z+"",width:"1280",height:"484"})}),"\n",(0,i.jsx)(r.h3,{id:"\u91cd\u8981\u6307\u6807",children:"\u91cd\u8981\u6307\u6807"}),"\n",(0,i.jsx)(r.p,{children:"Query Profile \u5305\u542b\u5927\u91cf\u67e5\u8be2\u6267\u884c\u8be6\u7ec6\u4fe1\u606f\u7684\u6307\u6807\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ea\u9700\u5173\u6ce8\u8fd0\u7b97\u7b26\u7684\u6267\u884c\u65f6\u95f4\u4ee5\u53ca\u5904\u7406\u7684\u6570\u636e\u91cf\u5927\u5c0f\u5373\u53ef\u3002\u627e\u5230\u74f6\u9888\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u6709\u9488\u5bf9\u6027\u5730\u89e3\u51b3\u5b83\u4eec\u3002"}),"\n",(0,i.jsx)(r.h4,{id:"summary-\u6307\u6807",children:"Summary \u6307\u6807"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Total"}),(0,i.jsx)(r.td,{children:"\u67e5\u8be2\u6d88\u8017\u7684\u603b\u65f6\u95f4\uff0c\u5305\u62ec Planning\u3001Executing \u4ee5\u53ca Profiling \u9636\u6bb5\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"QueryCpuCost"}),(0,i.jsx)(r.td,{children:"\u67e5\u8be2\u7d2f\u79ef CPU \u4f7f\u7528\u65f6\u95f4\u3002\u6240\u6709\u5e76\u53d1\u8fdb\u7a0b\u7d2f\u52a0\uff0c\u56e0\u6b64\u8be5\u6307\u6807\u4f1a\u5927\u4e8e\u5b9e\u9645\u7684\u6267\u884c\u65f6\u95f4\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"QueryMemCost"}),(0,i.jsx)(r.td,{children:"\u67e5\u8be2\u7684\u603b\u5185\u5b58\u6d88\u8017\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"operator-\u901a\u7528\u6307\u6807",children:"Operator \u901a\u7528\u6307\u6807"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"OperatorTotalTime"}),(0,i.jsx)(r.td,{children:"Operator \u6d88\u8017\u7684\u603b\u65f6\u95f4\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PushRowNum"}),(0,i.jsx)(r.td,{children:"Operator \u7d2f\u79ef\u8f93\u5165\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PullRowNum"}),(0,i.jsx)(r.td,{children:"Operator \u7d2f\u79ef\u8f93\u51fa\u884c\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"scan-operator",children:"Scan operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Table"}),(0,i.jsx)(r.td,{children:"\u8868\u540d\u79f0\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ScanTime"}),(0,i.jsx)(r.td,{children:"Scan \u7d2f\u8ba1\u65f6\u95f4\u3002Scan \u64cd\u4f5c\u5728\u5f02\u6b65 I/O \u7ebf\u7a0b\u6c60\u4e2d\u5b8c\u6210\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"TabletCount"}),(0,i.jsx)(r.td,{children:"Tablet \u6570\u91cf\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PushdownPredicates"}),(0,i.jsx)(r.td,{children:"\u4e0b\u63a8\u7684\u8c13\u8bcd\u6570\u91cf\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BytesRead"}),(0,i.jsx)(r.td,{children:"\u8bfb\u53d6\u6570\u636e\u7684\u5927\u5c0f\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"CompressedBytesRead"}),(0,i.jsx)(r.td,{children:"\u8bfb\u53d6\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"IOTime"}),(0,i.jsx)(r.td,{children:"\u7d2f\u8ba1 I/O \u65f6\u95f4\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BitmapIndexFilterRows"}),(0,i.jsx)(r.td,{children:"Bitmap \u7d22\u5f15\u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BloomFilterFilterRows"}),(0,i.jsx)(r.td,{children:"Bloomfilter \u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SegmentRuntimeZoneMapFilterRows"}),(0,i.jsx)(r.td,{children:"Runtime Zone Map \u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SegmentZoneMapFilterRows"}),(0,i.jsx)(r.td,{children:"Zone Map \u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ShortKeyFilterRows"}),(0,i.jsx)(r.td,{children:"Short Key \u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ZoneMapIndexFilterRows"}),(0,i.jsx)(r.td,{children:"Zone Map \u7d22\u5f15\u8fc7\u6ee4\u7684\u6570\u636e\u884c\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"exchange-operator",children:"Exchange operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PartType"}),(0,i.jsxs)(r.td,{children:["\u6570\u636e\u5206\u5e03\u6a21\u5f0f\uff0c\u5305\u62ec\uff1a",(0,i.jsx)(r.code,{children:"UNPARTITIONED"}),"\u3001",(0,i.jsx)(r.code,{children:"RANDOM"}),"\u3001",(0,i.jsx)(r.code,{children:"HASH_PARTITIONED"})," \u4ee5\u53ca ",(0,i.jsx)(r.code,{children:"BUCKET_SHUFFLE_HASH_PARTITIONED"}),"\u3002"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BytesSent"}),(0,i.jsx)(r.td,{children:"\u53d1\u9001\u7684\u6570\u636e\u5927\u5c0f\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"OverallThroughput"}),(0,i.jsx)(r.td,{children:"\u541e\u5410\u901f\u7387\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"NetworkTime"}),(0,i.jsx)(r.td,{children:"\u6570\u636e\u5305\u4f20\u8f93\u65f6\u95f4\uff08\u4e0d\u5305\u62ec\u63a5\u6536\u540e\u5904\u7406\u65f6\u95f4\uff09\u3002\u8bf7\u53c2\u9605\u4e0b\u65b9 FAQ\uff0c\u4e86\u89e3\u6709\u5173\u6307\u6807\u8ba1\u7b97\u4ee5\u53ca\u6f5c\u5728\u5f02\u5e38\u7684\u66f4\u591a\u4fe1\u606f\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"WaitTime"}),(0,i.jsx)(r.td,{children:"\u7531\u4e8e\u53d1\u9001\u7aef\u961f\u5217\u6ee1\u800c\u5bfc\u81f4\u7684\u7b49\u5f85\u65f6\u95f4\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"aggregate-operator",children:"Aggregate operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"GroupingKeys"}),(0,i.jsx)(r.td,{children:"GROUP BY \u5217\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"AggregateFunctions"}),(0,i.jsx)(r.td,{children:"\u805a\u5408\u51fd\u6570\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"AggComputeTime"}),(0,i.jsx)(r.td,{children:"\u805a\u5408\u51fd\u6570\u8ba1\u7b97\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ExprComputeTime"}),(0,i.jsx)(r.td,{children:"\u8868\u8fbe\u5f0f\u8ba1\u7b97\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"HashTableSize"}),(0,i.jsx)(r.td,{children:"Hash Table \u5927\u5c0f\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"join-operator",children:"Join operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"JoinPredicates"}),(0,i.jsx)(r.td,{children:"Join \u8c13\u8bcd\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"JoinType"}),(0,i.jsx)(r.td,{children:"Join \u7c7b\u578b\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BuildBuckets"}),(0,i.jsx)(r.td,{children:"Hash Table \u7684 Bucket \u6570\u91cf\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"BuildHashTableTime"}),(0,i.jsx)(r.td,{children:"\u6784\u5efa Hash Table \u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ProbeConjunctEvaluateTime"}),(0,i.jsx)(r.td,{children:"Probe Conjunct \u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SearchHashTableTimer"}),(0,i.jsx)(r.td,{children:"\u67e5\u8be2 Hash Table \u8017\u65f6\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"window-function-operator",children:"Window Function operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ComputeTime"}),(0,i.jsx)(r.td,{children:"\u7a97\u53e3\u51fd\u6570\u8ba1\u7b97\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"PartitionKeys"}),(0,i.jsx)(r.td,{children:"\u5206\u533a\u5217\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"AggregateFunctions"}),(0,i.jsx)(r.td,{children:"\u805a\u5408\u51fd\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"sort-operator",children:"Sort operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SortKeys"}),(0,i.jsx)(r.td,{children:"\u6392\u5e8f\u952e\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SortType"}),(0,i.jsx)(r.td,{children:"\u67e5\u8be2\u7ed3\u679c\u6392\u5e8f\u65b9\u5f0f\uff1a\u5168\u6392\u5e8f\u6216\u8005\u6392\u5e8f Top N \u4e2a\u7ed3\u679c\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"tablefunction-operator",children:"TableFunction operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"TableFunctionExecTime"}),(0,i.jsx)(r.td,{children:"Table Function \u8ba1\u7b97\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"TableFunctionExecCount"}),(0,i.jsx)(r.td,{children:"Table Function \u6267\u884c\u6b21\u6570\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"project-operator",children:"Project operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ExprComputeTime"}),(0,i.jsx)(r.td,{children:"\u8868\u8fbe\u5f0f\u8ba1\u7b97\u8017\u65f6\u3002"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"CommonSubExprComputeTime"}),(0,i.jsx)(r.td,{children:"\u516c\u5171\u5b50\u8868\u8fbe\u5f0f\u8ba1\u7b97\u8017\u65f6\u3002"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"localexchange-operator",children:"LocalExchange operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u6307\u6807"}),(0,i.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Type"}),(0,i.jsxs)(r.td,{children:["Local Exchange \u7c7b\u578b\uff0c\u5305\u62ec\uff1a",(0,i.jsx)(r.code,{children:"Passthrough"}),"\u3001Partition",(0,i.jsx)(r.code,{children:"\u4ee5\u53ca"}),"Broadcast`\u3002"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ShuffleNum"}),(0,i.jsxs)(r.td,{children:["Shuffle \u6570\u91cf\u3002\u8be5\u6307\u6807\u4ec5\u5f53 ",(0,i.jsx)(r.code,{children:"Type"})," \u4e3a ",(0,i.jsx)(r.code,{children:"Partition"})," \u65f6\u6709\u6548\u3002"]})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"operator-\u8017\u65f6",children:"Operator \u8017\u65f6"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u5bf9\u4e8e OlapScan \u548c ConnectorScan Operator\uff0c\u5176\u8017\u65f6\u76f8\u5f53\u4e8e ",(0,i.jsx)(r.code,{children:"OperatorTotalTime + ScanTime"}),"\u3002\u56e0\u4e3a Scan Operator \u5728\u5f02\u6b65 I/O \u7ebf\u7a0b\u6c60\u4e2d\u8fdb\u884c I/O \u64cd\u4f5c\uff0c\u6240\u4ee5 ScanTime \u4e3a\u5f02\u6b65 I/O \u65f6\u95f4\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["Exchange Operator \u7684\u8017\u65f6\u76f8\u5f53\u4e8e ",(0,i.jsx)(r.code,{children:"OperatorTotalTime + NetworkTime"}),"\u3002\u56e0\u4e3a Exchange Operator \u5728 BRPC \u7ebf\u7a0b\u6c60\u4e2d\u6536\u53d1\u6570\u636e\u5305\uff0cNetworkTime \u5373\u4e3a\u7f51\u7edc\u4f20\u8f93\u6d88\u8017\u7684\u65f6\u95f4\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["\u5bf9\u4e8e\u5176\u4ed6 Operator\uff0c\u5176\u8017\u65f6\u4e3a ",(0,i.jsx)(r.code,{children:"OperatorTotalTime"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"metric-merging-and-minmax",children:"Metric merging and MIN/MAX"}),"\n",(0,i.jsx)(r.p,{children:"Pipeline Engine \u662f\u5e76\u884c\u8ba1\u7b97\u5f15\u64ce\u3002\u6bcf\u4e2a Fragment \u88ab\u5206\u53d1\u5230\u591a\u53f0\u673a\u5668\u4e0a\u5e76\u884c\u5904\u7406\uff0c\u6bcf\u53f0\u673a\u5668\u4e0a\u7684 Pipeline \u4f5c\u4e3a\u591a\u4e2a\u5e76\u53d1\u5b9e\u4f8b\u540c\u65f6\u6267\u884c\u3002\u56e0\u6b64\uff0c\u5728\u7edf\u8ba1 Profile \u65f6\uff0cStarRocks \u4f1a\u5408\u5e76\u76f8\u540c\u7684\u6307\u6807\uff0c\u5e76\u8bb0\u5f55\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u6bcf\u4e2a\u6307\u6807\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u4e0d\u540c\u79cd\u7c7b\u7684\u6307\u6807\u91c7\u7528\u4e86\u4e0d\u540c\u7684\u5408\u5e76\u7b56\u7565\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u65f6\u95f4\u7c7b\u6307\u6807\u6c42\u5e73\u5747\u503c\u3002\u4f8b\u5982\uff1a","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"OperatorTotalTime"})," \u662f\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u7684\u5e73\u5747\u8017\u65f6\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"__MAX_OF_OperatorTotalTime"})," \u662f\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u7684\u6700\u5927\u8017\u65f6\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"__MIN_OF_OperatorTotalTime"})," \u662f\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u7684\u6700\u5c0f\u8017\u65f6\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"             - OperatorTotalTime: 2.192us\n               - __MAX_OF_OperatorTotalTime: 2.502us\n               - __MIN_OF_OperatorTotalTime: 1.882us\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u975e\u65f6\u95f4\u7c7b\u6307\u6807\u6c42\u548c\u3002\u4f8b\u5982\uff1a","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"PullChunkNum"})," \u662f\u8be5\u6307\u6807\u5728\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u7684\u548c\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"__MAX_OF_PullChunkNum"})," \u662f\u8be5\u6307\u6807\u5728\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u7684\u6700\u5927\u503c\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"__MIN_OF_PullChunkNum"})," \u662f\u8be5\u6307\u6807\u5728\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u7684\u6700\u5c0f\u503c\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"             - PullChunkNum: 146.66K (146660)\n               - __MAX_OF_PullChunkNum: 24.45K (24450)\n               - __MIN_OF_PullChunkNum: 24.435K (24435)\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\u4e2a\u522b\u6ca1\u6709\u6700\u503c\u7684\u6307\u6807\u5728\u6240\u6709\u5e76\u53d1\u5b9e\u4f8b\u4e2d\u7684\u503c\u76f8\u540c\uff0c\u4f8b\u5982\uff1a",(0,i.jsx)(r.code,{children:"DegreeOfParallelism"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"min-\u548c-max-\u503c\u5dee\u5f02\u8fc7\u5927",children:"MIN \u548c MAX \u503c\u5dee\u5f02\u8fc7\u5927"}),"\n",(0,i.jsx)(r.p,{children:"\u901a\u5e38\uff0cMIN \u548c MAX \u503c\u4e4b\u95f4\u5982\u679c\u6709\u660e\u663e\u5dee\u5f02\uff0c\u5219\u8868\u660e\u6570\u636e\u6709\u5f88\u5927\u51e0\u7387\u5b58\u5728\u503e\u659c\u3002\u53ef\u80fd\u7684\u573a\u666f\u5305\u62ec\u805a\u5408\u548c Join \u7b49\u3002"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-SQL",children:"             - OperatorTotalTime: 2m48s\n               - __MAX_OF_OperatorTotalTime: 10m30s\n               - __MIN_OF_OperatorTotalTime: 279.170us\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u53ef\u89c6\u5316-query-profile",children:"\u53ef\u89c6\u5316 Query Profile"}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u60a8\u662f StarRocks \u4f01\u4e1a\u7248\u7528\u6237\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 StarRocks Manager \u53ef\u89c6\u5316\u60a8\u7684 Query Profile\u3002"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"\u6267\u884c\u6982\u89c8"}),"\u9875\u9762\u663e\u793a\u4e86\u4e00\u4e9b Summary \u6307\u6807\uff0c\u5305\u62ec\u603b\u6267\u884c\u65f6\u95f4",(0,i.jsx)(r.code,{children:"ExecutionWallTime"}),"\u3001I/O \u6307\u6807\u3001\u7f51\u7edc\u4f20\u8f93\u5927\u5c0f\u4ee5\u53ca CPU \u548c I/O \u8017\u65f6\u6bd4\u4f8b\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(14842).Z+"",width:"1280",height:"678"})}),"\n",(0,i.jsx)(r.p,{children:"\u5355\u51fb Operator\uff08\u8282\u70b9\uff09\u7684\u5361\u7247\uff0c\u53ef\u4ee5\u5728\u9875\u9762\u53f3\u4fa7\u7684\u9009\u9879\u5361\u4e2d\u67e5\u770b\u5176\u8be6\u7ec6\u4fe1\u606f\u3002\u5171\u6709\u4e09\u4e2a\u9009\u9879\u5361\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u8282\u70b9"}),"\uff1a\u8be5 Operator \u7684\u6838\u5fc3\u6307\u6807\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"\u8282\u70b9\u8be6\u60c5"}),": \u8be5 Operator \u7684\u6240\u6709\u6307\u6807\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Pipeline"}),": \u8be5 Operator \u6240\u5c5e Pipeline \u6307\u6807\u3002\u8be5\u9009\u9879\u5361\u4e2d\u7684\u6307\u6807\u4ec5\u4e0e\u8c03\u5ea6\u76f8\u5173\uff0c\u60a8\u65e0\u9700\u8fc7\u591a\u5173\u6ce8\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(46121).Z+"",width:"1280",height:"683"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4\u67e5\u8be2\u74f6\u9888",children:"\u786e\u8ba4\u67e5\u8be2\u74f6\u9888"}),"\n",(0,i.jsx)(r.p,{children:"Operator \u82b1\u8d39\u7684\u65f6\u95f4\u6bd4\u4f8b\u8d8a\u5927\uff0c\u5176\u5bf9\u5e94\u5361\u7247\u7684\u989c\u8272\u5c31\u8d8a\u6df1\u3002\u60a8\u53ef\u501f\u6b64\u8f7b\u677e\u786e\u8ba4\u67e5\u8be2\u7684\u74f6\u9888\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(17001).Z+"",width:"1280",height:"834"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4\u6570\u636e\u662f\u5426\u503e\u659c",children:"\u786e\u8ba4\u6570\u636e\u662f\u5426\u503e\u659c"}),"\n",(0,i.jsxs)(r.p,{children:["\u70b9\u51fb\u5360\u7528\u65f6\u95f4\u5360\u6bd4\u8f83\u5927\u7684 Operator \u5361\u7247\uff0c\u67e5\u770b\u5176 ",(0,i.jsx)(r.code,{children:"MaxTime"})," \u548c ",(0,i.jsx)(r.code,{children:"MinTime"})," \u6307\u6807\u3002\u901a\u5e38\uff0c",(0,i.jsx)(r.code,{children:"MaxTime"})," \u548c ",(0,i.jsx)(r.code,{children:"MinTime"})," \u4e4b\u95f4\u5982\u679c\u5b58\u5728\u660e\u663e\u5dee\u5f02\uff0c\u5219\u8868\u793a\u6570\u636e\u5b58\u5728\u503e\u659c\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(63501).Z+"",width:"1280",height:"822"})}),"\n",(0,i.jsxs)(r.p,{children:["\u7136\u540e\uff0c\u5355\u51fb",(0,i.jsx)(r.strong,{children:"\u8282\u70b9\u8be6\u60c5"}),"\u9009\u9879\u5361\uff0c\u5e76\u67e5\u770b\u662f\u5426\u6709\u4efb\u4f55\u5f02\u5e38\u6307\u6807\u3002\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u805a\u5408\u8fd0\u7b97\u7b26\u7684\u6307\u6807 ",(0,i.jsx)(r.code,{children:"PushRowNum"})," \u663e\u793a\u6570\u636e\u503e\u659c\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(1082).Z+"",width:"1280",height:"630"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4\u5206\u6876\u6216\u5206\u533a\u88c1\u526a\u662f\u5426\u751f\u6548",children:"\u786e\u8ba4\u5206\u6876\u6216\u5206\u533a\u88c1\u526a\u662f\u5426\u751f\u6548"}),"\n",(0,i.jsxs)(r.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"EXPLAIN <sql_statement>"})," \u8bed\u53e5\u67e5\u770b\u67e5\u8be2\u5bf9\u5e94\u7684 Query Plan \u4ee5\u67e5\u770b\u5206\u533a\u6216\u5206\u6876\u88c1\u526a\u662f\u5426\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(34412).Z+"",width:"1280",height:"529"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4\u7269\u5316\u89c6\u56fe\u9009\u62e9\u662f\u5426\u6b63\u786e",children:"\u786e\u8ba4\u7269\u5316\u89c6\u56fe\u9009\u62e9\u662f\u5426\u6b63\u786e"}),"\n",(0,i.jsxs)(r.p,{children:["\u5355\u51fb\u76f8\u5e94\u7684 Scan Operator \u7684\u5361\u7247\u5e76\u67e5\u770b",(0,i.jsx)(r.strong,{children:"\u8282\u70b9\u8be6\u60c5"}),"\u9009\u9879\u5361\u4e0a\u7684 ",(0,i.jsx)(r.code,{children:"Rollup"})," \u5b57\u6bb5\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(20729).Z+"",width:"1280",height:"771"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4-join-\u5de6\u53f3\u8868-plan-\u662f\u5426\u5408\u7406",children:"\u786e\u8ba4 Join \u5de6\u53f3\u8868 Plan \u662f\u5426\u5408\u7406"}),"\n",(0,i.jsx)(r.p,{children:"\u901a\u5e38\uff0cStarRocks \u4f1a\u9009\u62e9\u8f83\u5c0f\u7684\u8868\u4f5c\u4e3a Join \u7684\u53f3\u8868\u3002\u5982\u679c Query Profile \u663e\u793a\u53f3\u8868\u7684\u6570\u636e\u91cf\u660e\u663e\u5927\u4e8e\u5de6\u8868\uff0c\u5219\u8be5 Join Plan \u5f02\u5e38\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(85023).Z+"",width:"1280",height:"566"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4-join-\u5206\u5e03\u65b9\u5f0f\u662f\u5426\u6b63\u786e",children:"\u786e\u8ba4 Join \u5206\u5e03\u65b9\u5f0f\u662f\u5426\u6b63\u786e"}),"\n",(0,i.jsx)(r.p,{children:"\u6309\u7167\u6570\u636e\u5206\u5e03\u7c7b\u578b\uff0cExchange Operator \u53ef\u5206\u4e3a\u4e09\u7c7b\uff1a"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"UNPARTITIONED"}),"\uff1aBroadcast\u3002\u6570\u636e\u88ab\u62f7\u8d1d\u591a\u4efd\uff0c\u7136\u540e\u53d1\u9001\u81f3\u591a\u53f0 BE\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"RANDOM"}),"\uff1aRound robin\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"HASH_PARTITIONED"})," \u548c ",(0,i.jsx)(r.code,{children:"BUCKET_SHUFFLE_HASH_PARTITIONED"}),"\uff1aShuffle\u3002",(0,i.jsx)(r.code,{children:"HASH_PARTITIONED"})," \u548c ",(0,i.jsx)(r.code,{children:"BUCKET_SHUFFLE_HASH_PARTITIONED"})," \u533a\u522b\u5728\u4e8e\u8ba1\u7b97 Hash Code \u6240\u4f7f\u7528\u7684 Hash \u51fd\u6570\u4e0d\u540c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5bf9\u4e8e Inner Join\uff0c\u53f3\u8868\u53ef\u4ee5\u662f ",(0,i.jsx)(r.code,{children:"HASH_PARTITIONED"})," \u548c",(0,i.jsx)(r.code,{children:"BUCKET_SHUFFLE_HASH_PARTITIONED"})," \u7c7b\u578b\u6216\u8005 ",(0,i.jsx)(r.code,{children:"UNPARTITIONED"})," \u7c7b\u578b\u3002\u901a\u5e38\u53ea\u6709\u5728\u53f3\u8868\u884c\u6570\u5c0f\u4e8e 100K \u65f6\u624d\u91c7\u7528 ",(0,i.jsx)(r.code,{children:"UNPARTITIONED"})," \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0cExchange Operator \u7684\u7c7b\u578b\u662f Broadcast\uff0c\u4f46\u662f\u8be5 Operator \u4f20\u8f93\u7684\u6570\u636e\u91cf\u8fdc\u8fdc\u8d85\u8fc7\u4e86\u9608\u503c\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(3236).Z+"",width:"1280",height:"444"})}),"\n",(0,i.jsx)(r.h3,{id:"\u786e\u8ba4-joinruntimefilter-\u662f\u5426\u751f\u6548",children:"\u786e\u8ba4 JoinRuntimeFilter \u662f\u5426\u751f\u6548"}),"\n",(0,i.jsxs)(r.p,{children:["\u5f53 Join \u7684\u53f3\u5b69\u5b50\u6784\u5efa Hash Table \u65f6\uff0c\u4f1a\u6784\u5efa Runtime Filter\uff0c\u8be5 Runtime Filter \u4f1a\u88ab\u6295\u9012\u5230\u5de6\u5b50\u6811\uff0c\u5e76\u5c3d\u53ef\u80fd\u5730\u4e0b\u63a8\u5230 Scan Operator\u3002\u60a8\u53ef\u4ee5\u5728 Scan Operator \u7684",(0,i.jsx)(r.strong,{children:"\u8282\u70b9\u8be6\u60c5"}),"\u9009\u9879\u5361\u4e0a\u67e5\u770b\u4e0e JoinRuntimeFilter \u76f8\u5173\u7684\u6307\u6807\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(74572).Z+"",width:"1280",height:"694"})}),"\n",(0,i.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(r.h3,{id:"\u4e3a\u4ec0\u4e48-exchange-operator-\u65f6\u95f4\u5f02\u5e38",children:"\u4e3a\u4ec0\u4e48 Exchange Operator \u65f6\u95f4\u5f02\u5e38\uff1f"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(88140).Z+"",width:"996",height:"681"})}),"\n",(0,i.jsx)(r.p,{children:"Exchange Operator \u7684\u8017\u65f6\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1aCPU \u65f6\u95f4\u548c\u7f51\u7edc\u65f6\u95f4\u3002\u7f51\u7edc\u65f6\u95f4\u4f9d\u8d56\u4e8e\u7cfb\u7edf\u65f6\u949f\u3002\u7f51\u7edc\u65f6\u95f4\u8ba1\u7b97\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\u53d1\u9001\u7aef\u5728\u8c03\u7528BRPC\u63a5\u53e3\u53d1\u9001\u5305\u4e4b\u524d\u8bb0\u5f55 ",(0,i.jsx)(r.code,{children:"send_timestamp"}),"\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["\u63a5\u6536\u7aef\u4ece BRPC \u63a5\u53e3\u6536\u5230\u5305\u540e\u8bb0\u5f55 ",(0,i.jsx)(r.code,{children:"receive_timestamp"}),"\uff08\u4e0d\u5305\u62ec\u63a5\u6536\u540e\u5904\u7406\u65f6\u95f4\uff09\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:["\u5904\u7406\u5b8c\u6210\u540e\uff0c\u63a5\u6536\u7aef\u53d1\u9001 Response \u5e76\u8ba1\u7b97\u7f51\u7edc\u5ef6\u8fdf\u3002\u6570\u636e\u5305\u4f20\u8f93\u65f6\u5ef6\u7b49\u4e8e ",(0,i.jsx)(r.code,{children:"receive_timestamp"})," - ",(0,i.jsx)(r.code,{children:"send_timestamp"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u4e0d\u540c\u673a\u5668\u7684\u7cfb\u7edf\u65f6\u949f\u4e0d\u4e00\u81f4\uff0cExchange Operator \u7684\u8017\u65f6\u5c31\u4f1a\u51fa\u73b0\u5f02\u5e38\u3002"}),"\n",(0,i.jsx)(r.h3,{id:"\u4e3a\u4ec0\u4e48\u5404-operator-\u65f6\u95f4\u4e4b\u548c\u8fdc\u5c0f\u4e8e\u67e5\u8be2\u5b9e\u9645\u7684\u6267\u884c\u65f6\u95f4",children:"\u4e3a\u4ec0\u4e48\u5404 Operator \u65f6\u95f4\u4e4b\u548c\u8fdc\u5c0f\u4e8e\u67e5\u8be2\u5b9e\u9645\u7684\u6267\u884c\u65f6\u95f4\uff1f"}),"\n",(0,i.jsxs)(r.p,{children:["\u53ef\u80fd\u539f\u56e0\uff1a\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u6709\u4e9b Pipeline Driver \u867d\u7136\u53ef\u4ee5\u8c03\u5ea6\uff0c\u4f46\u53ef\u80fd\u4f1a\u56e0\u4e3a\u6392\u961f\u800c\u65e0\u6cd5\u53ca\u65f6\u6267\u884c\u3002\u7b49\u5f85\u65f6\u95f4\u4e0d\u4f1a\u8bb0\u5f55\u5728 Operator \u7684\u6307\u6807\u4e2d\uff0c\u800c\u662f\u8bb0\u5f55\u5728 ",(0,i.jsx)(r.code,{children:"PendingTime"}),"\u3001",(0,i.jsx)(r.code,{children:"ScheduleTime"})," \u548c ",(0,i.jsx)(r.code,{children:"IOTaskWaitTime"})," \u4e2d\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsxs)(r.p,{children:["\u4ece Pipeline Profile \u4e2d\u53ef\u4ee5\u770b\u5230 ",(0,i.jsx)(r.code,{children:"ExecutionWallTime"})," \u5927\u7ea6\u4e3a 463 \u6beb\u79d2\u3002\u4f46\u662f\uff0c\u6240\u6709 Operator \u7684\u603b\u8017\u65f6\u5374\u4e0d\u8db3 20 \u6beb\u79d2\uff0c\u660e\u663e\u5c0f\u4e8e ",(0,i.jsx)(r.code,{children:"ExecutionWallTime"}),"\u3002"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(65837).Z+"",width:"600",height:"814"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"img",src:n(14001).Z+"",width:"1472",height:"2836"})})]})}const a=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},1557:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-1-e14d11ad744041b7af92ed2ee2b98758.png"},20729:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-10-6827eee4e3bf80e72df8db93d67190af.png"},85023:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-11-cdcaaa6efd8f2836b6c842256edc0f75.png"},3236:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-12-7edaf71e48831f0884cd9c7ac19811a7.png"},74572:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-13-c4f8d3e037eee78a3c8f3f1366dbb58c.png"},88140:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-14-b0b09c4d85d8e79f04353f5e9dcc2910.png"},14001:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-15-29266555ae8353e087936d416380af51.png"},65837:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-16-f8f2f4afbd6ef7270cb22b2d4a5303ea.png"},21346:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-2-2801dbb3484feef652b8a1287838b0e0.png"},39925:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-3-cdd21397147bec3db5a785705a235493.png"},14842:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-4-d5a54980b29524277c4c7e60b9d134f7.png"},46121:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-5-3f98c4900b7e51396d90af6aef974432.png"},17001:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-6-1cd933a5ba490b335a3b0283cc185ab9.png"},63501:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-7-620c7fe97a29162a1be9087642104dee.png"},1082:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-8-c19a4c8f5a3c60ada5b4a43d4a689f6d.png"},34412:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/profile-9-ae47456988da592eb07e35c41a3a9e0b.png"},11151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>l});var i=n(67294);const s=i.createContext({});function l(e){const r=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const d={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:l(e),i.createElement(s.Provider,{value:c},r)}}}]);