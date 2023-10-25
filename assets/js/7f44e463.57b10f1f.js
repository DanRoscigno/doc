"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[23570],{43417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(85893),i=t(11151);const o={displayed_sidebar:"English"},r="ST_Point",c={id:"sql-reference/sql-functions/spatial-functions/st_point",title:"ST_Point",description:"description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-functions/spatial-functions/st_point.md",sourceDirName:"sql-reference/sql-functions/spatial-functions",slug:"/sql-reference/sql-functions/spatial-functions/st_point",permalink:"/docs/2.2/sql-reference/sql-functions/spatial-functions/st_point",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/spatial-functions/st_point.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ST_LineFromText,ST_LineStringFromText",permalink:"/docs/2.2/sql-reference/sql-functions/spatial-functions/st_linefromtext"},next:{title:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",permalink:"/docs/2.2/sql-reference/sql-functions/spatial-functions/st_polygon"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"st_point",children:"ST_Point"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"POINT ST_Point(DOUBLE x, DOUBLE y)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The st_point returns the corresponding Point with the given X-coordinate and Y-coordinate. At the moment this value only makes sense on a spherical set. X/Y corresponds to longitude/latitude."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Caution!!! If you directly select ST_Point(), it  may get stuck."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"ST_POINT,ST,POINT"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(67294);const i=s.createContext({});function o(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:c},n)}}}]);