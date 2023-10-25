"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95963],{7346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const a={displayed_sidebar:"English"},o="Synchronize data from MySQL in real time",r={id:"faq/loading/synchronize_mysql_into_sr",title:"Synchronize data from MySQL in real time",description:"What do I do if a Flink job reports an error?",source:"@site/versioned_docs/version-2.5/faq/loading/synchronize_mysql_into_sr.md",sourceDirName:"faq/loading",slug:"/faq/loading/synchronize_mysql_into_sr",permalink:"/docs/2.5/faq/loading/synchronize_mysql_into_sr",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/synchronize_mysql_into_sr.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Stream Load",permalink:"/docs/2.5/faq/loading/Stream_load_faq"},next:{title:"Authenticate to AWS resources",permalink:"/docs/2.5/integrations/authenticate_to_aws_resources"}},c={},l=[{value:"What do I do if a Flink job reports an error?",id:"what-do-i-do-if-a-flink-job-reports-an-error",level:2},{value:"How can I make Flink automatically restart failed tasks?",id:"how-can-i-make-flink-automatically-restart-failed-tasks",level:2},{value:"How can I manually stop a Flink job and later restore it to the state before stopping?",id:"how-can-i-manually-stop-a-flink-job-and-later-restore-it-to-the-state-before-stopping",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",a:"a",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",ol:"ol"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"synchronize-data-from-mysql-in-real-time",children:"Synchronize data from MySQL in real time"}),"\n",(0,i.jsx)(n.h2,{id:"what-do-i-do-if-a-flink-job-reports-an-error",children:"What do I do if a Flink job reports an error?"}),"\n",(0,i.jsxs)(n.p,{children:["A Flink job reports the error ",(0,i.jsx)(n.code,{children:"Could not execute SQL statement. Reason:org.apache.flink.table.api.ValidationException: One or more required options are missing."})]}),"\n",(0,i.jsxs)(n.p,{children:["A possible reason is that the required configuration information is missing in multiple sets of rules, such as ",(0,i.jsx)(n.code,{children:"[table-rule.1]"})," and ",(0,i.jsx)(n.code,{children:"[table-rule.2]"}),", in the SMT configuration file ",(0,i.jsx)(n.strong,{children:"config_prod.conf"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can check whether each set of rules, such as ",(0,i.jsx)(n.code,{children:"[table-rule.1]"})," and ",(0,i.jsx)(n.code,{children:"[table-rule.2]"})," is configured with the required database, table, and Flink connector information."]}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-make-flink-automatically-restart-failed-tasks",children:"How can I make Flink automatically restart failed tasks?"}),"\n",(0,i.jsxs)(n.p,{children:["Flink automatically restarts failed tasks through the ",(0,i.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/",children:"checkpointing mechanism"})," and ",(0,i.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/ops/state/task_failure_recovery/",children:"restart strategy"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you need to enable the checkpointing mechanism and use the default restart strategy, which is the fixed delay restart strategy, you can configure the following information in the configuration file ",(0,i.jsx)(n.strong,{children:"flink-conf.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"execution.checkpointing.interval: 300000\nstate.backend: filesystem\nstate.checkpoints.dir: file:///tmp/flink-checkpoints-directory\n"})}),"\n",(0,i.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,i.jsxs)(n.p,{children:["For more detailed parameter descriptions in Flink documentation, see ",(0,i.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/",children:"Checkpointing"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"execution.checkpointing.interval"}),": the base time interval of checkpointing. Unit: millisecond. To enable the checkpointing mechanism, you need to set this parameter to a value greater than ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state.backend"}),": specifies the state backend to determine how the state is represented internally, and how and where it is persisted upon checkpointing. Common values are ",(0,i.jsx)(n.code,{children:"filesystem"})," or ",(0,i.jsx)(n.code,{children:"rocksdb"}),". After the checkpointing mechanism is enabled, the state is persisted upon checkpoints to prevent data loss and ensure data consistency after recovery. For more information on state, see ",(0,i.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/state_backends/",children:"State Backends"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"state.checkpoints.dir"}),": the directory to which checkpoints are written to."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-manually-stop-a-flink-job-and-later-restore-it-to-the-state-before-stopping",children:"How can I manually stop a Flink job and later restore it to the state before stopping?"}),"\n",(0,i.jsxs)(n.p,{children:["You can manually trigger a ",(0,i.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/savepoints/",children:"savepoint"})," when stopping a Flink job (a savepoint is a consistent image of the execution state of a streaming Flink job, and is created based on the checkpointing mechanism). Later, you can restore the Flink job from the specified savepoint."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Stop the Flink job with a savepoint. The following command automatically triggers a savepoint for the Flink job ",(0,i.jsx)(n.code,{children:"jobId"})," and stops the Flink job. Additionally, you can specify a target file system directory to store the savepoint."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"bin/flink stop --type [native/canonical] --savepointPath [:targetDirectory] :jobId\n"})}),"\n",(0,i.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jobId"}),": You can view the Flink job ID from the Flink WebUI or by running ",(0,i.jsx)(n.code,{children:"flink list -running"})," on the command line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"targetDirectory"}),": You can specify ",(0,i.jsx)(n.code,{children:"state.savepoints.dir"})," as the default directory for storing savepoints in the Flink configuration file ",(0,i.jsx)(n.strong,{children:"flink-conf.yml"}),". When a savepoint is triggered, the savepoint is stored in this default directory and you do not need to specify a directory ."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"state.savepoints.dir: [file:// or hdfs://]/home/user/savepoints_dir\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Resubmit the Flink job with the preceding savepoint specified."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"./flink run -c com.starrocks.connector.flink.tools.ExecuteSQL -s savepoints_dir/savepoints-xxxxxxxx flink-connector-starrocks-xxxx.jar -f flink-create.all.sql \n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:r},n)}}}]);