"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87030],{41109:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=s(85893),d=s(11151);const c={},l="\u90e8\u7f72\u540e\u8bbe\u7f6e",i={id:"deployment/post_deployment_setup",title:"\u90e8\u7f72\u540e\u8bbe\u7f6e",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u60a8\u5728\u90e8\u7f72 StarRocks \u4e4b\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/deployment/post_deployment_setup.md",sourceDirName:"deployment",slug:"/deployment/post_deployment_setup",permalink:"/doc/zh/docs/2.5/deployment/post_deployment_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/deployment/post_deployment_setup.md",tags:[],version:"2.5",frontMatter:{},sidebar:"Chinese31",previous:{title:"\u540e\u671f\u7ba1\u7406",permalink:"/doc/zh/docs/2.5/category/\u540e\u671f\u7ba1\u7406"},next:{title:"\u5347\u7ea7 StarRocks",permalink:"/doc/zh/docs/2.5/deployment/upgrade"}},t={},o=[{value:"\u7ba1\u7406\u521d\u59cb\u5e10\u6237",id:"\u7ba1\u7406\u521d\u59cb\u5e10\u6237",level:2},{value:"\u8bbe\u7f6e\u5fc5\u8981\u7684\u7cfb\u7edf\u53d8\u91cf",id:"\u8bbe\u7f6e\u5fc5\u8981\u7684\u7cfb\u7edf\u53d8\u91cf",level:2},{value:"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",id:"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ol:"ol",li:"li",pre:"pre",blockquote:"blockquote",strong:"strong",ul:"ul",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u90e8\u7f72\u540e\u8bbe\u7f6e",children:"\u90e8\u7f72\u540e\u8bbe\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u63cf\u8ff0\u4e86\u60a8\u5728\u90e8\u7f72 StarRocks \u4e4b\u540e\u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5c06\u65b0\u7684 StarRocks \u96c6\u7fa4\u6295\u5165\u751f\u4ea7\u4e4b\u524d\uff0c\u60a8\u5fc5\u987b\u7ba1\u7406\u521d\u59cb\u5e10\u6237\u5e76\u8bbe\u7f6e\u5fc5\u8981\u7684\u53d8\u91cf\u548c\u5c5e\u6027\u4ee5\u4f7f\u96c6\u7fa4\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7ba1\u7406\u521d\u59cb\u5e10\u6237",children:"\u7ba1\u7406\u521d\u59cb\u5e10\u6237"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa StarRocks \u96c6\u7fa4\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u751f\u6210\u96c6\u7fa4\u7684\u521d\u59cb ",(0,r.jsx)(n.code,{children:"root"})," \u7528\u6237\u3002",(0,r.jsx)(n.code,{children:"root"})," \u7528\u6237\u62e5\u6709 ",(0,r.jsx)(n.code,{children:"root"})," \u6743\u9650\uff0c\u5373\u96c6\u7fa4\u5185\u6240\u6709\u6743\u9650\u7684\u96c6\u5408\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"root"})," \u7528\u6237\u5bc6\u7801\u5e76\u907f\u514d\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u8be5\u7528\u6237\uff0c\u4ee5\u907f\u514d\u8bef\u7528\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u7528\u6237\u540d ",(0,r.jsx)(n.code,{children:"root"})," \u548c\u7a7a\u5bc6\u7801\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 StarRocks\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <fe_address> \u66ff\u6362\u4e3a\u60a8\u8fde\u63a5\u7684 FE \u8282\u70b9\u7684 IP \u5730\u5740\uff08priority_networks\uff09\n# \u6216 FQDN\uff0c\u5c06 <query_port> \u66ff\u6362\u4e3a\u60a8\u5728 fe.conf \u4e2d\u6307\u5b9a\u7684 query_port\uff08\u9ed8\u8ba4\uff1a9030\uff09\u3002\nmysql -h <fe_address> -P<query_port> -uroot\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u4ee5\u4e0b SQL \u91cd\u7f6e ",(0,r.jsx)(n.code,{children:"root"})," \u7528\u6237\u5bc6\u7801\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- \u5c06 <password> \u66ff\u6362\u4e3a\u60a8\u8981\u4e3a root \u7528\u6237\u8bbe\u7f6e\u7684\u5bc6\u7801\u3002\nSET PASSWORD = PASSWORD('<password>')\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u91cd\u7f6e\u5bc6\u7801\u540e\u8bf7\u52a1\u5fc5\u59a5\u5584\u4fdd\u7ba1\u3002\u5982\u679c\u60a8\u5fd8\u8bb0\u4e86\u5bc6\u7801\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/User_privilege#%E9%87%8D%E7%BD%AE%E4%B8%A2%E5%A4%B1%E7%9A%84-root-%E5%AF%86%E7%A0%81",children:"\u91cd\u7f6e\u4e22\u5931\u7684 root \u5bc6\u7801"})," \u4e86\u89e3\u8be6\u7ec6\u8bf4\u660e\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b8c\u6210\u90e8\u7f72\u540e\u8bbe\u7f6e\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u65b0\u7528\u6237\u548c\u89d2\u8272\u6765\u7ba1\u7406\u56e2\u961f\u5185\u7684\u6743\u9650\u3002\u6709\u5173\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/User_privilege",children:"\u7ba1\u7406\u7528\u6237\u6743\u9650"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5fc5\u8981\u7684\u7cfb\u7edf\u53d8\u91cf",children:"\u8bbe\u7f6e\u5fc5\u8981\u7684\u7cfb\u7edf\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4f7f\u60a8\u7684 StarRocks \u96c6\u7fa4\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6b63\u5e38\u5de5\u4f5c\uff0c\u60a8\u9700\u8981\u8bbe\u7f6e\u4ee5\u4e0b\u7cfb\u7edf\u53d8\u91cf\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u53d8\u91cf\u540d"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"StarRocks \u7248\u672c"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u63a8\u8350\u503c"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"is_report_success"}),(0,r.jsx)(n.td,{children:"v2.4 \u6216\u66f4\u65e9"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["\u662f\u5426\u53d1\u9001\u67e5\u8be2 Profile \u4ee5\u4f9b\u5206\u6790\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\uff0c\u5373\u4e0d\u53d1\u9001\u3002\u5c06\u6b64\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u4f1a\u5f71\u54cd StarRocks \u7684\u5e76\u53d1\u6027\u80fd\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enable_profile"}),(0,r.jsx)(n.td,{children:"v2.5 \u6216\u4ee5\u540e"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["\u662f\u5426\u53d1\u9001\u67e5\u8be2 Profile \u4ee5\u4f9b\u5206\u6790\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\uff0c\u5373\u4e0d\u53d1\u9001\u3002\u5c06\u6b64\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"true"})," \u4f1a\u5f71\u54cd StarRocks \u7684\u5e76\u53d1\u6027\u80fd\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enable_pipeline_engine"}),(0,r.jsx)(n.td,{children:"v2.3 \u6216\u4ee5\u540e"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["\u662f\u5426\u542f\u7528 Pipeline Engine\u3002",(0,r.jsx)(n.code,{children:"true"})," \u8868\u793a\u542f\u7528\uff0c",(0,r.jsx)(n.code,{children:"false"})," \u8868\u793a\u7981\u7528\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parallel_fragment_exec_instance_num"}),(0,r.jsx)(n.td,{children:"v2.3 \u6216\u4ee5\u540e"}),(0,r.jsxs)(n.td,{children:["\u5982\u679c\u60a8\u542f\u7528\u4e86 Pipeline Engine\uff0c\u60a8\u53ef\u4ee5\u5c06\u6b64\u53d8\u91cf\u8bbe\u7f6e\u4e3a",(0,r.jsx)(n.code,{children:"1"}),"\u3002\u5982\u679c\u60a8\u672a\u542f\u7528 Pipeline Engine\uff0c\u60a8\u53ef\u4ee5\u5c06\u6b64\u53d8\u91cf\u8bbe\u7f6e\u4e3a CPU \u6838\u6570\u7684\u4e00\u534a\u3002"]}),(0,r.jsxs)(n.td,{children:["\u6bcf\u4e2a BE \u4e0a\u7528\u4e8e\u626b\u63cf\u8282\u70b9\u7684\u5b9e\u4f8b\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"1"}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pipeline_dop"}),(0,r.jsx)(n.td,{children:"v2.3\u3001v2.4 \u53ca v2.5"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Pipeline \u5b9e\u4f8b\u7684\u5e76\u884c\u5ea6\uff0c\u7528\u4e8e\u8c03\u6574\u67e5\u8be2\u5e76\u53d1\u5ea6\u3002\u9ed8\u8ba4\u503c\uff1a0\uff0c\u8868\u793a\u7cfb\u7edf\u81ea\u52a8\u8c03\u6574\u6bcf\u4e2a Pipeline \u5b9e\u4f8b\u7684\u5e76\u884c\u5ea6\u3002",(0,r.jsx)("br",{}),"\u81ea v3.0 \u8d77\uff0cStarRocks \u6839\u636e\u67e5\u8be2\u5e76\u884c\u5ea6\u81ea\u9002\u5e94\u8c03\u6574\u8be5\u53c2\u6570\u3002"]})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"is_report_success"})," \u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL is_report_success = false;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"enable_profile"})," \u4e3a ",(0,r.jsx)(n.code,{children:"false"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_profile = false;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"enable_pipeline_engine"})," \u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL enable_pipeline_engine = true;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"parallel_fragment_exec_instance_num"})," \u4e3a ",(0,r.jsx)(n.code,{children:"1"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL parallel_fragment_exec_instance_num = 1;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"pipeline_dop"})," \u4e3a ",(0,r.jsx)(n.code,{children:"0"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"SET GLOBAL pipeline_dop = 0;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173\u7cfb\u7edf\u53d8\u91cf\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/reference/System_variable",children:"\u7cfb\u7edf\u53d8\u91cf"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",children:"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u4e86\u65b0\u7528\u6237\uff0c\u5219\u9700\u8981\u589e\u52a0\u65b0\u7528\u6237\u7684\u6700\u5927\u8fde\u63a5\u6570\uff08\u4f8b\u5982\u81f3 ",(0,r.jsx)(n.code,{children:"1000"}),"\uff09\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- \u5c06 <username> \u66ff\u6362\u4e3a\u9700\u8981\u589e\u52a0\u6700\u5927\u8fde\u63a5\u6570\u7684\u7528\u6237\u540d\u3002\nSET PROPERTY FOR '<username>' 'max_user_connections' = '1000';\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,r.jsxs)(n.p,{children:["\u6210\u529f\u90e8\u7f72\u548c\u8bbe\u7f6e StarRocks \u96c6\u7fa4\u540e\uff0c\u60a8\u53ef\u4ee5\u5f00\u59cb\u7740\u624b\u8bbe\u8ba1\u6700\u9002\u5408\u60a8\u7684\u4e1a\u52a1\u573a\u666f\u573a\u666f\u7684\u8868\u3002\u6709\u5173\u8868\u8bbe\u8ba1\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(n.a,{href:"/doc/zh/docs/2.5/table_design/StarRocks_table_design",children:"\u7406\u89e3\u8868\u8bbe\u8ba1"}),"\u3002"]})]})}const a=function(e={}){const{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>c});var r=s(67294);const d=r.createContext({});function c(e){const n=r.useContext(d);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:c(e),r.createElement(d.Provider,{value:i},n)}}}]);