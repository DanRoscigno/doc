"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96314],{15448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(85893),a=s(11151);const r={displayed_sidebar:"Chinese31"},i="DROP TASK",c={id:"sql-reference/sql-statements/data-manipulation/DROP_TASK",title:"DROP TASK",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/DROP_TASK.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/DROP_TASK",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/DROP_TASK",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/DROP_TASK.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"DELETE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/DELETE"},next:{title:"EXPORT",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/EXPORT"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-task",children:"DROP TASK"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5220\u9664\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"})," \u8bed\u53e5\u63d0\u4ea4\u7684\u5f02\u6b65 ETL \u4efb\u52a1\u3002\u6b64\u529f\u80fd\u4ece StarRocks v2.5.7 \u8d77\u652f\u6301\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7 DROP TASK \u5220\u9664\u4efb\u52a1\u5c06\u540c\u65f6\u53d6\u6d88\u8be5\u4efb\u52a1\u5bf9\u5e94\u7684 TaskRun\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DROP TASK '<task_name>'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"task_name"}),(0,t.jsx)(n.td,{children:"\u5f85\u5220\u9664\u4efb\u52a1\u540d\u3002"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2 Information Schema \u4e2d\u7684\u5143\u6570\u636e\u8868 ",(0,t.jsx)(n.code,{children:"tasks"})," \u548c ",(0,t.jsx)(n.code,{children:"task_runs"})," \u6765\u67e5\u770b\u5f02\u6b65\u4efb\u52a1\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\nSELECT * FROM information_schema.tasks WHERE task_name = '<task_name>';\nSELECT * FROM information_schema.task_runs;\nSELECT * FROM information_schema.task_runs WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"MySQL > SUBMIT /*+set_var(query_timeout=100000)*/ TASK ctas AS\n    -> CREATE TABLE insert_wiki_edit_new\n    -> AS SELECT * FROM source_wiki_edit;\n+----------+-----------+\n| TaskName | Status    |\n+----------+-----------+\n| ctas     | SUBMITTED |\n+----------+-----------+\n1 row in set (1.19 sec)\n\nMySQL > DROP TASK 'ctas';\nQuery OK, 0 rows affected (0.35 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const a=t.createContext({});function r(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:c},n)}}}]);