"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33519],{24552:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=s(85893),a=s(11151);const l={displayed_sidebar:"Chinese"},r="UPDATE",i={id:"sql-reference/sql-statements/data-manipulation/UPDATE",title:"UPDATE",description:"\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u4e00\u5f20\u4e3b\u952e\u6a21\u578b\u8868\u4e2d\u7684\u6570\u636e\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-manipulation/UPDATE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/UPDATE",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/UPDATE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/UPDATE.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SUBMIT TASK",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK"},next:{title:"ALTER ROUTINE LOAD",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/alter-routine-load"}},c={},d=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"update",children:"UPDATE"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u66f4\u65b0\u4e00\u5f20\u4e3b\u952e\u6a21\u578b\u8868\u4e2d\u7684\u6570\u636e\u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"2.3 \uff5e 2.5 \u7248\u672c\uff0cStarRocks \u63d0\u4f9b UPDATE \u8bed\u53e5\uff0c\u5e76\u4e14\u4ec5\u652f\u6301\u5355\u8868 UPDATE \u4e14\u4e0d\u652f\u6301\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"UPDATE <table_name>\n    SET <column_name> = <expression> [, ...]\n    WHERE <where_condition>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"table_name"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f85\u66f4\u65b0\u7684\u8868\u7684\u540d\u79f0\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"column_name"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f85\u66f4\u65b0\u7684\u5217\u7684\u540d\u79f0\u3002\u4e0d\u9700\u8981\u5305\u542b\u8868\u540d\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"UPDATE t1 SET t1.col = 1"})," \u662f\u4e0d\u5408\u6cd5\u7684\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"expression"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u5217\u8d4b\u503c\u7684\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"where_condition"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53ea\u6709\u6ee1\u8db3 WHERE \u6761\u4ef6\u7684\u884c\u624d\u4f1a\u88ab\u66f4\u65b0\u3002\u8be5\u53c2\u6570\u4e3a\u5fc5\u9009\uff0c\u9632\u6b62\u8bef\u66f4\u65b0\u6574\u5f20\u8868\u3002\u5982\u9700\u66f4\u65b0\u6574\u5f20\u8868\uff0c\u8bf7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"WHERE true"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u8868 ",(0,t.jsx)(n.code,{children:"Employees"})," \u6765\u8bb0\u5f55\u96c7\u5458\u4fe1\u606f\uff0c\u5411\u8868\u4e2d\u63d2\u5165\u4e94\u884c\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE Employees (\n    EmployeeID INT,\n    Name VARCHAR(50),\n    Salary DECIMAL(10, 2)\n)\nPRIMARY KEY (EmployeeID) \nDISTRIBUTED BY HASH (EmployeeID) BUCKETS 1\nPROPERTIES (\"replication_num\" = \"3\");\n\nINSERT INTO Employees VALUES\n    (1, 'John Doe', 5000),\n    (2, 'Jane Smith', 6000),\n    (3, 'Robert Johnson', 5500),\n    (4, 'Emily Williams', 4500),\n    (5, 'Michael Brown', 7000);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u5bf9\u6240\u6709\u5458\u5de5\u52a0\u85aa 10%\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"UPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nWHERE true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u5bf9\u85aa\u6c34\u4f4e\u4e8e\u5e73\u5747\u85aa\u6c34\u7684\u5458\u5de5\u52a0\u85aa 10%\uff0c\u5219\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u8bed\u53e5\uff0c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"UPDATE Employees\nSET Salary = Salary * 1.1  -- \u5c06\u85aa\u6c34\u589e\u52a010%\nWHERE Salary < (SELECT AVG(Salary) FROM Employees);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,t.jsx)(n.p,{children:"2.3 \uff5e 2.5 \u7248\u672c\uff0cUPDATE \u8bed\u6cd5\u4ec5\u652f\u6301\u5355\u8868 UPDATE \u4e14\u4e0d\u652f\u6301\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff08CTE\uff09\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var t=s(67294);const a=t.createContext({});function l(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(a.Provider,{value:i},n)}}}]);