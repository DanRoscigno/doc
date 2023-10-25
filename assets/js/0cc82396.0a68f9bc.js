"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[89241],{80326:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var a=t(85893),i=t(11151);const n={displayed_sidebar:"English"},r="File manager",l={id:"using_starrocks/filemanager",title:"File manager",description:"With file manager, you can create, view, and delete files, such as the files that are used to access external data sources: public key files, private key files, and certificate files. You can reference or access the created files by using commands.",source:"@site/versioned_docs/version-2.1/using_starrocks/filemanager.md",sourceDirName:"using_starrocks",slug:"/using_starrocks/filemanager",permalink:"/docs/2.1/using_starrocks/filemanager",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/using_starrocks/filemanager.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Window function",permalink:"/docs/2.1/using_starrocks/Window_function"},next:{title:"Configure a time zone",permalink:"/docs/2.1/using_starrocks/timezone"}},c={},o=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Before you begin",id:"before-you-begin",level:2},{value:"Create a file",id:"create-a-file",level:2},{value:"View a file",id:"view-a-file",level:2},{value:"Delete a file",id:"delete-a-file",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",a:"a",blockquote:"blockquote"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"file-manager",children:"File manager"}),"\n",(0,a.jsx)(s.p,{children:"With file manager, you can create, view, and delete files, such as the files that are used to access external data sources: public key files, private key files, and certificate files. You can reference or access the created files by using commands."}),"\n",(0,a.jsx)(s.h2,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"File"}),": refers to the file that is created and saved in StarRocks. After a file is created and stored in StarRocks, StarRocks assigns a unique ID to the file. You can find a file based on the database name, catalog, and file name. In a database, only an admin user can create and delete files, and all users who have permissions to access a database can use the files that belong to the database."]}),"\n",(0,a.jsx)(s.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Configure the following parameters for each frontend (FE).","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"small_file_dir"}),": the path in which the uploaded files are stored. The default path is ",(0,a.jsx)(s.code,{children:"small_files/"}),", which is in the runtime directory of the FE. You need to specify this parameter in the ",(0,a.jsx)(s.strong,{children:"fe.conf"})," file and then restart the FE."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"max_small_file_size_bytes"}),": the maximum size of a single file. The default value of this parameter is 1 MB. If the size of a file exceeds the value of this parameter, the file cannot be created. You can specify this parameter by using the ",(0,a.jsx)(s.a,{href:"/docs/2.1/sql-reference/sql-statements/Administration/ADMIN_SET_CONFIG",children:"ADMIN SET CONFIG"})," statement."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"max_small_file_number"}),": the maximum number of files that can be created within a cluster. The default value of this parameter is 100. If the number of files that you have created reaches the value of this parameter, you cannot continue creating files. You can specify this parameter by using the ADMIN SET CONFIG statement."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Note: Increasing the values of the two parameters causes an increase in the memory usage of the FE. Therefore, we recommend that you do not increase the values of the two parameters unless necessary."}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Configure the following parameters for each backend (BE)."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"small_file_dir"}),": the path in which the downloaded files are stored. The default path is ",(0,a.jsx)(s.code,{children:"lib/small_files/"}),", which is in the runtime directory of the BE. You can specify this parameter in the ",(0,a.jsx)(s.strong,{children:"be.conf"})," file."]}),"\n",(0,a.jsx)(s.h2,{id:"create-a-file",children:"Create a file"}),"\n",(0,a.jsxs)(s.p,{children:["You can execute the CREATE FILE statement to create a file. For more information, see ",(0,a.jsx)(s.a,{href:"/docs/2.1/sql-reference/sql-statements/Administration/CREATE_FILE",children:"CREATE FILE"}),". After a file is created, the file is uploaded and persisted in StarRocks."]}),"\n",(0,a.jsx)(s.h2,{id:"view-a-file",children:"View a file"}),"\n",(0,a.jsxs)(s.p,{children:["You can execute the SHOW FILE statement to view the information about a file stored in a database. For more information, see ",(0,a.jsx)(s.a,{href:"/docs/2.1/sql-reference/sql-statements/Administration/SHOW_FILE",children:"SHOW FILE"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"delete-a-file",children:"Delete a file"}),"\n",(0,a.jsxs)(s.p,{children:["You can execute the DROP FILE statement to delete a file. For more information, see ",(0,a.jsx)(s.a,{href:"/docs/2.1/sql-reference/sql-statements/Administration/DROP_FILE",children:"DROP FILE"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>n});var a=t(67294);const i=a.createContext({});function n(e){const s=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:n(e),a.createElement(i.Provider,{value:l},s)}}}]);