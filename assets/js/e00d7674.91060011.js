"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83724],{88950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(11151);const i={},d="SHOW PROCESSLIST",c={id:"sql-reference/sql-statements/Administration/SHOW PROCESSLIST",title:"SHOW PROCESSLIST",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW PROCESSLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW PROCESSLIST",permalink:"/docs/sql-reference/sql-statements/Administration/SHOW PROCESSLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW PROCESSLIST.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW PROC",permalink:"/docs/sql-reference/sql-statements/Administration/SHOW PROC"},next:{title:"SHOW RESOURCE GROUP",permalink:"/docs/sql-reference/sql-statements/Administration/SHOW RESOURCE GROUP"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Return",id:"return",level:2},{value:"Usage note",id:"usage-note",level:2},{value:"Example",id:"example",level:2}];function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-processlist",children:"SHOW PROCESSLIST"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Lists the operations currently being performed by threads executing within the server. The current version of StarRocks only supports listing queries."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW [FULL] PROCESSLIST\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FULL"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"If you specify this parameter, all operations are listed. Otherwise, only the first 100 operations are listed."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"return",children:"Return"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Return"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Id"}),(0,s.jsx)(t.td,{children:"Connection ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User"}),(0,s.jsx)(t.td,{children:"The name of the user who runs the operation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Host"}),(0,s.jsx)(t.td,{children:"The hostname of the client which runs the operation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Db"}),(0,s.jsx)(t.td,{children:"The name of the database where the operation is executed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Command"}),(0,s.jsx)(t.td,{children:"The type of the command."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ConnectionStartTime"}),(0,s.jsx)(t.td,{children:"Time when the connection starts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Time"}),(0,s.jsx)(t.td,{children:"The time (in second) since the operation has entered the current state."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"State"}),(0,s.jsx)(t.td,{children:"The state of the operation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Info"}),(0,s.jsx)(t.td,{children:"The command that the operation is executing."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"usage-note",children:"Usage note"}),"\n",(0,s.jsxs)(t.p,{children:["If the current user is ",(0,s.jsx)(t.code,{children:"root"}),", this statement lists the operations of all users in the cluster. Otherwise, only operations of the current user are listed."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["Example 1: lists the operations state via the user ",(0,s.jsx)(t.code,{children:"root"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"SHOW PROCESSLIST;\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n| Id   | User | Host                | Db    | Command | ConnectionStartTime | Time | State | Info             |\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n|  0   | root | x.x.x.x:xxxx        | tpcds | Query   | 2022-10-09 19:58:25 |    0 | OK    | SHOW PROCESSLIST |\n+------+------+---------------------+-------+---------+---------------------+------+-------+------------------+\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var s=n(67294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:i(e),s.createElement(r.Provider,{value:c},t)}}}]);