"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72493],{18856:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=r(85893),t=r(11151);const s={displayed_sidebar:"English"},i="array_generate",l={id:"sql-reference/sql-functions/array-functions/array_generate",title:"array_generate",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_generate.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_generate",permalink:"/docs/sql-reference/sql-functions/array-functions/array_generate",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_generate.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_filter",permalink:"/docs/sql-reference/sql-functions/array-functions/array_filter"},next:{title:"array_intersect",permalink:"/docs/sql-reference/sql-functions/array-functions/array_intersect"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2},{value:"The input parameters are constants",id:"the-input-parameters-are-constants",level:3},{value:"One of the input parameter is a column",id:"one-of-the-input-parameter-is-a-column",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"array_generate",children:"array_generate"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["Returns an array of distinct values within the range specified by ",(0,a.jsx)(n.code,{children:"start"})," and ",(0,a.jsx)(n.code,{children:"end"}),", with an increment of ",(0,a.jsx)(n.code,{children:"step"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"This function is supported from v3.1."}),"\n",(0,a.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"ARRAY array_generate([start,] end [, step])\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"start"}),": optional, the start value. It must be a constant or a column that evaluates to TINYINT, SMALLINT, INT, BIGINT, or LARGEINT. The default value is 1."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"end"}),": required, the end value. It must be a constant or a column that evaluates to TINYINT, SMALLINT, INT, BIGINT, or LARGEINT."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"step"}),": optional, the increment. It must be a constant or a column that evaluates to TINYINT, SMALLINT, INT, BIGINT, or LARGEINT. When ",(0,a.jsx)(n.code,{children:"start"})," is less than ",(0,a.jsx)(n.code,{children:"end"}),", the default value is 1. When ",(0,a.jsx)(n.code,{children:"start"})," is greater than ",(0,a.jsx)(n.code,{children:"end"}),", the default value is -1."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(n.p,{children:"Returns an array whose elements have the same data type as the input parameters."}),"\n",(0,a.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If any input parameter is a column, you must specify the table to which the column belongs."}),"\n",(0,a.jsx)(n.li,{children:"If any input parameter is a column, you must specify other parameters. Default values are not supported."}),"\n",(0,a.jsx)(n.li,{children:"If any input parameter is NULL, NULL is returned."}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"step"})," is 0, an empty array is returned."]}),"\n",(0,a.jsxs)(n.li,{children:["If ",(0,a.jsx)(n.code,{children:"start"})," equals to ",(0,a.jsx)(n.code,{children:"end"}),", the value is returned."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"the-input-parameters-are-constants",children:"The input parameters are constants"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_generate(9);\n+---------------------+\n| array_generate(9)   |\n+---------------------+\n| [1,2,3,4,5,6,7,8,9] |\n+---------------------+\n\nselect array_generate(9,12);\n+-----------------------+\n| array_generate(9, 12) |\n+-----------------------+\n| [9,10,11,12]          |\n+-----------------------+\n\nselect array_generate(9,6);\n+----------------------+\n| array_generate(9, 6) |\n+----------------------+\n| [9,8,7,6]            |\n+----------------------+\n\nselect array_generate(9,6,-1);\n+--------------------------+\n| array_generate(9, 6, -1) |\n+--------------------------+\n| [9,8,7,6]                |\n+--------------------------+\n\nselect array_generate(3,3);\n+----------------------+\n| array_generate(3, 3) |\n+----------------------+\n| [3]                  |\n+----------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"one-of-the-input-parameter-is-a-column",children:"One of the input parameter is a column"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `array_generate`\n(\n  `c1` TINYINT,\n  `c2` SMALLINT,\n  `c3` INT\n)\nENGINE = OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c1`);\n\nINSERT INTO `array_generate` VALUES\n(1, 6, 3),\n(2, 9, 4);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"mysql> select array_generate(1,c2,2) from `array_generate`;\n+--------------------------+\n| array_generate(1, c2, 2) |\n+--------------------------+\n| [1,3,5]                  |\n| [1,3,5,7,9]              |\n+--------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>s});var a=r(67294);const t=a.createContext({});function s(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:s(e),a.createElement(t.Provider,{value:l},n)}}}]);