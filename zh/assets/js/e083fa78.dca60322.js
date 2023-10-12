"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70395],{73051:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=a(85893),s=a(11151);const i={},r="base64_to_bitmap",c={id:"sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",title:"base64_to_bitmap",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/base64_to_bitmap.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"bitxor",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bit-functions/bitxor"},next:{title:"bitmap_agg",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_agg"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ol:"ol",li:"li",strong:"strong",ul:"ul"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"base64_to_bitmap",children:"base64_to_bitmap"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5bfc\u5165\u5916\u90e8 bitmap \u6570\u636e\u5230 StarRocks \u65f6\uff0c\u9700\u8981\u5148\u5bf9 bitmap \u6570\u636e\u8fdb\u884c\u5e8f\u5217\u5316\u548c Base64 \u7f16\u7801\uff0c\u751f\u6210 Base64 \u5b57\u7b26\u4e32\u3002\u5bfc\u5165\u5b57\u7b26\u4e32\u5230 StarRocks \u65f6\u518d\u8fdb\u884c Base64 \u5230 bitmap \u7684\u8f6c\u5316\u3002\n\u8be5\u51fd\u6570\u7528\u4e8e\u5c06 Base64 \u7f16\u7801\u7684\u5b57\u7b26\u4e32\u8f6c\u5316\u4e3a bitmap\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 2.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"BITMAP base64_to_bitmap(VARCHAR bitmap)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bitmap"}),"\uff1a\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3002\u5bfc\u5165\u5916\u90e8 bitmap \u6570\u636e\u65f6\uff0c\u53ef\u4f7f\u7528 Java \u6216\u8005 C++ \u63a5\u53e3\u5148",(0,t.jsx)(n.a,{href:"https://github.com/StarRocks/starrocks/blob/main/fe/spark-dpp/src/test/java/com/starrocks/load/loadv2/dpp/BitmapValueTest.java",children:"\u521b\u5efa BitmapValue \u5bf9\u8c61"}),"\uff0c\u7136\u540e\u6dfb\u52a0\u5143\u7d20\u3001\u5e8f\u5217\u5316\u3001Base64 \u7f16\u7801\uff0c\u5c06\u5f97\u5230\u7684 Base64 \u5b57\u7b26\u4e32\u4f5c\u4e3a\u8be5\u51fd\u6570\u7684\u5165\u53c2\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de BITMAP \u7c7b\u578b\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u5e93\u8868 ",(0,t.jsx)(n.code,{children:"bitmapdb.bitmap_table"}),"\uff0c\u4f7f\u7528 Stream Load \u5c06 JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165\u5230 ",(0,t.jsx)(n.code,{children:"bitmap_table"})," \u4e2d\uff0c\u8fc7\u7a0b\u4e2d\u4f7f\u7528base64_to_bitmap \u51fd\u6570\u8fdb\u884c\u6570\u636e\u8f6c\u6362\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 StarRocks \u4e2d\u521b\u5efa\u5e93\u548c\u8868\uff0c\u4ee5\u521b\u5efa\u4e3b\u952e\u6a21\u578b (PRIMARY KEY) \u7684\u8868\u4e3a\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE database bitmapdb;\nUSE bitmapdb;\nCREATE TABLE `bitmap_table` (\n`tagname` varchar(65533) NOT NULL COMMENT "\u6807\u7b7e\u540d\u79f0",\n`tagvalue` varchar(65533) NOT NULL COMMENT "\u6807\u7b7e\u503c",\n`userid` bitmap NOT NULL COMMENT "\u8bbf\u95ee\u7528\u6237ID"\n) ENGINE=OLAP\nPRIMARY KEY(`tagname`, `tagvalue`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`tagname`)\nPROPERTIES (\n"replication_num" = "3",\n"storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"../../../sql-reference/sql-statements/data-manipulation/STREAM_LOAD.md",children:"Stream Load"})," \u5c06 JSON \u683c\u5f0f\u6570\u636e\u5bfc\u5165\u5230 ",(0,t.jsx)(n.code,{children:"bitmap_table"})," \u4e2d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8bbe\u6709 JSON \u683c\u5f0f\u6587\u4ef6",(0,t.jsx)(n.strong,{children:"simpledata"}),", \u5185\u5bb9\u5982\u4e0b\uff0c",(0,t.jsx)(n.code,{children:"userid"}),"\u4e3a Base64 \u7f16\u7801\u540e\u7684\u5b57\u7b26\u4e32:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n    "tagname": "\u6301\u6709\u4ea7\u54c1",\n    "tagvalue": "\u4fdd\u9669",\n    "userid":"AjowAAABAAAAAAACABAAAAABAAIAAwA="\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5bfc\u5165 JSON \u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5230 ",(0,t.jsx)(n.code,{children:"bitmap_table"}),"\uff0c\u4f7f\u7528 base64_to_bitmap \u51fd\u6570\u5c06 ",(0,t.jsx)(n.code,{children:"userid"})," \u8f6c\u5316\u4e3abitmap\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'curl --location-trusted -u <username>:<password>\\\n    -H "columns: c1,c2,c3,tagname=c1,tagvalue=c2,userid=base64_to_bitmap(c3)"\\\n    -H "label:bitmap123"\\\n    -H "format: json" -H "jsonpaths: [\\"$.tagname\\",\\"$.tagvalue\\",\\"$.userid\\"]"\\\n    -T simpleData http://<host:port>/api/bitmapdb/bitmap_table/_stream_load\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u67e5\u8be2",(0,t.jsx)(n.code,{children:"bitmap_table"}),"\u8868\u4e2d\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select tagname,tagvalue,bitmap_to_string(userid) from bitmap_table;\n+--------------+----------+----------------------------+\n| tagname      | tagvalue | bitmap_to_string(`userid`) |\n+--------------+----------+----------------------------+\n| \u6301\u6709\u4ea7\u54c1      | \u4fdd\u9669      | 1,2,3                      |\n+--------------+----------+----------------------------+\n1 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,a)=>{a.d(n,{Zo:()=>c,ah:()=>i});var t=a(67294);const s=t.createContext({});function i(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||r:i(e),t.createElement(s.Provider,{value:c},n)}}}]);