"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[47331],{9423:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=o(85893),a=o(11151);const n={},r=void 0,c={id:"assets/commonMarkdown/sharedDataIntro",title:"sharedDataIntro",description:"This topic describes how to deploy and use a shared-data StarRocks cluster. This feature is supported from v3.0 for S3 compatible storage and v3.1 for Azure Blob Storage.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataIntro.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataIntro",permalink:"/zh/docs/assets/commonMarkdown/sharedDataIntro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataIntro.md",tags:[],version:"3.1",frontMatter:{}},i={},d=[];function l(e){const s=Object.assign({p:"p",blockquote:"blockquote",strong:"strong",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"This topic describes how to deploy and use a shared-data StarRocks cluster. This feature is supported from v3.0 for S3 compatible storage and v3.1 for Azure Blob Storage."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(s.p,{children:"StarRocks version 3.1 brings some changes to the shared-data deployment and configuration. Please use this document if you are running version 3.1 or higher."}),"\n",(0,t.jsxs)(s.p,{children:["If you are running version 3.0 please use the\n",(0,t.jsx)(s.a,{href:"https://docs.starrocks.io/en-us/3.0/deployment/deploy_shared_data",children:"3.0 documentation"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The shared-data StarRocks cluster is specifically engineered for the cloud on the premise of separation of storage and compute. It allows data to be stored in object storage (for example, AWS S3, Google GCS, Azure Blob Storage, and MinIO). You can achieve not only cheaper storage and better resource isolation, but elastic scalability for your cluster. The query performance of the shared-data StarRocks cluster aligns with that of a shared-nothing StarRocks cluster when the local disk cache is hit."}),"\n",(0,t.jsx)(s.p,{children:"In version 3.1 and higher the StarRocks shared-data cluster is made up of Frontend Engines (FEs) and Compute Nodes (CNs). The CNs replace the classic Backend Engines (BEs) in shared-data clusters."}),"\n",(0,t.jsx)(s.p,{children:"Compared to the classic shared-nothing StarRocks architecture, separation of storage and compute offers a wide range of benefits. By decoupling these components, StarRocks provides:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Inexpensive and seamlessly scalable storage."}),"\n",(0,t.jsx)(s.li,{children:"Elastic scalable compute. Because data is not stored in Compute Nodes (CNs), scaling can be done without data migration or shuffling across nodes."}),"\n",(0,t.jsx)(s.li,{children:"Local disk cache for hot data to boost query performance."}),"\n",(0,t.jsx)(s.li,{children:"Asynchronous data ingestion into object storage, allowing a significant improvement in loading performance."}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,o)=>{o.d(s,{Zo:()=>c,ah:()=>n});var t=o(67294);const a=t.createContext({});function n(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function c({components:e,children:s,disableParentContext:o}){let c;return c=o?"function"==typeof e?e({}):e||r:n(e),t.createElement(a.Provider,{value:c},s)}}}]);