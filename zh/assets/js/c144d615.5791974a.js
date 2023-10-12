"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[15776],{33640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=s(85893),i=s(11151);const l={displayed_sidebar:"Chinese31"},c="multiply",r={id:"sql-reference/sql-functions/math-functions/multiply",title:"multiply",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/math-functions/multiply.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/multiply",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/multiply",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/math-functions/multiply.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"mod",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/mod"},next:{title:"negative",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/math-functions/negative"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"multiply",children:"multiply"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u8ba1\u7b97\u53c2\u6570 ",(0,t.jsx)(n.code,{children:"arg1"})," \u4e0e ",(0,t.jsx)(n.code,{children:"arg2"})," \u7684\u4e58\u79ef\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"MULTIPLY(arg1, arg2);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg1"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u6570\u503c\u5217\u7c7b\u578b\u6216\u5b57\u9762\u503c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"arg2"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u6570\u503c\u5217\u7c7b\u578b\u6216\u5b57\u9762\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u53d6\u51b3\u4e8e ",(0,t.jsx)(n.code,{children:"arg1"})," \u548c ",(0,t.jsx)(n.code,{children:"arg2"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select multiply(10,2);\n+-----------------+\n| multiply(10, 2) |\n+-----------------+\n|              20 |\n+-----------------+\n1 row in set (0.01 sec)\n\nMySQL > select multiply(1,2.1);\n+------------------+\n| multiply(1, 2.1) |\n+------------------+\n|              2.1 |\n+------------------+\n1 row in set (0.01 sec)\n\n-- \u5bf9\u8868\u5185\u7684\u6570\u636e\u8fdb\u884c multiply \u8ba1\u7b97\u3002\nMySQL > select * from t;\n+------+------+------+------+\n| id   | name | job1 | job2 |\n+------+------+------+------+\n|    2 |    2 |    2 |    2 |\n+------+------+------+------+\n1 row in set (0.08 sec)\n\nMySQL > select multiply(1.0,id) from t;\n+-------------------+\n| multiply(1.0, id) |\n+-------------------+\n|                 2 |\n+-------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var t=s(67294);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:l(e),t.createElement(i.Provider,{value:r},n)}}}]);