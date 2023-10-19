"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90382],{85380:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese"},c="retention",l={id:"sql-reference/sql-functions/aggregate-functions/retention",title:"retention",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/retention.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/retention",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/retention",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/retention.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"percentile_disc",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_disc"},next:{title:"STD",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/std"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",ol:"ol"},(0,t.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"retention",children:"retention"}),"\n",(0,i.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"retention (\u7559\u5b58\u51fd\u6570\uff09\u7528\u4e8e\u8ba1\u7b97\u4e00\u6bb5\u65f6\u95f4\u5185\u7684\u7528\u6237\u7559\u5b58\u60c5\u51b5\u3002\u8be5\u51fd\u6570\u63a5\u6536 1 \u5230 31 \u4e2a\u6761\u4ef6\uff0c\u4ece\u7b2c\u4e00\u4e2a\u6761\u4ef6\u5f00\u59cb\u5224\u65ad\u4e8b\u4ef6\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\uff0c\u5982\u679c\u6761\u4ef6\u6ee1\u8db3\u5219\u8f93\u51fa 1\uff0c\u4e0d\u6ee1\u8db3\u5219\u8f93\u51fa 0\uff0c\u6700\u7ec8\u8fd4\u56de 0 \u548c 1 \u7684\u6570\u7ec4\u3002\u901a\u8fc7\u7edf\u8ba1\u7ed3\u679c\u4e3a 1 \u7684\u6570\u636e\uff0c\u8ba1\u7b97\u7528\u6237\u7559\u5b58\u7387\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Haskell",children:"retention(array)\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"array"}),"\uff1a\u4e00\u7cfb\u5217\u6761\u4ef6\u8868\u8fbe\u5f0f\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u7c7b\u578b\u4e3a ARRAY\u3002\u6570\u7ec4\u5185\u6700\u591a\u652f\u6301\u4f20\u5165 31 \u4e2a\u6761\u4ef6\uff0c\u591a\u4e2a\u6761\u4ef6\u7528\u9017\u53f7\u9694\u5f00\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u5305\u542b 0 \u548c 1 \u7684\u6570\u7ec4\u3002\u6570\u7ec4\u91cc 0 \u548c 1 \u7684\u4e2a\u6570\u4e0e\u4f20\u5165\u7684\u6761\u4ef6\u6570\u4e00\u81f4\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u6570\u7ec4\u91cc\u7b2c\u4e00\u4e2a\u6761\u4ef6\u5f00\u59cb\u4f9d\u6b21\u5224\u65ad\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4e8b\u4ef6\u6ee1\u8db3\u5f53\u524d\u6761\u4ef6\uff0c\u5219\u8f93\u51fa 1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4e8b\u4ef6\u4e0d\u6ee1\u8db3\u5f53\u524d\u6761\u4ef6\uff0c\u5219\u5f53\u524d\u4f4d\u7f6e\u53ca\u4e4b\u540e\u7684\u6240\u6709\u4f4d\u7f6e\u5747\u4e3a 0\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u521b\u5efa\u8868 ",(0,i.jsx)(e.code,{children:"test"})," \u5e76\u63d2\u5165\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE TABLE test(\n    id TINYINT,\n    action STRING,\n    time DATETIME\n)\nENGINE=olap\nDUPLICATE KEY(id)\nDISTRIBUTED BY HASH(id);\n\nINSERT INTO test VALUES \n(1,'pv','2022-01-01 08:00:05'),\n(2,'pv','2022-01-01 10:20:08'),\n(1,'buy','2022-01-02 15:30:10'),\n(2,'pv','2022-01-02 17:30:05'),\n(3,'buy','2022-01-01 05:30:09'),\n(3,'buy','22022-01-02 08:10:15'),\n(4,'pv','2022-01-02 21:09:15'),\n(5,'pv','2022-01-01 22:10:53'),\n(5,'pv','2022-01-02 19:10:52'),\n(5,'buy','2022-01-02 20:00:50');\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u67e5\u8be2 ",(0,i.jsx)(e.code,{children:"test"})," \u8868\u4e2d\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select * from test order by id;\n+------+--------+---------------------+\n| id   | action | time                |\n+------+--------+---------------------+\n|    1 | pv     | 2022-01-01 08:00:05 |\n|    1 | buy    | 2022-01-02 15:30:10 |\n|    2 | pv     | 2022-01-01 10:20:08 |\n|    2 | pv     | 2022-01-02 17:30:05 |\n|    3 | buy    | 2022-01-01 05:30:09 |\n|    3 | buy    | 2022-01-02 08:10:15 |\n|    4 | pv     | 2022-01-02 21:09:15 |\n|    5 | pv     | 2022-01-01 22:10:53 |\n|    5 | pv     | 2022-01-02 19:10:52 |\n|    5 | buy    | 2022-01-02 20:00:50 |\n+------+--------+---------------------+\n10 rows in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"retention"})," \u51fd\u6570\u8ba1\u7b97\u7528\u6237\u7559\u5b58\u7387\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u8ba1\u7b972022\u5e741\u67081\u65e5\u6d4f\u89c8\u8fc7\u5546\u54c1\u9875\uff08action='pv'\uff09\uff0c\u5e76\u4e14\u57282022\u5e741\u67082\u65e5\u4e0b\u5355\uff08action='buy'\uff09\u7684\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select id, retention([action='pv' and to_date(time)='2022-01-01',\n                              action='buy' and to_date(time)='2022-01-02']) as retention \nfrom test \ngroup by id\norder by id;\n\n+------+-----------+\n| id   | retention |\n+------+-----------+\n|    1 | [1,1]     |\n|    2 | [1,0]     |\n|    3 | [0,0]     |\n|    4 | [0,0]     |\n|    5 | [1,1]     |\n+------+-----------+\n5 rows in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u62371\u548c\u7528\u62375\u5728\u4e24\u5929\u5185\u90fd\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\uff0c\u56e0\u6b64\u8fd4\u56de\u6570\u7ec4[1,1]\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u62372\u5728\u7b2c\u4e8c\u5929\u6ca1\u6709\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\uff0c\u56e0\u6b64\u8fd4\u56de\u6570\u7ec4[1,0]\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u62373\u5373\u4fbf\u5728\u7b2c\u4e8c\u5929\u6ee1\u8db3\u4e86\u6307\u5b9a\u6761\u4ef6\uff0c\u4f46\u56e0\u4e3a\u7b2c\u4e00\u5929\u6ca1\u6709\u6ee1\u8db3\uff0c\u8fd4\u56de\u6570\u7ec4[0,0]\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u62374\u4e24\u5929\u90fd\u672a\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\uff0c\u56e0\u6b64\u8fd4\u56de\u6570\u7ec4[0,0]\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8ba1\u7b972022\u5e741\u67081\u65e5\u6d4f\u89c8\u8fc7\u5546\u54c1\u9875\uff08action='pv'\uff09\uff0c\u5e76\u4e14\u57282022\u5e741\u67082\u65e5\u4e0b\u5355\uff08action='buy'\uff09\u7684\u7528\u6237\u6bd4\u4f8b\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select sum(r[1]),sum(r[2])/sum(r[1])\nfrom (select id, retention([action='pv' and to_date(time)='2022-01-01',\n                            action='buy' and to_date(time)='2022-01-02']) as r \nfrom test \ngroup by id \norder by id) t;\n\n+-----------+---------------------------+\n| sum(r[1]) | (sum(r[2])) / (sum(r[1])) |\n+-----------+---------------------------+\n|         3 |        0.6666666666666666 |\n+-----------+---------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd4\u56de\u7ed3\u679c\u53732022\u5e741\u67082\u65e5\u7684\u7528\u6237\u7559\u5b58\u7387\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(e.p,{children:"retention\uff0c\u7559\u5b58\uff0c\u7559\u5b58\u7387"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(n){const e=i.useContext(t);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||c:r(n),i.createElement(t.Provider,{value:l},e)}}}]);