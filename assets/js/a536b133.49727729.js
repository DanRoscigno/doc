"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75228],{24741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(85893),d=n(11151);const i={displayed_sidebar:"English"},a="date_add",r={id:"sql-reference/sql-functions/date-time-functions/date_add",title:"date_add",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/date-time-functions/date_add.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_add",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/date_add",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/date_add.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"curtime,current_time",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/curtime"},next:{title:"date_format",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/date_format"}},c={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date_add",children:"date_add"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"INT DATE_ADD(DATETIME date,INTERVAL expr type)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add a specified time interval to the date."}),"\n",(0,s.jsx)(t.p,{children:"The date parameter is a valid data expression. ."}),"\n",(0,s.jsx)(t.p,{children:"The expr parameter is the time interval you want to add."}),"\n",(0,s.jsx)(t.p,{children:"The type parameter could be the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"DATE_ADD,DATE,ADD"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>i});var s=n(67294);const d=s.createContext({});function i(e){const t=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:i(e),s.createElement(d.Provider,{value:r},t)}}}]);