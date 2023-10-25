"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60569],{88376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const i={displayed_sidebar:"English"},l="split_part",c={id:"sql-reference/sql-functions/string-functions/split_part",title:"split_part",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/string-functions/split_part.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split_part",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/split_part",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/split_part.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"space",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/space"},next:{title:"starts_with",permalink:"/docs/2.3/sql-reference/sql-functions/string-functions/starts_with"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"split_part",children:"split_part"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This function splits a given string according to the separators and returns the requested part. (start counting from the beginning)"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n|split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\nMySQL > select split_part(\"hello world\", \" \", 2);\n+-----------------------------------+\n| split_part('hello world', ' ', 2) |\n+-----------------------------------+\n| world                             |\n+-----------------------------------+\n\nMySQL > select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"SPLIT_PART,SPLIT,PART"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:i(e),s.createElement(r.Provider,{value:c},n)}}}]);