"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[14320],{51555:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var t=s(85893),n=s(11151);const d={displayed_sidebar:"English"},i="Spark StarRocks Connector",a={id:"unloading/Spark_connector",title:"Spark StarRocks Connector",description:"The Spark StarRocks Connector reads data stored in StarRocks via Spark.",source:"@site/versioned_docs/version-2.1/unloading/Spark_connector.md",sourceDirName:"unloading",slug:"/unloading/Spark_connector",permalink:"/docs/2.1/unloading/Spark_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/unloading/Spark_connector.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Use Flink connector to read data from StarRocks",permalink:"/docs/2.1/unloading/Flink_connector"},next:{title:"Arrays",permalink:"/docs/2.1/using_starrocks/Array"}},c={},l=[{value:"Version Requirements",id:"version-requirements",level:2},{value:"Usage examples",id:"usage-examples",level:3},{value:"SQL",id:"sql",level:4},{value:"DataFrame",id:"dataframe",level:4},{value:"RDD",id:"rdd",level:4},{value:"Configuration",id:"configuration",level:3},{value:"General configuration",id:"general-configuration",level:4},{value:"SQL and Dataframe Configuration",id:"sql-and-dataframe-configuration",level:4},{value:"RDD Configuration",id:"rdd-configuration",level:4},{value:"StarRocks and Spark column type mapping",id:"starrocks-and-spark-column-type-mapping",level:3}];function o(e){const r=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",a:"a",h4:"h4",pre:"pre"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"spark-starrocks-connector",children:"Spark StarRocks Connector"}),"\n",(0,t.jsx)(r.p,{children:"The Spark StarRocks Connector reads data stored in StarRocks via Spark."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The current version only supports reading data from ",(0,t.jsx)(r.code,{children:"StarRocks"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Support mapping ",(0,t.jsx)(r.code,{children:"StarRocks"})," tables to ",(0,t.jsx)(r.code,{children:"DataFrame"})," or ",(0,t.jsx)(r.code,{children:"RDD"}),".",(0,t.jsx)(r.code,{children:"DataFrame"})," is more recommended."]}),"\n",(0,t.jsxs)(r.li,{children:["Support data filtering on the ",(0,t.jsx)(r.code,{children:"StarRocks"})," side to reduce the amount of data being  transferred."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"version-requirements",children:"Version Requirements"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Connector"}),(0,t.jsx)(r.th,{children:"Spark"}),(0,t.jsx)(r.th,{children:"Java"}),(0,t.jsx)(r.th,{children:"Scala"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1.0.0"}),(0,t.jsx)(r.td,{children:"2.x"}),(0,t.jsx)(r.td,{children:"8"}),(0,t.jsx)(r.td,{children:"2.11"})]})})]}),"\n",(0,t.jsx)(r.h3,{id:"usage-examples",children:"Usage examples"}),"\n",(0,t.jsxs)(r.p,{children:["Code Reference: ",(0,t.jsx)(r.a,{href:"https://github.com/StarRocks/demo/tree/master/SparkDemo",children:"https://github.com/StarRocks/demo/tree/master/SparkDemo"})]}),"\n",(0,t.jsx)(r.h4,{id:"sql",children:"SQL"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:'CREATE TEMPORARY VIEW spark_starrocks\nUSING starrocks\nOPTIONS(\n  "table.identifier"="$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME",\n  "fenodes"="$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESFUL_PORT",\n  "user"="$YOUR_STARROCKS_USERNAME",\n  "password"="$YOUR_STARROCKS_PASSWORD"\n);\n\nSELECT * FROM spark_starrocks;\n'})}),"\n",(0,t.jsx)(r.h4,{id:"dataframe",children:"DataFrame"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scala",children:'val starrocksSparkDF = spark.read.format("starrocks")\n  .option("starrocks.table.identifier", "$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME")\n .option("starrocks.fenodes", "$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESFUL_PORT")\n  .option("user", "$YOUR_STARROCKS_USERNAME")\n  .option("password", "$YOUR_STARROCKS_PASSWORD")\n  .load()\n\nstarrocksSparkDF.show(5)\n'})}),"\n",(0,t.jsx)(r.h4,{id:"rdd",children:"RDD"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scala",children:'import org.apache.starrocks.spark._\nval starrocksSparkRDD = sc.starrocksRDD(\n  tableIdentifier = Some("$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME"),\n  cfg = Some(Map(\n    "starrocks.fenodes" -> "$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESFUL_PORT",\n    "starrocks.request.auth.user" -> "$YOUR_STARROCKS_USERNAME",\n    "starrocks.request.auth.password" -> "$YOUR_STARROCKS_PASSWORD"\n  ))\n)\n\nstarrocksSparkRDD.collect()\n'})}),"\n",(0,t.jsx)(r.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(r.h4,{id:"general-configuration",children:"General configuration"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.fenodes"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"http address of StarRocks FE, multiple addresses supported, separated by commas"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.table.identifier"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"table name of StarRocks (e.g. db1.tbl1)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.retries"}),(0,t.jsx)(r.td,{children:"3"}),(0,t.jsx)(r.td,{children:"number of retry requests sent to StarRocks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.connect.timeout.ms"}),(0,t.jsx)(r.td,{children:"30000"}),(0,t.jsx)(r.td,{children:"requests connection timeout sent to StarRocks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.read.timeout.ms"}),(0,t.jsx)(r.td,{children:"30000"}),(0,t.jsx)(r.td,{children:"requests read timeout sent to StarRocks"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.query.timeout.s"}),(0,t.jsx)(r.td,{children:"3600"}),(0,t.jsx)(r.td,{children:"Query the timeout time of StarRocks, the default value is 1 hour, -1 means no timeout limit"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.tablet.size"}),(0,t.jsx)(r.td,{children:"Integer.MAX_VALUE"}),(0,t.jsx)(r.td,{children:"The number of StarRocks Tablets for an RDD Partition. The smaller this value is, the more partitions will be generated, which increases Spark's parallelism and puts more pressure on StarRocks."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.batch.size"}),(0,t.jsx)(r.td,{children:"1024"}),(0,t.jsx)(r.td,{children:"The maximum number of data rows to read from BE at a time. Increasing this value reduces the number of connections established between Spark and StarRocks and therefore mitigates overhead caused by network latency."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.exec.mem.limit"}),(0,t.jsx)(r.td,{children:"2147483648"}),(0,t.jsx)(r.td,{children:"Memory limit for a single query. Default to 2GB, in bytes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.deserialize.arrow.async"}),(0,t.jsx)(r.td,{children:"false"}),(0,t.jsx)(r.td,{children:"Whether to support asynchronous conversion of Arrow format to the RowBatch required for spark-starrocks-connector iteration."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.deserialize.queue.size"}),(0,t.jsx)(r.td,{children:"64"}),(0,t.jsxs)(r.td,{children:["Internal processing queue for asynchronous conversion of Arrow format, effective when ",(0,t.jsx)(r.code,{children:"starrocks.deserialize.arrow.async"})," is true."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.filter.query"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"StarRocks uses this expression to complete the source-side data filtering."})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"sql-and-dataframe-configuration",children:"SQL and Dataframe Configuration"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"user"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"StarRocks username"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"password"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"StarRocks password"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.filter.query.in.max.count"}),(0,t.jsx)(r.td,{children:"100"}),(0,t.jsxs)(r.td,{children:["The maximum number of elements of an \u201cin\u201d expression\u2019s value list in the predicate pushdown. Beyond this number, the filtering of the ",(0,t.jsx)(r.code,{children:"in"})," expression is handled in Spark."]})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"rdd-configuration",children:"RDD Configuration"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Key"}),(0,t.jsx)(r.th,{children:"Default Value"}),(0,t.jsx)(r.th,{children:"Comment"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.auth.user"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"StarRocks username"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.request.auth.password"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"StarRocks password"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"starrocks.read.field"}),(0,t.jsx)(r.td,{children:"--"}),(0,t.jsx)(r.td,{children:"Retrieves a list of column names from the StarRocks table, with multiple columns separated by commas."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"starrocks-and-spark-column-type-mapping",children:"StarRocks and Spark column type mapping"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"StarRocks Type"}),(0,t.jsx)(r.th,{children:"Spark Type"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"NULL_TYPE"}),(0,t.jsx)(r.td,{children:"DataTypes.NullType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BOOLEAN"}),(0,t.jsx)(r.td,{children:"DataTypes.BooleanType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TINYINT"}),(0,t.jsx)(r.td,{children:"DataTypes.ByteType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SMALLINT"}),(0,t.jsx)(r.td,{children:"DataTypes.ShortType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"INT"}),(0,t.jsx)(r.td,{children:"DataTypes.IntegerType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BIGINT"}),(0,t.jsx)(r.td,{children:"DataTypes.LongType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"FLOAT"}),(0,t.jsx)(r.td,{children:"DataTypes.FloatType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DOUBLE"}),(0,t.jsx)(r.td,{children:"DataTypes.DoubleType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DATE"}),(0,t.jsx)(r.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DATETIME"}),(0,t.jsx)(r.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BINARY"}),(0,t.jsx)(r.td,{children:"DataTypes.BinaryType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DECIMAL"}),(0,t.jsx)(r.td,{children:"DecimalType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CHAR"}),(0,t.jsx)(r.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"LARGEINT"}),(0,t.jsx)(r.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"VARCHAR"}),(0,t.jsx)(r.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DECIMALV2"}),(0,t.jsx)(r.td,{children:"DecimalType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TIME"}),(0,t.jsx)(r.td,{children:"DataTypes.DoubleType"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"HLL"}),(0,t.jsx)(r.td,{children:"Unsupported datatype"})]})]})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Note: In Connector, ",(0,t.jsx)(r.code,{children:"DATE"})," and ",(0,t.jsx)(r.code,{children:"DATETIME"})," are mapped to ",(0,t.jsx)(r.code,{children:"String"}),". Due to the operating mechanism of StarRock\u2019s storage engine, the time range covered when using the time type cannot meet the demand. It\u2019s recommended to use the ",(0,t.jsx)(r.code,{children:"String"})," type to retrieve the data being read within the corresponding time."]}),"\n"]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,n.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,r,s)=>{s.d(r,{Zo:()=>a,ah:()=>d});var t=s(67294);const n=t.createContext({});function d(e){const r=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||i:d(e),t.createElement(n.Provider,{value:a},r)}}}]);