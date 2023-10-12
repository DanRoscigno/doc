"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57587],{92984:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(85893),t=s(11151);const i={displayed_sidebar:"Chinese31"},c="generate_series",l={id:"sql-reference/sql-functions/table-functions/generate_series",title:"generate_series",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/table-functions/generate_series.md",sourceDirName:"sql-reference/sql-functions/table-functions",slug:"/sql-reference/sql-functions/table-functions/generate_series",permalink:"/doc/zh/docs/sql-reference/sql-functions/table-functions/generate_series",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/table-functions/generate_series.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"FILES",permalink:"/doc/zh/docs/sql-reference/sql-functions/table-functions/files"},next:{title:"Utility Functions",permalink:"/doc/zh/docs/category/utility-functions-1"}},d={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"generate_series",children:"generate_series"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u751f\u6210\u4e00\u7cfb\u5217\u4ece ",(0,r.jsx)(n.code,{children:"start"})," \u5230 ",(0,r.jsx)(n.code,{children:"end"})," \u7684\u6570\u503c\uff0c\u6b65\u957f\u4e3a ",(0,r.jsx)(n.code,{children:"step"}),"\uff0c",(0,r.jsx)(n.code,{children:"step"})," \u9ed8\u8ba4\u4e3a 1\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"generate_series \u662f\u4e00\u4e2a\u8868\u51fd\u6570\u3002\u8868\u51fd\u6570\u4e3a\u6bcf\u4e2a\u8f93\u5165\u884c\u8fd4\u56de\u4e00\u4e2a\u884c\u96c6\u5408\u3002\u8fd4\u56de\u7684\u96c6\u5408\u53ef\u4ee5\u5305\u542b\u96f6\u884c\u3001\u4e00\u884c\u6216\u591a\u884c\u3002\u6bcf\u4e00\u884c\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 StarRocks \u4e2d\u8c03\u7528 generate_series() \u65f6\uff0c\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3a\u6570\u503c\u5e38\u91cf\uff0c\u5219\u9700\u8981\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"TABLE()"})," \u5173\u952e\u5b57\u5305\u88f9 generate_series()\uff1b\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3a\u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982\u5217\u540d\uff0c\u5219\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"TABLE()"})," \u5173\u952e\u5b57\u5305\u88f9\u3002\u5177\u4f53\u53c2\u89c1",(0,r.jsx)(n.a,{href:"#%E7%A4%BA%E4%BE%8B",children:"\u793a\u4f8b"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"generate_series(start, end [,step])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"}),"\uff1a\u8d77\u59cb\u503c\uff0c\u5fc5\u9009\u3002\u652f\u6301 INT\u3001BIGINT\u3001LARGEINT \u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"end"}),"\uff1a\u7ed3\u675f\u503c\uff0c\u5fc5\u9009\u3002\u652f\u6301 INT\u3001BIGINT\u3001LARGEINT \u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"step"}),"\uff1a\u6570\u503c\u9012\u589e\u6216\u8005\u9012\u51cf\u7684\u6b65\u957f\uff0c\u53ef\u9009\u3002\u652f\u6301 INT\u3001BIGINT\u3001LARGEINT \u7c7b\u578b\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002",(0,r.jsx)(n.code,{children:"step"})," \u53d6\u503c\u4e0d\u80fd\u4e3a 0\uff0c\u5426\u5219\u62a5\u9519\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e09\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\uff0c\u6bd4\u5982 ",(0,r.jsx)(n.code,{children:"generate_series(INT start, INT end [, INT step])"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u7cfb\u5217\u6570\u503c\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"start"})," \u548c ",(0,r.jsx)(n.code,{children:"end"})," \u7684\u7c7b\u578b\u76f8\u540c\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53 ",(0,r.jsx)(n.code,{children:"step"})," \u4e3a\u6b63\u6570\u65f6\uff0c\u5982\u679c ",(0,r.jsx)(n.code,{children:"start"})," \u5927\u4e8e ",(0,r.jsx)(n.code,{children:"end"}),"\uff0c\u5219\u8fd4\u56de\u96f6\u884c\u3002\u76f8\u53cd\uff0c\u5f53 ",(0,r.jsx)(n.code,{children:"step"})," \u4e3a\u8d1f\u6570\u65f6\uff0c\u5982\u679c ",(0,r.jsx)(n.code,{children:"start"})," \u5c0f\u4e8e ",(0,r.jsx)(n.code,{children:"end"}),"\uff0c\u5219\u8fd4\u56de\u96f6\u884c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"step"})," \u4e3a 0 \u4f1a\u8fd4\u56de\u9519\u8bef\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5bf9 NULL \u503c\u7684\u5904\u7406\uff1a\u8f93\u5165\u53c2\u6570\u4e3a literal null \u65f6\uff0c\u4f1a\u8fd4\u56de\u62a5\u9519\uff1b\u8f93\u5165\u53c2\u6570\u4e3a\u8868\u8fbe\u5f0f\uff0c\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u4e3a NULL \u65f6\uff0c\u4f1a\u8fd4\u56de\u96f6\u884c\uff0c\u53c2\u89c1\u793a\u4f8b\u4e94\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5347\u5e8f\u8fd4\u56de 2 \u5230 5 \u4e4b\u95f4\u7684\u6574\u6570\u503c\uff0c\u4f7f\u7528\u9ed8\u8ba4\u6b65\u957f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"MySQL > select * from TABLE(generate_series(2, 5));\n+-----------------+\n| generate_series |\n+-----------------+\n|               2 |\n|               3 |\n|               4 |\n|               5 |\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5347\u5e8f\u8fd4\u56de 2 \u548c 5 \u4e4b\u95f4\u7684\u6574\u6570\u503c\uff0c\u6b65\u957f\u4e3a 2\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"MySQL > select * from TABLE(generate_series(2, 5, 2));\n+-----------------+\n| generate_series |\n+-----------------+\n|               2 |\n|               4 |\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u964d\u5e8f\u8fd4\u56de 5 \u548c 2 \u4e4b\u95f4\u7684\u6570\u503c\uff0c\u6b65\u957f\u4e3a -1\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"MySQL > select * from TABLE(generate_series(5, 2, -1));\n+-----------------+\n| generate_series |\n+-----------------+\n|               5 |\n|               4 |\n|               3 |\n|               2 |\n+-----------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u6b65\u957f\u4e3a\u8d1f\u6570\uff0c\u8d77\u59cb\u503c\u5c0f\u4e8e\u7ed3\u675f\u503c\uff0c\u8fd4\u56de\u96f6\u884c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"MySQL > select * from TABLE(generate_series(2, 5, -1));\nEmpty set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u4e94\uff1a\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u4f5c\u4e3a generate_series() \u7684\u8f93\u5165\u53c2\u6570\u3002\u6ce8\u610f\u6b64\u65f6",(0,r.jsx)(n.strong,{children:"\u65e0\u9700"}),"\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"TABLE()"}),"\u3002\u5f53\u8f93\u5165\u884c\u6709 NULL \u65f6\uff0c\u5bf9\u4e8e\u8be5\u884c\u4f1a\u8fd4\u56de\u96f6\u884c\uff0c\u6bd4\u5982\u4e0b\u8868\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"(NULL, 10)"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE t_numbers(start INT, end INT)\nDUPLICATE KEY (start)\nDISTRIBUTED BY HASH(start) BUCKETS 1;\n\nINSERT INTO t_numbers VALUES\n(1, 3),\n(5, 2),\n(NULL, 10),\n(4, 7),\n(9,6);\n\nSELECT * FROM t_numbers;\n+-------+------+\n| start | end  |\n+-------+------+\n|  NULL |   10 |\n|     1 |    3 |\n|     4 |    7 |\n|     5 |    2 |\n|     9 |    6 |\n+-------+------+\n\n-- \u9ed8\u8ba4\u6b65\u957f\u4e3a 1\uff0c\u5bf9\u6570\u636e\u884c\uff081,3\uff09\u548c (4,7) \u5347\u5e8f\u8fd4\u56de\u591a\u884c\u3002\nSELECT * FROM t_numbers, generate_series(t_numbers.start, t_numbers.end);\n+-------+------+-----------------+\n| start | end  | generate_series |\n+-------+------+-----------------+\n|     1 |    3 |               1 |\n|     1 |    3 |               2 |\n|     1 |    3 |               3 |\n|     4 |    7 |               4 |\n|     4 |    7 |               5 |\n|     4 |    7 |               6 |\n|     4 |    7 |               7 |\n+-------+------+-----------------+\n\n-- \u6b65\u957f\u4e3a -1\uff0c\u5bf9\u6570\u636e\u884c\uff085,2\uff09\u548c (9,6) \u964d\u5e8f\u8fd4\u56de\u591a\u884c\u3002\nSELECT * FROM t_numbers, generate_series(t_numbers.start, t_numbers.end, -1);\n+-------+------+-----------------+\n| start | end  | generate_series |\n+-------+------+-----------------+\n|     5 |    2 |               5 |\n|     5 |    2 |               4 |\n|     5 |    2 |               3 |\n|     5 |    2 |               2 |\n|     9 |    6 |               9 |\n|     9 |    6 |               8 |\n|     9 |    6 |               7 |\n|     9 |    6 |               6 |\n+-------+------+-----------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"\u8868\u683c\u51fd\u6570\uff0c\u8868\u51fd\u6570\uff0ctable function\uff0cgenerate series"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:l},n)}}}]);