"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60159],{79038:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(85893),a=n(11151);const i={displayed_sidebar:"documentation"},r="Authenticate to AWS resources",o={id:"integrations/authenticate_to_aws_resources",title:"Authenticate to AWS resources",description:"StarRocks supports using three authentication methods to integrate with AWS resources: instance profile-based authentication, assumed role-based authentication, and IAM user-based authentication. This topic describes how to configure AWS credentials by using these authentication methods.",source:"@site/versioned_docs/version-3.0/integrations/authenticate_to_aws_resources.md",sourceDirName:"integrations",slug:"/integrations/authenticate_to_aws_resources",permalink:"/doc/docs/3.0/integrations/authenticate_to_aws_resources",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/integrations/authenticate_to_aws_resources.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Integrations",permalink:"/doc/docs/3.0/category/integrations"},next:{title:"Authenticate to Microsoft Azure Storage",permalink:"/doc/docs/3.0/integrations/authenticate_to_azure_storage"}},c={},l=[{value:"Authentication methods",id:"authentication-methods",level:2},{value:"Instance profile-based authentication",id:"instance-profile-based-authentication",level:3},{value:"Assumed role-based authentication",id:"assumed-role-based-authentication",level:3},{value:"IAM user-based authentication",id:"iam-user-based-authentication",level:3},{value:"Preparations",id:"preparations",level:2},{value:"Preparation for instance profile-based authentication",id:"preparation-for-instance-profile-based-authentication",level:3},{value:"Preparation for assumed role-based authentication",id:"preparation-for-assumed-role-based-authentication",level:3},{value:"Create IAM roles and attach policies to them",id:"create-iam-roles-and-attach-policies-to-them",level:4},{value:"Configure a trust relationship",id:"configure-a-trust-relationship",level:4},{value:"Preparation for IAM user-based authentication",id:"preparation-for-iam-user-based-authentication",level:3},{value:"Comparison between authentication methods",id:"comparison-between-authentication-methods",level:2},{value:"Build connections with AWS resources",id:"build-connections-with-aws-resources",level:2},{value:"Authentication parameters for accessing AWS S3",id:"authentication-parameters-for-accessing-aws-s3",level:3},{value:"Authentication parameters for accessing AWS Glue",id:"authentication-parameters-for-accessing-aws-glue",level:3},{value:"Integration examples",id:"integration-examples",level:2},{value:"External catalog",id:"external-catalog",level:3},{value:"Instance profile-based authentication",id:"instance-profile-based-authentication-1",level:4},{value:"Assumed role-based authentication",id:"assumed-role-based-authentication-1",level:4},{value:"IAM user-based authentication",id:"iam-user-based-authentication-1",level:4},{value:"File external table",id:"file-external-table",level:3},{value:"Instance profile-based authentication",id:"instance-profile-based-authentication-2",level:4},{value:"Assumed role-based authentication",id:"assumed-role-based-authentication-2",level:4},{value:"IAM user-based authentication",id:"iam-user-based-authentication-2",level:4},{value:"Ingestion",id:"ingestion",level:3},{value:"Instance profile-based authentication",id:"instance-profile-based-authentication-3",level:4},{value:"Assumed role-based authentication",id:"assumed-role-based-authentication-3",level:4},{value:"IAM user-based authentication",id:"iam-user-based-authentication-3",level:4}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",h4:"h4",code:"code",ol:"ol",pre:"pre",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"authenticate-to-aws-resources",children:"Authenticate to AWS resources"}),"\n",(0,t.jsx)(s.p,{children:"StarRocks supports using three authentication methods to integrate with AWS resources: instance profile-based authentication, assumed role-based authentication, and IAM user-based authentication. This topic describes how to configure AWS credentials by using these authentication methods."}),"\n",(0,t.jsx)(s.h2,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,t.jsx)(s.h3,{id:"instance-profile-based-authentication",children:"Instance profile-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"The instance profile-based authentication method allows your StarRocks cluster to inherit the privileges specified in the instance profile of the EC2 instance on which the cluster runs. In theory, any cluster user who can log in to the cluster can perform permitted actions on your AWS resources according to the AWS IAM policies you have configured. The typical scenario for this use case is that you do not need any AWS resource access control between multiple cluster users in the cluster. This authentication method means no isolation is required within the same cluster."}),"\n",(0,t.jsx)(s.p,{children:"However, this authentication method still can be seen as a cluster-level safe access control solution, because whoever can log in to the cluster is controlled by the cluster administrator."}),"\n",(0,t.jsx)(s.h3,{id:"assumed-role-based-authentication",children:"Assumed role-based authentication"}),"\n",(0,t.jsxs)(s.p,{children:["Unlike instance profile-based authentication, the assumed role-based authentication method supports assuming an AWS IAM role to gain access to your AWS resources. For more information, see ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-sharing-logs-assume-role.html",children:"Assuming a role"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"iam-user-based-authentication",children:"IAM user-based authentication"}),"\n",(0,t.jsxs)(s.p,{children:["The IAM user-based authentication method supports using IAM user credentials to gain access to your AWS resources. For more information, see ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",children:"IAM users"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"preparations",children:"Preparations"}),"\n",(0,t.jsx)(s.p,{children:"First, find the IAM role associated with the EC2 instance on which your StarRocks cluster runs (that role is referred to as the EC2 instance role hereinafter in this topic), and obtain the role's ARN. You will need the EC2 instance role for instance profile-based authentication and need the EC2 instance role and its ARN for assumed role-based authentication."}),"\n",(0,t.jsx)(s.p,{children:"Next step, create an IAM policy based on the type of AWS resource you want to access and the specific operation scenario within StarRocks. A policy in AWS IAM declares a set of permissions on a specific AWS resource. After creating a policy, you need to attach it to an IAM role or user. As such, the IAM role or user is assigned the permissions declared in the policy to access the specified AWS resource."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTICE"})}),"\n",(0,t.jsxs)(s.p,{children:["To make these preparations, you must have permission to sign in to the ",(0,t.jsx)(s.a,{href:"https://us-east-1.console.aws.amazon.com/iamv2/home#/home",children:"AWS IAM console"})," and edit IAM users and roles."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For the IAM policy you will need to access a specific AWS resource, see the following sections:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies#batch-load-data-from-aws-s3",children:"Batch load data from AWS S3"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies#readwrite-aws-s3",children:"Read/write AWS S3"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies#integrate-with-aws-glue",children:"Integrate with AWS Glue"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"preparation-for-instance-profile-based-authentication",children:"Preparation for instance profile-based authentication"}),"\n",(0,t.jsxs)(s.p,{children:["Attach the ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies",children:"IAM policies"})," for accessing the required AWS resources to the EC2 instance role."]}),"\n",(0,t.jsx)(s.h3,{id:"preparation-for-assumed-role-based-authentication",children:"Preparation for assumed role-based authentication"}),"\n",(0,t.jsx)(s.h4,{id:"create-iam-roles-and-attach-policies-to-them",children:"Create IAM roles and attach policies to them"}),"\n",(0,t.jsxs)(s.p,{children:["Create one or more IAM roles, depending on the AWS resources you want to access. See ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html",children:"Creating IAM roles"}),". Then, attach the ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies",children:"IAM policies"})," for accessing the required AWS resources to the IAM roles you create."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, you want your StarRocks cluster to access AWS S3 and AWS Glue. In this situation, you can choose to create one IAM role (for example, ",(0,t.jsx)(s.code,{children:"s3_assumed_role"}),"), and attach the policy for accessing AWS S3 and the policy for accessing AWS Glue both to that role. Alternatively, you can choose to create two different IAM roles (for example, ",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," and ",(0,t.jsx)(s.code,{children:"glue_assumed_role"}),"), and attach these policies to the two different roles respectively (that is, attach the policy for accessing AWS S3 to ",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," and the policy for accessing AWS Glue to ",(0,t.jsx)(s.code,{children:"glue_assumed_role"}),")."]}),"\n",(0,t.jsx)(s.p,{children:"The IAM roles you create will be assumed by the EC2 instance role of the StarRocks cluster to access the specified AWS resources."}),"\n",(0,t.jsxs)(s.p,{children:["This section assumes that you have created only one assumed role, ",(0,t.jsx)(s.code,{children:"s3_assumed_role"}),", and have added the policy for accessing AWS S3 and the policy for accessing AWS Glue both to that role."]}),"\n",(0,t.jsx)(s.h4,{id:"configure-a-trust-relationship",children:"Configure a trust relationship"}),"\n",(0,t.jsx)(s.p,{children:"Configure your assumed role as follows:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Sign in to the ",(0,t.jsx)(s.a,{href:"https://us-east-1.console.aws.amazon.com/iamv2/home#/home",children:"AWS IAM console"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the left-side navigation pane, choose ",(0,t.jsx)(s.strong,{children:"Access management"})," > ",(0,t.jsx)(s.strong,{children:"Roles"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Find the assumed role (",(0,t.jsx)(s.code,{children:"s3_assumed_role"}),") and click its name."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["On the role's details page, click the ",(0,t.jsx)(s.strong,{children:"Trust relationships"})," tab, and on the ",(0,t.jsx)(s.strong,{children:"Trust relationships"})," tab click ",(0,t.jsx)(s.strong,{children:"Edit trust policy"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["On the ",(0,t.jsx)(s.strong,{children:"Edit trust policy"})," page, delete the existing JSON policy document, and paste the following IAM policy, in which you must replace ",(0,t.jsx)(s.code,{children:"<cluster_EC2_iam_role_ARN>"})," with the EC2 instance role's ARN you have obtained above. Then, click ",(0,t.jsx)(s.strong,{children:"Update policy"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-JSON",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": "<cluster_EC2_iam_role_ARN>"\n            },\n            "Action": "sts:AssumeRole"\n        }\n    ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If you have created different assumed roles for accessing different AWS resources, you need to repeat the preceding steps to configure your other assumed roles. For example, you have created ",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," and ",(0,t.jsx)(s.code,{children:"glue_assumed_role"})," for accessing AWS S3 and AWS Glue respectively. In this situation, you need to repeat the preceding steps to configure ",(0,t.jsx)(s.code,{children:"glue_assumed_role"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Configure your EC2 instance role as follows:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Sign in to the ",(0,t.jsx)(s.a,{href:"https://us-east-1.console.aws.amazon.com/iamv2/home#/home",children:"AWS IAM console"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the left-side navigation pane, choose ",(0,t.jsx)(s.strong,{children:"Access management"})," > ",(0,t.jsx)(s.strong,{children:"Roles"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Find the EC2 instance role and click its name."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Permissions policies"})," section of the role's details page, click ",(0,t.jsx)(s.strong,{children:"Add permissions"})," and choose ",(0,t.jsx)(s.strong,{children:"Create inline policy"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Specify permissions"})," step, click the ",(0,t.jsx)(s.strong,{children:"JSON"})," tab, delete the existing JSON policy document, and paste the following IAM policy, in which you must replace ",(0,t.jsx)(s.code,{children:"<s3_assumed_role_ARN>"})," with the ARN of the assumed role ",(0,t.jsx)(s.code,{children:"s3_assumed_role"}),". Then, click ",(0,t.jsx)(s.strong,{children:"Review policy"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-JSON",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": ["sts:AssumeRole"],\n            "Resource": [\n                "<s3_assumed_role_ARN>"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["If you have created different assumed roles for accessing different AWS resources, you need to fill the ARNs of all these assumed roles in the ",(0,t.jsx)(s.strong,{children:"Resource"})," element of the preceding IAM policy and separate them with a comma (,). For example, you have created",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," and ",(0,t.jsx)(s.code,{children:"glue_assumed_role"})," for accessing AWS S3 and AWS Glue respectively. In this situation, you need to fill the ARN of ",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," and the ARN of ",(0,t.jsx)(s.code,{children:"glue_assumed_role"})," in the ",(0,t.jsx)(s.strong,{children:"Resource"})," element by using the following format: ",(0,t.jsx)(s.code,{children:'"<s3_assumed_role_ARN>","<glue_assumed_role_ARN>"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.strong,{children:"Review Policy"})," step, enter a policy name and click ",(0,t.jsx)(s.strong,{children:"Create policy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"preparation-for-iam-user-based-authentication",children:"Preparation for IAM user-based authentication"}),"\n",(0,t.jsxs)(s.p,{children:["Create an IAM user. See ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",children:"Creating an IAM user in your AWS account"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Then, attach the ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/reference/aws_iam_policies",children:"IAM policies"})," for accessing the required AWS resources to the IAM user you create."]}),"\n",(0,t.jsx)(s.h2,{id:"comparison-between-authentication-methods",children:"Comparison between authentication methods"}),"\n",(0,t.jsx)(s.p,{children:"The following figure provides a high-level explanation of the differences in mechanism between instance profile-based authentication, assumed role-based authentication, and IAM user-based authentication in StarRocks."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Comparison between authentication methods",src:n(23473).Z+"",width:"1430",height:"1608"})}),"\n",(0,t.jsx)(s.h2,{id:"build-connections-with-aws-resources",children:"Build connections with AWS resources"}),"\n",(0,t.jsx)(s.h3,{id:"authentication-parameters-for-accessing-aws-s3",children:"Authentication parameters for accessing AWS S3"}),"\n",(0,t.jsx)(s.p,{children:"In various scenarios in which StarRocks needs to integrate with AWS S3, for example, when you create external catalogs or file external tables or when you ingest, back up, or restore data from AWS S3, configure the authentication parameters for accessing AWS S3 as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For instance profile-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.s3.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["For assumed role-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.s3.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"true"})," and configure ",(0,t.jsx)(s.code,{children:"aws.s3.iam_role_arn"})," as the assumed role's ARN that you use to access AWS S3 (for example, the ARN of the assumed role ",(0,t.jsx)(s.code,{children:"s3_assumed_role"})," you have created above)."]}),"\n",(0,t.jsxs)(s.li,{children:["For IAM user-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.s3.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"false"})," and configure ",(0,t.jsx)(s.code,{children:"aws.s3.access_key"})," and ",(0,t.jsx)(s.code,{children:"aws.s3.secret_key"})," as the access key and secret key of your AWS IAM user."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The following table describes the parameters."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.s3.use_instance_profile"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsxs)(s.td,{children:["Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication method. Valid values: ",(0,t.jsx)(s.code,{children:"true"})," and ",(0,t.jsx)(s.code,{children:"false"}),". Default value: ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.s3.iam_role_arn"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The ARN of the IAM role that has privileges on your AWS S3 bucket. If you use the assumed role-based authentication method to access AWS S3, you must specify this parameter."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.s3.access_key"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The access key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The secret key of your IAM user. If you use the IAM user-based authentication method to access AWS S3, you must specify this parameter."})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"authentication-parameters-for-accessing-aws-glue",children:"Authentication parameters for accessing AWS Glue"}),"\n",(0,t.jsx)(s.p,{children:"In various scenarios in which StarRocks needs to integrate with AWS Glue, for example, when you create external catalogs, configure the authentication parameters for accessing AWS Glue as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["For instance profile-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.glue.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["For assumed role-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.glue.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"true"})," and configure ",(0,t.jsx)(s.code,{children:"aws.glue.iam_role_arn"})," as the assumed role's ARN that you use to access AWS Glue (for example, the ARN of the assumed role ",(0,t.jsx)(s.code,{children:"glue_assumed_role"})," you have created above)."]}),"\n",(0,t.jsxs)(s.li,{children:["For IAM user-based authentication, set ",(0,t.jsx)(s.code,{children:"aws.glue.use_instance_profile"})," to ",(0,t.jsx)(s.code,{children:"false"})," and configure ",(0,t.jsx)(s.code,{children:"aws.glue.access_key"})," and ",(0,t.jsx)(s.code,{children:"aws.glue.secret_key"})," as the access key and secret key of your AWS IAM user."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The following table describes the parameters."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.glue.use_instance_profile"}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsxs)(s.td,{children:["Specifies whether to enable the instance profile-based authentication method and the assumed role-based authentication. Valid values: ",(0,t.jsx)(s.code,{children:"true"})," and ",(0,t.jsx)(s.code,{children:"false"}),". Default value: ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.glue.iam_role_arn"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The ARN of the IAM role that has privileges on your AWS Glue Data Catalog. If you use the assumed role-based authentication method to access AWS Glue, you must specify this parameter."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.glue.access_key"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The access key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"aws.glue.secret_key"}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"The secret key of your AWS IAM user. If you use the IAM user-based authentication method to access AWS Glue, you must specify this parameter."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"integration-examples",children:"Integration examples"}),"\n",(0,t.jsx)(s.h3,{id:"external-catalog",children:"External catalog"}),"\n",(0,t.jsx)(s.p,{children:"Creating an external catalog in your StarRocks cluster means building integration with the target data lake system, which is composed of two key components:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"File storage like AWS S3 to store table files"}),"\n",(0,t.jsx)(s.li,{children:"Metastore like Hive metastore or AWS Glue to store the metadata and locations of table files"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"StarRocks supports the following types of catalogs:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive catalog"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/iceberg_catalog",children:"Iceberg catalog"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/hudi_catalog",children:"Hudi catalog"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/deltalake_catalog",children:"Delta Lake catalog"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The following examples create a Hive catalog named ",(0,t.jsx)(s.code,{children:"hive_catalog_hms"})," or ",(0,t.jsx)(s.code,{children:"hive_catalog_glue"}),", depending on the type of metastore you use, to query data from your Hive cluster. For detailed syntax and parameters, see ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/catalog/hive_catalog",children:"Hive catalog"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"instance-profile-based-authentication-1",children:"Instance profile-based authentication"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use Hive metastore in your Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_hms\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.uris" = "thrift://xx.xx.xx:9083"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use AWS Glue in your Amazon EMR Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_glue\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.type" = "glue",\n    "aws.glue.use_instance_profile" = "true",\n    "aws.glue.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"assumed-role-based-authentication-1",children:"Assumed role-based authentication"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use Hive metastore in your Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_hms\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/s3_assumed_role",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.uris" = "thrift://xx.xx.xx:9083"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use AWS Glue in your Amazon EMR Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_glue\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/s3_assumed_role",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.type" = "glue",\n    "aws.glue.use_instance_profile" = "true",\n    "aws.glue.iam_role_arn" = "arn:aws:iam::081976408565:role/glue_assumed_role",\n    "aws.glue.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"iam-user-based-authentication-1",children:"IAM user-based authentication"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use Hive metastore in your Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_hms\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_access_key>",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.uris" = "thrift://xx.xx.xx:9083"\n);\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If you use AWS Glue in your Amazon EMR Hive cluster, run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL CATALOG hive_catalog_glue\nPROPERTIES\n(\n    "type" = "hive",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_secret_key>",\n    "aws.s3.region" = "us-west-2",\n    "hive.metastore.type" = "glue",\n    "aws.glue.use_instance_profile" = "false",\n    "aws.glue.access_key" = "<iam_user_access_key>",\n    "aws.glue.secret_key" = "<iam_user_secret_key>",\n    "aws.glue.region" = "us-west-2"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"file-external-table",children:"File external table"}),"\n",(0,t.jsxs)(s.p,{children:["File external tables must be created in your internal catalog named ",(0,t.jsx)(s.code,{children:"default_catalog"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The following examples create a file external table named ",(0,t.jsx)(s.code,{children:"file_table"})," on an existing database named ",(0,t.jsx)(s.code,{children:"test_s3_db"}),". For detailed syntax and parameters, see ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/data_source/file_external_table",children:"File external table"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"instance-profile-based-authentication-2",children:"Instance profile-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE test_s3_db.file_table\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "s3://starrocks-test/",\n    "format" = "ORC",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n",(0,t.jsx)(s.h4,{id:"assumed-role-based-authentication-2",children:"Assumed role-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE test_s3_db.file_table\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "s3://starrocks-test/",\n    "format" = "ORC",\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/s3_assumed_role",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n",(0,t.jsx)(s.h4,{id:"iam-user-based-authentication-2",children:"IAM user-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'CREATE EXTERNAL TABLE test_s3_db.file_table\n(\n    id varchar(65500),\n    attributes map<varchar(100), varchar(2000)>\n) \nENGINE=FILE\nPROPERTIES\n(\n    "path" = "s3://starrocks-test/",\n    "format" = "ORC",\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_secret_key>",\n    "aws.s3.region" = "us-west-2"\n);\n'})}),"\n",(0,t.jsx)(s.h3,{id:"ingestion",children:"Ingestion"}),"\n",(0,t.jsx)(s.p,{children:"You can use LOAD LABEL to load data from AWS S3."}),"\n",(0,t.jsxs)(s.p,{children:["The following examples load the data from all Parquet data files stored in the ",(0,t.jsx)(s.code,{children:"s3a://test-bucket/test_brokerload_ingestion"})," path into the ",(0,t.jsx)(s.code,{children:"test_ingestion_2"})," table in an existing database named ",(0,t.jsx)(s.code,{children:"test_s3_db"}),". For detailed syntax and parameters, see ",(0,t.jsx)(s.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"instance-profile-based-authentication-3",children:"Instance profile-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'LOAD LABEL test_s3_db.test_credential_instanceprofile_7\n(\n    DATA INFILE("s3a://test-bucket/test_brokerload_ingestion/*")\n    INTO TABLE test_ingestion_2\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.region" = "us-west-1"\n)\nPROPERTIES\n(\n    "timeout" = "1200"\n);\n'})}),"\n",(0,t.jsx)(s.h4,{id:"assumed-role-based-authentication-3",children:"Assumed role-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'LOAD LABEL test_s3_db.test_credential_instanceprofile_7\n(\n    DATA INFILE("s3a://test-bucket/test_brokerload_ingestion/*")\n    INTO TABLE test_ingestion_2\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "aws.s3.use_instance_profile" = "true",\n    "aws.s3.iam_role_arn" = "arn:aws:iam::081976408565:role/s3_assumed_role",\n    "aws.s3.region" = "us-west-1"\n)\nPROPERTIES\n(\n    "timeout" = "1200"\n);\n'})}),"\n",(0,t.jsx)(s.h4,{id:"iam-user-based-authentication-3",children:"IAM user-based authentication"}),"\n",(0,t.jsx)(s.p,{children:"Run a command like below:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:'LOAD LABEL test_s3_db.test_credential_instanceprofile_7\n(\n    DATA INFILE("s3a://test-bucket/test_brokerload_ingestion/*")\n    INTO TABLE test_ingestion_2\n    FORMAT AS "parquet"\n)\nWITH BROKER\n(\n    "aws.s3.use_instance_profile" = "false",\n    "aws.s3.access_key" = "<iam_user_access_key>",\n    "aws.s3.secret_key" = "<iam_user_secret_key>",\n    "aws.s3.region" = "us-west-1"\n)\nPROPERTIES\n(\n    "timeout" = "1200"\n);\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},23473:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/authenticate_s3_credential_methods-a4866ca19199b88b7ae2474ad2e1462c.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>i});var t=n(67294);const a=t.createContext({});function i(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),t.createElement(a.Provider,{value:o},s)}}}]);