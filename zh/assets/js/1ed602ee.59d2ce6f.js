"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[52133],{41370:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var r=s(85893),l=s(11151);const i={},c="\u5176\u4ed6",t={id:"faq/Others",title:"\u5176\u4ed6",description:"\u672c\u6587\u6c47\u603b\u4e86\u4f7f\u7528 StarRocks \u65f6\u7684\u5176\u4ed6\u5e38\u89c1\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/faq/Others.md",sourceDirName:"faq",slug:"/faq/Others",permalink:"/zh/docs/faq/Others",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/faq/Others.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"query_dump \u63a5\u53e3",permalink:"/zh/docs/faq/Dump_query"},next:{title:"Benchmarks",permalink:"/zh/docs/category/benchmarks"}},d={},a=[{value:"VARCHAR(32) \u548c STRING \u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u76f8\u540c\u5417\uff1f",id:"varchar32-\u548c-string-\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u76f8\u540c\u5417",level:2},{value:"\u67e5\u8be2\u65f6\uff0cVARCHAR(32) \u548c STRING \u7684\u6027\u80fd\u76f8\u540c\u5417\uff1f",id:"\u67e5\u8be2\u65f6varchar32-\u548c-string-\u7684\u6027\u80fd\u76f8\u540c\u5417",level:2},{value:"Oracle \u5bfc\u51fa\u7684 TXT \u6587\u4ef6\uff0c\u5728\u5c06\u5176\u5b57\u7b26\u96c6\u4fee\u6539\u6210 UTF-8 \u540e\u4ecd\u7136\u4e71\u7801\uff0c\u5982\u4f55\u5904\u7406\uff1f",id:"oracle-\u5bfc\u51fa\u7684-txt-\u6587\u4ef6\u5728\u5c06\u5176\u5b57\u7b26\u96c6\u4fee\u6539\u6210-utf-8-\u540e\u4ecd\u7136\u4e71\u7801\u5982\u4f55\u5904\u7406",level:2},{value:"MySQL \u4e2d\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8ddf StarRocks \u5b9a\u4e49\u7684\u662f\u4e00\u81f4\u7684\u5417\uff1f",id:"mysql-\u4e2d\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8ddf-starrocks-\u5b9a\u4e49\u7684\u662f\u4e00\u81f4\u7684\u5417",level:2},{value:"\u8868\u7684\u5206\u533a\u5b57\u6bb5\u53ef\u4ee5\u662f FLOAT\u3001DOUBLE\u3001\u6216 DECIMAL \u6570\u636e\u7c7b\u578b\u5417\uff1f",id:"\u8868\u7684\u5206\u533a\u5b57\u6bb5\u53ef\u4ee5\u662f-floatdouble\u6216-decimal-\u6570\u636e\u7c7b\u578b\u5417",level:2},{value:"\u5982\u4f55\u67e5\u770b\u8868\u4e2d\u7684\u6570\u636e\u5360\u4e86\u591a\u5927\u7684\u5b58\u50a8\uff1f",id:"\u5982\u4f55\u67e5\u770b\u8868\u4e2d\u7684\u6570\u636e\u5360\u4e86\u591a\u5927\u7684\u5b58\u50a8",level:2},{value:"\u5982\u4f55\u8c03\u6574 StarRocks \u6570\u636e\u5e93\u914d\u989d (quota)?",id:"\u5982\u4f55\u8c03\u6574-starrocks-\u6570\u636e\u5e93\u914d\u989d-quota",level:2},{value:"StarRocks \u652f\u6301\u901a\u8fc7 UPSERT \u8bed\u6cd5\u5b9e\u73b0\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u5417\uff1f",id:"starrocks-\u652f\u6301\u901a\u8fc7-upsert-\u8bed\u6cd5\u5b9e\u73b0\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u5417",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u539f\u5b50\u66ff\u6362\u8868\u548c\u539f\u5b50\u66ff\u6362\u5206\u533a\u529f\u80fd\uff1f",id:"\u5982\u4f55\u4f7f\u7528\u539f\u5b50\u66ff\u6362\u8868\u548c\u539f\u5b50\u66ff\u6362\u5206\u533a\u529f\u80fd",level:2},{value:"\u91cd\u542fFE\u65f6\u62a5\u9519 &quot;error to open replicated environment, will exit&quot;",id:"\u91cd\u542ffe\u65f6\u62a5\u9519-error-to-open-replicated-environment-will-exit",level:2},{value:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684 Apache Hive\u2122 \u8868\u65f6\u62a5\u9519 &quot;Broker list path exception&quot;",id:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684-apache-hive-\u8868\u65f6\u62a5\u9519-broker-list-path-exception",level:2},{value:"<strong>\u95ee\u9898\u63cf\u8ff0</strong>",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684 Apache Hive\u2122 \u8868\u65f6\u62a5\u9519 &quot;get hive partition meta data failed&quot;",id:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684-apache-hive-\u8868\u65f6\u62a5\u9519-get-hive-partition-meta-data-failed",level:2},{value:"<strong>\u95ee\u9898\u63cf\u8ff0</strong>",id:"\u95ee\u9898\u63cf\u8ff0-1",level:3},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u8bbf\u95ee Apache Hive\u2122 \u7684 ORC \u5916\u8868\u62a5\u9519 &quot;do_open failed. reason = Invalid ORC postscript length&quot;",id:"\u8bbf\u95ee-apache-hive-\u7684-orc-\u5916\u8868\u62a5\u9519-do_open-failed-reason--invalid-orc-postscript-length",level:2},{value:"<strong>\u95ee\u9898\u63cf\u8ff0</strong>",id:"\u95ee\u9898\u63cf\u8ff0-2",level:3},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u8fde\u63a5 MySQL \u5916\u8868\u62a5\u9519 &quot;caching_sha2_password cannot be loaded&quot;",id:"\u8fde\u63a5-mysql-\u5916\u8868\u62a5\u9519-caching_sha2_password-cannot-be-loaded",level:2},{value:"<strong>\u95ee\u9898\u63cf\u8ff0</strong>",id:"\u95ee\u9898\u63cf\u8ff0-3",level:3},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u4e3a\u4ec0\u4e48\u5220\u9664\u4e00\u5f20\u8868\u540e\u78c1\u76d8\u7a7a\u95f4\u6ca1\u6709\u7acb\u5373\u91ca\u653e\uff1f",id:"\u4e3a\u4ec0\u4e48\u5220\u9664\u4e00\u5f20\u8868\u540e\u78c1\u76d8\u7a7a\u95f4\u6ca1\u6709\u7acb\u5373\u91ca\u653e",level:2},{value:"\u5982\u4f55\u67e5\u770b StarRocks \u7684\u7248\u672c\uff1f",id:"\u5982\u4f55\u67e5\u770b-starrocks-\u7684\u7248\u672c",level:2},{value:"\u5982\u4f55\u8bbe\u7f6e FE \u7684\u5185\u5b58\u5927\u5c0f\uff1f",id:"\u5982\u4f55\u8bbe\u7f6e-fe-\u7684\u5185\u5b58\u5927\u5c0f",level:2},{value:"StarRocks \u5982\u4f55\u8ba1\u7b97\u67e5\u8be2\u65f6\u95f4?",id:"starrocks-\u5982\u4f55\u8ba1\u7b97\u67e5\u8be2\u65f6\u95f4",level:2},{value:"StarRocks \u652f\u6301\u5bfc\u51fa\u6570\u636e\u5230\u672c\u5730\u65f6\u8bbe\u7f6e\u8def\u5f84\u5417\uff1f",id:"starrocks-\u652f\u6301\u5bfc\u51fa\u6570\u636e\u5230\u672c\u5730\u65f6\u8bbe\u7f6e\u8def\u5f84\u5417",level:2},{value:"StarRocks \u7684\u5e76\u53d1\u91cf\u7ea7\u662f\u591a\u5c11\uff1f",id:"starrocks-\u7684\u5e76\u53d1\u91cf\u7ea7\u662f\u591a\u5c11",level:2},{value:"\u4e3a\u4ec0\u4e48 StarRocks \u7684 SSB \u6d4b\u8bd5\u9996\u6b21\u6267\u884c\u901f\u5ea6\u8f83\u6162\uff0c\u540e\u7eed\u6267\u884c\u8f83\u5feb\uff1f",id:"\u4e3a\u4ec0\u4e48-starrocks-\u7684-ssb-\u6d4b\u8bd5\u9996\u6b21\u6267\u884c\u901f\u5ea6\u8f83\u6162\u540e\u7eed\u6267\u884c\u8f83\u5feb",level:2},{value:"\u4e00\u4e2a\u96c6\u7fa4\u6700\u5c11\u53ef\u4ee5\u914d\u7f6e\u591a\u5c11\u4e2a BE\uff1f",id:"\u4e00\u4e2a\u96c6\u7fa4\u6700\u5c11\u53ef\u4ee5\u914d\u7f6e\u591a\u5c11\u4e2a-be",level:2},{value:"\u4f7f\u7528 Apache Superset \u6846\u67b6\u5448\u73b0 StarRocks \u4e2d\u7684\u6570\u636e\u65f6\uff0c\u5982\u4f55\u8fdb\u884c\u6570\u636e\u6743\u9650\u914d\u7f6e\uff1f",id:"\u4f7f\u7528-apache-superset-\u6846\u67b6\u5448\u73b0-starrocks-\u4e2d\u7684\u6570\u636e\u65f6\u5982\u4f55\u8fdb\u884c\u6570\u636e\u6743\u9650\u914d\u7f6e",level:2},{value:"\u4e3a\u4ec0\u4e48\u5c06 <code>enable_profile</code> \u6307\u5b9a\u4e3a <code>true</code> \u540e profile \u65e0\u6cd5\u663e\u793a\uff1f",id:"\u4e3a\u4ec0\u4e48\u5c06-enable_profile-\u6307\u5b9a\u4e3a-true-\u540e-profile-\u65e0\u6cd5\u663e\u793a",level:2},{value:"\u5982\u4f55\u67e5\u770b StarRocks \u8868\u91cc\u7684\u5b57\u6bb5\u6ce8\u91ca\uff1f",id:"\u5982\u4f55\u67e5\u770b-starrocks-\u8868\u91cc\u7684\u5b57\u6bb5\u6ce8\u91ca",level:2},{value:"\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a now() \u51fd\u6570\u7684\u9ed8\u8ba4\u503c\u5417\uff1f",id:"\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a-now-\u51fd\u6570\u7684\u9ed8\u8ba4\u503c\u5417",level:2},{value:"StarRocks \u5916\u90e8\u8868\u540c\u6b65\u51fa\u9519\uff0c\u5e94\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"starrocks-\u5916\u90e8\u8868\u540c\u6b65\u51fa\u9519\u5e94\u8be5\u5982\u4f55\u89e3\u51b3",level:2},{value:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u5982\u4f55\u91ca\u653e\u53ef\u7528\u7a7a\u95f4\uff1f",id:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u65f6\u5982\u4f55\u91ca\u653e\u53ef\u7528\u7a7a\u95f4",level:2},{value:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u5982\u4f55\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4\uff1f",id:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u5982\u4f55\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",a:"a",ul:"ul",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u6c47\u603b\u4e86\u4f7f\u7528 StarRocks \u65f6\u7684\u5176\u4ed6\u5e38\u89c1\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"varchar32-\u548c-string-\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u76f8\u540c\u5417",children:"VARCHAR(32) \u548c STRING \u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u76f8\u540c\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"VARCHAR(32) \u548c STRING \u90fd\u662f\u53d8\u957f\u6570\u636e\u7c7b\u578b\u3002\u5f53\u50a8\u5b58\u76f8\u540c\u957f\u5ea6\u7684\u6570\u636e\u65f6\uff0cVARCHAR(32) \u548c STRING \u5360\u7528\u7684\u50a8\u5b58\u7a7a\u95f4\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u65f6varchar32-\u548c-string-\u7684\u6027\u80fd\u76f8\u540c\u5417",children:"\u67e5\u8be2\u65f6\uff0cVARCHAR(32) \u548c STRING \u7684\u6027\u80fd\u76f8\u540c\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"oracle-\u5bfc\u51fa\u7684-txt-\u6587\u4ef6\u5728\u5c06\u5176\u5b57\u7b26\u96c6\u4fee\u6539\u6210-utf-8-\u540e\u4ecd\u7136\u4e71\u7801\u5982\u4f55\u5904\u7406",children:"Oracle \u5bfc\u51fa\u7684 TXT \u6587\u4ef6\uff0c\u5728\u5c06\u5176\u5b57\u7b26\u96c6\u4fee\u6539\u6210 UTF-8 \u540e\u4ecd\u7136\u4e71\u7801\uff0c\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u6587\u4ef6\u5b57\u7b26\u96c6\u89c6\u4e3a GBK \u8fdb\u884c\u5b57\u7b26\u96c6\u8f6c\u6362\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(n.strong,{children:"origin"})," \u7684\u6587\u4ef6\u4e71\u7801\uff0c\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5230\u5176\u5b57\u7b26\u96c6\u4e3a ISO-8859-1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"file --mime-encoding origin.txt\norigin.txt\uff1aiso-8859-1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"iconv"}),"\u547d\u4ee4\u5c06\u6587\u4ef6\u7684\u5b57\u7b26\u96c6\u8f6c\u6362\u4e3a UTF-8\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"iconv -f iso-8859-1 -t utf-8 origin.txt > origin_utf-8.txt\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u82e5\u8f6c\u6362\u540e\u5f97\u5230\u7684\u6587\u4ef6\u8fd8\u5b58\u5728\u4e71\u7801\uff0c\u90a3\u4e48\u5c06\u6587\u4ef6\u7684\u5b57\u7b26\u96c6\u89c6\u4e3a GBK\uff0c\u518d\u8f6c\u6362\u6210 UTF-8\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"iconv -f gbk -t utf-8 origin.txt > origin_utf-8.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mysql-\u4e2d\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8ddf-starrocks-\u5b9a\u4e49\u7684\u662f\u4e00\u81f4\u7684\u5417",children:"MySQL \u4e2d\u5b9a\u4e49\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8ddf StarRocks \u5b9a\u4e49\u7684\u662f\u4e00\u81f4\u7684\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 StarRocks \u4e2d\uff0cVARCHAR(n) \u4e2d\u7684n\u4ee3\u8868\u5b57\u8282\u6570\uff0c\u800c\u5728 MySQL \u4e2d\uff0cVARCHAR(n) \u4e2d\u7684 n \u4ee3\u8868\u5b57\u7b26\u6570\u3002\u6839\u636e UTF-8\uff0c1 \u4e2a\u6c49\u5b57\u7b49\u4e8e 3 \u4e2a\u5b57\u8282\u3002\u5f53 StarRocks \u548c MySQL \u5c06 n \u5b9a\u4e49\u6210\u76f8\u540c\u6570\u5b57\u65f6\uff0cMySQL \u4fdd\u5b58\u7684\u5b57\u7b26\u6570\u662f StarRocks \u7684 3 \u500d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8868\u7684\u5206\u533a\u5b57\u6bb5\u53ef\u4ee5\u662f-floatdouble\u6216-decimal-\u6570\u636e\u7c7b\u578b\u5417",children:"\u8868\u7684\u5206\u533a\u5b57\u6bb5\u53ef\u4ee5\u662f FLOAT\u3001DOUBLE\u3001\u6216 DECIMAL \u6570\u636e\u7c7b\u578b\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u53ef\u4ee5\uff0c\u4ec5\u652f\u6301 DATE\uff0c DATETIME \u548c INT \u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u67e5\u770b\u8868\u4e2d\u7684\u6570\u636e\u5360\u4e86\u591a\u5927\u7684\u5b58\u50a8",children:"\u5982\u4f55\u67e5\u770b\u8868\u4e2d\u7684\u6570\u636e\u5360\u4e86\u591a\u5927\u7684\u5b58\u50a8\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c SHOW DATA \u8bed\u53e5\u67e5\u770b\u6570\u636e\u6240\u5360\u5b58\u50a8\u7a7a\u95f4\u4ee5\u53ca\u6570\u636e\u91cf\u3001\u526f\u672c\u6570\u91cf\u548c\u884c\u6570\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u6570\u636e\u5bfc\u5165\u975e\u5b9e\u65f6\u66f4\u65b0\uff0c\u5728\u5bfc\u5165\u540e 1 \u5206\u949f\u5de6\u53f3\u53ef\u4ee5\u67e5\u770b\u5230\u6700\u65b0\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u8c03\u6574-starrocks-\u6570\u636e\u5e93\u914d\u989d-quota",children:"\u5982\u4f55\u8c03\u6574 StarRocks \u6570\u636e\u5e93\u914d\u989d (quota)?"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u5982\u4e0b\u4ee3\u7801\u8c03\u6574\u6570\u636e\u5e93\u914d\u989d\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER DATABASE example_db SET DATA QUOTA 10T;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"starrocks-\u652f\u6301\u901a\u8fc7-upsert-\u8bed\u6cd5\u5b9e\u73b0\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u5417",children:"StarRocks \u652f\u6301\u901a\u8fc7 UPSERT \u8bed\u6cd5\u5b9e\u73b0\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u5417\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks 2.2 \u53ca\u4ee5\u4e0a\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u4e3b\u952e (Primary Key) \u6a21\u578b\u5b9e\u73b0\u90e8\u5206\u5b57\u6bb5\u66f4\u65b0\u3002StarRocks 1.9 \u53ca\u4ee5\u4e0a\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u4e3b\u952e (Primary Key) \u6a21\u578b\u5b9e\u73b0\u5168\u90e8\u5b57\u6bb5\u66f4\u65b0\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 StarRocks 2.2 \u7248\u672c\u7684",(0,r.jsx)(n.a,{href:"/zh/docs/table_design/table_types/primary_key_table",children:"\u4e3b\u952e\u6a21\u578b"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u4f7f\u7528\u539f\u5b50\u66ff\u6362\u8868\u548c\u539f\u5b50\u66ff\u6362\u5206\u533a\u529f\u80fd",children:"\u5982\u4f55\u4f7f\u7528\u539f\u5b50\u66ff\u6362\u8868\u548c\u539f\u5b50\u66ff\u6362\u5206\u533a\u529f\u80fd\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c SWAP WITH \u8bed\u53e5\u5b9e\u73b0\u539f\u5b50\u66ff\u6362\u8868\u548c\u539f\u5b50\u66ff\u6362\u5206\u533a\u529f\u80fd\u3002SWAP WITH \u8bed\u53e5\u8981\u6bd4 INSERT OVERWRITE \u8bed\u53e5\u66f4\u5b89\u5168\u3002\u539f\u5b50\u66ff\u6362\u524d\u53ef\u4ee5\u5148\u68c0\u67e5\u6570\u636e\uff0c\u4ee5\u4fbf\u6838\u5bf9\u66ff\u6362\u540e\u7684\u6570\u636e\u548c\u66ff\u6362\u524d\u7684\u6570\u636e\u662f\u5426\u76f8\u540c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u539f\u5b50\u66ff\u6362\u8868\uff1a\u4f8b\u5982\uff0c\u6709\u4e00\u5f20\u8868\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"table1"}),"\u3002\u5982\u679c\u8981\u7528\u53e6\u4e00\u5f20\u8868\u539f\u5b50\u66ff\u6362 ",(0,r.jsx)(n.code,{children:"table1"}),"\uff0c\u64cd\u4f5c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u5f20\u65b0\u8868\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"table2"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"create table2 like table1;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 Stream Load\u3001Broker Load\u3001\u6216 Insert Into \u7b49\u65b9\u5f0f\u5c06 ",(0,r.jsx)(n.code,{children:"table1"})," \u7684\u6570\u636e\u5bfc\u5165\u5230\u65b0\u8868",(0,r.jsx)(n.code,{children:"table2"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u539f\u5b50\u66ff\u6362 ",(0,r.jsx)(n.code,{children:"table1"})," \u4e0e ",(0,r.jsx)(n.code,{children:"table2"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE table1 SWAP WITH table2;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u6837\u505a\uff0c\u6570\u636e\u5c31\u4f1a\u7cbe\u51c6\u7684\u5bfc\u5165\u5230 ",(0,r.jsx)(n.code,{children:"table1"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u539f\u5b50\u66ff\u6362\u5206\u533a\uff1a\u4f8b\u5982\uff0c\u6709\u4e00\u4e2a\u8868\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"table1"}),"\u3002\u5982\u679c\u60f3\u8981\u539f\u5b50\u66ff\u6362 ",(0,r.jsx)(n.code,{children:"table1"})," \u4e2d\u7684\u5206\u533a\u6570\u636e\uff0c\u64cd\u4f5c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u4e34\u65f6\u5206\u533a\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'ALTER TABLE table1\n\nADD TEMPORARY PARTITION tp1\n\nVALUES LESS THAN("2020-02-01");\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"table1"})," \u4e2d\u7684\u5206\u533a\u6570\u636e\u5bfc\u5165\u5230\u4e34\u65f6\u5206\u533a\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u539f\u5b50\u66ff\u6362\u5206\u533a\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE table1\n\nREPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u91cd\u542ffe\u65f6\u62a5\u9519-error-to-open-replicated-environment-will-exit",children:'\u91cd\u542fFE\u65f6\u62a5\u9519 "error to open replicated environment, will exit"'}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u9519\u8bef\u662f BDBJE \u7684\u6f0f\u6d1e\u5bfc\u81f4\u7684\uff0c\u5c06 BDBJE \u5347\u7ea7\u5230 1.17 \u6216\u66f4\u9ad8\u7248\u672c\u53ef\u4fee\u590d\u6b64\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684-apache-hive-\u8868\u65f6\u62a5\u9519-broker-list-path-exception",children:'\u67e5\u8be2\u65b0\u521b\u5efa\u7684 Apache Hive\u2122 \u8868\u65f6\u62a5\u9519 "Broker list path exception"'}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"msg:Broker list path exception\n\npath=hdfs://172.31.3.136:9000/user/hive/warehouse/zltest.db/student_info/*, broker=TNetworkAddress(hostname:172.31.4.233, port:8000)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(n.p,{children:"\u548c StarRocks \u7684\u6280\u672f\u652f\u6301\u786e\u8ba4 namenode \u7684\u5730\u5740\u548c\u7aef\u53e3\u662f\u5426\u6b63\u786e\u4ee5\u53ca\u60a8\u662f\u5426\u6709\u6743\u9650\u8bbf\u95ee namenode \u7684\u5730\u5740\u548c\u7aef\u53e3\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u65b0\u521b\u5efa\u7684-apache-hive-\u8868\u65f6\u62a5\u9519-get-hive-partition-meta-data-failed",children:'\u67e5\u8be2\u65b0\u521b\u5efa\u7684 Apache Hive\u2122 \u8868\u65f6\u62a5\u9519 "get hive partition meta data failed"'}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0-1",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"msg:get hive partition meta data failed: java.net.UnknownHostException: emr-header-1.cluster-242\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-1",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsxs)(n.p,{children:["\u786e\u8ba4\u6709\u7f51\u7edc\u8fde\u63a5\u5e76\u7ed9\u6bcf\u4e2a BE \u673a\u5668\u4f20\u4e00\u4efd\u96c6\u7fa4\u91cc\u7684 ",(0,r.jsx)(n.strong,{children:"host"})," \u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbf\u95ee-apache-hive-\u7684-orc-\u5916\u8868\u62a5\u9519-do_open-failed-reason--invalid-orc-postscript-length",children:'\u8bbf\u95ee Apache Hive\u2122 \u7684 ORC \u5916\u8868\u62a5\u9519 "do_open failed. reason = Invalid ORC postscript length"'}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0-2",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,r.jsx)(n.p,{children:"Apache Hive\u2122 \u7684\u5143\u6570\u636e\u4f1a\u7f13\u5b58\u5728 StarRocks \u7684 FE \u4e2d\uff0c\u4f46\u662f StarRocks \u66f4\u65b0\u5143\u6570\u636e\u6709\u4e24\u4e2a\u5c0f\u65f6\u7684\u65f6\u95f4\u5dee\u3002\u5728 StarRocks \u5b8c\u6210\u66f4\u65b0\u4e4b\u524d\uff0c\u5982\u679c\u5728 Apache Hive\u2122 \u8868\u4e2d\u63d2\u5165\u65b0\u6570\u636e\u6216\u66f4\u65b0\u6570\u636e\uff0c\u90a3\u4e48 BE \u626b\u63cf\u7684 HDFS \u4e2d\u7684\u6570\u636e\u548c FE \u83b7\u5f97\u7684\u6570\u636e\u4e0d\u4e00\u81f4\u5c31\u4f1a\u53d1\u751f\u8fd9\u4e2a\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"MySQL [bdp_dim]> select * from dim_page_func_s limit 1;\n\nERROR 1064 (HY000): HdfsOrcScanner::do_open failed. reason = Invalid ORC postscript length\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-2",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6848\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5c06 StarRocks \u5347\u7ea7\u5230 2.2 \u6216\u66f4\u9ad8\u7248\u672c\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u624b\u52a8\u5237\u65b0 Apache Hive\u2122 \u8868\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1",(0,r.jsx)(n.a,{href:"/zh/docs/data_source/External_table#%E6%89%8B%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%85%83%E6%95%B0%E6%8D%AE%E7%BC%93%E5%AD%98",children:"\u7f13\u5b58\u66f4\u65b0"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fde\u63a5-mysql-\u5916\u8868\u62a5\u9519-caching_sha2_password-cannot-be-loaded",children:'\u8fde\u63a5 MySQL \u5916\u8868\u62a5\u9519 "caching_sha2_password cannot be loaded"'}),"\n",(0,r.jsx)(n.h3,{id:"\u95ee\u9898\u63cf\u8ff0-3",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898\u63cf\u8ff0"})}),"\n",(0,r.jsx)(n.p,{children:"MySQL 5.7 \u7248\u672c\u9ed8\u8ba4\u7684\u8ba4\u8bc1\u65b9\u5f0f\u4e3a mysql_native_password\uff0c\u5982\u4f7f\u7528 MySQL 8.0 \u7248\u672c\u9ed8\u8ba4\u7684\u8ba4\u8bc1\u65b9\u5f0f  caching_sha2_password \u6765\u8fdb\u884c\u8ba4\u8bc1\u4f1a\u5bfc\u81f4\u8fde\u63a5\u62a5\u9519\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6848-3",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6848\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bbe\u7f6e root \u7528\u6237"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539 ",(0,r.jsx)(n.strong,{children:"my.cnf"})," \u6587\u4ef6"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain%20Text",children:"vim my.cnf\n\n[mysqld]\n\ndefault_authentication_plugin=mysql_native_password\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u5220\u9664\u4e00\u5f20\u8868\u540e\u78c1\u76d8\u7a7a\u95f4\u6ca1\u6709\u7acb\u5373\u91ca\u653e",children:"\u4e3a\u4ec0\u4e48\u5220\u9664\u4e00\u5f20\u8868\u540e\u78c1\u76d8\u7a7a\u95f4\u6ca1\u6709\u7acb\u5373\u91ca\u653e\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c DROP TABLE \u8bed\u53e5\u5220\u8868\u540e\u9700\u7b49\u5f85\u78c1\u76d8\u7a7a\u95f4\u91ca\u653e\u3002\u5982\u679c\u60f3\u8981\u5feb\u901f\u91ca\u653e\u78c1\u76d8\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528 DROP TABLE FORCE \u8bed\u53e5\u3002\u6267\u884c DROP TABLE FORCE \u8bed\u53e5\u5220\u9664\u8868\u65f6\u4e0d\u4f1a\u68c0\u67e5\u8be5\u8868\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u800c\u662f\u76f4\u63a5\u5c06\u8868\u5220\u9664\u3002\u5efa\u8bae\u8c28\u614e\u4f7f\u7528 DROP TABLE FORCE \u8bed\u53e5\uff0c\u56e0\u4e3a\u4f7f\u7528\u8be5\u8bed\u53e5\u5220\u9664\u7684\u8868\u4e0d\u80fd\u6062\u590d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u67e5\u770b-starrocks-\u7684\u7248\u672c",children:"\u5982\u4f55\u67e5\u770b StarRocks \u7684\u7248\u672c\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"select current_version();"})," \u547d\u4ee4\u6216\u8005CLI ",(0,r.jsx)(n.code,{children:"sh bin/show_fe_version.sh"})," \u547d\u4ee4\u67e5\u770b\u7248\u672c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u8bbe\u7f6e-fe-\u7684\u5185\u5b58\u5927\u5c0f",children:"\u5982\u4f55\u8bbe\u7f6e FE \u7684\u5185\u5b58\u5927\u5c0f\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5143\u6570\u636e\u4fe1\u606f\u90fd\u4fdd\u5b58\u5728 FE \u7684\u5185\u5b58\u4e2d\u3002\u53ef\u4ee5\u6309\u4e0b\u8868\u6240\u793a\u53c2\u8003 Tablet \u7684\u6570\u91cf\u6765\u8bbe\u7f6e FE \u7684\u5185\u5b58\u5927\u5c0f\u3002\u4f8b\u5982 Tablet \u6570\u91cf\u4e3a 100 \u4e07\u4ee5\u4e0b\uff0c\u5219\u6700\u5c11\u8981\u5206\u914d 16 GB \u7684\u5185\u5b58\u7ed9 FE\u3002\u60a8\u9700\u8981\u5728 ",(0,r.jsx)(n.strong,{children:"fe.conf"})," \u6587\u4ef6\u7684 ",(0,r.jsx)(n.code,{children:"JAVA_OPTS"})," \u4e2d\u901a\u8fc7\u914d\u7f6e ",(0,r.jsx)(n.code,{children:"-Xms"})," \u548c ",(0,r.jsx)(n.code,{children:"-Xmx"})," \u53c2\u6570\u6765\u8bbe\u7f6e FE \u5185\u5b58\u5927\u5c0f\uff0c\u5e76\u4e14\u4e24\u8005\u53d6\u503c\u4fdd\u6301\u4e00\u81f4\u5373\u53ef\u3002\u6ce8\u610f\uff0c\u96c6\u7fa4\u4e2d\u6240\u6709 FE \u9700\u8981\u7edf\u4e00\u914d\u7f6e\uff0c\u56e0\u4e3a\u6bcf\u4e2a FE \u90fd\u53ef\u80fd\u6210\u4e3a Leader\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tablet \u6570\u91cf"}),(0,r.jsx)(n.th,{children:"FE \u5185\u5b58\u5927\u5c0f"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100 \u4e07\u4ee5\u4e0b"}),(0,r.jsx)(n.td,{children:"16 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"100 \u4e07 \uff5e 200 \u4e07"}),(0,r.jsx)(n.td,{children:"32 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200 \u4e07 \uff5e 500 \u4e07"}),(0,r.jsx)(n.td,{children:"64 GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500 \u4e07 \uff5e 1 \u5343\u4e07"}),(0,r.jsx)(n.td,{children:"128 GB"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"starrocks-\u5982\u4f55\u8ba1\u7b97\u67e5\u8be2\u65f6\u95f4",children:"StarRocks \u5982\u4f55\u8ba1\u7b97\u67e5\u8be2\u65f6\u95f4?"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u662f\u591a\u7ebf\u7a0b\u8ba1\u7b97\uff0c\u67e5\u8be2\u65f6\u95f4\u5373\u4e3a\u67e5\u8be2\u6700\u6162\u7684\u7ebf\u7a0b\u6240\u7528\u7684\u65f6\u95f4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"starrocks-\u652f\u6301\u5bfc\u51fa\u6570\u636e\u5230\u672c\u5730\u65f6\u8bbe\u7f6e\u8def\u5f84\u5417",children:"StarRocks \u652f\u6301\u5bfc\u51fa\u6570\u636e\u5230\u672c\u5730\u65f6\u8bbe\u7f6e\u8def\u5f84\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u652f\u6301\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"starrocks-\u7684\u5e76\u53d1\u91cf\u7ea7\u662f\u591a\u5c11",children:"StarRocks \u7684\u5e76\u53d1\u91cf\u7ea7\u662f\u591a\u5c11\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u5efa\u8bae\u6839\u636e\u4e1a\u52a1\u573a\u666f\u6216\u6a21\u62df\u4e1a\u52a1\u573a\u666f\u6d4b\u8bd5 StarRocks \u7684\u5e76\u53d1\u91cf\u7ea7\u3002\u5728\u90e8\u5206\u5ba2\u6237\u7684\u5e76\u53d1\u91cf\u7ea7\u6700\u9ad8\u8fbe\u5230 20,000 QPS \u6216 30,000 QPS\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48-starrocks-\u7684-ssb-\u6d4b\u8bd5\u9996\u6b21\u6267\u884c\u901f\u5ea6\u8f83\u6162\u540e\u7eed\u6267\u884c\u8f83\u5feb",children:"\u4e3a\u4ec0\u4e48 StarRocks \u7684 SSB \u6d4b\u8bd5\u9996\u6b21\u6267\u884c\u901f\u5ea6\u8f83\u6162\uff0c\u540e\u7eed\u6267\u884c\u8f83\u5feb\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u7b2c\u4e00\u6b21\u67e5\u8be2\u8bfb\u76d8\u8ddf\u78c1\u76d8\u6027\u80fd\u76f8\u5173\u3002\u7b2c\u4e00\u6b21\u67e5\u8be2\u540e\u7cfb\u7edf\u7684\u9875\u9762\u7f13\u5b58\u751f\u6548\uff0c\u540e\u7eed\u67e5\u8be2\u4f1a\u5148\u626b\u63cf\u9875\u9762\u7f13\u5b58\uff0c\u6240\u4ee5\u901f\u5ea6\u6709\u6240\u63d0\u5347\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e00\u4e2a\u96c6\u7fa4\u6700\u5c11\u53ef\u4ee5\u914d\u7f6e\u591a\u5c11\u4e2a-be",children:"\u4e00\u4e2a\u96c6\u7fa4\u6700\u5c11\u53ef\u4ee5\u914d\u7f6e\u591a\u5c11\u4e2a BE\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5355\u8282\u70b9\u90e8\u7f72\uff0c\u6240\u4ee5 BE \u6700\u5c0f\u914d\u7f6e\u4e2a\u6570\u662f 1 \u4e2a\u3002BE \u9700\u8981\u652f\u6301 AVX2 \u6307\u4ee4\u96c6\uff0c\u6240\u4ee5\u63a8\u8350\u90e8\u7f72 BE \u7684\u673a\u5668\u914d\u7f6e\u5728 8 \u6838 16 GB\u53ca\u4ee5\u4e0a\u3002\u5efa\u8bae\u6b63\u5e38\u5e94\u7528\u73af\u5883\u914d\u7f6e 3 \u4e2a BE\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-apache-superset-\u6846\u67b6\u5448\u73b0-starrocks-\u4e2d\u7684\u6570\u636e\u65f6\u5982\u4f55\u8fdb\u884c\u6570\u636e\u6743\u9650\u914d\u7f6e",children:"\u4f7f\u7528 Apache Superset \u6846\u67b6\u5448\u73b0 StarRocks \u4e2d\u7684\u6570\u636e\u65f6\uff0c\u5982\u4f55\u8fdb\u884c\u6570\u636e\u6743\u9650\u914d\u7f6e\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7528\u6237\uff0c\u7136\u540e\u901a\u8fc7\u7ed9\u8be5\u7528\u6237\u6388\u4e88\u8868\u67e5\u8be2\u6743\u9650\uff08SELECT\uff09\u8fdb\u884c\u6570\u636e\u6743\u9650\u63a7\u5236\u3002"}),"\n",(0,r.jsxs)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u5c06-enable_profile-\u6307\u5b9a\u4e3a-true-\u540e-profile-\u65e0\u6cd5\u663e\u793a",children:["\u4e3a\u4ec0\u4e48\u5c06 ",(0,r.jsx)(n.code,{children:"enable_profile"})," \u6307\u5b9a\u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u540e profile \u65e0\u6cd5\u663e\u793a\uff1f"]}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a\u62a5\u544a\u4fe1\u606f\u53ea\u6c47\u62a5\u7ed9\u4e3b FE\uff0c\u53ea\u6709\u4e3b FE \u53ef\u4ee5\u67e5\u770b\u62a5\u544a\u4fe1\u606f\u3002\u540c\u65f6\uff0c\u5982\u679c\u901a\u8fc7 StarRocks Manager \u67e5\u770b profile\uff0c \u5fc5\u987b\u786e\u4fdd FE \u914d\u7f6e\u9879 ",(0,r.jsx)(n.code,{children:"enable_collect_query_detail_info"})," \u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u67e5\u770b-starrocks-\u8868\u91cc\u7684\u5b57\u6bb5\u6ce8\u91ca",children:"\u5982\u4f55\u67e5\u770b StarRocks \u8868\u91cc\u7684\u5b57\u6bb5\u6ce8\u91ca\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"show create table xxx"})," \u547d\u4ee4\u67e5\u770b\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a-now-\u51fd\u6570\u7684\u9ed8\u8ba4\u503c\u5417",children:"\u5efa\u8868\u65f6\u53ef\u4ee5\u6307\u5b9a now() \u51fd\u6570\u7684\u9ed8\u8ba4\u503c\u5417\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks 2.1 \u53ca\u66f4\u9ad8\u7248\u672c\u652f\u6301\u4e3a\u51fd\u6570\u6307\u5b9a\u9ed8\u8ba4\u503c\u3002\u4f4e\u4e8e StarRocks 2.1 \u7684\u7248\u672c\u4ec5\u652f\u6301\u4e3a\u51fd\u6570\u6307\u5b9a\u5e38\u91cf\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"starrocks-\u5916\u90e8\u8868\u540c\u6b65\u51fa\u9519\u5e94\u8be5\u5982\u4f55\u89e3\u51b3",children:"StarRocks \u5916\u90e8\u8868\u540c\u6b65\u51fa\u9519\uff0c\u5e94\u8be5\u5982\u4f55\u89e3\u51b3\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63d0\u793a\u95ee\u9898"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.p,{children:["SQL \u9519\u8bef [1064] [42000]: data cannot be inserted into table with empty partition.Use ",(0,r.jsx)(n.code,{children:"SHOW PARTITIONS FROM external_t"})," to see the currently partitions of this table."]}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770bPartitions\u65f6\u63d0\u793a\u53e6\u4e00\u9519\u8bef\uff1aSHOW PARTITIONS FROM external_t\nSQL \u9519\u8bef [1064] [42000]: Table[external_t] is not a OLAP/ELASTICSEARCH/HIVE table"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6cd5"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:'\u539f\u6765\u662f\u5efa\u5916\u90e8\u8868\u65f6\u7aef\u53e3\u4e0d\u5bf9\uff0c\u6b63\u786e\u7684\u7aef\u53e3\u662f"port"="9020"\uff0c\u4e0d\u662f9931.'}),"\n",(0,r.jsx)(n.h2,{id:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u65f6\u5982\u4f55\u91ca\u653e\u53ef\u7528\u7a7a\u95f4",children:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u5982\u4f55\u91ca\u653e\u53ef\u7528\u7a7a\u95f4\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"rm -rf"})," \u547d\u4ee4\u76f4\u63a5\u5220\u9664 ",(0,r.jsx)(n.code,{children:"trash"})," \u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\u3002\u5728\u5b8c\u6210\u6062\u590d\u6570\u636e\u5907\u4efd\u540e\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5220\u9664 ",(0,r.jsx)(n.code,{children:"snapshot"})," \u76ee\u5f55\u4e0b\u7684\u5185\u5bb9\u91ca\u653e\u5b58\u50a8\u7a7a\u95f4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u5982\u4f55\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4",children:"\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u5982\u4f55\u6269\u5c55\u78c1\u76d8\u7a7a\u95f4\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c BE \u8282\u70b9\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\uff0c\u60a8\u53ef\u4ee5\u5728 BE \u914d\u7f6e\u9879 ",(0,r.jsx)(n.code,{children:"storage_root_path"})," \u6240\u5bf9\u5e94\u76ee\u5f55\u4e0b\u76f4\u63a5\u6dfb\u52a0\u78c1\u76d8\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>i});var r=s(67294);const l=r.createContext({});function i(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(l.Provider,{value:t},n)}}}]);