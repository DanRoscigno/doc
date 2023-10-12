"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[92452],{9786:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=s(85893),a=s(11151);const c={displayed_sidebar:"Chinese31"},i="Export\u5e38\u89c1\u95ee\u9898",t={id:"faq/Exporting_faq",title:"Export\u5e38\u89c1\u95ee\u9898",description:"\u963f\u91cc\u4e91OSS\u5907\u4efd\u4e0e\u8fd8\u539f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/faq/Exporting_faq.md",sourceDirName:"faq",slug:"/faq/Exporting_faq",permalink:"/doc/zh/docs/3.0/faq/Exporting_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/faq/Exporting_faq.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"MySQL \u5b9e\u65f6\u540c\u6b65\u81f3 StarRocks \u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/3.0/faq/loading/synchronize_mysql_into_sr"},next:{title:"\u6743\u9650\u7cfb\u7edf FAQ",permalink:"/doc/zh/docs/3.0/administration/privilege_faq"}},l={},o=[{value:"\u963f\u91cc\u4e91OSS\u5907\u4efd\u4e0e\u8fd8\u539f",id:"\u963f\u91cc\u4e91oss\u5907\u4efd\u4e0e\u8fd8\u539f",level:2},{value:"\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93",id:"\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93",level:3},{value:"\u5907\u4efd\u6570\u636e\u8868",id:"\u5907\u4efd\u6570\u636e\u8868",level:3},{value:"\u6570\u636e\u8fd8\u539f",id:"\u6570\u636e\u8fd8\u539f",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"export\u5e38\u89c1\u95ee\u9898",children:"Export\u5e38\u89c1\u95ee\u9898"}),"\n",(0,r.jsx)(n.h2,{id:"\u963f\u91cc\u4e91oss\u5907\u4efd\u4e0e\u8fd8\u539f",children:"\u963f\u91cc\u4e91OSS\u5907\u4efd\u4e0e\u8fd8\u539f"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks\u652f\u6301\u5907\u4efd\u6570\u636e\u5230\u963f\u91cc\u4e91OSS/AWS S3\uff08\u6216\u8005\u517c\u5bb9S3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\uff09\u7b49\u3002\u5047\u8bbe\u6709\u4e24\u4e2aStarRocks\u96c6\u7fa4\uff0c\u5206\u522bDB1\u96c6\u7fa4\u548cDB2\u96c6\u7fa4\uff0c\u6211\u4eec\u9700\u8981\u5c06DB1\u4e2d\u7684\u6570\u636e\u5907\u4efd\u5230\u963f\u91cc\u4e91OSS\uff0c\u7136\u540e\u5728\u9700\u8981\u7684\u65f6\u5019\u6062\u590d\u5230DB2\uff0c\u5907\u4efd\u53ca\u6062\u590d\u5927\u81f4\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93",children:"\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93"}),"\n",(0,r.jsx)(n.p,{children:"\u5728DB1\u548cDB2\u4e2d\u5206\u522b\u6267\u884cSQL\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `\u4ed3\u5e93\u540d\u79f0`\nWITH BROKER `broker_name`\nON LOCATION "oss://\u5b58\u50a8\u6876\u540d\u79f0/\u8def\u5f84"\nPROPERTIES\n(\n"fs.oss.accessKeyId" = "xxx",\n"fs.oss.accessKeySecret" = "yyy",\n"fs.oss.endpoint" = "oss-cn-beijing.aliyuncs.com"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"a. DB1\u548cDB2\u90fd\u9700\u8981\u521b\u5efa\uff0c\u4e14\u521b\u5efa\u7684REPOSITORY\u4ed3\u5e93\u540d\u79f0\u8981\u76f8\u540c\uff0c\u4ed3\u5e93\u67e5\u770b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW REPOSITORIES;\n"})}),"\n",(0,r.jsx)(n.p,{children:"b. broker_name\u9700\u8981\u586b\u5199\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u7684broker\u540d\u79f0\uff0cBrokerName\u67e5\u770b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BROKER;\n"})}),"\n",(0,r.jsx)(n.p,{children:"c. fs.oss.endpoint\u540e\u7684\u8def\u5f84\u4e0d\u9700\u8981\u5e26\u5b58\u50a8\u6876\u540d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5907\u4efd\u6570\u636e\u8868",children:"\u5907\u4efd\u6570\u636e\u8868"}),"\n",(0,r.jsx)(n.p,{children:"\u5728DB1\u4e2d\u5c06\u9700\u8981\u8fdb\u884c\u5907\u4efd\u7684\u8868\uff0cBACKUP\u5230\u4e91\u7aef\u4ed3\u5e93\u3002\u5728DB1\u4e2d\u6267\u884cSQL\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'BACKUP SNAPSHOT [db_name].{snapshot_name}\nTO `repository_name`\nON (\n`table_name` [PARTITION (`p1`, ...)],\n...\n)\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",metastring:"text",children:'PROPERTIES \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a\n"type" = "full"\uff1a\u8868\u793a\u8fd9\u662f\u4e00\u6b21\u5168\u91cf\u66f4\u65b0\uff08\u9ed8\u8ba4\uff09\u3002\n"timeout" = "3600"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u4e00\u5929\uff0c\u5355\u4f4d\u79d2\u3002\n'})}),"\n",(0,r.jsx)(n.p,{children:"StarRocks\u76ee\u524d\u4e0d\u652f\u6301\u5168\u6570\u636e\u5e93\u7684\u5907\u4efd\uff0c\u6211\u4eec\u9700\u8981\u5728ON (\u2026\u2026)\u6307\u5b9a\u9700\u8981\u5907\u4efd\u7684\u8868\u6216\u5206\u533a\uff0c\u8fd9\u4e9b\u8868\u6216\u5206\u533a\u5c06\u5e76\u884c\u7684\u8fdb\u884c\u5907\u4efd\u3002\n\u67e5\u770b\u6b63\u5728\u8fdb\u884c\u4e2d\u7684\u5907\u4efd\u4efb\u52a1\uff08\u6ce8\u610f\u540c\u65f6\u8fdb\u884c\u7684\u5907\u4efd\u4efb\u52a1\u53ea\u80fd\u6709\u4e00\u4e2a\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW BACKUP FROM db_name;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5907\u4efd\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u67e5\u770bOSS\u4e2d\u5907\u4efd\u6570\u636e\u662f\u5426\u5df2\u7ecf\u5b58\u5728\uff08\u4e0d\u9700\u8981\u7684\u5907\u4efd\u9700\u5728OSS\u4e2d\u5220\u9664\uff09\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW SNAPSHOT ON OSS\u4ed3\u5e93\u540d; \n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u8fd8\u539f",children:"\u6570\u636e\u8fd8\u539f"}),"\n",(0,r.jsx)(n.p,{children:"\u5728DB2\u4e2d\u8fdb\u884c\u6570\u636e\u8fd8\u539f\uff0cDB2\u4e2d\u4e0d\u9700\u8981\u521b\u5efa\u9700\u6062\u590d\u7684\u8868\u7ed3\u6784\uff0c\u5728\u8fdb\u884cRestore\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\u6267\u884c\u8fd8\u539fSQL\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RESTORE SNAPSHOT [db_name].{snapshot_name}\nFROMrepository_name``\nON (\n    'table_name' [PARTITION ('p1', ...)] [AS 'tbl_alias'],\n    ...\n)\nPROPERTIES (\"key\"=\"value\", ...);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u8fd8\u539f\u8fdb\u5ea6\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW RESTORE;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>c});var r=s(67294);const a=r.createContext({});function c(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||i:c(e),r.createElement(a.Provider,{value:t},n)}}}]);