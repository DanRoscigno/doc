"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49232],{82455:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const d={displayed_sidebar:"Chinese31"},l="SUBMIT TASK",c={id:"sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",title:"SUBMIT TASK",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"STREAM LOAD",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD"},next:{title:"UPDATE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/UPDATE"}},i={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u76f8\u5173 FE \u53c2\u6570",id:"\u76f8\u5173-fe-\u53c2\u6570",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"submit-task",children:"SUBMIT TASK"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u4e3a ETL \u8bed\u53e5\u521b\u5efa\u5f02\u6b65\u4efb\u52a1\u3002\u6b64\u529f\u80fd\u81ea StarRocks 2.5 \u8d77\u652f\u6301\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["StarRocks v3.0 \u652f\u6301\u4e3a ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})," \u548c ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK",children:"DROP TASK"})," \u5220\u9664\u5f02\u6b65\u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK [task_name] AS <etl_statement>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_name"}),(0,t.jsx)(s.td,{children:"\u4efb\u52a1\u540d\u79f0\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"etl_statement"}),(0,t.jsxs)(s.td,{children:["\u9700\u8981\u521b\u5efa\u5f02\u6b65\u4efb\u52a1\u7684 ETL \u8bed\u53e5\u3002StarRocks \u5f53\u524d\u652f\u6301\u4e3a ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})," \u548c ",(0,t.jsx)(s.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\u3002"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.p,{children:["\u8be5\u8bed\u53e5\u4f1a\u521b\u5efa\u4e00\u4e2a Task\uff0c\u8868\u793a\u4e00\u4e2a ETL \u8bed\u53e5\u6267\u884c\u4efb\u52a1\u7684\u5b58\u50a8\u6a21\u677f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 Information Schema \u4e2d\u7684\u5143\u6570\u636e\u8868 ",(0,t.jsx)(s.code,{children:"tasks"})," \u6765\u67e5\u770b Task \u4fe1\u606f\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\nSELECT * FROM information_schema.tasks WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u6267\u884c Task \u540e\u4f1a\u5bf9\u5e94\u751f\u6210\u4e00\u4e2a TaskRun\uff0c\u8868\u793a\u4e00\u4e2a ETL \u8bed\u53e5\u6267\u884c\u4efb\u52a1\u3002TaskRun \u6709\u4ee5\u4e0b\u72b6\u6001\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"PENDING"}),"\uff1a\u4efb\u52a1\u7b49\u5f85\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"RUNNING"}),"\uff1a\u4efb\u52a1\u6b63\u5728\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"FAILED"}),"\uff1a\u4efb\u52a1\u6267\u884c\u5931\u8d25\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SUCCESS"}),"\uff1a\u4efb\u52a1\u6267\u884c\u6210\u529f\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 Information Schema \u4e2d\u7684\u5143\u6570\u636e\u8868 ",(0,t.jsx)(s.code,{children:"task_runs"})," \u6765\u67e5\u770b TaskRun \u72b6\u6001\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.task_runs;\nSELECT * FROM information_schema.task_runs WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u76f8\u5173-fe-\u53c2\u6570",children:"\u76f8\u5173 FE \u53c2\u6570"}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u5982\u4e0b FE \u53c2\u6570\u914d\u7f6e\u5f02\u6b65 ETL \u4efb\u52a1\uff1a"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_ttl_second"}),(0,t.jsx)(s.td,{children:"259200"}),(0,t.jsx)(s.td,{children:"Task \u7684\u6709\u6548\u671f\uff0c\u5355\u4f4d\u79d2\u3002\u8d85\u8fc7\u6709\u6548\u671f\u7684 Task \u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_check_interval_second"}),(0,t.jsx)(s.td,{children:"14400"}),(0,t.jsx)(s.td,{children:"\u5220\u9664\u8fc7\u671f Task \u7684\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_ttl_second"}),(0,t.jsx)(s.td,{children:"259200"}),(0,t.jsx)(s.td,{children:"TaskRun \u7684\u6709\u6548\u671f\uff0c\u5355\u4f4d\u79d2\u3002\u8d85\u8fc7\u6709\u6548\u671f\u7684 TaskRun \u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002\u6b64\u5916\uff0c\u6210\u529f\u548c\u5931\u8d25\u72b6\u6001\u7684 TaskRun \u4e5f\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_concurrency"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"\u6700\u591a\u53ef\u540c\u65f6\u8fd0\u884c\u7684 TaskRun \u7684\u6570\u91cf\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_queue_length"}),(0,t.jsx)(s.td,{children:"500"}),(0,t.jsx)(s.td,{children:"\u6700\u591a\u53ef\u540c\u65f6\u7b49\u5f85\u8fd0\u884c\u7684 TaskRun \u7684\u6570\u91cf\u3002\u5982\u540c\u65f6\u7b49\u5f85\u8fd0\u884c\u7684 TaskRun \u7684\u6570\u91cf\u8d85\u8fc7\u8be5\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\uff0c\u60a8\u5c06\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c Task\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4e3a ",(0,t.jsx)(s.code,{children:"CREATE TABLE tbl1 AS SELECT * FROM src_tbl"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\uff0c\u5e76\u547d\u540d\u4e3a ",(0,t.jsx)(s.code,{children:"etl0"}),"\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK etl0 AS CREATE TABLE tbl1 AS SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u4e3a ",(0,t.jsx)(s.code,{children:"INSERT INTO tbl2 SELECT * FROM src_tbl"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\uff0c\u5e76\u547d\u540d\u4e3a ",(0,t.jsx)(s.code,{children:"etl1"}),"\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK etl1 AS INSERT INTO tbl2 SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u4e3a ",(0,t.jsx)(s.code,{children:"INSERT OVERWRITE tbl3 SELECT * FROM src_tbl"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK AS INSERT OVERWRITE tbl3 SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u56db\uff1a\u4e3a ",(0,t.jsx)(s.code,{children:"INSERT OVERWRITE insert_wiki_edit SELECT * FROM source_wiki_edit"})," \u521b\u5efa\u5f02\u6b65\u4efb\u52a1\uff0c\u5e76\u901a\u8fc7 Hint \u5c06 Query Timeout \u8bbe\u7f6e\u4e3a ",(0,t.jsx)(s.code,{children:"100000"})," \u79d2\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT /*+set_var(query_timeout=100000)*/ TASK AS\nINSERT OVERWRITE insert_wiki_edit\nSELECT * FROM source_wiki_edit;\n"})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>d});var t=n(67294);const r=t.createContext({});function d(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:d(e),t.createElement(r.Provider,{value:c},s)}}}]);