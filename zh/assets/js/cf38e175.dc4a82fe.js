"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[777],{41085:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=s(85893),l=s(11151);const t={displayed_sidebar:"Chinese"},i="SHOW LOAD",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_LOAD",title:"SHOW LOAD",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/SHOW_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_LOAD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW EXPORT",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT"},next:{title:"SHOW PARTITIONS",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS"}},d={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"show-load",children:"SHOW LOAD"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u6307\u5b9a\u7684\u5bfc\u5165\u4efb\u52a1\u7684\u6267\u884c\u60c5\u51b5"}),"\n",(0,a.jsx)(n.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD\n[FROM db_name]\n[\nWHERE\n[LABEL [ = "your_label" | LIKE "label_matcher"]]\n[STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. \u5982\u679c\u4e0d\u6307\u5b9a db_name\uff0c\u4f7f\u7528\u5f53\u524d\u9ed8\u8ba4db\n2. \u5982\u679c\u4f7f\u7528 LABEL LIKE\uff0c\u5219\u4f1a\u5339\u914d\u5bfc\u5165\u4efb\u52a1\u7684 label \u5305\u542b label_matcher \u7684\u5bfc\u5165\u4efb\u52a1\n3. \u5982\u679c\u4f7f\u7528 LABEL = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 label\n4. \u5982\u679c\u6307\u5b9a\u4e86 STATE\uff0c\u5219\u5339\u914d LOAD \u72b6\u6001\n5. \u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f\n6. \u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a\n7. \u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cfoffset\u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002\n8. \u5982\u679c\u662f\u4f7f\u7528 broker load\uff0c\u5219 URL \u5217\u4e2d\u7684\u8fde\u63a5\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\uff1a\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW LOAD WARNINGS ON 'url'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5c55\u793a\u9ed8\u8ba4 db \u7684\u6240\u6709\u5bfc\u5165\u4efb\u52a1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW LOAD;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0clabel \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "2014_01_02"\uff0c\u5c55\u793a\u6700\u8001\u768410\u4e2a'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1\uff0c\u6307\u5b9a label \u4e3a "load_example_db_20140102" \uff0cstate \u4e3a "loading", \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5c55\u793a\u6307\u5b9a db \u7684\u5bfc\u5165\u4efb\u52a1 \u5e76\u6309 LoadStartTime \u964d\u5e8f\u6392\u5e8f,\u5e76\u4ece\u504f\u79fb\u91cf5\u5f00\u59cb\u663e\u793a10\u6761\u67e5\u8be2\u7ed3\u679c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5c0f\u6279\u91cf\u5bfc\u5165\u662f\u67e5\u770b\u5bfc\u5165\u72b6\u6001\u7684\u547d\u4ee4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl --location-trusted -u {user}:{passwd} \\\n    http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"SHOW,LOAD"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>t});var a=s(67294);const l=a.createContext({});function t(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:t(e),a.createElement(l.Provider,{value:r},n)}}}]);