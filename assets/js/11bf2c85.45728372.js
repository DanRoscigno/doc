"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77124],{37808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(85893),i=n(11151);const o={displayed_sidebar:"English"},a="Insert Into",s={id:"faq/loading/Insert_into_faq",title:"Insert Into",description:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?",source:"@site/versioned_docs/version-3.0/faq/loading/Insert_into_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Insert_into_faq",permalink:"/docs/3.0/faq/loading/Insert_into_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Insert_into_faq.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Flink Connector",permalink:"/docs/3.0/faq/loading/Flink_connector_faq"},next:{title:"Data loading",permalink:"/docs/3.0/faq/loading/Loading_faq"}},c={},l=[{value:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?",id:"when-performing-data-insert-each-insert-in-sql-takes-up-50-to-100ms-is-there-any-way-to-increase-efficiency",level:2},{value:"&#39;Insert into select&#39; task reports error: index channel has intoleralbe failure",id:"insert-into-select-task-reports-error-index-channel-has-intoleralbe-failure",level:2},{value:"The error &quot;execute timeout&quot; occurs when I run the INSER INTO SELECT command to load a large volume of data",id:"the-error-execute-timeout-occurs-when-i-run-the-inser-into-select-command-to-load-a-large-volume-of-data",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"insert-into",children:"Insert Into"}),"\n",(0,r.jsx)(t.h2,{id:"when-performing-data-insert-each-insert-in-sql-takes-up-50-to-100ms-is-there-any-way-to-increase-efficiency",children:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?"}),"\n",(0,r.jsx)(t.p,{children:"It is not recommended to insert data piece by piece to OLAP. It is usually inserted in batches. Both methods take up the same amount of time."}),"\n",(0,r.jsx)(t.h2,{id:"insert-into-select-task-reports-error-index-channel-has-intoleralbe-failure",children:"'Insert into select' task reports error: index channel has intoleralbe failure"}),"\n",(0,r.jsxs)(t.p,{children:["You can solve this problem by changing the timeout duration for the Stream Load RPC. Change the following item in ",(0,r.jsx)(t.strong,{children:"be.conf"})," and restart the machines to allow the change to take effect:"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"streaming_load_rpc_max_alive_time_sec"}),": The RPC timeout for Stream Load. Unit: Seconds. Default: ",(0,r.jsx)(t.code,{children:"1200"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Or you can set the query timeout using the following variable:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"query_timeout"}),": The timeout duration for queries. Its unit is seconds, and the default value is ",(0,r.jsx)(t.code,{children:"300"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"the-error-execute-timeout-occurs-when-i-run-the-inser-into-select-command-to-load-a-large-volume-of-data",children:'The error "execute timeout" occurs when I run the INSER INTO SELECT command to load a large volume of data'}),"\n",(0,r.jsxs)(t.p,{children:["By default, the query timeout duration is 300s. You can set the variable ",(0,r.jsx)(t.code,{children:"query_timeout"})," to extend this duration. The unit is second."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>o});var r=n(67294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:s},t)}}}]);