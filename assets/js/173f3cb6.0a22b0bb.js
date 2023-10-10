"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79601],{12246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=t(85893),i=t(11151);const a={},r="SHOW TRANSACTION",l={id:"sql-reference/sql-statements/data-manipulation/SHOW TRANSACTION",title:"SHOW TRANSACTION",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW TRANSACTION.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW TRANSACTION",permalink:"/docs/sql-reference/sql-statements/data-manipulation/SHOW TRANSACTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW TRANSACTION.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW TABLET",permalink:"/docs/sql-reference/sql-statements/data-manipulation/SHOW TABLET"},next:{title:"SPARK LOAD",permalink:"/docs/sql-reference/sql-statements/data-manipulation/SPARK LOAD"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-transaction",children:"SHOW TRANSACTION"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This syntax is used to view the transaction details of the specified transaction id."}),"\n",(0,s.jsx)(n.p,{children:"Syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION\n[FROM <db_name>]\nWHERE id = transaction_id\n"})}),"\n",(0,s.jsx)(n.p,{children:"Examples of returned results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"TransactionId: 4005\nLabel: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\nCoordinator: FE: 10.74.167.16\nTransactionStatus: VISIBLE\nLoadJobSourceType: INSERT_STREAMING\nPrepareTime: 2020-01-09 14:59:07\nCommitTime: 2020-01-09 14:59:09\nFinishTime: 2020-01-09 14:59:09\nReason:\nErrorReplicasCount: 0\nListenerId: -1\nTimeoutMs: 300000\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TransactionId: transaction id"}),"\n",(0,s.jsx)(n.li,{children:"Label: import the label corresponding to the task"}),"\n",(0,s.jsx)(n.li,{children:"Coordinator: the node responsible for transaction coordination"}),"\n",(0,s.jsx)(n.li,{children:"TransactionStatus: transaction status"}),"\n",(0,s.jsx)(n.li,{children:"PREPARE: preparation stage"}),"\n",(0,s.jsx)(n.li,{children:"COMMITTED: the transaction succeeded, but the data is not visible"}),"\n",(0,s.jsx)(n.li,{children:"VISIBLE: the transaction is successful and the data is visible"}),"\n",(0,s.jsx)(n.li,{children:"ABORTED: transaction failed"}),"\n",(0,s.jsx)(n.li,{children:"LoadJobSourceType: type of import task."}),"\n",(0,s.jsx)(n.li,{children:"PrepareTime: transaction start time"}),"\n",(0,s.jsx)(n.li,{children:"CommitTime: the time when the transaction is successfully committed"}),"\n",(0,s.jsx)(n.li,{children:"FinishTime: the time when the data is visible"}),"\n",(0,s.jsx)(n.li,{children:"Reason: error message"}),"\n",(0,s.jsx)(n.li,{children:"ErrorReplicasCount: number of replicas with errors"}),"\n",(0,s.jsx)(n.li,{children:"ListenerId: id of the related import job"}),"\n",(0,s.jsx)(n.li,{children:"TimeoutMs: transaction timeout, in milliseconds"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To view a transaction with id 4005:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the specified dB, view the transaction with id 4005:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION FROM db WHERE ID=4005;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:l},n)}}}]);