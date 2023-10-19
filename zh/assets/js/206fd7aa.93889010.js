"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38642],{87024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=t(85893),s=t(11151);const c={displayed_sidebar:"Chinese"},r="multi_distinct_count",l={id:"sql-reference/sql-functions/aggregate-functions/multi_distinct_count",title:"multi_distinct_count",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/multi_distinct_count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/multi_distinct_count",permalink:"/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/multi_distinct_count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/multi_distinct_count.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"min_by",permalink:"/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/min_by"},next:{title:"multi_distinct_sum",permalink:"/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"multi_distinct_count",children:"multi_distinct_count"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"expr"})," \u4e2d\u53bb\u9664\u91cd\u590d\u503c\u540e\u7684\u884c\u6570\uff0c\u529f\u80fd\u7b49\u540c\u4e8e COUNT(DISTINCT expr)\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"multi_distinct_count(expr)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"epxr"}),": \u6761\u4ef6\u8868\u8fbe\u5f0f\u3002",(0,i.jsx)(n.code,{children:"expr"})," \u4e3a\u5217\u540d\u65f6\uff0c\u5217\u503c\u652f\u6301\u4efb\u610f\u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u884c\uff0c\u5219\u8fd4\u56de 0\u3002 NULL \u503c\u4e0d\u53c2\u4e0e\u7edf\u8ba1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,i.jsx)(n.code,{children:"test"}),"\uff0c\u6309\u7167\u8ba2\u5355 ",(0,i.jsx)(n.code,{children:"id"})," \u663e\u793a\u6bcf\u4e2a\u8ba2\u5355\u7684\u56fd\u5bb6\u3001\u5546\u54c1\u7c7b\u522b\u3001\u4f9b\u5e94\u5546\u7f16\u53f7\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u901a\u8fc7 multi_distinct_count \u53bb\u91cd\uff0c\u67e5\u770b ",(0,i.jsx)(n.code,{children:"category"})," \u6570\u91cf\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select multi_distinct_count(category) from test;\n+--------------------------------+\n| multi_distinct_count(category) |\n+--------------------------------+\n|                              4 |\n+--------------------------------+\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7 multi_distinct_count \u53bb\u91cd\uff0c\u67e5\u770b\u4f9b\u5e94\u5546 ",(0,i.jsx)(n.code,{children:"supplier"})," \u6570\u91cf\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"select multi_distinct_count(supplier) from test;\n+--------------------------------+\n| multi_distinct_count(supplier) |\n+--------------------------------+\n|                              5 |\n+--------------------------------+\n"})})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>c});var i=t(67294);const s=i.createContext({});function c(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:c(e),i.createElement(s.Provider,{value:l},n)}}}]);