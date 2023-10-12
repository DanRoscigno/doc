"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42451],{12388:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var n=t(85893),r=t(11151);const c={displayed_sidebar:"Chinese31"},i="str2date",d={id:"sql-reference/sql-functions/date-time-functions/str2date",title:"str2date",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/str2date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/str2date",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/str2date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/str2date.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"seconds_sub",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/seconds_sub"},next:{title:"str_to_date",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/str_to_date"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"str2date",children:"str2date"}),"\n",(0,n.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsxs)(s.p,{children:["\u6309\u7167 ",(0,n.jsx)(s.code,{children:"format"})," \u6307\u5b9a\u7684\u683c\u5f0f\u5c06 ",(0,n.jsx)(s.code,{children:"str"})," \u8f6c\u6362\u4e3a DATE \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f6c\u6362\u7ed3\u679c\u4e0d\u5bf9\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u8be5\u51fd\u6570\u4e0e ",(0,n.jsx)(s.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/str_to_date",children:"str_to_date"})," \u51fd\u6570\u529f\u80fd\u76f8\u540c\uff0c\u53ea\u662f\u8fd4\u56de\u503c\u6570\u636e\u7c7b\u578b\u4e0d\u540c\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Haskell",children:"DATE str2date(VARCHAR str, VARCHAR format);\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"str"}),": \u8981\u8f6c\u6362\u7684\u65f6\u95f4\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"format"}),": \u6307\u5b9a\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u652f\u6301\u7684\u65f6\u95f4\u683c\u5f0f\u4e0e ",(0,n.jsx)(s.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"})," \u51fd\u6570\u4e00\u81f4\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,n.jsx)(s.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE\uff0c\u7cbe\u786e\u5230\u5e74-\u6708-\u65e5\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"select str2date('2010-11-30 23:59:59', '%Y-%m-%d %H:%i:%s');\n+------------------------------------------------------+\n| str2date('2010-11-30 23:59:59', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------------+\n| 2010-11-30                                           |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>d,ah:()=>c});var n=t(67294);const r=n.createContext({});function c(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(r.Provider,{value:d},s)}}}]);