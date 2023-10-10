"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[82049],{41424:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var t=n(85893),r=n(11151);const c={},i="CREATE FILE",l={id:"sql-reference/sql-statements/Administration/CREATE FILE",title:"CREATE FILE",description:"CREATE FILE \u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u6587\u4ef6\u3002\u6587\u4ef6\u521b\u5efa\u540e\u4f1a\u81ea\u52a8\u4e0a\u4f20\u5e76\u6301\u4e45\u5316\u5728 StarRocks \u96c6\u7fa4\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/Administration/CREATE FILE.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE FILE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CREATE FILE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/Administration/CREATE FILE.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"CANCEL DECOMMISSION",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CANCEL DECOMMISSION"},next:{title:"CREATE RESOURCE GROUP",permalink:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP"}},d={},a=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",strong:"strong",h2:"h2",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"create-file",children:"CREATE FILE"}),"\n",(0,t.jsx)(s.p,{children:"CREATE FILE \u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u6587\u4ef6\u3002\u6587\u4ef6\u521b\u5efa\u540e\u4f1a\u81ea\u52a8\u4e0a\u4f20\u5e76\u6301\u4e45\u5316\u5728 StarRocks \u96c6\u7fa4\u4e2d\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(s.p,{children:"\u53ea\u6709\u62e5\u6709 System \u7ea7 FILE \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u6587\u4ef6\u3002\u5f53\u4e00\u4e2a\u6587\u4ef6\u5f52\u5c5e\u4e8e\u4e00\u4e2a\u6570\u636e\u5e93\u65f6\uff0c\u5bf9\u8be5\u6570\u636e\u5e93\u62e5\u6709\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u6587\u4ef6"}),"\uff1a\u662f\u6307\u521b\u5efa\u5e76\u4fdd\u5b58\u5728 StarRocks \u4e2d\u7684\u6587\u4ef6\u3002\u6bcf\u4e2a\u6587\u4ef6\u90fd\u6709\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684\u6807\u8bc6\u7b26 (",(0,t.jsx)(s.code,{children:"FileId"}),")\u3002\u4e00\u4e2a\u6587\u4ef6\u7531\u6570\u636e\u5e93\u540d\u79f0 (",(0,t.jsx)(s.code,{children:"database"}),")\u3001\u7c7b\u522b (",(0,t.jsx)(s.code,{children:"catalog"}),") \u548c\u6587\u4ef6\u540d (",(0,t.jsx)(s.code,{children:"file_name"}),") \u5171\u540c\u5b9a\u4f4d\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE FILE "file_name" [IN database]\n[properties]\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u5fc5\u586b"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"file_name"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsx)(s.td,{children:"\u6587\u4ef6\u540d\uff0c\u53ef\u6839\u636e\u9700\u6c42\u81ea\u5b9a\u4e49\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"database"}),(0,t.jsx)(s.td,{children:"\u5426"}),(0,t.jsx)(s.td,{children:"\u6587\u4ef6\u6240\u5c5e\u7684\u6570\u636e\u5e93\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u4f7f\u7528\u5f53\u524d\u4f1a\u8bdd\u7684\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"properties"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsxs)(s.td,{children:["\u6587\u4ef6\u5c5e\u6027\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u89c1\u4e0b\u8868\uff1a",(0,t.jsx)(s.code,{children:"properties"})," \u914d\u7f6e\u9879\u3002"]})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"properties"})," ",(0,t.jsx)(s.strong,{children:"\u914d\u7f6e\u9879"})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u914d\u7f6e\u9879"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u5fc5\u586b"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"url"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsx)(s.td,{children:"\u6587\u4ef6\u7684\u4e0b\u8f7d\u8def\u5f84\u3002\u5f53\u524d\u4ec5\u652f\u6301\u65e0\u8ba4\u8bc1\u7684 HTTP \u4e0b\u8f7d\u8def\u5f84\u3002\u8bed\u53e5\u6267\u884c\u6210\u529f\u540e\uff0c\u6587\u4ef6\u4f1a\u88ab\u4e0b\u8f7d\u5e76\u6301\u4e45\u5316\u4fdd\u5b58\u5728 StarRocks \u4e2d\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"catalog"}),(0,t.jsx)(s.td,{children:"\u662f"}),(0,t.jsx)(s.td,{children:"\u6587\u4ef6\u6240\u5c5e\u7c7b\u522b\uff0c\u53ef\u6839\u636e\u9700\u6c42\u81ea\u5b9a\u4e49\u3002\u5728\u67d0\u4e9b\u547d\u4ee4\u4e2d\uff0c\u4f1a\u67e5\u627e\u6307\u5b9a\u7c7b\u522b\u4e0b\u7684\u6587\u4ef6\u3002\u6bd4\u5982\u5728\u4f8b\u884c\u5bfc\u5165\u4e2d\uff0c\u5f53\u6570\u636e\u6e90\u4e3a StarRocks \u4f1a\u67e5\u627e Apache Kafka\xae \u7c7b\u522b\u4e0b\u7684\u6587\u4ef6\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"md5"}),(0,t.jsx)(s.td,{children:"\u5426"}),(0,t.jsx)(s.td,{children:"\u6d88\u606f\u6458\u8981\u7b97\u6cd5\u3002\u5982\u679c\u6307\u5b9a\u8be5\u53c2\u6570\uff0cStarRocks \u4f1a\u5bf9\u4e0b\u8f7d\u540e\u7684\u6587\u4ef6\u8fdb\u884c\u6821\u9a8c\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(s.strong,{children:"test.pem"})," \u7684\u6587\u4ef6\uff0c\u6240\u5c5e\u7c7b\u522b\u4e3a kafka\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE FILE "test.pem"\nPROPERTIES\n(\n    "url" = "http://starrocks-public.oss-cn-xxxx.aliyuncs.com/key/test.pem",\n    "catalog" = "kafka"\n);\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(s.strong,{children:"client.key"})," \u7684\u6587\u4ef6\uff0c\u6240\u5c5e\u7c7b\u522b\u4e3a my_catalog\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE FILE "client.key"\nIN my_database\nPROPERTIES\n(\n    "url" = "http://test.bj.bcebos.com/kafka-key/client.key",\n    "catalog" = "my_catalog",\n);\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>c});var t=n(67294);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:c(e),t.createElement(r.Provider,{value:l},s)}}}]);