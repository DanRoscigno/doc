"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[28813],{62683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(85893),a=n(11151);const i={displayed_sidebar:"documentation"},r="SHOW DELETE",l={id:"sql-reference/sql-statements/data-manipulation/SHOW_DELETE",title:"SHOW DELETE",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW_DELETE.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DELETE",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SHOW_DELETE.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"SHOW DATABASES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DATABASES"},next:{title:"SHOW DYNAMIC PARTITION TABLES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW_DYNAMIC_PARTITION_TABLES"}},d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"show-delete",children:"SHOW DELETE"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["This statement is used to show historical DELETE tasks that are successfully performed on Duplicate Key tables in the current database. For more information about data deletion, see ",(0,s.jsx)(t.a,{href:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/DELETE",children:"DELETE"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SHOW DELETE [FROM <db_name>]\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"db_name"}),": the database name, optional. If this parameter is not specified, the current database is used by default."]}),"\n",(0,s.jsx)(t.p,{children:"Return fields:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"TableName: the table from which data is deleted."}),"\n",(0,s.jsxs)(t.li,{children:["PartitionName: the partition from which data is deleted. If the table is a non-partitioned table, ",(0,s.jsx)(t.code,{children:"*"})," is displayed."]}),"\n",(0,s.jsx)(t.li,{children:"CreateTime: the time when the DELETE task was created."}),"\n",(0,s.jsx)(t.li,{children:"DeleteCondition: the specified DELETE condition."}),"\n",(0,s.jsx)(t.li,{children:"State: the status of the DELETE task."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Show all historical DELETE tasks of ",(0,s.jsx)(t.code,{children:"database"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'SHOW DELETE FROM database;\n\n+------------+---------------+---------------------+-----------------+----------+\n| TableName  | PartitionName | CreateTime          | DeleteCondition | State    |\n+------------+---------------+---------------------+-----------------+----------+\n| mail_merge | *             | 2023-03-14 10:39:03 | name EQ "Peter" | FINISHED |\n+------------+---------------+---------------------+-----------------+----------+\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>i});var s=n(67294);const a=s.createContext({});function i(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:i(e),s.createElement(a.Provider,{value:l},t)}}}]);