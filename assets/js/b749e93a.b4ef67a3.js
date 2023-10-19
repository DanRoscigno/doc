"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86670],{6534:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(85893),r=s(11151);const i={displayed_sidebar:"English"},d="DROP FILE",l={id:"sql-reference/sql-statements/Administration/DROP_FILE",title:"DROP FILE",description:"You can execute the DROP FILE statement to delete a file. When you use this statement to delete a file, the file is deleted both in frontend (FE) memory and in Berkeley DB Java Edition (BDBJE).",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DROP_FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DROP_FILE",permalink:"/docs/sql-reference/sql-statements/Administration/DROP_FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/DROP_FILE.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"DESC STORAGE VOLUME",permalink:"/docs/sql-reference/sql-statements/Administration/DESC_STORAGE_VOLUME"},next:{title:"DROP RESOURCE GROUP",permalink:"/docs/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP"}},a={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-file",children:"DROP FILE"}),"\n",(0,n.jsx)(t.p,{children:"You can execute the DROP FILE statement to delete a file. When you use this statement to delete a file, the file is deleted both in frontend (FE) memory and in Berkeley DB Java Edition (BDBJE)."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'DROP FILE "file_name" [FROM database]\n[properties]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Parameter"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file_name"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The name of the file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"database"}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The database to which a file belongs."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"properties"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The properties of the file. The following table describes the configuration items of properties."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Configuration items of"})," ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"properties"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Configuration items"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"catalog"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"The category to which a file belongs."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Delete a file named ",(0,n.jsx)(t.strong,{children:"ca.pem"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'DROP FILE "ca.pem" properties("catalog" = "kafka");\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>i});var n=s(67294);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||d:i(e),n.createElement(r.Provider,{value:l},t)}}}]);