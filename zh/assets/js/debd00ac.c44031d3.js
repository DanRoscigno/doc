"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28683],{18278:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=s(85893),i=s(11151);const d={},t="CREATE RESOURCE GROUP",c={id:"sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",title:"CREATE RESOURCE GROUP",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE FILE",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE FILE"},next:{title:"CREATE STORAGE VOLUME",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME"}},l={},h=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const r=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"create-resource-group",children:"CREATE RESOURCE GROUP"}),"\n",(0,n.jsx)(r.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,n.jsxs)(r.p,{children:["\u521b\u5efa\u8d44\u6e90\u7ec4\u3002\u5173\u4e8e\u8d44\u6e90\u7ec4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1",(0,n.jsx)(r.a,{href:"/doc/zh/docs/administration/resource_group",children:"\u8d44\u6e90\u9694\u79bb"}),"\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP resource_group_name\nTO CLASSIFIER1, CLASSIFIER2, ...\nWITH resource_limit\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"resource_group_name"}),"\uff1a\u9700\u8981\u521b\u5efa\u7684\u8d44\u6e90\u7ec4\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CLASSIFIER"}),"\uff1a\u7528\u4e8e\u533a\u5206\u9700\u8981\u88ab\u65bd\u52a0\u8d44\u6e90\u9650\u5236\u7684\u67e5\u8be2\u7684\u5206\u7c7b\u5668\uff0c\u91c7\u7528 ",(0,n.jsx)(r.code,{children:'"key"="value"'})," \u5bf9\u5f62\u5f0f\u3002\u60a8\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u8d44\u6e90\u7ec4\u8bbe\u7f6e\u591a\u4e2a\u5206\u7c7b\u5668\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u5206\u7c7b\u5668\u53ef\u4ee5\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"user"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u7528\u6237\u540d\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"role"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u7528\u6237\u6240\u5c5e\u89d2\u8272\u540d\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query_type"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsxs)(r.td,{children:["\u9700\u8981\u88ab\u65bd\u52a0\u8d44\u6e90\u9650\u5236\u7684\u67e5\u8be2\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 ",(0,n.jsx)(r.code,{children:"SELECT"})," \u4e0e ",(0,n.jsx)(r.code,{children:"INSERT"})," (2.5 \u53ca\u4ee5\u540e)\u3002\u5f53 ",(0,n.jsx)(r.code,{children:"query_type"})," \u4e3a ",(0,n.jsx)(r.code,{children:"insert"})," \u7684\u8d44\u6e90\u7ec4\u6709\u5bfc\u5165\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u5f53\u524d BE \u8282\u70b9\u4f1a\u4e3a\u5176\u9884\u7559\u76f8\u5e94\u7684\u8ba1\u7b97\u8d44\u6e90\u3002"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"source_ip"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u53d1\u8d77\u67e5\u8be2\u7684 IP \u5730\u5740\uff0c\u7c7b\u578b\u4e3a CIDR\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"db"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u67e5\u8be2\u6240\u8bbf\u95ee\u7684\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u4e3a\u9017\u53f7\uff08,\uff09\u5206\u5272\u7684\u5b57\u7b26\u4e32\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"resource_limit"}),"\uff1a\u4e3a\u5f53\u524d\u8d44\u6e90\u7ec4\u8bbe\u7f6e\u7684\u8d44\u6e90\u9650\u5236\uff0c\u91c7\u7528 ",(0,n.jsx)(r.code,{children:'"key"="value"'})," \u5bf9\u5f62\u5f0f\u3002\u60a8\u53ef\u4ee5\u4e3a\u540c\u4e00\u4e2a\u8d44\u6e90\u7ec4\u8bbe\u7f6e\u591a\u4e2a\u8d44\u6e90\u9650\u5236\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"\u8d44\u6e90\u9650\u5236\u53ef\u4ee5\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u53c2\u6570"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u5fc5\u9009"})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"\u8bf4\u660e"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cpu_core_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u8be5\u8d44\u6e90\u7ec4\u5728\u5f53\u524d BE \u8282\u70b9\u53ef\u4f7f\u7528\u7684 CPU \u6838\u6570\u8f6f\u4e0a\u9650\uff0c\u5b9e\u9645\u4f7f\u7528\u7684 CPU \u6838\u6570\u4f1a\u6839\u636e\u8282\u70b9\u8d44\u6e90\u7a7a\u95f2\u7a0b\u5ea6\u6309\u6bd4\u4f8b\u5f39\u6027\u4f38\u7f29\u3002\u53d6\u503c\u4e3a\u6b63\u6574\u6570\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mem_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u8be5\u8d44\u6e90\u7ec4\u5728\u5f53\u524d BE \u8282\u70b9\u53ef\u4f7f\u7528\u4e8e\u67e5\u8be2\u7684\u5185\u5b58\uff08query_pool\uff09\u5360\u603b\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff08%\uff09\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0,1)\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"concurrency_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u8d44\u6e90\u7ec4\u4e2d\u5e76\u53d1\u67e5\u8be2\u6570\u7684\u4e0a\u9650\uff0c\u7528\u4ee5\u9632\u6b62\u5e76\u53d1\u67e5\u8be2\u63d0\u4ea4\u8fc7\u591a\u800c\u5bfc\u81f4\u7684\u8fc7\u8f7d\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"big_query_cpu_second_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528 CPU \u7684\u65f6\u95f4\u4e0a\u9650\uff0c\u5176\u4e2d\u7684\u5e76\u884c\u4efb\u52a1\u5c06\u7d2f\u52a0 CPU \u4f7f\u7528\u65f6\u95f4\u3002\u5355\u4f4d\u4e3a\u79d2\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"big_query_scan_rows_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u626b\u63cf\u7684\u884c\u6570\u4e0a\u9650\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"big_query_mem_limit"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsx)(r.td,{children:"\u5927\u67e5\u8be2\u4efb\u52a1\u53ef\u4ee5\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\u3002\u5355\u4f4d\u4e3a Byte\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"type"}),(0,n.jsx)(r.td,{children:"\u5426"}),(0,n.jsxs)(r.td,{children:["\u8d44\u6e90\u7ec4\u7c7b\u578b\u3002\u6709\u6548\u53d6\u503c\u5305\u62ec\uff1a",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"short_query"}),"\uff1a\u5f53 ",(0,n.jsx)(r.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u6709\u67e5\u8be2\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u5f53\u524d BE \u8282\u70b9\u4f1a\u4e3a\u5176\u9884\u7559 ",(0,n.jsx)(r.code,{children:"short_query.cpu_core_limit"})," \u7684 CPU \u8d44\u6e90\uff0c\u6240\u6709 ",(0,n.jsx)(r.code,{children:"normal"})," \u8d44\u6e90\u7ec4\u7684\u603b CPU \u6838\u6570\u4f7f\u7528\u4e0a\u9650\u4f1a\u88ab\u786c\u9650\u5236\u4e3a BE \u8282\u70b9\u6838\u6570\u51cf ",(0,n.jsx)(r.code,{children:"short_query.cpu_core_limit"}),"\u3002",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"normal"}),"\uff1a\u5f53 ",(0,n.jsx)(r.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u6ca1\u6709\u67e5\u8be2\u6b63\u5728\u8fd0\u884c\u65f6\uff0c\u6240\u6709 ",(0,n.jsx)(r.code,{children:"normal"})," \u8d44\u6e90\u7ec4\u7684 CPU \u6838\u6570\u6ca1\u6709\u786c\u9650\u5236\u3002",(0,n.jsx)("br",{}),"\u6ce8\u610f\uff1a\u540c\u4e00\u96c6\u7fa4\u4e2d\uff0c\u60a8\u6700\u591a\u53ea\u80fd\u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(r.code,{children:"short_query"})," \u8d44\u6e90\u7ec4\u3002"]})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,n.jsxs)(r.p,{children:["\u793a\u4f8b\u4e00\uff1a\u57fa\u4e8e\u591a\u4e2a\u5206\u7c7b\u5668\u521b\u5efa\u8d44\u6e90\u7ec4 ",(0,n.jsx)(r.code,{children:"rg1"}),"\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-SQL",children:"CREATE RESOURCE GROUP rg1\nTO \n    (user='rg1_user1', role='rg1_role1', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user2', query_type in ('select'), source_ip='192.168.x.x/24'),\n    (user='rg1_user3', source_ip='192.168.x.x/24'),\n    (user='rg1_user4'),\n    (db='db1')\nWITH ('cpu_core_limit' = '10',\n      'mem_limit' = '20%',\n      'type' = 'normal',\n      'big_query_cpu_second_limit' = '100',\n      'big_query_scan_rows_limit' = '100000',\n      'big_query_mem_limit' = '1073741824'\n);\n"})})]})}const x=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>c,ah:()=>d});var n=s(67294);const i=n.createContext({});function d(e){const r=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const t={};function c({components:e,children:r,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||t:d(e),n.createElement(i.Provider,{value:c},r)}}}]);