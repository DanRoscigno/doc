"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25120],{74549:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(85893),t=s(11151);const i={displayed_sidebar:"documentation"},c="group_concat",o={id:"sql-reference/sql-functions/string-functions/group_concat",title:"group_concat",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/string-functions/group_concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/group_concat",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/group_concat",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/string-functions/group_concat.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"find_in_set",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/find_in_set"},next:{title:"hex",permalink:"/doc/docs/sql-reference/sql-functions/string-functions/hex"}},a={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",ol:"ol"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"group_concat",children:"group_concat"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Concatenates non-null values from a group into a single string, with a ",(0,r.jsx)(n.code,{children:"sep"})," argument, which is ",(0,r.jsx)(n.code,{children:","})," by default if not specified. This function can be used to concatenate values from multiple rows of a column into one string."]}),"\n",(0,r.jsx)(n.p,{children:"group_concat supports DISTINCT and ORDER BY in 3.0 versions later than 3.0.6 and 3.1 versions later than 3.1.3."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"VARCHAR GROUP_CONCAT([DISTINCT] expr [,expr ...]\n             [ORDER BY {unsigned_integer | col_name | expr}\n                 [ASC | DESC] [,col_name ...]]\n             [SEPARATOR sep])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expr"}),": the values to concatenate, with null values ignored. It must evaluate to VARCHAR. You can optionally specify ",(0,r.jsx)(n.code,{children:"DISTINCT"})," to eliminate duplicate values from the output string. If you want to concatenate multiple ",(0,r.jsx)(n.code,{children:"expr"})," directly, use ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/concat",children:"concat"})," or ",(0,r.jsx)(n.a,{href:"/doc/docs/sql-reference/sql-functions/string-functions/concat_ws",children:"concat_ws"})," to specify formats."]}),"\n",(0,r.jsx)(n.li,{children:"Items in ORDER BY can be unsigned integers (starting from 1), column names, or normal expressions. The results are sorted in ascending order by default. You can also explicitly specify the ASC keyword. If you want to sort results in descending order, add the DESC keyword to the name of the column you are sorting."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sep"}),": the optional separator used to concatenate non-null values from different rows. If it is not specified, ",(0,r.jsx)(n.code,{children:","})," (a comma) is used by default. To eliminate the separator, specify an empty string ",(0,r.jsx)(n.code,{children:"''"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,r.jsx)(n.p,{children:"Returns a string value for each group and returns NULL if there are no non-NULL values."}),"\n",(0,r.jsxs)(n.p,{children:["You can limit the length of the string returned by group_concat by setting the ",(0,r.jsx)(n.a,{href:"/doc/docs/reference/System_variable",children:"session variable"})," ",(0,r.jsx)(n.code,{children:"group_concat_max_len"}),", which defaults to 1024. Minimum value: 4. Unit: characters."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET [GLOBAL | SESSION] group_concat_max_len = <value>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a table ",(0,r.jsx)(n.code,{children:"ss"})," which contains subject scores."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `ss` (\n  `id` int(11) NULL COMMENT "",\n  `name` varchar(255) NULL COMMENT "",\n  `subject` varchar(255) NULL COMMENT "",\n  `score` int(11) NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_num" = "1"\n);\n\ninsert into ss values (1,"Tom","English",90);\ninsert into ss values (1,"Tom","Math",80);\ninsert into ss values (2,"Tom","English",NULL);\ninsert into ss values (2,"Tom",NULL,NULL);\ninsert into ss values (3,"May",NULL,NULL);\ninsert into ss values (3,"Ti","English",98);\ninsert into ss values (4,NULL,NULL,NULL);\ninsert into ss values (NULL,"Ti","Phy",98);\n\nselect * from ss order by id;\n+------+------+---------+-------+\n| id   | name | subject | score |\n+------+------+---------+-------+\n| NULL | Ti   | Phy     |    98 |\n|    1 | Tom  | English |    90 |\n|    1 | Tom  | Math    |    80 |\n|    2 | Tom  | English |  NULL |\n|    2 | Tom  | NULL    |  NULL |\n|    3 | May  | NULL    |  NULL |\n|    3 | Ti   | English |    98 |\n|    4 | NULL | NULL    |  NULL |\n+------+------+---------+-------+\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use group_concat."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example 1: Concatenate names into a string with the default separator and with null values ignored. Duplicate names are retained."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" select group_concat(name) as res from ss;\n +---------------------------+\n | res                       |\n +---------------------------+\n | Tom,Tom,Ti,Tom,Tom,May,Ti |\n +---------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 2: Concatenate distinct names into a string with the default separator and with null values ignored. Duplicate names are removed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" select group_concat(distinct name) as res from ss;\n +---------------------------+\n | res                       |\n +---------------------------+\n | Ti,May,Tom                |\n +---------------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 3: Concatenate the name-subject strings of the same ID in ascending order of ",(0,r.jsx)(n.code,{children:"score"}),". For example, ",(0,r.jsx)(n.code,{children:"TomMath"})," and ",(0,r.jsx)(n.code,{children:"TomEnglish"})," share ID 1 and they are concatenated with a comma in ascending order of ",(0,r.jsx)(n.code,{children:"score"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" select id, group_concat(distinct name,subject order by score) as res from ss group by id order by id;\n +------+--------------------+\n | id   | res                |\n +------+--------------------+\n | NULL | TiPhy              |\n |    1 | TomMath,TomEnglish |\n |    2 | TomEnglish         |\n |    3 | TiEnglish          |\n |    4 | NULL               |\n +------+--------------------+\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example 4: group_concat is nested with concat(), which is used to combine ",(0,r.jsx)(n.code,{children:"name"}),", ",(0,r.jsx)(n.code,{children:"-"}),", and ",(0,r.jsx)(n.code,{children:"subject"})," as a string. The strings in the same row are sorted in ascending order of ",(0,r.jsx)(n.code,{children:"score"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" select id, group_concat(distinct concat(name,'-',subject) order by score) as res from ss group by id order by id;\n +------+----------------------+\n | id   | res                  |\n +------+----------------------+\n | NULL | Ti-Phy               |\n |    1 | Tom-Math,Tom-English |\n |    2 | Tom-English          |\n |    3 | Ti-English           |\n |    4 | NULL                 |\n +------+----------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 5: No matching result is found and NULL is returned."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"select group_concat(distinct name) as res from ss where id < 0;\n +------+\n | res  |\n +------+\n | NULL |\n +------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example 6: Limit the length of the returned string to six characters."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" set group_concat_max_len = 6;\n\n select id, group_concat(distinct name,subject order by score) as res from ss group by id order by id;\n +------+--------+\n | id   | res    |\n +------+--------+\n | NULL | TiPhy  |\n |    1 | TomMat |\n |    2 | NULL   |\n |    3 | TiEngl |\n |    4 | NULL   |\n +------+--------+\n"})}),"\n",(0,r.jsx)(n.h2,{id:"keyword",children:"keyword"}),"\n",(0,r.jsx)(n.p,{children:"GROUP_CONCAT,CONCAT,ARRAY_AGG"})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>i});var r=s(67294);const t=r.createContext({});function i(e){const n=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:i(e),r.createElement(t.Provider,{value:o},n)}}}]);