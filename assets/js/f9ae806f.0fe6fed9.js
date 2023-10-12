"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34986],{77442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(85893),a=n(11151);const r={displayed_sidebar:"documentation"},i="REFRESH MATERIALIZED VIEW",l={id:"sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",title:"REFRESH MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"PAUSE ROUTINE LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD"},next:{title:"RESUME ROUTINE LOAD",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"refresh-materialized-view",children:"REFRESH MATERIALIZED VIEW"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Manually refresh a specific asynchronous materialized view or partitions within."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(t.p,{children:["You can only manually refresh materialized views that adopt ASYNC or MANUAL refresh strategy. You can check the refresh strategy of an asynchronous materialized view using ",(0,s.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEW"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'REFRESH MATERIALIZED VIEW [database.]mv_name\n[PARTITION START ("<partition_start_date>") END ("<partition_end_date>")]\n[FORCE]\n[WITH { SYNC | ASYNC } MODE]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mv_name"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"The name of the materialized view to refresh manually."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PARTITION START () END ()"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"Manually refresh partitions within a certain time interval."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"partition_start_date"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"The start date of the partitions to refresh manually."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"partition_end_date"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"The end date of the partitions to refresh manually."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FORCE"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsx)(t.td,{children:"If you specify this parameter, StarRocks forcibly refreshes the corresponding materialized view or partitions. If you do not specify this parameter, StarRocks automatically judges if the data is updated and refreshes the partition only when needed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"WITH ... MODE"}),(0,s.jsx)(t.td,{children:"no"}),(0,s.jsxs)(t.td,{children:["Make a synchronous or asynchronous call of the refresh task. ",(0,s.jsx)(t.code,{children:"SYNC"})," indicates making a synchronous call of the refresh task, and StarRocks returns the task result only when the task succeeds or fails. ",(0,s.jsx)(t.code,{children:"ASYNC"})," indicates making an asynchronous call of the refresh task, and StarRocks returns success right after the task is submitted, leaving the task to be executed asynchronously in the background. You can check the refresh task status of an asynchronous materialized view by querying the ",(0,s.jsx)(t.code,{children:"tasks"})," and ",(0,s.jsx)(t.code,{children:"task_runs"})," metadata tables in StarRocks' Information Schema. For more information, see ",(0,s.jsx)(t.a,{href:"/doc/docs/2.5/using_starrocks/Materialized_view#check-the-execution-status-of-asynchronous-materialized-view",children:"Check the execution status of asynchronous materialized view"}),". Default: ",(0,s.jsx)(t.code,{children:"ASYNC"}),". Supported from v2.5.8 onwards."]})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,s.jsx)(t.p,{children:"When refreshing materialized views created based on the external catalogs, StarRocks refreshes all partitions in the materialized views."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:"Example 1: Manually refresh a specific materialized view via an asynchronous call."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"REFRESH MATERIALIZED VIEW lo_mv1;\n\nREFRESH MATERIALIZED VIEW lo_mv1 WITH ASYNC MODE;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Example 2: Manually refresh certain partitions of a specific materialized view."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:'REFRESH MATERIALIZED VIEW lo_mv1 \nPARTITION START ("2020-02-01") END ("2020-03-01");\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example 3: Forcibly refresh certain partitions of a specific materialized view."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:'REFRESH MATERIALIZED VIEW lo_mv1\nPARTITION START ("2020-02-01") END ("2020-03-01") FORCE;\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example 4: Manually refresh a materialized view via a synchronous call."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"REFRESH MATERIALIZED VIEW lo_mv1 WITH SYNC MODE;\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>r});var s=n(67294);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:l},t)}}}]);