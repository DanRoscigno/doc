"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8118],{80330:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=s(85893),t=s(11151);const r={displayed_sidebar:"documentation"},c="sha2",l={id:"sql-reference/sql-functions/crytographic-functions/sha2",title:"sha2",description:"Calculates the SHA-224 hash value, SHA-256 hash value, SHA-384 hash value, or SHA-512 hash value of a string.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/sha2.md",sourceDirName:"sql-reference/sql-functions/crytographic-functions",slug:"/sql-reference/sql-functions/crytographic-functions/sha2",permalink:"/doc/docs/sql-reference/sql-functions/crytographic-functions/sha2",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/crytographic-functions/sha2.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"md5sum_numeric",permalink:"/doc/docs/sql-reference/sql-functions/crytographic-functions/md5sum_numeric"},next:{title:"sm3",permalink:"/doc/docs/sql-reference/sql-functions/crytographic-functions/sm3"}},i={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"sha2",children:"sha2"}),"\n",(0,a.jsx)(n.p,{children:"Calculates the SHA-224 hash value, SHA-256 hash value, SHA-384 hash value, or SHA-512 hash value of a string."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR sha2(VARCHAR expr, INT hash_length)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Expr"}),": the string whose value you want to calculate."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"hash_length"}),": the length of a hash value. The value of this parameter can be 224, 256, 384, 512, or 0. The value 0 is equivalent to 256. If you set this parameter to any other value, this function returns ",(0,a.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsxs)(n.p,{children:["Returns a hash value of the VARCHAR type. If any of the two input parameters is ",(0,a.jsx)(n.code,{children:"Null"}),", ",(0,a.jsx)(n.code,{children:"Null"})," is returned."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select sha2('abc',224);\n\n+----------------------------------------------------------+\n\n| sha2('abc', 224)                                         |\n\n+----------------------------------------------------------+\n\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n\n+----------------------------------------------------------+\n\n1 row in set (0.01 sec)\n\n\n\nmysql> select sha2('abc', 384);\n\n+--------------------------------------------------------------------------------------------------+\n\n| sha2('abc', 384)                                                                                 |\n\n+--------------------------------------------------------------------------------------------------+\n\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n\n+--------------------------------------------------------------------------------------------------+\n\n1 row in set (0.00 sec)\n\n\n\nmysql> select sha2('abc', 1),sha2('abc', null), sha2(null, 384);\n\n+----------------+-------------------+-----------------+\n\n| sha2('abc', 1) | sha2('abc', NULL) | sha2(NULL, 384) |\n\n+----------------+-------------------+-----------------+\n\n| NULL           | NULL              | NULL            |\n\n+----------------+-------------------+-----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"SHA2, ENCRYPTION"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var a=s(67294);const t=a.createContext({});function r(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:r(e),a.createElement(t.Provider,{value:l},n)}}}]);