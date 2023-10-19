"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48724],{97368:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(85893),r=s(11151);const i={displayed_sidebar:"English"},a="ALTER MATERIALIZED VIEW",l={id:"sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW",title:"ALTER MATERIALIZED VIEW",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW.md",sourceDirName:"sql-reference/sql-statements/data-definition",slug:"/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW",permalink:"/docs/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"CREATE MATERIALIZED VIEW",permalink:"/docs/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW"},next:{title:"DROP MATERIALIZED VIEW",permalink:"/docs/sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"alter-materialized-view",children:"ALTER MATERIALIZED VIEW"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This SQL statement can\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alter the name of an asynchronous materialized view."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alter the refresh strategy of an asynchronous materialized view."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alter the status of an asynchronous materialized view to active or inactive."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Perform an atomic swap between two asynchronous materialized views."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alter the properties of an asynchronous materialized view."}),"\n",(0,t.jsx)(n.p,{children:"You can use this SQL statement to alter the following properties:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"partition_ttl_number"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"partition_refresh_number"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"resource_group"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"auto_refresh_partitions_limit"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"excluded_trigger_tables"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"mv_rewrite_staleness_second"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"unique_constraints"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"foreign_key_constraints"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"colocate_with"})}),"\n",(0,t.jsxs)(n.li,{children:["All session variable-related properties. For information on session variables, see ",(0,t.jsx)(n.a,{href:"/docs/reference/System_variable",children:"System variables"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'ALTER MATERIALIZED VIEW [db_name.]<mv_name> \n    { RENAME [db_name.]<new_mv_name> \n    | REFRESH <new_refresh_scheme_desc> \n    | ACTIVE | INACTIVE \n    | SWAP WITH [db_name.]<mv2_name>\n    | SET ( "<key>" = "<value>"[,...]) }\n'})}),"\n",(0,t.jsx)(n.p,{children:"Parameters in brackets [] is optional."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mv_name"}),(0,t.jsx)(n.td,{children:"yes"}),(0,t.jsx)(n.td,{children:"The name of the materialized view to alter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"new_refresh_scheme_desc"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsxs)(n.td,{children:["New refresh strategy, see ",(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW#parameters",children:"SQL Reference - CREATE MATERIALIZED VIEW - Parameters"})," for details."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"new_mv_name"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"New name for the materialized view."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ACTIVE"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"Set the status of the materialized view to active. StarRocks automatically sets a materialized view to inactive if any of its base tables is changed, for example, dropped and re-created, to prevent the situation that original metadata mismatches the changed base table. Inactive materialized views cannot be used for query acceleration or query rewrite. You can use this SQL to activate the materialized view after changing the base tables."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"INACTIVE"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"Set the status of the materialized view to inactive. An inactive asynchronous materialized view cannot be refreshed. But you can still query it as a table."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SWAP WITH"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"Perform an atomic exchange with another asynchronous materialized view after necessary consistency checks."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsxs)(n.td,{children:["The name of the property to alter, see ",(0,t.jsx)(n.a,{href:"/docs/sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW#parameters",children:"SQL Reference - CREATE MATERIALIZED VIEW - Parameters"})," for details.",(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"NOTE"}),(0,t.jsx)("br",{}),"If you want to alter a session variable-related property of the materialized view, you must add a ",(0,t.jsx)(n.code,{children:"session."})," prefix to the property, for example, ",(0,t.jsx)(n.code,{children:"session.query_timeout"}),". You do not need to specify the prefix for non-session properties, for example, ",(0,t.jsx)(n.code,{children:"mv_rewrite_staleness_second"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"no"}),(0,t.jsx)(n.td,{children:"The value of the property to alter."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example 1: Alter the name of the materialized view."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW lo_mv1 RENAME lo_mv1_new_name;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 2: Alter the refresh interval of the materialized view."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW lo_mv2 REFRESH ASYNC EVERY(INTERVAL 1 DAY);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example 3: Alter the materialized view's properties."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'-- Change mv1\'s query_timeout to 40000 seconds.\nALTER MATERIALIZED VIEW mv1 SET ("session.query_timeout" = "40000");\n-- Change mv1\'s mv_rewrite_staleness_second to 600 seconds.\nALTER MATERIALIZED VIEW mv1 SET ("mv_rewrite_staleness_second" = "600");\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example 4: Alter the materialized view's status to active."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv ACTIVE;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example 5: Perform an atomic exchange between materialized views ",(0,t.jsx)(n.code,{children:"order_mv"})," and ",(0,t.jsx)(n.code,{children:"order_mv1"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"ALTER MATERIALIZED VIEW order_mv SWAP WITH order_mv1;\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var t=s(67294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:l},n)}}}]);