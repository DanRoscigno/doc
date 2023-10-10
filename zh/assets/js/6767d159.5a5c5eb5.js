"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35518],{16325:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=s(85893),l=s(11151);const r={},c="\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21",d={id:"using_starrocks/data_modeling_with_materialized_views",title:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u901a\u8fc7 StarRocks \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6765\u8fdb\u884c\u6570\u636e\u5efa\u6a21\uff0c\u4ece\u800c\u6781\u5927\u5730\u7b80\u5316\u6570\u636e\u4ed3\u5e93\u7684 ETL Pipeline\uff0c\u5e76\u663e\u8457\u63d0\u9ad8\u6570\u636e\u8d28\u91cf\u548c\u67e5\u8be2\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/using_starrocks/data_modeling_with_materialized_views.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/data_modeling_with_materialized_views",permalink:"/zh/docs/3.0/using_starrocks/data_modeling_with_materialized_views",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/using_starrocks/data_modeling_with_materialized_views.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u52a0\u901f\u6570\u636e\u6e56\u67e5\u8be2",permalink:"/zh/docs/3.0/using_starrocks/data_lake_query_acceleration_with_materialized_views"},next:{title:"Query Cache",permalink:"/zh/docs/3.0/using_starrocks/query_cache"}},t={},h=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u80fd\u529b",id:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u80fd\u529b",level:2},{value:"\u81ea\u52a8\u5237\u65b0",id:"\u81ea\u52a8\u5237\u65b0",level:3},{value:"\u5206\u533a\u5237\u65b0",id:"\u5206\u533a\u5237\u65b0",level:3},{value:"\u4e0e\u89c6\u56fe\u7684\u534f\u540c\u4f7f\u7528",id:"\u4e0e\u89c6\u56fe\u7684\u534f\u540c\u4f7f\u7528",level:3},{value:"Schema Change",id:"schema-change",level:3},{value:"\u5206\u5c42\u5efa\u6a21",id:"\u5206\u5c42\u5efa\u6a21",level:2},{value:"\u5206\u533a\u5efa\u6a21",id:"\u5206\u533a\u5efa\u6a21",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",img:"img",ol:"ol",h3:"h3",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,l.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21",children:"\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u901a\u8fc7 StarRocks \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6765\u8fdb\u884c\u6570\u636e\u5efa\u6a21\uff0c\u4ece\u800c\u6781\u5927\u5730\u7b80\u5316\u6570\u636e\u4ed3\u5e93\u7684 ETL Pipeline\uff0c\u5e76\u663e\u8457\u63d0\u9ad8\u6570\u636e\u8d28\u91cf\u548c\u67e5\u8be2\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u6570\u636e\u5efa\u6a21\u662f\u901a\u8fc7\u5408\u7406\u7684\u65b9\u6cd5\u8fdb\u884c\u6570\u636e\u6e05\u6d17\u3001\u5206\u5c42\u3001\u805a\u5408\u548c\u5173\u8054\u7684\u8fc7\u7a0b\u3002\u5f53\u539f\u59cb\u6570\u636e\u8d28\u91cf\u8fc7\u4f4e\uff0c\u6307\u6807\u8fc7\u591a\u8fc7\u4e8e\u590d\u6742\uff0c\u6216\u672a\u7ecf\u805a\u5408\u5bfc\u81f4\u67e5\u8be2\u6210\u672c\u8fc7\u9ad8\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5bf9\u539f\u59cb\u6570\u636e\u8fdb\u884c\u5efa\u6a21\u5f97\u5230\u6613\u4e8e\u7406\u89e3\u7684\u3001\u53ef\u4f9b\u4f7f\u7528\u7684\u6570\u636e\u7ed3\u679c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u800c\uff0c\u5728\u73b0\u5b9e\u6570\u636e\u5efa\u6a21\u4e2d\u5e38\u89c1\u7684\u77db\u76fe\u5728\u4e8e\u5efa\u6a21\u8fc7\u7a0b\u96be\u4ee5\u8ddf\u4e0a\u4e1a\u52a1\u53d1\u5c55\u7684\u6b65\u4f10\uff0c\u5e76\u4e14\u5f88\u96be\u8861\u91cf\u6570\u636e\u5efa\u6a21\u5de5\u4f5c\u7684\u6295\u8d44\u56de\u62a5\u3002\u5efa\u6a21\u624b\u6bb5\u867d\u7136\u7b80\u5355\uff0c\u4f46\u9700\u8981\u4e1a\u52a1\u4e13\u5bb6\u5728\u6570\u636e\u7ec4\u7ec7\u548c\u6cbb\u7406\u65b9\u9762\u6709\u624e\u5b9e\u7684\u80cc\u666f\uff0c\u5bf9\u6570\u636e\u6574\u7406\u52a0\u5de5\uff0c\u8fd9\u662f\u4e2a\u590d\u6742\u7684\u8fc7\u7a0b\u3002\u5728\u4e1a\u52a1\u7684\u65e9\u671f\u9636\u6bb5\uff0c\u51b3\u7b56\u8005\u901a\u5e38\u4e0d\u4f1a\u5728\u6570\u636e\u5efa\u6a21\u65b9\u9762\u6295\u5165\u8db3\u591f\u8d44\u6e90\uff0c\u5e76\u4e14\u5f88\u96be\u770b\u5230\u6570\u636e\u5efa\u6a21\u80fd\u591f\u5e26\u6765\u7684\u4ef7\u503c\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u4e1a\u52a1\u6a21\u5f0f\u53ef\u80fd\u4f1a\u8fc5\u901f\u53d8\u5316\uff0c\u800c\u5efa\u6a21\u65b9\u6cd5\u672c\u8eab\u4e5f\u9700\u8981\u4e0d\u65ad\u8fed\u4ee3\u548c\u6f14\u5316\u3002\u56e0\u6b64\uff0c\u8bb8\u591a\u6570\u636e\u5206\u6790\u5e08\u503e\u5411\u4e8e\u4e0d\u4f7f\u7528\u6570\u636e\u5efa\u6a21\uff0c\u76f4\u63a5\u4f7f\u7528\u539f\u59cb\u6570\u636e\uff0c\u4ece\u800c\u4e0d\u53ef\u907f\u514d\u5730\u5bfc\u81f4\u6570\u636e\u8d28\u91cf\u548c\u67e5\u8be2\u6027\u80fd\u7684\u95ee\u9898\u3002\u5f53\u5efa\u6a21\u7684\u9700\u6c42\u51fa\u73b0\u65f6\uff0c\u53c8\u9047\u5230\u6570\u636e\u4f7f\u7528\u65b9\u5f0f\u5df2\u7ecf\u6210\u578b\uff0c\u96be\u4ee5\u91cd\u6784\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 StarRocks \u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21\u53ef\u4ee5\u6709\u6548\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\u3002StarRocks \u5f02\u6b65\u7269\u5316\u89c6\u56fe\u5177\u5907\u4ee5\u4e0b\u80fd\u529b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5316\u6570\u4ed3\u67b6\u6784"}),"\uff1a\u7531\u4e8e StarRocks \u53ef\u4ee5\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u6570\u636e\u6cbb\u7406\u4f53\u9a8c\uff0c\u60a8\u65e0\u9700\u7ef4\u62a4\u5176\u4ed6\u6570\u636e\u5904\u7406\u7cfb\u7edf\u6216\u7ec4\u4ef6\uff0c\u8282\u7701\u4e86\u7528\u4e8e\u7ef4\u62a4\u8fd9\u4e9b\u7cfb\u7edf\u7684\u4eba\u529b\u548c\u7269\u7406\u8d44\u6e90\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5316\u5efa\u6a21\u4f53\u9a8c"}),"\uff1a\u4efb\u4f55\u53ea\u5177\u5907\u57fa\u672c SQL \u77e5\u8bc6\u7684\u6570\u636e\u5206\u6790\u5e08\u90fd\u53ef\u4ee5\u4f7f\u7528 StarRocks \u8fdb\u884c\u6570\u636e\u5efa\u6a21\uff0c\u65e0\u9700\u4e13\u4e1a\u6570\u636e\u5de5\u7a0b\u5e08\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5316\u7cfb\u7edf\u7ef4\u62a4"}),"\uff1aStarRocks \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u81ea\u52a8\u7ba1\u7406\u6570\u636e\u4e4b\u95f4\u7684\u5c42\u7ea7\u548c\u4f9d\u8d56\u5173\u7cfb\uff0c\u65e0\u9700\u6574\u4e2a\u6570\u636e\u5e73\u53f0\u6765\u5904\u7406\u6b64\u4efb\u52a1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Modeling-1",src:s(80085).Z+"",width:"1280",height:"630"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5b9e\u9645\u60c5\u51b5\u4e2d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u7ed3\u5408\u4f7f\u7528 StarRocks \u7684\u89c6\u56fe\uff08\u903b\u8f91\u89c6\u56fe\uff09\u548c\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6765\u8fdb\u884c\u6570\u636e\u5efa\u6a21\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u89c6\u56fe\u5c06\u5b9e\u65f6\u6570\u636e\u4e0e\u7ef4\u5ea6\u6570\u636e\u5173\u8054\uff0c\u5e76\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u5c06\u6570\u636e\u6e56\u4e2d\u7684\u5386\u53f2\u6570\u636e\u4e0e\u7ef4\u5ea6\u6570\u636e\u5173\u8054\u3002\u540c\u65f6\u8fdb\u884c\u5fc5\u8981\u7684\u6570\u636e\u6e05\u6d17\u548c\u4e1a\u52a1\u8bed\u4e49\u6620\u5c04\uff0c\u4ee5\u5f97\u5230\u53cd\u6620\u4e1a\u52a1\u8bed\u4e49\u660e\u7ec6\u6570\u636e\u7684\u4e2d\u95f4\u5c42\uff08Intermediate Layer\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u5e94\u7528\u5c42\uff08Application Layer\uff09\u4e2d\uff0c\u9762\u5411\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u8fdb\u884c\u6570\u636e\u7684 Join\u3001Agg\u3001Union\u3001Window \u8ba1\u7b97\uff0c\u751f\u6210\u7528\u4e8e\u5b9e\u65f6\u94fe\u8def\u7684\u89c6\u56fe\u548c\u7528\u4e8e\u8fd1\u5b9e\u65f6\u94fe\u8def\u7684\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u5e94\u7528\u4fa7\uff08Application\uff09\uff0c\u6839\u636e\u60a8\u7684\u65f6\u6548\u6027\u548c\u6027\u80fd\u8981\u6c42\u9009\u62e9\u9002\u5f53\u7684\u5206\u6790\u6570\u636e\u5b58\u50a8\uff08ADS\uff09\u8fdb\u884c\u67e5\u8be2\u5206\u6790\uff0c\u670d\u52a1\u4e8e\u5b9e\u65f6\u5927\u5c4f\u3001\u8fd1\u5b9e\u65f6 BI\u3001Ad hoc \u67e5\u8be2\u548c\u5b9a\u65f6\u62a5\u544a\u7b49\u9700\u6c42\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5229\u7528 StarRocks \u7684\u51e0\u79cd\u5185\u7f6e\u80fd\u529b\uff0c\u8fd9\u4e9b\u80fd\u529b\u5c06\u5728\u4e0b\u4e00\u8282\u4e2d\u8be6\u7ec6\u9610\u8ff0\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u80fd\u529b",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u80fd\u529b"}),"\n",(0,i.jsx)(e.p,{children:"StarRocks \u7684\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u5177\u5907\u4ee5\u4e0b\u539f\u5b50\u80fd\u529b\uff0c\u53ef\u52a9\u529b\u6570\u636e\u5efa\u6a21\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u52a8\u5237\u65b0"}),"\uff1a\u5728\u6570\u636e\u5bfc\u5165\u81f3\u57fa\u8868\u540e\uff0c\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u81ea\u52a8\u5237\u65b0\u3002\u60a8\u65e0\u9700\u5728\u5916\u90e8\u7ef4\u62a4\u8c03\u5ea6\u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5206\u533a\u5237\u65b0"}),"\uff1a\u901a\u8fc7\u6709\u65f6\u5e8f\u5c5e\u6027\u7684\u62a5\u8868\uff0c\u53ef\u4ee5\u901a\u8fc7\u5206\u533a\u5237\u65b0\u5b9e\u73b0\u8fd1\u5b9e\u65f6\u8ba1\u7b97\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e0e\u89c6\u56fe\u534f\u540c\u4f7f\u7528"}),"\uff1a\u901a\u8fc7\u534f\u540c\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u548c\u903b\u8f91\u89c6\u56fe\uff0c\u60a8\u53ef\u4ee5\u5b9e\u73b0\u591a\u5c42\u5efa\u6a21\uff0c\u4ece\u800c\u5b9e\u73b0\u4e2d\u95f4\u5c42\u7684\u91cd\u590d\u4f7f\u7528\u548c\u6570\u636e\u6a21\u578b\u7684\u7b80\u5316\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Schema Change"}),"\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684 SQL \u8bed\u53e5\u66f4\u6539\u8ba1\u7b97\u7ed3\u679c\uff0c\u65e0\u9700\u4fee\u6539\u590d\u6742\u7684\u6570\u636e\u6d41\u6c34\u7ebf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u501f\u52a9\u4ee5\u4e0a\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u8bbe\u8ba1\u5168\u9762\u4e14\u7075\u6d3b\u7684\u6570\u636e\u6a21\u578b\uff0c\u4ee5\u6ee1\u8db3\u5404\u79cd\u4e1a\u52a1\u9700\u6c42\u548c\u573a\u666f\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u81ea\u52a8\u5237\u65b0",children:"\u81ea\u52a8\u5237\u65b0"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 REFRESH \u5b50\u53e5\u6307\u5b9a\u5237\u65b0\u7b56\u7565\u3002\u76ee\u524d\uff0cStarRocks \u5f02\u6b65\u7269\u5316\u89c6\u56fe\u652f\u6301\u4ee5\u4e0b\u5237\u65b0\u7b56\u7565\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u81ea\u52a8\u5237\u65b0\uff08",(0,i.jsx)(e.code,{children:"REFRESH ASYNC"}),"\uff09\uff1a\u6bcf\u5f53\u57fa\u8868\u4e2d\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u90fd\u4f1a\u89e6\u53d1\u5237\u65b0\u4efb\u52a1\u3002\u6570\u636e\u4f9d\u8d56\u5173\u7cfb\u7531\u7269\u5316\u89c6\u56fe\u81ea\u52a8\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5b9a\u65f6\u5237\u65b0\uff08",(0,i.jsx)(e.code,{children:"REFRESH ASYNC EVERY (INTERVAL <refresh_interval>)"}),"\uff09\uff1a\u5b9a\u671f\u89e6\u53d1\u5237\u65b0\u4efb\u52a1\uff0c\u4f8b\u5982\uff0c\u6bcf\u5206\u949f\u3001\u6bcf\u5929\u6216\u6bcf\u6708\u3002\u5982\u679c\u57fa\u8868\u4e2d\u6ca1\u6709\u6570\u636e\u66f4\u6539\uff0c\u5c06\u4e0d\u4f1a\u89e6\u53d1\u5237\u65b0\u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u624b\u52a8\u5237\u65b0\uff08",(0,i.jsx)(e.code,{children:"REFRESH MANUAL"}),"\uff09\uff1a\u60a8\u53ea\u80fd\u901a\u8fc7\u624b\u52a8\u6267\u884c ",(0,i.jsx)(e.code,{children:"REFRESH MATERIALIZED VIEW"})," \u89e6\u53d1\u5237\u65b0\u4efb\u52a1\u3002\u5982\u679c\u60a8\u901a\u8fc7\u5916\u90e8\u8c03\u5ea6\u6846\u67b6\u89e6\u53d1\u5237\u65b0\u4efb\u52a1\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u5237\u65b0\u7b56\u7565\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <name>\nREFRESH \n    [ ASYNC | \n      ASYNC [START <time>] EVERY(<interval>) | \n      MANUAL\n    ]\nAS <query>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5206\u533a\u5237\u65b0",children:"\u5206\u533a\u5237\u65b0"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 PARTITION BY \u5b50\u53e5\u5c06\u57fa\u8868\u7684\u5206\u533a\u4e0e\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u5173\u8054\u8d77\u6765\uff0c\u4ece\u800c\u5b9e\u73b0\u5206\u533a\u7c92\u5ea6\u7684\u5237\u65b0\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"PARTITION BY <column>"}),"\uff1a\u60a8\u53ef\u4ee5\u4e3a\u7269\u5316\u89c6\u56fe\u5f15\u7528\u4e0e\u57fa\u8868\u76f8\u540c\u7684\u5206\u533a\u5217\uff0c\u4ece\u800c\u4f7f\u57fa\u8868\u548c\u7269\u5316\u89c6\u56fe\u91c7\u7528\u76f8\u540c\u7684\u5206\u533a\u7c92\u5ea6\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"PARTITION BY date_trunc(<column>)"}),"\uff1a\u60a8\u53ef\u4ee5\u4f7f\u7528 date_trunc \u51fd\u6570\u5728\u57fa\u8868\u5206\u533a\u5217\u7684\u57fa\u7840\u4e0a\u4e0a\u5377\uff0c\u4ece\u800c\u4e3a\u7269\u5316\u89c6\u56fe\u5236\u5b9a\u4e0d\u540c\u7c92\u5ea6\u7684\u5206\u533a\u7b56\u7565\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"PARTITION BY { time_slice | date_slice }(<column>)"}),"\uff1a\u4e0e date_trunc \u76f8\u6bd4\uff0ctime_slice \u548c date_slice \u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u65f6\u95f4\u7c92\u5ea6\u8c03\u6574\uff0c\u5141\u8bb8\u66f4\u7cbe\u7ec6\u5730\u63a7\u5236\u65f6\u95f4\u5206\u533a\u7c92\u5ea6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"CREATE MATERIALIZED VIEW <name>\nREFRESH ASYNC\nPARTITION BY \n    [\n        <base_table_column> | \n        date_trunc(<granularity>, <base_table_column>) |\n        time_slice(<base_table_column>, <granularity>) | \n        date_slice(<base_table_column>, <granularity>)\n    ]\nAS <query>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u4e0e\u89c6\u56fe\u7684\u534f\u540c\u4f7f\u7528",children:"\u4e0e\u89c6\u56fe\u7684\u534f\u540c\u4f7f\u7528"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53ef\u4ee5\u57fa\u4e8e\u89c6\u56fe\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002\u6b64\u65f6\uff0c\u5f53\u89c6\u56fe\u5f15\u7528\u7684\u57fa\u8868\u53d1\u751f\u6570\u636e\u66f4\u6539\u65f6\uff0c\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u81ea\u52a8\u5237\u65b0\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u53ef\u4ee5\u57fa\u4e8e\u5176\u4ed6\u7269\u5316\u89c6\u56fe\u521b\u5efa\u7269\u5316\u89c6\u56fe\uff0c\u5b9e\u73b0\u591a\u5c42\u7ea7\u8054\u5f0f\u5237\u65b0\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u53ef\u4ee5\u57fa\u4e8e\u7269\u5316\u89c6\u56fe\u521b\u5efa\u89c6\u56fe\uff0c\u7b49\u540c\u4e8e\u57fa\u4e8e\u5e38\u89c4\u8868\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"schema-change",children:"Schema Change"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u901a\u8fc7 ALTER MATERIALIZED VIEW SWAP \u8bed\u53e5\u8fdb\u884c\u539f\u5b50\u66ff\u6362\u3002\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7269\u5316\u89c6\u56fe\uff0c\u5e76\u589e\u52a0\u65b0\u5217\u6216\u66f4\u6539\u5217\u7c7b\u578b\uff0c\u7136\u540e\u7528\u65b0\u7269\u5316\u89c6\u56fe\u66ff\u6362\u65e7\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u89c6\u56fe\u53ef\u4ee5\u901a\u8fc7 ALTER VIEW \u8bed\u53e5\u76f4\u63a5\u4fee\u6539\u5b9a\u4e49\u3002"}),"\n",(0,i.jsx)(e.li,{children:"StarRocks \u4e2d\u7684\u5e38\u89c4\u8868\u53ef\u4ee5\u4f7f\u7528 SWAP \u6216 ALTER \u64cd\u4f5c\u8fdb\u884c\u4fee\u6539\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6b64\u5916\uff0c\u57fa\u8868\uff08\u53ef\u4ee5\u662f\u7269\u5316\u89c6\u56fe\u3001\u89c6\u56fe\u6216\u5e38\u89c4\u8868\uff09\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u5c06\u4f1a\u89e6\u53d1\u76f8\u5e94\u7269\u5316\u89c6\u56fe\u4e2d\u7684\u7ea7\u8054\u66f4\u6539\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5206\u5c42\u5efa\u6a21",children:"\u5206\u5c42\u5efa\u6a21"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8bb8\u591a\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5b58\u5728\u5404\u79cd\u5f62\u5f0f\u7684\u6570\u636e\u6e90\uff0c\u5305\u62ec\u5b9e\u65f6\u660e\u7ec6\u6570\u636e\u3001\u7ef4\u5ea6\u6570\u636e\u4ee5\u53ca\u6570\u636e\u6e56\u7684\u5f52\u6863\u6570\u636e\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4e1a\u52a1\u9700\u6c42\u9700\u8981\u591a\u6837\u5316\u7684\u5206\u6790\u65b9\u6cd5\uff0c\u5982\u5b9e\u65f6\u5927\u5c4f\u3001\u8fd1\u5b9e\u65f6 BI \u67e5\u8be2\u3001\u5206\u6790\u5e08 Ad hoc \u67e5\u8be2\u548c\u5b9a\u65f6\u62a5\u8868\u7b49\u3002\u4e0d\u540c\u7684\u573a\u666f\u6709\u4e0d\u540c\u7684\u9700\u6c42 - \u6709\u4e9b\u9700\u8981\u7075\u6d3b\u6027\uff0c\u6709\u4e9b\u4f18\u5148\u8003\u8651\u6027\u80fd\uff0c\u800c\u5176\u4ed6\u4e00\u4e9b\u5219\u5f3a\u8c03\u6210\u672c\u6548\u76ca\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u663e\u7136\uff0c\u5355\u4e00\u89e3\u51b3\u65b9\u6848\u65e0\u6cd5\u5145\u5206\u6ee1\u8db3\u5982\u6b64\u591a\u6837\u5316\u7684\u9700\u6c42\u3002StarRocks \u53ef\u4ee5\u901a\u8fc7\u7ed3\u5408\u4f7f\u7528\u89c6\u56fe\u548c\u7269\u5316\u89c6\u56fe\u9ad8\u6548\u5730\u6ee1\u8db3\u8fd9\u4e9b\u9700\u6c42\u3002\u56e0\u4e3a\u89c6\u56fe\u4e0d\u7ef4\u62a4\u7269\u7406\u6570\u636e\uff0c\u6bcf\u6b21\u67e5\u8be2\u89c6\u56fe\u65f6\uff0c\u67e5\u8be2\u4f1a\u6839\u636e\u89c6\u56fe\u7684\u5b9a\u4e49\u8fdb\u884c\u89e3\u6790\u548c\u6267\u884c\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u7269\u5316\u89c6\u56fe\u4fdd\u5b58\u4e86\u9884\u8ba1\u7b97\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u907f\u514d\u91cd\u590d\u6267\u884c\u7684\u5f00\u9500\u3002\u89c6\u56fe\u9002\u5408\u8868\u8fbe\u4e1a\u52a1\u8bed\u4e49\u5e76\u7b80\u5316 SQL \u590d\u6742\u6027\uff0c\u4f46\u65e0\u6cd5\u964d\u4f4e\u67e5\u8be2\u6267\u884c\u7684\u5f00\u9500\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u7269\u5316\u89c6\u56fe\u901a\u8fc7\u9884\u5148\u8ba1\u7b97\u4f18\u5316\u67e5\u8be2\u6027\u80fd\uff0c\u9002\u7528\u4e8e\u7b80\u5316 ETL Pipeline\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u4e3a\u89c6\u56fe\u4e0e\u7269\u5316\u89c6\u56fe\u7684\u5dee\u5f02\uff1a"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u89c6\u56fe"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u7269\u5316\u89c6\u56fe"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"})}),(0,i.jsx)(e.td,{children:"\u4e1a\u52a1\u5efa\u6a21\u3001\u6570\u636e\u6cbb\u7406"}),(0,i.jsx)(e.td,{children:"\u6570\u636e\u5efa\u6a21\u3001\u900f\u660e\u52a0\u901f\u3001\u6e56\u4ed3\u4e00\u4f53"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u5b58\u50a8\u5f00\u9500"})}),(0,i.jsx)(e.td,{children:"\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u65e0\u5b58\u50a8\u5f00\u9500"}),(0,i.jsx)(e.td,{children:"\u5b58\u50a8\u9884\u8ba1\u7b97\u7ed3\u679c\uff0c\u6709\u989d\u5916\u5b58\u50a8\u6210\u672c"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u66f4\u65b0\u5f00\u9500"})}),(0,i.jsx)(e.td,{children:"\u65e0\u66f4\u65b0\u5f00\u9500"}),(0,i.jsx)(e.td,{children:"\u57fa\u8868\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u6709\u66f4\u65b0\u5f00\u9500"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u6027\u80fd\u6536\u76ca"})}),(0,i.jsx)(e.td,{children:"\u4e0d\u505a\u9884\u8ba1\u7b97\uff0c\u65e0\u6027\u80fd\u6536\u76ca"}),(0,i.jsx)(e.td,{children:"\u9884\u8ba1\u7b97\u7ed3\u679c\uff0c\u52a0\u901f\u67e5\u8be2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u6570\u636e\u5b9e\u65f6\u6027"})}),(0,i.jsx)(e.td,{children:"\u67e5\u8be2\u89c6\u56fe\u65f6\u8fd4\u56de\u6700\u65b0\u6570\u636e"}),(0,i.jsx)(e.td,{children:"\u7ed3\u679c\u4e3a\u9884\u8ba1\u7b97\uff0c\u53ef\u80fd\u5b58\u5728\u6570\u636e\u5ef6\u8fdf"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u4f9d\u8d56\u5173\u7cfb"})}),(0,i.jsx)(e.td,{children:"\u57fa\u4e8e\u8868\u540d\u5f15\u7528\u57fa\u8868\uff0c\u57fa\u8868\u540d\u53d8\u66f4\u5c06\u5bfc\u81f4\u89c6\u56fe\u5931\u6548"}),(0,i.jsx)(e.td,{children:"\u57fa\u4e8e ID \u5f15\u7528\u57fa\u8868\uff0c\u57fa\u8868\u540d\u53d8\u66f4\u4e0d\u5f71\u54cd\u7269\u5316\u89c6\u56fe\u53ef\u7528\u6027\u3002"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u521b\u5efa\u8bed\u6cd5"})}),(0,i.jsx)(e.td,{children:"CREATE VIEW"}),(0,i.jsx)(e.td,{children:"CREATE MATERIALIZED VIEW"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"\u4fee\u6539\u8bed\u6cd5"})}),(0,i.jsx)(e.td,{children:"ALTER VIEW"}),(0,i.jsx)(e.td,{children:"ALTER MATERIALIZED VIEW"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8bed\u53e5\u6765\u4fee\u6539\u60a8\u7684\u89c6\u56fe\u3001\u7269\u5316\u89c6\u56fe\u548c\u57fa\u8868\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-SQL",children:"-- \u4fee\u6539\u57fa\u8868\u3002\nALTER TABLE <table_name> ADD COLUMN <column_desc>;\n\n-- \u539f\u5b50\u66ff\u6362\u57fa\u8868\u3002\nALTER TABLE <table1> SWAP WITH <table2>;\n\n-- \u4fee\u6539\u89c6\u56fe\u5b9a\u4e49\u3002\nALTER VIEW <view_name> AS <query>;\n\n-- \u539f\u5b50\u66ff\u6362\u7269\u5316\u89c6\u56fe\uff08\u66ff\u6362\u4e24\u4e2a\u7269\u5316\u89c6\u56fe\u7684\u540d\u5b57\uff0c\u5e76\u4e0d\u4fee\u6539\u5176\u4e2d\u6570\u636e\uff09\u3002\nALTER MATERIALIZED VIWE <mv1> SWAP WITH <mv2>;\n\n-- \u91cd\u65b0\u542f\u7528\u7269\u5316\u89c6\u56fe\u3002\nALTER MATERIALIZED VIEW <mv_name> ACTIVE;\n"})}),"\n",(0,i.jsx)(e.p,{children:"Schema Change \u9075\u5faa\u4ee5\u4e0b\u539f\u5219\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8868\u7684\u91cd\u547d\u540d\u4ee5\u53ca\u539f\u5b50\u66ff\u6362\u64cd\u4f5c\u5c06\u5bfc\u81f4\u4f9d\u8d56\u5176\u7684\u7269\u5316\u89c6\u56fe\u53d8\u4e3a Inactive \u72b6\u6001\u3002\u5bf9\u4e8e Schema Change \u64cd\u4f5c\uff0c\u4ec5\u5f53\u7269\u5316\u89c6\u56fe\u4f9d\u8d56\u7684\u57fa\u8868\u5217\u53d1\u751f Schema Change \u65f6\uff0c\u624d\u4f1a\u5bfc\u81f4\u7269\u5316\u89c6\u56fe\u53d8\u4e3a Inactive \u72b6\u6001\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u89c6\u56fe\u7684\u5b9a\u4e49\u53d8\u66f4\u5c06\u5bfc\u81f4\u4f9d\u8d56\u5176\u7684\u7269\u5316\u89c6\u56fe\u53d8\u4e3a Inactive \u72b6\u6001\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u7269\u5316\u89c6\u56fe\u7684\u539f\u5b50\u66ff\u6362\u64cd\u4f5c\u5c06\u5bfc\u81f4\u4f9d\u8d56\u5176\u7684\u5d4c\u5957\u7269\u5316\u89c6\u56fe\u53d8\u4e3a Inactive \u72b6\u6001\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Inactive \u72b6\u6001\u4f1a\u7ea7\u8054\u5411\u4e0a\u4f20\u64ad\uff0c\u76f4\u5230\u6ca1\u6709\u7269\u5316\u89c6\u56fe\u4f9d\u8d56\u5173\u7cfb\u4e3a\u6b62\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\u65e0\u6cd5\u5237\u65b0\u6216\u7528\u4e8e\u81ea\u52a8\u67e5\u8be2\u6539\u5199\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\u4ecd\u7136\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\uff0c\u4f46\u5728\u5b83\u4eec\u88ab\u53d8\u4e3a Active\u4e4b\u524d\uff0c\u6570\u636e\u4e00\u81f4\u6027\u4e0d\u80fd\u5f97\u5230\u4fdd\u8bc1\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\u5176\u6570\u636e\u4e00\u81f4\u6027\u65e0\u6cd5\u4fdd\u8bc1\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4fee\u590d\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u624b\u52a8\u4fee\u590d"}),"\uff1a\u60a8\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ALTER MATERIALIZED VIEW ",(0,i.jsx)(e.code,{children:"<mv_name>"})," ACTIVE \u624b\u52a8\u4fee\u590d Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\u3002\u6b64\u8bed\u53e5\u5c06\u6839\u636e\u7269\u5316\u89c6\u56fe\u539f\u59cb SQL \u5b9a\u4e49\u5c1d\u8bd5\u91cd\u5efa\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u91cd\u5efa\u65f6\u9700\u4fdd\u8bc1\u5728\u5e95\u5c42 Schema Change \u4e4b\u540e\uff0c SQL \u5b9a\u4e49\u4ecd\u7136\u6709\u6548\uff0c\u5426\u5219\u64cd\u4f5c\u5c06\u5931\u8d25\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u81ea\u52a8\u4fee\u590d"}),"\uff1aStarRocks \u5c06\u5c1d\u8bd5\u81ea\u52a8\u6fc0\u6d3b Inactive \u72b6\u6001\u7684\u7269\u5316\u89c6\u56fe\uff0c\u4f46\u65f6\u6548\u6027\u65e0\u6cd5\u4fdd\u8bc1\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5206\u533a\u5efa\u6a21",children:"\u5206\u533a\u5efa\u6a21"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u5206\u5c42\u5efa\u6a21\u5916\uff0c\u5206\u533a\u5efa\u6a21\u4e5f\u662f\u6570\u636e\u5efa\u6a21\u7684\u4e00\u4e2a\u91cd\u8981\u65b9\u9762\u3002\u6570\u636e\u5efa\u6a21\u5f80\u5f80\u6d89\u53ca\u6839\u636e\u4e1a\u52a1\u8bed\u4e49\u5173\u8054\u6570\u636e\uff0c\u5e76\u6839\u636e\u65f6\u6548\u6027\u8981\u6c42\u8bbe\u7f6e\u6570\u636e\u7684\u751f\u5b58\u65f6\u95f4\uff08TTL\uff09\u3002\u5206\u533a\u5efa\u6a21\u5728\u6b64\u8fc7\u7a0b\u4e2d\u8d77\u7740\u91cd\u8981\u4f5c\u7528\u3002 \u4e0d\u540c\u7684\u6570\u636e\u5173\u8054\u65b9\u5f0f\u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u5efa\u6a21\u65b9\u6cd5\uff0c\u5982\u661f\u578b\u6a21\u5f0f\u548c\u96ea\u82b1\u6a21\u5f0f\u3002\u8fd9\u4e9b\u6a21\u578b\u6709\u4e00\u4e2a\u5171\u540c\u70b9 - \u5b83\u4eec\u90fd\u4f7f\u7528\u4e8b\u5b9e\u8868\u548c\u7ef4\u5ea6\u8868\u3002\u4e00\u4e9b\u4e1a\u52a1\u573a\u666f\u9700\u8981\u591a\u4e2a\u5927\u578b\u4e8b\u5b9e\u8868\uff0c\u800c\u5176\u4ed6\u573a\u666f\u6d89\u53ca\u590d\u6742\u7684\u7ef4\u5ea6\u8868\u53ca\u5176\u4e4b\u95f4\u7684\u590d\u6742\u7684\u5173\u8054\u5173\u7cfb\u3002StarRocks \u7684\u7269\u5316\u89c6\u56fe\u652f\u6301\u4e8b\u5b9e\u8868\u7684\u5206\u533a\u5173\u8054\uff0c\u5373\u4e8b\u5b9e\u8868\u8fdb\u884c\u5206\u533a\uff0c\u800c\u7269\u5316\u89c6\u56fe\u7684 Join \u7ed3\u679c\u6309\u7167\u540c\u6837\u7684\u65b9\u5f0f\u8fdb\u884c\u5206\u533a\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Modeling-2",src:s(26067).Z+"",width:"1400",height:"738"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0a\u56fe\u4e3a\u4f8b\uff0c\u901a\u8fc7\u7269\u5316\u89c6\u56fe\u5c06\u4e8b\u5b9e\u8868\u548c\u591a\u4e2a\u7ef4\u5ea6\u8868\u8fdb\u884c\u5173\u8054\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u60a8\u9700\u8981\u5728\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u952e\u4e2d\u6307\u5b9a\u7279\u5b9a\u57fa\u8868\uff08\u901a\u5e38\u662f\u4e8b\u5b9e\u8868\uff09\u7684\u5206\u533a\u952e\u6765\u5b9e\u73b0\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\u5173\u8054\uff08",(0,i.jsx)(e.code,{children:"PARTITION BY fact_tbl.col"}),"\uff09\u3002\u4e00\u4e2a\u7269\u5316\u89c6\u56fe\u4ec5\u80fd\u4e0e\u4e00\u4e2a\u57fa\u8868\u505a\u5206\u533a\u5173\u8054\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u88ab\u5173\u8054\u57fa\u8868\u7684\u67d0\u4e2a\u5206\u533a\u4e2d\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u7269\u5316\u89c6\u56fe\u4e2d\u76f8\u5e94\u7684\u5206\u533a\u5c06\u88ab\u5237\u65b0\uff0c\u4f46\u4e0d\u5f71\u54cd\u5176\u4ed6\u5206\u533a\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u5176\u4ed6\u672a\u88ab\u5173\u8054\u7684\u57fa\u8868\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5237\u65b0\u6574\u4e2a\u7269\u5316\u89c6\u56fe\u3002\u7136\u800c\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5ffd\u7565\u67d0\u4e9b\u672a\u5173\u8054\u8868\u4e2d\u7684\u6570\u636e\u53d8\u5316\uff0c\u4ee5\u4fbf\u5728\u8fd9\u4e9b\u8868\u4e2d\u7684\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\u4e0d\u5237\u65b0\u7269\u5316\u89c6\u56fe\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u79cd\u5206\u533a\u5173\u8054\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u4e1a\u52a1\u573a\u666f\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e8b\u5b9e\u8868\u66f4\u65b0"}),"\uff1a\u60a8\u53ef\u4ee5\u5c06\u4e8b\u5b9e\u8868\u5206\u533a\u5230\u7ec6\u7c92\u5ea6\u7ea7\u522b\uff0c\u4f8b\u5982\u6309\u65e5\u6216\u6309\u5c0f\u65f6\u3002\u5728\u4e8b\u5b9e\u8868\u66f4\u65b0\u540e\uff0c\u7269\u5316\u89c6\u56fe\u4e2d\u76f8\u5e94\u7684\u5206\u533a\u5c06\u81ea\u52a8\u5237\u65b0\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7ef4\u5ea6\u8868\u66f4\u65b0"}),"\uff1a\u901a\u5e38\uff0c\u7ef4\u5ea6\u8868\u4e2d\u7684\u6570\u636e\u66f4\u65b0\u5c06\u5bfc\u81f4\u6240\u6709\u5173\u8054\u7ed3\u679c\u7684\u5237\u65b0\uff0c\u5237\u65b0\u4ee3\u4ef7\u8f83\u5927\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u5ffd\u7565\u67d0\u4e9b\u7ef4\u5ea6\u8868\u4e2d\u7684\u6570\u636e\u66f4\u65b0\uff0c\u4ee5\u907f\u514d\u5237\u65b0\u6574\u4e2a\u7269\u5316\u89c6\u56fe\uff0c\u6216\u8005\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65f6\u95f4\u8303\u56f4\uff0c\u4ece\u800c\u53ea\u6709\u5728\u8be5\u65f6\u95f4\u8303\u56f4\u5185\u7684\u5206\u533a\u624d\u80fd\u88ab\u5237\u65b0\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u5916\u90e8\u8868\u7684\u81ea\u52a8\u5237\u65b0"}),"\uff1a\u5728\u7c7b\u4f3c\u4e8e Apache Hive \u6216 Apache Iceberg \u8fd9\u6837\u7684\u5916\u90e8\u6570\u636e\u6e90\u4e2d\uff0c\u6570\u636e\u5f80\u5f80\u4ee5\u5206\u533a\u7684\u7c92\u5ea6\u8fdb\u884c\u53d8\u66f4\u3002StarRocks \u7684\u7269\u5316\u89c6\u56fe\u53ef\u4ee5\u8ba2\u9605\u5916\u8868\u5206\u533a\u7ea7\u522b\u7684\u6570\u636e\u66f4\u65b0\uff0c\u53ea\u5237\u65b0\u7269\u5316\u89c6\u56fe\u7684\u76f8\u5e94\u5206\u533a\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"TTL"}),"\uff1a\u5728\u4e3a\u7269\u5316\u89c6\u56fe\u8bbe\u7f6e\u5206\u533a\u7b56\u7565\u65f6\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u8981\u4fdd\u7559\u7684\u6700\u8fd1\u5206\u533a\u7684\u6570\u91cf\uff0c\u4ece\u800c\u4ec5\u4fdd\u7559\u6700\u65b0\u7684\u6570\u636e\u3002\u5176\u5bf9\u5e94\u7684\u4e1a\u52a1\u573a\u666f\u5bf9\u6570\u636e\u65f6\u6548\u6027\u6709\u8f83\u9ad8\u8981\u6c42\uff0c\u4f8b\u5982\uff0c\u5206\u6790\u5e08\u4ec5\u9700\u8981\u67e5\u8be2\u67d0\u4e2a\u65f6\u95f4\u7a97\u53e3\u5185\u7684\u6700\u65b0\u6570\u636e\uff0c\u800c\u65e0\u9700\u4fdd\u7559\u6240\u6709\u5386\u53f2\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u53c2\u6570\u6765\u63a7\u5236\u5237\u65b0\u884c\u4e3a\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"partition_refresh_number"}),"\uff1a\u6bcf\u6b21\u5237\u65b0\u64cd\u4f5c\u4e2d\u8981\u5237\u65b0\u7684\u5206\u533a\u6570\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"partition_ttl_number"}),"\uff1a\u8981\u4fdd\u7559\u7684\u6700\u8fd1\u5206\u533a\u7684\u6570\u91cf\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"excluded_trigger_tables"}),"\uff1a\u4e3a\u907f\u514d\u89e6\u53d1\u81ea\u52a8\u5237\u65b0\u800c\u9700\u8981\u5ffd\u7565\u7684\u8868\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"auto_refresh_partitions_limit"}),"\uff1a\u6bcf\u6b21\u81ea\u52a8\u5237\u65b0\u64cd\u4f5c\u4e2d\u8981\u5237\u65b0\u7684\u5206\u533a\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8be6\u7ec6\u8bf4\u660e\uff0c\u53c2\u89c1 ",(0,i.jsx)(e.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE%20MATERIALIZED%20VIEW",children:"CREATE MATERIALIZED VIEW"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u5206\u533a\u7269\u5316\u89c6\u56fe\u5b58\u5728\u5982\u4e0b\u9650\u5236\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ec5\u652f\u6301\u57fa\u4e8e\u5206\u533a\u8868\u521b\u5efa\u5206\u533a\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4ec5\u652f\u6301 DATE \u548c DATETIME \u7c7b\u578b\u7684\u5206\u533a\u5217\uff0c\u4e0d\u652f\u6301 STRING \u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4ec5\u652f\u6301\u4f7f\u7528 date_trunc\u3001time_slice \u548c date_slice \u505a\u5206\u533a\u4e0a\u5377\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4ec5\u652f\u6301\u5355\u4e2a\u5217\u4f5c\u4e3a\u5206\u533a\u5217\uff0c\u4e0d\u652f\u6301\u591a\u5206\u533a\u5217\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7 StarRocks \u5f02\u6b65\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u6570\u636e\u5efa\u6a21\uff0c\u80fd\u591f\u901a\u8fc7\u58f0\u660e\u5f0f\u7684\u5efa\u6a21\u8bed\u8a00\uff0c\u7b80\u5316\u6d41\u6c34\u7ebf\u7684\u7ba1\u7406\uff0c\u63d0\u5347\u6570\u636e\u5efa\u6a21\u7684\u6548\u7387\u4e0e\u7075\u6d3b\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4e86\u6570\u636e\u5efa\u6a21\u8fd9\u4e00\u5e94\u7528\u573a\u666f\u4e4b\u5916\uff0c\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u80fd\u591f\u5e94\u7528\u5176\u4ed6\u7684\u900f\u660e\u52a0\u901f\u573a\u666f\u3001\u6e56\u4ed3\u4e00\u4f53\u573a\u666f\uff0c\u4f7f\u5f97\u6570\u636e\u4ef7\u503c\u80fd\u591f\u88ab\u8fdb\u4e00\u6b65\u6316\u6398\uff0c\u6570\u636e\u6548\u7387\u8fdb\u4e00\u6b65\u63d0\u9ad8\u3002"})]})}const x=function(n={}){const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(a,n)})):a(n)}},80085:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/Modeling-1-3089fe70e1f2202cc1c5d36e1595c6e7.png"},26067:(n,e,s)=>{s.d(e,{Z:()=>i});const i=s.p+"assets/images/Modeling-2-637c9a9f740b8a1f2dca17da446b52bb.png"},11151:(n,e,s)=>{s.d(e,{Zo:()=>d,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(n){const e=i.useContext(l);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const c={};function d({components:n,children:e,disableParentContext:s}){let d;return d=s?"function"==typeof n?n({}):n||c:r(n),i.createElement(l.Provider,{value:d},e)}}}]);