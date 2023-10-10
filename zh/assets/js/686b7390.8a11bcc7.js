"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[58037],{92314:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const d={},i="SHOW ANALYZE JOB",c={id:"sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB",title:"SHOW ANALYZE JOB",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/SHOW ANALYZE JOB.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SET CATALOG",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SET CATALOG"},next:{title:"SHOW ANALYZE STATUS",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW ANALYZE STATUS"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-analyze-job",children:"SHOW ANALYZE JOB"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u7684\u4fe1\u606f\u548c\u72b6\u6001\u3002\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u7528\u4e8e\u91c7\u96c6 CBO \u7edf\u8ba1\u4fe1\u606f\u3002\u8be5\u8bed\u53e5\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cStarRocks \u4f1a\u5468\u671f\u6027\u81ea\u52a8\u91c7\u96c6\u8868\u7684\u5168\u91cf\u7edf\u8ba1\u4fe1\u606f\u3002\u9ed8\u8ba4\u68c0\u67e5\u66f4\u65b0\u65f6\u95f4\u4e3a 5 \u5206\u949f\u4e00\u6b21\uff0c\u5982\u679c\u53d1\u73b0\u6709\u6570\u636e\u66f4\u65b0\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u91c7\u96c6\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b\u4f7f\u7528\u81ea\u52a8\u5168\u91cf\u91c7\u96c6\uff0c\u53ef\u4ee5\u8bbe\u7f6e FE \u914d\u7f6e\u9879 ",(0,t.jsx)(s.code,{children:"enable_collect_full_statistic"})," \u4e3a ",(0,t.jsx)(s.code,{children:"false"}),"\uff0c\u7cfb\u7edf\u4f1a\u505c\u6b62\u81ea\u52a8\u5168\u91cf\u91c7\u96c6\uff0c\u6839\u636e\u60a8\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u4efb\u52a1\u8fdb\u884c\u5b9a\u5236\u5316\u91c7\u96c6\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"SHOW ANALYZE JOB [WHERE predicate]\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 WHERE \u5b50\u53e5\u8bbe\u5b9a\u7b5b\u9009\u6761\u4ef6\uff0c\u8fdb\u884c\u8fd4\u56de\u7ed3\u679c\u7b5b\u9009\u3002\u8be5\u8bed\u53e5\u4f1a\u8fd4\u56de\u5982\u4e0b\u5217\u3002"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u5217\u540d"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Id"}),(0,t.jsx)(s.td,{children:"\u91c7\u96c6\u4efb\u52a1\u7684 ID\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Database"}),(0,t.jsx)(s.td,{children:"\u6570\u636e\u5e93\u540d\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Table"}),(0,t.jsx)(s.td,{children:"\u8868\u540d\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Columns"}),(0,t.jsx)(s.td,{children:"\u5217\u540d\u5217\u8868\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsx)(s.td,{children:"\u7edf\u8ba1\u4fe1\u606f\u7684\u7c7b\u578b\u3002\u53d6\u503c\uff1a FULL\uff0cSAMPLE\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Schedule"}),(0,t.jsxs)(s.td,{children:["\u8c03\u5ea6\u7684\u7c7b\u578b\u3002\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u56fa\u5b9a\u4e3a ",(0,t.jsx)(s.code,{children:"SCHEDULE"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Properties"}),(0,t.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u53c2\u6570\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Status"}),(0,t.jsx)(s.td,{children:"\u4efb\u52a1\u72b6\u6001\uff0c\u5305\u62ec PENDING\uff08\u7b49\u5f85\uff09\u3001RUNNING\uff08\u6b63\u5728\u6267\u884c\uff09\u3001SUCCESS\uff08\u6267\u884c\u6210\u529f\uff09\u548c FAILED\uff08\u6267\u884c\u5931\u8d25\uff09\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"LastWorkTime"}),(0,t.jsx)(s.td,{children:"\u6700\u8fd1\u4e00\u6b21\u91c7\u96c6\u65f6\u95f4\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Reason"}),(0,t.jsxs)(s.td,{children:["\u4efb\u52a1\u5931\u8d25\u7684\u539f\u56e0\u3002\u5982\u679c\u6267\u884c\u6210\u529f\u5219\u4e3a ",(0,t.jsx)(s.code,{children:"NULL"}),"\u3002"]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"-- \u67e5\u770b\u96c6\u7fa4\u5168\u90e8\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u52a1\u3002\nSHOW ANALYZE JOB\n\n-- \u67e5\u770b\u6570\u636e\u5e93 `test` \u4e0b\u7684\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u52a1\u3002\nSHOW ANALYZE JOB where `database` = 'test';\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20ANALYZE",children:"CREATE ANALYZE"}),"\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP%20ANALYZE",children:"DROP ANALYZE"}),"\uff1a\u5220\u9664\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-statements/data-definition/KILL%20ANALYZE",children:"KILL ANALYZE"}),"\uff1a\u53d6\u6d88\u6b63\u5728\u8fd0\u884c\u4e2d\uff08Running\uff09\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4efb\u52a1\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1 ",(0,t.jsx)(s.a,{href:"/docusaurusv3/zh/docs/3.0/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>d});var t=n(67294);const r=t.createContext({});function d(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:d(e),t.createElement(r.Provider,{value:c},s)}}}]);