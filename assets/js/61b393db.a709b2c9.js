"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87526],{44868:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(85893),a=i(11151);const s={displayed_sidebar:"documentation"},r="Use Bitmap for exact Count Distinct",o={id:"using_starrocks/Using_bitmap",title:"Use Bitmap for exact Count Distinct",description:"This topic describes how to use bitmaps to compute the number of distinct values in StarRocks.",source:"@site/versioned_docs/version-2.5/using_starrocks/Using_bitmap.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_bitmap",permalink:"/doc/docs/2.5/using_starrocks/Using_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/using_starrocks/Using_bitmap.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Computing the number of distinct values",permalink:"/doc/docs/2.5/category/computing-the-number-of-distinct-values"},next:{title:"Use HLL for approximate count distinct",permalink:"/doc/docs/2.5/using_starrocks/Using_HLL"}},c={},l=[{value:"Traditional Count Distinct",id:"traditional-count-distinct",level:2},{value:"Benefits of Count Distinct with Bitmap",id:"benefits-of-count-distinct-with-bitmap",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"Count Distinct with Bitmap",id:"count-distinct-with-bitmap",level:2},{value:"Global Dictionary",id:"global-dictionary",level:2},{value:"Hive table-based Global Dictionary",id:"hive-table-based-global-dictionary",level:3},{value:"Build a global dictionary based on a trie tree",id:"build-a-global-dictionary-based-on-a-trie-tree",level:3}];function d(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",img:"img",ul:"ul",li:"li",pre:"pre",a:"a",ol:"ol",h3:"h3"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-bitmap-for-exact-count-distinct",children:"Use Bitmap for exact Count Distinct"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to use bitmaps to compute the number of distinct values in StarRocks."}),"\n",(0,n.jsx)(t.p,{children:"Bitmaps are a useful tool for computing the number of distinct values in an array. This method takes up less storage space and can accelerate computation when compared to traditional Count Distinct. Assume there is an array named A with a value range of [0, n). By using a bitmap of (n+7)/8 bytes, you can compute the number of distinct elements in the array. To do this, initialize all bits to 0, set the values of the elements as the subscripts of bits, and then set all bits to 1. The number of 1s in the bitmap is the number of distinct elements in the array."}),"\n",(0,n.jsx)(t.h2,{id:"traditional-count-distinct",children:"Traditional Count Distinct"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks uses the MPP architecture, which can retain the detailed data when using Count Distinct. However, the Count Distinct feature requires multiple data shuffles during query processing, which consumes more resources and results in a linear decrease in performance as the data volume increases."}),"\n",(0,n.jsx)(t.p,{children:"The following scenario calculates UVs based on detailed data in table (dt, page, user_id)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{align:"center",children:"dt"}),(0,n.jsx)(t.th,{align:"center",children:"page"}),(0,n.jsx)(t.th,{align:"center",children:"user_id"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"game"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"shopping"}),(0,n.jsx)(t.td,{align:"center",children:"102"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"game"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"shopping"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"game"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"shopping"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["StarRocks computes data according to the following figure. It first groups data by the ",(0,n.jsx)(t.code,{children:"page"})," and ",(0,n.jsx)(t.code,{children:"user_id"})," columns, and then counts the processed result."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alter",src:i(53781).Z+"",width:"2052",height:"1068"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Note: The figure shows a schematic of 6 rows of data computed on two BE nodes."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When dealing with large volumes of data that require multiple shuffle operations, the computational resources needed can increase significantly. This slows queries. However, using the Bitmap technology can help address this issue and improve the query performance in such scenarios."}),"\n",(0,n.jsxs)(t.p,{children:["Count ",(0,n.jsx)(t.code,{children:"uv"})," grouping by ",(0,n.jsx)(t.code,{children:"page"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"select page, count(distinct user_id) as uv from table group by page;\n\n|  page   |   uv  |\n| :---: | :---: |\n|   game  |  1   |\n|   shopping  |   2  |\n"})}),"\n",(0,n.jsx)(t.h2,{id:"benefits-of-count-distinct-with-bitmap",children:"Benefits of Count Distinct with Bitmap"}),"\n",(0,n.jsx)(t.p,{children:"You can benefit from bitmaps in the following aspects compared with COUNT(DISTINCT expr):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Less storage space: If you use bitmap to compute the number of distinct values for INT32 data, the required storage space is only 1/32 of COUNT(DISTINCT expr). StarRocks utilizes compressed roaring bitmaps to execute computations, further reducing storage space usage compared to traditional bitmaps."}),"\n",(0,n.jsx)(t.li,{children:"Faster computation: Bitmaps use bitwise operations, resulting in faster computation compared to COUNT(DISTINCT expr). In StarRocks, the computation of the number of distinct values can be processed in parallel, leading to further improvements in query performance."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For the implementation of Roaring Bitmap, see ",(0,n.jsx)(t.a,{href:"https://github.com/RoaringBitmap/RoaringBitmap",children:"specific paper and implementation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Both bitmap indexing and bitmap Count Distinct use the bitmap technique. However, the purpose for introducing them and the problem they solve are completely different. The former is used to filter enumerated columns with a low cardinality, while the latter is used to calculate the number of distinct elements in the value columns of a data row."}),"\n",(0,n.jsxs)(t.li,{children:["StarRocks 2.3 and later versions support defining a value column as BITMAP regardless of the table types (Aggregate table, Duplicate Key table, Primary Key table, or Unique Key table). However, the ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/table_design/Sort_key",children:"sort key"})," of a table cannot be of the BITMAP type."]}),"\n",(0,n.jsxs)(t.li,{children:["When creating a table, you can define the value column as BITMAP and the aggregate function as ",(0,n.jsx)(t.a,{href:"/doc/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union",children:"BITMAP_UNION"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["You can only use roaring bitmaps to compute the number of distinct values for data of the following types: TINYINT, SMALLINT, INT, and BIGINT. For data of other types, you need to ",(0,n.jsx)(t.a,{href:"#global-dictionary",children:"build global dictionaries"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"count-distinct-with-bitmap",children:"Count Distinct with Bitmap"}),"\n",(0,n.jsx)(t.p,{children:"Take the calculation of page UVs as an example."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create an Aggregate table with a BITMAP column ",(0,n.jsx)(t.code,{children:"visit_users"}),", which uses the aggregate function BITMAP_UNION."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE `page_uv` (\n  `page_id` INT NOT NULL COMMENT \'page ID\',\n  `visit_date` datetime NOT NULL COMMENT \'access time\',\n  `visit_users` BITMAP BITMAP_UNION NOT NULL COMMENT \'user ID\'\n) ENGINE=OLAP\nAGGREGATE KEY(`page_id`, `visit_date`)\nDISTRIBUTED BY HASH(`page_id`) BUCKETS 1\nPROPERTIES (\n  "replication_num" = "3",\n  "storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Load data into this table."}),"\n",(0,n.jsx)(t.p,{children:"Use INSET INTO to load data:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO page_uv VALUES\n(1, '2020-06-23 01:30:30', to_bitmap(13)),\n(1, '2020-06-23 01:30:30', to_bitmap(23)),\n(1, '2020-06-23 01:30:30', to_bitmap(33)),\n(1, '2020-06-23 02:30:30', to_bitmap(13)),\n(2, '2020-06-23 01:30:30', to_bitmap(23));\n"})}),"\n",(0,n.jsx)(t.p,{children:"After data is loaded:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In the row ",(0,n.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_users"})," field contains three bitmap elements (13, 23, 33)."]}),"\n",(0,n.jsxs)(t.li,{children:["In the row ",(0,n.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 02:30:30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_users"})," field contains one bitmap element (13)."]}),"\n",(0,n.jsxs)(t.li,{children:["In the row ",(0,n.jsx)(t.code,{children:"page_id = 2, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_users"})," field contains one bitmap element (23)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Load data from a local file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'echo -e \'1,2020-06-23 01:30:30,130\\n1,2020-06-23 01:30:30,230\\n1,2020-06-23 01:30:30,120\\n1,2020-06-23 02:30:30,133\\n2,2020-06-23 01:30:30,234\' > tmp.csv | \ncurl --location-trusted -u <username>:<password> -H "label:label_1600960288798" \\\n    -H "column_separator:," \\\n    -H "columns:page_id,visit_date,visit_users, visit_users=to_bitmap(visit_users)" -T tmp.csv \\\n    http://StarRocks_be0:8040/api/db0/page_uv/_stream_load\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Calculate page UVs."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT page_id, count(distinct visit_users) FROM page_uv GROUP BY page_id;\n+-----------+------------------------------+\n|  page_id  | count(DISTINCT `visit_users`)|\n+-----------+------------------------------+\n|         1 |                            3 |\n|         2 |                            1 |\n+-----------+------------------------------+\n2 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"global-dictionary",children:"Global Dictionary"}),"\n",(0,n.jsx)(t.p,{children:"Currently, Bitmap-based Count Distinct mechanism requires the input to be integer. If the user needs to use other data types as input to the Bitmap, then the user needs to build their own global dictionary to map other types of data (such as string types) to integer types. There are several ideas for building a global dictionary."}),"\n",(0,n.jsx)(t.h3,{id:"hive-table-based-global-dictionary",children:"Hive table-based Global Dictionary"}),"\n",(0,n.jsx)(t.p,{children:"The global dictionary itself in this scheme is a Hive table, which has two columns, one for raw values and one for encoded Int values. The steps to generate the global dictionary are as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"De-duplicate the dictionary columns of the fact table to generate a temporary table"}),"\n",(0,n.jsxs)(t.li,{children:["Left join the temporary table and the global dictionary, add ",(0,n.jsx)(t.code,{children:"new value"})," to the temporary table."]}),"\n",(0,n.jsxs)(t.li,{children:["Encode the ",(0,n.jsx)(t.code,{children:"new value"})," and insert it into the global dictionary."]}),"\n",(0,n.jsx)(t.li,{children:"Left join the fact table and the updated global dictionary, replace the dictionary items with IDs."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this way, the global dictionary can be updated and the value columns in the fact table can be replaced using Spark or MR. Compared with the trie tree-based global dictionary, this approach can be distributed and the global dictionary can be reused."}),"\n",(0,n.jsx)(t.p,{children:"However, there are a few things to note: the original fact table is read multiple times, and there are two joins that consume a lot of extra resources during the calculation of the global dictionary."}),"\n",(0,n.jsx)(t.h3,{id:"build-a-global-dictionary-based-on-a-trie-tree",children:"Build a global dictionary based on a trie tree"}),"\n",(0,n.jsx)(t.p,{children:"Users can also build their own global dictionaries using trie trees (aka prefix trees or dictionary trees). The trie tree has common prefixes for the descendants of nodes, which can be used to reduce query time and minimize string comparisons, and therefore is well suited for implementing dictionary encoding. However, the implementation of trie tree is not easy to distribute and can create performance bottlenecks when the data volume is relatively large."}),"\n",(0,n.jsx)(t.p,{children:"By building a global dictionary and converting other types of data to integer data, you can use Bitmap to perform accurate Count Distinct analysis of non-integer data columns."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},53781:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/6.1.2-2-6a82bd242b24c4e2c7a406aa3c1cfa89.png"},11151:(e,t,i)=>{i.d(t,{Zo:()=>o,ah:()=>s});var n=i(67294);const a=n.createContext({});function s(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||r:s(e),n.createElement(a.Provider,{value:o},t)}}}]);