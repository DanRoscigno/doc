"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52647],{88414:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=s(85893),a=s(11151);const l={displayed_sidebar:"Chinese31"},i="SHOW DATA",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_DATA",title:"SHOW DATA",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_DATA.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DATA",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATA",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-manipulation/SHOW_DATA.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SHOW CREATE VIEW",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW"},next:{title:"SHOW DATABASES",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf",id:"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf",level:3},{value:"\u67e5\u770b\u67d0\u4e2a\u8868\u7684\u6570\u636e\u91cf",id:"\u67e5\u770b\u67d0\u4e2a\u8868\u7684\u6570\u636e\u91cf",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",a:"a",h3:"h3"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-data",children:"SHOW DATA"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u4ee5\u53ca\u7edf\u8ba1\u884c\u6570\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW DATA [FROM <db_name>[.<table_name>]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u6307\u5b9a FROM \u5b50\u53e5\uff0c\u5219\u5c55\u793a\u5f53\u524d db \u4e0b\u7ec6\u5206\u5230\u5404\u4e2a table \u7684\u6570\u636e\u91cf\u548c\u526f\u672c\u6570\u91cf\u3002\u5176\u4e2d\u6570\u636e\u91cf\u4e3a\u6240\u6709\u526f\u672c\u7684\u603b\u6570\u636e\u91cf\u3002\u800c\u526f\u672c\u6570\u91cf\u4e3a\u8868\u7684\u6240\u6709\u5206\u533a\u4ee5\u53ca\u6240\u6709\u7269\u5316\u89c6\u56fe\u7684\u526f\u672c\u6570\u91cf\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6307\u5b9a FROM \u5b50\u53e5\uff0c\u5219\u5c55\u793a table \u4e0b\u7ec6\u5206\u5230\u5404\u4e2a\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u548c\u7edf\u8ba1\u884c\u6570\u3002\u5176\u4e2d\u6570\u636e\u91cf\u4e3a\u6240\u6709\u526f\u672c\u7684\u603b\u6570\u636e\u91cf\u3002\u526f\u672c\u6570\u91cf\u4e3a\u5bf9\u5e94\u7269\u5316\u89c6\u56fe\u7684\u6240\u6709\u5206\u533a\u7684\u526f\u672c\u6570\u91cf\u3002\u7edf\u8ba1\u884c\u6570\u4e3a\u5bf9\u5e94\u7269\u5316\u89c6\u56fe\u7684\u6240\u6709\u5206\u533a\u7edf\u8ba1\u884c\u6570\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7edf\u8ba1\u884c\u6570\u65f6\uff0c\u4ee5\u591a\u4e2a\u526f\u672c\u4e2d\uff0c\u884c\u6570\u6700\u5927\u7684\u90a3\u4e2a\u526f\u672c\u4e3a\u51c6\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7ed3\u679c\u96c6\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"Total"})," \u884c\u8868\u793a\u6c47\u603b\u884c\u3002",(0,t.jsx)(n.code,{children:"Quota"})," \u884c\u8868\u793a\u5f53\u524d\u6570\u636e\u5e93\u8bbe\u7f6e\u7684\u914d\u989d\u3002",(0,t.jsx)(n.code,{children:"Left"})," \u884c\u8868\u793a\u5269\u4f59\u914d\u989d\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u67e5\u770b\u5404\u4e2a Partition \u7684\u5927\u5c0f\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"show partitions"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf",children:"\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u8868\u7684\u6570\u636e\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u5404\u4e2a table \u7684\u6570\u636e\u91cf\uff0c\u526f\u672c\u6570\u91cf\uff0c\u6c47\u603b\u6570\u636e\u91cf\u548c\u6c47\u603b\u526f\u672c\u6570\u91cf\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW DATA;\n\n+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u67d0\u4e2a\u8868\u7684\u6570\u636e\u91cf",children:"\u67e5\u770b\u67d0\u4e2a\u8868\u7684\u6570\u636e\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u5c55\u793a\u6307\u5b9a db \u7684\u4e0b\u6307\u5b9a\u8868\u7684\u7ec6\u5206\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u548c\u7edf\u8ba1\u884c\u6570"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW DATA FROM example_db.test;\n\n+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var t=s(67294);const a=t.createContext({});function l(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:l(e),t.createElement(a.Provider,{value:r},n)}}}]);