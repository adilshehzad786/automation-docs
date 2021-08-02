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

```

az container create --resource-group <resourceGroupName> --name <container-name> --image jenkins/jenkins:lts --dns-name-label <jenkins-dns-name> --ports 8080 50000 --azure-file-volume-account-name <azure-storage> --azure-file-volume-account-key <container-key> --azure-file-volume-share-name <azure-file-share-volume-name> --azure-file-volume-mount-path /var/jenkins_home

```
