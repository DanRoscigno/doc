"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[17400],{19210:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(85893),s=a(11151);const i={displayed_sidebar:"Chinese31"},c="array_sum",l={id:"sql-reference/sql-functions/array-functions/array_sum",title:"array_sum",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/array-functions/array_sum.md",sourceDirName:"sql-reference/sql-functions/array-functions",slug:"/sql-reference/sql-functions/array-functions/array_sum",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sum",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/array-functions/array_sum.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"array_sortby",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_sortby"},next:{title:"array_to_bitmap",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/array-functions/array_to_bitmap"}},t={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0d\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f",id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3},{value:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f",id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3}];function o(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"array_sum",children:"array_sum"}),"\n",(0,n.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsx)(r.p,{children:"\u5bf9\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u6c42\u548c\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0carray_sum() \u652f\u6301\u5c06 lambda \u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u4f5c\u4e3a\u9ad8\u9636\u51fd\u6570\u4f7f\u7528\u3002array_sum() \u4e0d\u76f4\u63a5\u652f\u6301 lambda\uff0c\u9700\u8981\u5bf9 array_map() \u8f6c\u6362\u540e\u7684 array \u8fdb\u884c array_sum() \u64cd\u4f5c\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u6709\u5173 Lambda \u8868\u8fbe\u5f0f\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,n.jsx)(r.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-Haskell",children:"array_sum(array(type))\narray_sum(lambda_function, arr1,arr2...) = array_sum(array_map(lambda_function, arr1,arr2...))\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"array(type)"}),"\uff1a\u8981\u8fdb\u884c\u6c42\u548c\u7684 array \u6570\u7ec4\u3002 \u6570\u7ec4\u5143\u7d20\u652f\u6301\u5982\u4e0b\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001DECIMALV2\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"lambda_function"}),": Lambda \u8868\u8fbe\u5f0f\u3002\u57fa\u4e8e\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u5bf9\u6570\u7ec4\u8fdb\u884c\u6c42\u548c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,n.jsx)(r.p,{children:"\u8fd4\u56de\u6570\u503c\u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsx)(r.h3,{id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4e0d\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"\nselect array_sum([11, 11, 12]);\n+-----------------------+\n| array_sum([11,11,12]) |\n+-----------------------+\n| 34                    |\n+-----------------------+\n\nselect array_sum([11.33, 11.11, 12.324]);\n+---------------------------------+\n| array_sum([11.33,11.11,12.324]) |\n+---------------------------------+\n| 34.764                          |\n+---------------------------------+\n"})}),"\n",(0,n.jsx)(r.h3,{id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-plain",metastring:"text",children:"-- \u5148\u5c06\u6570\u7ec4\u5185\u6bcf\u4e2a\u4f4d\u7f6e\u5bf9\u5e94\u7684\u5143\u7d20\u76f8\u4e58\uff0c\u518d\u76f8\u52a0\u3002\nselect array_sum(array_map(x->x*x,[1,2,3]));\n+---------------------------------------------+\n| array_sum(array_map(x -> x * x, [1, 2, 3])) |\n+---------------------------------------------+\n|                                          14 |\n+---------------------------------------------+\n"})})]})}const u=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,r,a)=>{a.d(r,{Zo:()=>l,ah:()=>i});var n=a(67294);const s=n.createContext({});function i(e){const r=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function l({components:e,children:r,disableParentContext:a}){let l;return l=a?"function"==typeof e?e({}):e||c:i(e),n.createElement(s.Provider,{value:l},r)}}}]);