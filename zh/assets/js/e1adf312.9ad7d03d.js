"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69122],{64193:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(85893),i=s(11151);const c={displayed_sidebar:"Chinese31"},r="ST_Distance_Sphere",l={id:"sql-reference/sql-functions/spatial-functions/st_distance_sphere",title:"ST_Distance_Sphere",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_distance_sphere",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_distance_sphere",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"ST_Contains",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_contains"},next:{title:"ST_GeometryFromText, ST_GeomFromText",permalink:"/doc/zh/docs/3.0/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"}},a={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"st_distance_sphere",children:"ST_Distance_Sphere"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba1\u7b97\u5730\u7403\u4e24\u70b9\u4e4b\u95f4\u7684\u7403\u9762\u8ddd\u79bb\uff0c\u5355\u4f4d\u662f\u300c\u7c73\u300d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"ST_Distance_Sphere(x_lng, x_lat, y_lng, y_lat)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x_lng"}),": X \u70b9\u7684\u7ecf\u5ea6\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"x_lat"}),": X \u70b9\u7684\u7eac\u5ea6\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"y_lng"}),": Y \u70b9\u7684\u7ecf\u5ea6\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"y_lat"}),": Y \u70b9\u7684\u7eac\u5ea6\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a DOUBLE\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                          7336.913554999592 |\n+----------------------------------------------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var t=s(67294);const i=t.createContext({});function c(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:c(e),t.createElement(i.Provider,{value:l},n)}}}]);