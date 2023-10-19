"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[57322],{58304:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(85893),n=a(11151),i=a(83698);const s={displayed_sidebar:"English"},o="StarRocks",c={id:"introduction/StarRocks_intro",title:"StarRocks",description:"StarRocks is a next-gen, high-performance analytical data warehouse that enables real-time, multi-dimensional, and highly concurrent data analysis. StarRocks has an MPP architecture and is equipped with a fully vectorized execution engine, a columnar storage engine that supports real-time updates, and is powered by a rich set of features including a fully-customized cost-based optimizer (CBO), intelligent materialized view and more. StarRocks supports real-time and batch data ingestion from a variety of data sources. It also allows you to directly analyze data stored in data lakes with zero data migration.",source:"@site/versioned_docs/version-3.1/introduction/StarRocks_intro.md",sourceDirName:"introduction",slug:"/introduction/StarRocks_intro",permalink:"/docs/introduction/StarRocks_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/introduction/StarRocks_intro.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",next:{title:"Introduction to StarRocks",permalink:"/docs/category/introduction-to-starrocks"}},l={},d=[{value:"Popular topics",id:"popular-topics",level:3}];function u(t){const e=Object.assign({h1:"h1",p:"p",a:"a",hr:"hr",h3:"h3"},(0,n.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"starrocks",children:"StarRocks"}),"\n","\n","\n",(0,r.jsx)(e.p,{children:"StarRocks is a next-gen, high-performance analytical data warehouse that enables real-time, multi-dimensional, and highly concurrent data analysis. StarRocks has an MPP architecture and is equipped with a fully vectorized execution engine, a columnar storage engine that supports real-time updates, and is powered by a rich set of features including a fully-customized cost-based optimizer (CBO), intelligent materialized view and more. StarRocks supports real-time and batch data ingestion from a variety of data sources. It also allows you to directly analyze data stored in data lakes with zero data migration."}),"\n",(0,r.jsx)(e.p,{children:"StarRocks is also compatible with MySQL protocols and can be easily connected using MySQL clients and popular BI tools. StarRocks is highly scalable, available, and easy to maintain. It is widely adopted in the industry, powering a variety of OLAP scenarios, such as real-time analytics, ad-hoc queries, data lake analytics and more."}),"\n",(0,r.jsxs)(e.p,{children:["Join our ",(0,r.jsx)(e.a,{href:"https://join.slack.com/t/starrocks/shared_invite/zt-z5zxqr0k-U5lrTVlgypRIV8RbnCIAzg",children:"Slack channel"})," for live support, discussion, or latest community news. You can also follow us on ",(0,r.jsx)(e.a,{href:"https://www.linkedin.com/company/starrocks",children:"LinkedIn"})," to get first-hand updates on new features, events, and sharing."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"popular-topics",children:"Popular topics"}),"\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(e.hr,{})]})}const h=function(t={}){const{wrapper:e}=Object.assign({},(0,n.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(u,t)})):u(t)}},83698:(t,e,a)=>{a.d(e,{Z:()=>d});var r=a(86010),n=a(92503);const i={features:"features_ez_S",featureSvg:"featureSvg_bdXF"};a(67294);var s=a(39960),o=(a(43827),a(85893));const c=[{title:"Introduction",url:"../category/introduction-to-starrocks",description:(0,o.jsx)(o.Fragment,{children:"OLAP, features, architecture"})},{title:"Quick Start",url:"../quick_start",description:(0,o.jsx)(o.Fragment,{children:"Get up and running quickly."})},{title:"Data Loading",url:"../loading/Loading_intro",description:(0,o.jsx)(o.Fragment,{children:"Clean, transform, and load"})},{title:"Table Design",url:"../table_design/StarRocks_table_design",description:(0,o.jsx)(o.Fragment,{children:"Tables, indexing, acceleration"})},{title:"Data Lakes",url:"../category/query-data-lakes",description:(0,o.jsx)(o.Fragment,{children:"Iceberg, Hive, Delta Lake, \u2026"})},{title:"Work with semi-structured data",url:"../category/semi-structured",description:(0,o.jsx)(o.Fragment,{children:"JSON, map, struct, array"})},{title:"Integrations",url:"../category/integrations",description:(0,o.jsx)(o.Fragment,{children:"BI tools, IDEs, Cloud authentication, \u2026"})},{title:"Administration",url:"../category/administration",description:(0,o.jsx)(o.Fragment,{children:"Scale, backups, roles and privileges, \u2026"})},{title:"Reference",url:"../category/reference",description:(0,o.jsx)(o.Fragment,{children:"SQL, functions, error codes, \u2026"})},{title:"FAQs",url:"../category/faq",description:(0,o.jsx)(o.Fragment,{children:"Frequently asked questions."})},{title:"Benchmarks",url:"../category/benchmarks",description:(0,o.jsx)(o.Fragment,{children:"DB performance comparison benchmarks."})}];function l(t){let{url:e,title:a,description:i}=t;return(0,o.jsx)("div",{className:(0,r.Z)("col col--6 margin-bottom--lg"),children:(0,o.jsx)(s.Z,{href:e,target:"_self",className:"card padding--lg cardContainer_fWXF",children:(0,o.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,o.jsx)(n.Z,{as:"h3",children:a}),(0,o.jsx)("p",{children:i})]})})})}function d(){return(0,o.jsx)("section",{className:i.features,children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:c.map(((t,e)=>(0,o.jsx)(l,{...t},e)))})})})}},11151:(t,e,a)=>{a.d(e,{Zo:()=>o,ah:()=>i});var r=a(67294);const n=r.createContext({});function i(t){const e=r.useContext(n);return r.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const s={};function o({components:t,children:e,disableParentContext:a}){let o;return o=a?"function"==typeof t?t({}):t||s:i(t),r.createElement(n.Provider,{value:o},e)}}}]);