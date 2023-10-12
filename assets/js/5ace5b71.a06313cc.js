"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[77957],{48941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(85893),o=t(11151);const r={displayed_sidebar:"documentation"},i="ST_Polygon,ST_PolyFromText,ST_PolygonFromText",l={id:"sql-reference/sql-functions/spatial-functions/st_polygon",title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_polygon",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_polygon",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/spatial-functions/st_polygon.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ST_Point",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_point"},next:{title:"ST_X",permalink:"/doc/docs/3.0/sql-reference/sql-functions/spatial-functions/st_x"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_polygonst_polyfromtextst_polygonfromtext",children:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Converts a WKT (Well Known Text) to a corresponding polygon memory form."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"GEOMETRY ST_Polygon(VARCHAR wkt)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var s=t(67294);const o=s.createContext({});function r(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:r(e),s.createElement(o.Provider,{value:l},n)}}}]);