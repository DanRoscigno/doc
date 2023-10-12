"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65854],{6309:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=s(85893),r=s(11151);const i={displayed_sidebar:"documentation"},o="starts_with",c={id:"sql-reference/sql-functions/string-functions/starts_with",title:"starts_with",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/starts_with.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/starts_with",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/starts_with",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/starts_with.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"split_part",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/split_part"},next:{title:"str_to_map",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/str_to_map"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"starts_with",children:"starts_with"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This function returns 1 when a string starts with a specified prefix. Otherwise, it returns 0. When the argument is NULL, the result is NULL."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Haskell",children:"BOOLEAN starts_with(VARCHAR str, VARCHAR prefix)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"mysql> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n|starts_with('hello world', 'hello')  |\n+-------------------------------------+\n| 1                                   |\n+-------------------------------------+\n\nmysql> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n|starts_with('hello world', 'world')  |\n+-------------------------------------+\n| 0                                   |\n+-------------------------------------+\n"})}),"\n",(0,n.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(t.p,{children:"START_WITH"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:i(e),n.createElement(r.Provider,{value:c},t)}}}]);