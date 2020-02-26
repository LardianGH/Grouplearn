# Group Learn

Welcome to Group Learn a site designed for students to work together to find help in Math, Art, English, and Science.
Students can give the area that they are looking to find others to study with on then the specific category they are looking to study. This is a great way for students to make connections and learn together.

## Deployed version
https://grouplearn.herokuapp.com/

## Installing and running locally

Clone the repo using:
````
https://github.com/LardianGH/Grouplearn.git
````
or
````
git@github.com:LardianGH/Grouplearn.git
````
### Prerequisites
Git bash - https://gitforwindows.org/
Node.js - https://nodejs.org/en/download/
MongoDB - https://docs.mongodb.com/manual/installation/

### After installing
Make sure the MongoDB daemon is running with the following command line command:
````
$ mongod
````

Using git bash, navigate to inside the repo.
for help navigating git bash - https://www.atlassian.com/git/tutorials/git-bash
run:
````
npm install
````
then
````
npm run install
````
to install all dependencies

### Running the app
Starting the app in development mode
````
npm run start:dev
````


## Reason we made this program 

We decided to make this site because we saw a need for students that would want to find a group of people to work on getting better in a chosen subject on their time and outside of school.

## The tools we used 

*ReactJS: Frontend framework
*NodeJS: Backend environment
*Semantic UI: Css library
*Bootstrap: Css library
*Mongoose: Provides schema validation for mongoDB
*Express: Server framework for creating routes and APIs
*Express-session with mongostore: Used for generating sessions with cookies for user authentication
*Google Fonts: Style
*Nodemon: Development dependency, restarts server whenever the code is saved
*Concurrently: Development dependency, runs two commands at the same time