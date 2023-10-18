"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13409],{41562:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=s(85893),o=s(11151);const r={displayed_sidebar:"English"},n=void 0,c={id:"assets/commonMarkdown/sharedDataUseIntro",title:"sharedDataUseIntro",description:"The usage of shared-data StarRocks clusters is also similar to that of a classic shared-nothing StarRocks cluster, except that the shared-data cluster uses storage volumes and cloud-native tables to store data in object storage.",source:"@site/versioned_docs/version-3.1/assets/commonMarkdown/sharedDataUseIntro.md",sourceDirName:"assets/commonMarkdown",slug:"/assets/commonMarkdown/sharedDataUseIntro",permalink:"/doc/docs/assets/commonMarkdown/sharedDataUseIntro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/assets/commonMarkdown/sharedDataUseIntro.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},d={},l=[{value:"Create default storage volume",id:"create-default-storage-volume",level:3}];function i(e){const t=Object.assign({p:"p",h3:"h3",blockquote:"blockquote",strong:"strong",code:"code"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The usage of shared-data StarRocks clusters is also similar to that of a classic shared-nothing StarRocks cluster, except that the shared-data cluster uses storage volumes and cloud-native tables to store data in object storage."}),"\n",(0,a.jsx)(t.h3,{id:"create-default-storage-volume",children:"Create default storage volume"}),"\n",(0,a.jsx)(t.p,{children:"You can use the built-in storage volumes that StarRocks automatically creates, or you can manually create and set the default storage volume. This section describes how to manually create and set the default storage volume."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["If your shared-data StarRocks cluster is upgraded from v3.0, you do not need to define a default storage volume because StarRocks created one with the object storage-related properties you specified in the FE configuration file ",(0,a.jsx)(t.strong,{children:"fe.conf"}),". You can still create new storage volumes with other object storage resources and set the default storage volume differently."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To give your shared-data StarRocks cluster permission to store data in your object storage, you must reference a storage volume when you create databases or cloud-native tables. A storage volume consists of the properties and credential information of the remote data storage. If you have deployed a new shared-data StarRocks cluster and disallow StarRocks to create a built-in storage volume (by specifying ",(0,a.jsx)(t.code,{children:"enable_load_volume_from_conf"})," as ",(0,a.jsx)(t.code,{children:"false"}),"), you must define a default storage volume before you can create databases and tables in the cluster."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>c,ah:()=>r});var a=s(67294);const o=a.createContext({});function r(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const n={};function c({components:e,children:t,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||n:r(e),a.createElement(o.Provider,{value:c},t)}}}]);