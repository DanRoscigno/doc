"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[68072],{98187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var d=r(85893),o=r(11151);const s={displayed_sidebar:"Chinese31"},a="Broker Load \u5e38\u89c1\u95ee\u9898",c={id:"faq/loading/Broker_load_faq",title:"Broker Load \u5e38\u89c1\u95ee\u9898",description:"1. Broker Load \u662f\u5426\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u3001\u5904\u4e8e FINISHED \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/faq/loading/Broker_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Broker_load_faq",permalink:"/doc/zh/docs/2.5/faq/loading/Broker_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/faq/loading/Broker_load_faq.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/Deploy_faq"},next:{title:"DataX \u5bfc\u5165\u5e38\u89c1\u95ee\u9898",permalink:"/doc/zh/docs/2.5/faq/loading/DataX_faq"}},i={},l=[{value:"1. Broker Load \u662f\u5426\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u3001\u5904\u4e8e FINISHED \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\uff1f",id:"1-broker-load-\u662f\u5426\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u5904\u4e8e-finished-\u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a",level:2},{value:"2. \u901a\u8fc7 Broker Load \u5bfc\u5165 HDFS \u6570\u636e\u65f6\uff0c\u4e3a\u4ec0\u4e48\u6570\u636e\u7684\u5bfc\u5165\u65e5\u671f\u5b57\u6bb5\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u6bd4\u6b63\u786e\u7684\u65e5\u671f\u65f6\u95f4\u591a\u52a0\u4e86 8 \u5c0f\u65f6\uff1f\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u600e\u4e48\u5904\u7406\uff1f",id:"2-\u901a\u8fc7-broker-load-\u5bfc\u5165-hdfs-\u6570\u636e\u65f6\u4e3a\u4ec0\u4e48\u6570\u636e\u7684\u5bfc\u5165\u65e5\u671f\u5b57\u6bb5\u4f1a\u51fa\u73b0\u5f02\u5e38\u6bd4\u6b63\u786e\u7684\u65e5\u671f\u65f6\u95f4\u591a\u52a0\u4e86-8-\u5c0f\u65f6\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u600e\u4e48\u5904\u7406",level:2},{value:"3. \u901a\u8fc7 Broker Load \u5bfc\u5165 ORC \u683c\u5f0f\u7684\u6570\u636e\u65f6\uff0c\u53d1\u751f <code>ErrorMsg: type:ETL_RUN_FAIL; msg:Cannot cast &#39;&lt;slot 6&gt;&#39; from VARCHAR to ARRAY&lt;VARCHAR(30)&gt;</code> \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"3-\u901a\u8fc7-broker-load-\u5bfc\u5165-orc-\u683c\u5f0f\u7684\u6570\u636e\u65f6\u53d1\u751f-errormsg-typeetl_run_fail-msgcannot-cast-slot-6-from-varchar-to-arrayvarchar30-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"4. \u4e3a\u4ec0\u4e48 Broker Load \u5bfc\u5165\u4f5c\u4e1a\u6ca1\u62a5\u9519\uff0c\u4f46\u662f\u5374\u67e5\u8be2\u4e0d\u5230\u6570\u636e\uff1f",id:"4-\u4e3a\u4ec0\u4e48-broker-load-\u5bfc\u5165\u4f5c\u4e1a\u6ca1\u62a5\u9519\u4f46\u662f\u5374\u67e5\u8be2\u4e0d\u5230\u6570\u636e",level:2},{value:"5. \u5bfc\u5165\u62a5 &quot;failed to send batch&quot; \u6216 &quot;TabletWriter add batch with unknown id&quot; \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"5-\u5bfc\u5165\u62a5-failed-to-send-batch-\u6216-tabletwriter-add-batch-with-unknown-id-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"6. \u5bfc\u5165\u62a5 &quot;LOAD-RUN-FAIL; msg:OrcScannerAdapter::init_include_columns. col name = xxx not found&quot; \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"6-\u5bfc\u5165\u62a5-load-run-fail-msgorcscanneradapterinit_include_columns-col-name--xxx-not-found-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"7. \u53d1\u751f\u5176\u4ed6\u6bd4\u5982\u5bfc\u5165\u4f5c\u4e1a\u957f\u65f6\u95f4\u6ca1\u6709\u7ed3\u675f\u7b49\u95ee\u9898\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"7-\u53d1\u751f\u5176\u4ed6\u6bd4\u5982\u5bfc\u5165\u4f5c\u4e1a\u957f\u65f6\u95f4\u6ca1\u6709\u7ed3\u675f\u7b49\u95ee\u9898\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2},{value:"8. \u5982\u4f55\u914d\u7f6e\u8bbf\u95ee\u9ad8\u53ef\u7528 (HA) \u6a21\u5f0f\u4e0b\u7684 Apache HDFS \u96c6\u7fa4\uff1f",id:"8-\u5982\u4f55\u914d\u7f6e\u8bbf\u95ee\u9ad8\u53ef\u7528-ha-\u6a21\u5f0f\u4e0b\u7684-apache-hdfs-\u96c6\u7fa4",level:2},{value:"9. \u5982\u4f55\u914d\u7f6e Hadoop ViewFS Federation\uff1f",id:"9-\u5982\u4f55\u914d\u7f6e-hadoop-viewfs-federation",level:2},{value:"10. \u901a\u8fc7 Kerberos \u8ba4\u8bc1\u8bbf\u95ee HDFS \u96c6\u7fa4\u65f6\uff0c\u62a5 &quot;Can&#39;t get Kerberos realm&quot; \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f",id:"10-\u901a\u8fc7-kerberos-\u8ba4\u8bc1\u8bbf\u95ee-hdfs-\u96c6\u7fa4\u65f6\u62a5-cant-get-kerberos-realm-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",level:2}];function t(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",pre:"pre",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"broker-load-\u5e38\u89c1\u95ee\u9898",children:"Broker Load \u5e38\u89c1\u95ee\u9898"}),"\n",(0,d.jsx)(n.h2,{id:"1-broker-load-\u662f\u5426\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u5904\u4e8e-finished-\u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a",children:"1. Broker Load \u662f\u5426\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u3001\u5904\u4e8e FINISHED \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\uff1f"}),"\n",(0,d.jsxs)(n.p,{children:["Broker Load \u4e0d\u652f\u6301\u518d\u6b21\u6267\u884c\u5df2\u7ecf\u6267\u884c\u6210\u529f\u3001\u5904\u4e8e FINISHED \u72b6\u6001\u7684\u5bfc\u5165\u4f5c\u4e1a\u3002\u800c\u4e14\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u4e0d\u4e22\u4e0d\u91cd\uff0c\u6bcf\u4e2a\u6267\u884c\u6210\u529f\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e (Label) \u5747\u4e0d\u53ef\u590d\u7528\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," \u8bed\u53e5\u67e5\u770b\u5386\u53f2\u7684\u5bfc\u5165\u8bb0\u5f55\uff0c\u627e\u5230\u60f3\u8981\u518d\u6b21\u6267\u884c\u7684\u5bfc\u5165\u4f5c\u4e1a\uff0c\u590d\u5236\u4f5c\u4e1a\u4fe1\u606f\uff0c\u5e76\u4fee\u6539\u4f5c\u4e1a\u6807\u7b7e\u540e\uff0c\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u5e76\u6267\u884c\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u901a\u8fc7-broker-load-\u5bfc\u5165-hdfs-\u6570\u636e\u65f6\u4e3a\u4ec0\u4e48\u6570\u636e\u7684\u5bfc\u5165\u65e5\u671f\u5b57\u6bb5\u4f1a\u51fa\u73b0\u5f02\u5e38\u6bd4\u6b63\u786e\u7684\u65e5\u671f\u65f6\u95f4\u591a\u52a0\u4e86-8-\u5c0f\u65f6\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u600e\u4e48\u5904\u7406",children:"2. \u901a\u8fc7 Broker Load \u5bfc\u5165 HDFS \u6570\u636e\u65f6\uff0c\u4e3a\u4ec0\u4e48\u6570\u636e\u7684\u5bfc\u5165\u65e5\u671f\u5b57\u6bb5\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0c\u6bd4\u6b63\u786e\u7684\u65e5\u671f\u65f6\u95f4\u591a\u52a0\u4e86 8 \u5c0f\u65f6\uff1f\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u600e\u4e48\u5904\u7406\uff1f"}),"\n",(0,d.jsxs)(n.p,{children:["StarRocks \u8868\u5728\u5efa\u8868\u65f6\u8bbe\u7f6e\u7684 ",(0,d.jsx)(n.code,{children:"timezone"})," \u4e3a\u4e2d\u56fd\u65f6\u533a\uff0c\u521b\u5efa Broker Load \u5bfc\u5165\u4f5c\u4e1a\u65f6\u8bbe\u7f6e\u7684 ",(0,d.jsx)(n.code,{children:"timezone"})," \u4e5f\u662f\u4e2d\u56fd\u65f6\u533a\uff0c\u800c\u670d\u52a1\u5668\u8bbe\u7f6e\u7684\u662f UTC \u65f6\u533a\u3002\u56e0\u6b64\uff0c\u65e5\u671f\u5b57\u6bb5\u5728\u5bfc\u5165\u65f6\uff0c\u6bd4\u6b63\u786e\u7684\u65e5\u671f\u65f6\u95f4\u591a\u52a0\u4e86 8 \u5c0f\u65f6\u3002\u4e3a\u907f\u514d\u8be5\u95ee\u9898\uff0c\u9700\u8981\u5728\u5efa\u8868\u65f6\u53bb\u6389 ",(0,d.jsx)(n.code,{children:"timezone"})," \u53c2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"3-\u901a\u8fc7-broker-load-\u5bfc\u5165-orc-\u683c\u5f0f\u7684\u6570\u636e\u65f6\u53d1\u751f-errormsg-typeetl_run_fail-msgcannot-cast-slot-6-from-varchar-to-arrayvarchar30-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:["3. \u901a\u8fc7 Broker Load \u5bfc\u5165 ORC \u683c\u5f0f\u7684\u6570\u636e\u65f6\uff0c\u53d1\u751f ",(0,d.jsx)(n.code,{children:"ErrorMsg: type:ETL_RUN_FAIL; msg:Cannot cast '<slot 6>' from VARCHAR to ARRAY<VARCHAR(30)>"})," \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6e90\u6570\u636e\u6587\u4ef6\u548c Starrocks \u8868\u4e24\u4fa7\u7684\u5217\u540d\u4e0d\u4e00\u81f4\uff0c\u6267\u884c ",(0,d.jsx)(n.code,{children:"SET"})," \u5b50\u53e5\u7684\u65f6\u5019\u7cfb\u7edf\u5185\u90e8\u4f1a\u6709\u4e00\u4e2a\u7c7b\u578b\u63a8\u65ad\uff0c\u4f46\u662f\u5728\u8c03\u7528 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-functions/cast",children:"cast"})," \u51fd\u6570\u6267\u884c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u65f6\u5019\u5931\u8d25\u4e86\u3002\u89e3\u51b3\u529e\u6cd5\u662f\u786e\u4fdd\u4e24\u4fa7\u7684\u5217\u540d\u4e00\u81f4\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981 ",(0,d.jsx)(n.code,{children:"SET"})," \u5b50\u53e5\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u8c03\u7528 cast \u51fd\u6570\u6267\u884c\u6570\u636e\u7c7b\u578b\u8f6c\u6362\uff0c\u5bfc\u5165\u5c31\u53ef\u4ee5\u6210\u529f\u4e86\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"4-\u4e3a\u4ec0\u4e48-broker-load-\u5bfc\u5165\u4f5c\u4e1a\u6ca1\u62a5\u9519\u4f46\u662f\u5374\u67e5\u8be2\u4e0d\u5230\u6570\u636e",children:"4. \u4e3a\u4ec0\u4e48 Broker Load \u5bfc\u5165\u4f5c\u4e1a\u6ca1\u62a5\u9519\uff0c\u4f46\u662f\u5374\u67e5\u8be2\u4e0d\u5230\u6570\u636e\uff1f"}),"\n",(0,d.jsxs)(n.p,{children:["Broker Load \u662f\u4e00\u79cd\u5f02\u6b65\u7684\u5bfc\u5165\u65b9\u5f0f\uff0c\u521b\u5efa\u5bfc\u5165\u4f5c\u4e1a\u7684\u8bed\u53e5\u6ca1\u62a5\u9519\uff0c\u4e0d\u4ee3\u8868\u5bfc\u5165\u4f5c\u4e1a\u6210\u529f\u4e86\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",children:"SHOW LOAD"})," \u8bed\u53e5\u6765\u67e5\u770b\u5bfc\u5165\u4f5c\u4e1a\u7684\u7ed3\u679c\u72b6\u6001\u548c ",(0,d.jsx)(n.code,{children:"errmsg"})," \u4fe1\u606f\uff0c\u7136\u540e\u4fee\u6539\u5bfc\u5165\u4f5c\u4e1a\u7684\u53c2\u6570\u914d\u7f6e\u540e\uff0c\u518d\u91cd\u8bd5\u5bfc\u5165\u4f5c\u4e1a\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u5bfc\u5165\u62a5-failed-to-send-batch-\u6216-tabletwriter-add-batch-with-unknown-id-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:'5. \u5bfc\u5165\u62a5 "failed to send batch" \u6216 "TabletWriter add batch with unknown id" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,d.jsxs)(n.p,{children:["\u8be5\u9519\u8bef\u7531\u6570\u636e\u5199\u5165\u8d85\u65f6\u800c\u5f15\u8d77\u3002\u9700\u8981\u4fee\u6539",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/reference/System_variable",children:"\u7cfb\u7edf\u53d8\u91cf"})," ",(0,d.jsx)(n.code,{children:"query_timeout"})," \u548c ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/administration/Configuration#%E9%85%8D%E7%BD%AE-be-%E9%9D%99%E6%80%81%E5%8F%82%E6%95%B0",children:"BE \u914d\u7f6e\u9879"})," ",(0,d.jsx)(n.code,{children:"streaming_load_rpc_max_alive_time_sec"})," \u7684\u914d\u7f6e\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"6-\u5bfc\u5165\u62a5-load-run-fail-msgorcscanneradapterinit_include_columns-col-name--xxx-not-found-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:'6. \u5bfc\u5165\u62a5 "LOAD-RUN-FAIL; msg:OrcScannerAdapter::init_include_columns. col name = xxx not found" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u5bfc\u5165\u7684\u662f Parquet \u6216 ORC \u683c\u5f0f\u7684\u6570\u636e\uff0c\u68c0\u67e5\u6587\u4ef6\u5934\u7684\u5217\u540d\u662f\u5426\u4e0e StarRocks \u8868\u4e2d\u7684\u5217\u540d\u4e00\u81f4\uff0c\u4f8b\u5982:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:"(tmp_c1,tmp_c2)\nSET\n(\n   id=tmp_c2,\n   name=tmp_c1\n)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\uff0c\u8868\u793a\u5c06 Parquet \u6216 ORC \u6587\u4ef6\u4e2d\u4ee5 ",(0,d.jsx)(n.code,{children:"tmp_c1"})," \u548c ",(0,d.jsx)(n.code,{children:"tmp_c2"})," \u4e3a\u5217\u540d\u7684\u5217\uff0c\u5206\u522b\u6620\u5c04\u5230 StarRocks \u8868\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"name"})," \u548c ",(0,d.jsx)(n.code,{children:"id"})," \u5217\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"SET"})," \u5b50\u53e5\uff0c\u5219\u4ee5 ",(0,d.jsx)(n.code,{children:"column_list"})," \u53c2\u6570\u4e2d\u6307\u5b9a\u7684\u5217\u4f5c\u4e3a\u6620\u5c04\u3002\u5177\u4f53\u8bf7\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"/doc/zh/docs/2.5/sql-reference/sql-statements/data-manipulation/BROKER_LOAD",children:"BROKER LOAD"}),"\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6ce8\u610f"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5bfc\u5165\u7684\u662f Apache Hive\u2122 \u7248\u672c\u76f4\u63a5\u751f\u6210\u7684 ORC \u6587\u4ef6\uff0c\u5e76\u4e14 ORC \u6587\u4ef6\u4e2d\u7684\u8868\u5934\u662f ",(0,d.jsx)(n.code,{children:"(_col0, _col1, _col2, ...)"}),'\uff0c\u53ef\u80fd\u5bfc\u81f4 "Invalid Column Name" \u9519\u8bef\u3002\u8fd9\u65f6\u5019\u9700\u8981\u4f7f\u7528 ',(0,d.jsx)(n.code,{children:"SET"})," \u5b50\u53e5\u8bbe\u7f6e\u5217\u8f6c\u6362\u89c4\u5219\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"7-\u53d1\u751f\u5176\u4ed6\u6bd4\u5982\u5bfc\u5165\u4f5c\u4e1a\u957f\u65f6\u95f4\u6ca1\u6709\u7ed3\u675f\u7b49\u95ee\u9898\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:"7. \u53d1\u751f\u5176\u4ed6\u6bd4\u5982\u5bfc\u5165\u4f5c\u4e1a\u957f\u65f6\u95f4\u6ca1\u6709\u7ed3\u675f\u7b49\u95ee\u9898\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 FE \u4e0a\u7684\u65e5\u5fd7\u6587\u4ef6 ",(0,d.jsx)(n.strong,{children:"fe.log"})," \u4e2d\uff0c\u6839\u636e\u5bfc\u5165\u4f5c\u4e1a\u7684\u6807\u7b7e\u6765\u641c\u7d22\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002\u7136\u540e\uff0c\u5728 BE \u4e0a\u7684\u65e5\u5fd7\u6587\u4ef6 ",(0,d.jsx)(n.strong,{children:"be.INFO"})," \u6587\u4ef6\u4e2d\uff0c\u6839\u636e\u5bfc\u5165\u4f5c\u4e1a\u7684 ID \u6765\u641c\u7d22\u4e0a\u4e0b\u6587\u65e5\u5fd7\uff0c\u8fdb\u800c\u67e5\u770b\u5177\u4f53\u539f\u56e0\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"8-\u5982\u4f55\u914d\u7f6e\u8bbf\u95ee\u9ad8\u53ef\u7528-ha-\u6a21\u5f0f\u4e0b\u7684-apache-hdfs-\u96c6\u7fa4",children:"8. \u5982\u4f55\u914d\u7f6e\u8bbf\u95ee\u9ad8\u53ef\u7528 (HA) \u6a21\u5f0f\u4e0b\u7684 Apache HDFS \u96c6\u7fa4\uff1f"}),"\n",(0,d.jsx)(n.p,{children:"\u6309\u7167\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dfs.nameservices"}),"\uff1a\u81ea\u5b9a\u4e49 HDFS \u96c6\u7fa4\u7684\u540d\u79f0\uff0c\u5982 ",(0,d.jsx)(n.code,{children:'"dfs.nameservices" = "my_ha"'}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"}),"\uff1a\u81ea\u5b9a\u4e49 NameNode \u7684\u540d\u5b57\uff0c\u591a\u4e2a\u540d\u79f0\u4ee5\u9017\u53f7 (,) \u5206\u9694\u3002\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"xxx"})," \u4e3a ",(0,d.jsx)(n.code,{children:"dfs.nameservices"})," \u4e2d\u914d\u7f6e\u7684 HDFS \u96c6\u7fa4\u7684\u540d\u79f0\uff0c\u5982 ",(0,d.jsx)(n.code,{children:'"dfs.ha.namenodes.my_ha" = "my_nn"'}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dfs.namenode.rpc-address.xxx.nn"}),"\uff1a\u6307\u5b9a NameNode \u7684 RPC \u5730\u5740\u4fe1\u606f\u3002\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"nn"})," \u8868\u793a ",(0,d.jsx)(n.code,{children:"dfs.ha.namenodes.xxx"})," \u4e2d\u81ea\u5b9a\u4e49 NameNode \u7684\u540d\u79f0\uff0c\u5982 ",(0,d.jsx)(n.code,{children:'"dfs.namenode.rpc-address.my_ha.my_nn" = "host:port"'}),"\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"dfs.client.failover.proxy.provider"}),"\uff1a\u6307\u5b9a\u5ba2\u6237\u7aef\u8fde\u63a5 NameNode \u7684\u63d0\u4f9b\u8005\uff0c\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'(\n    "dfs.nameservices" = "my-ha",\n    "dfs.ha.namenodes.my-ha" = "my-namenode1, my-namenode2",\n    "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n    "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u9ad8\u53ef\u7528\u6a21\u5f0f\u53ef\u4ee5\u548c\u7b80\u5355\u8ba4\u8bc1\u3001Kerberos \u8ba4\u8bc1\u4e24\u79cd\u8ba4\u8bc1\u65b9\u5f0f\u7ec4\u5408\uff0c\u8fdb\u884c HDFS \u96c6\u7fa4\u8bbf\u95ee\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u7b80\u5355\u8ba4\u8bc1\u8bbf\u95ee\u9ad8\u53ef\u7528\u6a21\u5f0f\u90e8\u7f72\u7684 HDFS \u96c6\u7fa4\uff0c\u9700\u8981\u6307\u5b9a\u5982\u4e0b\u914d\u7f6e\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-SQL",children:'(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my-ha",\n    "dfs.ha.namenodes.my-ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my-ha.my-namenode1" = "nn1-host:rpc_port",\n    "dfs.namenode.rpc-address.my-ha.my-namenode2" = "nn2-host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5173\u4e8e HDFS \u96c6\u7fa4\u7684\u914d\u7f6e\u53ef\u4ee5\u5199\u5165 ",(0,d.jsx)(n.strong,{children:"hdfs-site.xml"})," \u6587\u4ef6\u4e2d\u3002\u8fd9\u6837\u60a8\u5728\u4f7f\u7528 Broker \u7a0b\u5e8f\u8bfb\u53d6 HDFS \u96c6\u7fa4\u7684\u6570\u636e\u65f6\uff0c\u53ea\u9700\u8981\u586b\u5199\u96c6\u7fa4\u7684\u6587\u4ef6\u8def\u5f84\u540d\u548c\u8ba4\u8bc1\u4fe1\u606f\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"9-\u5982\u4f55\u914d\u7f6e-hadoop-viewfs-federation",children:"9. \u5982\u4f55\u914d\u7f6e Hadoop ViewFS Federation\uff1f"}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u5c06 ViewFs \u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"core-site.xml"})," \u548c ",(0,d.jsx)(n.code,{children:"hdfs-site.xml"})," \u62f7\u8d1d\u5230 ",(0,d.jsx)(n.strong,{children:"broker/conf"})," \u76ee\u5f55\u4e2d\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u6709\u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u7cfb\u7edf\uff0c\u9700\u8981\u5c06\u6587\u4ef6\u7cfb\u7edf\u76f8\u5173\u7684 ",(0,d.jsx)(n.strong,{children:".jar"})," \u6587\u4ef6\u62f7\u8d1d\u5230 ",(0,d.jsx)(n.strong,{children:"broker/lib"})," \u76ee\u5f55\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"10-\u901a\u8fc7-kerberos-\u8ba4\u8bc1\u8bbf\u95ee-hdfs-\u96c6\u7fa4\u65f6\u62a5-cant-get-kerberos-realm-\u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406",children:'10. \u901a\u8fc7 Kerberos \u8ba4\u8bc1\u8bbf\u95ee HDFS \u96c6\u7fa4\u65f6\uff0c\u62a5 "Can\'t get Kerberos realm" \u9519\u8bef\u5e94\u8be5\u5982\u4f55\u5904\u7406\uff1f'}),"\n",(0,d.jsxs)(n.p,{children:["\u9996\u5148\u68c0\u67e5\u662f\u5426\u6240\u6709\u7684 Broker \u6240\u5728\u7684\u673a\u5668\u90fd\u914d\u7f6e\u4e86 ",(0,d.jsx)(n.strong,{children:"/etc/krb5.conf"})," \u6587\u4ef6\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u914d\u7f6e\u4e86\u4ecd\u7136\u62a5\u9519\uff0c\u9700\u8981\u5728 Broker \u7684\u542f\u52a8\u811a\u672c\u4e2d ",(0,d.jsx)(n.code,{children:"JAVA_OPTS"})," \u53d8\u91cf\u7684\u6700\u540e\uff0c\u52a0\u4e0a ",(0,d.jsx)(n.code,{children:"-Djava.security.krb5.conf:/etc/krb5.conf"}),"\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>s});var d=r(67294);const o=d.createContext({});function s(e){const n=d.useContext(o);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:s(e),d.createElement(o.Provider,{value:c},n)}}}]);