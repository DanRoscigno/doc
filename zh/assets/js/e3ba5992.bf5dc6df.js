"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[54661],{56825:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=s(85893),t=s(11151);const r={displayed_sidebar:"Chinese31"},c="from_unixtime",o={id:"sql-reference/sql-functions/date-time-functions/from_unixtime",title:"from_unixtime",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-functions/date-time-functions/from_unixtime.md",sourceDirName:"sql-reference/sql-functions/date-time-functions",slug:"/sql-reference/sql-functions/date-time-functions/from_unixtime",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/from_unixtime",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/date-time-functions/from_unixtime.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"from_days",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/from_days"},next:{title:"hour",permalink:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/hour"}},d={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"from_unixtime",children:"from_unixtime"}),"\n",(0,i.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06 UNIX \u65f6\u95f4\u6233\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684\u65f6\u95f4\u683c\u5f0f\u3002\u8fd4\u56de\u7684\u65f6\u95f4\u683c\u5f0f\u7531 ",(0,i.jsx)(n.code,{children:"string_format"})," \u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(n.code,{children:"yyyy-MM-dd HH:mm:ss"}),"\uff0c\u4e5f\u652f\u6301 ",(0,i.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-functions/date-time-functions/date_format",children:"date_format"})," \u4e2d\u7684\u683c\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u76ee\u524d ",(0,i.jsx)(n.code,{children:"string_format"})," \u652f\u6301\u5982\u4e0b\u683c\u5f0f\uff0c\u5176\u4f59 ",(0,i.jsx)(n.code,{children:"string_format"})," \u683c\u5f0f\u975e\u6cd5\uff0c\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"%Y\uff1a\u5e74\u3002\u4f8b\uff1a2014\uff0c1900\n%m\uff1a\u6708\u3002\u4f8b\uff1a12\uff0c09\n%d\uff1a\u65e5\u3002\u4f8b\uff1a11\uff0c01\n%H\uff1a\u65f6\u3002\u4f8b\uff1a23\uff0c01\uff0c12\n%i\uff1a\u5206\u3002\u4f8b\uff1a05\uff0c11\n%s\uff1a\u79d2\u3002\u4f8b\uff1a59\uff0c01\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,i.jsx)(n.a,{href:"/doc/zh/docs/administration/timezone",children:"\u8bbe\u7f6e\u65f6\u533a"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Haskell",children:"VARCHAR FROM_UNIXTIME(INT unix_timestamp[, VARCHAR string_format])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"unix_timestamp"}),": \u8981\u8f6c\u5316\u7684 UNIX \u65f6\u95f4\u6233\uff0cINT \u7c7b\u578b\u3002\u5982\u679c\u7ed9\u5b9a\u7684\u65f6\u95f4\u6233\u5c0f\u4e8e 0 \u6216\u5927\u4e8e 2147483647\uff0c\u5219\u8fd4\u56de NULL\u3002\u5373\u65f6\u95f4\u6233\u8303\u56f4\u662f\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:"1970-01-01 00:00:00 ~ 2038-01-19 11:14:07\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"string_format"}),": \u53ef\u9009\uff0c\u6307\u5b9a\u7684\u65f6\u95f4\u683c\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de VARCHAR \u7c7b\u578b\u7684 DATETIME \u6216 DATE \u503c\u3002\u5982\u679c ",(0,i.jsx)(n.code,{children:"string_format"})," \u6307\u5b9a\u7684\u662f DATE \u683c\u5f0f\uff0c\u5219\u8fd4\u56de VARCHAR \u7c7b\u578b\u7684 DATE \u503c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8f93\u5165\u7684\u65f6\u95f4\u6233\u8d85\u8fc7\u8303\u56f4\uff0c\u8fd4\u56de NULL\u3002\u5982\u679c ",(0,i.jsx)(n.code,{children:"string_format"})," \u6307\u5b9a\u7684\u683c\u5f0f\u975e\u6cd5\uff0c\u5219\u8fd4\u56de NULL\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plain",metastring:"text",children:"MySQL > select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nMySQL > select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nMySQL > select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nMySQL > select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s')   |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>r});var i=s(67294);const t=i.createContext({});function r(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),i.createElement(t.Provider,{value:o},n)}}}]);