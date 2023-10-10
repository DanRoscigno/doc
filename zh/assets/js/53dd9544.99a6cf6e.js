"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69831],{20853:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(85893),l=s(11151);const r={},t="\u6587\u4ef6\u7ba1\u7406\u5668",c={id:"administration/filemanager",title:"\u6587\u4ef6\u7ba1\u7406\u5668",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u6587\u4ef6\u7ba1\u7406\u5668\u521b\u5efa\u3001\u67e5\u770b\u548c\u5220\u9664\u6587\u4ef6\u3002StarRocks \u5141\u8bb8\u7528\u6237\u5c06\u516c\u94a5\u3001\u79c1\u94a5\u548c\u8bc1\u4e66\u6587\u4ef6\u7b49\u6587\u4ef6\u4e0a\u4f20\u5e76\u4fdd\u5b58\u81f3\u7cfb\u7edf\u5185\uff0c\u8fdb\u800c\u5728\u547d\u4ee4\u4e2d\u5f15\u7528\u6216\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/administration/filemanager.md",sourceDirName:"administration",slug:"/administration/filemanager",permalink:"/zh/docs/3.0/administration/filemanager",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/administration/filemanager.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u542f\u7528 FQDN \u8bbf\u95ee",permalink:"/zh/docs/3.0/administration/enable_fqdn"},next:{title:"Information Schema",permalink:"/zh/docs/3.0/administration/information_schema"}},d={},a=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u521b\u5efa\u6587\u4ef6",id:"\u521b\u5efa\u6587\u4ef6",level:2},{value:"\u67e5\u770b\u6587\u4ef6",id:"\u67e5\u770b\u6587\u4ef6",level:2},{value:"\u5220\u9664\u6587\u4ef6",id:"\u5220\u9664\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u6587\u4ef6",id:"\u4f7f\u7528\u6587\u4ef6",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",ul:"ul",li:"li",a:"a",blockquote:"blockquote"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6587\u4ef6\u7ba1\u7406\u5668",children:"\u6587\u4ef6\u7ba1\u7406\u5668"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u4f7f\u7528\u6587\u4ef6\u7ba1\u7406\u5668\u521b\u5efa\u3001\u67e5\u770b\u548c\u5220\u9664\u6587\u4ef6\u3002StarRocks \u5141\u8bb8\u7528\u6237\u5c06\u516c\u94a5\u3001\u79c1\u94a5\u548c\u8bc1\u4e66\u6587\u4ef6\u7b49\u6587\u4ef6\u4e0a\u4f20\u5e76\u4fdd\u5b58\u81f3\u7cfb\u7edf\u5185\uff0c\u8fdb\u800c\u5728\u547d\u4ee4\u4e2d\u5f15\u7528\u6216\u8bbf\u95ee\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6587\u4ef6"}),"\uff1a\u662f\u6307\u521b\u5efa\u5e76\u4fdd\u5b58\u5728 StarRocks \u4e2d\u7684\u6587\u4ef6\u3002\u6bcf\u4e2a\u6587\u4ef6\u90fd\u6709\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u6807\u8bc6\u7b26 (",(0,i.jsx)(n.code,{children:"FileId"}),")\u3002\u4e00\u4e2a\u6587\u4ef6\u7531\u6570\u636e\u5e93\u540d\u79f0 (",(0,i.jsx)(n.code,{children:"database"}),")\u3001\u7c7b\u522b (",(0,i.jsx)(n.code,{children:"catalog"}),") \u548c\u6587\u4ef6\u540d (",(0,i.jsx)(n.code,{children:"file_name"}),") \u5171\u540c\u5b9a\u4f4d\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u6709\u62e5\u6709 System \u7ea7 FILE \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u548c\u5220\u9664\u6587\u4ef6\u3002\u5f53\u4e00\u4e2a\u6587\u4ef6\u5f52\u5c5e\u4e8e\u4e00\u4e2a\u6570\u636e\u5e93\u65f6\uff0c\u5bf9\u8be5\u6570\u636e\u5e93\u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6587\u4ef6\u7ba1\u7406\u5668\u524d\uff0c\u60a8\u9700\u8981\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["FE \u914d\u7f6e","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"small_file_dir"}),"\uff1a\u7528\u4e8e\u5b58\u653e\u4e0a\u4f20\u6587\u4ef6\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u8def\u5f84\u4e3a FE \u8fd0\u884c\u76ee\u5f55\u7684 small_files/ \u76ee\u5f55\u3002\u60a8\u9700\u8981\u5728 ",(0,i.jsx)(n.strong,{children:"fe.conf"})," \u6587\u4ef6\u4e2d\u4fee\u6539\u8be5\u914d\u7f6e\u9879\uff0c\u7136\u540e\u91cd\u542f FE \u540e\u751f\u6548\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_small_file_size_bytes"}),"\uff1a\u5355\u4e2a\u6587\u4ef6\u5927\u5c0f\u9650\u5236\u3002\u5355\u4f4d\u4e3a\u5b57\u8282\uff0c\u9ed8\u8ba4\u4e3a 1 MB\u3002\u5927\u4e8e\u8be5\u53c2\u6570\u503c\u7684\u6587\u4ef6\u65e0\u6cd5\u521b\u5efa\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN%20SET%20CONFIG",children:"ADMIN SET CONFIG"})," \u8bed\u53e5\u5728\u7ebf\u4fee\u6539\u8be5\u914d\u7f6e\u9879\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_small_file_number"}),"\uff1a\u4e00\u4e2a StarRocks \u96c6\u7fa4\u652f\u6301\u7684\u603b\u6587\u4ef6\u6570\u91cf\u3002\u9ed8\u8ba4\u4e3a 100\u3002\u5f53\u521b\u5efa\u7684\u6587\u4ef6\u6570\u91cf\u8d85\u8fc7\u8be5\u53c2\u6570\u503c\uff0c\u540e\u7eed\u7684\u521b\u5efa\u5c06\u4f1a\u88ab\u62d2\u7edd\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ADMIN SET CONFIG \u8bed\u53e5\u5728\u7ebf\u4fee\u6539\u8be5\u914d\u7f6e\u9879\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8bf4\u660e\uff1a\u6587\u4ef6\u6570\u91cf\u548c\u5927\u5c0f\u7684\u589e\u52a0\u4f1a\u5bfc\u81f4 FE \u5185\u5b58\u4f7f\u7528\u91cf\u589e\u52a0\uff0c\u975e\u5fc5\u8981\u4e0d\u63a8\u8350\u589e\u5927 ",(0,i.jsx)(n.code,{children:"max_small_file_size_bytes"})," \u548c ",(0,i.jsx)(n.code,{children:"max_small_file_number"})," \u7684\u53c2\u6570\u503c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["BE \u914d\u7f6e\uff1a\u5728 ",(0,i.jsx)(n.strong,{children:"be.conf"})," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u914d\u7f6e\u9879 ",(0,i.jsx)(n.code,{children:"small_file_dir"}),"\u3002",(0,i.jsx)(n.code,{children:"small_file_dir"})," \u662f\u7528\u4e8e\u5b58\u653e\u6587\u4ef6\u7ba1\u7406\u5668\u4e0b\u8f7d\u7684\u6587\u4ef6\u7684\u76ee\u5f55\u3002\u9ed8\u8ba4\u503c\u4e3a BE \u8fd0\u884c\u76ee\u5f55\u7684 ",(0,i.jsx)(n.code,{children:"lib/small_files/"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u521b\u5efa\u6587\u4ef6",children:"\u521b\u5efa\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 CREATE FILE \u8bed\u53e5\u521b\u5efa\u6587\u4ef6\u3002\u5177\u4f53\u7684\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,i.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CREATE%20FILE",children:"CREATE FILE"}),"\u3002\u6587\u4ef6\u521b\u5efa\u540e\u4f1a\u81ea\u52a8\u4e0a\u4f20\u5e76\u6301\u4e45\u5316\u5728 StarRocks \u96c6\u7fa4\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u67e5\u770b\u6587\u4ef6",children:"\u67e5\u770b\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 SHOW FILE \u8bed\u53e5\u67e5\u770b\u4fdd\u5b58\u5728\u6570\u636e\u5e93\u4e2d\u7684\u6587\u4ef6\u7684\u4fe1\u606f\u3002\u5177\u4f53\u7684\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,i.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW%20FILE",children:"SHOW FILE"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5220\u9664\u6587\u4ef6",children:"\u5220\u9664\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 DROP FILE \u8bed\u53e5\u5220\u9664\u6587\u4ef6\u3002\u5177\u4f53\u7684\u8bed\u6cd5\u548c\u53c2\u6570\u7b49\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,i.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/DROP%20FILE",children:"DROP FILE"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u6587\u4ef6",children:"\u4f7f\u7528\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982 FE \u8981\u4f7f\u7528\u6587\u4ef6\uff0cSmallFileMgr \u7c7b\u4f1a\u76f4\u63a5\u5c06 FE \u5185\u5b58\u4e2d\u7684\u6570\u636e\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6\uff0c\u5b58\u50a8\u5728\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\uff0c\u5e76\u8fd4\u56de\u672c\u5730\u6587\u4ef6\u7684\u8def\u5f84\u4f9b FE \u4f7f\u7528\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982 BE \u8981\u4f7f\u7528\u6587\u4ef6\uff0cBE \u4f1a\u901a\u8fc7 FE \u7684 HTTP \u63a5\u53e3 ",(0,i.jsx)(n.strong,{children:"/api/get_small_file"})," \u5c06\u6587\u4ef6\u4e0b\u8f7d\u5230 BE \u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\u4f7f\u7528\u3002\u540c\u65f6\uff0cBE \u4e5f\u4f1a\u5728\u5185\u5b58\u4e2d\u8bb0\u5f55\u5f53\u524d\u5df2\u7ecf\u4e0b\u8f7d\u8fc7\u7684\u6587\u4ef6\u7684\u4fe1\u606f\u3002\u5f53 BE \u8bf7\u6c42\u4f7f\u7528\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u5148\u67e5\u770b\u672c\u5730\u6587\u4ef6\u662f\u5426\u5b58\u5728\u8be5\u6587\u4ef6\u5e76\u5bf9\u8be5\u6587\u4ef6\u8fdb\u884c\u6821\u9a8c\u3002\u5982\u679c\u6821\u9a8c\u901a\u8fc7\uff0c\u5219\u8fd4\u56de\u672c\u5730\u6587\u4ef6\u8def\u5f84\u3002\u5982\u679c\u6821\u9a8c\u5931\u8d25\uff0c\u5219\u4f1a\u5220\u9664\u672c\u5730\u6587\u4ef6\uff0c\u91cd\u65b0\u4ece FE \u4e0b\u8f7d\u3002\u5f53 BE \u91cd\u542f\u65f6\uff0c\u4f1a\u9884\u5148\u52a0\u8f7d\u672c\u5730\u7684\u6587\u4ef6\u5230\u5185\u5b58\u4e2d\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||t:r(e),i.createElement(l.Provider,{value:c},n)}}}]);