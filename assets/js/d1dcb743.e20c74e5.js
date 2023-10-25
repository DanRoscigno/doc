"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[19809],{41479:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=o(85893),s=o(11151);const a={displayed_sidebar:"English"},t="Loading",r={id:"faq/loading/Loading_faq",title:"Loading",description:"Common issues in loading",source:"@site/versioned_docs/version-2.1/faq/loading/Loading_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Loading_faq",permalink:"/docs/2.1/faq/loading/Loading_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Loading_faq.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Insert Into",permalink:"/docs/2.1/faq/loading/Insert_into_faq"},next:{title:"Routine Load",permalink:"/docs/2.1/faq/loading/Routine_load_faq"}},d={},c=[{value:"Common issues in loading",id:"common-issues-in-loading",level:2},{value:"Error\uff1aclose index channel failed/too many tablet versions",id:"errorclose-index-channel-failedtoo-many-tablet-versions",level:3}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"loading",children:"Loading"}),"\n",(0,i.jsx)(n.h2,{id:"common-issues-in-loading",children:"Common issues in loading"}),"\n",(0,i.jsx)(n.h3,{id:"errorclose-index-channel-failedtoo-many-tablet-versions",children:"Error\uff1aclose index channel failed/too many tablet versions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Issue description:"})}),"\n",(0,i.jsx)(n.p,{children:"Frequent imports and failure to merge compaction result in too many versions. The default number is 1000."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,i.jsx)(n.p,{children:"Increase data load for one-time import and decrease import frequency."}),"\n",(0,i.jsx)(n.p,{children:"Adjust compaction strategy and speed up compaction (memory and io should be carefully studied after adjustment). And make the following changes to be.conf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"cumulative_compaction_num_threads_per_disk = 4\nbase_compaction_num_threads_per_disk = 2\ncumulative_compaction_check_interval_seconds = 2\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,n,o)=>{o.d(n,{Zo:()=>r,ah:()=>a});var i=o(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function r({components:e,children:n,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||t:a(e),i.createElement(s.Provider,{value:r},n)}}}]);