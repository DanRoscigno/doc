"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46075],{76689:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=s(85893),a=s(11151);const l={displayed_sidebar:"Chinese31"},i="RECOVER",d={id:"sql-reference/sql-statements/data-definition/RECOVER",title:"RECOVER",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/RECOVER.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/RECOVER",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/RECOVER",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/RECOVER.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"KILL ANALYZE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/KILL_ANALYZE"},next:{title:"REFRESH EXTERNAL TABLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE"}},r={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u6062\u590d database",id:"\u6062\u590d-database",level:3},{value:"\u6062\u590d table",id:"\u6062\u590d-table",level:3},{value:"\u6062\u590d partition",id:"\u6062\u590d-partition",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"recover",children:"RECOVER"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u6062\u590d\u4e4b\u524d\u5220\u9664\u7684 database\u3001table \u6216\u8005 partition\u3002\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",children:"TRUNCATE TABLE"})," \u547d\u4ee4\u5220\u9664\u6570\u636e\u65e0\u6cd5\u6062\u590d\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709 default_catalog \u7684 CREATE DATABASE \u6743\u9650\u624d\u53ef\u4ee5\u6062\u590d\u6570\u636e\u5e93\uff1b\u540c\u65f6\u9700\u8981\u62e5\u6709\u5bf9\u5e94\u6570\u636e\u5e93\u7684 CREATE TABLE \u548c\u5bf9\u5e94\u8868\u7684 DROP \u6743\u9650\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u6062\u590d-database",children:"\u6062\u590d database"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE <db_name>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6062\u590d-table",children:"\u6062\u590d table"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [db_name.]table_name;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6062\u590d-partition",children:"\u6062\u590d partition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u8be5\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e4b\u524d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\uff08\u53ef\u901a\u8fc7 fe.conf \u4e2d ",(0,t.jsx)(n.code,{children:"catalog_trash_expire_second"})," \u53c2\u6570\u914d\u7f6e\uff09"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5220\u9664\u5143\u4fe1\u606f\u540e\u65b0\u5efa\u7acb\u4e86\u540c\u540d\u540c\u7c7b\u578b\u7684\u5143\u4fe1\u606f\uff0c\u5219\u4e4b\u524d\u5220\u9664\u7684\u5143\u4fe1\u606f\u4e0d\u80fd\u88ab\u6062\u590d\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6062\u590d\u540d\u4e3a example_db \u7684 database\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6062\u590d\u540d\u4e3a example_tbl \u7684 table\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6062\u590d\u8868 example_tbl \u4e2d\u540d\u4e3a p1 \u7684 partition\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var t=s(67294);const a=t.createContext({});function l(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:l(e),t.createElement(a.Provider,{value:d},n)}}}]);