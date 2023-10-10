"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[568],{36951:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(85893),r=s(11151);const i={},o="SHOW EXPORT",d={id:"sql-reference/sql-statements/data-manipulation/SHOW EXPORT",title:"SHOW EXPORT",description:"Description",source:"@site/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW EXPORT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SHOW EXPORT",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW EXPORT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.0/sql-reference/sql-statements/data-manipulation/SHOW EXPORT.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"SHOW DYNAMIC PARTITION TABLES",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW DYNAMIC PARTITION TABLES"},next:{title:"SHOW LOAD",permalink:"/doc/docs/3.0/sql-reference/sql-statements/data-manipulation/SHOW LOAD"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return result",id:"return-result",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"show-export",children:"SHOW EXPORT"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Queries the execution information of export jobs that meet the specified conditions."}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT\n[ FROM <db_name> ]\n[\nWHERE\n    [ QUERYID = <query_id> ]\n    [ STATE = { "PENDING" | "EXPORTING" | "FINISHED" | "CANCELLED" } ]\n]\n[ ORDER BY <field_name> [ ASC | DESC ] [, ... ] ]\n[ LIMIT <count> ]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"This statement can contain the following optional clauses:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FROM"}),"\n",(0,t.jsx)(n.p,{children:"Specifies the name of the database that you want to query. If you do not specify a FROM clause, StarRocks queries the current database."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"WHERE"}),"\n",(0,t.jsx)(n.p,{children:"Specifies the conditions based on which you want to filter export jobs. Only the export jobs that meet the specified conditions are returned in the result set of the query."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"QUERYID"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"The ID of the export job that you want to query. This parameter is used to query the execution information of a single export job."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"STATE"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsxs)(n.td,{children:["The status of the export jobs that you want to query. Valid values:",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"PENDING"}),": specifies to query export jobs that are waiting to be scheduled."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"EXPORING"}),": specifies to query export jobs that are being executed."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"FINISHED"}),": specifies to query export jobs that have been successfully completed."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(n.code,{children:"CANCELLED"}),": specifies to query export jobs that have failed."]})]})]})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ORDER BY"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the name of the field based on which you want to sort the export job records in the result set of the query. You can specify multiple fields, which must be separated with commas (",(0,t.jsx)(n.code,{children:","}),"). Additionally, you can use the ",(0,t.jsx)(n.code,{children:"ASC"})," or ",(0,t.jsx)(n.code,{children:"DESC"})," keyword to specify that the export job records are sorted in ascending or descending order based on the specified field."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"LIMIT"}),"\n",(0,t.jsx)(n.p,{children:"Restricts the result set of the query to a specified maximum number of rows. Valid values: positive integer. If you do not specify a LIMIT clause, StarRocks returns all export jobs that meet the specified conditions."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-result",children:"Return result"}),"\n",(0,t.jsxs)(n.p,{children:["For example, query the execution information of an export job whose ID is ",(0,t.jsx)(n.code,{children:"edee47f0-abe1-11ec-b9d1-00163e1e238f"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT\nWHERE QUERYID = "edee47f0-abe1-11ec-b9d1-00163e1e238f";\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following execution information is returned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'     JobId: 14008\n   QueryId: edee47f0-abe1-11ec-b9d1-00163e1e238f\n     State: FINISHED\n  Progress: 100%\n  TaskInfo: {"partitions":["*"],"column separator":"\\t","columns":["*"],"tablet num":10,"broker":"","coord num":1,"db":"db0","tbl":"tbl_simple","row delimiter":"\\n","mem limit":2147483648}\n      Path: hdfs://127.0.0.1:9000/users/230320/\nCreateTime: 2023-03-20 11:16:14\n StartTime: 2023-03-20 11:16:17\nFinishTime: 2023-03-20 11:16:26\n   Timeout: 7200\n'})}),"\n",(0,t.jsx)(n.p,{children:"The parameters in the return result are described as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JobId"}),": the ID of the export job."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"QueryId"}),": the ID of the query."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"State"}),": the status of the export job."]}),"\n",(0,t.jsx)(n.p,{children:"Valid values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PENDING"}),": The export job is waiting to be scheduled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EXPORTING"}),": The export job is being executed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FINISHED"}),": The export job has been successfully completed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CANCELLED"}),": The export job has failed."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Progress"}),": the progress of the export job. The progress is measured in the unit of query plans. Suppose that the export job is divided into 10 query plans and three of them have finished. In this case, the progress of the export job is 30%. For more information, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/unloading/Export#workflow",children:'"Export data using EXPORT > Workflow"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"TaskInfo"}),": the information of the export job."]}),"\n",(0,t.jsx)(n.p,{children:"The information is a JSON object that consists of the following keys:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"partitions"}),": the partitions on which the exported data resides. If a wildcard (",(0,t.jsx)(n.code,{children:"*"}),") is returned as a value for this key, the export job is run to export data from all partitions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"column separator"}),": the column separator used in the exported data file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"columns"}),": the names of the columns whose data is exported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tablet num"}),": the total number of tablets that are exported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"broker"}),": In v2.4 and earlier, this field is used to return the name of the broker that is used by the export job. From v2.5 onwards, this field returns an empty string. For more information, see ",(0,t.jsx)(n.a,{href:"/doc/docs/3.0/unloading/Export#background-information",children:'"Export data using EXPORT > Background information"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"coord num"}),": the number of query plans into which the export job is divided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"db"}),": the name of the database to which the exported data belongs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tbl"}),": the name of the table to which the exported data belongs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"row delimiter"}),": the row separator used in the exported data file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mem limit"}),": the maximum amount of memory allowed for the export job. Unit: bytes."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Path"}),": the path to which the exported data is stored on the remote storage."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CreateTime"}),": the time when the export job was created."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"StartTime"}),": the time when the export job started to be scheduled."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FinishTime"}),": the time when the export job was finished."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Timeout"}),": the amount of time that the export job took than expected. Unit: seconds. The time is counted from ",(0,t.jsx)(n.code,{children:"CreateTime"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ErrorMsg"}),": the reason why the export job throws an error. This field is returned only when the export job encounters an error."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Query all export jobs in the current database:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW EXPORT;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query the export job whose ID is ",(0,t.jsx)(n.code,{children:"921d8f80-7c9d-11eb-9342-acde48001122"})," in the database ",(0,t.jsx)(n.code,{children:"example_db"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT FROM example_db\nWHERE queryid = "921d8f80-7c9d-11eb-9342-acde48001122";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query export jobs that are in the ",(0,t.jsx)(n.code,{children:"EXPORTING"})," state in the database ",(0,t.jsx)(n.code,{children:"example_db"})," and specify to sort the export job records in the result set by ",(0,t.jsx)(n.code,{children:"StartTime"})," in ascending order:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'SHOW EXPORT FROM example_db\nWHERE STATE = "exporting"\nORDER BY StartTime ASC;\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Query all export jobs in the database ",(0,t.jsx)(n.code,{children:"example_db"})," and specify to sort the export job records in the result set by ",(0,t.jsx)(n.code,{children:"StartTime"})," in descending order:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SHOW EXPORT FROM example_db\nORDER BY StartTime DESC;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>d,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function d({components:e,children:n,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||o:i(e),t.createElement(r.Provider,{value:d},n)}}}]);