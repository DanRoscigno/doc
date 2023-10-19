"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[53276],{4568:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var r=s(85893),l=s(11151);const c={displayed_sidebar:"Chinese"},i="\u5347\u7ea7 StarRocks",d={id:"deployment/upgrade",title:"\u5347\u7ea7 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5347\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/deployment/upgrade.md",sourceDirName:"deployment",slug:"/deployment/upgrade",permalink:"/zh/docs/2.5/deployment/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/upgrade.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Deploy StarRocks on AWS",permalink:"/zh/docs/2.5/deployment/starrocks_on_aws"},next:{title:"Contribute to StarRocks",permalink:"/zh/docs/2.5/developers/How_to_Contribute"}},h={},t=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"StarRocks \u7248\u672c",id:"starrocks-\u7248\u672c",level:3},{value:"\u5347\u7ea7\u8def\u5f84",id:"\u5347\u7ea7\u8def\u5f84",level:3},{value:"\u5347\u7ea7\u6d41\u7a0b",id:"\u5347\u7ea7\u6d41\u7a0b",level:3},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u517c\u5bb9\u6027\u914d\u7f6e",id:"\u517c\u5bb9\u6027\u914d\u7f6e",level:3},{value:"\u5347\u7ea7 BE",id:"\u5347\u7ea7-be",level:2},{value:"\u5347\u7ea7 CN",id:"\u5347\u7ea7-cn",level:2},{value:"\u5347\u7ea7 FE",id:"\u5347\u7ea7-fe",level:2}];function a(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",pre:"pre",ol:"ol",blockquote:"blockquote",a:"a"},(0,l.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u5347\u7ea7-starrocks",children:"\u5347\u7ea7 StarRocks"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5347\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(e.p,{children:"\u8bf7\u5728\u5347\u7ea7\u524d\u67e5\u770b\u672c\u8282\u4e2d\u7684\u4fe1\u606f\u3002\u5efa\u8bae\u60a8\u6309\u7167\u6587\u4e2d\u63a8\u8350\u7684\u64cd\u4f5c\u5347\u7ea7\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"starrocks-\u7248\u672c",children:"StarRocks \u7248\u672c"}),"\n",(0,r.jsxs)(e.p,{children:["StarRocks \u7684\u7248\u672c\u53f7\u7531\u4e09\u4e2a\u6570\u5b57\u8868\u793a\uff0c\u683c\u5f0f\u4e3a ",(0,r.jsx)(e.strong,{children:"Major.Minor.Patch"}),"\uff0c\u4f8b\u5982 ",(0,r.jsx)(e.code,{children:"2.5.4"}),"\u3002\u7b2c\u4e00\u4e2a\u6570\u5b57\u4ee3\u8868 StarRocks \u7684\u91cd\u5927\u7248\u672c\uff0c\u7b2c\u4e8c\u4e2a\u6570\u5b57\u4ee3\u8868\u5927\u7248\u672c\uff0c\u7b2c\u4e09\u4e2a\u6570\u5b57\u4ee3\u8868\u5c0f\u7248\u672c\u3002\u76ee\u524d\uff0cStarRocks \u4e3a\u90e8\u5206\u7248\u672c\u63d0\u4f9b\u957f\u671f\u652f\u6301\uff08Long-time Support\uff0cLTS\uff09\uff0c\u7ef4\u62a4\u671f\u4e3a\u534a\u5e74\u4ee5\u4e0a\u3002"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"StarRocks \u7248\u672c"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u662f\u5426\u4e3a LTS \u7248\u672c"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v1.19.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.0.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.1.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.2.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.3.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.4.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v2.5.x"}),(0,r.jsx)(e.td,{children:"\u662f"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"v3.0.x"}),(0,r.jsx)(e.td,{children:"\u5426"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u5347\u7ea7\u8def\u5f84",children:"\u5347\u7ea7\u8def\u5f84"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5c0f\u7248\u672c\u5347\u7ea7"})}),"\n",(0,r.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u8de8\u5c0f\u7248\u672c\u5347\u7ea7\u60a8\u7684 StarRocks \u96c6\u7fa4\uff0c\u4f8b\u5982\uff0c\u4ece v2.2.6 \u76f4\u63a5\u5347\u7ea7\u5230 v2.2.11\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5927\u7248\u672c\u5347\u7ea7"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4ece StarRocks v2.0 \u5f00\u59cb\uff0c\u60a8\u53ef\u4ee5\u8de8\u5927\u7248\u672c\u5347\u7ea7 StarRocks \u96c6\u7fa4\uff0c\u4f8b\u5982\uff0c\u4ece v2.2.x \u76f4\u63a5\u5347\u7ea7\u5230 v2.5.x\u3002\u4f46\u51fa\u4e8e\u517c\u5bb9\u6027\u548c\u5b89\u5168\u539f\u56e0\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u5c06 StarRocks \u96c6\u7fa4\u6309",(0,r.jsx)(e.strong,{children:"\u5927\u7248\u672c\u9010\u7ea7\u5347\u7ea7"}),"\u3002\u4f8b\u5982\uff0c\u8981\u5c06 StarRocks v2.2 \u96c6\u7fa4\u5347\u7ea7\u5230 v2.5\uff0c\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u987a\u5e8f\u5347\u7ea7\uff1av2.2.x --\x3e v2.3.x --\x3e v2.4.x --\x3e v2.5.x\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u91cd\u5927\u7248\u672c\u5347\u7ea7"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u60a8\u5fc5\u987b\u4ece v1.19 \u5347\u7ea7\u5230 v2.0\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u60a8\u5fc5\u987b\u4ece v2.5 \u5347\u7ea7\u5230 v3.0\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u5347\u7ea7\u6d41\u7a0b",children:"\u5347\u7ea7\u6d41\u7a0b"}),"\n",(0,r.jsxs)(e.p,{children:["StarRocks \u652f\u6301",(0,r.jsx)(e.strong,{children:"\u6eda\u52a8\u5347\u7ea7"}),"\uff0c\u5141\u8bb8\u60a8\u5728\u4e0d\u505c\u6b62\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\u5347\u7ea7\u60a8\u7684\u96c6\u7fa4\u3002\u6309\u7167\u8bbe\u8ba1\uff0cBE \u548c CN \u5411\u540e\u517c\u5bb9 FE\u3002\u56e0\u6b64\uff0c",(0,r.jsx)(e.strong,{children:"\u60a8\u9700\u8981\u5148\u5347\u7ea7 BE \u548c CN\uff0c\u7136\u540e\u5347\u7ea7 FE"}),"\uff0c\u4ee5\u4fbf\u8ba9\u60a8\u7684\u96c6\u7fa4\u5728\u5347\u7ea7\u7684\u540c\u65f6\u4e5f\u80fd\u6b63\u5e38\u8fd0\u884c\u3002\u9519\u8bef\u7684\u5347\u7ea7\u987a\u5e8f\u53ef\u80fd\u4f1a\u5bfc\u81f4 FE \u4e0e BE/CN \u4e0d\u517c\u5bb9\uff0c\u8fdb\u800c\u5bfc\u81f4\u670d\u52a1\u5d29\u6e83\u3002\u5bf9\u4e8e FE \u8282\u70b9\uff0c\u60a8\u5fc5\u987b\u5148\u5347\u7ea7\u6240\u6709 Follower FE \u8282\u70b9\uff0c\u6700\u540e\u5347\u7ea7 Leader FE \u8282\u70b9\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(e.p,{children:"\u51c6\u5907\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u60a8\u9700\u8981\u8fdb\u884c\u5927\u7248\u672c\u6216\u91cd\u5927\u7248\u672c\u5347\u7ea7\uff0c\u5219\u5fc5\u987b\u8fdb\u884c\u517c\u5bb9\u6027\u914d\u7f6e\u3002\u5728\u5168\u9762\u5347\u7ea7\u96c6\u7fa4\u6240\u6709\u8282\u70b9\u4e4b\u524d\uff0c\u60a8\u8fd8\u9700\u8981\u5bf9\u5176\u4e2d\u4e00\u4e2a FE \u548c BE \u8282\u70b9\u4e0a\u8fdb\u884c\u5347\u7ea7\u6b63\u786e\u6027\u6d4b\u8bd5\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u517c\u5bb9\u6027\u914d\u7f6e",children:"\u517c\u5bb9\u6027\u914d\u7f6e"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u9700\u8fdb\u884c\u5927\u7248\u672c\u6216\u91cd\u5927\u7248\u672c\u5347\u7ea7\uff0c\u5219\u5fc5\u987b\u8fdb\u884c\u517c\u5bb9\u6027\u914d\u7f6e\u3002\u9664\u4e86\u901a\u7528\u7684\u517c\u5bb9\u6027\u914d\u7f6e\u5916\uff0c\u8fd8\u9700\u6839\u636e\u5347\u7ea7\u524d\u7248\u672c\u8fdb\u884c\u5177\u4f53\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u901a\u7528\u517c\u5bb9\u6027\u914d\u7f6e"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5347\u7ea7\u524d\uff0c\u8bf7\u5173\u95ed Tablet Clone\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "0");\nADMIN SET FRONTEND CONFIG ("disable_balance"="true");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="true");\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5b8c\u6210\u5347\u7ea7\uff0c\u5e76\u4e14\u6240\u6709 BE \u8282\u70b9\u72b6\u6001\u53d8\u4e3a ",(0,r.jsx)(e.code,{children:"Alive"})," \u540e\uff0c\u60a8\u53ef\u4ee5\u91cd\u65b0\u5f00\u542f Tablet Clone\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:'ADMIN SET FRONTEND CONFIG ("max_scheduling_tablets" = "2000");\nADMIN SET FRONTEND CONFIG ("max_balancing_tablets" = "100");\nADMIN SET FRONTEND CONFIG ("disable_balance"="false");\nADMIN SET FRONTEND CONFIG ("disable_colocate_balance"="false");\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u81ea v2.0 \u5347\u7ea7"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u81ea v2.0 \u7248\u672c\u5347\u7ea7\u81f3\u5176\u4ed6\u5927\u7248\u672c\u65f6\uff0c\u60a8\u9700\u8981\u8bbe\u7f6e\u4ee5\u4e0b BE \u8bbe\u7f6e\u9879\u4ee5\u53ca\u7cfb\u7edf\u53d8\u91cf\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u66fe\u7ecf\u4fee\u6539\u8fc7 BE \u914d\u7f6e\u9879 ",(0,r.jsx)(e.code,{children:"vector_chunk_size"}),"\uff0c\u5347\u7ea7\u524d\u5fc5\u987b\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,r.jsx)(e.code,{children:"4096"}),"\u3002\u7531\u4e8e\u8be5\u914d\u7f6e\u9879\u4e3a\u9759\u6001\u53c2\u6570\uff0c\u6240\u4ee5\u5fc5\u987b\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(e.strong,{children:"be.conf"})," \u4e2d\u4fee\u6539\uff0c\u5e76\u4e14\u5728\u4fee\u6539\u5b8c\u6210\u540e\u91cd\u542f\u8282\u70b9\u4f7f\u4fee\u6539\u751f\u6548\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5168\u5c40\u8bbe\u7f6e\u7cfb\u7edf\u53d8\u91cf ",(0,r.jsx)(e.code,{children:"batch_size"})," \u4e3a\u5c0f\u4e8e\u7b49\u4e8e ",(0,r.jsx)(e.code,{children:"4096"})," \u7684\u503c\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-SQL",children:"SET GLOBAL batch_size = 4096;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5347\u7ea7-be",children:"\u5347\u7ea7 BE"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u5347\u7ea7\u6b63\u786e\u6027\u6d4b\u8bd5\u540e\uff0c\u60a8\u53ef\u4ee5\u5148\u5347\u7ea7\u96c6\u7fa4\u4e2d\u7684 BE \u8282\u70b9\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8fdb\u5165 BE \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <be_dir> \u66ff\u6362\u4e3a BE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <be_dir>/be\n./bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,r.jsx)(e.strong,{children:"bin"})," \u548c ",(0,r.jsx)(e.strong,{children:"lib"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8\u8be5 BE \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u5347\u7ea7\u5176\u4ed6 BE \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5347\u7ea7-cn",children:"\u5347\u7ea7 CN"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8fdb\u5165 CN \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u4f18\u96c5\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <cn_dir> \u66ff\u6362\u4e3a CN \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <cn_dir>/be\n./bin/stop_cn.sh --graceful\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,r.jsx)(e.strong,{children:"bin"})," \u548c ",(0,r.jsx)(e.strong,{children:"lib"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\ncp -r /tmp/StarRocks-x.x.x/be/lib  .\ncp -r /tmp/StarRocks-x.x.x/be/bin  .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8\u8be5 CN \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_cn.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep starrocks_be\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u5347\u7ea7\u5176\u4ed6 CN \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5347\u7ea7-fe",children:"\u5347\u7ea7 FE"}),"\n",(0,r.jsx)(e.p,{children:"\u5347\u7ea7\u6240\u6709 BE \u548c CN \u8282\u70b9\u540e\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u5347\u7ea7 FE \u8282\u70b9\u3002\u60a8\u5fc5\u987b\u5148\u5347\u7ea7 Follower FE \u8282\u70b9\uff0c\u7136\u540e\u518d\u5347\u7ea7 Leader FE \u8282\u70b9\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8fdb\u5165 FE \u8282\u70b9\u5de5\u4f5c\u8def\u5f84\uff0c\u5e76\u505c\u6b62\u8be5\u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"# \u5c06 <fe_dir> \u66ff\u6362\u4e3a FE \u8282\u70b9\u7684\u90e8\u7f72\u76ee\u5f55\u3002\ncd <fe_dir>/fe\n./bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u66ff\u6362\u90e8\u7f72\u6587\u4ef6\u539f\u6709\u8def\u5f84 ",(0,r.jsx)(e.strong,{children:"bin"}),"\u3001",(0,r.jsx)(e.strong,{children:"lib"})," \u4ee5\u53ca ",(0,r.jsx)(e.strong,{children:"spark-dpp"})," \u4e3a\u65b0\u7248\u672c\u7684\u90e8\u7f72\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"mv lib lib.bak \nmv bin bin.bak\nmv spark-dpp spark-dpp.bak\ncp -r /tmp/StarRocks-x.x.x/fe/lib  .   \ncp -r /tmp/StarRocks-x.x.x/fe/bin  .\ncp -r /tmp/StarRocks-x.x.x/fe/spark-dpp  .\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u542f\u52a8\u8be5 FE \u8282\u70b9\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"sh bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u67e5\u770b\u8282\u70b9\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Bash",children:"ps aux | grep StarRocksFE\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\u5347\u7ea7\u5176\u4ed6 Follower FE \u8282\u70b9\uff0c\u6700\u540e\u5347\u7ea7 Leader FE \u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u60a8\u4ece v2.5 \u5347\u7ea7\u81f3 v3.0 \u4e4b\u540e\uff0c\u8fdb\u884c\u4e86\u56de\u6eda\uff0c\u7136\u540e\u518d\u6b21\u5347\u7ea7\u81f3 v3.0\uff0c\u4e3a\u4e86\u907f\u514d\u90e8\u5206 Follower FE \u8282\u70b9\u5143\u6570\u636e\u5347\u7ea7\u5931\u8d25\uff0c\u5219\u5fc5\u987b\u5728\u5347\u7ea7\u5b8c\u6210\u540e\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6267\u884c ",(0,r.jsx)(e.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM CREATE IMAGE"})," \u521b\u5efa\u65b0\u7684\u5143\u6570\u636e\u5feb\u7167\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u7b49\u5f85\u5143\u6570\u636e\u5feb\u7167\u6587\u4ef6\u540c\u6b65\u81f3\u5176\u4ed6 FE \u8282\u70b9\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b Leader FE \u8282\u70b9\u7684\u65e5\u5fd7\u6587\u4ef6 ",(0,r.jsx)(e.strong,{children:"fe.log"}),' \u786e\u8ba4\u5143\u6570\u636e\u5feb\u7167\u6587\u4ef6\u662f\u5426\u63a8\u9001\u5b8c\u6210\u3002\u5982\u679c\u65e5\u5fd7\u6253\u5370\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5219\u8bf4\u660e\u5feb\u7167\u6587\u4ef6\u63a8\u9001\u5b8c\u6210\uff1a"push image.* from subdir [] to other nodes. totally xx nodes, push successed xx nodes"\u3002']}),"\n"]})]})}const x=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>c});var r=s(67294);const l=r.createContext({});function c(n){const e=r.useContext(l);return r.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const i={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||i:c(n),r.createElement(l.Provider,{value:d},e)}}}]);