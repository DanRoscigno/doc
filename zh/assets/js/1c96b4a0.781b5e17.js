"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28130],{59273:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var i=s(85893),r=s(11151);const c={displayed_sidebar:"Chinese"},t="\u7cfb\u7edf\u9650\u5236",l={id:"reference/System_limit",title:"\u7cfb\u7edf\u9650\u5236",description:"\u672c\u8282\u4ecb\u7ecd\u4f7f\u7528 StarRocks \u7cfb\u7edf\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/reference/System_limit.md",sourceDirName:"reference",slug:"/reference/System_limit",permalink:"/zh/docs/2.2/reference/System_limit",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/reference/System_limit.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u9519\u8bef\u7801",permalink:"/zh/docs/2.2/reference/Error_code"},next:{title:"\u7cfb\u7edf\u53d8\u91cf",permalink:"/zh/docs/2.2/reference/System_variable"}},d={},o=[];function a(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7cfb\u7edf\u9650\u5236",children:"\u7cfb\u7edf\u9650\u5236"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u8282\u4ecb\u7ecd\u4f7f\u7528 StarRocks \u7cfb\u7edf\u65f6\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"StarRocks \u91c7\u7528 MySQL \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u7528\u6237\u53ef\u901a\u8fc7 MySQL Client \u6216\u8005 JDBC \u8fde\u63a5\u5230 StarRocks \u96c6\u7fa4\u3002\u9009\u62e9 MySQL Client \u7248\u672c\u65f6\u5efa\u8bae\u91c7\u7528 5.1 \u53ca\u4e4b\u540e\u7684\u7248\u672c\uff0c5.1 \u4e4b\u524d\u7248\u672c\u4e0d\u652f\u6301\u957f\u5ea6\u8d85\u8fc716\u4e2a\u5b57\u7b26\u7684\u7528\u6237\u540d\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bf9\u96c6\u7fa4\u540d\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u903b\u8f91\u89c6\u56fe\u540d\u3001\u5217\u540d\u3001\u5206\u533a\u540d\u3001\u7528\u6237\u540d\u3001\u89d2\u8272\u540d\u7b49\u7684\u8981\u6c42\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ea\u80fd\u7531\u6570\u5b57(0-9)\u3001\u5b57\u6bcd(a-z\u6216A-Z)\uff0c\u4ee5\u53ca\u4e0b\u5212\u7ebf(_)\u7ec4\u6210\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u540d\u79f0\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 64 \u5b57\u7b26\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u96c6\u7fa4\u540d\u3001\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u89c6\u56fe\u540d\u3001\u5206\u533a\u540d\u3001\u7528\u6237\u540d\uff0c\u4ee5\u53ca\u89d2\u8272\u540d\u5747\u53ea\u80fd\u4ee5\u5c0f\u5199\u6216\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5217\u540d\u53ef\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u5e93\u540d\u3001\u8868\u540d\u3001\u89c6\u56fe\u540d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5217\u540d\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bf9\u6807\u7b7e\uff08Label\uff09\u540d\u7684\u8981\u6c42\uff1a\n\u5bfc\u5165\u6570\u636e\u65f6\u53ef\u6307\u5b9a\u4efb\u52a1\u7684\u6807\u7b7e\uff08Label\uff09\u3002\u6807\u7b7e\u540d\u53ef\u7531\u6570\u5b57 (0-9)\u3001\u5927\u5c0f\u5199\u5b57\u6bcd\uff08a-z\u6216A-Z\uff09\uff0c\u4ee5\u53ca\u4e0b\u5212\u7ebf(_)\u7ec4\u6210\uff0c\u4e14\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 128 \u4e2a\u5b57\u7b26\u3002\u6807\u7b7e\u540d\u5bf9\u8d77\u59cb\u5b57\u7b26\u65e0\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0cKey\u5217\u4e0d\u80fd\u4f7f\u7528 FLOAT \u6216\u8005 DOUBLE \u7c7b\u578b\uff0c\u53ef\u7528 DECIMAL \u7c7b\u578b\u8868\u793a\u5c0f\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"VARCHAR \u6700\u5927\u957f\u5ea6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e StarRocks 2.1 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u957f\u5ea6\u8303\u56f4\u4e3a 1~65533 \u5b57\u8282\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u3010\u516c\u6d4b\u4e2d\u3011\u81ea StarRocks 2.1 \u7248\u672c\u5f00\u59cb\uff0c\u957f\u5ea6\u8303\u56f4\u4e3a 1~1048576 \u5b57\u8282\u30021048578\uff08\u884c\u6700\u5927\u503c\uff09- 2\uff08\u957f\u5ea6\u6807\u8bc6\u4f4d\uff0c\u8bb0\u5f55\u5b9e\u9645\u6570\u636e\u957f\u5ea6\uff09= 1048576\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"StarRocks \u4ec5\u652f\u6301 UTF8 \u7f16\u7801\uff0c\u4e0d\u652f\u6301 GB \u7b49\u7f16\u7801\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"StarRocks \u4e0d\u652f\u6301\u4fee\u6539\u8868\u4e2d\u7684\u5217\u540d\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e2a\u8868\u8fbe\u5f0f\u4e2d\u5b50\u8868\u8fbe\u5f0f\u7684\u6700\u5927\u4e2a\u6570\u9ed8\u8ba4\u4e3a 10000\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"fe.conf"})," \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"expr_children_limit"})," \u914d\u7f6e\u9879\u4fee\u6539\u3002"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>c});var i=s(67294);const r=i.createContext({});function c(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:c(e),i.createElement(r.Provider,{value:l},n)}}}]);