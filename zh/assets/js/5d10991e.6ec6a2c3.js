"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[63864],{34068:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const d={displayed_sidebar:"Chinese31"},i="SHOW RESOURCES",c={id:"sql-reference/sql-statements/data-definition/SHOW_RESOURCES",title:"SHOW RESOURCES",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/SHOW_RESOURCES.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/SHOW_RESOURCES",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/SHOW_RESOURCES",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/SHOW_RESOURCES.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SHOW META",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/SHOW_META"},next:{title:"TRUNCATE TABLE",permalink:"/doc/zh/docs/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-resources",children:"SHOW RESOURCES"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u7528\u4e8e\u5c55\u793a\u7528\u6237\u6709\u4f7f\u7528\u6743\u9650 (USAGE) \u7684\u8d44\u6e90\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(s.p,{children:["\u666e\u901a\u7528\u6237\u53ef\u4ee5\u770b\u5230\u81ea\u5df1\u6709 USAGE \u6743\u9650\u7684\u8d44\u6e90\uff0c",(0,t.jsx)(s.code,{children:"db_admin"})," \u89d2\u8272\u53ef\u4ee5\u770b\u5230\u5168\u5c40\u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW RESOURCES\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u8fd4\u56de\u5b57\u6bb5"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u5b57\u6bb5"}),(0,t.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Name"}),(0,t.jsx)(s.td,{children:"\u8d44\u6e90\u540d\u79f0\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ResourceType"}),(0,t.jsx)(s.td,{children:"\u8d44\u6e90\u7c7b\u578b\uff0c\u6bd4\u5982 spark\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Key"}),(0,t.jsx)(s.td,{children:"\u521b\u5efa\u8d44\u6e90\u65f6\u5728 PROPERTIES \u91cc\u6307\u5b9a\u7684 key\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Value"}),(0,t.jsx)(s.td,{children:"key \u5bf9\u5e94\u7684 value\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",children:"MySQL [(none)]> show resources;\n+-------------------+--------------+---------------------+-----------------------+\n| Name              | ResourceType | Key                 | Value                 |\n+-------------------+--------------+---------------------+-----------------------+\n| spark_resource_16ce91e4_e20a_11ed_a756_00163e0e489a | spark | spark.master | yarn |\n"})}),"\n",(0,t.jsx)(s.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(s.p,{children:"show resource, show resources"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>d});var t=n(67294);const r=t.createContext({});function d(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:d(e),t.createElement(r.Provider,{value:c},s)}}}]);