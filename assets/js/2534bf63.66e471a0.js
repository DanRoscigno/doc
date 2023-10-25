"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79088],{78987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var s=t(85893),a=t(11151);const d={displayed_sidebar:"English"},i="add_months",r={id:"sql-reference/sql-functions/date-time-functions/add_months",title:"add_months",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/date-time-functions/add_months.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/add_months",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/add_months",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/add_months.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"to_base64",permalink:"/docs/2.3/sql-reference/sql-functions/crytographic-functions/to_base64"},next:{title:"adddate,days_add",permalink:"/docs/2.3/sql-reference/sql-functions/date-time-functions/adddate"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add_months",children:"add_months"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Adds an integer months to a given date (DATE, DATETIME). The integer can be positive or negative."}),"\n",(0,s.jsxs)(n.p,{children:["The resulting day component remains the same as that specified in ",(0,s.jsx)(n.code,{children:"date"}),", unless the resulting month\nhas fewer days than the day component of the given date, in which case the day will be the last day of\nthe resulting month."]}),"\n",(0,s.jsx)(n.p,{children:"Returns NULL if an invalid date or a NULL argument is passed in."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"ADD_MONTH(date, months)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"date"}),": It must be a valid date or datetime expression."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"months"}),": the months you want to add. It must be of the INT type."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a DATETIME value. If the date does not exist, for example, ",(0,s.jsx)(n.code,{children:"2020-02-30"}),", NULL is returned."]}),"\n",(0,s.jsx)(n.p,{children:"If the date is a DATE value, it will be converted into a DATETIME value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"> select add_months('2022-01-01', 2);\n+-----------------------------+\n| add_months('2022-01-01', 2) |\n+-----------------------------+\n| 2022-03-01 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-01', -5);\n+------------------------------+\n| add_months('2022-01-01', -5) |\n+------------------------------+\n| 2021-08-01 00:00:00          |\n+------------------------------+\n\n> select add_months('2022-01-31', 2);\n+-----------------------------+\n| add_months('2022-01-31', 2) |\n+-----------------------------+\n| 2022-03-31 00:00:00         |\n+-----------------------------+\n\n> select add_months('2022-01-31 17:01:02', 2);\n+--------------------------------------+\n| add_months('2022-01-31 17:01:02', 2) |\n+--------------------------------------+\n| 2022-03-31 17:01:02                  |\n+--------------------------------------+\n\n> select add_months('2022-01-31 17:01:02', -2);\n+---------------------------------------+\n| add_months('2022-01-31 17:01:02', -2) |\n+---------------------------------------+\n| 2021-11-30 17:01:02                   |\n+---------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>d});var s=t(67294);const a=s.createContext({});function d(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||i:d(e),s.createElement(a.Provider,{value:r},n)}}}]);