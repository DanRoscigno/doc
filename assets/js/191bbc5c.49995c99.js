"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90084],{27676:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(85893),i=s(11151);const r={},c="split",l={id:"sql-reference/sql-functions/string-functions/split",title:"split",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/split.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/split",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/split.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"space",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/space"},next:{title:"split_part",permalink:"/docs/3.0/sql-reference/sql-functions/string-functions/split_part"}},o={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"split",children:"split"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This function splits a given string according to the separators, and returns the split parts in ARRAY."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ARRAY<VARCHAR> split(VARCHAR content, VARCHAR delimiter)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'mysql> select split("a,b,c",",");\n+---------------------+\n| split(\'a,b,c\', \',\') |\n+---------------------+\n| ["a","b","c"]       |\n+---------------------+\n\nmysql> select split("a,b,c",",b,");\n+-----------------------+\n| split(\'a,b,c\', \',b,\') |\n+-----------------------+\n| ["a","c"]             |\n+-----------------------+\n\nmysql> select split("abc","");\n+------------------+\n| split(\'abc\', \'\') |\n+------------------+\n| ["a","b","c"]    |\n+------------------+\n'})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"SPLIT"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:l},n)}}}]);