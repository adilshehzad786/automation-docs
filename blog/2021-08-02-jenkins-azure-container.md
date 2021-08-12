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

![alt text](/img/jenkins-2.png "Resource ")

* Now we need to copy  the Settings which are availables on the left menu , in the settings go to the Containers.

* In the container , go to the connect , and connect to the docker instance, through which we will get the adminstartor password for the jenkins server.

**the command will be look like this**

```
cat /var/jenkins_home/secrets/initialAdminPassword

```
![alt text](/img/sandbox.png "Resource ")

## Installing Jenkins Plugin 

After geting the Jenkins Password, we need to install the jenkins plugins to our server. 

* on the Customize Jenkins page , click on the installed suggested plugins

![alt text](/img/plugins.png "Resource ")

Incase of the Plugin Forbidden error then you need to restart the Jenkins server. 
by using this command you can restart your jenkins server

```
http://jenkinsdocker100.eastus.azurecontainer.io:8080/restart

```
and press Yes to restart your Jenkins Server.

## Create First Admin User

You can add your details to create an admin user or you can also skip and go as an admin.

## Instance Configuration

Your instance will be run on the port 8080 , so save and finish the setting without changes anything.

Yahoo ! Jenkins is now ready , now you can use your jenkins server.

before creating our first job we need to install the python latest verion and google chrome to our file , so you need to go to the Settings -> Containers and connect with your container instance.

## Navigation to the File Share

**List Directories and files**

```
ls
```
**List directories , files and hidden files**

```
ls -a

```
 
**Navigation to the Directory**

```
cd var
```
![alt text](/img/ls.png "Resource ")


## Installation of Python

### Navigating to the Permanent Storage

```
cd jenkins_home

```

### Downloading python 

```
wget  https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz
```
![alt text](/img/downloadoython.png "Resource ")


### Uncompress the binaries

```
tar -zxvf Python-3.9.6.tgz
```

### Installating the Software properties common 

Before installting the Software Properties common update the container first

```
apt update

```

```
apt install software-properties-common
```

### Installation of Zlib 

```
apt-get install zlib1g-dev
```

### Build Essentials

```
apt-get install build-essential
```
### Installation of More Essentials
```
apt install libssl-dev
apt install libncurses5-dev
apt install libsqlite3-dev
apt install libreadline-dev
apt install libtk8.6
apt install libgdm-dev
apt install libdb4o-cil-dev
apt install libpcap-dev

```
### Making Directory 

```
mkdir python
```
Now you need to go to the Python Extract file because from the Python-3.9.0 file we will install the python to the jenkins_home/python3.9

### Navigating to the Python Directory
The python directory is changed to 3.9.0 -3.9.6 ,so kindly update there changes according to the new version.
```
cd Python-3.9.6

```

## Configure Python Installation to Specific Directory 

```
./configure --prefix=/var/jenkins_home/python
```
### Compile and install
*The Linux make command is used to build and maintain groups of programs and files from the source code. In Linux, it is one of the most frequently used commands by the developers. It assists developers to install and compile many utilities from the terminal.
```

make
```

```
make install
```


### Installing PIP

```
curl https://bootstrap.pypa.io/get-pip.py
```
```
/var/jenkins_home/python/bin/python3.9 get-pip.py
```
You can check PIP is installed or not by the following command

```
/var/jenkins_home/python/bin/python3.9 -m pip --version
```
![alt text](/img/pip.png "Resource ")

### Installating VirtualENV

```
/var/jenkins_home/python/bin/python3.9 -m pip install virtualenv
```
## Google Chrome Installation

Refer to this [Setup](/docs/tutorial-basics/installing-google-chrome) to install Google chrome 

## Jenkins Job

Before starting the jenkins job , let verify the python and PIP Path.

to verify pip and python , i will use the following commands, as my python and pip installed in the Jenkins_home directory so my command will be look like this 

```python
/var/jenkins_home/python/bin/python3.9 --version
```
and PIP command will look like this 

```python
/var/jenkins_home/python/bin/python3.9 -m pip --version
```

after verifying ,  now its time to build our first Job , as i already discuss , how to build your own Jenkins , You can go to this [Setup](/docs/tutorial-basics/Jenkins-in-action).

## Bash Script 

I am improving the bash automation on daily basics, the the bash script will look like this 

```bash
#!/bin/bash
/var/jenkins_home/python/bin/python3.9 -m venv v1
source "/var/jenkins_home/workspace/SeleniumDarazJob/v1/bin/activate"
/var/jenkins_home/python/bin/python3.9 -m pip install -r requirements.txt
/var/jenkins_home/python/bin/python3.9 -m unittest test_mainpy.py

```

## Conclusion 
As we learned , how to install jenkins , and use the python and Google chrome along with the chromedriver, so we can automate the process using serverless way . 
You can send the pull request if you find any kind of bug . 

![alt text](/img/final.png "Resource ")


### Mounted Multiple Volumes to Azure Container Instance Using Azure Resource Manager

Refer to this [ARM Setup](/docs/ARM-templates/arm-template-azure-container-multiple-mounted) for the Multiple Mount 
