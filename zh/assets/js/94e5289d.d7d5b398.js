"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63492],{58695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),r=t(11151);const a={},i="bitmap_to_array",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_array",title:"bitmap_to_array",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"bitmap_remove",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_remove"},next:{title:"bitmap_to_base64",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bitmap_to_array",children:"bitmap_to_array"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06 BITMAP \u4e2d\u7684\u6240\u6709\u503c\u7ec4\u5408\u6210 BIGINT \u7c7b\u578b\u7684\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:" `ARRAY<BIGINT>` BITMAP_TO_ARRAY (bitmap)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bitmap"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BIGINT \u7c7b\u578b\u7684\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"text",children:"select bitmap_to_array(bitmap_from_string(\"1, 7\"));\n+----------------------------------------------+\n| bitmap_to_array(bitmap_from_string('1, 7'))  |\n+----------------------------------------------+\n| [1,7]                                        |\n+----------------------------------------------+\n\nselect bitmap_to_array(NULL);\n+-----------------------+\n| bitmap_to_array(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:a(e),s.createElement(r.Provider,{value:o},n)}}}]);