"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48783],{10896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>E,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var l=s(85893),i=s(11151);const r={displayed_sidebar:"Chinese"},t="All commands",a={id:"sql-reference/sql-statements/all-commands",title:"All commands",description:"\u672c\u6587\u7f57\u5217\u4e86\u6240\u6709 StarRocks \u652f\u6301\u7684 SQL \u547d\u4ee4\uff0c\u5e76\u6309\u7167\u547d\u4ee4\u7684\u529f\u80fd\u8fdb\u884c\u4e86\u5206\u7c7b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-statements/all-commands.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/all-commands",permalink:"/zh/docs/3.0/sql-reference/sql-statements/all-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/all-commands.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"SHOW USERS",permalink:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_USERS"},next:{title:"AUTO_INCREMENT",permalink:"/zh/docs/3.0/sql-reference/sql-statements/auto_increment"}},d={},c=[{value:"\u7528\u6237\u8d26\u6237\u7ba1\u7406",id:"\u7528\u6237\u8d26\u6237\u7ba1\u7406",level:2},{value:"\u96c6\u7fa4\u7ba1\u7406",id:"\u96c6\u7fa4\u7ba1\u7406",level:2},{value:"FE\uff0cBE\uff0cCN\uff0cBroker\uff0cprocess",id:"febecnbrokerprocess",level:3},{value:"\u8d44\u6e90\u7ec4",id:"\u8d44\u6e90\u7ec4",level:3},{value:"\u8868\uff0ctablet\uff0c\u526f\u672c",id:"\u8868tablet\u526f\u672c",level:3},{value:"\u6587\u4ef6\uff0c\u7d22\u5f15\uff0c\u53d8\u91cf",id:"\u6587\u4ef6\u7d22\u5f15\u53d8\u91cf",level:3},{value:"SQL \u9ed1\u540d\u5355",id:"sql-\u9ed1\u540d\u5355",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u5bfc\u5165\uff0c\u5bfc\u51fa",id:"\u5bfc\u5165\u5bfc\u51fa",level:2},{value:"Routine load",id:"routine-load",level:3},{value:"\u5176\u4ed6\u5bfc\u5165",id:"\u5176\u4ed6\u5bfc\u5165",level:3},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:3},{value:"ETL \u4efb\u52a1",id:"etl-\u4efb\u52a1",level:3},{value:"\u6570\u636e\u76ee\u5f55 (Catalog)\uff0c\u6570\u636e\u5e93\uff0c\u8d44\u6e90",id:"\u6570\u636e\u76ee\u5f55-catalog\u6570\u636e\u5e93\u8d44\u6e90",level:2},{value:"Catalog",id:"catalog",level:3},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:3},{value:"\u5efa\u8868\uff0c\u5206\u533a",id:"\u5efa\u8868\u5206\u533a",level:2},{value:"\u89c6\u56fe\uff0c\u7269\u5316\u89c6\u56fe",id:"\u89c6\u56fe\u7269\u5316\u89c6\u56fe",level:2},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:3},{value:"\u7269\u5316\u89c6\u56fe",id:"\u7269\u5316\u89c6\u56fe",level:3},{value:"\u51fd\u6570\uff0cSELECT",id:"\u51fd\u6570select",level:2},{value:"CBO \u7edf\u8ba1\u4fe1\u606f",id:"cbo-\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"\u5907\u4efd\u4e0e\u6062\u590d",id:"\u5907\u4efd\u4e0e\u6062\u590d",level:2},{value:"\u5de5\u5177\u8f85\u52a9\u8bed\u53e5",id:"\u5de5\u5177\u8f85\u52a9\u8bed\u53e5",level:2}];function h(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"all-commands",children:"All commands"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u7f57\u5217\u4e86\u6240\u6709 StarRocks \u652f\u6301\u7684 SQL \u547d\u4ee4\uff0c\u5e76\u6309\u7167\u547d\u4ee4\u7684\u529f\u80fd\u8fdb\u884c\u4e86\u5206\u7c7b\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#all-commands",children:"All commands"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E7%AE%A1%E7%90%86",children:"\u7528\u6237\u8d26\u6237\u7ba1\u7406"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#%E9%9B%86%E7%BE%A4%E7%AE%A1%E7%90%86",children:"\u96c6\u7fa4\u7ba1\u7406"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#febecnbrokerprocess",children:"FE\uff0cBE\uff0cCN\uff0cBroker\uff0cprocess"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E8%B5%84%E6%BA%90%E7%BB%84",children:"\u8d44\u6e90\u7ec4"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E8%A1%A8tablet%E5%89%AF%E6%9C%AC",children:"\u8868\uff0ctablet\uff0c\u526f\u672c"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E6%96%87%E4%BB%B6%E7%B4%A2%E5%BC%95%E5%8F%98%E9%87%8F",children:"\u6587\u4ef6\uff0c\u7d22\u5f15\uff0c\u53d8\u91cf"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sql-%E9%BB%91%E5%90%8D%E5%8D%95",children:"SQL \u9ed1\u540d\u5355"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E6%8F%92%E4%BB%B6",children:"\u63d2\u4ef6"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA",children:"\u5bfc\u5165\uff0c\u5bfc\u51fa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#routine-load",children:"Routine load"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%85%B6%E4%BB%96%E5%AF%BC%E5%85%A5",children:"\u5176\u4ed6\u5bfc\u5165"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%AF%BC%E5%87%BA",children:"\u5bfc\u51fa"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#etl-%E4%BB%BB%E5%8A%A1",children:"ETL \u4efb\u52a1"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#%E6%95%B0%E6%8D%AE%E7%9B%AE%E5%BD%95-catalog%E6%95%B0%E6%8D%AE%E5%BA%93%E8%B5%84%E6%BA%90",children:"\u6570\u636e\u76ee\u5f55 (Catalog)\uff0c\u6570\u636e\u5e93\uff0c\u8d44\u6e90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#catalog",children:"Catalog"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E6%95%B0%E6%8D%AE%E5%BA%93",children:"\u6570\u636e\u5e93"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E8%B5%84%E6%BA%90",children:"\u8d44\u6e90"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%BB%BA%E8%A1%A8%E5%88%86%E5%8C%BA",children:"\u5efa\u8868\uff0c\u5206\u533a"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"#%E8%A7%86%E5%9B%BE%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE",children:"\u89c6\u56fe\uff0c\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E8%A7%86%E5%9B%BE",children:"\u89c6\u56fe"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E7%89%A9%E5%8C%96%E8%A7%86%E5%9B%BE",children:"\u7269\u5316\u89c6\u56fe"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%87%BD%E6%95%B0select",children:"\u51fd\u6570\uff0cSELECT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#cbo-%E7%BB%9F%E8%AE%A1%E4%BF%A1%E6%81%AF",children:"CBO \u7edf\u8ba1\u4fe1\u606f"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%A4%87%E4%BB%BD%E4%B8%8E%E6%81%A2%E5%A4%8D",children:"\u5907\u4efd\u4e0e\u6062\u590d"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#%E5%B7%A5%E5%85%B7%E8%BE%85%E5%8A%A9%E8%AF%AD%E5%8F%A5",children:"\u5de5\u5177\u8f85\u52a9\u8bed\u53e5"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7528\u6237\u8d26\u6237\u7ba1\u7406",children:"\u7528\u6237\u8d26\u6237\u7ba1\u7406"}),"\n",(0,l.jsx)(n.p,{children:"\u7ba1\u7406\u7528\u6237\u3001\u89d2\u8272\u3001\u548c\u6743\u9650\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/ALTER_USER",children:"ALTER USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/CREATE_ROLE",children:"CREATE ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/CREATE_USER",children:"CREATE USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_ROLE",children:"DROP ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/DROP_USER",children:"DROP USER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/EXECUTE_AS",children:"EXECUTE AS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/GRANT",children:"GRANT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/REVOKE",children:"REVOKE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_DEFAULT_ROLE",children:"SET DEFAULT ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_PASSWORD",children:"SET PASSWORD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_PROPERTY",children:"SET PROPERTY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SET_ROLE",children:"SET ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_AUTHENTICATION",children:"SHOW AUTHENTICATION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_GRANTS",children:"SHOW GRANTS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_PROPERTY",children:"SHOW PROPERTY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_ROLES",children:"SHOW ROLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/account-management/SHOW_USERS",children:"SHOW USERS"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u96c6\u7fa4\u7ba1\u7406",children:"\u96c6\u7fa4\u7ba1\u7406"}),"\n",(0,l.jsx)(n.p,{children:"\u7ba1\u7406\u96c6\u7fa4\uff0c\u5305\u62ec FE\u3001BE\u3001Compute Node (CN)\u3001\u8d44\u6e90\u7ec4 (Resource Group)\u3001\u5b58\u50a8\u5377\uff08Storage Volume\uff09\u3001\u8868\u3001Tablet\u3001\u526f\u672c (Replica)\u3001\u6587\u4ef6\u3001\u7d22\u5f15\uff08Index\uff09\u3001\u53d8\u91cf\uff08Variable\uff09\u3001\u63d2\u4ef6\uff08Plugin\uff09\u7b49\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"febecnbrokerprocess",children:"FE\uff0cBE\uff0cCN\uff0cBroker\uff0cprocess"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET CONFIG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_CONFIG",children:"ADMIN SHOW CONFIG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ALTER_SYSTEM",children:"ALTER SYSTEM"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CANCEL_DECOMMISSION",children:"CANCEL DECOMMISSION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/KILL",children:"KILL"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BACKENDS",children:"SHOW BACKENDS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_BROKER",children:"SHOW BROKER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_COMPUTE_NODES",children:"SHOW COMPUTE NODES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_FRONTENDS",children:"SHOW FRONTENDS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PROC",children:"SHOW PROC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PROCESSLIST",children:"SHOW PROCESSLIST"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8d44\u6e90\u7ec4",children:"\u8d44\u6e90\u7ec4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP",children:"CREATE RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ALTER_RESOURCE_GROUP",children:"ALTER RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/DROP_RESOURCE_GROUP",children:"DROP RESOURCE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP",children:"SHOW RESOURCE GROUP"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8868tablet\u526f\u672c",children:"\u8868\uff0ctablet\uff0c\u526f\u672c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_CANCEL_REPAIR",children:"ADMIN CANCEL REPAIR TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_CHECK_TABLET",children:"ADMIN CHECK TABLET"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_REPAIR",children:"ADMIN REPAIR TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SET_REPLICA_STATUS",children:"ADMIN SET REPLICA STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_DISTRIBUTION",children:"ADMIN SHOW REPLICA DISTRIBUTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADMIN_SHOW_REPLICA_STATUS",children:"ADMIN SHOW REPLICA STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_TABLE_STATUS",children:"SHOW TABLE STATUS"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6587\u4ef6\u7d22\u5f15\u53d8\u91cf",children:"\u6587\u4ef6\uff0c\u7d22\u5f15\uff0c\u53d8\u91cf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/CREATE_FILE",children:"CREATE FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_INDEX",children:"CREATE INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/DROP_FILE",children:"DROP FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_INDEX",children:"DROP INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SET",children:"SET (variable)"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_FILE",children:"SHOW FILE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_FULL_COLUMNS",children:"SHOW FULL COLUMNS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_INDEX",children:"SHOW INDEX"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_VARIABLES",children:"SHOW VARIABLES"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sql-\u9ed1\u540d\u5355",children:"SQL \u9ed1\u540d\u5355"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/ADD_SQLBLACKLIST",children:"ADD SQLBLACKLIST"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",children:"SHOW SQLBLACKLIST"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",children:"DELETE SQLBLACKLIST"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/INSTALL_PLUGIN",children:"INSTALL PLUGIN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/SHOW_PLUGINS",children:"SHOW PLUGINS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/UNINSTALL_PLUGIN",children:"UNINSTALL PLUGIN"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u5165\u5bfc\u51fa",children:"\u5bfc\u5165\uff0c\u5bfc\u51fa"}),"\n",(0,l.jsx)(n.h3,{id:"routine-load",children:"Routine load"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/alter-routine-load",children:"ALTER ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/PAUSE_ROUTINE_LOAD",children:"PAUSE ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/RESUME_ROUTINE_LOAD",children:"RESUME ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD",children:"SHOW ROUTINE LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ROUTINE_LOAD_TASK",children:"SHOW ROUTINE LOAD TASK"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/STOP_ROUTINE_LOAD",children:"STOP ROUTINE LOAD"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5176\u4ed6\u5bfc\u5165",children:"\u5176\u4ed6\u5bfc\u5165"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/ALTER_LOAD",children:"ALTER LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_LOAD",children:"CANCEL LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TRANSACTION",children:"SHOW TRANSACTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"SPARK LOAD"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5bfc\u51fa",children:"\u5bfc\u51fa"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/EXPORT",children:"EXPORT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_EXPORT",children:"CANCEL EXPORT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT",children:"SHOW EXPORT"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"etl-\u4efb\u52a1",children:"ETL \u4efb\u52a1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DROP_TASK",children:"DROP TASK"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SUBMIT_TASK",children:"SUBMIT TASK"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u76ee\u5f55-catalog\u6570\u636e\u5e93\u8d44\u6e90",children:"\u6570\u636e\u76ee\u5f55 (Catalog)\uff0c\u6570\u636e\u5e93\uff0c\u8d44\u6e90"}),"\n",(0,l.jsx)(n.h3,{id:"catalog",children:"Catalog"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_CATALOG",children:"DROP CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SET_CATALOG",children:"SET CATALOG"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CATALOGS",children:"SHOW CATALOGS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_CATALOG",children:"SHOW CREATE CATALOG"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636e\u5e93",children:"\u6570\u636e\u5e93"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_DATABASE",children:"ALTER DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_DATABASE",children:"CREATE DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_DATABASE",children:"DROP DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_DATABASE",children:"SHOW CREATE DATABASE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATA",children:"SHOW DATA"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES",children:"SHOW DATABASES"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_RESOURCE",children:"ALTER RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_RESOURCE",children:"CREATE RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_RESOURCE",children:"DROP RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_RESOURCES",children:"SHOW RESOURCES"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5efa\u8868\u5206\u533a",children:"\u5efa\u8868\uff0c\u5206\u533a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL_ALTER_TABLE",children:"CANCEL ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE_LIKE",children:"CREATE TABLE LIKE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_TABLE",children:"DROP TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/REFRESH_EXTERNAL_TABLE",children:"REFRESH EXTERNAL TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/TRUNCATE_TABLE",children:"TRUNCATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",children:"SHOW DELETE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES",children:"SHOW DYNAMIC PARTITION TABLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS",children:"SHOW PARTITIONS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLES",children:"SHOW TABLES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_TABLET",children:"SHOW TABLET"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/UPDATE",children:"UPDATE"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u89c6\u56fe\u7269\u5316\u89c6\u56fe",children:"\u89c6\u56fe\uff0c\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsx)(n.h3,{id:"\u89c6\u56fe",children:"\u89c6\u56fe"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_VIEW",children:"ALTER VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_VIEW",children:"CREATE VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_VIEW",children:"SHOW CREATE VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_VIEW",children:"DROP VIEW"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7269\u5316\u89c6\u56fe",children:"\u7269\u5316\u89c6\u56fe"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW",children:"ALTER MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW",children:"CREATE MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW",children:"DROP MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/CANCEL_REFRESH_MATERIALIZED_VIEW",children:"CANCEL REFRESH MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/REFRESH_MATERIALIZED_VIEW",children:"REFRESH MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_ALTER_MATERIALIZED_VIEW",children:"SHOW ALTER MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_MATERIALIZED_VIEW",children:"SHOW CREATE MATERIALIZED VIEW"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW",children:"SHOW MATERIALIZED VIEWS"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u51fd\u6570select",children:"\u51fd\u6570\uff0cSELECT"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/create-function",children:"CREATE FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/drop-function",children:"DROP FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/show-functions",children:"SHOW FUNCTION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"cbo-\u7edf\u8ba1\u4fe1\u606f",children:"CBO \u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/ANALYZE_TABLE",children:"ANALYZE TABLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_ANALYZE",children:"CREATE ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_ANALYZE",children:"DROP ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_STATS",children:"DROP STATS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/KILL_ANALYZE",children:"KILL ANALYZE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_JOB",children:"SHOW ANALYZE JOB"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_ANALYZE_STATUS",children:"SHOW ANALYZE STATUS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/SHOW_META",children:"SHOW META"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5907\u4efd\u4e0e\u6062\u590d",children:"\u5907\u4efd\u4e0e\u6062\u590d"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/BACKUP",children:"BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL_BACKUP",children:"CANCEL BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CANCEL_RESTORE",children:"CANCEL RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",children:"CREATE REPOSITORY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",children:"DROP REPOSITORY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/RECOVER",children:"RECOVER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/RESTORE",children:"RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_BACKUP",children:"SHOW BACKUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_REPOSITORIES",children:"SHOW REPOSITORIES"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_RESTORE",children:"SHOW RESTORE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_SNAPSHOT",children:"SHOW SNAPSHOT"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5de5\u5177\u8f85\u52a9\u8bed\u53e5",children:"\u5de5\u5177\u8f85\u52a9\u8bed\u53e5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Utility/DESCRIBE",children:"DESC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/Administration/EXPLAIN",children:"EXPLAIN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-statements/data-definition/USE",children:"USE"})}),"\n"]})]})}const E=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(h,e)})):h(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>r});var l=s(67294);const i=l.createContext({});function r(e){const n=l.useContext(i);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||t:r(e),l.createElement(i.Provider,{value:a},n)}}}]);