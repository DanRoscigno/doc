"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53959],{64159:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese31"},c="CAST",i={id:"sql-reference/sql-functions/cast",title:"CAST",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/cast.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/cast",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/cast",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/cast.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"version",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/utility-functions/version"},next:{title:"murmur_hash3_32",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/hash-functions/murmur_hash3_32"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"cast",children:"CAST"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(e.p,{children:["\u5c06 ",(0,t.jsx)(e.code,{children:"input"})," \u8f6c\u6362\u6210\u6307\u5b9a\u6570\u636e\u7c7b\u578b\u7684\u503c\uff0c\u5982 ",(0,t.jsx)(e.code,{children:"cast (input as BIGINT)"})," \u5c06\u5f53\u524d ",(0,t.jsx)(e.code,{children:"input"})," \u8f6c\u6362\u4e3a BIGINT \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u5c06 Array \u5b57\u7b26\u4e32 \u548c JSON array \u8f6c\u6362\u4e3a ARRAY \u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"cast(input as type)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"input"}),": \u5f85\u8f6c\u6362\u7c7b\u578b\u7684\u6570\u636e"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"type"}),": \u76ee\u6807\u6570\u636e\u7c7b\u578b"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ",(0,t.jsx)(e.code,{children:"type"})," \u6307\u5b9a\u7684\u7c7b\u578b\u3002\u5982\u679c\u8f6c\u5316\u5931\u8d25\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5e38\u89c1\u8f6c\u6362\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:"    select cast (1 as BIGINT);\n    +-------------------+\n    | CAST(1 AS BIGINT) |\n    +-------------------+\n    |                 1 |\n    +-------------------+\n\n    select cast('9.5' as DECIMAL(10,2));\n    +--------------------------------+\n    | CAST('9.5' AS DECIMAL64(10,2)) |\n    +--------------------------------+\n    |                           9.50 |\n    +--------------------------------+\n\n    select cast(NULL AS INT);\n    +-------------------+\n    | CAST(NULL AS INT) |\n    +-------------------+\n    |              NULL |\n    +-------------------+\n\n    select cast(true AS BOOLEAN);\n    +-----------------------+\n    | CAST(TRUE AS BOOLEAN) |\n    +-----------------------+\n    |                     1 |\n    +-----------------------+\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u8f6c\u6362\u4e3a ARRAY \u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'    -- Convert string to ARRAY<ANY>.\n\n    select cast(\'[1,2,3]\' as array<int>);\n    +-------------------------------+\n    | CAST(\'[1,2,3]\' AS ARRAY<INT>) |\n    +-------------------------------+\n    | [1,2,3]                       |\n    +-------------------------------+\n\n    select cast(\'[1,2,3]\' as array<bigint>);\n    +----------------------------------+\n    | CAST(\'[1,2,3]\' AS ARRAY<BIGINT>) |\n    +----------------------------------+\n    | [1,2,3]                          |\n    +----------------------------------+\n\n    select cast(\'[1,2,3]\' as array<string>);\n    +------------------------------------------+\n    | CAST(\'[1,2,3]\' AS ARRAY<VARCHAR(65533)>) |\n    +------------------------------------------+\n    | ["1","2","3"]                            |\n    +------------------------------------------+\n\n    select cast(\'["a", "b", "c"]\' as array<string>);\n    +--------------------------------------------------+\n    | CAST(\'["a", "b", "c"]\' AS ARRAY<VARCHAR(65533)>) |\n    +--------------------------------------------------+\n    | ["a","b","c"]                                    |\n    +--------------------------------------------------+\n\n    -- Convert JSON array to ARRAY<ANY>.\n\n    select cast(parse_json(\'[{"a":1}, {"a": 2}]\')  as array<json>);\n    +----------------------------------------------------------+\n    | CAST((parse_json(\'[{"a":1}, {"a": 2}]\')) AS ARRAY<JSON>) |\n    +----------------------------------------------------------+\n    | [\'{"a": 1}\',\'{"a": 2}\']                                  |\n    +----------------------------------------------------------+\n\n    select cast(parse_json(\'[1, 2, 3]\')  as array<int>);\n    +-----------------------------------------------+\n    | CAST((parse_json(\'[1, 2, 3]\')) AS ARRAY<INT>) |\n    +-----------------------------------------------+\n    | [1,2,3]                                       |\n    +-----------------------------------------------+\n\n    select cast(parse_json(\'["1","2","3"]\') as array<string>);\n    +--------------------------------------------------------------+\n    | CAST((parse_json(\'["1","2","3"]\')) AS ARRAY<VARCHAR(65533)>) |\n    +--------------------------------------------------------------+\n    | ["1","2","3"]                                                |\n    +--------------------------------------------------------------+\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\u4e09\uff1a\u5bfc\u5165\u4e2d\u8f6c\u6362\u539f\u59cb\u6570\u636e\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -T ~/user_data/bigint \\\n\n    -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)" \\\n\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e8e\u539f\u59cb\u6570\u636e\u7c7b\u578b\u4e3a\u6d6e\u70b9\u6570\u7684 STRING \u505a\u8f6c\u6362\u65f6\uff0c\u6570\u636e\u4f1a\u88ab\u8f6c\u6362\u6210 NULL\u3002\u6bd4\u5982\u6d6e\u70b9\u6570 12.0 \u4f1a\u8f6c\u4e3a NULL\u3002\u5982\u679c\u60f3\u5f3a\u5236\u5c06\u8fd9\u79cd\u7c7b\u578b\u7684\u539f\u59cb\u6570\u636e\u8f6c\u4e3a BIGINT\uff0c\u9700\u8981\u5148\u5c06STRING\u7c7b\u578b\u7684\u6d6e\u70b9\u6570\u8f6c\u4e3aDOUBLE\uff0c\u518d\u8f6c\u4e3a BIGINT\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u793a\u4f8b:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -T ~/user_data/bigint \\\n\n    -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)" \\\n\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:"select cast(cast (\"11.2\" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST('11.2' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>a});var t=s(67294);const r=t.createContext({});function a(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function i({components:n,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof n?n({}):n||c:a(n),t.createElement(r.Provider,{value:i},e)}}}]);