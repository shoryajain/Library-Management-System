#Back-End: Library Management System

Back-end configurations using Rest APIs for a library management system, with database connections, CRUD functions, search functions and verification functions on different parameters. 

##Pre-Requisties
* Any IDE 
* Maven
* Postman
* Java (version 1.8)
* MySQL

##Getting Started

To use on a local system, import the project in any IDE of your choice. The database being used here is MySQL. In case you need to use another supported databse, remove the MySQL dependecies from pom.xml and include the dependencies for database you want to use and add the corresponding driver in applications.properties.

Create a databse named 'lmsdb' as well as a separate user called 'intern' with password 'internship', granting it all access to the database. If you are using this program for the first time, you will also need to change the last propertry from 'none' to 'create'. 

Now, build and run the project as a Java application and use Postman for sending requests.

##APIs Exposed
Unless specified, the methods APIS are Get methods
* /admin/authors-To return list of all authors
* /admin/authorcheck/{id}- Checks if a particular author exists or not based on id passed 
* /author-Used to display a warning message saying id is not valid
* /admin/author/{id}-Used to return an author based on id passed 
* /admin/author(Post Method) - Used to add an author passed to it 
* /admin/author/{id} (Put Method) - Used to edit an author's details based on id passed 
* /admin/author/{id} (Delete Method) - Used to delete an author based on id passed

* /admin/books- To return a list of all books
* /admin/bookcheck/{id}- Checks if a particular book exists or not based on id passed
* /book- Used to display a warning message saying id is not valid
* /admin/book/id/{id}- Used to return a book based on id passed
* /book/name/{name} - Used to return a book based on name passed
* /book/author/{name} - Used to return a book based on name of author passed
* /books/genres - Used to return generes of all books present
* /books/authors - Used to return authors of all books present
* /admin/books/total - Used to return total number of books
* /admin/books/total/unique- Used to return total different books
* /admin/books/total/issued - Used to return total number of issued books
* /admin/books/total/issued/author/{name} - Used to return total number of issued books based on author name passed
* /admin/books/total/issued/book/{name} - Used to return total number of issued books based on name passed
* /admin/book/{authorId} (Post Method) -Used to add a book based on the author id passed
* /admin/book/{id} (Put Method) - Used to edit a book's details based on id passed
* /admin/book/{id} (Delete Method) - Used to delete a book based on id passed

* /admin/users- To return a list of all users
* /usercheck/{uname}- Checks if a particular user exists or not based on username passed
* /user- Used to display a warning message saying id is not valid
* /userforgetpass/{pno}- Used to check if a particular phone number exists or not by passing it
* /userforgetpass/true/{pno} - Used to return user details to which passed phone number matches
* /userforgetpass/false - Used to display a warning message saying phone number is not valid
* /admin/user/{uname} - Used to return a user based on username passed
* /user/issuedbooks/{uname} - Used to return books issued by a user based on username passed
* /role/{username} - Used to return the role of user based on username passed
* /authentication - Authentication function for login based on username and id passed 
* /adduser(Post Method) - Used to add an user passed to it 
* /user/{uname}/newbook (Put Method) - Used to add a book issued to the user based on username passed 
* /user/{uname} (Put Method) - Used to edit a user's details based on username passed
* /admin/role/{username} (Put Method) - Used to edit a user's role based on username passed
* /user/{uname} (Delete Method) - Used to delete a user

##Built Using
* Spring Tool Suite-IDE
* Spring Boot-Framework
* Maven-Build Dependecy
* Postman- Request Generation
* MySQL-Databse

##Author
* **Shorya Jain** - https://github.com/shoryajain 
