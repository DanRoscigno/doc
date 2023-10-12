"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[11455],{53718:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>i});var t=s(85893),r=s(11151);const d={},c="StarRocks \u96c6\u6210 Datadog",a={id:"integrations/other_integrations/datadog_support",title:"StarRocks \u96c6\u6210 Datadog",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 StarRocks \u96c6\u7fa4\u4e0e\u76d1\u63a7\u548c\u5b89\u5168\u5e73\u53f0 Datadog \u96c6\u6210\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/integrations/other_integrations/datadog_support.md",sourceDirName:"integrations/other_integrations",slug:"/integrations/other_integrations/datadog_support",permalink:"/doc/zh/docs/2.5/integrations/other_integrations/datadog_support",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/integrations/other_integrations/datadog_support.md",tags:[],version:"2.5",frontMatter:{}},o={},i=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u51c6\u5907 StarRocks \u6e90\u7801",id:"\u51c6\u5907-starrocks-\u6e90\u7801",level:2},{value:"\u5b89\u88c5\u914d\u7f6e FE \u96c6\u6210\u5957\u4ef6",id:"\u5b89\u88c5\u914d\u7f6e-fe-\u96c6\u6210\u5957\u4ef6",level:2},{value:"\u5b89\u88c5\u914d\u7f6e BE \u96c6\u6210\u5957\u4ef6",id:"\u5b89\u88c5\u914d\u7f6e-be-\u96c6\u6210\u5957\u4ef6",level:2},{value:"\u91cd\u542f Datadog Agent",id:"\u91cd\u542f-datadog-agent",level:2},{value:"\u9a8c\u8bc1\u96c6\u6210",id:"\u9a8c\u8bc1\u96c6\u6210",level:2},{value:"\u5378\u8f7d\u96c6\u6210\u5957\u4ef6",id:"\u5378\u8f7d\u96c6\u6210\u5957\u4ef6",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",ol:"ol",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"starrocks-\u96c6\u6210-datadog",children:"StarRocks \u96c6\u6210 Datadog"}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 StarRocks \u96c6\u7fa4\u4e0e\u76d1\u63a7\u548c\u5b89\u5168\u5e73\u53f0 ",(0,t.jsx)(n.a,{href:"https://www.datadoghq.com/",children:"Datadog"})," \u96c6\u6210\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5\u4ee5\u4e0b\u73af\u5883\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.datadoghq.com/getting_started/agent/",children:"Datadog Agent"})}),"\n",(0,t.jsx)(n.li,{children:"Python"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u6b21\u5b89\u88c5 Datadog Agent \u65f6\uff0cPython \u4e5f\u4f1a\u4f5c\u4e3a\u4f9d\u8d56\u9879\u4e00\u540c\u5b89\u88c5\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u4ee5\u4e0b\u6b65\u9aa4\u4e2d\u4f7f\u7528\u6b64 Python\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u51c6\u5907-starrocks-\u6e90\u7801",children:"\u51c6\u5907 StarRocks \u6e90\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e Datadog \u5e73\u53f0\u76ee\u524d\u5c1a\u672a\u63d0\u4f9b StarRocks \u7684\u96c6\u6210\u5957\u4ef6\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u6e90\u7801\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u542f\u52a8\u7ec8\u7aef\uff0c\u8fdb\u5165\u5230\u60a8\u5177\u6709\u8bfb\u5199\u6743\u9650\u7684\u672c\u5730\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e3a StarRocks \u6e90\u4ee3\u7801\u521b\u5efa\u4e13\u7528\u76ee\u5f55\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"mkdir -p starrocks\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6216\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/StarRocks/starrocks/tags",children:"GitHub"})," \u4e0a\u4e0b\u8f7d StarRocks \u6e90\u7801\u5305\u81f3\u60a8\u5148\u524d\u521b\u5efa\u7684\u76ee\u5f55\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'cd starrocks\n# Replace <starrocks_ver> with the actual version of StarRocks, for example, "2.5.2".\nwget https://github.com/StarRocks/starrocks/archive/refs/tags/<starrocks_ver>.tar.gz\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u89e3\u538b\u5305\u4e2d\u7684\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'# Replace <starrocks_ver> with the actual version of StarRocks, for example, "2.5.2".\ntar -xzvf <starrocks_ver>.tar.gz --strip-components 1\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u914d\u7f6e-fe-\u96c6\u6210\u5957\u4ef6",children:"\u5b89\u88c5\u914d\u7f6e FE \u96c6\u6210\u5957\u4ef6"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6e90\u4ee3\u7801\u4e3a FE \u5b89\u88c5 Datadog \u96c6\u6210\u5957\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"/opt/datadog-agent/embedded/bin/pip install contrib/datadog-connector/starrocks_fe\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa FE \u96c6\u6210\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.strong,{children:"/etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mkdir -p /etc/datadog-agent/conf.d/starrocks_fe.d\nsudo cp contrib/datadog-connector/starrocks_fe/datadog_checks/starrocks_fe/data/conf.yaml.example /etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539 FE \u96c6\u6210\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.strong,{children:"/etc/datadog-agent/conf.d/starrocks_fe.d/conf.yaml"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u8981\u7684\u914d\u7f6e\u9879\u793a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u914d\u7f6e\u9879"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fe_metric_url"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"http://localhost:8030/metrics"})}),(0,t.jsx)(n.td,{children:"\u7528\u4e8e\u8bbf\u95ee StarRocks FE \u6307\u6807\u7684 URL\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"metrics"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"- starrocks_fe_*"})}),(0,t.jsxs)(n.td,{children:["\u9700\u8981\u76d1\u63a7\u7684 FE \u6307\u6807\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26",(0,t.jsx)(n.code,{children:"*"}),"\u6765\u5339\u914d\u914d\u7f6e\u9879\u3002"]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u914d\u7f6e-be-\u96c6\u6210\u5957\u4ef6",children:"\u5b89\u88c5\u914d\u7f6e BE \u96c6\u6210\u5957\u4ef6"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6e90\u4ee3\u7801\u4e3a BE \u5b89\u88c5 Datadog \u96c6\u6210\u5957\u4ef6\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"/opt/datadog-agent/embedded/bin/pip install contrib/datadog-connector/starrocks_be\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa BE \u96c6\u6210\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.strong,{children:"/etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mkdir -p /etc/datadog-agent/conf.d/starrocks_be.d\nsudo cp contrib/datadog-connector/starrocks_be/datadog_checks/starrocks_be/data/conf.yaml.example /etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539 BE \u96c6\u6210\u914d\u7f6e\u6587\u4ef6 ",(0,t.jsx)(n.strong,{children:"/etc/datadog-agent/conf.d/starrocks_be.d/conf.yaml"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u8981\u7684\u914d\u7f6e\u9879\u793a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u914d\u7f6e\u9879"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u793a\u4f8b"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"\u63cf\u8ff0"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"be_metric_url"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"http://localhost:8040/metrics"})}),(0,t.jsx)(n.td,{children:"\u7528\u4e8e\u8bbf\u95ee StarRocks BE \u6307\u6807\u7684 URL\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"metrics"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"- starrocks_be_*"})}),(0,t.jsxs)(n.td,{children:["\u9700\u8981\u76d1\u63a7\u7684 BE \u6307\u6807\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26",(0,t.jsx)(n.code,{children:"*"}),"\u6765\u5339\u914d\u914d\u7f6e\u9879\u3002"]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u91cd\u542f-datadog-agent",children:"\u91cd\u542f Datadog Agent"}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u542f Datadog Agent \u4ee5\u4f7f\u914d\u7f6e\u751f\u6548\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo systemctl stop datadog-agent\nsudo systemctl start datadog-agent\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9a8c\u8bc1\u96c6\u6210",children:"\u9a8c\u8bc1\u96c6\u6210"}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173\u9a8c\u8bc1\u96c6\u6210\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://docs.datadoghq.com/getting_started/application/",children:"Datadog Application"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5378\u8f7d\u96c6\u6210\u5957\u4ef6",children:"\u5378\u8f7d\u96c6\u6210\u5957\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u4e0d\u518d\u9700\u8981\u65f6\u5378\u8f7d\u96c6\u6210\u5957\u4ef6\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d FE \u96c6\u6210\u5de5\u5177\u5305\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"/opt/datadog-agent/embedded/bin/pip uninstall datadog-starrocks-fe\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d BE \u96c6\u6210\u5de5\u5177\u5305\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"/opt/datadog-agent/embedded/bin/pip uninstall datadog-starrocks-be\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>d});var t=s(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:d(e),t.createElement(r.Provider,{value:a},n)}}}]);