"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77029],{16527:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(85893),i=s(11151);const r={},l="INSTALL PLUGIN",c={id:"sql-reference/sql-statements/Administration/INSTALL_PLUGIN",title:"INSTALL PLUGIN",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.0/sql-reference/sql-statements/Administration/INSTALL_PLUGIN.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",permalink:"/doc/zh/3.0/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/INSTALL_PLUGIN.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"EXPLAIN",permalink:"/doc/zh/3.0/sql-reference/sql-statements/Administration/EXPLAIN"},next:{title:"KILL",permalink:"/doc/zh/3.0/sql-reference/sql-statements/Administration/KILL"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"install-plugin",children:"INSTALL PLUGIN"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM [source] [PROPERTIES ("key"="value", ...)]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"source \u652f\u6301\u4e09\u79cd\u7c7b\u578b\uff1a"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"1. \u6307\u5411\u4e00\u4e2a zip \u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\u3002\n2. \u6307\u5411\u4e00\u4e2a\u63d2\u4ef6\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002\n3. \u6307\u5411\u4e00\u4e2a http \u6216 https \u534f\u8bae\u7684 zip \u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84\u3002\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"PROPERTIES\uff1a"})}),"\n",(0,t.jsx)(n.p,{children:"\u652f\u6301\u8bbe\u7f6e\u63d2\u4ef6\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\u8bbe\u7f6e zip \u6587\u4ef6\u7684 md5sum \u7684\u503c\u7b49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u4e00\u4e2a\u672c\u5730 zip \u6587\u4ef6\u63d2\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/starrocks/auditdemo.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5b89\u88c5\u4e00\u4e2a\u672c\u5730\u76ee\u5f55\u4e2d\u7684\u63d2\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "/home/users/starrocks/auditdemo/";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u4e00\u4e2a\u63d2\u4ef6\uff0c\u540c\u65f6\u8bbe\u7f6e\u4e86 zip \u6587\u4ef6\u7684 md5sum \u7684\u503c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSTALL PLUGIN FROM "http://mywebsite.com/plugin.zip" PROPERTIES("md5sum" = "73877f6029216f4314d712086a146570");\n'})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(i.Provider,{value:c},n)}}}]);