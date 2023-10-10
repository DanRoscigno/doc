"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[78340],{3089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),d=t(11151);const i={},r="datediff",c={id:"sql-reference/sql-functions/date-time-functions/datediff",title:"datediff",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/datediff.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/datediff",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/datediff",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/datediff.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"date_trunc",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_trunc"},next:{title:"day",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/day"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function f(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"datediff",children:"datediff"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Calculates the difference between two date values (",(0,s.jsx)(n.code,{children:"expr1 - expr2"}),") and returns a result in days. ",(0,s.jsx)(n.code,{children:"expr1"})," and ",(0,s.jsx)(n.code,{children:"expr2"})," are valid DATE or DATETIME expressions."]}),"\n",(0,s.jsx)(n.p,{children:"Note: Only the date parts of the values are used in the calculation."}),"\n",(0,s.jsxs)(n.p,{children:["Difference between datediff and ",(0,s.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/date-time-functions/days_diff",children:"days_diff"}),":"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function"}),(0,s.jsx)(n.th,{children:"Behavior"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"datediff"}),(0,s.jsx)(n.td,{children:"Accurate to the day"}),(0,s.jsx)(n.td,{children:"The difference between '2020-12-25 23:00:00' and '2020-12-24 23:00:01' is 1."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"days_diff"}),(0,s.jsx)(n.td,{children:"Accurate to the second and rounded down to the nearest lower integer"}),(0,s.jsx)(n.td,{children:"The difference between '2020-12-25 23:00:00' and '2020-12-24 23:00:01' is 0."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The difference between datediff and ",(0,s.jsx)(n.a,{href:"./date_diff.md",children:"date_diff"})," lies in that date_diff supports the ",(0,s.jsx)(n.code,{children:"unit"})," parameter, which can return the difference between two date values in the specified unit."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT DATEDIFF(DATETIME expr1,DATETIME expr2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2007-12-31 23:59:59' AS DATETIME), CAST('2007-12-30' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                                 1 |\n+-----------------------------------------------------------------------------------+\n\nMySQL > select datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME));\n+-----------------------------------------------------------------------------------+\n| datediff(CAST('2010-11-30 23:59:59' AS DATETIME), CAST('2010-12-31' AS DATETIME)) |\n+-----------------------------------------------------------------------------------+\n|                                                                               -31 |\n+-----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"./date_diff.md",children:"date_diff"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(f,e)})):f(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const d=s.createContext({});function i(e){const n=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(d.Provider,{value:c},n)}}}]);