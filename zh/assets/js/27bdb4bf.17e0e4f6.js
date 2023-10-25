"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96816],{66123:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var c=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},t="COUNT",l={id:"sql-reference/sql-functions/aggregate-functions/count",title:"COUNT",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/aggregate-functions/count.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/count",permalink:"/zh/docs/2.3/sql-reference/sql-functions/aggregate-functions/count",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/count.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"BITMAP",permalink:"/zh/docs/2.3/sql-reference/sql-functions/aggregate-functions/bitmap"},next:{title:"grouping",permalink:"/zh/docs/2.3/sql-reference/sql-functions/aggregate-functions/grouping"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"count",children:"COUNT"}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u6570\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u67093\u79cd\u5f62\u5f0f\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"COUNT(*) \u8fd4\u56de\u8868\u4e2d\u6240\u6709\u7684\u884c\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"COUNT(expr) \u8fd4\u56de\u67d0\u5217\u4e2d\u975eNULL\u503c\u7684\u884c\u6570\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"COUNT(DISTINCT expr) \u8fd4\u56de\u67d0\u5217\u53bb\u91cd\u540e\u975eNULL\u503c\u7684\u884c\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u652f\u6301\u4e0eWHERE\uff0cGROUP BY\u5b50\u53e5\u642d\u914d\u4f7f\u7528\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["COUNT DISTINCT \u7528\u4e8e\u7cbe\u786e\u53bb\u91cd\uff0c\u5982\u679c\u9700\u8981\u66f4\u597d\u7684\u53bb\u91cd\u6027\u80fd\uff0c\u53ef\u53c2\u8003",(0,c.jsx)(n.a,{href:"/zh/docs/2.3/using_starrocks/Using_bitmap",children:"\u4f7f\u7528 Bitmap \u5b9e\u73b0\u7cbe\u786e\u53bb\u91cd"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Haskell",children:"COUNT([DISTINCT] expr)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"epxr"}),": \u6761\u4ef6\u8868\u8fbe\u5f0f\u3002",(0,c.jsx)(n.code,{children:"expr"}),"\u4e3a\u5217\u540d\u65f6\uff0c\u5217\u503c\u652f\u6301\u4efb\u610f\u7c7b\u578b\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002\u5982\u679c\u6ca1\u6709\u5339\u914d\u7684\u884c\uff0c\u5219\u8fd4\u56de0\u3002 NULL\u503c\u4e0d\u53c2\u4e0e\u7edf\u8ba1\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8868",(0,c.jsx)(n.code,{children:"test"}),"\uff0c\u6309\u7167\u8ba2\u5355",(0,c.jsx)(n.code,{children:"id"}),"\u663e\u793a\u6bcf\u4e2a\u8ba2\u5355\u7684\u56fd\u5bb6\u3001\u5546\u54c1\u7c7b\u522b\u3001\u4f9b\u5e94\u5546\u7f16\u53f7\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"select * from test order by id;\n+------+----------+----------+------------+\n| id   | country  | category | supplier   |\n+------+----------+----------+------------+\n| 1001 | US       | A        | supplier_1 |\n| 1002 | Thailand | A        | supplier_2 |\n| 1003 | Turkey   | B        | supplier_3 |\n| 1004 | US       | A        | supplier_2 |\n| 1005 | China    | C        | supplier_4 |\n| 1006 | Japan    | D        | supplier_3 |\n| 1007 | Japan    | NULL     | supplier_5 |\n+------+----------+----------+------------+\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u8868\u4e2d\u6709\u591a\u5c11\u884c\u6570\u636e\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"select count(*) from test;\n+----------+\n| count(*) |\n+----------+\n|        7 |\n+----------+\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u67e5\u770b\u8ba2\u5355",(0,c.jsx)(n.code,{children:"id"}),"\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"select count(id) from test;\n+-----------+\n| count(id) |\n+-----------+\n|         7 |\n+-----------+\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u4e09\uff1a\u67e5\u770b",(0,c.jsx)(n.code,{children:"category"}),"\u6570\u91cf\u3002\u6c42\u548c\u65f6\u5ffd\u7565 NULL \u503c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"```SQL\nselect count(category) from test;\n  +-----------------+\n  | count(category) |\n  +-----------------+\n  |         6       |\n  +-----------------+\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u793a\u4f8b\u56db\uff1a\u901a\u8fc7DISTINCT\u53bb\u91cd\uff0c\u67e5\u770b",(0,c.jsx)(n.code,{children:"category"}),"\u6570\u91cf\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-Plain",children:"select count(distinct category) from test;\n+-------------------------+\n| count(DISTINCT category) |\n+-------------------------+\n|                       4 |\n+-------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var c=s(67294);const r=c.createContext({});function i(e){const n=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:i(e),c.createElement(r.Provider,{value:l},n)}}}]);