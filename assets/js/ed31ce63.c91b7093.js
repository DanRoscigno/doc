"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23387],{58655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(85893),i=t(11151);const r={displayed_sidebar:"English"},c="percentile_cont",l={id:"sql-reference/sql-functions/aggregate-functions/percentile_cont",title:"percentile_cont",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/aggregate-functions/percentile_cont.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile_cont",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/percentile_cont",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/aggregate-functions/percentile_cont.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"PERCENTILE_APPROX",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/percentile_approx"},next:{title:"percentile_disc",permalink:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/percentile_disc"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"percentile_cont",children:"percentile_cont"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Computes the percentile value of ",(0,s.jsx)(n.code,{children:"expr"})," with linear interpolation."]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"PERCENTILE_CONT (expr, percentile) \n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"expr"}),": the expression by which to order the values. It must be of numeric data types, DATE, or DATETIME. For example, if you want to find the median score of physics, specify the column that contains the physics scores."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"percentile"}),": the percentile of the value you want to find. It is a constant floating-point number from 0 to 1. For example, if you want to find the median value, set this parameter to ",(0,s.jsx)(n.code,{children:"0.5"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value that is at the specified percentile. If no input value lies exactly at the desired percentile, the result is calculated using linear interpolation of the two nearest input values."}),"\n",(0,s.jsxs)(n.p,{children:["The data type is the same as ",(0,s.jsx)(n.code,{children:"expr"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,s.jsx)(n.p,{children:"This function ignores NULLs."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Suppose there is a table named ",(0,s.jsx)(n.code,{children:"exam"})," with the following data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"select * from exam order by Subject;\n+-----------+-------+\n| Subject   | Score |\n+-----------+-------+\n| chemistry |    80 |\n| chemistry |   100 |\n| chemistry |  NULL |\n| math      |    60 |\n| math      |    70 |\n| math      |    85 |\n| physics   |    75 |\n| physics   |    80 |\n| physics   |    85 |\n| physics   |    99 |\n+-----------+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Calculate the median score of each subject while ignoring NULLs."}),"\n",(0,s.jsx)(n.p,{children:"Query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"SELECT Subject, PERCENTILE_CONT (Score, 0.5)  FROM exam group by Subject;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"+-----------+-----------------------------+\n| Subject   | percentile_cont(Score, 0.5) |\n+-----------+-----------------------------+\n| chemistry |                          90 |\n| math      |                          70 |\n| physics   |                        82.5 |\n+-----------+-----------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:r(e),s.createElement(i.Provider,{value:l},n)}}}]);