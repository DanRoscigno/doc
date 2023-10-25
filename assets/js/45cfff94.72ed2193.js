"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70541],{33372:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(85893),s=o(11151);const a={displayed_sidebar:"English"},r="Data loading",i={id:"faq/loading/Loading_faq",title:"Data loading",description:'1. What do I do if the "close index channel failed" or "too many tablet versions" error occurs?',source:"@site/versioned_docs/version-2.3/faq/loading/Loading_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Loading_faq",permalink:"/docs/2.3/faq/loading/Loading_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Loading_faq.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Insert Into",permalink:"/docs/2.3/faq/loading/Insert_into_faq"},next:{title:"Routine Load",permalink:"/docs/2.3/faq/loading/Routine_load_faq"}},c={},l=[{value:"1. What do I do if the &quot;close index channel failed&quot; or &quot;too many tablet versions&quot; error occurs?",id:"1-what-do-i-do-if-the-close-index-channel-failed-or-too-many-tablet-versions-error-occurs",level:2},{value:"2. What do I do if the &quot;Label Already Exists&quot; error occurs?",id:"2-what-do-i-do-if-the-label-already-exists-error-occurs",level:2},{value:"3. What do I do if the &quot;ETL_QUALITY_UNSATISFIED; msg not good enough to cancel&quot; error occurs?",id:"3-what-do-i-do-if-the-etl_quality_unsatisfied-msg-not-good-enough-to-cancel-error-occurs",level:2},{value:"4. What do I do if RPC times out?",id:"4-what-do-i-do-if-rpc-times-out",level:2},{value:"5. What do I do if the &quot;Value count does not match column count&quot; error occurs?",id:"5-what-do-i-do-if-the-value-count-does-not-match-column-count-error-occurs",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",div:"div",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-loading",children:"Data loading"}),"\n",(0,n.jsx)(t.h2,{id:"1-what-do-i-do-if-the-close-index-channel-failed-or-too-many-tablet-versions-error-occurs",children:'1. What do I do if the "close index channel failed" or "too many tablet versions" error occurs?'}),"\n",(0,n.jsx)(t.p,{children:"You were running load jobs too frequently, and the data was not compacted in a timely manner. As a result, the number of data versions generated during loading exceeds the maximum number (which defaults to 1000) of data versions that are allowed. Use one of the following methods to resolve this issue:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Increase the amount of data loaded in each individual job, thereby reducing loading frequency."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Modify the configuration items in the BE configuration file ",(0,n.jsx)(t.strong,{children:"be.conf"})," of each BE as follows, thereby accelerating data compactions:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",children:"cumulative_compaction_num_threads_per_disk = 4\nbase_compaction_num_threads_per_disk = 2\ncumulative_compaction_check_interval_seconds = 2\n"})}),"\n",(0,n.jsx)(t.p,{children:"After you modify the settings of the preceding configuration items, you must observe the memory and I/O to ensure that they are normal."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"2-what-do-i-do-if-the-label-already-exists-error-occurs",children:'2. What do I do if the "Label Already Exists" error occurs?'}),"\n",(0,n.jsx)(t.p,{children:"This error occurs because the load job has the same label as another load job, which has been successfully run or is being run, within the same StarRocks database."}),"\n",(0,n.jsxs)(t.p,{children:["Stream Load jobs are submitted according to HTTP. In general, request retry logic is embedded in HTTP clients of all programmatic languages. When the StarRocks cluster receives a load job request from an HTTP client, it immediately starts to process the request, but it does not return the job result to the HTTP client in a timely manner. As a result, the HTTP client sends the same load job request again. However, the StarRocks cluster is already processing the first request and therefore returns the ",(0,n.jsx)(t.code,{children:"Label Already Exists"})," error for the second request."]}),"\n",(0,n.jsx)(t.p,{children:"Do as follows to check that load jobs submitted by using different loading methods do not have the same label and are not repeatedly submitted:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"View the FE log and check whether the label of the failed load job is recorded twice. If the label is recorded twice, the client has submitted the load job request twice."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(t.p,{children:"The StarRocks cluster does not distinguish between the labels of load jobs based on loading methods. Therefore, load jobs submitted by using different loading methods may have the same label."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:['Run SHOW LOAD WHERE LABEL = "xxx" to check for load jobs that have the same label and are in the ',(0,n.jsx)(t.strong,{children:"FINISHED"})," state."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"xxx"})," is the label that you want to check."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Before you submit a load job, we recommend that you calculate the approximate amount of time required to load the data and then adjust the client-side request timeout period accordingly. This way, you can prevent the client from submitting the load job request multiple times."}),"\n",(0,n.jsxs)(t.h2,{id:"3-what-do-i-do-if-the-etl_quality_unsatisfied-msg-not-good-enough-to-cancel-error-occurs",children:['3. What do I do if the "ETL_QUALITY_UNSATISFIED; msg',(0,n.jsx)(t.div,{}),' not good enough to cancel" error occurs?']}),"\n",(0,n.jsxs)(t.p,{children:["Execute ",(0,n.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"}),", and use the error URL in the returned execution result to view the error details."]}),"\n",(0,n.jsx)(t.p,{children:"Common data quality errors are as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"convert csv string to INT failed."'}),"\n",(0,n.jsxs)(t.p,{children:["Strings from a source column failed to be transformed into the data type of the matching destination column. For example, ",(0,n.jsx)(t.code,{children:"abc"})," failed to be transformed into a numeric value."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"the length of input is too long than schema."'}),"\n",(0,n.jsx)(t.p,{children:"Values from a source column are in lengths that are not supported by the matching destination column. For example, the source column values of CHAR data type exceed the destination column's maximum length specified at table creation, or the source column values of INT data type exceed 4 bytes."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"actual column number is less than schema column number."'}),"\n",(0,n.jsx)(t.p,{children:"After a source row is parsed based on the specified column separator, the number of columns obtained is smaller than the number of columns in the destination table. A possible reason is that the column separator specified in the load command or statement differs from the column separator that is actually used in that row."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"actual column number is more than schema column number."'}),"\n",(0,n.jsx)(t.p,{children:"After a source row is parsed based on the specified column separator, the number of columns obtained is greater than the number of columns in the destination table. A possible reason is that the column separator specified in the load command or statement differs from the column separator that is actually used in that row."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"the frac part length longer than schema scale."'}),"\n",(0,n.jsx)(t.p,{children:"The decimal parts of values from a DECIMAL-type source column exceed the specified length."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"the int part length longer than schema precision."'}),"\n",(0,n.jsx)(t.p,{children:"The integer parts of values from a DECIMAL-type source column exceed the specified length."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'"there is no corresponding partition for this key."'}),"\n",(0,n.jsx)(t.p,{children:"The value in the partition column for a source row is not within the partition range."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"4-what-do-i-do-if-rpc-times-out",children:"4. What do I do if RPC times out?"}),"\n",(0,n.jsxs)(t.p,{children:["Check the setting of the ",(0,n.jsx)(t.code,{children:"write_buffer_size"})," configuration item in the BE configuration file ",(0,n.jsx)(t.strong,{children:"be.conf"})," of each BE. This configuration item is used to control the maximum size per memory block on the BE. The default maximum size is 100 MB. If the maximum size is exceedingly large, Remote Procedure Call (RPC) may time out. To resolve this issue, adjust the settings of the ",(0,n.jsx)(t.code,{children:"write_buffer_size"})," and ",(0,n.jsx)(t.code,{children:"tablet_writer_rpc_timeout_sec"})," configuration items in the BE configuration file. For more information, see ",(0,n.jsx)(t.a,{href:"/docs/2.3/loading/Loading_intro#be-configurations",children:"BE configurations"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"5-what-do-i-do-if-the-value-count-does-not-match-column-count-error-occurs",children:'5. What do I do if the "Value count does not match column count" error occurs?'}),"\n",(0,n.jsx)(t.p,{children:'After my load job failed, I used the error URL returned in the job result to retrieve the error details and found the "Value count does not match column count" error, which indicates a mismatch between the number of columns in the source data file and the number of columns in the destination StarRocks table:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Java",children:"Error: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:00Z,cpu0,80.99\nError: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:10Z,cpu1,75.23\nError: Value count does not match column count. Expect 3, but got 1. Row: 2023-01-01T18:29:20Z,cpu2,59.44\n"})}),"\n",(0,n.jsx)(t.p,{children:"The reason for this issue is as follows:"}),"\n",(0,n.jsxs)(t.p,{children:["The column separator specified in the load command or statement differs from the column separator that is actually used in the source data file. In the preceding example, the CSV-formatted data file consists of three columns, which are separated with commas (",(0,n.jsx)(t.code,{children:","}),"). However, ",(0,n.jsx)(t.code,{children:"\\t"})," is specified as the column separator in the load command or statement. As a result, the three columns from the source data file are incorrectly parsed into one column."]}),"\n",(0,n.jsxs)(t.p,{children:["Specify commas (",(0,n.jsx)(t.code,{children:","}),") as the column separator in the load command or statement. Then, submit the load job again."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,o)=>{o.d(t,{Zo:()=>i,ah:()=>a});var n=o(67294);const s=n.createContext({});function a(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||r:a(e),n.createElement(s.Provider,{value:i},t)}}}]);