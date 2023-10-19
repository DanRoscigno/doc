"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27522],{48216:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(85893),r=t(11151);const i={displayed_sidebar:"English"},a="SET DEFAULT STORAGE VOLUME",l={id:"sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",title:"SET DEFAULT STORAGE VOLUME",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",permalink:"/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/SET_DEFAULT_STORAGE_VOLUME.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SET",permalink:"/docs/sql-reference/sql-statements/Administration/SET"},next:{title:"SHOW BACKENDS",permalink:"/docs/sql-reference/sql-statements/Administration/SHOW_BACKENDS"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Relevant SQL statements",id:"relevant-sql-statements",level:2}];function c(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"set-default-storage-volume",children:"SET DEFAULT STORAGE VOLUME"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Sets a storage volume as the default storage volume. After creating a storage volume for an external data source, you can set it as the default storage volume of your StarRocks cluster. This feature is supported from v3.1."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Only users with the USAGE privilege on a specific storage volume can perform this operation."}),"\n",(0,n.jsx)(s.li,{children:"The default storage volume cannot be dropped or disabled."}),"\n",(0,n.jsx)(s.li,{children:"You must set the default storage volume for a shared-data StarRocks cluster because StarRocks stores the system statistics information in the default storage volume."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"SET <storage_volume_name> AS DEFAULT STORAGE VOLUME\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Parameter"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description"})})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"storage_volume_name"}),(0,n.jsx)(s.td,{children:"The name of the storage volume to be set as the default storage volume."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Set the storage volume ",(0,n.jsx)(s.code,{children:"my_s3_volume"})," as the default storage volume."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:"MySQL > SET my_s3_volume AS DEFAULT STORAGE VOLUME;\nQuery OK, 0 rows affected (0.01 sec)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"relevant-sql-statements",children:"Relevant SQL statements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/sql-reference/sql-statements/Administration/CREATE_STORAGE_VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/sql-reference/sql-statements/Administration/ALTER_STORAGE_VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/sql-reference/sql-statements/Administration/DROP_STORAGE_VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:i(e),n.createElement(r.Provider,{value:l},s)}}}]);