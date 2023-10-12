"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[94294],{57116:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var c=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese31"},t="md5sum_numeric",o={id:"sql-reference/sql-functions/crytographic-functions/md5sum_numeric",title:"md5sum_numeric",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/crytographic-functions/md5sum_numeric.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/md5sum_numeric",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/crytographic-functions/md5sum_numeric",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/crytographic-functions/md5sum_numeric.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"md5sum",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/crytographic-functions/md5sum"},next:{title:"sha2",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/crytographic-functions/sha2"}},u={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"md5sum_numeric",children:"md5sum_numeric"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8ba1\u7b97\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u7684 MD5 128-bit \u6821\u9a8c\u548c (checksum), \u8fd4\u56de MD5 \u503c\u7684\u5341\u8fdb\u5236\u8868\u793a\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"LARGEINT md5sum_numeric(VARCHAR expr,...);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"expr"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a LARGEINT\u3002\u5982\u679c\u8f93\u5165\u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select md5sum_numeric(\"starrocks\");\n+-----------------------------------------+\n| md5sum_numeric('starrocks')             |\n+-----------------------------------------+\n| -11520983448139153100410741047322116235 |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum_numeric(\"starrocks\",\"star\");\n+-----------------------------------------+\n| md5sum_numeric('starrocks', 'star')     |\n+-----------------------------------------+\n| 163436627872604162110984707546327199448 |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select md5sum_numeric(null);\n+-----------------------------------------+\n| md5sum_numeric(NULL)                    |\n+-----------------------------------------+\n| -58332598431525814501020785164969033090 |\n+-----------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var c=s(67294);const r=c.createContext({});function i(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||t:i(e),c.createElement(r.Provider,{value:o},n)}}}]);