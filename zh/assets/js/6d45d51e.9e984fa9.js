"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73909],{5528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(85893),s=r(11151);const i={},d="Rules",o={id:"developers/code-style-guides/thrift-guides",title:"Rules",description:"Never use required",source:"@site/versioned_docs/version-3.1/developers/code-style-guides/thrift-guides.md",sourceDirName:"developers/code-style-guides",slug:"/developers/code-style-guides/thrift-guides",permalink:"/zh/docs/developers/code-style-guides/thrift-guides",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/developers/code-style-guides/thrift-guides.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Rules",permalink:"/zh/docs/developers/code-style-guides/protobuf-guides"},next:{title:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",permalink:"/zh/docs/developers/debuginfo"}},c={},l=[{value:"Never use required",id:"never-use-required",level:2},{value:"Never change the ordinal",id:"never-change-the-ordinal",level:2},{value:"file name",id:"file-name",level:2},{value:"struct name",id:"struct-name",level:2},{value:"field name",id:"field-name",level:2}];function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"rules",children:"Rules"}),"\n",(0,n.jsx)(t.h2,{id:"never-use-required",children:"Never use required"}),"\n",(0,n.jsx)(t.p,{children:"As the project involving, any fields may become optional. But if it is defined as required, it can not be removed."}),"\n",(0,n.jsxs)(t.p,{children:["So ",(0,n.jsx)(t.code,{children:"required"})," should not be used."]}),"\n",(0,n.jsx)(t.h2,{id:"never-change-the-ordinal",children:"Never change the ordinal"}),"\n",(0,n.jsx)(t.p,{children:"To be back compatible, the ordinal of the field SHOULD NOT be changed."}),"\n",(0,n.jsx)(t.h1,{id:"naming",children:"Naming"}),"\n",(0,n.jsx)(t.h2,{id:"file-name",children:"file name"}),"\n",(0,n.jsxs)(t.p,{children:["The names of messages are all lowercase, with underscores between words.\nFiles should end in ",(0,n.jsx)(t.code,{children:".thrift"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"my_struct.thrift            // Good\nMyStruct.thrift             // Bad\nmy_struct.proto             // Bad\n"})}),"\n",(0,n.jsx)(t.h2,{id:"struct-name",children:"struct name"}),"\n",(0,n.jsxs)(t.p,{children:["Struct names start with a capital letter ",(0,n.jsx)(t.code,{children:"T"})," and have a capital letter for each new word, with no underscores: TMyStruct"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"struct TMyStruct;           // Good\nstruct MyStruct;            // Bad\nstruct TMy_Struct;          // Bad\nstruct TmyStruct;           // Bad\n"})}),"\n",(0,n.jsx)(t.h2,{id:"field-name",children:"field name"}),"\n",(0,n.jsx)(t.p,{children:"The names of struct members are all lowercase, with underscores between words."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"1: optional i64 my_field;       // Good\n1: optional i64 myField;        // Bad\n"})})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},11151:(e,t,r)=>{r.d(t,{Zo:()=>o,ah:()=>i});var n=r(67294);const s=n.createContext({});function i(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||d:i(e),n.createElement(s.Provider,{value:o},t)}}}]);