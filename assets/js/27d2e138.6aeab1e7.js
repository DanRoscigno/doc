"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68853],{64906:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=r(85893),i=r(11151);const t={displayed_sidebar:"English"},a="Spark Load",o={id:"loading/SparkLoad",title:"Spark Load",description:"Spark load uses external Spark resources to pre-process      imported data, which improves import performance and saves compute resources. It is mainly used for initial migration and large data import into StarRocks (data volume up to TB level).",source:"@site/versioned_docs/version-1.19/loading/SparkLoad.md",sourceDirName:"loading",slug:"/loading/SparkLoad",permalink:"/docs/1.19/loading/SparkLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/loading/SparkLoad.md",tags:[],version:"1.19",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"StarRocks",permalink:"/docs/1.19/introduction/StarRocks_intro"},next:{title:"quick_start",permalink:"/docs/1.19/quick_start/"}},l={},c=[{value:"Terminology explanation",id:"terminology-explanation",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Global Dictionary",id:"global-dictionary",level:2},{value:"Applicable Scenarios",id:"applicable-scenarios",level:3},{value:"Build Process",id:"build-process",level:3},{value:"Data Pre-processing",id:"data-pre-processing",level:2},{value:"Basic Operations",id:"basic-operations",level:2},{value:"Configuring ETL Clusters",id:"configuring-etl-clusters",level:3},{value:"Configuring Spark Client",id:"configuring-spark-client",level:3},{value:"Configuring YARN Client",id:"configuring-yarn-client",level:3},{value:"Create Import Job",id:"create-import-job",level:3},{value:"Viewing Import Jobs",id:"viewing-import-jobs",level:2},{value:"View Spark Launcher commit logs",id:"view-spark-launcher-commit-logs",level:3},{value:"Cancel Import",id:"cancel-import",level:3},{value:"Related System Configurations",id:"related-system-configurations",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"FAQs",id:"faqs",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",ul:"ul",li:"li",ol:"ol",hr:"hr",h3:"h3",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"spark-load",children:"Spark Load"}),"\n",(0,s.jsxs)(n.p,{children:["Spark load uses external Spark resources to pre-process      imported data, which improves import performance and saves compute resources. It is mainly used for ",(0,s.jsx)(n.strong,{children:"initial migration"})," and ",(0,s.jsx)(n.strong,{children:"large data import"})," into StarRocks (data volume up to TB level)."]}),"\n",(0,s.jsxs)(n.p,{children:["Spark load is an ",(0,s.jsx)(n.strong,{children:"asynchronous"})," import method that requires users to create Spark-type import jobs via the MySQL protocol and view the import results using ",(0,s.jsx)(n.code,{children:"SHOW LOAD"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"terminology-explanation",children:"Terminology explanation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Spark ETL"}),": Mainly responsible for ETL of data in the import process, including global dictionary construction (BITMAP type), partitioning, sorting, aggregation, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Broker"}),": Broker is an independent stateless process. It e     ncapsulates the file system interface and provides StarRocks with the ability to read files from remote storage systems."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Global Dictionary"}),": Saves the data structure that maps data from the original value to the encoded value. The original value can be any data type, while the encoded value is an integer. The global dictionary is mainly used in scenarios where precise de-duplication is precomputed."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fundamentals",children:"Fundamentals"}),"\n",(0,s.jsx)(n.p,{children:"The user submits a Spark type import job through the MySQL client;the FE records the metadata and returns the submission result."}),"\n",(0,s.jsx)(n.p,{children:"The execution of the spark load task is divided into the following main phases."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The user submits the spark load job to the FE."}),"\n",(0,s.jsx)(n.li,{children:"The FE schedules the submission of the ETL task to the Spark cluster for execution."}),"\n",(0,s.jsx)(n.li,{children:"The Spark cluster executes the ETL task that includes global dictionary construction (BITMAP type), partitioning, sorting, aggregation, etc."}),"\n",(0,s.jsx)(n.li,{children:"After the ETL task is completed, the FE gets the data path of each preprocessed slice and schedules the relevant BE to execute the Push task."}),"\n",(0,s.jsx)(n.li,{children:"The BE reads the data through the Broker and converts it into StarRocks storage format."}),"\n",(0,s.jsx)(n.li,{children:"The FE schedules the effective version and completes the import job."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"global-dictionary",children:"Global Dictionary"}),"\n",(0,s.jsx)(n.h3,{id:"applicable-scenarios",children:"Applicable Scenarios"}),"\n",(0,s.jsx)(n.p,{children:"Currently, the BITMAP column in StarRocks is implemented using the Roaringbitmap, which only has integer to be the input data type. So if you want to implement precomputation for the BITMAP column in the import process, then you need to convert the input data type to integer."}),"\n",(0,s.jsx)(n.p,{children:"In the existing import process of StarRocks, the data structure of the global dictionary is implemented based on the Hive table, which saves the mapping from the original value to the encoded value."}),"\n",(0,s.jsx)(n.h3,{id:"build-process",children:"Build Process"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Read the data from the upstream data source and generate a temporary Hive table, named ",(0,s.jsx)(n.code,{children:"hive-table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Extract the values of the de-emphasized fields of ",(0,s.jsx)(n.code,{children:"hive-table"})," to generate a new Hive table named ",(0,s.jsx)(n.code,{children:"distinct-value-table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a new global dictionary table named ",(0,s.jsx)(n.code,{children:"dict-table"})," with one column for the original values and one column for the encoded values."]}),"\n",(0,s.jsxs)(n.li,{children:["Left join between ",(0,s.jsx)(n.code,{children:"distinct-value-table"})," and ",(0,s.jsx)(n.code,{children:"dict-table"}),", and then use the window function to encode this set. Finally both the original value and the encoded value of the de-duplicated column are written back to ",(0,s.jsx)(n.code,{children:"dict-table"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Join between ",(0,s.jsx)(n.code,{children:"dict-table"})," and ",(0,s.jsx)(n.code,{children:"hive-table"})," to finish the job of replacing the original value in ",(0,s.jsx)(n.code,{children:"hive-table"})," with the integer encoded value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hive-table"})," will be read by the next time data pre-processing, and then imported into StarRocks after calculation."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data-pre-processing",children:"Data Pre-processing"}),"\n",(0,s.jsx)(n.p,{children:"The basic process of data pre-processing is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Read data from the upstream data source (HDFS file or Hive table)."}),"\n",(0,s.jsxs)(n.li,{children:["Complete field mapping and calculation for the read data, then generate ",(0,s.jsx)(n.code,{children:"bucket-id"})," based on the partition information."]}),"\n",(0,s.jsx)(n.li,{children:"Generate RollupTree based on the Rollup metadata of StarRocks table."}),"\n",(0,s.jsx)(n.li,{children:"Iterate through the RollupTree and perform hierarchical aggregation operations. The Rollup of the next hierarchy can be calculated from the Rollup of the previous hierarchy."}),"\n",(0,s.jsxs)(n.li,{children:["Each time the aggregation calculation is completed, the data is bucketed according to ",(0,s.jsx)(n.code,{children:"bucket-id"})," and then written to HDFS."]}),"\n",(0,s.jsx)(n.li,{children:"The subsequent Broker will pull the files from HDFS and import them into the StarRocks BE node."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-operations",children:"Basic Operations"}),"\n",(0,s.jsx)(n.h3,{id:"configuring-etl-clusters",children:"Configuring ETL Clusters"}),"\n",(0,s.jsxs)(n.p,{children:["Spark is used as an external computational resource in StarRocks for ETL work. There may be other external resources added to StarRocks, such as Spark/GPU for query, HDFS/S3 for external storage, MapReduce for ETL, etc. Therefore, we introduce ",(0,s.jsx)(n.code,{children:"Resource Management"})," to manage these external resources used by StarRocks."]}),"\n",(0,s.jsx)(n.p,{children:"Before submitting a Spark import job, configure the Spark cluster for performing ETL tasks. The syntax for operation is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- create spark resource\nCREATE EXTERNAL RESOURCE resource_name\nPROPERTIES\n(\n type = spark,\n spark_conf_key = spark_conf_value,\n working_dir = path,\n broker = broker_name,\n broker.property_key = property_value\n);\n\n-- drop spark resource\nDROP RESOURCE resource_name;\n\n-- show resources\nSHOW RESOURCES\nSHOW PROC "/resources";\n\n-- privileges\nGRANT USAGE_PRIV ON RESOURCE resource_name TO user_identityGRANT USAGE_PRIV ON RESOURCE resource_name TO ROLE role_name;\nREVOKE USAGE_PRIV ON RESOURCE resource_name FROM user_identityREVOKE USAGE_PRIV ON RESOURCE resource_name FROM ROLE role_name;\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create resource"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"resource-name"})," is the name of the Spark resource configured in StarRocks."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PROPERTIES"})," are parameters relating to the Spark resource, as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": Resource type, required, currently only supports S     park     ."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"spark"})," Related parameters are as follows."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.master"}),": Required, currently supports yarn."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.submit.deployMode"}),": The deployment mode of the Spark program, required, currently supports both cluster and client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.fs.defaultFS"}),": Required if master is yarn."]}),"\n",(0,s.jsx)(n.li,{children:"Parameters related to yarn resource manager, required if master is yarn."}),"\n",(0,s.jsx)(n.li,{children:"Single point resource manager required"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.yarn.resourcemanager.address"}),": Address of the single point resource manager."]}),"\n",(0,s.jsx)(n.li,{children:"HA resource manager needs to be configured, where either hostname or address is configured."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.yarn.resourcemanager.ha.enabled"}),": Enable the resource manager HA, set to true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.yarn.resourcemanager.ha.rm-ids"}),": list of resource manager logical ids."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.yarn.resourcemanager.hostname.rm-id"}),": For each rm-id, specify the hostname corresponding to the resource manager."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spark.hadoop.yarn.resourcemanager.address.rm-id"}),": For each rm-id, specify ",(0,s.jsx)(n.code,{children:"host:port"})," for the client to submit jobs to."]}),"\n",(0,s.jsxs)(n.li,{children:["Other parameters are optional, refer to ",(0,s.jsx)(n.a,{href:"http://spark.apache.org/docs/latest/configuration.html",children:"Spark Configuration"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"working_dir"}),": The directory used by ETL. Required if      Spark is used as an ETL resource. For example: ",(0,s.jsx)(n.code,{children:"hdfs://host:port/tmp/starrocks"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"broker"}),": Broker name. Required if Spark is used as an ETL resource. You need to use the ",(0,s.jsx)(n.code,{children:"ALTER SYSTEM ADD BROKER"})," command to complete the configuration in advance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"broker.property_key"}),": Information (e.g.authentication information) to be specified when the broker reads the intermediate file generated by the ETL."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"For example"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- yarn cluster mode\nCREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n    "type" = "spark",\n    "spark.master" = "yarn",\n    "spark.submit.deployMode" = "cluster",\n    "spark.jars" = "xxx.jar,yyy.jar",\n    "spark.files" = "/tmp/aaa,/tmp/bbb",\n    "spark.executor.memory" = "1g",\n    "spark.yarn.queue" = "queue0",\n    "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n    "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n    "working_dir" = "hdfs://127.0.0.1:10000/tmp/starrocks",\n    "broker" = "broker0",\n    "broker.username" = "user0",\n    "broker.password" = "password0"\n);\n\n-- yarn HA cluster mode\nCREATE EXTERNAL RESOURCE "spark1"\nPROPERTIES\n(\n    "type" = "spark",\n    "spark.master" = "yarn",\n    "spark.submit.deployMode" = "cluster",\n    "spark.hadoop.yarn.resourcemanager.ha.enabled" = "true",\n    "spark.hadoop.yarn.resourcemanager.ha.rm-ids" = "rm1,rm2",\n    "spark.hadoop.yarn.resourcemanager.hostname.rm1" = "host1",\n    "spark.hadoop.yarn.resourcemanager.hostname.rm2" = "host2",\n    "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n    "working_dir" = "hdfs://127.0.0.1:10000/tmp/starrocks",\n    "broker" = "broker1"\n);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"View resources"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Regular accounts can only view resources to which they have ",(0,s.jsx)(n.code,{children:"USAGE-PRIV"})," access. The root and admin accounts can view all resources."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Resource Permissions"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Resource permissions are managed through ",(0,s.jsx)(n.code,{children:"GRANT REVOKE"}),", which currently only supports ",(0,s.jsx)(n.code,{children:"USAGE-PRIV"})," permissions. You can give ",(0,s.jsx)(n.code,{children:"USAGE-PRIV"})," permissions to a user or a role."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'-- Grant access to spark0 resources to user0\nGRANT USAGE_PRIV ON RESOURCE "spark0" TO "user0"@"%";\n\n-- Grant access to spark0 resources to role0\nGRANT USAGE_PRIV ON RESOURCE "spark0" TO ROLE "role0";\n\n-- Grant access to all resources to user0\nGRANT USAGE_PRIV ON RESOURCE* TO "user0"@"%";\n\n-- Grant access to all resources to role0\nGRANT USAGE_PRIV ON RESOURCE* TO ROLE "role0";\n\n-- Revoke the use privileges of spark0 resources from user user0\nREVOKE USAGE_PRIV ON RESOURCE "spark0" FROM "user0"@"%";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"configuring-spark-client",children:"Configuring Spark Client"}),"\n",(0,s.jsxs)(n.p,{children:["Configure the Spark client for FE so that the latter can submit Spark tasks by executing the ",(0,s.jsx)(n.code,{children:"spark-submit"})," command. It is recommended to use the official version of Spark2 2.4.5 or above     ",(0,s.jsx)(n.a,{href:"https://archive.apache.org/dist/spark/",children:"spark download address"}),". After downloading, please use the following steps to complete the configuration."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure ",(0,s.jsx)(n.code,{children:"SPARK-HOME"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Place the Spark client in a directory on the same machine as the FE, and configure ",(0,s.jsx)(n.code,{children:"spark_home_default_dir"})," in the FE configuration file to this directory, which by default is the ",(0,s.jsx)(n.code,{children:"lib/spark2x"})," path in the FE root directory, and cannot be empty."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Configure SPARK dependency package"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To configure the dependency package, zip and archive all jar files in the jars folder under the Spark client, and configure the ",(0,s.jsx)(n.code,{children:"spark_resource_path"})," item in the FE configuration to this zip file. If this configuration is empty, the FE will try to find the ",(0,s.jsx)(n.code,{children:"lib/spark2x/jars/spark-2x.zip"})," file in the FE root directory. If the FE fails to find it, it will report an error."]}),"\n",(0,s.jsxs)(n.p,{children:["When the spark load job is submitted, the archived dependency files will be uploaded to the remote repository. The default repository path is under the ",(0,s.jsx)(n.code,{children:"working_dir/{cluster_id}"})," directory named with ",(0,s.jsx)(n.code,{children:"--spark-repository--{resource-name}"}),", which means that a resource in the cluster corresponds to a remote repository. The directory structure is referenced as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"---spark-repository--spark0/\n\n   |---archive-1.0.0/\n\n   |        |\\---lib-990325d2c0d1d5e45bf675e54e44fb16-spark-dpp-1.0.0\\-jar-with-dependencies.jar\n\n   |        |\\---lib-7670c29daf535efe3c9b923f778f61fc-spark-2x.zip\n\n   |---archive-1.1.0/\n\n   |        |\\---lib-64d5696f99c379af2bee28c1c84271d5-spark-dpp-1.1.0\\-jar-with-dependencies.jar\n\n   |        |\\---lib-1bbb74bb6b264a270bc7fca3e964160f-spark-2x.zip\n\n   |---archive-1.2.0/\n\n   |        |-...\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the spark dependencies (named ",(0,s.jsx)(n.code,{children:"spark-2x.zip"})," by default), the FE also uploads the DPP dependencies to the remote repository. If all the dependencies submitted by the spark load already exist in the remote repository, then there is no need to upload the dependencies again, saving the time of repeatedly uploading a large number of files each time."]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-yarn-client",children:"Configuring YARN Client"}),"\n",(0,s.jsxs)(n.p,{children:["Configure the yarn client for FE so that the FE can execute      yarn commands to get the status of the running application or      kill it.It is recommended to use the official version of H     adoop2 2.5.2 or above (",(0,s.jsx)(n.a,{href:"https://archive.apache.org/dist/hadoop/common/",children:"hadoop download address"}),"). After downloading, please use the following steps to complete the configuration:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Configure the YARN executable path"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Place the downloaded yarn client in a directory on the same machine as the FE, and configure the ",(0,s.jsx)(n.code,{children:"yarn_client_path"})," item in the FE configuration file to the binary executable file of yarn, which by default is the ",(0,s.jsx)(n.code,{children:"lib/yarn-client/hadoop/bin/yarn"})," path in the FE root directory."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Configure the path to the configuration file needed to generate YARN (optional)"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the FE goes through the yarn client to get the status of the application, or to kill the application, by default StarRocks generates the configuration file required to execute the yarn command in the ",(0,s.jsx)(n.code,{children:"lib/yarn-config"})," path of the FE root directory This path can be modified by configuring the ",(0,s.jsx)(n.code,{children:"yarn_config_dir"})," entry in the FE configuration file, which currently includes ",(0,s.jsx)(n.code,{children:"core-site.xml"})," and ",(0,s.jsx)(n.code,{children:"yarn-site.xml"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"create-import-job",children:"Create Import Job"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"LOAD LABEL load_label\n    (data_desc, ...)\nWITH RESOURCE resource_name \n[resource_properties]\n[PROPERTIES (key1=value1, ... )]\n\n* load_label:\n    db_name.label_name\n\n* data_desc:\n    DATA INFILE ('file_path', ...)\n    [NEGATIVE]\n    INTO TABLE tbl_name\n    [PARTITION (p1, p2)]\n    [COLUMNS TERMINATED BY separator ]\n    [(col1, ...)]\n    [COLUMNS FROM PATH AS (col2, ...)]\n    [SET (k1=f1(xx), k2=f2(xx))]\n    [WHERE predicate]\n\n    DATA FROM TABLE hive_external_tbl\n    [NEGATIVE]\n    INTO TABLE tbl_name\n    [PARTITION (p1, p2)]\n    [SET (k1=f1(xx), k2=f2(xx))]\n    [WHERE predicate]\n\n* resource_properties:\n (key2=value2, ...)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 1"}),": T     he case where the upstream data source is HDFS"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1\n    ),\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file2")\n    INTO TABLE tbl2\n    COLUMNS TERMINATED BY ","\n    (col1, col2)\n    where col1 > 1\n)\nWITH RESOURCE \'spark0\'\n(\n    "spark.executor.memory" = "2g",\n    "spark.shuffle.compress" = "true"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 2"}),": The case where the upstream data source is Hive."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Step 1: Create a new hive resource"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE hive0\nproperties\n( \n    "type" = "hive",\n    "hive.metastore.uris" = "thrift://0.0.0.0:8080"\n);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Step 2: Create a new hive external table"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE EXTERNAL TABLE hive_t1\n(\n    k1 INT,\n    K2 SMALLINT,\n    k3 varchar(50),\n    uuid varchar(100)\n)\nENGINE=hive\nproperties\n( \n    "resource" = "hive0",\n    "database" = "tmp",\n    "table" = "t1"\n);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Step 3: Submit the load command, requiring that the columns in the imported StarRocks table exist in the hive external table."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    DATA FROM TABLE hive_t1\n    INTO TABLE tbl1\n    SET\n    (\n        uuid=bitmap_dict(uuid)\n    )\n)\nWITH RESOURCE \'spark0\'\n(\n    "spark.executor.memory" = "2g",\n    "spark.shuffle.compress" = "true"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Introduction to the parameters in the Spark load:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Label"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Label of the import job. Each import job has a Label that is unique within the database, following the same rules as broker load."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Data description class parameters"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Currently supported data sources are CSV and Hive table. Other rules are the same as broker load."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Import Job Parameters"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Import job parameters refer to the parameters belonging to the ",(0,s.jsx)(n.code,{children:"opt_properties"})," section of the import statement. These parameters are applicable to the entire import job. The rules are the same as broker load."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Spark Resource Parameters"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Spark resources need to be configured into StarRocks in advance and users need to be given USAGE-PRIV permissions before they can apply the resources to Spark load.\nSpark resource parameters can be set when the user has a temporary need, such as adding resources for a job and modifying Spark configs. The setting only takes effect on this job and does not affect the existing configurations in the StarRocks cluster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'WITH RESOURCE \'spark0\'\n(\n    "spark.driver.memory" = "1g",\n    "spark.executor.memory" = "3g"\n)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Import when the data source is Hive"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, to use a Hive table in the import process, you need to create an external table of the ",(0,s.jsx)(n.code,{children:"Hive"})," type and then specify its name when submitting the import command."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Import process to build a global dictionary"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the load command, you can specify the required fields for building the global dictionary in the following format: ",(0,s.jsx)(n.code,{children:"StarRocks field name=bitmap_dict(hive table field name)"})," Note that currently ",(0,s.jsx)(n.strong,{children:"the global dictionary is only supported when the upstream data source is a Hive table"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"viewing-import-jobs",children:"Viewing Import Jobs"}),"\n",(0,s.jsxs)(n.p,{children:["The Spark load import is asynchronous, as is the broker load. The user must record the label of the import job and use it in the ",(0,s.jsx)(n.code,{children:"SHOW LOAD"})," command to view the import results. The command to view the import is common to all import methods. The example is as follows."]}),"\n",(0,s.jsx)(n.p,{children:"Refer to Broker Load for a detailed explanation of returned parameters.The differences are as follows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> show load order by createtime desc limit 1\\G\n*************************** 1. row ***************************\n  JobId: 76391\n  Label: label1\n  State: FINISHED\n Progress: ETL:100%; LOAD:100%\n  Type: SPARK\n EtlInfo: unselected.rows=4; dpp.abnorm.ALL=15; dpp.norm.ALL=28133376\n TaskInfo: cluster:cluster0; timeout(s):10800; max_filter_ratio:5.0E-5\n ErrorMsg: N/A\n CreateTime: 2019-07-27 11:46:42\n EtlStartTime: 2019-07-27 11:46:44\n EtlFinishTime: 2019-07-27 11:49:44\n LoadStartTime: 2019-07-27 11:49:44\nLoadFinishTime: 2019-07-27 11:50:16\n  URL: http://1.1.1.1:8089/proxy/application_1586619723848_0035/\n JobDetails: {"ScannedRows":28133395,"TaskNumber":1,"FileNumber":1,"FileSize":200000}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"State"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The current stage of the imported job.\nPENDING: The job is committed.\nETL: Spark ETL is committed.\nLOADING: The FE schedule an BE to execute push operation.\nFINISHED: The push is completed and the version is effective."}),"\n",(0,s.jsxs)(n.p,{children:["There are two final stages of the import job \u2013      ",(0,s.jsx)(n.code,{children:"CANCELLED"})," and ",(0,s.jsx)(n.code,{children:"FINISHED"}),", both indicating the load job is completed. ",(0,s.jsx)(n.code,{children:"CANCELLED"})," indicates import failure and ",(0,s.jsx)(n.code,{children:"FINISHED"})," indicates import success."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Progress"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Description of the import job progress. There are two types of progress \u2013ETL and LOAD, which correspond to the two phases of the import process, ETL and LOADING."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The range of progress for LOAD is 0~100%."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"LOAD progress = the number of currently completed tablets of all replications imports / the total number of tablets of this import job * 100%"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If all tables have been imported, the LOAD progress is 99%, and changes to 100% when the import enters the final validation phase."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The import progress is not linear. If there is no change in progress for a period of time, it does not mean that the import is not executing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The type of the import job. SPARK for spark load."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"CreateTime/EtlStartTime/EtlFinishTime/LoadStartTime/LoadFinishTime"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These values represent the time when the import was created, when the ETL phase started, when the ETL phase completed,      when the LOADING phase started, and when the entire import job was completed."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"JobDetails"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Displays the detailed running status of the job, including the number of imported files, total size (in bytes), number of subtasks, number of raw rows being processed, etc. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' {"ScannedRows":139264,"TaskNumber":1,"FileNumber":1,"FileSize":940754064}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"URL"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can copy the input to your browser to access  the web interface of the corresponding application."}),"\n",(0,s.jsx)(n.h3,{id:"view-spark-launcher-commit-logs",children:"View Spark Launcher commit logs"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes users need to view the detailed logs generated during a spark job commit. By  default, the logs are saved in the path ",(0,s.jsx)(n.code,{children:"log/spark_launcher_log"})," in the FE root directory      named as ",(0,s.jsx)(n.code,{children:"spark-launcher-{load-job-id}-{label}.log"}),". The logs are      saved in this directory for a period of time and will be erased when the import information in FE metadata is cleaned up. The default retention time is 3 days."]}),"\n",(0,s.jsx)(n.h3,{id:"cancel-import",children:"Cancel Import"}),"\n",(0,s.jsxs)(n.p,{children:["When the Spark load job status is not ",(0,s.jsx)(n.code,{children:"CANCELLED"})," or ",(0,s.jsx)(n.code,{children:"FINISHED"}),", it can be cancelled manually by the user by specifying the Label of the import job."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"related-system-configurations",children:"Related System Configurations"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FE Configuration:"})," The following configuration is the system-level configuration of Spark load, which applies to all Spark load import jobs. The configuration values can be adjusted mainly by modifying ",(0,s.jsx)(n.code,{children:"fe.conf"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"enable-spark-load: Enable Spark load and resource creation with a default value of false."}),"\n",(0,s.jsx)(n.li,{children:"spark-load-default-timeout-second: The default timeout for the job is 259200 seconds (3 days)."}),"\n",(0,s.jsxs)(n.li,{children:["spark-home-default-dir: The Spark client path (",(0,s.jsx)(n.code,{children:"fe/lib/spark2x"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"spark-resource-path: The path to the packaged S     park dependency file (empty by default)."}),"\n",(0,s.jsxs)(n.li,{children:["spark-launcher-log-dir: The directory where the commit log of the Spark client is stored (",(0,s.jsx)(n.code,{children:"fe/log/spark-launcher-log"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["yarn-client-path: The path to the yarn binary executable (",(0,s.jsx)(n.code,{children:"fe/lib/yarn-client/hadoop/bin/yarn"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["yarn-config-dir: Yarn's configuration file path (",(0,s.jsx)(n.code,{children:"fe/lib/yarn-config"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.p,{children:"The most suitable scenario for using Spark load is when the raw data is in the file system (HDFS) and the data volume is in the tens of GB to TB level. Use Stream Load or Broker Load for smaller data volumes."}),"\n",(0,s.jsxs)(n.p,{children:["For the full spark load import example, refer to the demo on github: ",(0,s.jsx)(n.a,{href:"https://github.com/StarRocks/demo/blob/master/docs/03_sparkLoad2StarRocks.md",children:"https://github.com/StarRocks/demo/blob/master/docs/03_sparkLoad2StarRocks.md"})]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Error: When running with master 'yarn' either HADOOP-CONF-DIR or YARN-CONF-DIR must be set in the environment."})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Using Spark Load without configuring the ",(0,s.jsx)(n.code,{children:"HADOOP-CONF-DIR"})," environment variable in ",(0,s.jsx)(n.code,{children:"spark-env.sh"})," of the Spark client.."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'Error: Cannot run program "xxx/bin/spark-submit": error=2, No such file or directory'})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spark_home_default_dir"})," configuration item does not specify the Spark client root directory when using Spark Load."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Error: File xxx/jars/spark-2x.zip does not exist."})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"spark-resource-path"})," configuration item does not point to the packed zip file when using Spark load."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Error: yarn client does not exist in path: xxx/yarn-client/hadoop/bin/yarn"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The yarn-client-path configuration item does not specify the yarn executable when using Spark load."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ERROR: Cannot execute hadoop-yarn/bin/... /libexec/yarn-config.sh"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When using Hadoop with CDH, you need to configure the ",(0,s.jsx)(n.code,{children:"HADOOP_LIBEXEC_DIR"})," environment variable.\nSince ",(0,s.jsx)(n.code,{children:"hadoop-yarn"})," and hadoop directories are different, the default ",(0,s.jsx)(n.code,{children:"libexec"})," directory will look for ",(0,s.jsx)(n.code,{children:"hadoop-yarn/bin/... /libexec"}),", while ",(0,s.jsx)(n.code,{children:"libexec"})," is in the hadoop directory.\nThe ```yarn application status`` command to get the Spark task status reported an error causing the import job to fail."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>o,ah:()=>t});var s=r(67294);const i=s.createContext({});function t(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:t(e),s.createElement(i.Provider,{value:o},n)}}}]);