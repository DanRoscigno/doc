"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66345],{6933:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=n(85893),r=n(11151);const c={displayed_sidebar:"Chinese"},a="VARCHAR",i={id:"sql-reference/sql-statements/data-types/VARCHAR",title:"VARCHAR",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-types/VARCHAR.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/VARCHAR",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-types/VARCHAR",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/VARCHAR.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"TINYINT",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-types/TINYINT"},next:{title:"\u4ecb\u7ecd",permalink:"/zh/docs/2.3/table_design/"}},l={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"varchar",children:"VARCHAR"}),"\n",(0,t.jsx)(s.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(s.p,{children:"VARCHAR(M)"}),"\n",(0,t.jsxs)(s.p,{children:["\u53d8\u957f\u5b57\u7b26\u4e32\u3002",(0,t.jsx)(s.code,{children:"M"})," \u4ee3\u8868\u53d8\u957f\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5355\u4f4d\uff1a\u5b57\u8282\uff0c\u9ed8\u8ba4\u53d6\u503c\u4e3a ",(0,t.jsx)(s.code,{children:"1"}),"\u3002"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u5bf9\u4e8e StarRocks 2.1 \u4e4b\u524d\u7684\u7248\u672c\uff0c",(0,t.jsx)(s.code,{children:"M"})," \u7684\u53d6\u503c\u8303\u56f4\u4e3a 1~65533\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u3010\u516c\u6d4b\u4e2d\u3011\u81ea StarRocks 2.1 \u7248\u672c\u5f00\u59cb\uff0c",(0,t.jsx)(s.code,{children:"M"})," \u7684\u53d6\u503c\u8303\u56f4\u4e3a 1~1048576\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a VARCHAR\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'CREATE TABLE varcharDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    pd_type VARCHAR(20) COMMENT "range char(m),m in (1-65533) "\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk) BUCKETS 4;\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},s)}}}]);