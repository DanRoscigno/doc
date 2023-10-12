"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61888],{25199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(85893),r=t(11151);const o={displayed_sidebar:"documentation"},i="money_format",c={id:"sql-reference/sql-functions/string-functions/money_format",title:"money_format",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/string-functions/money_format.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/money_format",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/money_format",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/money_format.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ltrim",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/ltrim"},next:{title:"null_or_empty",permalink:"/doc/docs/2.5/sql-reference/sql-functions/string-functions/null_or_empty"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"money_format",children:"money_format"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This function returns a string formatted as a currency string. The integer part is separated by comma every three bits and the decimal part is reserved for two bits."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR money_format(Number)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nMySQL > select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nMySQL > select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"MONEY_FORMAT,MONEY,FORMAT"})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(67294);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:c},n)}}}]);