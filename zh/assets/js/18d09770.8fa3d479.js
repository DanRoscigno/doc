"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26093],{65157:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=n(85893),l=n(11151);const d={},c="CREATE STORAGE VOLUME",i={id:"sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",title:"CREATE STORAGE VOLUME",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",permalink:"/zh/docs/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/CREATE STORAGE VOLUME.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE RESOURCE GROUP",permalink:"/zh/docs/sql-reference/sql-statements/Administration/CREATE RESOURCE GROUP"},next:{title:"DELETE SQLBLACKLIST",permalink:"/zh/docs/sql-reference/sql-statements/Administration/DELETE SQLBLACKLIST"}},t={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"PROPERTIES",id:"properties",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"create-storage-volume",children:"CREATE STORAGE VOLUME"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u521b\u5efa\u5b58\u50a8\u5377\u3002\u8be5\u529f\u80fd\u81ea v3.1 \u8d77\u652f\u6301\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5b58\u50a8\u5377\u7531\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u5c5e\u6027\u548c\u8ba4\u8bc1\u4fe1\u606f\u7ec4\u6210\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,r.jsx)(s.a,{href:"../../../deployment/deploy_shared_data.md",children:"StarRocks \u5b58\u7b97\u5206\u79bb\u96c6\u7fa4"}),"\u4e2d\u521b\u5efa\u6570\u636e\u5e93\u548c\u4e91\u539f\u751f\u8868\u65f6\u5f15\u7528\u5b58\u50a8\u5377\u3002"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(s.p,{children:"\u4ec5\u62e5\u6709 SYSTEM \u7ea7 CREATE STORAGE VOLUME \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"CREATE STORAGE VOLUME [IF NOT EXISTS] <storage_volume_name>\nTYPE = { S3 | HDFS }\nLOCATIONS = ('{ <s3_path> | <hdfs_path> }')\n[ COMMENT '<comment_string>' ]\nPROPERTIES\n(\"key\" = \"value\",...)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_volume_name"}),(0,r.jsxs)(s.td,{children:["\u5b58\u50a8\u5377\u7684\u540d\u79f0\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u65e0\u6cd5\u521b\u5efa\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"builtin_storage_volume"})," \u7684\u5b58\u50a8\u5377\uff0c\u56e0\u4e3a\u8be5\u540d\u79f0\u88ab\u7528\u4e8e\u521b\u5efa\u5185\u7f6e\u5b58\u50a8\u5377\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TYPE"}),(0,r.jsxs)(s.td,{children:["\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u7c7b\u578b\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"S3"})," \u3001",(0,r.jsx)(s.code,{children:"AZBLOB"})," \u548c ",(0,r.jsx)(s.code,{children:"HDFS"}),"\u3002",(0,r.jsx)(s.code,{children:"S3"})," \u4ee3\u8868AWS S3 \u6216\u4e0e S3 \u534f\u8bae\u517c\u5bb9\u7684\u5b58\u50a8\u7cfb\u7edf\u3002",(0,r.jsx)(s.code,{children:"AZBLOB"})," \u4ee3\u8868 Azure Blob Storage\uff08\u81ea v3.1.1 \u8d77\u652f\u6301\uff09\u3002",(0,r.jsx)(s.code,{children:"HDFS"})," \u4ee3\u8868 HDFS \u96c6\u7fa4\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LOCATIONS"}),(0,r.jsxs)(s.td,{children:["\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u4f4d\u7f6e\u3002\u683c\u5f0f\u5982\u4e0b\uff1a",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["AWS S3 \u6216\u4e0e S3 \u534f\u8bae\u517c\u5bb9\u7684\u5b58\u50a8\u7cfb\u7edf\uff1a",(0,r.jsx)(s.code,{children:"s3://<s3_path>"}),"\u3002",(0,r.jsx)(s.code,{children:"<s3_path>"})," \u5fc5\u987b\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"s3://testbucket/subpath"}),"\u3002"]}),(0,r.jsxs)("li",{children:["Azure Blob Storage: ",(0,r.jsx)(s.code,{children:"azblob://<azblob_path>"}),"\u3002",(0,r.jsx)(s.code,{children:"<azblob_path>"})," \u5fc5\u987b\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"azblob://testcontainer/subpath"}),"\u3002"]}),(0,r.jsxs)("li",{children:["HDFS\uff1a",(0,r.jsx)(s.code,{children:"hdfs://<ip>:<port>/<hdfs_path>"}),"\u3002",(0,r.jsx)(s.code,{children:"<hdfs_path>"})," \u5fc5\u987b\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"hdfs://127.0.0.1:9000/user/xxx/starrocks"}),"\u3002"]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"COMMENT"}),(0,r.jsx)(s.td,{children:"\u5b58\u50a8\u5377\u7684\u6ce8\u91ca\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PROPERTIES"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:'"key" = "value"'})," \u5f62\u5f0f\u7684\u53c2\u6570\u5bf9\uff0c\u7528\u4ee5\u6307\u5b9a\u8bbf\u95ee\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u5c5e\u6027\u548c\u8ba4\u8bc1\u4fe1\u606f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"#properties",children:"PROPERTIES"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"PROPERTIES"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 AWS S3\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 AWS SDK \u9ed8\u8ba4\u7684\u8ba4\u8bc1\u51ed\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 IAM user-based \u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "false",\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Instance Profile \u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Assumed Role \u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<role_arn>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u5916\u90e8 AWS \u8d26\u6237\u901a\u8fc7 Assumed Role \u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"aws.s3.region" = "<region>",\n"aws.s3.endpoint" = "<endpoint_url>",\n"aws.s3.use_aws_sdk_default_behavior" = "false",\n"aws.s3.use_instance_profile" = "true",\n"aws.s3.iam_role_arn" = "<role_arn>",\n"aws.s3.external_id" = "<external_id>"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 GCP Cloud Storage\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1aus-east-1\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttps://storage.googleapis.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u963f\u91cc\u4e91 OSS\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1acn-zhangjiakou\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttps://oss-cn-zhangjiakou-internal.aliyuncs.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u534e\u4e3a\u4e91 OBS\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1acn-north-4\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttps://obs.cn-north-4.myhuaweicloud.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u817e\u8baf\u4e91 COS\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1aap-beijing\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttps://cos.ap-beijing.myqcloud.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u706b\u5c71\u5f15\u64ce TOS\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1acn-beijing\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttps://tos-s3-cn-beijing.ivolces.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u91d1\u5c71\u4e91\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1aBEIJING\n"aws.s3.region" = "<region>",\n\n-- \u6ce8\u610f\u8bf7\u4f7f\u7528\u4e09\u7ea7\u57df\u540d, \u91d1\u5c71\u4e91\u4e0d\u652f\u6301\u4e8c\u7ea7\u57df\u540d\n-- \u4f8b\u5982\uff1ajeff-test.ks3-cn-beijing.ksyuncs.com\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 MinIO\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1aus-east-1\n"aws.s3.region" = "<region>",\n\n-- \u4f8b\u5982\uff1ahttp://172.26.xx.xxx:39000\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Ceph S3\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n\n-- \u4f8b\u5982\uff1ahttp://172.26.xx.xxx:7480\n"aws.s3.endpoint" = "<endpoint_url>",\n\n"aws.s3.access_key" = "<access_key>",\n"aws.s3.secret_key" = "<secrete_key>"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5c5e\u6027"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enabled"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u542f\u7528\u5f53\u524d\u5b58\u50a8\u5377\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u5df2\u7981\u7528\u7684\u5b58\u50a8\u5377\u65e0\u6cd5\u88ab\u5f15\u7528\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.region"}),(0,r.jsxs)(s.td,{children:["\u9700\u8bbf\u95ee\u7684 S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5730\u533a\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"us-west-2"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.endpoint"}),(0,r.jsxs)(s.td,{children:["\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"https://s3.us-west-2.amazonaws.com"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_aws_sdk_default_behavior"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u4f7f\u7528 AWS SDK \u9ed8\u8ba4\u7684\u8ba4\u8bc1\u51ed\u8bc1\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"})," (\u9ed8\u8ba4)\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u4f7f\u7528 Instance Profile \u6216 Assumed Role \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u8bbf\u95ee S3\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"true"})," \u548c ",(0,r.jsx)(s.code,{children:"false"})," (\u9ed8\u8ba4)\u3002",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 IAM \u7528\u6237\u51ed\u8bc1\uff08Access Key \u548c Secret Key\uff09\u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"false"}),"\uff0c\u5e76\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws.s3.access_key"})," \u548c ",(0,r.jsx)(s.code,{children:"aws.s3.secret_key"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 Instance Profile \u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528 Assumed Role \u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\uff0c\u5e76\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws.s3.iam_role_arn"}),"\u3002"]}),(0,r.jsxs)("li",{children:["\u5982\u679c\u60a8\u4f7f\u7528\u5916\u90e8 AWS \u8d26\u6237\u901a\u8fc7 Assumed Role \u8ba4\u8bc1\u8bbf\u95ee S3\uff0c\u5219\u9700\u8981\u5c06\u6b64\u9879\u8bbe\u4e3a ",(0,r.jsx)(s.code,{children:"true"}),"\uff0c\u5e76\u989d\u5916\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"aws.s3.iam_role_arn"})," \u548c ",(0,r.jsx)(s.code,{children:"aws.s3.external_id"}),"\u3002"]})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Access Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Secret Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,r.jsx)(s.td,{children:"\u6709\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u6743\u9650 IAM Role \u7684 ARN\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.external_id"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8de8 AWS \u8d26\u6237\u8bbf\u95ee S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5916\u90e8 ID\u3002"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 Azure Blob Storage\uff08\u81ea v3.1.1 \u8d77\u652f\u6301\uff09\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u5171\u4eab\u5bc6\u94a5\uff08Shared Key\uff09\u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b PROPERTIES\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"azure.blob.endpoint" = "<endpoint_url>",\n"azure.blob.shared_key" = "<shared_key>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u5171\u4eab\u8bbf\u95ee\u7b7e\u540d\uff08SAS\uff09\u8ba4\u8bc1\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b PROPERTIES\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }",\n"azure.blob.endpoint" = "<endpoint_url>",\n"azure.blob.sas_token" = "<sas_token>"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(s.p,{children:"\u521b\u5efa Azure Blob Storage Account \u65f6\u5fc5\u987b\u7981\u7528\u5206\u5c42\u547d\u540d\u7a7a\u95f4\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5c5e\u6027"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u63cf\u8ff0"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"enabled"}),(0,r.jsxs)(s.td,{children:["\u662f\u5426\u542f\u7528\u5f53\u524d\u5b58\u50a8\u5377\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"false"}),"\u3002\u5df2\u7981\u7528\u7684\u5b58\u50a8\u5377\u65e0\u6cd5\u88ab\u5f15\u7528\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.endpoint"}),(0,r.jsxs)(s.td,{children:["Azure Blob Storage \u7684\u94fe\u63a5\u5730\u5740\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"https://test.blob.core.windows.net"}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.shared_key"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee Azure Blob Storage \u7684\u5171\u4eab\u5bc6\u94a5\uff08Shared Key\uff09\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"azure.blob.sas_token"}),(0,r.jsx)(s.td,{children:"\u8bbf\u95ee Azure Blob Storage \u7684\u5171\u4eab\u8bbf\u95ee\u7b7e\u540d\uff08SAS\uff09\u3002"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 HDFS \u5b58\u50a8\uff0c\u8bf7\u8bbe\u7f6e\u4ee5\u4e0b\u5c5e\u6027\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"enabled" = "{ true | false }"\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,r.jsx)(s.p,{children:"Storage Volume \u5f53\u524d\u4e0d\u652f\u6301\u901a\u8fc7\u8ba4\u8bc1\u63a5\u5165 HDFS\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u4e3a AWS S3 \u5b58\u50a8\u7a7a\u95f4 ",(0,r.jsx)(s.code,{children:"defaultbucket"})," \u521b\u5efa\u5b58\u50a8\u5377 ",(0,r.jsx)(s.code,{children:"my_s3_volume"}),"\uff0c\u4f7f\u7528 IAM user-based \u8ba4\u8bc1\uff0c\u5e76\u542f\u7528\u8be5\u5b58\u50a8\u5377\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'MySQL > CREATE STORAGE VOLUME my_s3_volume\n    -> TYPE = S3\n    -> LOCATIONS = ("s3://defaultbucket/test/")\n    -> PROPERTIES\n    -> (\n    ->     "aws.s3.region" = "us-west-2",\n    ->     "aws.s3.endpoint" = "https://s3.us-west-2.amazonaws.com",\n    ->     "aws.s3.use_aws_sdk_default_behavior" = "false",\n    ->     "aws.s3.use_instance_profile" = "false",\n    ->     "aws.s3.access_key" = "xxxxxxxxxx",\n    ->     "aws.s3.secret_key" = "yyyyyyyyyy"\n    -> );\nQuery OK, 0 rows affected (0.05 sec)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/ALTER%20STORAGE%20VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/DROP%20STORAGE%20VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/SET%20DEFAULT%20STORAGE%20VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/DESC%20STORAGE%20VOLUME",children:"DESC STORAGE VOLUME"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/SHOW%20STORAGE%20VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>d});var r=n(67294);const l=r.createContext({});function d(e){const s=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const c={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:d(e),r.createElement(l.Provider,{value:i},s)}}}]);