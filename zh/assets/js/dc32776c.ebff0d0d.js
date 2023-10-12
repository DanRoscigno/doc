"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58074],{29448:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(85893),s=r(11151);const c={displayed_sidebar:"Chinese31"},i="VARIANCE, VAR_POP, VARIANCE_POP",a={id:"sql-reference/sql-functions/aggregate-functions/variance",title:"VARIANCE, VAR_POP, VARIANCE_POP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/aggregate-functions/variance.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/variance",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/variance",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/variance.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"VAR_SAMP, VARIANCE_SAMP",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/var_samp"},next:{title:"window_funnel",permalink:"/doc/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/window_funnel"}},o={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"variance-var_pop-variance_pop",children:"VARIANCE, VAR_POP, VARIANCE_POP"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u8868\u8fbe\u5f0f\u7684\u603b\u4f53\u65b9\u5dee\u3002\u4ece 2.5.10 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u51fd\u6570\u4e5f\u53ef\u4ee5\u7528\u4f5c\u7a97\u53e3\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARIANCE(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"expr"}),": \u9009\u53d6\u7684\u8868\u8fbe\u5f0f\u3002\u5f53\u8868\u8fbe\u5f0f\u4e3a\u8868\u4e2d\u4e00\u5217\u65f6\uff0c\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b: TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u4e3a DOUBLE \u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"select var_pop(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+--------------------------+------------------+\n| var_pop(i_current_price) | i_rec_start_date |\n+--------------------------+------------------+\n|       314.96177792808226 | 1997-10-27       |\n|       463.73633459357285 | NULL             |\n|       302.02102643609123 | 1999-10-28       |\n|        337.9318386924913 | 2000-10-27       |\n|       333.80931439318346 | 2001-10-27       |\n+--------------------------+------------------+\n\nselect variance(i_current_price), i_rec_start_date from item group by i_rec_start_date;\n+---------------------------+------------------+\n| variance(i_current_price) | i_rec_start_date |\n+---------------------------+------------------+\n|        314.96177792808226 | 1997-10-27       |\n|         463.7363345935729 | NULL             |\n|        302.02102643609123 | 1999-10-28       |\n|         337.9318386924912 | 2000-10-27       |\n|        333.80931439318346 | 2001-10-27       |\n+---------------------------+------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>c});var t=r(67294);const s=t.createContext({});function c(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:c(e),t.createElement(s.Provider,{value:a},n)}}}]);