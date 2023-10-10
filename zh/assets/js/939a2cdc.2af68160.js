"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[4523],{68571:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var t=i(85893),r=i(11151);const d={},s="How to build StarRocks",l={id:"developers/build-starrocks/handbook",title:"How to build StarRocks",description:"In general, you can build StarRocks by just executing",source:"@site/versioned_docs/version-3.0/developers/build-starrocks/handbook.md",sourceDirName:"developers/build-starrocks",slug:"/developers/build-starrocks/handbook",permalink:"/zh/docs/3.0/developers/build-starrocks/handbook",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/developers/build-starrocks/handbook.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"build_starrocks_on_ubuntu",permalink:"/zh/docs/3.0/developers/build-starrocks/build_starrocks_on_ubuntu"},next:{title:"\u4f7f\u7528 debuginfo \u6587\u4ef6\u8fdb\u884c\u8c03\u8bd5",permalink:"/zh/docs/3.0/developers/debuginfo"}},o={},c=[{value:"build FE/BE separately",id:"build-febe-separately",level:2},{value:"How to run BE UT in command line",id:"how-to-run-be-ut-in-command-line",level:2},{value:"build with clang",id:"build-with-clang",level:2},{value:"build with different linker",id:"build-with-different-linker",level:2},{value:"build different type",id:"build-different-type",level:2}];function a(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-build-starrocks",children:"How to build StarRocks"}),"\n",(0,t.jsx)(n.p,{children:"In general, you can build StarRocks by just executing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./build.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will check if all the thirdpary dependencies are ready at first. If all dependencies are ready, it will build StarRocks ",(0,t.jsx)(n.code,{children:"Backend"})," and ",(0,t.jsx)(n.code,{children:"Frontend"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After this command executes succefully, the generated binary will be in ",(0,t.jsx)(n.code,{children:"output"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"build-febe-separately",children:"build FE/BE separately"}),"\n",(0,t.jsx)(n.p,{children:"You don't need to build both FE and BE each time, you can build them separately.\nFor example, you can only build BE by"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./build.sh --be\n"})}),"\n",(0,t.jsx)(n.p,{children:"and, only build FE by"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./build.sh --fe\n"})}),"\n",(0,t.jsx)(n.h1,{id:"how-to-run-unit-test",children:"How to run unit test"}),"\n",(0,t.jsx)(n.p,{children:"Unit tests of BE and FE are separted. In general, you can run BE test by"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./run-be-ut.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"run FE test by"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./run-fe-ut.sh\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-be-ut-in-command-line",children:"How to run BE UT in command line"}),"\n",(0,t.jsxs)(n.p,{children:["Now, BE UT needs some dependency to run, and ",(0,t.jsx)(n.code,{children:"./run-be-ut.sh"})," helps it. But it is not flexible enough. When you want to run UT in the command-line, you can execute"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"UDF_RUNTIME_DIR=./ STARROCKS_HOME=./ LD_LIBRARY_PATH=/usr/lib/jvm/java-18-openjdk-amd64/lib/server ./be/ut_build_ASAN/test/starrocks_test\n"})}),"\n",(0,t.jsx)(n.p,{children:"StarRocks Backend UT is built on top of google-test, so you can pass filter to run some of the UT, For example, you want to test only MapColumn related tests, you can execute"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'UDF_RUNTIME_DIR=./ STARROCKS_HOME=./ LD_LIBRARY_PATH=/usr/lib/jvm/java-18-openjdk-amd64/lib/server ./be/ut_build_ASAN/test/starrocks_test --gtest_filter="*MapColumn*"\n'})}),"\n",(0,t.jsx)(n.h1,{id:"build-options",children:"Build options"}),"\n",(0,t.jsx)(n.h2,{id:"build-with-clang",children:"build with clang"}),"\n",(0,t.jsxs)(n.p,{children:["You can build StarRocks by ",(0,t.jsx)(n.code,{children:"clang"})," too"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CC=clang CXX=clang++ ./build.sh --be\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can see the following similar message in the build message"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- compiler Clang version 14.0.0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-with-different-linker",children:"build with different linker"}),"\n",(0,t.jsxs)(n.p,{children:["The default linker is slow, developer can specify different linker to speed up linking.\nFor example, you can use ",(0,t.jsx)(n.code,{children:"lld"}),", the LLVM-based linker."]}),"\n",(0,t.jsxs)(n.p,{children:["You need to install ",(0,t.jsx)(n.code,{children:"lld"})," firstly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt install lld\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you set the environment variable STARROCKS_LINKER with the linker you want to use.\nFor example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"STARROCKS_LINKER=lld ./build.sh --be\n"})}),"\n",(0,t.jsx)(n.h2,{id:"build-different-type",children:"build different type"}),"\n",(0,t.jsxs)(n.p,{children:["You can build StarRocks with different types with different BUILD_TYPE variable, the default BUILD_TYPE is ",(0,t.jsx)(n.code,{children:"RELEASE"}),". For example, you can build StarRocks with ",(0,t.jsx)(n.code,{children:"ASAN"})," type by"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"BUILD_TYPE=ASAN ./build.sh --be\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>l,ah:()=>d});var t=i(67294);const r=t.createContext({});function d(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function l({components:e,children:n,disableParentContext:i}){let l;return l=i?"function"==typeof e?e({}):e||s:d(e),t.createElement(r.Provider,{value:l},n)}}}]);