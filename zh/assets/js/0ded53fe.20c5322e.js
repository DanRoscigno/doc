"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66533],{60458:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese31"},l="SHOW VARIABLES",d={id:"sql-reference/sql-statements/Administration/SHOW_VARIABLES",title:"SHOW VARIABLES",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_VARIABLES",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/SHOW_VARIABLES.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SHOW TABLE STATUS",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_TABLE_STATUS"},next:{title:"UNINSTALL PLUGIN",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/Administration/UNINSTALL_PLUGIN"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-variables",children:"SHOW VARIABLES"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u7684\u7cfb\u7edf\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW [ GLOBAL | SESSION ] VARIABLES\n    [ LIKE <pattern> | WHERE <expr> ]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u4fee\u9970\u7b26\uff1a",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"GLOBAL"}),(0,t.jsx)("li",{children:"SESSION"})]})]}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"GLOBAL"})," \u4fee\u9970\u7b26\uff0c\u8be5\u8bed\u53e5\u663e\u793a\u5168\u5c40\u7cfb\u7edf\u53d8\u91cf\u503c\u3002\u5728\u751f\u6210\u65b0\u8fde\u63a5\u65f6\uff0cStarRocks \u81ea\u52a8\u521d\u59cb\u5316\u6240\u6709\u53d8\u91cf\u7684\u4f1a\u8bdd\u503c\u4f5c\u4e3a\u5168\u5c40\u503c\u3002\u5982\u679c\u53d8\u91cf\u6ca1\u6709\u5168\u5c40\u503c\uff0c\u5219\u4e0d\u663e\u793a\u4efb\u4f55\u503c\u3002"]}),(0,t.jsxs)("li",{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"SESSION"})," \u4fee\u9970\u7b26\uff0c\u8be5\u8bed\u53e5\u663e\u793a\u5bf9\u5f53\u524d\u8fde\u63a5\u6709\u6548\u7684\u7cfb\u7edf\u53d8\u91cf\u503c\u3002\u5982\u679c\u53d8\u91cf\u6ca1\u6709\u4f1a\u8bdd\u503c\uff0c\u5219\u663e\u793a\u5168\u5c40\u503c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"LOCAL"})," \u66ff\u4ee3 ",(0,t.jsx)(n.code,{children:"SESSION"}),"\u3002"]}),(0,t.jsxs)("li",{children:["\u5982\u4e0d\u6307\u5b9a\u4fee\u9970\u7b26\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,t.jsx)(n.code,{children:"SESSION"}),"\u3002"]})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pattern"}),(0,t.jsx)(n.td,{children:"\u7528\u4e8e\u5339\u914d\u53d8\u91cf\u540d\u7684 LIKE \u5b50\u53e5\u6a21\u5f0f\u3002\u60a8\u53ef\u4ee5\u5728\u5f53\u524d\u53c2\u6570\u4e2d\u4f7f\u7528 % \u901a\u914d\u7b26\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expr"}),(0,t.jsxs)(n.td,{children:["\u7528\u4e8e\u5339\u914d\u53d8\u91cf\u540d ",(0,t.jsx)(n.code,{children:"variable_name"})," \u6216\u53d8\u91cf\u503c ",(0,t.jsx)(n.code,{children:"value"})," \u7684 WHERE \u5b50\u53e5\u5339\u914d\u8868\u8fbe\u5f0f\u3002"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8fd4\u56de"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Variable_name"}),(0,t.jsx)(n.td,{children:"\u53d8\u91cf\u540d\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Value"}),(0,t.jsx)(n.td,{children:"\u53d8\u91cf\u503c\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7 LIKE \u5b50\u53e5\u7cbe\u786e\u5339\u914d\u53d8\u91cf\u540d\u663e\u793a\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW VARIABLES LIKE 'wait_timeout';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7 LIKE \u5b50\u53e5\u4e0e % \u901a\u914d\u7b26\u6a21\u7cca\u5339\u914d\u53d8\u91cf\u540d\u663e\u793a\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> SHOW VARIABLES LIKE '%imeou%';\n+------------------------------------+-------+\n| Variable_name                      | Value |\n+------------------------------------+-------+\n| interactive_timeout                | 3600  |\n| net_read_timeout                   | 60    |\n| net_write_timeout                  | 60    |\n| new_planner_optimize_timeout       | 3000  |\n| query_delivery_timeout             | 300   |\n| query_queue_pending_timeout_second | 300   |\n| query_timeout                      | 300   |\n| tx_visible_wait_timeout            | 10    |\n| wait_timeout                       | 28800 |\n+------------------------------------+-------+\n9 rows in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u901a\u8fc7 WHERE \u5b50\u53e5\u7cbe\u786e\u5339\u914d\u53d8\u91cf\u540d\u663e\u793a\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> show variables where variable_name = 'wait_timeout';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.17 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u901a\u8fc7 WHERE \u5b50\u53e5\u7cbe\u786e\u5339\u914d\u53d8\u91cf\u503c\u663e\u793a\u53d8\u91cf\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"mysql> show variables where value = '28800';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| wait_timeout  | 28800 |\n+---------------+-------+\n1 row in set (0.70 sec)\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:d},n)}}}]);