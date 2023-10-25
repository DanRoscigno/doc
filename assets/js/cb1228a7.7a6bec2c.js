"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39563],{66325:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(85893),n=s(11151);const a={displayed_sidebar:"English"},r="DROP STATS",c={id:"sql-reference/sql-statements/data-definition/DROP_STATS",title:"DROP STATS",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/DROP_STATS.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_STATS",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP_STATS",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/DROP_STATS.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DROP RESOURCE",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP_RESOURCE"},next:{title:"DROP TABLE",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP_TABLE"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Delete basic statistics",id:"delete-basic-statistics",level:3},{value:"Delete histograms",id:"delete-histograms",level:3},{value:"References",id:"references",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"drop-stats",children:"DROP STATS"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Deletes CBO statistics, which include basic statistics and histograms. For more information, see ",(0,i.jsx)(t.a,{href:"/docs/3.0/using_starrocks/Cost_based_optimizer#basic-statistics",children:"Gather statistics for CBO"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can delete statistical information you do not need. When you delete statistics, both the data and metadata of the statistics are deleted, as well as the statistics in expired cache. Note that if an automatic collection task is ongoing, previously deleted statistics may be collected again. You can use ",(0,i.jsx)(t.code,{children:"SHOW ANALYZE STATUS"})," to view the history of collection tasks."]}),"\n",(0,i.jsx)(t.p,{children:"This statement is supported from v2.4."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.h3,{id:"delete-basic-statistics",children:"Delete basic statistics"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-SQL",children:"DROP STATS tbl_name\n"})}),"\n",(0,i.jsx)(t.h3,{id:"delete-histograms",children:"Delete histograms"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-SQL",children:"ANALYZE TABLE tbl_name DROP HISTOGRAM ON col_name [, col_name];\n"})}),"\n",(0,i.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(t.p,{children:["For more information about collecting statistics for CBO, see ",(0,i.jsx)(t.a,{href:"/docs/3.0/using_starrocks/Cost_based_optimizer",children:"Gather statistics for CBO"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>a});var i=s(67294);const n=i.createContext({});function a(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:a(e),i.createElement(n.Provider,{value:c},t)}}}]);