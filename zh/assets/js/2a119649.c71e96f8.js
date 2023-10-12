"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[35282],{707:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var r=s(85893),c=s(11151);const d={displayed_sidebar:"Chinese31"},l="\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks",i={id:"developers/build-starrocks/Build_in_docker",title:"\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/developers/build-starrocks/Build_in_docker.md",sourceDirName:"developers/build-starrocks",slug:"/developers/build-starrocks/Build_in_docker",permalink:"/doc/zh/docs/developers/build-starrocks/Build_in_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/developers/build-starrocks/Build_in_docker.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"Contribute to StarRocks",permalink:"/doc/zh/docs/developers/How_to_Contribute"},next:{title:"build_starrocks_on_ubuntu",permalink:"/doc/zh/docs/developers/build-starrocks/build_starrocks_on_ubuntu"}},t={},a=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"StarRocks \u7248\u672c\u548c\u5f00\u53d1\u73af\u5883\u955c\u50cf",id:"starrocks-\u7248\u672c\u548c\u5f00\u53d1\u73af\u5883\u955c\u50cf",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u4e0b\u8f7d\u955c\u50cf",id:"\u7b2c\u4e00\u6b65\u4e0b\u8f7d\u955c\u50cf",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5728 Docker \u5bb9\u5668\u4e2d\u7f16\u8bd1 StarRocks",id:"\u7b2c\u4e8c\u6b65\u5728-docker-\u5bb9\u5668\u4e2d\u7f16\u8bd1-starrocks",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",div:"div",pre:"pre",code:"code",ol:"ol"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f7f\u7528-docker-\u7f16\u8bd1-starrocks",children:"\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Docker \u7f16\u8bd1 StarRocks\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"StarRocks \u63d0\u4f9b Ubuntu 22.04 \u548c CentOS 7.9 \u7684\u5f00\u53d1\u73af\u5883\u955c\u50cf\u3002\u901a\u8fc7\u8be5\u955c\u50cf\uff0c\u60a8\u53ef\u4ee5\u5728 Docker \u5bb9\u5668\u4e2d\u7f16\u8bd1 StarRocks\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"starrocks-\u7248\u672c\u548c\u5f00\u53d1\u73af\u5883\u955c\u50cf",children:"StarRocks \u7248\u672c\u548c\u5f00\u53d1\u73af\u5883\u955c\u50cf"}),"\n",(0,r.jsxs)(n.p,{children:["StarRocks \u7684\u4e0d\u540c\u7248\u672c\u5bf9\u5e94 ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/u/starrocks",children:"StarRocks Docker Hub"})," \u4e0a\u63d0\u4f9b\u7684\u4e0d\u540c\u5f00\u53d1\u73af\u5883\u955c\u50cf\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ubuntu 22.04:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5206\u652f\u540d"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u955c\u50cf\u540d"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"main"}),(0,r.jsxs)(n.td,{children:["starrocks/dev-env-ubuntu",(0,r.jsx)(n.div,{})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"branch-3.0"}),(0,r.jsx)(n.td,{children:"starrocks/dev-env-ubuntu:3.0-latest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"branch-2.5"}),(0,r.jsx)(n.td,{children:"starrocks/dev-env-ubuntu:2.5-latest"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For CentOS 7.9:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5206\u652f\u540d"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u955c\u50cf\u540d"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"main"}),(0,r.jsxs)(n.td,{children:["starrocks/dev-env-centos7",(0,r.jsx)(n.div,{})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"branch-3.0"}),(0,r.jsx)(n.td,{children:"starrocks/dev-env-centos7:3.0-latest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"branch-2.5"}),(0,r.jsx)(n.td,{children:"starrocks/dev-env-centos7:2.5-latest"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7f16\u8bd1 StarRocks \u524d\uff0c\u8bf7\u786e\u4fdd\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u786c\u4ef6"})}),"\n",(0,r.jsx)(n.p,{children:"\u673a\u5668\u5fc5\u987b\u6709 8 GB \u4ee5\u4e0a\u5185\u5b58"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8f6f\u4ef6"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u673a\u5668\u5fc5\u987b\u8fd0\u884c Ubuntu 22.04 \u6216 CentOS 7.9"}),"\n",(0,r.jsx)(n.li,{children:"\u673a\u5668\u5fc5\u987b\u5b89\u88c5 Docker"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c\u4e00\u6b65\u4e0b\u8f7d\u955c\u50cf",children:"\u7b2c\u4e00\u6b65\uff1a\u4e0b\u8f7d\u955c\u50cf"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u5f00\u53d1\u73af\u5883\u955c\u50cf\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <image_name> \u66ff\u6362\u4e3a\u60a8\u8981\u4e0b\u8f7d\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 `starrocks/dev-env-ubuntu:latest`\u3002\n# \u8bf7\u786e\u4fdd\u4e3a\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u9009\u62e9\u6b63\u786e\u7684\u955c\u50cf\u3002\ndocker pull <image_name>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Docker \u4f1a\u81ea\u52a8\u8bc6\u522b\u673a\u5668\u7684 CPU \u67b6\u6784\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u3002 \u5176\u4e2d ",(0,r.jsx)(n.code,{children:"linux/amd64"})," \u955c\u50cf\u9002\u7528\u4e8e\u57fa\u4e8e x86 \u67b6\u6784\u7684 CPU\uff0c\u800c ",(0,r.jsx)(n.code,{children:"linux/arm64"})," \u955c\u50cf\u9002\u7528\u4e8e\u57fa\u4e8e ARM \u67b6\u6784\u7684 CPU\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c\u4e8c\u6b65\u5728-docker-\u5bb9\u5668\u4e2d\u7f16\u8bd1-starrocks",children:"\u7b2c\u4e8c\u6b65\uff1a\u5728 Docker \u5bb9\u5668\u4e2d\u7f16\u8bd1 StarRocks"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u542f\u52a8\u5f00\u53d1\u73af\u5883 Docker \u5bb9\u5668\u65f6\u9009\u62e9\u662f\u5426\u6302\u8f7d\u672c\u673a\u8def\u5f84\u3002\u5efa\u8bae\u60a8\u9009\u62e9\u6302\u8f7d\u672c\u5730\u4e3b\u673a\u8def\u5f84\uff0c\u4ece\u800c\u907f\u514d\u4e0b\u6b21\u7f16\u8bd1\u65f6\u91cd\u65b0\u4e0b\u8f7d Java \u4f9d\u8d56\uff0c\u4e5f\u65e0\u9700\u624b\u52a8\u5c06\u5bb9\u5668\u4e2d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230\u672c\u673a\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8 Docker \u5bb9\u5668\u5e76\u6302\u8f7d\u672c\u673a\u8def\u5f84\uff1a"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06 StarRocks \u6e90\u7801\u514b\u9686\u81f3\u672c\u673a\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"git clone https://github.com/StarRocks/starrocks.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u5bb9\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <code_dir> \u66ff\u6362\u4e3a StarRocks \u6e90\u4ee3\u7801\u76ee\u5f55\u7684\u4e0a\u7ea7\u76ee\u5f55\u3002\n# \u5c06 <branch_name> \u66ff\u6362\u4e3a\u955c\u50cf\u540d\u79f0\u5bf9\u5e94\u7684\u5206\u652f\u540d\u79f0\u3002\n# \u5c06 <image_name> \u66ff\u6362\u4e3a\u60a8\u4e0b\u8f7d\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002\ndocker run -it -v <code_dir>/.m2:/root/.m2 \\\n    -v <code_dir>/starrocks:/root/starrocks \\\n    --name <branch_name> -d <image_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u5185\u542f\u52a8 bash shell\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <branch_name> \u66ff\u6362\u4e3a\u955c\u50cf\u540d\u79f0\u5bf9\u5e94\u7684\u5206\u652f\u540d\u79f0\u3002\ndocker exec -it <branch_name> /bin/bash\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u5185\u7f16\u8bd1 StarRocks\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"cd /root/starrocks && ./build.sh\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8 Docker \u5bb9\u5668\uff0c\u4e0d\u6302\u8f7d\u672c\u673a\u8def\u5f84\uff1a"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u5bb9\u5668"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <branch_name> \u66ff\u6362\u4e3a\u955c\u50cf\u540d\u79f0\u5bf9\u5e94\u7684\u5206\u652f\u540d\u79f0\u3002\n# \u5c06 <image_name> \u66ff\u6362\u4e3a\u60a8\u4e0b\u8f7d\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002\ndocker run -it --name <branch_name> -d <image_name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u5185\u542f\u52a8 bash shell\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"# \u5c06 <branch_name> \u66ff\u6362\u4e3a\u955c\u50cf\u540d\u79f0\u5bf9\u5e94\u7684\u5206\u652f\u540d\u79f0\u3002\ndocker exec -it <branch_name> /bin/bash\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06 StarRocks \u6e90\u7801\u514b\u9686\u81f3\u5bb9\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"git clone https://github.com/StarRocks/starrocks.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u5185\u7f16\u8bd1 StarRocks\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"cd starrocks && ./build.sh\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,r.jsx)(n.p,{children:"Q\uff1aStarRocks BE \u7f16\u8bd1\u5931\u8d25\uff0c\u8fd4\u56de\u5982\u4e0b\u9519\u8bef\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",children:"g++: fatal error: Killed signal terminated program cc1plus\ncompilation terminated.\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u8be5\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"A\uff1a\u6b64\u9519\u8bef\u6d88\u606f\u8868\u793a Docker \u5bb9\u5668\u5185\u5b58\u4e0d\u8db3\u3002\u60a8\u9700\u8981\u4e3a\u5bb9\u5668\u5206\u914d\u81f3\u5c11 8 GB \u7684\u5185\u5b58\u8d44\u6e90\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>d});var r=s(67294);const c=r.createContext({});function d(e){const n=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||l:d(e),r.createElement(c.Provider,{value:i},n)}}}]);