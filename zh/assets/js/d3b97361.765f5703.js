"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43970],{99463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},i="CANCEL ALTER TABLE",d={id:"sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",title:"CANCEL ALTER TABLE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"BACKUP",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/BACKUP"},next:{title:"CANCEL BACKUP",permalink:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL_BACKUP"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cancel-alter-table",children:"CANCEL ALTER TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u53d6\u6d88\u6307\u5b9a\u8868\u7684\u4ee5\u4e0b\u53d8\u66f4 (Alter) \u64cd\u4f5c\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u8868\u7ed3\u6784\uff1a\u589e\u52a0\u5217\uff0c\u5220\u9664\u5217\uff0c\u8c03\u6574\u5217\u987a\u5e8f\u548c\u4fee\u6539\u5217\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Rollup \u7d22\u5f15: \u521b\u5efa rollup \u7d22\u5f15\u548c\u5220\u9664 rollup \u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u4e3a\u540c\u6b65\u64cd\u4f5c\uff0c\u53ea\u6709\u62e5\u6709\u5bf9\u5e94\u8868 ALTER \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u53d6\u6d88\u8868\u7ed3\u6784\u53d8\u66f4\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE COLUMN FROM [db_name.]table_name\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u53d6\u6d88 rollup \u7d22\u5f15\u53d8\u66f4\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE ROLLUP FROM [db_name.]table_name\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u5fc5\u9009"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"db_name"}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"\u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u540d\u79f0\u3002\u5982\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6570\u636e\u5e93\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table_name"}),(0,t.jsx)(n.td,{children:"\u662f"}),(0,t.jsx)(n.td,{children:"\u8868\u540d\u3002"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e00\uff1a\u53d6\u6d88\u6570\u636e\u5e93 ",(0,t.jsx)(n.code,{children:"example_db"})," \u4e2d\uff0c",(0,t.jsx)(n.code,{children:"example_table"})," \u7684\u8868\u7ed3\u6784\u53d8\u66f4\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE COLUMN FROM example_db.example_table;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u53d6\u6d88\u5f53\u524d\u6570\u636e\u5e93\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"example_table"})," \u7684 rollup \u7d22\u5f15\u53d8\u66f4\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CANCEL ALTER TABLE ROLLUP FROM example_table;\n"})})]})}const o=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:d},n)}}}]);