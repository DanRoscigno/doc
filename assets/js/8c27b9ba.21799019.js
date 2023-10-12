"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[62294],{10328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=s(85893),o=s(11151);const r={displayed_sidebar:"documentation"},c="Arrow function",i={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",title:"Arrow function",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"JSON query and processing functions",permalink:"/doc/docs/3.0/category/json-query-and-processing-functions"},next:{title:"cast",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"arrow-function",children:"Arrow function"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Queries an element that can be located by the ",(0,t.jsx)(n.code,{children:"json_path"})," expression in a JSON object and returns a JSON value. The arrow function ",(0,t.jsx)(n.code,{children:"->"})," is more compact and easier to use than the ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",children:"json_query"})," function."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_object_expr -> json_path\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_object_expr"}),": the expression that represents the JSON object. The object can be a JSON column, or a JSON object that is produced by a JSON constructor function such as PARSE_JSON."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_path"}),": the expression that represents the path to an element in the JSON object. The value of this parameter is a string. For information about the JSON path syntax that is supported by StarRocks, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",children:"Overview of JSON functions and operators"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a JSON value."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the element does not exist, the arrow function returns an SQL value of ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Query an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a.b'"})," expression in the specified JSON object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('{\"a\": {\"b\": 1}}') -> '$.a.b';\n\n       -> 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Use nested arrow functions to query an element. The arrow function in which another arrow function is nested queries an element based on the result that is returned by the nested arrow function."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In this example, the root element $ is omitted from the ",(0,t.jsx)(n.code,{children:"json_path"})," expression."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"mysql> SELECT parse_json('{\"a\": {\"b\": 1}}')->'a'->'b';\n\n       -> 1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: Query an element that can be located by the ",(0,t.jsx)(n.code,{children:"'a'"})," expression in the specified JSON object."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In this example, the root element $ is omitted from the ",(0,t.jsx)(n.code,{children:"json_path"})," expression."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:'mysql> SELECT parse_json(\'{"a": "b"}\') -> \'a\';\n\n       -> "b"\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const o=t.createContext({});function r(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:r(e),t.createElement(o.Provider,{value:i},n)}}}]);