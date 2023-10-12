"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[86017],{23310:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(85893),t=i(11151);const r={displayed_sidebar:"documentation"},a="cos_similarity_norm",o={id:"sql-reference/sql-functions/math-functions/cos_similarity_norm",title:"cos_similarity_norm",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/cos_similarity_norm.md",sourceDirName:"sql-reference/sql-functions/math-functions",slug:"/sql-reference/sql-functions/math-functions/cos_similarity_norm",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/cos_similarity_norm",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/math-functions/cos_similarity_norm.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"cos_similarity",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/cos_similarity"},next:{title:"cosh",permalink:"/doc/docs/sql-reference/sql-functions/math-functions/cosh"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cos_similarity_norm",children:"cos_similarity_norm"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Measures the similarity of two normalized vectors by calculating the cosine of the angle between them. The angle is formed by the direction of the vectors while the difference in their magnitude is ignored. This function assumes that the input vectors have been normalized. If you need to normalize vectors before calculating the cosine similarity, use ",(0,s.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/math-functions/cos_similarity",children:"cosine_similarity"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The similarity is between -1 and 1. Smaller angles between vectors indicate greater cosine similarity."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If two vectors have the same direction, they have a 0-degree angle and the cosine similarity is 1."}),"\n",(0,s.jsx)(n.li,{children:"Perpendicular vectors have a 90-degree angle and a cosine similarity of 0."}),"\n",(0,s.jsx)(n.li,{children:"Opposite vectors have a 180-degree angle and a cosine similarity of -1."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"cosine_similarity_norm(a, b)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"a"})," and ",(0,s.jsx)(n.code,{children:"b"})," are the vectors to compare. They must have the same dimension. The supported data type is ",(0,s.jsx)(n.code,{children:"Array<float>"}),". The two arrays must have the same number of elements. Otherwise, an error is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a FLOAT value within the range of [-1, 1]. If any input parameter is null or invalid, an error is reported."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a table to store vectors and insert data into this table."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE t1_similarity \n(id int, data array<float>)\nDISTRIBUTED BY HASH(id);\n\nINSERT INTO t1_similarity VALUES\n(1, array<float>[0.1, 0.2, 0.3]), \n(2, array<float>[0.2, 0.1, 0.3]), \n(3, array<float>[0.3, 0.2, 0.1]);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Calculate the similarity of each row in the ",(0,s.jsx)(n.code,{children:"data"})," column compared to the array ",(0,s.jsx)(n.code,{children:"[0.1, 0.2, 0.3]"})," and list the result in descending order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT id, data, cosine_similarity_norm([0.1, 0.2, 0.3], data) as dist\nFROM t1_similarity \nORDER BY dist DESC;\n\n+------+---------------+------------+\n| id   | data          | dist       |\n+------+---------------+------------+\n|    1 | [0.1,0.2,0.3] | 0.14000002 |\n|    2 | [0.2,0.1,0.3] | 0.13000001 |\n|    3 | [0.3,0.2,0.1] | 0.10000001 |\n+------+---------------+------------+\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>o,ah:()=>r});var s=i(67294);const t=s.createContext({});function r(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||a:r(e),s.createElement(t.Provider,{value:o},n)}}}]);