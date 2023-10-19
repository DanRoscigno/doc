"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18242],{72397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(85893),a=n(11151);const r={displayed_sidebar:"Chinese"},d="PAUSE ROUTINE LOAD",i={id:"sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",title:"PAUSE ROUTINE LOAD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"GROUP BY",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/GROUP_BY"},next:{title:"REFRESH MATERIALIZED VIEW",permalink:"/zh/docs/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW"}},l={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pause-routine-load",children:"PAUSE ROUTINE LOAD"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(t.p,{children:["\u6682\u505c Routine Load \u5bfc\u5165\u4f5c\u4e1a\uff0c\u5bfc\u5165\u4f5c\u4e1a\u4f1a\u8fdb\u5165 PAUSED \u72b6\u6001\uff0c\u4f46\u662f\u672a\u7ed3\u675f\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,s.jsx)(t.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"})," \u8bed\u53e5\u91cd\u542f\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["Routine Load \u5bfc\u5165\u4f5c\u4e1a\u6682\u505c\u540e\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,s.jsx)(t.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"})," \u3001",(0,s.jsx)(t.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})," \u8bed\u53e5\u67e5\u770b\u548c\u4fee\u6539\u5df2\u6682\u505c\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"PAUSE ROUTINE LOAD FOR <db_name>.<job_name>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"db_name"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"\u5bfc\u5165\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"job_name"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"Routine Load \u5bfc\u5165\u4f5c\u4e1a\u540d\u79f0\u3002\u7531\u4e8e\u4e00\u5f20\u8868\u53ef\u80fd\u4f1a\u6709\u591a\u4e2a Routine Load\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5efa\u8bae\u60a8\u6839\u636e Kafka Topic \u7684\u540d\u79f0\u548c\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u7684\u5927\u81f4\u65f6\u95f4\u7b49\u4fe1\u606f\u6765\u7ed9\u5bfc\u5165\u4f5c\u4e1a\u547d\u540d\uff0c\u8fd9\u6837\u6709\u52a9\u4e8e\u533a\u5206\u540c\u4e00\u5f20\u8868\u4e0a\u7684\u4e0d\u540c\u5bfc\u5165\u4f5c\u4e1a\u3002\u540c\u4e00\u6570\u636e\u5e93\u5185\uff0c\u5bfc\u5165\u4f5c\u4e1a\u7684\u540d\u79f0\u5fc5\u987b\u552f\u4e00\u3002"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(t.p,{children:["\u6682\u505c",(0,s.jsx)(t.code,{children:"example_db"}),"\u6570\u636e\u5e93\u4e2d\u540d\u79f0\u4e3a ",(0,s.jsx)(t.code,{children:"example_tbl1_ordertest1"})," \u7684 Routine Load \u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"PAUSE ROUTINE LOAD FOR example_db.example_tbl1_ordertest1;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||d:r(e),s.createElement(a.Provider,{value:i},t)}}}]);