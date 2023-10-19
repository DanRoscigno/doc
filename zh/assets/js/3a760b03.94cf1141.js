"use strict";(self.webpackChunkstarrocks=self.webpackChunkstarrocks||[]).push([[69426],{2984:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var n=r(85893),t=r(11151);const c={displayed_sidebar:"Chinese"},l="\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4",a={id:"deployment/helm",title:"\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4",description:"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002Helm Chart \u662f Helm \u5305\uff0c\u5305\u542b\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u6240\u6709\u8d44\u6e90\u5b9a\u4e49\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u4f7f\u7528 Helm \u81ea\u52a8\u5316\u90e8\u7f72 StarRocks \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0/deployment/helm.md",sourceDirName:"deployment",slug:"/deployment/helm",permalink:"/zh/docs/3.0/deployment/helm",draft:!1,unlisted:!1,editUrl:"https://github.com/StarRocks/docs.zh-cn/edit/main/deployment/helm.md",tags:[],version:"3.0",frontMatter:{displayed_sidebar:"Chinese"},sidebar:"Chinese",previous:{title:"\u68c0\u67e5\u73af\u5883\u914d\u7f6e",permalink:"/zh/docs/3.0/deployment/environment_configurations"},next:{title:"\u89c4\u5212 StarRocks \u96c6\u7fa4",permalink:"/zh/docs/3.0/deployment/plan_cluster"}},o={},h=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72\u64cd\u4f5c",id:"\u90e8\u7f72\u64cd\u4f5c",level:2},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:2}];function i(e){const s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u4f7f\u7528-helm-\u90e8\u7f72-starrocks-\u96c6\u7fa4",children:"\u4f7f\u7528 Helm \u90e8\u7f72 StarRocks \u96c6\u7fa4"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://helm.sh/",children:"Helm"})," \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002",(0,n.jsx)(s.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm Chart"})," \u662f Helm \u5305\uff0c\u5305\u542b\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u6240\u6709\u8d44\u6e90\u5b9a\u4e49\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u4f7f\u7528 Helm \u81ea\u52a8\u5316\u90e8\u7f72 StarRocks \u96c6\u7fa4\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/3.0/deployment/sr_operator#%E5%88%9B%E5%BB%BA-kubernetes-%E9%9B%86%E7%BE%A4",children:"\u521b\u5efa Kubernetes \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://helm.sh/docs/intro/quickstart/",children:"\u5b89\u88c5 Helm"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u90e8\u7f72\u64cd\u4f5c",children:"\u90e8\u7f72\u64cd\u4f5c"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u6dfb\u52a0 StarRocks \u7684 Helm Chart Repo\u3002Helm Chart \u5305\u62ec StarRocks Operator \u548c\u5b9a\u5236\u8d44\u6e90 StarRocksCluster \u7684\u5b9a\u4e49\u3002"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u6dfb\u52a0 Helm Chart Repo\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"helm repo add starrocks-community https://starrocks.github.io/starrocks-kubernetes-operator\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u66f4\u65b0 Helm Chart Repo \u81f3\u6700\u65b0\u7248\u672c\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"helm repo update\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u67e5\u770b\u6240\u6dfb\u52a0\u7684 Helm Chart Repo\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"$ helm search repo starrocks-community\nNAME                                     CHART VERSION   APP VERSION   DESCRIPTION\nstarrocks-community/kube-starrocks       1.8.0           3.1-latest    kube-starrocks includes two subcharts, starrock...\nstarrocks-community/operator             1.8.0           1.8.0         A Helm chart for StarRocks operator\nstarrocks-community/starrocks            1.8.0           3.1-latest    A Helm chart for StarRocks cluster\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 Helm Chart \u9ed8\u8ba4\u7684 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/helm-charts/charts/kube-starrocks/values.yaml",children:"values.yaml"})})," \u6765\u90e8\u7f72 StarRocks Operator \u548c StarRocks \u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u65b0\u5efa YAML \u6587\u4ef6\u5e76\u4e14\u81ea\u5b9a\u4e49\u914d\u7f6e\u6765\u90e8\u7f72\u3002"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u90e8\u7f72\u3002\n\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u90e8\u7f72 StarRocks Operator \u548c StarRocks \u96c6\u7fa4\u3002StarRocks \u96c6\u7fa4\u5305\u542b\u4e00\u4e2a FE \u548c\u4e00\u4e2a BE\u3002"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"$ helm install starrocks starrocks-community/kube-starrocks\n# \u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff0c\u8868\u793a\u6b63\u5728\u90e8\u7f72 StarRocks Operator \u548c StarRocks \u96c6\u7fa4\u3002\nNAME: starrocks\nLAST DEPLOYED: Tue Aug 15 15:12:00 2023\nNAMESPACE: starrocks\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u8fdb\u884c\u90e8\u7f72\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u521b\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,n.jsx)(s.strong,{children:"my-values.yaml"}),"\uff0c\u5728 YAML \u6587\u4ef6\u4e2d\u81ea\u5b9a\u4e49 StarRocks Operator \u548c StarRocks\n\u96c6\u7fa4\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u652f\u6301\u914d\u7f6e\u7684\u53c2\u6570\u548c\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 Helm Chart \u9ed8\u8ba4\u7684 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/StarRocks/starrocks-kubernetes-operator/blob/main/helm-charts/charts/kube-starrocks/values.yaml",children:"values.yaml"})})," \u4e2d\u7684\u6ce8\u91ca\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u4f7f\u7528 ",(0,n.jsx)(s.strong,{children:"my-values.yaml"})," \u4e2d\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u90e8\u7f72 StarRocks Operator \u548c StarRocks \u96c6\u7fa4\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:" helm install -f my-values.yaml starrocks starrocks-community/kube-starrocks\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u90e8\u7f72\u9700\u8981\u4e00\u5b9a\u65f6\u95f4\u3002\u671f\u95f4\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u4e0a\u8ff0\u90e8\u7f72\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u4e2d\u7684\u63d0\u793a\u547d\u4ee4\u67e5\u8be2\u90e8\u7f72\u72b6\u6001\uff0c\u9ed8\u8ba4\u7684\u63d0\u793a\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:'$ kubectl --namespace default get starrockscluster -l "cluster=kube-starrocks"\n# \u72b6\u6001\u663e\u793a\u4e3a running\uff0c\u5219\u8868\u793a\u5df2\u7ecf\u6210\u529f\u90e8\u7f72\u3002\nNAME             FESTATUS   CNSTATUS   BESTATUS\nkube-starrocks   running               running\n'})}),"\n",(0,n.jsxs)(s.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,n.jsx)(s.code,{children:"kubectl get pods"})," \u67e5\u770b\u90e8\u7f72\u72b6\u6001\u3002\u5982\u679c\u6240\u6709 Pod \u5904\u4e8e ",(0,n.jsx)(s.code,{children:"Running"})," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd ",(0,n.jsx)(s.code,{children:"READY"}),"\uff0c\u5219\u8868\u793a\u5df2\u7ecf\u6210\u529f\u90e8\u7f72\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"$ kubectl get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\nkube-starrocks-be-0                        1/1     Running   0          2m50s\nkube-starrocks-fe-0                        1/1     Running   0          4m31s\nkube-starrocks-operator-69c5c64595-pc7fv   1/1     Running   0          4m50s\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u540e\u7eed\u6b65\u9aa4",children:"\u540e\u7eed\u6b65\u9aa4"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u8bbf\u95ee StarRocks \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.p,{children:["\u652f\u6301\u4ece Kubernetes \u96c6\u7fa4\u5185\u5916\u8bbf\u95ee StarRocks \u96c6\u7fa4\uff0c\u5177\u4f53\u64cd\u4f5c\uff0c\u8bf7\u53c2\u89c1",(0,n.jsx)(s.a,{href:"/zh/docs/3.0/deployment/sr_operator#%E8%AE%BF%E9%97%AE-starrocks-%E9%9B%86%E7%BE%A4",children:"\u8bbf\u95ee StarRocks \u96c6\u7fa4"}),"\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u7ba1\u7406 StarRocks Operator \u548c StarRocks \u96c6\u7fa4"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u9700\u8981\u66f4\u65b0 StarRocks Operator \u548c StarRocks \u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u8bf7\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"https://helm.sh/docs/helm/helm_upgrade/",children:"Helm Upgrade"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"\u5982\u679c\u9700\u8981\u5378\u8f7d StarRocks Operator \u548c StarRocks \u96c6\u7fa4\uff0c\u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Bash",children:"helm uninstall starrocks\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u5728 Artifict Hub \u4e0a\u641c\u7d22 StarRocks \u7ef4\u62a4\u7684 Helm Chart"}),"\n\u8bf7\u53c2\u89c1 ",(0,n.jsx)(s.a,{href:"https://artifacthub.io/packages/helm/kube-starrocks/kube-starrocks",children:"kube-starrocks"}),"\u3002"]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},11151:(e,s,r)=>{r.d(s,{Zo:()=>a,ah:()=>c});var n=r(67294);const t=n.createContext({});function c(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function a({components:e,children:s,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||l:c(e),n.createElement(t.Provider,{value:a},s)}}}]);