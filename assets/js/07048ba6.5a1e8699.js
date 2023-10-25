"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53728],{52759:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(85893),c=s(11151);const i={displayed_sidebar:"English"},r="concat_ws",o={id:"sql-reference/sql-functions/string-functions/concat_ws",title:"concat_ws",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/string-functions/concat_ws.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/concat_ws",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/concat_ws",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/concat_ws.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"concat",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/concat"},next:{title:"ends_with",permalink:"/docs/2.1/sql-reference/sql-functions/string-functions/ends_with"}},a={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,c.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"concat_ws",children:"concat_ws"}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"VARCHAR concat_ws(VARCHAR sep, VARCHAR str,...)"})}),"\n",(0,t.jsx)(e.p,{children:"This function uses the first argument sep as the separator which combines the second with the rest to form a string. If the separator is NULL, the result is NULL. concat_ws function does not skip empty strings, but it will skip NULL values."}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Plain",metastring:"Text",children:'MySQL > select concat_ws("or", "d", "is");\n+----------------------------+\n| concat_ws(\'or\', \'d\', \'is\') |\n+----------------------------+\n| starrocks                      |\n+----------------------------+\n\nMySQL > select concat_ws(NULL, "d", "is");\n+----------------------------+\n| concat_ws(NULL, \'d\', \'is\') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nMySQL > select concat_ws("or", "d", NULL,"is");\n+---------------------------------+\n| concat_ws("or", "d", NULL,"is") |\n+---------------------------------+\n| starrocks                           |\n+---------------------------------+\n'})}),"\n",(0,t.jsx)(e.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(e.p,{children:"CONCAT_WS,CONCAT,WS"})]})}const u=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(d,n)})):d(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(n){const e=t.useContext(c);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function o({components:n,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof n?n({}):n||r:i(n),t.createElement(c.Provider,{value:o},e)}}}]);