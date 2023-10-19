"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73028],{10974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=t(85893),s=t(11151);const a={displayed_sidebar:"English"},i="quarter",l={id:"sql-reference/sql-functions/date-time-functions/quarter",title:"quarter",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/quarter.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/quarter",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/quarter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/quarter.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"now, current_timestamp, localtime, localtimestamp",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/now"},next:{title:"second",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/second"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quarter",children:"quarter"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the quarter part of a date, in the range of 1 to 4."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"INT quarter(DATETIME|DATE date);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"date"}),": It must be of the DATETIME or DATE type."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns an INT value."}),"\n",(0,r.jsx)(n.p,{children:"NULL is returned in any of the following scenarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The date is not a valid DATETIME or DATE value."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The input is empty."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The date does not exist, for example, 2022-02-29."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Return the quarter part of a DATETIME value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SELECT QUARTER(\"2022-10-09 15:59:33\");\n+--------------------------------+\n| quarter('2022-10-09 15:59:33') |\n+--------------------------------+\n|                              4 |\n+--------------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Return the quarter part of a DATE value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SELECT QUARTER(\"2022-10-09\");\n+-----------------------+\n| quarter('2022-10-09') |\n+-----------------------+\n|                     4 |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: Return the quarter part that corresponds to the current time or date."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"SELECT QUARTER(NOW());\n+----------------+\n| quarter(now()) |\n+----------------+\n|              4 |\n+----------------+\n\nSELECT QUARTER(CURDATE());\n+--------------------+\n| quartr(curdate()) |\n+--------------------+\n|                  4 |\n+--------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var r=t(67294);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:a(e),r.createElement(s.Provider,{value:l},n)}}}]);