"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18248],{89538:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(85893),r=s(11151);const i={},c="lpad",l={id:"sql-reference/sql-functions/string-functions/lpad",title:"lpad",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/lpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/lpad",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/lpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/lpad.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"lower",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/lower"},next:{title:"ltrim",permalink:"/doc/docs/3.0/sql-reference/sql-functions/string-functions/ltrim"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lpad",children:"lpad"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["This function returns strings with a length of ",(0,t.jsx)(n.code,{children:"len"})," (starting counting from the first syllable) in ",(0,t.jsx)(n.code,{children:"str"}),". If ",(0,t.jsx)(n.code,{children:"len"})," is longer than ",(0,t.jsx)(n.code,{children:"str"}),", the return value is lengthened to ",(0,t.jsx)(n.code,{children:"len"})," characters by adding pad characters in front of ",(0,t.jsx)(n.code,{children:"str"}),".  If ",(0,t.jsx)(n.code,{children:"str"})," is longer than ",(0,t.jsx)(n.code,{children:"len"}),", the return value is shortened to ",(0,t.jsx)(n.code,{children:"len"})," characters. ",(0,t.jsx)(n.code,{children:"len"})," means the length of characters, not bytes."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR lpad(VARCHAR str, INT len, VARCHAR pad)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nMySQL > SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"LPAD"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:l},n)}}}]);