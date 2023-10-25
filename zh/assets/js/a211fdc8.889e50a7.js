"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[81623],{77231:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),o=n(11151);const s={displayed_sidebar:"Chinese"},t="Bloomfilter \u7d22\u5f15",r={id:"table_design/Bloomfilter_index",title:"Bloomfilter \u7d22\u5f15",description:"\u539f\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0/table_design/Bloomfilter_index.md",sourceDirName:"table_design",slug:"/table_design/Bloomfilter_index",permalink:"/zh/docs/2.0/table_design/Bloomfilter_index",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/Bloomfilter_index.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"Bitmap \u7d22\u5f15",permalink:"/zh/docs/2.0/table_design/Bitmap_index"},next:{title:"\u6570\u636e\u5206\u5e03",permalink:"/zh/docs/2.0/table_design/Data_distribution"}},d={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"<strong>1 \u4ec0\u4e48\u662f Bloom Filter</strong>",id:"1-\u4ec0\u4e48\u662f-bloom-filter",level:3},{value:"<strong>2 \u4ec0\u4e48\u662f Bloom Filter \u7d22\u5f15</strong>",id:"2-\u4ec0\u4e48\u662f-bloom-filter-\u7d22\u5f15",level:3},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"<strong>1 \u521b\u5efa\u7d22\u5f15</strong>",id:"1-\u521b\u5efa\u7d22\u5f15",level:3},{value:"<strong>2 \u67e5\u770b\u7d22\u5f15</strong>",id:"2-\u67e5\u770b\u7d22\u5f15",level:3},{value:"<strong>3 \u5220\u9664\u7d22\u5f15</strong>",id:"3-\u5220\u9664\u7d22\u5f15",level:3},{value:"<strong>4 \u4fee\u6539\u7d22\u5f15</strong>",id:"4-\u4fee\u6539\u7d22\u5f15",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function a(e){const l=Object.assign({h1:"h1",h2:"h2",h3:"h3",strong:"strong",p:"p",img:"img",code:"code",ol:"ol",li:"li",pre:"pre",ul:"ul"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h1,{id:"bloomfilter-\u7d22\u5f15",children:"Bloomfilter \u7d22\u5f15"}),"\n",(0,i.jsx)(l.h2,{id:"\u539f\u7406",children:"\u539f\u7406"}),"\n",(0,i.jsx)(l.h3,{id:"1-\u4ec0\u4e48\u662f-bloom-filter",children:(0,i.jsx)(l.strong,{children:"1 \u4ec0\u4e48\u662f Bloom Filter"})}),"\n",(0,i.jsx)(l.p,{children:"Bloom Filter\uff08\u5e03\u9686\u8fc7\u6ee4\u5668\uff09\u662f\u7528\u4e8e\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f18\u70b9\u662f\u7a7a\u95f4\u6548\u7387\u548c\u65f6\u95f4\u6548\u7387\u90fd\u6bd4\u8f83\u9ad8\uff0c\u7f3a\u70b9\u662f\u6709\u4e00\u5b9a\u7684\u8bef\u5224\u7387\u3002"}),"\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.img,{alt:"bloomfilter",src:n(47560).Z+"",width:"1309",height:"727"})}),"\n",(0,i.jsx)(l.p,{children:"\u5e03\u9686\u8fc7\u6ee4\u5668\u662f\u7531\u4e00\u4e2aBit\u6570\u7ec4\u548cn\u4e2a\u54c8\u5e0c\u51fd\u6570\u6784\u6210\u3002Bit\u6570\u7ec4\u521d\u59cb\u5168\u90e8\u4e3a0\uff0c\u5f53\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\u65f6\uff0cn\u4e2aHash\u51fd\u6570\u5bf9\u5143\u7d20\u8fdb\u884c\u8ba1\u7b97, \u5f97\u5230n\u4e2aslot\uff0c\u7136\u540e\u5c06Bit\u6570\u7ec4\u4e2dn\u4e2aslot\u7684Bit\u7f6e1\u3002"}),"\n",(0,i.jsx)(l.p,{children:"\u5f53\u6211\u4eec\u8981\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u96c6\u5408\u4e2d\u65f6\uff0c\u8fd8\u662f\u901a\u8fc7\u76f8\u540c\u7684n\u4e2aHash\u51fd\u6570\u8ba1\u7b97Hash\u503c\uff0c\u5982\u679c\u6240\u6709Hash\u503c\u5728\u5e03\u9686\u8fc7\u6ee4\u5668\u91cc\u5bf9\u5e94\u7684Bit\u4e0d\u5168\u4e3a1\uff0c\u5219\u8be5\u5143\u7d20\u4e0d\u5b58\u5728\u3002\u5f53\u5bf9\u5e94Bit\u51681\u65f6, \u5219\u5143\u7d20\u7684\u5b58\u5728\u4e0e\u5426, \u65e0\u6cd5\u786e\u5b9a. \xa0\u8fd9\u662f\u56e0\u4e3a\u5e03\u9686\u8fc7\u6ee4\u5668\u7684\u4f4d\u6570\u6709\u9650, \xa0\u7531\u8be5\u5143\u7d20\u8ba1\u7b97\u51fa\u7684slot, \u6070\u597d\u5168\u90e8\u548c\u5176\u4ed6\u5143\u7d20\u7684slot\u51b2\u7a81. \xa0\u6240\u4ee5\u51681\u60c5\u5f62, \u9700\u8981\u56de\u6e90\u67e5\u627e\u624d\u80fd\u5224\u65ad\u5143\u7d20\u7684\u5b58\u5728\u6027\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"2-\u4ec0\u4e48\u662f-bloom-filter-\u7d22\u5f15",children:(0,i.jsx)(l.strong,{children:"2 \u4ec0\u4e48\u662f Bloom Filter \u7d22\u5f15"})}),"\n",(0,i.jsxs)(l.p,{children:["StarRocks\u7684\u5efa\u8868\u65f6, \u53ef\u901a\u8fc7",(0,i.jsx)(l.code,{children:'PROPERTIES{"bloom\\_filter\\_columns"="c1,c2,c3"}'}),"\u6307\u5b9a\u9700\u8981\u5efaBloomFilter\u7d22\u5f15\u7684\u5217\uff0c\u67e5\u8be2\u65f6, BloomFilter\u53ef\u5feb\u901f\u5224\u65ad\u67d0\u4e2a\u5217\u4e2d\u662f\u5426\u5b58\u5728\u67d0\u4e2a\u503c\u3002\u5982\u679cBloom Filter\u5224\u5b9a\u8be5\u5217\u4e2d\u4e0d\u5b58\u5728\u6307\u5b9a\u7684\u503c\uff0c\u5c31\u4e0d\u9700\u8981\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\uff1b\u5982\u679c\u662f\u51681\u60c5\u5f62\uff0c\u6b64\u65f6\u9700\u8981\u8bfb\u53d6\u6570\u636e\u5757\u786e\u8ba4\u76ee\u6807\u503c\u662f\u5426\u5b58\u5728\u3002\u53e6\u5916\uff0cBloom Filter\u7d22\u5f15\u65e0\u6cd5\u786e\u5b9a\u5177\u4f53\u662f\u54ea\u4e00\u884c\u6570\u636e\u5177\u6709\u8be5\u6307\u5b9a\u7684\u503c\u3002"]}),"\n",(0,i.jsx)(l.h2,{id:"\u9002\u7528\u573a\u666f",children:"\u9002\u7528\u573a\u666f"}),"\n",(0,i.jsx)(l.p,{children:"\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u4e2a\u6761\u4ef6\u65f6\u53ef\u4ee5\u8003\u8651\u5bf9\u67d0\u5217\u5efa\u7acbBloom Filter \u7d22\u5f15\uff1a"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:"\u9996\u5148BloomFilter\u4e5f\u9002\u7528\u4e8e\u975e\u524d\u7f00\u8fc7\u6ee4."}),"\n",(0,i.jsx)(l.li,{children:"\u67e5\u8be2\u4f1a\u6839\u636e\u8be5\u5217\u9ad8\u9891\u8fc7\u6ee4\uff0c\u800c\u4e14\u67e5\u8be2\u6761\u4ef6\u5927\u591a\u662fin\u548c=."}),"\n",(0,i.jsx)(l.li,{children:"\u4e0d\u540c\u4e8eBitmap, BloomFilter\u9002\u7528\u4e8e\u9ad8\u57fa\u6570\u5217."}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,i.jsx)(l.h3,{id:"1-\u521b\u5efa\u7d22\u5f15",children:(0,i.jsx)(l.strong,{children:"1 \u521b\u5efa\u7d22\u5f15"})}),"\n",(0,i.jsx)(l.p,{children:"\u5efa\u8868\u65f6\u4f7f\u7528\u6307\u5b9abloom_filter_columns\u5373\u53ef\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-SQL",children:'PROPERTIES ( "bloom_filter_columns"="k1,k2,k3" )\n'})}),"\n",(0,i.jsx)(l.h3,{id:"2-\u67e5\u770b\u7d22\u5f15",children:(0,i.jsx)(l.strong,{children:"2 \u67e5\u770b\u7d22\u5f15"})}),"\n",(0,i.jsx)(l.p,{children:"\u5c55\u793a\u6307\u5b9atable_name\u4e0b\u7684Bloom Filter\u7d22\u5f15\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-SQL",children:"SHOW CREATE TABLE table_name;\n"})}),"\n",(0,i.jsx)(l.h3,{id:"3-\u5220\u9664\u7d22\u5f15",children:(0,i.jsx)(l.strong,{children:"3 \u5220\u9664\u7d22\u5f15"})}),"\n",(0,i.jsx)(l.p,{children:"\u5220\u9664\u7d22\u5f15\u5373\u4e3a\u5c06\u7d22\u5f15\u5217\u4ecebloom_filter_columns\u5c5e\u6027\u4e2d\u79fb\u9664\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-SQL",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns" = "");\n'})}),"\n",(0,i.jsx)(l.h3,{id:"4-\u4fee\u6539\u7d22\u5f15",children:(0,i.jsx)(l.strong,{children:"4 \u4fee\u6539\u7d22\u5f15"})}),"\n",(0,i.jsx)(l.p,{children:"\u4fee\u6539\u7d22\u5f15\u5373\u4e3a\u4fee\u6539\u8868\u7684bloom_filter_columns\u5c5e\u6027\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-SQL",children:'ALTER TABLE example_db.my_table SET ("bloom_filter_columns" = "k1,k2,k3");\n'})}),"\n",(0,i.jsx)(l.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"\u4e0d\u652f\u6301\u5bf9Tinyint\u3001Float\u3001Double \u7c7b\u578b\u7684\u5217\u5efaBloom Filter\u7d22\u5f15\u3002"}),"\n",(0,i.jsx)(l.li,{children:"Bloom Filter\u7d22\u5f15\u53ea\u5bf9in\u548c=\u8fc7\u6ee4\u67e5\u8be2\u6709\u52a0\u901f\u6548\u679c\u3002"}),"\n",(0,i.jsx)(l.li,{children:"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86Bloom Filter\u7d22\u5f15\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7684Profile\u4fe1\u606f\u67e5\u770b\uff08TODO\uff1a\u52a0\u4e0a\u67e5\u770bProfile\u7684\u94fe\u63a5\uff09\u3002"}),"\n"]})]})}const h=function(e={}){const{wrapper:l}=Object.assign({},(0,o.ah)(),e.components);return l?(0,i.jsx)(l,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},47560:(e,l,n)=>{n.d(l,{Z:()=>i});const i=n.p+"assets/images/3.7.1-548f175e9f98eedc64a9f6a96714daf9.png"},11151:(e,l,n)=>{n.d(l,{Zo:()=>r,ah:()=>s});var i=n(67294);const o=i.createContext({});function s(e){const l=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(l):{...l,...e}),[l,e])}const t={};function r({components:e,children:l,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||t:s(e),i.createElement(o.Provider,{value:r},l)}}}]);