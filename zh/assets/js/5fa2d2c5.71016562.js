"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[90087],{86637:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=s(85893),l=s(11151);const r={displayed_sidebar:"Chinese"},i="INSERT",c={id:"sql-reference/sql-statements/data-manipulation/insert",title:"INSERT",description:"description",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1/sql-reference/sql-statements/data-manipulation/insert.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/insert",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/insert",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/data-manipulation/insert.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"ALTER ROUTINE LOAD",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-manipulation/alter-routine-load"},next:{title:"BIGINT",permalink:"/zh/docs/2.1/sql-reference/sql-statements/data-types/BIGINT"}},a={},d=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",strong:"strong"},(0,l.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"insert",children:"INSERT"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO table_name\n[ PARTITION (p1, ...) ]\n[ WITH LABEL label]\n[ (column [, ...]) ]\n[ [ hint [, ...] ] ]\n{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plain",metastring:"text",children:"tablet_name: \u5bfc\u5165\u6570\u636e\u7684\u76ee\u7684\u8868\u3002\u53ef\u4ee5\u662f `db_name.table_name` \u5f62\u5f0f\n\npartitions: \u6307\u5b9a\u5f85\u5bfc\u5165\u7684\u5206\u533a\uff0c\u5fc5\u987b\u662f `table_name` \u4e2d\u5b58\u5728\u7684\u5206\u533a\uff0c\u591a\u4e2a\u5206\u533a\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\n\nlabel: \u4e3a Insert \u4efb\u52a1\u6307\u5b9a\u4e00\u4e2a label\n\ncolumn_name: \u6307\u5b9a\u7684\u76ee\u7684\u5217\uff0c\u5fc5\u987b\u662f `table_name` \u4e2d\u5b58\u5728\u7684\u5217\n\nexpression: \u9700\u8981\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5217\u7684\u5bf9\u5e94\u8868\u8fbe\u5f0f\n\nDEFAULT: \u8ba9\u5bf9\u5e94\u5217\u4f7f\u7528\u9ed8\u8ba4\u503c\n\nquery: \u4e00\u4e2a\u666e\u901a\u67e5\u8be2\uff0c\u67e5\u8be2\u7684\u7ed3\u679c\u4f1a\u5199\u5165\u5230\u76ee\u6807\u4e2d\n\nhint: \u7528\u4e8e\u6307\u793a `INSERT` \u6267\u884c\u884c\u4e3a\u7684\u4e00\u4e9b\u6307\u793a\u7b26\u3002`streaming` \u548c \u9ed8\u8ba4\u7684\u975e `streaming` \u65b9\u5f0f\u5747\u4f1a\u4f7f\u7528\u540c\u6b65\u65b9\u5f0f\u5b8c\u6210 `INSERT` \u8bed\u53e5\u6267\u884c\n\u975e `streaming` \u65b9\u5f0f\u5728\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u8fd4\u56de\u4e00\u4e2a label \u65b9\u4fbf\u7528\u6237\u901a\u8fc7 `SHOW LOAD` \u67e5\u8be2\u5bfc\u5165\u7684\u72b6\u6001\n"})}),"\n",(0,t.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u524d\u6267\u884c ",(0,t.jsx)(n.code,{children:"INSERT"})," \u8bed\u53e5\u65f6\uff0c\u5bf9\u4e8e\u6709\u4e0d\u7b26\u5408\u76ee\u6807\u8868\u683c\u5f0f\u7684\u6570\u636e\uff0c\u9ed8\u8ba4\u7684\u884c\u4e3a\u662f\u8fc7\u6ee4\uff0c\u6bd4\u5982\u5b57\u7b26\u4e32\u8d85\u957f\u7b49\u3002\u4f46\u662f\u5bf9\u4e8e\u6709\u8981\u6c42\u6570\u636e\u4e0d\u80fd\u591f\u88ab\u8fc7\u6ee4\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4f1a\u8bdd\u53d8\u91cf ",(0,t.jsx)(n.code,{children:"enable_insert_strict"})," \u4e3a ",(0,t.jsx)(n.code,{children:"true"})," \u6765\u786e\u4fdd\u5f53\u6709\u6570\u636e\u88ab\u8fc7\u6ee4\u6389\u7684\u65f6\u5019\uff0c",(0,t.jsx)(n.code,{children:"INSERT"})," \u4e0d\u4f1a\u88ab\u6267\u884c\u6210\u529f\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"example"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"test"})," \u8868\u5305\u542b\u4e24\u4e2a\u5217",(0,t.jsx)(n.code,{children:"c1"}),", ",(0,t.jsx)(n.code,{children:"c2"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5411",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u4e2d\u5bfc\u5165\u4e00\u884c\u6570\u636e"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u662f\u4e00\u6837\u7684\u6548\u679c\u3002\u5728\u4e0d\u6307\u5b9a\u76ee\u6807\u5217\u65f6\uff0c\u4f7f\u7528\u8868\u4e2d\u7684\u5217\u987a\u5e8f\u6765\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u76ee\u6807\u5217\u3002\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u8868\u8fbe\u7684\u610f\u601d\u662f\u4e00\u6837\u7684\uff0c\u4f7f\u7528",(0,t.jsx)(n.code,{children:"c2"}),"\u5217\u7684\u9ed8\u8ba4\u503c\uff0c\u6765\u5b8c\u6210\u6570\u636e\u5bfc\u5165\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5411",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u591a\u884c\u6570\u636e"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO test VALUES (1, 2), (3, 2 + 2);\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2);\nINSERT INTO test (c1) VALUES (1), (3);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT), (3, DEFAULT);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\u7b2c\u4e00\u6761\u3001\u7b2c\u4e8c\u6761\u8bed\u53e5\u6548\u679c\u4e00\u6837\uff0c\u5411",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u4e2d\u4e00\u6b21\u6027\u5bfc\u5165\u4e24\u6761\u6570\u636e\n\u7b2c\u4e09\u6761\u3001\u7b2c\u56db\u6761\u8bed\u53e5\u6548\u679c\u5df2\u77e5\uff0c\u4f7f\u7528",(0,t.jsx)(n.code,{children:"c2"}),"\u5217\u7684\u9ed8\u8ba4\u503c\u5411",(0,t.jsx)(n.code,{children:"test"}),"\u8868\u4e2d\u5bfc\u5165\u4e24\u6761\u6570\u636e"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5411 ",(0,t.jsx)(n.code,{children:"test"})," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO test SELECT * FROM test2;\nINSERT INTO test (c1, c2) SELECT * from test2;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5411 ",(0,t.jsx)(n.code,{children:"test"})," \u8868\u4e2d\u5bfc\u5165\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u7ed3\u679c\uff0c\u5e76\u6307\u5b9a partition \u548c label"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f02\u6b65\u7684\u5bfc\u5165\u5176\u5b9e\u662f\uff0c\u4e00\u4e2a\u540c\u6b65\u7684\u5bfc\u5165\u5c01\u88c5\u6210\u4e86\u5f02\u6b65\u3002\u586b\u5199 streaming \u548c\u4e0d\u586b\u5199\u7684",(0,t.jsx)(n.strong,{children:"\u6267\u884c\u6548\u7387\u662f\u4e00\u6837"}),"\u7684\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8eStarRocks\u4e4b\u524d\u7684\u5bfc\u5165\u65b9\u5f0f\u90fd\u662f\u5f02\u6b65\u5bfc\u5165\u65b9\u5f0f\uff0c\u4e3a\u4e86\u517c\u5bb9\u65e7\u6709\u7684\u4f7f\u7528\u4e60\u60ef\uff0c\u4e0d\u52a0 streaming \u7684 ",(0,t.jsx)(n.code,{children:"INSERT"})," \u8bed\u53e5\u4f9d\u65e7\u4f1a\u8fd4\u56de\u4e00\u4e2a label\uff0c\u7528\u6237\u9700\u8981\u901a\u8fc7",(0,t.jsx)(n.code,{children:"SHOW LOAD"}),"\u547d\u4ee4\u67e5\u770b\u6b64",(0,t.jsx)(n.code,{children:"label"}),"\u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(n.p,{children:"INSERT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>c,ah:()=>r});var t=s(67294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:c},n)}}}]);