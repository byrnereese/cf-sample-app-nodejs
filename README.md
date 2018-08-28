# My First Pivotal Web Services App

This is my first Pivotal Web Services app, created to explore the platform and provide feedback to the product team. 

*This app is not intended for use by others.*

## Objectives

To explore the Web Services product I gave myself the following objectives:

* Deploy a sample CF app.
* Customize sample CF app in minor way. 
* Add additional logic to sample CF app.
* Explore additional services in CF. 

## Steps Followed

1. Followed the Quick Start guide to create a simple Spring app, and according to instructions I also...
  * Scaled up the app to 2 servers
  * Modified the size of the instances both in memory and disk space
2. Signed up for an Elephant SQL account, created and populated simple table with data
3. Found a [node.js CF sample app](https://github.com/byrnereese/cf-sample-app-nodejs), forked it
4. Attached an ElephantSQL postgres database
5. Tailed log files for debugging purposes
6. Customized app to connect to database and display a list of “visitors” 
