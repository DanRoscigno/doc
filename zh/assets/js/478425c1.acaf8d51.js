"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[38003],{60591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>L,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151);const r={displayed_sidebar:"Chinese"},l="DELETE SQLBLACKLIST",a={id:"sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",title:"DELETE SQLBLACKLIST",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",permalink:"/zh/docs/2.5/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/Administration/DELETE_SQLBLACKLIST.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"CREATE RESOURCE GROUP",permalink:"/zh/docs/2.5/sql-reference/sql-statements/Administration/CREATE_RESOURCE_GROUP"},next:{title:"DROP FILE",permalink:"/zh/docs/2.5/sql-reference/sql-statements/Administration/DROP_FILE"}},c={},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"delete-sqlblacklist",children:"DELETE SQLBLACKLIST"}),"\n",(0,s.jsx)(n.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece SQL \u9ed1\u540d\u5355\u4e2d\u5220\u9664\u4e00\u4e2a SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173 SQL \u9ed1\u540d\u5355\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.5/administration/Blacklist",children:"\u7ba1\u7406 SQL \u9ed1\u540d\u5355"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"DELETE SQLBLACKLIST <sql_index_number>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sql_index_number"}),"\uff1aSQL \u6b63\u5219\u8868\u8fbe\u5f0f\u5728\u9ed1\u540d\u5355\u4e2d\u7684\u5e8f\u53f7\u3002\u7528\u9017\u53f7\uff08,\uff09\u548c\u4e00\u4e2a\u7a7a\u683c\u5206\u9694\u591a\u4e2a\u5e8f\u53f7\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/zh/docs/2.5/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",children:"SHOW SQLBLACKLIST"})," \u67e5\u8be2\u76f8\u5e94\u7d22\u5f15\u53f7\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"mysql> DELETE SQLBLACKLIST 3, 4;\n\nmysql> SHOW SQLBLACKLIST;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const L=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var s=t(67294);const i=s.createContext({});function r(e){const n=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||l:r(e),s.createElement(i.Provider,{value:a},n)}}}]);