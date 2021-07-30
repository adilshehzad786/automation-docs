---
title : Schedule a Script 
sidebar_position: 7
---

# Scheduling the Jenkins Using Build Triggers

* Go to the Jenkins Configurations
* Go to the Build Triggers
[X] Check the Build Periodically 

**Jenkins used a cron expression, and the different fields are:**

* MINUTES Minutes in one hour (0-59)
* HOURS Hours in one day (0-23)
* DAYMONTH Day in a month (1-31)
* MONTH Month in a year (1-12)
* DAYWEEK Day of the week (0-7) where 0 and 7 are sunday**

If you want to schedule your build `every 5 minutes`, this will do the job : `*/5 * * * *`

If you want to schedule your build `every day at 8h00`, this will do the job : `0 8 * * *`

## CRON Editor

crontab guru: https://crontab.guru

## predefined aliases to schedule build

Jenkins also supports predefined aliases to schedule build:

`@hourly`, `@daily`, `@weekly`, `@monthly`, `@midnight`

`@hourly` --> Build every hour at the beginning of the hour --> `0 * * * *`

`@daily, @midnight` --> Build every day at midnight --> `0 0 * * *`

`@weekly` --> Build every week at midnight on Sunday morning --> `0 0 * * 0`

`@monthly `--> Build every month at midnight of the first day of the month --> `0 0 1 * *`