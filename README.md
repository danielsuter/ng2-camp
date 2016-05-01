### Build ###
gradlew build will create a runnable jar at backend/build/libs/


### Deployment ###
The build is deployable on heroku. The package.json in the root folder is to trick heroku into believing this is a nodejs project.
Otherwise the deployment would fail.

**Deployment URL:** https://ze-campplanner.herokuapp.com