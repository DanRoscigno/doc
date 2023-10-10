"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[67311],{72977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={},o="Integrate Jupyter with StarRocks",r={id:"integrations/other_integrations/jupysql",title:"Integrate Jupyter with StarRocks",description:"This guide describes how to integrate your StarRocks cluster with Jupyter, the latest web-based interactive development environment for notebooks, code, and data.",source:"@site/versioned_docs/version-3.1/integrations/other_integrations/jupysql.md",sourceDirName:"integrations/other_integrations",slug:"/integrations/other_integrations/jupysql",permalink:"/docs/integrations/other_integrations/jupysql",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/integrations/other_integrations/jupysql.md",tags:[],version:"3.1",frontMatter:{}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Connecting to StarRocks via Jupysql",id:"connecting-to-starrocks-via-jupysql",level:2},{value:"Saving and loading queries",id:"saving-and-loading-queries",level:2},{value:"Plotting directly on StarRocks",id:"plotting-directly-on-starrocks",level:2}];function d(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"integrate-jupyter-with-starrocks",children:"Integrate Jupyter with StarRocks"}),"\n",(0,s.jsxs)(t.p,{children:["This guide describes how to integrate your StarRocks cluster with ",(0,s.jsx)(t.a,{href:"https://jupyter.org/",children:"Jupyter"}),", the latest web-based interactive development environment for notebooks, code, and data.\nAll of this is made possible via ",(0,s.jsx)(t.a,{href:"https://jupysql.ploomber.io/",children:"Jupysql"})," which allows you to run SQL and plot large datasets in Jupyter via a %sql, %%sql, and %sqlplot magics."]}),"\n",(0,s.jsx)(t.p,{children:"We will use Jupysql on top of Jupyter to run queries on top of StarRocks.\nOnce the data is loaded into the cluster, we'll query & visualize it via SQL plotting."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before getting started, you must have the following software installed locally:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://jupysql.ploomber.io/en/latest/quick-start.html",children:"Jupysql"}),": ",(0,s.jsx)(t.code,{children:"pip install jupysql"})]}),"\n",(0,s.jsxs)(t.li,{children:["Jupyterlab: ",(0,s.jsx)(t.code,{children:"pip install jupyterlab"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/ploomber/sklearn-evaluation",children:"SKlearn Evaluation"}),": ",(0,s.jsx)(t.code,{children:"pip install sklearn-evaluation"})]}),"\n",(0,s.jsx)(t.li,{children:"Python"}),"\n",(0,s.jsxs)(t.li,{children:["pymysql: ",(0,s.jsx)(t.code,{children:"pip install pymysql"})]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"NOTE"})}),"\n",(0,s.jsxs)(t.p,{children:["Once we have our requirements we can open jupyter lab simply by calling ",(0,s.jsx)(t.code,{children:"jupyterlab"})," - this will open the notebook interface.\nIf already running in a notebook, you can simply run the cell bellow to get the dependencies."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Install required packages\n%pip install --quiet jupysql sklearn-evaluation pymysql\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note: you may need to restart the kernel to use updated packages."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import pandas as pd\nfrom sklearn_evaluation import plot\n\n# Import jupysql Jupyter extension to create SQL cells\n%load_ext sql\n%config SqlMagic.autocommit=False\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You'd need to make sure your StarRocks instance is up and reachable for the next stages."})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You will need to adjust the connection string according to the instance type you're trying to connect to (url, user, password). In the example below we've used a local instance. To learn more about it, check out ",(0,s.jsx)(t.a,{href:"/docs/introduction/StarRocks_intro",children:"Introduction to StarRocks"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"connecting-to-starrocks-via-jupysql",children:"Connecting to StarRocks via Jupysql"}),"\n",(0,s.jsx)(t.p,{children:"In this example, we've used a docker instance and that's reflecting the data in the connection string.\nWe'll use root to connect to our local StarRocks instance.\nWe can then create a database and check we can actually read and write data into it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"%sql mysql+pymysql://root:@localhost:9030\n"})}),"\n",(0,s.jsx)(t.p,{children:"And now we create and use that jupysql database:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"%sql CREATE DATABASE jupysql;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"%sql USE jupysql;\n"})}),"\n",(0,s.jsx)(t.p,{children:"We can then create the table:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'%%sql\nCREATE TABLE tbl(c1 int, c2 int) distributed by hash(c1) properties ("replication_num" = "1");\nINSERT INTO tbl VALUES (1, 10), (2, 20), (3, 30);\nSELECT * FROM tbl;\n'})}),"\n",(0,s.jsx)(t.h2,{id:"saving-and-loading-queries",children:"Saving and loading queries"}),"\n",(0,s.jsx)(t.p,{children:"Now once we've created a database, we can write some sample data into it and query it.\nJupySQL allows you to break queries into multiple cells, simplifying the process of building large queries.\nIt allows us to write complex queries, save them and execute them when needed, in a similar manner to CTEs in SQL."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# This is pending for the next Jupysql release\n%%sql --save initialize-table --no-execute\nCREATE TABLE tbl(c1 int, c2 int) distributed by hash(c1) properties ("replication_num" = "1");\nINSERT INTO tbl VALUES (1, 1), (2, 2), (3, 3);\nSELECT * FROM tbl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note: ",(0,s.jsx)(t.code,{children:"--save"})," stores the query, not the data."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that we are using ",(0,s.jsx)(t.code,{children:"--with;"})," this will retrieve previously saved queries, and prepend them (using CTEs), then, we save the query in track_fav."]}),"\n",(0,s.jsx)(t.h2,{id:"plotting-directly-on-starrocks",children:"Plotting directly on StarRocks"}),"\n",(0,s.jsx)(t.p,{children:"Jupysql comes with a few plots by default, allowing the user to visualize the data directly in SQL.\nWe can use a bar plot to visualize the data in our newly created table:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"top_artist = %sql SELECT * FROM tbl\ntop_artist.bar()\n"})}),"\n",(0,s.jsx)(t.p,{children:"We can note we now have a new bar plot without any extra code."}),"\n",(0,s.jsx)(t.p,{children:"We hope you enjoyed this guide, now you can run SQL directly from your notebook via Jupysql (by ploomber).\nThis adds lots of possibilities around StarRocks for Data scientists and Engineers.\nIn case you got stuck or need any support, please reach out to us via slack."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var s=n(67294);const i=s.createContext({});function a(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:a(e),s.createElement(i.Provider,{value:r},t)}}}]);