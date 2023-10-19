"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84496],{92050:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(85893),t=s(11151);const i={displayed_sidebar:"English"},c="base64_decode_binary",a={id:"sql-reference/sql-functions/crytographic-functions/base64_decode_binary",title:"base64_decode_binary",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/base64_decode_binary.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/base64_decode_binary",permalink:"/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_binary.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"aes_encrypt",permalink:"/docs/sql-reference/sql-functions/crytographic-functions/aes_encrypt"},next:{title:"base64_decode_string",permalink:"/docs/sql-reference/sql-functions/crytographic-functions/base64_decode_string"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"base64_decode_binary",children:"base64_decode_binary"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Decodes a Base64-encoded string and return a BINARY."}),"\n",(0,r.jsx)(n.p,{children:"This function is supported from v3.0."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"base64_decode_binary(str);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": the string to decode. It must be of the VARCHAR type."]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of the VARBINARY type. If the input is NULL or an invalid Base64 string, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,r.jsx)(n.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select hex(base64_decode_binary(to_base64(\"Hello StarRocks\")));\n+---------------------------------------------------------+\n| hex(base64_decode_binary(to_base64('Hello StarRocks'))) |\n+---------------------------------------------------------+\n| 48656C6C6F2053746172526F636B73                          |\n+---------------------------------------------------------+\n\nmysql> select base64_decode_binary(NULL);\n+--------------------------------------------------------+\n| base64_decode_binary(NULL)                             |\n+--------------------------------------------------------+\n| NULL                                                   |\n+--------------------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:a},n)}}}]);