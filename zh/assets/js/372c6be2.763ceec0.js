"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[37602],{56366:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(85893),t=i(11151);const l={},c="bit_shift_left",r={id:"sql-reference/sql-functions/bit-functions/bit_shift_left",title:"bit_shift_left",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/sql-reference/sql-functions/bit-functions/bit_shift_left.md",sourceDirName:"sql-reference/sql-functions/bit-functions",slug:"/sql-reference/sql-functions/bit-functions/bit_shift_left",permalink:"/zh/docs/3.0/sql-reference/sql-functions/bit-functions/bit_shift_left",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-functions/bit-functions/bit_shift_left.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"to_binary",permalink:"/zh/docs/3.0/sql-reference/sql-functions/binary-functions/to_binary"},next:{title:"bit_shift_right",permalink:"/zh/docs/3.0/sql-reference/sql-functions/bit-functions/bit_shift_right"}},h={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"bit_shift_left",children:"bit_shift_left"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u4e00\u4e2a\u6570\u503c\u6216\u6570\u503c\u8868\u8fbe\u5f0f\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u5411\u5de6\u79fb\u52a8\u6307\u5b9a\u7684\u4f4d\u6570\u3002\u8be5\u51fd\u6570\u6267\u884c",(0,s.jsx)(n.strong,{children:"\u7b97\u672f\u5de6\u79fb"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7b97\u672f\u5de6\u79fb\u65f6\uff0c\u4f9d\u6b21\u5de6\u79fb\u4e00\u4f4d\uff0c\u5c3e\u90e8\u8865 0\uff0c\u5de6\u4fa7\u6700\u9ad8\u4f4d\u4fdd\u6301\u4e0d\u53d8\uff0cbit \u957f\u5ea6\u4e0d\u53d8\u3002\u4f8b\u5982\uff0c",(0,s.jsx)(n.code,{children:"10101"})," \u7b97\u672f\u5de6\u79fb\u4e00\u4f4d\u7684\u7ed3\u679c\u662f ",(0,s.jsx)(n.code,{children:"11010"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Haskell",children:"bit_shift_left(value, shift)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"value"}),": \u8981\u8fdb\u884c\u4f4d\u79fb\u7684\u6570\u503c\u6216\u6570\u503c\u8868\u8fbe\u5f0f\u3002\u652f\u6301\u5982\u4e0b\u6570\u636e\u7c7b\u578b\uff1aTINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001LARGEINT\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"shift"}),": \u8981\u79fb\u52a8\u7684\u4f4d\u6570\uff0cBIGINT \u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c\u8bf4\u660e",children:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u7684\u6570\u636e\u7c7b\u578b\u548c ",(0,s.jsx)(n.code,{children:"value"})," \u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u53c2\u6570\u4e3a NULL\uff0c\u5219\u8fd4\u56de NULL\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"shift"})," \u5c0f\u4e8e 0\uff0c\u5219\u8fd4\u56de 0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5bf9\u4e8e\u4efb\u610f ",(0,s.jsx)(n.code,{children:"valu``e"})," \u503c\uff0c\u5982\u679c ",(0,s.jsx)(n.code,{children:"shift"})," \u7b49\u4e8e 0\uff0c\u5219\u8fd4\u56de\u539f\u672c\u7684 ",(0,s.jsx)(n.code,{children:"value"})," \u503c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"value"})," \u7b49\u4e8e 0\uff0c\u5219\u56fa\u5b9a\u8fd4\u56de 0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"value"})," \u4e3a\u975e\u6574\u578b\u7684\u6570\u503c\uff0c\u4f1a\u8f6c\u6362\u4e3a\u6574\u6570\u8fdb\u884c\u8fd0\u7b97\u3002\u53c2\u89c1",(0,s.jsx)(n.a,{href:"#%E7%A4%BA%E4%BE%8B",children:"\u793a\u4f8b"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"value"})," \u4e3a STRING \u7c7b\u578b\uff0c\u4f1a\u8f6c\u6362\u4e3a\u6574\u6570\u8fdb\u884c\u8fd0\u7b97\u3002\u5982\u679c STRING \u65e0\u6cd5\u8f6c\u6362\u4e3a\u6574\u6570\uff0c\u5219\u4f5c\u4e3a NULL \u5904\u7406\u3002\u53c2\u89c1",(0,s.jsx)(n.a,{href:"#%E7%A4%BA%E4%BE%8B",children:"\u793a\u4f8b"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u7b97\u672f\u5de6\u79fb\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"SELECT bit_shift_left(2, 1);\n+----------------------+\n| bit_shift_left(2, 1) |\n+----------------------+\n|                    4 |\n+----------------------+\n\nSELECT bit_shift_left(2.2, 1);\n+------------------------+\n| bit_shift_left(2.2, 1) |\n+------------------------+\n|                      4 |\n+------------------------+\n\nSELECT bit_shift_left(\"2\", 1);\n+------------------------+\n| bit_shift_left('2', 1) |\n+------------------------+\n|                      4 |\n+------------------------+\n\nSELECT bit_shift_left(-2, 1);\n+-----------------------+\n| bit_shift_left(-2, 1) |\n+-----------------------+\n|                    -4 |\n+-----------------------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/bit-functions/bit_shift_right",children:"bit_shift_right"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh/docs/3.0/sql-reference/sql-functions/bit-functions/bit_shift_right_logical",children:"bit_shift_right_logical"})}),"\n"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>r,ah:()=>l});var s=i(67294);const t=s.createContext({});function l(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||c:l(e),s.createElement(t.Provider,{value:r},n)}}}]);