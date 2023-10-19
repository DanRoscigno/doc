"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55362],{97225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=s(85893),t=s(11151);const i={displayed_sidebar:"Chinese"},c="reverse",l={id:"sql-reference/sql-functions/string-functions/reverse",title:"reverse",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/string-functions/reverse.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/reverse",permalink:"/zh/docs/sql-reference/sql-functions/string-functions/reverse",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/reverse.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"replace",permalink:"/zh/docs/sql-reference/sql-functions/string-functions/replace"},next:{title:"right",permalink:"/zh/docs/sql-reference/sql-functions/string-functions/right"}},o={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"reverse",children:"reverse"}),"\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u5b57\u7b26\u4e32\u6216\u6570\u7ec4\u53cd\u8f6c\uff0c\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u6216\u6570\u7ec4\u7684\u987a\u5e8f\u548c\u6e90\u5b57\u7b26\u4e32\u6216\u6570\u7ec4\u7684\u987a\u5e8f\u76f8\u53cd\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Haskell",children:"reverse(param)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"param"}),"\uff1a\u9700\u8981\u53cd\u8f6c\u7684\u5b57\u7b26\u4e32\u6216\u6570\u7ec4\uff0c\u76ee\u524d\u53ea\u652f\u6301\u4e00\u7ef4\u6570\u7ec4\u4e14\u6570\u7ec4\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b\u4e0d\u5141\u8bb8\u4e3a ",(0,r.jsx)(n.code,{children:"DECIMAL"}),"\u3002",(0,r.jsx)(n.code,{children:"param"})," \u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u4e3a VARCHAR\u3001CHAR\u3001ARRAY\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\uff1aBOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3001FLOAT\u3001DOUBLE\u3001VARCHAR\u3001DECIMALV2\u3001DATETIME\u3001DATE\u3001JSON\u3002",(0,r.jsx)(n.strong,{children:"\u4ece 2.5 \u7248\u672c\u5f00\u59cb\uff0c\u8be5\u51fd\u6570\u652f\u6301 JSON \u7c7b\u578b\u7684\u6570\u7ec4\u5143\u7d20\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u4e0e ",(0,r.jsx)(n.code,{children:"param"})," \u4e00\u81f4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u53cd\u8f6c\u5b57\u7b26\u4e32\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT REVERSE('hello');\n+------------------+\n| REVERSE('hello') |\n+------------------+\n| olleh            |\n+------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53cd\u8f6c\u6570\u7ec4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MYSQL> SELECT REVERSE([4,1,5,8]);\n+--------------------+\n| REVERSE([4,1,5,8]) |\n+--------------------+\n| [8,5,1,4]          |\n+--------------------+\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:l},n)}}}]);