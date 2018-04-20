# Asset Management System

The Asset Managment System (AMS) is a project began by students of the Aug-2017 MAX Technical Training boot camp for use by the Warren County Township Administration.

## Technology

AMS is written using Angular and Typescript on the front-end and Visual Studio, C#.Net, EntityFramework, MVC, and WebAPI on the back-end and SQL Server as the database.

## Software Required

The following is a list of the required software that must be installed to build and run AMS.

1. SQL Server 2017 Express
2. Visual Studio 2017 Community Edition
    a. Web application development component
    b. C#.Net Desktop applications
3. Node.js (LTS recommended)
4. Typescript
5. Angular/CLI
6. Git

## To build AMS

1. Create a new directory named AMS
2. cd into AMS
3. git clone https://github.com/gpdoud/ams-client.git
4. git clone https://github.com/gpdoud/ams-server.git

**Start the back-end server**

5. Open Visual Studio
6. FILE > Open Project/Solution
7. Navigate to ~\AMS\ams-server\AssetManagementSystem.sln
8. Open web.config
9. Find the <connectionStrings> tag
10. Change the connectionString data to "server=[server]\SQLEXPRESS;Database=AMS;Trusted_connection=true;" where [server] is your machine name and save
11. Click the **Start** button

The project start will open a new instance of the Chrome browser. To check it is working properly type the following in the browser URL address line:

```localhost:54154/Users/List```

This should display a list of users or simply '[]'

**Start the front-end server**

1. Open Windows command prompt
2. cd into AMS\ams-client
3. type: `ng serve -o`

## Technical

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Help

Review the issues list in the ams-client repository.