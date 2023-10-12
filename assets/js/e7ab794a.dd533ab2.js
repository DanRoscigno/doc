"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35040],{81416:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(85893),a=n(11151);const i={displayed_sidebar:"documentation"},r="SUBMIT TASK",c={id:"sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",title:"SUBMIT TASK",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"STREAM LOAD",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/STREAM_LOAD"},next:{title:"UPDATE",permalink:"/doc/docs/sql-reference/sql-statements/data-manipulation/UPDATE"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Configure via FE configuration items",id:"configure-via-fe-configuration-items",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"submit-task",children:"SUBMIT TASK"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Submits an ETL statement as an asynchronous task. This feature has been supported since StarRocks v2.5."}),"\n",(0,t.jsxs)(s.p,{children:["Currently, StarRocks supports submitting asynchronous tasks for ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})," and ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You can drop an asynchronous task using ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/DROP_TASK",children:"DROP TASK"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK [task_name] AS <etl_statement>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_name"}),(0,t.jsx)(s.td,{children:"The task name."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"etl_statement"}),(0,t.jsxs)(s.td,{children:["The ETL statement that you want to submit as an asynchronous task. StarRocks currently supports submitting asynchronous tasks for ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})," and ",(0,t.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsxs)(s.p,{children:["This statement creates a Task, which is a template for storing a task that executes the ETL statement. You can check the information of the Task by querying the metadata table ",(0,t.jsx)(s.code,{children:"tasks"})," in ",(0,t.jsx)(s.a,{href:"/doc/docs/administration/information_schema",children:"Information Schema"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.tasks;\nSELECT * FROM information_schema.tasks WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(s.p,{children:"After you run the Task, a TaskRun is generated accordingly. A TaskRun indicates a task that executes the ETL statement. A TaskRun has the following states:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"PENDING"}),": The task waits to be run."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"RUNNING"}),": The task is running."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"FAILED"}),": The task failed."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SUCCESS"}),": The task runs successfully."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can check the state of a TaskRun by querying the metadata table ",(0,t.jsx)(s.code,{children:"task_runs"})," in ",(0,t.jsx)(s.a,{href:"/doc/docs/administration/information_schema",children:"Information Schema"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SELECT * FROM INFORMATION_SCHEMA.task_runs;\nSELECT * FROM information_schema.task_runs WHERE task_name = '<task_name>';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"configure-via-fe-configuration-items",children:"Configure via FE configuration items"}),"\n",(0,t.jsx)(s.p,{children:"You can configure asynchronous ETL tasks using the following FE configuration items:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Default value"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_ttl_second"}),(0,t.jsx)(s.td,{children:"259200"}),(0,t.jsx)(s.td,{children:"The period during which a Task is valid. Unit: seconds. Tasks that exceed the validity period are deleted."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_check_interval_second"}),(0,t.jsx)(s.td,{children:"14400"}),(0,t.jsx)(s.td,{children:"The time interval to delete invalid Tasks. Unit: seconds."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_ttl_second"}),(0,t.jsx)(s.td,{children:"259200"}),(0,t.jsxs)(s.td,{children:["The period during which a TaskRun is valid. Unit: seconds. TaskRuns that exceed the validity period are deleted automatically. Additionally, TaskRuns in the ",(0,t.jsx)(s.code,{children:"FAILED"})," and ",(0,t.jsx)(s.code,{children:"SUCCESS"})," states are also deleted automatically."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_concurrency"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsx)(s.td,{children:"The maximum number of TaskRuns that can be run in parallel."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"task_runs_queue_length"}),(0,t.jsx)(s.td,{children:"500"}),(0,t.jsx)(s.td,{children:"The maximum number of TaskRuns that are pending for running. If the number exceeds the default value, the incoming tasks will be suspended."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Example 1: Submit an asynchronous task for ",(0,t.jsx)(s.code,{children:"CREATE TABLE tbl1 AS SELECT * FROM src_tbl"}),", and specify the task name as ",(0,t.jsx)(s.code,{children:"etl0"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK etl0 AS CREATE TABLE tbl1 AS SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 2: Submit an asynchronous task for ",(0,t.jsx)(s.code,{children:"INSERT INTO tbl2 SELECT * FROM src_tbl"}),", and specify the task name as ",(0,t.jsx)(s.code,{children:"etl1"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK etl1 AS INSERT INTO tbl2 SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 3: Submit an asynchronous task for ",(0,t.jsx)(s.code,{children:"INSERT OVERWRITE tbl3 SELECT * FROM src_tbl"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT TASK AS INSERT OVERWRITE tbl3 SELECT * FROM src_tbl;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Example 4: Submit an asynchronous task for ",(0,t.jsx)(s.code,{children:"INSERT OVERWRITE insert_wiki_edit SELECT * FROM source_wiki_edit"})," without specifying the task name, and extend the query timeout to ",(0,t.jsx)(s.code,{children:"100000"})," seconds using the hint:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SUBMIT /*+set_var(query_timeout=100000)*/ TASK AS\nINSERT OVERWRITE insert_wiki_edit\nSELECT * FROM source_wiki_edit;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var t=n(67294);const a=t.createContext({});function i(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:i(e),t.createElement(a.Provider,{value:c},s)}}}]);