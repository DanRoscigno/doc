"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92682],{48686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(85893),l=t(11151);const a={displayed_sidebar:"Chinese"},i="CREATE TABLE LIKE",r={id:"sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",title:"CREATE TABLE LIKE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE TABLE AS SELECT",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT"},next:{title:"CREATE VIEW",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/CREATE_VIEW"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",a:"a"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-table-like",children:"CREATE TABLE LIKE"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u8868\u7ed3\u6784\u548c\u53e6\u4e00\u5f20\u8868\u5b8c\u5168\u76f8\u540c\u7684\u7a7a\u8868\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u590d\u5236\u7684\u8868\u7ed3\u6784\u5305\u62ec Column Defination\u3001Partitions\u3001Table Properties \u7b49\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u7528\u6237\u9700\u8981\u5bf9\u590d\u5236\u7684\u539f\u8868\u6709 ",(0,s.jsx)(n.code,{children:"SELECT"})," \u6743\u9650\uff0c\u6743\u9650\u63a7\u5236\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})," \u7ae0\u8282\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u590d\u5236 MySQL \u7b49\u5916\u8868\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 test1 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 test2 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c test1.table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 test1 \u5e93\u4e0b\u521b\u5efa\u4e00\u5f20\u8868\u7ed3\u6784\u548c MySQL \u5916\u8868 table1 \u76f8\u540c\u7684\u7a7a\u8868\uff0c\u8868\u540d\u4e3a table2\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1;\n"})}),"\n"]}),"\n"]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var s=t(67294);const l=s.createContext({});function a(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||i:a(e),s.createElement(l.Provider,{value:r},n)}}}]);