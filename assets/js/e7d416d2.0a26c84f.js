"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[60252],{81466:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=o(85893),r=o(11151);const n={displayed_sidebar:"English"},i="Stream Load",s={id:"faq/loading/Stream_load_faq",title:"Stream Load",description:"Does Stream Load identify the column name of the first row in a text file? Or can I specify the first row not to be read\uff1f",source:"@site/versioned_docs/version-2.1/faq/loading/Stream_load_faq.md",sourceDirName:"faq/loading",slug:"/faq/loading/Stream_load_faq",permalink:"/docs/2.1/faq/loading/Stream_load_faq",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/faq/loading/Stream_load_faq.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"Routine Load",permalink:"/docs/2.1/faq/loading/Routine_load_faq"},next:{title:"StarRocks",permalink:"/docs/2.1/introduction/StarRocks_intro"}},d={},l=[{value:"Does Stream Load identify the column name of the first row in a text file? Or can I specify the first row not to be read\uff1f",id:"does-stream-load-identify-the-column-name-of-the-first-row-in-a-text-file-or-can-i-specify-the-first-row-not-to-be-read",level:2},{value:"The data corresponding to the current partition key is not the standard date or int. It is in the format of 202106.00 for example. If Stream Load is needed to perform data import to StarRocks, how will the data be converted?",id:"the-data-corresponding-to-the-current-partition-key-is-not-the-standard-date-or-int-it-is-in-the-format-of-20210600-for-example-if-stream-load-is-needed-to-perform-data-import-to-starrocks-how-will-the-data-be-converted",level:2}];function c(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"stream-load",children:"Stream Load"}),"\n",(0,a.jsx)(t.h2,{id:"does-stream-load-identify-the-column-name-of-the-first-row-in-a-text-file-or-can-i-specify-the-first-row-not-to-be-read",children:"Does Stream Load identify the column name of the first row in a text file? Or can I specify the first row not to be read\uff1f"}),"\n",(0,a.jsx)(t.p,{children:"Stream Load cannot identify the column name of the first row as it is not differentiated from other data. Currently nor can it be specified to read the first rows. If users need to specify the first row of the file as the column name, they can do it in the following ways:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Modify settings in the export tool and export once again the text-based data files without column names."}),"\n",(0,a.jsx)(t.li,{children:"Use commands such as sed -i '1d' filename to delete the first rows in text files."}),"\n",(0,a.jsx)(t.li,{children:"Use -H \"where: \u5217\u540d != '\u5217\u540d\u79f0'\" in Stream Load statement to filter this column. When the first row strings cannot be converted to other types, they will be returned as NULL. Thus, this requires the table fields not to be set as NOT NULL."}),"\n",(0,a.jsx)(t.li,{children:'Add -H "max_filter_ratio:0.01" into Stream Load statement and based on the data volume give it a fault tolerance rate of 1% or below that could tolerate errors in the first row. After adding the tolerance rate, ErrorURL that returns results will still report errors but without affecting the success of overall tasks. The tolerance rate should not be set too high as it may miss other data issues.'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"the-data-corresponding-to-the-current-partition-key-is-not-the-standard-date-or-int-it-is-in-the-format-of-20210600-for-example-if-stream-load-is-needed-to-perform-data-import-to-starrocks-how-will-the-data-be-converted",children:"The data corresponding to the current partition key is not the standard date or int. It is in the format of 202106.00 for example. If Stream Load is needed to perform data import to StarRocks, how will the data be converted?"}),"\n",(0,a.jsx)(t.p,{children:'StarRocks supports data conversion during imports. You can refer to "4.7 data conversion during imports" in the enterprise edition.'}),"\n",(0,a.jsx)(t.p,{children:"Let's take Stream Load as an example, suppose the table TEST has four columns NO, DATE, VERSION and PRICE, and the exported CSV data file has the DATE field in the unstandardised 202106.00 format. If the partition column to be used in StarRocks is DATE, then first we need to create a table in StarRocks, specifying the DATE type as date, datetime or int. After that, in the Stream Load command, use this to achieve data conversion in the four columns:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",metastring:"text",children:'-H "columns: NO,DATE_1, VERSION, PRICE, DATE=LEFT(DATE_1,6)"\n'})}),"\n",(0,a.jsx)(t.p,{children:"DATE_1 can simply be thought of as a placeholder for the number to be taken and then converted by the function to the corresponding field in StarRocks. Note in particular that we need to list all the columns in the CSV data file before we perform the function conversion. Common functions are all available here."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}},11151:(e,t,o)=>{o.d(t,{Zo:()=>s,ah:()=>n});var a=o(67294);const r=a.createContext({});function n(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:o}){let s;return s=o?"function"==typeof e?e({}):e||i:n(e),a.createElement(r.Provider,{value:s},t)}}}]);