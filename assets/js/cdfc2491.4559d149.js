"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37979],{85323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const r={displayed_sidebar:"documentation"},a="ST_Distance_Sphere",c={id:"sql-reference/sql-functions/spatial-functions/st_distance_sphere",title:"ST_Distance_Sphere",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_distance_sphere",permalink:"/doc/docs/sql-reference/sql-functions/spatial-functions/st_distance_sphere",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_distance_sphere.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ST_Contains",permalink:"/doc/docs/sql-reference/sql-functions/spatial-functions/st_contains"},next:{title:"ST_GeometryFromText,ST_GeomFromText",permalink:"/doc/docs/sql-reference/sql-functions/spatial-functions/st_geometryfromtext"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"st_distance_sphere",children:"ST_Distance_Sphere"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:'Calculates the spherical distance between two points on the Earth in "meters". The parameters inputted are longitude at X, latitude at X, longitude at Y, latitude at Y.'}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE x_lat)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:r(e),s.createElement(i.Provider,{value:c},t)}}}]);