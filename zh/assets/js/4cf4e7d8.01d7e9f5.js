"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[13727],{67960:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(85893),r=n(11151);const i={displayed_sidebar:"Chinese31"},c="Apache Superset",a={id:"integrations/BI_integrations/Superset",title:"Apache Superset",description:"Apache Superset \u652f\u6301\u5bf9 StarRocks \u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u5904\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/integrations/BI_integrations/Superset.md",sourceDirName:"integrations/BI_integrations",slug:"/integrations/BI_integrations/Superset",permalink:"/doc/zh/docs/integrations/BI_integrations/Superset",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/BI_integrations/Superset.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"BI \u96c6\u6210",permalink:"/doc/zh/docs/category/bi-\u96c6\u6210"},next:{title:"FineBI",permalink:"/doc/zh/docs/integrations/BI_integrations/FineBI"}},o={},l=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u96c6\u6210",id:"\u96c6\u6210",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",pre:"pre",code:"code",a:"a",img:"img",ul:"ul",strong:"strong"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"apache-superset",children:"Apache Superset"}),"\n",(0,t.jsx)(s.p,{children:"Apache Superset \u652f\u6301\u5bf9 StarRocks \u7684\u5185\u90e8\u6570\u636e\u548c\u5916\u90e8\u6570\u636e\u8fdb\u884c\u67e5\u8be2\u548c\u53ef\u89c6\u5316\u5904\u7406\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(s.p,{children:"\u786e\u4fdd\u60a8\u5df2\u5b8c\u6210\u5982\u4e0b\u5de5\u5177\u5b89\u88c5\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u5728 Apache Superset \u670d\u52a1\u5668\u4e0a\u5b89\u88c5 StarRocks \u7684 Python \u5ba2\u6237\u7aef\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"pip install starrocks\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Apache Superset\u3002\u5177\u4f53\u53c2\u89c1",(0,t.jsx)(s.a,{href:"https://superset.apache.org/docs/installation/installing-superset-from-scratch/",children:"\u4ece\u96f6\u5f00\u59cb\u5b89\u88c5 Superset"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u96c6\u6210",children:"\u96c6\u6210"}),"\n",(0,t.jsx)(s.p,{children:"\u5728 Apache Superset \u4e2d\u521b\u5efa\u6570\u636e\u5e93\uff1a"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Apache Superset - 1",src:n(18093).Z+"",width:"501",height:"844"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Apache Superset - 2",src:n(77662).Z+"",width:"507",height:"845"})}),"\n",(0,t.jsx)(s.p,{children:"\u521b\u5efa\u8fc7\u7a0b\u4e2d\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.strong,{children:"SUPPORTED DATABASES"})," \u91cc\u9009\u62e9 ",(0,t.jsx)(s.strong,{children:"StarRocks"})," \u4f5c\u4e3a\u6570\u636e\u6e90\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.strong,{children:"SQLALCHEMY"})," ",(0,t.jsx)(s.strong,{children:"URI"})," \u91cc\uff0c\u6309\u5982\u4e0b StarRocks SQLAlchemy URI \u683c\u5f0f\u586b\u5199 URI\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"starrocks://<User>:<Password>@<Host>:<Port>/<Catalog>.<Database>\n"})}),"\n",(0,t.jsx)(s.p,{children:"URI \u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"User"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u540d\uff0c\u5982 ",(0,t.jsx)(s.code,{children:"admin"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Password"}),"\uff1a\u7528\u4e8e\u767b\u5f55 StarRocks \u96c6\u7fa4\u7684\u7528\u6237\u5bc6\u7801\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Host"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u4e3b\u673a IP \u5730\u5740\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Port"}),"\uff1aStarRocks \u96c6\u7fa4\u7684 FE \u67e5\u8be2\u7aef\u53e3\uff0c\u5982 ",(0,t.jsx)(s.code,{children:"9030"}),"\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Catalog"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807 Catalog\u3002Internal Catalog \u548c External Catalog \u5747\u652f\u6301\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Database"}),"\uff1aStarRocks \u96c6\u7fa4\u4e2d\u7684\u76ee\u6807\u6570\u636e\u5e93\u3002\u5185\u90e8\u6570\u636e\u5e93\u548c\u5916\u90e8\u6570\u636e\u5e93\u5747\u652f\u6301\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},18093:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/BI_superset_1-eff12bff07257eed12c79806812c0da6.png"},77662:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/BI_superset_2-0f8ec523d0d808a9e157ab1a0e91c69a.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(r.Provider,{value:a},s)}}}]);