"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[75729],{40636:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var c=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese31"},o="group_concat",l={id:"sql-reference/sql-functions/string-functions/group_concat",title:"group_concat",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/string-functions/group_concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/group_concat",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/group_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/group_concat.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"find_in_set",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/find_in_set"},next:{title:"hex",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/hex"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"keywords",id:"keywords",level:2}];function a(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",ol:"ol"},(0,i.ah)(),n.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"group_concat",children:"group_concat"}),"\n",(0,c.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(e.p,{children:["\u5c06\u5206\u7ec4\u4e2d\u7684\u591a\u4e2a\u975e NULL \u503c\u8fde\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u53c2\u6570 ",(0,c.jsx)(e.code,{children:"sep"})," \u4e3a\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\uff0c\u8be5\u53c2\u6570\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(e.code,{children:","}),"\u3002\u8be5\u51fd\u6570\u5728\u8fde\u63a5\u65f6\u4f1a\u5ffd\u7565 NULL \u503c\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u4ece 3.0.6\uff0c3.1.3 \u7248\u672c\u5f00\u59cb\uff0cgroup_concat \u652f\u6301\u4f7f\u7528 DISTINCT \u548c ORDER BY\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR GROUP_CONCAT([DISTINCT] expr [,expr ...]\n             [ORDER BY {unsigned_integer | col_name | expr}\n                 [ASC | DESC] [,col_name ...]]\n             [SEPARATOR sep])\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"expr"}),": \u5f85\u62fc\u63a5\u7684\u503c\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u53ef\u4ee5\u6307\u5b9a DISTINCT \u5173\u952e\u5b57\u5728\u8fde\u63a5\u4e4b\u524d\u79fb\u9664\u5206\u7ec4\u4e2d\u7684\u91cd\u590d\u503c\u3002\u5982\u679c\u60f3\u76f4\u63a5\u8fde\u63a5\u591a\u4e2a\u503c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/concat",children:"concat"})," \u548c ",(0,c.jsx)(e.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/string-functions/concat_ws",children:"concat_ws"})," \u6765\u6307\u5b9a\u8fde\u63a5\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsx)(e.li,{children:"ORDER BY \u540e\u53ef\u4ee5\u8ddf unsigned_integer (\u4ece 1 \u5f00\u59cb)\u3001\u5217\u540d\u3001\u6216\u666e\u901a\u8868\u8fbe\u5f0f\u3002ORDER BY \u7528\u4e8e\u6307\u5b9a\u6309\u5347\u5e8f\u6216\u964d\u5e8f\u5bf9\u8981\u8fde\u63a5\u7684\u503c\u8fdb\u884c\u6392\u5e8f\u3002\u9ed8\u8ba4\u6309\u5347\u5e8f\u6392\u5e8f\u3002\u5982\u679c\u8981\u6309\u964d\u5e8f\u6392\u5e8f\uff0c\u9700\u8981\u6307\u5b9a DESC\u3002"}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"sep"}),"\uff1a\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\uff0c\u53ef\u9009\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u9017\u53f7 ",(0,c.jsx)(e.code,{children:","})," \u4f5c\u4e3a\u8fde\u63a5\u7b26\u3002\u5982\u679c\u8981\u4f7f\u7528\u7a7a\u5b57\u7b26\u6765\u8fde\u63a5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"''"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,c.jsx)(e.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5982\u679c\u6ca1\u6709\u975e NULL \u503c\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u53d8\u91cf ",(0,c.jsx)(e.a,{href:"/doc/zh/docs/3.0/reference/System_variable#groupconcatmaxlen",children:"group_concat_max_len"})," \u6765\u63a7\u5236\u53ef\u4ee5\u8fd4\u56de\u7684\u6700\u5927\u5b57\u7b26\u957f\u5ea6\u3002\u9ed8\u8ba4\u503c\uff1a1024\u3002\u6700\u5c0f\u503c\uff1a4\u3002\u5355\u4f4d\uff1a\u5b57\u7b26\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u53d8\u91cf\u7684\u8bbe\u7f6e\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SET [GLOBAL | SESSION] group_concat_max_len = <value>\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5efa\u8868\u5e76\u63d2\u5165\u6570\u636e\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `ss` (\n  `id` int(11) NULL COMMENT "",\n  `name` varchar(255) NULL COMMENT "",\n  `subject` varchar(255) NULL COMMENT "",\n  `score` int(11) NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_num" = "1"\n);\n\ninsert into ss values (1,"Tom","English",90);\ninsert into ss values (1,"Tom","Math",80);\ninsert into ss values (2,"Tom","English",NULL);\ninsert into ss values (2,"Tom",NULL,NULL);\ninsert into ss values (3,"May",NULL,NULL);\ninsert into ss values (3,"Ti","English",98);\ninsert into ss values (4,NULL,NULL,NULL);\ninsert into ss values (NULL,"Ti","Phy",98);\n\nselect * from ss order by id;\n+------+------+---------+-------+\n| id   | name | subject | score |\n+------+------+---------+-------+\n| NULL | Ti   | Phy     |    98 |\n|    1 | Tom  | English |    90 |\n|    1 | Tom  | Math    |    80 |\n|    2 | Tom  | English |  NULL |\n|    2 | Tom  | NULL    |  NULL |\n|    3 | May  | NULL    |  NULL |\n|    3 | Ti   | English |    98 |\n|    4 | NULL | NULL    |  NULL |\n+------+------+---------+-------+\n'})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528 group_concat \u5bf9\u503c\u8fdb\u884c\u62fc\u63a5\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5bf9 ",(0,c.jsx)(e.code,{children:"name"})," \u5217\u7684\u503c\u8fdb\u884c\u62fc\u63a5\uff0c\u4f7f\u7528\u9ed8\u8ba4\u8fde\u63a5\u7b26\uff0c\u5ffd\u7565 NULL \u503c\u3002\u4e0d\u5bf9\u6570\u636e\u8fdb\u884c\u53bb\u91cd\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"select group_concat(name) as res from ss;\n+---------------------------+\n| res                       |\n+---------------------------+\n| Tom,Tom,Ti,Tom,Tom,May,Ti |\n+---------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5bf9 ",(0,c.jsx)(e.code,{children:"name"})," \u5217\u7684\u503c\u8fdb\u884c\u62fc\u63a5\uff0c\u4f7f\u7528\u9ed8\u8ba4\u8fde\u63a5\u7b26\uff0c\u5ffd\u7565 NULL \u503c\u3002\u4f7f\u7528 DISTINCT \u5bf9\u6570\u636e\u8fdb\u884c\u53bb\u91cd\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"select group_concat(distinct name) as res from ss;\n+---------------------------+\n| res                       |\n+---------------------------+\n| Ti,May,Tom                |\n+---------------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06\u76f8\u540c ID \u7684 ",(0,c.jsx)(e.code,{children:"name"})," \u548c ",(0,c.jsx)(e.code,{children:"subject"})," \u7ec4\u5408\u6309\u7167 ",(0,c.jsx)(e.code,{children:"score"})," \u7684\u5347\u5e8f\u8fdb\u884c\u8fde\u63a5\u3002\u6bd4\u5982\u8fd4\u56de\u793a\u4f8b\u4e2d\u7684\u7b2c\u4e8c\u884c\u6570\u636e ",(0,c.jsx)(e.code,{children:"TomMath,TomEnglish"})," \u5c31\u662f\u5c06 ID \u4e3a 1 \u7684 ",(0,c.jsx)(e.code,{children:"TomMath"})," and ",(0,c.jsx)(e.code,{children:"TomEnglish"})," \u7ec4\u5408\u6309\u7167 ",(0,c.jsx)(e.code,{children:"score"})," \u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\u3002"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"select id, group_concat(distinct name,subject order by score) as res from ss group by id order by id;\n+------+--------------------+\n| id   | res                |\n+------+--------------------+\n| NULL | TiPhy              |\n|    1 | TomMath,TomEnglish |\n|    2 | TomEnglish         |\n|    3 | TiEnglish          |\n|    4 | NULL               |\n+------+--------------------+\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u793a\u4f8b\u56db\uff1a\u5728 group_concat \u4e2d\u5d4c\u5957 concat \u51fd\u6570\u3002concat \u6307\u5b9a ",(0,c.jsx)(e.code,{children:"name"})," \u548c ",(0,c.jsx)(e.code,{children:"subject"}),' \u7684\u8fde\u63a5\u683c\u5f0f\u4e3a "name-subject"\u3002\u67e5\u8be2\u903b\u8f91\u548c\u793a\u4f8b\u4e09\u76f8\u540c\u3002']}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"select id, group_concat(distinct concat(name,'-',subject) order by score) as res from ss group by id order by id;\n+------+----------------------+\n| id   | res                  |\n+------+----------------------+\n| NULL | Ti-Phy               |\n|    1 | Tom-Math,Tom-English |\n|    2 | Tom-English          |\n|    3 | Ti-English           |\n|    4 | NULL                 |\n+------+----------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u4e94\uff1a\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u7ed3\u679c\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"select group_concat(distinct name) as res from ss where id < 0;\n+------+\n| res  |\n+------+\n| NULL |\n+------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u793a\u4f8b\u516d\uff1a\u5c06\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u6700\u5927\u957f\u5ea6\u9650\u5236\u5728 6 \u4e2a\u5b57\u7b26\u3002\u67e5\u8be2\u903b\u8f91\u548c\u793a\u4f8b\u4e09\u76f8\u540c\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-plain",children:"set group_concat_max_len = 6;\n\nselect id, group_concat(distinct name,subject order by score) as res from ss group by id order by id;\n+------+--------+\n| id   | res    |\n+------+--------+\n| NULL | TiPhy  |\n|    1 | TomMat |\n|    2 | NULL   |\n|    3 | TiEngl |\n|    4 | NULL   |\n+------+--------+\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"GROUP_CONCAT,CONCAT,ARRAY_AGG"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,c.jsx)(e,Object.assign({},n,{children:(0,c.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>r});var c=s(67294);const i=c.createContext({});function r(n){const e=c.useContext(i);return c.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||o:r(n),c.createElement(i.Provider,{value:l},e)}}}]);