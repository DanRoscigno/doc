"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26550],{62333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>E,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(85893),a=t(11151);const i={displayed_sidebar:"Chinese"},l="SHOW DELETE",r={id:"sql-reference/sql-statements/data-manipulation/SHOW_DELETE",title:"SHOW DELETE",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-statements/data-manipulation/SHOW_DELETE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/SHOW_DELETE.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW DATABASES",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES"},next:{title:"SHOW DYNAMIC PARTITION TABLES",permalink:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-delete",children:"SHOW DELETE"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5728\u5f53\u524d\u6570\u636e\u5e93\u4e0b\uff0c\u6240\u6709\u5728\u660e\u7ec6\u6a21\u578b\u8868 (Duplicate Key) \u4e0a\u6210\u529f\u6267\u884c\u7684\u5386\u53f2\u5220\u9664 (DELETE) \u4efb\u52a1\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u5220\u9664\u64cd\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.3/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW DELETE [FROM <db_name>]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"db_name"}),": \u6570\u636e\u5e93\u540d\u79f0\uff0c\u53ef\u9009\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6570\u636e\u5e93\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4\u8fd4\u56de\u5b57\u6bb5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TableName: \u8868\u540d\u79f0\uff0c\u5373\u4ece\u54ea\u4e9b\u8868\u4e2d\u5220\u9664\u4e86\u6570\u636e\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["PartitionName\uff1a\u8868\u7684\u5206\u533a\u540d\u79f0\uff0c\u5373\u4ece\u54ea\u4e9b\u5206\u533a\u4e2d\u5220\u9664\u4e86\u6570\u636e\u3002\u5982\u679c\u8868\u662f",(0,s.jsx)(n.strong,{children:"\u975e\u5206\u533a\u8868"}),"\uff0c\u5219\u663e\u793a\u4e3a ",(0,s.jsx)(n.code,{children:"*"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"CreateTime: DELETE \u4efb\u52a1\u7684\u521b\u5efa\u65f6\u95f4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"DeleteCondition: \u6307\u5b9a\u7684\u5220\u9664\u6761\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"State: DELETE \u4efb\u52a1\u7684\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c55\u793a\u6570\u636e\u5e93 ",(0,s.jsx)(n.code,{children:"database"})," \u4e0b\u7684\u6240\u6709\u5386\u53f2 DELETE \u4efb\u52a1\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW DELETE FROM database;\n\n+------------+---------------+---------------------+-----------------+----------+\n| TableName  | PartitionName | CreateTime          | DeleteCondition | State    |\n+------------+---------------+---------------------+-----------------+----------+\n| mail_merge | *             | 2023-03-14 10:39:03 | name EQ "Peter" | FINISHED |\n+------------+---------------+---------------------+-----------------+----------+\n'})})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var s=t(67294);const a=s.createContext({});function i(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:i(e),s.createElement(a.Provider,{value:r},n)}}}]);