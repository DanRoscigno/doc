"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[76075],{34122:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151);const o={displayed_sidebar:"documentation"},a="CREATE REPOSITORY",c={id:"sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",title:"CREATE REPOSITORY",description:"Description",source:"@site/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/sql-reference/sql-statements/data-definition/CREATE_REPOSITORY.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"CREATE MATERIALIZED VIEW",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW"},next:{title:"CREATE RESOURCE",permalink:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/CREATE_RESOURCE"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"create-repository",children:"CREATE REPOSITORY"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["Creates a repository in a remote storage system that is used to store data snapshots for ",(0,t.jsx)(s.a,{href:"/doc/docs/2.5/administration/Backup_and_restore",children:"backing up and restoring data"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"CAUTION"})}),"\n",(0,t.jsx)(s.p,{children:"Only users with the ADMIN privilege can create a repository."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For detailed instructions on deleting a repository, see ",(0,t.jsx)(s.a,{href:"/doc/docs/2.5/sql-reference/sql-statements/data-definition/DROP_REPOSITORY",children:"DROP REPOSITORY"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE [READ ONLY] REPOSITORY <repository_name>\nWITH BROKER\nON LOCATION "<repository_location>"\nPROPERTIES ("key"="value", ...)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Parameter"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Description"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"READ ONLY"}),(0,t.jsx)(s.td,{children:"Create a read-only repository. Note that you can only restore data from a read-only repository. When creating the same repository for two clusters to migrate data, you can create a read-only repository for the new cluster and only grant it RESTORE permissions."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"repository_name"}),(0,t.jsx)(s.td,{children:"Repository name."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"repository_location"}),(0,t.jsx)(s.td,{children:"Location of the repository in the remote storage system."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PROPERTIES"}),(0,t.jsx)(s.td,{children:"The credential method for accessing the remote storage system."})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"PROPERTIES"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"StarRocks supports creating repositories in HDFS, AWS S3, and Google GCS."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"For HDFS:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'"username": The username of the account that you want to use to access the NameNode of the HDFS cluster.'}),"\n",(0,t.jsx)(s.li,{children:'"password": The password of the account that you want to use to access the NameNode of the HDFS cluster.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"For AWS S3:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['"aws.s3.use_instance_profile": Whether or not to allow instance profile and assumed role as credential methods for accessing AWS S3. Default: ',(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'If you use IAM user-based credential (Access Key and Secret Key) to access AWS S3, you don\'t need to specify this parameter, and you need to specify "aws.s3.access_key", "aws.s3.secret_key", and "aws.s3.endpoint".'}),"\n",(0,t.jsxs)(s.li,{children:["If you use Instance Profile to access AWS S3, you need to set this parameter to ",(0,t.jsx)(s.code,{children:"true"}),' and specify "aws.s3.region".']}),"\n",(0,t.jsxs)(s.li,{children:["If you use Assumed Role to access AWS S3, you need to set this parameter to ",(0,t.jsx)(s.code,{children:"true"}),' and specify "aws.s3.iam_role_arn" and "aws.s3.region".']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'"aws.s3.access_key": The Access Key ID that you can use to access the Amazon S3 bucket.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'"aws.s3.secret_key": The Secret Access Key that you can use to access the Amazon S3 bucket.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'"aws.s3.endpoint": The endpoint that you can use to access the Amazon S3 bucket.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'"aws.s3.iam_role_arn": The ARN of the IAM role that has privileges on the AWS S3 bucket in which your data files are stored. If you want to use assumed role as the credential method for accessing AWS S3, you must specify this parameter. Then, StarRocks will assume this role when it analyzes your Hive data by using a Hive catalog.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['"aws.s3.region": The region in which your AWS S3 bucket resides. Example: ',(0,t.jsx)(s.code,{children:"us-west-1"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.p,{children:["StarRocks supports creating repositories in AWS S3 only according to the S3A protocol. Therefore, when you create repositories in AWS S3, you must replace ",(0,t.jsx)(s.code,{children:"s3://"})," in the S3 URI you pass as a repository location in ",(0,t.jsx)(s.code,{children:"ON LOCATION"})," with ",(0,t.jsx)(s.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For Google GCS:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'"fs.s3a.access.key": The Access Key that you can use to access the Google GCS bucket.'}),"\n",(0,t.jsx)(s.li,{children:'"fs.s3a.secret.key": The Secret Key that you can use to access the Google GCS bucket.'}),"\n",(0,t.jsx)(s.li,{children:'"fs.s3a.endpoint": The endpoint that you can use to access the Google GCS bucket.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,t.jsxs)(s.p,{children:["StarRocks supports creating repositories in Google GCS only according to the S3A protocol. Therefore, when you create repositories in Google GCS, you must replace the prefix in the GCS URI you pass as a repository location in ",(0,t.jsx)(s.code,{children:"ON LOCATION"})," with ",(0,t.jsx)(s.code,{children:"s3a://"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["Example 1: Create a repository named ",(0,t.jsx)(s.code,{children:"hdfs_repo"})," in an Apache\u2122 Hadoop\xae cluster."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY hdfs_repo\nWITH BROKER\nON LOCATION "hdfs://x.x.x.x:yyyy/repo_dir/backup"\nPROPERTIES(\n    "username" = "xxxxxxxx",\n    "password" = "yyyyyyyy"\n);\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Example 2: Create a read-only repository named ",(0,t.jsx)(s.code,{children:"s3_repo"})," in the Amazon S3 bucket ",(0,t.jsx)(s.code,{children:"bucket_s3"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE READ ONLY REPOSITORY s3_repo\nWITH BROKER\nON LOCATION "s3a://bucket_s3/backup"\nPROPERTIES(\n    "aws.s3.access_key" = "XXXXXXXXXXXXXXXXX",\n    "aws.s3.secret_key" = "yyyyyyyyyyyyyyyyy",\n    "aws.s3.endpoint" = "s3.us-east-1.amazonaws.com"\n);\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Example 3: Create a repository named ",(0,t.jsx)(s.code,{children:"gcs_repo"})," in the Google GCS bucket ",(0,t.jsx)(s.code,{children:"bucket_gcs"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE REPOSITORY gcs_repo\nWITH BROKER\nON LOCATION "s3a://bucket_gcs/backup"\nPROPERTIES(\n    "fs.s3a.access.key" = "xxxxxxxxxxxxxxxxxxxx",\n    "fs.s3a.secret.key" = "yyyyyyyyyyyyyyyyyyyy",\n    "fs.s3a.endpoint" = "storage.googleapis.com"\n);\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>o});var t=n(67294);const r=t.createContext({});function o(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||a:o(e),t.createElement(r.Provider,{value:c},s)}}}]);