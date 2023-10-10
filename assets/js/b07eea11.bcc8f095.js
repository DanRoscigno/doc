"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[45552],{1046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),r=t(11151);const s={},i="date_format",o={id:"sql-reference/sql-functions/date-time-functions/date_format",title:"date_format",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_format",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_format.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"date_add",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_add"},next:{title:"date_slice",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/date_slice"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"date_format",children:"date_format"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Converts a date into a string according to the specified format. Currently it supports strings with a maximum of 128 bytes. If the length of the returned value exceeds 128, NULL is returned."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"date"})," parameter must be a valid date or date expression."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"format"})," specifies the output format of the date or time."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here are the formats available:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"%a | Abbreviated weekday name (Sun to Sat)\n%b | Abbreviated month name (Jan to Dec)\n%c | Numeric month name (0-12)\n%D | Day of the month as a numeric value, followed by suffix in English\n%d | Day of the month as a numeric value (00-31)\n%e | Day of the month as a numeric value (0-31)\n%f | Microseconds\n%H | Hour (00-23)\n%h | Hour (01-12)\n%I | Hour (01-12)\n%i | Minutes (00-59)\n%j | Day of the year (001-366)\n%k | Hour (0-23)\n%l | Hour (1-12)\n%M | Month name in full\n%m | Month name as a numeric value (00-12)\n%p | AM or PM\n%r | Time in 12 hour (hh:mm:ss AM or PM)\n%S | Seconds (00-59)\n%s | Seconds (00-59)\n%T | Time in 24 hour format (hh:mm:ss)\n%U | Week (00-53) where Sunday is the first day of the week\n%u | Week (00-53) where Monday is the first day of the week\n%V | Week (01-53)  where Sunday is the first day of the week. Used with %X. \n%v | Week (01-53) where Monday is the first day of the week. Used with %x. \n%W | Weekday name in full\n%w | Day of the week where Sunday=0 and Saturday=6\n%X |  Year for the week where Sunday is the first day of the week. 4-digital value. Used with  %V.\n%x | Year for the week where Monday is the first day of the week. 4-digital value. Used with  %v.\n%Y | Year. 4-digital value. \n%y | Year. 2-digital value. \n%% |  Represent %. \n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nMySQL > select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nMySQL > select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nMySQL > select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nMySQL > select date_format('1999-01-01 00:00:00', '%X %V');\n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nMySQL > select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nMySQL > select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,a.jsx)(n.p,{children:"DATE_FORMAT,DATE,FORMAT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var a=t(67294);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:o},n)}}}]);