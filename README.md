# NG-Camp [![Build Status](https://travis-ci.org/joachimprinzbach/ng2-camp.svg?branch=master)](https://travis-ci.org/joachimprinzbach/ng2-camp)

### Build Backend###
gradlew build will create a runnable jar at backend/build/libs/

### Build Frontend###
You only need to have node.js installed. 

Installing node.js: 

See http://nodejs.org/download/

Install node modules and typings:
```sh
$ cd frontend
$ npm install
```

Start the server:
```sh
$ npm start
```

Open Browser at http://127.0.0.1:3000

### Start & Profiles ###
The application may be started executing the main method in **CampplannerApplication**.
To start in **development** mode use the following option:
-Dspring.profiles.active=dev

### Deployment ###
**Deployment URL:** https://ng-camp.herokuapp.com

