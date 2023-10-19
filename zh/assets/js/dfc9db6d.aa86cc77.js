"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17138],{25982:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=s(85893),t=s(11151);const l={displayed_sidebar:"Chinese"},a="SHOW TRANSACTION",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",title:"SHOW TRANSACTION",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW TABLET",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_TABLET"},next:{title:"SPARK LOAD",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SPARK_LOAD"}},d={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"show-transaction",children:"SHOW TRANSACTION"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u8bed\u6cd5\u7528\u4e8e\u67e5\u770b\u6307\u5b9a transaction id \u7684\u4e8b\u52a1\u8be6\u60c5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION\n[FROM <db_name>]\nWHERE id = <transaction_id>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"TransactionId: 4005\nLabel: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\nCoordinator: FE: 10.74.167.16\nTransactionStatus: VISIBLE\nLoadJobSourceType: INSERT_STREAMING\nPrepareTime: 2020-01-09 14:59:07\nCommitTime: 2020-01-09 14:59:09\nFinishTime: 2020-01-09 14:59:09\nReason:\nErrorReplicasCount: 0\nListenerId: -1\nTimeoutMs: 300000\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TransactionId\uff1a\u4e8b\u52a1 id"}),"\n",(0,i.jsx)(n.li,{children:"Label\uff1a\u5bfc\u5165\u4efb\u52a1\u5bf9\u5e94\u7684 label"}),"\n",(0,i.jsx)(n.li,{children:"Coordinator\uff1a\u8d1f\u8d23\u4e8b\u52a1\u534f\u8c03\u7684\u8282\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"TransactionStatus\uff1a\u4e8b\u52a1\u72b6\u6001"}),"\n",(0,i.jsx)(n.li,{children:"PREPARE\uff1a\u51c6\u5907\u9636\u6bb5"}),"\n",(0,i.jsx)(n.li,{children:"COMMITTED\uff1a\u4e8b\u52a1\u6210\u529f\uff0c\u4f46\u6570\u636e\u4e0d\u53ef\u89c1"}),"\n",(0,i.jsx)(n.li,{children:"VISIBLE\uff1a\u4e8b\u52a1\u6210\u529f\u4e14\u6570\u636e\u53ef\u89c1"}),"\n",(0,i.jsx)(n.li,{children:"ABORTED\uff1a\u4e8b\u52a1\u5931\u8d25"}),"\n",(0,i.jsx)(n.li,{children:"LoadJobSourceType\uff1a\u5bfc\u5165\u4efb\u52a1\u7684\u7c7b\u578b"}),"\n",(0,i.jsx)(n.li,{children:"PrepareTime\uff1a\u4e8b\u52a1\u5f00\u59cb\u65f6\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"CommitTime\uff1a\u4e8b\u52a1\u63d0\u4ea4\u6210\u529f\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"FinishTime\uff1a\u6570\u636e\u53ef\u89c1\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(n.li,{children:"Reason\uff1a\u9519\u8bef\u4fe1\u606f"}),"\n",(0,i.jsx)(n.li,{children:"ErrorReplicasCount\uff1a\u6709\u9519\u8bef\u7684\u526f\u672c\u6570"}),"\n",(0,i.jsx)(n.li,{children:"ListenerId\uff1a\u76f8\u5173\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684 id"}),"\n",(0,i.jsx)(n.li,{children:"TimeoutMs\uff1a\u4e8b\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6307\u5b9a db \u4e2d\uff0c\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION FROM db WHERE ID=4005;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(67294);const t=i.createContext({});function l(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:l(e),i.createElement(t.Provider,{value:r},n)}}}]);