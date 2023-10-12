"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28680],{35447:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese31"},l="ALTER VIEW",c={id:"sql-reference/sql-statements/data-definition/ALTER_VIEW",title:"ALTER VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_VIEW",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"ALTER TABLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE"},next:{title:"ANALYZE TABLE",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/ANALYZE_TABLE"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-view",children:"ALTER VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u903b\u8f91\u89c6\u56fe\u7684\u5b9a\u4e49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u903b\u8f91\u89c6\u56fe\u4e2d\u7684\u6570\u636e\u4e0d\u4f1a\u5b58\u50a8\u5728\u7269\u7406\u4ecb\u8d28\u4e0a\uff0c\u5728\u67e5\u8be2\u65f6\uff0c\u903b\u8f91\u89c6\u56fe\u5c06\u4f5c\u4e3a\u8bed\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\uff0c\u56e0\u6b64\uff0c\u4fee\u6539\u903b\u8f91\u89c6\u56fe\u7684\u5b9a\u4e49\u7b49\u4ef7\u4e8e\u4fee\u6539 query_stmt\u3002"}),"\n",(0,t.jsx)(n.li,{children:"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4fee\u6539example_db\u4e0a\u7684\u903b\u8f91\u89c6\u56feexample_view\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\n    c1 COMMENT "column 1",\n    c2 COMMENT "column 2",\n    c3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) \nFROM example_table\nGROUP BY k1, k2;\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);