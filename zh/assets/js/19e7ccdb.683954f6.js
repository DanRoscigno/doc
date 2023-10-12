"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26174],{18546:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=e(85893),c=e(11151);const o={displayed_sidebar:"Chinese31"},t="PARSE_JSON",i={id:"sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",title:"PARSE_JSON",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json.md",sourceDirName:"sql-reference/sql-functions/json-functions/json-constructor-functions",slug:"/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",permalink:"/doc/zh/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/json-functions/json-constructor-functions/parse_json.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"JSON_OBJECT",permalink:"/doc/zh/docs/sql-reference/sql-functions/json-functions/json-constructor-functions/json_object"},next:{title:"JSON query and processing functions",permalink:"/doc/zh/docs/category/json-query-and-processing-functions-1"}},l={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Keywords",id:"keywords",level:2}];function d(n){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",blockquote:"blockquote",a:"a"},(0,c.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"parse_json",children:"PARSE_JSON"}),"\n",(0,r.jsx)(s.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(s.p,{children:"\u5c06\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\u6784\u9020\u4e3a JSON \u7c7b\u578b\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"PARSE_JSON(string_expr)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"string_expr"}),": \u5b57\u7b26\u4e32\u7684\u8868\u8fbe\u5f0f\u3002\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff08STRING\u3001VARCHAR\u3001CHAR\uff09\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsx)(s.p,{children:"\u8fd4\u56de JSON \u7c7b\u578b\u7684\u503c\u3002"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u5b57\u7b26\u4e32\u4e0d\u80fd\u89e3\u6790\u4e3a\u89c4\u8303\u7684 JSON\uff0c\u5219\u8fd4\u56de NULL\uff0c\u53c2\u89c1\u793a\u4f8b\u4e94\u3002JSON \u89c4\u8303\uff0c\u8bf7\u53c2\u89c1 ",(0,r.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7159?spm=a2c63.p38356.0.0.14d26b9fcp7fcf#page-4",children:"RFC 7159"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\u4e00\uff1a \u5c06\u5b57\u7b26\u4e32\u7c7b\u578b\u7684 1 \u6784\u9020\u4e3a JSON \u7c7b\u578b\u7684 1\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('1');\n+-----------------+\n| parse_json('1') |\n+-----------------+\n| \"1\"             |\n+-----------------+\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\u4e8c\uff1a\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u7ec4\u6784\u9020\u4e3a\u4e00\u4e2a JSON \u7c7b\u578b\u7684\u6570\u7ec4\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('[1,2,3]');\n+-----------------------+\n| parse_json('[1,2,3]') |\n+-----------------------+\n| [1, 2, 3]             |\n+-----------------------+ \n"})}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\u4e09\uff1a\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5bf9\u8c61\u6784\u9020\u4e3a\u4e00\u4e2a JSON \u7c7b\u578b\u7684\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:'mysql> SELECT PARSE_JSON(\'{"star": "rocks"}\');\n+---------------------------------+\n| parse_json(\'{"star": "rocks"}\') |\n+---------------------------------+\n| {"star": "rocks"}               |\n+---------------------------------+\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\u56db\uff1a\u6784\u9020\u4e00\u4e2a JSON \u7c7b\u578b\u7684 NULL\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('null');\n+--------------------+\n| parse_json('null') |\n+--------------------+\n| \"null\"             |\n+--------------------+\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u793a\u4f8b\u4e94\uff1a\u5982\u679c\u5b57\u7b26\u4e32\u4e0d\u80fd\u89e3\u6790\u4e3a\u89c4\u8303\u7684 JSON\uff0c\u5219\u8fd4\u56de NULL\u3002 \u5982\u4e0b\u793a\u4f8b\u4e2d\uff0cstar \u6ca1\u6709\u7528\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u65e0\u6cd5\u89e3\u6790\u4e3a\u5408\u6cd5\u7684 JSON\uff0c\u56e0\u6b64\u8fd4\u56de NULL\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"mysql> SELECT PARSE_JSON('{star: \"rocks\"}');\n+-------------------------------+\n| parse_json('{star: \"rocks\"}') |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n"})}),"\n",(0,r.jsx)(s.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(s.p,{children:"parse_json, parse json"})]})}const u=function(n={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),n.components);return s?(0,r.jsx)(s,Object.assign({},n,{children:(0,r.jsx)(d,n)})):d(n)}},11151:(n,s,e)=>{e.d(s,{Zo:()=>i,ah:()=>o});var r=e(67294);const c=r.createContext({});function o(n){const s=r.useContext(c);return r.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const t={};function i({components:n,children:s,disableParentContext:e}){let i;return i=e?"function"==typeof n?n({}):n||t:o(n),r.createElement(c.Provider,{value:i},s)}}}]);