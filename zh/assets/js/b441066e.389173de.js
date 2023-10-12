"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[30643],{84229:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var s=d(85893),a=d(11151);const r={displayed_sidebar:"Chinese31"},o="Stream Load \u5e38\u89c1\u95ee\u9898",i={id:"faq/loading/Stream_load_faq",title:"Stream Load \u5e38\u89c1\u95ee\u9898",description:"1. Stream Load \u662f\u5426\u652f\u6301\u8bc6\u522b\u6587\u672c\u6587\u4ef6\u4e2d\u9996\u884c\u7684\u5217\u540d\uff1f\u6216\u8005\u662f\u5426\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/faq/loading/Stream_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Stream_load_faq",permalink:"/doc/zh/docs/2.5/faq/loading/Stream_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/faq/loading/Stream_load_faq.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Routine Load\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/loading/Routine_load_faq"},next:{title:"MySQL \u5b9e\u65f6\u540c\u6b65\u81f3 StarRocks \u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/loading/synchronize_mysql_into_sr"}},c={},t=[{value:"1. Stream Load \u662f\u5426\u652f\u6301\u8bc6\u522b\u6587\u672c\u6587\u4ef6\u4e2d\u9996\u884c\u7684\u5217\u540d\uff1f\u6216\u8005\u662f\u5426\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c\uff1f",id:"1-stream-load-\u662f\u5426\u652f\u6301\u8bc6\u522b\u6587\u672c\u6587\u4ef6\u4e2d\u9996\u884c\u7684\u5217\u540d\u6216\u8005\u662f\u5426\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c",level:2},{value:"2. \u5f53\u524d\u4e1a\u52a1\u7684\u5206\u533a\u952e\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u662f\u6807\u51c6\u7684 DATE \u548c INT \u7c7b\u578b\uff0c\u6bd4\u5982\u662f 202106.00 \u7684\u683c\u5f0f\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 Stream Load \u628a\u8fd9\u4e9b\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\uff0c\u9700\u8981\u5982\u4f55\u8f6c\u6362\uff1f",id:"2-\u5f53\u524d\u4e1a\u52a1\u7684\u5206\u533a\u952e\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u662f\u6807\u51c6\u7684-date-\u548c-int-\u7c7b\u578b\u6bd4\u5982\u662f-20210600-\u7684\u683c\u5f0f\u5982\u679c\u9700\u8981\u4f7f\u7528-stream-load-\u628a\u8fd9\u4e9b\u6570\u636e\u5bfc\u5165\u5230-starrocks-\u4e2d\u9700\u8981\u5982\u4f55\u8f6c\u6362",level:2},{value:"3. \u5bfc\u5165\u51fa\u9519 &quot;body exceed max size: 10737418240, limit: 10737418240&quot; \u5e94\u8be5\u5982\u4f55\u89e3\u51b3\uff1f",id:"3-\u5bfc\u5165\u51fa\u9519-body-exceed-max-size-10737418240-limit-10737418240-\u5e94\u8be5\u5982\u4f55\u89e3\u51b3",level:2}];function l(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"stream-load-\u5e38\u89c1\u95ee\u9898",children:"Stream Load \u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsx)(n.h2,{id:"1-stream-load-\u662f\u5426\u652f\u6301\u8bc6\u522b\u6587\u672c\u6587\u4ef6\u4e2d\u9996\u884c\u7684\u5217\u540d\u6216\u8005\u662f\u5426\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c",children:"1. Stream Load \u662f\u5426\u652f\u6301\u8bc6\u522b\u6587\u672c\u6587\u4ef6\u4e2d\u9996\u884c\u7684\u5217\u540d\uff1f\u6216\u8005\u662f\u5426\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"Stream Load \u4e0d\u652f\u6301\u8bc6\u522b\u6587\u672c\u4e2d\u9996\u884c\u7684\u5217\u540d\uff0c\u9996\u884c\u5bf9 Stream Load \u6765\u8bf4\u4e5f\u53ea\u662f\u666e\u901a\u6570\u636e\u3002Stream Load \u5f53\u524d\u4e5f\u4e0d\u652f\u6301\u6307\u5b9a\u4e0d\u8bfb\u53d6\u9996\u884c\u3002\u5982\u679c\u9700\u8981\u5bfc\u5165\u7684\u6587\u672c\u6587\u4ef6\u7684\u9996\u884c\u4e3a\u5217\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u56db\u79cd\u65b9\u5f0f\u5904\u7406\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u5bfc\u51fa\u5de5\u5177\u4e2d\u4fee\u6539\u8bbe\u7f6e\uff0c\u91cd\u65b0\u5bfc\u51fa\u4e0d\u5e26\u5217\u540d\u7684\u6587\u672c\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"sed -i '1d' filename"})," \u7b49\u547d\u4ee4\u5220\u9664\u6587\u672c\u6587\u4ef6\u7684\u9996\u884c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728 Stream Load \u6267\u884c\u547d\u4ee4\u6216\u8bed\u53e5\u4e2d\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"-H \"where: <column_name> != '<column_name>'\""})," \u628a\u9996\u884c\u8fc7\u6ee4\u6389\u3002\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"<column_name>"})," \u662f\u6587\u672c\u6587\u4ef6\u9996\u884c\u91cc\u7684\u4efb\u610f\u4e00\u4e2a\u5217\u540d\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u524d StarRocks \u4f1a\u5148\u8f6c\u6362\u3001\u7136\u540e\u518d\u505a\u8fc7\u6ee4\uff0c\u56e0\u6b64\u5982\u679c\u9996\u884c\u4e2d\u7684\u5217\u503c\u8f6c\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u5931\u8d25\u7684\u8bdd\uff0c\u4f1a\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"NULL"}),"\u3002\u6240\u4ee5\uff0c\u8fd9\u79cd\u5bfc\u5165\u65b9\u5f0f\u8981\u6c42 StarRocks \u8868\u4e2d\u7684\u5217\u4e0d\u80fd\u6709\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"NOT NULL"})," \u7684\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728Stream Load \u6267\u884c\u547d\u4ee4\u6216\u8bed\u53e5\u4e2d\u52a0\u5165 ",(0,s.jsx)(n.code,{children:'-H "max_filter_ratio:0.01"'}),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u7ed9\u5bfc\u5165\u4f5c\u4e1a\u8bbe\u7f6e\u4e00\u4e2a 1% \u6216\u8005\u66f4\u5c0f\u3001\u4f46\u80fd\u5bb9\u9519\u8d85\u8fc7 1 \u884c\u7684\u5bb9\u9519\u7387\uff0c\u4ece\u800c\u5c06\u9996\u884c\u7684\u9519\u8bef\u5ffd\u89c6\u6389\u3002\u8bbe\u7f6e\u5bb9\u9519\u7387\u540e\uff0c\u8fd4\u56de\u7ed3\u679c\u7684 ",(0,s.jsx)(n.code,{children:"ErrorURL"})," \u4f9d\u65e7\u4f1a\u63d0\u793a\u6709\u9519\u8bef\uff0c\u4f46\u5bfc\u5165\u4f5c\u4e1a\u6574\u4f53\u4f1a\u6210\u529f\u3002\u5bb9\u9519\u7387\u4e0d\u5b9c\u8bbe\u7f6e\u8fc7\u5927\uff0c\u907f\u514d\u6f0f\u6389\u5176\u4ed6\u6570\u636e\u95ee\u9898\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5f53\u524d\u4e1a\u52a1\u7684\u5206\u533a\u952e\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u662f\u6807\u51c6\u7684-date-\u548c-int-\u7c7b\u578b\u6bd4\u5982\u662f-20210600-\u7684\u683c\u5f0f\u5982\u679c\u9700\u8981\u4f7f\u7528-stream-load-\u628a\u8fd9\u4e9b\u6570\u636e\u5bfc\u5165\u5230-starrocks-\u4e2d\u9700\u8981\u5982\u4f55\u8f6c\u6362",children:"2. \u5f53\u524d\u4e1a\u52a1\u7684\u5206\u533a\u952e\u5bf9\u5e94\u7684\u6570\u636e\u4e0d\u662f\u6807\u51c6\u7684 DATE \u548c INT \u7c7b\u578b\uff0c\u6bd4\u5982\u662f 202106.00 \u7684\u683c\u5f0f\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528 Stream Load \u628a\u8fd9\u4e9b\u6570\u636e\u5bfc\u5165\u5230 StarRocks \u4e2d\uff0c\u9700\u8981\u5982\u4f55\u8f6c\u6362\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["StarRocks \u652f\u6301\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u6570\u636e\u8f6c\u6362\uff0c\u5177\u4f53\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/loading/Etl_in_loading",children:"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5b8c\u6210\u6570\u636e\u8f6c\u6362"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u6e90\u6570\u636e\u6587\u4ef6 ",(0,s.jsx)(n.code,{children:"TEST"})," \u4e3a CSV \u683c\u5f0f\uff0c\u5e76\u4e14\u5305\u542b ",(0,s.jsx)(n.code,{children:"NO"}),"\u3001",(0,s.jsx)(n.code,{children:"DATE"}),"\u3001",(0,s.jsx)(n.code,{children:"VERSION"}),"\u3001",(0,s.jsx)(n.code,{children:"PRICE"})," \u56db\u5217\uff0c\u4f46\u662f\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"DATE"})," \u5217\u662f\u4e0d\u89c4\u8303\u7684 202106.00 \u683c\u5f0f\u3002\u5982\u679c\u5728 StarRocks \u4e2d\u9700\u4f7f\u7528\u7684\u5206\u533a\u5217\u4e3a ",(0,s.jsx)(n.code,{children:"DATE"}),"\uff0c\u90a3\u4e48\u9996\u5148\u9700\u8981\u5728 StarRocks \u4e2d\u521b\u5efa\u4e00\u5f20\u8868\uff0c\u8fd9\u91cc\u5047\u8bbe StarRocks \u8868\u5305\u542b ",(0,s.jsx)(n.code,{children:"NO"}),"\u3001",(0,s.jsx)(n.code,{children:"VERSION"}),"\u3001",(0,s.jsx)(n.code,{children:"PRICE"}),"\u3001",(0,s.jsx)(n.code,{children:"DATE"})," \u56db\u5217\u3002\u60a8\u9700\u8981\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"DATE"})," \u5217\u7684\u6570\u636e\u7c7b\u578b\u4e3a DATE\u3001DATETIME \u6216 INT\u3002\u7136\u540e\uff0c\u5728 Stream Load \u6267\u884c\u547d\u4ee4\u6216\u8005\u8bed\u53e5\u4e2d\uff0c\u901a\u8fc7\u6307\u5b9a\u5982\u4e0b\u8bbe\u7f6e\u6765\u5b9e\u73b0\u5217\u4e4b\u95f4\u7684\u8f6c\u6362\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:'-H "columns: NO,DATE_1, VERSION, PRICE, DATE=LEFT(DATE_1,6)"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DATE_1"})," \u53ef\u4ee5\u7b80\u5355\u5730\u770b\u6210\u662f\u5148\u5360\u4f4d\u8fdb\u884c\u53d6\u6570\uff0c\u7136\u540e\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"left()"})," \u51fd\u6570\u8fdb\u884c\u8f6c\u6362\uff0c\u8d4b\u503c\u7ed9 StarRocks \u8868\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"DATE"})," \u5217\u3002\u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5fc5\u987b\u5148\u5217\u51fa CSV \u6587\u4ef6\u4e2d\u6240\u6709\u5217\u7684\u4e34\u65f6\u540d\u79f0\uff0c\u7136\u540e\u518d\u4f7f\u7528\u51fd\u6570\u8fdb\u884c\u8f6c\u6362\u3002\u652f\u6301\u5217\u8f6c\u6362\u7684\u51fd\u6570\u4e3a\u6807\u91cf\u51fd\u6570\uff0c\u5305\u62ec\u975e\u805a\u5408\u51fd\u6570\u548c\u7a97\u53e3\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"3-\u5bfc\u5165\u51fa\u9519-body-exceed-max-size-10737418240-limit-10737418240-\u5e94\u8be5\u5982\u4f55\u89e3\u51b3",children:'3. \u5bfc\u5165\u51fa\u9519 "body exceed max size: 10737418240, limit: 10737418240" \u5e94\u8be5\u5982\u4f55\u89e3\u51b3\uff1f'}),"\n",(0,s.jsx)(n.p,{children:"\u6e90\u6570\u636e\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7 10 GB, \u8d85\u8fc7 Stream Load \u6240\u80fd\u652f\u6301\u7684\u6587\u4ef6\u5927\u5c0f\u4e0a\u9650\u3002\u6709\u4e24\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"seq -w 0 n"})," \u62c6\u5206\u6570\u636e\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"curl -XPOST http:///be_host:http_port/api/update_config?streaming_load_max_mb=<file_size>"})," \u8c03\u6574 ",(0,s.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/Configuration#%E9%85%8D%E7%BD%AE-be-%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0",children:"BE \u914d\u7f6e\u9879"})," ",(0,s.jsx)(n.code,{children:"streaming_load_max_mb"})," \u7684\u53d6\u503c\u6765\u6269\u5927\u6587\u4ef6\u5927\u5c0f\u4e0a\u9650\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,d)=>{d.d(n,{Zo:()=>i,ah:()=>r});var s=d(67294);const a=s.createContext({});function r(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:d}){let i;return i=d?"function"==typeof e?e({}):e||o:r(e),s.createElement(a.Provider,{value:i},n)}}}]);