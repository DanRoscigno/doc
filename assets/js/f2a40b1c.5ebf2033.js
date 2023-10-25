"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40277],{41605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(85893),a=n(11151);const s={displayed_sidebar:"English"},r="Use Bitmap for exact count distinct",o={id:"using_starrocks/Using_bitmap",title:"Use Bitmap for exact count distinct",description:"Background",source:"@site/versioned_docs/version-2.3/using_starrocks/Using_bitmap.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_bitmap",permalink:"/docs/2.3/using_starrocks/Using_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Using_bitmap.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Use HLL for approximate count distinct",permalink:"/docs/2.3/using_starrocks/Using_HLL"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Traditional Count Distinct Calculation",id:"traditional-count-distinct-calculation",level:2},{value:"Count Distinct with Bitmap",id:"count-distinct-with-bitmap",level:2},{value:"Advantages of bitmap Count Distinct",id:"advantages-of-bitmap-count-distinct",level:2},{value:"How to Use Bitmap",id:"how-to-use-bitmap",level:2},{value:"Examples",id:"examples",level:3},{value:"Bitmap Global Dictionary",id:"bitmap-global-dictionary",level:2},{value:"Hive Table-based Global Dictionary",id:"hive-table-based-global-dictionary",level:3},{value:"Build a global dictionary based on a trie tree",id:"build-a-global-dictionary-based-on-a-trie-tree",level:3}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",img:"img",ol:"ol",a:"a",h3:"h3"},(0,a.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"use-bitmap-for-exact-count-distinct",children:"Use Bitmap for exact count distinct"}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(t.p,{children:"There are usually two ways to conduct accurate Count Distinct in StarRocks."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Detail-based Count Distinct: This is a traditional count distinct approach that is able to retain detailed data for flexible analysis. However, it consumes huge computational and storage resources and is not friendly enough to support scenarios involving large-scale datasets and query latency-sensitive Count Distinct."}),"\n",(0,i.jsx)(t.li,{children:"Precomputation-based Count Distinct: This approach is also recommended by StarRocks. In some scenarios, users only want to get the results after Count Distinct and care less about detailed data. Such a scenario can be analyzed by precomputation, which is essentially using space for time and resonates with the core idea of the multidimensional OLAP (MOLAP) aggregation model. It is to calculate data in the process of data loading, reducing the storage cost and the cost of on-site calculation during query. You can further reduce the size of datasets for on-site computation by shrinking RollUp dimension."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"traditional-count-distinct-calculation",children:"Traditional Count Distinct Calculation"}),"\n",(0,i.jsx)(t.p,{children:"StarRocks is implemented based on the MPP architecture that supports retaining detailed data when using count distinct calculation for accurate Count Distinct. However, because of the need for multiple data shuffles (transferring data across nodes and calculating de-weighting) during query, it leads to a linear decrease in performance as the data volume increases."}),"\n",(0,i.jsx)(t.p,{children:"In the following scenario, there are tables (dt, page, user_id) that need to calculate UV by detailed data."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{align:"center",children:"dt"}),(0,i.jsx)(t.th,{align:"center",children:"page"}),(0,i.jsx)(t.th,{align:"center",children:"user_id"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"game"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"shopping"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"game"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"shopping"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"game"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"20191206"}),(0,i.jsx)(t.td,{align:"center",children:"shopping"}),(0,i.jsx)(t.td,{align:"center",children:"101"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Count ",(0,i.jsx)(t.code,{children:"uv"})," grouping by ",(0,i.jsx)(t.code,{children:"page"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{align:"center",children:"page"}),(0,i.jsx)(t.th,{align:"center",children:"uv"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"game"}),(0,i.jsx)(t.td,{align:"center",children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"center",children:"shopping"}),(0,i.jsx)(t.td,{align:"center",children:"2"})]})]})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:" select page, count(distinct user_id) as uv from table group by page;\n"})}),"\n",(0,i.jsx)(t.p,{children:"For the SQL of PV calculation, StarRocks will do the calculation according to the following figure. First, group by the page column and user_id column, and then count."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alter",src:n(76526).Z+"",width:"1798",height:"862"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note: The figure shows a schematic of 6 rows of data computed on 2 BE nodes"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Given that the data needs to be shuffled several times, it will require more computational resources and the query will be slower when the data volume gets larger. The Bitmap technology is used to  solve the performance problem of traditional count distinct calculation in such scenarios."}),"\n",(0,i.jsx)(t.h2,{id:"count-distinct-with-bitmap",children:"Count Distinct with Bitmap"}),"\n",(0,i.jsxs)(t.p,{children:["Assume there is array A with values in the range [0, n). A bitmap of byte length ",(0,i.jsx)(t.code,{children:"floor((n+7)/8)"})," can be used to de-duplicate the array."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Initialize the bitmap to all zeros."}),"\n",(0,i.jsx)(t.li,{children:"Process elements in the array one by one and use the value of the elements as the subscript of the bitmap. Set the bit of the subscript to 1."}),"\n",(0,i.jsx)(t.li,{children:"Count the number of 1s in the bitmap. The number of 1s is the result of count distinct of array A."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advantages-of-bitmap-count-distinct",children:"Advantages of bitmap Count Distinct"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Space advantage: Using one bit of a bitmap to indicate the existence of the corresponding subscript has a great space advantage. For example, for int32 Count Distinct, the storage space required by a normal bitmap is only 1/32 of the traditional Count Distinct. The implementation of Roaring Bitmap in StarRocks further significantly reduces storage usage through optimizing sparse bitmaps."}),"\n",(0,i.jsx)(t.li,{children:"Time advantage: Bitmap Count Distinct involves computation such as bit placement for a given subscript and counting the number of placed bitmaps, which are O(1) and O(n) operations respectively. The latter can be computed efficiently using clz, ctz and other instructions. In addition, bitmap Count Distinct can be accelerated in parallel in the MPP execution engine, where each computing node computes a local sub-bitmap and uses the bit_or function to merge all sub-bitmaps into a final bitmap. bit_or is more efficient than sort-based or hash-based Count Distinct in that it has no condition or data dependencies and supports vectorized execution."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For details of the implementation of Roaring Bitmap, see ",(0,i.jsx)(t.a,{href:"https://github.com/RoaringBitmap/RoaringBitmap",children:"specific paper and implementation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use-bitmap",children:"How to Use Bitmap"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Both bitmap indexing and bitmap Count Distinct use the bitmap technique. However, the purpose for introducing them and the problem they solve are completely different. The former is used to filter enumerated columns with a low cardinality, while the latter is used to calculate the number of distinct elements in the value columns of a data row."}),"\n",(0,i.jsx)(t.li,{children:"Currently, bitmap columns can only exist in Aggregate tables, not in Duplicate Key or Unique Key tables."}),"\n",(0,i.jsxs)(t.li,{children:["When creating a table, specify the data type of the value column as BITMAP and the aggregate function as ",(0,i.jsx)(t.code,{children:"BITMAP_UNION"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"When using count distinct on a Bitmap column, StarRocks automatically converts count distinct to BITMAP_UNION_COUNT."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Take the calculation of page UVs as an example."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a table with a BITMAP column ",(0,i.jsx)(t.code,{children:"visit_users"}),", which uses the aggregate function ",(0,i.jsx)(t.code,{children:"BITMAP_UNION"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE `page_uv` (\n  `page_id` INT NOT NULL COMMENT \'page ID\',\n  `visit_date` datetime NOT NULL COMMENT \'access time\',\n  `visit_users` BITMAP BITMAP_UNION NOT NULL COMMENT \'user ID\'\n) ENGINE=OLAP\nAGGREGATE KEY(`page_id`, `visit_date`)\nDISTRIBUTED BY HASH(`page_id`) BUCKETS 1\nPROPERTIES (\n  "replication_num" = "1",\n  "storage_format" = "DEFAULT"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Load data into this table."}),"\n",(0,i.jsx)(t.p,{children:"Use INSET INTO to load data:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"insert into page_uv values\n(1, '2020-06-23 01:30:30', to_bitmap(13)),\n(1, '2020-06-23 01:30:30', to_bitmap(23)),\n(1, '2020-06-23 01:30:30', to_bitmap(33)),\n(1, '2020-06-23 02:30:30', to_bitmap(13)),\n(2, '2020-06-23 01:30:30', to_bitmap(23));\n"})}),"\n",(0,i.jsx)(t.p,{children:"After data loading:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In the row ",(0,i.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,i.jsx)(t.code,{children:"visit_user"})," field contains three bitmap elements (13, 23, 33)."]}),"\n",(0,i.jsxs)(t.li,{children:["In the row ",(0,i.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 02:30 :30'"}),", the ",(0,i.jsx)(t.code,{children:"visit_user"})," field contains one bitmap element (13)."]}),"\n",(0,i.jsxs)(t.li,{children:["In the row ",(0,i.jsx)(t.code,{children:"page_id = 2, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,i.jsx)(t.code,{children:"visit_user"})," field contains one bitmap element (23)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Load data from a local file:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'echo -e \'1,2020-06-23 01:30:30,130\\n1,2020-06-23 01:30:30,230\\n1,2020-06-23 01:30:30,120\\n1,2020-06-23 02:30:30,133\\n2,2020-06-23 01:30:30,234\' > tmp.csv | \ncurl --location-trusted -u <username>:<password> -H "label:label_1600960288798" \\\n    -H "column_separator:," \\\n    -H "columns:page_id,visit_date,visit_users, visit_users=to_bitmap(visit_users)" -T tmp.csv \\\n    http://StarRocks_be0:8040/api/db0/page_uv/_stream_load\n1,2020-06-23 01:30:30,130\n1,2020-06-23 01:30:30,230\n1,2020-06-23 01:30:30,120\n1,2020-06-23 02:30:30,133\n2,2020-06-23 01:30:30,234\nDONE\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Calculate page UV."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"select page_id, count(distinct visit_users) from page_uv group by page_id;\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Query Results."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"mysql> select page_id, count(distinct visit_users) from page_uv group by page_id;\n\n+-----------+------------------------------+\n|  page_id  | count(DISTINCT `visit_user`) |\n+-----------+------------------------------+\n|         1 |                            3 |\n|         2 |                            1 |\n+-----------+------------------------------+\n2 row in set (0.00 sec)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"bitmap-global-dictionary",children:"Bitmap Global Dictionary"}),"\n",(0,i.jsx)(t.p,{children:"Currently, Bitmap-based Count Distinct mechanism requires the input to be integer. If the user needs to use other data types as input to the Bitmap, then the user needs to build their own global dictionary to map other types of data (such as string types) to integer types. There are several ideas for building a global dictionary."}),"\n",(0,i.jsx)(t.h3,{id:"hive-table-based-global-dictionary",children:"Hive Table-based Global Dictionary"}),"\n",(0,i.jsx)(t.p,{children:"The global dictionary itself in this scheme is a Hive table, which has two columns, one for raw values and one for encoded Int values. The steps to generate the global dictionary are as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"De-duplicate the dictionary columns of the fact table to generate a temporary table"}),"\n",(0,i.jsxs)(t.li,{children:["Left join the temporary table and the global dictionary, add ",(0,i.jsx)(t.code,{children:"new value"})," to the temporary table."]}),"\n",(0,i.jsxs)(t.li,{children:["Encode the ",(0,i.jsx)(t.code,{children:"new value"})," and insert it into the global dictionary."]}),"\n",(0,i.jsx)(t.li,{children:"Left join the fact table and the updated global dictionary, replace the dictionary items with IDs."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this way, the global dictionary can be updated and the value columns in the fact table can be replaced using Spark or MR. Compared with the trie tree-based global dictionary, this approach can be distributed and the global dictionary can be reused."}),"\n",(0,i.jsx)(t.p,{children:"However, there are a few things to note: the original fact table is read multiple times, and there are two joins that consume a lot of extra resources during the calculation of the global dictionary."}),"\n",(0,i.jsx)(t.h3,{id:"build-a-global-dictionary-based-on-a-trie-tree",children:"Build a global dictionary based on a trie tree"}),"\n",(0,i.jsx)(t.p,{children:"Users can also build their own global dictionaries using trie trees (aka prefix trees or dictionary trees). The trie tree has common prefixes for the descendants of nodes, which can be used to reduce query time and minimize string comparisons, and therefore is well suited for implementing dictionary encoding. However, the implementation of trie tree is not easy to distribute and can create performance bottlenecks when the data volume is relatively large."}),"\n",(0,i.jsx)(t.p,{children:"By building a global dictionary and converting other types of data to integer data, you can use Bitmap to perform accurate Count Distinct analysis of non-integer data columns."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},76526:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/6.1.2-2-93533d87d0c45dab1269f0868a881db2.png"},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>s});var i=n(67294);const a=i.createContext({});function s(e){const t=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:s(e),i.createElement(a.Provider,{value:o},t)}}}]);