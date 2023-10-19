"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76534],{95823:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var n=t(85893),r=t(11151);const c={displayed_sidebar:"English"},i="strcmp",l={id:"sql-reference/sql-functions/string-functions/strcmp",title:"strcmp",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/strcmp.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/strcmp",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/strcmp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/strcmp.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"starts_with",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/starts_with"},next:{title:"strleft",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/strleft"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"strcmp",children:"strcmp"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This function compares two strings. Returns 0 if lhs and rhs compare equal. Return -1 if lhs appears before rhs in lexicographical order. Returns 1 if lhs appears after rhs in lexicographical order. When the argument is NULL, the result is NULL."}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Haskell",children:"INT strcmp(VARCHAR lhs, VARCHAR rhs)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> select strcmp(\"test1\", \"test1\");\n+--------------------------+\n| strcmp('test1', 'test1') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nmysql> select strcmp(\"test1\", \"test2\");\n+--------------------------+\n| strcmp('test1', 'test2') |\n+--------------------------+\n|                       -1 |\n+--------------------------+\n\nmysql> select strcmp(\"test2\", \"test1\");\n+--------------------------+\n| strcmp('test2', 'test1') |\n+--------------------------+\n|                        1 |\n+--------------------------+\n\nmysql> select strcmp(\"test1\", NULL);\n+-----------------------+\n| strcmp('test1', NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n"})}),"\n",(0,n.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(s.p,{children:"STRCMP"})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>c});var n=t(67294);const r=n.createContext({});function c(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(r.Provider,{value:l},s)}}}]);