"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64705],{40803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=t(85893),s=t(11151);const c={displayed_sidebar:"Chinese"},i="regexp_extract",o={id:"sql-reference/sql-functions/string-functions/regexp_extract",title:"regexp_extract",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/string-functions/regexp_extract.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/regexp_extract",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/regexp_extract",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/regexp_extract.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"null_or_empty",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/null_or_empty"},next:{title:"regexp_replace",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/regexp_replace"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"regexp_extract",children:"regexp_extract"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR regexp_extract(VARCHAR str, VARCHAR pattern, int pos)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u62bd\u53d6\u7b26\u5408 pattern \u7684\u7b2c pos \u4e2a\u5339\u914d\u90e8\u5206\u3002\u9700\u8981 pattern \u5b8c\u5168\u5339\u914d str \u4e2d\u7684\u67d0\u90e8\u5206\uff0c\u8fd9\u6837\u624d\u80fd\u8fd4\u56de pattern \u90e8\u5206\u4e2d\u9700\u5339\u914d\u90e8\u5206\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\uff0c\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nMySQL > SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>c});var r=t(67294);const s=r.createContext({});function c(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:c(e),r.createElement(s.Provider,{value:o},n)}}}]);