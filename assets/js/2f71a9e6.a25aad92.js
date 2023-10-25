"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55694],{94736:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=t(85893),r=t(11151);const c={displayed_sidebar:"English"},i="char_length",l={id:"sql-reference/sql-functions/string-functions/char_length",title:"char_length",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/string-functions/char_length.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/char_length",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/char_length",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/char_length.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ascii",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/ascii"},next:{title:"concat",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/concat"}},a={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"char_length",children:"char_length"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT char_length(VARCHAR str)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This function returns the length of a string. For multibytes characters, it returns the number of characters. It currently only supports utf8 coding. Note: This function is also named as character_length."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select char_length(\"abc\");\n+--------------------+\n| char_length('abc') |\n+--------------------+\n|                  3 |\n+--------------------+\n\nMySQL > select char_length(\"\u4e2d\u56fd\");\n+----------------------+\n| char_length('\u4e2d\u56fd')  |\n+----------------------+\n|                    2 |\n+----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"CHAR_LENGTH, CHARACTER_LENGTH"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>c});var s=t(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:c(e),s.createElement(r.Provider,{value:l},n)}}}]);