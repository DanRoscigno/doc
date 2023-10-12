"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[8710],{84449:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(85893),s=r(11151);const i={displayed_sidebar:"Chinese31"},c="\u7cfb\u7edf\u67b6\u6784",l={id:"introduction/Architecture",title:"\u7cfb\u7edf\u67b6\u6784",description:"StarRocks \u67b6\u6784\u7b80\u6d01\uff0c\u6574\u4e2a\u7cfb\u7edf\u7684\u6838\u5fc3\u53ea\u6709 FE\uff08Frontend\uff09\u3001BE\uff08Backend\uff09\u4e24\u7c7b\u8fdb\u7a0b\uff0c\u4e0d\u4f9d\u8d56\u4efb\u4f55\u5916\u90e8\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u90e8\u7f72\u4e0e\u7ef4\u62a4\u3002FE \u548c BE \u6a21\u5757\u90fd\u53ef\u4ee5\u5728\u7ebf\u6c34\u5e73\u6269\u5c55\uff0c\u5143\u6570\u636e\u548c\u4e1a\u52a1\u6570\u636e\u90fd\u6709\u526f\u672c\u673a\u5236\uff0c\u786e\u4fdd\u6574\u4e2a\u7cfb\u7edf\u65e0\u5355\u70b9\u3002StarRocks \u63d0\u4f9b MySQL \u534f\u8bae\u63a5\u53e3\uff0c\u652f\u6301\u6807\u51c6 SQL \u8bed\u6cd5\u3002\u7528\u6237\u53ef\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u65b9\u4fbf\u5730\u67e5\u8be2\u548c\u5206\u6790 StarRocks \u4e2d\u7684\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/introduction/Architecture.md",sourceDirName:"introduction",slug:"/introduction/Architecture",permalink:"/doc/zh/docs/3.0/introduction/Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/introduction/Architecture.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u4ec0\u4e48\u662f StarRocks",permalink:"/doc/zh/docs/3.0/introduction/what_is_starrocks"},next:{title:"\u4ea7\u54c1\u7279\u6027",permalink:"/doc/zh/docs/3.0/introduction/Features"}},o={},d=[{value:"\u7cfb\u7edf\u67b6\u6784\u56fe",id:"\u7cfb\u7edf\u67b6\u6784\u56fe",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3},{value:"\u6570\u636e\u7ba1\u7406",id:"\u6570\u636e\u7ba1\u7406",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote",a:"a",strong:"strong"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u7cfb\u7edf\u67b6\u6784",children:"\u7cfb\u7edf\u67b6\u6784"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u67b6\u6784\u7b80\u6d01\uff0c\u6574\u4e2a\u7cfb\u7edf\u7684\u6838\u5fc3\u53ea\u6709 FE\uff08Frontend\uff09\u3001BE\uff08Backend\uff09\u4e24\u7c7b\u8fdb\u7a0b\uff0c\u4e0d\u4f9d\u8d56\u4efb\u4f55\u5916\u90e8\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u90e8\u7f72\u4e0e\u7ef4\u62a4\u3002FE \u548c BE \u6a21\u5757\u90fd\u53ef\u4ee5\u5728\u7ebf\u6c34\u5e73\u6269\u5c55\uff0c\u5143\u6570\u636e\u548c\u4e1a\u52a1\u6570\u636e\u90fd\u6709\u526f\u672c\u673a\u5236\uff0c\u786e\u4fdd\u6574\u4e2a\u7cfb\u7edf\u65e0\u5355\u70b9\u3002StarRocks \u63d0\u4f9b MySQL \u534f\u8bae\u63a5\u53e3\uff0c\u652f\u6301\u6807\u51c6 SQL \u8bed\u6cd5\u3002\u7528\u6237\u53ef\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u65b9\u4fbf\u5730\u67e5\u8be2\u548c\u5206\u6790 StarRocks \u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7cfb\u7edf\u67b6\u6784\u56fe",children:"\u7cfb\u7edf\u67b6\u6784\u56fe"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"system_architecture",src:r(22393).Z+"",width:"2560",height:"1352"})}),"\n",(0,t.jsx)(n.h3,{id:"fe",children:"FE"}),"\n",(0,t.jsx)(n.p,{children:"FE \u662f StarRocks \u7684\u524d\u7aef\u8282\u70b9\uff0c\u8d1f\u8d23\u7ba1\u7406\u5143\u6570\u636e\uff0c\u7ba1\u7406\u5ba2\u6237\u7aef\u8fde\u63a5\uff0c\u8fdb\u884c\u67e5\u8be2\u89c4\u5212\uff0c\u67e5\u8be2\u8c03\u5ea6\u7b49\u5de5\u4f5c\u3002\u6bcf\u4e2a FE \u8282\u70b9\u90fd\u4f1a\u5728\u5185\u5b58\u4fdd\u7559\u4e00\u4efd\u5b8c\u6574\u7684\u5143\u6570\u636e\uff0c\u8fd9\u6837\u6bcf\u4e2a FE \u8282\u70b9\u90fd\u80fd\u591f\u63d0\u4f9b\u65e0\u5dee\u522b\u7684\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"FE \u6709\u4e09\u79cd\u89d2\u8272\uff1aLeader FE\uff0cFollower FE \u548c Observer FE\u3002Follower \u4f1a\u901a\u8fc7\u7c7b Paxos \u7684 Berkeley DB Java Edition\uff08BDBJE\uff09\u534f\u8bae\u81ea\u52a8\u9009\u4e3e\u51fa\u4e00\u4e2a Leader\u3002\u4e09\u8005\u533a\u522b\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Leader"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Leader \u4ece Follower \u4e2d\u81ea\u52a8\u9009\u51fa\uff0c\u8fdb\u884c\u9009\u4e3b\u9700\u8981\u96c6\u7fa4\u4e2d\u6709\u534a\u6570\u4ee5\u4e0a\u7684 Follower \u8282\u70b9\u5b58\u6d3b\u3002\u5982\u679c Leader \u8282\u70b9\u5931\u8d25\uff0cFollower \u4f1a\u53d1\u8d77\u65b0\u4e00\u8f6e\u9009\u4e3e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Leader FE \u63d0\u4f9b\u5143\u6570\u636e\u8bfb\u5199\u670d\u52a1\u3002\u53ea\u6709 Leader \u8282\u70b9\u4f1a\u5bf9\u5143\u6570\u636e\u8fdb\u884c\u5199\u64cd\u4f5c\uff0cFollower \u548c Observer \u53ea\u6709\u8bfb\u53d6\u6743\u9650\u3002Follower \u548c Observer \u5c06\u5143\u6570\u636e\u5199\u5165\u8bf7\u6c42\u8def\u7531\u5230 Leader \u8282\u70b9\uff0cLeader \u66f4\u65b0\u5b8c\u6570\u636e\u540e\uff0c\u4f1a\u901a\u8fc7 BDB JE \u540c\u6b65\u7ed9 Follower \u548c Observer\u3002\u5fc5\u987b\u6709\u534a\u6570\u4ee5\u4e0a\u7684 Follower \u8282\u70b9\u540c\u6b65\u6210\u529f\u624d\u7b97\u4f5c\u5143\u6570\u636e\u5199\u5165\u6210\u529f\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Follower"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u53ea\u6709\u5143\u6570\u636e\u8bfb\u53d6\u6743\u9650\uff0c\u65e0\u5199\u5165\u6743\u9650\u3002\u901a\u8fc7\u56de\u653e Leader \u7684\u5143\u6570\u636e\u65e5\u5fd7\u6765\u5f02\u6b65\u540c\u6b65\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u53c2\u4e0e Leader \u9009\u4e3e\uff0c\u5fc5\u987b\u6709\u534a\u6570\u4ee5\u4e0a\u7684 Follower \u8282\u70b9\u5b58\u6d3b\u624d\u80fd\u8fdb\u884c\u9009\u4e3b\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Observer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e3b\u8981\u7528\u4e8e\u6269\u5c55\u96c6\u7fa4\u7684\u67e5\u8be2\u5e76\u53d1\u80fd\u529b\uff0c\u53ef\u9009\u90e8\u7f72\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u53c2\u4e0e\u9009\u4e3b\uff0c\u4e0d\u4f1a\u589e\u52a0\u96c6\u7fa4\u7684\u9009\u4e3b\u538b\u529b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u901a\u8fc7\u56de\u653e Leader \u7684\u5143\u6570\u636e\u65e5\u5fd7\u6765\u5f02\u6b65\u540c\u6b65\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"be",children:"BE"}),"\n",(0,t.jsx)(n.p,{children:"BE \u662f StarRocks \u7684\u540e\u7aef\u8282\u70b9\uff0c\u8d1f\u8d23\u6570\u636e\u5b58\u50a8\u3001SQL\u6267\u884c\u7b49\u5de5\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5b58\u50a8\u65b9\u9762\uff0cStarRocks \u7684 BE \u8282\u70b9\u90fd\u662f\u5b8c\u5168\u5bf9\u7b49\u7684\uff0cFE \u6309\u7167\u4e00\u5b9a\u7b56\u7565\u5c06\u6570\u636e\u5206\u914d\u5230\u5bf9\u5e94\u7684 BE \u8282\u70b9\u3002BE \u8d1f\u8d23\u5c06\u5bfc\u5165\u6570\u636e\u5199\u6210\u5bf9\u5e94\u7684\u683c\u5f0f\u5b58\u50a8\u4e0b\u6765\uff0c\u5e76\u751f\u6210\u76f8\u5173\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u6267\u884c SQL \u8ba1\u7b97\u65f6\uff0c\u4e00\u6761 SQL \u8bed\u53e5\u9996\u5148\u4f1a\u6309\u7167\u5177\u4f53\u7684\u8bed\u4e49\u89c4\u5212\u6210\u903b\u8f91\u6267\u884c\u5355\u5143\uff0c\u7136\u540e\u518d\u6309\u7167\u6570\u636e\u7684\u5206\u5e03\u60c5\u51b5\u62c6\u5206\u6210\u5177\u4f53\u7684\u7269\u7406\u6267\u884c\u5355\u5143\u3002\u7269\u7406\u6267\u884c\u5355\u5143\u4f1a\u5728\u5bf9\u5e94\u7684\u6570\u636e\u5b58\u50a8\u8282\u70b9\u4e0a\u6267\u884c\uff0c\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u672c\u5730\u8ba1\u7b97\uff0c\u907f\u514d\u6570\u636e\u7684\u4f20\u8f93\u4e0e\u62f7\u8d1d\uff0c\u4ece\u800c\u80fd\u591f\u5f97\u5230\u6781\u81f4\u7684\u67e5\u8be2\u6027\u80fd\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fdb\u884c Stream load \u5bfc\u5165\u65f6\uff0cFE \u4f1a\u9009\u5b9a\u4e00\u4e2a BE \u8282\u70b9\u4f5c\u4e3a Coordinator BE\uff0c\u8d1f\u8d23\u5c06\u6570\u636e\u5206\u53d1\u5230\u5176\u4ed6 BE \u8282\u70b9\u3002\u5bfc\u5165\u7684\u6700\u7ec8\u7ed3\u679c\u7531 Coordinator BE \u8fd4\u56de\u7ed9\u7528\u6237\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/3.0/loading/StreamLoad",children:"Stream load"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6570\u636e\u7ba1\u7406",children:"\u6570\u636e\u7ba1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u4f7f\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u91c7\u7528\u5206\u533a\u5206\u6876\u673a\u5236\u8fdb\u884c\u6570\u636e\u7ba1\u7406\u3002\u4e00\u5f20\u8868\u53ef\u4ee5\u88ab\u5212\u5206\u6210\u591a\u4e2a\u5206\u533a\uff0c\u5982\u5c06\u4e00\u5f20\u8868\u6309\u7167\u65f6\u95f4\u6765\u8fdb\u884c\u5206\u533a\uff0c\u7c92\u5ea6\u53ef\u4ee5\u662f\u4e00\u5929\uff0c\u6216\u8005\u4e00\u5468\u7b49\u3002\u4e00\u4e2a\u5206\u533a\u5185\u7684\u6570\u636e\u53ef\u4ee5\u6839\u636e\u4e00\u5217\u6216\u8005\u591a\u5217\u8fdb\u884c\u5206\u6876\uff0c\u5c06\u6570\u636e\u5207\u5206\u6210\u591a\u4e2a Tablet\u3002Tablet \u662f StarRocks \u4e2d\u6700\u5c0f\u7684\u6570\u636e\u7ba1\u7406\u5355\u5143\u3002\u6bcf\u4e2a Tablet \u90fd\u4f1a\u4ee5\u591a\u526f\u672c (replica) \u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u4e0d\u540c\u7684 BE \u8282\u70b9\u4e2d\u3002\u60a8\u53ef\u4ee5\u81ea\u884c\u6307\u5b9a Tablet \u7684\u4e2a\u6570\u548c\u5927\u5c0f\u3002 StarRocks \u4f1a\u7ba1\u7406\u597d\u6bcf\u4e2a Tablet \u526f\u672c\u7684\u5206\u5e03\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u56fe\u5c55\u793a\u4e86 StarRocks \u7684\u6570\u636e\u5212\u5206\u4ee5\u53ca Tablet \u591a\u526f\u672c\u673a\u5236\u3002\u56fe\u4e2d\uff0c\u8868\u6309\u7167\u65e5\u671f\u5212\u5206\u4e3a 4 \u4e2a\u5206\u533a\uff0c\u7b2c\u4e00\u4e2a\u5206\u533a\u8fdb\u4e00\u6b65\u5207\u5206\u6210 4 \u4e2a Tablet\u3002\u6bcf\u4e2a Tablet \u4f7f\u7528 3 \u526f\u672c\u8fdb\u884c\u5907\u4efd\uff0c\u5206\u5e03\u5728 3 \u4e2a\u4e0d\u540c\u7684 BE \u8282\u70b9\u4e0a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"data_management",src:r(25080).Z+"",width:"1280",height:"510"})}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e\u4e00\u5f20\u8868\u88ab\u5207\u5206\u6210\u4e86\u591a\u4e2a Tablet\uff0cStarRocks \u5728\u6267\u884c SQL \u8bed\u53e5\u65f6\uff0c\u53ef\u4ee5\u5bf9\u6240\u6709 Tablet \u5b9e\u73b0\u5e76\u53d1\u5904\u7406\uff0c\u4ece\u800c\u5145\u5206\u7684\u5229\u7528\u591a\u673a\u3001\u591a\u6838\u63d0\u4f9b\u7684\u8ba1\u7b97\u80fd\u529b\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u5229\u7528 StarRocks \u6570\u636e\u7684\u5207\u5206\u65b9\u5f0f\uff0c\u5c06\u9ad8\u5e76\u53d1\u8bf7\u6c42\u538b\u529b\u5206\u644a\u5230\u591a\u4e2a\u7269\u7406\u8282\u70b9\uff0c\u4ece\u800c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u7269\u7406\u8282\u70b9\u7684\u65b9\u5f0f\u6765\u6269\u5c55\u7cfb\u7edf\u652f\u6301\u9ad8\u5e76\u53d1\u7684\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Tablet \u7684\u5206\u5e03\u65b9\u5f0f\u4e0e\u5177\u4f53\u7684\u7269\u7406\u8282\u70b9\u6ca1\u6709\u76f8\u5173\u6027\u3002\u5728 BE \u8282\u70b9\u89c4\u6a21\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6bd4\u5982\u5728\u6269\u5bb9\u3001\u7f29\u5bb9\u65f6\uff0c**StarRocks \u53ef\u4ee5\u505a\u5230\u65e0\u9700\u505c\u6b62\u670d\u52a1\uff0c\u76f4\u63a5\u5b8c\u6210\u8282\u70b9\u7684\u589e\u51cf\u3002**\u8282\u70b9\u7684\u53d8\u5316\u4f1a\u89e6\u53d1 Tablet \u7684\u81ea\u52a8\u8fc1\u79fb\u3002\u5f53\u8282\u70b9\u589e\u52a0\u65f6\uff0c\u4e00\u90e8\u5206 Tablet \u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u88ab\u5747\u8861\u5230\u65b0\u589e\u7684\u8282\u70b9\uff0c\u4ece\u800c\u4f7f\u5f97\u6570\u636e\u80fd\u591f\u5728\u96c6\u7fa4\u5185\u5206\u5e03\u7684\u66f4\u52a0\u5747\u8861\u3002\u5728\u8282\u70b9\u51cf\u5c11\u65f6\uff0c\u4e0b\u7ebf\u673a\u5668\u4e0a\u7684 Tablet \u4f1a\u88ab\u81ea\u52a8\u5747\u8861\u5230\u5176\u4ed6\u8282\u70b9\uff0c\u4ece\u800c\u81ea\u52a8\u4fdd\u8bc1\u6570\u636e\u7684\u526f\u672c\u6570\u4e0d\u53d8\u3002\u7ba1\u7406\u5458\u80fd\u591f\u975e\u5e38\u5bb9\u6613\u5730\u5b9e\u73b0 StarRocks \u7684\u5f39\u6027\u4f38\u7f29\uff0c\u65e0\u9700\u624b\u5de5\u8fdb\u884c\u4efb\u4f55\u6570\u636e\u7684\u91cd\u5206\u5e03\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["StarRocks \u652f\u6301 ",(0,t.jsx)(n.strong,{children:"Tablet \u591a\u526f\u672c\u5b58\u50a8"}),"\uff0c\u9ed8\u8ba4\u526f\u672c\u6570\u4e3a\u4e09\u4e2a\u3002**\u591a\u526f\u672c\u80fd\u591f\u4fdd\u8bc1\u6570\u636e\u5b58\u50a8\u7684\u9ad8\u53ef\u9760\u4ee5\u53ca\u670d\u52a1\u7684\u9ad8\u53ef\u7528\u3002**\u5728\u4f7f\u7528\u4e09\u526f\u672c\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u8282\u70b9\u7684\u5f02\u5e38\u4e0d\u4f1a\u5f71\u54cd\u670d\u52a1\u7684\u53ef\u7528\u6027\uff0c\u96c6\u7fa4\u7684\u8bfb\u3001\u5199\u670d\u52a1\u4ecd\u7136\u80fd\u591f\u6b63\u5e38\u8fdb\u884c\u3002\u53e6\u5916\uff0c\u589e\u52a0\u526f\u672c\u6570\u8fd8\u6709\u52a9\u4e8e\u63d0\u9ad8\u7cfb\u7edf\u7684\u9ad8\u5e76\u53d1\u67e5\u8be2\u80fd\u529b\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},22393:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1.2-1-92f87ac074095232749e57f95c03bf92.png"},25080:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/1.2-2-2bf1cedfc3be7f074b1ddc5d6831289f.png"},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>i});var t=r(67294);const s=t.createContext({});function i(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:i(e),t.createElement(s.Provider,{value:l},n)}}}]);