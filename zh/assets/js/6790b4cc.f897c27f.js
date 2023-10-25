"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[33734],{4140:(n,i,s)=>{s.r(i),s.d(i,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>j});var e=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},d="\u5907\u4efd\u4e0e\u6062\u590d",c={id:"administration/Backup_and_restore",title:"\u5907\u4efd\u4e0e\u6062\u590d",description:"StarRocks \u652f\u6301\u5c06\u5f53\u524d\u6570\u636e\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u901a\u8fc7 broker \u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff08Broker \u662f StarRocks \u96c6\u7fa4\u4e2d\u4e00\u79cd\u53ef\u9009\u8fdb\u7a0b\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301 StarRocks \u8bfb\u5199\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u5177\u4f53\u8bf7\u53c2\u8003Broker Load\u6587\u6863\u3002\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7\u6062\u590d\u547d\u4ee4\uff0c\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5c06\u6570\u636e\u6062\u590d\u5230\u4efb\u610f StarRocks \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0cStarRocks \u53ef\u4ee5\u652f\u6301\u5c06\u6570\u636e\u5b9a\u671f\u7684\u8fdb\u884c\u5feb\u7167\u5907\u4efd\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u4e0d\u540c\u96c6\u7fa4\u95f4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/administration/Backup_and_restore.md",sourceDirName:"administration",slug:"/administration/Backup_and_restore",permalink:"/zh/docs/2.2/administration/Backup_and_restore",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Backup_and_restore.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u8ba4\u8bc1\u65b9\u5f0f",permalink:"/zh/docs/2.2/administration/Authentication"},next:{title:"\u9ed1\u540d\u5355\u7ba1\u7406",permalink:"/zh/docs/2.2/administration/Blacklist"}},h={},j=[{value:"\u539f\u7406\u8bf4\u660e",id:"\u539f\u7406\u8bf4\u660e",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u6062\u590d",id:"\u6062\u590d",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u6570\u636e\u5907\u4efd",id:"\u6570\u636e\u5907\u4efd",level:3},{value:"\u6570\u636e\u8fc1\u79fb",id:"\u6570\u636e\u8fc1\u79fb",level:3},{value:"\u91cd\u70b9\u8bf4\u660e",id:"\u91cd\u70b9\u8bf4\u660e",level:2},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:2}];function x(n){const i=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",h2:"h2",h3:"h3",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code"},(0,l.ah)(),n.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h1,{id:"\u5907\u4efd\u4e0e\u6062\u590d",children:"\u5907\u4efd\u4e0e\u6062\u590d"}),"\n",(0,e.jsxs)(i.p,{children:["StarRocks \u652f\u6301\u5c06\u5f53\u524d\u6570\u636e\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u901a\u8fc7 broker \u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff08Broker \u662f StarRocks \u96c6\u7fa4\u4e2d\u4e00\u79cd\u53ef\u9009\u8fdb\u7a0b\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301 StarRocks \u8bfb\u5199\u8fdc\u7aef\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u548c\u76ee\u5f55\uff0c\u5177\u4f53\u8bf7\u53c2\u8003",(0,e.jsx)(i.a,{href:"/zh/docs/2.2/loading/BrokerLoad",children:"Broker Load\u6587\u6863"}),"\u3002\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7\u6062\u590d\u547d\u4ee4\uff0c\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5c06\u6570\u636e\u6062\u590d\u5230\u4efb\u610f StarRocks \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0cStarRocks \u53ef\u4ee5\u652f\u6301\u5c06\u6570\u636e\u5b9a\u671f\u7684\u8fdb\u884c\u5feb\u7167\u5907\u4efd\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u5728\u4e0d\u540c\u96c6\u7fa4\u95f4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u3002"]}),"\n",(0,e.jsx)(i.p,{children:"\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u9700\u8981\u90e8\u7f72\u5bf9\u5e94\u8fdc\u7aef\u5b58\u50a8\u7684 broker\uff0c\u5982 HDFS \u7b49\u3002\u53ef\u4ee5\u901a\u8fc7 SHOW BROKER; \u67e5\u770b\u5f53\u524d\u90e8\u7f72\u7684 broker\u3002"}),"\n",(0,e.jsx)(i.p,{children:(0,e.jsx)(i.strong,{children:"\u6ce8\u610f\uff1a\u76ee\u524d\u4e3b\u952e\u6a21\u578b\u7684\u8868\u76ee\u524d\u4e0d\u652f\u6301\u5907\u4efd\u4e0e\u6062\u590d"})}),"\n",(0,e.jsx)(i.h2,{id:"\u539f\u7406\u8bf4\u660e",children:"\u539f\u7406\u8bf4\u660e"}),"\n",(0,e.jsx)(i.h3,{id:"\u5907\u4efd",children:"\u5907\u4efd"}),"\n",(0,e.jsx)(i.p,{children:"\u5907\u4efd\uff08backup\uff09\u64cd\u4f5c\u662f\u6307\u5c06\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u6570\u636e\uff0c\u76f4\u63a5\u4ee5 StarRocks \u5b58\u50a8\u7684\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u8fdb\u884c\u5b58\u50a8\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Backup \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:["\u5feb\u7167\u53ca\u5feb\u7167\u4e0a\u4f20","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5feb\u7167\u9636\u6bb5\u4f1a\u5bf9\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u6570\u636e\u6587\u4ef6\u8fdb\u884c\u5feb\u7167\u3002\u4e4b\u540e\uff0c\u5907\u4efd\u90fd\u662f\u5bf9\u5feb\u7167\u8fdb\u884c\u64cd\u4f5c\u3002\u5728\u5feb\u7167\u4e4b\u540e\uff0c\u5bf9\u8868\u8fdb\u884c\u7684\u66f4\u6539\u3001\u5bfc\u5165\u7b49\u64cd\u4f5c\u90fd\u4e0d\u518d\u5f71\u54cd\u5907\u4efd\u7684\u7ed3\u679c\u3002\u5feb\u7167\u53ea\u662f\u5bf9\u5f53\u524d\u6570\u636e\u6587\u4ef6\u4ea7\u751f\u4e00\u4e2a\u786c\u94fe\uff0c\u8017\u65f6\u5f88\u5c11\u3002\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u4f1a\u5f00\u59cb\u5bf9\u8fd9\u4e9b\u5feb\u7167\u6587\u4ef6\u8fdb\u884c\u9010\u4e00\u4e0a\u4f20\u3002\u5feb\u7167\u4e0a\u4f20\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\u5143\u6570\u636e\u51c6\u5907\u53ca\u4e0a\u4f20","\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u6570\u636e\u6587\u4ef6\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u540e\uff0cFrontend \u4f1a\u9996\u5148\u5c06\u5bf9\u5e94\u5143\u6570\u636e\u5199\u6210\u672c\u5730\u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 broker \u5c06\u672c\u5730\u5143\u6570\u636e\u6587\u4ef6\u4e0a\u4f20\u5230\u8fdc\u7aef\u4ed3\u5e93\uff0c\u5b8c\u6210\u6700\u7ec8\u5907\u4efd\u4f5c\u4e1a\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h3,{id:"\u6062\u590d",children:"\u6062\u590d"}),"\n",(0,e.jsx)(i.p,{children:"\u6062\u590d\uff08restore\uff09\u64cd\u4f5c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\uff0c\u7136\u540e\u5c06\u8fd9\u4e2a\u5907\u4efd\u7684\u5185\u5bb9\u6062\u590d\u5230\u672c\u5730\u96c6\u7fa4\u4e2d\u3002\u5f53\u7528\u6237\u63d0\u4ea4 Restore \u8bf7\u6c42\u540e\uff0c\u7cfb\u7edf\u5185\u90e8\u4f1a\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u5728\u672c\u5730\u521b\u5efa\u5bf9\u5e94\u7684\u5143\u6570\u636e"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u8fd9\u4e00\u6b65\u9996\u5148\u4f1a\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u521b\u5efa\u6062\u590d\u5bf9\u5e94\u7684\u8868\u5206\u533a\u7b49\u7ed3\u6784\u3002\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u8be5\u8868\u53ef\u89c1\uff0c\u4f46\u662f\u4e0d\u53ef\u8bbf\u95ee\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u672c\u5730snapshot"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u8fd9\u4e00\u6b65\u662f\u5c06\u4e0a\u4e00\u6b65\u521b\u5efa\u7684\u8868\u505a\u4e00\u4e2a\u5feb\u7167\u3002\u8fd9\u5176\u5b9e\u662f\u4e00\u4e2a\u7a7a\u5feb\u7167\uff08\u56e0\u4e3a\u521a\u521b\u5efa\u7684\u8868\u662f\u6ca1\u6709\u6570\u636e\u7684\uff09\uff0c\u5176\u76ee\u7684\u4e3b\u8981\u662f\u5728 Backend \u4e0a\u4ea7\u751f\u5bf9\u5e94\u7684\u5feb\u7167\u76ee\u5f55\uff0c\u7528\u4e8e\u4e4b\u540e\u63a5\u6536\u4ece\u8fdc\u7aef\u4ed3\u5e93\u4e0b\u8f7d\u7684\u5feb\u7167\u6587\u4ef6\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u4e0b\u8f7d\u5feb\u7167"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u7684\u5feb\u7167\u6587\u4ef6\uff0c\u4f1a\u88ab\u4e0b\u8f7d\u5230\u5bf9\u5e94\u7684\u4e0a\u4e00\u6b65\u751f\u6210\u7684\u5feb\u7167\u76ee\u5f55\u4e2d\u3002\u8fd9\u4e00\u6b65\u7531\u5404\u4e2a Backend \u5e76\u53d1\u5b8c\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u751f\u6548\u5feb\u7167"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u5404\u4e2a\u5feb\u7167\u6620\u5c04\u4e3a\u5f53\u524d\u672c\u5730\u8868\u7684\u5143\u6570\u636e\u3002\u7136\u540e\u91cd\u65b0\u52a0\u8f7d\u8fd9\u4e9b\u5feb\u7167\uff0c\u4f7f\u4e4b\u751f\u6548\uff0c\u5b8c\u6210\u6700\u7ec8\u7684\u6062\u590d\u4f5c\u4e1a\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u603b\u4f53\u6d41\u7a0b"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u5148\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93\u7528\u4e8e\u5907\u4efd\u4e0e\u6062\u590d(\u65b0\u8001\u96c6\u7fa4\u90fd\u8981\u521b\u5efa\u4e91\u7aef\u4ed3\u5e93,REPOSITORY\u540d\u5b57\u8981\u76f8\u540c\uff0cBROKER Name\u8981\u67e5\u770b\u96c6\u7fa4\u7684broker\u540d\u79f0)\uff0c\u5728\u8001\u96c6\u7fa4\u51c6\u5907\u597d\u9700\u8981\u8fdb\u884c\u8fc1\u79fb\u5907\u4efd\u7684\u8868\uff0cBackup\u5230\u4e91\u7aef\u4ed3\u5e93\uff0c\u518d\u4ece\u4e91\u7aef\u4ed3\u5e93Restore\u5230\u65b0\u96c6\u7fa4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u65b0\u96c6\u7fa4\u5f53\u4e2d\u4e0d\u7528\u4e8b\u5148\u521b\u5efa\u597d\u9700\u8981\u5907\u4efd\u6062\u590d\u7684\u8868\uff0c\u56e0\u4e3a\u5728\u8fdb\u884cRestore\u64cd\u4f5c\u4f1a\u81ea\u52a8\u521b\u5efa\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,e.jsx)(i.h3,{id:"\u6570\u636e\u5907\u4efd",children:"\u6570\u636e\u5907\u4efd"}),"\n",(0,e.jsx)(i.p,{children:"\u5f53\u524dStarRocks\u652f\u6301\u6700\u5c0f\u4e3a\u5206\u533a\uff08Partition\uff09\u7c92\u5ea6\u7684\u5168\u91cf\u5907\u4efd\u3002\u5982\u679c\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd\uff0c\u9996\u5148\u9700\u8981\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u5730\u89c4\u5212\u8868\u7684\u5206\u533a\u53ca\u5206\u6876\u3002\u6bd4\u5982\uff0c\u6309\u65f6\u95f4\u8fdb\u884c\u5206\u533a\u3002\u7136\u540e\u5728\u4e4b\u540e\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u6309\u7167\u5206\u533a\u7c92\u5ea6\u8fdb\u884c\u5b9a\u671f\u7684\u6570\u636e\u5907\u4efd\u3002"}),"\n",(0,e.jsx)(i.h3,{id:"\u6570\u636e\u8fc1\u79fb",children:"\u6570\u636e\u8fc1\u79fb"}),"\n",(0,e.jsx)(i.p,{children:"\u7528\u6237\u53ef\u4ee5\u5148\u5c06\u6570\u636e\u5907\u4efd\u5230\u8fdc\u7aef\u4ed3\u5e93\uff0c\u518d\u901a\u8fc7\u8fdc\u7aef\u4ed3\u5e93\u5c06\u6570\u636e\u6062\u590d\u5230\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5b8c\u6210\u6570\u636e\u8fc1\u79fb\u3002\u56e0\u4e3a\u6570\u636e\u5907\u4efd\u662f\u901a\u8fc7\u5feb\u7167\u7684\u5f62\u5f0f\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\uff0c\u5728\u5907\u4efd\u4f5c\u4e1a\u7684\u5feb\u7167\u9636\u6bb5\u4e4b\u540e\u7684\u65b0\u7684\u5bfc\u5165\u6570\u636e\uff0c\u662f\u4e0d\u4f1a\u5907\u4efd\u7684\u3002\u56e0\u6b64\uff0c\u5728\u5feb\u7167\u5b8c\u6210\u540e\uff0c\u5230\u6062\u590d\u4f5c\u4e1a\u5b8c\u6210\u8fd9\u671f\u95f4\uff0c\u5728\u539f\u96c6\u7fa4\u4e0a\u5bfc\u5165\u7684\u6570\u636e\uff0c\u90fd\u9700\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u540c\u6837\u5bfc\u5165\u4e00\u904d\u3002\u5efa\u8bae\u5728\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u5bf9\u65b0\u65e7\u4e24\u4e2a\u96c6\u7fa4\u5e76\u884c\u5bfc\u5165\u4e00\u6bb5\u65f6\u95f4\u3002\u5b8c\u6210\u6570\u636e\u548c\u4e1a\u52a1\u6b63\u786e\u6027\u6821\u9a8c\u540e\uff0c\u518d\u5c06\u4e1a\u52a1\u8fc1\u79fb\u5230\u65b0\u7684\u96c6\u7fa4\u3002"}),"\n",(0,e.jsx)(i.h2,{id:"\u91cd\u70b9\u8bf4\u660e",children:"\u91cd\u70b9\u8bf4\u660e"}),"\n",(0,e.jsxs)(i.ol,{children:["\n",(0,e.jsx)(i.li,{children:"\u5907\u4efd\u6062\u590d\u76f8\u5173\u7684\u64cd\u4f5c\u76ee\u524d\u53ea\u5141\u8bb8\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u6267\u884c\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u4e00\u4e2a Database \u5185\uff0c\u53ea\u5141\u8bb8\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u5907\u4efd\u548c\u6062\u590d\u90fd\u652f\u6301\u6700\u5c0f\u4e3a\u5206\u533a\uff08Partition\uff09\u7ea7\u522b\u7684\u64cd\u4f5c\uff0c\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5efa\u8bae\u6309\u5206\u533a\u5206\u522b\u6267\u884c\uff0c\u4ee5\u964d\u4f4e\u5931\u8d25\u91cd\u8bd5\u7684\u4ee3\u4ef7\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u56e0\u4e3a\u5907\u4efd\u6062\u590d\uff0c\u64cd\u4f5c\u7684\u90fd\u662f\u5b9e\u9645\u7684\u6570\u636e\u6587\u4ef6\u3002\u6240\u4ee5\u5f53\u4e00\u4e2a\u8868\u7684\u5206\u7247\u8fc7\u591a\uff0c\u6216\u8005\u4e00\u4e2a\u5206\u7247\u6709\u8fc7\u591a\u7684\u5c0f\u7248\u672c\u65f6\uff0c\u5373\u4f7f\u603b\u6570\u636e\u91cf\u5f88\u5c0f\uff0c\u4f9d\u7136\u9700\u8981\u5907\u4efd\u6216\u6062\u590d\u5f88\u957f\u65f6\u95f4\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SHOW PARTITIONS FROM table_name; \u548c SHOW TABLET FROM table_name; \u6765\u67e5\u770b\u5404\u4e2a\u5206\u533a\u7684\u5206\u7247\u6570\u91cf\uff0c\u4ee5\u53ca\u5404\u4e2a\u5206\u7247\u7684\u6587\u4ef6\u7248\u672c\u6570\u91cf\uff0c\u6765\u9884\u4f30\u4f5c\u4e1a\u6267\u884c\u65f6\u95f4\u3002\u6587\u4ef6\u6570\u91cf\u5bf9\u4f5c\u4e1a\u6267\u884c\u7684\u65f6\u95f4\u5f71\u54cd\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u5efa\u8bae\u5728\u5efa\u8868\u65f6\uff0c\u5408\u7406\u89c4\u5212\u5206\u533a\u5206\u6876\uff0c\u4ee5\u907f\u514d\u8fc7\u591a\u7684\u5206\u7247\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u5f53\u901a\u8fc7 SHOW BACKUP \u6216\u8005 SHOW RESTORE \u547d\u4ee4\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u65f6\u3002\u6709\u53ef\u80fd\u4f1a\u5728 TaskErrMsg \u4e00\u5217\u4e2d\u770b\u5230\u9519\u8bef\u4fe1\u606f\u3002\u4f46\u53ea\u8981 State \u5217\u4e0d\u4e3a CANCELLED\uff0c\u5219\u8bf4\u660e\u4f5c\u4e1a\u4f9d\u7136\u5728\u7ee7\u7eed\u3002\u8fd9\u4e9b Task \u6709\u53ef\u80fd\u4f1a\u91cd\u8bd5\u6210\u529f\u3002\u5f53\u7136\uff0c\u6709\u4e9b Task \u9519\u8bef\uff0c\u4e5f\u4f1a\u76f4\u63a5\u5bfc\u81f4\u4f5c\u4e1a\u5931\u8d25\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u662f\u4e00\u6b21\u8986\u76d6\u64cd\u4f5c\uff08\u6307\u5b9a\u6062\u590d\u6570\u636e\u5230\u5df2\u7ecf\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u4e2d\uff09\uff0c\u90a3\u4e48\u4ece\u6062\u590d\u4f5c\u4e1a\u7684 COMMIT \u9636\u6bb5\u5f00\u59cb\uff0c\u5f53\u524d\u96c6\u7fa4\u4e0a\u88ab\u8986\u76d6\u7684\u6570\u636e\u6709\u53ef\u80fd\u4e0d\u80fd\u518d\u88ab\u8fd8\u539f\u3002\u6b64\u65f6\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u5931\u8d25\u6216\u88ab\u53d6\u6d88\uff0c\u6709\u53ef\u80fd\u9020\u6210\u4e4b\u524d\u7684\u6570\u636e\u5df2\u635f\u574f\u4e14\u65e0\u6cd5\u8bbf\u95ee\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u64cd\u4f5c\uff0c\u5e76\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\uff0c\u5982\u65e0\u5fc5\u8981\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u8986\u76d6\u7684\u65b9\u5f0f\u6062\u590d\u6570\u636e\uff0c\u9664\u975e\u786e\u8ba4\u5f53\u524d\u6570\u636e\u5df2\u4e0d\u518d\u4f7f\u7528\u3002\u8986\u76d6\u64cd\u4f5c\u4f1a\u68c0\u67e5\u5feb\u7167\u548c\u5df2\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u7684\u5143\u6570\u636e\u662f\u5426\u76f8\u540c\uff0c\u5305\u62ecschema\u548cRollup\u7b49\u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u540c\u5219\u65e0\u6cd5\u6267\u884c\u6062\u590d\u64cd\u4f5c\u3002"}),"\n",(0,e.jsx)(i.li,{children:"\u76ee\u524d\u5907\u4efd\u7684\u5feb\u7167\u6570\u636e\u65e0\u6cd5\u901a\u8fc7StarRocks\u76f4\u63a5\u5220\u9664\uff0c\u7528\u6237\u53ef\u4ee5\u624b\u52a8\u5220\u9664\u5907\u4efd\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u5feb\u7167\u8def\u5f84\u3002"}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"\u76f8\u5173\u547d\u4ee4",children:"\u76f8\u5173\u547d\u4ee4"}),"\n",(0,e.jsx)(i.p,{children:"\u548c\u5907\u4efd\u6062\u590d\u529f\u80fd\u76f8\u5173\u7684\u547d\u4ee4\u5982\u4e0b\u3002\u4ee5\u4e0b\u547d\u4ee4\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7mysql-client\u8fde\u63a5StarRocks\u540e\uff0c\u4f7f\u7528"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-sql",children:"help [CREATE REPOSITORY | BACKUP | SHOW BACKUP | SHOW SNAPSHOT | RESTORE | CANCEL BACKUP | CANCEL RESTORE | DROP REPOSITORY]\n"})}),"\n",(0,e.jsx)(i.p,{children:"\u7684\u65b9\u5f0f\u67e5\u770b\u8be6\u7ec6\u5e2e\u52a9\u3002"}),"\n",(0,e.jsx)(i.p,{children:"CREATE REPOSITORY"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\u521b\u5efa\u4e00\u4e2a\u8fdc\u7aef\u4ed3\u5e93\u8def\u5f84\uff0c\u7528\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u8be5\u547d\u4ee4\u9700\u8981\u501f\u52a9 Broker \u8fdb\u7a0b\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\uff0c\u4e0d\u540c\u7684 Broker \u9700\u8981\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,e.jsx)(i.a,{href:"/zh/docs/2.2/loading/BrokerLoad",children:"Broker\u6587\u6863"}),"\u3002\u5907\u4efd\u96c6\u7fa4\u548c\u6062\u590d\u96c6\u7fa4\u9700\u8981\u521b\u5efa\u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u5305\u62ec\u4ed3\u5e93\u8def\u5f84\u548c\u4ed3\u5e93\u540d\uff0c\u8fd9\u6837\u624d\u80fd\u4f7f\u6062\u590d\u96c6\u7fa4\u8bfb\u53d6\u5230\u5907\u4efd\u7684\u5feb\u7167\u3002"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"BACKUP"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"\u6267\u884c\u4e00\u6b21\u5907\u4efd\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"SHOW BACKUP"}),"\n",(0,e.jsx)(i.p,{children:"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 backup \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"JobId\uff1a\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684 id\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"SnapshotName\uff1a\u7528\u6237\u6307\u5b9a\u7684\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u540d\u79f0\uff08Label\uff09\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"DbName\uff1a\u5907\u4efd\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"State\uff1a\u5907\u4efd\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"}),"\n",(0,e.jsx)(i.li,{children:"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\u3002"}),"\n",(0,e.jsx)(i.li,{children:"UPLOAD_SNAPSHOT\uff1a\u5feb\u7167\u7ed3\u675f\uff0c\u51c6\u5907\u4e0a\u4f20\u3002"}),"\n",(0,e.jsx)(i.li,{children:"UPLOADING\uff1a\u6b63\u5728\u4e0a\u4f20\u5feb\u7167\u3002"}),"\n",(0,e.jsx)(i.li,{children:"SAVE_META\uff1a\u6b63\u5728\u672c\u5730\u751f\u6210\u5143\u6570\u636e\u6587\u4ef6\u3002"}),"\n",(0,e.jsx)(i.li,{children:"UPLOAD_INFO\uff1a\u4e0a\u4f20\u5143\u6570\u636e\u6587\u4ef6\u548c\u672c\u6b21\u5907\u4efd\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"}),"\n",(0,e.jsx)(i.li,{children:"FINISHED\uff1a\u5907\u4efd\u5b8c\u6210\u3002"}),"\n",(0,e.jsx)(i.li,{children:"CANCELLED\uff1a\u5907\u4efd\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"BackupObjs\uff1a\u672c\u6b21\u5907\u4efd\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"SnapshotFinishedTime\uff1a\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"UploadFinishedTime\uff1a\u5feb\u7167\u4e0a\u4f20\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"UnfinishedTasks\uff1a\u5728 SNAPSHOTTING\uff0cUPLOADING \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u6bb5\uff0c\u672a\u5b8c\u6210\u5b50\u4efb\u52a1\u7684 task id\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002\nSHOW SNAPSHOT"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u67e5\u770b\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u5df2\u5b58\u5728\u7684\u5907\u4efd\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Snapshot\uff1a\u5907\u4efd\u65f6\u6307\u5b9a\u7684\u8be5\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002"}),"\n",(0,e.jsx)(i.li,{children:"Timestamp\uff1a\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002"}),"\n",(0,e.jsx)(i.li,{children:"Status\uff1a\u8be5\u5907\u4efd\u662f\u5426\u6b63\u5e38\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"\u5982\u679c\u5728 SHOW SNAPSHOT \u540e\u6307\u5b9a\u4e86 where \u5b50\u53e5\uff0c\u5219\u53ef\u4ee5\u663e\u793a\u66f4\u8be6\u7ec6\u7684\u5907\u4efd\u4fe1\u606f\u3002"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"Database\uff1a\u5907\u4efd\u65f6\u5bf9\u5e94\u7684 Database\u3002"}),"\n",(0,e.jsx)(i.li,{children:"Details\uff1a\u5c55\u793a\u4e86\u8be5\u5907\u4efd\u5b8c\u6574\u7684\u6570\u636e\u76ee\u5f55\u7ed3\u6784\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"RESTORE"}),"\n",(0,e.jsx)(i.p,{children:"\u6267\u884c\u4e00\u6b21\u6062\u590d\u64cd\u4f5c\u3002"}),"\n",(0,e.jsx)(i.p,{children:"SHOW RESTORE"}),"\n",(0,e.jsx)(i.p,{children:"\u67e5\u770b\u6700\u8fd1\u4e00\u6b21 restore \u4f5c\u4e1a\u7684\u6267\u884c\u60c5\u51b5\uff0c\u5305\u62ec\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"JobId\uff1a\u672c\u6b21\u6062\u590d\u4f5c\u4e1a\u7684 id\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Label\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u540d\u79f0\uff08Label\uff09\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Timestamp\uff1a\u7528\u6237\u6307\u5b9a\u7684\u4ed3\u5e93\u4e2d\u5907\u4efd\u7684\u65f6\u95f4\u6233\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"DbName\uff1a\u6062\u590d\u4f5c\u4e1a\u5bf9\u5e94\u7684 Database\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"State\uff1a\u6062\u590d\u4f5c\u4e1a\u5f53\u524d\u6240\u5728\u9636\u6bb5\uff1a"}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsx)(i.li,{children:"PENDING\uff1a\u4f5c\u4e1a\u521d\u59cb\u72b6\u6001\u3002"}),"\n",(0,e.jsx)(i.li,{children:"SNAPSHOTING\uff1a\u6b63\u5728\u8fdb\u884c\u672c\u5730\u65b0\u5efa\u8868\u7684\u5feb\u7167\u64cd\u4f5c\u3002"}),"\n",(0,e.jsx)(i.li,{children:"DOWNLOAD\uff1a\u6b63\u5728\u53d1\u9001\u4e0b\u8f7d\u5feb\u7167\u4efb\u52a1\u3002"}),"\n",(0,e.jsx)(i.li,{children:"DOWNLOADING\uff1a\u5feb\u7167\u6b63\u5728\u4e0b\u8f7d\u3002"}),"\n",(0,e.jsx)(i.li,{children:"COMMIT\uff1a\u51c6\u5907\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002"}),"\n",(0,e.jsx)(i.li,{children:"COMMITTING\uff1a\u6b63\u5728\u751f\u6548\u5df2\u4e0b\u8f7d\u7684\u5feb\u7167\u3002"}),"\n",(0,e.jsx)(i.li,{children:"FINISHED\uff1a\u6062\u590d\u5b8c\u6210\u3002"}),"\n",(0,e.jsx)(i.li,{children:"CANCELLED\uff1a\u6062\u590d\u5931\u8d25\u6216\u88ab\u53d6\u6d88\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"AllowLoad\uff1a\u6062\u590d\u671f\u95f4\u662f\u5426\u5141\u8bb8\u5bfc\u5165\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"ReplicationNum\uff1a\u6062\u590d\u6307\u5b9a\u7684\u526f\u672c\u6570\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"RestoreObjs\uff1a\u672c\u6b21\u6062\u590d\u6d89\u53ca\u7684\u8868\u548c\u5206\u533a\u7684\u6e05\u5355\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"CreateTime\uff1a\u4f5c\u4e1a\u521b\u5efa\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"MetaPreparedTime\uff1a\u672c\u5730\u5143\u6570\u636e\u751f\u6210\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"SnapshotFinishedTime\uff1a\u672c\u5730\u5feb\u7167\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"DownloadFinishedTime\uff1a\u8fdc\u7aef\u5feb\u7167\u4e0b\u8f7d\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"FinishedTime\uff1a\u672c\u6b21\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"UnfinishedTasks\uff1a\u5728 SNAPSHOTTING\uff0cDOWNLOADING, COMMITTING \u7b49\u9636\u6bb5\uff0c\u4f1a\u6709\u591a\u4e2a\u5b50\u4efb\u52a1\u5728\u540c\u65f6\u8fdb\u884c\uff0c\u8fd9\u91cc\u5c55\u793a\u7684\u5f53\u524d\u9636\u6bb5\uff0c\u672a\u5b8c\u6210\u7684\u5b50\u4efb\u52a1\u7684 task id\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"TaskErrMsg\uff1a\u5982\u679c\u6709\u5b50\u4efb\u52a1\u6267\u884c\u51fa\u9519\uff0c\u8fd9\u91cc\u4f1a\u663e\u793a\u5bf9\u5e94\u5b50\u4efb\u52a1\u7684\u9519\u8bef\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Status\uff1a\u7528\u4e8e\u8bb0\u5f55\u5728\u6574\u4e2a\u4f5c\u4e1a\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u51fa\u73b0\u7684\u4e00\u4e9b\u72b6\u6001\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,e.jsxs)(i.li,{children:["\n",(0,e.jsx)(i.p,{children:"Timeout\uff1a\u4f5c\u4e1a\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u300c\u79d2\u300d\u3002"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(i.p,{children:"CANCEL BACKUP"}),"\n",(0,e.jsx)(i.p,{children:"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u5907\u4efd\u4f5c\u4e1a\u3002"}),"\n",(0,e.jsx)(i.p,{children:"CANCEL RESTORE"}),"\n",(0,e.jsx)(i.p,{children:"\u53d6\u6d88\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u6062\u590d\u4f5c\u4e1a\u3002"}),"\n",(0,e.jsx)(i.p,{children:"DROP REPOSITORY"}),"\n",(0,e.jsx)(i.p,{children:"\u5220\u9664\u5df2\u521b\u5efa\u7684\u8fdc\u7aef\u4ed3\u5e93\u3002\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 StarRocks \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002"})]})}const a=function(n={}){const{wrapper:i}=Object.assign({},(0,l.ah)(),n.components);return i?(0,e.jsx)(i,Object.assign({},n,{children:(0,e.jsx)(x,n)})):x(n)}},11151:(n,i,s)=>{s.d(i,{Zo:()=>c,ah:()=>r});var e=s(67294);const l=e.createContext({});function r(n){const i=e.useContext(l);return e.useMemo((()=>"function"==typeof n?n(i):{...i,...n}),[i,n])}const d={};function c({components:n,children:i,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||d:r(n),e.createElement(l.Provider,{value:c},i)}}}]);