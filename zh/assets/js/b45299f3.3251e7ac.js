"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13806],{53629:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese"},r="CAST",a={id:"sql-reference/sql-functions/cast",title:"CAST",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/cast.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/cast",permalink:"/zh/docs/2.3/sql-reference/sql-functions/cast",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/cast.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"to_bitmap",permalink:"/zh/docs/2.3/sql-reference/sql-functions/bitmap-functions/to_bitmap"},next:{title:"coalesce",permalink:"/zh/docs/2.3/sql-reference/sql-functions/condition-functions/coalesce"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cast",children:"CAST"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06 ",(0,t.jsx)(n.code,{children:"input"})," \u8f6c\u6362\u6210\u6307\u5b9a\u6570\u636e\u7c7b\u578b\u7684\u503c\uff0c\u5982 ",(0,t.jsx)(n.code,{children:"cast (input as BIGINT)"})," \u5c06\u5f53\u524d ",(0,t.jsx)(n.code,{children:"input"})," \u8f6c\u6362\u4e3a BIGINT \u7c7b\u578b\u7684\u503c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"cast(input as type)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"input"}),": \u5f85\u8f6c\u6362\u7c7b\u578b\u7684\u6570\u636e"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"type"}),": \u76ee\u6807\u6570\u636e\u7c7b\u578b"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a ",(0,t.jsx)(n.code,{children:"type"})," \u6307\u5b9a\u7684\u7c7b\u578b\u3002\u5982\u679c\u8f6c\u5316\u5931\u8d25\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u5e38\u89c1\u8f6c\u6362\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"    select cast (1 as BIGINT);\n    +-------------------+\n    | CAST(1 AS BIGINT) |\n    +-------------------+\n    |                 1 |\n    +-------------------+\n\n    select cast('9.5' as DECIMAL(10,2));\n    +--------------------------------+\n    | CAST('9.5' AS DECIMAL64(10,2)) |\n    +--------------------------------+\n    |                           9.50 |\n    +--------------------------------+\n\n    select cast(NULL AS INT);\n    +-------------------+\n    | CAST(NULL AS INT) |\n    +-------------------+\n    |              NULL |\n    +-------------------+\n\n    select cast(true AS BOOLEAN);\n    +-----------------------+\n    | CAST(TRUE AS BOOLEAN) |\n    +-----------------------+\n    |                     1 |\n    +-----------------------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5bfc\u5165\u4e2d\u8f6c\u6362\u539f\u59cb\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -T ~/user_data/bigint \\\n\n    -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)" \\\n\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4e8e\u539f\u59cb\u6570\u636e\u7c7b\u578b\u4e3a\u6d6e\u70b9\u6570\u7684 STRING \u505a\u8f6c\u6362\u65f6\uff0c\u6570\u636e\u4f1a\u88ab\u8f6c\u6362\u6210 NULL\u3002\u6bd4\u5982\u6d6e\u70b9\u6570 12.0 \u4f1a\u8f6c\u4e3a NULL\u3002\u5982\u679c\u60f3\u5f3a\u5236\u5c06\u8fd9\u79cd\u7c7b\u578b\u7684\u539f\u59cb\u6570\u636e\u8f6c\u4e3a BIGINT\uff0c\u9700\u8981\u5148\u5c06STRING\u7c7b\u578b\u7684\u6d6e\u70b9\u6570\u8f6c\u4e3aDOUBLE\uff0c\u518d\u8f6c\u4e3a BIGINT\uff0c\u8bf7\u53c2\u8003\u5982\u4e0b\u793a\u4f8b:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u <username>:<password> -T ~/user_data/bigint \\\n\n    -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)" \\\n\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"select cast(cast (\"11.2\" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST('11.2' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:a},n)}}}]);