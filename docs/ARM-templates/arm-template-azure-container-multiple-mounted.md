---
sidebar_position: 1
---
# How to Mount Multiple Volumes to Azure Container Using Azure Resource Manager

```
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "variables": {
      "container1name": "<CONTAINER-NAME>",
   
      "container1image": "jenkins/jenkins:lts"
    },
  "resources": [
    {
      "name": "<CONATINER_INSTANCE_NAME>",
      "type": "Microsoft.ContainerInstance/containerGroups",
      "apiVersion": "2019-12-01",
      "location": "[resourceGroup().location]",
      "properties": {
        "containers": [
          {
            "name": "[variables('container1name')]",
            "properties": {
              "image": "[variables('container1image')]",
              "resources": {
                "requests": {
                  "cpu": 1,
                  "memoryInGb": 1.5
                }
              },
              "ports": [
                {
                  "port": 8080,
                  "protocol": "TCP"
                },
                {
                  "port": 50000,
                  "protocol": "TCP"
                }
              ],
              "volumeMounts": [
                  {
                      "name": "<FILE_SHARE_NAME>",
                      "mountPath": "/var/jenkins_home"
                      
                    },
                    {
                      "name": "<ANOTHER_FILE_SHARE_NAME>",
                      "mountPath": "/var2/"
                      
                    }                    
              ]
            }
          }
        ],
        "osType": "Linux",
        "ipAddress": {
          "type": "Public",
          "ports": [
            {
              "protocol": "tcp",
              "port": "8080"
            },
            {
              "protocol": "tcp",
              "port": "50000"
            }
          ],
          "dnsNameLabel": "<DNS_NAME>"
        },
        "volumes": [{
          "name": "<FILE_SHARE_NAME>",
          "azureFile": {
            "shareName": "<FILE_SHARE_NAME>",
            "storageAccountKey": "<CONTAINER_ACCESS_KEY>",
            "storageAccountName": "<CONTAINER_NAME>"
          }},
          {
            "name": "<ANOTHER_FILE_SHARE_NAME>",
            "azureFile": {
              "shareName": "<ANOTHER_FILE_SHARE_NAME>",
              "storageAccountName": "<CONTAINER_NAME>",
              "storageAccountKey": "<CONTAINER_ACCESS_KEY>"
            }
        }
        
        ]
      }
    }
  ]
  




```

## Execute Command

* Go to the powershell as an adminstrator

* Save the ARM Template to the `deploy-aci.json` and make sure you remember the directory of the JSON file.

* Execute the following command

```
az container create --resource-group myResourceGroup --file deploy-aci.yaml

```