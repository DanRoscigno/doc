"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30728],{33598:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(85893),c=n(11151);const i={},d="\u5907\u4efd\u4e0e\u6062\u590d",l={id:"administration/Backup_and_restore",title:"\u5907\u4efd\u4e0e\u6062\u590d",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5907\u4efd\u4ee5\u53ca\u6062\u590d StarRocks \u4e2d\u7684\u6570\u636e\uff0c\u6216\u5c06\u6570\u636e\u8fc1\u79fb\u81f3\u65b0\u7684 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Backup_and_restore.md",sourceDirName:"administration",slug:"/administration/Backup_and_restore",permalink:"/zh/docs/administration/Backup_and_restore",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Backup_and_restore.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"\u6269\u5bb9\u7f29\u5bb9 StarRocks",permalink:"/zh/docs/administration/Scale_up_down"},next:{title:"\u914d\u7f6e\u53c2\u6570",permalink:"/zh/docs/administration/Configuration"}},t={},a=[{value:"\u5907\u4efd\u6570\u636e",id:"\u5907\u4efd\u6570\u636e",level:2},{value:"\u521b\u5efa\u4ed3\u5e93",id:"\u521b\u5efa\u4ed3\u5e93",level:3},{value:"\u5907\u4efd\u6570\u636e\u5feb\u7167",id:"\u5907\u4efd\u6570\u636e\u5feb\u7167",level:3},{value:"\u6062\u590d\u6216\u8fc1\u79fb\u6570\u636e",id:"\u6062\u590d\u6216\u8fc1\u79fb\u6570\u636e",level:2},{value:"\uff08\u53ef\u9009\uff09\u5728\u65b0\u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93",id:"\u53ef\u9009\u5728\u65b0\u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93",level:3},{value:"\u67e5\u770b\u6570\u636e\u5e93\u5feb\u7167",id:"\u67e5\u770b\u6570\u636e\u5e93\u5feb\u7167",level:3},{value:"\u6062\u590d\u6570\u636e\u5feb\u7167",id:"\u6062\u590d\u6570\u636e\u5feb\u7167",level:3},{value:"\u914d\u7f6e\u76f8\u5173\u53c2\u6570",id:"\u914d\u7f6e\u76f8\u5173\u53c2\u6570",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function o(e){const s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",h3:"h3",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u5907\u4efd\u4e0e\u6062\u590d",children:"\u5907\u4efd\u4e0e\u6062\u590d"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5907\u4efd\u4ee5\u53ca\u6062\u590d StarRocks \u4e2d\u7684\u6570\u636e\uff0c\u6216\u5c06\u6570\u636e\u8fc1\u79fb\u81f3\u65b0\u7684 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u652f\u6301\u5c06\u6570\u636e\u4ee5\u5feb\u7167\u6587\u4ef6\u7684\u5f62\u5f0f\u5907\u4efd\u5230\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\uff0c\u6216\u5c06\u5907\u4efd\u7684\u6570\u636e\u4ece\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u6062\u590d\u81f3\u4efb\u610f StarRocks \u96c6\u7fa4\u3002\u901a\u8fc7\u8fd9\u4e2a\u529f\u80fd\uff0c\u60a8\u53ef\u4ee5\u5b9a\u671f\u4e3a StarRocks \u96c6\u7fa4\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u5feb\u7167\u5907\u4efd\uff0c\u6216\u8005\u5c06\u6570\u636e\u5728\u4e0d\u540c StarRocks \u96c6\u7fa4\u95f4\u8fc1\u79fb\u3002"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u652f\u6301\u5728\u4ee5\u4e0b\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5907\u4efd\u6570\u636e\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Apache\u2122 Hadoop\xae \uff08HDFS\uff09\u96c6\u7fa4"}),"\n",(0,r.jsx)(s.li,{children:"AWS S3"}),"\n",(0,r.jsx)(s.li,{children:"Google GCS"}),"\n",(0,r.jsx)(s.li,{children:"\u963f\u91cc\u4e91 OSS"}),"\n",(0,r.jsx)(s.li,{children:"\u817e\u8baf\u4e91 COS"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5907\u4efd\u6570\u636e",children:"\u5907\u4efd\u6570\u636e"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u652f\u6301\u4ee5\u6570\u636e\u5e93\u3001\u8868\u3001\u6216\u5206\u533a\u4e3a\u7c92\u5ea6\u5168\u91cf\u5907\u4efd\u6570\u636e\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5efa\u8bae\u60a8\u6309\u5206\u533a\u5206\u522b\u6267\u884c\uff0c\u4ee5\u964d\u4f4e\u5931\u8d25\u91cd\u8bd5\u7684\u4ee3\u4ef7\u3002\u5982\u679c\u60a8\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd\uff0c\u5efa\u8bae\u60a8\u5728\u5efa\u8868\u65f6\u5236\u5b9a",(0,r.jsx)(s.a,{href:"/zh/docs/table_design/dynamic_partitioning",children:"\u52a8\u6001\u5206\u533a"}),"\u7b56\u7565\uff0c\u4ece\u800c\u53ef\u4ee5\u5728\u540e\u671f\u8fd0\u7ef4\u8fc7\u7a0b\u4e2d\uff0c\u4ec5\u5b9a\u671f\u5907\u4efd\u65b0\u589e\u5206\u533a\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u521b\u5efa\u4ed3\u5e93",children:"\u521b\u5efa\u4ed3\u5e93"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ed3\u5e93\u7528\u4e8e\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u5b58\u50a8\u5907\u4efd\u6587\u4ef6\u3002\u5907\u4efd\u6570\u636e\u524d\uff0c\u60a8\u9700\u8981\u57fa\u4e8e\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u8def\u5f84\u5728 StarRocks \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002\u60a8\u53ef\u4ee5\u5728\u540c\u4e00\u96c6\u7fa4\u4e2d\u521b\u5efa\u591a\u4e2a\u4ed3\u5e93\u3002\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE%20REPOSITORY",children:"CREATE REPOSITORY"}),"\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5728 HDFS \u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5728 Apache\u2122 Hadoop\xae \u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "hdfs://<hdfs_host>:<hdfs_port>/repo_dir/backup"\nPROPERTIES(\n    "username" = "<hdfs_username>",\n    "password" = "<hdfs_password>"\n);\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5728 AWS S3 \u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 IAM \u7528\u6237\u51ed\u8bc1\uff08Access Key \u548c Secret Key\uff09\u3001Instance Profile \u6216\u8005 Assumed Role \u4f5c\u4e3a\u8bbf\u95ee Amazon S3 \u7684\u5b89\u5168\u51ed\u8bc1\u3002"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 IAM \u7528\u6237\u51ed\u8bc1\u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u5728 Amazon S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"bucket_s3"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.access_key" = "XXXXXXXXXXXXXXXXX",\n    "aws.s3.secret_key" = "yyyyyyyyyyyyyyyyyyyyyyyy",\n    "aws.s3.endpoint" = "s3.us-east-1.amazonaws.com"\n);\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 Instance Profile \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u5728 Amazon S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"bucket_s3"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-east-1"\n);\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4ee5\u4e0b\u793a\u4f8b\u4ee5 Assumed Role \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u5728 Amazon S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"bucket_s3"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::xxxxxxxxxx:role/yyyyyyyy",\n    "aws.s3.region" = "us-east-1"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u4ec5\u652f\u6301\u901a\u8fc7 S3A \u534f\u8bae\u5728 AWS S3 \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002\u56e0\u6b64\uff0c\u5f53\u60a8\u5728 AWS S3 \u4e2d\u521b\u5efa\u4ed3\u5e93\u65f6\uff0c\u5fc5\u987b\u5728 ",(0,r.jsx)(s.code,{children:"ON LOCATION"})," \u53c2\u6570\u4e0b\u5c06 S3 URI \u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"s3://"})," \u66ff\u6362\u4e3a ",(0,r.jsx)(s.code,{children:"s3a://"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5728 Google GCS \u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5728 Google GCS \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"bucket_gcs"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "s3a://bucket_gcs/backup"\nPROPERTIES(\n    "fs.s3a.access.key" = "xxxxxxxxxxxxxxxxxxxx",\n    "fs.s3a.secret.key" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.s3a.endpoint" = "storage.googleapis.com"\n);\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(s.p,{children:["StarRocks \u4ec5\u652f\u6301\u901a\u8fc7 S3A \u534f\u8bae\u5728 Google GCS \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002 \u56e0\u6b64\uff0c\u5f53\u60a8\u5728 Google GCS \u4e2d\u521b\u5efa\u4ed3\u5e93\u65f6\uff0c\u5fc5\u987b\u5728 ",(0,r.jsx)(s.code,{children:"ON LOCATION"})," \u53c2\u6570\u4e0b\u5c06 GCS URI \u7684\u524d\u7f00\u66ff\u6362\u4e3a ",(0,r.jsx)(s.code,{children:"s3a://"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5728\u963f\u91cc\u4e91 OSS \u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5728\u963f\u91cc\u4e91 OSS \u5b58\u50a8\u7a7a\u95f4 ",(0,r.jsx)(s.code,{children:"bucket_oss"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "oss://bucket_oss/backup"\nPROPERTIES(\n    "fs.oss.accessKeyId" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "fs.oss.accessKeySecret" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.oss.endpoint" = "oss-cn-zhangjiakou-internal.aliyuncs.com"\n);\n'})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5728\u817e\u8baf\u4e91 COS \u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5728\u817e\u8baf\u4e91 COS \u5b58\u50a8\u7a7a\u95f4 ",(0,r.jsx)(s.code,{children:"bucket_cos"})," \u4e2d\u521b\u5efa\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY test_repo\nWITH BROKER\nON LOCATION "cosn://bucket_cos/backup"\nPROPERTIES(\n    "fs.cosn.userinfo.secretId" = "xxxxxxxxxxxxxxxxx",\n    "fs.cosn.userinfo.secretKey" = "yyyyyyyyyyyyyyyy",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.ap-beijing.myqcloud.com"\n);\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u4ed3\u5e93\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20REPOSITORIES",children:"SHOW REPOSITORIES"})," \u67e5\u770b\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\u3002\u5b8c\u6210\u6570\u636e\u6062\u590d\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/DROP%20REPOSITORY",children:"DROP REPOSITORY"})," \u8bed\u53e5\u5220\u9664 StarRocks \u4e2d\u7684\u4ed3\u5e93\u3002\u4f46\u5907\u4efd\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u5feb\u7167\u6570\u636e\u76ee\u524d\u65e0\u6cd5\u901a\u8fc7 StarRocks \u76f4\u63a5\u5220\u9664\uff0c\u60a8\u9700\u8981\u624b\u52a8\u5220\u9664\u5907\u4efd\u5728\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u5feb\u7167\u8def\u5f84\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5907\u4efd\u6570\u636e\u5feb\u7167",children:"\u5907\u4efd\u6570\u636e\u5feb\u7167"}),"\n",(0,r.jsxs)(s.p,{children:["\u521b\u5efa\u6570\u636e\u4ed3\u5e93\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/BACKUP",children:"BACKUP"})," \u547d\u4ee4\u521b\u5efa\u6570\u636e\u5feb\u7167\u5e76\u5c06\u5176\u5907\u4efd\u81f3\u8fdc\u7aef\u4ed3\u5e93\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5728\u6570\u636e\u5e93 ",(0,r.jsx)(s.code,{children:"sr_hub"})," \u4e2d\u4e3a\u8868 ",(0,r.jsx)(s.code,{children:"sr_member"})," \u521b\u5efa\u6570\u636e\u5feb\u7167 ",(0,r.jsx)(s.code,{children:"sr_member_backup"})," \u5e76\u5907\u4efd\u81f3\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"})," \u4e2d\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"BACKUP SNAPSHOT sr_hub.sr_member_backup\nTO test_repo\nON (sr_member);\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u6570\u636e\u5907\u4efd\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20BACKUP",children:"SHOW BACKUP"})," \u8bed\u53e5\u67e5\u770b\u5907\u4efd\u4f5c\u4e1a\u72b6\u6001\uff0c\u6216\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CANCEL%20BACKUP",children:"CANCEL BACKUP"})," \u8bed\u53e5\u53d6\u6d88\u5907\u4efd\u4f5c\u4e1a\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u6062\u590d\u6216\u8fc1\u79fb\u6570\u636e",children:"\u6062\u590d\u6216\u8fc1\u79fb\u6570\u636e"}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u5c06\u5907\u4efd\u81f3\u8fdc\u7aef\u4ed3\u5e93\u7684\u6570\u636e\u5feb\u7167\u6062\u590d\u5230\u5f53\u524d\u6216\u5176\u4ed6 StarRocks \u96c6\u7fa4\uff0c\u5b8c\u6210\u6570\u636e\u6062\u590d\u6216\u8fc1\u79fb\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u53ef\u9009\u5728\u65b0\u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93",children:"\uff08\u53ef\u9009\uff09\u5728\u65b0\u96c6\u7fa4\u4e2d\u521b\u5efa\u4ed3\u5e93"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u9700\u5c06\u6570\u636e\u8fc1\u79fb\u81f3\u5176\u4ed6 StarRocks \u96c6\u7fa4\uff0c\u60a8\u9700\u8981\u5728\u65b0\u96c6\u7fa4\u4e2d\u4f7f\u7528\u76f8\u540c",(0,r.jsx)(s.strong,{children:"\u4ed3\u5e93\u540d"}),"\u548c",(0,r.jsx)(s.strong,{children:"\u5730\u5740"}),"\u521b\u5efa\u4ed3\u5e93\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u67e5\u770b\u5148\u524d\u5907\u4efd\u7684\u6570\u636e\u5feb\u7167\u3002\u8be6\u7ec6\u4fe1\u606f\u89c1 ",(0,r.jsx)(s.a,{href:"#%E5%88%9B%E5%BB%BA%E4%BB%93%E5%BA%93",children:"\u521b\u5efa\u4ed3\u5e93"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u67e5\u770b\u6570\u636e\u5e93\u5feb\u7167",children:"\u67e5\u770b\u6570\u636e\u5e93\u5feb\u7167"}),"\n",(0,r.jsxs)(s.p,{children:["\u5f00\u59cb\u6062\u590d\u6216\u8fc1\u79fb\u524d\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20SNAPSHOT",children:"SHOW SNAPSHOT"})," \u67e5\u770b\u7279\u5b9a\u4ed3\u5e93\u5bf9\u5e94\u7684\u6570\u636e\u5feb\u7167\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u67e5\u770b\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"})," \u4e2d\u7684\u6570\u636e\u5feb\u7167\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"mysql> SHOW SNAPSHOT ON test_repo;\n+------------------+-------------------------+--------+\n| Snapshot         | Timestamp               | Status |\n+------------------+-------------------------+--------+\n| sr_member_backup | 2023-02-07-14-45-53-143 | OK     |\n+------------------+-------------------------+--------+\n1 row in set (1.16 sec)\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u6062\u590d\u6570\u636e\u5feb\u7167",children:"\u6062\u590d\u6570\u636e\u5feb\u7167"}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/RESTORE",children:"RESTORE"})," \u8bed\u53e5\u5c06\u8fdc\u7aef\u4ed3\u5e93\u4e2d\u7684\u6570\u636e\u5feb\u7167\u6062\u590d\u81f3\u5f53\u524d\u6216\u5176\u4ed6 StarRocks \u96c6\u7fa4\u4ee5\u6062\u590d\u6216\u8fc1\u79fb\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u5c06\u4ed3\u5e93 ",(0,r.jsx)(s.code,{children:"test_repo"})," \u4e2d\u7684\u6570\u636e\u5feb\u7167 ",(0,r.jsx)(s.code,{children:"sr_member_backup"}),"\u6062\u590d\u4e3a\u8868 ",(0,r.jsx)(s.code,{children:"sr_member"}),"\uff0c\u4ec5\u6062\u590d\u4e00\u4e2a\u6570\u636e\u526f\u672c\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'RESTORE SNAPSHOT sr_hub.sr_member_backup\nFROM test_repo\nON (sr_member)\nPROPERTIES (\n    "backup_timestamp"="2023-02-07-14-45-53-143",\n    "replication_num" = "1"\n);\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u6570\u636e\u6062\u590d\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW%20RESTORE",children:"SHOW RESTORE"})," \u8bed\u53e5\u67e5\u770b\u6062\u590d\u4f5c\u4e1a\u72b6\u6001\uff0c\u6216\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CANCEL%20RESTORE",children:"CANCEL RESTORE"})," \u8bed\u53e5\u53d6\u6d88\u6062\u590d\u4f5c\u4e1a\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u914d\u7f6e\u76f8\u5173\u53c2\u6570",children:"\u914d\u7f6e\u76f8\u5173\u53c2\u6570"}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 BE \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"be.conf"})," \u4e2d\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\u9879\u52a0\u901f\u5907\u4efd\u6216\u8fd8\u539f\u4f5c\u4e1a\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u914d\u7f6e\u9879"}),(0,r.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"upload_worker_count"}),(0,r.jsxs)(s.td,{children:["BE \u8282\u70b9\u4e0a\u4f20\u4efb\u52a1\u7684\u6700\u5927\u7ebf\u7a0b\u6570\uff0c\u7528\u4e8e\u5907\u4efd\u4f5c\u4e1a\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"1"}),"\u3002\u589e\u52a0\u6b64\u914d\u7f6e\u9879\u7684\u503c\u53ef\u4ee5\u589e\u52a0\u4e0a\u4f20\u4efb\u52a1\u5e76\u884c\u5ea6\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"download_worker_count"}),(0,r.jsxs)(s.td,{children:["BE \u8282\u70b9\u4e0b\u8f7d\u4efb\u52a1\u7684\u6700\u5927\u7ebf\u7a0b\u6570\uff0c\u7528\u4e8e\u8fd8\u539f\u4f5c\u4e1a\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"1"}),"\u3002\u589e\u52a0\u6b64\u914d\u7f6e\u9879\u7684\u503c\u53ef\u4ee5\u589e\u52a0\u4e0b\u8f7d\u4efb\u52a1\u5e76\u884c\u5ea6\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"max_download_speed_kbps"}),(0,r.jsxs)(s.td,{children:["BE \u8282\u70b9\u4e0b\u8f7d\u901f\u5ea6\u4e0a\u9650\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(s.code,{children:"50000"}),"\u3002\u5355\u4f4d\uff1aKB/s\u3002\u901a\u5e38\u8fd8\u539f\u4f5c\u4e1a\u7684\u4e0b\u8f7d\u901f\u5ea6\u4e0d\u4f1a\u8d85\u8fc7\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u8be5\u901f\u5ea6\u4e0a\u9650\u9650\u5236\u4e86\u8fd8\u539f\u4f5c\u4e1a\u7684\u6027\u80fd\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u5e26\u5bbd\u60c5\u51b5\u9002\u5f53\u589e\u52a0\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4ec5\u9650\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u6267\u884c\u5907\u4efd\u4e0e\u6062\u590d\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u5355\u4e00\u6570\u636e\u5e93\u5185\uff0c\u4ec5\u53ef\u540c\u65f6\u6267\u884c\u4e00\u4e2a\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\u3002\u5426\u5219\uff0cStarRocks \u8fd4\u56de\u9519\u8bef\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u56e0\u4e3a\u5907\u4efd\u4e0e\u6062\u590d\u64cd\u4f5c\u4f1a\u5360\u7528\u4e00\u5b9a\u7cfb\u7edf\u8d44\u6e90\uff0c\u5efa\u8bae\u60a8\u5728\u96c6\u7fa4\u4e1a\u52a1\u4f4e\u5cf0\u671f\u8fdb\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u76ee\u524d StarRocks \u4e0d\u652f\u6301\u5728\u5907\u4efd\u6570\u636e\u65f6\u4f7f\u7528\u538b\u7f29\u7b97\u6cd5\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u56e0\u4e3a\u6570\u636e\u5907\u4efd\u662f\u901a\u8fc7\u5feb\u7167\u7684\u5f62\u5f0f\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\u5728\u5f53\u524d\u6570\u636e\u5feb\u7167\u751f\u6210\u4e4b\u540e\u5bfc\u5165\u7684\u6570\u636e\u4e0d\u4f1a\u88ab\u5907\u4efd\u3002\u56e0\u6b64\uff0c\u5728\u5feb\u7167\u751f\u6210\u81f3\u6062\u590d\uff08\u8fc1\u79fb\uff09\u4f5c\u4e1a\u5b8c\u6210\u8fd9\u6bb5\u671f\u95f4\u5bfc\u5165\u7684\u6570\u636e\uff0c\u9700\u8981\u91cd\u65b0\u5bfc\u5165\u81f3\u96c6\u7fa4\u3002\u5efa\u8bae\u60a8\u5728\u8fc1\u79fb\u5b8c\u6210\u540e\uff0c\u5bf9\u65b0\u65e7\u4e24\u4e2a\u96c6\u7fa4\u5e76\u884c\u5bfc\u5165\u4e00\u6bb5\u65f6\u95f4\uff0c\u5b8c\u6210\u6570\u636e\u548c\u4e1a\u52a1\u6b63\u786e\u6027\u6821\u9a8c\u540e\uff0c\u518d\u5c06\u4e1a\u52a1\u8fc1\u79fb\u5230\u65b0\u7684\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u5728\u6062\u590d\u4f5c\u4e1a\u5b8c\u6210\u524d\uff0c\u88ab\u6062\u590d\u8868\u65e0\u6cd5\u88ab\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(s.li,{children:"Primary Key \u8868\u65e0\u6cd5\u88ab\u6062\u590d\u81f3 v2.5 \u4e4b\u524d\u7248\u672c\u7684 StarRocks \u96c6\u7fa4\u4e2d\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u60a8\u65e0\u9700\u5728\u6062\u590d\u4f5c\u4e1a\u524d\u5728\u65b0\u96c6\u7fa4\u4e2d\u521b\u5efa\u9700\u8981\u88ab\u6062\u590d\u8868\u3002\u6062\u590d\u4f5c\u4e1a\u5c06\u81ea\u52a8\u521b\u5efa\u8be5\u8868\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u5982\u679c\u88ab\u6062\u590d\u8868\u4e0e\u5df2\u6709\u8868\u91cd\u540d\uff0cStarRocks \u4f1a\u9996\u5148\u8bc6\u522b\u5df2\u6709\u8868\u7684 Schema\u3002\u5982\u679c Schema \u76f8\u540c\uff0cStarRocks \u4f1a\u8986\u76d6\u5199\u5165\u5df2\u6709\u8868\u3002\u5982\u679c Schema \u4e0d\u540c\uff0c\u6062\u590d\u4f5c\u4e1a\u5931\u8d25\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.code,{children:"AS"})," \u5173\u952e\u5b57\u91cd\u65b0\u547d\u540d\u88ab\u6062\u590d\u8868\uff0c\u6216\u8005\u5220\u9664\u5df2\u6709\u8868\u540e\u91cd\u65b0\u53d1\u8d77\u6062\u590d\u4f5c\u4e1a\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u662f\u4e00\u6b21\u8986\u76d6\u64cd\u4f5c\uff08\u6307\u5b9a\u6062\u590d\u6570\u636e\u5230\u5df2\u7ecf\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u4e2d\uff09\uff0c\u90a3\u4e48\u4ece\u6062\u590d\u4f5c\u4e1a\u7684 COMMIT \u9636\u6bb5\u5f00\u59cb\uff0c\u5f53\u524d\u96c6\u7fa4\u4e0a\u88ab\u8986\u76d6\u7684\u6570\u636e\u6709\u53ef\u80fd\u4e0d\u80fd\u518d\u88ab\u8fd8\u539f\u3002\u6b64\u65f6\u5982\u679c\u6062\u590d\u4f5c\u4e1a\u5931\u8d25\u6216\u88ab\u53d6\u6d88\uff0c\u6709\u53ef\u80fd\u9020\u6210\u4e4b\u524d\u7684\u6570\u636e\u635f\u574f\u4e14\u65e0\u6cd5\u8bbf\u95ee\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u64cd\u4f5c\uff0c\u5e76\u7b49\u5f85\u4f5c\u4e1a\u5b8c\u6210\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\uff0c\u5982\u65e0\u5fc5\u8981\uff0c\u4e0d\u8981\u4f7f\u7528\u8986\u76d6\u7684\u65b9\u5f0f\u6062\u590d\u6570\u636e\uff0c\u9664\u975e\u786e\u8ba4\u5f53\u524d\u6570\u636e\u5df2\u4e0d\u518d\u4f7f\u7528\u3002\u8986\u76d6\u64cd\u4f5c\u4f1a\u68c0\u67e5\u5feb\u7167\u548c\u5df2\u5b58\u5728\u7684\u8868\u6216\u5206\u533a\u7684\u5143\u6570\u636e\u662f\u5426\u76f8\u540c\uff0c\u5305\u62ec Schema \u548c Rollup \u7b49\u4fe1\u606f\uff0c\u5982\u679c\u4e0d\u540c\u5219\u65e0\u6cd5\u6267\u884c\u6062\u590d\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(s.li,{children:["\u5728\u5907\u4efd\u6216\u6062\u590d\u4f5c\u4e1a\u4e2d\uff0cStarRocks \u81ea\u52a8\u5907\u4efd\u6216\u6062\u590d\u8868\u7684 ",(0,r.jsx)(s.a,{href:"/zh/docs/using_starrocks/Materialized_view-single_table",children:"\u540c\u6b65\u7269\u5316\u89c6\u56fe"}),"\u3002\u76ee\u524d StarRocks \u6682\u4e0d\u652f\u6301\u5907\u4efd\u6062\u590d\u89c6\u56fe\u548c",(0,r.jsx)(s.a,{href:"/zh/docs/using_starrocks/Materialized_view",children:"\u5f02\u6b65\u7269\u5316\u89c6\u56fe"}),"\u3002\u60a8\u53ea\u80fd\u624b\u52a8\u5907\u4efd\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u6240\u5bf9\u5e94\u7684\u5b9e\u4f53\u8868\uff0c\u4e14\u8be5\u5b9e\u4f53\u8868\u65e0\u6cd5\u4f5c\u4e3a\u7269\u5316\u89c6\u56fe\u52a0\u901f\u6216\u6539\u5199\u67e5\u8be2\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u76ee\u524d StarRocks \u6682\u4e0d\u652f\u6301\u5907\u4efd\u6062\u590d\u7528\u6237\u3001\u6743\u9650\u4ee5\u53ca\u8d44\u6e90\u7ec4\u914d\u7f6e\u76f8\u5173\u6570\u636e\u3002"}),"\n",(0,r.jsx)(s.li,{children:"StarRocks \u4e0d\u652f\u6301\u5907\u4efd\u6062\u590d\u8868\u4e4b\u95f4\u7684 Colocate Join \u5173\u7cfb\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var r=n(67294);const c=r.createContext({});function i(e){const s=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||d:i(e),r.createElement(c.Provider,{value:l},s)}}}]);