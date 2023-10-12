"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28510],{73058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const o={},r="AWS IAM policies",c={id:"reference/aws_iam_policies",title:"AWS IAM policies",description:"A policy in AWS IAM declares a set of permissions on a specific AWS resource. After creating a policy, you need to attach it to an IAM role or user. As such, the IAM role or user is assigned the permissions declared in the policy to access the specified AWS resource.",source:"@site/versioned_docs/version-3.0/reference/aws_iam_policies.md",sourceDirName:"reference",slug:"/reference/aws_iam_policies",permalink:"/doc/docs/3.0/reference/aws_iam_policies",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/reference/aws_iam_policies.md",tags:[],version:"3.0",frontMatter:{},sidebar:"Chinese31",previous:{title:"System limits",permalink:"/doc/docs/3.0/reference/System_limit"},next:{title:"FAQ",permalink:"/doc/docs/3.0/category/faq-1"}},a={},l=[{value:"Batch load data from AWS S3",id:"batch-load-data-from-aws-s3",level:2},{value:"Read/write AWS S3",id:"readwrite-aws-s3",level:2},{value:"Integrate with AWS Glue",id:"integrate-with-aws-glue",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aws-iam-policies",children:"AWS IAM policies"}),"\n",(0,s.jsx)(n.p,{children:"A policy in AWS IAM declares a set of permissions on a specific AWS resource. After creating a policy, you need to attach it to an IAM role or user. As such, the IAM role or user is assigned the permissions declared in the policy to access the specified AWS resource."}),"\n",(0,s.jsx)(n.p,{children:"Different operations in StarRocks require you to have access permissions on different AWS resources, and therefore you need to configure different policies."}),"\n",(0,s.jsx)(n.p,{children:"This topic provides the IAM policies that you need to configure for StarRocks to integrate with different AWS resources in various business scenarios."}),"\n",(0,s.jsx)(n.h2,{id:"batch-load-data-from-aws-s3",children:"Batch load data from AWS S3"}),"\n",(0,s.jsx)(n.p,{children:"If you want to load data from your S3 bucket, configure the following IAM policy:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<bucket_name>"})," in the following JSON policy template with the name of your S3 bucket that stores your data files."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Sid": "s3",\n          "Effect": "Allow",\n          "Action": [\n              "s3:GetObject"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>/*"\n          ]\n      },\n      {\n          "Sid": "s3list",\n          "Effect": "Allow",\n          "Action": [\n              "s3:ListBucket"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>"\n          ]\n      }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"readwrite-aws-s3",children:"Read/write AWS S3"}),"\n",(0,s.jsx)(n.p,{children:"If you want to query data from your S3 bucket, configure the following IAM policy:"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTICE"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<bucket_name>"})," in the following JSON policy template with the name of your S3 bucket that stores your data files."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Sid": "s3",\n          "Effect": "Allow",\n          "Action": [\n              "s3:GetObject", \n              "s3:PutObject"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>/*"\n          ]\n      },\n      {\n          "Sid": "s3list",\n          "Effect": "Allow",\n          "Action": [\n              "s3:ListBucket"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>"\n          ]\n      }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"integrate-with-aws-glue",children:"Integrate with AWS Glue"}),"\n",(0,s.jsx)(n.p,{children:"If you want to integrate with your AWS Glue Data Catalog, configure the following IAM policy:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n      {\n          "Effect": "Allow",\n          "Action": [\n              "glue:GetDatabase",\n              "glue:GetDatabases",\n              "glue:GetPartition",\n              "glue:GetPartitions",\n              "glue:GetTable",\n              "glue:GetTableVersions",\n              "glue:GetTables",\n              "glue:GetConnection",\n              "glue:GetConnections",\n              "glue:GetDevEndpoint",\n              "glue:GetDevEndpoints",\n              "glue:BatchGetPartition"\n          ],\n          "Resource": [\n              "*"\n            ]\n        }\n    ]\n}\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(67294);const i=s.createContext({});function o(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:o(e),s.createElement(i.Provider,{value:c},n)}}}]);