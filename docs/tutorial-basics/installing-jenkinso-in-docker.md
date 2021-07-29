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


## Executing the docker Image 

```
docker exec -it jenkins-local /bin/bash
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