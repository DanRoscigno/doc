"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92005],{43371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const r={displayed_sidebar:"Chinese"},c="AVG",a={id:"sql-reference/sql-functions/aggregate-functions/avg",title:"AVG",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/aggregate-functions/avg.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/avg",permalink:"/zh/docs/2.1/sql-reference/sql-functions/aggregate-functions/avg",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/avg.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"APPROX_COUNT_DISTINCT",permalink:"/zh/docs/2.1/sql-reference/sql-functions/aggregate-functions/approx_count_distinct"},next:{title:"BITMAP",permalink:"/zh/docs/2.1/sql-reference/sql-functions/aggregate-functions/bitmap"}},o={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"avg",children:"AVG"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"AVG([DISTINCT] expr)"})}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4e8e\u8fd4\u56de\u9009\u4e2d\u5b57\u6bb5\u7684\u5e73\u5747\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u9009\u5b57\u6bb5DISTINCT\u53c2\u6570\u53ef\u4ee5\u7528\u6765\u8fd4\u56de\u53bb\u91cd\u5e73\u5747\u503c"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > SELECT datetime, AVG(cost_time)\nFROM log_statis\ngroup by datetime;\n+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n\nMySQL > SELECT datetime, AVG(distinct cost_time)\nFROM log_statis\ngroup by datetime;\n+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"AVG"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:a},n)}}}]);