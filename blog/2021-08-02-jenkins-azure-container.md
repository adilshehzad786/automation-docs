---
slug: Jenkins-on-Serverless-Azure-Container-instance
title: Jenkins on Serverless Azure Container Instance
author: Adil
author_title: Maintainer of Automation Docs
author_url: https://github.com/adilshehzad786
author_image_url: https://avatars.githubusercontent.com/u/53600644?v=4
tags: [jenkins,azure container, serverless]
---

In this blog, we will learn how to run automation jenkins job on the Azure container instance which is the serverless container instance by the azure. before starting the blogs, make sure you have an active subcsription of the azure . 

## Tools we are using 

* Python 3.9 
* Git
* GitHub
* Azure Container Storage

## Downloading Azure CLI

You can install the Azure CLI from the offical [Mirosoft Documentation](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
). 

You can check wether the Azure Cli is installed or not by the following command.

_**Make sure you are using powershell in the adminstrator mode**_
```
az version

```
and the powershell will return you the installed version

```
{
  "azure-cli": "2.26.1",
  "azure-cli-core": "2.26.1",
  "azure-cli-telemetry": "1.0.6",
  "extensions": {}
}

```
## Login To Azure Account using Azure CLI

Before start creating the jenkins on the azure container we need to login to our azure account .

```
az login 
```
or you can refer to this [official documentation](https://docs.microsoft.com/en-us/cli/azure/account?view=azure-cli-latest).

## Installation of Jenkins with Single Mounted Volume

1. Go to the [Azure Portal](https://portal.azure.com/) 

2. Go to the Resource Groups

3. Click on the Create and create your Resource Group . 


![alt text](/img/resource.png "Resource ")

* When the resource Group will be created , now you need to create a container inside your resource group . 

_**Please make sure the Container region is same as your ResourceGroup Region because it will provide low latency .**_

* Click on Create and then go to the Storage Account , and then click on the Create Button.

![alt text](/img/storage.png "Resource ")

* Review and Create your Container Storage.

* Now go to the Resource and then on the left side Go to the Azure File

* Now we need to create the file share 

![alt text](/img/fileshare.png "Resource ")

* Now we need the Access keys to access the Container Storage

* Go to the Security + networking , in the security and networking go to the access keys.

the access key look like this 

**Storage Account Name**
```
dockerjenkinstorage

```
**key1**

```
WUEnOiglxPOtIrg2xF/PB+WOxjjshshsuugegechcbjcvjcbeuheiuhuigwwygwgw==

```

```


az container create --resource-group <resourceGroupName> --name <container-name> --image jenkins/jenkins:lts --dns-name-label <jenkins-dns-name> --ports 8080 50000 --azure-file-volume-account-name <azure-storage> --azure-file-volume-account-key <container-key> --azure-file-volume-share-name <azure-file-share-volume-name> --azure-file-volume-mount-path /var/jenkins_home

```

**The command will be look like this one**


```


az container create --resource-group jenkins-docker --name jenkins-local --image jenkins/jenkins:lts --dns-name-label jenkinsdocker100 --ports 8080 50000 --azure-file-volume-account-name dockerjenkinstorage --azure-file-volume-account-key WUEnOiglxPOtIrg2xF/PB+WOxjjshshsuugegechcbjcvjcbeuheiuhuigwwygwgw== --azure-file-volume-share-name jenkinsfileshare1 --azure-file-volume-mount-path /var/jenkins_home

```

**Output**

![alt text](/img/tutorial/output.PNG "Resource ")


* Now go to your Resource Group , and inside the Resouce group , now you will have jenkins-local which is the Azure Container Instance.
If you go to the container storage and in the container storage , go to the file share , you will see that the jenkins files will be stored in the volume instance. 

_**Always make sure docker is that the container is mounted with the volume , otherwise the jenkins will not stored the data permantely.**_


## Starting Jenkins Server

The Jenkins will extract all the files in the File share which you attached with the help of the Azure file share.
* Now go to the Container instances , and copy the public dns url .
the url will look like this

```
http://jenkinsdocker100.eastus.azurecontainer.io
```
and jenkins will be working on the **port 8080**

```
http://jenkinsdocker100.eastus.azurecontainer.io:8080
```

* Now we need to copy  the 