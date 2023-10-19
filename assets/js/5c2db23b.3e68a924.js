"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13459],{31454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=s(85893),i=s(11151);const t={displayed_sidebar:"English"},r="Use the debuginfo file for debugging",d={id:"developers/debuginfo",title:"Use the debuginfo file for debugging",description:"Change description",source:"@site/versioned_docs/version-3.1/developers/debuginfo.md",sourceDirName:"developers",slug:"/developers/debuginfo",permalink:"/docs/developers/debuginfo",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/developers/debuginfo.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Rules",permalink:"/docs/developers/code-style-guides/thrift-guides"},next:{title:"Setup StarRocks FE development environment on IDEA",permalink:"/docs/developers/development-environment/IDEA"}},a={},c=[{value:"Change description",id:"change-description",level:2},{value:"Precautions",id:"precautions",level:2},{value:"How to use the debuginfo file",id:"how-to-use-the-debuginfo-file",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",img:"img",code:"code",strong:"strong",ol:"ol",li:"li",pre:"pre",blockquote:"blockquote",ul:"ul"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-the-debuginfo-file-for-debugging",children:"Use the debuginfo file for debugging"}),"\n",(0,o.jsx)(n.h2,{id:"change-description",children:"Change description"}),"\n",(0,o.jsxs)(n.p,{children:["From v2.5 onwards, the debuginfo file of BE is stripped from the StarRocks installation package to reduce the size and space usage of the installation package. You can see two packages at ",(0,o.jsx)(n.a,{href:"https://www.starrocks.io/download/community",children:"StarRocks website"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"debuginfo",src:s(91821).Z+"",width:"1778",height:"600"})}),"\n",(0,o.jsxs)(n.p,{children:["In this figure, you can click ",(0,o.jsx)(n.code,{children:"Get Debug Symbol files"})," to download the debuginfo package. ",(0,o.jsx)(n.code,{children:"StarRocks-2.5.10.tar.gz"})," is the installation package and you can click ",(0,o.jsx)(n.strong,{children:"Download"})," to download this package."]}),"\n",(0,o.jsx)(n.p,{children:"This change does not affect your download behavior or use of StarRocks. You can download only the installation package for cluster deployment and upgrade. The debuginfo package is only for developers to debug programs using GDB."}),"\n",(0,o.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,o.jsx)(n.p,{children:"GDB 12.1 or later is recommended for debugging."}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use-the-debuginfo-file",children:"How to use the debuginfo file"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Download and decompress the debuginfo package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-SQL",children:"wget https://releases.starrocks.io/starrocks/StarRocks-<sr_ver>.debuginfo.tar.gz\n\ntar -xzvf StarRocks-<sr_ver>.debuginfo.tar.gz\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<sr_ver>"})," with the version number of the StarRocks installation package you want to download."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Load the debuginfo file when you perform GDB debugging."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Method 1"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Shell",children:"objcopy --add-gnu-debuglink=starrocks_be.debug starrocks_be\n"})}),"\n",(0,o.jsx)(n.p,{children:"This operation associates the debug info file with your executable file."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Method 2"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Shell",children:"gdb -s starrocks_be.debug -e starrocks_be -c `core_file`\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The debuginfo file works well with perf and pstack. You can directly use perf and pstack without additional operations."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},91821:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/debug_info-5791bd74c1be19fa504931d9c8491749.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>t});var o=s(67294);const i=o.createContext({});function t(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:t(e),o.createElement(i.Provider,{value:d},n)}}}]);