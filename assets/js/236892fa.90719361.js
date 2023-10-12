"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62],{85585:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>_,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const a={displayed_sidebar:"documentation"},r="append_trailing_char_if_absent",c={id:"sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",title:"append_trailing_char_if_absent",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/append_trailing_char_if_absent.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"String Functions",permalink:"/doc/docs/2.5/category/string-functions"},next:{title:"ascii",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/ascii"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"append_trailing_char_if_absent",children:"append_trailing_char_if_absent"}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"If the str string is not empty and does not contain trailing_char character in the end, it appends trailing_char character to the end. trailing_char can only contain one character. If it contains multiple characters, this function will return NULL."}),"\n",(0,i.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n|append_trailing_char_if_absent('a', 'c')  |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n|append_trailing_char_if_absent('ac', 'c')  |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,i.jsx)(e.p,{children:"APPEND_TRAILING_CHAR_IF_ABSENT"})]})}const _=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>c,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function c({components:n,children:e,disableParentContext:t}){let c;return c=t?"function"==typeof n?n({}):n||r:a(n),i.createElement(s.Provider,{value:c},e)}}}]);