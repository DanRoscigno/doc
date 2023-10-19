"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[9211],{45244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=n(85893),i=n(11151);const r={displayed_sidebar:"English"},c="time_to_sec",o={id:"sql-reference/sql-functions/date-time-functions/time_to_sec",title:"time_to_sec",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/date-time-functions/time_to_sec.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/time_to_sec",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/time_to_sec",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/date-time-functions/time_to_sec.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"time_slice",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/time_slice"},next:{title:"timediff",permalink:"/docs/3.0/sql-reference/sql-functions/date-time-functions/timediff"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"time_to_sec",children:"time_to_sec"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Converts a time value into the number of seconds. The formula used for the conversion is as follows:"}),"\n",(0,s.jsx)(t.p,{children:"Hour x 3600 + Minute x 60 + Second"}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BIGINT time_to_sec(TIME time)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"time"}),": It must be of the TIME type."]}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(t.p,{children:"Returns a value of the BIGINT type. If the input is invalid, NULL is returned."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"select time_to_sec('12:13:14');\n+-----------------------------+\n| time_to_sec('12:13:14')     |\n+-----------------------------+\n|                        43994|\n+-----------------------------+\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:o},t)}}}]);