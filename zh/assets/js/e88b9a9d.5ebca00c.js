"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88598],{29632:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese31"},l="greatest",i={id:"sql-reference/sql-functions/math-functions/greatest",title:"greatest",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/math-functions/greatest.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/greatest",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/greatest",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/greatest.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"fmod",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/fmod"},next:{title:"least",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/least"}},a={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"greatest",children:"greatest"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u4e2d\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e0e\u8f93\u5165\u503c\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u8fdb\u884c\u5bf9\u6bd4\u65f6\u9075\u5faa\u4ee5\u4e0b\u539f\u5219\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e2d\u6709 DOUBLE \u7c7b\u578b\u7684\u503c\uff0c\u5219\u6240\u6709\u503c\u6309\u7167 DOUBLE \u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\uff0c\u5e76\u8fd4\u56de DOUBLE \u7c7b\u578b\u7684\u503c\u3002DECIMAL \u548c FLOAT \u7c7b\u578b\u4e5f\u9075\u5faa\u76f8\u540c\u89c4\u5219\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e2d\u65e2\u6709\u6570\u503c\u7c7b\u578b\u53c8\u6709\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e14\u5b57\u7b26\u4e32\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u5219\u6309\u7167\u6570\u503c\u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u5b57\u7b26\u4e32\u65e0\u6cd5\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u5219\u6309\u7167\u5b57\u7b26\u4e32\u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u8f93\u5165\u53c2\u6570\u5168\u90e8\u4e3a\u5b57\u7b26\u7c7b\u578b\uff0c\u5219\u6309\u7167\u6bcf\u4e2a\u53c2\u6570\u7684\u9996\u5b57\u6bcd\u5728\u5b57\u6bcd\u8868\u4e2d\u7684\u5148\u540e\u987a\u5e8f\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"greatest(expr1,...);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a SMALLINT\u3001TINYINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001DATETIME\u3001VARCHAR\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8f93\u5165\u503c\u4e3a\u5355\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select greatest(3);\n+-------------+\n| greatest(3) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8fd4\u56de\u4e00\u7ec4\u6570\u503c\u4e2d\u7684\u6700\u5927\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select greatest(3,4,5,5,6);\n+-------------------------+\n| greatest(3, 4, 5, 5, 6) |\n+-------------------------+\n|                       6 |\n+-------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u8f93\u5165\u503c\u4e2d\u5305\u542b DOUBLE \u7c7b\u578b\u503c\uff0c\u6240\u6709\u503c\u6309\u7167 DOUBLE \u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\uff0c\u5e76\u8fd4\u56de DOUBLE \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select greatest(7,4.5);\n+------------------+\n| greatest(7, 4.5) |\n+------------------+\n|              7.0 |\n+------------------+\n1 row in set (0.05 sec)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u8f93\u5165\u503c\u5305\u542b\u6570\u503c\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u4e14\u5b57\u7b26\u4e32\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u6309\u7167\u6570\u503c\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select greatest(7,'9');\n+------------------+\n| greatest(7, '9') |\n+------------------+\n| 9                |\n+------------------+\n1 row in set (0.04 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u8f93\u5165\u503c\u5305\u542b\u6570\u503c\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u4e14\u5b57\u7b26\u4e32",(0,t.jsx)(n.strong,{children:"\u4e0d\u53ef\u4ee5"}),"\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u6309\u7167\u5b57\u7b26\u4e32\u8fdb\u884c\u6bd4\u8f83\u3002\u5b57\u7b26\u4e32 ",(0,t.jsx)(n.code,{children:"'1'"})," \u5c0f\u4e8e",(0,t.jsx)(n.code,{children:"'at'"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"select greatest(1,'at');\n+-------------------+\n| greatest(1, 'at') |\n+-------------------+\n| at                |\n+-------------------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u516d\uff1a\u8f93\u5165\u503c\u5168\u90e8\u4e3a\u5b57\u7b26\u578b\uff0c\u6700\u5927\u503c\u4e3a\u5b57\u6bcd\u8868\u6700\u540e\u4e00\u4f4d ",(0,t.jsx)(n.code,{children:"Z"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",children:"select greatest('A','B','Z');\n+-------------------------+\n| greatest('A', 'B', 'Z') |\n+-------------------------+\n| Z                       |\n+-------------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const r=t.createContext({});function c(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:c(e),t.createElement(r.Provider,{value:i},n)}}}]);