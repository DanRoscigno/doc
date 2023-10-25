"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89209],{97687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(85893),r=t(11151);const s={displayed_sidebar:"English"},i="Introduction of the dev-env image",d={id:"development/Build_in_docker",title:"Introduction of the dev-env image",description:"Download the image",source:"@site/versioned_docs/version-1.19/development/Build_in_docker.md",sourceDirName:"development",slug:"/development/Build_in_docker",permalink:"/zh/docs/1.19/development/Build_in_docker",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/development/Build_in_docker.md",tags:[],version:"1.19",frontMatter:{displayed_sidebar:"English"},sidebar:"English",next:{title:"StarRocks",permalink:"/zh/docs/1.19/introduction/StarRocks_intro"}},c={},l=[{value:"Download the image",id:"download-the-image",level:2},{value:"Version",id:"version",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Third party tool",id:"third-party-tool",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",div:"div",ul:"ul",li:"li",p:"p",strong:"strong",blockquote:"blockquote"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction-of-the-dev-env-image",children:"Introduction of the dev-env image"}),"\n",(0,o.jsx)(n.h2,{id:"download-the-image",children:"Download the image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# download image from dockerhub\ndocker pull starrocks/dev-env:{version}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"version",children:"Version"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"starrocks branch"}),(0,o.jsx)(n.th,{children:"image tag"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"main"}),(0,o.jsxs)(n.td,{children:["starrocks/dev-env",(0,o.jsx)(n.div,{})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"..."}),(0,o.jsx)(n.td,{children:"..."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run the container as usual"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker run -it --name {container-name} -d starrocks/dev-env:{version}\ndocker exec -it {container-name} /bin/bash\n# Run git clone starrocks in any path which in the container\ngit clone https://github.com/StarRocks/starrocks.git\ncd starrocks\nsh build.sh\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the container by mounting the local path (",(0,o.jsx)(n.strong,{children:"recommended"}),")"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Avoid re-downloading java dependency"}),"\n",(0,o.jsx)(n.li,{children:"No need to copy the compiled binary package in starrocks/output from the container"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"docker run -it \\\n-v /{local-path}/.m2:/root/.m2 \\\n-v /{local-path}/starrocks:/root/starrocks \\\n--name {container-name} \\\n-d starrocks/dev-env:{version}\n\ndocker exec -it {container-name} /bin/bash\ncd /root/starrocks\nsh build.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"third-party-tool",children:"Third party tool"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"We have integrated some tools in the image so that you can easily use them"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"llvm"}),"\n",(0,o.jsx)(n.li,{children:"clang"}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>s});var o=t(67294);const r=o.createContext({});function s(e){const n=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:s(e),o.createElement(r.Provider,{value:d},n)}}}]);