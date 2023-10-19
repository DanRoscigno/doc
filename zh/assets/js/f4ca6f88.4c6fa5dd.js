"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42558],{57914:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese"},a="DROP STATS",d={id:"sql-reference/sql-statements/data-definition/DROP_STATS",title:"DROP STATS",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/data-definition/DROP_STATS.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_STATS",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/DROP_STATS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/DROP_STATS.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"DROP RESOURCE",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/DROP_RESOURCE"},next:{title:"DROP TABLE",permalink:"/zh/docs/2.5/sql-reference/sql-statements/data-definition/DROP_TABLE"}},l={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u5220\u9664\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",id:"\u5220\u9664\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:4},{value:"\u5220\u9664\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",id:"\u5220\u9664\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5-1",level:4},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"drop-stats",children:"DROP STATS"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u5220\u9664 CBO \u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u624b\u52a8\u5220\u9664\u7edf\u8ba1\u4fe1\u606f\u3002\u624b\u52a8\u5220\u9664\u7edf\u8ba1\u4fe1\u606f\u65f6\uff0c\u4f1a\u5220\u9664\u7edf\u8ba1\u4fe1\u606f\u6570\u636e\u548c\u7edf\u8ba1\u4fe1\u606f\u5143\u6570\u636e\uff0c\u5e76\u4e14\u4f1a\u5220\u9664\u8fc7\u671f\u5185\u5b58\u4e2d\u7684\u7edf\u8ba1\u4fe1\u606f\u7f13\u5b58\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u81ea\u52a8\u91c7\u96c6\u4efb\u52a1\uff0c\u53ef\u80fd\u4f1a\u91cd\u65b0\u91c7\u96c6\u4e4b\u524d\u5df2\u5220\u9664\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"SHOW ANALYZE STATUS"}),"\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u5386\u53f2\u8bb0\u5f55\u3002\u8be5\u8bed\u53e5\u4ece 2.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 DROP STATS \u5220\u9664\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f7f\u7528 ANALYZE TABLE DROP HISTOGRAM \u5220\u9664\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5220\u9664\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f",children:"\u5220\u9664\u57fa\u7840\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.h4,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"DROP STATS <tbl_name>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5220\u9664\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f",children:"\u5220\u9664\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.h4,{id:"\u8bed\u6cd5-1",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ANALYZE TABLE tbl_name DROP HISTOGRAM ON <col_name> [, <col_name>]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a CBO \u7edf\u8ba1\u4fe1\u606f\u91c7\u96c6\u7684\u5185\u5bb9\uff0c\u53c2\u89c1",(0,t.jsx)(n.a,{href:"/zh/docs/2.5/using_starrocks/Cost_based_optimizer",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(i.Provider,{value:d},n)}}}]);