"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52398],{68156:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=i(85893),d=i(11151);const c={displayed_sidebar:"Chinese31"},l="window_funnel",r={id:"sql-reference/sql-functions/aggregate-functions/window_funnel",title:"window_funnel",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/aggregate-functions/window_funnel.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/window_funnel",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/window_funnel",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/window_funnel.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"VARIANCE, VAR_POP, VARIANCE_POP",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/aggregate-functions/variance"},next:{title:"all_match",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/all_match"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function h(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong"},(0,d.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"window_funnel",children:"window_funnel"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u641c\u7d22\u6ed1\u52a8\u65f6\u95f4\u7a97\u53e3\u5185\u7684\u4e8b\u4ef6\u5217\u8868\uff0c\u8ba1\u7b97\u6761\u4ef6\u5339\u914d\u7684\u4e8b\u4ef6\u94fe\u91cc\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\u3002\u8be5\u51fd\u6570\u662f\u4e00\u79cd\u6f0f\u6597\u51fd\u6570\uff0c\u662f\u6bd4\u8f83\u5e38\u89c1\u7684\u8f6c\u5316\u5206\u6790\u65b9\u6cd5\uff0c\u7528\u4e8e\u5206\u6790\u7528\u6237\u5728\u5404\u9636\u6bb5\u884c\u4e3a\u7684\u8f6c\u5316\u7387\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u9075\u5faa\u5982\u4e0b\u89c4\u5219\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4ece\u4e8b\u4ef6\u94fe\u4e2d\u7684\u7b2c\u4e00\u4e2a\u6761\u4ef6\u5f00\u59cb\u5224\u65ad\u3002\u5982\u679c\u6570\u636e\u4e2d\u5305\u542b\u7b26\u5408\u6761\u4ef6\u7684\u4e8b\u4ef6\uff0c\u5219\u5411\u8ba1\u6570\u5668\u52a0 1\uff0c\u5e76\u4ee5\u6b64\u4e8b\u4ef6\u5bf9\u5e94\u7684\u65f6\u95f4\u4f5c\u4e3a\u6ed1\u52a8\u7a97\u53e3\u7684\u8d77\u59cb\u65f6\u95f4\u3002\u5982\u679c\u672a\u80fd\u627e\u5230\u7b26\u5408\u7b2c\u4e00\u4e2a\u6761\u4ef6\u7684\u6570\u636e\uff0c\u5219\u8fd4\u56de\u4e3a 0."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u6ed1\u52a8\u7a97\u53e3\u5185\uff0c\u5982\u679c\u4e8b\u4ef6\u94fe\u4e2d\u7684\u4e8b\u4ef6\u6309\u987a\u5e8f\u53d1\u751f\uff0c\u5219\u8ba1\u6570\u5668\u9012\u589e\uff1b\u5982\u679c\u8d85\u51fa\u4e86\u65f6\u95f4\u7a97\u53e3\uff0c\u5219\u8ba1\u6570\u5668\u4e0d\u518d\u589e\u52a0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5982\u6709\u591a\u6761\u7b26\u5408\u6761\u4ef6\u7684\u4e8b\u4ef6\u94fe\uff0c\u5219\u8f93\u51fa\u6700\u957f\u7684\u4e8b\u4ef6\u94fe\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BIGINT window_funnel(BIGINT window, DATE|DATETIME time, INT mode, array[cond1, cond2, ..., condN])\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"window"}),"\uff1a\u6ed1\u52a8\u7a97\u53e3\u7684\u5927\u5c0f\uff0c\u7c7b\u578b\u4e3a BIGINT\u3002\u5355\u4f4d\u53d6\u51b3\u4e8e ",(0,s.jsx)(e.code,{children:"time"})," \u53c2\u6570\uff0c\u5982\u679c ",(0,s.jsx)(e.code,{children:"time"})," \u7684\u53d6\u503c\u7c7b\u578b\u4e3aDATE\uff0c\u7a97\u53e3\u5355\u4f4d\u4e3a\u5929\uff1b\u5982\u679c ",(0,s.jsx)(e.code,{children:"time"})," \u7684\u53d6\u503c\u7c7b\u578b\u4e3a DATETIME\uff0c\u7a97\u53e3\u5355\u4f4d\u4e3a\u79d2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"time"}),"\uff1a\u5305\u542b\u65f6\u95f4\u6233\u7684\u5217\u3002\u76ee\u524d\u652f\u6301 DATE \u548c DATETIME \u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"mode"}),"\uff1a\u4e8b\u4ef6\u94fe\u7684\u7b5b\u9009\u6a21\u5f0f\uff0c\u7c7b\u578b\u4e3a INT\u3002\u53d6\u503c\u8303\u56f4\uff1a0\uff0c1\uff0c2\uff0c4\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"0"}),"\uff0c\u8868\u793a\u6267\u884c\u6700\u4e00\u822c\u7684\u6f0f\u6597\u8ba1\u7b97\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"1"})," \u65f6\uff08bits \u8bbe\u7f6e\u7b2c 1 \u4f4d\uff09\u8868\u793a ",(0,s.jsx)(e.code,{children:"DEDUPLICATION"})," \u6a21\u5f0f\uff0c\u5373\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u4e0d\u80fd\u6709\u91cd\u590d\u7684\u4e8b\u4ef6\u3002\u5047\u8bbe ",(0,s.jsx)(e.code,{children:"array"})," \u53c2\u6570\u4e3a ",(0,s.jsx)(e.code,{children:"[event_type='A', event_type='B', event_type='C', event_type='D']"}),'\uff0c\u539f\u4e8b\u4ef6\u94fe\u4e3a "A-B-C-B-D"\u3002\u7531\u4e8e\u4e8b\u4ef6 B \u91cd\u590d\uff0c\u90a3\u4e48\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u53ea\u80fd\u662f "A-B-C"\u3002']}),"\n",(0,s.jsxs)(e.li,{children:["\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"2"})," \u65f6\uff08bits \u8bbe\u7f6e\u7b2c 2 \u4f4d\uff09\u8868\u793a ",(0,s.jsx)(e.code,{children:"FIXED"})," \u6a21\u5f0f\uff0c\u5373\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u4e0d\u80fd\u6709\u8df3\u8dc3\u7684\u4e8b\u4ef6\uff0c\u5047\u8bbe ",(0,s.jsx)(e.code,{children:"array"}),' \u53c2\u6570\u5982\u4e0a\u4e0d\u53d8\uff0c\u539f\u4e8b\u4ef6\u94fe\u4e3a "A-B-D-C"\uff0c\u7531\u4e8e\u4e8b\u4ef6 D \u8df3\u8dc3\uff0c\u90a3\u4e48\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u53ea\u80fd\u662f "A-B"\u3002']}),"\n",(0,s.jsxs)(e.li,{children:["\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"4"})," \u65f6\uff08bits \u8bbe\u7f6e\u7b2c3\u4f4d\uff09\u8868\u793a ",(0,s.jsx)(e.code,{children:"INCREASE"})," \u6a21\u5f0f\uff0c\u5373\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u4e2d\uff0c\u8fde\u7eed\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\u5fc5\u987b\u4e25\u683c\u9012\u589e\u3002",(0,s.jsx)(e.strong,{children:"\u6b64\u6a21\u5f0f\u81ea 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"array"}),"\uff1a\u5b9a\u4e49\u7684\u4e8b\u4ef6\u94fe\uff0c\u7c7b\u578b\u4e3a ARRAY \u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de BIGINT \u7c7b\u578b\u7684\u503c\uff0c\u503c\u4e3a\u6ed1\u52a8\u7a97\u53e3\u5185\u6ee1\u8db3\u6761\u4ef6\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u7b5b\u9009\u51fa\u4e0d\u540c ",(0,s.jsx)(e.code,{children:"uid"})," \u5bf9\u5e94\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff0c\u7a97\u53e3\u4e3a 1800s\uff0c\u7b5b\u9009\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,s.jsx)(e.code,{children:"action"}),"\uff0c\u6570\u636e\u4ee5 ",(0,s.jsx)(e.code,{children:"uid"})," \u6392\u5e8f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT * FROM action;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | \u6d4f\u89c8       | 2020-01-02 11:00:00 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:10:00 |\n| 1    | \u4e0b\u5355       | 2020-01-02 11:20:00 |\n| 1    | \u652f\u4ed8       | 2020-01-02 11:30:00 |\n| 1    | \u6d4f\u89c8       | 2020-01-02 11:00:00 |\n| 2    | \u4e0b\u5355       | 2020-01-02 11:00:00 |\n| 2    | \u652f\u4ed8       | 2020-01-02 11:10:00 |\n| 3    | \u6d4f\u89c8       | 2020-01-02 11:20:00 |\n| 3    | \u70b9\u51fb       | 2020-01-02 12:00:00 |\n| 4    | \u6d4f\u89c8       | 2020-01-02 11:50:00 |\n| 4    | \u70b9\u51fb       | 2020-01-02 12:00:00 |\n| 5    | \u6d4f\u89c8       | 2020-01-02 11:50:00 |\n| 5    | \u70b9\u51fb       | 2020-01-02 12:00:00 |\n| 5    | \u4e0b\u5355       | 2020-01-02 11:10:00 |\n| 6    | \u6d4f\u89c8       | 2020-01-02 11:50:00 |\n| 6    | \u70b9\u51fb       | 2020-01-02 12:00:00 |\n| 6    | \u4e0b\u5355       | 2020-01-02 12:10:00 |\n+------+------------+---------------------+\n17 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0bSQL\u8bed\u53e5\u8ba1\u7b97\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid,\n       window_funnel(1800,time,0,[event_type='\u6d4f\u89c8', event_type='\u70b9\u51fb', \n        event_type='\u4e0b\u5355', event_type='\u652f\u4ed8'])\n        AS level\nFROM action\nGROUP BY uid\nORDER BY uid; \n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     4 |\n| 2    |     0 |\n| 3    |     1 |\n| 4    |     2 |\n| 5    |     2 |\n| 6    |     3 |\n+------+-------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=1 \u5339\u914d\u7684\u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8-\u70b9\u51fb-\u4e0b\u5355-\u652f\u4ed8\u201d\uff0c\u8f93\u51fa\u4e3a 4\uff0c\u56e0\u4e3a\u6700\u540e\u4e00\u4e2a\u6d4f\u89c8\u4e8b\u4ef6\u7684\u65f6\u95f4\u4e0d\u7b26\u5408\u6761\u4ef6\uff0c\u672a\u8ba1\u5165\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=2 \u5bf9\u5e94\u7684\u4e8b\u4ef6\u94fe\u672a\u4ece\u7b2c\u4e00\u4e2a\u4e8b\u4ef6\u201c\u6d4f\u89c8\u201d\u5f00\u59cb\uff0c\u8f93\u51fa\u4e3a 0\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=3 \u5bf9\u5e94\u7684\u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8\u201d\uff0c\u8f93\u51fa\u4e3a 1\uff0c\u56e0\u4e3a\u201c\u70b9\u51fb\u201d\u4e8b\u4ef6\u8d85\u8fc7 1800s\u7a97\u53e3\uff0c\u672a\u8ba1\u5165\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=4 \u5bf9\u5e94\u7684\u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8-\u70b9\u51fb\u201d\uff0c\u8f93\u51fa\u4e3a 2\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=5 \u7684\u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8-\u70b9\u51fb\u201d\uff0c\u8f93\u51fa\u4e3a 2\uff0c\u56e0\u4e3a\u4e0b\u5355\u65f6\u95f4\u4e0d\u5c5e\u4e8e\u8be5\u4e8b\u4ef6\u94fe\uff0c\u672a\u8ba1\u5165\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"uid=6 \u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8-\u70b9\u51fb-\u4e0b\u5355\u201d\uff0c\u8f93\u51fa\u4e3a 3\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u7b5b\u9009\u51fa\u4e0d\u540c ",(0,s.jsx)(e.code,{children:"uid"})," \u5bf9\u5e94\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff0c\u7a97\u53e3\u4e3a 1800s\uff0c\u5206\u522b\u8ba1\u7b97\u7b5b\u9009\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"0"})," \u548c ",(0,s.jsx)(e.code,{children:"1"})," \u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,s.jsx)(e.code,{children:"action1"}),"\uff0c\u6570\u636e\u4ee5 ",(0,s.jsx)(e.code,{children:"time"})," \u6392\u5e8f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"mysql> select * from action1 order by time;\n+------+------------+---------------------+ \n| uid  | event_type | time                |     \n+------+------------+---------------------+\n| 1    | \u6d4f\u89c8       | 2020-01-02 11:00:00 |\n| 2    | \u6d4f\u89c8       | 2020-01-02 11:00:01 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:10:00 |\n| 1    | \u4e0b\u5355       | 2020-01-02 11:29:00 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:29:50 |\n| 1    | \u652f\u4ed8       | 2020-01-02 11:30:00 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:40:00 |\n+------+------------+---------------------+\n7 rows in set (0.03 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0b SQL \u8bed\u53e5\u8ba1\u7b97\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid,\n       window_funnel(1800,time,0,[event_type='\u6d4f\u89c8', \n        event_type='\u70b9\u51fb', event_type='\u4e0b\u5355', event_type='\u652f\u4ed8'])\n        AS level\nFROM action1\nGROUP BY uid\nORDER BY uid;\n\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     4 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5bf9\u4e8e uid=1\uff0c\u5373\u4f7f\u201c\u70b9\u51fb\u4e8b\u4ef6 (2020-01-02 11:29:50) \u201d\u5df2\u7ecf\u91cd\u590d\u51fa\u73b0\uff0c\u4f46\u662f\u4f9d\u7136\u8ba1\u5165\uff0c\u6700\u7ec8\u8f93\u51fa ",(0,s.jsx)(e.code,{children:"4"}),"\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86\u6a21\u5f0f ",(0,s.jsx)(e.code,{children:"0"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06 ",(0,s.jsx)(e.code,{children:"mode"})," \u6539\u4e3a ",(0,s.jsx)(e.code,{children:"1"}),"\uff0c\u8fdb\u884c\u53bb\u91cd\uff0c\u518d\u6b21\u6267\u884c SQL:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     3 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u8f93\u51fa\u4e3a ",(0,s.jsx)(e.code,{children:"3"}),"\uff0c\u53bb\u91cd\u540e\u7b5b\u9009\u51fa\u7684\u6700\u957f\u4e8b\u4ef6\u94fe\u4e3a\u201c\u6d4f\u89c8-\u70b9\u51fb-\u4e0b\u5355\u201d\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u7b5b\u9009\u51fa ",(0,s.jsx)(e.code,{children:"uid"})," \u5bf9\u5e94\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff0c\u7a97\u53e3\u4e3a1900s\uff0c\u5206\u522b\u8ba1\u7b97\u7b5b\u9009\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"0"})," \u548c ",(0,s.jsx)(e.code,{children:"2"})," \u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,s.jsx)(e.code,{children:"action2"}),"\uff0c\u6570\u636e\u4ee5 ",(0,s.jsx)(e.code,{children:"time"}),"\u6392\u5e8f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"mysql> select * from action2 order by time;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | \u6d4f\u89c8       | 2020-01-02 11:00:00 |\n| 2    | \u6d4f\u89c8       | 2020-01-02 11:00:01 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:10:00 |\n| 1    | \u652f\u4ed8       | 2020-01-02 11:30:00 |\n| 1    | \u4e0b\u5355       | 2020-01-02 11:31:00 |\n+------+------------+---------------------+\n5 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0b SQL \u8bed\u53e5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid,\n       window_funnel(1900,time,0,[event_type='\u6d4f\u89c8', event_type='\u70b9\u51fb', \n        event_type='\u4e0b\u5355', event_type='\u652f\u4ed8'])\n        AS level\nFROM action2\nGROUP BY uid\nORDER BY uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     3 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u5bf9\u4e8e uid=1\uff0c\u8f93\u51fa\u4e3a ",(0,s.jsx)(e.code,{children:"3"}),"\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86\u6a21\u5f0f ",(0,s.jsx)(e.code,{children:"0"}),"\uff0c\u6240\u4ee5\u201c\u652f\u4ed8 (2020-01-02 11:30:00)\u201d \u8fd9\u4e00\u8df3\u8dc3\u7684\u4e8b\u4ef6\u5e76\u6ca1\u6709\u963b\u65ad\u7b5b\u9009\u51fa\u7684\u4e8b\u4ef6\u94fe\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06 ",(0,s.jsx)(e.code,{children:"mode"})," \u6539\u4e3a ",(0,s.jsx)(e.code,{children:"2"}),"\uff0c\u518d\u6b21\u6267\u884c SQL\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid,\n       window_funnel(1900,time,2,[event_type='\u6d4f\u89c8', event_type='\u70b9\u51fb', \n        event_type='\u4e0b\u5355', event_type='\u652f\u4ed8'])\n        AS level\nFROM action2\nGROUP BY uid\nORDER BY uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     2 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.06 sec)\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u8f93\u51fa\u4e3a ",(0,s.jsx)(e.code,{children:"2"}),"\uff0c\u56e0\u4e3a\u201c\u652f\u4ed8\u201d\u4e8b\u4ef6\u8df3\u8dc3\uff0c\u505c\u6b62\u8ba1\u6570\uff0c\u6b64\u65f6\u7b5b\u9009\u51fa\u7684\u6700\u5927\u4e8b\u4ef6\u94fe\u662f\u201c\u6d4f\u89c8-\u70b9\u51fb\u201d\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u56db\uff1a\u7b5b\u9009\u51fa ",(0,s.jsx)(e.code,{children:"uid"})," \u5bf9\u5e94\u7684\u6700\u5927\u8fde\u7eed\u4e8b\u4ef6\u6570\uff0c\u7a97\u53e3\u4e3a 1900s\uff0c\u5206\u522b\u8ba1\u7b97\u7b5b\u9009\u6a21\u5f0f\u4e3a ",(0,s.jsx)(e.code,{children:"0"}),"\uff08\u65f6\u95f4\u6233\u4e0d\u9700\u8981\u4e25\u683c\u9012\u589e\uff09\u548c ",(0,s.jsx)(e.code,{children:"4"}),"\uff08\u65f6\u95f4\u6233\u9700\u8981\u4e25\u683c\u9012\u589e\uff09\u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5047\u8bbe\u6709\u8868 ",(0,s.jsx)(e.code,{children:"action3"}),"\uff0c\u6570\u636e\u4ee5 ",(0,s.jsx)(e.code,{children:"time"})," \u6392\u5e8f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"select * from action3 order by time;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | \u6d4f\u89c8       | 2020-01-02 11:00:00 |\n| 1    | \u70b9\u51fb       | 2020-01-02 11:00:01 |\n| 2    | \u6d4f\u89c8       | 2020-01-02 11:00:03 |\n| 1    | \u4e0b\u5355       | 2020-01-02 11:00:31 |\n| 2    | \u70b9\u51fb       | 2020-01-02 11:00:03 |\n| 2    | \u4e0b\u5355       | 2020-01-02 11:01:03 |\n+------+------------+---------------------+\n3 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0b SQL \u8bed\u53e5\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid,\n       window_funnel(1900,time,0,[event_type='\u6d4f\u89c8', event_type='\u70b9\u51fb',\n        event_type='\u4e0b\u5355'])\n        AS level\nFROM action3\nGROUP BY uid\nORDER BY uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n|    1 |     3 |\n|    2 |     3 |\n+------+-------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e uid=1 \u548c 2\uff0c\u8f93\u51fa\u5747\u4e3a 3\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5c06 ",(0,s.jsx)(e.code,{children:"mode"})," \u6539\u4e3a ",(0,s.jsx)(e.code,{children:"4"}),"\uff0c\u518d\u6b21\u6267\u884c SQL\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plaintext",children:"SELECT uid, window_funnel(1900,time,4,[event_type='\u6d4f\u89c8', event_type='\u70b9\u51fb',\n        event_type='\u4e0b\u5355'])\n        AS level\nFROM action3\nGROUP BY uid\nORDER BY uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n|    1 |     3 |\n|    2 |     1 |\n+------+-------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e uid=2\uff0c\u8f93\u51fa\u4e3a 1\uff0c\u56e0\u4e3a\u6307\u5b9a\u4e86\u65f6\u95f4\u6233\u4e25\u683c\u9012\u589e\uff0c\u8be5\u7528\u6237\u7684\u201c\u70b9\u51fb\u201d\u548c\u201c\u6d4f\u89c8\u201d\u53d1\u751f\u5728\u540c\u4e00\u79d2\uff0c\u56e0\u6b64\u201c\u6d4f\u89c8\u201d\u53ca\u5176\u540e\u884c\u4e3a\u5747\u88ab\u5ffd\u7565\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"\u6f0f\u6597\uff0c\u6f0f\u6597\u51fd\u6570\uff0c\u8f6c\u5316\u7387\uff0cfunnel"})]})}const x=function(n={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(h,n)})):h(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>r,ah:()=>c});var s=i(67294);const d=s.createContext({});function c(n){const e=s.useContext(d);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function r({components:n,children:e,disableParentContext:i}){let r;return r=i?"function"==typeof n?n({}):n||l:c(n),s.createElement(d.Provider,{value:r},e)}}}]);