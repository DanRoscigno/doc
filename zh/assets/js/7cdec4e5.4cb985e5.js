"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[34184],{47222:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=s(85893),r=s(11151);const a={displayed_sidebar:"Chinese31"},c="\u6062\u590d\u6570\u636e",l={id:"administration/Data_recovery",title:"\u6062\u590d\u6570\u636e",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u6062\u590d StarRocks \u4e2d\u88ab\u5220\u9664\u7684\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Data_recovery.md",sourceDirName:"administration",slug:"/administration/Data_recovery",permalink:"/doc/zh/docs/administration/Data_recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Data_recovery.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u7ba1\u7406\u9ed1\u540d\u5355",permalink:"/doc/zh/docs/administration/Blacklist"},next:{title:"\u6743\u9650\u7cfb\u7edf\u603b\u89c8",permalink:"/doc/zh/docs/administration/privilege_overview"}},t={},d=[{value:"\u6062\u590d\u6570\u636e\u5e93",id:"\u6062\u590d\u6570\u636e\u5e93",level:2},{value:"\u6062\u590d\u8868",id:"\u6062\u590d\u8868",level:2},{value:"\u6062\u590d\u5206\u533a",id:"\u6062\u590d\u5206\u533a",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",pre:"pre"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6062\u590d\u6570\u636e",children:"\u6062\u590d\u6570\u636e"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u6062\u590d StarRocks \u4e2d\u88ab\u5220\u9664\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"StarRocks \u652f\u6301\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u5e93\u3001\u8868\u3001\u5206\u533a\u8fdb\u884c\u6570\u636e\u6062\u590d\uff0c\u5728\u5220\u9664\u8868\u6216\u6570\u636e\u5e93\u4e4b\u540e\uff0cStarRocks \u4e0d\u4f1a\u7acb\u523b\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u5220\u9664\uff0c\u800c\u662f\u5c06\u5176\u4fdd\u7559\u5728 Trash \u4e00\u6bb5\u65f6\u95f4\uff08\u9ed8\u8ba4\u4e3a 1 \u5929\uff09\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u5bf9\u8bef\u5220\u9664\u7684\u6570\u636e\u8fdb\u884c\u6062\u590d\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6062\u590d\u64cd\u4f5c\u4ec5\u80fd\u6062\u590d\u4e00\u6bb5\u65f6\u95f4\u5185\u5220\u9664\u7684\u5143\u4fe1\u606f\u3002\u9ed8\u8ba4\u4e3a 1 \u5929\u3002\u60a8\u53ef\u901a\u8fc7\u914d\u7f6e ",(0,i.jsx)(n.strong,{children:"fe.conf"})," \u6587\u4ef6\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"catalog_trash_expire_second"})," \u53c2\u6570\u4fee\u6539\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u5143\u4fe1\u606f\u88ab\u5220\u9664\u540e\uff0c\u7cfb\u7edf\u65b0\u5efa\u4e86\u540c\u540d\u540c\u7c7b\u578b\u7684\u5143\u4fe1\u606f\uff0c\u5219\u4e4b\u524d\u5220\u9664\u7684\u5143\u4fe1\u606f\u65e0\u6cd5\u88ab\u6062\u590d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6062\u590d\u6570\u636e\u5e93",children:"\u6062\u590d\u6570\u636e\u5e93"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6062\u590d\u6570\u636e\u5e93\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE db_name;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u6062\u590d\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"example_db"})," \u7684\u6570\u636e\u5e93\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6062\u590d\u8868",children:"\u6062\u590d\u8868"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6062\u590d\u8868\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE [db_name.]table_name;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u6062\u590d ",(0,i.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u4e2d\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"example_tbl"})," \u7684\u8868\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6062\u590d\u5206\u533a",children:"\u6062\u590d\u5206\u533a"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6062\u590d\u5206\u533a\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION partition_name FROM [db_name.]table_name;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u6062\u590d ",(0,i.jsx)(n.code,{children:"example_db"})," \u6570\u636e\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"example_tbl"})," \u8868\u4e2d\u540d\u4e3a ",(0,i.jsx)(n.code,{children:"p1"})," \u7684\u5206\u533a\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_db.example_tbl;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var i=s(67294);const r=i.createContext({});function a(e){const n=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:a(e),i.createElement(r.Provider,{value:l},n)}}}]);