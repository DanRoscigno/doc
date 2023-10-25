"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[83302],{93699:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151);const l={displayed_sidebar:"Chinese"},i="HLL(HyperLogLog)",c={id:"sql-reference/sql-statements/data-types/HLL",title:"HLL(HyperLogLog)",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-types/HLL.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/HLL",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-types/HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/HLL.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"FLOAT",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-types/FLOAT"},next:{title:"INT",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-types/INT"}},a={},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"hllhyperloglog",children:"HLL(HyperLogLog)"}),"\n",(0,t.jsx)(s.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,t.jsx)(s.p,{children:"HyperLogLog \u7c7b\u578b\uff0c\u7528\u4e8e\u8fd1\u4f3c\u53bb\u91cd\u3002"}),"\n",(0,t.jsx)(s.p,{children:"HLL\u7c7b\u578b\u4f7f\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u53d6\u51b3\u4e8e HLL \u4e2d\u63d2\u5165\u7684 hash \u503c\u7684\u53bb\u91cd\u6570\u91cf\u3002\u5206\u4e3a\u4e09\u79cd\u60c5\u51b5\u8003\u8651:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"HLL \u4e3a\u7a7a: \u672a\u63d2\u5165\u4efb\u4f55\u503c\uff0cHLL \u7684\u5b58\u50a8\u4ee3\u4ef7\u6700\u5c0f\uff0c\u5360\u7528 80 \u5b57\u8282\u3002"}),"\n",(0,t.jsxs)(s.li,{children:["HLL \u4e2d\u4e0d\u91cd\u590d hash \u503c\u7684\u4e2a\u6570 ",(0,t.jsx)(s.code,{children:"<=160"}),"\n\u6700\u5927\u4ee3\u4ef7\u4e3a: 80 + 160 * 8 = 1360 \u5b57\u8282\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["HLL \u4e2d\u4e0d\u91cd\u590d hash \u503c\u7684\u4e2a\u6570 ",(0,t.jsx)(s.code,{children:">160"}),"\n\u5b58\u50a8\u4ee3\u4ef7\u56fa\u5b9a\u4e3a: 80 + 16 * 1024 = 16464 \u5b57\u8282\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6570\u636e\u91cf\u548c\u6570\u636e\u5206\u5e03\u4f1a\u5f71\u54cd\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u548c\u8fd1\u4f3c\u7ed3\u679c\u7684\u51c6\u786e\u6027\uff0c\u56e0\u6b64\u9700\u8981\u8003\u8651:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u6570\u636e\u91cf\uff1a \u56e0\u4e3a HLL \u662f\u7edf\u8ba1\u4f30\u8ba1\u7b97\u6cd5\uff0c\u6570\u636e\u91cf\u5927\uff0c\u8bef\u5dee\u5c31\u5c0f\uff1b\u6570\u636e\u91cf\u8f83\u5c0f\u65f6\uff0c\u8bef\u5dee\u5c31\u5927\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u6570\u636e\u5206\u5e03\uff1a\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0cgroup by \u7ef4\u5ea6\u5217\u57fa\u6570\u5f88\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0c\u8ba1\u7b97\u4f1a\u4f7f\u7528\u66f4\u591a\u5185\u5b58\uff0c \u4e0d\u63a8\u8350\u4f7f\u7528HLL\u53bb\u91cd\u3002 no-group-by \u53bb\u91cd\u3001group by \u7ef4\u5ea6\u5217\u57fa\u6570\u5f88\u4f4e\u7684\u60c5\u51b5\u4e0b\uff0c\u63a8\u8350\u4f7f\u7528 HLL \u53bb\u91cd\u3002"}),"\n",(0,t.jsx)(s.li,{children:"\u5f53\u7528\u6237\u67e5\u8be2\u7c92\u5ea6\u8f83\u7c97\u65f6\uff1a\u6700\u597d\u4f7f\u7528\u805a\u5408\u6a21\u578b\u6216\u8005\u7269\u5316\u89c6\u56fe\u5bf9\u6570\u636e\u8fdb\u884c\u9884\u805a\u5408\u5bf9\u805a\u5408\u5217\u8fdb\u884c rollup \u964d\u4f4e\u6570\u636e\u89c4\u6a21\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u8be6\u7ec6\u7684\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/2.3/using_starrocks/Using_HLL",children:"\u4f7f\u7528 HyperLogLog \u5b9e\u73b0\u8fd1\u4f3c\u53bb\u91cd"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-definition/HLL",children:"HLL"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.p,{children:"\u521b\u5efa\u8868\u65f6\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a HLL\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE hllDemo\n(\n    k1 TINYINT,\n    v1 HLL HLL_UNION\n)\nENGINE=olap\nAGGREGATE KEY(k1)\nDISTRIBUTED BY HASH(k1) BUCKETS 8;\n"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>l});var t=n(67294);const r=t.createContext({});function l(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:l(e),t.createElement(r.Provider,{value:c},s)}}}]);