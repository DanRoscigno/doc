"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[84522],{24240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const l={displayed_sidebar:"Chinese"},r="TRUNCATE TABLE",d={id:"sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",title:"TRUNCATE TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW RESOURCES",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/SHOW_RESOURCES"},next:{title:"CREATE FUNCTION",permalink:"/zh/docs/2.2/sql-reference/sql-statements/data-definition/create-function"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5173\u952e\u5b57(keywords)",id:"\u5173\u952e\u5b57keywords",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"truncate-table",children:"TRUNCATE TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u6e05\u7a7a\u6307\u5b9a\u8868\u548c\u5206\u533a\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE [db.]tbl[ PARTITION(p1, p2, ...)];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\uff1a\u65b9\u62ec\u53f7 [] \u4e2d\u5185\u5bb9\u53ef\u7701\u7565\u4e0d\u5199\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u8be5\u8bed\u53e5\u6e05\u7a7a\u6570\u636e\uff0c\u4f46\u4fdd\u7559\u8868\u6216\u5206\u533a\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0d\u540c\u4e8e DELETE\uff0c\u8be5\u8bed\u53e5\u53ea\u80fd\u6574\u4f53\u6e05\u7a7a\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\uff0c\u4e0d\u80fd\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u4e0d\u540c\u4e8e DELETE\uff0c\u4f7f\u7528\u8be5\u65b9\u5f0f\u6e05\u7a7a\u6570\u636e",(0,t.jsx)(n.strong,{children:"\u4e0d\u4f1a\u5bf9\u67e5\u8be2\u6027\u80fd\u9020\u6210\u5f71\u54cd"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8be5\u64cd\u4f5c\u5220\u9664\u7684\u6570\u636e",(0,t.jsx)(n.strong,{children:"\u4e0d\u53ef\u6062\u590d"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u8be5\u547d\u4ee4\u65f6\uff0c\u8868\u72b6\u6001\u9700\u4e3a NORMAL\uff0c\u5373\u4e0d\u5141\u8bb8\u6b63\u5728\u8fdb\u884c SCHEMA CHANGE \u7b49\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6e05\u7a7a example_db \u4e0b\u7684\u8868 tbl\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE example_db.tbl;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6e05\u7a7a\u8868 tbl \u7684 p1 \u548c p2 \u5206\u533a\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"TRUNCATE TABLE tbl PARTITION(p1, p2);\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952e\u5b57keywords",children:"\u5173\u952e\u5b57(keywords)"}),"\n",(0,t.jsx)(n.p,{children:"TRUNCATE\uff0cTABLE"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var t=s(67294);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||r:l(e),t.createElement(i.Provider,{value:d},n)}}}]);