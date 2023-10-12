"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19504],{35620:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese31"},t="regexp",l={id:"sql-reference/sql-functions/like_predicate-functions/regexp",title:"regexp",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/like_predicate-functions/regexp.md",sourceDirName:"sql-reference/sql-functions/like_predicate-functions",slug:"/sql-reference/sql-functions/like_predicate-functions/regexp",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/like_predicate-functions/regexp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/like_predicate-functions/regexp.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"like",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/like_predicate-functions/like"},next:{title:"regexp_extract",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/like_predicate-functions/regexp_extract"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"regexp",children:"regexp"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5224\u65ad\u76ee\u6807\u5b57\u7b26\u4e32 ",(0,r.jsx)(n.code,{children:"expr"})," \u662f\u5426\u5339\u914d\u7ed9\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.jsx)(n.code,{children:"pattern"}),"\u3002\u5339\u914d\u6210\u529f\u8fd4\u56de 1\uff0c\u5426\u5219\u8fd4\u56de 0\u3002\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"BOOLEAN regexp(VARCHAR expr, VARCHAR pattern);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr"}),": \u76ee\u6807\u5b57\u7b26\u4e32\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pattern"}),": \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5373\u5b57\u7b26\u4e32\u9700\u5339\u914d\u7684\u6a21\u5f0f\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select regexp(\"abc123\",\"abc*\");\n+--------------------------+\n| regexp('abc123', 'abc*') |\n+--------------------------+\n|                        1 |\n+--------------------------+\n1 row in set (0.06 sec)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"regexp, regular"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const c=r.createContext({});function i(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:i(e),r.createElement(c.Provider,{value:l},n)}}}]);