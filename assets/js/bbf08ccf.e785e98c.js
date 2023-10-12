"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53333],{70403:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=n(85893),c=n(11151);const r={displayed_sidebar:"documentation"},a="md5sum",i={id:"sql-reference/sql-functions/crytographic-functions/md5sum",title:"md5sum",description:"Calculates the 128-bit checksum of multiple strings. The checksum is represented by a 32-character hexadecimal string.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/crytographic-functions/md5sum.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5sum",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/md5sum.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"md5",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5"},next:{title:"md5sum_numeric",permalink:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5sum_numeric"}},o={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"md5sum",children:"md5sum"}),"\n",(0,t.jsx)(s.p,{children:"Calculates the 128-bit checksum of multiple strings. The checksum is represented by a 32-character hexadecimal string."}),"\n",(0,t.jsxs)(s.p,{children:["If only one string is passed in, the result is the same as that of ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/crytographic-functions/md5",children:"md5"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Compared to md5(), md5sum() accepts more parameters and therefore, is more efficient in calculating the checksum of multiple files."}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"md5sum(expr,...);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"expr"}),": the string to calculate. It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(s.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(s.p,{children:"Returns a checksum of the VARCHAR type."}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> select md5sum(\"starrocks\");\n+----------------------------------+\n| md5sum('starrocks')              |\n+----------------------------------+\n| f75523a916caf65f1ad487a9f8017f75 |\n+----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum(\"starrocks\",\"star\");\n+----------------------------------+\n| md5sum('starrocks', 'star')      |\n+----------------------------------+\n| 7af4bfe35b8df2786ad133c57cb2aed8 |\n+----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum(null);\n+----------------------------------+\n| md5sum(NULL)                     |\n+----------------------------------+\n| d41d8cd98f00b204e9800998ecf8427e |\n+----------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>r});var t=n(67294);const c=t.createContext({});function r(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:r(e),t.createElement(c.Provider,{value:i},s)}}}]);