"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[12539],{96941:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(85893),d=n(11151);const s={displayed_sidebar:"Chinese31"},l="\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15",r={id:"table_design/Sort_key",title:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15",description:"\u5728\u5efa\u8868\u65f6\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u6784\u6210\u6392\u5e8f\u952e (Sort Key)\u3002\u8868\u4e2d\u7684\u884c\u4f1a\u6839\u636e\u6392\u5e8f\u952e\u8fdb\u884c\u6392\u5e8f\u4ee5\u540e\u518d\u843d\u5165\u78c1\u76d8\u5b58\u50a8\u3002\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6392\u5e8f\u5217\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\uff0cStarRocks \u4e0d\u9700\u8981\u626b\u63cf\u5168\u8868\u5373\u53ef\u5feb\u901f\u627e\u5230\u9700\u8981\u5904\u7406\u7684\u6570\u636e\uff0c\u964d\u4f4e\u641c\u7d22\u7684\u590d\u6742\u5ea6\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/Sort_key.md",sourceDirName:"table_design",slug:"/table_design/Sort_key",permalink:"/doc/zh/docs/3.0/table_design/Sort_key",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/Sort_key.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u6570\u636e\u538b\u7f29",permalink:"/doc/zh/docs/3.0/table_design/data_compression"},next:{title:"\u5bfc\u5165\u603b\u89c8",permalink:"/doc/zh/docs/3.0/loading/Loading_intro"}},h={},o=[{value:"\u6392\u5e8f\u539f\u7406",id:"\u6392\u5e8f\u539f\u7406",level:2},{value:"\u660e\u7ec6\u6a21\u578b",id:"\u660e\u7ec6\u6a21\u578b",level:3},{value:"\u805a\u5408\u6a21\u578b",id:"\u805a\u5408\u6a21\u578b",level:3},{value:"\u66f4\u65b0\u6a21\u578b",id:"\u66f4\u65b0\u6a21\u578b",level:3},{value:"\u4e3b\u952e\u6a21\u578b",id:"\u4e3b\u952e\u6a21\u578b",level:3},{value:"\u6392\u5e8f\u6548\u679c",id:"\u6392\u5e8f\u6548\u679c",level:2},{value:"\u9009\u62e9\u6392\u5e8f\u5217",id:"\u9009\u62e9\u6392\u5e8f\u5217",level:2}];function t(e){const c=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,d.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.h1,{id:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15",children:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15"}),"\n",(0,i.jsx)(c.p,{children:"\u5728\u5efa\u8868\u65f6\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u6784\u6210\u6392\u5e8f\u952e (Sort Key)\u3002\u8868\u4e2d\u7684\u884c\u4f1a\u6839\u636e\u6392\u5e8f\u952e\u8fdb\u884c\u6392\u5e8f\u4ee5\u540e\u518d\u843d\u5165\u78c1\u76d8\u5b58\u50a8\u3002\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6392\u5e8f\u5217\u6307\u5b9a\u8fc7\u6ee4\u6761\u4ef6\uff0cStarRocks \u4e0d\u9700\u8981\u626b\u63cf\u5168\u8868\u5373\u53ef\u5feb\u901f\u627e\u5230\u9700\u8981\u5904\u7406\u7684\u6570\u636e\uff0c\u964d\u4f4e\u641c\u7d22\u7684\u590d\u6742\u5ea6\uff0c\u4ece\u800c\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)(c.p,{children:"\u540c\u65f6\uff0c\u4e3a\u51cf\u5c11\u5185\u5b58\u5f00\u9500\uff0cStarRocks \u5728\u6392\u5e8f\u952e\u7684\u57fa\u7840\u4e0a\u53c8\u5f15\u5165\u4e86\u524d\u7f00\u7d22\u5f15 (Prefix Index)\u3002\u524d\u7f00\u7d22\u5f15\u662f\u4e00\u79cd\u7a00\u758f\u7d22\u5f15\u3002\u8868\u4e2d\u6bcf 1024 \u884c\u6570\u636e\u6784\u6210\u4e00\u4e2a\u903b\u8f91\u6570\u636e\u5757 (Data Block)\u3002\u6bcf\u4e2a\u903b\u8f91\u6570\u636e\u5757\u5728\u524d\u7f00\u7d22\u5f15\u8868\u4e2d\u5b58\u50a8\u4e00\u4e2a\u7d22\u5f15\u9879\uff0c\u7d22\u5f15\u9879\u7684\u957f\u5ea6\u4e0d\u8d85\u8fc7 36 \u5b57\u8282\uff0c\u5176\u5185\u5bb9\u4e3a\u6570\u636e\u5757\u4e2d\u7b2c\u4e00\u884c\u6570\u636e\u7684\u6392\u5e8f\u5217\u7ec4\u6210\u7684\u524d\u7f00\uff0c\u5728\u67e5\u627e\u524d\u7f00\u7d22\u5f15\u8868\u65f6\u53ef\u4ee5\u5e2e\u52a9\u786e\u5b9a\u8be5\u884c\u6570\u636e\u6240\u5728\u903b\u8f91\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3002\u524d\u7f00\u7d22\u5f15\u7684\u5927\u5c0f\u4f1a\u6bd4\u6570\u636e\u91cf\u5c11 1024 \u500d\uff0c\u56e0\u6b64\u4f1a\u5168\u91cf\u7f13\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u5728\u5b9e\u9645\u67e5\u627e\u7684\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u6709\u6548\u52a0\u901f\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)(c.h2,{id:"\u6392\u5e8f\u539f\u7406",children:"\u6392\u5e8f\u539f\u7406"}),"\n",(0,i.jsxs)(c.p,{children:["\u5728\u660e\u7ec6\u6a21\u578b\u4e2d\uff0c\u6392\u5e8f\u5217\u5c31\u662f\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"DUPLICATE KEY"})," \u5173\u952e\u5b57\u6307\u5b9a\u7684\u5217\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u5728\u805a\u5408\u6a21\u578b\u4e2d\uff0c\u6392\u5e8f\u5217\u5c31\u662f\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"AGGREGATE KEY"})," \u5173\u952e\u5b57\u6307\u5b9a\u7684\u5217\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u5728\u66f4\u65b0\u6a21\u578b\u4e2d\uff0c\u6392\u5e8f\u5217\u5c31\u662f\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"UNIQUE KEY"})," \u5173\u952e\u5b57\u6307\u5b9a\u7684\u5217\u3002"]}),"\n",(0,i.jsxs)(c.p,{children:["\u81ea 3.0 \u7248\u672c\u8d77\uff0c\u4e3b\u952e\u6a21\u578b\u89e3\u8026\u4e86\u4e3b\u952e\u5217\u548c\u6392\u5e8f\u5217\uff0c\u6392\u5e8f\u5217\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"ORDER BY"})," \u5173\u952e\u5b57\u6307\u5b9a\uff0c\u4e3b\u952e\u5217\u901a\u8fc7 ",(0,i.jsx)(c.code,{children:"PRIMARY KEY"})," \u5173\u952e\u5b57\u6307\u5b9a\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5728\u660e\u7ec6\u6a21\u578b\u3001\u805a\u5408\u6a21\u578b\u3001\u66f4\u65b0\u6a21\u578b\u4e2d\u5b9a\u4e49\u6392\u5e8f\u5217\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u6392\u5e8f\u5217\u5fc5\u987b\u4ece\u5b9a\u4e49\u7684\u7b2c\u4e00\u5217\u5f00\u59cb\u3001\u5e76\u4e14\u662f\u8fde\u7eed\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u5728\u5b9a\u4e49\u5404\u5217\u65f6\uff0c\u8ba1\u5212\u4f5c\u4e3a\u6392\u5e8f\u5217\u7684\u5217\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u666e\u901a\u5217\u4e4b\u524d\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u6392\u5e8f\u5217\u7684\u987a\u5e8f\u5fc5\u987b\u4e0e\u8868\u5b9a\u4e49\u7684\u5217\u987a\u5e8f\u4e00\u81f4\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(c.p,{children:["\u4f8b\u5982\uff0c\u5efa\u8868\u8bed\u53e5\u4e2d\u58f0\u660e\u8981\u521b\u5efa ",(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"}),"\u3001",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u56db\u5217\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6b63\u786e\u7684\u6392\u5e8f\u5217\u7ec4\u5408\u548c\u9519\u8bef\u7684\u6392\u5e8f\u5217\u7ec4\u5408\u4e3e\u4f8b\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u6b63\u786e\u7684\u6392\u5e8f\u5217"}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:[(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})]}),"\n",(0,i.jsxs)(c.li,{children:[(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"})," \u548c ",(0,i.jsx)(c.code,{children:"user_id"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u9519\u8bef\u7684\u6392\u5e8f\u5217"}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:[(0,i.jsx)(c.code,{children:"city_code"})," \u548c ",(0,i.jsx)(c.code,{children:"site_id"})]}),"\n",(0,i.jsxs)(c.li,{children:[(0,i.jsx)(c.code,{children:"city_code"})," \u548c ",(0,i.jsx)(c.code,{children:"user_id"})]}),"\n",(0,i.jsxs)(c.li,{children:[(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(c.p,{children:"\u4e0b\u9762\u901a\u8fc7\u793a\u4f8b\u6765\u8bf4\u660e\u5982\u4f55\u521b\u5efa\u4f7f\u7528\u5404\u4e2a\u6570\u636e\u6a21\u578b\u7684\u8868\uff0c\u4ee5\u4e0b\u5efa\u8868\u8bed\u53e5\u9002\u7528\u4e8e\u81f3\u5c11\u90e8\u7f72\u4e09\u4e2a BE \u8282\u70b9\u7684\u96c6\u7fa4\u73af\u5883\u4e0b\u3002"}),"\n",(0,i.jsx)(c.h3,{id:"\u660e\u7ec6\u6a21\u578b",children:"\u660e\u7ec6\u6a21\u578b"}),"\n",(0,i.jsxs)(c.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(c.code,{children:"site_access_duplicate"})," \u7684\u660e\u7ec6\u6a21\u578b\u8868\uff0c\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"}),"\u3001",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u56db\u5217\uff0c\u5176\u4e2d ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e3a\u6392\u5e8f\u5217\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-SQL",children:"CREATE TABLE site_access_duplicate\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nDUPLICATE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsxs)(c.blockquote,{children:["\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsxs)(c.p,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,i.jsx)(c.a,{href:"/doc/zh/docs/3.0/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(c.h3,{id:"\u805a\u5408\u6a21\u578b",children:"\u805a\u5408\u6a21\u578b"}),"\n",(0,i.jsxs)(c.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(c.code,{children:"site_access_aggregate"})," \u7684\u805a\u5408\u6a21\u578b\u8868\uff0c\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"}),"\u3001",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u56db\u5217\uff0c\u5176\u4e2d ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e3a\u6392\u5e8f\u5217\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-SQL",children:"CREATE TABLE site_access_aggregate\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id BITMAP BITMAP_UNION,\n    pv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsxs)(c.blockquote,{children:["\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsxs)(c.p,{children:["\u805a\u5408\u6a21\u578b\u8868\u4e2d\uff0c\u5982\u679c\u67d0\u5217\u672a\u6307\u5b9a ",(0,i.jsx)(c.code,{children:"agg_type"}),"\uff0c\u5219\u8be5\u5217\u4e3a Key \u5217\uff1b\u5982\u679c\u67d0\u5217\u6307\u5b9a\u4e86 ",(0,i.jsx)(c.code,{children:"agg_type"}),"\uff0c\u5219\u8be5\u5217\u4e3a Value \u5217\u3002\u53c2\u89c1 ",(0,i.jsx)(c.a,{href:"/doc/zh/docs/3.0/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"\u3002\u4e0a\u8ff0\u793a\u4f8b\u6307\u5b9a\u6392\u5e8f\u5217\u4e3a ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"}),"\uff0c\u56e0\u6b64\u5fc5\u987b\u7ed9 ",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u5217\u5206\u522b\u6307\u5b9a ",(0,i.jsx)(c.code,{children:"agg_type"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(c.h3,{id:"\u66f4\u65b0\u6a21\u578b",children:"\u66f4\u65b0\u6a21\u578b"}),"\n",(0,i.jsxs)(c.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(c.code,{children:"site_access_unique"})," \u7684\u66f4\u65b0\u6a21\u578b\u8868\uff0c\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"}),"\u3001",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u56db\u5217\uff0c\u5176\u4e2d ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e3a\u6392\u5e8f\u5217\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-SQL",children:"CREATE TABLE site_access_unique\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nUNIQUE KEY(site_id, city_code)\nDISTRIBUTED BY HASH(site_id);\n"})}),"\n",(0,i.jsx)(c.h3,{id:"\u4e3b\u952e\u6a21\u578b",children:"\u4e3b\u952e\u6a21\u578b"}),"\n",(0,i.jsxs)(c.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.jsx)(c.code,{children:"site_access_primary"})," \u7684\u4e3b\u952e\u6a21\u578b\u8868\uff0c\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"}),"\u3001",(0,i.jsx)(c.code,{children:"city_code"}),"\u3001",(0,i.jsx)(c.code,{children:"user_id"})," \u548c ",(0,i.jsx)(c.code,{children:"pv"})," \u56db\u5217\uff0c\u5176\u4e2d ",(0,i.jsx)(c.code,{children:"site_id"})," \u4e3a\u4e3b\u952e\u5217\uff0c",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e3a\u6392\u5e8f\u5217\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-SQL",children:"CREATE TABLE site_access_primary\n(\n    site_id INT DEFAULT '10',\n    city_code SMALLINT,\n    user_id INT,\n    pv BIGINT DEFAULT '0'\n)\nPRIMARY KEY(site_id)\nDISTRIBUTED BY HASH(site_id)\nORDER BY(site_id,city_code);\n"})}),"\n",(0,i.jsx)(c.h2,{id:"\u6392\u5e8f\u6548\u679c",children:"\u6392\u5e8f\u6548\u679c"}),"\n",(0,i.jsx)(c.p,{children:"\u4ee5\u4e0a\u8ff0\u5efa\u8868\u8bed\u53e5\u4e3a\u4f8b\uff0c\u6392\u5e8f\u6548\u679c\u53ef\u4ee5\u5206\u4e3a\u4e09\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u53ea\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e24\u5217\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u5219\u53ef\u4ee5\u5927\u5e45\u51cf\u5c11\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u9700\u8981\u626b\u63cf\u7684\u6570\u636e\u884c\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where site_id = 123 and city_code = 2;\n"})}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u53ea\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"})," \u4e00\u5217\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u53ef\u4ee5\u5b9a\u4f4d\u5230\u53ea\u5305\u542b ",(0,i.jsx)(c.code,{children:"site_id"})," \u7684\u6570\u636e\u884c\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where site_id = 123;\n"})}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u53ea\u5305\u542b ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e00\u5217\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u5219\u9700\u8981\u626b\u63cf\u6240\u6709\u6570\u636e\u884c\uff0c\u6392\u5e8f\u6548\u679c\u5927\u6253\u6298\u6263\uff1a"]}),"\n",(0,i.jsx)(c.pre,{children:(0,i.jsx)(c.code,{className:"language-Plain",children:"select sum(pv) from site_access_duplicate where city_code = 2;\n"})}),"\n",(0,i.jsxs)(c.blockquote,{children:["\n",(0,i.jsx)(c.p,{children:(0,i.jsx)(c.strong,{children:"\u8bf4\u660e"})}),"\n",(0,i.jsx)(c.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6392\u5e8f\u5217\u65e0\u6cd5\u5b9e\u73b0\u5e94\u6709\u7684\u6392\u5e8f\u6548\u679c\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(c.p,{children:["\u5728\u7b2c\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e3a\u4e86\u5b9a\u4f4d\u5230\u6570\u636e\u884c\u7684\u4f4d\u7f6e\uff0c\u9700\u8fdb\u884c\u4e8c\u5206\u67e5\u627e\uff0c\u4ee5\u627e\u5230\u6307\u5b9a\u533a\u95f4\u3002\u5982\u679c\u6570\u636e\u884c\u975e\u5e38\u591a\uff0c\u76f4\u63a5\u5bf9 ",(0,i.jsx)(c.code,{children:"site_id"})," \u548c ",(0,i.jsx)(c.code,{children:"city_code"})," \u4e24\u5217\u8fdb\u884c\u4e8c\u5206\u67e5\u627e\uff0c\u9700\u8981\u628a\u4e24\u5217\u6570\u636e\u90fd\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u8fd9\u6837\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u5185\u5b58\u7a7a\u95f4\u3002\u8fd9\u65f6\u5019\u60a8\u53ef\u4ee5\u4f7f\u7528\u524d\u7f00\u7d22\u5f15\u6765\u51cf\u5c11\u7f13\u5b58\u7684\u6570\u636e\u91cf\u3001\u5e76\u6709\u6548\u52a0\u901f\u67e5\u8be2\u3002"]}),"\n",(0,i.jsx)(c.p,{children:"\u53e6\u5916\uff0c\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5982\u679c\u6307\u5b9a\u7684\u6392\u5e8f\u5217\u975e\u5e38\u591a\uff0c\u4e5f\u4f1a\u5360\u7528\u5927\u91cf\u5185\u5b58\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0cStarRocks \u5bf9\u524d\u7f00\u7d22\u5f15\u505a\u4e86\u5982\u4e0b\u9650\u5236:"}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u524d\u7f00\u7d22\u5f15\u9879\u7684\u5185\u5bb9\u53ea\u80fd\u7531\u6570\u636e\u5757\u4e2d\u7b2c\u4e00\u884c\u7684\u6392\u5e8f\u5217\u7684\u524d\u7f00\u7ec4\u6210\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u524d\u7f00\u7d22\u5f15\u5217\u7684\u6570\u91cf\u4e0d\u80fd\u8d85\u8fc7 3\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u524d\u7f00\u7d22\u5f15\u9879\u7684\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 36 \u5b57\u8282\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u524d\u7f00\u7d22\u5f15\u4e2d\u4e0d\u80fd\u5305\u542b FLOAT \u6216 DOUBLE \u7c7b\u578b\u7684\u5217\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u524d\u7f00\u7d22\u5f15\u4e2d VARCHAR \u7c7b\u578b\u7684\u5217\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\uff0c\u5e76\u4e14\u5904\u5728\u672b\u5c3e\u4f4d\u7f6e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u5f53\u524d\u7f00\u7d22\u5f15\u7684\u672b\u5c3e\u5217\u662f CHAR \u6216 VARCHAR \u7c7b\u578b\u65f6\uff0c\u524d\u7f00\u7d22\u5f15\u9879\u7684\u957f\u5ea6\u4e0d\u4f1a\u8d85\u8fc7 36 \u5b57\u8282\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(c.h2,{id:"\u9009\u62e9\u6392\u5e8f\u5217",children:"\u9009\u62e9\u6392\u5e8f\u5217"}),"\n",(0,i.jsxs)(c.p,{children:["\u8fd9\u91cc\u4ee5 ",(0,i.jsx)(c.code,{children:"site_access_duplicate"})," \u8868\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5982\u4f55\u9009\u62e9\u6392\u5e8f\u5217\u3002"]}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u7ecf\u5e38\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u7684\u5217\uff0c\u5efa\u8bae\u9009\u4e3a\u6392\u5e8f\u5217\u3002"}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u5f53\u6392\u5e8f\u952e\u6d89\u53ca\u591a\u4e2a\u5217\u7684\u65f6\u5019\uff0c\u5efa\u8bae\u628a\u533a\u5206\u5ea6\u9ad8\u3001\u4e14\u7ecf\u5e38\u67e5\u8be2\u7684\u5217\u653e\u5728\u524d\u9762\u3002"}),"\n",(0,i.jsxs)(c.p,{children:["\u533a\u5206\u5ea6\u9ad8\u7684\u5217\u662f\u6307\u53d6\u503c\u4e2a\u6570\u8f83\u591a\u3001\u4e14\u6301\u7eed\u589e\u52a0\u7684\u5217\u3002\u4f8b\u5982\uff0c\u5728\u4e0a\u8ff0 ",(0,i.jsx)(c.code,{children:"site_access_duplicate"})," \u8868\u4e2d\uff0c\u56e0\u4e3a\u57ce\u5e02\u7684\u6570\u76ee\u662f\u56fa\u5b9a\u7684\uff0c\u6240\u4ee5 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u4e2d\u53d6\u503c\u7684\u4e2a\u6570\u662f\u56fa\u5b9a\u7684\uff0c\u800c ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u4e2d\u53d6\u503c\u7684\u4e2a\u6570\u8981\u6bd4 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u4e2d\u53d6\u503c\u7684\u4e2a\u6570\u5927\u5f97\u591a\u3001\u5e76\u4e14\u8fd8\u4f1a\u4e0d\u65ad\u5730\u589e\u52a0\uff0c\u6240\u4ee5 ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u7684\u533a\u5206\u5ea6\u5c31\u6bd4 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u8981\u9ad8\u4e0d\u5c11\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsx)(c.p,{children:"\u6392\u5e8f\u952e\u4e0d\u5e94\u8be5\u5305\u542b\u8fc7\u591a\u7684\u5217\u3002\u9009\u62e9\u5f88\u591a\u6392\u5e8f\u5217\u5e76\u4e0d\u6709\u52a9\u4e8e\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff0c\u800c\u4e14\u4f1a\u589e\u5927\u6392\u5e8f\u7684\u5f00\u9500\uff0c\u8fdb\u800c\u589e\u52a0\u6570\u636e\u5bfc\u5165\u7684\u5f00\u9500\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(c.p,{children:["\u7efc\u4e0a\u6240\u8ff0\uff0c\u5728\u4e3a ",(0,i.jsx)(c.code,{children:"site_access_duplicate"})," \u8868\u9009\u62e9\u6392\u5e8f\u5217\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e09\u70b9\uff1a"]}),"\n",(0,i.jsxs)(c.ul,{children:["\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u9700\u8981\u7ecf\u5e38\u6309 ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u52a0 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u7684\u7ec4\u5408\u8fdb\u884c\u67e5\u8be2\uff0c\u5efa\u8bae\u9009\u62e9 ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u4f5c\u4e3a\u6392\u5e8f\u952e\u7684\u7b2c\u4e00\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u5982\u679c\u9700\u8981\u7ecf\u5e38\u6309 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u8fdb\u884c\u67e5\u8be2\u3001\u5076\u5c14\u6309 ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u52a0 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u7684\u7ec4\u5408\u8fdb\u884c\u67e5\u8be2\uff0c\u5efa\u8bae\u9009\u62e9 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u4f5c\u4e3a\u6392\u5e8f\u952e\u7684\u7b2c\u4e00\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(c.li,{children:["\n",(0,i.jsxs)(c.p,{children:["\u6781\u7aef\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6309 ",(0,i.jsx)(c.code,{children:"site_id"})," \u5217\u52a0 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u7ec4\u5408\u67e5\u8be2\u6240\u5360\u7684\u6bd4\u4f8b\u4e0e\u6309 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u5355\u72ec\u67e5\u8be2\u6240\u5360\u7684\u6bd4\u4f8b\u4e0d\u76f8\u4e0a\u4e0b\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u4ee5 ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u4e3a\u7b2c\u4e00\u5217\u7684 Rollup \u8868\u3002Rollup \u8868\u4f1a\u4e3a ",(0,i.jsx)(c.code,{children:"city_code"})," \u5217\u518d\u5efa\u4e00\u4e2a\u6392\u5e8f\u7d22\u5f15 (Sort Index)\u3002"]}),"\n"]}),"\n"]})]})}const x=function(e={}){const{wrapper:c}=Object.assign({},(0,d.ah)(),e.components);return c?(0,i.jsx)(c,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},11151:(e,c,n)=>{n.d(c,{Zo:()=>r,ah:()=>s});var i=n(67294);const d=i.createContext({});function s(e){const c=i.useContext(d);return i.useMemo((()=>"function"==typeof e?e(c):{...c,...e}),[c,e])}const l={};function r({components:e,children:c,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:s(e),i.createElement(d.Provider,{value:r},c)}}}]);