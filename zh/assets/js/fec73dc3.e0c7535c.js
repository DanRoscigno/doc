"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[85899],{39715:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var n=r(85893),c=r(11151);const t={displayed_sidebar:"Chinese31"},a="\u4f7f\u7528 Operator \u90e8\u7f72 StarRocks \u96c6\u7fa4",l={id:"deployment/sr_operator",title:"\u4f7f\u7528 Operator \u90e8\u7f72 StarRocks \u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u901a\u8fc7 StarRocks Operator \u81ea\u52a8\u5316\u90e8\u7f72\u548c\u7ba1\u7406 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/deployment/sr_operator.md",sourceDirName:"deployment",slug:"/deployment/sr_operator",permalink:"/doc/zh/docs/3.0/deployment/sr_operator",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/sr_operator.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese31"},sidebar:"Chinese31",previous:{title:"\u624b\u52a8\u90e8\u7f72 StarRocks",permalink:"/doc/zh/docs/3.0/deployment/deploy_manually"},next:{title:"\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4",permalink:"/doc/zh/docs/3.0/deployment/helm"}},o={},i=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2},{value:"<strong>\u73af\u5883\u51c6\u5907</strong>",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"<strong>\u521b\u5efa Kubernetes \u96c6\u7fa4</strong>",id:"\u521b\u5efa-kubernetes-\u96c6\u7fa4",level:3},{value:"\u90e8\u7f72 StarRocks Operator",id:"\u90e8\u7f72-starrocks-operator",level:3},{value:"\u90e8\u7f72 StarRocks \u96c6\u7fa4",id:"\u90e8\u7f72-starrocks-\u96c6\u7fa4",level:2},{value:"\u8bbf\u95ee StarRocks \u96c6\u7fa4",id:"\u8bbf\u95ee-starrocks-\u96c6\u7fa4",level:2},{value:"\u96c6\u7fa4\u5185\u8bbf\u95ee StarRocks \u96c6\u7fa4",id:"\u96c6\u7fa4\u5185\u8bbf\u95ee-starrocks-\u96c6\u7fa4",level:3},{value:"\u96c6\u7fa4\u5916\u8bbf\u95ee StarRocks \u96c6\u7fa4",id:"\u96c6\u7fa4\u5916\u8bbf\u95ee-starrocks-\u96c6\u7fa4",level:3},{value:"\u7ba1\u7406 StarRocks \u96c6\u7fa4",id:"\u7ba1\u7406-starrocks-\u96c6\u7fa4",level:2},{value:"\u5347\u7ea7 StarRocks \u96c6\u7fa4",id:"\u5347\u7ea7-starrocks-\u96c6\u7fa4",level:3},{value:"\u6269\u7f29\u5bb9 StarRocks \u96c6\u7fa4",id:"\u6269\u7f29\u5bb9-starrocks-\u96c6\u7fa4",level:3},{value:"\u81ea\u52a8\u6269\u7f29\u5bb9 CN \u96c6\u7fa4",id:"\u81ea\u52a8\u6269\u7f29\u5bb9-cn-\u96c6\u7fa4",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function d(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",img:"img",strong:"strong",h3:"h3",a:"a",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u4f7f\u7528-operator-\u90e8\u7f72-starrocks-\u96c6\u7fa4",children:"\u4f7f\u7528 Operator \u90e8\u7f72 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsx)(s.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u901a\u8fc7 StarRocks Operator \u81ea\u52a8\u5316\u90e8\u7f72\u548c\u7ba1\u7406 StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"sr operator and src",src:r(33454).Z+"",width:"925",height:"643"})}),"\n",(0,n.jsx)(s.h2,{id:"\u73af\u5883\u51c6\u5907",children:(0,n.jsx)(s.strong,{children:"\u73af\u5883\u51c6\u5907"})}),"\n",(0,n.jsx)(s.h3,{id:"\u521b\u5efa-kubernetes-\u96c6\u7fa4",children:(0,n.jsx)(s.strong,{children:"\u521b\u5efa Kubernetes \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e91\u6258\u7ba1\u7684 Kubernetes \u670d\u52a1\uff0c\u4f8b\u5982 ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/cn/eks/?nc2=h_ql_prod_ct_eks",children:"Amazon Elastic Kubernetes Service (EKS)"})," \u6216\u8005 ",(0,n.jsx)(s.a,{href:"https://cloud.google.com/kubernetes-engine?hl=zh-cn",children:"Google Kubernetes Engine (GKE)"})," \u96c6\u7fa4\uff0c\u6216\u8005\u79c1\u6709 Kubernetes \u96c6\u7fa4\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u521b\u5efa Amazon EKS \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\u521b\u5efa EKS \u96c6\u7fa4\u524d\uff0c\u8bf7\u786e\u4fdd",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html",children:"\u73af\u5883\u4e2d\u5df2\u5b89\u88c5\u5982\u4e0b\u547d\u4ee4\u884c\u5de5\u5177"}),"\u3002","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5b89\u88c5\u5e76\u914d\u7f6e AWS \u7684\u547d\u4ee4\u884c\u5de5\u5177 AWS CLI\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5b89\u88c5 EKS \u96c6\u7fa4\u547d\u4ee4\u884c\u5de5\u5177 eksctl\u3002"}),"\n",(0,n.jsx)(s.li,{children:"\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u547d\u4ee4\u884c\u5de5\u5177 kubectl\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\u521b\u5efa EKS \u96c6\u7fa4\u3002\u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/getting-started-eksctl.html",children:"\u4f7f\u7528 eksctl \u5feb\u901f\u521b\u5efa EKS \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/getting-started-console.html",children:"\u4f7f\u7528 AWS \u63a7\u5236\u53f0\u548c AWS CLI \u624b\u52a8\u521b\u5efa EKS \u96c6\u7fa4"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u521b\u5efa  GKE \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.p,{children:["\u521b\u5efa\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u524d\u7f6e\u5de5\u4f5c\u3002\u521b\u5efa\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003",(0,n.jsx)(s.a,{href:"https://cloud.google.com/kubernetes-engine/docs/deploy-app-cluster",children:"\u521b\u5efa GKE \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u521b\u5efa\u79c1\u6709 Kubernetes \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.p,{children:["\u521b\u5efa ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/",children:"Kubernetes \u96c6\u7fa4"}),"\u3002\u5982\u9700\u5feb\u901f\u4f53\u9a8c\u672c\u7279\u6027\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/zh-cn/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/",children:"Minikube"})," \u521b\u5efa\u5355\u8282\u70b9 Kubernetes \u96c6\u7fa4\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u90e8\u7f72-starrocks-operator",children:"\u90e8\u7f72 StarRocks Operator"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u6dfb\u52a0\u5b9a\u5236\u8d44\u6e90 StarRocksCluster\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/starrocks.com_starrocksclusters.yaml\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u90e8\u7f72 StarRocks Operator\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u6216\u8005\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72 StarRocks Operator\u3002"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72 StarRocks Operator\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/operator.yaml\n"})}),"\n",(0,n.jsxs)(s.p,{children:["StarRocks Operator \u4f1a\u90e8\u7f72\u81f3 Namespace ",(0,n.jsx)(s.code,{children:"starrocks"}),"\uff0c\u5e76\u4e14\u7ba1\u7406\u6240\u6709 Namespace \u4e0b\u7684 StarRocks \u96c6\u7fa4\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72 StarRocks Operator\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u4e0b\u8f7d\u7528\u4e8e\u90e8\u7f72 StarRocks Operator \u7684\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -O https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/deploy/operator.yaml\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u6839\u636e\u60a8\u7684\u5b9e\u9645\u9700\u8981\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,n.jsx)(s.code,{children:"operator.yaml"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u90e8\u7f72 StarRocks Operator\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f operator.yaml\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u68c0\u67e5 StarRocks Operator \u7684\u8fd0\u884c\u72b6\u6001\u3002\u5982\u679c Pod \u5904\u4e8e ",(0,n.jsx)(s.code,{children:"Running"})," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd ",(0,n.jsx)(s.code,{children:"READY"}),"\uff0c\u5219\u8868\u793a StarRocks Operator \u6210\u529f\u8fd0\u884c\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get pods\nNAME                                  READY   STATUS    RESTARTS   AGE\nstarrocks-controller-65bb8679-jkbtg   1/1     Running   0          5m6s\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u81ea\u5b9a\u4e49 StarRocks Operator \u6240\u5728 Namespace\uff0c\u5219\u9700\u8981\u4fee\u6539 ",(0,n.jsx)(s.code,{children:"starrocks"})," \u4e3a\u81ea\u5b9a\u4e49\u7684 Namespace\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u90e8\u7f72-starrocks-\u96c6\u7fa4",children:"\u90e8\u7f72 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 StarRocks \u63d0\u4f9b\u7684",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/tree/main/examples/starrocks",children:"\u914d\u7f6e\u6587\u4ef6\u8303\u4f8b"}),"\uff0c\u90e8\u7f72 StarRocks \u96c6\u7fa4\uff08\u5b9a\u5236\u8d44\u6e90 StarRocks Cluster \u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\uff09\u3002\u4f8b\u5982\u4f7f\u7528 ",(0,n.jsx)(s.strong,{children:"starrocks-fe-and-be.yaml"}),"\uff0c\u90e8\u7f72\u4e00\u4e2a StarRocks \u96c6\u7fa4\uff0c\u5305\u542b\u4e09\u4e2a FE \u548c\u4e09\u4e2a BE \u8282\u70b9\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"kubectl apply -f https://raw.githubusercontent.com/StarRocks/starrocks-kubernetes-operator/main/examples/starrocks/starrocks-fe-and-be.yaml\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u4e3b\u8981\u5b57\u6bb5\u8bf4\u660e\uff1a"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\u5b57\u6bb5"}),(0,n.jsx)(s.th,{children:"\u8bf4\u660e"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Kind"}),(0,n.jsxs)(s.td,{children:["\u5bf9\u8c61\u6240\u5c5e\u8d44\u6e90\u7c7b\u578b\u3002\u53d6\u503c\u5fc5\u987b\u4e3a ",(0,n.jsx)(s.code,{children:"StarRocksCluster"}),"\u3002"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Metadata"}),(0,n.jsxs)(s.td,{children:["\u5143\u6570\u636e\u3002\u5185\u5d4c\u4e8c\u7ea7\u5b57\u6bb5\u548c\u8bf4\u660e\u5982\u4e0b\uff1a",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"name"}),"\uff1a\u5bf9\u8c61\u540d\u79f0\u3002\u540c\u7c7b\u8d44\u6e90\u4e2d\u5bf9\u8c61\u7684\u552f\u4e00\u6027\u6807\u8bc6\u3002"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.code,{children:"namespace"}),"\uff1a\u5bf9\u8c61\u6240\u5c5e Namespace\u3002"]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Spec"}),(0,n.jsxs)(s.td,{children:["\u5bf9\u8c61\u7684\u671f\u671b\u72b6\u6001\uff0c\u5305\u542b ",(0,n.jsx)(s.code,{children:"starRocksFeSpec"}),"\u3001",(0,n.jsx)(s.code,{children:"starRocksBeSpec"}),"\u3001",(0,n.jsx)(s.code,{children:"starRocksCnSpec"}),"\u3002"]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u90e8\u7f72 StarRocks \u96c6\u7fa4\u3002 \u652f\u6301\u7684\u5b57\u6bb5\u548c\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/doc/api.md",children:"api.md"})," \u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u90e8\u7f72 StarRocks \u96c6\u7fa4\u9700\u8981\u4e00\u5b9a\u65f6\u95f4\uff0c\u671f\u95f4\uff0c\u60a8\u53ef\u4ee5\u6267\u884c ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," \u67e5\u770b StarRocks \u96c6\u7fa4\u542f\u52a8\u72b6\u6001\u3002\u5982\u679c Pod \u5904\u4e8e ",(0,n.jsx)(s.code,{children:"Running"})," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd ",(0,n.jsx)(s.code,{children:"READY"}),"\uff0c\u5219\u8868\u793a StarRocks \u96c6\u7fa4\u5df2\u7ecf\u6210\u529f\u8fd0\u884c\u3002"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u81ea\u5b9a\u4e49 StarRocks \u96c6\u7fa4\u6240\u5728 Namespace\uff0c\u5219\u9700\u8981\u4fee\u6539 ",(0,n.jsx)(s.code,{children:"starrocks"})," \u4e3a\u81ea\u5b9a\u4e49\u7684 Namespace\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get pods\nNAME                                  READY   STATUS    RESTARTS   AGE\nstarrocks-controller-65bb8679-jkbtg   1/1     Running   0          22h\nstarrockscluster-sample-be-0          1/1     Running   0          23h\nstarrockscluster-sample-be-1          1/1     Running   0          23h\nstarrockscluster-sample-be-2          1/1     Running   0          22h\nstarrockscluster-sample-fe-0          1/1     Running   0          21h\nstarrockscluster-sample-fe-1          1/1     Running   0          21h\nstarrockscluster-sample-fe-2          1/1     Running   0          22h\n"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u90e8\u5206 Pod \u957f\u65f6\u95f4\u4ecd\u65e0\u6cd5\u542f\u52a8\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"kubectl logs -n starrocks <pod_name>"})," \u67e5\u770b\u65e5\u5fd7\u4fe1\u606f\u6216\u8005\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks describe pod <pod_name>"})," \u67e5\u770b Event \u4fe1\u606f\uff0c\u4ee5\u5b9a\u4f4d\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8bbf\u95ee-starrocks-\u96c6\u7fa4",children:"\u8bbf\u95ee StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsxs)(s.p,{children:["\u8bbf\u95ee StarRocks \u96c6\u7fa4\u7684\u5404\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5176\u5173\u8054\u7684 Service \u5b9e\u73b0\uff0c\u6bd4\u5982 FE Service\u3002Service \u7684\u8be6\u7ec6\u8bf4\u660e\u548c\u8bbf\u95ee\u5730\u5740\u67e5\u770b\uff0c\u8bf7\u53c2\u8003 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/doc/api.md",children:"api.md"})," \u548c ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/",children:"Service"}),"\u3002"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u8bf4\u660e"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ec5\u90e8\u7f72 FE Service\u3002\u5982\u9700\u90e8\u7f72 BE Service \u548c CN Service\uff0c\u5219\u60a8\u9700\u8981\u5728 StarRocks \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6 ",(0,n.jsx)(s.code,{children:"starRocksBeSpec"}),"\u3001",(0,n.jsx)(s.code,{children:"starRocksCnSpec"})," \u4e2d\u589e\u52a0\u914d\u7f6e\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["Service \u7684\u540d\u79f0\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(s.code,{children:"<\u96c6\u7fa4\u540d\u79f0>-<\u7ec4\u4ef6\u540d\u79f0>-service"}),"\uff0c\u4f8b\u5982 ",(0,n.jsx)(s.code,{children:"starrockscluster-sample-fe-service"}),"\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u7684 spec \u4e2d\u8fdb\u884c\u6307\u5b9a Service \u540d\u79f0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"\u96c6\u7fa4\u5185\u8bbf\u95ee-starrocks-\u96c6\u7fa4",children:"\u96c6\u7fa4\u5185\u8bbf\u95ee StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsx)(s.p,{children:"\u5728 Kubernetes \u96c6\u7fa4\u5185\uff0c\u901a\u8fc7 FE Service \u7684 ClusterIP \u8bbf\u95ee StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u67e5\u770b FE Service \u5185\u90e8\u865a\u62df IP ",(0,n.jsx)(s.code,{children:"CLUSTER-IP"})," \u548c\u7aef\u53e3 ",(0,n.jsx)(s.code,{children:"PORT(S)"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get svc \nNAME                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                               AGE\nbe-domain-search                     ClusterIP   None             <none>        9050/TCP                              23m\nfe-domain-search                     ClusterIP   None             <none>        9030/TCP                              25m\nstarrockscluster-sample-fe-service   ClusterIP   10.100.162.xxx   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   25m\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u5728 Kubernetes \u96c6\u7fa4\u5185\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8bbf\u95ee StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"mysql -h 10.100.162.xxx -P 9030 -uroot\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"\u96c6\u7fa4\u5916\u8bbf\u95ee-starrocks-\u96c6\u7fa4",children:"\u96c6\u7fa4\u5916\u8bbf\u95ee StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsx)(s.p,{children:"\u5728 Kubernetes \u96c6\u7fa4\u5916\uff0c\u652f\u6301\u901a\u8fc7 FE Service \u7684 LoadBalancer \u548c NodePort \u8bbf\u95ee StarRocks \u96c6\u7fa4\u3002\u672c\u6587\u4ee5 LoadBalancer \u4e3a\u4f8b\uff1a"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks edit src starrockscluster-sample"})," \u66f4\u65b0 StarRocks \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539 ",(0,n.jsx)(s.code,{children:"starRocksFeSpec"})," \u7684 Service \u7c7b\u578b\u4e3a ",(0,n.jsx)(s.code,{children:"LoadBalancer"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-YAML",children:"starRocksFeSpec:\n  image: starrocks/fe-ubuntu:3.0-latest\n  replicas: 3\n  requests:\n    cpu: 4\n    memory: 16Gi\n  service:            \n    type: LoadBalancer # \u6307\u5b9a\u4e3a LoadBalancer\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u67e5\u8be2 FE Service \u5411\u5916\u90e8\u66b4\u9732\u7684 IP \u5730\u5740 ",(0,n.jsx)(s.code,{children:"EXTERNAL-IP"})," \u548c\u7aef\u53e3 ",(0,n.jsx)(s.code,{children:"PORT(S)"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ kubectl -n starrocks get svc\nNAME                                 TYPE           CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)                                                       AGE\nbe-domain-search                     ClusterIP      None             <none>                                                                   9050/TCP                                                      127m\nfe-domain-search                     ClusterIP      None             <none>                                                                   9030/TCP                                                      129m\nstarrockscluster-sample-fe-service   LoadBalancer   10.100.162.xxx   a7509284bf3784983a596c6eec7fc212-618xxxxxx.us-west-2.elb.amazonaws.com   8030:30629/TCP,9020:32544/TCP,9030:32244/TCP,9010:32024/TCP   129m               ClusterIP      None            <none>                                                                   9030/TCP                                                      23h\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u767b\u9646\u60a8\u7684\u673a\u5668\uff0c\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u8bbf\u95ee StarRocks \u96c6\u7fa4\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"mysql -h a7509284bf3784983a596c6eec7fc212-618xxxxxx.us-west-2.elb.amazonaws.com -P9030 -uroot\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u7ba1\u7406-starrocks-\u96c6\u7fa4",children:"\u7ba1\u7406 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u6267\u884c\u547d\u4ee4 ",(0,n.jsx)(s.code,{children:"kubectl edit"})," \u6216\u8005 ",(0,n.jsx)(s.code,{children:"kubectl patch"})," \u66f4\u65b0 StarRocks \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\uff0c\u6765\u7ba1\u7406 StarRocks \u96c6\u7fa4\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u5347\u7ea7-starrocks-\u96c6\u7fa4",children:"\u5347\u7ea7 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u5347\u7ea7 BE \u8282\u70b9"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u6307\u5b9a\u65b0\u7684 BE \u955c\u50cf\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,n.jsx)(s.code,{children:"starrocks/be-ubuntu:latest"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksBeSpec":{"image":"starrocks/be-ubuntu:latest"}}}\'\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u5347\u7ea7 FE \u8282\u70b9"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u6307\u5b9a\u65b0\u7684 FE \u955c\u50cf\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,n.jsx)(s.code,{children:"starrocks/fe-ubuntu:latest"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksFeSpec":{"image":"starrocks/fe-ubuntu:latest"}}}\'\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u5347\u7ea7\u8fc7\u7a0b\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," \u547d\u4ee4\u89c2\u5bdf\u5347\u7ea7\u8fdb\u5ea6\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u6269\u7f29\u5bb9-starrocks-\u96c6\u7fa4",children:"\u6269\u7f29\u5bb9 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsx)(s.p,{children:"\u672c\u6587\u4ee5\u6269\u5bb9 BE \u96c6\u7fa4\u548c FE \u96c6\u7fa4\u4e3a\u4f8b\u3002"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6269\u5bb9 BE \u96c6\u7fa4"})}),"\n",(0,n.jsx)(s.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u6269\u5bb9 BE \u96c6\u7fa4\u81f3 9 \u4e2a\u8282\u70b9\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksBeSpec":{"replicas":9}}}\'\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6269\u5bb9 FE \u96c6\u7fa4"})}),"\n",(0,n.jsx)(s.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u6269\u5bb9 FE \u96c6\u7fa4\u81f3 4 \u4e2a\u8282\u70b9\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:'kubectl -n starrocks patch starrockscluster starrockscluster-sample --type=\'merge\' -p \'{"spec":{"starRocksFeSpec":{"replicas":4}}}\'\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u6269\u5bb9\u8fc7\u7a0b\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks get pods"})," \u547d\u4ee4\u89c2\u5bdf\u6269\u5bb9\u8fdb\u5ea6\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u81ea\u52a8\u6269\u7f29\u5bb9-cn-\u96c6\u7fa4",children:"\u81ea\u52a8\u6269\u7f29\u5bb9 CN \u96c6\u7fa4"}),"\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,n.jsx)(s.code,{children:"kubectl -n starrocks edit src starrockscluster-sample"})," \u914d\u7f6e CN \u81ea\u52a8\u6269\u7f29\u7b56\u7565\u3002\u60a8\u53ef\u4ee5\u6307\u5b9a\u8d44\u6e90\u6307\u6807\u4e3a CN \u7684\u5185\u5b58\u548c CPU \u5e73\u5747\u4f7f\u7528\u7387\u3001\u89e6\u53d1\u5f39\u6027\u4f38\u7f29\u7684\u9608\u503c\u3001\u5f39\u6027\u4f38\u7f29\u4e0a\u9650\u548c\u4e0b\u9650\uff08\u5373 CN \u6570\u91cf\u7684\u4e0a\u4e0b\u9650\uff09\u3002"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u6ce8\u610f"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u914d\u7f6e\u4e86 CN \u81ea\u52a8\u6269\u7f29\u5bb9\u7b56\u7565\uff0c\u5219\u8bf7\u5220\u9664 CN \u7684 ",(0,n.jsx)(s.code,{children:"replicas"})," \u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Kubernetes \u8fd8\u652f\u6301\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"behavior"}),"\uff0c\u6839\u636e\u4e1a\u52a1\u573a\u666f\u5b9a\u5236\u6269\u7f29\u5bb9\u884c\u4e3a\uff0c\u5b9e\u73b0\u5feb\u901f\u6269\u5bb9\uff0c\u7f13\u6162\u7f29\u5bb9\uff0c\u7981\u7528\u7f29\u5bb9\u7b49\u3002\u66f4\u591a\u81ea\u52a8\u6269\u5bb9\u5bb9\u7b56\u7565\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/run-application/horizontal-pod-autoscale/",children:"Pod \u6c34\u5e73\u81ea\u52a8\u6269\u7f29"}),"\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u4e0b\u662f StarRocks \u63d0\u4f9b\u7684 ",(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/examples/starrocks/deploy_a_starrocks_cluster_with_cn.yaml",children:"CN \u81ea\u52a8\u6269\u7f29\u7b56\u7565\u6a21\u7248"}),"\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"  starRocksCnSpec:\n    image: starrocks/cn-ubuntu:latest\n    limits:\n      cpu: 16\n      memory: 64Gi\n    requests:\n      cpu: 16\n      memory: 64Gi\n    # when you use autoscalingPolicy, it is recommended that replicas removed from manifests.\n    autoScalingPolicy: # Automatic scaling policy of the CN cluster.\n      maxReplicas: 10 # The maximum number of CNs is set to 10.\n      minReplicas: 1 # The minimum number of CNs is set to 1.\n      # operator creates an HPA resource based on the following field.\n      # see https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/ for more information.\n      hpaPolicy:\n        metrics: # Resource metrics\n          - type: Resource\n            resource:\n              name: memory  # The average memory usage of CNs is specified as a resource metric.\n              target:\n                # The elastic scaling threshold is 60%.\n                # When the average memory utilization of CNs exceeds 60%, the number of CNs increases for scale-out.\n                # When the average memory utilization of CNs is below 60%, the number of CNs decreases for scale-in.\n                averageUtilization: 60\n                type: Utilization\n          - type: Resource\n            resource:\n              name: cpu # The average CPU utilization of CNs is specified as a resource metric.\n              target:\n                # The elastic scaling threshold is 60%.\n                # When the average CPU utilization of CNs exceeds 60%, the number of CNs increases for scale-out.\n                # When the average CPU utilization of CNs is below 60%, the number of CNs decreases for scale-in.\n                averageUtilization: 60\n                type: Utilization\n        behavior: # \u6839\u636e\u4e1a\u52a1\u573a\u666f\u5b9a\u5236\u6269\u7f29\u5bb9\u884c\u4e3a\uff0c\u5b9e\u73b0\u5feb\u901f\u6269\u5bb9\u3001\u7f13\u6162\u7f29\u5bb9\u3001\u7981\u7528\u7f29\u5bb9\u7b49\u3002\n          scaleUp:\n            policies:\n              - type: Pods\n                value: 1\n                periodSeconds: 10\n          scaleDown:\n            selectPolicy: Disabled\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u4e3b\u8981\u5b57\u6bb5\u4ee5\u53ca\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u6c34\u5e73\u6269\u7f29\u65f6 CN \u6570\u91cf\u7684\u4e0a\u9650\u548c\u4e0b\u9650\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"maxReplicas: 10 # CN \u6570\u91cf\u4e0a\u9650\u4e3a 10\nminReplicas: 1  # CN \u6570\u91cf\u4e0b\u9650\u4e3a 1\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u89e6\u53d1\u6c34\u5e73\u6269\u7f29\u7684\u9608\u503c\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"# \u89e6\u53d1\u6c34\u5e73\u6269\u7f29\u5bb9\u7684\u9608\u503c\uff0c\u4f8b\u5982\u8d44\u6e90\u6307\u6807\u4e3a Kubernetes \u96c6\u7fa4\u4e2d CN CPU \u4f7f\u7528\u7387\u3002\u5f53 CPU \u4f7f\u7528\u7387\u8d85\u8fc7 60% \u65f6\uff0c\u589e\u52a0 CN \u6570\u91cf\u8fdb\u884c\u6269\u5bb9\uff0c\u4f4e\u4e8e 60% \u65f6\uff0c\u51cf\u5c11 CN \u6570\u91cf\u8fdb\u884c\u7f29\u5bb9\u3002\n- type: Resource\n  resource:\n    name: cpu\n    target:\n      averageUtilization: 60\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u95ee\u9898\u63cf\u8ff0"}),"\uff1a\u6267\u884c ",(0,n.jsx)(s.code,{children:"kubectl apply -f xxx"})," \u90e8\u7f72\u5b9a\u5236\u8d44\u6e90 StarRocksCluster \u65f6\uff0c\u62a5\u9519 ",(0,n.jsx)(s.code,{children:'The CustomResourceDefinition "starrocksclusters.starrocks.com" is invalid: metadata.annotations: Too long: must have at most 262144 bytes'}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u539f\u56e0\u5206\u6790"}),"\uff1a\u56e0\u4e3a\u6bcf\u6b21\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"kubectl apply -f xxx"})," \u521b\u5efa\u6216\u8005\u66f4\u65b0\u8d44\u6e90\u65f6\uff0c\u90fd\u4f1a\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a kubectl.kubernetes.io/last-applied-configuration \u7684 metadata \u6ce8\u89e3\u3002\u8be5 metadata \u6ce8\u89e3\u4e3a JSON \u683c\u5f0f\uff0c\u6ce8\u89e3\u503c\u5305\u542b\u4e86\u7528\u6765\u521b\u5efa\u5bf9\u8c61\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u3002",(0,n.jsx)(s.code,{children:"kubectl apply -f xxx"})," \u9002\u7528\u4e8e\u5927\u90e8\u5206\u60c5\u51b5\uff0c\u4f46\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u4f8b\u5982\u5b9a\u5236\u8d44\u6e90\u7684\u914d\u7f6e\u6587\u4ef6\u8fc7\u5927\uff0c\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4 metadata \u6ce8\u89e3\u7684\u5927\u5c0f\u8d85\u51fa\u4e0a\u9650\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\u89e3\u51b3\u63aa\u65bd"}),"\uff1a\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u90e8\u7f72\u5b9a\u5236\u8d44\u6e90 StarRocksCluster\uff0c\u5219\u5efa\u8bae\u60a8\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"kubectl create -f xxx"}),"\u3002\u5982\u679c\u73af\u5883\u4e2d\u5df2\u7ecf\u90e8\u7f72\u5b9a\u5236\u8d44\u6e90\uff0c\u60a8\u9700\u8981\u66f4\u65b0\u5b9a\u5236\u8d44\u6e90\u7684\u914d\u7f6e\uff0c\u5219\u5efa\u8bae\u60a8\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"kubectl replace -f xxx"}),"\u3002"]}),"\n"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},33454:(e,s,r)=>{r.d(s,{Z:()=>n});const n=r.p+"assets/images/starrocks_operator-9cab6c348d06e353636bf21afc7e3815.png"},11151:(e,s,r)=>{r.d(s,{Zo:()=>l,ah:()=>t});var n=r(67294);const c=n.createContext({});function t(e){const s=n.useContext(c);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||a:t(e),n.createElement(c.Provider,{value:l},s)}}}]);