"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[1550],{7032:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var d=n(85893),t=n(11151);const a={displayed_sidebar:"English"},r="Strict mode",o={id:"loading/load_concept/strict_mode",title:"Strict mode",description:"Strict mode is an optional property that you can configure for data loads. It affects the loading behavior and the final loaded data.",source:"@site/versioned_docs/version-3.0/loading/load_concept/strict_mode.md",sourceDirName:"loading/load_concept",slug:"/loading/load_concept/strict_mode",permalink:"/docs/3.0/loading/load_concept/strict_mode",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/load_concept/strict_mode.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Load data using Stream Load transaction interface",permalink:"/docs/3.0/loading/Stream_Load_transaction_interface"},next:{title:"quick_start",permalink:"/docs/3.0/quick_start/"}},l={},i=[{value:"Understand strict mode",id:"understand-strict-mode",level:2},{value:"Set strict mode",id:"set-strict-mode",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"INSERT",id:"insert",level:3}];function c(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre"},(0,t.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"strict-mode",children:"Strict mode"}),"\n",(0,d.jsx)(s.p,{children:"Strict mode is an optional property that you can configure for data loads. It affects the loading behavior and the final loaded data."}),"\n",(0,d.jsx)(s.p,{children:"This topic introduces what strict mode is and how to set strict mode."}),"\n",(0,d.jsx)(s.h2,{id:"understand-strict-mode",children:"Understand strict mode"}),"\n",(0,d.jsx)(s.p,{children:'During data loading, the data types of the source columns may not be completely consistent with the data types of the destination columns. In such cases, StarRocks performs conversions on the source column values that have inconsistent data types. Data conversions may fail due to various issues such as unmatched field data types and field length overflows. Source column values that fail to be properly converted are unqualified column values, and source rows that contain unqualified column values are referred to as "unqualified rows". Strict mode is used to control whether to filter out unqualified rows during data loading.'}),"\n",(0,d.jsx)(s.p,{children:"Strict mode works as follows:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"If strict mode is enabled, StarRocks loads only qualified rows. It filters out unqualified rows and returns details about the unqualified rows."}),"\n",(0,d.jsxs)(s.li,{children:["If strict mode is disabled, StarRocks converts unqualified column values into ",(0,d.jsx)(s.code,{children:"NULL"})," and loads unqualified rows that contain these ",(0,d.jsx)(s.code,{children:"NULL"})," values together with qualified rows."]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Note the following points:"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["In actual business scenarios, both qualified and unqualified rows may contain ",(0,d.jsx)(s.code,{children:"NULL"})," values. If the destination columns do not allow ",(0,d.jsx)(s.code,{children:"NULL"})," values, StarRocks reports errors and filters out the rows that contain ",(0,d.jsx)(s.code,{children:"NULL"})," values."]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["The maximum percentage of unqualified rows that can be filtered out for a ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"Stream Load"}),", ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),", ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"Routine Load"}),", or ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"Spark Load"})," job is controlled by an optional job property ",(0,d.jsx)(s.code,{children:"max_filter_ratio"}),". ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," does not support setting the ",(0,d.jsx)(s.code,{children:"max_filter_ratio"})," property."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["For example, you want to load four rows that hold ",(0,d.jsx)(s.code,{children:"\\N"})," (",(0,d.jsx)(s.code,{children:"\\N"})," denotes a ",(0,d.jsx)(s.code,{children:"NULL"})," value), ",(0,d.jsx)(s.code,{children:"abc"}),", ",(0,d.jsx)(s.code,{children:"2000"}),", and ",(0,d.jsx)(s.code,{children:"1"})," values respectively in a column from a CSV-formatted data file into a StarRocks table, and the data type of the destination StarRocks table column is TINYINT [-128, 127]."]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["The source column value ",(0,d.jsx)(s.code,{children:"\\N"})," is processed into ",(0,d.jsx)(s.code,{children:"NULL"})," upon conversion to TINYINT."]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"\\N"})," is always processed into ",(0,d.jsx)(s.code,{children:"NULL"})," upon conversion regardless of the destination data type."]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["The source column value ",(0,d.jsx)(s.code,{children:"abc"})," is processed into ",(0,d.jsx)(s.code,{children:"NULL"}),", because its data type is not TINYINT and the conversion fails."]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["The source column value ",(0,d.jsx)(s.code,{children:"2000"})," is processed into ",(0,d.jsx)(s.code,{children:"NULL"}),", because it is beyond the range supported by TINYINT and the conversion fails."]}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:["The source column value ",(0,d.jsx)(s.code,{children:"1"})," can be properly converted to a TINYINT-type value ",(0,d.jsx)(s.code,{children:"1"}),"."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"If strict mode is disabled, StarRocks loads all the four rows."}),"\n",(0,d.jsxs)(s.p,{children:["If strict mode is enabled, StarRocks loads only the rows that hold ",(0,d.jsx)(s.code,{children:"\\N"})," or ",(0,d.jsx)(s.code,{children:"1"})," and filters out the rows that hold ",(0,d.jsx)(s.code,{children:"abc"})," or ",(0,d.jsx)(s.code,{children:"2000"}),". The rows filtered out are counted against the maximum percentage of rows that can be filtered out due to inadequate data quality as specified by the ",(0,d.jsx)(s.code,{children:"max_filter_ratio"})," parameter."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Final loaded data with strict mode disabled"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Source column value"}),(0,d.jsx)(s.th,{children:"Column value upon conversion to TINYINT"}),(0,d.jsx)(s.th,{children:"Load result when destination column allows NULL values"}),(0,d.jsx)(s.th,{children:"Load result when destination column does not allow NULL values"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\\N"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is loaded."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"abc"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is loaded."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"2000"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is loaded."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"1"})," is loaded."]}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"1"})," is loaded."]})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Final loaded data with strict mode enabled"})}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Source column value"}),(0,d.jsx)(s.th,{children:"Column value upon conversion to TINYINT"}),(0,d.jsx)(s.th,{children:"Load result when destination column allows NULL values"}),(0,d.jsx)(s.th,{children:"Load result when destination column does not allow NULL values"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"\\N"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is loaded."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"abc"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is not allowed and therefore is filtered out."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"2000"}),(0,d.jsx)(s.td,{children:"NULL"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"NULL"})," is not allowed and therefore is filtered out."]}),(0,d.jsx)(s.td,{children:"An error is reported."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"1"}),(0,d.jsx)(s.td,{children:"1"}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"1"})," is loaded."]}),(0,d.jsxs)(s.td,{children:["The value ",(0,d.jsx)(s.code,{children:"1"})," is loaded."]})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"set-strict-mode",children:"Set strict mode"}),"\n",(0,d.jsxs)(s.p,{children:["If you run a ",(0,d.jsx)(s.a,{href:"/docs/3.0/loading/StreamLoad",children:"Stream Load"}),", ",(0,d.jsx)(s.a,{href:"/docs/3.0/loading/BrokerLoad",children:"Broker Load"}),", ",(0,d.jsx)(s.a,{href:"/docs/3.0/loading/RoutineLoad",children:"Routine Load"}),", or ",(0,d.jsx)(s.a,{href:"/docs/3.0/loading/SparkLoad",children:"Spark Load"})," job to load data, use the ",(0,d.jsx)(s.code,{children:"strict_mode"})," parameter to set strict mode for the load job. Valid values are ",(0,d.jsx)(s.code,{children:"true"})," and ",(0,d.jsx)(s.code,{children:"false"}),". The default value is ",(0,d.jsx)(s.code,{children:"false"}),". The value ",(0,d.jsx)(s.code,{children:"true"})," enables strict mode, and the value ",(0,d.jsx)(s.code,{children:"false"})," disables strict mode."]}),"\n",(0,d.jsxs)(s.p,{children:["If you execute ",(0,d.jsx)(s.a,{href:"/docs/3.0/loading/InsertInto",children:"INSERT"})," to load data, use the ",(0,d.jsx)(s.code,{children:"enable_insert_strict"})," session variable to set strict mode. Valid values are ",(0,d.jsx)(s.code,{children:"true"})," and ",(0,d.jsx)(s.code,{children:"false"}),". The default value is ",(0,d.jsx)(s.code,{children:"true"}),". The value ",(0,d.jsx)(s.code,{children:"true"})," enables strict mode, and the value ",(0,d.jsx)(s.code,{children:"false"})," disables strict mode."]}),"\n",(0,d.jsx)(s.p,{children:"Examples are as follows:"}),"\n",(0,d.jsx)(s.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-Bash",children:'curl --location-trusted -u <username>:<password> \\\n    -H "strict_mode: {true | false}" \\\n    -T <file_name> -XPUT \\\n    http://<fe_host>:<fe_http_port>/api/<database_name>/<table_name>/_stream_load\n'})}),"\n",(0,d.jsxs)(s.p,{children:["For detailed syntax and parameters about Stream Load, see ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/STREAM_LOAD",children:"STREAM LOAD"}),"."]}),"\n",(0,d.jsx)(s.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-SQL",children:'LOAD LABEL [<database_name>.]<label_name>\n(\n    DATA INFILE ("<file_path>"[, "<file_path>" ...])\n    INTO TABLE <table_name>\n)\nWITH BROKER\n(\n    "username" = "<hdfs_username>",\n    "password" = "<hdfs_password>"\n)\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"\n)\n'})}),"\n",(0,d.jsxs)(s.p,{children:["The preceding code snippet uses HDFS as an example. For detailed syntax and parameters about Broker Load, see ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,d.jsx)(s.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD [<database_name>.]<job_name> ON <table_name>\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"\n) \nFROM KAFKA\n(\n    "kafka_broker_list" ="<kafka_broker1_ip>:<kafka_broker1_port>[,<kafka_broker2_ip>:<kafka_broker2_port>...]",\n    "kafka_topic" = "<topic_name>"\n)\n'})}),"\n",(0,d.jsxs)(s.p,{children:["The preceding code snippet uses Apache Kafka\xae as an example. For detailed syntax and parameters about Routine Load, see ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/CREATE_ROUTINE_LOAD",children:"CREATE ROUTINE LOAD"}),"."]}),"\n",(0,d.jsx)(s.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-SQL",children:'LOAD LABEL [<database_name>.]<label_name>\n(\n    DATA INFILE ("<file_path>"[, "<file_path>" ...])\n    INTO TABLE <table_name>\n)\nWITH RESOURCE <resource_name>\n(\n    "spark.executor.memory" = "3g",\n    "broker.username" = "<hdfs_username>",\n    "broker.password" = "<hdfs_password>"\n)\nPROPERTIES\n(\n    "strict_mode" = "{true | false}"   \n)\n'})}),"\n",(0,d.jsxs)(s.p,{children:["The preceding code snippet uses HDFS as an example. For detailed syntax and parameters about Spark Load, see ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/SPARK_LOAD",children:"SPARK LOAD"}),"."]}),"\n",(0,d.jsx)(s.h3,{id:"insert",children:"INSERT"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-SQL",children:"SET enable_insert_strict = {true | false};\nINSERT INTO <table_name> ...\n"})}),"\n",(0,d.jsxs)(s.p,{children:["For detailed syntax and parameters about INSERT, see ",(0,d.jsx)(s.a,{href:"/docs/3.0/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,d.jsx)(s,Object.assign({},e,{children:(0,d.jsx)(c,e)})):c(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>a});var d=n(67294);const t=d.createContext({});function a(e){const s=d.useContext(t);return d.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:a(e),d.createElement(t.Provider,{value:o},s)}}}]);