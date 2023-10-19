"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33065],{83160:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=s(85893),i=s(11151);const l={displayed_sidebar:"Chinese"},c="ALTER ROUTINE LOAD",d={id:"sql-reference/sql-statements/data-manipulation/alter-routine-load",title:"ALTER ROUTINE LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/alter-routine-load.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/alter-routine-load",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/alter-routine-load.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"UPDATE",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/UPDATE"},next:{title:"INSERT",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/insert"}},t={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",a:"a",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"alter-routine-load",children:"ALTER ROUTINE LOAD"}),"\n",(0,r.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(e.p,{children:["\u8be5\u8bed\u6cd5\u7528\u4e8e\u4fee\u6539\u5df2\u7ecf\u521b\u5efa\u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\uff0c\u4e14\u53ea\u80fd\u4fee\u6539\u5904\u4e8e ",(0,r.jsx)(e.strong,{children:"PAUSED"})," \u72b6\u6001\u7684\u4f5c\u4e1a\u3002\u901a\u8fc7 ",(0,r.jsx)(e.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",children:"PAUSE"})," \u547d\u4ee4\u53ef\u4ee5\u6682\u505c\u5bfc\u5165\u7684\u4efb\u52a1\uff0c\u8fdb\u884c ",(0,r.jsx)(e.code,{children:"ALTER ROUTINE LOAD"})," \u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ALTER ROUTINE LOAD FOR [db.]job_name\n[load_properties]\n[job_properties]\nFROM data_source\n[data_source_properties]\n"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"[db.] job_name"})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u540d\u79f0\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"load_properties"})}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u63cf\u8ff0\u5bfc\u5165\u6570\u636e\u3002\u8bed\u6cd5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"[COLUMNS TERMINATED BY '<terminator>'],\n[COLUMNS ([<column_name> [, ...] ] [, column_assignment [, ...] ] )],\n[WHERE <expr>],\n[PARTITION ([ <partition_name> [, ...] ])]\n\ncolumn_assignment:\n<column_name> = column_expression\n"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8bbe\u7f6e\u5217\u5206\u9694\u7b26"}),"\n",(0,r.jsx)(e.p,{children:'\u5bf9\u4e8e csv \u683c\u5f0f\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u6307\u5b9a\u5217\u5206\u9694\u7b26\uff0c\u4f8b\u5982\uff0c\u5c06\u5217\u5206\u9694\u7b26\u6307\u5b9a\u4e3a\u9017\u53f7 ","\u3002'}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'COLUMNS TERMINATED BY ","\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u9ed8\u8ba4\u4e3a\uff1a\\t\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u5217\u6620\u5c04\u5173\u7cfb"}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u6e90\u6570\u636e\u4e2d\u5217\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u4ee5\u53ca\u5b9a\u4e49\u884d\u751f\u5217\u7684\u751f\u6210\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6620\u5c04\u5217\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u6309\u987a\u5e8f\u6307\u5b9a\uff0c\u6e90\u6570\u636e\u4e2d\u5404\u4e2a\u5217\uff0c\u5bf9\u5e94\u76ee\u7684\u8868\u4e2d\u7684\u54ea\u4e9b\u5217\u3002\u5bf9\u4e8e\u5e0c\u671b\u8df3\u8fc7\u7684\u5217\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u5217\u540d\u3002\n\u5047\u8bbe\u76ee\u7684\u8868\u6709\u4e09\u5217 k1, k2, v1\u3002\u6e90\u6570\u636e\u6709 4 \u5217\uff0c\u5176\u4e2d\u7b2c 1\u30012\u30014 \u5217\u5206\u522b\u5bf9\u5e94 k2, k1, v1\u3002\u5219\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"COLUMNS (k2, k1, xxx, v1)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5176\u4e2d xxx \u4e3a\u4e0d\u5b58\u5728\u7684\u4e00\u5217\uff0c\u7528\u4e8e\u8df3\u8fc7\u6e90\u6570\u636e\u4e2d\u7684\u7b2c\u4e09\u5217\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u884d\u751f\u5217\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5 col_name = expr \u7684\u5f62\u5f0f\u8868\u793a\u7684\u5217\uff0c\u6211\u4eec\u79f0\u4e3a\u884d\u751f\u5217\u3002\u5373\u652f\u6301\u901a\u8fc7 expr \u8ba1\u7b97\u5f97\u51fa\u76ee\u7684\u8868\u4e2d\u5bf9\u5e94\u5217\u7684\u503c\u3002\n\u884d\u751f\u5217\u901a\u5e38\u6392\u5217\u5728\u6620\u5c04\u5217\u4e4b\u540e\uff0c\u867d\u7136\u8fd9\u4e0d\u662f\u5f3a\u5236\u7684\u89c4\u5b9a\uff0c\u4f46\u662f StarRocks \u603b\u662f\u5148\u89e3\u6790\u6620\u5c04\u5217\uff0c\u518d\u89e3\u6790\u884d\u751f\u5217\u3002\n\u63a5\u4e0a\u4e00\u4e2a\u793a\u4f8b\uff0c\u5047\u8bbe\u76ee\u7684\u8868\u8fd8\u6709\u7b2c 4 \u5217 v2\uff0cv2 \u7531 k1 \u548c k2 \u7684\u548c\u4ea7\u751f\u3002\u5219\u53ef\u4ee5\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"COLUMNS (k2, k1, xxx, v1, v2 = k1 + k2);\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e csv \u683c\u5f0f\u7684\u6570\u636e\uff0cCOLUMNS \u4e2d\u7684\u6620\u5c04\u5217\u7684\u4e2a\u6570\u5fc5\u987b\u8981\u4e0e\u6570\u636e\u4e2d\u7684\u5217\u4e2a\u6570\u4e00\u81f4\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u4e8e\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4ee5\u8fc7\u6ee4\u6389\u4e0d\u9700\u8981\u7684\u5217\u3002\u8fc7\u6ee4\u5217\u53ef\u4ee5\u662f\u6620\u5c04\u5217\u6216\u884d\u751f\u5217\u3002\n\u4f8b\u5982\u6211\u4eec\u53ea\u5e0c\u671b\u5bfc\u5165 k1 \u5927\u4e8e 100 \u5e76\u4e14 k2 \u7b49\u4e8e 1000 \u7684\u5217\uff0c\u5219\u4e66\u5199\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"WHERE k1 > 100 and k2 = 1000\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u5bfc\u5165\u5206\u533a"}),"\n",(0,r.jsxs)(e.p,{children:["\u6307\u5b9a ",(0,r.jsx)(e.strong,{children:"\u5bfc\u5165\u76ee\u7684\u8868"})," \u7684\u54ea\u4e9b partition \u4e2d\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u5bfc\u5165\u5230\u5bf9\u5e94\u7684 partition \u4e2d\u3002\n\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-plain",metastring:"text",children:"PARTITION(p1, p2, p3)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"job_properties"})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u9700\u8981\u4fee\u6539\u7684\u4f5c\u4e1a\u53c2\u6570\u3002\u76ee\u524d\u4ec5\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\u7684\u4fee\u6539\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"desired_concurrent_number"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"max_error_number"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"max_batch_interval"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"max_batch_rows"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"max_batch_size"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"jsonpaths"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"json_root"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"strip_outer_array"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"strict_mode"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"timezone"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"data_source"})}),"\n",(0,r.jsx)(e.p,{children:"\u6570\u636e\u6e90\u7684\u7c7b\u578b\u3002\u5f53\u524d\u652f\u6301\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"KAFKA"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"data_source_properties"})}),"\n",(0,r.jsx)(e.p,{children:"\u6570\u636e\u6e90\u7684\u76f8\u5173\u5c5e\u6027\u3002\u76ee\u524d\u4ec5\u652f\u6301\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"kafka_partitions"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"kafka_offsets"})}),"\n",(0,r.jsxs)(e.li,{children:["\u81ea\u5b9a\u4e49 property\uff0c\u5982 ",(0,r.jsx)(e.code,{children:"property.group.id"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"kafka_partitions"})," \u548c ",(0,r.jsx)(e.code,{children:"kafka_offsets"})," \u7528\u4e8e\u4fee\u6539\u5f85\u6d88\u8d39\u7684 kafka partition \u7684 offset\uff0c\u4ec5\u80fd\u4fee\u6539\u5f53\u524d\u5df2\u7ecf\u6d88\u8d39\u7684 partition\u3002\u4e0d\u80fd\u65b0\u589e partition\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5c06 ",(0,r.jsx)(e.code,{children:"desired_concurrent_number"})," \u4fee\u6539\u4e3a 1\uff0c\u8c03\u6574\u8be5\u53c2\u6570\u53ef\u8c03\u6574\u6d88\u8d39 kafka \u5e76\u884c\u5ea6\uff0c\u8be6\u7ec6\u8c03\u8282\u65b9\u5f0f\u8bf7\u53c2\u8003: ",(0,r.jsx)(e.a,{href:"https://forum.starrocks.com/t/topic/1675",children:"\u901a\u8fc7\u8c03\u6574\u5e76\u884c\u5ea6\u589e\u52a0 Routine load \u6d88\u8d39 kafka \u6570\u636e\u901f\u7387"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5c06 ",(0,r.jsx)(e.code,{children:"desired_concurrent_number"})," \u4fee\u6539\u4e3a 10\uff0c\u4fee\u6539 partition \u7684 offset\uff0c\u4fee\u6539 group id\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u66f4\u6539\u5bfc\u5165\u7684\u8fc7\u6ee4\u6761\u4ef6\u4e3a ",(0,r.jsx)(e.code,{children:"a > 0"}),"\uff0c\u5e76\u4e14\u6307\u5b9a\u5bfc\u5165\u7684 partition \u4e3a ",(0,r.jsx)(e.code,{children:"p1"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"ALTER ROUTINE LOAD FOR db1.label1\nWHERE a > 0\nPARTITION (p1)\n"})}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>l});var r=s(67294);const i=r.createContext({});function l(n){const e=r.useContext(i);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||c:l(n),r.createElement(i.Provider,{value:d},e)}}}]);