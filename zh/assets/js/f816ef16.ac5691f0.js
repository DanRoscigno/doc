"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[88998],{45025:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=n(85893),r=n(11151);const c={displayed_sidebar:"Chinese31"},i="STDDEV_SAMP",d={id:"sql-reference/sql-functions/aggregate-functions/stddev_samp",title:"STDDEV_SAMP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/stddev_samp.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/stddev_samp",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/stddev_samp",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/stddev_samp.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"stddev, stddev_pop",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/stddev"},next:{title:"sum",permalink:"/doc/zh/docs/sql-reference/sql-functions/aggregate-functions/sum"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"stddev_samp",children:"STDDEV_SAMP"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd4\u56de expr \u8868\u8fbe\u5f0f\u7684\u6837\u672c\u6807\u51c6\u5dee\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Haskell",children:"STDDEV_SAMP(expr)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"epxr"}),": \u88ab\u9009\u53d6\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"MySQL > select stddev_samp(scan_rows)\nfrom log_statis\ngroup by datetime;\n+--------------------------+\n| stddev_samp(`scan_rows`) |\n+--------------------------+\n|        2.372044195280762 |\n+--------------------------+\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:d},s)}}}]);