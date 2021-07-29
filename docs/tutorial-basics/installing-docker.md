---
sidebar_position: 3
title: Installing Docker to Linux
---

## Installing Docker to Linux Machine

- First Update the Packages 

```
sudo apt update
```

- Install the Dependencies

```
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

- Import the GPG key using Curl 

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add
```

- Add the Docker APT 

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
- Update and Install the Docker 

```
sudo apt update
```
```
sudo apt install docker-ce docker-ce-cli containerd.io

```

- Check either the docker is installed or not.

```
sudo systemctl status docker
```
or 

```
docker --version
```

![alt text](/img/docker.png "Python")

