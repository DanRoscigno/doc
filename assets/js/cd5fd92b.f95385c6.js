"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16040],{49106:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(85893),a=s(11151);const r={displayed_sidebar:"documentation"},c="DATE",o={id:"sql-reference/sql-statements/data-types/DATE",title:"DATE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/DATE.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DATE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-types/DATE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-types/DATE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Date",permalink:"/doc/docs/3.0/category/date"},next:{title:"DATETIME",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-types/DATETIME"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"date",children:"DATE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["DATE type. The current value range is ['0000-01-01','9999-12-31'] and the default format is ",(0,n.jsx)(t.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"Example 1: Specify a column as the DATE type when you create a table."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE dateDemo (\n    pk INT COMMENT "range [-2147483648, 2147483647]",\n    make_time DATE NOT NULL COMMENT "YYYY-MM-DD"\n) ENGINE=OLAP \nDUPLICATE KEY(pk)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(pk)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Example 2: Convert a DATETIME value into a DATE value."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"mysql> SELECT DATE('2003-12-31 01:02:03');\n-> '2003-12-31'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see the ",(0,n.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/date-time-functions/date",children:"date"})," function."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>r});var n=s(67294);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),n.createElement(a.Provider,{value:o},t)}}}]);