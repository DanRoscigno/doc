"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68904],{54232:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=e(85893),s=e(11151);const r={displayed_sidebar:"English"},a="bitmap_from_string",o={id:"sql-reference/sql-functions/bitmap-functions/bitmap_from_string",title:"bitmap_from_string",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-functions/bitmap-functions/bitmap_from_string.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",permalink:"/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_from_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/bitmap_from_string.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_empty",permalink:"/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_empty"},next:{title:"bitmap_has_any",permalink:"/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_has_any"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"keywords",id:"keywords",level:2}];function p(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,s.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"bitmap_from_string",children:"bitmap_from_string"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:'Converts a string into a BITMAP. The string is composed of a set of UINT32 numbers separated by commas. For example, the "0, 1, 2" string will be converted into a Bitmap, in which bits 0, 1 and 2 are set. If the input field is invalid, NULL will be returned.'}),"\n",(0,i.jsxs)(t.p,{children:["This function deduplicates the input string during the conversion. It must be used with other functions, such as ",(0,i.jsx)(t.a,{href:"/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_to_string",children:"bitmap_to_string"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Haskell",children:"BITMAP BITMAP_FROM_STRING(VARCHAR input)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"\n-- The input is empty and an empty value is returned.\n\nMySQL > select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\n-- `0,1,2` is returned.\n\nMySQL > select bitmap_to_string(bitmap_from_string(\"0, 1, 2\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 2')) |\n+-------------------------------------------------+\n| 0,1,2                                           |\n+-------------------------------------------------+\n\n-- `-1` is an invalid input and NULL is returned.\n\nMySQL > select bitmap_to_string(bitmap_from_string(\"-1, 0, 1, 2\"));\n+-----------------------------------+\n| bitmap_from_string('-1, 0, 1, 2') |\n+-----------------------------------+\n| NULL                              |\n+-----------------------------------+\n\n-- The input string is deduplicated.\n\nMySQL > select bitmap_to_string(bitmap_from_string(\"0, 1, 1\"));\n+-------------------------------------------------+\n| bitmap_to_string(bitmap_from_string('0, 1, 1')) |\n+-------------------------------------------------+\n| 0,1                                             |\n+-------------------------------------------------+\n"})}),"\n",(0,i.jsx)(t.h2,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.p,{children:"BITMAP_FROM_STRING,BITMAP"})]})}const m=function(n={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),n.components);return t?(0,i.jsx)(t,Object.assign({},n,{children:(0,i.jsx)(p,n)})):p(n)}},11151:(n,t,e)=>{e.d(t,{Zo:()=>o,ah:()=>r});var i=e(67294);const s=i.createContext({});function r(n){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const a={};function o({components:n,children:t,disableParentContext:e}){let o;return o=e?"function"==typeof n?n({}):n||a:r(n),i.createElement(s.Provider,{value:o},t)}}}]);