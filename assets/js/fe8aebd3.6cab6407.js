"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[24034],{52987:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(85893),a=n(11151);const i={},t="User-defined variables",l={id:"reference/user_defined_variables",title:"User-defined variables",description:"This topic describes how to declare and use user-defined variables.",source:"@site/versioned_docs/version-3.0/reference/user_defined_variables.md",sourceDirName:"reference",slug:"/reference/user_defined_variables",permalink:"/doc/en/3.0/reference/user_defined_variables",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/reference/user_defined_variables.md",tags:[],version:"3.0",frontMatter:{},sidebar:"documentation",previous:{title:"AWS IAM policies",permalink:"/doc/en/3.0/reference/aws_iam_policies"},next:{title:"StarRocks version 2.2",permalink:"/doc/en/3.0/release_notes/release-2.2"}},d={},c=[{value:"Usage notes",id:"usage-notes",level:2},{value:"Declare user-defined variables",id:"declare-user-defined-variables",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"Use user-defined variables in SQL",id:"use-user-defined-variables-in-sql",level:2}];function o(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",code:"code",blockquote:"blockquote",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"user-defined-variables",children:"User-defined variables"}),"\n",(0,r.jsx)(s.p,{children:"This topic describes how to declare and use user-defined variables."}),"\n",(0,r.jsx)(s.p,{children:"StarRocks 2.5 and later versions support user-defined variables. These variables are used to store specific values that are referenced in later SQL statements, thereby simplifying the writing of SQL statements and avoiding duplicate computation."}),"\n",(0,r.jsx)(s.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"User-defined variables are variables, which can be created by the user and exist in the session. This means that no one can access user-defined variables that have been declared by another user, and when the session is closed these variables expire."}),"\n",(0,r.jsx)(s.li,{children:"StarRocks does not support using the SHOW statement to display existing user-defined variables."}),"\n",(0,r.jsx)(s.li,{children:"The following types of values cannot be declared as user-defined variables: BITMAP, HLL, PERCENTILE, and ARRAY. User-defined variables of the JSON type are converted to the STRING type for storage."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"declare-user-defined-variables",children:"Declare user-defined variables"}),"\n",(0,r.jsx)(s.h3,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"SET @var_name = expr [, ...];\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"NOTE"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"All variables must be preceded by a single at sign (@)."}),"\n",(0,r.jsxs)(s.li,{children:["Multiple variables can be declared in the same SET statement and need to be separated with commas (",(0,r.jsx)(s.code,{children:","}),")."]}),"\n",(0,r.jsx)(s.li,{children:"You can declare the same variable multiple times. The newly declared value overwrites the original value."}),"\n",(0,r.jsxs)(s.li,{children:["If an undeclared variable is used, the value of the variable is ",(0,r.jsx)(s.code,{children:"NULL"})," by default, and the NULL type is STRING."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Parameter"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Required"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Description"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"var_name"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsxs)(s.td,{children:["The name of the user-defined variable. The naming conventions are as follows:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"The name can contain letters, digits (0-9), and underscores (_). "}),(0,r.jsx)("li",{children:"The name cannot exceed 64 characters in length."})]}),"You can declare a string as a user-defined variable, such as @'my-var', @\"my-var\", and @`my-var`. User-defined variables of the STRING type can contain characters other than letters, digits, and underscores (_), such as periods (.)."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expr"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"The value of the user-defined variable. You can specify a number (such as 43) or a complex expression (such as the value returned by a SELECT statement) for this parameter. The data type of the variable is the same as the data type of the result returned by the expression."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Example 1: Declare a number as a user-defined variable."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET @var = 43;\n"})}),"\n",(0,r.jsx)(s.p,{children:"Example 2: Declare the value returned by a SELECT query as a user-defined variable."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET @var = (SELECT SUM(v1) FROM test);\n"})}),"\n",(0,r.jsx)(s.p,{children:"Example 3: Declare multiple user-defined variables in the same SET statement."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-SQL",children:"SET @v1=1, @v2=2;\n"})}),"\n",(0,r.jsx)(s.h2,{id:"use-user-defined-variables-in-sql",children:"Use user-defined variables in SQL"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Simplifies the writing of SQL statements. For example, when you execute the following SELECT statement, StarRocks parses ",(0,r.jsx)(s.code,{children:"@var"})," as ",(0,r.jsx)(s.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"SET @var = 1;\nSELECT @var, v1 from test;\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Avoids duplicate computation. For example, when you execute the following SELECT statement, StarRocks parses ",(0,r.jsx)(s.code,{children:"@var"})," as the result returned by the ",(0,r.jsx)(s.code,{children:"select sum(c1) from tbl"})," command."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Plain",children:"SET @var = (select sum(c1) from tbl);\nSELECT @var, v1 from test;\n"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var r=n(67294);const a=r.createContext({});function i(e){const s=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||t:i(e),r.createElement(a.Provider,{value:l},s)}}}]);