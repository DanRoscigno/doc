"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37496],{36006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(85893),i=r(11151);const t={displayed_sidebar:"documentation"},o="from_binary",c={id:"sql-reference/sql-functions/binary-functions/from_binary",title:"from_binary",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/binary-functions/from_binary.md",sourceDirName:"sql-reference/sql-functions/binary-functions",slug:"/sql-reference/sql-functions/binary-functions/from_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/from_binary",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/binary-functions/from_binary.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Binary Functions",permalink:"/doc/docs/3.0/category/binary-functions"},next:{title:"to_binary",permalink:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/to_binary"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"from_binary",children:"from_binary"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Converts a binary value to a VARCHAR string based on the specified binary format (",(0,s.jsx)(n.code,{children:"binary_type"}),"). The following binary formats are supported: ",(0,s.jsx)(n.code,{children:"hex"}),", ",(0,s.jsx)(n.code,{children:"encode64"}),", and ",(0,s.jsx)(n.code,{children:"utf8"}),". If no ",(0,s.jsx)(n.code,{children:"binary_type"})," is specified, ",(0,s.jsx)(n.code,{children:"hex"})," is the default."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"from_binary(binary[, binary_type])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary"}),": the input binary to convert, required."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary_type"}),": the binary format for conversion, optional."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hex"})," (default): ",(0,s.jsx)(n.code,{children:"from_binary"})," uses the ",(0,s.jsx)(n.code,{children:"hex"})," method to encode the input binary to a VARCHAR string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encode64"}),": ",(0,s.jsx)(n.code,{children:"from_binary"})," uses the ",(0,s.jsx)(n.code,{children:"base64"})," method to encode the input binary to a VARCHAR string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"utf8"}),": ",(0,s.jsx)(n.code,{children:"from_binary"})," converts the input binary to a VARCHAR string without any transformation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a VARCHAR string."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select from_binary(to_binary('ABAB', 'hex'), 'hex');\n+----------------------------------------------+\n| from_binary(to_binary('ABAB', 'hex'), 'hex') |\n+----------------------------------------------+\n| ABAB                                         |\n+----------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select from_base64(from_binary(to_binary('U1RBUlJPQ0tT', 'encode64'), 'encode64'));\n+-----------------------------------------------------------------------------+\n| from_base64(from_binary(to_binary('U1RBUlJPQ0tT', 'encode64'), 'encode64')) |\n+-----------------------------------------------------------------------------+\n| STARROCKS                                                                   |\n+-----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select from_binary(to_binary('STARROCKS', 'utf8'), 'utf8');\n+-----------------------------------------------------+\n| from_binary(to_binary('STARROCKS', 'utf8'), 'utf8') |\n+-----------------------------------------------------+\n| STARROCKS                                           |\n+-----------------------------------------------------+\n1 row in set (0.01 sec)\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-functions/binary-functions/to_binary",children:"to_binary"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-types/BINARY",children:"BINARY/VARBINARY data type"})}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>t});var s=r(67294);const i=s.createContext({});function t(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||o:t(e),s.createElement(i.Provider,{value:c},n)}}}]);