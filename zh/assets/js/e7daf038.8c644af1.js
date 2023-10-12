"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[40386],{68862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(85893),i=n(11151);const r={displayed_sidebar:"Chinese31"},d="SHOW SQLBLACKLIST",l={id:"sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",title:"SHOW SQLBLACKLIST",description:"\u529f\u80fd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/SHOW_SQLBLACKLIST.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"SHOW RESOURCE GROUP",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_RESOURCE_GROUP"},next:{title:"SHOW STORAGE VOLUMES",permalink:"/doc/zh/docs/sql-reference/sql-statements/Administration/SHOW_STORAGE_VOLUMES"}},c={},a=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-sqlblacklist",children:"SHOW SQLBLACKLIST"}),"\n",(0,s.jsx)(t.h2,{id:"\u529f\u80fd",children:"\u529f\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"\u663e\u793a SQL \u9ed1\u540d\u5355\u4e2d\u7684 SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u6709\u5173 SQL \u9ed1\u540d\u5355\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(t.a,{href:"/doc/zh/docs/administration/Blacklist",children:"\u7ba1\u7406 SQL \u9ed1\u540d\u5355"}),"\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:"SHOW SQLBLACKLIST\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u8fd4\u56de",children:"\u8fd4\u56de"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u8fd4\u56de"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"\u8bf4\u660e"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Index"}),(0,s.jsx)(t.td,{children:"\u5df2\u52a0\u5165\u9ed1\u540d\u5355\u7684 SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5e8f\u53f7\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Forbidden SQL"}),(0,s.jsx)(t.td,{children:"\u5df2\u52a0\u5165\u9ed1\u540d\u5355\u7684 SQL \u6b63\u5219\u8868\u8fbe\u5f0f\u3002"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-Plain",children:"mysql> SHOW SQLBLACKLIST;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n| 3     | select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]                                                                                                                                                                                                                            |\n| 4     | select count\\(distinct .+\\) from .+                                                                                                                                                                                                                                                                    |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const d={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||d:r(e),s.createElement(i.Provider,{value:l},t)}}}]);