"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79530],{59876:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>S,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese"},c="SET PASSWORD",i={id:"sql-reference/sql-statements/account-management/SET_PASSWORD",title:"SET PASSWORD",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/account-management/SET_PASSWORD.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_PASSWORD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/account-management/SET_PASSWORD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SET_PASSWORD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"REVOKE",permalink:"/zh/docs/2.1/sql-reference/sql-statements/account-management/REVOKE"},next:{title:"SET PROPERTY",permalink:"/zh/docs/2.1/sql-reference/sql-statements/account-management/SET_PROPERTY"}},l={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-password",children:"SET PASSWORD"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD [FOR user_identity] =\n[PASSWORD('plain password')]|['hashed password']\n"})}),"\n",(0,t.jsx)(n.p,{children:"SET PASSWORD \u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u7528\u6237\u7684\u767b\u5f55\u5bc6\u7801\u3002\u5982\u679c [FOR user_identity] \u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"\u6ce8\u610f\u8fd9\u91cc\u7684 user_identity \u5fc5\u987b\u5b8c\u5168\u5339\u914d\u5728\u4f7f\u7528 CREATE USER \u521b\u5efa\u7528\u6237\u65f6\u6307\u5b9a\u7684 user_identity\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u7528\u6237\u4e0d\u5b58\u5728\u3002\u5982\u679c\u4e0d\u6307\u5b9a user_identity\uff0c\u5219\u5f53\u524d\u7528\u6237\u4e3a 'username'@'ip'\uff0c\u8fd9\u4e2a\u5f53\u524d\u7528\u6237\uff0c\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\u4efb\u4f55 user_identity\u3002\u53ef\u4ee5\u901a\u8fc7 SHOW GRANTS \u67e5\u770b\u5f53\u524d\u7528\u6237\u3002\n"})}),"\n",(0,t.jsx)(n.p,{children:"PASSWORD() \u65b9\u5f0f\u8f93\u5165\u7684\u662f\u660e\u6587\u5bc6\u7801; \u800c\u76f4\u63a5\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u4f20\u9012\u7684\u662f\u5df2\u52a0\u5bc6\u7684\u5bc6\u7801\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u5bc6\u7801\uff0c\u9700\u8981\u5177\u6709\u7ba1\u7406\u5458\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD = PASSWORD('123456')\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4fee\u6539\u6307\u5b9a\u7528\u6237\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456')\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"SET, PASSWORD"})]})}const S=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:a(e),t.createElement(r.Provider,{value:i},n)}}}]);