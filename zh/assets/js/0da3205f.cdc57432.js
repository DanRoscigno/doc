"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51188],{99109:(r,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>a});var t=s(85893),d=s(11151);const n={displayed_sidebar:"Chinese"},c="Spark StarRocks Connector",i={id:"unloading/Spark_connector",title:"Spark StarRocks Connector",description:"Spark StarRocks Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Spark \u8bfb\u53d6 StarRocks \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0/unloading/Spark_connector.md",sourceDirName:"unloading",slug:"/unloading/Spark_connector",permalink:"/zh/docs/2.0/unloading/Spark_connector",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/unloading/Spark_connector.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u5bfc\u51fa\u603b\u89c8",permalink:"/zh/docs/2.0/unloading/Export"},next:{title:"\u6570\u7ec4",permalink:"/zh/docs/2.0/using_starrocks/Array"}},l={},a=[{value:"\u7248\u672c\u8981\u6c42",id:"\u7248\u672c\u8981\u6c42",level:2},{value:"\u7f16\u8bd1\u90e8\u7f72",id:"\u7f16\u8bd1\u90e8\u7f72",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"SQL",id:"sql",level:3},{value:"DataFrame",id:"dataframe",level:3},{value:"RDD",id:"rdd",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u901a\u7528\u914d\u7f6e\u9879",id:"\u901a\u7528\u914d\u7f6e\u9879",level:3},{value:"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e",id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e",level:3},{value:"RDD \u4e13\u6709\u914d\u7f6e",id:"rdd-\u4e13\u6709\u914d\u7f6e",level:3},{value:"StarRocks \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",id:"starrocks-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",level:2}];function h(r){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h3:"h3",pre:"pre"},(0,d.ah)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"spark-starrocks-connector",children:"Spark StarRocks Connector"}),"\n",(0,t.jsx)(e.p,{children:"Spark StarRocks Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Spark \u8bfb\u53d6 StarRocks \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5f53\u524d\u7248\u672c\u53ea\u652f\u6301\u4ece",(0,t.jsx)(e.code,{children:"StarRocks"}),"\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u53ef\u4ee5\u5c06",(0,t.jsx)(e.code,{children:"StarRocks"}),"\u8868\u6620\u5c04\u4e3a",(0,t.jsx)(e.code,{children:"DataFrame"}),"\u6216\u8005",(0,t.jsx)(e.code,{children:"RDD"}),"\uff0c\u63a8\u8350\u4f7f\u7528",(0,t.jsx)(e.code,{children:"DataFrame"}),"\u3002"]}),"\n",(0,t.jsxs)(e.li,{children:["\u652f\u6301\u5728",(0,t.jsx)(e.code,{children:"StarRocks"}),"\u7aef\u5b8c\u6210\u6570\u636e\u8fc7\u6ee4\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u7248\u672c\u8981\u6c42",children:"\u7248\u672c\u8981\u6c42"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Connector"}),(0,t.jsx)(e.th,{children:"Spark"}),(0,t.jsx)(e.th,{children:"StarRocks"}),(0,t.jsx)(e.th,{children:"Java"}),(0,t.jsx)(e.th,{children:"Scala"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"1.0.0"}),(0,t.jsx)(e.td,{children:"2.x"}),(0,t.jsx)(e.td,{children:"1.18+"}),(0,t.jsx)(e.td,{children:"8"}),(0,t.jsx)(e.td,{children:"2.11"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"1.0.0"}),(0,t.jsx)(e.td,{children:"3.x"}),(0,t.jsx)(e.td,{children:"1.18+"}),(0,t.jsx)(e.td,{children:"8"}),(0,t.jsx)(e.td,{children:"2.12"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u7f16\u8bd1\u90e8\u7f72",children:"\u7f16\u8bd1\u90e8\u7f72"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/StarRocks/spark-starrocks-connector/blob/main/docs/spark-starrocks-connector.md",children:"Spark StarRocks Connector"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/StarRocks/demo/tree/master/SparkDemo",children:"Spark Demo"})}),"\n",(0,t.jsx)(e.h3,{id:"sql",children:"SQL"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'CREATE TEMPORARY VIEW spark_starrocks\nUSING starrocks\nOPTIONS(\n  "table.identifier" = "$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME",\n  "fenodes" = "$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESTFUL_PORT",\n  "user" = "$YOUR_STARROCKS_USERNAME",\n  "password" = "$YOUR_STARROCKS_PASSWORD"\n);\n\nSELECT * FROM spark_starrocks;\n'})}),"\n",(0,t.jsx)(e.h3,{id:"dataframe",children:"DataFrame"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scala",children:'val starrocksSparkDF = spark.read.format("starrocks")\n  .option("starrocks.table.identifier", "$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME")\n  .option("starrocks.fenodes", "$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESTFUL_PORT")\n  .option("user", "$YOUR_STARROCKS_USERNAME")\n  .option("password", "$YOUR_STARROCKS_PASSWORD")\n  .load()\n\nstarrocksSparkDF.show(5)\n'})}),"\n",(0,t.jsx)(e.h3,{id:"rdd",children:"RDD"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scala",children:'import com.starrocks.connector.spark._\nval starrocksSparkRDD = sc.starrocksRDD(\n  tableIdentifier = Some("$YOUR_STARROCKS_DATABASE_NAME.$YOUR_STARROCKS_TABLE_NAME"),\n  cfg = Some(Map(\n    "starrocks.fenodes" -> "$YOUR_STARROCKS_FE_HOSTNAME:$YOUR_STARROCKS_FE_RESTFUL_PORT",\n    "starrocks.request.auth.user" -> "$YOUR_STARROCKS_USERNAME",\n    "starrocks.request.auth.password" -> "$YOUR_STARROCKS_PASSWORD"\n  ))\n)\n\nstarrocksSparkRDD.collect()\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(e.h3,{id:"\u901a\u7528\u914d\u7f6e\u9879",children:"\u901a\u7528\u914d\u7f6e\u9879"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Default Value"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.fenodes"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"StarRocks FE http \u5730\u5740\uff0c\u652f\u6301\u591a\u4e2a\u5730\u5740\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.table.identifier"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"StarRocks \u8868\u540d\uff0c\u5982\uff1adb1.tbl1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.retries"}),(0,t.jsx)(e.td,{children:"3"}),(0,t.jsx)(e.td,{children:"\u5411StarRocks\u53d1\u9001\u8bf7\u6c42\u7684\u91cd\u8bd5\u6b21\u6570"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.connect.timeout.ms"}),(0,t.jsx)(e.td,{children:"30000"}),(0,t.jsx)(e.td,{children:"\u5411StarRocks\u53d1\u9001\u8bf7\u6c42\u7684\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.read.timeout.ms"}),(0,t.jsx)(e.td,{children:"30000"}),(0,t.jsx)(e.td,{children:"\u5411StarRocks\u53d1\u9001\u8bf7\u6c42\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.query.timeout.s"}),(0,t.jsx)(e.td,{children:"3600"}),(0,t.jsx)(e.td,{children:"\u67e5\u8be2StarRocks\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\u5c0f\u65f6\uff0c-1\u8868\u793a\u65e0\u8d85\u65f6\u9650\u5236"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.tablet.size"}),(0,t.jsx)(e.td,{children:"Integer.MAX_VALUE"}),(0,t.jsx)(e.td,{children:"\u4e00\u4e2aRDD Partition\u5bf9\u5e94\u7684StarRocks Tablet\u4e2a\u6570\u3002\u6b64\u6570\u503c\u8bbe\u7f6e\u8d8a\u5c0f\uff0c\u5219\u4f1a\u751f\u6210\u8d8a\u591a\u7684Partition\u3002\u4ece\u800c\u63d0\u5347Spark\u4fa7\u7684\u5e76\u884c\u5ea6\uff0c\u4f46\u540c\u65f6\u4f1a\u5bf9StarRocks\u9020\u6210\u66f4\u5927\u7684\u538b\u529b\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.batch.size"}),(0,t.jsx)(e.td,{children:"1024"}),(0,t.jsx)(e.td,{children:"\u4e00\u6b21\u4eceBE\u8bfb\u53d6\u6570\u636e\u7684\u6700\u5927\u884c\u6570\u3002\u589e\u5927\u6b64\u6570\u503c\u53ef\u51cf\u5c11Spark\u4e0eStarRocks\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u6b21\u6570\u3002\u4ece\u800c\u51cf\u8f7b\u7f51\u7edc\u5ef6\u8fdf\u6240\u5e26\u6765\u7684\u7684\u989d\u5916\u65f6\u95f4\u5f00\u9500\u3002"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.exec.mem.limit"}),(0,t.jsx)(e.td,{children:"2147483648"}),(0,t.jsx)(e.td,{children:"\u5355\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u9650\u5236\u3002\u9ed8\u8ba4\u4e3a 2GB\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.deserialize.arrow.async"}),(0,t.jsx)(e.td,{children:"false"}),(0,t.jsx)(e.td,{children:"\u662f\u5426\u652f\u6301\u5f02\u6b65\u8f6c\u6362Arrow\u683c\u5f0f\u5230spark-starrocks-connector\u8fed\u4ee3\u6240\u9700\u7684RowBatch"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.deserialize.queue.size"}),(0,t.jsx)(e.td,{children:"64"}),(0,t.jsx)(e.td,{children:"\u5f02\u6b65\u8f6c\u6362Arrow\u683c\u5f0f\u7684\u5185\u90e8\u5904\u7406\u961f\u5217\uff0c\u5f53starrocks.deserialize.arrow.async\u4e3atrue\u65f6\u751f\u6548"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.filter.query"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8fc7\u6ee4\u8bfb\u53d6\u6570\u636e\u7684\u8868\u8fbe\u5f0f\uff0c\u6b64\u8868\u8fbe\u5f0f\u900f\u4f20\u7ed9 StarRocks\u3002StarRocks \u4f7f\u7528\u6b64\u8868\u8fbe\u5f0f\u5b8c\u6210\u6e90\u7aef\u6570\u636e\u8fc7\u6ee4\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"sql-\u548c-dataframe-\u4e13\u6709\u914d\u7f6e",children:"SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Default Value"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"user"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8bbf\u95eeStarRocks\u7684\u7528\u6237\u540d"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"password"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8bbf\u95eeStarRocks\u7684\u5bc6\u7801"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.filter.query.in.max.count"}),(0,t.jsx)(e.td,{children:"100"}),(0,t.jsx)(e.td,{children:"\u8c13\u8bcd\u4e0b\u63a8\u4e2d\uff0cin\u8868\u8fbe\u5f0fvalue\u5217\u8868\u5143\u7d20\u6700\u5927\u6570\u91cf\u3002\u8d85\u8fc7\u6b64\u6570\u91cf\uff0c\u5219in\u8868\u8fbe\u5f0f\u6761\u4ef6\u8fc7\u6ee4\u5728Spark\u4fa7\u5904\u7406\u3002"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"rdd-\u4e13\u6709\u914d\u7f6e",children:"RDD \u4e13\u6709\u914d\u7f6e"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Key"}),(0,t.jsx)(e.th,{children:"Default Value"}),(0,t.jsx)(e.th,{children:"Comment"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.auth.user"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8bbf\u95eeStarRocks\u7684\u7528\u6237\u540d"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.request.auth.password"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8bbf\u95eeStarRocks\u7684\u5bc6\u7801"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"starrocks.read.field"}),(0,t.jsx)(e.td,{children:"--"}),(0,t.jsx)(e.td,{children:"\u8bfb\u53d6StarRocks\u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u591a\u5217\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"starrocks-\u548c-spark-\u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb",children:"StarRocks \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"StarRocks Type"}),(0,t.jsx)(e.th,{children:"Spark Type"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"BOOLEAN"}),(0,t.jsx)(e.td,{children:"DataTypes.BooleanType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"TINYINT"}),(0,t.jsx)(e.td,{children:"DataTypes.ByteType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"SMALLINT"}),(0,t.jsx)(e.td,{children:"DataTypes.ShortType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"INT"}),(0,t.jsx)(e.td,{children:"DataTypes.IntegerType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"BIGINT"}),(0,t.jsx)(e.td,{children:"DataTypes.LongType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"LARGEINT"}),(0,t.jsx)(e.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"FLOAT"}),(0,t.jsx)(e.td,{children:"DataTypes.FloatType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DOUBLE"}),(0,t.jsx)(e.td,{children:"DataTypes.DoubleType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DECIMAL"}),(0,t.jsx)(e.td,{children:"DecimalType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DATE"}),(0,t.jsx)(e.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"DATETIME"}),(0,t.jsx)(e.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"CHAR"}),(0,t.jsx)(e.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"VARCHAR"}),(0,t.jsx)(e.td,{children:"DataTypes.StringType"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"ARRAY"}),(0,t.jsx)(e.td,{children:"Unsupported datatype"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"HLL"}),(0,t.jsx)(e.td,{children:"Unsupported datatype"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"BITMAP"}),(0,t.jsx)(e.td,{children:"Unsupported datatype"})]})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u6ce8\uff1aConnector\u4e2d\uff0c\u5c06",(0,t.jsx)(e.code,{children:"DATE"}),"\u548c",(0,t.jsx)(e.code,{children:"DATETIME"}),"\u6620\u5c04\u4e3a",(0,t.jsx)(e.code,{children:"String"}),"\u3002\u7531\u4e8e",(0,t.jsx)(e.code,{children:"StarRocks"}),"\u5e95\u5c42\u5b58\u50a8\u5f15\u64ce\u5904\u7406\u903b\u8f91\uff0c\u76f4\u63a5\u4f7f\u7528\u65f6\u95f4\u7c7b\u578b\u65f6\uff0c\u8986\u76d6\u7684\u65f6\u95f4\u8303\u56f4\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u3002\u6240\u4ee5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"String"})," \u7c7b\u578b\u76f4\u63a5\u8fd4\u56de\u5bf9\u5e94\u7684\u65f6\u95f4\u53ef\u8bfb\u6587\u672c\u3002"]}),"\n"]})]})}const o=function(r={}){const{wrapper:e}=Object.assign({},(0,d.ah)(),r.components);return e?(0,t.jsx)(e,Object.assign({},r,{children:(0,t.jsx)(h,r)})):h(r)}},11151:(r,e,s)=>{s.d(e,{Zo:()=>i,ah:()=>n});var t=s(67294);const d=t.createContext({});function n(r){const e=t.useContext(d);return t.useMemo((()=>"function"==typeof r?r(e):{...e,...r}),[e,r])}const c={};function i({components:r,children:e,disableParentContext:s}){let i;return i=s?"function"==typeof r?r({}):r||c:n(r),t.createElement(d.Provider,{value:i},e)}}}]);