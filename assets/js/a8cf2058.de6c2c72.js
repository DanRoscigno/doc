"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18376],{25884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const i={},l="DROP STORAGE VOLUME",a={id:"sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",title:"DROP STORAGE VOLUME",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",permalink:"/doc/en/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DROP RESOURCE GROUP",permalink:"/doc/en/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP"},next:{title:"EXPLAIN",permalink:"/doc/en/sql-reference/sql-statements/Administration/EXPLAIN"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Relevant SQL statements",id:"relevant-sql-statements",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"drop-storage-volume",children:"DROP STORAGE VOLUME"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Drops a storage volume. Dropped storage volumes cannot be referenced anymore. This feature is supported from v3.1."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"CAUTION"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Only users with the DROP privilege on a specific storage volume can perform this operation."}),"\n",(0,s.jsxs)(t.li,{children:["The default storage volume and the built-in storage volume ",(0,s.jsx)(t.code,{children:"builtin_storage_volume"})," cannot be dropped. You can use ",(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})," to check whether a storage volume is the default storage volume."]}),"\n",(0,s.jsx)(t.li,{children:"Storage volumes that are referenced by existing databases or cloud-native tables cannot be dropped."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"DROP STORAGE VOLUME [ IF EXISTS ] <storage_volume_name>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storage_volume_name"}),(0,s.jsx)(t.td,{children:"The name of the storage volume to drop."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Example 1: Drop the storage volume ",(0,s.jsx)(t.code,{children:"my_s3_volume"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"MySQL > DROP STORAGE VOLUME my_s3_volume;\nQuery OK, 0 rows affected (0.01 sec)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"relevant-sql-statements",children:"Relevant SQL statements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/doc/en/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||l:i(e),s.createElement(r.Provider,{value:a},t)}}}]);