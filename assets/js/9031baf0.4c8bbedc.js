"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[42882],{14246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const a={displayed_sidebar:"English"},r="to_bitmap",o={id:"sql-reference/sql-functions/bitmap-functions/to_bitmap",title:"to_bitmap",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",sourceDirName:"sql-reference/sql-functions/bitmap-functions",slug:"/sql-reference/sql-functions/bitmap-functions/to_bitmap",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/to_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/bitmap-functions/to_bitmap.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"bitmap_xor",permalink:"/docs/2.1/sql-reference/sql-functions/bitmap-functions/bitmap_xor"},next:{title:"CAST",permalink:"/docs/2.1/sql-reference/sql-functions/cast"}},c={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"to_bitmap",children:"to_bitmap"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Haskell",children:"BITMAP TO_BITMAP(expr)\n"})}),"\n",(0,s.jsx)(t.p,{children:"The input is unsigned bigint with the value ranging from 0 to 18446744073709551615, and the output is bitmap containing this element. This function is mainly used for the stream load task to import integer fields into the bitmap field of the StarRocks table. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'cat data | curl --location-trusted -u user:passwd -T - \\\n    -H "columns: dt,page,user_id, user_id=to_bitmap(user_id)" \\\n    http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",metastring:"Text",children:"MySQL > select bitmap_count(to_bitmap(10));\n+-----------------------------+\n| bitmap_count(to_bitmap(10)) |\n+-----------------------------+\n|                           1 |\n+-----------------------------+\n"})}),"\n",(0,s.jsx)(t.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(t.p,{children:"TO_BITMAP,BITMAP"})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},t)}}}]);