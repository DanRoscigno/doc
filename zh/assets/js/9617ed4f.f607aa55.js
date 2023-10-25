"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[72970],{98564:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=r(85893),a=r(11151);const t={displayed_sidebar:"English"},l="arrays_overlap",i={id:"sql-reference/sql-functions/array-functions/arrays_overlap",title:"arrays_overlap",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/array-functions/arrays_overlap.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/arrays_overlap",permalink:"/zh/docs/2.2/sql-reference/sql-functions/array-functions/arrays_overlap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/array-functions/arrays_overlap.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"array_sum",permalink:"/zh/docs/2.2/sql-reference/sql-functions/array-functions/array_sum"},next:{title:"reverse",permalink:"/zh/docs/2.2/sql-reference/sql-functions/array-functions/reverse"}},c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"arrays_overlap",children:"arrays_overlap"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Checks whether the intersection of two arrays is empty. The arrays that you specify must be of the same data type. If the intersection is empty, this function returns ",(0,s.jsx)(n.code,{children:"0"}),". Otherwise, this function returns ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"arrays_overlap(input0, input1)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"input0"}),": one of the two arrays that you want to compare."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"input1"}),": the other of the two arrays that you want to compare. The value of this parameter must be of the same data type as the value of the ",(0,s.jsx)(n.code,{children:"input0"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BOOLEAN data type."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Example 1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select arrays_overlap([11, 9, 3, 2], [null, 11]);\n+--------------------------------------+\n| arrays_overlap([11,9,3,2], [NULL,11]) |\n+--------------------------------------+\n|                                    1 |\n+--------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 2:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select arrays_overlap([9, 3, 2], [null, 11]);\n+-----------------------------------+\n| arrays_overlap([9,3,2], [NULL,11]) |\n+-----------------------------------+\n|                                 0 |\n+-----------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 3:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select arrays_overlap([9, 3, null, 2], [null, 11]);\n+----------------------------------------+\n| arrays_overlap([9,3,NULL,2], [NULL,11]) |\n+----------------------------------------+\n|                                      1 |\n+----------------------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example 4:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> select arrays_overlap([9, 3, \"SQL\", 2], [null, \"SQL\"]);\n+--------------------------------------------+\n| arrays_overlap([9,3,'SQL',2], [NULL,'SQL']) |\n+--------------------------------------------+\n|                                          1 |\n+--------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var s=r(67294);const a=s.createContext({});function t(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||l:t(e),s.createElement(a.Provider,{value:i},n)}}}]);