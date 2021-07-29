---
title : Jenkins in Action
sidebar_position: 4
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