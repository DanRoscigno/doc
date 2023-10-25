"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50916],{74068:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(85893),a=t(11151);const i={displayed_sidebar:"Chinese"},r="SHOW PARTITIONS",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",title:"SHOW PARTITIONS",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_LOAD"},next:{title:"SHOW PROPERTY",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_PROPERTY"}},d={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-partitions",children:"SHOW PARTITIONS"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5206\u533a\u4fe1\u606f"}),"\n",(0,s.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"\u652f\u6301PartitionId,PartitionName,State,Buckets,ReplicationNum,LastConsistencyCheckTime\u7b49\u5217\u7684\u8fc7\u6ee4\n\u8be5\u8bed\u6cd5\u53ea\u652f\u6301OLAP\u8868\uff0cES\u8868\u548cHIVE\u8868\u8bf7\u4f7f\u7528 SHOW PROC '/dbs/db_id/table_id/partitions'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"1.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6240\u6709\u5206\u533a\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM example_db.table_name;\n"})}),"\n",(0,s.jsx)(n.p,{children:"2.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6307\u5b9a\u5206\u533a\u7684\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'})}),"\n",(0,s.jsx)(n.p,{children:"3.\u5c55\u793a\u6307\u5b9adb\u4e0b\u6307\u5b9a\u8868\u7684\u6700\u65b0\u5206\u533a\u7684\u4fe1\u606f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"SHOW,PARTITIONS"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var s=t(67294);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(a.Provider,{value:l},n)}}}]);