"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[79855],{51162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=n(85893),i=n(11151);const c={displayed_sidebar:"Chinese"},a="bitmap_empty",r={id:"sql-reference/sql-functions/bitmap-functions/bitmap_empty",title:"bitmap_empty",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/bitmap-functions/bitmap_empty.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_empty",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_empty",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/bitmap-functions/bitmap_empty.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"bitmap_count",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_count"},next:{title:"bitmap_from_string",permalink:"/zh/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"bitmap_empty",children:"bitmap_empty"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u7a7a bitmap\uff0c\u4e3b\u8981\u7528\u4e8e insert \u6216 stream load \u65f6\u586b\u5145\u9ed8\u8ba4\u503c\uff0c\u5982\u4e0b\u4f8b:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,v1,v2=bitmap_empty()" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP_EMPTY()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsx)(t.p,{children:"\u65e0"}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a BITMAP\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>c});var s=n(67294);const i=s.createContext({});function c(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:c(e),s.createElement(i.Provider,{value:r},t)}}}]);