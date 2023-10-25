"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70472],{94249:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(85893),l=n(11151);const o={displayed_sidebar:"English"},s="Bloom Filter Indexing",a={id:"table_design/Bloomfilter_index",title:"Bloom Filter Indexing",description:"Principle",source:"@site/versioned_docs/version-2.1/table_design/Bloomfilter_index.md",sourceDirName:"table_design",slug:"/table_design/Bloomfilter_index",permalink:"/docs/2.1/table_design/Bloomfilter_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/table_design/Bloomfilter_index.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Bitmap Indexing",permalink:"/docs/2.1/table_design/Bitmap_index"},next:{title:"Data distribution",permalink:"/docs/2.1/table_design/Data_distribution"}},r={},d=[{value:"Principle",id:"principle",level:2},{value:"What is Bloom Filter",id:"what-is-bloom-filter",level:3},{value:"What is Bloom Filter Indexing",id:"what-is-bloom-filter-indexing",level:3},{value:"Suitable scenarios",id:"suitable-scenarios",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Create an index",id:"create-an-index",level:3},{value:"View an index",id:"view-an-index",level:3},{value:"Delete an Index",id:"delete-an-index",level:3},{value:"Modify an index",id:"modify-an-index",level:3},{value:"Notes",id:"notes",level:2}];function c(e){const i=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",img:"img",code:"code",ol:"ol",li:"li",pre:"pre",ul:"ul"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"bloom-filter-indexing",children:"Bloom Filter Indexing"}),"\n",(0,t.jsx)(i.h2,{id:"principle",children:"Principle"}),"\n",(0,t.jsx)(i.h3,{id:"what-is-bloom-filter",children:"What is Bloom Filter"}),"\n",(0,t.jsx)(i.p,{children:"Bloom Filter is a data structure used to determine whether an element is in a collection. The advantage is that it is more space and time efficient, and the disadvantage is that it has a certain rate of misclassification."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"bloomfilter",src:n(41965).Z+"",width:"1309",height:"727"})}),"\n",(0,t.jsx)(i.p,{children:"Bloom Filter is composed of a bit array and a number of hash functions. The bit array is initially set to 0. When an element is inserted, the hash functions (number of n) compute on the element and obtain the slots (number of n)The corresponding number of slots in the bit array is set to 1."}),"\n",(0,t.jsx)(i.p,{children:"To confirm whether an element is in the set, the system will calculate the Hash value based on the hash functions. If the hash values in the bloom filter have at least one 0, the element does not exist. When all the corresponding slots in the bit are 1, the existence of the element cannot be confirmed. This is because the number of slots in the bloom filter is limited, and it is possible that all the slots calculated from this element are the same as the slots calculated from another existing element. Therefore, in the all-1 case, we need to go back to the source to confirm the existence of the element."}),"\n",(0,t.jsx)(i.h3,{id:"what-is-bloom-filter-indexing",children:"What is Bloom Filter Indexing"}),"\n",(0,t.jsxs)(i.p,{children:["When creating a table in StarRocks, you can specify the columns to be indexed by BloomFilter through ",(0,t.jsx)(i.code,{children:'PROPERTIES{"bloom_filter_columns"="c1,c2,c3"}'}),". BloomFilter can quickly confirm whether a certain value exists in a column when querying. If the bloom filter determines that the specified value does not exist in the column, there is no need to read the data file. If it is an all-1 situation, it needs to read the data block to confirm whether the target value exists. In addition, bloom filter indexes cannot determine which specific row of data has the specified value."]}),"\n",(0,t.jsx)(i.h2,{id:"suitable-scenarios",children:"Suitable scenarios"}),"\n",(0,t.jsx)(i.p,{children:"A bloom filter index can be built when the following conditions are met."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Bloom Filter is suitable for non-prefix filtering."}),"\n",(0,t.jsxs)(i.li,{children:["The query will be frequently filtered according to the column, and most of the query conditions are ",(0,t.jsx)(i.code,{children:"in"})," and ",(0,t.jsx)(i.code,{children:"="}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Unlike Bitmap, BloomFilter is suitable for columns with a high base number."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(i.h3,{id:"create-an-index",children:"Create an index"}),"\n",(0,t.jsxs)(i.p,{children:["When creating a table, use ",(0,t.jsx)(i.code,{children:"bloom_filter_columns"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:'PROPERTIES ( "bloom_filter_columns"="k1,k2,k3" )\n'})}),"\n",(0,t.jsx)(i.h3,{id:"view-an-index",children:"View an index"}),"\n",(0,t.jsxs)(i.p,{children:["View the bloom filter indexes under the ",(0,t.jsx)(i.code,{children:"table_name"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:"SHOW CREATE TABLE table_name;\n"})}),"\n",(0,t.jsx)(i.h3,{id:"delete-an-index",children:"Delete an Index"}),"\n",(0,t.jsxs)(i.p,{children:["Deleting an index means removing the index column from the ",(0,t.jsx)(i.code,{children:"bloom_filter_columns"})," property:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns" = "");\n'})}),"\n",(0,t.jsx)(i.h3,{id:"modify-an-index",children:"Modify an index"}),"\n",(0,t.jsxs)(i.p,{children:["Modifying an index means modifying the ",(0,t.jsx)(i.code,{children:"bloom_filter_columns"})," property."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-SQL",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns" = "k1,k2,k3");\n'})}),"\n",(0,t.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Bloom Filter indexing is not supported for Tinyint, Float, Double type columns."}),"\n",(0,t.jsxs)(i.li,{children:["Bloom Filter indexing only has an accelerating effect on ",(0,t.jsx)(i.code,{children:"in"})," and ",(0,t.jsx)(i.code,{children:"="})," filter queries."]}),"\n",(0,t.jsx)(i.li,{children:"To see whether a query hits the bloom filter index, check its profile information."}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,l.ah)(),e.components);return i?(0,t.jsx)(i,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},41965:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/3.7.1-1c9db0679fbd93278a11a2c2c23f48b2.png"},11151:(e,i,n)=>{n.d(i,{Zo:()=>a,ah:()=>o});var t=n(67294);const l=t.createContext({});function o(e){const i=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const s={};function a({components:e,children:i,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),t.createElement(l.Provider,{value:a},i)}}}]);