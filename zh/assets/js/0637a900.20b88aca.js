"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1683],{94942:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(85893),c=s(11151);const r={displayed_sidebar:"Chinese"},l="STD",i={id:"sql-reference/sql-functions/aggregate-functions/std",title:"STD",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/aggregate-functions/std.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/std",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/std",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/aggregate-functions/std.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"retention",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/retention"},next:{title:"stddev, stddev_pop",permalink:"/zh/docs/sql-reference/sql-functions/aggregate-functions/stddev"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u8bcd",id:"\u5173\u952e\u8bcd",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"std",children:"STD"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u6307\u5b9a\u5217\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"STD(expr)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 DOUBLE \u6570\u636e\u7c7b\u578b\u8fd4\u56de\u5217\u7684\u6807\u51c6\u5dee\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\u6570\u636e\u96c6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",children:"MySQL [test]> select * from std_test;\n+------+------+\n| col0 | col1 |\n+------+------+\n|    0 |    0 |\n|    1 |    2 |\n|    2 |    4 |\n|    3 |    6 |\n|    4 |    8 |\n+------+------+\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8ba1\u7b97 ",(0,t.jsx)(n.code,{children:"col0"})," \u548c ",(0,t.jsx)(n.code,{children:"col1"})," \u7684\u6807\u51c6\u5dee\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"MySQL > select std(col0) as std_of_col0, std(col1) as std_of_col1 from std_test;\n+--------------------+--------------------+\n| std_of_col0        | std_of_col1        |\n+--------------------+--------------------+\n| 1.4142135623730951 | 2.8284271247461903 |\n+--------------------+--------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952e\u8bcd",children:"\u5173\u952e\u8bcd"}),"\n",(0,t.jsx)(n.p,{children:"STD"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(67294);const c=t.createContext({});function r(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:r(e),t.createElement(c.Provider,{value:i},n)}}}]);