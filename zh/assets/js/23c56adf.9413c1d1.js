"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[10852],{8754:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(85893),l=s(11151);const r={},t="\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",d={id:"administration/spill_to_disk",title:"\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06\u5927\u7b97\u5b50\u7684\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u843d\u76d8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/spill_to_disk.md",sourceDirName:"administration",slug:"/administration/spill_to_disk",permalink:"/zh/docs/administration/spill_to_disk",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/spill_to_disk.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u7ba1\u7406\u5185\u5b58",permalink:"/zh/docs/administration/Memory_management"},next:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/zh/docs/administration/Load_balance"}},c={},o=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",id:"\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2}];function a(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",strong:"strong",code:"code",pre:"pre",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",children:"\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06\u5927\u7b97\u5b50\u7684\u4e2d\u95f4\u8ba1\u7b97\u7ed3\u679c\u843d\u76d8\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u4f9d\u9760\u5185\u5b58\u8ba1\u7b97\u5904\u7406\u67e5\u8be2\u7684\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u4f8b\u5982 StarRocks\uff0c\u5b83\u4eec\u5728\u5927\u6570\u636e\u96c6\u4e0a\u5904\u7406\u805a\u5408\u3001\u6392\u5e8f\u4ee5\u53ca\u8fde\u63a5\u7b49\u8fd0\u7b97\u65f6\uff0c\u4f1a\u6d88\u8017\u5927\u91cf\u5185\u5b58\u8d44\u6e90\u3002\u5f53\u8fbe\u5230\u5185\u5b58\u9650\u5236\u65f6\uff0c\u8fd9\u4e9b\u67e5\u8be2\u5c06\u88ab\u5f3a\u5236\u7ec8\u6b62\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u4f7f\u7528\u6709\u9650\u7684\u5185\u5b58\u8d44\u6e90\u7a33\u5b9a\u5730\u5b8c\u6210\u67d0\u4e9b\u4efb\u52a1\uff0c\u751a\u81f3\u613f\u610f\u4e3a\u6b64\u727a\u7272\u90e8\u5206\u6027\u80fd\uff0c\u4f8b\u5982\uff0c\u6784\u5efa\u7269\u5316\u89c6\u56fe\u6216\u4f7f\u7528 INSERT INTO SELECT \u6267\u884c\u8f7b\u91cf\u7ea7 ETL\u3002\u8fd9\u7c7b\u4efb\u52a1\u4f1a\u5927\u91cf\u6d88\u8017\u5185\u5b58\u8d44\u6e90\uff0c\u8fdb\u800c\u963b\u585e\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u5176\u4ed6\u67e5\u8be2\u3002\u901a\u5e38\uff0c\u60a8\u9700\u8981\u901a\u8fc7\u624b\u52a8\u8c03\u6574\u53c2\u6570\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5e76\u4e14\u4f9d\u9760\u96c6\u7fa4\u8d44\u6e90\u9694\u79bb\u7b56\u7565\u6765\u63a7\u5236\u67e5\u8be2\u5e76\u53d1\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u4ec5\u8f83\u4e3a\u4e0d\u4fbf\uff0c\u5e76\u4e14\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f9d\u7136\u4f1a\u5931\u8d25\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece v3.0.1 \u5f00\u59cb\uff0cStarRocks \u652f\u6301\u5c06\u4e00\u4e9b\u5927\u7b97\u5b50\u7684\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u3002 \u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u5728\u727a\u7272\u4e00\u90e8\u5206\u6027\u80fd\u7684\u524d\u63d0\u4e0b\uff0c\u5927\u5e45\u964d\u4f4e\u5927\u89c4\u6a21\u6570\u636e\u67e5\u8be2\u4e0a\u7684\u5185\u5b58\u6d88\u8017\uff0c\u8fdb\u800c\u63d0\u9ad8\u6574\u4e2a\u7cfb\u7edf\u7684\u53ef\u7528\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u76ee\u524d\uff0cStarRocks \u652f\u6301\u5c06\u4ee5\u4e0b\u7b97\u5b50\u7684\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u805a\u5408\u7b97\u5b50"}),"\n",(0,i.jsx)(e.li,{children:"\u6392\u5e8f\u7b97\u5b50"}),"\n",(0,i.jsx)(e.li,{children:"Hash join\uff08LEFT JOIN\u3001RIGHT JOIN\u3001FULL JOIN\u3001OUTER JOIN\u3001SEMI JOIN \u4ee5\u53ca INNER JOIN\uff09\u7b97\u5b50"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8",children:"\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8"}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u636e\u4ee5\u4e0b\u6b65\u9aa4\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(e.strong,{children:"be.conf"})," \u4e2d\u6307\u5b9a\u843d\u76d8\u8def\u5f84 ",(0,i.jsx)(e.code,{children:"spill_local_storage_dir"}),"\uff0c\u5e76\u91cd\u542f\u96c6\u7fa4\u4f7f\u4fee\u6539\u751f\u6548\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Properties",children:"spill_local_storage_dir=/<dir_1>[;/<dir_2>]\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u60a8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u843d\u76d8\u8def\u5f84 ",(0,i.jsx)(e.code,{children:"spill_local_storage_dir"}),"\uff0c\u4e2d\u95f4\u4f7f\u7528\u5206\u53f7\uff08",(0,i.jsx)(e.code,{children:";"}),"\uff09\u5206\u9694\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4e3a\u6570\u636e\u5b58\u50a8\u548c\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u4f7f\u7528\u4e0d\u540c\u7684\u78c1\u76d8\u3002\u5f53\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u65f6\uff0c\u5199\u5165\u8d1f\u8f7d\u548c\u78c1\u76d8\u4f7f\u7528\u91cf\u53ef\u80fd\u4f1a\u663e\u8457\u589e\u52a0\u3002\u5982\u679c\u4f7f\u7528\u76f8\u540c\u7684\u78c1\u76d8\uff0c\u8fd9\u79cd\u6fc0\u589e\u4f1a\u5f71\u54cd\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u5176\u4ed6\u67e5\u8be2\u6216\u4efb\u52a1\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u5f00\u542f\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"SET enable_spill = true;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u901a\u8fc7 Session \u53d8\u91cf ",(0,i.jsx)(e.code,{children:"spill_mode"})," \u8bbe\u5b9a\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u6a21\u5f0f\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:'SET spill_mode = { "auto" | "force" };\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e2a\u6d89\u53ca\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u7684\u67e5\u8be2\u5728\u5b8c\u6210\u540e\uff0cStarRocks \u4f1a\u81ea\u52a8\u6e05\u9664\u5176\u4ea7\u751f\u7684\u843d\u76d8\u6570\u636e\u3002\u5982\u679c BE \u5728\u6e05\u9664\u6570\u636e\u4e4b\u524d\u5d29\u6e83\u5bfc\u81f4\u6570\u636e\u6b8b\u7559\uff0cStarRocks \u4f1a\u5728 BE \u91cd\u65b0\u542f\u52a8\u65f6\u6e05\u9664\u843d\u76d8\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u53d8\u91cf"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u9ed8\u8ba4\u503c"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u63cf\u8ff0"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"enable_spill"}),(0,i.jsx)(e.td,{children:"false"}),(0,i.jsxs)(e.td,{children:["\u662f\u5426\u542f\u7528\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u3002\u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"true"}),"\uff0cStarRocks \u4f1a\u5c06\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\uff0c\u4ee5\u51cf\u5c11\u5728\u67e5\u8be2\u4e2d\u5904\u7406\u805a\u5408\u3001\u6392\u5e8f\u6216\u8fde\u63a5\u7b97\u5b50\u65f6\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u3002"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"spill_mode"}),(0,i.jsx)(e.td,{children:"auto"}),(0,i.jsxs)(e.td,{children:["\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u7684\u6267\u884c\u65b9\u5f0f\u3002\u6709\u6548\u503c\uff1a",(0,i.jsx)(e.code,{children:"auto"}),"\uff1a\u8fbe\u5230\u5185\u5b58\u4f7f\u7528\u9608\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u843d\u76d8\u3002",(0,i.jsx)(e.code,{children:"force"}),"\uff1a\u65e0\u8bba\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u5982\u4f55\uff0cStarRocks \u90fd\u4f1a\u5f3a\u5236\u843d\u76d8\u6240\u6709\u76f8\u5173\u7b97\u5b50\u7684\u4e2d\u95f4\u7ed3\u679c\u3002\u6b64\u53d8\u91cf\u4ec5\u5728\u53d8\u91cf ",(0,i.jsx)(e.code,{children:"enable_spill"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.code,{children:"true"})," \u65f6\u751f\u6548\u3002"]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u65e0\u6cd5\u89e3\u51b3\u6240\u6709\u5185\u5b58\u4e0d\u8db3\u95ee\u9898\u3002\u4f8b\u5982\uff0cStarRocks \u65e0\u6cd5\u91ca\u653e\u7528\u4e8e\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7684\u5185\u5b58\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u901a\u5e38\uff0c\u6d89\u53ca\u4e2d\u95f4\u7ed3\u679c\u843d\u76d8\u7684\u67e5\u8be2\u53ef\u80fd\u8868\u660e\u5176\u67e5\u8be2\u65f6\u95f4\u6709\u6570\u91cf\u7ea7\u7684\u589e\u957f\u3002\u5efa\u8bae\u60a8\u901a\u8fc7\u8bbe\u7f6e Session \u53d8\u91cf ",(0,i.jsx)(e.code,{children:"query_timeout"})," \u9002\u5f53\u5ef6\u957f\u8fd9\u4e9b\u67e5\u8be2\u7684\u8d85\u65f6\u65f6\u95f4\u3002"]}),"\n"]})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(n){const e=i.useContext(l);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const t={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||t:r(n),i.createElement(l.Provider,{value:d},e)}}}]);