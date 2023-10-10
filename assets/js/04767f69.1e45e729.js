"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[55654],{61360:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=i(85893),t=i(11151);const d={},r="window_funnel",c={id:"sql-reference/sql-functions/aggregate-functions/window_funnel",title:"window_funnel",description:"Description",source:"@site/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/window_funnel.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/window_funnel",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/window_funnel",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/sql-reference/sql-functions/aggregate-functions/window_funnel.md",tags:[],version:"3.1",frontMatter:{},sidebar:"documentation",previous:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/docs/sql-reference/sql-functions/aggregate-functions/variance"},next:{title:"all_match",permalink:"/docs/sql-reference/sql-functions/array-functions/all_match"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function a(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"window_funnel",children:"window_funnel"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Searches for an event chain in a sliding window and calculates the maximum number of consecutive events in the event chain. This function is commonly used for analyzing conversion rate. It is supported from v2.3."}),"\n",(0,s.jsx)(n.p,{children:"This function works according to the following rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It starts the count from the first event in the event chain. If the first event is found, the event counter is set to 1 and the sliding window starts. If the first event is not found, 0 is returned."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the sliding window, the counter is incremented if the events in the event chain occur in sequence. If the sliding window is exceeded, the event counter is no longer incremented."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If multiple event chains match the specified condition, the longest event chain is returned."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"BIGINT window_funnel(BIGINT window, DATE|DATETIME time, INT mode, array[cond1, cond2, ..., condN])\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"window"}),": The length of the sliding window. The supported data type is BIGINT. The unit depends on the ",(0,s.jsx)(n.code,{children:"time"})," parameter. If the data type of ",(0,s.jsx)(n.code,{children:"time"})," is DATE, the unit is days. If the data type of ",(0,s.jsx)(n.code,{children:"time"})," is DATETIME, the unit is seconds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"time"}),": The column containing timestamps. DATE and DATETIME types are supported."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mode"}),": The mode in which the event chain is filtered. The supported data type is INT. Value range: 0, 1, 2."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"})," is the default value, which indicates common funnel calculation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1"})," indicates the ",(0,s.jsx)(n.code,{children:"DEDUPLICATION"})," mode, that is, the filtered event chain cannot have repeated events. Suppose the ",(0,s.jsx)(n.code,{children:"array"})," parameter is ",(0,s.jsx)(n.code,{children:"[event_type = 'A', event_type = 'B', event_type = 'C', event_type = 'D']"}),' and the original event chain is "A-B-C-B-D". Event B is repeated and the filtered event chain is "A-B-C".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"2"})," indicates the ",(0,s.jsx)(n.code,{children:"FIXED"})," mode, that is, the filtered event chain cannot have events that disrupt the specified sequence. Suppose the previous ",(0,s.jsx)(n.code,{children:"array"}),' parameter is used and the original event chain is "A-B-D-C". Event D interrupts the sequence and the filtered event chain is "A-B".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"4"})," indicates the ",(0,s.jsx)(n.code,{children:"INCREASE"})," mode, which means the filtered events must have strictly increasing timestamps. Duplicate timestamp disrupts the event chain. This mode is supported since version 2.5."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"array"}),": The defined event chain. It must be an array."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a value of the BIGINT type."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 1"}),": Calculate the maximum number of consecutive events based on ",(0,s.jsx)(n.code,{children:"uid"}),". The sliding window is 1800s and the filtering mode is ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses table ",(0,s.jsx)(n.code,{children:"action"}),", in which data is sorted by ",(0,s.jsx)(n.code,{children:"uid"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select * from action;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | Browse     | 2020-01-02 11:00:00 |\n| 1    | Click      | 2020-01-02 11:10:00 |\n| 1    | Order      | 2020-01-02 11:20:00 |\n| 1    | Pay        | 2020-01-02 11:30:00 |\n| 1    | Browse     | 2020-01-02 11:00:00 |\n| 2    | Order      | 2020-01-02 11:00:00 |\n| 2    | Pay        | 2020-01-02 11:10:00 |\n| 3    | Browse     | 2020-01-02 11:20:00 |\n| 3    | Click      | 2020-01-02 12:00:00 |\n| 4    | Browse     | 2020-01-02 11:50:00 |\n| 4    | Click      | 2020-01-02 12:00:00 |\n| 5    | Browse     | 2020-01-02 11:50:00 |\n| 5    | Click      | 2020-01-02 12:00:00 |\n| 5    | Order      | 2020-01-02 11:10:00 |\n| 6    | Browse     | 2020-01-02 11:50:00 |\n| 6    | Click      | 2020-01-02 12:00:00 |\n| 6    | Order      | 2020-01-02 12:10:00 |\n+------+------------+---------------------+\n17 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1800,time,0,[event_type='Browse', event_type='Click', \n        event_type='Order', event_type='Pay']) AS level\nfrom action\ngroup by uid\norder by uid; \n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     4 |\n| 2    |     0 |\n| 3    |     1 |\n| 4    |     2 |\n| 5    |     2 |\n| 6    |     3 |\n+------+-------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Description of the results:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The matching event chain for ",(0,s.jsx)(n.code,{children:"uid = 1"}),' is "Browse-Click-Order-Pay", and ',(0,s.jsx)(n.code,{children:"4"}),' is returned. The time of the last "Browse" event (2020-01-02 11:00:00) does not meet the condition and is not counted.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The event chain of ",(0,s.jsx)(n.code,{children:"uid = 2"}),' does not start from the first event "Browse", and ',(0,s.jsx)(n.code,{children:"0"})," is returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The matching event chain for ",(0,s.jsx)(n.code,{children:"uid = 3"}),' is "Browse", and ',(0,s.jsx)(n.code,{children:"1"}),' is returned. The "Click" event exceeds the 1800s time window and is not counted.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The matching event chain for ",(0,s.jsx)(n.code,{children:"uid = 4"}),' is "Browse-Click", and ',(0,s.jsx)(n.code,{children:"2"})," is returned."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The matching event chain for ",(0,s.jsx)(n.code,{children:"uid = 5"}),' is "Browse-Click", and ',(0,s.jsx)(n.code,{children:"2"}),' is returned. The "Order" event (2020-01-02 11:10:00) does not belong to the event chain and is not counted.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The matching event chain for ",(0,s.jsx)(n.code,{children:"uid = 6"}),' is "Browse-Click-Order", and ',(0,s.jsx)(n.code,{children:"3"})," is returned."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 2"}),": Calculate the maximum number of consecutive events based on ",(0,s.jsx)(n.code,{children:"uid"}),". The sliding window is 1800s, and filtering modes ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"})," are used."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses table ",(0,s.jsx)(n.code,{children:"action1"}),", in which data is sorted by ",(0,s.jsx)(n.code,{children:"time"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select * from action1 order by time;\n+------+------------+---------------------+ \n| uid  | event_type | time                |     \n+------+------------+---------------------+\n| 1    | Browse     | 2020-01-02 11:00:00 |\n| 2    | Browse     | 2020-01-02 11:00:01 |\n| 1    | Click      | 2020-01-02 11:10:00 |\n| 1    | Order      | 2020-01-02 11:29:00 |\n| 1    | Click      | 2020-01-02 11:29:50 |\n| 1    | Pay        | 2020-01-02 11:30:00 |\n| 1    | Click      | 2020-01-02 11:40:00 |\n+------+------------+---------------------+\n7 rows in set (0.03 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1800,time,0,[event_type='Browse', \n        event_type='Click', event_type='Order', event_type='Pay']) AS level\nfrom action1\ngroup by uid\norder by uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     4 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"uid = 1"}),', the "Click" event (2020-01-02 11:29:50) is a repeated event but it is still counted because mode ',(0,s.jsx)(n.code,{children:"0"})," is used. Therefore, ",(0,s.jsx)(n.code,{children:"4"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"mode"})," to ",(0,s.jsx)(n.code,{children:"1"})," and execute the statement again."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     3 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.05 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:['The longest event chain filtered after deduplication is "Browse-Click-Order", and ',(0,s.jsx)(n.code,{children:"3"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 3"}),": Calculate the maximum number of consecutive events based on ",(0,s.jsx)(n.code,{children:"uid"}),". The sliding window is 1900s, and filter modes ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"2"})," are used."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses table ",(0,s.jsx)(n.code,{children:"action2"}),", in which data is sorted by ",(0,s.jsx)(n.code,{children:"time"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"mysql> select * from action2 order by time;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | Browse     | 2020-01-02 11:00:00 |\n| 2    | Browse     | 2020-01-02 11:00:01 |\n| 1    | Click      | 2020-01-02 11:10:00 |\n| 1    | Pay        | 2020-01-02 11:30:00 |\n| 1    | Order      | 2020-01-02 11:31:00 |\n+------+------------+---------------------+\n5 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1900,time,0,[event_type='Browse', event_type='Click', \n        event_type='Order', event_type='Pay']) AS level\nfrom action2\ngroup by uid\norder by uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     3 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"3"})," is returned for ",(0,s.jsx)(n.code,{children:"uid = 1"})," because mode ",(0,s.jsx)(n.code,{children:"0"}),' is used and the "Pay" event (2020-01-02 11:30:00) does not disrupt the event chain.']}),"\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"mode"})," to ",(0,s.jsx)(n.code,{children:"2"})," and execute the statement again."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1900,time,2,[event_type='Browse', event_type='Click', \n        event_type='Order', event_type='Pay']) AS level\nfrom action2\ngroup by uid\norder by uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n| 1    |     2 |\n| 2    |     1 |\n+------+-------+\n2 rows in set (0.06 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"2"}),' is returned because the "Pay" event disrupts the event chain and the event counter stops. The filtered event chain is "Browse-Click".']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 4"}),": Calculate the maximum number of consecutive events based on ",(0,s.jsx)(n.code,{children:"uid"}),". The sliding window is 1900s, and filter modes ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"4"})," are used."]}),"\n",(0,s.jsxs)(n.p,{children:["This example uses table ",(0,s.jsx)(n.code,{children:"action3"}),", in which data is sorted by ",(0,s.jsx)(n.code,{children:"time"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select * from action3 order by time;\n+------+------------+---------------------+\n| uid  | event_type | time                |\n+------+------------+---------------------+\n| 1    | Browse     | 2020-01-02 11:00:00 |\n| 1    | Click      | 2020-01-02 11:00:01 |\n| 2    | Browse     | 2020-01-02 11:00:03 |\n| 1    | Order      | 2020-01-02 11:00:31 |\n| 2    | Click      | 2020-01-02 11:00:03 |\n| 2    | Order      | 2020-01-02 11:01:03 |\n+------+------------+---------------------+\n3 rows in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Execute the following statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1900,time,0,[event_type='Browse', event_type='Click',\n        event_type='Order']) AS level\nfrom action3\ngroup by uid\norder by uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n|    1 |     3 |\n|    2 |     3 |\n+------+-------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"3"})," is returned for ",(0,s.jsx)(n.code,{children:"uid = 1"})," and ",(0,s.jsx)(n.code,{children:"uid = 2"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Change ",(0,s.jsx)(n.code,{children:"mode"})," to ",(0,s.jsx)(n.code,{children:"4"})," and execute the statement again."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plaintext",children:"select uid,\n       window_funnel(1900,time,4,[event_type='Browse', event_type='Click',\n        event_type='Order']) AS level\nfrom action3\ngroup by uid\norder by uid;\n+------+-------+\n| uid  | level |\n+------+-------+\n|    1 |     3 |\n|    2 |     1 |\n+------+-------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"1"})," is returned for ",(0,s.jsx)(n.code,{children:"uid = 2"})," because mode ",(0,s.jsx)(n.code,{children:"4"}),' (strictly increasing) is used. "Click" happens at the same second as "BROWSE". Therefore, "Click" and "Order" are not counted.']}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"window funnel, funnel, window_funnel"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},11151:(e,n,i)=>{i.d(n,{Zo:()=>c,ah:()=>d});var s=i(67294);const t=s.createContext({});function d(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:i}){let c;return c=i?"function"==typeof e?e({}):e||r:d(e),s.createElement(t.Provider,{value:c},n)}}}]);