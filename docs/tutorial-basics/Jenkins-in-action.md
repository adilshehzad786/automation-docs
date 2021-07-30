---
title : Jenkins in Action
sidebar_position: 6
---
### Creating New Jenkins Job

- Click on the **New Item**
- Enter the Project Name and Select the FreeStyle Project
- In the **General** enter your the descriptions
- Now click on the **Source Code Management**
- Click on **Git**

<h6 class="alert"> Now Go to the Repository , You can use GitHub , GitLab or any Source Code Management Service provider </h6>

- Copy the Git URL
_Please make sure the copy url ended with the .git_
```git
https://github.com/adilshehzad786/Daraz-Automation-Using-Python-Selenium.git

this is just for the demo
```
### No valid crumb Error Solving

![alt text](/img/crumb-error.png "Crumb Error ")
In the Latest Update of the Jenkins while adding Git Link and Credentials facing HTTP ERROR 403 No valid crumb was included in the request error. You can solve this error using these steps .

* you have to installed the plugin called "Strict Crumb Issuer".

* Once installed restart the jenkins service
got to "Manage Jenkins" --> "Configure Global Security" --> Under CSRF Protection, select "Strict Crumb Issue" from the drop down list --> Click on Advance and uncheck everything but select "Prevent Breach Attack" option. --> Apply and save.

* Now run you add the Git Link to jenkins source management.

### Adding Username and Password

Now Click on the Add button which is available in the Credentials 

- in the username opton type your Github or Gitlab username . 

- for the password you need to generate the Token from the GitHub settings

- Go to the [GitHub Setting](https://github.com/settings)

- then go the Developer settings

- Now click on the Peronal Access token 

- Create your token , and paste the token to the Jenkins Credentials

- Now use your GitHub Credentials on the Jenkins

- Enter the branch name where you deployed the whole project

### Build

- Click onthe Add build step 
- and click on the execute shell 

_we will use bash here for the jenkins automation_

The script sample would be look like this 

```bash
#!bin/bash

/usr/bin/python3.7 -m venv v1
source "v1/bin/activate"
pip install -r requirements.txt

/usr/bin/python3.7 -m unittest test_mainpy.py

the bash scripts would be vary with respective to the python script
```
### Final Output 

![alt text](/img/success.png "Python")


### Received Email from Selenium 

![alt text](/img/email.png "Python")


