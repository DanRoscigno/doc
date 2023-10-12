"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[48332],{18973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(85893),i=n(11151);const a={displayed_sidebar:"documentation"},r="DBeaver",o={id:"integrations/IDE_integrations/DBeaver",title:"DBeaver",description:"DBeaver is a SQL client software application and a database administration tool, which offers a helpful assistant that walks you through the process of connecting to a database.",source:"@site/versioned_docs/version-3.1/integrations/IDE_integrations/DBeaver.md",sourceDirName:"integrations/IDE_integrations",slug:"/integrations/IDE_integrations/DBeaver",permalink:"/doc/docs/integrations/IDE_integrations/DBeaver",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/integrations/IDE_integrations/DBeaver.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"documentation"},sidebar:"documentation",previous:{title:"DataGrip",permalink:"/doc/docs/integrations/IDE_integrations/DataGrip"},next:{title:"Integrate with other tools and systems",permalink:"/doc/docs/integrations/other_integrations/intro"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Integration",id:"integration",level:2}];function l(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",img:"img",ul:"ul",code:"code"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dbeaver",children:"DBeaver"}),"\n",(0,s.jsx)(t.p,{children:"DBeaver is a SQL client software application and a database administration tool, which offers a helpful assistant that walks you through the process of connecting to a database."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Make sure that you have installed DBeaver."}),"\n",(0,s.jsxs)(t.p,{children:["You can download the DBeaver Community edition at ",(0,s.jsx)(t.a,{href:"https://dbeaver.io/",children:"https://dbeaver.io"})," or the DBeaver PRO edition at ",(0,s.jsx)(t.a,{href:"https://dbeaver.com/",children:"https://dbeaver.com"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(t.p,{children:"Follow these steps to connect to a database:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Launch DBeaver."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the plus sign (",(0,s.jsx)(t.strong,{children:"+"}),") icon in the upper-left corner of the DBeaver window or choose ",(0,s.jsx)(t.strong,{children:"Database"})," > ",(0,s.jsx)(t.strong,{children:"New Database Connection"})," in the menu bar to access the assistant."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Access the assistant",src:n(97831).Z+"",width:"1280",height:"460"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Access the assistant",src:n(28977).Z+"",width:"1280",height:"420"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select the MySQL driver."}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Select your database"})," step, you are presented with a list of available drivers. Click ",(0,s.jsx)(t.strong,{children:"Analytical"})," in the left-side pane to quickly locate the MySQL driver. Then, double-click the ",(0,s.jsx)(t.strong,{children:"MySQL"})," icon."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Select your database",src:n(16419).Z+"",width:"1280",height:"1173"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Configure the connection to the database."}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"Connection Settings"})," step, go to the ",(0,s.jsx)(t.strong,{children:"Main"})," tab and configure the following essential connection settings:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Server Host"}),": the FE host IP address of your StarRocks cluster."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Port"}),": the FE query port of your StarRocks cluster, for example, ",(0,s.jsx)(t.code,{children:"9030"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Database"}),": the target database in your StarRocks cluster. Both internal and external databases are supported, but the functionality for external databases may be incomplete."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Username"}),": the username that is used to log in to your StarRocks cluster, for example, ",(0,s.jsx)(t.code,{children:"admin"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Password"}),": the password that is used to log in to your StarRocks cluster."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Connection Settings - Main tab",src:n(14559).Z+"",width:"1275",height:"1280"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also view and edit the properties of the MySQL driver on the ",(0,s.jsx)(t.strong,{children:"Driver properties"})," tab if necessary. To edit a specific property, click the row in the ",(0,s.jsx)(t.strong,{children:"Value"})," column for that property."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Connection Settings - Driver properties tab",src:n(33613).Z+"",width:"1280",height:"1173"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Test the connection to the database."}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Test Connection"})," to verify the accuracy of the connection settings. A dialog box displaying the MySQL driver's information appears. Click ",(0,s.jsx)(t.strong,{children:"OK"})," in the dialog box to confirm the information. After you have successfully configured the connection settings, click ",(0,s.jsx)(t.strong,{children:"Finish"})," to complete the process."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Test Connection",src:n(25313).Z+"",width:"1276",height:"1280"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Connect to the database."}),"\n",(0,s.jsx)(t.p,{children:"After the connection is established, you can view it in the left-side database connection tree and DBeaver can effectively connect to the database."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DBeaver - Connect database",src:n(90544).Z+"",width:"1280",height:"919"})}),"\n"]}),"\n"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},97831:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_1-0cdfa5e0fbf065c8520b49fb33113c84.png"},28977:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_2-0d9ee4b2c44a326772aa84f8e2ee2a36.png"},16419:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_3-f94e8c7a21c0a5c39665986b530b810b.png"},14559:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_4-f6bda1f31ef01db9a99093a05c94c7ba.png"},33613:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_5-825ea7e2d9a3166517b59a5601104fbd.png"},25313:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_6-d2beb1e4903b78b123fd645c910a941e.png"},90544:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/IDE_dbeaver_7-064deefce8e4b2f496118cd170baadb9.png"},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(i.Provider,{value:o},t)}}}]);