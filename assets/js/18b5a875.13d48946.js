"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45702],{45083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const o={},r="to_iso8601",c={id:"sql-reference/sql-functions/date-time-functions/to_iso8601",title:"to_iso8601",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/to_iso8601.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/to_iso8601",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/to_iso8601",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/to_iso8601.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"to_days",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/to_days"},next:{title:"to_date",permalink:"/doc/en/3.0/sql-reference/sql-functions/date-time-functions/to_tera_date"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"to_iso8601",children:"to_iso8601"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Convert a date into an ISO 8601 string."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR TO_ISO8601(DATETIME date)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"date"})," parameter must be a valid date or date expression."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select to_iso8601(date'2020-01-01');\n+--------------------------+\n| to_iso8601('2020-01-01') |\n+--------------------------+\n| 2020-01-01               |\n+--------------------------+\n\nmysql> select to_iso8601(datetime'2020-01-01 00:00:00.01');\n+------------------------------------------+\n| to_iso8601('2020-01-01 00:00:00.010000') |\n+------------------------------------------+\n| 2020-01-01T00:00:00.010000               |\n+------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"FORMAT"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(67294);const i=s.createContext({});function o(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:c},n)}}}]);