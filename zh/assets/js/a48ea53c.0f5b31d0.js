"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[70585],{94757:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese"},l="lpad",c={id:"sql-reference/sql-functions/string-functions/lpad",title:"lpad",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-functions/string-functions/lpad.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/lpad",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/lpad",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-functions/string-functions/lpad.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"lower",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/lower"},next:{title:"ltrim",permalink:"/zh/docs/2.1/sql-reference/sql-functions/string-functions/ltrim"}},o={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",strong:"strong"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lpad",children:"lpad"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR lpad(VARCHAR str, INT len, VARCHAR pad)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd4\u56de str \u4e2d\u957f\u5ea6\u4e3a len\uff08\u4ece\u9996\u5b57\u6bcd\u5f00\u59cb\u7b97\u8d77\uff09\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c len \u5927\u4e8e str \u7684\u957f\u5ea6\uff0c\u5219\u5728 str \u7684\u524d\u9762\u4e0d\u65ad\u8865\u5145 pad \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len \u4e3a\u6b62\u3002\u5982\u679c len \u5c0f\u4e8e str \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad str \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\u3002len \u6307\u7684\u662f",(0,t.jsx)(n.strong,{children:"\u5b57\u7b26"}),"\u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"MySQL > SELECT lpad(\"hi\", 5, \"xy\");\n+---------------------+\n| lpad('hi', 5, 'xy') |\n+---------------------+\n| xyxhi               |\n+---------------------+\n\nMySQL > SELECT lpad(\"hi\", 1, \"xy\");\n+---------------------+\n| lpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"LPAD"})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||l:i(e),t.createElement(r.Provider,{value:c},n)}}}]);