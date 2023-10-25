"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58792],{47194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(85893),s=t(11151);const r={displayed_sidebar:"English"},o="from_unixtime",d={id:"sql-reference/sql-functions/date-time-functions/from_unixtime",title:"from_unixtime",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/date-time-functions/from_unixtime.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/from_unixtime",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/from_unixtime",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/from_unixtime.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"from_days",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/from_days"},next:{title:"hour",permalink:"/docs/2.1/sql-reference/sql-functions/date-time-functions/hour"}},c={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function m(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",div:"div",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"from_unixtime",children:"from_unixtime"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME FROM_UNIXTIME(INT unix_timestamp[, VARCHAR string_format])"})}),"\n",(0,i.jsx)(n.p,{children:"onvert the unix timestamp to the corresponding time format. The format returned should be specified by string_format."}),"\n",(0,i.jsxs)(n.p,{children:["The default format is yyyy-MM-dd HH:mm",(0,i.jsx)(n.div,{}),". It also supports the formats in date_format."]}),"\n",(0,i.jsx)(n.p,{children:"It inputs integers and returns strings."}),"\n",(0,i.jsx)(n.p,{children:"Currently, string_format supports the following formats:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"%Y\uff1aYear  e.g.\uff1a2014\uff0c1900\n%m\uff1aMonth   e.g.\uff1a12\uff0c09\n%d\uff1aDay  e.g.\uff1a11\uff0c01\n%H\uff1aHour  e.g.\uff1a23\uff0c01\uff0c12\n%i\uff1aMinute  e.g.\uff1a05\uff0c11\n%s\uff1aSecond  e.g.\uff1a59\uff0c01\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other formats in string_format are invalid and be returned as NULL."}),"\n",(0,i.jsx)(n.p,{children:"If the specified timstamp is less than 0 or more than 253402271999, it will be returned as NULL. The range for timestamp is: 1970-01-01 00:00:00 ~ 9999-12-31 23:59:59."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nMySQL > select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nMySQL > select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nMySQL > select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s')   |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(n.p,{children:"FROM_UNIXTIME,FROM,UNIXTIME"})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(m,e)})):m(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>r});var i=t(67294);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||o:r(e),i.createElement(s.Provider,{value:d},n)}}}]);