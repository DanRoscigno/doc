"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50005],{43123:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese31"},c="DATETIME",i={id:"sql-reference/sql-statements/data-types/DATETIME",title:"DATETIME",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-types/DATETIME.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DATETIME",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/DATETIME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-types/DATETIME.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"DATE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-types/DATE"},next:{title:"\u534a\u7ed3\u6784\u5316\u7c7b\u578b",permalink:"/doc/zh/docs/category/\u534a\u7ed3\u6784\u5316\u7c7b\u578b"}},o={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"datetime",children:"DATETIME"}),"\n",(0,n.jsx)(t.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(t.p,{children:"\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u662f ['0000-01-01 00:00:00', '9999-12-31 23:59:59']\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u6253\u5370\u7684\u5f62\u5f0f\u662f'YYYY-MM-DD HH: MM: SS'"}),"\n",(0,n.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(t.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a DATETIME\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE dateTimeDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    relTime DATETIME COMMENT "YYYY-MM-DD HH:MM:SS"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>a});var n=s(67294);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:i},t)}}}]);