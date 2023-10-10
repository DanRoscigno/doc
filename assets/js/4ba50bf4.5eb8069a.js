"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34164],{86284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=n(85893),a=n(11151);const l={},i="HLL",r={id:"sql-reference/sql-statements/data-definition/HLL",title:"HLL",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/HLL.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/HLL",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-definition/HLL.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"DROP VIEW",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/DROP VIEW"},next:{title:"KILL ANALYZE",permalink:"/docs/3.0/sql-reference/sql-statements/data-definition/KILL ANALYZE"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ol:"ol",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"hll",children:"HLL"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"HLL enables the development of programmes based on the HyperLogLog algorithm. It is used to store intermediate results of the HyperLogLog calculation process. It can only be used as the value column type of the table. HLL reduces the amount of data through aggregation to speed up the query process. There may be a 1% deviation in the estimated results."}),"\n",(0,s.jsxs)(t.p,{children:["HLL column is generated based on the imported data or data from other columns. When data is imported, the ",(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"hll_hash"})," function specifies which column will be used to generated the HLL column. HLL is often used to replace COUNT DISTINCT and quickly calculate unique views (UVs) with rollup."]}),"\n",(0,s.jsx)(t.p,{children:"Related functions:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_union_agg",children:"HLL_UNION_AGG(hll)"}),": This function is an aggregate function used to estimate the cardinality of all data that meet the conditions. This can also be used to analyze functions. It only supports default window and does not support window clause."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_raw_agg",children:"HLL_RAW_AGG(hll)"}),": This function is an aggregate function used to aggregate fields of hll type and returns with hll type."]}),"\n",(0,s.jsx)(t.p,{children:"HLL_CARDINALITY(hll): This function is used to estimate the cardinality of a single hll column."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_hash",children:"HLL_HASH(column_name)"}),": This generates HLL column type and is used for inserts or imports. See the instructions for the use of imports."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/3.0/sql-reference/sql-functions/aggregate-functions/hll_empty",children:"HLL_EMPTY"}),": This generates empty HLL column and is used to fill in default values during inserts or imports. See the instructions for the use of imports."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"First, create a table with hll column."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"create table test(\ndt date,\nid int,\nname char(10),\nprovince char(10),\nos char(1),\nset1 hll hll_union,\nset2 hll hll_union)\ndistributed by hash(id);\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Import data. Please refer to ",(0,s.jsx)(t.a,{href:"/docs/3.0/loading/StreamLoad",children:"Stream Load"})," for the import method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:'a. Use a table column to generate hll column \ncurl --location-trusted -uname:password -T data -H "label:load_1" \\\n    -H "columns:dt, id, name, province, os, set1=hll_hash(id), set2=hll_hash(name)"\nhttp://host/api/test_db/test/_stream_load\n\nb. Use a data column to generate hll column \ncurl --location-trusted -uname:password -T data -H "label:load_1" \\\n    -H "columns:dt, id, name, province, sex, cuid, os, set1=hll_hash(cuid), set2=hll_hash(os)"\nhttp://host/api/test_db/test/_stream_load\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Aggregate data in the following three ways: (Without aggregation, direct query on base table may be as slow as using approx_count_distinct)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"a. Create a rollup to aggregate hll column\nalter table test add rollup test_rollup(dt, set1);\n\nb. Create another table to calculate uv and insert data into it\n\ncreate table test_uv(\ndt date,\nid int\nuv_set hll hll_union)\ndistributed by hash(id);\n\ninsert into test_uv select dt, id, set1 from test;\n\nc. Create another table to calculate uv. Insert data and generate hll column by testing other columns through hll_hash\n\ncreate table test_uv(\ndt date,\nid int,\nid_set hll hll_union)\ndistributed by hash(id);\n\ninsert into test_uv select dt, id, hll_hash(id) from test;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Query. HLL column does not support direct query into its original values. It can be queried by matching functions."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plain",metastring:"text",children:"a. Calculate the total nv\nselect HLL_UNION_AGG(uv_set) from test_uv;\n\nb. Calculate uv for each day \nselect dt, HLL_CARDINALITY(uv_set) from test_uv;\n\nc. Calculate the aggregation value of set 1 in the test table\nselect dt, HLL_CARDINALITY(uv) from (select dt, HLL_RAW_AGG(set1) as uv from test group by dt) tmp;\nselect dt, HLL_UNION_AGG(set1) as uv from test group by dt;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>l});var s=n(67294);const a=s.createContext({});function l(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:l(e),s.createElement(a.Provider,{value:r},t)}}}]);