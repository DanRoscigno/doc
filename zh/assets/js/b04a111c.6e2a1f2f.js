"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27471],{81243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=t(85893),i=t(11151);const c={displayed_sidebar:"Chinese31"},a="unix_timestamp",r={id:"sql-reference/sql-functions/date-time-functions/unix_timestamp",title:"unix_timestamp",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/unix_timestamp.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/unix_timestamp",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/unix_timestamp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/unix_timestamp.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"to_tera_timestamp",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/to_tera_timestamp"},next:{title:"utc_time",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/utc_time"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"unix_timestamp",children:"unix_timestamp"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06 DATE \u6216 DATETIME \u7c7b\u578b\u7684\u503c\u8f6c\u5316\u4e3a UNIX \u65f6\u95f4\u6233\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u672a\u6307\u5b9a\u53c2\u6570\uff0c\u5219\u5c06\u5f53\u524d\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a UNIX \u65f6\u95f4\u6233\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u5728 1970-01-01 00:00:00 \u4e4b\u524d\u6216 2038-01-19 11:14:07 \u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de 0\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"fmt"})," \u7684\u683c\u5f0f\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"})," \u51fd\u6570\u7684\u683c\u5f0f\u8bf4\u660e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/3.0/administration/timezone",children:"\u8bbe\u7f6e\u65f6\u533a"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT UNIX_TIMESTAMP()\nINT UNIX_TIMESTAMP(DATETIME date)\nINT UNIX_TIMESTAMP(DATETIME date, STRING fmt)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u5fc5\u987b\u662f DATE \u6216 DATETIME \u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nselect unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nselect unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nselect unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n|unix_timestamp('2007-11-30 10:30%3A19')|\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nselect unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||a:c(e),s.createElement(i.Provider,{value:r},n)}}}]);