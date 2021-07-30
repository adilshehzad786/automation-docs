---
sidebar_position: 1
---

# Installing Python

## How to Install Python to Linux Machine & Containers

- Update the Packages

```
sudo apt update

```
- installing the prerequisites:
```
sudo apt install software-properties-common
```
- Next , Add the DeadSnake PPA to your sourcelist 

```
sudo add-apt-repository ppa:deadsnakes/ppa

```
When prompted press **Enter** to continue:

* When you added the Repository , You are good to go for the installation of the Python3.7

```
sudo apt install python3.7
```

* Check your Version 

```
python3.7 --version
```
or you can try find the python using this command

```
whereis python3.7 

```
or 

```
/usr/bin/python3.7 --version
```

**_ Incase if you are facing Python package not found then use the update command first before installing Python_**

![alt text](/img/python.png "Python")

## Installation of Python Venv

```
apt-get install python3-venv

```

## Installing PIP 

```
sudo apt-get update
```

```
sudo apt-get install python3-pip

```

## Checking PIP 

```
/usr/bin/python3.7 -m pip --version
```