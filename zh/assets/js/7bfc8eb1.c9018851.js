"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1462],{68797:(a,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var e=r(85893),s=r(11151);const c={},l="array_map",t={id:"sql-reference/sql-functions/array-functions/array_map",title:"array_map",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_map.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_map",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_map",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_map.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"array_length",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_length"},next:{title:"array_max",permalink:"/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_max"}},i={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(a){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),a.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"array_map",children:"array_map"}),"\n",(0,e.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,e.jsxs)(n.p,{children:["array_map() \u662f\u652f\u6301 Lambda \u8868\u8fbe\u5f0f\u7684\u9ad8\u9636\u51fd\u6570\u3002\u7528\u4e8e\u5c06\u8f93\u5165\u7684 ",(0,e.jsx)(n.code,{children:"arr1"}),"\uff0c",(0,e.jsx)(n.code,{children:"arr2"})," \u7b49\u6570\u7ec4\u6309\u7167 ",(0,e.jsx)(n.code,{children:"lambda_function"})," \u8fdb\u884c\u8f6c\u6362\uff0c\u8f93\u51fa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u3002\u6709\u5173 Lambda \u8868\u8fbe\u5f0f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,e.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002\u8be5\u51fd\u6570\u4ece 2.5 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"]}),"\n",(0,e.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u652f\u6301\u591a\u7ef4\u6570\u7ec4\uff0c\u53ef\u4ee5\u901a\u8fc7\u5d4c\u5957 Lambda \u51fd\u6570\u6765\u6355\u83b7\u53d8\u91cf\u3002"}),"\n",(0,e.jsx)(n.p,{children:"array_map() \u522b\u540d\u4e3a transform()\u3002"}),"\n",(0,e.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Haskell",children:"array_map(lambda_function, arr1, arr2...)\narray_map(arr1, arr2..., lambda_function)\n"})}),"\n",(0,e.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Lambda \u51fd\u6570\u53ea\u80fd\u4f5c\u4e3a\u9ad8\u9636\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u6216\u8005\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u3002\u4e0d\u7ba1\u5728\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u8fd8\u662f\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u90fd\u5bf9\u8ba1\u7b97\u8fc7\u7a0b\u6ca1\u6709\u5f71\u54cd\u3002"}),"\n",(0,e.jsx)(n.li,{children:"\u6570\u7ec4\u53c2\u6570\u7684\u6570\u76ee\u5fc5\u987b\u7b49\u4e8e lambda \u51fd\u6570\u4e2d\u7684\u53c2\u6570\u6570\u76ee\uff0c\u5426\u5219\u62a5\u9519\u3002"}),"\n",(0,e.jsx)(n.li,{children:"\u6240\u6709\u8f93\u5165\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\u5fc5\u987b\u76f8\u540c\uff0c\u5426\u5219\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u4e00\uff1a\u7ed9 array [1,2,3] \u5185\u7684\u6bcf\u4e2a\u5143\u7d20\u589e\u52a0 100\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"select array_map(x -> x+100,[1,2,3]);\n+------------------------------------+\n| array_map(x -> x + 100, [1, 2, 3]) |\n+------------------------------------+\n| [101,102,103]                      |\n+------------------------------------+\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06 array1 [1,2,3] \u4e0e array2 [11,12,13] \u5bf9\u5e94\u4f4d\u7f6e\u7684\u5143\u7d20\u76f8\u52a0\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"select array_map((x,y) -> x + y, [1,2,3], [11,12,13]);\n+-----------------------------------------------------+\n| array_map((x, y) -> x + y, [1, 2, 3], [11, 12, 13]) |\n+-----------------------------------------------------+\n| [12,14,16]                                          |\n+-----------------------------------------------------+\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u4e09\uff1a\u901a\u8fc7\u6761\u4ef6\u5224\u65ad\uff0c\u5982\u679c x \u7684\u5143\u7d20\u5927\u4e8e 1.5\uff0c\u5219\u5bf9\u5e94\u5143\u7d20\u4f4d\u7f6e\u8fd4\u56de log(x)\uff1b\u5982\u679c x \u7684\u5143\u7d20\u5c0f\u4e8e\u7b49\u4e8e1.5\uff0c\u5219\u5bf9\u5e94\u5143\u7d20\u4f4d\u7f6e\u8fd4\u56de x+y\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"select array_map((x,y) -> if(x>1.5,log(x),x+y), [1,2,3], [11,12,13]);\n+--------------------------------------------------------------------------+\n| array_map((x, y) -> if(x > 1.5, log(x), x + y), [1, 2, 3], [11, 12, 13]) |\n+--------------------------------------------------------------------------+\n| [12,0.6931471805599453,1.0986122886681098]                               |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u56db\uff1a\u901a\u8fc7 array_map() \u6765\u6355\u83b7\u53d8\u91cf\u3002\u5bf9\u5e94\u8fd4\u56de 1 \u7684\u4f4d\u7f6e\u5373\u4e3a\u6ee1\u8db3\u6761\u4ef6\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"-- \u793a\u4f8b\u8868\uff1alast_avg \u8bb0\u5f55\u6bcf\u4e2a\u5b66\u751f\u4e0a\u4e00\u6b21\u7684\u5e73\u5747\u6210\u7ee9\uff0cscore \u8bb0\u5f55\u8fd9\u4e00\u6b21\u4e09\u95e8\u8003\u8bd5\u7684\u6210\u7ee9\u3002\n+------+----------+------------+\n| id   | last_avg | score      |\n+------+----------+------------+\n|    1 |       55 | [50,60,70] |\n|    2 |       73 | [70,65,75] |\n|    3 |       89 | [88,92,90] |\n+------+----------+------------+\n\n-- \u627e\u5230\u672c\u6b21\u8003\u8bd5\u6210\u7ee9\u4e2d\u9ad8\u4e8e\u4e0a\u6b21\u8003\u8bd5\u5e73\u5747\u5206\u7684\u79d1\u76ee\u3002\nselect array_map(x -> x > last_avg, score) from test_tbl;\n+--------------------------------------+\n| array_map(x -> x > last_avg, score)  |\n+--------------------------------------+\n| [0,1,1]                              |\n| [0,0,1]                              |\n| [0,1,1]                              |\n+--------------------------------------+\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u4e94\uff1aLambda \u51fd\u6570\u7684\u5d4c\u5957\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"select array_map(x -> array_map(x->x+100, x),[[1,2.3],[4,3,2]]);\n+-------------------------------------------------------------------+\n| array_map(x -> array_map(x -> x + 100, x), [[1, 2.3], [4, 3, 2]]) |\n+-------------------------------------------------------------------+\n| [[101,102.3],[104,103,102]]                                       |\n+-------------------------------------------------------------------+\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u793a\u4f8b\u516d\uff1aLambda \u51fd\u6570\u7684\u53c2\u6570\u4e2a\u6570\u548c\u8f93\u5165\u7684\u6570\u7ec4\u4e2a\u6570\u4e0d\u4e00\u81f4\uff08\u51fd\u6570\u9700\u8981 1 \u4e2a\u6570\u7ec4\uff0c\u4f46\u8f93\u5165\u4e86 2 \u4e2a\u6570\u7ec4\uff09\uff0c\u8fd4\u56de\u62a5\u9519\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-SQL",children:"select array_map(x -> x,[1],[2,4]);\nERROR 1064 (HY000): Lambda arguments should equal to lambda input arrays.\n"})})]})}const x=function(a={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),a.components);return n?(0,e.jsx)(n,Object.assign({},a,{children:(0,e.jsx)(o,a)})):o(a)}},11151:(a,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>c});var e=r(67294);const s=e.createContext({});function c(a){const n=e.useContext(s);return e.useMemo((()=>"function"==typeof a?a(n):{...n,...a}),[n,a])}const l={};function t({components:a,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof a?a({}):a||l:c(a),e.createElement(s.Provider,{value:t},n)}}}]);