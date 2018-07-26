#Library Management System

A fully functional library management system, with database connections, CRUD functions, search functions, login page and verification functions on different parameters. 

##Pre-Requisties
* Any IDE 
* Maven
* Postman
* Java (version 1.8)
* MySQL
* Node.js
* http-server
* json-server

##Getting Started

To use on a local system, import lms-backend in any IDE of your choice. The database being used here is MySQL. In case you need to use another supported databse, remove the MySQL dependecies from pom.xml and include the dependencies for database you want to use and add the corresponding driver in applications.properties.

Create a databse named 'lmsdb' as well as a separate user called 'intern' with password 'internship', granting it all access to the database. If you are using this program for the first time, you will also need to change the last propertry from 'none' to 'create'. 

Now, build and run the project as a Java application and use Postman for sending requests. Make sure all ports are free as the application runs on 8080 by default. Then run http-server in lms-frontend. Now you can access the application on localhost:8081. 

You will need to add a user with role admin manually using Postman or SQL as the application is login based and roles cannot to be updated to admin while accessing user interface only does not require a pre recorded record as new users can be created on login page itself.  

##Built Using
* Spring Tool Suite-IDE
* Spring Boot-Framework
* Maven-Build Dependecy
* Postman- Request Generation
* MySQL-Databse
* AngularJS- UI
* JavaScript- UI 
* HTML- UI
* CSS- UI
* BootStrap- UI

##Author
* **Shorya Jain** - https://github.com/shoryajain 
