"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[29288],{33374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(85893),s=i(11151);const o={displayed_sidebar:"English"},r="Configure a time zone",a={id:"using_starrocks/timezone",title:"Configure a time zone",description:"This topic describes how to configure a time zone.",source:"@site/versioned_docs/version-2.0/using_starrocks/timezone.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/timezone",permalink:"/docs/2.0/using_starrocks/timezone",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/timezone.md",tags:[],version:"2.0",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"File manager",permalink:"/docs/2.0/using_starrocks/filemanager"}},c={},d=[{value:"Configure a session-level time zone or a global time zone",id:"configure-a-session-level-time-zone-or-a-global-time-zone",level:2},{value:"Time zone format",id:"time-zone-format",level:3},{value:"Default time zone",id:"default-time-zone",level:3},{value:"View time zone settings",id:"view-time-zone-settings",level:2},{value:"Impacts of time zone settings",id:"impacts-of-time-zone-settings",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",a:"a"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"configure-a-time-zone",children:"Configure a time zone"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to configure a time zone."}),"\n",(0,n.jsx)(t.h2,{id:"configure-a-session-level-time-zone-or-a-global-time-zone",children:"Configure a session-level time zone or a global time zone"}),"\n",(0,n.jsx)(t.p,{children:"You can configure a time zone by using the following parameter:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"time_zone"}),": the time zone of a frontend (FE). You can specify a session-level time zone or a global time zone:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To specify a session-level time zone, execute the command ",(0,n.jsx)(t.code,{children:"SET time_zone = 'xxx'"}),". You can set different time zones for different sessions. The time zone setting becomes invalid if you disconnect with the FE."]}),"\n",(0,n.jsxs)(t.li,{children:["To specify a global time zone, execute the command ",(0,n.jsx)(t.code,{children:"SET global time_zone = 'xxx'"}),". When you specify a global time zone for an FE, the time zone setting is effective for all the FEs within your cluster. The time zone setting is persisted in FEs. The time zone setting is still valid if you disconnect with FEs."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: Before you load data into StarRocks, modify the value of the global ",(0,n.jsx)(t.code,{children:"time_zone"})," parameter for an FE to the same value of the ",(0,n.jsx)(t.code,{children:"system_time_zone"})," parameter for the machine. Otherwise, after data loading, the values of the fields of the DATE data type are incorrect. The ",(0,n.jsx)(t.code,{children:"system_time_zone"})," parameter refers to the time zone of the machine that is used to install an FE. When the machine is started, the time zone of the machine is recorded as the value of this parameter. You cannot manually configure this parameter."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"time-zone-format",children:"Time zone format"}),"\n",(0,n.jsxs)(t.p,{children:["The value of the ",(0,n.jsx)(t.code,{children:"time_zone"})," parameter is not case-sensitive. The value of the parameter can be in one of the following formats."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Format"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Example"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UTC offset"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SET time_zone = '+10:00'"})," ",(0,n.jsx)(t.code,{children:"SET global time_zone = '-6:00'"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Time zone name"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SET time_zone = 'Asia/Shanghai'"})," ",(0,n.jsx)(t.code,{children:"SET global time_zone = 'America/Los-Angelas'"})]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"List of tz database time zones"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: Time zone abbreviations are not supported except for CST. If you set the value of ",(0,n.jsx)(t.code,{children:"time_zone"})," as ",(0,n.jsx)(t.code,{children:"CST"}),", StarRocks converts ",(0,n.jsx)(t.code,{children:"CST"})," into ",(0,n.jsx)(t.code,{children:"Asia/Shanghai"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"default-time-zone",children:"Default time zone"}),"\n",(0,n.jsxs)(t.p,{children:["The default value of the ",(0,n.jsx)(t.code,{children:"time_zone"})," parameter is ",(0,n.jsx)(t.code,{children:"Asia/Shanghai"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"view-time-zone-settings",children:"View time zone settings"}),"\n",(0,n.jsxs)(t.p,{children:["To view the time zone setting, execute the command: ",(0,n.jsx)(t.code,{children:"SHOW variables like '%time_zone%'"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"impacts-of-time-zone-settings",children:"Impacts of time zone settings"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Time zone settings affect the time values that are returned by the SHOW LOAD and SHOW BACKENDS statement. However, the settings do not affect the value of ",(0,n.jsx)(t.code,{children:"LESS THAN"})," of the partitioning columns (in DATE or DATETIME data type) specified in CREATE TABLE statement and the display of the values stored as the DATE or DATETIME data types."]}),"\n",(0,n.jsxs)(t.li,{children:["The setting of time zone affects the display and storage of the following functions:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"FROM_UNIXTIME"}),": returns a date and time of your specified time zone based on a specified UTC timestamp. For example, if the value of the ",(0,n.jsx)(t.code,{children:"time_zone"})," parameter is ",(0,n.jsx)(t.code,{children:"Asia/Shanghai"}),", ",(0,n.jsx)(t.code,{children:"FROM_UNIXTIME(0)"})," returns ",(0,n.jsx)(t.code,{children:"1970-01-01 08:00:00"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"UNIX_TIMESTAMP"}),": returns a UTC timestamp based on the date and time of your specified time zone. For example, if the value of the ",(0,n.jsx)(t.code,{children:"time_zone"})," parameter is ",(0,n.jsx)(t.code,{children:"Asia/Shanghai"}),", ",(0,n.jsx)(t.code,{children:"UNIX_TIMESTAMP('1970-01-01 08:00:00')"})," returns ",(0,n.jsx)(t.code,{children:"0"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"CURTIME"}),": returns the current time of your specified time zone. For example, if the current time of a specified time zone is 16:34:05. ",(0,n.jsx)(t.code,{children:"CURTIME()"})," returns ",(0,n.jsx)(t.code,{children:"16:34:05"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"NOW"}),": returns the current date and time of your specified time zone. For example, if the current date and time of a specified time zone is 2021-02-11 16:34:13, ",(0,n.jsx)(t.code,{children:"NOW()"})," returns ",(0,n.jsx)(t.code,{children:"2021-02-11 16:34:13"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"CONVERT_TZ"}),": convert the date and time from one time zone to another. For example, ",(0,n.jsx)(t.code,{children:"CONVERT_TZ('2021-08-01 11:11:11', 'Asia/Shanghai', 'America/Los_Angeles');"})," returns ",(0,n.jsx)(t.code,{children:"2021-07-31 20:11:11"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,i)=>{i.d(t,{Zo:()=>a,ah:()=>o});var n=i(67294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||r:o(e),n.createElement(s.Provider,{value:a},t)}}}]);