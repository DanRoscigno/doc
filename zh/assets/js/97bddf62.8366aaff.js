"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[87205],{88980:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>u});var o=e(85893),r=e(11151);const i={},c="json_string",t={id:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",title:"json_string",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-query-and-processing-functions",slug:"/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_string.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"JSON_QUERY",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/json-functions/json-query-and-processing-functions/json_query"},next:{title:"JSON \u51fd\u6570\u6982\u8ff0",permalink:"/docusaurusv3/zh/docs/3.0/sql-reference/sql-functions/json-functions/overview-of-json-functions-and-operators"}},l={},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(n){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"json_string",children:"json_string"}),"\n",(0,o.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,o.jsx)(s.p,{children:"\u5c06 JSON \u7c7b\u578b\u8f6c\u5316\u4e3a JSON \u5b57\u7b26\u4e32\u3002"}),"\n",(0,o.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-SQL",children:"json_string(json_object_expr)\n"})}),"\n",(0,o.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"json_object_expr"}),"\uff1aJSON \u5bf9\u8c61\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u662f JSON \u7c7b\u578b\u7684\u5217\uff0c\u6216\u8005 PARSE_JSON() \u7b49 JSON \u51fd\u6570\u6784\u9020\u7684 JSON \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,o.jsx)(s.p,{children:"\u8fd4\u56de VARCHAR \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,o.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(s.p,{children:"\u793a\u4f8b\u4e00: \u5c06 JSON \u5bf9\u8c61\u8f6c\u5316\u4e3a JSON \u5b57\u7b26\u4e32\u3002"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-Plain",children:'select json_string(\'{"Name": "Alice"}\');\n+----------------------------------+\n| json_string(\'{"Name": "Alice"}\') |\n+----------------------------------+\n| {"Name": "Alice"}                |\n+----------------------------------+\n'})}),"\n",(0,o.jsx)(s.p,{children:"\u793a\u4f8b\u4e8c: \u5c06 PARSE_JSON() \u7684\u7ed3\u679c\u8f6c\u5316\u4e3a JSON \u5b57\u7b26\u4e32\u3002"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-Plain",children:'select json_string(parse_json(\'{"Name": "Alice"}\'));\n+----------------------------------+\n| json_string(\'{"Name": "Alice"}\') |\n+----------------------------------+\n| {"Name": "Alice"}                |\n+----------------------------------+\n'})})]})}const d=function(n={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),n.components);return s?(0,o.jsx)(s,Object.assign({},n,{children:(0,o.jsx)(a,n)})):a(n)}},11151:(n,s,e)=>{e.d(s,{Zo:()=>t,ah:()=>i});var o=e(67294);const r=o.createContext({});function i(n){const s=o.useContext(r);return o.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const c={};function t({components:n,children:s,disableParentContext:e}){let t;return t=e?"function"==typeof n?n({}):n||c:i(n),o.createElement(r.Provider,{value:t},s)}}}]);