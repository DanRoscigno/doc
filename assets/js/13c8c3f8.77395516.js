"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[46362],{39135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const s={displayed_sidebar:"documentation"},i="bitmap_to_array",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_to_array",title:"bitmap_to_array",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_array",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_to_array.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"bitmap_remove",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_remove"},next:{title:"bitmap_to_base64",permalink:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_base64"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"bitmap_to_array",children:"bitmap_to_array"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Converts a BITMAP into a BIGINT array."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Haskell",children:" ARRAY<BIGINT> BITMAP_TO_ARRAY (bitmap)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"bitmap"}),": the bitmap you want to convert."]}),"\n",(0,a.jsx)(t.h2,{id:"return-value",children:"Return value"}),"\n",(0,a.jsx)(t.p,{children:"Returns a BIGINT array."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:"select bitmap_to_array(bitmap_from_string(\"1, 7\"));\n+----------------------------------------------+\n| bitmap_to_array(bitmap_from_string('1, 7'))  |\n+----------------------------------------------+\n| [1,7]                                        |\n+----------------------------------------------+\n\nselect bitmap_to_array(NULL);\n+-----------------------+\n| bitmap_to_array(NULL) |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var a=n(67294);const r=a.createContext({});function s(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:s(e),a.createElement(r.Provider,{value:o},t)}}}]);