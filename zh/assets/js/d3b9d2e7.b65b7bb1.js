"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[41929],{28937:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(85893),r=s(11151);const t={displayed_sidebar:"Chinese31"},a="\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1",l={id:"administration/Authentication",title:"\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1 (authentication)\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.1/administration/Authentication.md",sourceDirName:"administration",slug:"/administration/Authentication",permalink:"/doc/zh/docs/administration/Authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/tree/main/versioned_docs/version-3.1/administration/Authentication.md",tags:[],version:"3.1",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u6743\u9650\u7cfb\u7edf FAQ",permalink:"/doc/zh/docs/administration/privilege_faq"},next:{title:"\u6027\u80fd\u8c03\u4f18",permalink:"/doc/zh/docs/category/\u6027\u80fd\u8c03\u4f18"}},c={},d=[{value:"\u8bbe\u7f6e LDAP \u8ba4\u8bc1",id:"\u8bbe\u7f6e-ldap-\u8ba4\u8bc1",level:2},{value:"\u5f00\u542f LDAP \u8ba4\u8bc1",id:"\u5f00\u542f-ldap-\u8ba4\u8bc1",level:3},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u8ba4\u8bc1\u7528\u6237",id:"\u8ba4\u8bc1\u7528\u6237",level:3}];function o(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",strong:"strong",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1",children:"\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 StarRocks \u4e2d\u8bbe\u7f6e\u7528\u6237\u8ba4\u8bc1 (authentication)\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8bbe\u7f6e-ldap-\u8ba4\u8bc1",children:"\u8bbe\u7f6e LDAP \u8ba4\u8bc1"}),"\n",(0,i.jsx)(e.p,{children:"\u9664\u4f20\u7edf\u7528\u6237\u540d+\u5bc6\u7801\u8ba4\u8bc1\u65b9\u5f0f\u5916\uff0cStarRocks \u8fd8\u652f\u6301 Lightweight Directory Access Protocol\uff08LDAP\uff09\u8ba4\u8bc1\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u5f00\u542f-ldap-\u8ba4\u8bc1",children:"\u5f00\u542f LDAP \u8ba4\u8bc1"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 FE \u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,i.jsx)(e.strong,{children:"fe.conf"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-conf",children:"# \u6dfb\u52a0 LDAP \u670d\u52a1 IP \u5730\u5740\u3002\r\nauthentication_ldap_simple_server_host =\r\n# \u6dfb\u52a0 LDAP \u670d\u52a1\u7aef\u53e3\u3002\r\nauthentication_ldap_simple_server_port =\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u5e0c\u671b\u901a\u8fc7 StarRocks \u76f4\u63a5\u5728 LDAP \u7cfb\u7edf\u4e2d\u68c0\u7d22\u7528\u6237\u7684\u65b9\u5f0f\u8ba4\u8bc1\u767b\u5f55\u7684\u7528\u6237\uff0c\u60a8\u8fd8\u9700\u8981",(0,i.jsx)(e.strong,{children:"\u989d\u5916\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879"}),"\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-conf",children:"# \u6dfb\u52a0\u7528\u6237\u7684 Base DN\uff0c\u6307\u5b9a\u7528\u6237\u7684\u68c0\u7d22\u8303\u56f4\u3002\r\nauthentication_ldap_simple_bind_base_dn =\r\n# \u6dfb\u52a0 LDAP \u5bf9\u8c61\u4e2d\u6807\u8bc6\u7528\u6237\u7684\u5c5e\u6027\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a uid\u3002\r\nauthentication_ldap_simple_user_search_attr =\r\n# \u6dfb\u52a0\u68c0\u7d22\u7528\u6237\u65f6\u4f7f\u7528\u7684\u7ba1\u7406\u5458\u8d26\u53f7 DN\u3002\r\nauthentication_ldap_simple_bind_root_dn =\r\n# \u6dfb\u52a0\u68c0\u7d22\u7528\u6237\u65f6\uff0c\u4f7f\u7528\u7684\u7ba1\u7406\u5458\u8d26\u53f7\u5bc6\u7801\u3002\r\nauthentication_ldap_simple_bind_root_pwd =\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u521b\u5efa\u7528\u6237",children:"\u521b\u5efa\u7528\u6237"}),"\n",(0,i.jsx)(e.p,{children:"\u5b8c\u6210\u4ee5\u4e0a\u914d\u7f6e\u540e\uff0c\u60a8\u8fd8\u9700\u8981\u5728 StarRocks \u4e2d\u521b\u5efa\u76f8\u5e94\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u5176\u8ba4\u8bc1\u65b9\u5f0f\u53ca\u8ba4\u8bc1\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE USER user_identity IDENTIFIED WITH authentication_ldap_simple [AS 'ldap_distinguished_name'];\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa LDAP \u8ba4\u8bc1\u7528\u6237 zhangsan\uff0cLDAP Distinguished Name\uff08DN\uff09\u4e3a \u201cuid=zhansan,ou=company,dc=example,dc=com\u201d\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE USER zhangsan IDENTIFIED WITH authentication_ldap_simple AS 'uid=zhansan,ou=company,dc=example,dc=com'\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u5e0c\u671b\u901a\u8fc7 StarRocks \u76f4\u63a5\u5728 LDAP \u7cfb\u7edf\u4e2d\u68c0\u7d22\u7528\u6237\u7684\u65b9\u5f0f\u8ba4\u8bc1\u767b\u5f55\u7684\u7528\u6237\uff0c\u5219\u5728\u5b8c\u6210\u4ee5\u4e0a",(0,i.jsx)(e.strong,{children:"\u989d\u5916\u914d\u7f6e\u540e"}),"\uff0c\u60a8\u65e0\u9700\u5728\u521b\u5efa\u7528\u6237\u65f6\u6307\u5b9a\u7528\u6237\u5728 LDAP \u4e2d\u7684 DN\u3002\u8be5\u7528\u6237\u5728\u767b\u5f55\u65f6\uff0cStarRocks \u5c06\u5728 LDAP \u7cfb\u7edf\u4e2d\u68c0\u7d22\u8be5\u7528\u6237\uff0c\u5982\u679c\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u5339\u914d\u7ed3\u679c\uff0c\u5219\u8ba4\u8bc1\u6210\u529f\u679c\u3002"]}),"\n",(0,i.jsx)(e.h3,{id:"\u8ba4\u8bc1\u7528\u6237",children:"\u8ba4\u8bc1\u7528\u6237"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 LDAP \u8ba4\u8bc1\u65f6\uff0c\u60a8\u9700\u8981\u901a\u8fc7\u5ba2\u6237\u7aef\u4f20\u9012\u660e\u6587\u5bc6\u7801\u7ed9 StarRocks\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5178\u578b\u5ba2\u6237\u7aef\u914d\u7f6e\u660e\u6587\u5bc6\u7801\u4f20\u9012\u7684\u65b9\u5f0f\u5305\u62ec\u4ee5\u4e0b\u4e09\u79cd\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"MySQL \u5ba2\u6237\u7aef"})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"mysql -u<user_identity> -P<query_port> -h<fe_host> -p --default-auth mysql_clear_password --enable-cleartext-plugin\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"mysql -uzhangsan -P9030 -h127.0.0.1 -p --default-auth mysql_clear_password --enable-cleartext-plugin\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"JDBC"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e JDBC \u9ed8\u8ba4\u7684 MysqlClearPasswordPlugin \u9700\u8981\u4f7f\u7528 SSL \u4f20\u8f93\uff0c\u6240\u4ee5\u60a8\u9700\u8981\u81ea\u5b9a\u4e49 plugin\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class MysqlClearPasswordPluginWithoutSSL extends MysqlClearPasswordPlugin {\r\n    @Override  \r\n    public boolean requiresConfidentiality() {\r\n        return false;\r\n    }\r\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u83b7\u53d6\u8fde\u63a5\u65f6\uff0c\u60a8\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u7684 plugin \u914d\u7f6e\u5230\u5c5e\u6027\u4e2d\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'...\r\nProperties properties = new Properties();// replace xxx.xxx.xxx to your pacakage name\r\nproperties.put("authenticationPlugins", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\r\nproperties.put("defaultAuthenticationPlugin", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\r\nproperties.put("disabledAuthenticationPlugins", "com.mysql.jdbc.authentication.MysqlNativePasswordPlugin");DriverManager.getConnection(url, properties);\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"ODBC"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u60a8\u9700\u8981\u5728 ODBC \u7684 DSN \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5e76\u914d\u4e0a\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-conf",children:"default_auth = mysql_clear_password\r\nENABLE_CLEARTEXT_PLUGIN = 1\n"})})]})}const h=function(n={}){const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(o,n)})):o(n)}},11151:(n,e,s)=>{s.d(e,{Zo:()=>l,ah:()=>t});var i=s(67294);const r=i.createContext({});function t(n){const e=i.useContext(r);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function l({components:n,children:e,disableParentContext:s}){let l;return l=s?"function"==typeof n?n({}):n||a:t(n),i.createElement(r.Provider,{value:l},e)}}}]);