"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[65248],{99403:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(85893),c=n(11151);const i={displayed_sidebar:"Chinese"},l="DECIMAL",r={id:"sql-reference/sql-statements/data-types/DECIMAL",title:"DECIMAL",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-types/DECIMAL.md",sourceDirName:"sql-reference/sql-statements/data-types",slug:"/sql-reference/sql-statements/data-types/DECIMAL",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-types/DECIMAL",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-types/DECIMAL.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"DATETIME",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-types/DATETIME"},next:{title:"DOUBLE",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-types/DOUBLE"}},a={},d=[{value:"description",id:"description",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",ol:"ol"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"decimal",children:"DECIMAL"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(s.p,{children:"DECIMAL(P[,S])"}),"\n",(0,t.jsx)(s.p,{children:"\u9ad8\u7cbe\u5ea6\u5b9a\u70b9\u6570\uff0cP\u4ee3\u8868\u4e00\u5171\u6709\u591a\u5c11\u4e2a\u6709\u6548\u6570\u5b57(precision)\uff0cS\u4ee3\u8868\u5c0f\u6570\u70b9\u540e\u6700\u591a\u6709\u591a\u5c11\u6570\u5b57(scale)"}),"\n",(0,t.jsx)(s.p,{children:"1.19.0\u53ca\u4ee5\u540e\u7248\u672c\u5bf9decimal\u7c7b\u578b\u7684\uff08P\uff0cS\uff09\u6709\u9ed8\u8ba4\u503c\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u662fdecimal\uff0810\uff0c0\uff09"}),"\n",(0,t.jsxs)(s.p,{children:["\u4f8b\u5982\uff1a\n1.19.0\u7248\u672c\u53ef\u6210\u529f\u6267\u884c",(0,t.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff09;"}),"1.19\u4e4b\u524d\u7248\u672c\u6267\u884c",(0,t.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff09;"}),"\u6216\u8005",(0,t.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff085\uff09\uff09;"}),"\u4f1a\u63d0\u793afailed\uff0c\u9700\u660e\u786e\u6307\u5b9ap,s\u7684\u503c,\u5982\uff1a",(0,t.jsx)(s.code,{children:"select cast\uff08\u201812.35\u2019 as decimal\uff085\uff0c1\uff09;"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Decimal V2"}),"\n",(0,t.jsx)(s.p,{children:"P\u7684\u8303\u56f4\u662f[1,27], S\u7684\u8303\u56f4[0, 9], \u53e6\u5916\uff0cP\u5fc5\u987b\u8981\u5927\u4e8e\u7b49\u4e8eS\u7684\u53d6\u503c\u3002\u9ed8\u8ba4\u7684S\u53d6\u503c\u4e3a0\u3002"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Fast Decimal  (1.18\u7248\u672c\u9ed8\u8ba4)"}),"\n",(0,t.jsx)(s.p,{children:"P\u7684\u8303\u56f4\u662f[1,38], S\u7684\u8303\u56f4[0, P]\u3002\u9ed8\u8ba4\u7684S\u53d6\u503c\u4e3a0\u3002\nStarRocks-1.18\u7248\u672c\u5f00\u59cb\u8d77, decimal\u7c7b\u578b\u652f\u6301\u66f4\u9ad8\u7cbe\u5ea6\u7684FastDecimal"}),"\n",(0,t.jsx)(s.p,{children:"\u4e3b\u8981\u4f18\u5316\u6709\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u5185\u90e8\u91c7\u7528\u591a\u79cd\u5bbd\u5ea6\u7684\u6574\u6570\u8868\u793adecimal, ",(0,t.jsx)(s.code,{children:"decimal(P<=18, S)"}),"\u4f7f\u752864bit\u6574\u6570, \u76f8\u6bd4\u4e8e\u539f\u6765decimal v2\u5b9e\u73b0\u7edf\u4e00\u91c7\u7528128bit\u6574\u6570, \u7b97\u6570\u8fd0\u7b97\u548c\u8f6c\u6362\u8fd0\u7b97\u572864bit\u7684\u5904\u7406\u5668\u4e0a\u4f7f\u7528\u66f4\u5c11\u7684\u6307\u4ee4\u6570\u91cf, \u56e0\u6b64\u6027\u80fd\u6709\u5927\u5e45\u63d0\u5347\u3002"]}),"\n",(0,t.jsx)(s.li,{children:"Fast Decimal \u5b9e\u73b0\u548cdecimal v2\u76f8\u6bd4, \u5177\u4f53\u7b97\u6cd5\u505a\u4e86\u6781\u81f4\u7684\u4f18\u5316, \u5c24\u5176\u662f\u4e58\u6cd5\u8fd0\u7b97\uff0c\u6027\u80fd\u63d0\u5347\u67094\u500d\u5de6\u53f3\u3002"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u524d\u7684\u9650\u5236\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"\u76ee\u524dfast decimal \u4e0d\u652f\u6301array\u7c7b\u578b, \u5982\u679c\u7528\u6237\u60f3\u4f7f\u7528array(decimal)\u7c7b\u578b, \u8bf7\u4f7f\u7528array(double)\u7c7b\u578b, \u6216\u8005\u5173\u95eddecimal v3\u4e4b\u540e, \u4f7f\u7528array(decimal)\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(s.li,{children:"hive\u76f4\u8fde\u5916\u8868\u4e2d, orc\u548cparquet\u6570\u636e\u683c\u5f0f\u5bf9decimal\u6682\u672a\u652f\u6301"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"DECIMAL"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>r,ah:()=>i});var t=n(67294);const c=t.createContext({});function i(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function r({components:e,children:s,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(c.Provider,{value:r},s)}}}]);