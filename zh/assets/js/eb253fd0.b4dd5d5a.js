"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13258],{13323:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese"},r="percentile_hash",l={id:"sql-reference/sql-functions/percentile-functions/percentile_hash",title:"percentile_hash",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/percentile-functions/percentile_hash.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_hash",permalink:"/zh/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_hash",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/percentile-functions/percentile_hash.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"percentile_empty",permalink:"/zh/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_empty"},next:{title:"percentile_union",permalink:"/zh/docs/2.5/sql-reference/sql-functions/percentile-functions/percentile_union"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"percentile_hash",children:"percentile_hash"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06 ",(0,t.jsx)(n.code,{children:"double"})," \u7c7b\u578b\u6570\u503c\u6784\u9020\u6210 ",(0,t.jsx)(n.code,{children:"percentile"})," \u7c7b\u578b\u6570\u503c\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_HASH(x);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a PERCENTILE\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select percentile_approx_raw(percentile_hash(234.234), 0.99);\n+-------------------------------------------------------+\n| percentile_approx_raw(percentile_hash(234.234), 0.99) |\n+-------------------------------------------------------+\n|                                    234.23399353027344 |\n+-------------------------------------------------------+\n1 row in set (0.00 sec)\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:l},n)}}}]);