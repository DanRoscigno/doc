"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[50616],{86534:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var c=n(85893),r=n(11151);const i={},l="CREATE REPOSITORY",d={id:"sql-reference/sql-statements/data-definition/CREATE REPOSITORY",title:"CREATE REPOSITORY",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE REPOSITORY",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE REPOSITORY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/CREATE REPOSITORY.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"CREATE MATERIALIZED VIEW",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE MATERIALIZED VIEW"},next:{title:"CREATE RESOURCE",permalink:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE RESOURCE"}},t={},o=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"create-repository",children:"CREATE REPOSITORY"}),"\n",(0,c.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,c.jsxs)(s.p,{children:["\u57fa\u4e8e\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u521b\u5efa\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u5feb\u7167\u7684\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e ",(0,c.jsx)(s.a,{href:"/zh/docs/administration/Backup_and_restore",children:"\u5907\u4efd\u548c\u6062\u590d"})," \u6570\u636e\u5e93\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,c.jsx)(s.p,{children:"\u53ea\u6709\u62e5\u6709 System \u7ea7 REPOSITORY \u6743\u9650\u7684\u7528\u6237\u624d\u53ef\u4ee5\u521b\u5efa\u4ed3\u5e93\u3002"}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5220\u9664\u4ed3\u5e93\u64cd\u4f5c\u8bf7\u53c2\u8003 ",(0,c.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/DROP%20REPOSITORY",children:"DROP REPOSITORY"})," \u7ae0\u8282\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-SQL",children:'CREATE [READ ONLY] REPOSITORY <repository_name>\nWITH BROKER\nON LOCATION "<repository_location>"\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,c.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:(0,c.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,c.jsx)(s.th,{children:(0,c.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"READ ONLY"}),(0,c.jsx)(s.td,{children:"\u521b\u5efa\u53ea\u8bfb\u4ed3\u5e93\u3002\u8bf7\u6ce8\u610f\u53ea\u8bfb\u4ed3\u5e93\u53ea\u53ef\u8fdb\u884c\u6062\u590d\u64cd\u4f5c\u3002\u5f53\u4e3a\u4e24\u4e2a\u96c6\u7fa4\u521b\u5efa\u76f8\u540c\u4ed3\u5e93\uff0c\u7528\u4ee5\u8fc1\u79fb\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u4e3a\u65b0\u96c6\u7fa4\u521b\u5efa\u53ea\u8bfb\u4ed3\u5e93\uff0c\u4ec5\u8d4b\u4e88\u5176\u6062\u590d\u7684\u6743\u9650\u3002"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"repository_name"}),(0,c.jsx)(s.td,{children:"\u4ed3\u5e93\u540d\u3002"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"repository_location"}),(0,c.jsx)(s.td,{children:"\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u8def\u5f84\u3002"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"PROPERTIES"}),(0,c.jsx)(s.td,{children:"\u8bbf\u95ee\u8fdc\u7aef\u5b58\u50a8\u7cfb\u7edf\u7684\u8282\u70b9\u53ca\u5bc6\u94a5\u6216\u7528\u6237\u540d\u53ca\u5bc6\u7801\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u89c1\u4ee5\u4e0b\u8bf4\u660e\u3002"})]})]})]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"PROPERTIES"}),"\uff1a"]}),"\n",(0,c.jsx)(s.p,{children:"StarRocks \u652f\u6301\u5728 HDFS\u3001AWS S3\u3001Google GCS\u3001\u963f\u91cc\u4e91 OSS \u4ee5\u53ca\u817e\u8baf\u4e91 COS \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"HDFS\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:'"username"\uff1a\u7528\u4e8e\u8bbf\u95ee HDFS \u96c6\u7fa4\u4e2d NameNode \u8282\u70b9\u7684\u7528\u6237\u540d\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"password"\uff1a\u7528\u4e8e\u8bbf\u95ee HDFS \u96c6\u7fa4\u4e2d NameNode \u8282\u70b9\u7684\u5bc6\u7801\u3002'}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"S3\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:['"aws.s3.use_instance_profile"\uff1a\u662f\u5426\u4f7f\u7528 Instance Profile \u6216 Assumed Role \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u8bbf\u95ee AWS S3\u3002\u9ed8\u8ba4\u503c\uff1a',(0,c.jsx)(s.code,{children:"false"}),"\u3002"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:'\u5982\u679c\u60a8\u4f7f\u7528 IAM \u7528\u6237\u51ed\u8bc1\uff08Access Key \u548c Secret Key\uff09\u8bbf\u95ee AWS S3\uff0c\u5219\u65e0\u9700\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5e76\u6307\u5b9a "aws.s3.access_key"\u3001"aws.s3.secret_key" \u4ee5\u53ca "aws.s3.endpoint"\u3002'}),"\n",(0,c.jsxs)(s.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528 Instance Profile \u8bbf\u95ee AWS S3\uff0c\u5219\u9700\u5c06\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(s.code,{children:"true"}),'\uff0c\u5e76\u6307\u5b9a "aws.s3.region"\u3002']}),"\n",(0,c.jsxs)(s.li,{children:["\u5982\u679c\u60a8\u4f7f\u7528 Assumed Role \u8bbf\u95ee AWS S3\uff0c\u5219\u9700\u5c06\u8be5\u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,c.jsx)(s.code,{children:"true"}),'\uff0c\u5e76\u6307\u5b9a "aws.s3.iam_role_arn" \u548c "aws.s3.region"\u3002']}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:'"aws.s3.access_key"\uff1a\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Access Key\u3002'}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:'"aws.s3.secret_key"\uff1a\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Secret Key\u3002'}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:'"aws.s3.endpoint"\uff1a\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\u3002'}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:'"aws.s3.iam_role_arn"\uff1a\u6709\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u6743\u9650 IAM Role \u7684 ARN\u3002\u5982\u4f7f\u7528 Instance Profile \u6216 Assumed Role \u4f5c\u4e3a\u5b89\u5168\u51ed\u8bc1\u8bbf\u95ee AWS S3\uff0c\u5219\u5fc5\u987b\u6307\u5b9a\u8be5\u53c2\u6570\u3002'}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:['"aws.s3.region"\uff1a\u9700\u8bbf\u95ee\u7684 AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5730\u533a\uff0c\u5982 ',(0,c.jsx)(s.code,{children:"us-west-1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,c.jsxs)(s.p,{children:["StarRocks \u4ec5\u652f\u6301\u901a\u8fc7 S3A \u534f\u8bae\u5728 AWS S3 \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002\u56e0\u6b64\uff0c\u5f53\u60a8\u5728 AWS S3 \u4e2d\u521b\u5efa\u4ed3\u5e93\u65f6\uff0c\u5fc5\u987b\u5728 ",(0,c.jsx)(s.code,{children:"ON LOCATION"})," \u53c2\u6570\u4e0b\u5c06 S3 URI \u4e2d\u7684 ",(0,c.jsx)(s.code,{children:"s3://"})," \u66ff\u6362\u4e3a ",(0,c.jsx)(s.code,{children:"s3a://"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["GCS\uff1a","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:'"fs.s3a.access.key"\uff1a\u8bbf\u95ee Google GCS \u5b58\u50a8\u7a7a\u95f4\u7684 Access Key\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.s3a.secret.key"\uff1a\u8bbf\u95ee Google GCS \u5b58\u50a8\u7a7a\u95f4\u7684 Secret Key\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.s3a.endpoint"\uff1a\u8bbf\u95ee Google GCS \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,c.jsxs)(s.p,{children:["StarRocks \u4ec5\u652f\u6301\u901a\u8fc7 S3A \u534f\u8bae\u5728 Google GCS \u4e2d\u521b\u5efa\u4ed3\u5e93\u3002 \u56e0\u6b64\uff0c\u5f53\u60a8\u5728 Google GCS \u4e2d\u521b\u5efa\u4ed3\u5e93\u65f6\uff0c\u5fc5\u987b\u5728 ",(0,c.jsx)(s.code,{children:"ON LOCATION"})," \u53c2\u6570\u4e0b\u5c06 GCS URI \u7684\u524d\u7f00\u66ff\u6362\u4e3a ",(0,c.jsx)(s.code,{children:"s3a://"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"OSS\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:'"fs.oss.accessKeyId"\uff1a\u8bbf\u95ee\u963f\u91cc\u4e91 OSS \u5b58\u50a8\u7a7a\u95f4\u7684 AccessKey ID\uff0c\u7528\u4e8e\u6807\u8bc6\u7528\u6237\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.oss.accessKeySecret"\uff1a\u8bbf\u95ee\u963f\u91cc\u4e91 OSS \u5b58\u50a8\u7a7a\u95f4\u7684 AccessKey Secret\uff0c\u662f\u7528\u4e8e\u52a0\u5bc6\u7b7e\u540d\u5b57\u7b26\u4e32\u548c OSS \u7528\u6765\u9a8c\u8bc1\u7b7e\u540d\u5b57\u7b26\u4e32\u7684\u5bc6\u94a5\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.oss.endpoint"\uff1a\u8bbf\u95ee\u963f\u91cc\u4e91 OSS \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\u3002'}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"COS\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:'"fs.cosn.userinfo.secretId"\uff1a\u8bbf\u95ee\u817e\u8baf\u4e91 COS \u5b58\u50a8\u7a7a\u95f4\u7684 SecretId\uff0c\u7528\u4e8e\u6807\u8bc6 API \u8c03\u7528\u8005\u7684\u8eab\u4efd\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.cosn.userinfo.secretKey"\uff1a\u8bbf\u95ee\u817e\u8baf\u4e91 COS \u5b58\u50a8\u7a7a\u95f4\u7684 SecretKey\uff0c\u662f\u7528\u4e8e\u52a0\u5bc6\u7b7e\u540d\u5b57\u7b26\u4e32\u548c\u670d\u52a1\u7aef\u9a8c\u8bc1\u7b7e\u540d\u5b57\u7b26\u4e32\u7684\u5bc6\u94a5\u3002'}),"\n",(0,c.jsx)(s.li,{children:'"fs.cosn.bucket.endpoint_suffix"\uff1a\u8bbf\u95ee\u817e\u8baf\u4e91 COS \u5b58\u50a8\u7a7a\u95f4\u7684\u8fde\u63a5\u5730\u5740\u3002'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,c.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u5728 Apache\u2122 Hadoop\xae \u96c6\u7fa4\u4e2d\u521b\u5efa\u540d\u4e3a ",(0,c.jsx)(s.code,{children:"hdfs_repo"})," \u7684\u4ed3\u5e93\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY hdfs_repo\nWITH BROKER\nON LOCATION "hdfs://x.x.x.x:yyyy/repo_dir/backup"\nPROPERTIES(\n    "username" = "xxxxxxxx",\n    "password" = "yyyyyyyy"\n);\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5728 Amazon S3 \u5b58\u50a8\u6876 ",(0,c.jsx)(s.code,{children:"bucket_s3"})," \u4e2d\u521b\u5efa\u540d\u4e3a ",(0,c.jsx)(s.code,{children:"s3_repo"})," \u7684\u53ea\u8bfb\u4ed3\u5e93\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-SQL",children:'CREATE READ ONLY REPOSITORY s3_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.access_key" = "XXXXXXXXXXXXXXXXX",\n    "aws.s3.secret_key" = "yyyyyyyyyyyyyyyyy",\n    "aws.s3.endpoint" = "s3.us-east-1.amazonaws.com"\n);\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u5728 Google GCS \u5b58\u50a8\u6876 ",(0,c.jsx)(s.code,{children:"bucket_gcs"})," \u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,c.jsx)(s.code,{children:"gcs_repo"})," \u7684\u4ed3\u5e93\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY gcs_repo\nWITH BROKER\nON LOCATION "s3a://bucket_gcs/backup"\nPROPERTIES(\n    "fs.s3a.access.key" = "xxxxxxxxxxxxxxxxxxxx",\n    "fs.s3a.secret.key" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.s3a.endpoint" = "storage.googleapis.com"\n);\n'})})]})}const x=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var c=n(67294);const r=c.createContext({});function i(e){const s=c.useContext(r);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:i(e),c.createElement(r.Provider,{value:d},s)}}}]);