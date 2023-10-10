"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[21134],{50636:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(85893),o=s(11151);const a={},r="json_each",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",title:"json_each",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",permalink:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"get_json_string",permalink:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string"},next:{title:"json_exists",permalink:"/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_exists"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json_each",children:"json_each"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Expands the outermost elements of a JSON object into a set of key-value pairs held in two columns and returns a table that consists of one row for each element."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"json_each(json_object_expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"json_object_expr"}),": the expression that represents the JSON object. The object can be a JSON column, or a JSON object that is produced by a JSON constructor function such as PARSE_JSON."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns two columns: one named key and one named value. The key column stores VARCHAR values, and the value column stores JSON values."}),"\n",(0,t.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,t.jsx)(n.p,{children:"The json_each function is a table function that returns a table. The returned table is a result set that consists of multiple rows. Therefore, a lateral join must be used in the FROM clause to join the returned table to the original table. The lateral join is mandatory, but the LATERAL keyword is optional. The json_each function cannot be used in the SELECT clause."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:'-- A table named tj is used as an example. In the tj table, the j column is a JSON object.\nmysql> SELECT * FROM tj;\n+------+------------------+\n| id   | j                |\n+------+------------------+\n|    1 | {"a": 1, "b": 2} |\n|    3 | {"a": 3}         |\n+------+------------------+\n\n-- Expand the j column of the tj table into two columns by key and value to obtain a result set that consists of multiple rows. In this example, the LATERAL keyword is used to join the result set to the tj table.\n\nmysql> SELECT * FROM tj, LATERAL json_each(j);\n+------+------------------+------+-------+\n| id   | j                | key  | value |\n+------+------------------+------+-------+\n|    1 | {"a": 1, "b": 2} | a    | 1     |\n|    1 | {"a": 1, "b": 2} | b    | 2     |\n|    3 | {"a": 3}         | a    | 3     |\n+------+------------------+------+-------+\n'})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>a});var t=s(67294);const o=t.createContext({});function a(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(o.Provider,{value:c},n)}}}]);