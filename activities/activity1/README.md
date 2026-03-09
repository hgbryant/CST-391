# Activity 1

- Author: Hunter Bryant
- Date: 8 March 2026

## Introduction

NodeJS is a JavaScript back-end server that is used as the foundation for both Angular and React front-end development.  Express is an application installed along with NodeJS to support a JavaScript back-end server capable of being used as a full-fledged server to support middleware services and implement REST APIs.  Express will be used to support building basic routes and Representational State Transfer (REST) /Application Programming Interfaces that can be consumed by an Angular or React front-end framework.

## Executive Summary

- Activity 1 is an example of a Web Application interfacing to a MySQL Relational Database
     - The Architecture will be utilizing Model View Controller (MVC)
        * Model - the maintainer of the data, e.g. Database
        * View - the User Interface, currently the Web Browser
        * Controller - Middleware and the Management / Coordinator of the Application
     - The products utilized in the activity are the following:
        * Node JS
        * Node Package Manager
        * Express API
        * TypeScript
        * MySQL
## Recordings
- The following are recordings
    - The first link is an online link to watch in a Web Browser

    - The second link is the MP4 that can be downloaded and watched in a Video Player

    - https://www.loom.com/share/daf65221621b4b9b9651330d710ba3fe 

    - <video controls src="daf65221621b4b9b9651330d710ba3fe.mp4" title="Title"></video> 

## Environmental Variables
- .env File

- The following are the variables defined for the MySQL Database

```java
#MySQL Settings
MY_SQL_DB_HOST=cv64us.fatcowmysql.com
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=password
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10

#Server Settings
PORT=5000
NODE_ENV=development
GREETING=Hello from the environment file. Be kind to the environment!
```

## Database Initialization
- Start MySQL Workbench
- Copy Initialization File into SQL Query
    * Icon SQL + under File in the application
- Execute Query

## Activity 1 Commands
- The following commands are installation instructions for the various products required for this assignment

```java
cd ~/git/cv64/gcuStudent/CST391/solutions/activity1/MusicAPI

npm install -g nodemon
npm install dotenv
npm install cors
npm install helmet
npm install mysql
npm install uuid
npm install @types/cors --save-dev
npm install @types/dotenv --save-dev
npm install @types/mysql --save-dev
npm install @types/uuid --save-dev
npm install nodemon --save-dev
npm install ts-node --save-dev

npm start
```

## Test Links
- The following are test links to validate the application is executing and communicating with the MySQL database
- The images illustrate the results being display in the Web Browser


| Method | Link | Browser Image | Postman Image | Path Variable / Body |
|------|------|------|------|------|
| GET | [http://localhost:5000/albums](http://localhost:5000/albums) | Browser | Postman | |
| GET | [http://localhost:5000/albums/:artist](http://localhost:5000/albums/:artist) | | | artist="The Beatles" |
| GET | [http://localhost:5000/albums?albumId=7](http://localhost:5000/albums?albumId=7) | Browser | Postman | |
| GET | [http://localhost:5000/albums/search/artist/:search](http://localhost:5000/albums/search/artist/:search) | | | search="Beat" |
| GET | [http://localhost:5000/albums/search/description/:search](http://localhost:5000/albums/search/description/:search) | | | search=1966 |
| POST | [http://localhost:5000/albums](http://localhost:5000/albums) | | Postman | Create Album Request |
| PUT | [http://localhost:5000/albums](http://localhost:5000/albums) | | | Update Album Request |
| DELETE | [http://localhost:5000/albums/:albumId](http://localhost:5000/albums/:albumId) | | | albumId=34 |
| GET | [http://localhost:5000/artists](http://localhost:5000/artists) | Browser | Postman | |

- This is the System Output displaying the SQL variables, database connection and the GET method being called

## Conclusion
- In this assignment, I learned how to build and run a basic web API using Node.js and TypeScript. I practiced setting up a server that listens for HTTP requests and returns data through API endpoints. This helped me understand how backend services handle requests from a client such as a web browser and return responses in formats like JSON.I also learned how an application connects to a database using a connection pool. The application attempts to connect to a MySQL database and run SQL queries to retrieve data from tables, such as albums in the music database. This showed me how backend applications communicate with databases to store and retrieve information that can then be sent to users through an API. Overall, this assignment helped me understand how a backend API is structured, how environment variables are used for configuration, how applications connect to databases, and how to debug server and network issues when something does not work as expected.

