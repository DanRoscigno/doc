"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[25246],{96317:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=r(85893),i=r(11151);const t={},o="DataX writer",l={id:"loading/DataX-starrocks-writer",title:"DataX writer",description:"Introduction",source:"@site/versioned_docs/version-3.1/loading/DataX-starrocks-writer.md",sourceDirName:"loading",slug:"/loading/DataX-starrocks-writer",permalink:"/docs/loading/DataX-starrocks-writer",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/loading/DataX-starrocks-writer.md",tags:[],version:"3.1",frontMatter:{}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Function Description",id:"function-description",level:2},{value:"Sample Configuration",id:"sample-configuration",level:3},{value:"Starrockswriter Parameter Description",id:"starrockswriter-parameter-description",level:2},{value:"Type conversion",id:"type-conversion",level:2},{value:"About time zone",id:"about-time-zone",level:2}];function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"datax-writer",children:"DataX writer"}),"\n",(0,s.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(e.p,{children:["The StarRocksWriter plugin allows writing data to StarRocks' destination table. Specifically,StarRocksWriter imports data to StarRocks in CSV or JSON format via ",(0,s.jsx)(e.a,{href:"/docs/loading/StreamLoad",children:"Stream Load"}),", and internally caches and bulk imports the data read by ",(0,s.jsx)(e.code,{children:"reader"})," to StarRocks for better write performance. The overall data flow is ",(0,s.jsx)(e.code,{children:"source -> Reader -> DataX channel -> Writer -> StarRocks"}),"."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/StarRocks/DataX/releases",children:"Download the plugin"})}),"\n",(0,s.jsxs)(e.p,{children:["Please go to ",(0,s.jsx)(e.code,{children:"https://github.com/alibaba/DataX"})," to download the full package of DataX, and put the starrockswriter plugin into the ",(0,s.jsx)(e.code,{children:"datax/plugin/writer/"})," directory."]}),"\n",(0,s.jsxs)(e.p,{children:["Use the following command to test:\n",(0,s.jsx)(e.code,{children:'python datax.py --jvm="-Xms6G -Xmx6G" --loglevel=debug job.json'})]}),"\n",(0,s.jsx)(e.h2,{id:"function-description",children:"Function Description"}),"\n",(0,s.jsx)(e.h3,{id:"sample-configuration",children:"Sample Configuration"}),"\n",(0,s.jsx)(e.p,{children:"Here is a configuration file for reading data from MySQL and loading it to StarRocks."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "job": {\n        "setting": {\n            "speed": {\n                 "channel": 1\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "xxxx",\n                        "password": "xxxx",\n                        "column": [ "k1", "k2", "v1", "v2" ],\n                        "connection": [\n                            {\n                                "table": [ "table1", "table2" ],\n                                "jdbcUrl": [\n                                     "jdbc:mysql://127.0.0.1:3306/datax_test1"\n                                ]\n                            },\n                            {\n                                "table": [ "table3", "table4" ],\n                                "jdbcUrl": [\n                                     "jdbc:mysql://127.0.0.1:3306/datax_test2"\n                                ]\n                            }\n                        ]\n                    }\n                },\n               "writer": {\n                    "name": "starrockswriter",\n                    "parameter": {\n                        "username": "xxxx",\n                        "password": "xxxx",\n                        "database": "xxxx",\n                        "table": "xxxx",\n                        "column": ["k1", "k2", "v1", "v2"],\n                        "preSql": [],\n                        "postSql": [], \n                        "jdbcUrl": "jdbc:mysql://172.28.17.100:9030/",\n                        "loadUrl": ["172.28.17.100:8030", "172.28.17.100:8030"],\n                        "loadProps": {}\n                    }\n                }\n            }\n        ]\n    }\n}\n\n'})}),"\n",(0,s.jsx)(e.h2,{id:"starrockswriter-parameter-description",children:"Starrockswriter Parameter Description"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"username"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: The user name of the StarRocks database"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: Yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default value: none"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"password"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: The password for the StarRocks database"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: Yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default: None"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"database"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: The name of the database for the StarRocks table."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: Yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default: None"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"table"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: The name of the table for the StarRocks table."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: Yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default: None"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"loadUrl"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Description: The address of the StarRocks FE for stream load, can be multiple FE addresses, in the form of ",(0,s.jsx)(e.code,{children:"fe_ip:fe_http_port"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default value: none"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"column"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Description: The fields of the destination table ",(0,s.jsx)(e.strong,{children:"that need to be written to the data"}),', with the columns separated by commas. Example: "column": ["id", "name", "age"].',"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"column configuration item must be specified and cannot be left blank."}),"\nNote: We strongly discourage you from leaving it empty, because your job may run incorrectly or fail when you change the number of columns, type, etc. of the destination table. The configuration items      must be in the same order as the querySQL or column in the reader."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: Yes"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default value: No"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"preSql"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: The standard statement will be executed before writing data to the destination table."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: No"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default: No"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"jdbcUrl"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Description: JDBC connection information of the destination database for executing ",(0,s.jsx)(e.code,{children:"preSql"})," and ",(0,s.jsx)(e.code,{children:"postSql"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: No"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default: No"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"loadProps"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Description: Request parameters for StreamLoad, refer to the StreamLoad introduction page for details."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Required: No"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Default value: No"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"type-conversion",children:"Type conversion"}),"\n",(0,s.jsxs)(e.p,{children:["By default, incoming data is converted to strings, with ",(0,s.jsx)(e.code,{children:"t"})," as column separator and ",(0,s.jsx)(e.code,{children:"n"})," as row separator, to form ",(0,s.jsx)(e.code,{children:"csv"})," files for StreamLoad import     .\nTo change the column separator, configure ",(0,s.jsx)(e.code,{children:"loadProps"})," properly."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"loadProps": {\n    "column_separator": "\\\\x01",\n    "row_delimiter": "\\\\x02" \n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["To change the import format to ",(0,s.jsx)(e.code,{children:"json"}),", configure ",(0,s.jsx)(e.code,{children:"loadProps"})," properly."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"loadProps": {\n    "format": "json",\n    "strip_outer_array": true\n}\n'})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"json"})," format is for the writer to import data to StarRocks in JSON format."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"about-time-zone",children:"About time zone"}),"\n",(0,s.jsx)(e.p,{children:"If the source tp library is in another time zone, when executing datax.py, add the following parameter after the command line"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"-Duser.timezone=xx"\n'})}),"\n",(0,s.jsx)(e.p,{children:'e.g. If DataX imports Postgrest data and the source library is in UTC time, add the parameter "-Duser.timezone=GMT+0" to startup.'})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>l,ah:()=>t});var s=r(67294);const i=s.createContext({});function t(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function l({components:n,children:e,disableParentContext:r}){let l;return l=r?"function"==typeof n?n({}):n||o:t(n),s.createElement(i.Provider,{value:l},e)}}}]);