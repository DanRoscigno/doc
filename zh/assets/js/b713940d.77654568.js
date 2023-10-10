"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35279],{90141:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(85893),r=n(11151);const i={},l="DESC STORAGE VOLUME",d={id:"sql-reference/sql-statements/Administration/DESC STORAGE VOLUME",title:"DESC STORAGE VOLUME",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/DESC STORAGE VOLUME.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DESC STORAGE VOLUME",permalink:"/zh/docs/sql-reference/sql-statements/Administration/DESC STORAGE VOLUME",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/DESC STORAGE VOLUME.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"DELETE SQLBLACKLIST",permalink:"/zh/docs/sql-reference/sql-statements/Administration/DELETE SQLBLACKLIST"},next:{title:"DROP FILE",permalink:"/zh/docs/sql-reference/sql-statements/Administration/DROP FILE"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173 SQL",id:"\u76f8\u5173-sql",level:2}];function h(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"desc-storage-volume",children:"DESC STORAGE VOLUME"}),"\n",(0,t.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b\u6307\u5b9a\u5b58\u50a8\u5377\u7684\u4fe1\u606f\u3002\u8be5\u529f\u80fd\u81ea v3.1 \u8d77\u652f\u6301\u3002"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsx)(s.p,{children:"\u4ec5\u62e5\u6709\u6307\u5b9a\u5b58\u50a8\u5377 USAGE \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u6267\u884c\u8be5\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-SQL",children:"DESC[RIBE] STORAGE VOLUME <storage_volume_name>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u53c2\u6570"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"storage_volume_name"}),(0,t.jsx)(s.td,{children:"\u5f85\u67e5\u770b\u7684\u5b58\u50a8\u5377\u7684\u540d\u79f0\u3002"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8fd4\u56de"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"\u8bf4\u660e"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Name"}),(0,t.jsx)(s.td,{children:"\u5b58\u50a8\u5377\u7684\u540d\u79f0\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Type"}),(0,t.jsxs)(s.td,{children:["\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u7c7b\u578b\u3002\u6709\u6548\u503c\uff1a",(0,t.jsx)(s.code,{children:"S3"}),"\u3001",(0,t.jsx)(s.code,{children:"AZBLOB"})," \u548c ",(0,t.jsx)(s.code,{children:"HDFS"}),"\u3002"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"IsDefault"}),(0,t.jsx)(s.td,{children:"\u8be5\u5b58\u50a8\u5377\u662f\u5426\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u5377\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Location"}),(0,t.jsx)(s.td,{children:"\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u4f4d\u7f6e\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Params"}),(0,t.jsx)(s.td,{children:"\u7528\u4e8e\u8fde\u63a5\u8fdc\u7a0b\u5b58\u50a8\u7cfb\u7edf\u7684\u8ba4\u8bc1\u4fe1\u606f\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enabled"}),(0,t.jsx)(s.td,{children:"\u8be5\u5b58\u50a8\u5377\u662f\u5426\u5df2\u88ab\u542f\u7528\u3002"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Comment"}),(0,t.jsx)(s.td,{children:"\u5b58\u50a8\u5377\u7684\u6ce8\u91ca\u3002"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsxs)(s.p,{children:["\u793a\u4f8b\u4e00\uff1a\u67e5\u770b\u5b58\u50a8\u5377 ",(0,t.jsx)(s.code,{children:"my_s3_volume"})," \u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-Plain",children:'MySQL > DESCRIBE STORAGE VOLUME my_s3_volume\\G\n*************************** 1. row ***************************\n     Name: my_s3_volume\n     Type: S3\nIsDefault: false\n Location: s3://defaultbucket/test/\n   Params: {"aws.s3.access_key":"xxxxxxxxxx","aws.s3.secret_key":"yyyyyyyyyy","aws.s3.endpoint":"https://s3.us-west-2.amazonaws.com","aws.s3.region":"us-west-2","aws.s3.use_instance_profile":"true","aws.s3.use_aws_sdk_default_behavior":"false"}\n  Enabled: false\n  Comment: \n1 row in set (0.00 sec)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"\u76f8\u5173-sql",children:"\u76f8\u5173 SQL"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/CREATE%20STORAGE%20VOLUME",children:"CREATE STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/ALTER%20STORAGE%20VOLUME",children:"ALTER STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/DROP%20STORAGE%20VOLUME",children:"DROP STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/SET%20DEFAULT%20STORAGE%20VOLUME",children:"SET DEFAULT STORAGE VOLUME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/zh/docs/sql-reference/sql-statements/Administration/SHOW%20STORAGE%20VOLUMES",children:"SHOW STORAGE VOLUMES"})}),"\n"]})]})}const o=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var t=n(67294);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:d},s)}}}]);