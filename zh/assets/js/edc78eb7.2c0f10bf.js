"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64440],{13265:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese31"},r="convert_tz",a={id:"sql-reference/sql-functions/date-time-functions/convert_tz",title:"convert_tz",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/convert_tz.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/convert_tz",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/convert_tz",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/convert_tz.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"adddate,days_add",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/adddate"},next:{title:"curdate,current_date",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/curdate"}},l={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"convert_tz",children:"convert_tz"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u7ed9\u5b9a\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u53e6\u4e00\u4e2a\u65f6\u533a\u7684\u65f6\u95f4\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/administration/timezone",children:"\u8bbe\u7f6e\u65f6\u533a"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME CONVERT_TZ(DATE|DATETIME dt, VARCHAR from_tz, VARCHAR to_tz)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dt"}),"\uff1a\u9700\u8981\u8f6c\u5316\u7684\u65f6\u95f4\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE \u548c DATETIME\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"from_tz"}),"\uff1a\u6e90\u65f6\u533a\u540d\u79f0\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\n\u65f6\u533a\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u683c\u5f0f\uff1a\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93\uff08Time Zone Database\uff0c\u6bd4\u5982 Asia/Shanghai\uff09\uff0c\u6216 UTC \u504f\u79fb\u91cf\uff08\u4f8b\u5982+08: 00\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"to_tz"}),"\uff1a\u76ee\u6807\u65f6\u533a\u540d\u79f0\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u683c\u5f0f\u540c\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"from_tz"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATETIME\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a DATE\uff0c\u9ed8\u8ba4\u57fa\u4e8e 00:00:00\u8fdb\u884c\u8f6c\u6362\u3002\u5982\u679c\u8f93\u5165\u503c\u7c7b\u578b\u4e0d\u5408\u6cd5\uff0c\u8fd4\u56de",(0,t.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u5404\u65f6\u533a\u5bf9\u5e94\u7684\u65f6\u533a\u4fe1\u606f\u6570\u636e\u5e93\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"\u65f6\u533a\u6570\u636e\u5e93"}),"\uff08\u6765\u6e90\uff1a\u7ef4\u57fa\u767e\u79d1\uff09\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5c06\u4e0a\u6d77\u65f6\u95f4\u8f6c\u5316\u4e3a\u6d1b\u6749\u77f6\u65f6\u95f4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"\nselect convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles');\n+---------------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', 'Asia/Shanghai', 'America/Los_Angeles') |\n+---------------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                       |\n+---------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u4e1c\u516b\u533a\u65f6\u95f4\u8f6c\u5316\u4e3a\u6d1b\u6749\u77f6\u65f6\u95f4\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles');\n+--------------------------------------------------------------------+\n| convert_tz('2019-08-01 13:21:03', '+08:00', 'America/Los_Angeles') |\n+--------------------------------------------------------------------+\n| 2019-07-31 22:21:03                                                |\n+--------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06 DATE \u7c7b\u578b\u7684\u65e5\u671f ",(0,t.jsx)(n.code,{children:"2019-08-01"})," \u8fdb\u884c\u8f6c\u5316\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select convert_tz('2019-08-01', 'Asia/Shanghai', 'America/Los_Angeles');\n+------------------------------------------------------------------+\n| convert_tz('2019-08-01', 'Asia/Shanghai', 'America/Los_Angeles') |\n+------------------------------------------------------------------+\n| 2019-07-31 09:00:00                                              |\n+------------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(i.Provider,{value:a},n)}}}]);