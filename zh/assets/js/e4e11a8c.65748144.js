"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57246],{80063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(85893),r=t(11151);const i={displayed_sidebar:"Chinese"},d="CREATE FUNCTION",c={id:"sql-reference/sql-statements/data-definition/create-function",title:"CREATE FUNCTION",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-definition/create-function.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/create-function",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/create-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/create-function.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"USE",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/USE"},next:{title:"DROP FUNCTION",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/drop-function"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-function",children:"CREATE FUNCTION"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa UDF\uff08\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\uff09\u3002\u5f53\u524d\u4ec5\u652f\u6301\u521b\u5efa Java UDF\uff0c\u5373 Java \u8bed\u8a00\u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u5177\u4f53\u5305\u62ec\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Scalar UDF\uff1a\u81ea\u5b9a\u4e49\u6807\u91cf\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"UDAF\uff1a\u81ea\u5b9a\u4e49\u805a\u5408\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"UDWF\uff1a\u81ea\u5b9a\u4e49\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.li,{children:"UDTF\uff1a\u81ea\u5b9a\u4e49\u8868\u503c\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"}),"\n\u4ec5 admin \u7528\u6237\u6709\u6743\u9650\u4f7f\u7528\u8be5\u8bed\u53e5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE [AGGREGATE | TABLE] FUNCTION function_name(arg_type [, ...])\nRETURNS return_type\n[PROPERTIES ("key" = "value" [, ...]) ]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AGGREGATE"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u5982\u8981\u521b\u5efa UDAF\uff0c\u9700\u6307\u5b9a\u8be5\u5173\u952e\u5b57\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TABLE"}),(0,s.jsx)(n.td,{children:"\u5426"}),(0,s.jsx)(n.td,{children:"\u5982\u8981\u521b\u5efa UDTF\uff0c\u9700\u6307\u5b9a\u8be5\u5173\u952e\u5b57\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"function_name"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u51fd\u6570\u540d\uff0c\u5176\u53ef\u4ee5\u5305\u542b\u6570\u636e\u5e93\u540d\u79f0\uff0c\u6bd4\u5982\uff0c",(0,s.jsx)(n.code,{children:"db1.my_func"}),"\u3002\u5982\u679c ",(0,s.jsx)(n.code,{children:"function_name"})," \u4e2d\u5305\u542b\u4e86\u6570\u636e\u5e93\u540d\u79f0\uff0c\u90a3\u4e48\u8be5 UDF \u4f1a\u521b\u5efa\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u5426\u5219\u8be5 UDF \u4f1a\u521b\u5efa\u5728\u5f53\u524d\u6570\u636e\u5e93\u3002\u65b0\u51fd\u6570\u540d\u548c\u53c2\u6570\u4e0d\u80fd\u4e0e\u76ee\u6807\u6570\u636e\u5e93\u4e2d\u5df2\u6709\u7684\u51fd\u6570\u76f8\u540c\uff0c\u5426\u5219\u4f1a\u521b\u5efa\u5931\u8d25\uff1b\u5982\u53ea\u6709\u51fd\u6570\u540d\u76f8\u540c\uff0c\u53c2\u6570\u4e0d\u540c\uff0c\u5219\u53ef\u4ee5\u521b\u5efa\u6210\u529f\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arg_type"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u3002\u5177\u4f53\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-functions/JAVA_UDF#%E7%B1%BB%E5%9E%8B%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",children:"Java UDF"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ret_type"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u3002\u5177\u4f53\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-functions/JAVA_UDF#%E7%B1%BB%E5%9E%8B%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB",children:"Java UDF"}),"\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"properties"}),(0,s.jsx)(n.td,{children:"\u662f"}),(0,s.jsxs)(n.td,{children:["\u51fd\u6570\u76f8\u5173\u5c5e\u6027\u3002\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 UDF \u9700\u914d\u7f6e\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u8be6\u60c5\u548c\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-functions/JAVA_UDF#%E6%AD%A5%E9%AA%A4%E5%85%AD%E5%9C%A8-starrocks-%E4%B8%AD%E5%88%9B%E5%BB%BA-udf",children:"Java UDF"}),"\u3002"]})]})]})]})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||d:i(e),s.createElement(r.Provider,{value:c},n)}}}]);