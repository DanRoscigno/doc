"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28928],{12243:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(85893),i=s(11151);const o={displayed_sidebar:"English"},c="json_exists",r={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",title:"json_exists",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",permalink:"/docs/2.2/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"json_each",permalink:"/docs/2.2/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each"},next:{title:"json_query",permalink:"/docs/2.2/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_exists",children:"json_exists"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Checks whether a JSON object contains an element that can be located by the ",(0,t.jsx)(n.code,{children:"json_path"})," expression. If the element exists, the JSON_EXISTS function returns ",(0,t.jsx)(n.code,{children:"1"}),". Otherwise, the JSON_EXISTS function returns ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"json_exists(json_object_expr, json_path)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_object_expr"}),": the expression that represents the JSON object. The object can be a JSON column, or a JSON object that is produced by a JSON constructor function such as PARSE_JSON."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_path"}),": the expression that represents the path to an element in the JSON object. The value of this parameter is a string. For information about the JSON path syntax that is supported by StarRocks, see ",(0,t.jsx)(n.a,{href:"/docs/2.2/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",children:"Overview of JSON functions and operators"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a BOOLEAN value."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Check whether the specified JSON object contains an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a.b'"})," expression. In this example, the element exists in the JSON object. Therefore, the json_exists function returns ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> SELECT json_exists(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.b') ;\n\n       -> 1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Check whether the specified JSON object contains an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a.c'"})," expression. In this example, the element does not exist in the JSON object. Therefore, the json_exists function returns ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> SELECT json_exists(PARSE_JSON('{\"a\": {\"b\": 1}}'), '$.a.c') ;\n\n       -> 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 3: Check whether the specified JSON object contains an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a[2]'"})," expression. In this example, the JSON object, which is an array named a, contains an element at index 2. Therefore, the json_exists function returns ",(0,t.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> SELECT json_exists(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[2]') ;\n\n       -> 1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 4: Check whether the specified JSON object contains an element that can be located by the ",(0,t.jsx)(n.code,{children:"'$.a[3]'"})," expression. In this example, the JSON object, which is an array named a, does not contain an element at index 3. Therefore, the json_exists function returns ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> SELECT json_exists(PARSE_JSON('{\"a\": [1,2,3]}'), '$.a[3]') ;\n\n       -> 0\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>o});var t=s(67294);const i=t.createContext({});function o(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:o(e),t.createElement(i.Provider,{value:r},n)}}}]);