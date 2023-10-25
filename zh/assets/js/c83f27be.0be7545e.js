"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34023],{39064:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese"},r="CAST",a={id:"sql-reference/sql-functions/cast",title:"CAST",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/cast.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/cast",permalink:"/zh/docs/2.1/sql-reference/sql-functions/cast",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/cast.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"to_bitmap",permalink:"/zh/docs/2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap"},next:{title:"md5",permalink:"/zh/docs/2.1/sql-reference/sql-functions/crytographic-functions/md5"}},l={},o=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",blockquote:"blockquote"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cast",children:"CAST"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"cast (input as type)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06  input\u8f6c\u6210\u6307\u5b9a\u7684(type)\u7684\u503c,\u5982",(0,t.jsx)(n.code,{children:"cast (input as BIGINT)"}),"\u5c06\u5f53\u524d\u5217 input \u8f6c\u6362\u4e3a BIGINT \u7c7b\u578b\u7684\u503c"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8f6c\u5e38\u91cf\uff0c\u6216\u8868\u4e2d\u67d0\u5217"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select cast (1 as BIGINT);\n+-------------------+\n| CAST(1 AS BIGINT) |\n+-------------------+\n|                 1 |\n+-------------------+\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8f6c\u5bfc\u5165\u7684\u539f\u59cb\u6570\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u root: -T ~/user_data/bigint \\\n    -H "columns: tmp_k1, k1=cast(tmp_k1 as BIGINT)" \\\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\uff1a\u5728\u5bfc\u5165\u4e2d\uff0c\u7531\u4e8e\u539f\u59cb\u7c7b\u578b\u5747\u4e3aString\uff0c\u5c06\u503c\u4e3a\u6d6e\u70b9\u7684\u539f\u59cb\u6570\u636e\u505a cast\u7684\u65f6\u5019\u6570\u636e\u4f1a\u88ab\u8f6c\u6362\u6210 NULL \uff0c\u6bd4\u5982 12.0 \u3002StarRocks \u76ee\u524d\u4e0d\u4f1a\u5bf9\u539f\u59cb\u6570\u636e\u505a\u622a\u65ad\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60f3\u5f3a\u5236\u5c06\u8fd9\u79cd\u7c7b\u578b\u7684\u539f\u59cb\u6570\u636e cast to int \u7684\u8bdd\u3002\u8bf7\u770b\u4e0b\u9762\u5199\u6cd5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --location-trusted -u root: -T ~/user_data/bigint \\\n    -H "columns: tmp_k1, k1=cast(cast(tmp_k1 as DOUBLE) as BIGINT)" \\\n    http://host:port/api/test/bigint/_stream_load\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select cast(cast (\"11.2\" as double) as bigint);\n+----------------------------------------+\n| CAST(CAST('11.2' AS DOUBLE) AS BIGINT) |\n+----------------------------------------+\n|                                     11 |\n+----------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"CAST"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:a},n)}}}]);