"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25489],{60143:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=s(85893),c=s(11151);const i={displayed_sidebar:"Chinese31"},r="AWS IAM \u7b56\u7565",a={id:"reference/aws_iam_policies",title:"AWS IAM \u7b56\u7565",description:"IAM \u7b56\u7565\u7528\u4e8e\u58f0\u660e\u7279\u5b9a AWS \u8d44\u6e90\u7684\u4e00\u7ec4\u8bbf\u95ee\u6743\u9650\u3002\u521b\u5efa IAM \u7b56\u7565\u540e\uff0c\u60a8\u9700\u8981\u5c06\u521b\u5efa\u597d\u7684\u7b56\u7565\u6dfb\u52a0\u5230\u67d0\u4e2a IAM \u7528\u6237\u6216\u89d2\u8272\uff0c\u4ece\u800c\u4f7f\u8be5 IAM \u7528\u6237\u6216\u89d2\u8272\u62e5\u6709\u8be5\u7b56\u7565\u4e2d\u6240\u58f0\u660e\u7684\u8bbf\u95ee\u7279\u5b9a AWS \u8d44\u6e90\u7684\u6743\u9650\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/reference/aws_iam_policies.md",sourceDirName:"reference",slug:"/reference/aws_iam_policies",permalink:"/doc/zh/docs/2.5/reference/aws_iam_policies",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/reference/aws_iam_policies.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u7cfb\u7edf\u9650\u5236",permalink:"/doc/zh/docs/2.5/reference/System_limit"},next:{title:"FAQ",permalink:"/doc/zh/docs/2.5/category/faq-1"}},l={},o=[{value:"\u4ece AWS S3 \u6279\u91cf\u5bfc\u5165\u6570\u636e",id:"\u4ece-aws-s3-\u6279\u91cf\u5bfc\u5165\u6570\u636e",level:2},{value:"\u4ece AWS S3 \u8bfb\u5199\u6570\u636e",id:"\u4ece-aws-s3-\u8bfb\u5199\u6570\u636e",level:2},{value:"\u5bf9\u63a5 AWS Glue",id:"\u5bf9\u63a5-aws-glue",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aws-iam-\u7b56\u7565",children:"AWS IAM \u7b56\u7565"}),"\n",(0,t.jsx)(n.p,{children:"IAM \u7b56\u7565\u7528\u4e8e\u58f0\u660e\u7279\u5b9a AWS \u8d44\u6e90\u7684\u4e00\u7ec4\u8bbf\u95ee\u6743\u9650\u3002\u521b\u5efa IAM \u7b56\u7565\u540e\uff0c\u60a8\u9700\u8981\u5c06\u521b\u5efa\u597d\u7684\u7b56\u7565\u6dfb\u52a0\u5230\u67d0\u4e2a IAM \u7528\u6237\u6216\u89d2\u8272\uff0c\u4ece\u800c\u4f7f\u8be5 IAM \u7528\u6237\u6216\u89d2\u8272\u62e5\u6709\u8be5\u7b56\u7565\u4e2d\u6240\u58f0\u660e\u7684\u8bbf\u95ee\u7279\u5b9a AWS \u8d44\u6e90\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 StarRocks \u4e2d\uff0c\u4e0d\u540c\u7684\u64cd\u4f5c\u6d89\u53ca\u7684 AWS \u8d44\u6e90\u4e5f\u4e0d\u540c\u3002\u56e0\u6b64\uff0c\u60a8\u9700\u8981\u6839\u636e\u8981\u8bbf\u95ee\u7684 AWS \u8d44\u6e90\u6765\u521b\u5efa IAM \u7b56\u7565\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u4e3a\u786e\u4fdd StarRocks \u80fd\u591f\u6b63\u786e\u8bbf\u95ee\u6240\u6d89\u53ca\u7684 AWS \u8d44\u6e90\u9700\u8981\u914d\u7f6e\u54ea\u4e9b IAM \u7b56\u7565\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4ece-aws-s3-\u6279\u91cf\u5bfc\u5165\u6570\u636e",children:"\u4ece AWS S3 \u6279\u91cf\u5bfc\u5165\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u9700\u8981\u4ece S3 Bucket \u6279\u91cf\u5bfc\u5165\u6570\u636e\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e IAM \u7b56\u7565\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u9700\u8981\u5c06\u4e0b\u9762\u7b56\u7565\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"<bucket_name>"})," \u66ff\u6362\u4e3a\u6570\u636e\u6240\u5728\u7684 S3 Bucket \u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Sid": "s3",\n          "Effect": "Allow",\n          "Action": [\n              "s3:GetObject"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>/*"\n          ]\n      },\n      {\n          "Sid": "s3list",\n          "Effect": "Allow",\n          "Action": [\n              "s3:ListBucket"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>"\n          ]\n      }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u4ece-aws-s3-\u8bfb\u5199\u6570\u636e",children:"\u4ece AWS S3 \u8bfb\u5199\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u9700\u8981\u4ece S3 Bucket \u67e5\u8be2\u6570\u636e\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e IAM \u7b56\u7565\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u9700\u8981\u5c06\u4e0b\u9762\u7b56\u7565\u4e2d\u7684 ",(0,t.jsx)(n.code,{children:"<bucket_name>"})," \u66ff\u6362\u4e3a\u6570\u636e\u6240\u5728\u7684 S3 Bucket \u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n      {\n          "Sid": "s3",\n          "Effect": "Allow",\n          "Action": [\n              "s3:GetObject", \n              "s3:PutObject"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>/*"\n          ]\n      },\n      {\n          "Sid": "s3list",\n          "Effect": "Allow",\n          "Action": [\n              "s3:ListBucket"\n          ],\n          "Resource": [\n              "arn:aws:s3:::<bucket_name>"\n          ]\n      }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5bf9\u63a5-aws-glue",children:"\u5bf9\u63a5 AWS Glue"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60a8\u9700\u8981\u5bf9\u63a5 AWS Glue\uff0c\u8bf7\u6309\u5982\u4e0b\u914d\u7f6e IAM \u7b56\u7565\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n      {\n          "Effect": "Allow",\n          "Action": [\n              "glue:GetDatabase",\n              "glue:GetDatabases",\n              "glue:GetPartition",\n              "glue:GetPartitions",\n              "glue:GetTable",\n              "glue:GetTableVersions",\n              "glue:GetTables",\n              "glue:GetConnection",\n              "glue:GetConnections",\n              "glue:GetDevEndpoint",\n              "glue:GetDevEndpoints",\n              "glue:BatchGetPartition"\n          ],\n          "Resource": [\n              "*"\n            ]\n        }\n    ]\n}\n'})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const c=t.createContext({});function i(e){const n=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),t.createElement(c.Provider,{value:a},n)}}}]);