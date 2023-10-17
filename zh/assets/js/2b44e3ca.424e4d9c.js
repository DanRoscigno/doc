"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38202],{19057:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const o={displayed_sidebar:"Chinese"},r="Bloom filter \u7d22\u5f15",c={id:"using_starrocks/Bloomfilter_index",title:"Bloom filter \u7d22\u5f15",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Bloom filter\uff08\u5e03\u9686\u8fc7\u6ee4\u5668\uff09\u7d22\u5f15\u7684\u539f\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u548c\u4fee\u6539 Bloom filter \u7d22\u5f15\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/using_starrocks/Bloomfilter_index.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Bloomfilter_index",permalink:"/doc/zh/docs/using_starrocks/Bloomfilter_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/using_starrocks/Bloomfilter_index.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Bitmap \u7d22\u5f15",permalink:"/doc/zh/docs/using_starrocks/Bitmap_index"},next:{title:"\u6570\u636e\u53bb\u91cd",permalink:"/doc/zh/docs/category/\u6570\u636e\u53bb\u91cd"}},t={},d=[{value:"\u7d22\u5f15\u539f\u7406",id:"\u7d22\u5f15\u539f\u7406",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u521b\u5efa\u7d22\u5f15",id:"\u521b\u5efa\u7d22\u5f15",level:2},{value:"\u67e5\u770b\u7d22\u5f15",id:"\u67e5\u770b\u7d22\u5f15",level:2},{value:"\u4fee\u6539\u7d22\u5f15",id:"\u4fee\u6539\u7d22\u5f15",level:2}];function a(e){const l=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"bloom-filter-\u7d22\u5f15",children:"Bloom filter \u7d22\u5f15"}),"\n",(0,s.jsx)(l.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86 Bloom filter\uff08\u5e03\u9686\u8fc7\u6ee4\u5668\uff09\u7d22\u5f15\u7684\u539f\u7406\uff0c\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u548c\u4fee\u6539 Bloom filter \u7d22\u5f15\u3002"}),"\n",(0,s.jsxs)(l.p,{children:["Bloom filter \u7d22\u5f15\u53ef\u4ee5\u5feb\u901f\u5224\u65ad\u8868\u7684\u6570\u636e\u6587\u4ef6\u4e2d\u662f\u5426\u53ef\u80fd\u5305\u542b\u8981\u67e5\u8be2\u7684\u6570\u636e\uff0c\u5982\u679c\u4e0d\u5305\u542b\u5c31\u8df3\u8fc7\uff0c\u4ece\u800c\u51cf\u5c11\u626b\u63cf\u7684\u6570\u636e\u91cf\u3002Bloom filter \u7d22\u5f15\u7a7a\u95f4\u6548\u7387\u9ad8\uff0c\u9002\u7528\u4e8e\u57fa\u6570\u8f83\u9ad8\u7684\u5217\uff0c\u5982 ID \u5217\u3002\u5982\u679c\u4e00\u4e2a\u67e5\u8be2\u6761\u4ef6\u547d\u4e2d\u524d\u7f00\u7d22\u5f15\u5217\uff0cStarRocks \u4f1a\u4f7f\u7528",(0,s.jsx)(l.a,{href:"/doc/zh/docs/table_design/Sort_key",children:"\u524d\u7f00\u7d22\u5f15"}),"\u5feb\u901f\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\u3002\u4f46\u662f\u524d\u7f00\u7d22\u5f15\u7684\u957f\u5ea6\u6709\u9650\uff0c\u5982\u679c\u60f3\u8981\u5feb\u901f\u67e5\u8be2\u4e00\u4e2a\u975e\u524d\u7f00\u7d22\u5f15\u5217\u4e14\u8be5\u5217\u57fa\u6570\u8f83\u9ad8\uff0c\u5373\u53ef\u4e3a\u8fd9\u4e2a\u5217\u521b\u5efa Bloom filter \u7d22\u5f15\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u7d22\u5f15\u539f\u7406",children:"\u7d22\u5f15\u539f\u7406"}),"\n",(0,s.jsxs)(l.p,{children:["\u4f8b\u5982\uff0c\u5728\u8868 ",(0,s.jsx)(l.code,{children:"table1"})," \u7684 ",(0,s.jsx)(l.code,{children:"column1"})," \u5217\u4e0a\u521b\u5efa Bloom filter \u7d22\u5f15\uff0c\u7136\u540e\u6267\u884c\u4e00\u4e2a SQL \u67e5\u8be2 ",(0,s.jsx)(l.code,{children:"Select xxx from table1 where column1 = something;"})," \u547d\u4e2d\u7d22\u5f15\uff0c\u90a3\u4e48\u5728\u626b\u63cf\u8868\u7684\u6570\u636e\u6587\u4ef6\u65f6\u4f1a\u51fa\u73b0\u4e24\u79cd\u60c5\u51b5\uff1a"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5982\u679c Bloom filter \u7d22\u5f15\u5224\u65ad\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\u4e2d\u4e0d\u5b58\u5728\u76ee\u6807\u6570\u636e\uff0c\u90a3 StarRocks \u4f1a\u8df3\u8fc7\u8be5\u6587\u4ef6\uff0c\u4ece\u800c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u5982\u679c Bloom filter \u7d22\u5f15\u5224\u65ad\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\u4e2d\u53ef\u80fd\u5b58\u5728\u76ee\u6807\u6570\u636e\uff0c\u90a3 StarRocks \u4f1a\u8bfb\u53d6\u8be5\u6587\u4ef6\u786e\u8ba4\u76ee\u6807\u6570\u636e\u662f\u5426\u5b58\u5728\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u4ec5\u4ec5\u662f\u5224\u65ad\u8be5\u6587\u4ef6\u4e2d\u53ef\u80fd\u5305\u542b\u76ee\u6807\u6570\u636e\u3002Bloom filter \u7d22\u5f15\u6709\u4e00\u5b9a\u7684\u8bef\u5224\u7387\uff0c\u4e5f\u79f0\u4e3a\u5047\u9633\u6027\u6982\u7387 (False Positive Probability)\uff0c\u5373\u5224\u65ad\u67d0\u884c\u4e2d\u5305\u542b\u76ee\u6807\u6570\u636e\uff0c\u800c\u5b9e\u9645\u4e0a\u8be5\u884c\u5e76\u4e0d\u5305\u542b\u76ee\u6807\u6570\u636e\u7684\u6982\u7387\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u4e3b\u952e\u6a21\u578b\u548c\u660e\u7ec6\u6a21\u578b\u4e2d\u6240\u6709\u5217\u90fd\u53ef\u4ee5\u521b\u5efa Bloom filter \u7d22\u5f15\uff1b\u805a\u5408\u6a21\u578b\u548c\u66f4\u65b0\u6a21\u578b\u4e2d\uff0c\u53ea\u6709\u7ef4\u5ea6\u5217\uff08\u5373 Key \u5217\uff09\u652f\u6301\u521b\u5efa Bloom filter \u7d22\u5f15\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u4e0d\u652f\u6301\u4e3a TINYINT\u3001FLOAT\u3001DOUBLE \u548c DECIMAL \u7c7b\u578b\u7684\u5217\u521b\u5efa Bloom filter \u7d22\u5f15\u3002"}),"\n",(0,s.jsxs)(l.li,{children:["Bloom filter \u7d22\u5f15\u53ea\u80fd\u63d0\u9ad8\u5305\u542b ",(0,s.jsx)(l.code,{children:"in"})," \u548c ",(0,s.jsx)(l.code,{children:"="})," \u8fc7\u6ee4\u6761\u4ef6\u7684\u67e5\u8be2\u6548\u7387\uff0c\u4f8b\u5982 ",(0,s.jsx)(l.code,{children:"Select xxx from table where xxx in ()"})," \u548c ",(0,s.jsx)(l.code,{children:"Select xxx from table where column = xxx"}),"\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u5982\u8981\u4e86\u89e3\u4e00\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86 Bloom filter \u7d22\u5f15\uff0c\u53ef\u67e5\u770b\u8be5\u67e5\u8be2\u7684 Profile \u4e2d\u7684 ",(0,s.jsx)(l.code,{children:"BloomFilterFilterRows"})," \u5b57\u6bb5\u3002\u5173\u4e8e\u5982\u4f55\u67e5\u770b Profile\uff0c\u53c2\u89c1",(0,s.jsx)(l.a,{href:"/doc/zh/docs/administration/Query_planning#%E6%9F%A5%E7%9C%8B%E5%88%86%E6%9E%90-profile",children:"\u5206\u6790\u67e5\u8be2"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u521b\u5efa\u7d22\u5f15",children:"\u521b\u5efa\u7d22\u5f15"}),"\n",(0,s.jsxs)(l.p,{children:["\u5efa\u8868\u65f6\uff0c\u901a\u8fc7\u5728 ",(0,s.jsx)(l.code,{children:"PROPERTIES"})," \u4e2d\u6307\u5b9a ",(0,s.jsx)(l.code,{children:"bloom_filter_columns"})," \u6765\u521b\u5efa\u7d22\u5f15\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u8bed\u53e5\u4e3a\u8868 ",(0,s.jsx)(l.code,{children:"table1"})," \u7684 ",(0,s.jsx)(l.code,{children:"k1"})," \u548c ",(0,s.jsx)(l.code,{children:"k2"})," \u5217\u521b\u5efa Bloom filter \u7d22\u5f15\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-SQL",children:'CREATE TABLE table1\n(\n    k1 BIGINT,\n    k2 LARGEINT,\n    v1 VARCHAR(2048) REPLACE,\n    v2 SMALLINT DEFAULT "10"\n)\nENGINE = olap\nPRIMARY KEY(k1, k2)\nDISTRIBUTED BY HASH (k1, k2)\nPROPERTIES("bloom_filter_columns" = "k1,k2");\n'})}),"\n",(0,s.jsxs)(l.p,{children:["\u60a8\u53ef\u4ee5\u540c\u65f6\u521b\u5efa\u591a\u4e2a\u7d22\u5f15\uff0c\u591a\u4e2a\u7d22\u5f15\u5217\u4e4b\u95f4\u9700\u7528\u9017\u53f7 (",(0,s.jsx)(l.code,{children:","}),") \u9694\u5f00\u3002\u5173\u4e8e\u5efa\u8868\u7684\u5176\u4ed6\u53c2\u6570\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(l.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u67e5\u770b\u7d22\u5f15",children:"\u67e5\u770b\u7d22\u5f15"}),"\n",(0,s.jsxs)(l.p,{children:["\u4f8b\u5982\uff0c\u67e5\u770b\u8868 ",(0,s.jsx)(l.code,{children:"table1"})," \u7684\u7d22\u5f15\u3002\u6709\u5173\u8fd4\u56de\u503c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,s.jsx)(l.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"}),"\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-SQL",children:"SHOW CREATE TABLE table1;\n"})}),"\n",(0,s.jsx)(l.h2,{id:"\u4fee\u6539\u7d22\u5f15",children:"\u4fee\u6539\u7d22\u5f15"}),"\n",(0,s.jsxs)(l.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(l.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/ALTER_TABLE",children:"ALTER TABLE"})," \u8bed\u53e5\u6765\u589e\u52a0\uff0c\u51cf\u5c11\u548c\u5220\u9664\u7d22\u5f15\u3002"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["\u5982\u4e0b\u8bed\u53e5\u589e\u52a0\u4e86\u4e00\u4e2a Bloom filter \u7d22\u5f15\u5217 ",(0,s.jsx)(l.code,{children:"v1"}),"\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "k1,k2,v1");\n'})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["\u5982\u4e0b\u8bed\u53e5\u51cf\u5c11\u4e86\u4e00\u4e2a Bloom filter \u7d22\u5f15\u5217 ",(0,s.jsx)(l.code,{children:"k2"}),"\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "k1");\n'})}),"\n"]}),"\n",(0,s.jsxs)(l.li,{children:["\n",(0,s.jsxs)(l.p,{children:["\u5982\u4e0b\u8bed\u53e5\u5220\u9664\u4e86 ",(0,s.jsx)(l.code,{children:"table1"})," \u7684\u6240\u6709 Bloom filter \u7d22\u5f15\u3002"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-SQL",children:'ALTER TABLE table1 SET ("bloom_filter_columns" = "");\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(l.blockquote,{children:["\n",(0,s.jsxs)(l.p,{children:["\u8bf4\u660e\uff1a\u4fee\u6539\u7d22\u5f15\u4e3a\u5f02\u6b65\u64cd\u4f5c\uff0c\u53ef\u901a\u8fc7 ",(0,s.jsx)(l.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_ALTER",children:"SHOW ALTER TABLE"})," \u547d\u4ee4\u67e5\u770b\u7d22\u5f15\u4fee\u6539\u8fdb\u5ea6\u3002\u5f53\u524d\u6bcf\u5f20\u8868\u53ea\u5141\u8bb8\u540c\u65f6\u8fdb\u884c\u4e00\u4e2a\u4fee\u6539\u7d22\u5f15\u4efb\u52a1\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:l}=Object.assign({},(0,i.ah)(),e.components);return l?(0,s.jsx)(l,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,l,n)=>{n.d(l,{Zo:()=>c,ah:()=>o});var s=n(67294);const i=s.createContext({});function o(e){const l=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(l):{...l,...e}),[l,e])}const r={};function c({components:e,children:l,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:c},l)}}}]);