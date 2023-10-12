"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[64713],{57935:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(85893),s=n(11151);const o={displayed_sidebar:"documentation"},i="Deployment prerequisites",a={id:"deployment/deployment_prerequisites",title:"Deployment prerequisites",description:"This topic describes the hardware and software requirements that your servers must meet before deploying StarRocks. For recommended hardware specifications of your StarRocks cluster, see Plan your StarRocks cluster.",source:"@site/versioned_docs/version-2.5/deployment/deployment_prerequisites.md",sourceDirName:"deployment",slug:"/deployment/deployment_prerequisites",permalink:"/doc/docs/2.5/deployment/deployment_prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/deployment/deployment_prerequisites.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Deployment overview",permalink:"/doc/docs/2.5/deployment/deployment_overview"},next:{title:"Plan StarRocks cluster",permalink:"/doc/docs/2.5/deployment/plan_cluster"}},c={},l=[{value:"Hardware",id:"hardware",level:2},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3},{value:"Storage",id:"storage",level:3},{value:"Network",id:"network",level:3},{value:"Operating system",id:"operating-system",level:2},{value:"Software",id:"software",level:2}];function d(e){const r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",ol:"ol"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"deployment-prerequisites",children:"Deployment prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["This topic describes the hardware and software requirements that your servers must meet before deploying StarRocks. For recommended hardware specifications of your StarRocks cluster, see ",(0,t.jsx)(r.a,{href:"/doc/docs/2.5/deployment/plan_cluster",children:"Plan your StarRocks cluster"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsx)(r.h3,{id:"cpu",children:"CPU"}),"\n",(0,t.jsx)(r.p,{children:"StarRocks relies on AVX2 instruction sets to fully unleash its vectorization capability. Therefore, in a production environment, we highly recommend you deploy StarRocks on machines with x86 architecture CPUs."}),"\n",(0,t.jsx)(r.p,{children:"You can run the following command in your terminal to check if the CPUs on your machines support the AVX2 instruction sets:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"cat /proc/cpuinfo | grep avx2\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"NOTE"})}),"\n",(0,t.jsx)(r.p,{children:"ARM architecture does not support SIMD instruction sets, and therefore is less competitive than x86 architecture in some scenarios. Therefore, we only recommend deploying StarRocks on ARM architecture in a development environment."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"memory",children:"Memory"}),"\n",(0,t.jsxs)(r.p,{children:["No specific requirement is imposed on memory kits used for StarRocks. See ",(0,t.jsx)(r.a,{href:"/doc/docs/2.5/deployment/plan_cluster#cpu-and-memory",children:"Plan StarRocks cluster - CPU and Memory"})," for the recommended memory size."]}),"\n",(0,t.jsx)(r.h3,{id:"storage",children:"Storage"}),"\n",(0,t.jsx)(r.p,{children:"StarRocks supports both HDD and SSD as storage medium."}),"\n",(0,t.jsx)(r.p,{children:"If your applications require real-time data analytics, intensive data scans, or random disk access, we strongly recommend you use SSD storage."}),"\n",(0,t.jsxs)(r.p,{children:["If your applications involve ",(0,t.jsx)(r.a,{href:"/doc/docs/2.5/table_design/table_types/primary_key_table",children:"Primary Key tables"})," with the persistent index, you must use SSD storage."]}),"\n",(0,t.jsx)(r.h3,{id:"network",children:"Network"}),"\n",(0,t.jsx)(r.p,{children:"We recommend that you use 10 Gigabit Ethernet networking to ensure stable data transmission across nodes within your StarRocks cluster."}),"\n",(0,t.jsx)(r.h2,{id:"operating-system",children:"Operating system"}),"\n",(0,t.jsx)(r.p,{children:"StarRocks supports deployments on CentOS 7.9 or Ubuntu 22.04."}),"\n",(0,t.jsx)(r.h2,{id:"software",children:"Software"}),"\n",(0,t.jsx)(r.p,{children:"You must install JDK 8 on your servers to run StarRocks. For v2.5.10 and later versions, JDK 11 is recommended."}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"CAUTION"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"StarRocks does not support JRE."}),"\n",(0,t.jsx)(r.li,{children:"If you want to install StarRocks on Ubuntu 22.04, you must install JDK 11."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Follow these steps to install JDK 8:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Navigate to the path for the JDK installation."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Download JDK by running the following command:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:'wget --no-check-certificate --no-cookies \\\n    --header "Cookie: oraclelicense=accept-securebackup-cookie"  \\\n    http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\n'})}),"\n"]}),"\n"]})]})}const u=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>o});var t=n(67294);const s=t.createContext({});function o(e){const r=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:o(e),t.createElement(s.Provider,{value:a},r)}}}]);