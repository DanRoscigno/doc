"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68777],{84240:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=t(85893),i=t(11151);const c={},l="bitmap_agg",a={id:"sql-reference/sql-functions/bitmap-functions/bitmap_agg",title:"bitmap_agg",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_agg.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_agg",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_agg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_agg.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"base64_to_bitmap",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap"},next:{title:"bitmap_and",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_and"}},r={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"bitmap_agg",children:"bitmap_agg"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5c06\u4e00\u5217\u4e2d\u7684\u591a\u884c\u975e NULL \u6570\u503c\u5408\u5e76\u6210\u4e00\u884c BITMAP \u503c\uff0c\u5373\u591a\u884c\u8f6c\u4e00\u884c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"BITMAP_AGG(col)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"col"}),": \u5f85\u5408\u5e76\u6570\u503c\u7684\u5217\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3002\u4e5f\u652f\u6301\u53ef\u4ee5\u8f6c\u5316\u4e3a\u4ee5\u4e0a\u7c7b\u578b\u7684 VARCHAR\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd4\u56de BITMAP \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u67d0\u4e2a\u503c\u5c0f\u4e8e 0 \u6216\u8005\u5927\u4e8e 18446744073709551615\uff0c\u8be5\u503c\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e0d\u4f1a\u5408\u5e76\u5230 Bitmap \u4e2d\uff08\u89c1\u793a\u4f8b\u4e09\uff09\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u5efa\u8868\u5e76\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'mysql> CREATE TABLE t1_test (\n    c1 int,\n    c2 boolean,\n    c3 tinyint,\n    c4 int,\n    c5 bigint,\n    c6 largeint\n    )\nDUPLICATE KEY(c1)\nDISTRIBUTED BY HASH(c1);\n\nINSERT INTO t1_test VALUES\n    (1, true, 11, 111, 1111, 11111),\n    (2, false, 22, 222, 2222, 22222),\n    (3, true, 33, 333, 3333, 33333),\n    (4, null, null, null, null, null),\n    (5, -1, -11, -111, -1111, -11111),\n    (6, null, null, null, null, "36893488147419103232");\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u8be2\u8868\u4e2d\u6570\u636e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PlainText",children:"select * from t1_test order by c1;\n+------+------+------+------+-------+----------------------+\n| c1   | c2   | c3   | c4   | c5    | c6                   |\n+------+------+------+------+-------+----------------------+\n|    1 |    1 |   11 |  111 |  1111 | 11111                |\n|    2 |    0 |   22 |  222 |  2222 | 22222                |\n|    3 |    1 |   33 |  333 |  3333 | 33333                |\n|    4 | NULL | NULL | NULL |  NULL | NULL                 |\n|    5 |    1 |  -11 | -111 | -1111 | -11111               |\n|    6 | NULL | NULL | NULL |  NULL | 36893488147419103232 |\n+------+------+------+------+-------+----------------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5c06 ",(0,s.jsx)(e.code,{children:"c1"})," \u5217\u4e2d\u7684\u6570\u503c\u5408\u5e76\u6210 Bitmap\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PlainText",children:"mysql> select bitmap_to_string(bitmap_agg(c1)) from t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c1)) |\n+----------------------------------+\n| 1,2,3,4,5,6                      |\n+----------------------------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06 ",(0,s.jsx)(e.code,{children:"c2"})," \u5217\u4e2d\u7684\u6570\u503c\u5408\u5e76\u6210 Bitmap\uff0c\u5ffd\u7565 NULL \u503c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PlainText",children:"mysql> select BITMAP_TO_STRING(BITMAP_AGG(c2)) from t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c2)) |\n+----------------------------------+\n| 0,1                              |\n+----------------------------------+\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5c06 ",(0,s.jsx)(e.code,{children:"c6"})," \u5217\u4e2d\u7684\u6570\u503c\u5408\u5e76\u6210 Bitmap\uff0c\u5ffd\u7565 NULL \u503c\u548c\u8d85\u8fc7\u8303\u56f4\u7684\u540e\u4e24\u884c\u503c\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PlainText",children:"mysql> select bitmap_to_string(bitmap_agg(c6)) from t1_test;\n+----------------------------------+\n| bitmap_to_string(bitmap_agg(c6)) |\n+----------------------------------+\n| 11111,22222,33333                |\n+----------------------------------+\n"})}),"\n",(0,s.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"BITMAP_AGG, BITMAP"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,t)=>{t.d(e,{Zo:()=>a,ah:()=>c});var s=t(67294);const i=s.createContext({});function c(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function a({components:n,children:e,disableParentContext:t}){let a;return a=t?"function"==typeof n?n({}):n||l:c(n),s.createElement(i.Provider,{value:a},e)}}}]);