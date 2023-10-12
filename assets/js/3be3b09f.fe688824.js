"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[93069],{9489:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var n=s(85893),r=s(11151);const i={displayed_sidebar:"documentation"},d="SHOW COMPUTE NODES",o={id:"sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES",title:"SHOW COMPUTE NODES",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW BROKER",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BROKER"},next:{title:"SHOW FILE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/Administration/SHOW_FILE"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Output",id:"output",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"show-compute-nodes",children:"SHOW COMPUTE NODES"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"View all compute nodes in your StarRocks cluster."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:"SHOW COMPUTE NODES\n"})}),"\n",(0,n.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,n.jsx)(t.p,{children:"The following table describes the parameters returned by this statement."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LastStartTime"}),(0,n.jsx)(t.td,{children:"The last time at which the compute node starts."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LastHeartbeat"}),(0,n.jsx)(t.td,{children:"The last time at which the compute node sends a heartbeat."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Alive"}),(0,n.jsx)(t.td,{children:"Whether the compute node is available or not."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SystemDecommissioned"}),(0,n.jsxs)(t.td,{children:["If the value of the parameter is ",(0,n.jsx)(t.code,{children:"true"}),", the compute node is removed from your StarRocks cluster. Before removal, the data in the compute node is cloned."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ErrMsg"}),(0,n.jsx)(t.td,{children:"The error message if the compute node fails to send a heartbeat."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsx)(t.td,{children:"The state of the compute node, which displays in the JSON format. Currently, you can only see the last time at which the compute node sends its state."})]})]})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||d:i(e),n.createElement(r.Provider,{value:o},t)}}}]);