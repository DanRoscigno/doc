"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25866],{59122:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(85893),a=t(11151);const r={displayed_sidebar:"Chinese"},d="date_format",c={id:"sql-reference/sql-functions/date-time-functions/date_format",title:"date_format",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/date-time-functions/date_format.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_format",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_format",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/date_format.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"date_add",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_add"},next:{title:"date_slice",permalink:"/zh/docs/3.0/sql-reference/sql-functions/date-time-functions/date_slice"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"date_format",children:"date_format"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06\u65e5\u671f\u7c7b\u578b\u6309\u7167 ",(0,s.jsx)(e.code,{children:"format"})," \u7684\u7c7b\u578b\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u524d\u652f\u6301\u6700\u5927 128 \u5b57\u8282\u7684\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8fd4\u56de\u503c\u957f\u5ea6\u8d85\u8fc7 128\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"date"})," \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"format"})," \u6307\u5b9a\u65e5\u671f/\u65f6\u95f4\u7684\u8f93\u51fa\u683c\u5f0f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528\u7684\u683c\u5f0f\u6709\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"%a | \u7f29\u5199\u661f\u671f\u540d\n%b | \u7f29\u5199\u6708\u540d\n%c | \u6708\uff0c\u6570\u503c\n%D | \u5e26\u6709\u82f1\u6587\u524d\u7f00\u7684\u6708\u4e2d\u7684\u5929\n%d | \u6708\u7684\u5929\uff0c\u6570\u503c(00-31)\n%e | \u6708\u7684\u5929\uff0c\u6570\u503c(0-31)\n%f | \u5fae\u79d2\n%H | \u5c0f\u65f6 (00-23)\n%h | \u5c0f\u65f6 (01-12)\n%I | \u5c0f\u65f6 (01-12)\n%i | \u5206\u949f\uff0c\u6570\u503c(00-59)\n%j | \u5e74\u7684\u5929 (001-366)\n%k | \u5c0f\u65f6 (0-23)\n%l | \u5c0f\u65f6 (1-12)\n%M | \u6708\u540d\n%m | \u6708\uff0c\u6570\u503c(00-12)\n%p | AM \u6216 PM\n%r | \u65f6\u95f4\uff0c12-\u5c0f\u65f6\uff08hh:mm:ss AM \u6216 PM\uff09\n%S | \u79d2(00-59)\n%s | \u79d2(00-59)\n%T | \u65f6\u95f4\uff0c24-\u5c0f\u65f6 (hh:mm:ss)\n%U | \u5468 (00-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\n%u | \u5468 (00-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\n%V | \u5468 (01-53) \u661f\u671f\u65e5\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %X \u4f7f\u7528\n%v | \u5468 (01-53) \u661f\u671f\u4e00\u662f\u4e00\u5468\u7684\u7b2c\u4e00\u5929\uff0c\u4e0e %x \u4f7f\u7528\n%W | \u661f\u671f\u540d\n%w | \u5468\u7684\u5929 \uff080=\u661f\u671f\u65e5\uff0c6=\u661f\u671f\u516d\uff09\n%X | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u65e5\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %V \u4f7f\u7528\n%x | \u5e74\uff0c\u5176\u4e2d\u7684\u661f\u671f\u4e00\u662f\u5468\u7684\u7b2c\u4e00\u5929\uff0c4 \u4f4d\uff0c\u4e0e %v \u4f7f\u7528\n%Y | \u5e74\uff0c4 \u4f4d\n%y | \u5e74\uff0c2 \u4f4d\n%% | \u7528\u4e8e\u8868\u793a %\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nselect date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nselect date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nselect date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nselect date_format('1999-01-01 00:00:00', '%X %V');\n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nselect date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nselect date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n"})})]})}const f=function(n={}){const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(l,n)})):l(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>r});var s=t(67294);const a=s.createContext({});function r(n){const e=s.useContext(a);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||d:r(n),s.createElement(a.Provider,{value:c},e)}}}]);