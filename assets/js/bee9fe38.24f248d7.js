"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[26475],{28362:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(85893),s=n(11151);const o={},i="Prepare deployment files",d={id:"deployment/prepare_deployment_files",title:"Prepare deployment files",description:"This topic describes how to prepare StarRocks deployment files.",source:"@site/versioned_docs/version-3.0/deployment/prepare_deployment_files.md",sourceDirName:"deployment",slug:"/deployment/prepare_deployment_files",permalink:"/docs/3.0/deployment/prepare_deployment_files",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/deployment/prepare_deployment_files.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Post-deployment setup",permalink:"/docs/3.0/deployment/post_deployment_setup"},next:{title:"Deploy StarRocks with Operator",permalink:"/docs/3.0/deployment/sr_operator"}},l={},c=[{value:"For x86-based CentOS 7.9",id:"for-x86-based-centos-79",level:2},{value:"For ARM-based CPU or Ubuntu 22.04",id:"for-arm-based-cpu-or-ubuntu-2204",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedures",id:"procedures",level:3}];function a(e){const r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",ol:"ol",li:"li",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",ul:"ul"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"prepare-deployment-files",children:"Prepare deployment files"}),"\n",(0,t.jsx)(r.p,{children:"This topic describes how to prepare StarRocks deployment files."}),"\n",(0,t.jsxs)(r.p,{children:["Currently, the binary distribution packages StarRocks provides on ",(0,t.jsx)(r.a,{href:"https://www.starrocks.io/download/community",children:"the StarRocks official website"})," support deployments only on x86-based CentOS 7.9. If you want to deploy StarRocks with the ARM architecture CPUs or on Ubuntu 22.04, you need to prepare the deployment files using the StarRocks Docker image."]}),"\n",(0,t.jsx)(r.h2,{id:"for-x86-based-centos-79",children:"For x86-based CentOS 7.9"}),"\n",(0,t.jsxs)(r.p,{children:["StarRocks binary distribution packages are named in the ",(0,t.jsx)(r.strong,{children:"StarRocks-version.tar.gz"})," format, where ",(0,t.jsx)(r.strong,{children:"version"})," is a number (for example, ",(0,t.jsx)(r.strong,{children:"2.5.2"}),") that indicates the version information of the binary distribution package. Make sure that you have chosen the correct version of the package."]}),"\n",(0,t.jsx)(r.p,{children:"Follow these steps to prepare deployment files for the x86-based CentOS 7.9 platform:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Obtain the StarRocks binary distribution package directly from the ",(0,t.jsx)(r.a,{href:"https://www.starrocks.io/download/community",children:"Download StarRocks"})," page or by running the following command in your terminal:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <version> with the version of StarRocks you want to download, for example, 2.5.2.\nwget https://releases.starrocks.io/starrocks/StarRocks-<version>.tar.gz\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Extract the files in the package."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <version> with the version of StarRocks you have downloaded.\ntar -xzvf StarRocks-<version>.tar.gz\n"})}),"\n",(0,t.jsx)(r.p,{children:"The package includes the following directories and files:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Directory/File"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"apache_hdfs_broker"})}),(0,t.jsxs)(r.td,{children:["The deployment directory of the Broker node. From StarRocks v2.5 onwards, you do not need to deploy Broker nodes in general scenarios. If you need to deploy Broker nodes in your StarRocks cluster, see ",(0,t.jsx)(r.a,{href:"/docs/3.0/deployment/deploy_broker",children:"Deploy Broker node"})," for detailed instructions."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"fe"})}),(0,t.jsx)(r.td,{children:"The FE deployment directory."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"be"})}),(0,t.jsx)(r.td,{children:"The BE deployment directory."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"LICENSE.txt"})}),(0,t.jsx)(r.td,{children:"The StarRocks license file."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"NOTICE.txt"})}),(0,t.jsx)(r.td,{children:"The StarRocks notice file."})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Dispatch the directory ",(0,t.jsx)(r.strong,{children:"fe"})," to all the FE instances and the directory ",(0,t.jsx)(r.strong,{children:"be"})," to all the BE or CN instances for ",(0,t.jsx)(r.a,{href:"/docs/3.0/deployment/deploy_manually",children:"manual deployment"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"for-arm-based-cpu-or-ubuntu-2204",children:"For ARM-based CPU or Ubuntu 22.04"}),"\n",(0,t.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["You must have ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/engine/install/",children:"Docker Engine"})," (17.06.0 or later) installed on your machine."]}),"\n",(0,t.jsx)(r.h3,{id:"procedures",children:"Procedures"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Download a StarRocks Docker image from ",(0,t.jsx)(r.a,{href:"https://hub.docker.com/r/starrocks/artifacts-ubuntu/tags",children:"StarRocks Docker Hub"}),". You can choose a specific version based on the tag of the image."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If you use Ubuntu 22.04:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <image_tag> with the tag of the image that you want to download, for example, 2.5.4.\ndocker pull starrocks/artifacts-ubuntu:<image_tag>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If you use ARM-based CentOS 7.9:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <image_tag> with the tag of the image that you want to download, for example, 2.5.4.\ndocker pull starrocks/artifacts-centos7:<image_tag>\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Copy the StarRocks deployment files from the Docker image to your host machine by running the following command:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If you use Ubuntu 22.04:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <image_tag> with the tag of the image that you have downloaded, for example, 2.5.4.\ndocker run --rm starrocks/artifacts-ubuntu:<image_tag> \\\n    tar -cf - -C /release . | tar -xvf -\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If you use ARM-based CentOS 7.9:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Bash",children:"# Replace <image_tag> with the tag of the image that you have downloaded, for example, 2.5.4.\ndocker run --rm starrocks/artifacts-centos7:<image_tag> \\\n    tar -cf - -C /release . | tar -xvf -\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"The deployment files include the following directories:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Directory"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"be_artifacts"})}),(0,t.jsxs)(r.td,{children:["This directory includes the BE or CN deployment directory ",(0,t.jsx)(r.strong,{children:"be"}),", StarRocks license file ",(0,t.jsx)(r.strong,{children:"LICENSE.txt"}),", and StarRocks notice file ",(0,t.jsx)(r.strong,{children:"NOTICE.txt"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"broker_artifacts"})}),(0,t.jsxs)(r.td,{children:["This directory includes the Broker deployment directory ",(0,t.jsx)(r.strong,{children:"apache_hdfs_broker"}),". From StarRocks 2.5 onwards, you do not need to deploy Broker nodes in general scenarios. If you need to deploy Broker nodes in your StarRocks cluster, see ",(0,t.jsx)(r.a,{href:"/docs/3.0/deployment/deploy_broker",children:"Deploy Broker"})," for detailed instructions."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"fe_artifacts"})}),(0,t.jsxs)(r.td,{children:["This directory includes the FE deployment directory ",(0,t.jsx)(r.strong,{children:"fe"}),", StarRocks license file ",(0,t.jsx)(r.strong,{children:"LICENSE.txt"}),", and StarRocks notice file ",(0,t.jsx)(r.strong,{children:"NOTICE.txt"}),"."]})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Dispatch the directory ",(0,t.jsx)(r.strong,{children:"fe"})," to all the FE instances and the directory ",(0,t.jsx)(r.strong,{children:"be"})," to all the BE or CN instances for ",(0,t.jsx)(r.a,{href:"/docs/3.0/deployment/deploy_manually",children:"manual deployment"}),"."]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:r}=Object.assign({},(0,s.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,r,n)=>{n.d(r,{Zo:()=>d,ah:()=>o});var t=n(67294);const s=t.createContext({});function o(e){const r=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function d({components:e,children:r,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||i:o(e),t.createElement(s.Provider,{value:d},r)}}}]);