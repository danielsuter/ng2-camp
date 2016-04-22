### Setup ###
The backend is a spring boot application, which can be used with Hsqldb or Postgres.
1. Download postgres from this url: http://www.postgresql.org/download/
2. Setup a database named 'campplanner'.

Done!

### Executable jar ###
The build an executable jar file use
`gradlew clean build`

### Project structure ###
#### DB Migrations ####
We're using flyway for db migrations. Place your migrations in `src/main/resources/db/migration`.

#### Testing #### 
`gradlew test`

#### Debugging ####
Execute `ch/zuehlke/campplanner/CampplannerApplication.java` in debug mode.