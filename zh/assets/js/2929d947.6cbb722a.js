"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6229],{72181:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=r(85893),a=r(11151);const t={},c="array_length",l={id:"sql-reference/sql-functions/array-functions/array_length",title:"array_length",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/array-functions/array_length.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_length",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_length",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_length.md",tags:[],version:"3.1",frontMatter:{},sidebar:"Chinese31",previous:{title:"array_join",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_join"},next:{title:"array_map",permalink:"/doc/zh/docs/sql-reference/sql-functions/array-functions/array_map"}},i={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_length",children:"array_length"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba1\u7b97\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\uff0c\u8fd4\u56de\u503c\u7c7b\u578b\u662f INT\u3002\u5982\u679c\u8f93\u5165\u53c2\u6570\u662f NULL\uff0c\u8fd4\u56de\u503c\u4e5f\u662f NULL\u3002\u6570\u7ec4\u4e2d\u7684 NULL \u5143\u7d20\u4f1a\u8ba1\u5165\u957f\u5ea6\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u522b\u540d\u4e3a ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/array-functions/cardinality",children:"cardinality"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"INT array_length(any_array)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"any_array"}),": ARRAY \u8868\u8fbe\u5f0f\uff0c\u5fc5\u9009\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de INT \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_length([1,2,3]);\n+-----------------------+\n| array_length([1,2,3]) |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_length([1,2,3,null]);\n+-------------------------------+\n| array_length([1, 2, 3, NULL]) |\n+-------------------------------+\n|                             4 |\n+-------------------------------+\n\nmysql> select array_length([[1,2], [3,4]]);\n+-----------------------------+\n| array_length([[1,2],[3,4]]) |\n+-----------------------------+\n|                           2 |\n+-----------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ARRAY_LENGTH, ARRAY, CARDINALITY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:t(e),s.createElement(a.Provider,{value:l},n)}}}]);