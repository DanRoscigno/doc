"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97371],{68957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const l={displayed_sidebar:"Chinese"},r="ALTER VIEW",a={id:"sql-reference/sql-statements/data-definition/ALTER_VIEW",title:"ALTER VIEW",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_VIEW",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/ALTER_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/ALTER_VIEW.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER TABLE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/ALTER_TABLE"},next:{title:"BACKUP",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/BACKUP"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"example",id:"example",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-view",children:"ALTER VIEW"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2aview\u7684\u5b9a\u4e49\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt;\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u89c6\u56fe\u90fd\u662f\u903b\u8f91\u4e0a\u7684\uff0c\u5176\u4e2d\u7684\u6570\u636e\u4e0d\u4f1a\u5b58\u50a8\u5728\u7269\u7406\u4ecb\u8d28\u4e0a\uff0c\u5728\u67e5\u8be2\u65f6\u89c6\u56fe\u5c06\u4f5c\u4e3a\u8bed\u53e5\u4e2d\u7684\u5b50\u67e5\u8be2\uff0c\u56e0\u6b64\uff0c\u4fee\u6539\u89c6\u56fe\u7684\u5b9a\u4e49\u7b49\u4ef7\u4e8e\u4fee\u6539query_stmt\u3002"}),"\n",(0,s.jsx)(n.li,{children:"query_stmt \u4e3a\u4efb\u610f\u652f\u6301\u7684 SQL\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539example_db\u4e0a\u7684\u89c6\u56feexample_view\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\n    c1 COMMENT "column 1",\n    c2 COMMENT "column 2",\n    c3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) \nFROM example_table\nGROUP BY k1, k2;\n'})}),"\n"]}),"\n"]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>l});var s=t(67294);const i=s.createContext({});function l(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:l(e),s.createElement(i.Provider,{value:a},n)}}}]);