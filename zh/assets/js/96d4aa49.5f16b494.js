"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81958],{44043:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=n(85893),d=n(11151);const r={displayed_sidebar:"Chinese"},i="SHOW BACKUP",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",title:"SHOW BACKUP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW ALTER MATERIALIZED VIEW",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW"},next:{title:"SHOW CATALOGS",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS"}},c={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-backup",children:"SHOW BACKUP"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(s.p,{children:["\u67e5\u770b\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u5907\u4efd\u4efb\u52a1\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u89c1 ",(0,t.jsx)(s.a,{href:"/zh/docs/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"}),"\u3002"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(s.p,{children:"StarRocks \u4e2d\u4ec5\u4fdd\u5b58\u6700\u8fd1\u4e00\u6b21\u5907\u4efd\u4efb\u52a1\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW BACKUP [FROM <db_name>]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"db_name"}),(0,t.jsx)(s.td,{children:"\u5907\u4efd\u4efb\u52a1\u6240\u5c5e\u6570\u636e\u5e93\u540d\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8fd4\u56de"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"JobId"}),(0,t.jsx)(s.td,{children:"\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684 ID\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SnapshotName"}),(0,t.jsx)(s.td,{children:"\u7528\u6237\u6307\u5b9a\u7684\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u540d\u79f0\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DbName"}),(0,t.jsx)(s.td,{children:"\u5907\u4efd\u4f5c\u4e1a\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"State"}),(0,t.jsxs)(s.td,{children:["\u5907\u4efd\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"}),(0,t.jsx)("li",{children:"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\u3002"}),(0,t.jsx)("li",{children:"UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u7ed3\u675f\uff0c\u51c6\u5907\u4e0a\u4f20\u3002"}),(0,t.jsx)("li",{children:"UPLOADING\uff1a\u6b63\u5728\u4e0a\u4f20\u5feb\u7167\u3002"}),(0,t.jsx)("li",{children:"SAVE_META\uff1a\u6b63\u5728\u672c\u5730\u751f\u6210\u5143\u6570\u636e\u6587\u4ef6\u3002"}),(0,t.jsx)("li",{children:"UPLOAD_INFO\uff1a\u4e0a\u4f20\u5143\u6570\u636e\u6587\u4ef6\u548c\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"}),(0,t.jsx)("li",{children:"FINISHED\uff1a\u5907\u4efd\u5b8c\u6210\u3002"}),(0,t.jsx)("li",{children:"CANCELLED\uff1a\u5907\u4efd\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"})]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"BackupObjs"}),(0,t.jsx)(s.td,{children:"\u672c\u6b21\u5907\u4efd\u6d89\u53ca\u7684\u5bf9\u8c61\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CreateTime"}),(0,t.jsx)(s.td,{children:"\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SnapshotFinishedTime"}),(0,t.jsx)(s.td,{children:"\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"UploadFinishedTime"}),(0,t.jsx)(s.td,{children:"\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"FinishedTime"}),(0,t.jsx)(s.td,{children:"\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"UnfinishedTasks"}),(0,t.jsx)(s.td,{children:"\u5728 SNAPSHOTTING\uff0cUPLOADING \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u6bb5\uff0c\u672a\u5b8c\u6210\u5b50\u4efb\u52a1\u7684 Task ID\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Progress"}),(0,t.jsx)(s.td,{children:"\u5feb\u7167\u4e0a\u4f20\u4efb\u52a1\u8fdb\u5c55\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TaskErrMsg"}),(0,t.jsx)(s.td,{children:"\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Status"}),(0,t.jsx)(s.td,{children:"\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Timeout"}),(0,t.jsx)(s.td,{children:"\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u6570\u636e\u5e93 ",(0,t.jsx)(s.code,{children:"example_db"})," \u4e0b\u6700\u540e\u4e00\u6b21\u5907\u4efd\u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW BACKUP FROM example_db;\n"})})]})}const x=function(e={}){const{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>r});var t=n(67294);const d=t.createContext({});function r(e){const s=t.useContext(d);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(d.Provider,{value:l},s)}}}]);