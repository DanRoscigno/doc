"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63790],{20453:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=r(85893),t=r(11151);const a={displayed_sidebar:"English"},i="array_sort",l={id:"sql-reference/sql-functions/array-functions/array_sort",title:"array_sort",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/array-functions/array_sort.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sort",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_sort",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/array-functions/array_sort.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_slice",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_slice"},next:{title:"array_sum",permalink:"/docs/2.2/sql-reference/sql-functions/array-functions/array_sum"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"array_sort",children:"array_sort"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Sorts the elements of an array in ascending order."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"array_sort(array)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),": the array whose elements you want to sort. Only the ARRAY data type is supported."]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an array."}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This function can sort the elements of an array only in ascending order."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"NULL"})," values are placed at the beginning of the array that is returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you want to sort the elements of an array in descending order, use the ",(0,s.jsx)(n.a,{href:"https://docs.starrocks.com/zh-cn/2.2/sql-reference/sql-functions/string-functions/reverse",children:"reverse"})," function."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The elements of the array that is returned are of the same data type as the elements of the array that you specify."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"In this section, the following table is used as an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> select * from test;\n\n+------+--------------+\n\n| c1   | c2           |\n\n+------+--------------+\n\n|    1 | [4,3,null,1] |\n\n|    2 | NULL         |\n\n|    3 | [null]       |\n\n|    4 | [8,5,1,4]    |\n\n+------+--------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Sort the values of column ",(0,s.jsx)(n.code,{children:"c2"})," in ascending order."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain_Text",children:"mysql> select c1, array_sort(c2) from test;\n\n+------+------------------+\n\n| c1   | array_sort(`c2`) |\n\n+------+------------------+\n\n|    1 | [null,1,3,4]     |\n\n|    2 | NULL             |\n\n|    3 | [null]           |\n\n|    4 | [1,4,5,8]        |\n\n+------+------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>a});var s=r(67294);const t=s.createContext({});function a(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(t.Provider,{value:l},n)}}}]);