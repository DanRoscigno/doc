"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18348],{82666:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var d=n(85893),i=n(11151);const s={displayed_sidebar:"Chinese"},t="SSB \u6027\u80fd\u6d4b\u8bd5",l={id:"benchmarking/SSB_Benchmarking",title:"SSB \u6027\u80fd\u6d4b\u8bd5",description:"\u4e00\u3001\u6d4b\u8bd5\u7ed3\u8bba",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2/benchmarking/SSB_Benchmarking.md",sourceDirName:"benchmarking",slug:"/benchmarking/SSB_Benchmarking",permalink:"/zh/docs/2.2/benchmarking/SSB_Benchmarking",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/benchmarking/SSB_Benchmarking.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u8bbe\u7f6e\u65f6\u533a",permalink:"/zh/docs/2.2/administration/timezone"},next:{title:"TPC-H Benchmarking",permalink:"/zh/docs/2.2/benchmarking/TPC-H_Benchmarking"}},c={},o=[{value:"\u4e00\u3001\u6d4b\u8bd5\u7ed3\u8bba",id:"\u4e00\u6d4b\u8bd5\u7ed3\u8bba",level:2},{value:"\u4e8c\u3001\u6d4b\u8bd5\u51c6\u5907",id:"\u4e8c\u6d4b\u8bd5\u51c6\u5907",level:2},{value:"\uff08\u4e00\uff09\u786c\u4ef6\u73af\u5883",id:"\u4e00\u786c\u4ef6\u73af\u5883",level:3},{value:"\uff08\u4e8c\uff09\u8f6f\u4ef6\u73af\u5883",id:"\u4e8c\u8f6f\u4ef6\u73af\u5883",level:3},{value:"\u4e09\u3001\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",id:"\u4e09\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",level:2},{value:"\uff08\u4e00\uff09\u6d4b\u8bd5\u6570\u636e",id:"\u4e00\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\uff08\u4e8c\uff09\u6d4b\u8bd5 SQL",id:"\u4e8c\u6d4b\u8bd5-sql",level:3},{value:"1. \u5355\u8868\u6d4b\u8bd5 SQL",id:"1-\u5355\u8868\u6d4b\u8bd5-sql",level:4},{value:"2. \u5355\u8868\u4f4e\u57fa\u6570\u6d4b\u8bd5 SQL",id:"2-\u5355\u8868\u4f4e\u57fa\u6570\u6d4b\u8bd5-sql",level:4},{value:"\uff08\u4e09\uff09\u6d4b\u8bd5\u7ed3\u679c",id:"\u4e09\u6d4b\u8bd5\u7ed3\u679c",level:3},{value:"1. SSB \u5355\u8868\u6d4b\u8bd5\u7ed3\u679c",id:"1-ssb-\u5355\u8868\u6d4b\u8bd5\u7ed3\u679c",level:4},{value:"2. \u4f4e\u57fa\u6570\u805a\u5408\u6d4b\u8bd5\u7ed3\u679c",id:"2-\u4f4e\u57fa\u6570\u805a\u5408\u6d4b\u8bd5\u7ed3\u679c",level:4},{value:"\u56db\u3001\u6d4b\u8bd5\u6b65\u9aa4",id:"\u56db\u6d4b\u8bd5\u6b65\u9aa4",level:2},{value:"\uff08\u4e00\uff09\u6570\u636e\u751f\u6210",id:"\u4e00\u6570\u636e\u751f\u6210",level:3},{value:"\uff08\u4e8c\uff09\u521b\u5efa\u8868\u7ed3\u6784",id:"\u4e8c\u521b\u5efa\u8868\u7ed3\u6784",level:3},{value:"\uff08\u4e09\uff09\u6570\u636e\u5bfc\u5165",id:"\u4e09\u6570\u636e\u5bfc\u5165",level:3},{value:"\uff08\u56db\uff09\u6570\u636e\u67e5\u8be2",id:"\u56db\u6570\u636e\u67e5\u8be2",level:3}];function h(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",img:"img",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",pre:"pre",code:"code",blockquote:"blockquote",em:"em",ol:"ol"},(0,i.ah)(),r.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"ssb-\u6027\u80fd\u6d4b\u8bd5",children:"SSB \u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,d.jsx)(e.h2,{id:"\u4e00\u6d4b\u8bd5\u7ed3\u8bba",children:"\u4e00\u3001\u6d4b\u8bd5\u7ed3\u8bba"}),"\n",(0,d.jsxs)(e.p,{children:["Star Schema Benchmark\uff08\u4ee5\u4e0b\u7b80\u79f0 SSB\uff09\u662f\u5b66\u672f\u754c\u548c\u5de5\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528\u7684\u4e00\u4e2a\u661f\u578b\u6a21\u578b\u6d4b\u8bd5\u96c6\uff08\u6765\u6e90",(0,d.jsx)(e.a,{href:"https://www.cs.umb.edu/~poneil/StarSchemaB.PDF",children:"\u8bba\u6587"}),"\uff09\uff0c\u901a\u8fc7\u8fd9\u4e2a\u6d4b\u8bd5\u96c6\u5408\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u6bd4\u5404\u79cd OLAP \u4ea7\u54c1\u7684\u57fa\u7840\u6027\u80fd\u6307\u6807\u3002Clickhouse \u901a\u8fc7\u6539\u5199 SSB\uff0c\u5c06\u661f\u578b\u6a21\u578b\u6253\u5e73\u8f6c\u5316\u6210\u5bbd\u8868\uff0c\u6539\u9020\u6210\u4e86\u4e00\u4e2a\u5355\u8868\u6d4b\u8bd5 benchmark\uff08\u53c2\u8003",(0,d.jsx)(e.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"\u94fe\u63a5"}),"\uff09\u3002\u672c\u62a5\u544a\u8bb0\u5f55\u4e86 StarRocks\u3001Apache Druid \u548c Clickhouse \u5728 SSB \u5355\u8868\u6570\u636e\u96c6\u4e0a\u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\uff0c\u5e76\u8bb0\u5f55\u4e86\u5728\u7528\u6237\u7ecf\u5e38\u78b0\u5230\u7684\u4f4e\u57fa\u6570\u805a\u5408\u573a\u666f\u4e0b StarRocks \u548c ClickHouse \u7684\u6027\u80fd\u5bf9\u6bd4\u7ed3\u679c\u3002\u6d4b\u8bd5\u7ed3\u8bba\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5728\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u7684 13 \u4e2a\u67e5\u8be2\u4e0a\uff0cClickHouse \u7684\u6574\u4f53\u67e5\u8be2\u65f6\u95f4\u662f StarRocks \u7684 1.7 \u500d\uff0cApache Druid \u7684\u6574\u4f53\u67e5\u8be2\u65f6\u95f4\u662f StarRocks \u7684 2.2 \u500d\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u5728 StarRocks \u542f\u7528 bitmap index \u548c cache \u7684\u60c5\u51b5\u4e0b\uff0c\u6027\u80fd\u66f4\u80dc\u4e00\u7b79\uff0c\u5c24\u5176\u5728 Q2.2 Q2.3 Q3.3 \u4e0a\u6709\u663e\u8457\u63d0\u5347\u3002\u6574\u4f53\u6027\u80fd\u662f ClickHouse \u7684 2.2 \u500d\uff0cApache Druid \u7684 2.9 \u500d\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"\u6574\u4f53\u6027\u80fd\u5bf9\u6bd4",src:n(40685).Z+"",width:"750",height:"304"})}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u5728\u6807\u51c6\u6d4b\u8bd5\u6570\u636e\u96c6\u4e0a\uff0c\u6211\u4eec\u9009\u53d6\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684\u4f4e\u57fa\u6570\u805a\u5408\u573a\u666f\u3002ClickHouse \u7684\u6574\u4f53\u67e5\u8be2\u65f6\u95f4\u662f StarRocks \u7684 2.26 \u500d\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"\u6027\u80fd\u5bf9\u6bd4\u4f4e\u57fa\u6570\u805a\u5408",src:n(74819).Z+"",width:"2250",height:"964"})}),"\n",(0,d.jsx)(e.p,{children:"\u5728 SSB \u5355\u8868\u548c\u7528\u6237\u7ecf\u5e38\u78b0\u5230\u7684\u4f4e\u57fa\u6570\u805a\u5408\u573a\u666f\u4e0b\u5bf9\u6bd4\u4e86 StarRocks \u548c ClickHouse \u7684\u6027\u80fd\u6307\u6807\u3002\u91c7\u7528 3x16core 64GB \u5185\u5b58\u7684\u4e91\u4e3b\u673a\uff0c\u5728 6 \u4ebf\u884c\u7684\u6570\u636e\u89c4\u6a21\u8fdb\u884c\u6d4b\u8bd5\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u4e8c\u6d4b\u8bd5\u51c6\u5907",children:"\u4e8c\u3001\u6d4b\u8bd5\u51c6\u5907"}),"\n",(0,d.jsx)(e.h3,{id:"\u4e00\u786c\u4ef6\u73af\u5883",children:"\uff08\u4e00\uff09\u786c\u4ef6\u73af\u5883"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u673a\u5668"}),(0,d.jsx)(e.th,{children:"3\u53f0 \u963f\u91cc\u4e91\u4e3b\u673a"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"CPU"}),(0,d.jsx)(e.td,{children:"16coreIntel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHzcache size : 36608 KB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5185\u5b58"}),(0,d.jsx)(e.td,{children:"64GB"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u7f51\u7edc\u5e26\u5bbd"}),(0,d.jsx)(e.td,{children:"5Gbits/s"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u78c1\u76d8"}),(0,d.jsx)(e.td,{children:"ESSD \u9ad8\u6548\u4e91\u76d8"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u4e8c\u8f6f\u4ef6\u73af\u5883",children:"\uff08\u4e8c\uff09\u8f6f\u4ef6\u73af\u5883"}),"\n",(0,d.jsx)(e.p,{children:"StarRocks\uff0cApache Druid \u548c Clickhouse \u90e8\u7f72\u5728\u76f8\u540c\u914d\u7f6e\u7684\u673a\u5668\u4e0a\u5206\u522b\u8fdb\u884c\u542f\u52a8\u6d4b\u8bd5\u3002"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"StarRocks \u90e8\u7f72 3BE 1FE\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"Clickhouse \u90e8\u7f72\u4e09\u4e2a\u8282\u70b9\u540e\u5efa\u7acb\u5206\u5e03\u5f0f\u8868\uff1b"}),"\n",(0,d.jsx)(e.li,{children:"Apache Druid \u591a\u4e00\u53f0 8core \u7684 master \u4e3b\u673a\uff0c\u90e8\u7f72\u4e86 Broker/Coordinator/Overlord/Router\uff08\u4f46\u662f\u6d4b\u8bd5\u538b\u529b\u4e0d\u5728 master\uff0c\u5f71\u54cd\u8f83\u5c0f\u53ef\u4ee5\u5ffd\u7565\uff09\uff0cHistorical/MiddleManager \u6df7\u5408\u90e8\u7f72\u5728\u4e0e SR\uff0cCK \u540c\u7b49\u914d\u7f6e\u7684\u4e3b\u673a\u4e0a\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u5185\u6838\u7248\u672c\uff1aLinux 3.10.0-1127.13.1.el7.x86_64"}),"\n",(0,d.jsx)(e.p,{children:"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aCentOS Linux release 7.8.2003"}),"\n",(0,d.jsx)(e.p,{children:"\u8f6f\u4ef6\u7248\u672c\uff1aStarRocks \u793e\u533a\u7248 2.1\uff0cAapche Druid 0.20.1\uff0cClickhouse 21.9"}),"\n",(0,d.jsx)(e.h2,{id:"\u4e09\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c",children:"\u4e09\u3001\u6d4b\u8bd5\u6570\u636e\u4e0e\u7ed3\u679c"}),"\n",(0,d.jsx)(e.h3,{id:"\u4e00\u6d4b\u8bd5\u6570\u636e",children:"\uff08\u4e00\uff09\u6d4b\u8bd5\u6570\u636e"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u8868\u540d"}),(0,d.jsx)(e.th,{children:"\u884c\u6570"}),(0,d.jsx)(e.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"lineorder"}),(0,d.jsx)(e.td,{children:"6\u4ebf"}),(0,d.jsx)(e.td,{children:"SSB \u5546\u54c1\u8ba2\u5355\u8868"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"customer"}),(0,d.jsx)(e.td,{children:"300\u4e07"}),(0,d.jsx)(e.td,{children:"SSB \u5ba2\u6237\u8868"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"part"}),(0,d.jsx)(e.td,{children:"140\u4e07"}),(0,d.jsx)(e.td,{children:"SSB \u96f6\u90e8\u4ef6\u8868"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"supplier"}),(0,d.jsx)(e.td,{children:"20\u4e07"}),(0,d.jsx)(e.td,{children:"SSB \u4f9b\u5e94\u5546\u8868"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"dates"}),(0,d.jsx)(e.td,{children:"2556"}),(0,d.jsx)(e.td,{children:"\u65e5\u671f\u8868"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"lineorder_flat"}),(0,d.jsx)(e.td,{children:"6\u4ebf"}),(0,d.jsx)(e.td,{children:"SSB \u6253\u5e73\u540e\u7684\u5bbd\u8868"})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"\u4e8c\u6d4b\u8bd5-sql",children:"\uff08\u4e8c\uff09\u6d4b\u8bd5 SQL"}),"\n",(0,d.jsx)(e.h4,{id:"1-\u5355\u8868\u6d4b\u8bd5-sql",children:"1. \u5355\u8868\u6d4b\u8bd5 SQL"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-SQL",children:"--Q1.1 \r\nSELECT sum(lo_extendedprice * lo_discount) AS revenue \r\nFROM lineorder_flat \r\nWHERE lo_orderdate >= '1993-01-01' and lo_orderdate <= '1993-12-31' AND lo_discount BETWEEN 1 AND 3 AND lo_quantity < 25; \r\n\r\n--Q1.2 \r\nSELECT sum(lo_extendedprice * lo_discount) AS revenue FROM lineorder_flat  \r\nWHERE lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-01-31' AND lo_discount BETWEEN 4 AND 6 AND lo_quantity BETWEEN 26 AND 35; \r\n\r\n--Q1.3 \r\nSELECT sum(lo_extendedprice * lo_discount) AS revenue \r\nFROM lineorder_flat \r\nWHERE weekofyear(lo_orderdate) = 6 AND lo_orderdate >= '1994-01-01' and lo_orderdate <= '1994-12-31' \r\n AND lo_discount BETWEEN 5 AND 7 AND lo_quantity BETWEEN 26 AND 35; \r\n\r\n--Q2.1 \r\nSELECT sum(lo_revenue), year(lo_orderdate) AS year,  p_brand \r\nFROM lineorder_flat \r\nWHERE p_category = 'MFGR#12' AND s_region = 'AMERICA' \r\nGROUP BY year,  p_brand \r\nORDER BY year, p_brand; \r\n\r\n--Q2.2 \r\nSELECT \r\nsum(lo_revenue), year(lo_orderdate) AS year, p_brand \r\nFROM lineorder_flat \r\nWHERE p_brand >= 'MFGR#2221' AND p_brand <= 'MFGR#2228' AND s_region = 'ASIA' \r\nGROUP BY year,  p_brand \r\nORDER BY year, p_brand; \r\n\r\n--Q2.3 \r\nSELECT sum(lo_revenue),  year(lo_orderdate) AS year, p_brand \r\nFROM lineorder_flat \r\nWHERE p_brand = 'MFGR#2239' AND s_region = 'EUROPE' \r\nGROUP BY  year,  p_brand \r\nORDER BY year, p_brand; \r\n\r\n--Q3.1 \r\nSELECT c_nation, s_nation,  year(lo_orderdate) AS year, sum(lo_revenue) AS revenue FROM lineorder_flat \r\nWHERE c_region = 'ASIA' AND s_region = 'ASIA' AND lo_orderdate  >= '1992-01-01' AND lo_orderdate   <= '1997-12-31' \r\nGROUP BY c_nation, s_nation, year \r\nORDER BY  year ASC, revenue DESC; \r\n\r\n--Q3.2 \r\nSELECT  c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue\r\nFROM lineorder_flat \r\nWHERE c_nation = 'UNITED STATES' AND s_nation = 'UNITED STATES' AND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city, s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n\r\n--Q3.3 \r\nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \r\nFROM lineorder_flat \r\nWHERE c_city in ( 'UNITED KI1' ,'UNITED KI5') AND s_city in ( 'UNITED KI1' ,'UNITED KI5') AND lo_orderdate  >= '1992-01-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city, s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n\r\n--Q3.4 \r\nSELECT c_city, s_city, year(lo_orderdate) AS year, sum(lo_revenue) AS revenue \r\nFROM lineorder_flat \r\nWHERE c_city in ('UNITED KI1', 'UNITED KI5') AND s_city in ( 'UNITED KI1',  'UNITED KI5') AND  lo_orderdate  >= '1997-12-01' AND lo_orderdate <= '1997-12-31' \r\nGROUP BY c_city,  s_city, year \r\nORDER BY year ASC, revenue DESC; \r\n\r\n--Q4.1 \r\nSELECT year(lo_orderdate) AS year, c_nation,  sum(lo_revenue - lo_supplycost) AS profit FROM lineorder_flat \r\nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA' AND p_mfgr in ( 'MFGR#1' , 'MFGR#2') \r\nGROUP BY year, c_nation \r\nORDER BY year ASC, c_nation ASC; \r\n\r\n--Q4.2 \r\nSELECT year(lo_orderdate) AS year, \r\n    s_nation, p_category, sum(lo_revenue - lo_supplycost) AS profit \r\nFROM lineorder_flat \r\nWHERE c_region = 'AMERICA' AND s_region = 'AMERICA' AND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31' AND  p_mfgr in ( 'MFGR#1' , 'MFGR#2') \r\nGROUP BY year, s_nation,  p_category \r\nORDER BY  year ASC, s_nation ASC, p_category ASC; \r\n\r\n--Q4.3 \r\nSELECT year(lo_orderdate) AS year, s_city, p_brand, \r\n    sum(lo_revenue - lo_supplycost) AS profit \r\nFROM lineorder_flat \r\nWHERE s_nation = 'UNITED STATES' AND lo_orderdate >= '1997-01-01' and lo_orderdate <= '1998-12-31' AND p_category = 'MFGR#14' \r\nGROUP BY  year,  s_city, p_brand \r\nORDER BY year ASC,  s_city ASC,  p_brand ASC; \n"})}),"\n",(0,d.jsx)(e.h4,{id:"2-\u5355\u8868\u4f4e\u57fa\u6570\u6d4b\u8bd5-sql",children:"2. \u5355\u8868\u4f4e\u57fa\u6570\u6d4b\u8bd5 SQL"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-SQL",children:"--Q1\r\nselect count(*),lo_shipmode from lineorder_flat group by lo_shipmode;\r\n--Q2\r\nselect count(distinct lo_shipmode) from lineorder_flat;\r\n--Q3\r\nselect count(*),lo_shipmode,lo_orderpriority from lineorder_flat group by lo_shipmode,lo_orderpriority;\r\n--Q4\r\nselect count(*),lo_shipmode,lo_orderpriority from lineorder_flat group by lo_shipmode,lo_orderpriority,lo_shippriority;\r\n--Q5\r\nselect count(*),lo_shipmode,s_city from lineorder_flat group by lo_shipmode,s_city;\r\n--Q6\r\nselect count(*) from lineorder_flat group by c_city,s_city;\r\n--Q7\r\nselect count(*) from lineorder_flat group by lo_shipmode,lo_orderdate;\r\n--Q8\r\nselect count(*) from lineorder_flat group by lo_orderdate,s_nation,s_region;\r\n--Q9\r\nselect count(*) from lineorder_flat group by c_city,s_city,c_nation,s_nation;\r\n--Q10\r\nselect count(*) from (select count(*) from lineorder_flat group by lo_shipmode,lo_orderpriority,p_category,s_nation,c_nation) t;\r\n--Q11\r\nselect count(*) from (select count(*) from lineorder_flat_distributed group by lo_shipmode,lo_orderpriority,p_category,s_nation,c_nation,p_mfgr) t;\r\n--Q12\r\nselect count(*) from (select count(*) from lineorder_flat group by substr(lo_shipmode,2),lower(lo_orderpriority),p_category,s_nation,c_nation,s_region,p_mfgr) t;\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u4e09\u6d4b\u8bd5\u7ed3\u679c",children:"\uff08\u4e09\uff09\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsx)(e.h4,{id:"1-ssb-\u5355\u8868\u6d4b\u8bd5\u7ed3\u679c",children:"1. SSB \u5355\u8868\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"StarRocks \u4e0e ClickHouse\u3001Druid \u7684\u6027\u80fd\u5bf9\u6bd4\uff0c\u5206\u522b\u4f7f\u7528 ClickHouse\u3001Druid \u7684\u67e5\u8be2\u65f6\u95f4\u9664\u4ee5 StarRocks \u7684\u67e5\u8be2\u65f6\u95f4\uff0c\u4e14\u7ed3\u679c\u6570\u5b57\u8d8a\u5927\u4ee3\u8868 StarRocks \u6027\u80fd\u8d8a\u597d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"StarRocks-2.1(ms)"}),(0,d.jsx)(e.th,{children:"StarRocks-2.1-index(ms)"}),(0,d.jsx)(e.th,{children:"ClickHouse-21.9(ms)"}),(0,d.jsx)(e.th,{children:"ClickHouse/StarRocks \u6027\u80fd\u5bf9\u6bd4"}),(0,d.jsx)(e.th,{children:"Druid-0.20.1(ms)"}),(0,d.jsx)(e.th,{children:"Druid/StarRocks \u6027\u80fd\u5bf9\u6bd4"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q1.1"}),(0,d.jsx)(e.td,{children:"47"}),(0,d.jsx)(e.td,{children:"40"}),(0,d.jsx)(e.td,{children:"65"}),(0,d.jsx)(e.td,{children:"1.38"}),(0,d.jsx)(e.td,{children:"650"}),(0,d.jsx)(e.td,{children:"13.83"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q1.2"}),(0,d.jsx)(e.td,{children:"20"}),(0,d.jsx)(e.td,{children:"13"}),(0,d.jsx)(e.td,{children:"69"}),(0,d.jsx)(e.td,{children:"3.45"}),(0,d.jsx)(e.td,{children:"260"}),(0,d.jsx)(e.td,{children:"13.00"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q1.3"}),(0,d.jsx)(e.td,{children:"37"}),(0,d.jsx)(e.td,{children:"33"}),(0,d.jsx)(e.td,{children:"31"}),(0,d.jsx)(e.td,{children:"0.84"}),(0,d.jsx)(e.td,{children:"810"}),(0,d.jsx)(e.td,{children:"21.89"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q2.1"}),(0,d.jsx)(e.td,{children:"190"}),(0,d.jsx)(e.td,{children:"127"}),(0,d.jsx)(e.td,{children:"273"}),(0,d.jsx)(e.td,{children:"1.44"}),(0,d.jsx)(e.td,{children:"290"}),(0,d.jsx)(e.td,{children:"1.53"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q2.2"}),(0,d.jsx)(e.td,{children:"140"}),(0,d.jsx)(e.td,{children:"53"}),(0,d.jsx)(e.td,{children:"307"}),(0,d.jsx)(e.td,{children:"2.19"}),(0,d.jsx)(e.td,{children:"340"}),(0,d.jsx)(e.td,{children:"2.43"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q2.3"}),(0,d.jsx)(e.td,{children:"70"}),(0,d.jsx)(e.td,{children:"37"}),(0,d.jsx)(e.td,{children:"224"}),(0,d.jsx)(e.td,{children:"3.20"}),(0,d.jsx)(e.td,{children:"130"}),(0,d.jsx)(e.td,{children:"1.86"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q3.1"}),(0,d.jsx)(e.td,{children:"330"}),(0,d.jsx)(e.td,{children:"370"}),(0,d.jsx)(e.td,{children:"481"}),(0,d.jsx)(e.td,{children:"1.46"}),(0,d.jsx)(e.td,{children:"370"}),(0,d.jsx)(e.td,{children:"1.12"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q3.2"}),(0,d.jsx)(e.td,{children:"147"}),(0,d.jsx)(e.td,{children:"113"}),(0,d.jsx)(e.td,{children:"361"}),(0,d.jsx)(e.td,{children:"2.46"}),(0,d.jsx)(e.td,{children:"190"}),(0,d.jsx)(e.td,{children:"1.29"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q3.3"}),(0,d.jsx)(e.td,{children:"103"}),(0,d.jsx)(e.td,{children:"30"}),(0,d.jsx)(e.td,{children:"367"}),(0,d.jsx)(e.td,{children:"3.56"}),(0,d.jsx)(e.td,{children:"120"}),(0,d.jsx)(e.td,{children:"1.17"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q3.4"}),(0,d.jsx)(e.td,{children:"30"}),(0,d.jsx)(e.td,{children:"20"}),(0,d.jsx)(e.td,{children:"29"}),(0,d.jsx)(e.td,{children:"0.97"}),(0,d.jsx)(e.td,{children:"60"}),(0,d.jsx)(e.td,{children:"2.00"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q4.1"}),(0,d.jsx)(e.td,{children:"570"}),(0,d.jsx)(e.td,{children:"453"}),(0,d.jsx)(e.td,{children:"475"}),(0,d.jsx)(e.td,{children:"0.83"}),(0,d.jsx)(e.td,{children:"510"}),(0,d.jsx)(e.td,{children:"0.89"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q4.2"}),(0,d.jsx)(e.td,{children:"100"}),(0,d.jsx)(e.td,{children:"73"}),(0,d.jsx)(e.td,{children:"256"}),(0,d.jsx)(e.td,{children:"2.56"}),(0,d.jsx)(e.td,{children:"190"}),(0,d.jsx)(e.td,{children:"1.90"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q4.3"}),(0,d.jsx)(e.td,{children:"53"}),(0,d.jsx)(e.td,{children:"40"}),(0,d.jsx)(e.td,{children:"180"}),(0,d.jsx)(e.td,{children:"3.40"}),(0,d.jsx)(e.td,{children:"210"}),(0,d.jsx)(e.td,{children:"3.96"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sum"}),(0,d.jsx)(e.td,{children:"1837"}),(0,d.jsx)(e.td,{children:"1402"}),(0,d.jsx)(e.td,{children:"3118"}),(0,d.jsx)(e.td,{children:"1.70"}),(0,d.jsx)(e.td,{children:"4130"}),(0,d.jsx)(e.td,{children:"2.25"})]})]})]}),"\n",(0,d.jsx)(e.h4,{id:"2-\u4f4e\u57fa\u6570\u805a\u5408\u6d4b\u8bd5\u7ed3\u679c",children:"2. \u4f4e\u57fa\u6570\u805a\u5408\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"SQL"}),(0,d.jsx)(e.th,{children:"\u67e5\u8be2\u7c7b\u578b"}),(0,d.jsx)(e.th,{children:"\u7ed3\u679c\u96c6 \u7684\u57fa\u6570"}),(0,d.jsx)(e.th,{children:"StarRocks (ms)"}),(0,d.jsx)(e.th,{children:"ClickHouse (ms)"}),(0,d.jsx)(e.th,{children:"\u6027\u80fd\u63d0\u5347\u500d\u6570(CK/SR)"}),(0,d.jsx)(e.th,{children:"Druid (ms)"}),(0,d.jsx)(e.th,{children:"\u6027\u80fd\u63d0\u5347\u500d\u6570(Druid/SR)"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q1"}),(0,d.jsx)(e.td,{children:"select count(*),lo_shipmode from lineorder_flat group by lo_shipmode;"}),(0,d.jsxs)(e.td,{children:["group by 1 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})]}),(0,d.jsx)(e.td,{children:"7"}),(0,d.jsx)(e.td,{children:"380"}),(0,d.jsx)(e.td,{children:"198"}),(0,d.jsx)(e.td,{children:"0.5"}),(0,d.jsx)(e.td,{children:"341"}),(0,d.jsx)(e.td,{children:"0.9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q2"}),(0,d.jsx)(e.td,{children:"select count(distinct lo_shipmode) from lineorder_flat;"}),(0,d.jsxs)(e.td,{children:["count distinct 1 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})]}),(0,d.jsx)(e.td,{children:"1"}),(0,d.jsx)(e.td,{children:"280"}),(0,d.jsx)(e.td,{children:"1055"}),(0,d.jsx)(e.td,{children:"3.8"}),(0,d.jsx)(e.td,{children:"304"}),(0,d.jsx)(e.td,{children:"1.1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q3"}),(0,d.jsx)(e.td,{children:"select count(*),lo_shipmode,lo_orderpriority from lineorder_flat group by lo_shipmode,lo_orderpriority;"}),(0,d.jsx)(e.td,{children:"group by 2 \u4e2a\u4f4e\u57fa\u6570\u5217"}),(0,d.jsx)(e.td,{children:"35"}),(0,d.jsx)(e.td,{children:"470"}),(0,d.jsx)(e.td,{children:"1275"}),(0,d.jsx)(e.td,{children:"2.7"}),(0,d.jsx)(e.td,{children:"1072"}),(0,d.jsx)(e.td,{children:"2.3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q4"}),(0,d.jsx)(e.td,{children:"select count(*),lo_shipmode,lo_orderpriority from lineorder_flat group by lo_shipmode,lo_orderpriority,lo_shippriority;"}),(0,d.jsx)(e.td,{children:"group by 2 \u4e2a\u4f4e\u57fa\u6570\u5217\u548c\u4e00\u4e2aint\u5217"}),(0,d.jsx)(e.td,{children:"35"}),(0,d.jsx)(e.td,{children:"550"}),(0,d.jsx)(e.td,{children:"1431"}),(0,d.jsx)(e.td,{children:"2.6"}),(0,d.jsx)(e.td,{children:"1391"}),(0,d.jsx)(e.td,{children:"2.5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q5"}),(0,d.jsx)(e.td,{children:"select count(*),lo_shipmode,s_city from lineorder_flat group by lo_shipmode,s_city;"}),(0,d.jsx)(e.td,{children:"group by 2 \u4e2a\u4f4e\u57fa\u6570\u5217\uff087 * 250\uff09"}),(0,d.jsx)(e.td,{children:"1750"}),(0,d.jsx)(e.td,{children:"430"}),(0,d.jsx)(e.td,{children:"1273"}),(0,d.jsx)(e.td,{children:"3.0"}),(0,d.jsx)(e.td,{children:"1513"}),(0,d.jsx)(e.td,{children:"3.5"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q6"}),(0,d.jsx)(e.td,{children:"select count(*) from lineorder_flat group by c_city,s_city;"}),(0,d.jsx)(e.td,{children:"group by 2 \u4e2a\u4f4e\u57fa\u6570\u5217  (250 * 250)"}),(0,d.jsx)(e.td,{children:"62500"}),(0,d.jsx)(e.td,{children:"790"}),(0,d.jsx)(e.td,{children:"4236"}),(0,d.jsx)(e.td,{children:"5.4"}),(0,d.jsx)(e.td,{children:"3146"}),(0,d.jsx)(e.td,{children:"4.0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q7"}),(0,d.jsx)(e.td,{children:"select count(*) from lineorder_flat group by lo_shipmode,lo_orderdate;"}),(0,d.jsxs)(e.td,{children:["group by 1 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})," \u548c 1 \u4e2a\u65e5\u671f\u5217"]}),(0,d.jsx)(e.td,{children:"16842"}),(0,d.jsx)(e.td,{children:"650"}),(0,d.jsx)(e.td,{children:"804"}),(0,d.jsx)(e.td,{children:"1.2"}),(0,d.jsx)(e.td,{children:"1825"}),(0,d.jsx)(e.td,{children:"2.8"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q8"}),(0,d.jsx)(e.td,{children:"select count(*) from lineorder_flat group by lo_orderdate,s_nation,s_region;"}),(0,d.jsxs)(e.td,{children:["group by 2 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})," \u548c 1 \u4e2a\u65e5\u671f\u5217"]}),(0,d.jsx)(e.td,{children:"60150"}),(0,d.jsx)(e.td,{children:"550"}),(0,d.jsx)(e.td,{children:"1357"}),(0,d.jsx)(e.td,{children:"2.5"}),(0,d.jsx)(e.td,{children:"2255"}),(0,d.jsx)(e.td,{children:"4.1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q9"}),(0,d.jsx)(e.td,{children:"select count(*) from lineorder_flat group by c_city,s_city,c_nation,s_nation;"}),(0,d.jsx)(e.td,{children:"group by 4 \u4e2a\u4f4e\u57fa\u6570\u5217"}),(0,d.jsx)(e.td,{children:"62500"}),(0,d.jsx)(e.td,{children:"1160"}),(0,d.jsx)(e.td,{children:"5683"}),(0,d.jsx)(e.td,{children:"4.9"}),(0,d.jsx)(e.td,{children:"4502"}),(0,d.jsx)(e.td,{children:"3.9"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q10"}),(0,d.jsxs)(e.td,{children:["select count(",(0,d.jsx)(e.em,{children:") from (select count("}),") from lineorder_flat group by lo_shipmode,lo_orderpriority,p_category,s_nation,c_nation) t;"]}),(0,d.jsxs)(e.td,{children:["group by 5 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})]}),(0,d.jsx)(e.td,{children:"546875"}),(0,d.jsx)(e.td,{children:"4430"}),(0,d.jsx)(e.td,{children:"7635"}),(0,d.jsx)(e.td,{children:"1.7"}),(0,d.jsx)(e.td,{children:"11956"}),(0,d.jsx)(e.td,{children:"2.7"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q11"}),(0,d.jsxs)(e.td,{children:["select count(",(0,d.jsx)(e.em,{children:") from (select count("}),") from lineorder_flat_distributed group by lo_shipmode,lo_orderpriority,p_category,s_nation,c_nation,p_mfgr) t;"]}),(0,d.jsxs)(e.td,{children:["group by 6 \u4e2a\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})]}),(0,d.jsx)(e.td,{children:"546875"}),(0,d.jsx)(e.td,{children:"4250"}),(0,d.jsx)(e.td,{children:"8540"}),(0,d.jsx)(e.td,{children:"2.0"}),(0,d.jsx)(e.td,{children:"12817"}),(0,d.jsx)(e.td,{children:"3.0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Q12"}),(0,d.jsxs)(e.td,{children:["select count(",(0,d.jsx)(e.em,{children:") from (select count("}),") from lineorder_flat group by substr(lo_shipmode,2),lower(lo_orderpriority),p_category,s_nation,c_nation,s_region,p_mfgr) t;"]}),(0,d.jsxs)(e.td,{children:["group by 7 \u4e2a\u5305\u542b\u51fd\u6570\u8ba1\u7b97\u7684\u4f4e\u57fa\u6570\u5217 ",(0,d.jsx)(e.code,{children:"(<50)"})]}),(0,d.jsx)(e.td,{children:"468750"}),(0,d.jsx)(e.td,{children:"4620"}),(0,d.jsx)(e.td,{children:"8538"}),(0,d.jsx)(e.td,{children:"1.8"}),(0,d.jsx)(e.td,{children:"18582"}),(0,d.jsx)(e.td,{children:"4.0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"sum"}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{}),(0,d.jsx)(e.td,{children:"18560"}),(0,d.jsx)(e.td,{children:"42025"}),(0,d.jsx)(e.td,{children:"2.3"}),(0,d.jsx)(e.td,{children:"59704"}),(0,d.jsx)(e.td,{children:"3.2"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u56db\u6d4b\u8bd5\u6b65\u9aa4",children:"\u56db\u3001\u6d4b\u8bd5\u6b65\u9aa4"}),"\n",(0,d.jsxs)(e.p,{children:["ClickHouse \u7684\u5efa\u8868\u5bfc\u5165\u53c2\u8003",(0,d.jsx)(e.a,{href:"https://clickhouse.tech/docs/en/getting-started/example-datasets/star-schema/",children:"\u5b98\u65b9\u6587\u6863"}),"\uff0cStarRocks \u7684\u6570\u636e\u751f\u6210\u5bfc\u5165\u6d41\u7a0b\u5982\u4e0b\u3002"]}),"\n",(0,d.jsx)(e.h3,{id:"\u4e00\u6570\u636e\u751f\u6210",children:"\uff08\u4e00\uff09\u6570\u636e\u751f\u6210"}),"\n",(0,d.jsx)(e.p,{children:"\u9996\u5148\u4e0b\u8f7d ssb-poc \u5de5\u5177\u5305\u5e76\u7f16\u8bd1\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"wget https://starrocks-public.oss-cn-zhangjiakou.aliyuncs.com/ssb-poc-0.10.0.zip\r\nunzip ssb-poc-0.10.0.zip\r\ncd ssb-poc-0.10.0\r\ncd ssb-poc\r\nmake && make install  \n"})}),"\n",(0,d.jsx)(e.p,{children:"\u6240\u6709\u76f8\u5173\u5de5\u5177\u5b89\u88c5\u5230 output \u76ee\u5f55\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u8fdb\u5165 output \u76ee\u5f55\uff0c\u751f\u6210\u6570\u636e\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"cd output\r\nbin/gen-ssb.sh 100 data_dir\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u4e8c\u521b\u5efa\u8868\u7ed3\u6784",children:"\uff08\u4e8c\uff09\u521b\u5efa\u8868\u7ed3\u6784"}),"\n",(0,d.jsx)(e.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 conf/starrocks.conf\uff0c\u6307\u5b9a\u811a\u672c\u64cd\u4f5c\u7684\u96c6\u7fa4\u5730\u5740\uff0c\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u6570\u636e\u5e93\u540d\u7b49\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:" # for mysql cmd\r\n mysql_host: 192.168.1.1\r\n mysql_port: 9030\r\n mysql_user: root\r\n mysql_password:\r\n database: ssb\r\n\r\n# cluster ports\r\n  http_port: 8030\r\n  be_heartbeat_port: 9050\r\n  broker_port: 8000\r\n\r\n# parallel_fragment_exec_instance_num \u8bbe\u7f6e\u5e76\u884c\u5ea6,\u5efa\u8bae\u662f\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u903b\u8f91\u6838\u6570\u7684\u4e00\u534a,\u4ee5\u4e0b\u4ee58\u4e3a\u4f8b\r\n  parallel_num: 8\r\n ...\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u6267\u884c\u811a\u672c\u5efa\u8868\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"# \u6d4b\u8bd5100G\u6570\u636e\r\n bin/create_db_table.sh ddl_100\n"})}),"\n",(0,d.jsx)(e.p,{children:'\u4ee5\u4e0b\u4e3a"lineorder_flat"\u8868\u5efa\u8868\u8bed\u53e5\u3002\u5728\u4e0a\u4e00\u6b65\u811a\u672c\u4e2d\u5df2\u7ecf\u521b\u5efa"lineorder_flat"\u8868\uff0c\u5e76\u8fdb\u884c\u4e86\u9ed8\u8ba4\u5206\u6876\u6570\u914d\u7f6e\u3002\u60a8\u53ef\u4ee5\u5220\u9664\u8be5\u8868\uff0c\u7136\u540e\u6839\u636e\u96c6\u7fa4\u89c4\u6a21\u8282\u70b9\u914d\u7f6e\u91cd\u65b0\u89c4\u5212\u5206\u6876\u6570\u518d\u8fdb\u884c\u521b\u5efa\uff0c\u53ef\u5b9e\u73b0\u66f4\u597d\u6d4b\u8bd5\u6548\u679c\u3002'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-SQL",children:'CREATE TABLE `lineorder_flat` (\r\n  `lo_orderdate` date NOT NULL COMMENT "",\r\n  `lo_orderkey` int(11) NOT NULL COMMENT "",\r\n  `lo_linenumber` tinyint(4) NOT NULL COMMENT "",\r\n  `lo_custkey` int(11) NOT NULL COMMENT "",\r\n  `lo_partkey` int(11) NOT NULL COMMENT "",\r\n  `lo_suppkey` int(11) NOT NULL COMMENT "",\r\n  `lo_orderpriority` varchar(100) NOT NULL COMMENT "",\r\n  `lo_shippriority` tinyint(4) NOT NULL COMMENT "",\r\n  `lo_quantity` tinyint(4) NOT NULL COMMENT "",\r\n  `lo_extendedprice` int(11) NOT NULL COMMENT "",\r\n  `lo_ordtotalprice` int(11) NOT NULL COMMENT "",\r\n  `lo_discount` tinyint(4) NOT NULL COMMENT "",\r\n  `lo_revenue` int(11) NOT NULL COMMENT "",\r\n  `lo_supplycost` int(11) NOT NULL COMMENT "",\r\n  `lo_tax` tinyint(4) NOT NULL COMMENT "",\r\n  `lo_commitdate` date NOT NULL COMMENT "",\r\n  `lo_shipmode` varchar(100) NOT NULL COMMENT "",\r\n  `c_name` varchar(100) NOT NULL COMMENT "",\r\n  `c_address` varchar(100) NOT NULL COMMENT "",\r\n  `c_city` varchar(100) NOT NULL COMMENT "",\r\n  `c_nation` varchar(100) NOT NULL COMMENT "",\r\n  `c_region` varchar(100) NOT NULL COMMENT "",\r\n  `c_phone` varchar(100) NOT NULL COMMENT "",\r\n  `c_mktsegment` varchar(100) NOT NULL COMMENT "",\r\n  `s_region` varchar(100) NOT NULL COMMENT "",\r\n  `s_nation` varchar(100) NOT NULL COMMENT "",\r\n  `s_city` varchar(100) NOT NULL COMMENT "",\r\n  `s_name` varchar(100) NOT NULL COMMENT "",\r\n  `s_address` varchar(100) NOT NULL COMMENT "",\r\n  `s_phone` varchar(100) NOT NULL COMMENT "",\r\n  `p_name` varchar(100) NOT NULL COMMENT "",\r\n  `p_mfgr` varchar(100) NOT NULL COMMENT "",\r\n  `p_category` varchar(100) NOT NULL COMMENT "",\r\n  `p_brand` varchar(100) NOT NULL COMMENT "",\r\n  `p_color` varchar(100) NOT NULL COMMENT "",\r\n  `p_type` varchar(100) NOT NULL COMMENT "",\r\n  `p_size` tinyint(4) NOT NULL COMMENT "",\r\n  `p_container` varchar(100) NOT NULL COMMENT ""\r\n) ENGINE=OLAP\r\nDUPLICATE KEY(`lo_orderdate`, `lo_orderkey`)\r\nCOMMENT "OLAP"\r\nPARTITION BY RANGE(`lo_orderdate`)\r\n(START ("1992-01-01") END ("1999-01-01") EVERY (INTERVAL 1 YEAR))\r\nDISTRIBUTED BY HASH(`lo_orderkey`) BUCKETS 48\r\nPROPERTIES (\r\n"replication_num" = "1",\r\n"in_memory" = "false",\r\n"storage_format" = "DEFAULT"\r\n);\n'})}),"\n",(0,d.jsx)(e.p,{children:"\u540c\u65f6\u4fee\u6539 BE \u7684 page_cache \u53c2\u6570\uff0c\u5e76\u91cd\u542f BE\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"disable_storage_page_cache=false; -- \u5f00\u542fpage_cache\r\nstorage_page_cache_limit=4294967296; --\u8bbe\u7f6epage_cache\u7684\u5927\u5c0f\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u60a8\u5e0c\u671b\u6d4b\u8bd5\u521b\u5efa bitmap_index \u60c5\u51b5\u4e0b\u7684\u6027\u80fd\uff0c\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\u3002\u5982\u60a8\u5e0c\u671b\u76f4\u63a5\u6d4b\u8bd5\u6807\u51c6\u6027\u80fd\uff0c\u8bf7\u8df3\u8fc7\u6b64\u6b65\u9aa4\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5bf9\u6240\u6709\u5b57\u7b26\u4e32\u5217\u521b\u5efa bitmap_index\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:"--\u5bf9 lo_orderpriority\u3001lo_shipmode\u3001c_name\u3001c_address\u3001c_city\u3001c_nation\u3001c_region\u3001c_phone\u3001c_mktsegment\u3001s_region\u3001s_nation\u3001s_city\u3001s_name\u3001s_address\u3001s_phone\u3001p_name\u3001p_mfgr\u3001p_category\u3001p_brand\u3001p_color\u3001p_type\u3001p_container \u521b\u5efabitmap_index\r\n\r\nCREATE INDEX bitmap_lo_orderpriority ON lineorder_flat (lo_orderpriority) USING BITMAP;\r\nCREATE INDEX bitmap_lo_shipmode ON lineorder_flat (lo_shipmode) USING BITMAP;\r\nCREATE INDEX bitmap_c_name ON lineorder_flat (c_name) USING BITMAP;\r\nCREATE INDEX bitmap_c_address ON lineorder_flat (c_address) USING BITMAP;\r\nCREATE INDEX bitmap_c_city ON lineorder_flat (c_city) USING BITMAP;\r\nCREATE INDEX bitmap_c_nation ON lineorder_flat (c_nation) USING BITMAP;\r\nCREATE INDEX bitmap_c_region ON lineorder_flat (c_region) USING BITMAP;\r\nCREATE INDEX bitmap_c_phone ON lineorder_flat (c_phone) USING BITMAP;\r\nCREATE INDEX bitmap_c_mktsegment ON lineorder_flat (c_mktsegment) USING BITMAP;\r\nCREATE INDEX bitmap_s_region ON lineorder_flat (s_region) USING BITMAP;\r\nCREATE INDEX bitmap_s_nation ON lineorder_flat (s_nation) USING BITMAP;\r\nCREATE INDEX bitmap_s_city ON lineorder_flat (s_city) USING BITMAP;\r\nCREATE INDEX bitmap_s_name ON lineorder_flat (s_name) USING BITMAP;\r\nCREATE INDEX bitmap_s_address ON lineorder_flat (s_address) USING BITMAP;\r\nCREATE INDEX bitmap_s_phone ON lineorder_flat (s_phone) USING BITMAP;\r\nCREATE INDEX bitmap_p_name ON lineorder_flat (p_name) USING BITMAP;\r\nCREATE INDEX bitmap_p_mfgr ON lineorder_flat (p_mfgr) USING BITMAP;\r\nCREATE INDEX bitmap_p_category ON lineorder_flat (p_category) USING BITMAP;\r\nCREATE INDEX bitmap_p_brand ON lineorder_flat (p_brand) USING BITMAP;\r\nCREATE INDEX bitmap_p_color ON lineorder_flat (p_color) USING BITMAP;\r\nCREATE INDEX bitmap_p_type ON lineorder_flat (p_type) USING BITMAP;\r\nCREATE INDEX bitmap_p_container ON lineorder_flat (p_container) USING BITMAP;\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u4fee\u6539BE\u53c2\u6570\u5e76\u91cd\u542fBE\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-SQL",children:"bitmap_max_filter_ratio=1000; \n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u4e09\u6570\u636e\u5bfc\u5165",children:"\uff08\u4e09\uff09\u6570\u636e\u5bfc\u5165"}),"\n",(0,d.jsx)(e.p,{children:"\u4f7f\u7528 Stream load \u5bfc\u5165\u5355\u8868\u6570\u636e\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"bin/stream_load.sh data_dir\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u63d2\u5165\u6570\u636e\u5230\u5bbd\u8868 lineorder_flat\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"bin/flat_insert.sh \n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u56db\u6570\u636e\u67e5\u8be2",children:"\uff08\u56db\uff09\u6570\u636e\u67e5\u8be2"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"SSB query"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"bin/benchmark.sh -p -d ssb\r\n\r\nbin/benchmark.sh -p -d ssb-flat\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u4f4e\u57fa\u6570query"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-Bash",children:"bin/benchmark.sh -p -d ssb-low_cardinality\n"})}),"\n"]}),"\n"]})]})}const a=function(r={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),r.components);return e?(0,d.jsx)(e,Object.assign({},r,{children:(0,d.jsx)(h,r)})):h(r)}},40685:(r,e,n)=>{n.d(e,{Z:()=>d});const d=n.p+"assets/images/7.1-1-880a2d630d9331a03f8b992476e20f7e.png"},74819:(r,e,n)=>{n.d(e,{Z:()=>d});const d=n.p+"assets/images/7.1-2-3e3e7d4e5632b8412b4ba8e6b9cd2854.png"},11151:(r,e,n)=>{n.d(e,{Zo:()=>l,ah:()=>s});var d=n(67294);const i=d.createContext({});function s(r){const e=d.useContext(i);return d.useMemo((()=>"function"==typeof r?r(e):{...e,...r}),[e,r])}const t={};function l({components:r,children:e,disableParentContext:n}){let l;return l=n?"function"==typeof r?r({}):r||t:s(r),d.createElement(i.Provider,{value:l},e)}}}]);