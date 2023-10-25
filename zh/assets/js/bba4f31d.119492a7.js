"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17147],{13377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(85893),r=t(11151);const o={displayed_sidebar:"Chinese"},i="money_format",c={id:"sql-reference/sql-functions/string-functions/money_format",title:"money_format",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/string-functions/money_format.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/money_format",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/money_format",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/money_format.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ltrim",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/ltrim"},next:{title:"null_or_empty",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/null_or_empty"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"money_format",children:"money_format"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:"VARCHAR money_format(Number)"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u6570\u5b57\u6309\u7167\u8d27\u5e01\u683c\u5f0f\u8f93\u51fa\uff0c\u6574\u6570\u90e8\u5206\u6bcf\u96943\u4f4d\u7528\u9017\u53f7\u5206\u9694\uff0c\u5c0f\u6570\u90e8\u5206\u4fdd\u75592\u4f4d"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select money_format(17014116);\n+------------------------+\n| money_format(17014116) |\n+------------------------+\n| 17,014,116.00          |\n+------------------------+\n\nMySQL > select money_format(1123.456);\n+------------------------+\n| money_format(1123.456) |\n+------------------------+\n| 1,123.46               |\n+------------------------+\n\nMySQL > select money_format(1123.4);\n+----------------------+\n| money_format(1123.4) |\n+----------------------+\n| 1,123.40             |\n+----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"MONEY_FORMAT,MONEY,FORMAT"})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(67294);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:c},n)}}}]);