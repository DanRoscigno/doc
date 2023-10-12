"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[43716],{53185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const i={displayed_sidebar:"Chinese31"},o="\u6570\u636e\u538b\u7f29",a={id:"table_design/data_compression",title:"\u6570\u636e\u538b\u7f29",description:"StarRocks \u652f\u6301\u5bf9\u8868\u548c\u7d22\u5f15\u6570\u636e\u8fdb\u884c\u538b\u7f29 (compression)\u3002\u6570\u636e\u538b\u7f29\u4e0d\u4ec5\u6709\u52a9\u4e8e\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8 I/O \u5bc6\u96c6\u578b\u4efb\u52a1\u7684\u6027\u80fd\u3002\u8bf7\u6ce8\u610f\uff0c\u538b\u7f29\u548c\u89e3\u538b\u7f29\u6570\u636e\u9700\u8981\u989d\u5916\u7684 CPU \u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/table_design/data_compression.md",sourceDirName:"table_design",slug:"/table_design/data_compression",permalink:"/doc/zh/docs/table_design/data_compression",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/data_compression.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u4e34\u65f6\u5206\u533a",permalink:"/doc/zh/docs/table_design/Temporary_partition"},next:{title:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15",permalink:"/doc/zh/docs/table_design/Sort_key"}},d={},c=[{value:"\u9009\u62e9\u6570\u636e\u538b\u7f29\u7b97\u6cd5",id:"\u9009\u62e9\u6570\u636e\u538b\u7f29\u7b97\u6cd5",level:2},{value:"\u8bbe\u7f6e\u6570\u636e\u538b\u7f29\u7b97\u6cd5",id:"\u8bbe\u7f6e\u6570\u636e\u538b\u7f29\u7b97\u6cd5",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6570\u636e\u538b\u7f29",children:"\u6570\u636e\u538b\u7f29"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5bf9\u8868\u548c\u7d22\u5f15\u6570\u636e\u8fdb\u884c\u538b\u7f29 (compression)\u3002\u6570\u636e\u538b\u7f29\u4e0d\u4ec5\u6709\u52a9\u4e8e\u8282\u7701\u5b58\u50a8\u7a7a\u95f4\uff0c\u8fd8\u53ef\u4ee5\u63d0\u9ad8 I/O \u5bc6\u96c6\u578b\u4efb\u52a1\u7684\u6027\u80fd\u3002\u8bf7\u6ce8\u610f\uff0c\u538b\u7f29\u548c\u89e3\u538b\u7f29\u6570\u636e\u9700\u8981\u989d\u5916\u7684 CPU \u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u9009\u62e9\u6570\u636e\u538b\u7f29\u7b97\u6cd5",children:"\u9009\u62e9\u6570\u636e\u538b\u7f29\u7b97\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"StarRocks \u652f\u6301\u56db\u79cd\u6570\u636e\u538b\u7f29\u7b97\u6cd5\uff1aLZ4\u3001Zstandard\uff08\u6216 zstd\uff09\u3001zlib \u548c Snappy\u3002 \u8fd9\u4e9b\u6570\u636e\u538b\u7f29\u7b97\u6cd5\u5728\u538b\u7f29\u7387\u548c\u538b\u7f29/\u89e3\u538b\u7f29\u6027\u80fd\u4e0a\u6709\u6240\u4e0d\u540c\u3002 \u901a\u5e38\u6765\u8bf4\uff0c\u8fd9\u4e9b\u7b97\u6cd5\u7684\u538b\u7f29\u7387\u6392\u540d\u5982\u4e0b\uff1azlib > Zstandard > LZ4 > Snappy\u3002\u5176\u4e2d\uff0czlib \u62e5\u6709\u8f83\u9ad8\u7684\u538b\u7f29\u6bd4\u3002\u4f46\u7531\u4e8e\u6570\u636e\u9ad8\u5ea6\u538b\u7f29\uff0c\u4f7f\u7528 zlib \u7b97\u6cd5\u7684\u8868\uff0c\u5176\u5bfc\u5165\u548c\u67e5\u8be2\u6027\u80fd\u4f1a\u53d7\u5230\u4e00\u5b9a\u7a0b\u5ea6\u7684\u5f71\u54cd\u3002\u800c LZ4 \u548c Zstandard \u7b97\u6cd5\u5177\u6709\u8f83\u4e3a\u5747\u8861\u7684\u538b\u7f29\u6bd4\u548c\u89e3\u538b\u7f29\u6027\u80fd\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u4e1a\u52a1\u573a\u666f\u5728\u8fd9\u4e9b\u538b\u7f29\u7b97\u6cd5\u4e2d\u8fdb\u884c\u9009\u62e9\uff0c\u4ee5\u6ee1\u8db3\u60a8\u5bf9\u5b58\u50a8\u6216\u6027\u80fd\u7684\u9700\u6c42\u3002\u5982\u679c\u60a8\u5bf9\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528 LZ4 \u6216 Zstandard \u7b97\u6cd5\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u4f1a\u5f71\u54cd\u7b97\u6cd5\u7684\u538b\u7f29\u7387\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbe\u7f6e\u6570\u636e\u538b\u7f29\u7b97\u6cd5",children:"\u8bbe\u7f6e\u6570\u636e\u538b\u7f29\u7b97\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ea\u80fd\u5728\u521b\u5efa\u8868\u65f6\u4e3a\u5176\u8bbe\u7f6e\u6570\u636e\u538b\u7f29\u7b97\u6cd5\uff0c\u4e14\u540e\u7eed\u65e0\u6cd5\u4fee\u6539\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u57fa\u4e8e Zstandard \u7b97\u6cd5\u521b\u5efa\u8868 ",(0,t.jsx)(n.code,{children:"data_compression"}),"\u3002 \u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-definition/CREATE_TABLE",children:"CREATE TABLE"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE `data_compression` (\n  `id`      INT(11)     NOT NULL     COMMENT "",\n  `name`    CHAR(200)   NULL         COMMENT ""\n)\nENGINE=OLAP \nUNIQUE KEY(`id`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`id`)\nPROPERTIES (\n"compression" = "ZSTD"\n);\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0d\u6307\u5b9a\u6570\u636e\u538b\u7f29\u7b97\u6cd5\uff0cStarRocks \u9ed8\u8ba4\u4f7f\u7528 LZ4\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"/doc/zh/docs/sql-reference/sql-statements/data-manipulation/SHOW_CREATE_TABLE",children:"SHOW CREATE TABLE"})," \u547d\u4ee4\u67e5\u770b\u6307\u5b9a\u8868\u91c7\u7528\u7684\u538b\u7f29\u7b97\u6cd5\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:i(e),t.createElement(r.Provider,{value:a},n)}}}]);