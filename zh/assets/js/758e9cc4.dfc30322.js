"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18944],{26241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=t(85893),i=t(11151);const c={displayed_sidebar:"Chinese"},d="timestampdiff",r={id:"sql-reference/sql-functions/date-time-functions/timestampdiff",title:"timestampdiff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/date-time-functions/timestampdiff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/timestampdiff",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/timestampdiff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/timestampdiff.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"timestampadd",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/timestampadd"},next:{title:"to_date",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/to_date"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de",(0,s.jsx)(n.code,{children:"datetime_expr2"}),"\u548c",(0,s.jsx)(n.code,{children:"datetime_expr1"}),"\u7684\u5dee\u503c\uff0c\u5176\u4e2d",(0,s.jsx)(n.code,{children:"datetime_expr1"}),"\u548c",(0,s.jsx)(n.code,{children:"datetime_expr2"}),"\u662f\u65e5\u671f\u6216\u65e5\u671f\u65f6\u95f4\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7ed3\u679c(\u6574\u6570)\u7684\u5355\u4f4d\u7531",(0,s.jsx)(n.code,{children:"unit"}),"\u53c2\u6570\u7ed9\u51fa\u3002",(0,s.jsx)(n.code,{children:"interval"}),"\u7684\u5355\u4f4d\u7531",(0,s.jsx)(n.code,{children:"unit"}),"\u53c2\u6570\u7ed9\u51fa\uff0c\u5e94\u8be5\u662f\u4e0b\u5217\u503c\u4e4b\u4e00:\nSECOND\uff0cMINUTE\uff0cHOUR\uff0cDAY\uff0cWEEK\uff0cMONTH\uff0cYEAR\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT TIMESTAMPDIFF(unit, DATETIME datetime_expr1, DATETIME datetime_expr2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"\nSELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nSELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\nSELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||d:c(e),s.createElement(i.Provider,{value:r},n)}}}]);