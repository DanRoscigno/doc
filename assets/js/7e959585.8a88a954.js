"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42322],{94123:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(85893),s=n(11151);const o={displayed_sidebar:"English"},i="Load data by using Stream Load transaction interface",r={id:"loading/Stream_Load_transaction_interface",title:"Load data by using Stream Load transaction interface",description:"StarRocks provides a Stream Load transaction interface to implement two-phase commit (2PC) of transactions that are run to stream data from external systems such as Apache Flink\xae and Apache Kafka\xae. The Stream Load transaction interface helps improve the performance of highly concurrent stream loads. You can optionally run stream load jobs by using the Stream Load transaction interface.",source:"@site/versioned_docs/version-2.3/loading/Stream_Load_transaction_interface.md",sourceDirName:"loading",slug:"/loading/Stream_Load_transaction_interface",permalink:"/docs/2.3/loading/Stream_Load_transaction_interface",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/Stream_Load_transaction_interface.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Load data from a local file system or a streaming data source using HTTP PUT",permalink:"/docs/2.3/loading/StreamLoad"},next:{title:"Strict mode",permalink:"/docs/2.3/loading/load_concept/strict_mode"}},c={},d=[{value:"Capabilities",id:"capabilities",level:2},{value:"Transaction deduplication",id:"transaction-deduplication",level:3},{value:"Transaction rollback",id:"transaction-rollback",level:3},{value:"Transaction timeout management",id:"transaction-timeout-management",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Limits",id:"limits",level:2},{value:"Basic operations",id:"basic-operations",level:2},{value:"Start a transaction",id:"start-a-transaction",level:3},{value:"Send data",id:"send-data",level:3},{value:"Commit a transaction",id:"commit-a-transaction",level:3},{value:"Roll back a transaction",id:"roll-back-a-transaction",level:3}];function l(a){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.ah)(),a.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"load-data-by-using-stream-load-transaction-interface",children:"Load data by using Stream Load transaction interface"}),"\n",(0,t.jsx)(e.p,{children:"StarRocks provides a Stream Load transaction interface to implement two-phase commit (2PC) of transactions that are run to stream data from external systems such as Apache Flink\xae and Apache Kafka\xae. The Stream Load transaction interface helps improve the performance of highly concurrent stream loads. You can optionally run stream load jobs by using the Stream Load transaction interface."}),"\n",(0,t.jsx)(e.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(e.h3,{id:"transaction-deduplication",children:"Transaction deduplication"}),"\n",(0,t.jsx)(e.p,{children:"The Stream Load transaction interface carries over the labeling mechanism of StarRocks. You can bind a unique label to each transaction to achieve at-most-once guarantees for transactions."}),"\n",(0,t.jsx)(e.h3,{id:"transaction-rollback",children:"Transaction rollback"}),"\n",(0,t.jsxs)(e.p,{children:["If data writes within a transaction fail, the transaction automatically rolls back. You can also call the ",(0,t.jsx)(e.code,{children:"rollback"})," operation to roll back the transaction."]}),"\n",(0,t.jsx)(e.h3,{id:"transaction-timeout-management",children:"Transaction timeout management"}),"\n",(0,t.jsxs)(e.p,{children:["You can use the ",(0,t.jsx)(e.code,{children:"stream_load_default_timeout_second"})," parameter in the configuration file of each frontend (FE) to specify a default transaction timeout period for that FE."]}),"\n",(0,t.jsxs)(e.p,{children:["When you create a transaction, you can use the ",(0,t.jsx)(e.code,{children:"timeout"})," field in the HTTP request header to specify a timeout period for the transaction."]}),"\n",(0,t.jsxs)(e.p,{children:["When you create a transaction, you can also use the ",(0,t.jsx)(e.code,{children:"idle_transaction_timeout"})," field in the HTTP request header to specify a timeout period within which the transaction can stay idle. If no data is written within the timeout period, the transaction automatically rolls back."]}),"\n",(0,t.jsx)(e.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsx)(e.p,{children:"The Stream Load transaction interface brings the following benefits:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Reduced memory usage"}),"\nYou can use the Stream Load transaction interface to send data and commit transactions as separate operations. As such, you no longer need to cache a complete batch of data on your client before you commit your transaction. Instead, you can keep receiving upstream data while sending each group of received data separately, and then commit your transaction at a proper time to load all received data as a single batch. This way, memory usage on your client is reduced. Memory usage reduction is especially significant when you run a load job exactly once to load data from Apache Flink\xae."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Improved load performance"}),"\nWhen you invoke a program to run a stream load job, the Stream Load transaction interface allows you to send multiple small files at a time and then commit your transaction. This way, fewer data versions are generated, and load performance is improved."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"limits",children:"Limits"}),"\n",(0,t.jsx)(e.p,{children:"The Stream Load transaction interface supports only single-table transactions. Multi-table transactions are under development."}),"\n",(0,t.jsx)(e.h2,{id:"basic-operations",children:"Basic operations"}),"\n",(0,t.jsx)(e.p,{children:"The Stream Load transaction interface supports only the HTTP protocol. You can use the transaction interface to perform the following operations:"}),"\n",(0,t.jsx)(e.h3,{id:"start-a-transaction",children:"Start a transaction"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-PowerShell",children:'# Start a transaction.\ncurl -H "label:${label}"\n    -XPUT http://fe_host:http_port/api/{db}/transaction/begin\n# The transaction is successfully started.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Success",\n    "Message": "OK",\n    "BeginTxnTimeMs": 173\n}\n\n# The transaction is bound to duplicate labels.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Label Already Exist",\n    "Message": ""\n}\n\n# The transaction cannot be started due to other errors.\n{\n    "Status": "Fail",\n    "Message": ""\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"send-data",children:"Send data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-PowerShell",children:'# You can send data multiple times.\n# Send data.\ncurl -H "label:${label}" \n    -T /path/to/data.csv\n    -XPUT http://fe_host:http_port/api/{db}/transaction/{table}/stream_load\n \n# The data is successfully sent.   \n{\n    "TxnId": 1,\n    "Seq": 0,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 5265644,\n    "NumberLoadedRows": 5265644,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 10737418067,\n    "LoadTimeMs": 418778,\n    "StreamLoadPutTimeMs": 68,\n    "ReceivedDataTimeMs": 38964,\n}\n\n# The transaction is unknown.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Transcation Not Exist",\n    "Message": ""\n}\n\n# The transaction is in an invalid state.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Transcation State Invalid",\n    "Message": ""\n}\n\n# Data cannot be sent in the transaction due to other errors.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Fail",\n    "Message": ""\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"commit-a-transaction",children:"Commit a transaction"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-PowerShell",children:'# Commit a transaction.\ncurl -H "label:${label}"\n    -XPUT http://fe_host:http_port/api/{db}/transaction/commit\n# The transaction is successfully committed.  \n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 5265644,\n    "NumberLoadedRows": 5265644,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 10737418067,\n    "LoadTimeMs": 418778,\n    "StreamLoadPutTimeMs": 68,\n    "ReceivedDataTimeMs": 38964,\n    "WriteDataTimeMs": 417851\n    "CommitAndPublishTimeMs": 1393\n}\n\n# The transaction is successfully committed.   \n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Success",\n    "Message": "Transaction already commited",\n}\n\n# The transaction cannot be found.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Transcation Not Exist",\n    "Message": ""\n}\n\n# The commit of the transaction times out.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Commit Timeout",\n    "Message": "",\n}\n\n# The publishing times out.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Publish Timeout",\n    "Message": "",\n    "CommitAndPublishTimeMs": 1393\n}\n\n# The transaction cannot be committed due to other errors.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Fail",\n    "Message": ""\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"roll-back-a-transaction",children:"Roll back a transaction"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-PowerShell",children:'# Abort a transaction.\ncurl -H "label:${label}"\n    -XPUT http://fe_host:http_port/api/{db}/transaction/rollback\n    \n# The transaction is successfully aborted.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Success",\n    "Message": "OK"\n}\n\n# The transaction cannot be found.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Transcation Not Exist",\n    "Message": ""\n}\n\n# The transaction cannot be aborted due to other errors.\n{\n    "TxnId": 1,\n    "Label": "a25eca8b-7b48-4c87-9ea7-0cbdd913e77d",\n    "Status": "Fail",\n    "Message": ""\n}\n'})})]})}const u=function(a={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),a.components);return e?(0,t.jsx)(e,Object.assign({},a,{children:(0,t.jsx)(l,a)})):l(a)}},11151:(a,e,n)=>{n.d(e,{Zo:()=>r,ah:()=>o});var t=n(67294);const s=t.createContext({});function o(a){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof a?a(e):{...e,...a}),[e,a])}const i={};function r({components:a,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof a?a({}):a||i:o(a),t.createElement(s.Provider,{value:r},e)}}}]);