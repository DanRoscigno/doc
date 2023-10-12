"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39731],{34957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var s=t(85893),i=t(11151);const d={displayed_sidebar:"documentation"},l="week",r={id:"sql-reference/sql-functions/date-time-functions/week",title:"week",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/week.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/week",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/week",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/week.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"utc_timestamp",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/utc_timestamp"},next:{title:"week_iso",permalink:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/week_iso"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",del:"del",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"week",children:"week"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the week number for a given date. This function works in the same way as the WEEK function in MySQL."}),"\n",(0,s.jsx)(n.p,{children:"This function is supported from v2.3."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT WEEK(DATETIME|DATE date, INT mode)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Date"}),": The supported data types are DATETIME and DATE."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Mode"}),": optional. The supported data type is INT. This parameter is used to specify the logic for calculating the week number, that is, whether the week starts on Sunday or Monday, and whether the return value is in the range of 0",(0,s.jsx)(n.del,{children:"53 or 1"}),"53. Value range: 0~7. Default value: ",(0,s.jsx)(n.code,{children:"0"}),". If this parameter is not specified, mode ",(0,s.jsx)(n.code,{children:"0"})," is used by default. The following table describes how this parameter works."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Mode"}),(0,s.jsx)(n.th,{align:"left",children:"First day of week"}),(0,s.jsx)(n.th,{align:"left",children:"Range"}),(0,s.jsx)(n.th,{align:"left",children:"Week 1 is the first week \u2026"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"0"}),(0,s.jsx)(n.td,{align:"left",children:"Sunday"}),(0,s.jsx)(n.td,{align:"left",children:"0-53"}),(0,s.jsx)(n.td,{align:"left",children:"with a Sunday in this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"1"}),(0,s.jsx)(n.td,{align:"left",children:"Monday"}),(0,s.jsx)(n.td,{align:"left",children:"0-53"}),(0,s.jsx)(n.td,{align:"left",children:"with 4 or more days this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"2"}),(0,s.jsx)(n.td,{align:"left",children:"Sunday"}),(0,s.jsx)(n.td,{align:"left",children:"1-53"}),(0,s.jsx)(n.td,{align:"left",children:"with a Sunday in this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"3"}),(0,s.jsx)(n.td,{align:"left",children:"Monday"}),(0,s.jsx)(n.td,{align:"left",children:"1-53"}),(0,s.jsx)(n.td,{align:"left",children:"with 4 or more days this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"4"}),(0,s.jsx)(n.td,{align:"left",children:"Sunday"}),(0,s.jsx)(n.td,{align:"left",children:"0-53"}),(0,s.jsx)(n.td,{align:"left",children:"with 4 or more days this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"5"}),(0,s.jsx)(n.td,{align:"left",children:"Monday"}),(0,s.jsx)(n.td,{align:"left",children:"0-53"}),(0,s.jsx)(n.td,{align:"left",children:"with a Monday in this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"6"}),(0,s.jsx)(n.td,{align:"left",children:"Sunday"}),(0,s.jsx)(n.td,{align:"left",children:"1-53"}),(0,s.jsx)(n.td,{align:"left",children:"with 4 or more days this year"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"7"}),(0,s.jsx)(n.td,{align:"left",children:"Monday"}),(0,s.jsx)(n.td,{align:"left",children:"1-53"}),(0,s.jsx)(n.td,{align:"left",children:"with a Monday in this year"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a value of the INT type. Value range: 0~53. The specific range is determined based on the ",(0,s.jsx)(n.code,{children:"mode"})," parameter. ",(0,s.jsx)(n.code,{children:"NULL"})," is returned if the value of ",(0,s.jsx)(n.code,{children:"date"})," is invalid or the input value is empty."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Calculate the week number for ",(0,s.jsx)(n.code,{children:"2007-01-01"}),". ",(0,s.jsx)(n.code,{children:"2007-01-01"})," is Monday on the calendar."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Mode"})," is set to ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"0"})," is returned. The week starts on Sunday. ",(0,s.jsx)(n.code,{children:"2007-01-01"})," is Monday and cannot be week 1. Therefore, ",(0,s.jsx)(n.code,{children:"0"})," is returned."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> SELECT WEEK('2007-01-01', 0);\n+-----------------------+\n| week('2007-01-01', 0) |\n+-----------------------+\n|                     0 |\n+-----------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Mode"})," is set to ",(0,s.jsx)(n.code,{children:"1"})," and ",(0,s.jsx)(n.code,{children:"1"})," is returned. The week starts on Monday and ",(0,s.jsx)(n.code,{children:"2007-01-01"})," is Monday."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> SELECT WEEK('2007-01-01', 1);\n+-----------------------+\n| week('2007-01-01', 1) |\n+-----------------------+\n|                     1 |\n+-----------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Mode"})," is set to ",(0,s.jsx)(n.code,{children:"2"})," and ",(0,s.jsx)(n.code,{children:"53"})," is returned. The week starts on Sunday. However, ",(0,s.jsx)(n.code,{children:"2007-01-01"})," is Monday and the value range is 1~53. Therefore, ",(0,s.jsx)(n.code,{children:"53"})," is returned, indicating that this is the last week of the previous year."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> SELECT WEEK('2007-01-01', 2);\n+-----------------------+\n| week('2007-01-01', 2) |\n+-----------------------+\n|                    53 |\n+-----------------------+\n1 row in set (0.01 sec)\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>d});var s=t(67294);const i=s.createContext({});function d(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:d(e),s.createElement(i.Provider,{value:r},n)}}}]);