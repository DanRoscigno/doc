"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52453],{70933:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=t(85893),r=t(11151);const l={},i="split_part",a={id:"sql-reference/sql-functions/string-functions/split_part",title:"split_part",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/split_part.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/split_part",permalink:"/docs/sql-reference/sql-functions/string-functions/split_part",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/split_part.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"split",permalink:"/docs/sql-reference/sql-functions/string-functions/split"},next:{title:"starts_with",permalink:"/docs/sql-reference/sql-functions/string-functions/starts_with"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function p(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"split_part",children:"split_part"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"This function splits a given string according to the separators and returns the requested part. (start counting from the beginning)"}),"\n",(0,s.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n|split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\nMySQL > select split_part(\"hello world\", \" \", 2);\n+-----------------------------------+\n| split_part('hello world', ' ', 2) |\n+-----------------------------------+\n| world                             |\n+-----------------------------------+\n\nMySQL > select split_part(\"hello world\", \" \", -1);\n+----------------------------------+\n|split_part('hello world', ' ', -1) |\n+----------------------------------+\n| world                            |\n+----------------------------------+\n\nMySQL > select split_part(\"hello world\", \" \", -2);\n+-----------------------------------+\n| split_part('hello world', ' ', -2) |\n+-----------------------------------+\n| hello                             |\n+-----------------------------------+\n\nMySQL > select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nselect split_part(\"abca\", \"a\", -1);\n+-----------------------------+\n| split_part('abca', 'a', -1) |\n+-----------------------------+\n|                             |\n+-----------------------------+\n\nselect split_part(\"abca\", \"a\", -2);\n+-----------------------------+\n| split_part('abca', 'a', -2) |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(e.p,{children:"SPLIT_PART,SPLIT,PART"})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>a,ah:()=>l});var s=t(67294);const r=s.createContext({});function l(n){const e=s.useContext(r);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function a({components:n,children:e,disableParentContext:t}){let a;return a=t?"function"==typeof n?n({}):n||i:l(n),s.createElement(r.Provider,{value:a},e)}}}]);