"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76238],{3404:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=r(85893),t=r(11151);const i={displayed_sidebar:"Chinese"},a="array_intersect",c={id:"sql-reference/sql-functions/array-functions/array_intersect",title:"array_intersect",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/array-functions/array_intersect.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_intersect",permalink:"/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_intersect",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_intersect.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"array_filter",permalink:"/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_filter"},next:{title:"array_join",permalink:"/zh/docs/2.5/sql-reference/sql-functions/array-functions/array_join"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"array_intersect",children:"array_intersect"}),"\n",(0,s.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u591a\u4e2a\u540c\u7c7b\u578b\u6570\u7ec4\uff0c\u8fd4\u56de\u4ea4\u96c6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Haskell",children:"output array_intersect(input0, input1, ...)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"input\uff1a\u4e0d\u9650\u6570\u91cf(1\u4e2a\u6216\u591a\u4e2a)\u7684\u5177\u6709\u76f8\u540c\u5143\u7d20\u7c7b\u578b\u7684\u6570\u7ec4(input0, input1, ...)\uff0c\u5177\u4f53\u7c7b\u578b\u53ef\u4ee5\u4efb\u610f\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u578b\u4e3aArray(\u5143\u7d20\u7c7b\u578b\u4e0einput\u4e2d\u6570\u7ec4\u7684\u5143\u7d20\u7c7b\u578b\u4fdd\u6301\u4e00\u81f4)\uff0c\u5185\u5bb9\u4e3a\u6240\u6709\u8f93\u5165\u6570\u7ec4(input0, input1, ...)\u7684\u4ea4\u96c6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\u4e00"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", "query", "SQL"], ["SQL"])\nAS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| ["SQL"]      |\n+--------------+\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\u4e8c"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| []           |\n+--------------+\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u793a\u4f8b \u4e09"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", null, "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| [null]       |\n+--------------+\n'})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>c,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function c({components:n,children:e,disableParentContext:r}){let c;return c=r?"function"==typeof n?n({}):n||a:i(n),s.createElement(t.Provider,{value:c},e)}}}]);