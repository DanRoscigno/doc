"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[20352],{29347:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(85893),t=s(11151);const c={displayed_sidebar:"Chinese"},o="locate",i={id:"sql-reference/sql-functions/string-functions/locate",title:"locate",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/locate.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/locate",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/locate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/locate.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"length",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/length"},next:{title:"lower",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/lower"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"locate",children:"locate"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"substr"})," \u5728 ",(0,r.jsx)(n.code,{children:"str"})," \u4e2d\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08\u4ece 1 \u5f00\u59cb\u8ba1\u6570\uff0c\u6309\u300c\u5b57\u7b26\u300d\u8ba1\u7b97\uff09\u3002\u5982\u679c\u6307\u5b9a\u4e86\u7b2c 3 \u4e2a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"pos"}),"\uff0c\u5219\u4ece ",(0,r.jsx)(n.code,{children:"pos"})," \u4e0b\u6807\u5f00\u59cb\u7684\u5b57\u7b26\u4e32\u5904\u5f00\u59cb\u67e5\u627e ",(0,r.jsx)(n.code,{children:"substr"})," \u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u5219\u8fd4\u56de 0\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"locate(substr, str, pos)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"substr"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pos"}),": \u53ef\u9009\u53c2\u6570\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT LOCATE('bar', 'foobarbar');\n+----------------------------+\n| locate('bar', 'foobarbar') |\n+----------------------------+\n|                          4 |\n+----------------------------+\n\nMySQL > SELECT LOCATE('xbar', 'foobar');\n+--------------------------+\n| locate('xbar', 'foobar') |\n+--------------------------+\n|                        0 |\n+--------------------------+\n\nMySQL > SELECT LOCATE('bar', 'foobarbar', 5);\n+-------------------------------+\n| locate('bar', 'foobarbar', 5) |\n+-------------------------------+\n|                             7 |\n+-------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(67294);const t=r.createContext({});function c(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:c(e),r.createElement(t.Provider,{value:i},n)}}}]);