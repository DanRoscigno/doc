"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[16810],{66983:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(85893),t=n(11151);const i={displayed_sidebar:"Chinese"},d="FILES",c={id:"sql-reference/sql-functions/table-functions/files",title:"FILES",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/table-functions/files.md",sourceDirName:"sql-reference/sql-functions/table-functions",slug:"/sql-reference/sql-functions/table-functions/files",permalink:"/zh/docs/sql-reference/sql-functions/table-functions/files",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/table-functions/files.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Table Functions",permalink:"/zh/docs/category/table-functions-1"},next:{title:"generate_series",permalink:"/zh/docs/sql-reference/sql-functions/table-functions/generate_series"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"StorageCredentialParams",id:"storagecredentialparams",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"files",children:"FILES"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ece\u4e91\u5b58\u50a8\u6216 HDFS \u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u3002\u8be5\u51fd\u6570\u6839\u636e\u7ed9\u5b9a\u7684\u6570\u636e\u8def\u5f84\u7b49\u53c2\u6570\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u81ea\u52a8\u6839\u636e\u6570\u636e\u6587\u4ef6\u7684\u683c\u5f0f\u3001\u5217\u4fe1\u606f\u7b49\u63a8\u65ad\u51fa Table Schema\uff0c\u6700\u7ec8\u4ee5\u6570\u636e\u884c\u5f62\u5f0f\u8fd4\u56de\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/SELECT",children:"SELECT"})," \u76f4\u63a5\u76f4\u63a5\u67e5\u8be2\u8be5\u6570\u636e\uff0c\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-manipulation/insert",children:"INSERT"})," \u5bfc\u5165\u6570\u636e\uff0c\u6216\u901a\u8fc7 ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE_AS_SELECT",children:"CREATE TABLE AS SELECT"})," \u5efa\u8868\u5e76\u5bfc\u5165\u6570\u636e\u3002\u8be5\u529f\u80fd\u81ea v3.1.0 \u8d77\u652f\u6301\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u76ee\u524d FILES() \u51fd\u6570\u652f\u6301\u4ee5\u4e0b\u6570\u636e\u6e90\u548c\u6587\u4ef6\u683c\u5f0f\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u6570\u636e\u6e90\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"AWS S3"}),"\n",(0,r.jsx)(s.li,{children:"HDFS"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u6587\u4ef6\u683c\u5f0f\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Parquet"}),"\n",(0,r.jsx)(s.li,{children:"ORC"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'FILES( data_location , data_format [, StorageCredentialParams ] )\n\ndata_location ::=\n    "path" = {"s3://<s3_path>" | "hdfs://<hdfs_ip>:<hdfs_port>/<hdfs_path>"}\n\ndata_format ::=\n    "format" = "{parquet | orc}"\n\nStorageCredentialParams ::=\n    { hdfs_credential | aws_s3_credential }\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.p,{children:["\u6240\u6709\u53c2\u6570\u5747\u4e3a ",(0,r.jsx)(s.code,{children:'"key" = "value"'})," \u5f62\u5f0f\u7684\u53c2\u6570\u5bf9\u3002"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5fc5\u586b"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"path"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u7528\u4e8e\u8bbf\u95ee\u6570\u636e\u6587\u4ef6\u7684 URI\u3002\u793a\u4f8b\uff1a",(0,r.jsx)("br",{}),"\u5982\u4f7f\u7528 AWS S3\uff1a",(0,r.jsx)(s.code,{children:"s3://testbucket/parquet/test.parquet"})," ",(0,r.jsx)("br",{}),"\u5982\u4f7f\u7528 HDFS\uff1a",(0,r.jsx)(s.code,{children:"hdfs://<hdfs_ip>:<hdfs_port>/test/parquet/test.orc"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"format"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u6570\u636e\u6587\u4ef6\u7684\u683c\u5f0f\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"parquet"})," \u548c ",(0,r.jsx)(s.code,{children:"orc"}),"\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"storagecredentialparams",children:"StorageCredentialParams"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u8bbf\u95ee\u5b58\u50a8\u7cfb\u7edf\u7684\u8ba4\u8bc1\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(s.p,{children:"StarRocks \u5f53\u524d\u4ec5\u652f\u6301\u901a\u8fc7 IAM User \u8ba4\u8bc1\u8bbf\u95ee AWS S3\uff0c\u4ee5\u53ca\u901a\u8fc7\u7b80\u5355\u8ba4\u8bc1\u63a5\u5165\u8bbf\u95ee HDFS \u96c6\u7fa4\u3002"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528 IAM User \u8ba4\u8bc1\u8bbf\u95ee AWS S3\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"aws.s3.access_key" = "xxxxxxxxxx",\n"aws.s3.secret_key" = "yyyyyyyyyy",\n"aws.s3.region" = "<s3_region>"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5fc5\u586b"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.access_key"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u6307\u5b9a\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Access Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.secret_key"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u6307\u5b9a\u8bbf\u95ee AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684 Secret Key\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"aws.s3.region"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsxs)(s.td,{children:["\u7528\u4e8e\u6307\u5b9a\u9700\u8bbf\u95ee\u7684 AWS S3 \u5b58\u50a8\u7a7a\u95f4\u7684\u5730\u533a\uff0c\u5982 ",(0,r.jsx)(s.code,{children:"us-west-2"}),"\u3002"]})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60a8\u4f7f\u7528\u7b80\u5355\u8ba4\u8bc1\u63a5\u5165\u8bbf\u95ee HDFS \u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:'"hadoop.security.authentication" = "simple",\n"username" = "xxxxxxxxxx",\n"password" = "yyyyyyyyyy"\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u5fc5\u586b"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"hadoop.security.authentication"}),(0,r.jsx)(s.td,{children:"\u5426"}),(0,r.jsxs)(s.td,{children:["\u7528\u4e8e\u6307\u5b9a\u5f85\u8bbf\u95ee HDFS \u96c6\u7fa4\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002\u6709\u6548\u503c\uff1a",(0,r.jsx)(s.code,{children:"simple"}),"\uff08\u9ed8\u8ba4\u503c\uff09\u3002",(0,r.jsx)(s.code,{children:"simple"})," \u8868\u793a\u7b80\u5355\u8ba4\u8bc1\uff0c\u5373\u65e0\u8ba4\u8bc1\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"username"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8bbf\u95ee HDFS \u96c6\u7fa4\u4e2d NameNode \u8282\u70b9\u7684\u7528\u6237\u540d\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"password"}),(0,r.jsx)(s.td,{children:"\u662f"}),(0,r.jsx)(s.td,{children:"\u7528\u4e8e\u8bbf\u95ee HDFS \u96c6\u7fa4\u4e2d NameNode \u8282\u70b9\u7684\u5bc6\u7801\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u8be2 AWS S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"inserttest"})," \u5185 Parquet \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"parquet/par-dup.parquet"})," \u4e2d\u7684\u6570\u636e"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'MySQL > SELECT * FROM FILES(\n     "path" = "s3://inserttest/parquet/par-dup.parquet",\n     "format" = "parquet",\n     "aws.s3.access_key" = "XXXXXXXXXX",\n     "aws.s3.secret_key" = "YYYYYYYYYY",\n     "aws.s3.region" = "us-west-2"\n);\n+------+---------------------------------------------------------+\n| c1   | c2                                                      |\n+------+---------------------------------------------------------+\n|    1 | {"1": "key", "1": "1", "111": "1111", "111": "aaaa"}    |\n|    2 | {"2": "key", "2": "NULL", "222": "2222", "222": "bbbb"} |\n+------+---------------------------------------------------------+\n2 rows in set (22.335 sec)\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e8c\uff1a\u5c06 AWS S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"inserttest"})," \u5185 Parquet \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," \u4e2d\u7684\u6570\u636e\u63d2\u5165\u81f3\u8868 ",(0,r.jsx)(s.code,{children:"insert_wiki_edit"})," \u4e2d\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'MySQL > INSERT INTO insert_wiki_edit\n    SELECT * FROM FILES(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "XXXXXXXXXX",\n        "aws.s3.secret_key" = "YYYYYYYYYY",\n        "aws.s3.region" = "us-west-2"\n);\nQuery OK, 2 rows affected (23.03 sec)\n{\'label\':\'insert_d8d4b2ee-ac5c-11ed-a2cf-4e1110a8f63b\', \'status\':\'VISIBLE\', \'txnId\':\'2440\'}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["\u793a\u4f8b\u4e09\uff1a\u57fa\u4e8e AWS S3 \u5b58\u50a8\u6876 ",(0,r.jsx)(s.code,{children:"inserttest"})," \u5185 Parquet \u6587\u4ef6 ",(0,r.jsx)(s.strong,{children:"parquet/insert_wiki_edit_append.parquet"})," \u4e2d\u7684\u6570\u636e\u521b\u5efa\u8868 ",(0,r.jsx)(s.code,{children:"ctas_wiki_edit"}),"\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:'MySQL > CREATE TABLE ctas_wiki_edit AS\n    SELECT * FROM FILES(\n        "path" = "s3://inserttest/parquet/insert_wiki_edit_append.parquet",\n        "format" = "parquet",\n        "aws.s3.access_key" = "XXXXXXXXXX",\n        "aws.s3.secret_key" = "YYYYYYYYYY",\n        "aws.s3.region" = "us-west-2"\n);\nQuery OK, 2 rows affected (22.09 sec)\n{\'label\':\'insert_1a217d70-2f52-11ee-9e4a-7a563fb695da\', \'status\':\'VISIBLE\', \'txnId\':\'3248\'}\n'})})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>i});var r=n(67294);const t=r.createContext({});function i(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const d={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||d:i(e),r.createElement(t.Provider,{value:c},s)}}}]);