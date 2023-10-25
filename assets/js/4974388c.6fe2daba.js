"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[18656],{87354:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(85893),r=i(11151);const s={displayed_sidebar:"English"},o="Introduction of the dev-env image",a={id:"administration/Build_in_docker",title:"Introduction of the dev-env image",description:"Download the image",source:"@site/versioned_docs/version-2.3/administration/Build_in_docker.md",sourceDirName:"administration",slug:"/administration/Build_in_docker",permalink:"/docs/2.3/administration/Build_in_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Build_in_docker.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Blacklist Management",permalink:"/docs/2.3/administration/Blacklist"},next:{title:"Manage a cluster",permalink:"/docs/2.3/administration/Cluster_administration"}},d={},l=[{value:"Download the image",id:"download-the-image",level:2},{value:"Version",id:"version",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Third party tool",id:"third-party-tool",level:2},{value:"Required",id:"required",level:2},{value:"FAQ",id:"faq",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div",ul:"ul",li:"li",p:"p",strong:"strong",blockquote:"blockquote",ol:"ol"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"introduction-of-the-dev-env-image",children:"Introduction of the dev-env image"}),"\n",(0,t.jsx)(n.h2,{id:"download-the-image",children:"Download the image"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# download image from dockerhub\ndocker pull starrocks/dev-env:{version}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"version",children:"Version"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"starrocks branch"}),(0,t.jsx)(n.th,{children:"image tag"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"main"}),(0,t.jsxs)(n.td,{children:["starrocks/dev-env",(0,t.jsx)(n.div,{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"..."}),(0,t.jsx)(n.td,{children:"..."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the container as usual"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -it --name {container-name} -d starrocks/dev-env:{version}\ndocker exec -it {container-name} /bin/bash\n# Run git clone starrocks in any path which in the container\ngit clone https://github.com/StarRocks/starrocks.git\ncd starrocks\n./build.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the container by mounting the local path (",(0,t.jsx)(n.strong,{children:"recommended"}),")"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avoid re-downloading java dependency"}),"\n",(0,t.jsx)(n.li,{children:"No need to copy the compiled binary package in starrocks/output from the container"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -it \\\n-v /{local-path}/.m2:/root/.m2 \\\n-v /{local-path}/starrocks:/root/starrocks \\\n--name {container-name} \\\n-d starrocks/dev-env:{version}\n\ndocker exec -it {container-name} /bin/bash\ncd /root/starrocks\n./build.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"third-party-tool",children:"Third party tool"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"We have integrated some tools in the image so that you can easily use them"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"llvm"}),"\n",(0,t.jsx)(n.li,{children:"clang"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"required",children:"Required"}),"\n",(0,t.jsx)(n.p,{children:"Memory: 8GB+"}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Fail to compile StarRocks BE."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"g++: fatal error: Killed signal terminated program cc1plus\ncompilation terminated.\n"})}),"\n",(0,t.jsx)(n.p,{children:"When you met above error message, it may be caused by lacking of memory.\nYou should give more memory to the container.\n8GB is enough."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>a,ah:()=>s});var t=i(67294);const r=t.createContext({});function s(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||o:s(e),t.createElement(r.Provider,{value:a},n)}}}]);