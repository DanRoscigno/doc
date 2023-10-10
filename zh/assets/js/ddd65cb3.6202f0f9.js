"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[7914],{4524:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>A,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),r=s(11151);const i={},l="ADMIN SHOW REPLICA STATUS",c={id:"sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS",title:"ADMIN SHOW REPLICA STATUS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA STATUS.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"ADMIN SHOW REPLICA DISTRIBUTION",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ADMIN SHOW REPLICA DISTRIBUTION"},next:{title:"ALTER RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/ALTER RESOURCE GROUP"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"admin-show-replica-status",children:"ADMIN SHOW REPLICA STATUS"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u72b6\u6001\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[WHERE STATUS [!]= "replica_status"]\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"replica_status:\nOK:             replica \u5904\u4e8e\u5065\u5eb7\u72b6\u6001\nDEAD:           replica \u6240\u5728 Backend \u4e0d\u53ef\u7528\nVERSION_ERROR:  replica \u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\nSCHEMA_ERROR:   replica \u7684 schema hash \u4e0d\u6b63\u786e\nMISSING:        replica \u4e0d\u5b58\u5728\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u8868\u5168\u90e8\u7684\u526f\u672c\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ADMIN SHOW REPLICA STATUS FROM db1.tbl1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u8868\u67d0\u4e2a\u5206\u533a\u72b6\u6001\u4e3a VERSION_ERROR \u7684\u526f\u672c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u8868\u6240\u6709\u72b6\u6001\u4e0d\u5065\u5eb7\u7684\u526f\u672c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n'})}),"\n"]}),"\n"]})]})}const A=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:c},n)}}}]);