"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18376],{25884:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const i={displayed_sidebar:"documentation"},l="DROP STORAGE VOLUME",a={id:"sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",title:"DROP STORAGE VOLUME",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"DROP RESOURCE GROUP",permalink:"/doc/docs/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP"},next:{title:"EXPLAIN",permalink:"/doc/docs/sql-reference/sql-statements/Administration/EXPLAIN"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Relevant SQL statements",id:"relevant-sql-statements",level:2}];function c(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-storage-volume",children:"DROP STORAGE VOLUME"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Drops a storage volume. Dropped storage volumes cannot be referenced anymore. This feature is supported from v3.1."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Only users with the DROP privilege on a specific storage volume can perform this operation."}),"\n",(0,n.jsxs)(s.li,{children:["The default storage volume and the built-in storage volume ",(0,n.jsx)(s.code,{children:"builtin_storage_volume"})," cannot be dropped. You can use ",(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})," to check whether a storage volume is the default storage volume."]}),"\n",(0,n.jsx)(s.li,{children:"Storage volumes that are referenced by existing databases or cloud-native tables cannot be dropped."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"DROP STORAGE VOLUME [ IF EXISTS ] <storage_volume_name>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"storage_volume_name"}),(0,n.jsx)(s.td,{children:"The name of the storage volume to drop."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Drop the storage volume ",(0,n.jsx)(s.code,{children:"my_s3_volume"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:"MySQL > DROP STORAGE VOLUME my_s3_volume;\nQuery OK, 0 rows affected (0.01 sec)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"relevant-sql-statements",children:"Relevant SQL statements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/doc/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:i(e),n.createElement(r.Provider,{value:a},s)}}}]);