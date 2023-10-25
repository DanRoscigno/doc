"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51338],{23790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const o={displayed_sidebar:"English"},a="Use HLL for approximate count distinct",r={id:"using_starrocks/Using_HLL",title:"Use HLL for approximate count distinct",description:"Background",source:"@site/versioned_docs/version-2.1/using_starrocks/Using_HLL.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/Using_HLL",permalink:"/docs/2.1/using_starrocks/Using_HLL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/Using_HLL.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Materialized view",permalink:"/docs/2.1/using_starrocks/Materialized_view"},next:{title:"Use Bitmap for exact count distinct",permalink:"/docs/2.1/using_starrocks/Using_bitmap"}},l={},c=[{value:"Background",id:"background",level:2},{value:"What is HyperLogLog",id:"what-is-hyperloglog",level:2},{value:"How to use HyperLogLog",id:"how-to-use-hyperloglog",level:3},{value:"Example",id:"example",level:4},{value:"Cautions",id:"cautions",level:3}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",h3:"h3",ol:"ol",h4:"h4",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"use-hll-for-approximate-count-distinct",children:"Use HLL for approximate count distinct"}),"\n",(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsx)(t.p,{children:"In a real-world scenario, the pressure to de-duplicate the data increases as the volume of data increases. When the size of data reaches a certain level, the cost of accurate de-duplication is relatively high. In this case, users usually use approximate algorithms to reduce the computational pressure. HyperLogLog (HLL), which will be introduced in this section, is an approximate de-duplication algorithm that has excellent space complexity O(mloglogn) and time complexity O(n). What\u2019s more, the error rate of the computation result can be controlled to about 1%-10%, depending on the size of the data set and the hash function used."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-hyperloglog",children:"What is HyperLogLog"}),"\n",(0,s.jsxs)(t.p,{children:["HyperLogLog is an approximate de-duplication algorithm that consumes very little storage space. The ",(0,s.jsx)(t.strong,{children:"HLL type"})," is used for implementing the HyperLogLog algorithm. It holds the intermediate results of the HyperLogLog calculation and can only be used as an indicator column type for data tables."]}),"\n",(0,s.jsx)(t.p,{children:"Since the HLL algorithm involves a lot of mathematical knowledge, we will use a practical example to illustrate it. Suppose we design a randomized experiment A, that is to do independent repetitions of coin flips until the first head; record the number of coin flips for the first head as a random variable X, then:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"X=1, P(X=1)=1/2"}),"\n",(0,s.jsx)(t.li,{children:"X=2, P(X=2)=1/4"}),"\n",(0,s.jsx)(t.li,{children:"..."}),"\n",(0,s.jsxs)(t.li,{children:["X=n, P(X=n)=(1/2)",(0,s.jsx)("sup",{children:"n"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We use test A to construct randomized test B which is to do N independent repetitions of test A, generating N independent identically distributed random variables X",(0,s.jsx)("sub",{children:"1"}),", X",(0,s.jsx)("sub",{children:"2"}),", X",(0,s.jsx)("sub",{children:"3"}),", ..., X",(0,s.jsx)("sub",{children:"N"}),".Take the maximum value of the random variables as X",(0,s.jsx)("sub",{children:"max"}),". Leveraging the  great likelihood estimation, the estimated value of N is 2",(0,s.jsxs)("sup",{children:["X",(0,s.jsx)("sub",{children:"max"})]}),"\u3002"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Now, we simulate the above experiment using the hash function on the given dataset:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Test A: Calculate the hash value of dataset elements and convert the hash value to binary representation. Record the occurrence of bit=1, starting from the lowest bit of the binary."}),"\n",(0,s.jsx)(t.li,{children:"Test B: Repeat the Test A process for dataset elements of Test B. Update the maximum position \u201cm\u201d of the first bit 1 occurrence for each test;"}),"\n",(0,s.jsxs)(t.li,{children:["Estimate the number of non-repeating elements in the dataset as m",(0,s.jsx)("sup",{children:"2"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In fact, the HLL algorithm divides the elements into K=2",(0,s.jsx)("sup",{children:"k"})," buckets based on the lower k bits of the element hash. Count the maximum value of the first bit 1 occurrence from the k+1st bit as m",(0,s.jsx)("sub",{children:"1"}),", m",(0,s.jsx)("sub",{children:"2"}),",..., m",(0,s.jsx)("sub",{children:"k"}),", and estimate the number of non-repeating elements in the bucket as 2",(0,s.jsxs)("sup",{children:["m",(0,s.jsx)("sub",{children:"1"})]}),", 2",(0,s.jsxs)("sup",{children:["m",(0,s.jsx)("sub",{children:"2"})]}),",..., 2",(0,s.jsxs)("sup",{children:["m",(0,s.jsx)("sub",{children:"k"})]}),". The number of non-repeating elements in the data set is the summed average of the number of buckets multiplied by the number of non-repeating elements in the buckets: N = K(K/(2",(0,s.jsxs)("sup",{children:["-m",(0,s.jsx)("sub",{children:"1"})]}),"+2",(0,s.jsxs)("sup",{children:["-m",(0,s.jsx)("sub",{children:"2"})]}),",..., 2",(0,s.jsxs)("sup",{children:["-m",(0,s.jsx)("sub",{children:"K"})]}),"))\u3002"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"HLL multiplies the correction factor with the estimation result to make the result more accurate."}),"\n",(0,s.jsxs)(t.p,{children:["Refer to the article ",(0,s.jsx)(t.a,{href:"https://gist.github.com/avibryant/8275649",children:"https://gist.github.com/avibryant/8275649"})," on implementing HLL de-duplication algorithm with StarRocks SQL statements:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT floor((0.721 * 1024 * 1024) / (sum(pow(2, m * -1)) + 1024 - count(*))) AS estimate\nFROM(select(murmur_hash3_32(c2) & 1023) AS bucket,\n     max((31 - CAST(log2(murmur_hash3_32(c2) & 2147483647) AS INT))) AS m\n     FROM db0.table0\n     GROUP BY bucket) bucket_values\n"})}),"\n",(0,s.jsx)(t.p,{children:"This algorithm de-duplicates col2 of db0.table0."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use the hash function ",(0,s.jsx)(t.code,{children:"murmur_hash3_32"})," to calculate the hash value of col2 as a 32-signed integer."]}),"\n",(0,s.jsx)(t.li,{children:"Use 1024 buckets, the correction factor is 0.721, and take the lower 10 bits of the hash value as the subscript of the bucket."}),"\n",(0,s.jsx)(t.li,{children:"Ignore the sign bit of the hash value, start from the next highest bit to the lower bit, and determine the position of the first bit 1 occurrence."}),"\n",(0,s.jsxs)(t.li,{children:["Group the calculated hash values by bucket, and use the ",(0,s.jsx)(t.code,{children:"MAX"})," aggregation to find the maximum position of the first bit 1 occurrence in the bucket."]}),"\n",(0,s.jsx)(t.li,{children:"The aggregation result is used as a subquery, and the summed average of all bucket estimates is multiplied by the number of buckets and the correction factor."}),"\n",(0,s.jsx)(t.li,{children:"Note that the empty bucket count is 1."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The above algorithm has a very low error rate when the data volume is large."}),"\n",(0,s.jsxs)(t.p,{children:["This is the core idea of the HLL algorithm. Please refer to the ",(0,s.jsx)(t.a,{href:"http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf",children:"HyperLogLog paper"})," if you are interested."]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use-hyperloglog",children:"How to use HyperLogLog"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To use HyperLogLog de-duplication, you need to set the target indicator column type to \u2018HLL\u2019 and the aggregation function to ",(0,s.jsx)(t.code,{children:"HLL_UNION"})," in the table creation statement."]}),"\n",(0,s.jsx)(t.li,{children:"Currently, only the aggregation model supports HLL as indicator column type."}),"\n",(0,s.jsxs)(t.li,{children:["When using ",(0,s.jsx)(t.code,{children:"count distinct"})," on columns of the HLL type, StarRocks will automatically convert it to the ",(0,s.jsx)(t.code,{children:"HLL_UNION_AGG"})," calculation."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["First, create a table with ",(0,s.jsx)(t.strong,{children:"HLL"})," columns, where uv is an aggregated column, the column type is ",(0,s.jsx)(t.code,{children:"HLL"}),", and the aggregation function is ",(0,s.jsx)(t.code,{children:"HLL_UNION"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test(\n        dt DATE,\n        id INT,\n        uv HLL HLL_UNION\n)\nDISTRIBUTED BY HASH(ID) BUCKETS 32;\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Note: When the data volume is large, it is better to create a corresponding rollup table for high frequency HLL queries"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Importing data in Stream Load mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl --location-trusted -u root: -H "label:label_1600997542287" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,user_id, uv=hll_hash(user_id)" -T /root/test.csv http://starrocks_be0:8040/api/db0/test/_stream_load\n{\n    "TxnId": 2504748,\n    "Label": "label_1600997542287",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 5,\n    "NumberLoadedRows": 5,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 120,\n    "LoadTimeMs": 46,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 29,\n    "CommitAndPublishTimeMs": 14\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Broker Load mode:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'LOAD LABEL test_db.label\n (\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n    INTO TABLE `test`\n    COLUMNS TERMINATED BY ","\n    (dt, id, user_id)\n    SET (\n      uv = HLL_HASH(user_id)\n    )\n );\n'})}),"\n",(0,s.jsx)(t.p,{children:"Querying data"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The HLL column does not allow direct query of its original value, use the function ",(0,s.jsx)(t.code,{children:"HLL_UNION_AGG"})," to query"]}),"\n",(0,s.jsx)(t.li,{children:"To find the total uv"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"SELECT HLL_UNION_AGG(uv) FROM test;"})}),"\n",(0,s.jsx)(t.p,{children:"This statement is equivalent to"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"SELECT COUNT(DISTINCT uv) FROM test;"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Query for uv of everyday"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"SELECT COUNT(DISTINCT uv) FROM test GROUP BY ID;"})}),"\n",(0,s.jsx)(t.h3,{id:"cautions",children:"Cautions"}),"\n",(0,s.jsxs)(t.p,{children:["How should I choose between Bitmap and HLL? If the base of the dataset is in the millions or tens of millions, and you have a few dozen machines, use ",(0,s.jsx)(t.code,{children:"count distinct"}),". If the base is in the hundreds of millions and needs to be accurately de-duplicated, use",(0,s.jsx)(t.code,{children:"Bitmap"}),"; if approximate de-duplication is acceptable, use the ",(0,s.jsx)(t.code,{children:"HLL"})," type."]}),"\n",(0,s.jsx)(t.p,{children:"Bitmap only supports TINYINT, SMALLINT, INT, and BIGINT. Note that LARGEINT is not supported. For other types of data sets to be de-duplicated, a dictionary needs to be built to map the original type to an integer type.  Building a dictionary  is complex, and requires a trade-off between data volume, update frequency, query efficiency, storage, and other issues. HLL does not need a dictionary, but it needs the corresponding data type to support the hash function. Even in an analytical system that does not support HLL internally, it is still possible to use the hash function and SQL to implement HLL de-duplication."}),"\n",(0,s.jsx)(t.p,{children:"For common columns, users can use the NDV function for approximate de-duplication. This function returns an approximate aggregation of COUNT(DISTINCT col) results, and the underlying implementation converts the data storage type to the HyperLogLog type for calculation. The NDV function consumes a lot of resources  when calculating and is therefore  not well suited for high concurrency scenarios."}),"\n",(0,s.jsx)(t.p,{children:"If you wish to perform user behavior analysis, you may consider IntersectCount or custom UDAF."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>o});var s=n(67294);const i=s.createContext({});function o(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:o(e),s.createElement(i.Provider,{value:r},t)}}}]);