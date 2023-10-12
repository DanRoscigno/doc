"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82020],{89444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(85893),l=t(11151);const r={displayed_sidebar:"Chinese31"},c="hll_empty",i={id:"sql-reference/sql-functions/aggregate-functions/hll_empty",title:"hll_empty",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/aggregate-functions/hll_empty.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/hll_empty",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/hll_empty.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"grouping_id",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/grouping_id"},next:{title:"hll_hash",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_hash"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"hll_empty",children:"hll_empty"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7a7a HLL \u5217\uff0c\u7528\u4e8e INSERT \u6216\u5bfc\u5165\u6570\u636e\u65f6\u8865\u5145\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"HLL_EMPTY()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u7a7a\u7684 HLL\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1aINSERT \u65f6\u8865\u5145\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"insert into hllDemo(k1,v1) values(10,hll_empty());\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5bfc\u5165\u6570\u636e\u65f6\u8865\u5145\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:'curl --location-trusted -u <username>:<password> \\\n    -H "columns: temp1, temp2, col1=hll_hash(temp1), col2=hll_empty()" \\\n    -T example7.csv -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/test_db/table7/_stream_load\n'})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>r});var s=t(67294);const l=s.createContext({});function r(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(l.Provider,{value:i},n)}}}]);