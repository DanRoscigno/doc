"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31808],{4225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var s=t(85893),r=t(11151);const c={},i="PERCENTILE_APPROX",o={id:"sql-reference/sql-functions/aggregate-functions/percentile_approx",title:"PERCENTILE_APPROX",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_approx.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_approx",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_approx",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/percentile_approx.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"multi_distinct_sum",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/multi_distinct_sum"},next:{title:"percentile_cont",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/percentile_cont"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function p(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_approx",children:"PERCENTILE_APPROX"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7b2c p \u4e2a\u767e\u5206\u4f4d\u70b9\u7684\u8fd1\u4f3c\u503c\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u53ef\u7528\u4e8e\u8ba1\u7b97 tp99 \u7b49\u7edf\u8ba1\u503c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_APPROX(expr, p[, compression])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": \u88ab\u9009\u53d6\u7684\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"p"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\uff0cp \u7684\u503c\u4ecb\u4e8e 0 \u5230 1 \u4e4b\u95f4\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"compression"}),": \u53ef\u9009\u53c2\u6570\uff0c\u53ef\u8bbe\u7f6e\u8303\u56f4\u662f [2048, 10000]\uff0c\u503c\u8d8a\u5927\u7cbe\u5ea6\u8d8a\u9ad8\uff0c\u5185\u5b58\u6d88\u8017\u8d8a\u5927\uff0c\u8ba1\u7b97\u8017\u65f6\u8d8a\u957f\u3002\u8be5\u53c2\u6570\u672a\u6307\u5b9a\u6216\u8bbe\u7f6e\u7684\u503c\u5728 [2048, 10000] \u8303\u56f4\u5916\uff0c\u4ee5 10000 \u7684\u9ed8\u8ba4\u503c\u8fd0\u884c\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE \u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a\u6570\u503c\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select `table`, percentile_approx(cost_time,0.99)\nfrom log_statis\ngroup by `table`;\n+----------+--------------------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096)\nfrom log_statis\ngroup by `table`;\n+----------+----------------------------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+----------------------------------------------+\n| test     |                                        54.21 |\n+----------+----------------------------------------------+\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>c});var s=t(67294);const r=s.createContext({});function c(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:c(e),s.createElement(r.Provider,{value:o},n)}}}]);