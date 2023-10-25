"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[27316],{67680:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(85893),a=i(11151);const s={displayed_sidebar:"English"},r="Use Bitmap for exact count distinct",o={id:"using_starrocks/Using_bitmap",title:"Use Bitmap for exact count distinct",description:"Background",source:"@site/versioned_docs/version-2.2/using_starrocks/Using_bitmap.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_bitmap",permalink:"/docs/2.2/using_starrocks/Using_bitmap",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Using_bitmap.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Use HLL for approximate count distinct",permalink:"/docs/2.2/using_starrocks/Using_HLL"}},l={},d=[{value:"Background",id:"background",level:2},{value:"Traditional Count Distinct Calculation",id:"traditional-count-distinct-calculation",level:2},{value:"De-duplication with Bitmap",id:"de-duplication-with-bitmap",level:2},{value:"Advantages of bitmap de-duplication",id:"advantages-of-bitmap-de-duplication",level:2},{value:"How to Use Bitmap",id:"how-to-use-bitmap",level:2},{value:"Example",id:"example",level:3},{value:"Bitmap Global Dictionary",id:"bitmap-global-dictionary",level:2},{value:"Hive Table-based Global Dictionary",id:"hive-table-based-global-dictionary",level:3},{value:"Build a global dictionary based on a trie tree",id:"build-a-global-dictionary-based-on-a-trie-tree",level:3}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",img:"img",ol:"ol",a:"a",h3:"h3"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-bitmap-for-exact-count-distinct",children:"Use Bitmap for exact count distinct"}),"\n",(0,n.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(t.p,{children:"There are usually two ways to conduct  accurate de-duplication analysis in StarRocks."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Detail-based de-duplication: This is  a traditional count distinct approach that is able to retain detailed data for flexible analysis. However,  it consumes huge computational and storage resources and is not friendly enough to support scenarios involving large-scale datasets and query latency-sensitive de-duplication."}),"\n",(0,n.jsx)(t.li,{children:"Precomputation-based de-duplication: This approach is also recommended by StarRocks. In some scenarios, users only want to get the results after de-duplication and care less about detailed data. Such a scenario can be analyzed by precomputation, which is essentially using space for time and resonates with the core idea of the MOLAP aggregation model. It is to calculate in the  process of data import, reducing the storage cost and the cost of on-site calculation during query. You can further reduce the size of datasets for on-site computation  by shrinking RollUp dimension."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"traditional-count-distinct-calculation",children:"Traditional Count Distinct Calculation"}),"\n",(0,n.jsx)(t.p,{children:"StarRocks is implemented based on the MPP architecture that supports retaining detailed data when using count distinct calculation for accurate de-duplication t. However, because of the need for multiple data shuffles (transferring data between different nodes and calculating de-weighting) during query, it leads to a linear decrease in performance as the data volume increases."}),"\n",(0,n.jsx)(t.p,{children:"In the following scenario, there are tables (dt, page, user_id) that need to calculate UV by detailed data."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{align:"center",children:"dt"}),(0,n.jsx)(t.th,{align:"center",children:"page"}),(0,n.jsx)(t.th,{align:"center",children:"user_id"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"xiaoxiang"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"waimai"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"xiaoxiang"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"waimai"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"xiaoxiang"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"20191206"}),(0,n.jsx)(t.td,{align:"center",children:"waimai"}),(0,n.jsx)(t.td,{align:"center",children:"101"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Count ",(0,n.jsx)(t.code,{children:"uv"})," grouping by ",(0,n.jsx)(t.code,{children:"page"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{align:"center",children:"page"}),(0,n.jsx)(t.th,{align:"center",children:"uv"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"xiaoxiang"}),(0,n.jsx)(t.td,{align:"center",children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{align:"center",children:"waimai"}),(0,n.jsx)(t.td,{align:"center",children:"2"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:" select page, count(distinct user_id) as uv from table group by page;\n"})}),"\n",(0,n.jsx)(t.p,{children:"For the SQL of PV calculation, StarRocks will do the calculation according to the following figure. First, group by the page column and user_id column, and then count."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"alter",src:i(14451).Z+"",width:"1798",height:"862"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Note: The figure shows a schematic of 6 rows of data computed on 2 BE nodes"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Given that the data needs to be shuffled several times, it will require more computational resources and the query will be slower when the data volume gets larger. The Bitmap technology is used to  solve the performance problem of traditional count distinct calculation in such scenarios."}),"\n",(0,n.jsx)(t.h2,{id:"de-duplication-with-bitmap",children:"De-duplication with Bitmap"}),"\n",(0,n.jsx)(t.p,{children:"Given an array A with values in the range [0, n) (note: not including n), a bitmap of byte length (n+7)/8 can be used to de-duplicate the array. First, initialize the bitmap to all zeros. Then process the elements of the array A one by one, using the value of the elements in A as the subscript of the bitmap and setting the bit of the subscript to 1. Finally, count the number of 1s in the bitmap. The number of 1s in the bitmap is the result of count distinct of array A."}),"\n",(0,n.jsx)(t.h2,{id:"advantages-of-bitmap-de-duplication",children:"Advantages of bitmap de-duplication"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Space advantage: Using one bit of a bitmap to indicate the existence of the corresponding subscript has a great space advantage. For example, for int32 de-duplication, the storage space required by a normal bitmap is only 1/32 of the traditional de-duplication. The implementation of Roaring Bitmap in StarRocks further significantly reduces storage usage through optimizing sparse bitmaps."}),"\n",(0,n.jsx)(t.li,{children:"Time advantage: The bitmap de-duplication involves computation such as bit placement for a given subscript and counting the number of placed bitmaps, which are O(1) and O(n) operations respectively. The latter can be computed efficiently using clz, ctz and other instructions. In addition, bitmap de-duplication can be accelerated in parallel in the MPP execution engine, where each computing node computes a local sub-bitmap and uses the bitor operation to merge allsub-bitmaps into a final bitmap. Bitor operation is more efficient than sort-based or hash-based de-duplication in that it has no condition or data dependencies and supports vectorized execution."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Roaring Bitmap implementation, details can be found at: ",(0,n.jsx)(t.a,{href:"https://github.com/RoaringBitmap/RoaringBitmap",children:"specific paper and implementation"})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-bitmap",children:"How to Use Bitmap"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"First of all, users should note that both bitmap index and bitmap de-duplication use the bitmap technique, but the motivation for introducing them and the problem they solve are completely different. The former is used to filter enumerated columns with a low base number, while the latter is used to calculate the number of non-repeating elements in the index column of data rows."}),"\n",(0,n.jsx)(t.li,{children:"Currently Bitmap columns can only exist in the aggregate model, not in the duplicate model or the  update model."}),"\n",(0,n.jsxs)(t.li,{children:["When creating a table, specify the data type of the indicator column as BITMAP and the aggregation function as ",(0,n.jsx)(t.code,{children:"BITMAP_UNION"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"When using count distinct on a Bitmap type column, StarRocks will automatically convert it to the BITMAP_UNION_COUNT calculation."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Take the UV statistics of a page as an example."}),"\n",(0,n.jsxs)(t.p,{children:["First, create a table with a BITMAP column, where ",(0,n.jsx)(t.code,{children:"visit_users"})," is an aggregated column, the column type is ",(0,n.jsx)(t.code,{children:"BITMAP"}),", and the aggregation function is ",(0,n.jsx)(t.code,{children:"BITMAP_UNION"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE `page_uv` (\n  `page_id` INT NOT NULL COMMENT \'\u9875\u9762id\',\n  `visit_date` datetime NOT NULL COMMENT \'\u8bbf\u95ee\u65f6\u95f4\',\n  `visit_users` BITMAP BITMAP_UNION NOT NULL COMMENT \'\u8bbf\u95ee\u7528\u6237id\'\n) ENGINE=OLAP\nAGGREGATE KEY(`page_id`, `visit_date`)\nDISTRIBUTED BY HASH(`page_id`) BUCKETS 1\nPROPERTIES (\n  "replication_num" = "1",\n  "storage_format" = "DEFAULT"\n);\n'})}),"\n",(0,n.jsx)(t.p,{children:"Import data into a table, using the insert into statement:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"insert into page_uv values\n(1, '2020-06-23 01:30:30', to_bitmap(13)),\n(1, '2020-06-23 01:30:30', to_bitmap(23)),\n(1, '2020-06-23 01:30:30', to_bitmap(33)),\n(1, '2020-06-23 02:30:30', to_bitmap(13)),\n(2, '2020-06-23 01:30:30', to_bitmap(23));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After the data import, in the row ",(0,n.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_user"})," field contains 3 bitmap elements (13, 23, 33); in the data row ",(0,n.jsx)(t.code,{children:"page_id = 1, visit_date = '2020-06-23 02:30 :30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_user"})," field contains 1 bitmap element (13); in the data row ",(0,n.jsx)(t.code,{children:"page_id = 2, visit_date = '2020-06-23 01:30:30'"}),", the ",(0,n.jsx)(t.code,{children:"visit_user"})," field contains 1 bitmap element (23)."]}),"\n",(0,n.jsx)(t.p,{children:"Import using local files:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'cat <<<\'DONE\' | \\\n    curl --location-trusted -u root: -H "label:label_1600960288796" \\\n        -H "column_separator:," \\\n        -H "columns:page_id,visit_date,visit_users, visit_users=to_bitmap(visit_users)" -T - \\\n        http://StarRocks_be0:8040/api/db0/page_uv/_stream_load\n1,2020-06-23 01:30:30,130\n1,2020-06-23 01:30:30,230\n1,2020-06-23 01:30:30,120\n1,2020-06-23 02:30:30,133\n2,2020-06-23 01:30:30,234\nDONE\n'})}),"\n",(0,n.jsx)(t.p,{children:"Statistics of UV per page."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"select page_id, count(distinct visit_users) from page_uv group by page_id;\n"})}),"\n",(0,n.jsx)(t.p,{children:"Query Results."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"mysql> select page_id, count(distinct visit_users) from page_uv group by page_id;\n\n+-----------+------------------------------+\n|  page_id  | count(DISTINCT `visit_user`) |\n+-----------+------------------------------+\n|         1 |                            3 |\n+-----------+------------------------------+\n|         2 |                            1 |\n+-----------+------------------------------+\n2 row in set (0.00 sec)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"bitmap-global-dictionary",children:"Bitmap Global Dictionary"}),"\n",(0,n.jsx)(t.p,{children:"Currently, the Bitmap type-based de-duplication mechanism requires the input to be integer. If the user needs to use other data types as input to the Bitmap, then the user needs to build their own global dictionary to map other types of data (such as string types) to integer types. There are several ideas for building a global dictionary."}),"\n",(0,n.jsx)(t.h3,{id:"hive-table-based-global-dictionary",children:"Hive Table-based Global Dictionary"}),"\n",(0,n.jsx)(t.p,{children:"The global dictionary itself in this scheme is a Hive table, which has two columns, one for raw values and one for encoded Int values. The steps to generate the global dictionary are as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"De-duplicate the dictionary columns of the fact table to generate a temporary table"}),"\n",(0,n.jsxs)(t.li,{children:["Left join the temporary table and the global dictionary, add ",(0,n.jsx)(t.code,{children:"new value"})," to the temporary table."]}),"\n",(0,n.jsxs)(t.li,{children:["Encode the ",(0,n.jsx)(t.code,{children:"new value"})," and insert it into the global dictionary."]}),"\n",(0,n.jsx)(t.li,{children:"Left join the fact table and the updated global dictionary, replace the dictionary items with IDs."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this way, the global dictionary can be updated and the value columns in the fact table can be replaced using Spark or MR. Compared with the trie tree-based global dictionary, this approach can be distributed and the global dictionary can be reused."}),"\n",(0,n.jsx)(t.p,{children:"However, there are a few things to note: the original fact table is read multiple times, and there are two joins that consume a lot of extra resources during the calculation of the global dictionary."}),"\n",(0,n.jsx)(t.h3,{id:"build-a-global-dictionary-based-on-a-trie-tree",children:"Build a global dictionary based on a trie tree"}),"\n",(0,n.jsx)(t.p,{children:"Users can also build their own global dictionaries using trie trees (aka prefix trees or dictionary trees). The trie tree has common prefixes for the descendants of nodes, which can be used to reduce query time and minimize string comparisons, and therefore is well suited for implementing dictionary encoding. However, the implementation of trie tree is not easy to distribute and can create performance bottlenecks when the data volume is relatively large."}),"\n",(0,n.jsx)(t.p,{children:"By building a global dictionary and converting other types of data to integer data, you can use Bitmap to perform accurate de-duplication analysis of non-integer data columns."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},14451:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/6.1.2-2-93533d87d0c45dab1269f0868a881db2.png"},11151:(e,t,i)=>{i.d(t,{Zo:()=>o,ah:()=>s});var n=i(67294);const a=n.createContext({});function s(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:i}){let o;return o=i?"function"==typeof e?e({}):e||r:s(e),n.createElement(a.Provider,{value:o},t)}}}]);