"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50282],{56793:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},c="sm3",a={id:"sql-reference/sql-functions/crytographic-functions/sm3",title:"sm3",description:"Description",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/crytographic-functions/sm3.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/sm3",permalink:"/docs/2.3/sql-reference/sql-functions/crytographic-functions/sm3",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/crytographic-functions/sm3.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"sha2",permalink:"/docs/2.3/sql-reference/sql-functions/crytographic-functions/sha2"},next:{title:"to_base64",permalink:"/docs/2.3/sql-reference/sql-functions/crytographic-functions/to_base64"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sm3",children:"sm3"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Uses the SM3 digest algorithm to encrypt a string into a 256-bit hexadecimal string. Every 32 bits are separated by a space."}),"\n",(0,t.jsx)(n.p,{children:"Digest algorithms have a broad range of use cases in digital signature, message authentication, and data integrity check. The SM3 algorithm is an enhancement of SHA-256."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"SM3(str);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"str"}),": the string to encrypt. It must be of the VARCHAR type."]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a value of the VARCHAR type. If the input is NULL, NULL is returned. If the input is empty, an error is returned."}),"\n",(0,t.jsx)(n.p,{children:"This function accepts only one string. More than one input string causes an error."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sm3('l');\n+-------------------------------------------------------------------------+\n| sm3('l')                                                                |\n+-------------------------------------------------------------------------+\n| 1dec1a7a 94236240 49db411e 2c32c62d c0c93856 8208ac3a 09d395eb 2468b445 |\n+-------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:a},n)}}}]);