"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69774],{98304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(85893),d=t(11151);const i={displayed_sidebar:"Chinese"},c="datediff",r={id:"sql-reference/sql-functions/date-time-functions/datediff",title:"datediff",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/date-time-functions/datediff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/datediff",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/datediff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/datediff.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"date_trunc",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/date_trunc"},next:{title:"day",permalink:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/day"}},a={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function f(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"datediff",children:"datediff"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u4e24\u4e2a\u65e5\u671f\u7684\u5dee\u503c\uff0c\u7ed3\u679c\u7cbe\u786e\u5230\u5929\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr1"})," \u548c ",(0,s.jsx)(n.code,{children:"expr2"})," \u53c2\u6570\u5fc5\u987b\u662f\u5408\u6cd5\u7684\u65e5\u671f\u6216\u65e5\u671f/\u65f6\u95f4\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u51fd\u6570\u4e0e ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-functions/date-time-functions/days_diff",children:"days_diff"})," \u7684\u533a\u522b\u662f\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u51fd\u6570\u540d"}),(0,s.jsx)(n.th,{children:"\u884c\u4e3a"}),(0,s.jsx)(n.th,{children:"\u4f8b\u5b50"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"datediff"}),(0,s.jsx)(n.td,{children:"\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u5929\u7ea7"}),(0,s.jsx)(n.td,{children:"'2020-12-25 23:00:00' \u4e0e '2020-12-24 23:00:01' \u7684 datediff \u4e3a 1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"days_diff"}),(0,s.jsx)(n.td,{children:"\u5bf9\u65e5\u671f\u7684\u5224\u65ad\u7cbe\u786e\u5230\u79d2\u7ea7\uff0c\u5e76\u5411\u4e0b\u53d6\u6574\u6570\u3002"}),(0,s.jsx)(n.td,{children:"'2020-12-25 23:00:00' \u4e0e '2020-12-24 23:00:01' \u7684 days_diff \u4e3a 0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT DATEDIFF(DATETIME expr1,DATETIME expr2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                                 1 |\n+-----------------------------------------------------------------------------------+\n\nselect datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                               -31 |\n+-----------------------------------------------------------------------------------+\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(f,e)})):f(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const d=s.createContext({});function i(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:i(e),s.createElement(d.Provider,{value:r},n)}}}]);