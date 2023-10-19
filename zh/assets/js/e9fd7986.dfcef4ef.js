"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37531],{49601:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=l(85893),s=l(11151);const r={displayed_sidebar:"Chinese"},c="map_filter",i={id:"sql-reference/sql-functions/map-functions/map_filter",title:"map_filter",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/map-functions/map_filter.md",sourceDirName:"sql-reference/sql-functions/map-functions",slug:"/sql-reference/sql-functions/map-functions/map_filter",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_filter",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/map-functions/map_filter.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"map_concat",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_concat"},next:{title:"map_from_arrays",permalink:"/zh/docs/sql-reference/sql-functions/map-functions/map_from_arrays"}},d={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0d\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f",id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3},{value:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f",id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",level:3}];function t(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"map_filter",children:"map_filter"}),"\n",(0,a.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,a.jsxs)(n.p,{children:["\u6839\u636e\u8bbe\u5b9a\u7684\u8fc7\u6ee4\u51fd\u6570\u8fd4\u56de MAP \u4e2d\u5339\u914d\u7684 Key-value \u5bf9\u3002\u8be5\u8fc7\u6ee4\u51fd\u6570\u53ef\u4ee5\u662f\u666e\u901a\u7684 Boolean \u6570\u7ec4\uff0c\u4e5f\u53ef\u4ee5\u662f\u7075\u6d3b\u7684 Lambda \u51fd\u6570\u3002\u6709\u5173 Lambda \u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,a.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/Lambda_expression",children:"Lambda expression"}),"\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u4ece 3.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-Haskell",children:"MAP map_filter(any_map, array<boolean>)\nMAP map_filter(lambda_func, any_map)\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"map_filter(any_map, array<boolean>)"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de ",(0,a.jsx)(n.code,{children:"any_map"})," \u4e2d\u4e0e ",(0,a.jsx)(n.code,{children:"array<boolean>"})," \u4e00\u4e00\u5bf9\u5e94\u4f4d\u7f6e\u4e3a ",(0,a.jsx)(n.code,{children:"true"})," \u7684 key-value \u5bf9\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"map_filter(lambda_func, any_map)"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de ",(0,a.jsx)(n.code,{children:"any_map"})," \u4e2d\u5e94\u7528 ",(0,a.jsx)(n.code,{children:"lambda_func"})," \u540e\u503c\u4e3a ",(0,a.jsx)(n.code,{children:"true"})," \u7684 key-value \u5bf9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"any_map"}),": \u8981\u8fdb\u884c\u8fc7\u6ee4\u8fd0\u7b97\u7684 MAP \u503c\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"array<boolean>"}),": \u5bf9 ",(0,a.jsx)(n.code,{children:"any_map"})," \u8fdb\u884c\u8fc7\u6ee4\u7684 Boolean \u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"lambda_func"}),": \u5bf9 ",(0,a.jsx)(n.code,{children:"any_map"})," \u8fdb\u884c\u8fc7\u6ee4\u7684 Lambda \u51fd\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd4\u56de map, \u7c7b\u578b\u4e0e\u8f93\u5165\u7684 ",(0,a.jsx)(n.code,{children:"any_map"})," \u76f8\u540c\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c ",(0,a.jsx)(n.code,{children:"any_map"})," \u662f NULL\uff0c\u7ed3\u679c\u4e5f\u662f NULL; \u5982\u679c ",(0,a.jsx)(n.code,{children:"array<boolean>"})," \u662f null\uff0c\u7ed3\u679c\u662f\u7a7a MAP\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c Map \u4e2d\u7684\u67d0\u4e2a Key \u6216 Value \u662f NULL\uff0c\u8be5 NULL \u503c\u6b63\u5e38\u53c2\u4e0e\u8ba1\u7b97\u5e76\u8fd4\u56de\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Lambda \u51fd\u6570\u91cc\u5fc5\u987b\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u4ee3\u8868 Key\uff0c\u7b2c\u4e8c\u4e2a\u4ee3\u8868 Value\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h3,{id:"\u4e0d\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4e0d\u4f7f\u7528 lambda \u8868\u8fbe\u5f0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/zh/docs/sql-reference/sql-functions/map-functions/map_from_arrays",children:"map_from_arrays"})," \u751f\u6210\u4e00\u4e2a map \u503c ",(0,a.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),"\u3002\u7136\u540e\u5c06 ",(0,a.jsx)(n.code,{children:"array<boolean>"})," \u5e94\u7528\u5230 Map \u91cc\u7684\u6bcf\u4e2a key-value \u5bf9\uff0c\u8fd4\u56de\u4e3a\u7ed3\u679c true \u7684 key-value \u5bf9\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"mysql> select map_filter(col_map, array<boolean>[0,0,0,1,1]) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+----------------------------------------------------+\n| map_filter(col_map, ARRAY<BOOLEAN>[0, 0, 0, 1, 1]) |\n+----------------------------------------------------+\n| {null:\"abc\"}                                       |\n+----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_filter(null, array<boolean>[0,0,0,1,1]);\n+-------------------------------------------------+\n| map_filter(NULL, ARRAY<BOOLEAN>[0, 0, 0, 1, 1]) |\n+-------------------------------------------------+\n| NULL                                            |\n+-------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select map_filter(col_map, null) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+---------------------------+\n| map_filter(col_map, NULL) |\n+---------------------------+\n| {}                        |\n+---------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u4f7f\u7528-lambda-\u8868\u8fbe\u5f0f",children:"\u4f7f\u7528 Lambda \u8868\u8fbe\u5f0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 map_from_arrays() \u751f\u6210\u4e00\u4e2a Map \u503c ",(0,a.jsx)(n.code,{children:'{1:"ab",3:"cdd",2:null,null:"abc"}'}),"\u3002\u7136\u540e\u5c06 Lambda \u51fd\u6570\u5e94\u7528\u5230 Map \u4e2d\u7684\u6bcf\u4e2a key-value \u5bf9\uff0c\u8fd4\u56de Value \u975e null \u7684 key-value \u5bf9\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"mysql> select map_filter((k,v) -> v is not null,col_map) from (select map_from_arrays([1,3,null,2,null],['ab','cdd',null,null,'abc']) as col_map)A;\n+------------------------------------------------+\n| map_filter((k,v) -> v is not null, col_map)    |\n+------------------------------------------------+\n| {1:\"ab\",3:\"cdd\",null:'abc'}                    |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}},11151:(e,n,l)=>{l.d(n,{Zo:()=>i,ah:()=>r});var a=l(67294);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:l}){let i;return i=l?"function"==typeof e?e({}):e||c:r(e),a.createElement(s.Provider,{value:i},n)}}}]);