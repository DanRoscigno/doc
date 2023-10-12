"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[31555],{89176:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var s=i(85893),l=i(11151);const t={displayed_sidebar:"Chinese31"},c="\u7ba1\u7406\u9ed1\u540d\u5355",r={id:"administration/Blacklist",title:"\u7ba1\u7406\u9ed1\u540d\u5355",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406 SQL \u9ed1\u540d\u5355 (SQL Blacklist)\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/administration/Blacklist.md",sourceDirName:"administration",slug:"/administration/Blacklist",permalink:"/doc/zh/docs/2.5/administration/Blacklist",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/Blacklist.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u7ba1\u7406\u526f\u672c",permalink:"/doc/zh/docs/2.5/administration/Replica"},next:{title:"\u6062\u590d\u6570\u636e",permalink:"/doc/zh/docs/2.5/administration/Data_recovery"}},d={},a=[{value:"\u5f00\u542f\u9ed1\u540d\u5355\u529f\u80fd",id:"\u5f00\u542f\u9ed1\u540d\u5355\u529f\u80fd",level:2},{value:"\u6dfb\u52a0\u9ed1\u540d\u5355",id:"\u6dfb\u52a0\u9ed1\u540d\u5355",level:2},{value:"\u5c55\u793a\u9ed1\u540d\u5355\u5217\u8868",id:"\u5c55\u793a\u9ed1\u540d\u5355\u5217\u8868",level:2},{value:"\u5220\u9664\u9ed1\u540d\u5355",id:"\u5220\u9664\u9ed1\u540d\u5355",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u7ba1\u7406\u9ed1\u540d\u5355",children:"\u7ba1\u7406\u9ed1\u540d\u5355"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u7ba1\u7406 SQL \u9ed1\u540d\u5355 (SQL Blacklist)\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728 StarRocks \u4e2d\u7ef4\u62a4\u4e00\u4e2a SQL \u9ed1\u540d\u5355\uff0c\u4ee5\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u7981\u6b62\u7279\u5b9a\u7c7b\u578b\u7684 SQL\uff0c\u907f\u514d\u6b64\u7c7b SQL \u5bfc\u81f4\u96c6\u7fa4\u5b95\u673a\u6216\u8005\u5176\u4ed6\u9884\u671f\u4e4b\u5916\u7684\u884c\u4e3a\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u60a8\u9700\u8981 ADMIN_PRIV \u6743\u9650\u4ee5\u4f7f\u7528\u9ed1\u540d\u5355\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5f00\u542f\u9ed1\u540d\u5355\u529f\u80fd",children:"\u5f00\u542f\u9ed1\u540d\u5355\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f00\u542f\u9ed1\u540d\u5355\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADMIN SET FRONTEND CONFIG ("enable_sql_blacklist" = "true");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6dfb\u52a0\u9ed1\u540d\u5355",children:"\u6dfb\u52a0\u9ed1\u540d\u5355"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0 SQL \u9ed1\u540d\u5355\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "sql";\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'"sql"'}),"\uff1a\u67d0\u7c7b SQL \u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u7531\u4e8e SQL \u5e38\u7528\u5b57\u7b26\u91cc\u9762\u5c31\u5305\u542b ",(0,s.jsx)(n.code,{children:"("}),"\u3001",(0,s.jsx)(n.code,{children:")"}),"\u3001",(0,s.jsx)(n.code,{children:"*"}),"\u3001",(0,s.jsx)(n.code,{children:"."})," \u7b49\u5b57\u7b26\uff0c\u8fd9\u4e9b\u5b57\u7b26\u4f1a\u548c\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u8bed\u4e49\u6df7\u6dc6\uff0c\u56e0\u6b64\u5728\u8bbe\u7f6e\u9ed1\u540d\u5355\u7684\u65f6\u5019\u9700\u8981\u901a\u8fc7\u8f6c\u4e49\u7b26\u4f5c\u51fa\u533a\u5206\uff0c\u9274\u4e8e ",(0,s.jsx)(n.code,{children:"("})," \u548c ",(0,s.jsx)(n.code,{children:")"}),' \u5728SQL\u4e2d\u4f7f\u7528\u9891\u7387\u8fc7\u9ad8\uff0c\u6211\u4eec\u5185\u90e8\u8fdb\u884c\u4e86\u5904\u7406\uff0c\u8bbe\u7f6e\u7684\u65f6\u5019\u4e0d\u9700\u8981\u8f6c\u4e49\uff0c\u5176\u4ed6\u7279\u6b8a\u5b57\u7b26\u9700\u8981\u4f7f\u7528\u8f6c\u4e49\u5b57\u7b26""\u4f5c\u4e3a\u524d\u7f00\u3002']}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7981\u6b62 ",(0,s.jsx)(n.code,{children:"count(\\*)"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select count\\\\(\\\\*\\\\) from .+";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7981\u6b62 ",(0,s.jsx)(n.code,{children:"count(distinct )"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select count\\\\(distinct .+\\\\) from .+";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7981\u6b62 ",(0,s.jsx)(n.code,{children:"order by limit x, y\uff0c1 <= x <=7, 5 <=y <=7"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7981\u6b62\u590d\u6742 SQL\uff08\u4e3b\u8981\u6f14\u793a ",(0,s.jsx)(n.code,{children:"*"})," \u548c ",(0,s.jsx)(n.code,{children:"-"})," \u7684\u8f6c\u4e49\u5199\u6cd5\u3002\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select id_int \\\\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select (id_int \\\\* 9 \\\\- 8) \\\\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable";\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5c55\u793a\u9ed1\u540d\u5355\u5217\u8868",children:"\u5c55\u793a\u9ed1\u540d\u5355\u5217\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW SQLBLACKLIST;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> show sqlblacklist;\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\r\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\r\n| 3     | select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]                                                                                                                                                                                                                            |\r\n| 4     | select count\\(distinct .+\\) from .+                                                                                                                                                                                                                                                                    |\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u7ed3\u679c\u5305\u62ec ",(0,s.jsx)(n.code,{children:"Index"})," \u548c ",(0,s.jsx)(n.code,{children:"Forbidden SQL"}),"\u3002\u5176\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"Index"})," \u5b57\u6bb5\u4e3a\u88ab\u7981\u6b62\u7684 SQL \u9ed1\u540d\u5355\u5e8f\u53f7\uff0c",(0,s.jsx)(n.code,{children:"Forbidden SQL"})," \u5b57\u6bb5\u5c55\u793a\u4e86\u88ab\u7981\u6b62\u7684 SQL\uff0c\u5bf9\u4e8e\u6240\u6709 SQL \u8bed\u4e49\u7684\u5b57\u7b26\u505a\u4e86\u8f6c\u4e49\u5904\u7406\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664\u9ed1\u540d\u5355",children:"\u5220\u9664\u9ed1\u540d\u5355"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664 SQL \u9ed1\u540d\u5355\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DELETE SQLBLACKLIST index_no;\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"index_no"}),"\uff1a\u88ab\u7981\u6b62\u7684 SQL \u9ed1\u540d\u5355\u5e8f\u53f7\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"SHOW SQLBLACKLIST;"})," \u547d\u4ee4\u67e5\u8be2\u3002\u591a\u4e2a ",(0,s.jsx)(n.code,{children:"index_no"})," \u4ee5 ",(0,s.jsx)(n.code,{children:","})," \u5206\u9694\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> delete sqlblacklist  3, 4;\r\n\r\nshow sqlblacklist;\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\r\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\r\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\r\n\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>r,ah:()=>t});var s=i(67294);const l=s.createContext({});function t(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||c:t(e),s.createElement(l.Provider,{value:r},n)}}}]);