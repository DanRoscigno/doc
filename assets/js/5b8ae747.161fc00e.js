"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18533],{43986:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=s(85893),i=s(11151);const r={displayed_sidebar:"documentation"},o="get_json_string",c={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",title:"get_json_string",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_string.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"get_json_int",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/get_json_int"},next:{title:"json_each",permalink:"/doc/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_each"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li"},(0,i.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"get_json_string",children:"get_json_string"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"This function analyzes and gets the strings from a specified path in json string."}),"\n",(0,t.jsxs)(e.p,{children:["json_path must start with ",(0,t.jsx)(e.code,{children:"$"})," and use ",(0,t.jsx)(e.code,{children:"."})," as the path separator."]}),"\n",(0,t.jsxs)(e.p,{children:["If the path includes ",(0,t.jsx)(e.code,{children:"."}),", it could be circled by ",(0,t.jsx)(e.code,{children:'"'})," and ",(0,t.jsx)(e.code,{children:'"'}),"."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"[ ]"})," is used as the array subscripts which start from 0."]}),"\n",(0,t.jsxs)(e.p,{children:["Content in the path should not contain ",(0,t.jsx)(e.code,{children:'"'})," , ",(0,t.jsx)(e.code,{children:"["})," and ",(0,t.jsx)(e.code,{children:"]"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"If the format of json_string or json_path is wrong, this function will return NULL."}),"\n",(0,t.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Haskell",children:"VARCHAR get_json_string(VARCHAR json_str, VARCHAR json_path)\n"})}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Get the value whose key is "k1"'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1":"v1", "k2":"v2"}\', "$.k1");\n+---------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "k2":"v2"}\', \'$.k1\') |\n+---------------------------------------------------+\n| v1                                                |\n+---------------------------------------------------+\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Get the second element in the array whose key is "my.key"'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\');\n+------------------------------------------------------------------------------+\n| get_json_string(\'{"k1":"v1", "my.key":["e1", "e2", "e3"]}\', \'$."my.key"[1]\') |\n+------------------------------------------------------------------------------+\n| e2                                                                           |\n+------------------------------------------------------------------------------+\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Get the first element in the array whose path is k1.key -> k2."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\');\n+-----------------------------------------------------------------------+\n| get_json_string(\'{"k1.key":{"k2":["v1", "v2"]}}\', \'$."k1.key".k2[0]\') |\n+-----------------------------------------------------------------------+\n| v1                                                                    |\n+-----------------------------------------------------------------------+\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:'Get all values whose key is "k1" from the array.'}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > SELECT get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\');\n+---------------------------------------------------------------------------------+\n| get_json_string(\'[{"k1":"v1"}, {"k2":"v2"}, {"k1":"v3"}, {"k1":"v4"}]\', \'$.k1\') |\n+---------------------------------------------------------------------------------+\n| ["v1","v3","v4"]                                                                |\n+---------------------------------------------------------------------------------+\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"GET_JSON_STRING,GET,JSON,STRING"})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>c,ah:()=>r});var t=s(67294);const i=t.createContext({});function r(n){const e=t.useContext(i);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function c({components:n,children:e,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||o:r(n),t.createElement(i.Provider,{value:c},e)}}}]);