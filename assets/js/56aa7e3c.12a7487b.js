"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8125],{4778:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(85893),r=s(11151);const o={displayed_sidebar:"documentation"},i="json_string",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",title:"json_string",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"json_query",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query"},next:{title:"Map Functions",permalink:"/doc/docs/3.0/category/map-functions"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function u(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"json_string",children:"json_string"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"Converting JSON object to JSON string"}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-SQL",children:"json_string(json_object_expr)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"json_object_expr"}),": the expression that represents the JSON object. The object can be a JSON column, or a JSON object that is produced by a JSON constructor function such as PARSE_JSON."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(e.p,{children:"Returns a VARCHAR value."}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.p,{children:"Example 1: Converting the JSON object to a JSON string"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:'select json_string(\'{"Name": "Alice"}\');\n+----------------------------------+\n| json_string(\'{"Name": "Alice"}\') |\n+----------------------------------+\n| {"Name": "Alice"}                |\n+----------------------------------+\n'})}),"\n",(0,t.jsx)(e.p,{children:"Example 1: Convert the result of PARSE_JSON to a JSON string"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",children:'select json_string(parse_json(\'{"Name": "Alice"}\'));\n+----------------------------------+\n| json_string(\'{"Name": "Alice"}\') |\n+----------------------------------+\n| {"Name": "Alice"}                |\n+----------------------------------+\n'})})]})}const d=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(u,n)})):u(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>o});var t=s(67294);const r=t.createContext({});function o(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||i:o(n),t.createElement(r.Provider,{value:c},e)}}}]);