"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[56478],{21558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=s(85893),o=s(11151);const l={displayed_sidebar:"English"},r="ST_Polygon,ST_PolyFromText,ST_PolygonFromText",i={id:"sql-reference/sql-functions/spatial-functions/st_polygon",title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/spatial-functions/st_polygon.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_polygon",permalink:"/docs/2.5/sql-reference/sql-functions/spatial-functions/st_polygon",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_polygon.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ST_Point",permalink:"/docs/2.5/sql-reference/sql-functions/spatial-functions/st_point"},next:{title:"ST_X",permalink:"/docs/2.5/sql-reference/sql-functions/spatial-functions/st_x"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"st_polygonst_polyfromtextst_polygonfromtext",children:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts a WKT (Well Known Text) to a corresponding polygon memory form."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"GEOMETRY ST_Polygon(VARCHAR wkt)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>l});var t=s(67294);const o=t.createContext({});function l(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(o.Provider,{value:i},n)}}}]);