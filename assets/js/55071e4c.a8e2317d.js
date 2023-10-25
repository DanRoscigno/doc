"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[3592],{66492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(85893),r=t(11151);const a={displayed_sidebar:"English"},l="SELECT",i={id:"sql-reference/sql-statements/data-manipulation/SELECT",title:"SELECT",description:"Description",source:"@site/versioned_docs/version-2.2/sql-reference/sql-statements/data-manipulation/SELECT.md",sourceDirName:"sql-reference/sql-statements/data-manipulation",slug:"/sql-reference/sql-statements/data-manipulation/SELECT",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/SELECT",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-manipulation/SELECT.md",tags:[],version:"2.2",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"ROUTINE LOAD",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/ROUTINE_LOAD"},next:{title:"SHOW ALTER",permalink:"/docs/2.2/sql-reference/sql-statements/data-manipulation/SHOW_ALTER"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Join",id:"join",level:3},{value:"Self-Join",id:"self-join",level:4},{value:"Cross Join",id:"cross-join",level:4},{value:"Inner join",id:"inner-join",level:4},{value:"Outer join",id:"outer-join",level:4},{value:"Equivalent and unequal join",id:"equivalent-and-unequal-join",level:4},{value:"Semi join",id:"semi-join",level:4},{value:"Anti join",id:"anti-join",level:4},{value:"Order by",id:"order-by",level:3},{value:"Group by",id:"group-by",level:3},{value:"Having",id:"having",level:3},{value:"Limit",id:"limit",level:3},{value:"Offset",id:"offset",level:4},{value:"Union",id:"union",level:3},{value:"Distinct",id:"distinct",level:3},{value:"Subquery",id:"subquery",level:3},{value:"Irrelevant subquery",id:"irrelevant-subquery",level:4},{value:"Related subquery",id:"related-subquery",level:4},{value:"With clause",id:"with-clause",level:3},{value:"Where and Operator",id:"where-and-operator",level:3},{value:"Arithmetic operator",id:"arithmetic-operator",level:4},{value:"Between Operator",id:"between-operator",level:4},{value:"Comparison operator",id:"comparison-operator",level:4},{value:"Like Operator",id:"like-operator",level:4},{value:"Logical Operator",id:"logical-operator",level:4},{value:"Regular Expression Operator",id:"regular-expression-operator",level:4},{value:"Alias",id:"alias",level:3},{value:"Keyword",id:"keyword",level:2}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",h4:"h4",ol:"ol",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"select",children:"SELECT"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The SELECT statement consists of select, from, where, group by, having, order by, union, and so on."}),"\n",(0,s.jsx)(n.p,{children:"StarRocks' query statement basically conforms to the SQL92 standard. Here is a brief description of the supported select usage."}),"\n",(0,s.jsx)(n.h3,{id:"join",children:"Join"}),"\n",(0,s.jsx)(n.p,{children:"Join operations combine data from two or more tables and then return a result set of some columns from some of them."}),"\n",(0,s.jsx)(n.p,{children:"StarRocks currently supports inner join, outer join, semi join, anti join, cross join."}),"\n",(0,s.jsx)(n.p,{children:"In addition to equal join, unequal join is also supported in inner join condition. For performance reasons, equal join is recommended."}),"\n",(0,s.jsx)(n.p,{children:"Other joins only support equal join. The syntax of the connection is defined as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT select_list FROM\ntable_or_subquery1 [INNER] JOIN table_or_subquery2 |\ntable_or_subquery1 {LEFT [OUTER] | RIGHT [OUTER] | FULL [OUTER]} JOIN table_or_subquery2 |\ntable_or_subquery1 {LEFT | RIGHT} SEMI JOIN table_or_subquery2 |\ntable_or_subquery1 {LEFT | RIGHT} ANTI JOIN table_or_subquery2 |\n[ ON col1 = col2 [AND col3 = col4 ...] |\nUSING (col1 [, col2 ...]) ]\n[other_join_clause ...]\n[ WHERE where_clauses ]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT select_list FROM\ntable_or_subquery1, table_or_subquery2 [, table_or_subquery3 ...]\n[other_join_clause ...]\nWHERE\ncol1 = col2 [AND col3 = col4 ...]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT select_list FROM\ntable_or_subquery1 CROSS JOIN table_or_subquery2\n[other_join_clause ...]\n[ WHERE where_clauses ]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"self-join",children:"Self-Join"}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports self-joins, which are self-joins and self-joins. For example, different columns of the same table are joined."}),"\n",(0,s.jsx)(n.p,{children:"There is actually no special syntax to identify self-join. The conditions on both sides of a join in a self-join come from the same table."}),"\n",(0,s.jsx)(n.p,{children:"We need to assign them different aliases."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT lhs.id, rhs.parent, lhs.c1, rhs.c2 FROM tree_data lhs, tree_data rhs WHERE lhs.id = rhs.parent;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"cross-join",children:"Cross Join"}),"\n",(0,s.jsx)(n.p,{children:"Cross join can produce a lot of results, so cross join should be used with caution."}),"\n",(0,s.jsx)(n.p,{children:"Even if you need to use cross join, you need to use filter conditions and ensure that fewer results are returned. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM t1, t2;\n\nSELECT * FROM t1 CROSS JOIN t2;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"inner-join",children:"Inner join"}),"\n",(0,s.jsx)(n.p,{children:"Inner join is the most well-known and commonly used join. Returns results from columns requested by two similar tables, joined if the columns of both tables contain the same value."}),"\n",(0,s.jsx)(n.p,{children:"If a column name of both tables is the same, we need to use the full name (in the form of table_name.column_name) or alias the column name."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:"The following three queries are equivalent."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT t1.id, c1, c2 FROM t1, t2 WHERE t1.id = t2.id;\n\nSELECT t1.id, c1, c2 FROM t1 JOIN t2 ON t1.id = t2.id;\n\nSELECT t1.id, c1, c2 FROM t1 INNER JOIN t2 ON t1.id = t2.id;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"outer-join",children:"Outer join"}),"\n",(0,s.jsx)(n.p,{children:"Outer join returns the left or right table or all rows of both. If there is no matching data in another table, set it to NULL. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM t1 LEFT OUTER JOIN t2 ON t1.id = t2.id;\n\nSELECT * FROM t1 RIGHT OUTER JOIN t2 ON t1.id = t2.id;\n\nSELECT * FROM t1 FULL OUTER JOIN t2 ON t1.id = t2.id;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"equivalent-and-unequal-join",children:"Equivalent and unequal join"}),"\n",(0,s.jsx)(n.p,{children:"Usually, users use the most equal join, which requires the operator of the join condition to be an equal sign."}),"\n",(0,s.jsx)(n.p,{children:"Unequal join can be used on join conditions!=, Equal sign. Unequal joins produce a large number of results and may exceed the memory limit during calculation."}),"\n",(0,s.jsx)(n.p,{children:"Use with caution. Unequal join only supports inner join. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT t1.id, c1, c2 FROM t1 INNER JOIN t2 ON t1.id = t2.id;\n\nSELECT t1.id, c1, c2 FROM t1 INNER JOIN t2 ON t1.id > t2.id;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"semi-join",children:"Semi join"}),"\n",(0,s.jsx)(n.p,{children:"Left semi join returns only the rows in the left table that match the data in the right table, regardless of how many rows match the data in the right table."}),"\n",(0,s.jsx)(n.p,{children:"This row of the left table is returned at most once. Right semi join works similarly, except that the data returned is a right table."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT t1.c1, t1.c2, t1.c2 FROM t1 LEFT SEMI JOIN t2 ON t1.id = t2.id;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"anti-join",children:"Anti join"}),"\n",(0,s.jsx)(n.p,{children:"Left anti join only returns rows from the left table that do not match the right table."}),"\n",(0,s.jsx)(n.p,{children:"Right anti join reverses this comparison, returning only rows from the right table that do not match the left table. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT t1.c1, t1.c2, t1.c2 FROM t1 LEFT ANTI JOIN t2 ON t1.id = t2.id;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"order-by",children:"Order by"}),"\n",(0,s.jsx)(n.p,{children:"Order by sorts the result set by comparing the sizes of one or more columns."}),"\n",(0,s.jsx)(n.p,{children:"Order by is a time-consuming and resource-consuming operation because all data needs to be sent to one node before it can be sorted, and sorting requires more memory than unsorted operations."}),"\n",(0,s.jsx)(n.p,{children:"If you need to return the first N sort results, you need to use the LIMIT clause; To limit memory usage, if the user does not specify a LIMIT clause, the first 65535 sort results are returned by default."}),"\n",(0,s.jsx)(n.p,{children:"The Order by syntax is defined as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ORDER BY col [ASC | DESC]\n"})}),"\n",(0,s.jsx)(n.p,{children:"The default sort order is ASC (ascending). Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from big_table order by tiny_column, short_column desc;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"group-by",children:"Group by"}),"\n",(0,s.jsx)(n.p,{children:"Group by clauses are often used with aggregate functions such as COUNT(), SUM(), AVG(), MIN(), and MAX()."}),"\n",(0,s.jsx)(n.p,{children:"The column specified by group by will not participate in the aggregation operation. The group by clause can be added with the Having clause to filter the results produced by the aggregate function. for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select tiny_column, sum(short_column)\nfrom small_table \ngroup by tiny_column;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-------------+---------------------+\n| tiny_column |  sum('short_column')|\n+-------------+---------------------+\n|      1      |        2            |\n|      2      |        1            |\n+-------------+---------------------+\n\n2 rows in set (0.07 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"having",children:"Having"}),"\n",(0,s.jsx)(n.p,{children:"The Having clause does not filter row data in a table, but filters the results of aggregate functions."}),"\n",(0,s.jsx)(n.p,{children:"Generally speaking, having is used with aggregate functions (such as COUNT(), SUM(), AVG(), MIN(), MAX()) and group by clauses."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select tiny_column, sum(short_column) \nfrom small_table \ngroup by tiny_column \nhaving sum(short_column) = 1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-------------+---------------------+\n|tiny_column  | sum('short_column') |\n+-------------+---------------------+\n|         2   |        1            |\n+-------------+---------------------+\n\n1 row in set (0.07 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select tiny_column, sum(short_column) \nfrom small_table \ngroup by tiny_column \nhaving tiny_column > 1;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-------------+---------------------+\n|tiny_column  | sum('short_column') |\n+-------------+---------------------+\n|      2      |          1          |\n+-------------+---------------------+\n\n1 row in set (0.07 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"limit",children:"Limit"}),"\n",(0,s.jsx)(n.p,{children:"Limit clauses are used to limit the maximum number of rows returned. Setting the maximum number of rows returned can help StarRocks optimize memory usage."}),"\n",(0,s.jsx)(n.p,{children:"This clause is mainly used in the following scenarios:"}),"\n",(0,s.jsx)(n.p,{children:"Returns the result of the top-N query."}),"\n",(0,s.jsx)(n.p,{children:"Think about what's included in the table below."}),"\n",(0,s.jsx)(n.p,{children:"The size of the query result set needs to be limited because of the large amount of data in the table or because the where clause does not filter too much data."}),"\n",(0,s.jsx)(n.p,{children:"Instructions for use: The value of the limit clause must be a numeric literal constant."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select tiny_column from small_table limit 1;\n\n+-------------+\n|tiny_column  |\n+-------------+\n|     1       |\n+-------------+\n\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select tiny_column from small_table limit 10000;\n\n+-------------+\n|tiny_column  |\n+-------------+\n|      1      |\n|      2      |\n+-------------+\n\n2 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"offset",children:"Offset"}),"\n",(0,s.jsx)(n.p,{children:"Offset"}),"\n",(0,s.jsx)(n.p,{children:"The Offset clause causes the result set to skip the first few rows and return the following results directly."}),"\n",(0,s.jsx)(n.p,{children:"The result set defaults to start at line 0, so offset 0 and no offset return the same results."}),"\n",(0,s.jsx)(n.p,{children:"Generally speaking, offset clauses need to be used with order by clauses and limit clauses to be valid."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from big_table order by varchar_column limit 3;\n\n+----------------+\n| varchar_column | \n+----------------+\n|    beijing     | \n|    chongqing   | \n|    tianjin     | \n+----------------+\n\n3 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from big_table order by varchar_column limit 1 offset 0;\n\n+----------------+\n|varchar_column  |\n+----------------+\n|     beijing    |\n+----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from big_table order by varchar_column limit 1 offset 1;\n\n+----------------+\n|varchar_column  |\n+----------------+\n|    chongqing   | \n+----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from big_table order by varchar_column limit 1 offset 2;\n\n+----------------+\n|varchar_column  |\n+----------------+\n|     tianjin    |     \n+----------------+\n\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: It is allowed to use offset syntax without order by, but offset does not make sense at this time."}),"\n",(0,s.jsx)(n.p,{children:"In this case, only the limit value is taken, and the offset value is ignored. So without order by."}),"\n",(0,s.jsx)(n.p,{children:"Offset exceeds the maximum number of rows in the result set and is still a result. It is recommended that users use offset with order by."}),"\n",(0,s.jsx)(n.h3,{id:"union",children:"Union"}),"\n",(0,s.jsx)(n.p,{children:"Union clauses are used to merge the result sets of multiple queries. The syntax is defined as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"query_1 UNION [DISTINCT | ALL] query_2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Instructions:"}),"\n",(0,s.jsx)(n.p,{children:"Using only union keywords and union distinct works the same way. Since de-duplication is memory intensive,"}),"\n",(0,s.jsx)(n.p,{children:"As a result, queries using union all operations are faster and consume less memory. If the user wants to order by and limit the returned result set,"}),"\n",(0,s.jsx)(n.p,{children:"You need to place the union operation in the subquery, then select from the subquery, and finally place the subquery and order by outside the subquery."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> (select tiny_column from small_table) union all (select tiny_column from small_table);\n\n+-------------+\n|tiny_column  |\n+-------------+\n|      1      |\n|      2      |\n|      1      |\n|      2      |\n+-------------+\n\n4 rows in set (0.10 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> (select tiny_column from small_table) union (select tiny_column from small_table);\n\n+-------------+\n|tiny_column  |\n+-------------+\n|      2      |\n|      1      |\n+-------------+\n\n2 rows in set (0.11 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select * from (select tiny_column from small_table union all\n\nselect tiny_column from small_table) as t1 \n\norder by tiny_column limit 4;\n\n+-------------+\n| tiny_column |\n+-------------+\n|       1     |\n|       1     |\n|       2     |\n|       2     |\n+-------------+\n\n4 rows in set (0.11 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"distinct",children:"Distinct"}),"\n",(0,s.jsx)(n.p,{children:"The distinct operator deduplicates the result set. Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Returns the unique values from one column.\nselect distinct tiny_column from big_table limit 2;\n\n-- Returns the unique combinations of values from multiple columns.\nselect distinct tiny_column, int_column from big_table limit 2;\n"})}),"\n",(0,s.jsx)(n.p,{children:"distinct can be used with aggregate functions (usually count functions), and count (distinct) is used to calculate how many different combinations are contained on one or more columns."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Counts the unique values from one column.\nselect count(distinct tiny_column) from small_table;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"+-------------------------------+\n| count(DISTINCT 'tiny_column') |\n+-------------------------------+\n|             2                 |\n+-------------------------------+\n1 row in set (0.06 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Counts the unique combinations of values from multiple columns.\nselect count(distinct tiny_column, int_column) from big_table limit 2;\n"})}),"\n",(0,s.jsx)(n.p,{children:"StarRocks supports multiple aggregate functions using distinct at the same time."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"-- Count the unique value from multiple aggregation function separately.\nselect count(distinct tiny_column, int_column), count(distinct varchar_column) from big_table;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"subquery",children:"Subquery"}),"\n",(0,s.jsx)(n.p,{children:"Subqueries are divided into irrelevant subqueries and related subqueries by relevance."}),"\n",(0,s.jsx)(n.h4,{id:"irrelevant-subquery",children:"Irrelevant subquery"}),"\n",(0,s.jsx)(n.p,{children:"Uncorrelated subqueries support [NOT] IN and EXISTS."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT x FROM t1 WHERE x [NOT] IN (SELECT y FROM t2);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT x FROM t1 WHERE EXISTS (SELECT y FROM t2 WHERE y = 1);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"related-subquery",children:"Related subquery"}),"\n",(0,s.jsx)(n.p,{children:"Related subqueries support [NOT] IN and [NOT] EXISTS."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM t1 WHERE x [NOT] IN (SELECT a FROM t2 WHERE t1.y = t2.b);\n\nSELECT * FROM t1 WHERE [NOT] EXISTS (SELECT a FROM t2 WHERE t1.y = t2.b);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Subqueries also support scalar quantum queries. It can be divided into irrelevant scalar quantum query, related scalar quantum query and scalar quantum query as parameters of the general function."}),"\n",(0,s.jsx)(n.p,{children:"For example\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Uncorrelated scalar quantum query with predicate = sign. For example, output information about the person with the highest wage."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT name FROM table WHERE salary = (SELECT MAX(salary) FROM table);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Uncorrelated scalar quantum queries with predicates ",(0,s.jsx)(n.code,{children:">"}),", ",(0,s.jsx)(n.code,{children:"<"}),", etc. For example, output information about people who are paid more than average."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT name FROM table WHERE salary > (SELECT AVG(salary) FROM table);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Related scalar quantum queries. For example, output the highest salary information for each department."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT name FROM table a WHERE salary = \uff08SELECT MAX(salary) FROM table b WHERE b.Department= a.Department\uff09;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Scalar quantum queries are used as parameters of ordinary functions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT name FROM table WHERE salary = abs((SELECT MAX(salary) FROM table));\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"with-clause",children:"With clause"}),"\n",(0,s.jsx)(n.p,{children:"A clause that can be added before a SELECT statement to define an alias for a complex expression that is referenced multiple times inside SELECT."}),"\n",(0,s.jsx)(n.p,{children:"Similar to CRATE VIEW, but the table and column names defined in the clause do not persist after the query ends and do not conflict with names in the actual table or VIEW."}),"\n",(0,s.jsx)(n.p,{children:"The benefits of using a WITH clause are:"}),"\n",(0,s.jsx)(n.p,{children:"Convenient and easy to maintain, reducing duplication within queries."}),"\n",(0,s.jsx)(n.p,{children:"It is easier to read and understand SQL code by abstracting the most complex parts of a query into separate blocks."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Define one subquery at the outer level, and another at the inner level as part of the\n-- initial stage of the UNION ALL query.\nwith t1 as (select 1) (with t2 as (select 2)\n\nselect * from t2) union all select * from t1;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"where-and-operator",children:"Where and Operator"}),"\n",(0,s.jsx)(n.p,{children:"SQL operators are a series of functions used for comparison and are widely used in where clauses of select statements."}),"\n",(0,s.jsx)(n.h4,{id:"arithmetic-operator",children:"Arithmetic operator"}),"\n",(0,s.jsx)(n.p,{children:"Arithmetic operators usually appear in expressions that contain left, right, and most often left operands"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"+and-"}),"\uff1acan be used as a unit or as a 2-ary operator. When used as a unit operator, such as +1, -2.5 or -col_ name, which means the value is multiplied by +1 or -1."]}),"\n",(0,s.jsx)(n.p,{children:"So the cell operator + returns an unchanged value, and the cell operator - changes the symbol bits of that value."}),"\n",(0,s.jsx)(n.p,{children:"Users can overlay two cell operators, such as +5 (returning a positive value), -+2 or +2 (returning a negative value), but users cannot use two consecutive - signs."}),"\n",(0,s.jsx)(n.p,{children:"Because--is interpreted as a comment in the following statement (when a user can use two-signs, a space or parenthesis is required between the two-signs, such as-(-2) or - -2, which actually results in + 2)."}),"\n",(0,s.jsx)(n.p,{children:"When + or - is a binary operator, such as 2+2, 3+1.5, or col1+col2, it means that the left value is added or subtracted from the right value. Both left and right values must be numeric types."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"and/"}),"\uff1arepresent multiplication and division, respectively. The operands on both sides must be data types. When two numbers are multiplied."]}),"\n",(0,s.jsx)(n.p,{children:"Smaller operands may be promoted if needed (e.g., SMALLINT to INT or BIGINT), and the result of the expression will be promoted to the next larger type."}),"\n",(0,s.jsx)(n.p,{children:"For example, TINYINT multiplied by INT will produce a BIGINT type of result. When two numbers are multiplied, both operands and expression results are interpreted as DOUBLE types to avoid loss of precision."}),"\n",(0,s.jsx)(n.p,{children:"If the user wants to convert the result of the expression to another type, it needs to be converted using the CAST function."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"%"}),"\uff1aModulation operator. Returns the remainder of the left operand divided by the right operand. Both left and right operands must be integers."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"&\uff0c|and ^"}),"\uff1aThe bitwise operator returns the result of bitwise AND, bitwise OR, bitwise XOR operations on two operands. Both operands require an integer type."]}),"\n",(0,s.jsx)(n.p,{children:"If the types of the two operands of a bitwise operator are inconsistent, the operands of a smaller type are promoted to the operands of a larger type, and the corresponding bitwise operations are performed."}),"\n",(0,s.jsx)(n.p,{children:"Multiple arithmetic operators can appear in an expression, and the user can enclose the corresponding arithmetic expression in parentheses. Arithmetic operators usually do not have corresponding mathematical functions to express the same functions as arithmetic operators."}),"\n",(0,s.jsx)(n.p,{children:"For example, we don't have the MOD() function to represent the% operator. Conversely, mathematical functions do not have corresponding arithmetic operators. For example, the power function POW() does not have a corresponding ** exponentiation operator."}),"\n",(0,s.jsx)(n.p,{children:"Users can find out which arithmetic functions we support through the Mathematical Functions section."}),"\n",(0,s.jsx)(n.h4,{id:"between-operator",children:"Between Operator"}),"\n",(0,s.jsx)(n.p,{children:"In a where clause, expressions may be compared with both upper and lower bounds. If the expression is greater than or equal to the lower bound and less than or equal to the upper bound, the result of the comparison is true. The syntax is defined as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"expression BETWEEN lower_bound AND upper_bound\n"})}),"\n",(0,s.jsx)(n.p,{children:"Data type: Usually an expression evaluates to a numeric type, which also supports other data types. If you must ensure that both the lower and upper bounds are comparable characters, you can use the cast() function."}),"\n",(0,s.jsx)(n.p,{children:"Instructions for use: If the operand is of type string, note that a long string starting with an upper bound will not match the upper bound, which is larger than the upper bound. For example, \"between'A'and'M' will not match'MJ'."}),"\n",(0,s.jsx)(n.p,{children:"If you need to make sure the expression works correctly, you can use functions such as upper (), lower (), substr (), trim ()."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select c1 from t1 where month between 1 and 6;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"comparison-operator",children:"Comparison operator"}),"\n",(0,s.jsx)(n.p,{children:"The comparison operator is used to determine whether columns and columns are equal or to sort them. =,!=, >= All data types are available."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"<>"})," and ",(0,s.jsx)(n.code,{children:"!="})," operators indicate that value ",(0,s.jsx)(n.code,{children:"a"})," is not equal to value ",(0,s.jsx)(n.code,{children:"b"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In Operator"}),"\n",(0,s.jsx)(n.p,{children:"The In operator compares to the VALUE collection and returns TRUE if it can match any of the elements in the collection."}),"\n",(0,s.jsx)(n.p,{children:"Parameters and VALUE collections must be comparable. All expressions using the IN operator can be written as equivalent comparisons connected with OR, but the syntax of IN is simpler, more precise, and easier for StarRocks to optimize."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from small_table where tiny_column in (1,2);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"like-operator",children:"Like Operator"}),"\n",(0,s.jsx)(n.p,{children:"This operator is used to compare to a string. ''matches a single character,'%' matches multiple characters. The parameter must match the complete string. Typically, placing'%'at the end of a string is more practical."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from small_table where varchar_column like 'm%';\n\n+----------------+\n|varchar_column  |\n+----------------+\n|     milan      |\n+----------------+\n\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",children:"mysql> select varchar_column from small_table where varchar_column like 'm____';\n\n+----------------+\n| varchar_column | \n+----------------+\n|    milan       | \n+----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"logical-operator",children:"Logical Operator"}),"\n",(0,s.jsx)(n.p,{children:"Logical operators return a BOOL value, including unit and multiple operators, each of which handles parameters that are expressions that return BOOL values. Supported operators are:"}),"\n",(0,s.jsx)(n.p,{children:"AND: 2-ary operator, the AND operator returns TRUE if the parameters on the left and right are both calculated as TRUE."}),"\n",(0,s.jsx)(n.p,{children:"OR: 2-ary operator that returns TRUE if one of the parameters on the left and right is calculated as TRUE. If both parameters are FALSE, the OR operator returns FALSE."}),"\n",(0,s.jsx)(n.p,{children:"NOT: Unit operator, the result of inverting an expression. If the parameter is TRUE, the operator returns FALSE; If the parameter is FALSE, the operator returns TRUE."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select true and true;\n\n+-------------------+\n| (TRUE) AND (TRUE) | \n+-------------------+\n|         1         | \n+-------------------+\n\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select true and false;\n\n+--------------------+\n| (TRUE) AND (FALSE) | \n+--------------------+\n|         0          | \n+--------------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select true or false;\n\n+-------------------+\n| (TRUE) OR (FALSE) | \n+-------------------+\n|        1          | \n+-------------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select not true;\n\n+----------+\n| NOT TRUE | \n+----------+\n|     0    | \n+----------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"regular-expression-operator",children:"Regular Expression Operator"}),"\n",(0,s.jsx)(n.p,{children:"Determines whether the regular expression is matched. Using POSIX standard regular expressions,'^'matches the first part of the string,'$' matches the end of the string."}),"\n",(0,s.jsx)(n.p,{children:'"." matches any single character, "*" matches zero or more options, "+" matches one or more options, "?" means greedy representation, and so on. Regular expressions need to match complete values, not just parts of strings.'}),"\n",(0,s.jsx)(n.p,{children:"If you want to match the middle part, the front part of the regular expression can be written as'^. 'or'.'. '^'and'$' are usually omitted. The RLIKE operator and the REGEXP operator are synonyms."}),"\n",(0,s.jsx)(n.p,{children:"The'|'operator is an optional operator. Regular expressions on either side of'|' only need to satisfy one side condition. The'|'operator and regular expressions on both sides usually need to be enclosed in ()."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from small_table where varchar_column regexp '(mi|MI).*';\n\n+----------------+\n| varchar_column | \n+----------------+\n|     milan      |       \n+----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plain",metastring:"text",children:"mysql> select varchar_column from small_table where varchar_column regexp 'm.*';\n\n+----------------+\n| varchar_column | \n+----------------+\n|     milan      |  \n+----------------+\n\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"alias",children:"Alias"}),"\n",(0,s.jsx)(n.p,{children:"When you write the names of tables, columns, or expressions that contain columns in a query, you can assign them an alias at the same time."}),"\n",(0,s.jsx)(n.p,{children:"Aliases can be used to access tables and columns when they are needed. Aliases are usually shorter and better remembered than their original names. When a new alias is needed,"}),"\n",(0,s.jsx)(n.p,{children:"Simply add an AS alias clause after the table, column, and expression names in the select list or from list."}),"\n",(0,s.jsx)(n.p,{children:"AS keywords are optional and users can specify aliases directly after the original name. If an alias or other identifier has the same name as an internal keyword, you need to add a ``symbol to the name. Aliases are case sensitive."}),"\n",(0,s.jsx)(n.p,{children:"Example\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select tiny_column as name, int_column as sex from big_table;\n\nselect sum(tiny_column) as total_count from big_table;\n\nselect one.tiny_column, two.int_column from small_table one, <br/> big_table two where one.tiny_column = two.tiny_column;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keyword",children:"Keyword"}),"\n",(0,s.jsx)(n.p,{children:"SELECT"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>a});var s=t(67294);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:a(e),s.createElement(r.Provider,{value:i},n)}}}]);