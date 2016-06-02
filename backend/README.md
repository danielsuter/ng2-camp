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

### Database setup ###
Please note: For development you don't need a Postgres database. If you want to debug production problems install it from here:
https://www.postgresql.org/download/

Add the following user 'postgres' with password: 'postgres'

Setup the following database:
campplanner

### Add/modify new table/entity ###
Currently we support 2 databases: HSQLDB for testing and Postgres for Heroku.
To be able to store persistent data on Heroku we need to use a real database. We could either use MongoDB or Postgres.
We use Flyway to migrate our schemas. This is overkill for development but eases our way as soon as we are in production. Thus the process to add a 
table or modify an entity is rather cumbersome:

#### Add entity ####
 1. Add class in the domain package and annotate it properly.
 2. Add it to the SchemaExportTest class and execute it. **No** errors must occur.
 3. Add the sql under src/main/resources/db/migration in the respective folders. Use the generated sqls under build/sql for assistance.
 4. Execute the CampplannerApplicationTests to see if the backend still starts.
 
#### Modify column ####
Same as add entity but you must write a migration using alter table, 
since we most likely don't want to drop the table first. As long as we are not in production we could write such a migration of course.


#### Add test data ####
For now use the class **SampleDataImport**