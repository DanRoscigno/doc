"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[59706],{23973:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=s(85893),c=s(11151);const l={displayed_sidebar:"Chinese"},d="\u7406\u89e3 StarRocks \u8868\u8bbe\u8ba1",r={id:"table_design/StarRocks_table_design",title:"\u7406\u89e3 StarRocks \u8868\u8bbe\u8ba1",description:"\u5217\u5f0f\u5b58\u50a8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/table_design/StarRocks_table_design.md",sourceDirName:"table_design",slug:"/table_design/StarRocks_table_design",permalink:"/zh/docs/2.5/table_design/StarRocks_table_design",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/table_design/StarRocks_table_design.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u6392\u5e8f\u952e\u548c\u524d\u7f00\u7d22\u5f15",permalink:"/zh/docs/2.5/table_design/Sort_key"},next:{title:"\u4e34\u65f6\u5206\u533a",permalink:"/zh/docs/2.5/table_design/Temporary_partition"}},t={},a=[{value:"\u5217\u5f0f\u5b58\u50a8",id:"\u5217\u5f0f\u5b58\u50a8",level:2},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"\u52a0\u901f\u5904\u7406",id:"\u52a0\u901f\u5904\u7406",level:2},{value:"\u9884\u5148\u805a\u5408",id:"\u9884\u5148\u805a\u5408",level:3},{value:"\u5206\u533a\u5206\u6876",id:"\u5206\u533a\u5206\u6876",level:3},{value:"\u7269\u5316\u89c6\u56fe",id:"\u7269\u5316\u89c6\u56fe",level:3},{value:"\u5217\u7ea7\u7d22\u5f15",id:"\u5217\u7ea7\u7d22\u5f15",level:3}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",img:"img",a:"a",code:"code",ul:"ul",li:"li",ol:"ol",h3:"h3"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7406\u89e3-starrocks-\u8868\u8bbe\u8ba1",children:"\u7406\u89e3 StarRocks \u8868\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.h2,{id:"\u5217\u5f0f\u5b58\u50a8",children:"\u5217\u5f0f\u5b58\u50a8"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u5217\u5f0f\u5b58\u50a8",src:s(35991).Z+"",width:"2036",height:"870"})}),"\n",(0,i.jsxs)(n.p,{children:["StarRocks \u4e2d\u7684\u8868\u7531\u884c\u548c\u5217\u6784\u6210\u3002\u6bcf\u884c\u6570\u636e\u5bf9\u5e94\u7528\u6237\u4e00\u6761\u8bb0\u5f55\uff0c\u6bcf\u5217\u6570\u636e\u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002\u6240\u6709\u6570\u636e\u884c\u7684\u5217\u6570\u76f8\u540c\uff0c\u53ef\u4ee5\u52a8\u6001\u589e\u5220\u5217\u3002\u5728 StarRocks \u4e2d\uff0c\u4e00\u5f20\u8868\u7684\u5217\u53ef\u4ee5\u5206\u4e3a\u7ef4\u5ea6\u5217\uff08\u4e5f\u79f0\u4e3a Key \u5217\uff09\u548c\u6307\u6807\u5217\uff08\u4e5f\u79f0\u4e3a Value \u5217\uff09\u3002\u7ef4\u5ea6\u5217\u7528\u4e8e\u5206\u7ec4\u548c\u6392\u5e8f\uff0c\u6307\u6807\u5217\u7684\u503c\u53ef\u4ee5\u901a\u8fc7\u805a\u5408\u51fd\u6570 ",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/sum",children:"sum"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/count",children:"count"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/min",children:"min"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/max",children:"max"}),"\u3001",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/aggregate-functions/hll_union_agg",children:"hll_union_agg"})," \u548c ",(0,i.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-functions/bitmap-functions/bitmap_union",children:"bitmap_union"})," \u7b49\u7d2f\u52a0\u8d77\u6765\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728 StarRocks \u4e2d\uff0c\u8868\u6570\u636e\u6309\u5217\u5b58\u50a8\u3002\u7269\u7406\u4e0a\uff0c\u4e00\u5217\u6570\u636e\u4f1a\u7ecf\u8fc7\u5206\u5757\u7f16\u7801\u3001\u538b\u7f29\u7b49\u64cd\u4f5c\uff0c\u7136\u540e\u6301\u4e45\u5316\u5b58\u50a8\u5230\u975e\u6613\u5931\u8bbe\u5907\u4e0a\u3002\u4f46\u5728\u903b\u8f91\u4e0a\uff0c\u4e00\u5217\u6570\u636e\u53ef\u4ee5\u770b\u6210\u662f\u7531\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20\u6784\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\u3002 \u4e00\u884c\u6570\u636e\u7684\u6240\u6709\u5217\u503c\u5728\u5404\u81ea\u7684\u6570\u7ec4\u4e2d\u6309\u7167\u5217\u987a\u5e8f\u6392\u5217\uff0c\u5373\u62e5\u6709\u76f8\u540c\u7684\u6570\u7ec4\u4e0b\u6807\u3002\u6570\u7ec4\u4e0b\u6807\u662f\u9690\u5f0f\u7684\uff0c\u4e0d\u9700\u8981\u5b58\u50a8\u3002\u8868\u4e2d\u6240\u6709\u7684\u884c\u6309\u7167\u7ef4\u5ea6\u5217\uff0c\u505a\u591a\u91cd\u6392\u5e8f\uff0c\u6392\u5e8f\u540e\u7684\u4f4d\u7f6e\u5c31\u662f\u8be5\u884c\u7684\u884c\u53f7\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u67e5\u8be2\u65f6\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u7ef4\u5ea6\u5217\u4e0a\u7684\u7b49\u503c\u6761\u4ef6\u6216\u8005\u8303\u56f4\u6761\u4ef6\u3001\u5e76\u4e14\u8fd9\u4e9b\u6761\u4ef6\u4e2d\u7684\u7ef4\u5ea6\u5217\u53ef\u4ee5\u6784\u6210\u8868\u7684\u7ef4\u5ea6\u5217\u524d\u7f00\uff0c\u5219\u53ef\u4ee5\u5229\u7528\u6570\u636e\u7684\u6709\u5e8f\u6027\uff0c\u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u6cd5\u5feb\u901f\u9501\u5b9a\u76ee\u6807\u884c\u3002\u4f8b\u5982\uff0c\u8868 ",(0,i.jsx)(n.code,{children:"table1"})," \u5305\u542b ",(0,i.jsx)(n.code,{children:"event_day"}),"\u3001",(0,i.jsx)(n.code,{children:"siteid"}),"\u3001",(0,i.jsx)(n.code,{children:"citycode"})," \u548c ",(0,i.jsx)(n.code,{children:"username"})," \u56db\u5217\uff0c\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"event_day"})," \u548c ",(0,i.jsx)(n.code,{children:"siteid"})," \u662f\u7ef4\u5ea6\u5217\u3002\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u4e3a ",(0,i.jsx)(n.code,{children:"event_day = 2020-09-18"})," \u548c ",(0,i.jsx)(n.code,{children:"siteid = 2"}),"\uff0c\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"event_day"})," \u548c ",(0,i.jsx)(n.code,{children:"siteid"})," \u53ef\u4ee5\u6784\u6210\u7ef4\u5ea6\u5217\u524d\u7f00\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u6cd5\uff0c\u53ea\u9700\u8981\u5904\u7406\u6307\u5b9a\u8303\u56f4\u5185\u7684\u6570\u636e\uff1b\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u4e3a ",(0,i.jsx)(n.code,{children:"citycode = 4"})," \u548c ",(0,i.jsx)(n.code,{children:"username = Andy"}),"\uff0c\u56e0\u4e3a ",(0,i.jsx)(n.code,{children:"citycode"})," \u548c ",(0,i.jsx)(n.code,{children:"username"})," \u4e0d\u80fd\u6784\u6210\u7ef4\u5ea6\u5217\u524d\u7f00\uff0c\u56e0\u6b64\u65e0\u6cd5\u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u6cd5\uff0c\u5fc5\u987b\u5904\u7406\u6574\u8868\u7684\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7d22\u5f15",children:"\u7d22\u5f15"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u901a\u8fc7\u524d\u7f00\u7d22\u5f15 (Prefix Index) \u548c\u5217\u7ea7\u7d22\u5f15\uff0c\u80fd\u591f\u5feb\u901f\u627e\u5230\u76ee\u6807\u884c\u6240\u5728\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3002"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u8868\u8bbe\u8ba1\u539f\u7406\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u7a00\u758f\u7d22\u5f15",src:s(61633).Z+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u5f20\u8868\u4e2d\u7684\u6570\u636e\u7ec4\u7ec7\u4e3b\u8981\u7531\u4e09\u90e8\u5206\u6784\u6210\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u524d\u7f00\u7d22\u5f15"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u4e2d\u6bcf 1024 \u884c\u6570\u636e\u6784\u6210\u4e00\u4e2a\u903b\u8f91\u6570\u636e\u5757 (Data Block)\u3002\u6bcf\u4e2a\u903b\u8f91\u6570\u636e\u5757\u5728\u524d\u7f00\u7d22\u5f15\u8868\u4e2d\u5b58\u50a8\u4e00\u4e2a\u7d22\u5f15\u9879\uff0c\u7d22\u5f15\u9879\u7684\u5185\u5bb9\u4e3a\u6570\u636e\u5757\u4e2d\u7b2c\u4e00\u884c\u6570\u636e\u7684\u7ef4\u5ea6\u5217\u6240\u6784\u6210\u7684\u524d\u7f00\uff0c\u957f\u5ea6\u4e0d\u8d85\u8fc7 36 \u5b57\u8282\u3002\u524d\u7f00\u7d22\u5f15\u662f\u4e00\u79cd\u7a00\u758f\u7d22\u5f15\u3002\u4f7f\u7528\u8868\u4e2d\u67d0\u884c\u6570\u636e\u7684\u7ef4\u5ea6\u5217\u6240\u6784\u6210\u7684\u524d\u7f00\u67e5\u627e\u524d\u7f00\u7d22\u5f15\u8868\uff0c\u53ef\u4ee5\u786e\u5b9a\u8be5\u884c\u6570\u636e\u6240\u5728\u903b\u8f91\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5217\u7ea7\u6570\u636e\u5757"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u4e2d\u6bcf\u5217\u6570\u636e\u90fd\u6309 64 KB \u5206\u5757\u5b58\u50a8\u3002\u6570\u636e\u5757\u4f5c\u4e3a\u4e00\u4e2a\u5355\u4f4d\u5355\u72ec\u7f16\u7801\u3001\u538b\u7f29\uff0c\u4e5f\u4f5c\u4e3a I/O \u5355\u4f4d\uff0c\u6574\u4f53\u5199\u56de\u8bbe\u5907\u6216\u8005\u8bfb\u51fa\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5217\u7ea7\u7d22\u5f15"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u4e2d\u6bcf\u5217\u6570\u636e\u90fd\u6709\u4e00\u4e2a\u72ec\u7acb\u7684\u884c\u53f7\u7d22\u5f15\u3002\u884c\u53f7\u7d22\u5f15\u8868\u4e2d\uff0c\u8be5\u5217\u7684\u6570\u636e\u5757\u548c\u884c\u53f7\u4e00\u4e00\u5bf9\u5e94\u3002\u6bcf\u4e2a\u884c\u53f7\u7d22\u5f15\u9879\u7531\u5bf9\u5e94\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3001\u4f4d\u7f6e\u548c\u957f\u5ea6\u4fe1\u606f\u6784\u6210\u3002\u7528\u67d0\u884c\u6570\u636e\u7684\u884c\u53f7\u67e5\u627e\u884c\u53f7\u7d22\u5f15\u8868\uff0c\u53ef\u4ee5\u83b7\u53d6\u5305\u542b\u8be5\u884c\u53f7\u5bf9\u5e94\u7684\u6570\u636e\u5757\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u8bfb\u53d6\u76ee\u6807\u6570\u636e\u5757\u540e\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u627e\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u6b64\u53ef\u89c1\uff0c\u901a\u8fc7\u67d0\u884c\u6570\u636e\u7684\u7ef4\u5ea6\u5217\u6240\u6784\u6210\u7684\u524d\u7f00\u67e5\u627e\u8be5\u884c\u6570\u636e\u7684\u8fc7\u7a0b\u5305\u542b\u4ee5\u4e0b\u4e94\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5148\u67e5\u627e\u524d\u7f00\u7d22\u5f15\u8868\uff0c\u83b7\u5f97\u903b\u8f91\u6570\u636e\u5757\u7684\u8d77\u59cb\u884c\u53f7\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u67e5\u627e\u7ef4\u5ea6\u5217\u7684\u884c\u53f7\u7d22\u5f15\uff0c\u5b9a\u4f4d\u5230\u7ef4\u5ea6\u5217\u7684\u6570\u636e\u5757\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8bfb\u53d6\u6570\u636e\u5757\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u89e3\u538b\u3001\u89e3\u7801\u6570\u636e\u5757\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4ece\u6570\u636e\u5757\u4e2d\u627e\u5230\u7ef4\u5ea6\u5217\u524d\u7f00\u5bf9\u5e94\u7684\u6570\u636e\u9879\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u52a0\u901f\u5904\u7406",children:"\u52a0\u901f\u5904\u7406"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u901a\u8fc7\u5982\u4e0b\u673a\u5236\u5b9e\u73b0\u6570\u636e\u7684\u52a0\u901f\u5904\u7406\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u9884\u5148\u805a\u5408",children:"\u9884\u5148\u805a\u5408"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u652f\u6301\u805a\u5408\u6a21\u578b\uff0c\u7ef4\u5ea6\u5217\u53d6\u503c\u76f8\u540c\u7684\u6570\u636e\u884c\u53ef\u5408\u5e76\u4e00\u884c\u3002\u5408\u5e76\u540e\uff0c\u6570\u636e\u884c\u7684\u7ef4\u5ea6\u5217\u53d6\u503c\u4e0d\u53d8\uff0c\u6307\u6807\u5217\u7684\u53d6\u503c\u4e3a\u8fd9\u4e9b\u6570\u636e\u884c\u7684\u805a\u5408\u7ed3\u679c\u3002\u60a8\u9700\u8981\u7ed9\u6307\u6807\u5217\u6307\u5b9a\u805a\u5408\u51fd\u6570\u3002\u901a\u8fc7\u9884\u5148\u805a\u5408\uff0c\u53ef\u4ee5\u52a0\u901f\u805a\u5408\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5206\u533a\u5206\u6876",children:"\u5206\u533a\u5206\u6876"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u4e2d\uff0c\u8868\u88ab\u5212\u5206\u6210\u591a\u4e2a Tablet\uff0c\u6bcf\u4e2a Tablet \u591a\u526f\u672c\u5197\u4f59\u5b58\u50a8\u5728 BE \u4e0a\u3002BE \u548c Tablet \u7684\u6570\u91cf\u53ef\u4ee5\u6839\u636e\u8ba1\u7b97\u8d44\u6e90\u548c\u6570\u636e\u89c4\u6a21\u7684\u53d8\u5316\u800c\u5f39\u6027\u4f38\u7f29\u3002\u67e5\u8be2\u65f6\uff0c\u591a\u53f0 BE \u53ef\u4ee5\u5e76\u884c\u5730\u67e5\u627e Tablet\uff0c\u4ece\u800c\u5feb\u901f\u83b7\u53d6\u6570\u636e\u3002\u6b64\u5916\uff0cTablet \u7684\u526f\u672c\u53ef\u4ee5\u590d\u5236\u548c\u8fc1\u79fb\uff0c\u4ece\u800c\u589e\u5f3a\u6570\u636e\u53ef\u9760\u6027\uff0c\u5e76\u907f\u514d\u6570\u636e\u503e\u659c\u3002\u603b\u4e4b\uff0c\u5206\u533a\u5206\u6876\u6709\u6548\u4fdd\u8bc1\u4e86\u6570\u636e\u8bbf\u95ee\u7684\u9ad8\u6548\u6027\u548c\u7a33\u5b9a\u6027\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u7269\u5316\u89c6\u56fe",children:"\u7269\u5316\u89c6\u56fe"}),"\n",(0,i.jsx)(n.p,{children:"\u524d\u7f00\u7d22\u5f15\u53ef\u4ee5\u52a0\u901f\u6570\u636e\u67e5\u627e\uff0c\u4f46\u662f\u524d\u7f00\u7d22\u5f15\u4f9d\u8d56\u7ef4\u5ea6\u5217\u7684\u6392\u5217\u6b21\u5e8f\u3002\u5982\u679c\u4f7f\u7528\u975e\u524d\u7f00\u7684\u7ef4\u5ea6\u5217\u6784\u9020\u67e5\u627e\u8c13\u8bcd\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528\u524d\u7f00\u7d22\u5f15\u3002\u60a8\u53ef\u4ee5\u4e3a\u6570\u636e\u8868\u521b\u5efa\u7269\u5316\u89c6\u56fe\u3002\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u7ec4\u7ec7\u548c\u5b58\u50a8\u4e0e\u6570\u636e\u8868\u76f8\u540c\uff0c\u4f46\u7269\u5316\u89c6\u56fe\u62e5\u6709\u81ea\u5df1\u7684\u524d\u7f00\u7d22\u5f15\u3002\u5728\u4e3a\u7269\u5316\u89c6\u56fe\u521b\u5efa\u7d22\u5f15\u65f6\uff0c\u53ef\u6307\u5b9a\u805a\u5408\u7684\u7c92\u5ea6\u3001\u5217\u7684\u6570\u91cf\u548c\u7ef4\u5ea6\u5217\u7684\u6b21\u5e8f\uff0c\u4f7f\u9891\u7e41\u4f7f\u7528\u7684\u67e5\u8be2\u6761\u4ef6\u80fd\u591f\u547d\u4e2d\u76f8\u5e94\u7684\u7269\u5316\u89c6\u56fe\u7d22\u5f15\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5217\u7ea7\u7d22\u5f15",children:"\u5217\u7ea7\u7d22\u5f15"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5e03\u9686\u8fc7\u6ee4\u5668 (Bloom Filter)\u3001ZoneMap \u7d22\u5f15\u548c \u4f4d\u56fe (Bitmap) \u7d22\u5f15\u7b49\u5217\u7ea7\u522b\u7684\u7d22\u5f15\u6280\u672f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5e03\u9686\u8fc7\u6ee4\u5668\u6709\u52a9\u4e8e\u5feb\u901f\u5224\u65ad\u6570\u636e\u5757\u4e2d\u4e0d\u542b\u6240\u67e5\u627e\u7684\u503c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ZoneMap \u7d22\u5f15\u6709\u52a9\u4e8e\u901a\u8fc7\u6570\u636e\u8303\u56f4\u5feb\u901f\u8fc7\u6ee4\u51fa\u5f85\u67e5\u627e\u7684\u503c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f4d\u56fe\u7d22\u5f15\u6709\u52a9\u4e8e\u5feb\u901f\u8ba1\u7b97\u51fa\u679a\u4e3e\u7c7b\u578b\u7684\u5217\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u884c\u3002"}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},35991:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/3.1-1-32a6db08ea3ab55f0d69f7cdf850c5a4.png"},61633:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/3.1-2-8a46609641638e47e926a93bf1c10c2a.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>l});var i=s(67294);const c=i.createContext({});function l(e){const n=i.useContext(c);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const d={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||d:l(e),i.createElement(c.Provider,{value:r},n)}}}]);