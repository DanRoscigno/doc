"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[74935],{19656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=t(85893),s=t(11151);const i={displayed_sidebar:"Chinese"},l="SHOW TABLET",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_TABLET",title:"SHOW TABLET",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_TABLET.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW TABLES",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_TABLES"},next:{title:"SHOW TRANSACTION",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION"}},d={},o=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"show-tablet",children:"SHOW TABLET"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u663e\u793a tablet \u76f8\u5173\u7684\u4fe1\u606f\uff08\u4ec5\u7ba1\u7406\u5458\u4f7f\u7528\uff09"}),"\n",(0,a.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW TABLET\n[FROM [db_name.]table_name | tablet_id] [partiton(partition_name_1, partition_name_1)]\n[where [version=1] [and backendid=10000] [and state="NORMAL|ROLLUP|CLONE|DECOMMISSION"]]\n[order by order_column]\n[limit [offset,]size]\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u73b0\u5728show tablet\u547d\u4ee4\u652f\u6301\u6309\u7167\u6309\u7167\u4ee5\u4e0b\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\uff1apartition, index name, version, backendid,\nstate\uff0c\u540c\u65f6\u652f\u6301\u6309\u7167\u4efb\u610f\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u4e14\u63d0\u4f9blimit\u9650\u5236\u8fd4\u56de\u6761\u6570\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u663e\u793a\u6307\u5b9a db \u7684\u4e0b\u6307\u5b9a\u8868\u6240\u6709 tablet \u4fe1\u606f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET FROM example_db.table_name;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:'// \u83b7\u53d6partition p1\u548cp2\u7684tablet\u4fe1\u606f\nSHOW TABLET FROM example_db.table_name partition(p1, p2);\n\n// \u83b7\u53d610\u4e2a\u7ed3\u679c\nSHOW TABLET FROM example_db.table_name limit 10;\n\n// \u4ece\u504f\u79fb5\u5f00\u59cb\u83b7\u53d610\u4e2a\u7ed3\u679c\nSHOW TABLET FROM example_db.table_name limit 5,10;\n\n// \u6309\u7167backendid/version/state\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\nSHOW TABLET FROM example_db.table_name where backendid=10000 and version=1 and state="NORMAL";\n\n// \u6309\u7167version\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\nSHOW TABLET FROM example_db.table_name where backendid=10000 order by version;\n\n// \u83b7\u53d6index\u540d\u5b57\u4e3at1_rollup\u7684tablet\u76f8\u5173\u4fe1\u606f\nSHOW TABLET FROM example_db.table_name where indexname="t1_rollup";\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u663e\u793a\u6307\u5b9a tablet id \u4e3a 10000 \u7684 tablet \u7684\u7236\u5c42\u7ea7 id \u4fe1\u606f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW TABLET 10000;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"SHOW,TABLET,LIMIT"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var a=t(67294);const s=a.createContext({});function i(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:i(e),a.createElement(s.Provider,{value:r},n)}}}]);