"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32180],{35596:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=s(85893),i=s(11151);const a={displayed_sidebar:"English"},r="SQL statement template",l={id:"sql-reference/sql-statements/SQL_command_template",title:"SQL statement template",description:"This template uses ADMIN SET REPLICA STATUS as an example to illustrate the requirements for writing SQL command topics.",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/SQL_command_template.md",sourceDirName:"sql-reference/sql-statements",slug:"/sql-reference/sql-statements/SQL_command_template",permalink:"/zh/docs/sql-reference/sql-statements/SQL_command_template",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/sql-reference/sql-statements/SQL_command_template.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English"},c={},o=[{value:"ADMIN SET REPLICA STATUS",id:"admin-set-replica-status",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Usage notes (optional)",id:"usage-notes-optional",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",em:"em",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3",pre:"pre"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sql-statement-template",children:"SQL statement template"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"This template uses"})," ",(0,t.jsx)(n.code,{children:"*ADMIN SET REPLICA STATUS*"})," ",(0,t.jsx)(n.em,{children:"as an example to illustrate the requirements for writing SQL command topics."})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'Capitalize commands and keywords in the running text. For example, "The SELECT statement is used to query records that meet specific conditions.", "You can use GROUP BY to group data in this column.", "The LIMIT keyword specifies the maximum number of records that can be returned".'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"If you need to refer to a parameter or parameter value in the running text, enclose it in two backticks (``), for example,"})," ",(0,t.jsx)(n.code,{children:"*cachesize*"}),(0,t.jsx)(n.em,{children:"."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"admin-set-replica-status",children:"ADMIN SET REPLICA STATUS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"The topic title. Use the English command"})," ",(0,t.jsx)(n.em,{children:"name as the topic title. Capitalize all the letters in the command"})," ",(0,t.jsx)(n.em,{children:"name. Make sure you use the correct spelling."})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the replica status of a tablet. This command is used to manually set the replica status of tablet to ",(0,t.jsx)(n.code,{children:"bad"})," or ",(0,t.jsx)(n.code,{children:"ok"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"What does this command do. You can add related descriptions or usage notes."})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET REPLICA STATUS\n\nPROPERTIES ("key" = "value", ...);\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"The syntax of this command. Enclose syntax in a code block. Make sure that the syntax complies with coding specifications."})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Use proper line wrap and indentation."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Do not use Chinese characters in the code, such as Chinese semicolons or comas."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Capitalize the keywords in an SQL command. Example:"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"SELECT ta.x, count(ta.y) AS y, sum(tb.z) AS z\n\nFROM (\n\n    SELECT a AS x, b AS y\n\n    FROM t) ta\n\n    JOIN tb\n\n        ON ta.x = tb.x\n\nWHERE tb.a > 10\n\nGROUP BY ta.x\n\nORDER BY ta.x, z\n\nLIMIT 10\n"})}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"PROPERTIES"}),": Each property must be a key-value pair. Supported properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tablet_id"}),": the ID of the tablet. This parameter is required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"backend_id"}),": the BE ID of the tablet. This parameter is required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"status"}),": the status of replicas. This parameter is required. Valid values: ",(0,t.jsx)(n.code,{children:"bad"})," and ",(0,t.jsx)(n.code,{children:"ok"}),". The value ",(0,t.jsx)(n.code,{children:"ok"})," indicates that the system automatically repairs the replicas of a tablet. If the replica status is set to ",(0,t.jsx)(n.code,{children:"bad"}),", the replicas may be immediately deleted. Exercise caution when you perform this operation. If the tablet you specified does not exist or the replica status is ",(0,t.jsx)(n.code,{children:"bad"}),", the system ignores these replicas."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Description of parameters in a command."})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"A preferred parameter description must include the parameter meaning, value format, value range, whether this parameter is required, and other remarks if needed."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"You can use an unordered list to organize parameter description. If the description is complex, you can organize information as a table. The table can consist of the following columns: parameter name, value type (optional), example value (optional), parameter description."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"usage-notes-optional",children:"Usage notes (optional)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["You can ",(0,t.jsx)(n.em,{children:"add some notes or precautions for using this command."})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Example 1: Set the replica status of tablet 10003 on BE 10001 to ",(0,t.jsx)(n.code,{children:"bad"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Example 2: Set the replica status of tablet 10003 on BE 10001 to ",(0,t.jsx)(n.code,{children:"ok"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Provide examples for using this command and explain the purpose of each example."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You can provide multiple examples."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"If you need to describe more than one scenario in an example, add a comment for each scenario in the code snippet to help"})," ",(0,t.jsx)(n.em,{children:"users quickly distinguish between them."})]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(67294);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(i.Provider,{value:l},n)}}}]);