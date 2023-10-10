"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89707],{29634:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=s(85893),t=s(11151);const l={},a="array_slice",i={id:"sql-reference/sql-functions/array-functions/array_slice",title:"array_slice",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_slice.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_slice",permalink:"/docs/sql-reference/sql-functions/array-functions/array_slice",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/array-functions/array_slice.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"array_remove",permalink:"/docs/sql-reference/sql-functions/array-functions/array_remove"},next:{title:"array_sort",permalink:"/docs/sql-reference/sql-functions/array-functions/array_sort"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"array_slice",children:"array_slice"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a slice of an array. This function intercepts ",(0,r.jsx)(n.code,{children:"length"})," elements from ",(0,r.jsx)(n.code,{children:"input"})," from the position specified by ",(0,r.jsx)(n.code,{children:"offset"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"array_slice(input, offset, length)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"input"}),": the array whose slice you want to intercept. This function supports the following types of array elements: BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, VARCHAR, DECIMALV2, DATETIME, DATE, and JSON. ",(0,r.jsx)(n.strong,{children:"JSON is supported from 2.5."})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"offset"}),": the position from which to intercept elements. Valid values start from ",(0,r.jsx)(n.code,{children:"1"}),". It must be a BIGINT value."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"length"}),": the length of the slice that you want to intercept. It must be a BIGINT value."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an array that have the same data type as the array specified by the ",(0,r.jsx)(n.code,{children:"input"})," parameter."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The offset starts from 1."}),"\n",(0,r.jsx)(n.li,{children:"If the specified length exceeds the actual number of elements that can be intercepted, all the matching elements are returned. See Example 4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Intercept 2 elements starting from the third element."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select array_slice([1,2,4,5,6], 3, 2) as res;\n+-------+\n| res   |\n+-------+\n| [4,5] |\n+-------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Intercept 2 elements starting from the first element."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:'mysql> select array_slice(["sql","storage","query","execute"], 1, 2) as res;\n+-------------------+\n| res               |\n+-------------------+\n| ["sql","storage"] |\n+-------------------+\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example 3: Null elements are treated as normal values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select array_slice([57.73,97.32,128.55,null,324.2], 3, 3) as res;\n+---------------------+\n| res                 |\n+---------------------+\n| [128.55,null,324.2] |\n+---------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 4: Intercept 5 elements starting from the third element."}),"\n",(0,r.jsx)(n.p,{children:"This function intends to intercept 5 elements but there are only 3 elements from the third element. As a result, all of these 3 elements are returned."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"mysql> select array_slice([57.73,97.32,128.55,null,324.2], 3, 5) as res;\n+---------------------+\n| res                 |\n+---------------------+\n| [128.55,null,324.2] |\n+---------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var r=s(67294);const t=r.createContext({});function l(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:l(e),r.createElement(t.Provider,{value:i},n)}}}]);