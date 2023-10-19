"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59661],{16485:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese"},d="date_sub",r={id:"sql-reference/sql-functions/date-time-functions/date_sub",title:"date_sub",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-functions/date-time-functions/date_sub.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/date_sub",permalink:"/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_sub",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/date-time-functions/date_sub.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"date_slice",permalink:"/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_slice"},next:{title:"date_trunc",permalink:"/zh/docs/2.5/sql-reference/sql-functions/date-time-functions/date_trunc"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"date_sub",children:"date_sub"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u4ece\u65e5\u671f\u4e2d\u51cf\u53bb\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"DATETIME DATE_SUB(DATETIME|DATE date,INTERVAL expr type)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"date"}),"\uff1a\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002\u53ef\u4ee5\u662f DATETIME \u6216 DATE \u7c7b\u578b\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"expr"}),"\uff1a\u8981\u51cf\u53bb\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a INT\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"type"}),"\uff1a\u65f6\u95f4\u95f4\u9694\u7684\u5355\u4f4d\uff0c\u53d6\u503c\u53ef\u4ee5\u662f YEAR\uff0cMONTH\uff0cDAY\uff0cHOUR\uff0cMINUTE\uff0c\u6216 SECOND\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de DATETIME \u7c7b\u578b\u7684\u503c\u3002\u5982\u679c\u8f93\u5165\u503c\u4e3a\u7a7a\u6216\u8005\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8fd4\u56de NULL\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"select date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_sub('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-11-28 23:59:59                             |\n+-------------------------------------------------+\n\nselect date_sub('2010-11-30', INTERVAL 2 hour);\n+-----------------------------------------+\n| date_sub('2010-11-30', INTERVAL 2 HOUR) |\n+-----------------------------------------+\n| 2010-11-29 22:00:00                     |\n+-----------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||d:c(e),t.createElement(i.Provider,{value:r},n)}}}]);