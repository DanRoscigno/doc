"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[95558],{34051:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(85893),i=s(11151);const t={displayed_sidebar:"Chinese"},l="percentile_union",c={id:"sql-reference/sql-functions/percentile-functions/percentile_union",title:"percentile_union",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3/sql-reference/sql-functions/percentile-functions/percentile_union.md",sourceDirName:"sql-reference/sql-functions/percentile-functions",slug:"/sql-reference/sql-functions/percentile-functions/percentile_union",permalink:"/zh/docs/2.3/sql-reference/sql-functions/percentile-functions/percentile_union",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/percentile-functions/percentile_union.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"percentile_hash",permalink:"/zh/docs/2.3/sql-reference/sql-functions/percentile-functions/percentile_hash"},next:{title:"hll_cardinality",permalink:"/zh/docs/2.3/sql-reference/sql-functions/scalar-functions/hll_cardinality"}},o={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"percentile_union",children:"percentile_union"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4e8e\u5bf9\u5206\u7ec4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"percentile_union(expr);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"expr"}),": \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a PERCENTILE\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u4e3a PERCENTILE\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"percentile\u7269\u5316\u89c6\u56fe\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE sales_records(\n    record_id int, \n    seller_id int, \n    store_id int, \n    sale_date date, \n    sale_amt bigint\n) distributed BY hash(record_id) \nproperties("replication_num" = "1");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9",(0,r.jsx)(n.code,{children:"sale_amt"}),"\u5efa\u7acb PERCENTILE \u7c7b\u578b\u7269\u5316\u89c6\u56fe\u8868\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"create materialized view mv as\nselect store_id, percentile_union(percentile_hash(sale_amt)) from sales_records group by store_id;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u5305\u542b PERCENTILE \u7c7b\u578b\u7684\u805a\u5408\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE sales_records(\n    record_id int, \n    seller_id int, \n    store_id int, \n    sale_amt_per percentile percentile_union\n) ENGINE=OLAP\nAGGREGATE KEY(`record_id`, `seller_id`, `store_id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`record_id`) BUCKETS 3\nPROPERTIES (\n"replication_num" = "1",\n"storage_format" = "DEFAULT"\n);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u67e5\u8be2 PERCENTILE \u7c7b\u578b\u5217\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select percentile_approx_raw(percentile_union(sale_amt_per), 0.99) from sales_records;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bfc\u5165\u5305\u542bPERCENTILE\u7684\u805a\u5408\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'curl --location-trusted -u root -H "columns: record_id, seller_id, store_id,tmp, sale_amt_per =percentile_hash(tmp)" -H "column_separator:," -T a http://ip:port/api/test/sales_records/_stream_load\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>t});var r=s(67294);const i=r.createContext({});function t(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:t(e),r.createElement(i.Provider,{value:c},n)}}}]);