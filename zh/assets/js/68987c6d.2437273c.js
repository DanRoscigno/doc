"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[44864],{75722:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(85893),i=r(11151);const a={displayed_sidebar:"Chinese"},t="Routine Load",o={id:"loading/RoutineLoad",title:"Routine Load",description:"Routine Load \u662f\u4e00\u79cd\u4f8b\u884c\u5bfc\u5165\u65b9\u5f0f\uff0cStarRocks\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u652f\u6301\u4eceKafka\u6301\u7eed\u4e0d\u65ad\u7684\u5bfc\u5165\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u901a\u8fc7SQL\u63a7\u5236\u5bfc\u5165\u4efb\u52a1\u7684\u6682\u505c\u3001\u91cd\u542f\u3001\u505c\u6b62\u3002\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u57fa\u672c\u539f\u7406\u548c\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/loading/RoutineLoad.md",sourceDirName:"loading",slug:"/loading/RoutineLoad",permalink:"/zh/docs/2.2/loading/RoutineLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/loading/RoutineLoad.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u5bfc\u5165\u603b\u89c8",permalink:"/zh/docs/2.2/loading/Loading_intro"},next:{title:"Spark Load",permalink:"/zh/docs/2.2/loading/SparkLoad"}},l={},d=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:2},{value:"\u5bfc\u5165\u793a\u4f8b",id:"\u5bfc\u5165\u793a\u4f8b",level:2},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:3},{value:"\u521b\u5efa\u5bfc\u5165\u4efb\u52a1",id:"\u521b\u5efa\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u67e5\u770b\u4efb\u52a1\u72b6\u6001",id:"\u67e5\u770b\u4efb\u52a1\u72b6\u6001",level:3},{value:"\u6682\u505c\u5bfc\u5165\u4efb\u52a1",id:"\u6682\u505c\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u6062\u590d\u5bfc\u5165\u4efb\u52a1",id:"\u6062\u590d\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",id:"\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function c(e){const n=Object.assign({h1:"h1",p:"p",hr:"hr",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",ol:"ol",h3:"h3",pre:"pre",code:"code",div:"div",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"routine-load",children:"Routine Load"}),"\n",(0,s.jsx)(n.p,{children:"Routine Load \u662f\u4e00\u79cd\u4f8b\u884c\u5bfc\u5165\u65b9\u5f0f\uff0cStarRocks\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u652f\u6301\u4eceKafka\u6301\u7eed\u4e0d\u65ad\u7684\u5bfc\u5165\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u901a\u8fc7SQL\u63a7\u5236\u5bfc\u5165\u4efb\u52a1\u7684\u6682\u505c\u3001\u91cd\u542f\u3001\u505c\u6b62\u3002\u672c\u8282\u4e3b\u8981\u4ecb\u7ecd\u8be5\u529f\u80fd\u7684\u57fa\u672c\u539f\u7406\u548c\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u540d\u8bcd\u89e3\u91ca",children:"\u540d\u8bcd\u89e3\u91ca"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RoutineLoadJob"}),"\uff1a\u7528\u6237\u63d0\u4ea4\u7684\u4e00\u4e2a\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JobScheduler"}),"\uff1a\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u8c03\u5ea6\u5668\uff0c\u7528\u4e8e\u8c03\u5ea6\u548c\u62c6\u5206\u4e00\u4e2a RoutineLoadJob \u4e3a\u591a\u4e2a Task\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Task"}),"\uff1aRoutineLoadJob \u88ab JobScheduler \u6839\u636e\u89c4\u5219\u62c6\u5206\u7684\u5b50\u4efb\u52a1\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TaskScheduler"}),"\uff1a\u4efb\u52a1\u8c03\u5ea6\u5668\uff0c\u7528\u4e8e\u8c03\u5ea6 Task \u7684\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u539f\u7406",children:"\u57fa\u672c\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"routine load",src:r(18650).Z+"",width:"1319",height:"1286"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u5165\u6d41\u7a0b\u5982\u4e0a\u56fe\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7528\u6237\u901a\u8fc7\u652f\u6301MySQL\u534f\u8bae\u7684\u5ba2\u6237\u7aef\u5411 FE \u63d0\u4ea4\u4e00\u4e2aKafka\u5bfc\u5165\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.li,{children:"FE\u5c06\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u62c6\u5206\u6210\u82e5\u5e72\u4e2aTask\uff0c\u6bcf\u4e2aTask\u8d1f\u8d23\u5bfc\u5165\u6307\u5b9a\u7684\u4e00\u90e8\u5206\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6bcf\u4e2aTask\u88ab\u5206\u914d\u5230\u6307\u5b9a\u7684 BE \u4e0a\u6267\u884c\u3002\u5728 BE \u4e0a\uff0c\u4e00\u4e2a Task \u88ab\u89c6\u4e3a\u4e00\u4e2a\u666e\u901a\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\n\u901a\u8fc7 Stream Load \u7684\u5bfc\u5165\u673a\u5236\u8fdb\u884c\u5bfc\u5165\u3002"}),"\n",(0,s.jsx)(n.li,{children:"BE\u5bfc\u5165\u5b8c\u6210\u540e\uff0c\u5411 FE \u6c47\u62a5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"FE \u6839\u636e\u6c47\u62a5\u7ed3\u679c\uff0c\u7ee7\u7eed\u751f\u6210\u540e\u7eed\u65b0\u7684 Task\uff0c\u6216\u8005\u5bf9\u5931\u8d25\u7684 Task \u8fdb\u884c\u91cd\u8bd5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"FE \u4f1a\u4e0d\u65ad\u7684\u4ea7\u751f\u65b0\u7684 Task\uff0c\u6765\u5b8c\u6210\u6570\u636e\u4e0d\u95f4\u65ad\u7684\u5bfc\u5165\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5bfc\u5165\u793a\u4f8b",children:"\u5bfc\u5165\u793a\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u73af\u5883\u8981\u6c42",children:"\u73af\u5883\u8981\u6c42"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u8bbf\u95ee\u65e0\u8ba4\u8bc1\u6216\u4f7f\u7528 SSL \u65b9\u5f0f\u8ba4\u8bc1\u7684 Kafka \u96c6\u7fa4\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u652f\u6301\u7684\u6d88\u606f\u683c\u5f0f\u6709","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CSV\u6587\u672c\u683c\u5f0f\uff0c\u6bcf\u4e00\u4e2a message \u4e3a\u4e00\u884c\uff0c\u4e14\u884c\u5c3e",(0,s.jsx)(n.strong,{children:"\u4e0d\u5305\u542b"}),"\u6362\u884c\u7b26\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"JSON\u6587\u672c\u683c\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u652f\u6301Array\u7c7b\u578b"}),"\n",(0,s.jsx)(n.li,{children:"\u4ec5\u652f\u6301 Kafka 0.10.0.0(\u542b) \u4ee5\u4e0a\u7248\u672c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa\u5bfc\u5165\u4efb\u52a1",children:"\u521b\u5efa\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bed\u6cd5\uff1a"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD [database.][job_name] ON [table_name]\n    [COLUMNS TERMINATED BY "column_separator" ,]\n    [COLUMNS (col1, col2, ...) ,]\n    [WHERE where_condition ,]\n    [PARTITION (part1, part2, ...)]\n    [PROPERTIES ("key" = "value", ...)]\n    FROM [DATA_SOURCE]\n    [(data_source_properties1 = \'value1\', \n    data_source_properties2 = \'value2\', \n    ...)]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4ece\u4e00\u4e2a\u672c\u5730Kafka\u96c6\u7fa4\u5bfc\u5165\u6570\u636e\u4e3a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD routine_load_wikipedia ON routine_wiki_edit\nCOLUMNS TERMINATED BY ",",\nCOLUMNS (event_time, channel, user, is_anonymous, is_minor, is_new, is_robot, is_unpatrolled, delta, added, deleted)\nPROPERTIES\n(\n    "desired_concurrent_number"="1",\n    "max_error_number"="1000"\n)\nFROM KAFKA\n(\n    "kafka_broker_list"= "localhost:9092",\n    "kafka_topic" = "starrocks-load"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e\uff1a"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"job_name"}),"\uff1a\u5fc5\u586b\u3002\u5bfc\u5165\u4f5c\u4e1a\u7684\u540d\u79f0\uff0c\u524d\u7f00\u53ef\u4ee5\u643a\u5e26\u5bfc\u5165\u6570\u636e\u5e93\u540d\u79f0\uff0c\u5e38\u89c1\u547d\u540d\u65b9\u5f0f\u4e3a\u65f6\u95f4\u6233+\u8868\u540d\u3002\n\u5355\u4e2a database \u5185\uff0c\u4efb\u52a1\u540d\u79f0\u4e0d\u53ef\u91cd\u590d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"table_name"}),"\uff1a\u5fc5\u586b\u3002\u5bfc\u5165\u7684\u76ee\u6807\u8868\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"COLUMN TERMINATED\u5b50\u53e5"}),"\uff1a\u9009\u586b\u3002\u6307\u5b9a\u6e90\u6570\u636e\u6587\u4ef6\u4e2d\u7684\u5217\u5206\u9694\u7b26\uff0c\u5206\u9694\u7b26\u9ed8\u8ba4\u4e3a\uff1a\\t\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"COLUMN\u5b50\u53e5"})," \uff1a\u9009\u586b\u3002\u7528\u4e8e\u6307\u5b9a\u6e90\u6570\u636e\u4e2d\u5217\u548c\u8868\u4e2d\u5217\u7684\u6620\u5c04\u5173\u7cfb\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6620\u5c04\u5217\uff1a\u5982\u76ee\u6807\u8868\u6709\u4e09\u5217 col1, col2, col3 \uff0c\u6e90\u6570\u636e\u67094\u5217\uff0c\u5176\u4e2d\u7b2c1\u30012\u30014\u5217\u5206\u522b\u5bf9\u5e94col2, col1, col3\uff0c\u5219\u4e66\u5199\u5982\u4e0b\uff1aCOLUMNS (col2, col1, temp, col3), \uff0c\u5176\u4e2d temp \u5217\u4e3a\u4e0d\u5b58\u5728\u7684\u4e00\u5217\uff0c\u7528\u4e8e\u8df3\u8fc7\u6e90\u6570\u636e\u4e2d\u7684\u7b2c\u4e09\u5217\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u884d\u751f\u5217\uff1a\u9664\u4e86\u76f4\u63a5\u8bfb\u53d6\u6e90\u6570\u636e\u7684\u5217\u5185\u5bb9\u4e4b\u5916\uff0cStarRocks\u8fd8\u63d0\u4f9b\u5bf9\u6570\u636e\u5217\u7684\u52a0\u5de5\u64cd\u4f5c\u3002\u5047\u8bbe\u76ee\u6807\u8868\u540e\u52a0\u5165\u4e86\u7b2c\u56db\u5217 col4 \uff0c\u5176\u7ed3\u679c\u7531 col1 + col2 \u4ea7\u751f\uff0c\u5219\u53ef\u4ee5\u4e66\u5199\u5982\u4e0b\uff1aCOLUMNS (col2, col1, temp, col3, col4 = col1 + col2),\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WHERE\u5b50\u53e5"}),"\uff1a\u9009\u586b\u3002\u7528\u4e8e\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e0d\u9700\u8981\u7684\u884c\u3002\u8fc7\u6ee4\u6761\u4ef6\u53ef\u4ee5\u6307\u5b9a\u6620\u5c04\u5217\u6216\u884d\u751f\u5217\u3002\u4f8b\u5982\u53ea\u5bfc\u5165 k1 \u5927\u4e8e 100 \u5e76\u4e14 k2 \u7b49\u4e8e 1000 \u7684\u884c\uff0c\u5219\u4e66\u5199\u5982\u4e0b\uff1aWHERE k1 > 100 and k2 = 1000"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PARTITION\u5b50\u53e5"}),"\uff1a\u9009\u586b\u3002\u6307\u5b9a\u5bfc\u5165\u76ee\u6807\u8868\u7684\u54ea\u4e9b partition \u4e2d\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u5bfc\u5165\u5230\u5bf9\u5e94\u7684 partition \u4e2d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PROPERTIES\u5b50\u53e5"}),"\uff1a\u9009\u586b\u3002\u7528\u4e8e\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u7684\u901a\u7528\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"desired_concurrent_number"}),"\uff1a\u5bfc\u5165\u5e76\u53d1\u5ea6\uff0c\u6307\u5b9a\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u6700\u591a\u4f1a\u88ab\u5206\u6210\u591a\u5c11\u4e2a\u5b50\u4efb\u52a1\u6267\u884c\u3002\u5fc5\u987b\u5927\u4e8e0\uff0c\u9ed8\u8ba4\u4e3a3\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"max_batch_interval"}),"\uff1a\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u5927\u6267\u884c\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002\u8303\u56f4\u4e3a 5 \u5230 60\u3002\u9ed8\u8ba4\u4e3a10\u3002",(0,s.jsx)(n.strong,{children:"1.15\u7248\u672c\u540e"}),": \u8be5\u53c2\u6570\u662f\u5b50\u4efb\u52a1\u7684\u8c03\u5ea6\u65f6\u95f4\uff0c\u5373\u4efb\u52a1\u591a\u4e45\u6267\u884c\u4e00\u6b21\uff0c\u4efb\u52a1\u7684\u6d88\u8d39\u6570\u636e\u65f6\u95f4\u4e3afe.conf\u4e2d\u7684routine_load_task_consume_second\uff0c\u9ed8\u8ba4\u4e3a3s\uff0c\n\u4efb\u52a1\u7684\u6267\u884c\u8d85\u65f6\u65f6\u95f4\u4e3afe.conf\u4e2d\u7684routine_load_task_timeout_second\uff0c\u9ed8\u8ba4\u4e3a15s\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"max_batch_rows"}),"\uff1a\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u591a\u8bfb\u53d6\u7684\u884c\u6570\u3002\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e200000\u3002\u9ed8\u8ba4\u662f200000\u3002",(0,s.jsx)(n.strong,{children:"1.15\u7248\u672c\u540e"}),": \u8be5\u53c2\u6570\u53ea\u7528\u4e8e\u5b9a\u4e49\u9519\u8bef\u68c0\u6d4b\u7a97\u53e3\u8303\u56f4\uff0c\u7a97\u53e3\u7684\u8303\u56f4\u662f10 * ",(0,s.jsx)(n.strong,{children:"max-batch-rows"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"max_batch_size"}),"\uff1a\u6bcf\u4e2a\u5b50\u4efb\u52a1\u6700\u591a\u8bfb\u53d6\u7684\u5b57\u8282\u6570\u3002\u5355\u4f4d\u662f\u300c\u5b57\u8282\u300d\uff0c\u8303\u56f4\u662f 100MB \u5230 1GB\u3002\u9ed8\u8ba4\u662f 100MB\u3002",(0,s.jsx)(n.strong,{children:"1.15\u7248\u672c\u540e"}),": \u5e9f\u5f03\u8be5\u53c2\u6570\uff0c\u4efb\u52a1\u6d88\u8d39\u6570\u636e\u7684\u65f6\u95f4\u4e3afe.conf\u4e2d\u7684routine_load_task_consume_second\uff0c\u9ed8\u8ba4\u4e3a3s\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"max_error_number"}),"\uff1a\u91c7\u6837\u7a97\u53e3\u5185\uff0c\u5141\u8bb8\u7684\u6700\u5927\u9519\u8bef\u884c\u6570\u3002\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u9ed8\u8ba4\u662f 0\uff0c\u5373\u4e0d\u5141\u8bb8\u6709\u9519\u8bef\u884c\u3002\u6ce8\u610f\uff1a\u88ab where \u6761\u4ef6\u8fc7\u6ee4\u6389\u7684\u884c\u4e0d\u7b97\u9519\u8bef\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"strict_mode"}),'\uff1a\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u3002\u5982\u679c\u5f00\u542f\u540e\uff0c\u975e\u7a7a\u539f\u59cb\u6570\u636e\u7684\u5217\u7c7b\u578b\u53d8\u6362\u5982\u679c\u7ed3\u679c\u4e3a NULL\uff0c\u5219\u4f1a\u88ab\u8fc7\u6ee4\uff0c\u5173\u95ed\u65b9\u5f0f\u4e3a "strict_mode" = "false"\u3002']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"timezone"}),"\uff1a\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4f7f\u7528 Session \u7684 timezone \u53c2\u6570\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DATA_SOURCE"}),"\uff1a\u6307\u5b9a\u6570\u636e\u6e90\uff0c\u8bf7\u4f7f\u7528KAFKA\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"data_source_properties"}),": \u6307\u5b9a\u6570\u636e\u6e90\u76f8\u5173\u7684\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kafka_broker_list"}),"\uff1aKafka \u7684 broker \u8fde\u63a5\u4fe1\u606f\uff0c\u683c\u5f0f\u4e3a ip",(0,s.jsx)(n.div,{}),"\u3002\u591a\u4e2abroker\u4e4b\u95f4\u4ee5\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kafka_topic"}),"\uff1a\u6307\u5b9a\u8981\u8ba2\u9605\u7684 Kafka \u7684 topic\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"kafka_partitions/kafka_offsets"}),"\uff1a\u6307\u5b9a\u9700\u8981\u8ba2\u9605\u7684 kafka partition\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u6bcf\u4e2a partition \u7684\u8d77\u59cb offset\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"property"}),'\uff1a\u6b64\u5904\u7684\u5c5e\u6027\uff0c\u4e3b\u8981\u662fkafka\u76f8\u5173\u7684\u5c5e\u6027\uff0c\u529f\u80fd\u7b49\u540c\u4e8ekafka shell\u4e2d "--property" \u53c2\u6570\u3002']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u5bfc\u5165\u4efb\u52a1\u66f4\u8be6\u7ec6\u7684\u8bed\u6cd5\u53ef\u4ee5\u901a\u8fc7\u6267\u884c HELP ROUTINE LOAD; \u67e5\u770b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u4efb\u52a1\u72b6\u6001",children:"\u67e5\u770b\u4efb\u52a1\u72b6\u6001"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u663e\u793a [database] \u4e0b\uff0c\u6240\u6709\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff08\u5305\u62ec\u5df2\u505c\u6b62\u6216\u53d6\u6d88\u7684\u4f5c\u4e1a\uff09\u3002\u7ed3\u679c\u4e3a\u4e00\u884c\u6216\u591a\u884c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"USE [database];\nSHOW ALL ROUTINE LOAD;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u663e\u793a [database] \u4e0b\uff0c\u540d\u79f0\u4e3a job_name \u7684\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SHOW ROUTINE LOAD FOR [database.][job_name];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a StarRocks \u53ea\u80fd\u67e5\u770b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\uff0c\u5df2\u7ed3\u675f\u548c\u672a\u5f00\u59cb\u7684\u4efb\u52a1\u65e0\u6cd5\u67e5\u770b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u4efb\u52a1\u72b6\u6001\u7684\u5177\u4f53\u547d\u4ee4\u548c\u793a\u4f8b\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP SHOW ROUTINE LOAD;"})," \u547d\u4ee4\u67e5\u770b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u4efb\u52a1\u8fd0\u884c\u72b6\u6001\uff08\u5305\u62ec\u5b50\u4efb\u52a1\uff09\u7684\u5177\u4f53\u547d\u4ee4\u548c\u793a\u4f8b\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP SHOW ROUTINE LOAD TASK;"})," \u547d\u4ee4\u67e5\u770b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u8ff0\u521b\u5efa\u7684\u5bfc\u5165\u4efb\u52a1\u4e3a\u793a\u4f8b\uff0c\u4ee5\u4e0b\u547d\u4ee4\u80fd\u67e5\u770b\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u6240\u6709Routine Load\u4efb\u52a1\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL [load_test]> SHOW ROUTINE LOAD\\G;\n\n*************************** 1. row ***************************\n\n                  Id: 14093\n                Name: routine_load_wikipedia\n          CreateTime: 2020-05-16 16:00:48\n           PauseTime: N/A\n             EndTime: N/A\n              DbName: default_cluster:load_test\n           TableName: routine_wiki_edit\n               State: RUNNING\n      DataSourceType: KAFKA\n      CurrentTaskNum: 1\n       JobProperties: {"partitions":"*","columnToColumnExpr":"event_time,channel,user,is_anonymous,is_minor,is_new,is_robot,is_unpatrolled,delta,added,deleted","maxBatchIntervalS":"10","whereExpr":"*","maxBatchSizeBytes":"104857600","columnSeparator":"\',\'","maxErrorNum":"1000","currentTaskConcurrentNum":"1","maxBatchRows":"200000"}\nDataSourceProperties: {"topic":"starrocks-load","currentKafkaPartitions":"0","brokerList":"localhost:9092"}\n    CustomProperties: {}\n           Statistic: {"receivedBytes":150821770,"errorRows":122,"committedTaskNum":12,"loadedRows":2399878,"loadRowsRate":199000,"abortedTaskNum":1,"totalRows":2400000,"unselectedRows":0,"receivedBytesRate":12523000,"taskExecuteTimeMs":12043}\n            Progress: {"0":"13634667"}\nReasonOfStateChanged:\n        ErrorLogUrls: http://172.26.108.172:9122/api/_load_error_log?file=__shard_53/error_log_insert_stmt_47e8a1d107ed4932-8f1ddf7b01ad2fee_47e8a1d107ed4932_8f1ddf7b01ad2fee, http://172.26.108.172:9122/api/_load_error_log?file=__shard_54/error_log_insert_stmt_e0c0c6b040c044fd-a162b16f6bad53e6_e0c0c6b040c044fd_a162b16f6bad53e6, http://172.26.108.172:9122/api/_load_error_log?file=__shard_55/error_log_insert_stmt_ce4c95f0c72440ef-a442bb300bd743c8_ce4c95f0c72440ef_a442bb300bd743c8\n            OtherMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\u793a\u4f8b\u4e2d\u521b\u5efa\u7684\u540d\u4e3aroutine_load_wikipedia\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u5176\u4e2d\u91cd\u8981\u7684\u5b57\u6bb5\u91ca\u4e49\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"State\uff1a\u5bfc\u5165\u4efb\u52a1\u72b6\u6001\u3002RUNNING\uff0c\u8868\u793a\u8be5\u5bfc\u5165\u4efb\u52a1\u5904\u4e8e\u6301\u7eed\u8fd0\u884c\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Statistic\u4e3a\u8fdb\u5ea6\u4fe1\u606f\uff0c\u8bb0\u5f55\u4e86\u4ece\u521b\u5efa\u4efb\u52a1\u5f00\u59cb\u540e\u7684\u5bfc\u5165\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"receivedBytes\uff1a\u63a5\u6536\u5230\u7684\u6570\u636e\u5927\u5c0f\uff0c\u5355\u4f4d\u662f\u300cByte\u300d"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"errorRows\uff1a\u5bfc\u5165\u9519\u8bef\u884c\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"committedTaskNum\uff1aFE\u63d0\u4ea4\u7684Task\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"loadedRows\uff1a\u5df2\u5bfc\u5165\u7684\u884c\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"loadRowsRate\uff1a\u5bfc\u5165\u6570\u636e\u901f\u7387\uff0c\u5355\u4f4d\u662f\u300c\u884c\u6bcf\u79d2(row/s)\u300d"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"abortedTaskNum\uff1aBE\u5931\u8d25\u7684Task\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"totalRows\uff1a\u63a5\u6536\u7684\u603b\u884c\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"unselectedRows\uff1a\u88abwhere\u6761\u4ef6\u8fc7\u6ee4\u7684\u884c\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"receivedBytesRate\uff1a\u63a5\u6536\u6570\u636e\u901f\u7387\uff0c\u5355\u4f4d\u662f\u300cBytes/s\u300d"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"taskExecuteTimeMs\uff1a\u5bfc\u5165\u8017\u65f6\uff0c\u5355\u4f4d\u662f\u300cms\u300d"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ErrorLogUrls\uff1a\u9519\u8bef\u4fe1\u606f\u65e5\u5fd7\uff0c\u53ef\u4ee5\u901a\u8fc7URL\u770b\u5230\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6682\u505c\u5bfc\u5165\u4efb\u52a1",children:"\u6682\u505c\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528PAUSE\u8bed\u53e5\u540e\uff0c\u6b64\u65f6\u5bfc\u5165\u4efb\u52a1\u8fdb\u5165PAUSED\u72b6\u6001\uff0c\u6570\u636e\u6682\u505c\u5bfc\u5165\uff0c\u4f46\u4efb\u52a1\u672a\u6d88\u4ea1\uff0c\u53ef\u4ee5\u901a\u8fc7RESUME\u8bed\u53e5\u53ef\u4ee5\u91cd\u542f\u4efb\u52a1\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6682\u505c\u540d\u79f0\u4e3a job_name \u7684\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"PAUSE ROUTINE LOAD FOR [job_name];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP PAUSE ROUTINE LOAD;"}),"\u547d\u4ee4\u67e5\u770b\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL [load_test]> SHOW ROUTINE LOAD\\G;\n*************************** 1. row ***************************\n                  Id: 14093\n                Name: routine_load_wikipedia\n          CreateTime: 2020-05-16 16:00:48\n           PauseTime: 2020-05-16 16:03:39\n             EndTime: N/A\n              DbName: default_cluster:load_test\n           TableName: routine_wiki_edit\n               State: PAUSED\n      DataSourceType: KAFKA\n      CurrentTaskNum: 0\n       JobProperties: {"partitions":"*","columnToColumnExpr":"event_time,channel,user,is_anonymous,is_minor,is_new,is_robot,is_unpatrolled,delta,added,deleted","maxBatchIntervalS":"10","whereExpr":"*","maxBatchSizeBytes":"104857600","columnSeparator":"\',\'","maxErrorNum":"1000","currentTaskConcurrentNum":"1","maxBatchRows":"200000"}\nDataSourceProperties: {"topic":"starrocks-load","currentKafkaPartitions":"0","brokerList":"localhost:9092"}\n    CustomProperties: {}\n           Statistic: {"receivedBytes":162767220,"errorRows":132,"committedTaskNum":13,"loadedRows":2589972,"loadRowsRate":115000,"abortedTaskNum":7,"totalRows":2590104,"unselectedRows":0,"receivedBytesRate":7279000,"taskExecuteTimeMs":22359}\n            Progress: {"0":"13824771"}\nReasonOfStateChanged: ErrorReason{code=errCode = 100, msg=\'User root pauses routine load job\'}\n        ErrorLogUrls: http://172.26.108.172:9122/api/_load_error_log?file=__shard_54/error_log_insert_stmt_e0c0c6b040c044fd-a162b16f6bad53e6_e0c0c6b040c044fd_a162b16f6bad53e6, http://172.26.108.172:9122/api/_load_error_log?file=__shard_55/error_log_insert_stmt_ce4c95f0c72440ef-a442bb300bd743c8_ce4c95f0c72440ef_a442bb300bd743c8, http://172.26.108.172:9122/api/_load_error_log?file=__shard_56/error_log_insert_stmt_8753041cd5fb42d0-b5150367a5175391_8753041cd5fb42d0_b5150367a5175391\n            OtherMsg:\n1 row in set (0.01 sec)\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6682\u505c\u5bfc\u5165\u4efb\u52a1\u540e\uff0c\u4efb\u52a1\u7684State\u53d8\u66f4\u4e3aPAUSED\uff0cStatistic\u548cProgress\u4e2d\u7684\u5bfc\u5165\u4fe1\u606f\u505c\u6b62\u66f4\u65b0\u3002\u6b64\u65f6\uff0c\u4efb\u52a1\u5e76\u672a\u6d88\u4ea1\uff0c\u901a\u8fc7SHOW ROUTINE LOAD\u8bed\u53e5\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u6682\u505c\u7684\u5bfc\u5165\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6062\u590d\u5bfc\u5165\u4efb\u52a1",children:"\u6062\u590d\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528RESUME\u8bed\u53e5\u540e\uff0c\u4efb\u52a1\u4f1a\u77ed\u6682\u7684\u8fdb\u5165 ",(0,s.jsx)(n.strong,{children:"NEED_SCHEDULE"})," \u72b6\u6001\uff0c\u8868\u793a\u4efb\u52a1\u6b63\u5728\u91cd\u65b0\u8c03\u5ea6\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\u4f1a\u91cd\u65b0\u6062\u590d\u81f3RUNING\u72b6\u6001\uff0c\u7ee7\u7eed\u5bfc\u5165\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u91cd\u542f\u540d\u79f0\u4e3a job_name \u7684\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"RESUME ROUTINE LOAD FOR [job_name];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP RESUME ROUTINE LOAD;"})," \u547d\u4ee4\u67e5\u770b\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL [load_test]> RESUME ROUTINE LOAD FOR routine_load_wikipedia;\nQuery OK, 0 rows affected (0.01 sec)\nMySQL [load_test]> SHOW ROUTINE LOAD\\G;\n*************************** 1. row ***************************\n                  Id: 14093\n                Name: routine_load_wikipedia\n          CreateTime: 2020-05-16 16:00:48\n           PauseTime: N/A\n             EndTime: N/A\n              DbName: default_cluster:load_test\n           TableName: routine_wiki_edit\n               State: NEED_SCHEDULE\n      DataSourceType: KAFKA\n      CurrentTaskNum: 0\n       JobProperties: {"partitions":"*","columnToColumnExpr":"event_time,channel,user,is_anonymous,is_minor,is_new,is_robot,is_unpatrolled,delta,added,deleted","maxBatchIntervalS":"10","whereExpr":"*","maxBatchSizeBytes":"104857600","columnSeparator":"\',\'","maxErrorNum":"1000","currentTaskConcurrentNum":"1","maxBatchRows":"200000"}\nDataSourceProperties: {"topic":"starrocks-load","currentKafkaPartitions":"0","brokerList":"localhost:9092"}\n    CustomProperties: {}\n           Statistic: {"receivedBytes":162767220,"errorRows":132,"committedTaskNum":13,"loadedRows":2589972,"loadRowsRate":115000,"abortedTaskNum":7,"totalRows":2590104,"unselectedRows":0,"receivedBytesRate":7279000,"taskExecuteTimeMs":22359}\n            Progress: {"0":"13824771"}\nReasonOfStateChanged:\n        ErrorLogUrls: http://172.26.108.172:9122/api/_load_error_log?file=__shard_54/error_log_insert_stmt_e0c0c6b040c044fd-a162b16f6bad53e6_e0c0c6b040c044fd_a162b16f6bad53e6, http://172.26.108.172:9122/api/_load_error_log?file=__shard_55/error_log_insert_stmt_ce4c95f0c72440ef-a442bb300bd743c8_ce4c95f0c72440ef_a442bb300bd743c8, http://172.26.108.172:9122/api/_load_error_log?file=__shard_56/error_log_insert_stmt_8753041cd5fb42d0-b5150367a5175391_8753041cd5fb42d0_b5150367a5175391\n            OtherMsg:\n1 row in set (0.00 sec)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL [load_test]> SHOW ROUTINE LOAD\\G;\n*************************** 1. row ***************************\n                  Id: 14093\n                Name: routine_load_wikipedia\n          CreateTime: 2020-05-16 16:00:48\n           PauseTime: N/A\n             EndTime: N/A\n              DbName: default_cluster:load_test\n           TableName: routine_wiki_edit\n               State: RUNNING\n      DataSourceType: KAFKA\n      CurrentTaskNum: 1\n       JobProperties: {"partitions":"*","columnToColumnExpr":"event_time,channel,user,is_anonymous,is_minor,is_new,is_robot,is_unpatrolled,delta,added,deleted","maxBatchIntervalS":"10","whereExpr":"*","maxBatchSizeBytes":"104857600","columnSeparator":"\',\'","maxErrorNum":"1000","currentTaskConcurrentNum":"1","maxBatchRows":"200000"}\nDataSourceProperties: {"topic":"starrocks-load","currentKafkaPartitions":"0","brokerList":"localhost:9092"}\n    CustomProperties: {}\n           Statistic: {"receivedBytes":175337712,"errorRows":142,"committedTaskNum":14,"loadedRows":2789962,"loadRowsRate":118000,"abortedTaskNum":7,"totalRows":2790104,"unselectedRows":0,"receivedBytesRate":7422000,"taskExecuteTimeMs":23623}\n            Progress: {"0":"14024771"}\nReasonOfStateChanged:\n        ErrorLogUrls: http://172.26.108.172:9122/api/_load_error_log?file=__shard_55/error_log_insert_stmt_ce4c95f0c72440ef-a442bb300bd743c8_ce4c95f0c72440ef_a442bb300bd743c8, http://172.26.108.172:9122/api/_load_error_log?file=__shard_56/error_log_insert_stmt_8753041cd5fb42d0-b5150367a5175391_8753041cd5fb42d0_b5150367a5175391, http://172.26.108.172:9122/api/_load_error_log?file=__shard_57/error_log_insert_stmt_31304c87bb82431a-9f2baf7d5fd7f252_31304c87bb82431a_9f2baf7d5fd7f252\n            OtherMsg:\n1 row in set (0.00 sec)\nERROR: No query specified\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u91cd\u542f\u5bfc\u5165\u4efb\u52a1\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u6b21\u67e5\u8be2\u4efb\u52a1\u65f6\uff0cState\u53d8\u66f4\u4e3a",(0,s.jsx)(n.strong,{children:"NEED_SCHEDULE"}),"\uff0c\u8868\u793a\u4efb\u52a1\u6b63\u5728\u91cd\u65b0\u8c03\u5ea6\uff1b\u7b2c\u4e8c\u6b21\u67e5\u8be2\u4efb\u52a1\u65f6\uff0cState\u53d8\u66f4\u4e3a",(0,s.jsx)(n.strong,{children:"RUNING"}),"\uff0c\u540c\u65f6Statistic\u548cProgress\u4e2d\u7684\u5bfc\u5165\u4fe1\u606f\u5f00\u59cb\u66f4\u65b0\uff0c\u7ee7\u7eed\u5bfc\u5165\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u505c\u6b62\u5bfc\u5165\u4efb\u52a1",children:"\u505c\u6b62\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528STOP\u8bed\u53e5\u8ba9\u5bfc\u5165\u4efb\u52a1\u8fdb\u5165STOP\u72b6\u6001\uff0c\u6570\u636e\u505c\u6b62\u5bfc\u5165\uff0c\u4efb\u52a1\u6d88\u4ea1\uff0c\u65e0\u6cd5\u6062\u590d\u6570\u636e\u5bfc\u5165\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u505c\u6b62\u540d\u79f0\u4e3a job_name \u7684\u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002`"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"STOP ROUTINE LOAD FOR [job_name];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"HELP STOP ROUTINE LOAD;"})," \u547d\u4ee4\u67e5\u770b\u5e2e\u52a9\u548c\u793a\u4f8b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'MySQL [load_test]> STOP ROUTINE LOAD FOR routine_load_wikipedia;\nQuery OK, 0 rows affected (0.01 sec)\nMySQL [load_test]> SHOW ALL ROUTINE LOAD\\G;\n*************************** 1. row ***************************\n                  Id: 14093\n                Name: routine_load_wikipedia\n          CreateTime: 2020-05-16 16:00:48\n           PauseTime: N/A\n             EndTime: 2020-05-16 16:08:25\n              DbName: default_cluster:load_test\n           TableName: routine_wiki_edit\n               State: STOPPED\n      DataSourceType: KAFKA\n      CurrentTaskNum: 0\n       JobProperties: {"partitions":"*","columnToColumnExpr":"event_time,channel,user,is_anonymous,is_minor,is_new,is_robot,is_unpatrolled,delta,added,deleted","maxBatchIntervalS":"10","whereExpr":"*","maxBatchSizeBytes":"104857600","columnSeparator":"\',\'","maxErrorNum":"1000","currentTaskConcurrentNum":"1","maxBatchRows":"200000"}\nDataSourceProperties: {"topic":"starrocks-load","currentKafkaPartitions":"0","brokerList":"localhost:9092"}\n    CustomProperties: {}\n           Statistic: {"receivedBytes":325534440,"errorRows":264,"committedTaskNum":26,"loadedRows":5179944,"loadRowsRate":109000,"abortedTaskNum":18,"totalRows":5180208,"unselectedRows":0,"receivedBytesRate":6900000,"taskExecuteTimeMs":47173}\n            Progress: {"0":"16414875"}\nReasonOfStateChanged:\n        ErrorLogUrls: http://172.26.108.172:9122/api/_load_error_log?file=__shard_67/error_log_insert_stmt_79e9504cafee4fbd-b3981a65fb158cde_79e9504cafee4fbd_b3981a65fb158cde, http://172.26.108.172:9122/api/_load_error_log?file=__shard_68/error_log_insert_stmt_b6981319ce56421b-bf4486c2cd371353_b6981319ce56421b_bf4486c2cd371353, http://172.26.108.172:9122/api/_load_error_log?file=__shard_69/error_log_insert_stmt_1121400c1f6f4aed-866c381eb49c966e_1121400c1f6f4aed_866c381eb49c966e\n            OtherMsg:\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u505c\u6b62\u5bfc\u5165\u4efb\u52a1\u540e\uff0c\u4efb\u52a1\u7684State\u53d8\u66f4\u4e3aSTOP\uff0cStatistic\u548cProgress\u4e2d\u7684\u5bfc\u5165\u4fe1\u606f\u518d\u4e5f\u4e0d\u4f1a\u66f4\u65b0\u3002\u6b64\u65f6\uff0c\u901a\u8fc7SHOW ROUTINE LOAD\u8bed\u53e5\u65e0\u6cd5\u770b\u5230\u5df2\u7ecf\u505c\u6b62\u7684\u5bfc\u5165\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Q\uff1a\u5bfc\u5165\u4efb\u52a1\u88abPAUSE\uff0c\u62a5\u9519Broker: Offset out of range"}),"\n",(0,s.jsx)(n.p,{children:"A\uff1a\u901a\u8fc7SHOW ROUTINE LOAD\u67e5\u770b\u6700\u65b0\u7684offset\uff0c\u7528Kafka\u5ba2\u6237\u7aef\u67e5\u770b\u8be5offset\u6709\u6ca1\u6709\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u80fd\u539f\u56e0\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bfc\u5165\u65f6\u6307\u5b9a\u4e86\u672a\u6765\u7684offset\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8fd8\u6ca1\u6765\u5f97\u53ca\u5bfc\u5165\uff0cKafka\u5df2\u7ecf\u5c06\u8be5offset\u7684\u6570\u636e\u6e05\u7406\u3002\u9700\u8981\u6839\u636eStarRocks\u7684\u5bfc\u5165\u901f\u5ea6\u8bbe\u7f6e\u5408\u7406\u7684log\u6e05\u7406\u53c2\u6570log.retention.hours\u3001log.retention.bytes\u7b49\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},18650:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/4.5.2-1-f146fc07da59c8d82569e5f4257aa297.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>a});var s=r(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||t:a(e),s.createElement(i.Provider,{value:o},n)}}}]);