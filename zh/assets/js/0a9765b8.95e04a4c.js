"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47101],{2027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var l=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},i="case",d={id:"sql-reference/sql-functions/condition-functions/case_when",title:"case",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/condition-functions/case_when.md",sourceDirName:"sql-reference/sql-functions/condition-functions",slug:"/sql-reference/sql-functions/condition-functions/case_when",permalink:"/zh/docs/2.5/sql-reference/sql-functions/condition-functions/case_when",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/condition-functions/case_when.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CAST",permalink:"/zh/docs/2.5/sql-reference/sql-functions/cast"},next:{title:"coalesce",permalink:"/zh/docs/2.5/sql-reference/sql-functions/condition-functions/coalesce"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7b80\u5355 CASE \u8868\u8fbe\u5f0f",id:"\u7b80\u5355-case-\u8868\u8fbe\u5f0f",level:3},{value:"\u641c\u7d22 CASE \u8868\u8fbe\u5f0f\uff08\u6307\u5b9a\u4e86 ELSE\uff09",id:"\u641c\u7d22-case-\u8868\u8fbe\u5f0f\u6307\u5b9a\u4e86-else",level:3},{value:"Keywords",id:"keywords",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"case",children:"case"}),"\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,l.jsx)(n.p,{children:"CASE \u662f\u4e00\u79cd\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u6709\u4e24\u79cd\u5199\u6cd5\uff1a\u7b80\u5355 CASE \u8868\u8fbe\u5f0f\u548c\u641c\u7d22 CASE \u8868\u8fbe\u5f0f\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u7b80\u5355 CASE \u8868\u8fbe\u5f0f\u4e2d\uff0c\u5c06\u4e00\u4e2a\u8868\u8fbe\u5f0f ",(0,l.jsx)(n.code,{children:"expression"})," \u4e0e\u4e00\u4e2a\u503c\u6bd4\u8f83\u3002\u5982\u679c\u80fd\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de THEN \u4e2d\u7684\u7ed3\u679c\u3002\u5982\u679c\u672a\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de ELSE \u4e2d\u7684\u7ed3\u679c\u3002\u5982\u679c\u672a\u6307\u5b9a ELSE\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728\u641c\u7d22 CASE \u8868\u8fbe\u5f0f\u4e2d\uff0c\u4f1a\u5224\u65ad\u5e03\u5c14\u8868\u8fbe\u5f0f ",(0,l.jsx)(n.code,{children:"condition"})," \u7684\u7ed3\u679c\u662f\u5426\u4e3a TRUE\u3002\u4e3a TRUE \u7684\u8bdd\u8fd4\u56de THEN \u4e2d\u7684\u7ed3\u679c\uff0c\u5426\u5219\u8fd4\u56de ELSE \u4e2d\u7684\u7ed3\u679c\u3002\u5982\u679c\u672a\u6307\u5b9a ELSE\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7b80\u5355 CASE \u8868\u8fbe\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CASE expression\n    WHEN expression1 THEN result1\n    [WHEN expression2 THEN result2]\n    ...\n    [WHEN expressionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u641c\u7d22 CASE \u8868\u8fbe\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CASE WHEN condition1 THEN result1\n    [WHEN condition2 THEN result2]\n    ...\n    [WHEN conditionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7b80\u5355 CASE \u8868\u8fbe\u5f0f\u4e5f\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u641c\u7d22 CASE \u8868\u8fbe\u5f0f\u6765\u8868\u8fbe\uff0c\u529f\u80fd\u4e0a\u5bf9\u7b49\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CASE WHEN expression = expression1 THEN result1\n    [WHEN expression = expression2 THEN result2]\n    ...\n    [WHEN expression = expressionN THEN resultN]\n    [ELSE result]\nEND\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"expressionN"}),"\uff1a\u8981\u8fdb\u884c\u5bf9\u6bd4\u7684\u8868\u8fbe\u5f0f\u3002\u591a\u4e2a\u8868\u8fbe\u5f0f\u5fc5\u987b\u5728\u6570\u636e\u7c7b\u578b\u4e0a\u517c\u5bb9\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DATETIME\u3001DATE\u3001DECIMALV2\u3001DECIMAL32\u3001DECIMAL64\u3001DECIMAL128\u3001VARCHAR\u3001BITMAP\u3001PERCENTILE\u3001HLL\u3001TIME\u3001JSON\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"conditionN"}),"\uff1a\u8981\u8fdb\u884c\u5224\u65ad\u7684\u6761\u4ef6\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"resultN"}),"\uff1a\u8fd4\u56de\u7684\u7ed3\u679c\u3002\u591a\u4e2a\u7ed3\u679c\u5fc5\u987b\u5728\u6570\u636e\u7c7b\u578b\u4e0a\u517c\u5bb9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u662f\u6240\u6709 THEN \u5b50\u53e5\u7ed3\u679c\u4e2d\u7684\u516c\u5171\u7c7b\u578b (common type)\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,l.jsx)(n.code,{children:"test_case"}),"\uff0c\u6570\u636e\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_case(\n    name          STRING,\n    gender         INT,\n    ) DISTRIBUTED BY HASH(name);\n\nINSERT INTO test_case VALUES\n    ("Andy",1),\n    ("Jules",0),\n    ("Angel",-1),\n    ("Sam",null);\n\nSELECT * FROM test_case;\n+-------+--------+\n| name  | gender |\n+-------+--------+\n| Angel |     -1 |\n| Andy  |      1 |\n| Sam   |   NULL |\n| Jules |      0 |\n+-------+--------+-------+\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u7b80\u5355-case-\u8868\u8fbe\u5f0f",children:"\u7b80\u5355 CASE \u8868\u8fbe\u5f0f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6307\u5b9a\u4e86 ELSE\uff0c\u627e\u4e0d\u5230\u5339\u914d\u9879\u65f6\u8fd4\u56de ELSE \u4e2d\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",children:"mysql> select gender, case gender \n                    when 1 then 'male'\n                    when 0 then 'female'\n                    else 'error'\n               end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|   NULL | error      |\n|      0 | female     |\n|      1 | male       |\n|     -1 | error      |\n+--------+------------+\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u672a\u6307\u5b9a ELSE\uff0c\u627e\u4e0d\u5230\u5339\u914d\u9879\u65f6\u8fd4\u56de NULL\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",children:"select gender, case gender\n                    when 1 then 'male'\n                    when 0 then 'female'\n               end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|      1 | male       |\n|     -1 | NULL       |\n|   NULL | NULL       |\n|      0 | female     |\n+--------+------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u641c\u7d22-case-\u8868\u8fbe\u5f0f\u6307\u5b9a\u4e86-else",children:"\u641c\u7d22 CASE \u8868\u8fbe\u5f0f\uff08\u6307\u5b9a\u4e86 ELSE\uff09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-plain",children:"mysql> select gender, case when gender = 1 then 'male'\n                           when gender = 0 then 'female'\n                      end gender_str\nfrom test_case;\n+--------+------------+\n| gender | gender_str |\n+--------+------------+\n|   NULL | NULL       |\n|     -1 | NULL       |\n|      1 | male       |\n|      0 | female     |\n+--------+------------+\n"})}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.p,{children:"case when, case, case_when, case...when"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>c});var l=s(67294);const r=l.createContext({});function c(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:c(e),l.createElement(r.Provider,{value:d},n)}}}]);