"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24987],{85857:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=s(85893),o=s(11151);const c={displayed_sidebar:"documentation"},r="json_object",i={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",title:"json_object",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",permalink:"/doc/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"json_array",permalink:"/doc/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array"},next:{title:"parse_json",permalink:"/doc/docs/2.5/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_object",children:"json_object"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts one or more key-value pairs to a JSON object that consists of the key-value pairs. The key-value pairs are sorted by key in dictionary order."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_object(key, value, ...)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"key"}),": a key in the JSON object. Only the VARCHAR data type is supported."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"value"}),": a value in the JSON object. Only ",(0,t.jsx)(n.code,{children:"NULL"})," values and the following data types are supported: STRING, VARCHAR, CHAR, JSON, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, DOUBLE, FLOAT, and BOOLEAN."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a JSON object."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the total number of keys and values is an odd number, the JSON_OBJECT function fills ",(0,t.jsx)(n.code,{children:"NULL"})," in the last field."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Construct a JSON object that consists of values of different data types."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_object('name', 'starrocks', 'active', true, 'published', 2020);\n\n       -> {\"active\": true, \"name\": \"starrocks\", \"published\": 2020}            \n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Construct a JSON object by using nested JSON_OBJECT functions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_object('k1', 1, 'k2', json_object('k2', 2), 'k3', json_array(4, 5));\n\n       -> {\"k1\": 1, \"k2\": {\"k2\": 2}, \"k3\": [4, 5]} \n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 3: Construct an empty JSON object."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT json_object();\n\n       -> {}\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var t=s(67294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(o.Provider,{value:i},n)}}}]);