"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35990],{13043:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},l="EXECUTE AS",a={id:"sql-reference/sql-statements/account-management/EXECUTE_AS",title:"EXECUTE AS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/account-management/EXECUTE_AS.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/EXECUTE_AS",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/EXECUTE_AS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/EXECUTE_AS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"DROP USER",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_USER"},next:{title:"GRANT",permalink:"/doc/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"execute-as",children:"EXECUTE AS"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f97\u5230\u4ee5\u6307\u5b9a\u7528\u6237\u8eab\u4efd\u6267\u884c\u64cd\u4f5c\u7684\u6743\u9650 (IMPERSONATE) \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 EXECUTE AS \u8bed\u53e5\u5c06\u5f53\u524d\u4f1a\u8bdd\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u5207\u6362\u5230\u8be5\u6307\u5b9a\u7528\u6237\u3002\u8be5\u529f\u80fd\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"EXECUTE AS user WITH NO REVERT\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user"}),"\uff1a\u8be5\u6307\u5b9a\u7528\u6237\u5fc5\u987b\u4e3a\u5df2\u5b58\u5728\u7684\u7528\u6237\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5f53\u524d\u767b\u5f55\u7528\u6237\uff08\u5373\u8c03\u7528 EXECUTE AS \u8bed\u53e5\u7684\u7528\u6237\uff09\u5fc5\u987b\u6709 IMPERSONATE \u5230\u6307\u5b9a\u7528\u6237\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.li,{children:"EXECUTE AS \u8bed\u53e5\u5fc5\u987b\u5305\u62ec WITH NO REVERT \u5b50\u53e5\uff0c\u8868\u793a\u5728\u5f53\u524d\u4f1a\u8bdd\u7ed3\u675f\u524d\uff0c\u5f53\u524d\u4f1a\u8bdd\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4e0d\u80fd\u5207\u6362\u4e3a\u539f\u767b\u5f55\u7528\u6237\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06\u4f1a\u8bdd\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u5207\u6362\u5230\u7528\u6237 ",(0,t.jsx)(n.code,{children:"test2"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"EXECUTE AS test2 WITH NO REVERT;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8bed\u53e5\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"select current_user()"})," \u547d\u4ee4\u83b7\u53d6\u5f53\u524d\u7528\u6237\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-undefined",children:"select current_user();\n+-----------------------------+\n| CURRENT_USER()              |\n+-----------------------------+\n| 'default_cluster:test2'@'%' |\n+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(c.Provider,{value:a},n)}}}]);