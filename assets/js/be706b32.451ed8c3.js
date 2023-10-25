"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[155],{37312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(85893),r=n(11151);const i={displayed_sidebar:"English"},o="Insert Into",s={id:"faq/loading/Insert_into_faq",title:"Insert Into",description:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?",source:"@site/versioned_docs/version-2.2/faq/loading/Insert_into_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Insert_into_faq",permalink:"/docs/2.2/faq/loading/Insert_into_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Insert_into_faq.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Flink Connector",permalink:"/docs/2.2/faq/loading/Flink_connector_faq"},next:{title:"Loading",permalink:"/docs/2.2/faq/loading/Loading_faq"}},c={},l=[{value:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?",id:"when-performing-data-insert-each-insert-in-sql-takes-up-50-to-100ms-is-there-any-way-to-increase-efficiency",level:2},{value:"&#39;Insert into select&#39; task reports error: index channel has intoleralbe failure",id:"insert-into-select-task-reports-error-index-channel-has-intoleralbe-failure",level:2},{value:"The error &quot;execute timeout&quot; occurs when I run the INSER INTO SELECT command to load a large volume of data",id:"the-error-execute-timeout-occurs-when-i-run-the-inser-into-select-command-to-load-a-large-volume-of-data",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"insert-into",children:"Insert Into"}),"\n",(0,a.jsx)(t.h2,{id:"when-performing-data-insert-each-insert-in-sql-takes-up-50-to-100ms-is-there-any-way-to-increase-efficiency",children:"When performing data insert, each insert in SQL takes up 50 to 100ms. Is there any way to increase efficiency?"}),"\n",(0,a.jsx)(t.p,{children:"It is not recommended to insert data piece by piece to OLAP. It is usually inserted in batches. Both methods take up the same amount of time."}),"\n",(0,a.jsx)(t.h2,{id:"insert-into-select-task-reports-error-index-channel-has-intoleralbe-failure",children:"'Insert into select' task reports error: index channel has intoleralbe failure"}),"\n",(0,a.jsx)(t.p,{children:"This can be solved by changing the timeout limit for stream load RPC. Also, change the following two items in fe.conf and be.conf to larger values (you can also make the adjustment in the Manager page):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:"streaming_load_rpc_max_alive_time_sec=2400\ntablet_writer_open_rpc_timeout_sec=120\n"})}),"\n",(0,a.jsx)(t.h2,{id:"the-error-execute-timeout-occurs-when-i-run-the-inser-into-select-command-to-load-a-large-volume-of-data",children:'The error "execute timeout" occurs when I run the INSER INTO SELECT command to load a large volume of data'}),"\n",(0,a.jsxs)(t.p,{children:["By default, the query timeout duration is 300s. You can set the ",(0,a.jsx)(t.code,{children:"query_timeout"})," parameter to extend this duration. The unit is second."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var a=n(67294);const r=a.createContext({});function i(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:i(e),a.createElement(r.Provider,{value:s},t)}}}]);