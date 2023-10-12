"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34830],{66122:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(85893),a=n(11151);const r={displayed_sidebar:"documentation"},s=void 0,d={id:"assets/commonMarkdown/brokerDataFlow",title:"brokerDataFlow",description:"Advantages of Broker Load",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/brokerDataFlow.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/brokerDataFlow",permalink:"/doc/docs/assets/commonMarkdown/brokerDataFlow",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/brokerDataFlow.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation"},i={},c=[{value:"Advantages of Broker Load",id:"advantages-of-broker-load",level:3},{value:"Data flow",id:"data-flow",level:3}];function l(e){const o=Object.assign({h3:"h3",ul:"ul",li:"li",p:"p",img:"img",ol:"ol"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h3,{id:"advantages-of-broker-load",children:"Advantages of Broker Load"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Broker Load supports data transformation, UPSERT, and DELETE operations during loading."}),"\n",(0,t.jsx)(o.li,{children:"Broker Load runs in the background and clients don't need to stay connected for the job to continue."}),"\n",(0,t.jsx)(o.li,{children:"Broker Load is preferred for long running jobs, the default timeout is 4 hours."}),"\n",(0,t.jsx)(o.li,{children:"Broker Load supports Parquet, ORC, and CSV file format."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"data-flow",children:"Data flow"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Workflow of Broker Load",src:n(36054).Z+"",width:"1478",height:"1064"})}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"The user creates a load job"}),"\n",(0,t.jsx)(o.li,{children:"The frontend (FE) creates a query plan and distributes the plan to the backend nodes (BE)"}),"\n",(0,t.jsx)(o.li,{children:"The backend (BE) nodes pull the data from the source and load the data into StarRocks"}),"\n"]})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,a.ah)(),e.components);return o?(0,t.jsx)(o,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},36054:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/broker_load_how-to-work_en-6132d562d6e87eac4b5c0e494ffdb34d.png"},11151:(e,o,n)=>{n.d(o,{Zo:()=>d,ah:()=>r});var t=n(67294);const a=t.createContext({});function r(e){const o=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const s={};function d({components:e,children:o,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||s:r(e),t.createElement(a.Provider,{value:d},o)}}}]);