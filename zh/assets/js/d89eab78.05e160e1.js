"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51493],{18733:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const a={displayed_sidebar:"Chinese"},i="ROUTINE LOAD",l={id:"sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",title:"ROUTINE LOAD",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"RESUME ROUTINE LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD"},next:{title:"SELECT",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SELECT"}},c={},o=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",strong:"strong"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"routine-load",children:"ROUTINE LOAD"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u884c\u5bfc\u5165\uff08Routine Load\uff09\u529f\u80fd\uff0c\u652f\u6301\u7528\u6237\u63d0\u4ea4\u4e00\u4e2a\u5e38\u9a7b\u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u901a\u8fc7\u4e0d\u65ad\u7684\u4ece\u6307\u5b9a\u7684\u6570\u636e\u6e90\u8bfb\u53d6\u6570\u636e\uff0c\u5c06\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\u3002\n\u76ee\u524d\u4ec5\u652f\u6301\u901a\u8fc7\u65e0\u8ba4\u8bc1\u6216\u8005 SSL \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u4ece Kakfa \u5bfc\u5165\u6587\u672c\u683c\u5f0f\uff08CSV\uff09\u7684\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE ROUTINE LOAD [db.]job_name ON tbl_name\n[load_properties]\n[job_properties]\nFROM data_source\n[data_source_properties]\n"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"[db.]job_name"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bfc\u5165\u4f5c\u4e1a\u7684\u540d\u79f0\uff0c\u5728\u540c\u4e00\u4e2a database \u5185\uff0c\u76f8\u540c\u540d\u79f0\u53ea\u80fd\u6709\u4e00\u4e2a job \u5728\u8fd0\u884c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"tbl_name"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u8868\u7684\u540d\u79f0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"load_properties"})}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u4e8e\u63cf\u8ff0\u5bfc\u5165\u6570\u636e\u3002\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"[COLUMNS TERMINATED BY '<terminator>'],\n[COLUMNS ([<column_name> [, ...] ] [, column_assignment [, ...] ] )],\n[WHERE <expr>],\n[PARTITION ([ <partition_name> [, ...] ])]\n\ncolumn_assignment:\n<column_name> = column_expression\n"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u5217\u5206\u9694\u7b26"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8ecsv\u683c\u5f0f\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u6307\u5b9a\u5217\u5206\u9694\u7b26\uff0c\u4f8b\u5982\uff0c\u5c06\u5217\u5206\u9694\u7b26\u6307\u5b9a\u4e3a\u9017\u53f7(,)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'COLUMNS TERMINATED BY ","\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9ed8\u8ba4\u4e3a\uff1a\\t"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u5217\u6620\u5c04\u5173\u7cfb"}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u6e90\u6570\u636e\u4e2d\u5217\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u4ee5\u53ca\u5b9a\u4e49\u884d\u751f\u5217\u7684\u751f\u6210\u65b9\u5f0f\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6620\u5c04\u5217\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u6309\u987a\u5e8f\u6307\u5b9a\uff0c\u6e90\u6570\u636e\u4e2d\u5404\u4e2a\u5217\uff0c\u5bf9\u5e94\u76ee\u7684\u8868\u4e2d\u7684\u54ea\u4e9b\u5217\u3002\u5bf9\u4e8e\u5e0c\u671b\u8df3\u8fc7\u7684\u5217\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002\n\u5047\u8bbe\u76ee\u7684\u8868\u6709\u4e09\u5217 k1, k2, v1\u3002\u6e90\u6570\u636e\u67094\u5217\uff0c\u5176\u4e2d\u7b2c1\u30012\u30014\u5217\u5206\u522b\u5bf9\u5e94 k2, k1, v1\u3002\u5219\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"COLUMNS (k2, k1, xxx, v1)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4e2d xxx \u4e3a\u4e0d\u5b58\u5728\u7684\u4e00\u5217\uff0c\u7528\u4e8e\u8df3\u8fc7\u6e90\u6570\u636e\u4e2d\u7684\u7b2c\u4e09\u5217\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u884d\u751f\u5217\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5 col_name = expr \u7684\u5f62\u5f0f\u8868\u793a\u7684\u5217\uff0c\u6211\u4eec\u79f0\u4e3a\u884d\u751f\u5217\u3002\u5373\u652f\u6301\u901a\u8fc7 expr \u8ba1\u7b97\u5f97\u51fa\u76ee\u7684\u8868\u4e2d\u5bf9\u5e94\u5217\u7684\u503c\u3002\n\u884d\u751f\u5217\u901a\u5e38\u6392\u5217\u5728\u6620\u5c04\u5217\u4e4b\u540e\uff0c\u867d\u7136\u8fd9\u4e0d\u662f\u5f3a\u5236\u7684\u89c4\u5b9a\uff0c\u4f46\u662f StarRocks \u603b\u662f\u5148\u89e3\u6790\u6620\u5c04\u5217\uff0c\u518d\u89e3\u6790\u884d\u751f\u5217\u3002\n\u63a5\u4e0a\u4e00\u4e2a\u793a\u4f8b\uff0c\u5047\u8bbe\u76ee\u7684\u8868\u8fd8\u6709\u7b2c4\u5217 v2\uff0cv2 \u7531 k1 \u548c k2 \u7684\u548c\u4ea7\u751f\u3002\u5219\u53ef\u4ee5\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8ecsv\u683c\u5f0f\u7684\u6570\u636e\uff0cCOLUMNS\u4e2d\u7684\u6620\u5c04\u5217\u7684\u4e2a\u6570\u5fc5\u987b\u8981\u4e0e\u6570\u636e\u4e2d\u7684\u5217\u4e2a\u6570\u4e00\u81f4"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4ee5\u8fc7\u6ee4\u6389\u4e0d\u9700\u8981\u7684\u5217\u3002\u8fc7\u6ee4\u5217\u53ef\u4ee5\u662f\u6620\u5c04\u5217\u6216\u884d\u751f\u5217\u3002\n\u4f8b\u5982\u6211\u4eec\u53ea\u5e0c\u671b\u5bfc\u5165 k1 \u5927\u4e8e 100 \u5e76\u4e14 k2 \u7b49\u4e8e 1000 \u7684\u5217\uff0c\u5219\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"WHERE k1 > 100 and k2 = 1000\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u5bfc\u5165\u5206\u533a"}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u5bfc\u5165\u76ee\u7684\u8868\u7684\u54ea\u4e9b partition \u4e2d\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u5bfc\u5165\u5230\u5bf9\u5e94\u7684 partition \u4e2d\u3002\n\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:"PARTITION(p1, p2, p3)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"job_properties"})}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u7684\u901a\u7528\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'PROPERTIES (\n    "key1" = "val1",\n    "key2" = "val2"\n)\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u76ee\u524d\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"desired_concurrent_number"})}),"\n",(0,s.jsx)(e.p,{children:"\u671f\u671b\u7684\u5e76\u53d1\u5ea6\u3002\u4e00\u4e2a\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u88ab\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\u6267\u884c\u3002\u8fd9\u4e2a\u53c2\u6570\u6307\u5b9a\u4e00\u4e2a\u4f5c\u4e1a\u6700\u591a\u6709\u591a\u5c11\u4efb\u52a1\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u3002\u5fc5\u987b\u5927\u4e8e0\u3002\u9ed8\u8ba4\u4e3a3\u3002\n\u8fd9\u4e2a\u5e76\u53d1\u5ea6\u5e76\u4e0d\u662f\u5b9e\u9645\u7684\u5e76\u53d1\u5ea6\uff0c\u5b9e\u9645\u7684\u5e76\u53d1\u5ea6\uff0c\u4f1a\u901a\u8fc7\u96c6\u7fa4\u7684\u8282\u70b9\u6570\u3001\u8d1f\u8f7d\u60c5\u51b5\uff0c\u4ee5\u53ca\u6570\u636e\u6e90\u7684\u60c5\u51b5\u7efc\u5408\u8003\u8651\u3002\n\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:'"desired_concurrent_number" = "3"'}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"max_batch_interval"})}),"\n",(0,s.jsx)(e.p,{children:"\u4efb\u52a1\u7684\u8c03\u5ea6\u65f6\u95f4\uff0c\u5373\u4efb\u52a1\u591a\u4e45\u6267\u884c\u4e00\u6b21\uff0c\u9ed8\u8ba4\u4e3a10s\u3002\n\u4efb\u52a1\u7684\u6d88\u8d39\u6570\u636e\u65f6\u95f4\u4e3afe.conf\u4e2d\u7684routine_load_task_consume_second\uff0c\u9ed8\u8ba4\u4e3a3s\u3002\n\u4efb\u52a1\u7684\u6267\u884c\u8d85\u65f6\u65f6\u95f4\u4e3afe.conf\u4e2d\u7684routine_load_task_timeout_second\uff0c\u9ed8\u8ba4\u4e3a15s\u3002\n\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:'"max_batch_interval" = "20"'}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"max_error_number/max_batch_rows"})}),"\n",(0,s.jsx)(e.p,{children:"\u91c7\u6837\u7a97\u53e3\u5185\uff0c\u5141\u8bb8\u7684\u6700\u5927\u9519\u8bef\u884c\u6570\u3002\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u3002\u9ed8\u8ba4\u662f 0\uff0c\u5373\u4e0d\u5141\u8bb8\u6709\u9519\u8bef\u884c\u3002\n\u91c7\u6837\u7a97\u53e3\u4e3a max_batch_rows * 10,\u9ed8\u8ba4\u4e3a(200000 * 10 = 2000000)\u3002\u5373\u5982\u679c\u5728\u91c7\u6837\u7a97\u53e3\u5185\uff0c\u9519\u8bef\u884c\u6570\u5927\u4e8e max_error_number\uff0c\u5219\u4f1a\u5bfc\u81f4\u4f8b\u884c\u4f5c\u4e1a\u88ab\u6682\u505c\uff0c\u9700\u8981\u4eba\u5de5\u4ecb\u5165\u68c0\u67e5\u6570\u636e\u8d28\u91cf\u95ee\u9898\u3002\n\u88ab where \u6761\u4ef6\u8fc7\u6ee4\u6389\u7684\u884c\u4e0d\u7b97\u9519\u8bef\u884c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"strict_mode"})}),"\n",(0,s.jsx)(e.p,{children:'\u662f\u5426\u5f00\u542f\u4e25\u683c\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u5173\u95ed\u3002\u5982\u679c\u5f00\u542f\u540e\uff0c\u975e\u7a7a\u539f\u59cb\u6570\u636e\u7684\u5217\u7c7b\u578b\u53d8\u6362\u5982\u679c\u7ed3\u679c\u4e3a NULL\uff0c\u5219\u4f1a\u88ab\u8fc7\u6ee4\u3002\u6307\u5b9a\u65b9\u5f0f\u4e3a "strict_mode" = "true"'}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"timezone"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u5bfc\u5165\u4f5c\u4e1a\u6240\u4f7f\u7528\u7684\u65f6\u533a\u3002\u9ed8\u8ba4\u4e3a\u4f7f\u7528 Session \u7684 timezone \u53c2\u6570\u3002\u8be5\u53c2\u6570\u4f1a\u5f71\u54cd\u6240\u6709\u5bfc\u5165\u6d89\u53ca\u7684\u548c\u65f6\u533a\u6709\u5173\u7684\u51fd\u6570\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"format"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u5bfc\u5165\u6570\u636e\u683c\u5f0f\uff0c\u9ed8\u8ba4\u662fcsv\uff0c\u652f\u6301json\u683c\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"jsonpaths"})}),"\n",(0,s.jsx)(e.p,{children:"jsonpaths: \u5bfc\u5165json\u65b9\u5f0f\u5206\u4e3a\uff1a\u7b80\u5355\u6a21\u5f0f\u548c\u5339\u914d\u6a21\u5f0f\u3002\u5982\u679c\u8bbe\u7f6e\u4e86jsonpath\u5219\u4e3a\u5339\u914d\u6a21\u5f0f\u5bfc\u5165\uff0c\u5426\u5219\u4e3a\u7b80\u5355\u6a21\u5f0f\u5bfc\u5165\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u793a\u4f8b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"strip_outer_array"})}),"\n",(0,s.jsx)(e.p,{children:"\u5e03\u5c14\u7c7b\u578b\uff0c\u4e3atrue\u8868\u793ajson\u6570\u636e\u4ee5\u6570\u7ec4\u5bf9\u8c61\u5f00\u59cb\u4e14\u5c06\u6570\u7ec4\u5bf9\u8c61\u4e2d\u8fdb\u884c\u5c55\u5e73\uff0c\u9ed8\u8ba4\u503c\u662ffalse\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"json_root"})}),"\n",(0,s.jsx)(e.p,{children:'json_root\u4e3a\u5408\u6cd5\u7684jsonpath\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9ajson document\u7684\u6839\u8282\u70b9\uff0c\u9ed8\u8ba4\u503c\u4e3a""\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"data_source"})}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"KAFKA"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"data_source_properties"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u6570\u636e\u6e90\u76f8\u5173\u7684\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'(\n"key1" = "val1",\n"key2" = "val2"\n)\n'})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"KAFKA \u6570\u636e\u6e90"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"kafka_broker_list"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'Kafka \u7684 broker \u8fde\u63a5\u4fe1\u606f\u3002\u683c\u5f0f\u4e3a ip:host\u3002\u591a\u4e2abroker\u4e4b\u95f4\u4ee5\u9017\u53f7\u5206\u9694\u3002\n\u793a\u4f8b\uff1a\n\n"kafka_broker_list" = "broker1:9092,broker2:9092"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"kafka_topic"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'\u6307\u5b9a\u8981\u8ba2\u9605\u7684 Kafka \u7684 topic\u3002\n\u793a\u4f8b\uff1a\n\n"kafka_topic" = "my_topic"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"kafka_partitions/kafka_offsets"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'\u6307\u5b9a\u9700\u8981\u8ba2\u9605\u7684 kafka partition\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u6bcf\u4e2a partition \u7684\u8d77\u59cb offset\u3002\n\noffset \u53ef\u4ee5\u6307\u5b9a\u4ece\u5927\u4e8e\u7b49\u4e8e 0 \u7684\u5177\u4f53 offset\uff0c\u6216\u8005\uff1a\n\n1. OFFSET_BEGINNING: \u4ece\u6709\u6570\u636e\u7684\u4f4d\u7f6e\u5f00\u59cb\u8ba2\u9605\u3002\n2. OFFSET_END: \u4ece\u672b\u5c3e\u5f00\u59cb\u8ba2\u9605\u3002\n\n\u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4ece OFFSET_END \u5f00\u59cb\u8ba2\u9605 topic \u4e0b\u7684\u6240\u6709 partition\u3002\n\u793a\u4f8b\uff1a\n\n"kafka_partitions" = "0,1,2,3",\n"kafka_offsets" = "101,0,OFFSET_BEGINNING,OFFSET_END"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"property"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'\u6307\u5b9a\u81ea\u5b9a\u4e49kafka\u53c2\u6570\u3002\n\u529f\u80fd\u7b49\u540c\u4e8ekafka shell\u4e2d "--property" \u53c2\u6570\u3002\n\u5f53\u53c2\u6570\u7684 value \u4e3a\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u5728 value \u524d\u52a0\u4e0a\u5173\u952e\u8bcd\uff1a"FILE:"\u3002\n\u5173\u4e8e\u5982\u4f55\u521b\u5efa\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605 "HELP CREATE FILE;"\n\u66f4\u591a\u652f\u6301\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u8bf7\u53c2\u9605 librdkafka \u7684\u5b98\u65b9 CONFIGURATION \u6587\u6863\u4e2d\uff0cclient \u7aef\u7684\u914d\u7f6e\u9879\u3002\n\n\u793a\u4f8b:\n"property.client.id" = "12345",\n"property.ssl.ca.location" = "FILE:ca-cert"\n\n1.\u4f7f\u7528 SSL \u8fde\u63a5 Kafka \u65f6\uff0c\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a\n"property.security.protocol" = "ssl",\n"property.ssl.ca.location" = "FILE:ca-cert",\n\n\u5176\u4e2d:\n"property.security.protocol" \u7528\u4e8e\u6307\u660e\u8fde\u63a5\u65b9\u5f0f\u4e3a SSL\u3002\n"property.ssl.ca.location" \u4e3a be \u8bbf\u95ee kafka \u65f6\u4f7f\u7528\uff0c\u6307\u5b9a CA \u8bc1\u4e66\u7684\u4f4d\u7f6e\u3002\n\n\u5982\u679c Kafka server \u7aef\u5f00\u542f\u4e86 client \u8ba4\u8bc1\uff0c\u5219\u8fd8\u9700\u8bbe\u7f6e\uff1a\n"property.ssl.certificate.location" = "FILE:client.pem",\n"property.ssl.key.location" = "FILE:client.key",\n"property.ssl.key.password" = "abcdefg",\n\n\u5176\u4e2d:\n"property.ssl.certificate.location" \u6307\u5b9a client \u7684 public key \u7684\u4f4d\u7f6e\u3002\n"property.ssl.key.location" \u6307\u5b9a client \u7684 private key \u7684\u4f4d\u7f6e\u3002\n"property.ssl.key.password" \u6307\u5b9a client \u7684 private key \u7684\u5bc6\u7801\u3002\n\n2.\u4f7f\u7528 SASL \u8fde\u63a5 Kafka \u65f6\uff0c\u9700\u8981\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a\n"property.security.protocol"="SASL_PLAINTEXT",\n"property.sasl.mechanism"="PLAIN",\n"property.sasl.username"="admin",\n"property.sasl.password"="admin"\n\n\u5176\u4e2d\uff1a\n"property.security.protocol" \u6307\u5b9a\u534f\u8bae\u4e3a SASL_PLAINTEXT\u3002\n"property.sasl.mechanism" \u6307\u5b9a sasl \u7684 \u8ba4\u8bc1\u65b9\u5f0f\u4e3a PLAIN\u3002\n"property.sasl.username" \u6307\u5b9a sasl \u7684\u7528\u6237\u540d\u3002\n"property.sasl.password" \u6307\u5b9a sasl \u7684\u5bc6\u7801\u3002\n\n3.\u6307\u5b9akafka partition\u7684\u9ed8\u8ba4\u8d77\u59cboffset\n\u5982\u679c\u6ca1\u6709\u6307\u5b9akafka_partitions/kafka_offsets,\u9ed8\u8ba4\u6d88\u8d39\u6240\u6709\u5206\u533a,\u6b64\u65f6\u53ef\u4ee5\u6307\u5b9akafka_default_offsets\u6307\u5b9a\u8d77\u59cb offset\u3002\u9ed8\u8ba4\u4e3a OFFSET_END\uff0c\u5373\u4ece\u672b\u5c3e\u5f00\u59cb\u8ba2\u9605\u3002\n\u503c\u4e3a\n1.OFFSET_BEGINNING: \u4ece\u6709\u6570\u636e\u7684\u4f4d\u7f6e\u5f00\u59cb\u8ba2\u9605\u3002\n2.OFFSET_END: \u4ece\u672b\u5c3e\u5f00\u59cb\u8ba2\u9605\u3002\n\u793a\u4f8b\uff1a\n"property.kafka_default_offsets" = "OFFSET_BEGINNING"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5bfc\u5165\u6570\u636e\u683c\u5f0f\u6837\u4f8b\n\u6574\u578b\u7c7b\uff08TINYINT/SMALLINT/INT/BIGINT/LARGEINT\uff09\uff1a1, 1000, 1234\n\u6d6e\u70b9\u7c7b\uff08FLOAT/DOUBLE/DECIMAL\uff09\uff1a1.1, 0.23, .356\n\u65e5\u671f\u7c7b\uff08DATE/DATETIME\uff09\uff1a2017-10-03, 2017-06-13 12:34:03\n\u5b57\u7b26\u4e32\u7c7b\uff08CHAR/VARCHAR\uff09\uff08\u65e0\u5f15\u53f7\uff09\uff1aI am a student, a\nNULL\u503c\uff1a\\N"}),"\n",(0,s.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e3a example_db \u7684 example_tbl \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test1 \u7684 Kafka \u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u6307\u5b9a\u5217\u5206\u9694\u7b26\u548c group.id \u548c client.id\uff0c\u5e76\u4e14\u81ea\u52a8\u9ed8\u8ba4\u6d88\u8d39\u6240\u6709\u5206\u533a\uff0c\u4e14\u4ece\u6709\u6570\u636e\u7684\u4f4d\u7f6e\uff08OFFSET_BEGINNING\uff09\u5f00\u59cb\u8ba2\u9605"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "false"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.group.id" = "xxx",\n    "property.client.id" = "xxx",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e3a example_db \u7684 example_tbl \u521b\u5efa\u4e00\u4e2a\u540d\u4e3a test1 \u7684 Kafka \u4f8b\u884c\u5bfc\u5165\u4efb\u52a1\u3002\u5bfc\u5165\u4efb\u52a1\u4e3a\u4e25\u683c\u6a21\u5f0f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%starrocks%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2,3",\n    "kafka_offsets" = "101,0,0,200"\n);\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7 SSL \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u4ece Kafka \u96c6\u7fa4\u5bfc\u5165\u6570\u636e\u3002\u540c\u65f6\u8bbe\u7f6e client.id \u53c2\u6570\u3002\u5bfc\u5165\u4efb\u52a1\u4e3a\u975e\u4e25\u683c\u6a21\u5f0f\uff0c\u65f6\u533a\u4e3a Africa/Abidjan"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nWHERE k1 > 100 and k2 like "%starrocks%"\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "false",\n    "timezone" = "Africa/Abidjan"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "property.security.protocol" = "ssl",\n    "property.ssl.ca.location" = "FILE:ca.pem",\n    "property.ssl.certificate.location" = "FILE:client.pem",\n    "property.ssl.key.location" = "FILE:client.key",\n    "property.ssl.key.password" = "abcdefg",\n    "property.client.id" = "my_client_id"\n);\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u6a21\u5f0f\u5bfc\u5165json"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test_json_label_1 ON table1\nCOLUMNS(category,price,author)\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "false",\n    "format" = "json"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\n\u652f\u6301\u4e24\u79cdjson\u6570\u636e\u683c\u5f0f\uff1a\n1\uff09{"category":"a9jadhx","author":"test","price":895}\n2\uff09[\n{"category":"a9jadhx","author":"test","price":895},\n{"category":"axdfa1","author":"EvelynWaugh","price":1299}\n]\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7cbe\u51c6\u5bfc\u5165json\u6570\u636e\u683c\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `example_tbl` (\n`category` varchar(24) NULL COMMENT "",\n`author` varchar(24) NULL COMMENT "",\n`timestamp` bigint(20) NULL COMMENT "",\n`dt` int(11) NULL COMMENT "",\n`price` double REPLACE\n) ENGINE=OLAP\nAGGREGATE KEY(`category`,`author`,`timestamp`,`dt`)\nCOMMENT "OLAP"\nPARTITION BY RANGE(`dt`)\n(PARTITION p0 VALUES [("-2147483648"), ("20200509")),\nPARTITION p20200509 VALUES [("20200509"), ("20200510")),\nPARTITION p20200510 VALUES [("20200510"), ("20200511")),\nPARTITION p20200511 VALUES [("20200511"), ("20200512")))\nDISTRIBUTED BY HASH(`category`,`author`,`timestamp`) BUCKETS 4\nPROPERTIES (\n    "storage_type" = "COLUMN",\n    "replication_num" = "1"\n);\n\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "false",\n    "format" = "json",\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n    "strip_outer_array" = "true"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\njson\u6570\u636e\u683c\u5f0f:\n[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8bf4\u660e\uff1a\n1\uff09\u5982\u679cjson\u6570\u636e\u662f\u4ee5\u6570\u7ec4\u5f00\u59cb\uff0c\u5e76\u4e14\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u662f\u4e00\u6761\u8bb0\u5f55\uff0c\u5219\u9700\u8981\u5c06strip_outer_array\u8bbe\u7f6e\u6210true\uff0c\u8868\u793a\u5c55\u5e73\u6570\u7ec4\u3002\n2\uff09\u5982\u679cjson\u6570\u636e\u662f\u4ee5\u6570\u7ec4\u5f00\u59cb\uff0c\u5e76\u4e14\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u662f\u4e00\u6761\u8bb0\u5f55\uff0c\u5728\u8bbe\u7f6ejsonpath\u65f6\uff0c\u6211\u4eec\u7684ROOT\u8282\u70b9\u5b9e\u9645\u4e0a\u662f\u6570\u7ec4\u4e2d\u5bf9\u8c61\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7528\u6237\u6307\u5b9a\u6839\u8282\u70b9json_root"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(category, author, price, timestamp, dt=from_unixtime(timestamp, \'%Y%m%d\'))\nPROPERTIES\n(\n    "desired_concurrent_number"="3",\n    "max_batch_interval" = "20",\n    "strict_mode" = "false",\n    "format" = "json",\n    "jsonpaths" = "[\\"$.category\\",\\"$.author\\",\\"$.price\\",\\"$.timestamp\\"]",\n    "strip_outer_array" = "true",\n    "json_root" = "$.RECORDS"\n)\nFROM KAFKA\n(\n    "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n    "kafka_topic" = "my_topic",\n    "kafka_partitions" = "0,1,2",\n    "kafka_offsets" = "0,0,0"\n);\njson\u6570\u636e\u683c\u5f0f:\n{\n"RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"CREATE,ROUTINE,LOAD"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>l,ah:()=>a});var s=r(67294);const t=s.createContext({});function a(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function l({components:n,children:e,disableParentContext:r}){let l;return l=r?"function"==typeof n?n({}):n||i:a(n),s.createElement(t.Provider,{value:l},e)}}}]);