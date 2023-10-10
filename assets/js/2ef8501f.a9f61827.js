"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[61480],{47746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(85893),r=s(11151);const o={},c="Overview of JSON functions and operators",i={id:"sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",title:"Overview of JSON functions and operators",description:"This topic provides an overview of the JSON constructor functions, query functions, and processing functions, operators, and path expressions that are supported by StarRocks.",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators.md",sourceDirName:"sql-reference/sql-functions/json-functions",slug:"/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",permalink:"/docs/3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"json_string",permalink:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string"},next:{title:"like",permalink:"/docs/3.0/sql-reference/sql-functions/like_predicate-functions/like"}},d={},l=[{value:"JSON constructor functions",id:"json-constructor-functions",level:2},{value:"JSON query functions and processing functions",id:"json-query-functions-and-processing-functions",level:2},{value:"JSON operators",id:"json-operators",level:2},{value:"JSON path expressions",id:"json-path-expressions",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview-of-json-functions-and-operators",children:"Overview of JSON functions and operators"}),"\n",(0,t.jsx)(n.p,{children:"This topic provides an overview of the JSON constructor functions, query functions, and processing functions, operators, and path expressions that are supported by StarRocks."}),"\n",(0,t.jsx)(n.h2,{id:"json-constructor-functions",children:"JSON constructor functions"}),"\n",(0,t.jsx)(n.p,{children:"JSON constructor functions are used to construct JSON data, such as JSON objects and JSON arrays."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{children:"Return value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object",children:"json_object"})}),(0,t.jsx)(n.td,{children:"Converts one or more key-value pairs to a JSON object that consists of the key-value pairs, which are sorted by key in dictionary order."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT JSON_OBJECT(' Daniel Smith', 26, 'Lily Smith', 25);"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{"Daniel Smith": 26, "Lily Smith": 25}'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/json_array",children:"json_array"})}),(0,t.jsx)(n.td,{children:"Converts each element of an SQL array to a JSON value and returns a JSON array that consists of those JSON values."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT JSON_ARRAY(1, 2, 3);"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[1,2,3]"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",children:"parse_json"})}),(0,t.jsx)(n.td,{children:"Converts a string to a JSON value."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT PARSE_JSON('{\"a\": 1}');"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{"a": 1}'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"json-query-functions-and-processing-functions",children:"JSON query functions and processing functions"}),"\n",(0,t.jsx)(n.p,{children:"JSON query functions and processing functions are used to query and process JSON data. For example, you can use a path expression to locate an element in a JSON object."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Function"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"}),(0,t.jsx)(n.th,{children:"Return value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/arrow-function",children:"arrow function"})}),(0,t.jsx)(n.td,{children:"Queries the element that can be located by a path expression in a JSON object."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT parse_json('{\"a\": {\"b\": 1}}') -> '$.a.b';"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast",children:"cast"})}),(0,t.jsx)(n.td,{children:"Converts data between a JSON data type and an SQL data type."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT CAST(1 AS JSON);"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",children:"get_json_double"})}),(0,t.jsx)(n.td,{children:"Analyzes and gets the floating point value from a specified path in a JSON string."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1.3"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int",children:"get_json_int"})}),(0,t.jsx)(n.td,{children:"Analyzes and gets the integer value from a specified path in a JSON string."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT get_json_int(\'{"k1":1, "k2":"2"}\', "$.k1");'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",children:"get_json_string"})}),(0,t.jsx)(n.td,{children:"Analyzes and gets the strings from a specified path in a JSON string."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query",children:"json_query"})}),(0,t.jsx)(n.td,{children:"Queries the value of an element that can be located by a path expression in a JSON object."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT JSON_QUERY('{\"a\": 1}', '$.a');"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",children:"json_each"})}),(0,t.jsx)(n.td,{children:"Expands the top-level elements of a JSON object into key-value pairs."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT * FROM tj_test, LATERAL JSON_EACH(j);"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"!"}),(0,t.jsx)(n.a,{target:"_blank",href:s(36523).Z+"",children:"json_each"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists",children:"json_exists"})}),(0,t.jsx)(n.td,{children:"Checks whether a JSON object contains an element that can be located by a path expression. If the element exists, this function returns 1. If the element does not exist, the function returns 0."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SELECT JSON_EXISTS('{\"a\": 1}', '$.a'); "})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_keys",children:"json_keys"})}),(0,t.jsx)(n.td,{children:"Returns the top-level keys from a JSON object as a JSON array, or, if a path is specified, the top-level keys from the path."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT JSON_KEYS(\'{"a": 1, "b": 2, "c": 3}\');'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'["a", "b", "c"]'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_length",children:"json_length"})}),(0,t.jsx)(n.td,{children:"Returns the length of a JSON document."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT json_length(\'{"Name": "Alice"}\');'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",children:"json_string"})}),(0,t.jsx)(n.td,{children:"Converts the JSON object to a JSON string"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'SELECT json_string(parse_json(\'{"Name": "Alice"}\'));'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{"Name": "Alice"}'})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"json-operators",children:"JSON operators"}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks supports the following JSON comparison operators: ",(0,t.jsx)(n.code,{children:"<"}),", ",(0,t.jsx)(n.code,{children:"<="}),", ",(0,t.jsx)(n.code,{children:">"}),", ",(0,t.jsx)(n.code,{children:">="}),", ",(0,t.jsx)(n.code,{children:"="}),", and ",(0,t.jsx)(n.code,{children:"!="}),". You can use these operators to query JSON data. However, it does not allow you to use ",(0,t.jsx)(n.code,{children:"IN"})," to query JSON data. For more information about JSON operators, see ",(0,t.jsx)(n.a,{href:"/docs/3.0/sql-reference/sql-functions/json-functions/json-operators",children:"JSON operators"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"json-path-expressions",children:"JSON path expressions"}),"\n",(0,t.jsxs)(n.p,{children:["You can use a JSON path expression to query an element in a JSON object. JSON path expressions are of the STRING data type. In most cases, they are used with various JSON functions, such as JSON_QUERY. In StarRocks, JSON path expressions do not completely comply with the ",(0,t.jsx)(n.a,{href:"https://modern-sql.com/blog/2017-06/whats-new-in-sql-2016#json-path",children:"SQL/JSON path specifications"}),". For information about the JSON path syntax that is supported in StarRocks, see the following table, in which the following JSON object is used as an example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n    "people": [{\n        "name": "Daniel",\n        "surname": "Smith"\n    }, {\n        "name": "Lily",\n        "surname": "Smith",\n        "active": true\n    }]\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"JSON path symbol"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"JSON path example"}),(0,t.jsx)(n.th,{children:"Return value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"$"})}),(0,t.jsx)(n.td,{children:"Denotes a root JSON object."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'$'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{ "people": [ { "name": "Daniel", "surname": "Smith" }, { "name": "Lily", "surname": Smith, "active": true } ] }'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"."})}),(0,t.jsx)(n.td,{children:"Denotes a child JSON object."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"' $.people'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'[ { "name": "Daniel", "surname": "Smith" }, { "name": "Lily", "surname": Smith, "active": true } ]'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsxs)(n.td,{children:["Denotes one or more array indexes. ",(0,t.jsx)(n.code,{children:"[n]"})," denotes the nth element in an array. Indexes start from 0. ",(0,t.jsx)("br",{}),"StarRocks 2.5 supports querying multi-dimensional arrays, for example, ",(0,t.jsx)(n.code,{children:'["Lucy", "Daniel"], ["James", "Smith"]'}),'. To query the "Lucy" element, you can use ',(0,t.jsx)(n.code,{children:"$.people[0][0]"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'$.people [0]'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{ "name": "Daniel", "surname": "Smith" }'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[*]"})}),(0,t.jsx)(n.td,{children:"Denotes all elements in an array."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'$.people[*].name'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'["Daniel", "Lily"]'})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[start: end]"})}),(0,t.jsxs)(n.td,{children:["Denotes a subset of elements from an array. The subset is specified by the ",(0,t.jsx)(n.code,{children:"[start, end]"})," interval, which excludes the element that is denoted by the end index."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'$.people[0: 1].name'"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'["Daniel"]'})})]})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},36523:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/files/json_each-acfb20b2e8c25e0f1889a081f532f10f.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>o});var t=s(67294);const r=t.createContext({});function o(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||c:o(e),t.createElement(r.Provider,{value:i},n)}}}]);