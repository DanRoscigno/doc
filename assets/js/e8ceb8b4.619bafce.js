"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85489],{65443:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=n(85893),a=n(11151);const i={displayed_sidebar:"English"},l="SHOW LOAD",d={id:"sql-reference/sql-statements/data-manipulation/SHOW_LOAD",title:"SHOW LOAD",description:"description",source:"@site/versioned_docs/version-2.1/sql-reference/sql-statements/data-manipulation/SHOW_LOAD.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_LOAD",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_LOAD.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"SHOW EXPORT",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_EXPORT"},next:{title:"SHOW PARTITIONS",permalink:"/docs/2.1/sql-reference/sql-statements/data-manipulation/SHOW_PARTITIONS"}},r={},o=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}];function c(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"show-load",children:"SHOW LOAD"}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"description"}),"\n",(0,t.jsx)(s.p,{children:"This statement is used to display the execution of the specified import task."}),"\n",(0,t.jsx)(s.p,{children:"Syntax:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'SHOW LOAD\n[FROM db_name]\n[\nWHERE\n[LABEL [ = "your_label" | LIKE "label_matcher"]]\n[STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n'})}),"\n",(0,t.jsx)(s.p,{children:"Note\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-plain",metastring:"text",children:"1. If db_ name is not specified, use the current default db\n2. If LABEL LIKE is used, the label of the import task will be matched. Include import task of label_ matcher.\n3. If LABEL = is used, the specified label will be matched exactly\n4. If STATE is specified, LOAD status is matched\n5. You can use ORDER BY to sort any combination of columns\n6. If LIMIT is specified, limit matching records will be displayed. Otherwise, everything is displayed\n7. If OFFSET is specified, query results will be displayed starting from offset. By default, the offset is 0.\n8. If you are using broker load, the connection in the URL column can be viewed using the following command:\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW LOAD WARNINGS ON 'url'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"example"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Show all import tasks of default db"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW LOAD;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'Show the import task of the specified db. The label contains the string "2014_01_02", showing the oldest 10'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'Show the import task of the specified db, specify the label as "load_example_db_20140102" and sort it in descending order by LoadStartTime'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'Display the import task of the specified db, specify label as "load_example_db_20140102", state as "loading", and sort by LoadStartTime in descending order'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Display the import tasks of the specified db, sort them in descending order by LoadStartTime, and display 10 query results starting from offset 5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Small batch import is a command to view the import status."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl --location-trusted -u {user}:{passwd} \\\n    http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"keyword",children:"keyword"}),"\n",(0,t.jsx)(s.p,{children:"SHOW,LOAD"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>d,ah:()=>i});var t=n(67294);const a=t.createContext({});function i(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function d({components:e,children:s,disableParentContext:n}){let d;return d=n?"function"==typeof e?e({}):e||l:i(e),t.createElement(a.Provider,{value:d},s)}}}]);