"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66332],{88076:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=s(85893),c=s(11151);const r={},i="unhex",l={id:"sql-reference/sql-functions/string-functions/unhex",title:"unhex",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/unhex.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/unhex",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/unhex",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/string-functions/unhex.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"ucase",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/ucase"},next:{title:"UPPER",permalink:"/zh/docs/3.0/sql-reference/sql-functions/string-functions/upper"}},o={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"unhex",children:"unhex"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06\u8f93\u5165\u7684\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"str"})," \u4e2d\u7684\u4e24\u4e2a\u5b57\u7b26\u4e3a\u4e00\u7ec4\u8f6c\u5316\u4e3a16\u8fdb\u5236\u540e\u7684\u5b57\u7b26\uff0c\u7136\u540e\u62fc\u63a5\u6210\u5b57\u7b26\u4e32\u8f93\u51fa\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"UNHEX(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\uff0c\u957f\u5ea6\u4e3a0\u6216\u4e3a\u5947\u6570\uff0c\u6216\u8005\u5305\u542b",(0,t.jsx)(n.code,{children:"[0-9]"}),"\u3001",(0,t.jsx)(n.code,{children:"[a-z]"}),"\u3001",(0,t.jsx)(n.code,{children:"[A-Z]"}),"\u4e4b\u5916\u7684\u5b57\u7b26\u5219\u8fd4\u56de\u7a7a\u4e32\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select unhex('3132');\n+---------------+\n| unhex('3132') |\n+---------------+\n| 12            |\n+---------------+\n1 row in set (0.00 sec)\n\nmysql> select unhex('4142@');\n+----------------+\n| unhex('4142@') |\n+----------------+\n|                |\n+----------------+\n1 row in set (0.01 sec)\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(c.Provider,{value:l},n)}}}]);