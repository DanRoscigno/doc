"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50811],{59141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(85893),r=n(11151);const a={displayed_sidebar:"documentation"},i="to_date",o={id:"sql-reference/sql-functions/date-time-functions/to_tera_date",title:"to_date",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/to_tera_date.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/to_tera_date",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/to_tera_date",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/to_tera_date.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"to_iso8601",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/to_iso8601"},next:{title:"to_tera_timestamp",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/to_tera_timestamp"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"to_date",children:"to_date"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a VARCHAR value into a date from an input format."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"\nConverts a VARCHAR value into a date from an input format.\n\nDATE to_tera_date(VARCHAR str, VARCHAR format)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:"Converts a VARCHAR value into a date from an input format."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"str"}),": the time expression you want to convert. It must be of the VARCHAR type."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"format"}),": the DateTime format as below:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"[ \\r \\n \\t - / , . ;] :\tPunctuation characters are ignored\ndd\t                  : Day of month (1-31)\nhh\t                  : Hour of day (1-12)\nhh24                  : Hour of the day (0-23)\nmi                    : Minute (0-59)\nmm                    : Month (01-12)\nss                    : Second (0-59)\nyyyy                  : 4-digit year\nyy                    : 2-digit year\nam                    : Meridian indicator\npm                    : Meridian indicator\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"Converts a VARCHAR value into a date from an input format.\n\nmysql> select to_date(\"1988/04/08\",\"yyyy/mm/dd\");\n+-------------------------------------+\n| to_date('1988/04/08', 'yyyy/mm/dd') |\n+-------------------------------------+\n| 1988-04-08                          |\n+-------------------------------------+\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"TO_TERA_DATE"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var s=n(67294);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:o},t)}}}]);