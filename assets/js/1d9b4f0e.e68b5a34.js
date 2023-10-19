"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63205],{86025:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},c="instr",o={id:"sql-reference/sql-functions/string-functions/instr",title:"instr",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/instr.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/instr",permalink:"/docs/2.5/sql-reference/sql-functions/string-functions/instr",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/instr.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hex",permalink:"/docs/2.5/sql-reference/sql-functions/string-functions/hex"},next:{title:"lcase",permalink:"/docs/2.5/sql-reference/sql-functions/string-functions/lcase"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"instr",children:"instr"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function returns the position where str first appeared in substr (start counting from 1 and measured in characters). If str is not found in substr, then this function will return 0."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"INT instr(VARCHAR str, VARCHAR substr)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select instr(\"abc\", \"b\");\n+-------------------+\n| instr('abc', 'b') |\n+-------------------+\n|                 2 |\n+-------------------+\n\nMySQL > select instr(\"abc\", \"d\");\n+-------------------+\n| instr('abc', 'd') |\n+-------------------+\n|                 0 |\n+-------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"INSTR"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:i(n),t.createElement(r.Provider,{value:o},e)}}}]);