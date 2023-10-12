"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42168],{26784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(85893),o=t(11151);const i={displayed_sidebar:"documentation"},r="ST_Point",c={id:"sql-reference/sql-functions/spatial-functions/st_point",title:"ST_Point",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/spatial-functions/st_point.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_point",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_point",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-functions/spatial-functions/st_point.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"ST_LineFromText,ST_LineStringFromText",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_linefromtext"},next:{title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",permalink:"/doc/docs/2.5/sql-reference/sql-functions/spatial-functions/st_polygon"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_point",children:"ST_Point"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the corresponding Point with the given X-coordinate and Y-coordinate. At the moment this value only makes sense on a spherical set. X/Y corresponds to longitude/latitude."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caution"})}),"\n",(0,s.jsx)(n.p,{children:"If you directly select ST_Point(), it may get stuck."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"POINT ST_Point(DOUBLE x, DOUBLE y)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ST_POINT,ST,POINT"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const o=s.createContext({});function i(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(o.Provider,{value:c},n)}}}]);