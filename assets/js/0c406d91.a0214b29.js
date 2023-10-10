"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60935],{74158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(85893),c=n(11151);const s={},r="Authenticate to Google Cloud Storage",i={id:"integrations/authenticate_to_gcs",title:"Authenticate to Google Cloud Storage",description:"Authentication methods",source:"@site/versioned_docs/version-3.1/integrations/authenticate_to_gcs.md",sourceDirName:"integrations",slug:"/integrations/authenticate_to_gcs",permalink:"/docs/integrations/authenticate_to_gcs",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/authenticate_to_gcs.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Authenticate to Microsoft Azure Storage",permalink:"/docs/integrations/authenticate_to_azure_storage"},next:{title:"BI Tools",permalink:"/docs/category/bi-tools"}},o={},l=[{value:"Authentication methods",id:"authentication-methods",level:2},{value:"Scenarios",id:"scenarios",level:2},{value:"External catalog",id:"external-catalog",level:3},{value:"File external table",id:"file-external-table",level:3},{value:"Broker load",id:"broker-load",level:3},{value:"Parameters",id:"parameters",level:2},{value:"VM-based authentication",id:"vm-based-authentication",level:3},{value:"Service account-based authentication",id:"service-account-based-authentication",level:3},{value:"Impersonation-based authentication",id:"impersonation-based-authentication",level:3},{value:"Make a VM instance impersonate a service account",id:"make-a-vm-instance-impersonate-a-service-account",level:4},{value:"Make a service account impersonate another service account",id:"make-a-service-account-impersonate-another-service-account",level:4}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code",blockquote:"blockquote",strong:"strong",h3:"h3",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"authenticate-to-google-cloud-storage",children:"Authenticate to Google Cloud Storage"}),"\n",(0,a.jsx)(t.h2,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,a.jsx)(t.p,{children:"From v3.0 onwards, StarRocks supports using one of the following authentication methods to access Google Cloud Storage (GCS):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"VM-based authentication"}),"\n",(0,a.jsx)(t.p,{children:"Use the credential attached to Google Cloud Compute Engine to authenticate GCS."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Service account-based authentication"}),"\n",(0,a.jsx)(t.p,{children:"Use a service account to authenticate GCS."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Impersonation-based authentication"}),"\n",(0,a.jsx)(t.p,{children:"Make a service account or virtual machine (VM) instance impersonate another service account."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"scenarios",children:"Scenarios"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks can authenticate to GCS in the following scenarios:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Batch load data from GCS."}),"\n",(0,a.jsx)(t.li,{children:"Back up data from and restore data to GCS."}),"\n",(0,a.jsx)(t.li,{children:"Query Parquet and ORC files in GCS."}),"\n",(0,a.jsxs)(t.li,{children:["Query ",(0,a.jsx)(t.a,{href:"/docs/data_source/catalog/hive_catalog",children:"Hive"}),", ",(0,a.jsx)(t.a,{href:"/docs/data_source/catalog/iceberg_catalog",children:"Iceberg"}),", ",(0,a.jsx)(t.a,{href:"/docs/data_source/catalog/hudi_catalog",children:"Hudi"}),", and ",(0,a.jsx)(t.a,{href:"/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake"})," tables in GCS."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In this topic, ",(0,a.jsx)(t.a,{href:"/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),", ",(0,a.jsx)(t.a,{href:"/docs/data_source/file_external_table",children:"file external table"}),", and ",(0,a.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"Broker Load"})," are used as examples to show how StarRocks integrates with GCS in different scenarios. For information about ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"}),' in the examples, see the "',(0,a.jsx)(t.a,{href:"/docs/integrations/authenticate_to_gcs#parameters",children:"Parameters"}),'" section of this topic.']}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,a.jsxs)(t.p,{children:["StarRocks supports loading data or directly querying files from GCS only according to the gs protocol. Therefore, when you load data or query files from GCS, you must include ",(0,a.jsx)(t.code,{children:"gs"})," as a prefix in the file path."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"external-catalog",children:"External catalog"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/data-definition/CREATE%20EXTERNAL%20CATALOG",children:"CREATE EXTERNAL CATALOG"})," statement to create a Hive catalog named ",(0,a.jsx)(t.code,{children:"hive_catalog_gcs"})," as follows, in order to query files from GCS:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_gcs\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://34.132.15.127:9083",\n    StorageCredentialParams\n);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"file-external-table",children:"File external table"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/data-definition/CREATE%20TABLE",children:"CREATE EXTERNAL TABLE"})," statement to create a file external table named ",(0,a.jsx)(t.code,{children:"external_table_gcs"})," as follows, in order to query a data file named ",(0,a.jsx)(t.code,{children:"test_file_external_tbl"})," from GCS without any metastore:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_gcs\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "gs:////test-gcs/test_file_external_tbl",\n    "format" = "ORC",\n    StorageCredentialParams\n);\n'})}),"\n",(0,a.jsx)(t.h3,{id:"broker-load",children:"Broker load"}),"\n",(0,a.jsxs)(t.p,{children:["Use the ",(0,a.jsx)(t.a,{href:"/docs/sql-reference/sql-statements/data-manipulation/BROKER%20LOAD",children:"LOAD LABEL"})," statement to create a Broker Load job whose label is ",(0,a.jsx)(t.code,{children:"test_db.label000"}),", in order to batch load data from GCS into the StarRocks table ",(0,a.jsx)(t.code,{children:"target_table"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("gs://bucket_gcs/test_brokerload_ingestion/*")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    StorageCredentialParams\n);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"StorageCredentialParams"})," represents a parameter set that describes how to authenticate to GCS with different authentication methods."]}),"\n",(0,a.jsx)(t.h3,{id:"vm-based-authentication",children:"VM-based authentication"}),"\n",(0,a.jsxs)(t.p,{children:["If your StarRocks cluster is deployed on a VM instance hosted on Google Cloud Platform (GCP) and you want to use that VM instance to authenticate GCS, configure ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:'"gcp.gcs.use_compute_engine_service_account" = "true"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The following table describes the parameters you need to configure in ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Parameter"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Default value"})}),(0,a.jsxs)(t.th,{children:[(0,a.jsx)(t.strong,{children:"Value"})," ",(0,a.jsx)(t.strong,{children:"example"})]}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.use_compute_engine_service_account"}),(0,a.jsx)(t.td,{children:"false"}),(0,a.jsx)(t.td,{children:"true"}),(0,a.jsx)(t.td,{children:"Specifies whether to directly use the service account that is bound to your Compute Engine."})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"service-account-based-authentication",children:"Service account-based authentication"}),"\n",(0,a.jsxs)(t.p,{children:["If you directly use a service account to authenticate GCS, configure ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:'"gcp.gcs.service_account_email" = "<google_service_account_email>",\n"gcp.gcs.service_account_private_key_id" = "<google_service_private_key_id>",\n"gcp.gcs.service_account_private_key" = "<google_service_private_key>"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The following table describes the parameters you need to configure in ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Parameter"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Default value"})}),(0,a.jsxs)(t.th,{children:[(0,a.jsx)(t.strong,{children:"Value"})," ",(0,a.jsx)(t.strong,{children:"example"})]}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_email"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsxs)(t.td,{children:['"',(0,a.jsx)(t.code,{children:"user@hello.iam.gserviceaccount.com"}),'"']}),(0,a.jsx)(t.td,{children:"The email address in the JSON file generated at the creation of the service account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_private_key_id"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"'}),(0,a.jsx)(t.td,{children:"The private key ID in the JSON file generated at the creation of the service account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_private_key"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\\n"'}),(0,a.jsx)(t.td,{children:"The private key in the JSON file generated at the creation of the service account."})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"impersonation-based-authentication",children:"Impersonation-based authentication"}),"\n",(0,a.jsx)(t.h4,{id:"make-a-vm-instance-impersonate-a-service-account",children:"Make a VM instance impersonate a service account"}),"\n",(0,a.jsxs)(t.p,{children:["If your StarRocks cluster is deployed on a VM instance hosted on GCP and you want to make that VM instance impersonate a service account, so as to make StarRocks inherit the privileges from the service account to access GCS, configure ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:'"gcp.gcs.use_compute_engine_service_account" = "true",\n"gcp.gcs.impersonation_service_account" = "<assumed_google_service_account_email>"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The following table describes the parameters you need to configure in ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Parameter"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Default value"})}),(0,a.jsxs)(t.th,{children:[(0,a.jsx)(t.strong,{children:"Value"})," ",(0,a.jsx)(t.strong,{children:"example"})]}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.use_compute_engine_service_account"}),(0,a.jsx)(t.td,{children:"false"}),(0,a.jsx)(t.td,{children:"true"}),(0,a.jsx)(t.td,{children:"Specifies whether to directly use the service account that is bound to your Compute Engine."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.impersonation_service_account"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"hello"'}),(0,a.jsx)(t.td,{children:"The service account that you want to impersonate."})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"make-a-service-account-impersonate-another-service-account",children:"Make a service account impersonate another service account"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to make a service account (temporarily named as meta service account) impersonate another service account (temporarily named as data service account) and make StarRocks inherit the privileges from the data service account to access GCS, configure ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"})," as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain",children:'"gcp.gcs.service_account_email" = "<google_service_account_email>",\n"gcp.gcs.service_account_private_key_id" = "<meta_google_service_account_email>",\n"gcp.gcs.service_account_private_key" = "<meta_google_service_account_email>",\n"gcp.gcs.impersonation_service_account" = "<data_google_service_account_email>"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The following table describes the parameters you need to configure in ",(0,a.jsx)(t.code,{children:"StorageCredentialParams"}),"."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Parameter"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Default value"})}),(0,a.jsxs)(t.th,{children:[(0,a.jsx)(t.strong,{children:"Value"})," ",(0,a.jsx)(t.strong,{children:"example"})]}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Description"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_email"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsxs)(t.td,{children:['"',(0,a.jsx)(t.code,{children:"user@hello.iam.gserviceaccount.com"}),'"']}),(0,a.jsx)(t.td,{children:"The email address in the JSON file generated at the creation of the meta service account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_private_key_id"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"61d257bd8479547cb3e04f0b9b6b9ca07af3b7ea"'}),(0,a.jsx)(t.td,{children:"The private key ID in the JSON file generated at the creation of the meta service account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.service_account_private_key"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"-----BEGIN PRIVATE KEY----xxxx-----END PRIVATE KEY-----\\n"'}),(0,a.jsx)(t.td,{children:"The private key in the JSON file generated at the creation of the meta service account."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"gcp.gcs.impersonation_service_account"}),(0,a.jsx)(t.td,{children:'""'}),(0,a.jsx)(t.td,{children:'"hello"'}),(0,a.jsx)(t.td,{children:"The data service account that you want to impersonate."})]})]})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var a=n(67294);const c=a.createContext({});function s(e){const t=a.useContext(c);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:s(e),a.createElement(c.Provider,{value:i},t)}}}]);