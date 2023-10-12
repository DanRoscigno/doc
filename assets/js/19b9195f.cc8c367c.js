"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[66912],{27882:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=s(85893),t=s(11151);const l={displayed_sidebar:"documentation"},c="Blacklist Management",a={id:"administration/Blacklist",title:"Blacklist Management",description:"In some cases, administrators need to disable certain patterns of SQL to avoid SQL from triggering cluster crashes or unexpected high concurrent queries.",source:"@site/versioned_docs/version-2.5/administration/Blacklist.md",sourceDirName:"administration",slug:"/administration/Blacklist",permalink:"/doc/docs/2.5/administration/Blacklist",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-2.5/administration/Blacklist.md",tags:[],version:"2.5",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"Replica management",permalink:"/doc/docs/2.5/administration/Replica"},next:{title:"Data Recovery",permalink:"/doc/docs/2.5/administration/Data_recovery"}},r={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Add blacklist",id:"add-blacklist",level:2},{value:"View blacklist",id:"view-blacklist",level:2},{value:"Delete blacklist",id:"delete-blacklist",level:2}];function o(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"blacklist-management",children:"Blacklist Management"}),"\n",(0,i.jsx)(n.p,{children:"In some cases, administrators need to disable certain patterns of SQL to avoid SQL from triggering cluster crashes or unexpected high concurrent queries."}),"\n",(0,i.jsx)(n.p,{children:"StarRocks allows users to add, view, and delete SQL blacklists."}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["EnableSQL blacklisting via ",(0,i.jsx)(n.code,{children:"enable_sql_blacklist"}),". The default is False (off)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config ("enable_sql_blacklist" = "true")\n'})}),"\n",(0,i.jsx)(n.p,{children:"The admin user who has ADMIN_PRIV privileges can manage blacklists by executing the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ADD SQLBLACKLIST #sql# \nDELETE SQLBLACKLIST #sql# \nSHOW SQLBLACKLISTS  \n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When ",(0,i.jsx)(n.code,{children:"enable_sql_blacklist"})," is true, every SQL query needs to be filtered by sqlblacklist. If it matches, the user will be informed that theSQL is in the blacklist. Otherwise, the SQL will be executed normally. The message may be as follows when the SQL is blacklisted:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ERROR 1064 (HY000): Access denied; sql 'select count (*) from test_all_type_select_2556' is in blacklist"})}),"\n",(0,i.jsx)(n.h2,{id:"add-blacklist",children:"Add blacklist"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ADD SQLBLACKLIST #sql#\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"#sql#"})," is a regular expression for a certain type of SQL. Since SQL itself contains the common characters ",(0,i.jsx)(n.code,{children:"("}),", ",(0,i.jsx)(n.code,{children:")"}),", ",(0,i.jsx)(n.code,{children:"*"}),", ",(0,i.jsx)(n.code,{children:"."})," that may be mixed up with the semantics of regular expressions, so we need to distinguish those by  using escape characters. Given that ",(0,i.jsx)(n.code,{children:"("})," and ",(0,i.jsx)(n.code,{children:")"})," are used too often in SQL, there is no need to use escape characters. Other special characters need to use the escape character ",(0,i.jsx)(n.code,{children:"\\"})," as a prefix. For example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Prohibit ",(0,i.jsx)(n.code,{children:"count(\\*)"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select count(\\\\*) from .+"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Prohibit ",(0,i.jsx)(n.code,{children:"count(distinct)"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select count(distinct .+) from .+"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Prohibit order by limit ",(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"}),", ",(0,i.jsx)(n.code,{children:"1 <= x <=7"}),", ",(0,i.jsx)(n.code,{children:"5 <=y <=7"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prohibit complex SQL:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ADD SQLBLACKLIST "select id_int \\\\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select (id_int \\\\* 9 \\\\- 8) \\\\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"view-blacklist",children:"View blacklist"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW SQLBLACKLIST\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Result format: ",(0,i.jsx)(n.code,{children:"Index | Forbidden SQL"})]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> show sqlblacklist;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n| 3     | select id_int from test_all_type_select1 order by id_int limit [1-7], [5-7]                                                                                                                                                                                                                            |\n| 4     | select count\\(distinct .+\\) from .+                                                                                                                                                                                                                                                                    |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The SQL shown in ",(0,i.jsx)(n.code,{children:"Forbidden SQL"})," is escaped for all SQL semantic characters."]}),"\n",(0,i.jsx)(n.h2,{id:"delete-blacklist",children:"Delete blacklist"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DELETE SQLBLACKLIST #indexlist#\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example, delete the sqlblacklist 3 and 4 in the above blacklist:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"delete sqlblacklist  3, 4;   -- #indexlist# is a list of IDs separated by comma (,).\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, the remaining sqlblacklist is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> show sqlblacklist;\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Index | Forbidden SQL                                                                                                                                                                                                                                                                                          |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| 1     | select count\\(\\*\\) from .+                                                                                                                                                                                                                                                                             |\n| 2     | select id_int \\* 4, id_tinyint, id_varchar from test_all_type_nullable except select id_int, id_tinyint, id_varchar from test_basic except select \\(id_int \\* 9 \\- 8\\) \\/ 2, id_tinyint, id_varchar from test_all_type_nullable2 except select id_int, id_tinyint, id_varchar from test_basic_nullable |\n+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>l});var i=s(67294);const t=i.createContext({});function l(e){const n=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:l(e),i.createElement(t.Provider,{value:a},n)}}}]);