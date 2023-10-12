"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97704],{36724:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var r=s(85893),t=s(11151);const i={displayed_sidebar:"documentation"},c="trim",a={id:"sql-reference/sql-functions/string-functions/trim",title:"trim",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/trim.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/trim",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/trim",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/trim.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"substring, substr",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/substring"},next:{title:"ucase",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/ucase"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"trim",children:"trim"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Removes consecutive spaces or specified characters from the beginning and end of the ",(0,r.jsx)(n.code,{children:"str"})," argument. Removing specified characters are supported from StarRocks 2.5.0."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR trim(VARCHAR str[, VARCHAR characters])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": required, the string to trim, which must evaluate to a VARCHAR value."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"characters"}),": optional, the characters to remove, which must be a VARCHAR value. If this parameter is not specified, spaces are removed from the string by default. If this parameter is set to an empty string, an error is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a VARCHAR value."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Remove the five spaces from the beginning and end of the string."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT trim(\"   ab c  \");\n+-------------------+\n| trim('   ab c  ') |\n+-------------------+\n| ab c              |\n+-------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Remove specified characters from the beginning and end of the string."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT trim(\"abcd\", \"ad\");\n+--------------------+\n| trim('abcd', 'ad') |\n+--------------------+\n| bc                 |\n+--------------------+\n\nMySQL > SELECT trim(\"xxabcdxx\", \"x\");\n+-----------------------+\n| trim('xxabcdxx', 'x') |\n+-----------------------+\n| abcd                  |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/ltrim",children:"ltrim"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/rtrim",children:"rtrim"})}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:a},n)}}}]);