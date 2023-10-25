"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35081],{55421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(85893),s=n(11151);const r={displayed_sidebar:"Chinese"},d="timestampdiff",a={id:"sql-reference/sql-functions/date-time-functions/timestampdiff",title:"timestampdiff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-functions/date-time-functions/timestampdiff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampdiff",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/timestampdiff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/timestampdiff.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"timestampadd",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/timestampadd"},next:{title:"to_date",permalink:"/zh/docs/2.2/sql-reference/sql-functions/date-time-functions/to_date"}},c={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,i.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(t.p,{children:"\u8fd4\u56dedatetime_expr2\u2212datetime_expr1\uff0c\u5176\u4e2ddatetime_expr1\u548cdatetime_expr2\u662f\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u7ed3\u679c(\u6574\u6570)\u7684\u5355\u4f4d\u7531unit\u53c2\u6570\u7ed9\u51fa\u3002interval\u7684\u5355\u4f4d\u7531unit\u53c2\u6570\u7ed9\u51fa\uff0c\u5b83\u5e94\u8be5\u662f\u4e0b\u5217\u503c\u4e4b\u4e00:"}),"\n",(0,i.jsx)(t.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Haskell",children:"INT TIMESTAMPDIFF(unit, DATETIME datetime_expr1, DATETIME datetime_expr2)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plain",metastring:"text",children:"\nSELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nSELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\nSELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(t.p,{children:"TIMESTAMPDIFF"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var i=n(67294);const s=i.createContext({});function r(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||d:r(e),i.createElement(s.Provider,{value:a},t)}}}]);