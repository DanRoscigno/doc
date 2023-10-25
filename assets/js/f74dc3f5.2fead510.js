"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[96371],{87041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(85893),s=n(11151);const r={displayed_sidebar:"English"},i="[Preview] Java UDFs",c={id:"sql-reference/sql-functions/JAVA_UDF",title:"[Preview] Java UDFs",description:"StarRocks has started to support user-defined functions (UDFs) since v2.2.0. You can create UDFs based on your business requirements to extend the capabilities of StarRocks. This topic describes the UDF types that are supported by StarRocks and how to create and use UDFs in StarRocks.",source:"@site/versioned_docs/version-2.3/sql-reference/sql-functions/JAVA_UDF.md",sourceDirName:"sql-reference/sql-functions",slug:"/sql-reference/sql-functions/JAVA_UDF",permalink:"/docs/2.3/sql-reference/sql-functions/JAVA_UDF",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/starrocks/edit/main/docs/sql-reference/sql-functions/JAVA_UDF.md",tags:[],version:"2.3",frontMatter:{displayed_sidebar:"English"},sidebar:"English",previous:{title:"convert_tz",permalink:"/docs/2.3/sql-reference/sql-functions/How_to_Write_Functions_Documentation"},next:{title:"Window function",permalink:"/docs/2.3/sql-reference/sql-functions/Window_function"}},l={},d=[{value:"UDF types",id:"udf-types",level:2},{value:"Enable UDFs",id:"enable-udfs",level:2},{value:"Create and use UDFs",id:"create-and-use-udfs",level:2},{value:"Create and use a scalar UDF",id:"create-and-use-a-scalar-udf",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project",level:4},{value:"Step 2: Compile code for a scalar UDF",id:"step-2-compile-code-for-a-scalar-udf",level:4},{value:"Step 3: Create a scalar UDF in StarRocks",id:"step-3-create-a-scalar-udf-in-starrocks",level:4},{value:"Step 4: Use the scalar UDF that you created",id:"step-4-use-the-scalar-udf-that-you-created",level:4},{value:"Create and use a UDAF",id:"create-and-use-a-udaf",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project-1",level:4},{value:"Step 2: Compile code for a UDAF",id:"step-2-compile-code-for-a-udaf",level:4},{value:"Step 3: Create a UDAF in StarRocks",id:"step-3-create-a-udaf-in-starrocks",level:4},{value:"Step 4: Use the UDAF that you created",id:"step-4-use-the-udaf-that-you-created",level:4},{value:"Create and use a UDWF",id:"create-and-use-a-udwf",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project-2",level:4},{value:"Step 2: Compile code for a UDWF",id:"step-2-compile-code-for-a-udwf",level:4},{value:"Step 3: Create a UDWF in StarRocks",id:"step-3-create-a-udwf-in-starrocks",level:4},{value:"Step 4: Use the UDWF that you created",id:"step-4-use-the-udwf-that-you-created",level:4},{value:"Create and use a UDTF",id:"create-and-use-a-udtf",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project-3",level:4},{value:"Step 2: Compile code for a UDTF",id:"step-2-compile-code-for-a-udtf",level:4},{value:"Step 3: Create a UDTF in StarRocks",id:"step-3-create-a-udtf-in-starrocks",level:4},{value:"Step 4: Use the UDTF that you created",id:"step-4-use-the-udtf-that-you-created",level:4},{value:"Manage UDFs",id:"manage-udfs",level:2},{value:"Delete UDFs",id:"delete-udfs",level:2},{value:"Mapping between SQL data types and Java data types",id:"mapping-between-sql-data-types-and-java-data-types",level:2},{value:"Parameter settings",id:"parameter-settings",level:2},{value:"FAQ",id:"faq",level:2}];function o(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",h4:"h4",ol:"ol",pre:"pre",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"preview-java-udfs",children:"[Preview] Java UDFs"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks has started to support user-defined functions (UDFs) since v2.2.0. You can create UDFs based on your business requirements to extend the capabilities of StarRocks. This topic describes the UDF types that are supported by StarRocks and how to create and use UDFs in StarRocks."}),"\n",(0,a.jsx)(t.h2,{id:"udf-types",children:"UDF types"}),"\n",(0,a.jsx)(t.p,{children:"StarRocks supports scalar UDFs, user-defined aggregate functions (UDAFs), user-defined window functions (UDWFs), and user-defined table functions (UDTFs)."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Scalar UDFs: A scalar UDF takes a single row and returns a single row as a result. When you use a scalar UDF as part of your query, each returned row is included as a single row in the result set. Typical scalar UDFs include UPPER, LOWER, ROUND, and ABS."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"UDAFs: A UDAF takes multiple rows and returns a single row as a result. Typical UDAFs include SUM, COUNT, MAX, and MIN. These UDAFs aggregate multiple rows in each GROUP BY clause and return one aggregated row."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"UDWFs: A UDWF takes a group of rows and returns one result for each row. In this sense, the group of rows is known as a window. In normal cases, a UDWF incorporates an OVER clause. The OVER clause divides rows into groups. The UDWF performs calculations on each group of rows and returns one result for each row."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"UDTFs: A UDTF takes one row and returns a visualized table that consists of multiple rows. UDTFs are generally used to convert rows to columns."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"enable-udfs",children:"Enable UDFs"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"$FE_HOME/conf/fe.conf"})," file of each frontend (FE), set ",(0,a.jsx)(t.code,{children:"enable_udf"})," to ",(0,a.jsx)(t.code,{children:"true"}),". Then, restart that FE to make the new setting take effect."]}),"\n",(0,a.jsx)(t.h2,{id:"create-and-use-udfs",children:"Create and use UDFs"}),"\n",(0,a.jsx)(t.h3,{id:"create-and-use-a-scalar-udf",children:"Create and use a scalar UDF"}),"\n",(0,a.jsx)(t.h4,{id:"step-1-create-a-maven-project",children:"Step 1: Create a Maven project"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Create a Maven project, whose basic directory structure is as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Plain_Text",children:"project\n|--pom.xml\n|--src\n|  |--main\n|  |  |--java\n|  |  |--resources\n|  |--test\n|--target\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the following dependencies to the ",(0,a.jsx)(t.strong,{children:"pom.xml"})," file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-XML",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.example</groupId>\n    <artifactId>udf</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <maven.compiler.source>8</maven.compiler.source>\n        <maven.compiler.target>8</maven.compiler.target>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>fastjson</artifactId>\n            <version>1.2.76</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-dependency-plugin</artifactId>\n                <version>2.10</version>\n                <executions>\n                    <execution>\n                        <id>copy-dependencies</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>copy-dependencies</goal>\n                        </goals>\n                        <configuration>\n                            <outputDirectory>${project.build.directory}/lib</outputDirectory>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>3.3.0</version>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-2-compile-code-for-a-scalar-udf",children:"Step 2: Compile code for a scalar UDF"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Compile code for the scalar UDF that you want to create."}),"\n",(0,a.jsx)(t.p,{children:"For example, the value of a field in a JSON document is a JSON string rather than a JSON object. When you execute an SQL statement to extract the JSON string, you must run the GET_JSON_STRING function twice in the SQL statement. Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'GET_JSON_STRING(GET_JSON_STRING(\'{"key":"{\\\\"k0\\\\":\\\\"v0\\\\"}"}\', "$.key"), "$.k0")\n'})}),"\n",(0,a.jsx)(t.p,{children:"To simplify the SQL statement, you can create a scalar UDF that can directly extracts a JSON string. Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'MY_UDF_JSON_GET(\'{"key":"{\\\\"k0\\\\":\\\\"v0\\\\"}"}\', "$.key.k0")\npackage com.starrocks.udf.sample;\n\n\n\nimport com.alibaba.fastjson.JSONPath;\n\n\n\npublic class UDFJsonGet {\n\n    public final String evaluate(String obj, String key) {\n\n        if (obj == null || key == null) return null;\n\n        try {\n\n            // The JSONPath library can be completely expanded even if the values of a specific field are JSON strings.\n\n            return JSONPath.read(obj, key).toString();\n\n        } catch (Exception e) {\n\n            return null;\n\n        }\n\n    }\n\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The class that you define must implement the method that is described in the following table."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'Note: The input and return data types in the method must be the same as the data types declared in the CREATE FUNCTION statement that is to be executed in Step 3. Additionally, the input and return data types in the method and the declared data types must conform to the mapping that is provided in the "Mapping between SQL data types and Java data types" section of this topic.'}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"od"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TYPE1 evaluate(TYPE2, ...)"}),(0,a.jsx)(t.td,{children:"The evaluate method requires the public member access level."})]})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.code,{children:"mvn package"})," to package the code for the scalar UDF."]}),"\n",(0,a.jsxs)(t.p,{children:["The following two JAR files are generated in the ",(0,a.jsx)(t.strong,{children:"target"})," folder: ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT.jar"})," and ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Upload the ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"})," file to an HTTP server that is accessible to all FEs and backends (BEs) in your cluster. Make sure that the HTTP service remains enabled."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: In Step 3, the FEs check the JAR files and calculate the checksum, and the BEs download and execute the JAR files."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-3-create-a-scalar-udf-in-starrocks",children:"Step 3: Create a scalar UDF in StarRocks"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to create a scalar UDF in StarRocks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE FUNCTION MY_UDF_JSON_GET(string, string) \n\nRETURNS string\n\nproperties (\n\n    "symbol" = "com.starrocks.udf.sample.UDFJsonGet", \n\n    "type" = "StarrocksJar",\n\n    "file" = "http://http_host:http_port/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"\n\n);\n'})}),"\n",(0,a.jsx)(t.p,{children:"Parameter description:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"symbol"}),": the name of the class for the Maven project to which the scalar UDF belongs. The value of this parameter is in the ",(0,a.jsx)(t.code,{children:"<Package name>.<Class name>"})," format."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"type"}),": the type of the scalar UDF. Set the value to ",(0,a.jsx)(t.strong,{children:"StarrocksJar"}),", which specifies that the scalar UDF is a Java-based function."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"file"}),": the HTTP URL from which you can download the JAR file that contains the code for the scalar UDF."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-4-use-the-scalar-udf-that-you-created",children:"Step 4: Use the scalar UDF that you created"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to run the scalar UDF that you created:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'SELECT MY_UDF_JSON_GET(\'{"key":"{\\\\"in\\\\":2}"}\', \'$.key.in\');\n'})}),"\n",(0,a.jsx)(t.h3,{id:"create-and-use-a-udaf",children:"Create and use a UDAF"}),"\n",(0,a.jsx)(t.h4,{id:"step-1-create-a-maven-project-1",children:"Step 1: Create a Maven project"}),"\n",(0,a.jsx)(t.p,{children:'For more information, see "Step 1: Create a Maven project" in the "Create and use a scalar UDF" section of this topic.'}),"\n",(0,a.jsx)(t.h4,{id:"step-2-compile-code-for-a-udaf",children:"Step 2: Compile code for a UDAF"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Compile code for the UDAF that you want to create."}),"\n",(0,a.jsx)(t.p,{children:"Suppose that you want to create a UDAF named MY_SUM_INT. Unlike the built-in aggregate function SUM, which returns BIGINT values, the SUMINT aggregate function supports only input and return parameters of the INT data type."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Java",children:"\npackage com.starrocks.udf.sample;\n\npublic class SumInt {\n    public static class State {\n        int counter = 0;\n        public int serializeLength() { return 4; }\n    }\n\n    public State create() {\n        return new State();\n    }\n\n    public void destroy(State state) {\n    }\n\n    public final void update(State state, Integer val) {\n        if (val != null) {\n            state.counter+= val;\n        }\n    }\n\n    public void serialize(State state, java.nio.ByteBuffer buff) {\n        buff.putInt(state.counter);\n    }\n\n    public void merge(State state, java.nio.ByteBuffer buffer) {\n        int val = buffer.getInt();\n        state.counter += val;\n    }\n\n    public Integer finalize(State state) {\n        return state.counter;\n    }\n}\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"The class that you define must implement the methods that are described in the following table."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'Note: The input and return data types in the methods must be the same as the data types declared in the CREATE FUNCTION statement that is to be executed in Step 3. Additionally, the input and return data types in the methods and the declared data types must conform to the mapping that is provided in the "Mapping between SQL data types and Java data types" section of this topic.'}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Method"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"State create()"}),(0,a.jsx)(t.td,{children:"Creates a state."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"void destroy(State)"}),(0,a.jsx)(t.td,{children:"Destroys a state."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"void update(State, ...)"}),(0,a.jsx)(t.td,{children:"Updates a state. In addition to the first parameter State, you can also specify one or more input parameters in the function declaration."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"void serialize(State, ByteBuffer)"}),(0,a.jsx)(t.td,{children:"Serializes a state into the byte buffer."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"void merge(State, ByteBuffer)"}),(0,a.jsx)(t.td,{children:"Deserializes a state from the byte buffer, and merges the byte buffer into the state as the first parameter."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TYPE finalize(State)"}),(0,a.jsx)(t.td,{children:"Obtains the final result of the function from a state."})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["During the coding process, you must also use the ",(0,a.jsx)(t.code,{children:"java.nio.ByteBuffer"})," buffer class, which stores intermediate results, and the ",(0,a.jsx)(t.code,{children:"serializeLength"})," local variable, which specifies the length that is allowed for the deserialization of intermediate results."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"nd local variable"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"java.nio.ByteBuffer()"}),(0,a.jsx)(t.td,{children:"The buffer class, which stores intermediate results. Intermediate results may be serialized or deserialized when they are transmitted between nodes for execution. Therefore, you must also use the serializeLength variable to specify the length that is allowed for the deserialization of intermediate results."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"serializeLength()"}),(0,a.jsxs)(t.td,{children:["The length that is allowed for the deserialization of intermediate results. Unit: bytes. This parameter must be set to an INT value. For example, State ",(0,a.jsx)(t.code,{children:"{ int counter = 0; public int serializeLength() { return 4; }}"})," specifies that intermediate results are of the INT data type and the length for deserialization is 4 bytes. You can adjust these settings based on your business requirements. For example, if you want to specify the data type of intermediate results as LONG and the length for deserialization as 8 bytes, pass State ",(0,a.jsx)(t.code,{children:"{ long counter = 0; public int serializeLength() { return 8; }}"}),"."]})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Take note of the following points for the deserialization of intermediate results stored in the ",(0,a.jsx)(t.code,{children:"java.nio.ByteBuffer"})," class:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The Remaining method that is dependent on the ByteBuffer class cannot be called to deserialize a state."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The Clear method cannot be called on the ByteBuffer class."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The value of the serializeLength variable must be the same as the length of the written-in data. Otherwise, incorrect results are generated during serialization and deserialization."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.code,{children:"mvn package"})," to package the code."]}),"\n",(0,a.jsxs)(t.p,{children:["The following two JAR files are generated in the ",(0,a.jsx)(t.strong,{children:"target"})," folder: ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT.jar"})," and ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Upload the ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"})," file to an HTTP server that is accessible to all FEs and BEs in your cluster. Make sure that the HTTP service remains enabled."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: In Step 3, the FEs check the JAR files and calculate the checksum, and the BEs download and execute the JAR files."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-3-create-a-udaf-in-starrocks",children:"Step 3: Create a UDAF in StarRocks"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to create a UDAF in StarRocks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE AGGREGATE FUNCTION MY_SUM_INT(INT) \n\nRETURNS INT\n\nPROPERTIES \n\n( \n\n    "symbol" = "com.starrocks.udf.sample.SumInt", \n\n    "type" = "StarrocksJar",\n\n    "file" = "http://http_host:http_port/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"\n\n);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'The parameters for a UDAF are similar to those for a scalar UDF. For more information about the parameters, see the "Create and use a scalar UDF" section of this topic.'}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-4-use-the-udaf-that-you-created",children:"Step 4: Use the UDAF that you created"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to run the UDAF that you created:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SELECT MY_SUM_INT(col1) from t1;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"create-and-use-a-udwf",children:"Create and use a UDWF"}),"\n",(0,a.jsx)(t.h4,{id:"step-1-create-a-maven-project-2",children:"Step 1: Create a Maven project"}),"\n",(0,a.jsx)(t.p,{children:'For more information, see "Step 1: Create a Maven project" in the "Create and use a scalar UDF" section of this topic.'}),"\n",(0,a.jsx)(t.h4,{id:"step-2-compile-code-for-a-udwf",children:"Step 2: Compile code for a UDWF"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Compile code for the UDWF that you want to create."}),"\n",(0,a.jsx)(t.p,{children:"Suppose that you want to create a UDWF named MY_WINDOW_SUM_INT. Unlike the SUM window function, which returns BIGINT values, the MY_WINDOW_SUM_INT window function supports only input and return parameters of the INT data type."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Java",children:'public class WindowSumInt {    \n\n    public static class State {\n\n        int counter = 0;\n\n        public int serializeLength() { return 4; }\n\n        @Override\n\n        public String toString() {\n\n            return "State{counter=" + counter + "}";\n\n        }\n\n    }\n\n\n\n    public State create() {\n\n        return new State();\n\n    }\n\n\n\n    public void destroy(State state) {\n\n\n\n    }\n\n\n\n    public void update(State state, Integer val) {\n\n        if (val != null) {\n\n            state.counter+=val;\n\n        }\n\n    }\n\n\n\n    public void serialize(State state, java.nio.ByteBuffer buff) {\n\n        buff.putInt(state.counter);\n\n    }\n\n\n\n    public void merge(State state, java.nio.ByteBuffer buffer) {\n\n        int val = buffer.getInt();\n\n        state.counter += val;\n\n    }\n\n\n\n    public Integer finalize(State state) {\n\n        return state.counter;\n\n    }\n\n\n\n    public void reset(State state) {\n\n        state.counter = 0;\n\n    }\n\n\n\n    public void windowUpdate(State state,\n\n                            int peer_group_start, int peer_group_end,\n\n                            int frame_start, int frame_end,\n\n                            Integer[] inputs) {\n\n        for (int i = (int)frame_start; i < (int)frame_end; ++i) {\n\n            state.counter += inputs[i];\n\n        }\n\n}\n\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The class that you define must implement the method that UDAF requires and the ",(0,a.jsx)(t.code,{children:"windowUpdate()"})," method."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'The input and return data types in the method must be the same as the data types declared in the CREATE FUNCTION statement that is to be executed in Step 3. Additionally, the input and return data types and the declared data types must conform to the mapping that is provided in the "Mapping between SQL data types and Java data types" section of this topic.'}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Method"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"void windowUpdate(State state, int, int, int , int, ...)"}),(0,a.jsxs)(t.td,{children:["Updates the data of a window. For more information about UDWFs, see ",(0,a.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-functions/Window_function",children:"Window functions"}),". Every time when you enter a row as input, this method obtains the window information and updates intermediate results accordingly. - peer_group_start: the start position of the current partition. PARTITION BY is used in the OVER clause to specify a partition column. Rows with the same values in the partition column are considered to be in the same partition. - peer_group_end: the end position of the current partition. - frame_start: the start position of the current window frame. The window frame clause specifies a calculation range, which covers the current row and the rows that are within a specified distance to the current row. For example, ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING specifies a calculation range that covers the current row, the previous row before the current row, and the following row after the current row. - frame_end: the end position of the current window frame. - inputs: the data that is entered as the input to a window. The data is an array package that supports only specific data types. In this example, INT values are entered as input, and the array package is Integer[]."]})]})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.code,{children:"mvn package"})," to package the code."]}),"\n",(0,a.jsxs)(t.p,{children:["The following two JAR files are generated in the ",(0,a.jsx)(t.strong,{children:"target"})," folder: ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT.jar"})," and ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Upload the ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"})," file to an HTTP server that is accessible to all FEs and BEs in your cluster. Make sure that the HTTP service remains enabled."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: In Step 3, the FEs check the JAR files and calculate the checksum, and the BEs download and execute the JAR files."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-3-create-a-udwf-in-starrocks",children:"Step 3: Create a UDWF in StarRocks"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to create a UDWF in StarRocks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE AGGREGATE FUNCTION MY_WINDOW_SUM_INT(Int)\n\nRETURNS Int\n\nproperties \n\n(\n\n    "analytic" = "true",\n\n    "symbol" = "WindowSumInt", \n\n    "type" = "StarrocksJar", \n\n    "file" = "http://http_host:http_port/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"    \n\n);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note:"}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["The value of the ",(0,a.jsx)(t.code,{children:"analytic"})," parameter is fixed as ",(0,a.jsx)(t.code,{children:"true"}),", which specifies that the UDWF is a window function (not a aggregate function)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["The other parameters for a UDWF are similar to those for a scalar UDF. For more information, see ",(0,a.jsx)(t.a,{href:"#step-3-create-a-scalar-udf-in-starrocks",children:"Create a scalar UDF in StarRocks"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-4-use-the-udwf-that-you-created",children:"Step 4: Use the UDWF that you created"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to run the UDWF that you created:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SELECT MY_WINDOW_SUM_INT(intcol) \n\n            OVER (PARTITION BY intcol2\n\n                  ORDER BY intcol3\n\n                  ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)\n\nFROM test_basic;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"create-and-use-a-udtf",children:"Create and use a UDTF"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"StarRocks allows a UDTF to return a table that consists of multiple rows and one column."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-1-create-a-maven-project-3",children:"Step 1: Create a Maven project"}),"\n",(0,a.jsx)(t.p,{children:'For more information, see "Step 1: Create a Maven project" in the "Create and use a scalar UDF" section of this topic.'}),"\n",(0,a.jsx)(t.h4,{id:"step-2-compile-code-for-a-udtf",children:"Step 2: Compile code for a UDTF"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Compile code for the UDTF that you want to create."}),"\n",(0,a.jsx)(t.p,{children:"Suppose that you want to create a UDTF named MY_UDF_SPLIT. The MY_UDF_SPLIT function allows you to use spaces as delimiters and supports input and return parameters of the STRING data type."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-TypeScript",children:'public class UDFSplit{\n\n    public String[] process(String in) {\n\n        if (in == null) return null;\n\n        return in.split(" ");\n\n    }\n\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"The class that you define must implement the method that is described in the following table."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'The input and return data types in the method must be the same as the data types declared in the CREATE FUNCTION statement that is to be executed in Step 3. Additionally, the input and return data types in the method and the declared data types must conform to the mapping that is provided in the "Mapping between SQL data types and Java data types" section of this topic.'}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Method"}),(0,a.jsx)(t.th,{children:"Descrition"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TYPE[] process()"}),(0,a.jsx)(t.td,{children:"Runs a UDTF and returns an array."})]})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run ",(0,a.jsx)(t.code,{children:"mvn package"})," to package the code."]}),"\n",(0,a.jsxs)(t.p,{children:["The following two JAR files are generated in the ",(0,a.jsx)(t.strong,{children:"target"})," folder: ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT.jar"})," and ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Upload the ",(0,a.jsx)(t.strong,{children:"udf-1.0-SNAPSHOT-jar-with-dependencies.jar"})," file to an HTTP server that is accessible to all FEs and BEs in your cluster. Make sure that the HTTP service remains enabled."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: In Step 3, the FEs check the JAR files and calculate the checksum, and the BEs download and execute the JAR files."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-3-create-a-udtf-in-starrocks",children:"Step 3: Create a UDTF in StarRocks"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statement to create a UDTF in StarRocks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE FUNCTION MY_UDF_SPLIT(string)\n\nRETURNS string\n\nproperties \n\n(\n\n    "symbol" = "UDFSplit", \n\n    "type" = "StarrocksJar", \n\n    "file" = "http://http_host:http_port/udf-1.0-SNAPSHOT-jar-with-dependencies.jar"\n\n);\n'})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'Note: The parameters for a UDTF are similar to those for a scalar UDF. For more information, see the "Create and use a scalar UDF" section of this topic.'}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"step-4-use-the-udtf-that-you-created",children:"Step 4: Use the UDTF that you created"}),"\n",(0,a.jsx)(t.p,{children:"Execute the following statements to run the UDTF that you created:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:'-- Suppose that you have a table named t1, and the information\n\n-- about its columns a, b, and c1 is as follows:\n\nSELECT t1.a,t1.b,t1.c1 FROM t1;\n\n> output:\n\n1,2.1,"hello world"\n\n2,2.2,"hello UDTF."\n\n\n\n-- Run the MY_UDF_SPLIT function.\n\nSELECT t1.a,t1.b, MY_UDF_SPLIT FROM t1, MY_UDF_SPLIT(t1.c1); \n\n> output:\n\n1,2.1,"hello"\n\n1,2.1,"world"\n\n2,2.2,"hello"\n\n2,2.2,"UDTF."\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["The first ",(0,a.jsx)(t.code,{children:"MY_UDF_SPLIT"})," in the preceding statement is the alias of the column that is returned by the second ",(0,a.jsx)(t.code,{children:"MY_UDF_SPLIT"}),", which is a function."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["You cannot use ",(0,a.jsx)(t.code,{children:"AS t2(f1)"})," to specify the aliases of the table and its columns that are to be returned recently."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"manage-udfs",children:"Manage UDFs"}),"\n",(0,a.jsxs)(t.p,{children:["Execute the SHOW FUNCTIONS statement to query UDFs. For more information, see ",(0,a.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-definition/show-functions",children:"SHOW FUNCTIONS"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"delete-udfs",children:"Delete UDFs"}),"\n",(0,a.jsxs)(t.p,{children:["Execute the DROP FUNCTION statement to delete a UDF. For more information, see ",(0,a.jsx)(t.a,{href:"/docs/2.3/sql-reference/sql-statements/data-definition/drop-function",children:"DROP FUNCTION"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"mapping-between-sql-data-types-and-java-data-types",children:"Mapping between SQL data types and Java data types"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"SQL data type"}),(0,a.jsx)(t.th,{children:"Java data type"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"BOOLEAN"}),(0,a.jsx)(t.td,{children:"java.lang.Boolean"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TINYINT"}),(0,a.jsx)(t.td,{children:"java.lang.Byte"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"SMALLINT"}),(0,a.jsx)(t.td,{children:"java.lang.Short"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"INT"}),(0,a.jsx)(t.td,{children:"java.lang.Integer"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"BIGINT"}),(0,a.jsx)(t.td,{children:"java.lang.Long"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"FLOAT"}),(0,a.jsx)(t.td,{children:"java.lang.Float"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"DOUBLE"}),(0,a.jsx)(t.td,{children:"java.lang.Double"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"STRING and VARCHAR"}),(0,a.jsx)(t.td,{children:"java.lang.String"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"parameter-settings",children:"Parameter settings"}),"\n",(0,a.jsxs)(t.p,{children:["Configure the following environment variable in the ",(0,a.jsx)(t.strong,{children:"be/conf/hadoop_env.sh"})," file of each Java virtual machine (JVM) in your cluster to control the usage of memory resources:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Bash",children:'export LIBHDFS_OPTS="-Xloggc:$STARROCKS_HOME/log/be.gc.log -server"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.p,{children:"Can I use static variables when I create UDFs? Do the static variables of different UDFs have mutual impacts on each other?"}),"\n",(0,a.jsx)(t.p,{children:"Yes, you can use static variables when you compile UDFs. The static variables of different UDFs are isolated from each other and do not affect each other even if the UDFs have classes with identical names."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>r});var a=n(67294);const s=a.createContext({});function r(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(s.Provider,{value:c},t)}}}]);