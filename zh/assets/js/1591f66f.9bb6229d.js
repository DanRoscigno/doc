"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[71585],{73532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=r(85893),n=r(11151);const a={},i=void 0,c={id:"developers/trace-tools/Trace",title:"Trace",description:"Background",source:"@site/versioned_docs/version-3.1/developers/trace-tools/Trace.md",sourceDirName:"developers/trace-tools",slug:"/developers/trace-tools/Trace",permalink:"/zh/docs/developers/trace-tools/Trace",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/developers/trace-tools/Trace.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"Setup IDE  for developing StarRocks",permalink:"/zh/docs/developers/development-environment/ide-setup"},next:{title:"Ecosystem Release Notes",permalink:"/zh/docs/category/ecosystem-release-notes"}},o={},d=[{value:"Background",id:"background",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Adding traces",id:"adding-traces",level:3}];function l(e){const t=Object.assign({h3:"h3",p:"p",img:"img",ul:"ul",li:"li",ol:"ol",a:"a",code:"code",pre:"pre"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"background",children:"Background"}),"\n",(0,s.jsx)(t.p,{children:"\u2003A Distributed Trace, more commonly known as a Trace, records the paths taken by requests (made by an application or end-user) as they propagate through multi-service architectures, like microservice and serverless applications. Without tracing, it is challenging to pinpoint the cause of performance problems in a distributed system. It improves the visibility of our application or system\u2019s health and lets us debug behavior that is difficult to reproduce locally. Tracing is essential for distributed systems, which commonly have nondeterministic problems or are too complicated to reproduce locally.\n\u2003Tracing makes debugging and understanding distributed systems less daunting by breaking down what happens within a request as it flows through a distributed system. A Trace is made of one or more Spans. The first Span represents the Root Span. Each Root Span represents a request from start to finish. The Spans underneath the parent provide a more in-depth context of what occurs during a request (or what steps make up a request). Many Observability back-ends visualize Traces as waterfall diagrams that may look something like this picture."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"trace_pic1",src:r(20433).Z+"",width:"666",height:"296"})}),"\n",(0,s.jsx)(t.p,{children:"\u2003Waterfall diagrams show the parent-child relationship between a Root Span and its child Spans. When a Span encapsulates another Span, this also represents a nested relationship.\n\u2003Recently SR added a tracing framework. It leverages opentelemetry and jaeger to trace distributed events in the system."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Opentelemetry is an instrumentation/tracing SDK. Developers can use it to instrument code and emit tracing data to an observability backend. It supports many languages. We use java and CPP SDK in SR."}),"\n",(0,s.jsx)(t.li,{children:"Currently, Jaeger is used as the observability backend."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(t.p,{children:"Steps to enable tracing in SR:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install ",(0,s.jsx)(t.a,{href:"https://www.jaegertracing.io/docs/1.31/getting-started",children:"Jaeger"}),"\nThe guide above uses docker. For simplicity, you can also just download binary package and run locally, ",(0,s.jsx)(t.code,{children:"https://github.com/jaegertracing/jaeger/releases"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    decster@decster-MS-7C94:~/soft/jaeger-1.31.0-linux-amd64$ ll\n    total 215836\n    drwxr-xr-x  2 decster decster     4096 02-05 05:01:30 ./\n    drwxrwxr-x 28 decster decster     4096 05-18 18:24:07 ../\n    -rwxr-xr-x  1 decster decster 19323884 02-05 05:01:31 example-hotrod*\n    -rwxr-xr-x  1 decster decster 23430444 02-05 05:01:29 jaeger-agent*\n    -rwxr-xr-x  1 decster decster 51694774 02-05 05:01:29 jaeger-all-in-one*\n    -rwxr-xr-x  1 decster decster 41273869 02-05 05:01:30 jaeger-collector*\n    -rwxr-xr-x  1 decster decster 37576660 02-05 05:01:30 jaeger-ingester*\n    -rwxr-xr-x  1 decster decster 47698843 02-05 05:01:30 jaeger-query*\n\n    decster@decster-MS-7C94:~/soft/jaeger-1.31.0-linux-amd64$ ./jaeger-all-in-one \n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Config FE&FE to enable tracing\nCurrently, opentelemetry java & cpp sdk use different protocols, java uses grpc proto, while cpp uses thrift&UDP, so the endpoint ports are different."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    fe.conf\n\n    # Enable jaeger tracing by setting jaeger_grpc_endpoint\n    # jaeger_grpc_endpoint = http://localhost:14250\n\n\n    be.conf\n\n    # Enable jaeger tracing by setting jaeger_endpoint\n    # jaeger_endpoint = localhost:6831\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Open jaeger web UI, usually in ",(0,s.jsx)(t.code,{children:"http://localhost:16686/search"})]}),"\n",(0,s.jsx)(t.li,{children:"Do some data ingestion (streamload/insert into) and search TXN traces on web UI"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"trace_pic2.png",src:r(92416).Z+"",width:"1253",height:"967"}),"(trace_pic2.png)\n",(0,s.jsx)(t.img,{alt:"trace_pic3.png",src:r(33118).Z+"",width:"1269",height:"621"}),"(trace_pic3.png)"]}),"\n",(0,s.jsx)(t.h3,{id:"adding-traces",children:"Adding traces"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To add trace, first get familiar with basic concepts like tracer, span, trace propagation read the ",(0,s.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/observability-primer",children:"observability primer"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Read utility class and it's usages in SR: TraceManager.java(java) ",(0,s.jsx)(t.code,{children:"common/tracer.h/cpp (cpp)"}),", it's current usage(like write txn(load/insert/update/delete) trace, and its propagation to BE)."]}),"\n",(0,s.jsx)(t.li,{children:"Add your own trace"}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},20433:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/trace_pic1-0b28fa9d6ea86904ad1afdb76445db52.png"},92416:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/trace_pic2-7667cb8c15ecdfce6a0eb93a365a96e5.png"},33118:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/trace_pic3-31201861601577398a87e72701f9f3fa.png"},11151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>a});var s=r(67294);const n=s.createContext({});function a(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:a(e),s.createElement(n.Provider,{value:c},t)}}}]);