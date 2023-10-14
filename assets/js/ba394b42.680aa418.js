"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73068],{55867:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=r(85893),s=r(11151);const i={},c="array_intersect",a={id:"sql-reference/sql-functions/array-functions/array_intersect",title:"array_intersect",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_intersect.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_intersect",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_intersect",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_intersect.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_generate",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_generate"},next:{title:"array_join",permalink:"/doc/zh/sql-reference/sql-functions/array-functions/array_join"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"array_intersect",children:"array_intersect"}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8e\u591a\u4e2a\u540c\u7c7b\u578b\u6570\u7ec4\uff0c\u8fd4\u56de\u4ea4\u96c6\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"output array_intersect(input0, input1, ...)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"input\uff1a\u4e0d\u9650\u6570\u91cf(1\u4e2a\u6216\u591a\u4e2a)\u7684\u5177\u6709\u76f8\u540c\u5143\u7d20\u7c7b\u578b\u7684\u6570\u7ec4(input0, input1, ...)\uff0c\u5177\u4f53\u7c7b\u578b\u53ef\u4ee5\u4efb\u610f\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(e.p,{children:"\u7c7b\u578b\u4e3aArray(\u5143\u7d20\u7c7b\u578b\u4e0einput\u4e2d\u6570\u7ec4\u7684\u5143\u7d20\u7c7b\u578b\u4fdd\u6301\u4e00\u81f4)\uff0c\u5185\u5bb9\u4e3a\u6240\u6709\u8f93\u5165\u6570\u7ec4(input0, input1, ...)\u7684\u4ea4\u96c6\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b\u4e00"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", "query", "SQL"], ["SQL"])\nAS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| ["SQL"]      |\n+--------------+\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b\u4e8c"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| []           |\n+--------------+\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u793a\u4f8b \u4e09"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plain",metastring:"text",children:'mysql> SELECT array_intersect(["SQL", null, "storage"], ["mysql", null], [null]) AS no_intersect ;\n+--------------+\n| no_intersect |\n+--------------+\n| [null]       |\n+--------------+\n'})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>a,ah:()=>i});var t=r(67294);const s=t.createContext({});function i(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function a({components:n,children:e,disableParentContext:r}){let a;return a=r?"function"==typeof n?n({}):n||c:i(n),t.createElement(s.Provider,{value:a},e)}}}]);