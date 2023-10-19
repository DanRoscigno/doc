"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83245],{86039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=s(85893),i=s(11151);const t={displayed_sidebar:"English"},c="hex_decode_binary",d={id:"sql-reference/sql-functions/string-functions/hex_decode_binary",title:"hex_decode_binary",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/hex_decode_binary.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/hex_decode_binary",permalink:"/docs/sql-reference/sql-functions/string-functions/hex_decode_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/hex_decode_binary.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"hex",permalink:"/docs/sql-reference/sql-functions/string-functions/hex"},next:{title:"hex_decode_string",permalink:"/docs/sql-reference/sql-functions/string-functions/hex_decode_string"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hex_decode_binary",children:"hex_decode_binary"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Decodes a hex encoded string to a binary."}),"\n",(0,r.jsx)(n.p,{children:"This function is supported from v3.0."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"hex_decode_binary(str);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"str"}),": the string to convert. The supported data type is VARCHAR."]}),"\n",(0,r.jsx)(n.p,{children:"An empty binary is returned if any of the following situations occur:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The length of the string is 0 or the number of characters in the string is an odd number."}),"\n",(0,r.jsxs)(n.li,{children:["The string contains characters other than ",(0,r.jsx)(n.code,{children:"[0-9]"}),", ",(0,r.jsx)(n.code,{children:"[a-z]"}),", and ",(0,r.jsx)(n.code,{children:"[A-Z]"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a value of the VARBINARY type."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select hex(hex_decode_binary(hex(\"Hello StarRocks\")));\n+------------------------------------------------+\n| hex(hex_decode_binary(hex('Hello StarRocks'))) |\n+------------------------------------------------+\n| 48656C6C6F2053746172526F636B73                 |\n+------------------------------------------------+\n\nmysql> select hex_decode_binary(NULL);\n+--------------------------------------------------+\n| hex_decode_binary(NULL)                          |\n+--------------------------------------------------+\n| NULL                                             |\n+--------------------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.p,{children:"HEX_DECODE_BINARY"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:t(e),r.createElement(i.Provider,{value:d},n)}}}]);