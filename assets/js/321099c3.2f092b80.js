"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[80324],{16032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=s(85893),t=s(11151);const i={displayed_sidebar:"documentation"},r="get_json_double",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",title:"get_json_double",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_double.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"cast",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/cast"},next:{title:"get_json_int",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"get_json_double",children:"get_json_double"}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["This function analyzes and gets the floating point value from a specified path in json string. json_path must start with ",(0,o.jsx)(n.code,{children:"$"})," and use ",(0,o.jsx)(n.code,{children:"."})," as the path separator."]}),"\n",(0,o.jsxs)(n.p,{children:["If the path includes ",(0,o.jsx)(n.code,{children:"."}),", it could be circled by ",(0,o.jsx)(n.code,{children:'"'})," and ",(0,o.jsx)(n.code,{children:'"'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"[ ]"})," is used as the array subscripts which start from 0."]}),"\n",(0,o.jsxs)(n.p,{children:["Content in the path should not contain ",(0,o.jsx)(n.code,{children:'"'})," , ",(0,o.jsx)(n.code,{children:"["})," and ",(0,o.jsx)(n.code,{children:"]"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If the format of json_string or json_path is wrong, this function will return NULL."}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Haskell",children:"DOUBLE get_json_double(VARCHAR json_str, VARCHAR json_path)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Get the value whose key is "k1"'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Get the second element in the array whose key is "my.key"'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Get the first element in the array whose path is k1.key -> k2."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,o.jsx)(n.p,{children:"GET_JSON_DOUBLE,GET,JSON,DOUBLE"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var o=s(67294);const t=o.createContext({});function i(e){const n=o.useContext(t);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||r:i(e),o.createElement(t.Provider,{value:c},n)}}}]);