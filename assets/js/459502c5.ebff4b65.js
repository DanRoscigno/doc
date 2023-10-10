"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[73488],{66512:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(85893),r=t(11151);const i={},a="ADD SQLBLACKLIST",c={id:"sql-reference/sql-statements/Administration/ADD SQLBLACKLIST",title:"ADD SQLBLACKLIST",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADD SQLBLACKLIST.md",sourceDirName:"sql-reference/sql-statements/Administration",slug:"/sql-reference/sql-statements/Administration/ADD SQLBLACKLIST",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADD SQLBLACKLIST",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-statements/Administration/ADD SQLBLACKLIST.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW USERS",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/account-management/SHOW USERS"},next:{title:"ADMIN CANCEL REPAIR",permalink:"/docusaurusv3/docs/sql-reference/sql-statements/Administration/ADMIN CANCEL REPAIR"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",blockquote:"blockquote",strong:"strong",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"add-sqlblacklist",children:"ADD SQLBLACKLIST"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Adds a regular expression to the SQL blacklist to forbid certain SQL patterns. When the SQL Blacklist feature is enabled, StarRocks compares all SQL statements to be executed against the SQL regular expressions in the blacklist. StarRocks does not execute SQLs that match any regular expression in the blacklist and returns an error. This prevents certain SQLs from triggering cluster crashes or unexpected behavior."}),"\n",(0,n.jsxs)(s.p,{children:["For more about SQL Blacklist, see ",(0,n.jsx)(s.a,{href:"/docusaurusv3/docs/administration/Blacklist",children:"Manage SQL Blacklist"}),"."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,n.jsx)(s.p,{children:"Only users with the ADMIN privilege can add SQL regular expressions to the SQL blacklist."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-SQL",children:'ADD SQLBLACKLIST "<sql_reg_expr>"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"parameter",children:"Parameter"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"sql_reg_expr"}),": the regular expression that is used to specify a certain SQL pattern. To distinguish the special characters in the SQL statement and those in the regular expression, you need to use the escape character ",(0,n.jsx)(s.code,{children:"\\"})," as a prefix for the special characters in the SQL statement, such as ",(0,n.jsx)(s.code,{children:"("}),", ",(0,n.jsx)(s.code,{children:")"}),", and ",(0,n.jsx)(s.code,{children:"+"}),". Whereas ",(0,n.jsx)(s.code,{children:"("})," and ",(0,n.jsx)(s.code,{children:")"})," have been often used in SQL statements, StarRocks can identify ",(0,n.jsx)(s.code,{children:"("})," and ",(0,n.jsx)(s.code,{children:")"})," in SQL statements directly. You do not need to use the escape character for ",(0,n.jsx)(s.code,{children:"("})," and ",(0,n.jsx)(s.code,{children:")"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Example 1: Add ",(0,n.jsx)(s.code,{children:"count(\\*)"})," to the SQL blacklist."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select count(\\\\*) from .+";\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 2: Add ",(0,n.jsx)(s.code,{children:"count(distinct )"})," to the SQL blacklist."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select count(distinct .+) from .+";\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 3: Add ",(0,n.jsx)(s.code,{children:"order by limit x, y, 1 <= x <=7, 5 <=y <=7"})," to the SQL blacklist."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST "select id_int from test_all_type_select1 \n    order by id_int \n    limit [1-7], [5-7]";\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Example 4: Add a complex SQL regular expression to the SQL blacklist. This example is to demonstrate how to use escape characters for ",(0,n.jsx)(s.code,{children:"*"})," and ",(0,n.jsx)(s.code,{children:"-"})," in SQL statements."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",children:'mysql> ADD SQLBLACKLIST \n    "select id_int \\\\* 4, id_tinyint, id_varchar \n        from test_all_type_nullable \n    except select id_int, id_tinyint, id_varchar \n        from test_basic \n    except select (id_int \\\\* 9 \\\\- 8) \\\\/ 2, id_tinyint, id_varchar \n        from test_all_type_nullable2 \n    except select id_int, id_tinyint, id_varchar \n        from test_basic_nullable";\n'})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(o,e)})):o(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>c,ah:()=>i});var n=t(67294);const r=n.createContext({});function i(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function c({components:e,children:s,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:i(e),n.createElement(r.Provider,{value:c},s)}}}]);