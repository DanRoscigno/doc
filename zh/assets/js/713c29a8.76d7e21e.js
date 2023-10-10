"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[39007],{30971:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=s(85893),i=s(11151);const l={},c="\u660e\u7ec6\u6a21\u578b",d={id:"table_design/table_types/duplicate_key_table",title:"\u660e\u7ec6\u6a21\u578b",description:"\u660e\u7ec6\u6a21\u578b\u662f\u9ed8\u8ba4\u7684\u5efa\u8868\u6a21\u578b\u3002\u5982\u679c\u5728\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u4efb\u4f55\u6a21\u578b\uff0c\u9ed8\u8ba4\u521b\u5efa\u7684\u662f\u660e\u7ec6\u7c7b\u578b\u7684\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/table_design/table_types/duplicate_key_table.md",sourceDirName:"table_design/table_types",slug:"/table_design/table_types/duplicate_key_table",permalink:"/zh/docs/3.0/table_design/table_types/duplicate_key_table",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/table_design/table_types/duplicate_key_table.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"\u805a\u5408\u6a21\u578b",permalink:"/zh/docs/3.0/table_design/table_types/aggregate_table"},next:{title:"\u4e3b\u952e\u6a21\u578b",permalink:"/zh/docs/3.0/table_design/table_types/primary_key_table"}},r={},a=[{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",a:"a"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u660e\u7ec6\u6a21\u578b",children:"\u660e\u7ec6\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u660e\u7ec6\u6a21\u578b\u662f\u9ed8\u8ba4\u7684\u5efa\u8868\u6a21\u578b\u3002\u5982\u679c\u5728\u5efa\u8868\u65f6\u672a\u6307\u5b9a\u4efb\u4f55\u6a21\u578b\uff0c\u9ed8\u8ba4\u521b\u5efa\u7684\u662f\u660e\u7ec6\u7c7b\u578b\u7684\u8868\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u8868\u65f6\uff0c\u652f\u6301\u5b9a\u4e49\u6392\u5e8f\u952e\u3002\u5982\u679c\u67e5\u8be2\u7684\u8fc7\u6ee4\u6761\u4ef6\u5305\u542b\u6392\u5e8f\u952e\uff0c\u5219 StarRocks \u80fd\u591f\u5feb\u901f\u5730\u8fc7\u6ee4\u6570\u636e\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\u660e\u7ec6\u6a21\u578b\u9002\u7528\u4e8e\u65e5\u5fd7\u6570\u636e\u5206\u6790\u7b49\u573a\u666f\uff0c\u652f\u6301\u8ffd\u52a0\u65b0\u6570\u636e\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u5386\u53f2\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5206\u6790\u539f\u59cb\u6570\u636e\uff0c\u4f8b\u5982\u539f\u59cb\u65e5\u5fd7\u3001\u539f\u59cb\u64cd\u4f5c\u8bb0\u5f55\u7b49\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u65b9\u5f0f\u7075\u6d3b\uff0c\u4e0d\u9700\u8981\u5c40\u9650\u4e8e\u9884\u805a\u5408\u7684\u5206\u6790\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5bfc\u5165\u65e5\u5fd7\u6570\u636e\u6216\u8005\u65f6\u5e8f\u6570\u636e\uff0c\u4e3b\u8981\u7279\u70b9\u662f\u65e7\u6570\u636e\u4e0d\u4f1a\u66f4\u65b0\uff0c\u53ea\u4f1a\u8ffd\u52a0\u65b0\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u9700\u8981\u5206\u6790\u67d0\u65f6\u95f4\u8303\u56f4\u7684\u67d0\u4e00\u7c7b\u4e8b\u4ef6\u7684\u6570\u636e\uff0c\u5219\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u65f6\u95f4\uff08",(0,t.jsx)(n.code,{children:"event_time"}),"\uff09\u548c\u4e8b\u4ef6\u7c7b\u578b\uff08",(0,t.jsx)(n.code,{children:"event_type"}),"\uff09\u4f5c\u4e3a\u6392\u5e8f\u952e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8be5\u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE IF NOT EXISTS detail (\n    event_time DATETIME NOT NULL COMMENT "datetime of event",\n    event_type INT NOT NULL COMMENT "type of event",\n    user_id INT COMMENT "id of user",\n    device_code INT COMMENT "device code",\n    channel INT COMMENT ""\n)\nDUPLICATE KEY(event_time, event_type)\nDISTRIBUTED BY HASH(user_id)\nPROPERTIES (\n"replication_num" = "3"\n);\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5efa\u8868\u65f6\u5fc5\u987b\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"DISTRIBUTED BY HASH"})," \u5b50\u53e5\u6307\u5b9a\u5206\u6876\u952e\uff0c\u5426\u5219\u5efa\u8868\u5931\u8d25\u3002\u5206\u6876\u952e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"../Data_distribution.md/#%E5%88%86%E6%A1%B6",children:"\u5206\u6876"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u81ea 2.5.7 \u7248\u672c\u8d77\uff0cStarRocks \u652f\u6301\u5728\u5efa\u8868\u548c\u65b0\u589e\u5206\u533a\u65f6\u81ea\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf (BUCKETS)\uff0c\u60a8\u65e0\u9700\u624b\u52a8\u8bbe\u7f6e\u5206\u6876\u6570\u91cf\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/table_design/Data_distribution#%E7%A1%AE%E5%AE%9A%E5%88%86%E6%A1%B6%E6%95%B0%E9%87%8F",children:"\u786e\u5b9a\u5206\u6876\u6570\u91cf"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6392\u5e8f\u952e\u7684\u76f8\u5173\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\uff0c\u6392\u5e8f\u952e\u5fc5\u987b\u5b9a\u4e49\u5728\u5176\u4ed6\u5217\u4e4b\u524d\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6392\u5e8f\u952e\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"DUPLICATE KEY"})," \u663e\u5f0f\u5b9a\u4e49\u3002\u672c\u793a\u4f8b\u4e2d\u6392\u5e8f\u952e\u4e3a ",(0,t.jsx)(n.code,{children:"event_time"})," \u548c ",(0,t.jsx)(n.code,{children:"event_type"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u9009\u62e9\u8868\u7684\u524d\u4e09\u5217\u4f5c\u4e3a\u6392\u5e8f\u952e\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u660e\u7ec6\u6a21\u578b\u4e2d\u7684\u6392\u5e8f\u952e\u53ef\u4ee5\u4e3a\u90e8\u5206\u6216\u5168\u90e8\u7ef4\u5ea6\u5217\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5efa\u8868\u65f6\uff0c\u652f\u6301\u4e3a\u6307\u6807\u5217\u521b\u5efa BITMAP\u3001Bloom Filter \u7b49\u7d22\u5f15\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,t.jsxs)(n.p,{children:["\u5efa\u8868\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u591a\u79cd\u5bfc\u5165\u4f5c\u4e1a\uff0c\u5bfc\u5165\u6570\u636e\u81f3\u8868\u4e2d\u3002\u5177\u4f53\u5bfc\u5165\u65b9\u5f0f\uff0c\u8bf7\u53c2\u89c1",(0,t.jsx)(n.a,{href:"/zh/docs/3.0/loading/Loading_intro",children:"\u5bfc\u5165\u6982\u89c8"}),"\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5bfc\u5165\u65f6\uff0c\u652f\u6301\u8ffd\u52a0\u65b0\u6570\u636e\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u5386\u53f2\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u5bfc\u5165\u4e24\u884c\u5b8c\u5168\u76f8\u540c\u7684\u6570\u636e\uff0c\u5219\u660e\u7ec6\u6a21\u578b\u4f1a\u5c06\u8fd9\u4e24\u884c\u6570\u636e\u89c6\u4e3a\u4e24\u884c\uff0c\u800c\u4e0d\u662f\u4e00\u884c\u3002"}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>l});var t=s(67294);const i=t.createContext({});function l(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||c:l(e),t.createElement(i.Provider,{value:d},n)}}}]);