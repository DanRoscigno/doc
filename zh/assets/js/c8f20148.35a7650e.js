"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[6336],{27367:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=n(85893),t=n(11151);const l={displayed_sidebar:"Chinese31"},s="\u914d\u7f6e Microsoft Azure Storage \u8ba4\u8bc1\u4fe1\u606f",c={id:"integrations/authenticate_to_azure_storage",title:"\u914d\u7f6e Microsoft Azure Storage \u8ba4\u8bc1\u4fe1\u606f",description:"StarRocks \u4ece 3.0 \u7248\u672c\u8d77\u652f\u6301\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u96c6\u6210 Microsoft Azure Storage\uff08Azure Blob Storage \u6216 Azure Data Lake Storage\uff09\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/integrations/authenticate_to_azure_storage.md",sourceDirName:"integrations",slug:"/integrations/authenticate_to_azure_storage",permalink:"/doc/zh/docs/integrations/authenticate_to_azure_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/authenticate_to_azure_storage.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u914d\u7f6e AWS \u8ba4\u8bc1\u4fe1\u606f",permalink:"/doc/zh/docs/integrations/authenticate_to_aws_resources"},next:{title:"\u914d\u7f6e GCS \u8ba4\u8bc1\u4fe1\u606f",permalink:"/doc/zh/docs/integrations/authenticate_to_gcs"}},d={},i=[{value:"Blob Storage",id:"blob-storage",level:2},{value:"\u57fa\u4e8e Shared Key \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-shared-key-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"External Catalog",id:"external-catalog",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868",level:4},{value:"Broker Load",id:"broker-load",level:4},{value:"\u57fa\u4e8e SAS Token \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-sas-token-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"External Catalog",id:"external-catalog-1",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-1",level:4},{value:"Broker load",id:"broker-load-1",level:4},{value:"Data Lake Storage Gen1",id:"data-lake-storage-gen1",level:2},{value:"\u57fa\u4e8e Managed Service Identity \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-managed-service-identity-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"External Catalog",id:"external-catalog-2",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-2",level:4},{value:"Broker Load",id:"broker-load-2",level:4},{value:"\u57fa\u4e8e Service Principal \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-service-principal-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"External Catalog",id:"external-catalog-3",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-3",level:4},{value:"Broker Load",id:"broker-load-3",level:4},{value:"Data Lake Storage Gen2",id:"data-lake-storage-gen2",level:2},{value:"\u57fa\u4e8e Managed Identity \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-managed-identity-\u8ba4\u8bc1\u9274\u6743",level:3},{value:"External Catalog",id:"external-catalog-4",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-4",level:4},{value:"Broker Load",id:"broker-load-4",level:4},{value:"\u57fa\u4e8e Shared Key \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-shared-key-\u8ba4\u8bc1\u9274\u6743-1",level:3},{value:"External Catalog",id:"external-catalog-5",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-5",level:4},{value:"Broker Load",id:"broker-load-5",level:4},{value:"\u57fa\u4e8e Service Principal \u8ba4\u8bc1\u9274\u6743",id:"\u57fa\u4e8e-service-principal-\u8ba4\u8bc1\u9274\u6743-1",level:3},{value:"External Catalog",id:"external-catalog-6",level:4},{value:"\u6587\u4ef6\u5916\u90e8\u8868",id:"\u6587\u4ef6\u5916\u90e8\u8868-6",level:4},{value:"Broker Load",id:"broker-load-6",level:4}];function o(e){const a=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",h3:"h3",h4:"h4",pre:"pre"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"\u914d\u7f6e-microsoft-azure-storage-\u8ba4\u8bc1\u4fe1\u606f",children:"\u914d\u7f6e Microsoft Azure Storage \u8ba4\u8bc1\u4fe1\u606f"}),"\n",(0,r.jsx)(a.p,{children:"StarRocks \u4ece 3.0 \u7248\u672c\u8d77\u652f\u6301\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u96c6\u6210 Microsoft Azure Storage\uff08Azure Blob Storage \u6216 Azure Data Lake Storage\uff09\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\u4ece Azure Storage \u6279\u91cf\u5bfc\u5165\u6570\u636e\u3002"}),"\n",(0,r.jsx)(a.li,{children:"\u4ece Azure Storage \u5907\u4efd\u6570\u636e\u3001\u6216\u628a\u6570\u636e\u6062\u590d\u5230 Azure Storage\u3002"}),"\n",(0,r.jsx)(a.li,{children:"\u67e5\u8be2 Azure Storage \u4e2d\u7684 Parquet \u6216 ORC \u683c\u5f0f\u7684\u6570\u636e\u6587\u4ef6\u3002"}),"\n",(0,r.jsxs)(a.li,{children:["\u67e5\u8be2 Azure Storage \u4e2d\u7684 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive"}),"\u3001",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/iceberg_catalog",children:"Iceberg"}),"\u3001",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hudi_catalog",children:"Hudi"}),"\u3001\u6216 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/deltalake_catalog",children:"Delta Lake"})," \u8868\u3002"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"StarRocks \u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u7c7b\u578b\u7684 Azure \u5b58\u50a8\u8d26\u53f7\u6765\u8bbf\u95ee Azure Storage\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Azure Blob Storage"}),"\n",(0,r.jsx)(a.li,{children:"Azure Data Lake Storage Gen1"}),"\n",(0,r.jsx)(a.li,{children:"Azure Data Lake Storage Gen2"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["\u672c\u6587\u6863\u4ee5 Hive catalog\u3001\u6587\u4ef6\u5916\u90e8\u8868\u548c Broker Load \u4e3a\u4f8b\uff0c\u4ecb\u7ecd StarRocks \u5728\u5404\u5e94\u7528\u573a\u666f\u4e0b\u5982\u4f55\u901a\u8fc7\u4e0d\u540c\u7c7b\u578b\u7684\u5b58\u50a8\u8d26\u53f7\u6765\u8bbf\u95ee Azure Storage\u3002\u6709\u5173\u4e0b\u9762\u793a\u4f8b\u4e2d\u51fa\u73b0\u7684\u53c2\u6570\u8be6\u89e3\uff0c\u53c2\u89c1 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/catalog/hive_catalog",children:"Hive catalog"}),"\u3001",(0,r.jsx)(a.a,{href:"/doc/zh/docs/data_source/file_external_table",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\u548c ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"Broker Load"}),"\u3002"]}),"\n",(0,r.jsx)(a.h2,{id:"blob-storage",children:"Blob Storage"}),"\n",(0,r.jsx)(a.p,{children:"StarRocks \u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u8ba4\u8bc1\u65b9\u5f0f\u6765\u8bbf\u95ee Blob Storage\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Shared Key"}),"\n",(0,r.jsx)(a.li,{children:"SAS Token"}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsx)(a.p,{children:"\u4ece Blob Storage \u5bfc\u5165\u6570\u636e\u6216\u76f4\u63a5\u67e5\u8be2 Blob Storage \u4e2d\u7684\u6570\u636e\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u4f7f\u7528 wasb \u6216 wasbs \u4f5c\u4e3a\u6587\u4ef6\u534f\u8bae\u8bbf\u95ee\u76ee\u6807\u6570\u636e\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\u5982\u679c\u60a8\u7684\u5b58\u50a8\u8d26\u53f7\u652f\u6301\u901a\u8fc7 HTTP \u534f\u8bae\u8fdb\u884c\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528 wasb \u6587\u4ef6\u534f\u8bae\uff0c\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(a.code,{children:"wasb://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/"}),"\u3002"]}),"\n",(0,r.jsxs)(a.li,{children:["\u5982\u679c\u60a8\u7684\u5b58\u50a8\u8d26\u53f7\u652f\u6301\u901a\u8fc7 HTTPS \u534f\u8bae\u8fdb\u884c\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528 wasbs \u6587\u4ef6\u534f\u8bae\uff0c\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(a.code,{children:"wasbs://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-shared-key-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Shared Key \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.blob.storage_account"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.blob.shared_key"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.blob.storage_account"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.shared_key"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e  ",(0,r.jsx)(a.code,{children:"azure.blob.storage_account"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.shared_key"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*")\n    INTO TABLE test_ingestion_2\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.blob.storage_account" = "<blob_storage_account_name>",\n    "azure.blob.shared_key" = "<blob_storage_account_shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-sas-token-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e SAS Token \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-1",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.blob.account_name"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.container_name"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.blob.sas_token"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-1",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.blob.account_name"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.container_name"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.sas_token"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-1",children:"Broker load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.blob.account_name"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.container_name"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.blob.sas_token"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("wasb[s]://<container>@<storage_account>.blob.core.windows.net/<path>/<file_name>/*")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.blob.account_name" = "<blob_storage_account_name>",\n    "azure.blob.container_name" = "<blob_container_name>",\n    "azure.blob.sas_token" = "<blob_storage_account_SAS_token>"\n);\n'})}),"\n",(0,r.jsx)(a.h2,{id:"data-lake-storage-gen1",children:"Data Lake Storage Gen1"}),"\n",(0,r.jsx)(a.p,{children:"StarRocks \u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u8ba4\u8bc1\u65b9\u5f0f\u6765\u8bbf\u95ee Data Lake Storage Gen1\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Managed Service Identity"}),"\n",(0,r.jsx)(a.li,{children:"Service Principal"}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(a.p,{children:["\u4ece Azure Data Lake Storage Gen1 \u5bfc\u5165\u6570\u636e\u6216\u76f4\u63a5\u67e5\u8be2 Azure Data Lake Storage Gen1 \u4e2d\u7684\u6570\u636e\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u4f7f\u7528 adl \u4f5c\u4e3a\u6587\u4ef6\u534f\u8bae\u8bbf\u95ee\u76ee\u6807\u6570\u636e\uff0c\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(a.code,{children:"adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-managed-service-identity-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Managed Service Identity \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-2",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-2",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-2",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.use_managed_service_identity"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls1.use_managed_service_identity" = "true"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-service-principal-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Service Principal \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-3",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_credential"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-3",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_credential"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>",\n    "format" = "ORC",\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-3",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_credential"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls1.oauth2_endpoint"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adl://<data_lake_storage_gen1_name>.azuredatalakestore.net/<path>/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls1.oauth2_client_id" = "<application_client_id>",\n    "azure.adls1.oauth2_credential" = "<application_client_credential>",\n    "azure.adls1.oauth2_endpoint" = "<OAuth_2.0_authorization_endpoint_v2>"\n);\n'})}),"\n",(0,r.jsx)(a.h2,{id:"data-lake-storage-gen2",children:"Data Lake Storage Gen2"}),"\n",(0,r.jsx)(a.p,{children:"StarRocks \u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u8ba4\u8bc1\u65b9\u5f0f\u6765\u8bbf\u95ee Data Lake Storage Gen2\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Managed Identity"}),"\n",(0,r.jsx)(a.li,{children:"Shared Key"}),"\n",(0,r.jsx)(a.li,{children:"Service Principal"}),"\n"]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsx)(a.p,{children:"\u4ece Data Lake Storage Gen2 \u5bfc\u5165\u6570\u636e\u6216\u76f4\u63a5\u67e5\u8be2 Azure Data Lake Storage Gen2 \u4e2d\u7684\u6570\u636e\u6587\u4ef6\u65f6\uff0c\u9700\u8981\u4f7f\u7528 abfs \u6216 abfss \u4f5c\u4e3a\u6587\u4ef6\u534f\u8bae\u8bbf\u95ee\u76ee\u6807\u6570\u636e\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\u5982\u679c\u60a8\u7684\u5b58\u50a8\u8d26\u53f7\u652f\u6301\u901a\u8fc7 HTTP \u534f\u8bae\u8fdb\u884c\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528 abfs \u6587\u4ef6\u534f\u8bae\uff0c\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(a.code,{children:"abfs://<container>@<storage_account>.dfs.core.windows.net/<file_name>"}),"\u3002"]}),"\n",(0,r.jsxs)(a.li,{children:["\u5982\u679c\u60a8\u7684\u5b58\u50a8\u8d26\u53f7\u652f\u6301\u901a\u8fc7 HTTPS \u534f\u8bae\u8fdb\u884c\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528 abfss \u6587\u4ef6\u534f\u8bae\uff0c\u6587\u4ef6\u8def\u5f84\u683c\u5f0f\u4e3a ",(0,r.jsx)(a.code,{children:"abfss://<container>@<storage_account>.dfs.core.windows.net/<file_name>"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-managed-identity-\u8ba4\u8bc1\u9274\u6743",children:"\u57fa\u4e8e Managed Identity \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.p,{children:"\u5982\u679c\u9009\u62e9 Managed Identity \u9274\u6743\u65b9\u5f0f\uff0c\u60a8\u5fc5\u987b\u63d0\u524d\u5b8c\u6210\u5982\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\u6839\u636e\u8ba4\u8bc1\u8981\u6c42\uff0c\u5bf9 StarRocks \u90e8\u7f72\u6240\u5728\u7684 VM \u8fdb\u884c\u7f16\u8f91\u3002"}),"\n",(0,r.jsx)(a.li,{children:"\u5728\u8fd9\u4e9b VM \u4e0a\u6dfb\u52a0 Managed Identity\u3002"}),"\n",(0,r.jsxs)(a.li,{children:["\u786e\u4fdd\u6dfb\u52a0\u7684 Managed Identity \u7ed1\u5b9a\u4e86 ",(0,r.jsx)(a.strong,{children:"Storage Blob Data Reader"})," \u89d2\u8272\uff08\u8be5\u89d2\u8272\u62e5\u6709\u8bfb\u53d6\u5b58\u50a8\u8d26\u53f7\u5185\u6570\u636e\u7684\u6743\u9650\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-4",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-4",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-4",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_use_managed_identity"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_tenant_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.oauth2_use_managed_identity" = "true",\n    "azure.adls2.oauth2_tenant_id" = "<service_principal_tenant_id>",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-shared-key-\u8ba4\u8bc1\u9274\u6743-1",children:"\u57fa\u4e8e Shared Key \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-5",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.storage_account"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.adls2.shared_key"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-5",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.storage_account"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.shared_key"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-5",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.storage_account"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.shared_key"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.storage_account" = "<storage_account_name>",\n    "azure.adls2.shared_key" = "<shared_key>"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"\u57fa\u4e8e-service-principal-\u8ba4\u8bc1\u9274\u6743-1",children:"\u57fa\u4e8e Service Principal \u8ba4\u8bc1\u9274\u6743"}),"\n",(0,r.jsx)(a.p,{children:"\u5982\u679c\u9009\u62e9 Service Principal \u8ba4\u8bc1\u65b9\u5f0f\uff0c\u60a8\u9700\u8981\u63d0\u524d\u521b\u5efa\u4e00\u4e2a Service Principal\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u89d2\u8272\u5206\u914d\u6761\u4ef6 (Role Assignment)\u3001\u5e76\u628a\u8be5\u89d2\u8272\u5206\u914d\u6761\u4ef6\u6dfb\u52a0\u5230\u5b58\u50a8\u8d26\u53f7\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u60a8\u901a\u8fc7\u521b\u5efa\u7684 Service Principal \u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u5b58\u50a8\u8d26\u53f7\u5185\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(a.h4,{id:"external-catalog-6",children:"External Catalog"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_EXTERNAL_CATALOG",children:"CREATE EXTERNAL CATALOG"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"})," \u548c ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"}),"\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_azure\nPROPERTIES\n(\n    "type" = "hive", \n    "hive.metastore.uris" = "thrift://10.1.0.18:9083",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"\u6587\u4ef6\u5916\u90e8\u8868-6",children:"\u6587\u4ef6\u5916\u90e8\u8868"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"path"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE external_table_azure\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "abfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>",\n    "format" = "ORC",\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})}),"\n",(0,r.jsx)(a.h4,{id:"broker-load-6",children:"Broker Load"}),"\n",(0,r.jsxs)(a.p,{children:["\u5728 ",(0,r.jsx)(a.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"LOAD LABEL"})," \u8bed\u53e5\u4e2d\uff0c\u6309\u5982\u4e0b\u914d\u7f6e ",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_id"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_secret"}),"\u3001",(0,r.jsx)(a.code,{children:"azure.adls2.oauth2_client_endpoint"})," \u548c\u6587\u4ef6\u8def\u5f84 (",(0,r.jsx)(a.code,{children:"DATA INFILE"}),")\uff1a"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-SQL",children:'LOAD LABEL test_db.label000\n(\n    DATA INFILE("adfs[s]://<container>@<storage_account>.dfs.core.windows.net/<file_name>")\n    INTO TABLE target_table\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "azure.adls2.oauth2_client_id" = "<service_client_id>",\n    "azure.adls2.oauth2_client_secret" = "<service_principal_client_secret>",\n    "azure.adls2.oauth2_client_endpoint" = "<service_principal_client_endpoint>"\n);\n'})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>c,ah:()=>l});var r=n(67294);const t=r.createContext({});function l(e){const a=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:l(e),r.createElement(t.Provider,{value:c},a)}}}]);