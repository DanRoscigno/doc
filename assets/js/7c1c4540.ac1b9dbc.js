"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56452],{23415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(85893),c=s(11151);const r={},l="CREATE ROLE",a={id:"sql-reference/sql-statements/account-management/CREATE_ROLE",title:"CREATE ROLE",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/account-management/CREATE_ROLE.md",sourceDirName:"sql-reference/sql-statements/account-management",slug:"/sql-reference/sql-statements/account-management/CREATE_ROLE",permalink:"/doc/zh/2.5/sql-reference/sql-statements/account-management/CREATE_ROLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/account-management/CREATE_ROLE.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"ALTER USER",permalink:"/doc/zh/2.5/sql-reference/sql-statements/account-management/ALTER_USER"},next:{title:"CREATE USER",permalink:"/doc/zh/2.5/sql-reference/sql-statements/account-management/CREATE_USER"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u591a\u64cd\u4f5c",id:"\u66f4\u591a\u64cd\u4f5c",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",ul:"ul",li:"li",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-role",children:"CREATE ROLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u89d2\u8272\u3002\u89d2\u8272\u521b\u5efa\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u6307\u5b9a\u6743\u9650\uff08\u6bd4\u5982\u6570\u636e\u5e93\u548c\u8868\u7684\u8bfb\u53d6\u6743\u9650\u548c\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7b49\uff09\u6388\u4e88\u8be5\u89d2\u8272\uff0c\u4e5f\u53ef\u4ee5\u5c06\u8be5\u89d2\u8272\u6388\u4e88\u67d0\u4e2a\u7528\u6237\u3002\u62e5\u6709\u8be5\u89d2\u8272\u7684\u7528\u6237\u5373\u62e5\u6709\u8be5\u89d2\u8272\u7684\u76f8\u5173\u6743\u9650\u3002\u6709\u5173\u6743\u9650\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u53ea\u6709\u62e5\u6709 ",(0,t.jsx)(n.code,{children:"GRANT_PRIV"})," \u6216 ",(0,t.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u89d2\u8272\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["StarRocks \u7684\u4e24\u4e2a\u7cfb\u7edf\u89d2\u8272 admin \u548c operator \u5747\u62e5\u6709 ",(0,t.jsx)(n.code,{children:"ADMIN_PRIV"})," \u6743\u9650\uff0c\u6240\u4ee5\u62e5\u6709\u8fd9\u4e24\u4e2a\u7cfb\u7edf\u89d2\u8272\u7684\u7528\u6237\u53ef\u4ee5\u521b\u5efa\u89d2\u8272\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE ROLE <role_name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"role_name"}),"\uff1a\u89d2\u8272\u540d\u79f0\uff0c\u547d\u540d\u8981\u6c42\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5fc5\u987b\u7531\u6570\u5b57(0-9)\u3001\u4e0b\u5212\u7ebf(_)\u6216\u5b57\u6bcd(a-z\u6216A-Z)\u7ec4\u6210\uff0c\u4e14\u53ea\u80fd\u4ee5\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u603b\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u4e2a\u5b57\u7b26\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u89d2\u8272\u540d\u79f0\u4e0d\u80fd\u4e0e StarRocks \u7684\u4e24\u4e2a\u7cfb\u7edf\u89d2\u8272 admin \u548c operator \u91cd\u590d\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u89d2\u8272 ",(0,t.jsx)(n.code,{children:"analyst"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE ROLE analyst;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u591a\u64cd\u4f5c",children:"\u66f4\u591a\u64cd\u4f5c"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u67e5\u770b\u89d2\u8272\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/account-management/SHOW_ROLES",children:"SHOW ROLES"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u5220\u9664\u89d2\u8272\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u521b\u5efa\u7528\u6237\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u8981\u5c06\u6307\u5b9a\u6743\u9650\u6388\u4e88\u8be5\u89d2\u8272\u6216\u5c06\u8be5\u89d2\u8272\u6388\u4e88\u67d0\u4e2a\u7528\u6237\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/2.5/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"}),"\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(c.Provider,{value:a},n)}}}]);