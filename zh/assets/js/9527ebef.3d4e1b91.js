"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49471],{67304:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var c=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese31"},t="COUNT",l={id:"sql-reference/sql-functions/aggregate-functions/count",title:"COUNT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/count",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/count.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"CORR",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/corr"},next:{title:"count_if",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/count_if"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",strong:"strong",pre:"pre",code:"code"},(0,r.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"count",children:"COUNT"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u6570\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u67093\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"COUNT(*) \u8fd4\u56de\u8868\u4e2d\u6240\u6709\u7684\u884c\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"COUNT(expr) \u8fd4\u56de\u67d0\u5217\u4e2d\u975e NULL \u503c\u7684\u884c\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"COUNT(DISTINCT expr) \u8fd4\u56de\u67d0\u5217\u53bb\u91cd\u540e\u975e NULL \u503c\u7684\u884c\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["COUNT DISTINCT \u7528\u4e8e\u7cbe\u786e\u53bb\u91cd\uff0c\u5982\u679c\u9700\u8981\u66f4\u597d\u7684\u53bb\u91cd\u6027\u80fd\uff0c\u53ef\u53c2\u8003",(0,c.jsx)(e.a,{href:"/doc/zh/docs/using_starrocks/Using_bitmap",children:"\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd"}),"\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u4ece 2.4 \u7248\u672c\u5f00\u59cb\uff0cStarRocks \u652f\u6301\u5728\u4e00\u6761\u67e5\u8be2\u91cc\u4f7f\u7528\u591a\u4e2a COUNT(DISTINCT)\u3002"})}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"COUNT(expr)\nCOUNT(DISTINCT expr [,expr,...])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"epxr"}),": \u6761\u4ef6\u8868\u8fbe\u5f0f\u3002",(0,c.jsx)(e.code,{children:"expr"}),"\u4e3a\u5217\u540d\u65f6\uff0c\u5217\u503c\u652f\u6301\u4efb\u610f\u7c7b\u578b\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u884c\uff0c\u5219\u8fd4\u56de0\u3002 NULL\u503c\u4e0d\u53c2\u4e0e\u7edf\u8ba1\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.p,{children:["\u5047\u8bbe\u6709\u8868",(0,c.jsx)(e.code,{children:"test"}),"\uff0c\u6309\u7167\u8ba2\u5355",(0,c.jsx)(e.code,{children:"id"}),"\u663e\u793a\u6bcf\u4e2a\u8ba2\u5355\u7684\u56fd\u5bb6\u3001\u5546\u54c1\u7c7b\u522b\u3001\u4f9b\u5e94\u5546\u7f16\u53f7\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u8868\u4e2d\u6709\u591a\u5c11\u884c\u6570\u636e\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select count(*) from test;\n+----------+\n| count(*) |\n+----------+\n|        7 |\n+----------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u770b\u8ba2\u5355",(0,c.jsx)(e.code,{children:"id"}),"\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select count(id) from test;\n+-----------+\n| count(id) |\n+-----------+\n|         7 |\n+-----------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u770b",(0,c.jsx)(e.code,{children:"category"}),"\u6570\u91cf\u3002\u6c42\u548c\u65f6\u5ffd\u7565 NULL \u503c\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"```SQL\nselect count(category) from test;\n  +-----------------+\n  | count(category) |\n  +-----------------+\n  |         6       |\n  +-----------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u56db\uff1a\u901a\u8fc7DISTINCT\u53bb\u91cd\uff0c\u67e5\u770b",(0,c.jsx)(e.code,{children:"category"}),"\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select count(distinct category) from test;\n+-------------------------+\n| count(DISTINCT category) |\n+-------------------------+\n|                       4 |\n+-------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e94\uff1a\u67e5\u770b\u5546\u54c1\u7c7b\u522b\uff08",(0,c.jsx)(e.code,{children:"category"}),"\uff09\u548c\u4f9b\u5e94\u5546\uff08",(0,c.jsx)(e.code,{children:"supplier"}),"\uff09\u5171\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u7ec4\u5408\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select count(distinct category, supplier) from test;\n+------------------------------------+\n| count(DISTINCT category, supplier) |\n+------------------------------------+\n|                                  5 |\n+------------------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4ee5\u4e0a\u7ed3\u679c\u4e2d\uff0c",(0,c.jsx)(e.code,{children:"id"}),"\u4e3a1004\u7684\u7ec4\u5408\u4e0e",(0,c.jsx)(e.code,{children:"id"}),"\u4e3a1002\u7684\u7ec4\u5408\u91cd\u590d\uff0c\u53ea\u7edf\u8ba1\u4e00\u6b21\uff1b",(0,c.jsx)(e.code,{children:"id"}),"\u4e3a1007\u7684\u7ec4\u5408\u5185\u6709NULL\u503c\uff0c\u4e0d\u7edf\u8ba1\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u516d\uff1a\u4e00\u6761\u67e5\u8be2\u91cc\u4f7f\u7528\u591a\u4e2a COUNT(DISTINCT)\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Plain",children:"select count(distinct country, category), count(distinct country,supplier) from test;\n+-----------------------------------+-----------------------------------+\n| count(DISTINCT country, category) | count(DISTINCT country, supplier) |\n+-----------------------------------+-----------------------------------+\n|                                 6 |                                 7 |\n+-----------------------------------+-----------------------------------+\n"})})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>i});var c=s(67294);const r=c.createContext({});function i(n){const e=c.useContext(r);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||t:i(n),c.createElement(r.Provider,{value:l},e)}}}]);