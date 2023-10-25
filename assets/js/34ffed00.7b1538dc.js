"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[32352],{26312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(85893),s=t(11151);const a={displayed_sidebar:"English"},r="Authentication methods",o={id:"administration/Authentication",title:"Authentication methods",description:'In addition to the authentication method of "username+password", StarRocks also supports LDAP.',source:"@site/versioned_docs/version-2.1/administration/Authentication.md",sourceDirName:"administration",slug:"/administration/Authentication",permalink:"/docs/2.1/administration/Authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/administration/Authentication.md",tags:[],version:"2.1",frontMatter:{displayed_sidebar:"English"},sidebar:"English",next:{title:"Backup and Recovery",permalink:"/docs/2.1/administration/Backup_and_restore"}},c={},l=[{value:"LDAP Authentication",id:"ldap-authentication",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"authentication-methods",children:"Authentication methods"}),"\n",(0,i.jsx)(n.p,{children:'In addition to the authentication method of "username+password", StarRocks also supports LDAP.'}),"\n",(0,i.jsx)(n.h2,{id:"ldap-authentication",children:"LDAP Authentication"}),"\n",(0,i.jsx)(n.p,{children:"To use LDAP authentication, you need to add the LDAP service into the FE node configuration first."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_server_host"}),": Specify the service IP."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_server_port"}),": Specify the service port, with a default value of 389."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When creating a user, specify the authentication method as LDAP authentication by ",(0,i.jsx)(n.code,{children:"IDENTIFIED WITH authentication_ldap_simple AS 'xxx'"}),". xxx is the DN (Distinguished Name) of the user in LDAP."]}),"\n",(0,i.jsx)(n.p,{children:"Example 1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE USER zhangsan IDENTIFIED WITH authentication_ldap_simple AS 'uid=zhansan,ou=company,dc=example,dc=com'\n"})}),"\n",(0,i.jsx)(n.p,{children:"It is possible to create a user without specifying the user's DN in LDAP. When the user logs in, StarRocks will go to the LDAP system to retrieve the user information. if there is one and only one match, the authentication is successful."}),"\n",(0,i.jsx)(n.p,{children:"Example 2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE USER zhangsan IDENTIFIED WITH authentication_ldap_simple\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this case, additional configuration needs to be added to the FE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_bind_base_dn"}),": The base DN of the user, specifying the retrieval range of the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_user_search_attr"}),": The name of the attribute in the LDAP object that identifies the user, uid by default."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_bind_root_dn"}),": The DN of the administrator account used to retrieve the user information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authentication_ldap_simple_bind_root_pwd"}),": The password of the administrator account used when retrieving the user information."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"LDAP authentication requires the client to pass on a clear-text password to StarRocks. There are three ways to pass on a clear-text password:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"MySQL command line"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"--default-auth mysql_clear_password --enable-cleartext-plugin"})," when executing:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql -uzhangsan -P8030 -h127.0.0.1 -p --default-auth mysql_clear_password --enable-cleartext-plugin\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"JDBC"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Since JDBC\u2019s default MysqlClearPasswordPlugin requires  SSL transport, a custom plugin is required."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class MysqlClearPasswordPluginWithoutSSL extends MysqlClearPasswordPlugin {\n    @Override  \n    public boolean requiresConfidentiality() {\n        return false;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once connected, configure the custom plugin into the property."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'...\nProperties properties = new Properties();// replace xxx.xxx.xxx to your pacakage name\nproperties.put("authenticationPlugins", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\nproperties.put("defaultAuthenticationPlugin", "xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL");\nproperties.put("disabledAuthenticationPlugins", "com.mysql.jdbc.authentication.MysqlNativePasswordPlugin");DriverManager.getConnection(url, properties);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"ODBC"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"default\\_auth=mysql_clear_password"})," and ",(0,i.jsx)(n.code,{children:"ENABLE_CLEARTEXT\\_PLUGIN=1"})," in the DSN of ODBC: , along with username and password."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var i=t(67294);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),i.createElement(s.Provider,{value:o},n)}}}]);