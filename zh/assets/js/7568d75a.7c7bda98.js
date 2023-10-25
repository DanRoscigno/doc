"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67985],{51660:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},c="instr",o={id:"sql-reference/sql-functions/string-functions/instr",title:"instr",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/string-functions/instr.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/instr",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/instr",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/instr.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"group_concat",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/group_concat"},next:{title:"lcase",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/lcase"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"instr",children:"instr"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"INT instr(VARCHAR str, VARCHAR substr)\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd4\u56de substr \u5728 str \u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08\u4ece1\u5f00\u59cb\u8ba1\u6570\uff0c\u6309\u300c\u5b57\u7b26\u300d\u8ba1\u7b97\uff09\u3002\u5982\u679c substr \u4e0d\u5728 str \u4e2d\u51fa\u73b0\uff0c\u5219\u8fd4\u56de0\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select instr(\"abc\", \"b\");\n+-------------------+\n| instr('abc', 'b') |\n+-------------------+\n|                 2 |\n+-------------------+\n\nMySQL > select instr(\"abc\", \"d\");\n+-------------------+\n| instr('abc', 'd') |\n+-------------------+\n|                 0 |\n+-------------------+\n"})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"INSTR"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||c:i(n),t.createElement(r.Provider,{value:o},e)}}}]);