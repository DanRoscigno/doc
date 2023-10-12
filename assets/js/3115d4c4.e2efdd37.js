"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[97087],{69880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=r(85893),t=r(11151);const i={displayed_sidebar:"documentation"},o="Compile StarRocks with Docker",c={id:"developers/build-starrocks/Build_in_docker",title:"Compile StarRocks with Docker",description:"This topic describes how to compile StarRocks using Docker.",source:"@site/versioned_docs/version-3.0/developers/build-starrocks/Build_in_docker.md",sourceDirName:"developers/build-starrocks",slug:"/developers/build-starrocks/Build_in_docker",permalink:"/doc/docs/3.0/developers/build-starrocks/Build_in_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/developers/build-starrocks/Build_in_docker.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Contribute to StarRocks",permalink:"/doc/docs/3.0/developers/How_to_Contribute"},next:{title:"build_starrocks_on_ubuntu",permalink:"/doc/docs/3.0/developers/build-starrocks/build_starrocks_on_ubuntu"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"StarRocks version and DEV ENV image",id:"starrocks-version-and-dev-env-image",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Download the image",id:"step-1-download-the-image",level:2},{value:"Step 2: Compile StarRocks in a Docker container",id:"step-2-compile-starrocks-in-a-docker-container",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",div:"div",blockquote:"blockquote",code:"code",pre:"pre",ol:"ol"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"compile-starrocks-with-docker",children:"Compile StarRocks with Docker"}),"\n",(0,s.jsx)(n.p,{children:"This topic describes how to compile StarRocks using Docker."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks provides development environment images for both Ubuntu 22.04 and CentOS 7.9. With the image, you can launch a Docker container and compile StarRocks in the container."}),"\n",(0,s.jsx)(n.h3,{id:"starrocks-version-and-dev-env-image",children:"StarRocks version and DEV ENV image"}),"\n",(0,s.jsxs)(n.p,{children:["Different branches of StarRocks correspond to different development environment images provided on ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/u/starrocks",children:"StarRocks Docker Hub"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For Ubuntu 22.04:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Branch name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Image name"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"main"}),(0,s.jsxs)(n.td,{children:["starrocks/dev-env-ubuntu",(0,s.jsx)(n.div,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-3.0"}),(0,s.jsx)(n.td,{children:"starrocks/dev-env-ubuntu:3.0-latest"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-2.5"}),(0,s.jsx)(n.td,{children:"starrocks/dev-env-ubuntu:2.5-latest"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-2.4"}),(0,s.jsxs)(n.td,{children:["starrocks/dev-env",(0,s.jsx)(n.div,{}),".4"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-2.3"}),(0,s.jsxs)(n.td,{children:["starrocks/dev-env",(0,s.jsx)(n.div,{}),".3"]})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(n.p,{children:["This development environment image and was a CentOS 7 based image before the ",(0,s.jsx)(n.code,{children:"branch-2.5"}),". Since the ",(0,s.jsx)(n.code,{children:"branch-2.5"}),", Ubuntu-22.04 is recommended over CentOS7 distribution, and this image is renamed to ",(0,s.jsx)(n.code,{children:"dev-env-ubuntu"})," accordingly."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For CentOS 7.9:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Branch name"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Image name"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"main"}),(0,s.jsxs)(n.td,{children:["starrocks/dev-env-centos7",(0,s.jsx)(n.div,{})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-3.0"}),(0,s.jsx)(n.td,{children:"starrocks/dev-env-centos7:3.0-latest"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"branch-2.5"}),(0,s.jsx)(n.td,{children:"starrocks/dev-env-centos7:2.5-latest"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before compiling StarRocks, make sure the following requirements are satisfied:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Hardware"})}),"\n",(0,s.jsx)(n.p,{children:"Your machine must have at least 8 GB RAM."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Software"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Your machine must be running on Ubuntu 22.04 or CentOS 7.9."}),"\n",(0,s.jsx)(n.li,{children:"You must have Docker installed on your machine."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-1-download-the-image",children:"Step 1: Download the image"}),"\n",(0,s.jsx)(n.p,{children:"Download the development environment image by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <image_name> with the name of the image that you want to download, \n# for example, `starrocks/dev-env-ubuntu:latest`.\n# Make sure you have choose the correct image for your OS.\ndocker pull <image_name>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Docker automatically identifies the CPU architecture of your machine and pulls the corresponding image that suits your machine. The ",(0,s.jsx)(n.code,{children:"linux/amd64"})," images are for the x86-based CPUs, and ",(0,s.jsx)(n.code,{children:"linux/arm64"})," images are for the ARM-based CPUs."]}),"\n",(0,s.jsx)(n.h2,{id:"step-2-compile-starrocks-in-a-docker-container",children:"Step 2: Compile StarRocks in a Docker container"}),"\n",(0,s.jsx)(n.p,{children:"You can launch the development environment Docker container with or without the local host path mounted. We recommend you launch the container with the local host path mounted, so that you can avoid re-downloading the Java dependency during the next compilation, and you do not need to manually copy the binary files from the container to your local host."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Launch the container with the local host path mounted"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the StarRocks source code to your local host."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"git clone https://github.com/StarRocks/starrocks.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <code_dir> with the parent directory of the StarRocks source code directory.\n# Replace <branch_name> with the name of the branch that corresponds to the image name.\n# Replace <image_name> with the name of the image that you downloaded.\ndocker run -it -v <code_dir>/.m2:/root/.m2 \\\n    -v <code_dir>/starrocks:/root/starrocks \\\n    --name <branch_name> -d <image_name>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch a bash shell inside the container you have launched."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <branch_name> with the name of the branch that corresponds to the image name.\ndocker exec -it <branch_name> /bin/bash\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compile StarRocks in the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cd /root/starrocks && ./build.sh\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Launch the container without the local host path mounted"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <branch_name> with the name of the branch that corresponds to the image name.\n# Replace <image_name> with the name of the image that you downloaded.\ndocker run -it --name <branch_name> -d <image_name>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launch a bash shell inside the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"# Replace <branch_name> with the name of the branch that corresponds to the image name.\ndocker exec -it <branch_name> /bin/bash\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the StarRocks source code to the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"git clone https://github.com/StarRocks/starrocks.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compile StarRocks in the container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cd starrocks && ./build.sh\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"Q: The StarRocks BE building fails, and the following error message has been returned:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"g++: fatal error: Killed signal terminated program cc1plus\ncompilation terminated.\n"})}),"\n",(0,s.jsx)(n.p,{children:"What should I do?"}),"\n",(0,s.jsx)(n.p,{children:"A: This error message indicates a lack of memory in the Docker container. You need to allocate at least 8 GB of memory resources to the container."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var s=r(67294);const t=s.createContext({});function i(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||o:i(e),s.createElement(t.Provider,{value:c},n)}}}]);