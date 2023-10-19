"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3890],{56651:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese"},l="ADMIN SET REPLICA STATUS",d={id:"sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",title:"ADMIN SET REPLICA STATUS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",permalink:"/zh/docs/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ADMIN SET CONFIG",permalink:"/zh/docs/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG"},next:{title:"ADMIN SHOW CONFIG",permalink:"/zh/docs/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG"}},a={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"admin-set-replica-status",children:"ADMIN SET REPLICA STATUS"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u526f\u672c\u7684\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u7528\u4e8e\u624b\u52a8\u5c06\u67d0\u4e9b\u526f\u672c\u72b6\u6001\u8bbe\u7f6e\u4e3a bad \u6216 ok\uff0c\u4ece\u800c\u4f7f\u5f97\u7cfb\u7edf\u80fd\u591f\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u526f\u672c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS\nPROPERTIES ("key" = "value", ...)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tablet_id"}),"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Tablet Id\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"backend_id"}),"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Backend Id\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"status"}),'\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u72b6\u6001\u3002\u5f53\u524d\u4ec5\u652f\u6301 "bad" \u6216 "ok"\u3002']}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6307\u5b9a\u7684\u526f\u672c\u4e0d\u5b58\u5728\uff0c\u6216\u72b6\u6001\u5df2\u7ecf\u662f bad\uff0c\u5219\u4f1a\u88ab\u5ffd\u7565\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"}),"\n\u8bbe\u7f6e\u4e3a bad \u72b6\u6001\u7684\u526f\u672c\u53ef\u80fd\u7acb\u523b\u88ab\u5220\u9664\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a bad\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a ok\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:d},n)}}}]);