"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[98592],{21165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const i={},d="DROP REPOSITORY",c={id:"sql-reference/sql-statements/data-definition/DROP_REPOSITORY",title:"DROP REPOSITORY",description:"\u529f\u80fd",source:"@site/chinese_versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/DROP_REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/DROP_REPOSITORY.md",tags:[],version:"2.5",frontMatter:{},sidebar:"documentation",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW"},next:{title:"DROP RESOURCE",permalink:"/doc/zh/2.5/sql-reference/sql-statements/data-definition/DROP_RESOURCE"}},l={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"drop-repository",children:"DROP REPOSITORY"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u5220\u9664\u4e00\u4e2a\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e ",(0,s.jsx)(n.a,{href:"/doc/zh/2.5/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"})," \u6570\u636e\u5e93\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u5220\u9664\u4ed3\u5e93\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u8be5\u64cd\u4f5c\u4ec5\u5220\u9664\u4ed3\u5e93\u5728 StarRocks \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002\u5982\u9700\u5220\u9664\u5907\u4efd\u6570\u636e\uff0c\u60a8\u9700\u8981\u624b\u52a8\u5220\u9664\u5907\u4efd\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u5feb\u7167\u8def\u5f84\u3002\u5220\u9664\u540e\uff0c\u60a8\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u8def\u5f84\u6620\u5c04\u5230\u8be5\u4ed3\u5e93\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP REPOSITORY <repository_name>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"repository_name"}),(0,s.jsx)(n.td,{children:"\u8981\u5220\u9664\u7684\u4ed3\u5e93\u540d\u3002"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5220\u9664\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"oss_repo"})," \u7684\u4ed3\u5e93\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DROP REPOSITORY `oss_repo`;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||d:i(e),s.createElement(r.Provider,{value:c},n)}}}]);