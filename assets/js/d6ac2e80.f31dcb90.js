"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18918],{21603:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},c="ADMIN CHECK TABLET",o={id:"sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET",title:"ADMIN CHECK TABLET",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ADMIN CANCEL REPAIR",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR"},next:{title:"ADMIN REPAIR",permalink:"/doc/docs/sql-reference/sql-statements/Administration/ADMIN_REPAIR"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"admin-check-tablet",children:"ADMIN CHECK TABLET"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to check a group of tablets."}),"\n",(0,t.jsx)(n.p,{children:"Syntax:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN CHECK TABLE (tablet_id1, tablet_id2, ...)\nPROPERTIES("type" = "...")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'The "type" property in tablet id and PROPERTIES must be specified.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Currently, "type" only supports:'}),"\n",(0,t.jsx)(n.p,{children:'Consistency: Check the consistency of replicas of the tablet. This command is asynchronous. After sending it, StarRocks will start checking the consistency among corresponding tablets. The final results will be shown in the InconsistentTabletNum column in the result of SHOW PROC "/statistic".'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the consistency of replicas on a group of specified tablets"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ADMIN CHECK TABLET (10000, 10001)\nPROPERTIES("type" = "consistency");\n'})}),"\n"]}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(i.Provider,{value:o},n)}}}]);