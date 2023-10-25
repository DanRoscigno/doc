"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77977],{22980:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(85893),i=s(11151);const r={displayed_sidebar:"English"},a="ADMIN REPAIR",l={id:"sql-reference/sql-statements/Administration/ADMIN_REPAIR",title:"ADMIN REPAIR",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-statements/Administration/ADMIN_REPAIR.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_REPAIR",permalink:"/docs/2.1/sql-reference/sql-statements/Administration/ADMIN_REPAIR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/Administration/ADMIN_REPAIR.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ADMIN CHECK TABLET",permalink:"/docs/2.1/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET"},next:{title:"ADMIN SET CONFIG",permalink:"/docs/2.1/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG"}},o={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"admin-repair",children:"ADMIN REPAIR"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,n.jsx)(t.p,{children:"This statement is used to try and fix the specified tables or partitions first."}),"\n",(0,n.jsx)(t.p,{children:"Syntax:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"This statement only means that the system attempts to repair sharding replicas of specified tables or partitions with high priority without the guarantee that the repair will be successful. Users can view the repair status through ADMIN SHOW REPLICA STATUS command."}),"\n",(0,n.jsx)(t.li,{children:"The default timeout is 14400 seconds (4 hours). Timeout means the system will not repair sharding replicas of specified tables or partitions with high priority. In case of timeout, the command needs to be used again for the intended settings."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attempt to repair specified tables"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1;\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Attempt to fix specified partition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,n.jsx)(t.p,{children:"ADMIN,REPAIR"})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>l,ah:()=>r});var n=s(67294);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:l},t)}}}]);