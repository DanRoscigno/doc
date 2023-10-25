"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18910],{2602:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var a=r(85893),s=r(11151);const t={displayed_sidebar:"Chinese"},c="array_append",i={id:"sql-reference/sql-functions/array-functions/array_append",title:"array_append",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/array-functions/array_append.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_append",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_append",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/array_append.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"array_agg",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_agg"},next:{title:"array_avg",permalink:"/zh/docs/2.3/sql-reference/sql-functions/array-functions/array_avg"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_append",children:"array_append"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u6570\u7ec4\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\u3002\u8fd4\u56de ARRAY \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"array_append(any_array, any_element)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_append([1, 2], 3);\n+------------------------+\n| array_append([1,2], 3) |\n+------------------------+\n| [1,2,3]                |\n+------------------------+\n1 row in set (0.00 sec)\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u4ee5\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0 NULL\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select array_append([1, 2], NULL);\n+---------------------------+\n| array_append([1,2], NULL) |\n+---------------------------+\n| [1,2,NULL]                |\n+---------------------------+\n1 row in set (0.01 sec)\n\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var a=r(67294);const s=a.createContext({});function t(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:t(e),a.createElement(s.Provider,{value:i},n)}}}]);