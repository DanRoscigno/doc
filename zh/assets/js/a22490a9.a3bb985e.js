"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87364],{68865:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=t(85893),r=t(11151);const a={displayed_sidebar:"Chinese"},c="BOOLEAN",l={id:"sql-reference/sql-statements/data-types/BOOLEAN",title:"BOOLEAN",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-types/BOOLEAN.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/BOOLEAN",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-types/BOOLEAN",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/BOOLEAN.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"BITMAP",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-types/BITMAP"},next:{title:"CHAR",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-types/CHAR"}},i={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"boolean",children:"BOOLEAN"}),"\n",(0,n.jsx)(s.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsx)(s.p,{children:"BOOL, BOOLEAN"}),"\n",(0,n.jsx)(s.p,{children:"\u4e0e TINYINT \u4e00\u6837\uff0c0 \u4ee3\u8868 false\uff0c1 \u4ee3\u8868 true\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(s.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a BOOLEAN\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:'CREATE TABLE booleanDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    ispass BOOLEAN COMMENT "true/false"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk);\n'})})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>a});var n=t(67294);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:l},s)}}}]);