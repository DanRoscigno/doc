"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[51017],{67747:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(85893),r=s(11151);const i={},o="Setup IDE  for developing StarRocks",c={id:"developers/development-environment/ide-setup",title:"Setup IDE  for developing StarRocks",description:"Some people want to become StarRocks contributor, but are troubled by the development environment, so here I write a tutorial about it.",source:"@site/versioned_docs/version-3.0/developers/development-environment/ide-setup.md",sourceDirName:"developers/development-environment",slug:"/developers/development-environment/ide-setup",permalink:"/docs/3.0/developers/development-environment/ide-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/developers/development-environment/ide-setup.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"Setup StarRocks FE development environment on IDEA",permalink:"/docs/3.0/developers/development-environment/IDEA"},next:{title:"Trace",permalink:"/docs/3.0/developers/trace-tools/Trace"}},l={},d=[{value:"Prepare",id:"prepare",level:2},{value:"MacBook Setup",id:"macbook-setup",level:3},{value:"Ubuntu22 server setup",id:"ubuntu22-server-setup",level:3},{value:"IDE Setup",id:"ide-setup",level:2},{value:"FE",id:"fe",level:3},{value:"BE",id:"be",level:3},{value:"Last",id:"last",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",h3:"h3",pre:"pre",code:"code",img:"img",blockquote:"blockquote",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup-ide--for-developing-starrocks",children:"Setup IDE  for developing StarRocks"}),"\n",(0,t.jsx)(n.p,{children:"Some people want to become StarRocks contributor, but are troubled by the development environment, so here I write a tutorial about it."}),"\n",(0,t.jsx)(n.p,{children:"What is a perfect development toolchain?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support one click to compile FE and BE."}),"\n",(0,t.jsx)(n.li,{children:"Support code jump in Clion and IDEA."}),"\n",(0,t.jsx)(n.li,{children:"All variables in the IDE can be analyzed normally without red lines."}),"\n",(0,t.jsx)(n.li,{children:"Clion can enable its analysis function normally."}),"\n",(0,t.jsx)(n.li,{children:"Support FE and BE debug."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare",children:"Prepare"}),"\n",(0,t.jsxs)(n.p,{children:["I use a MacBook(M1) for local coding and a remote server for compiling & testing StarRocks. (Remote server uses Ubuntu 22, ",(0,t.jsx)(n.strong,{children:"at least need 16GB RAM"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"The overall idea is to write code on the MacBook,  then automatically synchronize the code to the server through the IDE, and use the server to compile and develop StarRocks."}),"\n",(0,t.jsx)(n.h3,{id:"macbook-setup",children:"MacBook Setup"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Thrift 0.13"})}),"\n",(0,t.jsx)(n.p,{children:"There is no 0.13 version of Thrift in brew repository, you can use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew tap-new $USER/local-tap\nbrew extract --version='0.13.0' thrift $USER/local-tap\nbrew install thrift@0.13.0\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can check whether Thrift is installed successfully with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ thrift -version\nThrift version 0.13.0\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,t.jsx)(n.p,{children:"Just use the latest version v3 directly, because the latest version of Protobuf is compatible with the v2 version of the Protobuf protocol in StarRocks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install protobuf\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maven"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install maven\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"OpenJDK 1.8 or 11"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install openjdk@11\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Python3"})}),"\n",(0,t.jsx)(n.p,{children:"MacOS comes with it, no installation is needed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setup system env"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=xxxxx\nexport PYTHON=/usr/bin/python3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ubuntu22-server-setup",children:"Ubuntu22 server setup"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Clone StarRocks code"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/StarRocks/starrocks.git"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Install required tools for compilation"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install gcc g++ maven openjdk-11-jdk python3 python-is-python3 unzip cmake bzip2 ccache byacc ccache flex automake libtool bison binutils-dev libiberty-dev build-essential ninja-build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Setup ",(0,t.jsx)(n.code,{children:"JAVA_HOME"})," env"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Do a compilation of StarRocks"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd starrocks/\n./build.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"The first time compile needs to compile thirdparty, it will require some time."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"You have to use gcc for the first compilation, currently, thirdparty can't compile success in clang."})}),"\n",(0,t.jsx)(n.h2,{id:"ide-setup",children:"IDE Setup"}),"\n",(0,t.jsx)(n.h3,{id:"fe",children:"FE"}),"\n",(0,t.jsxs)(n.p,{children:["FE development is simple because you can compile it in MacOS directly. Just enter ",(0,t.jsx)(n.code,{children:"fe"})," folder and run the command ",(0,t.jsx)(n.code,{children:"mvn install -DskipTests"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Then you can use IDEA to open ",(0,t.jsx)(n.code,{children:"fe"})," folder directly, everything is ok."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Local debug"})}),"\n",(0,t.jsx)(n.p,{children:"The same as other Java applications."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Remote debug"})}),"\n",(0,t.jsxs)(n.p,{children:["In Ubuntu server, run with ",(0,t.jsx)(n.code,{children:"./start_fe.sh --debug"}),", then use IDEA remote debug to connect it. The default port is 5005, you can change it in ",(0,t.jsx)(n.code,{children:"start_fe.sh"})," scripts."]}),"\n",(0,t.jsxs)(n.p,{children:["Debug java parameter: ",(0,t.jsx)(n.code,{children:"-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005"})," is just copied from IDEA."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDE",src:s(29216).Z+"",width:"1696",height:"1424"})}),"\n",(0,t.jsx)(n.h3,{id:"be",children:"BE"}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to run ",(0,t.jsx)(n.code,{children:"mvn install -DskipTests"})," first in ",(0,t.jsx)(n.code,{children:"fe"})," folder to ensure that thrift and protobuf in the gensrc directory are compiled correctly."]}),"\n",(0,t.jsxs)(n.p,{children:["Then you need to enter  ",(0,t.jsx)(n.code,{children:"gensrc"})," folder, run ",(0,t.jsx)(n.code,{children:"make clean"})," and ",(0,t.jsx)(n.code,{children:"make"})," commands respectively, otherwise Clion can't detect thrift's output files."]}),"\n",(0,t.jsxs)(n.p,{children:["Use Clion to open ",(0,t.jsx)(n.code,{children:"be"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"Settings"}),", add ",(0,t.jsx)(n.code,{children:"Toolchains"}),". Add a remote server first, then setup Build Tool, C and C++ Compiler separately."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDE",src:s(17652).Z+"",width:"2036",height:"1504"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"Settings"})," / ",(0,t.jsx)(n.code,{children:"Deployment"}),". Change folder ",(0,t.jsx)(n.code,{children:"mappings"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDE",src:s(61841).Z+"",width:"2036",height:"1504"})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"Settings"})," / ",(0,t.jsx)(n.code,{children:"Cmake"}),". Change Toolchain to be the remote toolchain just added. Add the following environment variables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64\nSTARROCKS_GCC_HOME=/usr/\nSTARROCKS_THIRDPARTY=/root/starrocks/thirdparty\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notice: Be careful not to check ",(0,t.jsx)(n.code,{children:"Include system environment variables"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDE",src:s(27348).Z+"",width:"2040",height:"1586"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IDE",src:s(46194).Z+"",width:"2036",height:"1586"})}),"\n",(0,t.jsx)(n.p,{children:"From here on, all setup is complete. After Clion and the remote server are synchronized for a while, the code jump will work normally."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Debug"})}),"\n",(0,t.jsx)(n.p,{children:"BE debug is a little difficult, you have to use gdb in your remote server. Of course, you can use gdb server + Clion remote gdb, but I don't recommend it, it's too stuck."}),"\n",(0,t.jsxs)(n.p,{children:["We need to change ",(0,t.jsx)(n.code,{children:"start_backend.sh"})," script from:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'if [ ${RUN_BE} -eq 1 ]; then\n    echo "start time: "$(date) >> $LOG_DIR/be.out\n    if [ ${RUN_DAEMON} -eq 1 ]; then\n        nohup ${STARROCKS_HOME}/lib/starrocks_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\n    else\n        ${STARROCKS_HOME}/lib/starrocks_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null\n    fi\nfi\n'})}),"\n",(0,t.jsx)(n.p,{children:"to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'if [ ${RUN_BE} -eq 1 ]; then\n    echo "start time: "$(date) >> $LOG_DIR/be.out\n    if [ ${RUN_DAEMON} -eq 1 ]; then\n        nohup ${STARROCKS_HOME}/lib/starrocks_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\n    else\n        gdb -tui ${STARROCKS_HOME}/lib/starrocks_be\n    fi\nfi\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then just run ",(0,t.jsx)(n.code,{children:"./bin/start_be.sh"})," without any flag."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you face the error report when debugging for lakehouse, just add ",(0,t.jsx)(n.code,{children:"handle SIGSEGV nostop noprint pass"})," in ",(0,t.jsx)(n.code,{children:"~/.gdbinit"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"LLVM"})}),"\n",(0,t.jsx)(n.p,{children:"Of course, you can use LLVM tools to development be."}),"\n",(0,t.jsxs)(n.p,{children:["Ubuntu LLVM installtion refer to: ",(0,t.jsx)(n.a,{href:"https://apt.llvm.org/",children:"https://apt.llvm.org/"})]}),"\n",(0,t.jsxs)(n.p,{children:["Then use the command:  ",(0,t.jsx)(n.code,{children:"CC=clang-15 CXX=clang++-15 ./build.sh"})," to compile be. But the premise is that your thirdparty has been compiled with gcc."]}),"\n",(0,t.jsx)(n.h2,{id:"last",children:"Last"}),"\n",(0,t.jsx)(n.p,{children:"Feel free to contribute codes to StarRocks. \ud83e\udef5"}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.inlighting.org/archives/setup-perfect-starrocks-dev-env-en",children:"https://www.inlighting.org/archives/setup-perfect-starrocks-dev-env-en"})}),"\n",(0,t.jsxs)(n.li,{children:["Chinese version: ",(0,t.jsx)(n.a,{href:"https://www.inlighting.org/archives/setup-perfect-starrocks-dev-env",children:"https://www.inlighting.org/archives/setup-perfect-starrocks-dev-env"})]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},29216:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ide-1-98b198df0ef5da5f566e18eba4c5cf5f.png"},17652:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ide-2-d70ce01d1c2227a2f753da205414c5e4.png"},61841:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ide-3-7f7db478d4179890a26040f538cc6e53.png"},27348:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ide-4-44ca169b84d329083c3bd624627fd200.png"},46194:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/ide-5-b84ccafdc6ed800da98838a727ab1bcf.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||o:i(e),t.createElement(r.Provider,{value:c},n)}}}]);