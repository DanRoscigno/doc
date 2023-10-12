"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[49424],{4041:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var e=i(85893),r=i(11151);const c={displayed_sidebar:"Chinese31"},l="\u4ec0\u4e48\u662f StarRocks",t={id:"introduction/what_is_starrocks",title:"\u4ec0\u4e48\u662f StarRocks",description:"StarRocks \u662f\u65b0\u4e00\u4ee3\u6781\u901f\u5168\u573a\u666f MPP (Massively Parallel Processing) \u6570\u636e\u5e93\u3002StarRocks \u7684\u613f\u666f\u662f\u80fd\u591f\u8ba9\u7528\u6237\u7684\u6570\u636e\u5206\u6790\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u548c\u654f\u6377\u3002\u7528\u6237\u65e0\u9700\u7ecf\u8fc7\u590d\u6742\u7684\u9884\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u7528 StarRocks \u6765\u652f\u6301\u591a\u79cd\u6570\u636e\u5206\u6790\u573a\u666f\u7684\u6781\u901f\u5206\u6790\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/introduction/what_is_starrocks.md",sourceDirName:"introduction",slug:"/introduction/what_is_starrocks",permalink:"/doc/zh/docs/2.5/introduction/what_is_starrocks",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/introduction/what_is_starrocks.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u4ea7\u54c1\u7b80\u4ecb",permalink:"/doc/zh/docs/2.5/category/\u4ea7\u54c1\u7b80\u4ecb"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/doc/zh/docs/2.5/introduction/Architecture"}},d={},o=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"OLAP \u591a\u7ef4\u5206\u6790",id:"olap-\u591a\u7ef4\u5206\u6790",level:3},{value:"\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93",id:"\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93",level:3},{value:"\u9ad8\u5e76\u53d1\u67e5\u8be2",id:"\u9ad8\u5e76\u53d1\u67e5\u8be2",level:3},{value:"\u7edf\u4e00\u5206\u6790",id:"\u7edf\u4e00\u5206\u6790",level:3}];function a(n){const s=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.h1,{id:"\u4ec0\u4e48\u662f-starrocks",children:"\u4ec0\u4e48\u662f StarRocks"}),"\n",(0,e.jsxs)(s.p,{children:["StarRocks \u662f",(0,e.jsx)(s.strong,{children:"\u65b0\u4e00\u4ee3\u6781\u901f\u5168\u573a\u666f MPP (Massively Parallel Processing) \u6570\u636e\u5e93"}),"\u3002StarRocks \u7684\u613f\u666f\u662f\u80fd\u591f\u8ba9\u7528\u6237\u7684",(0,e.jsx)(s.strong,{children:"\u6570\u636e\u5206\u6790\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u548c\u654f\u6377"}),"\u3002\u7528\u6237\u65e0\u9700\u7ecf\u8fc7\u590d\u6742\u7684\u9884\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u7528 StarRocks \u6765\u652f\u6301\u591a\u79cd\u6570\u636e\u5206\u6790\u573a\u666f\u7684\u6781\u901f\u5206\u6790\u3002"]}),"\n",(0,e.jsxs)(s.p,{children:["StarRocks ",(0,e.jsx)(s.strong,{children:"\u67b6\u6784\u7b80\u6d01"}),"\uff0c\u91c7\u7528\u4e86\u5168\u9762\u5411\u91cf\u5316\u5f15\u64ce\uff0c\u5e76\u914d\u5907\u5168\u65b0\u8bbe\u8ba1\u7684 CBO (Cost Based Optimizer) \u4f18\u5316\u5668\uff0c",(0,e.jsx)(s.strong,{children:"\u67e5\u8be2\u901f\u5ea6\uff08\u5c24\u5176\u662f\u591a\u8868\u5173\u8054\u67e5\u8be2\uff09\u8fdc\u8d85\u540c\u7c7b\u4ea7\u54c1"}),"\u3002"]}),"\n",(0,e.jsx)(s.p,{children:"StarRocks \u80fd\u5f88\u597d\u5730\u652f\u6301\u5b9e\u65f6\u6570\u636e\u5206\u6790\uff0c\u5e76\u80fd\u5b9e\u73b0\u5bf9\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u7684\u9ad8\u6548\u67e5\u8be2\u3002StarRocks \u8fd8\u652f\u6301\u73b0\u4ee3\u5316\u7269\u5316\u89c6\u56fe\uff0c\u8fdb\u4e00\u6b65\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,e.jsx)(s.p,{children:"\u4f7f\u7528 StarRocks\uff0c\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u6784\u5efa\u5305\u62ec\u5927\u5bbd\u8868\u3001\u661f\u578b\u6a21\u578b\u3001\u96ea\u82b1\u6a21\u578b\u5728\u5185\u7684\u5404\u7c7b\u6a21\u578b\u3002"}),"\n",(0,e.jsx)(s.p,{children:"StarRocks \u517c\u5bb9 MySQL \u534f\u8bae\uff0c\u652f\u6301\u6807\u51c6 SQL \u8bed\u6cd5\uff0c\u6613\u4e8e\u5bf9\u63a5\u4f7f\u7528\uff0c\u5168\u7cfb\u7edf\u65e0\u5916\u90e8\u4f9d\u8d56\uff0c\u9ad8\u53ef\u7528\uff0c\u6613\u4e8e\u8fd0\u7ef4\u7ba1\u7406\u3002StarRocks \u8fd8\u517c\u5bb9\u591a\u79cd\u4e3b\u6d41 BI \u4ea7\u54c1\uff0c\u5305\u62ec Tableau\u3001Power BI\u3001FineBI \u548c Smartbi\u3002"}),"\n",(0,e.jsx)(s.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,e.jsx)(s.p,{children:"StarRocks \u53ef\u4ee5\u6ee1\u8db3\u4f01\u4e1a\u7ea7\u7528\u6237\u7684\u591a\u79cd\u5206\u6790\u9700\u6c42\uff0c\u5305\u62ec OLAP (Online Analytical Processing) \u591a\u7ef4\u5206\u6790\u3001\u5b9a\u5236\u62a5\u8868\u3001\u5b9e\u65f6\u6570\u636e\u5206\u6790\u548c Ad-hoc \u6570\u636e\u5206\u6790\u7b49\u3002"}),"\n",(0,e.jsx)(s.h3,{id:"olap-\u591a\u7ef4\u5206\u6790",children:"OLAP \u591a\u7ef4\u5206\u6790"}),"\n",(0,e.jsx)(s.p,{children:"\u5229\u7528 StarRocks \u7684 MPP \u6846\u67b6\u548c\u5411\u91cf\u5316\u6267\u884c\u5f15\u64ce\uff0c\u7528\u6237\u53ef\u4ee5\u7075\u6d3b\u7684\u9009\u62e9\u96ea\u82b1\u6a21\u578b\uff0c\u661f\u578b\u6a21\u578b\uff0c\u5bbd\u8868\u6a21\u578b\u6216\u8005\u9884\u805a\u5408\u6a21\u578b\u3002\u9002\u7528\u4e8e\u7075\u6d3b\u914d\u7f6e\u7684\u591a\u7ef4\u5206\u6790\u62a5\u8868\uff0c\u4e1a\u52a1\u573a\u666f\u5305\u62ec\uff1a"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7528\u6237\u884c\u4e3a\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7528\u6237\u753b\u50cf\u3001\u6807\u7b7e\u5206\u6790\u3001\u5708\u4eba"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u9ad8\u7ef4\u4e1a\u52a1\u6307\u6807\u62a5\u8868"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u81ea\u52a9\u5f0f\u62a5\u8868\u5e73\u53f0"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u4e1a\u52a1\u95ee\u9898\u63a2\u67e5\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u8de8\u4e3b\u9898\u4e1a\u52a1\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u8d22\u52a1\u62a5\u8868"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7cfb\u7edf\u76d1\u63a7\u5206\u6790"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(s.h3,{id:"\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93",children:"\u5b9e\u65f6\u6570\u636e\u4ed3\u5e93"}),"\n",(0,e.jsx)(s.p,{children:"StarRocks \u8bbe\u8ba1\u548c\u5b9e\u73b0\u4e86 Primary-Key \u6a21\u578b\uff0c\u80fd\u591f\u5b9e\u65f6\u66f4\u65b0\u6570\u636e\u5e76\u6781\u901f\u67e5\u8be2\uff0c\u53ef\u4ee5\u79d2\u7ea7\u540c\u6b65 TP (Transaction Processing) \u6570\u636e\u5e93\u7684\u53d8\u5316\uff0c\u6784\u5efa\u5b9e\u65f6\u6570\u4ed3\uff0c\u4e1a\u52a1\u573a\u666f\u5305\u62ec\uff1a"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7535\u5546\u5927\u4fc3\u6570\u636e\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7269\u6d41\u884c\u4e1a\u7684\u8fd0\u5355\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u91d1\u878d\u884c\u4e1a\u7ee9\u6548\u5206\u6790\u3001\u6307\u6807\u8ba1\u7b97"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u76f4\u64ad\u8d28\u91cf\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u5e7f\u544a\u6295\u653e\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u7ba1\u7406\u9a7e\u9a76\u8231"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u63a2\u9488\u5206\u6790APM\uff08Application Performance Management\uff09"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(s.h3,{id:"\u9ad8\u5e76\u53d1\u67e5\u8be2",children:"\u9ad8\u5e76\u53d1\u67e5\u8be2"}),"\n",(0,e.jsx)(s.p,{children:"StarRocks \u901a\u8fc7\u826f\u597d\u7684\u6570\u636e\u5206\u5e03\u7279\u6027\uff0c\u7075\u6d3b\u7684\u7d22\u5f15\u4ee5\u53ca\u7269\u5316\u89c6\u56fe\u7b49\u7279\u6027\uff0c\u53ef\u4ee5\u89e3\u51b3\u9762\u5411\u7528\u6237\u4fa7\u7684\u5206\u6790\u573a\u666f\uff0c\u4e1a\u52a1\u573a\u666f\u5305\u62ec\uff1a"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u5e7f\u544a\u4e3b\u62a5\u8868\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u96f6\u552e\u884c\u4e1a\u6e20\u9053\u4eba\u5458\u5206\u6790"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"SaaS \u884c\u4e1a\u9762\u5411\u7528\u6237\u5206\u6790\u62a5\u8868"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"Dashboard \u591a\u9875\u9762\u5206\u6790"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(s.h3,{id:"\u7edf\u4e00\u5206\u6790",children:"\u7edf\u4e00\u5206\u6790"}),"\n",(0,e.jsxs)(s.ul,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u901a\u8fc7\u4f7f\u7528\u4e00\u5957\u7cfb\u7edf\u89e3\u51b3\u591a\u7ef4\u5206\u6790\u3001\u9ad8\u5e76\u53d1\u67e5\u8be2\u3001\u9884\u8ba1\u7b97\u3001\u5b9e\u65f6\u5206\u6790\u67e5\u8be2\u7b49\u573a\u666f\uff0c\u964d\u4f4e\u7cfb\u7edf\u590d\u6742\u5ea6\u548c\u591a\u6280\u672f\u6808\u5f00\u53d1\u4e0e\u7ef4\u62a4\u6210\u672c\u3002"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsx)(s.p,{children:"\u4f7f\u7528 StarRocks \u7edf\u4e00\u7ba1\u7406\u6570\u636e\u6e56\u548c\u6570\u636e\u4ed3\u5e93\uff0c\u5c06\u9ad8\u5e76\u53d1\u548c\u5b9e\u65f6\u6027\u8981\u6c42\u5f88\u9ad8\u7684\u4e1a\u52a1\u653e\u5728 StarRocks \u4e2d\u5206\u6790\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 External Catalog \u548c\u5916\u90e8\u8868\u8fdb\u884c\u6570\u636e\u6e56\u4e0a\u7684\u5206\u6790\u3002"}),"\n"]}),"\n"]})]})}const h=function(n={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),n.components);return s?(0,e.jsx)(s,Object.assign({},n,{children:(0,e.jsx)(a,n)})):a(n)}},11151:(n,s,i)=>{i.d(s,{Zo:()=>t,ah:()=>c});var e=i(67294);const r=e.createContext({});function c(n){const s=e.useContext(r);return e.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const l={};function t({components:n,children:s,disableParentContext:i}){let t;return t=i?"function"==typeof n?n({}):n||l:c(n),e.createElement(r.Provider,{value:t},s)}}}]);