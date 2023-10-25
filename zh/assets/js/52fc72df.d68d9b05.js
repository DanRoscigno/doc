"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85202],{51367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const a={displayed_sidebar:"Chinese"},r="SHOW FUNCTIONS",o={id:"sql-reference/sql-statements/data-definition/show-functions",title:"SHOW FUNCTIONS",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-definition/show-functions.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/show-functions",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-definition/show-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-definition/show-functions.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"DROP FUNCTION",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-definition/drop-function"},next:{title:"BROKER LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/BROKER_LOAD"}},d={},c=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"show-functions",children:"SHOW FUNCTIONS"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"full:\u8868\u793a\u663e\u793a\u51fd\u6570\u7684\u8be6\u7ec6\u4fe1\u606f\n\nbuiltin:\u8868\u793a\u663e\u793a\u7cfb\u7edf\u63d0\u4f9b\u7684\u51fd\u6570\n\ndb: \u8981\u67e5\u8be2\u7684\u6570\u636e\u5e93\u540d\u5b57\n\nfunction_pattern`: \u7528\u6765\u8fc7\u6ee4\u51fd\u6570\u540d\u79f0\u7684\u53c2\u6570\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u67e5\u770b\u6570\u636e\u5e93\u4e0b\u6240\u6709\u7684\u81ea\u5b9a\u4e49(\u7cfb\u7edf\u63d0\u4f9b)\u7684\u51fd\u6570\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u67e5\u770b\u5bf9\u5e94\u6570\u636e\u5e93\u7684\uff0c\n\u5426\u5219\u76f4\u63a5\u67e5\u8be2\u5f53\u524d\u4f1a\u8bdd\u6240\u5728\u6570\u636e\u5e93\u9700\u8981\u5bf9\u8fd9\u4e2a\u6570\u636e\u5e93\u62e5\u6709 ",(0,s.jsx)(n.code,{children:"SHOW"})," \u6743\u9650"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:'mysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9starrocks_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9starrocks_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9starrocks_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9starrocks_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9starrocks_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n\n2 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,s.jsx)(n.p,{children:"SHOW,FUNCTIONS"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var s=t(67294);const i=s.createContext({});function a(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},n)}}}]);