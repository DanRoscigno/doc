"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37401],{68293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese31"},i="SET PASSWORD",a={id:"sql-reference/sql-statements/account-management/SET_PASSWORD",title:"SET PASSWORD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/account-management/SET_PASSWORD.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/SET_PASSWORD",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_PASSWORD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/SET_PASSWORD.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SET DEFAULT ROLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE"},next:{title:"SET PROPERTY",permalink:"/doc/zh/docs/sql-reference/sql-statements/account-management/SET_PROPERTY"}},d={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"set-password",children:"SET PASSWORD"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"SET PASSWORD \u547d\u4ee4\u53ef\u4ee5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u7528\u6237\u7684\u767b\u5f55\u5bc6\u7801\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})," \u6765\u4fee\u6539\u7528\u6237\u5bc6\u7801\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u91cd\u7f6e\u81ea\u5df1\u7684\u5bc6\u7801\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u53ea\u6709 ",(0,t.jsx)(n.code,{children:"user_admin"})," \u89d2\u8272\u624d\u53ef\u4ee5\u4fee\u6539\u5176\u4ed6\u7528\u6237\u7684\u5bc6\u7801\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["root \u7528\u6237\u7684\u5bc6\u7801\u4ec5 root \u7528\u6237\u81ea\u8eab\u53ef\u4ee5\u91cd\u7f6e\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/administration/User_privilege#%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7",children:"\u7ba1\u7406\u7528\u6237\u6743\u9650 - \u91cd\u7f6e\u4e22\u5931\u7684 root \u5bc6\u7801"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD [FOR user_identity] =\n[PASSWORD('plain password')]|['hashed password']\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"[FOR user_identity]"})," \u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u90a3\u4e48\u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u6b64\u5904\u7684 ",(0,t.jsx)(n.code,{children:"user_identity"})," \u8bed\u6cd5\u4e0e ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})," \u7ae0\u8282\u4e2d\u7684\u76f8\u540c\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"CREATE USER"})," \u521b\u5efa\u8fc7\u7684 ",(0,t.jsx)(n.code,{children:"user_identity"}),"\u3002\u5426\u5219\u4f1a\u62a5\u9519\u7528\u6237\u4e0d\u5b58\u5728\u3002\u5982\u679c\u4e0d\u6307\u5b9a ",(0,t.jsx)(n.code,{children:"user_identity"}),"\uff0c\u5219\u5f53\u524d\u7528\u6237\u4e3a ",(0,t.jsx)(n.code,{children:"'username'@'ip'"}),"\uff0c\u8fd9\u4e2a\u5f53\u524d\u7528\u6237\uff0c\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\u4efb\u4f55 ",(0,t.jsx)(n.code,{children:"user_identity"}),"\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"SHOW GRANTS;"})," \u67e5\u770b\u5f53\u524d\u7528\u6237\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PASSWORD()"})," \u65b9\u5f0f\u8f93\u5165\u7684\u662f\u660e\u6587\u5bc6\u7801; \u800c\u76f4\u63a5\u4f7f\u7528\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u4f20\u9012\u7684\u662f\u5df2\u52a0\u5bc6\u7684\u5bc6\u7801\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a \u4fee\u6539\u5f53\u524d\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD = PASSWORD('123456');\nSET PASSWORD = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a \u4fee\u6539\u6307\u5b9a\u7528\u6237\u7684\u5bc6\u7801\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SET PASSWORD FOR 'jack'@'192.%' = PASSWORD('123456');\nSET PASSWORD FOR 'jack'@['domain'] = '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:a},n)}}}]);