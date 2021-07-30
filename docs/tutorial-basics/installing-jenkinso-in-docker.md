---
sidebar_position: 3
---

# Installing jenkins in the Docker Container

## Pulling jenkins Image

```
docker pull jenkins/jenkins:lts
```

## Presisting the Jenkins Storage

```
jenkins volume create jenkinsvol1
```
## Creating Jenkins in Docker

```
docker container run -d -p 8356:8080 -v jenkinsvol1:/var/jenkins_home --name jenkins-local jenkins/jenkins:lts

```

## Administrator Password

```
docker exec -itu root {containerName} passwd

```

## Executing the docker Image 

```
docker exec -it jenkins-local /bin/bash
```
## Root Mode 

```
su 

```
## Administartor Password

```
cat /var/jenkins_home/secrets/initialAdminPassword
```


![alt text](/img/jenkins.png "Jenkins")



* Click on the Custom Plugin to Install Plugins. 
* Create your Username 
* Configure the Jenkins to the Default local Address

```
localhost:8356
```
* Click on Start Using Jenkins


![alt text](/img/jenkinshome.png "Jenkins")

_**You can refer to the this for the [Python Installation](/docs/tutorial-basics/installing-python) in the Jenkins-local container.**_


<h4 class="alert" > Here are some tips 
<ul>
<li>
You can execute the commands without using sudo 
</li>

<li>
use the apt update command before installing python to the docker container
</li>

<li>
you can execute the python version using /usr/bin/python3.7
</li>

</ul>
</h4>