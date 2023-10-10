"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38795],{70249:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=n(85893),r=n(11151);const i={},l="KILL",c={id:"sql-reference/sql-statements/Administration/KILL",title:"KILL",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/Administration/KILL.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/KILL",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/KILL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/KILL.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"INSTALL PLUGIN",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/INSTALL PLUGIN"},next:{title:"SET",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SET"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"kill",children:"KILL"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u7ec8\u6b62\u5f53\u524d\u96c6\u7fa4\u5185\u7684\u6b63\u5728\u6267\u884c\u7684\u6307\u5b9a\u8fde\u63a5\u6216\u8005\u67e5\u8be2\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"KILL [ CONNECTION | QUERY ] <processlist_id>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\u4fee\u9970\u7b26\uff1a",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"CONNECTION"}),(0,t.jsx)("li",{children:"QUERY"})]})]}),(0,t.jsx)(s.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"CONNECTION"})," \u4fee\u9970\u7b26\uff0cKILL \u8bed\u53e5\u9996\u5148\u7ec8\u6b62\u4e0e ",(0,t.jsx)(s.code,{children:"processlist_id"})," \u5173\u8054\u7684\u8fde\u63a5\u4e0b\u6b63\u5728\u6267\u884c\u7684\u8bed\u53e5\uff0c\u7136\u540e\u7ec8\u6b62\u8be5\u8fde\u63a5\u3002"]}),(0,t.jsxs)("li",{children:["\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"QUERY"})," \u4fee\u9970\u7b26\uff0cKILL \u8bed\u53e5\u4ec5\u7ec8\u6b62\u4e0e ",(0,t.jsx)(s.code,{children:"processlist_id"})," \u5173\u8054\u7684\u8fde\u63a5\u4e0b\u6b63\u5728\u6267\u884c\u7684\u8bed\u53e5\uff0c\u4e0d\u4f1a\u7ec8\u6b62\u8be5\u8fde\u63a5\u3002"]}),(0,t.jsxs)("li",{children:["\u5982\u4e0d\u6307\u5b9a\u4fee\u9970\u7b26\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,t.jsx)(s.code,{children:"CONNECTION"}),"\u3002"]})]})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"processlist_id"}),(0,t.jsxs)(s.td,{children:["\u9700\u8981\u7ec8\u6b62\u7684\u7ebf\u7a0b\u7684 ID\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(s.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20PROCESSLIST",children:"SHOW PROCESSLIST"})," \u83b7\u53d6\u6b63\u5728\u6267\u884c\u7684\u7ebf\u7a0b\u7684 ID\u3002"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:"mysql> SHOW FULL PROCESSLIST;\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n| Id   | User | Host                | Db     | Command | ConnectionStartTime | Time | State | Info                  | IsPending |\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n|   20 | root | xxx.xx.xxx.xx:xxxxx | sr_hub | Query   | 2023-01-05 16:30:19 |    0 | OK    | show full processlist | false     |\n+------+------+---------------------+--------+---------+---------------------+------+-------+-----------------------+-----------+\n1 row in set (0.01 sec)\n\nmysql> KILL 20;\nQuery OK, 0 rows affected (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:c},s)}}}]);