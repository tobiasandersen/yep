# Yep
An awesome Jeopardy game for the web.  

**Authors**
Axel Niklasson (axelni[at]student.chalmers.se), David Bergström (davbe[at]student.chalmers.se), Marcus Trigell (trigell[at]student.chalmers.se) and Tobias Andersen (tobiaa[at]student.chalmers.se).  
  
Built with the service based approach using React JS, Redux, CSS modules and postcss on the frontend, all bundled with Webpack, which also gives us hot reloading. The backend is built using Java Spring with Spring Boot, JPA and Hibernate with a MySQL database that is run either locally or by using [DB4Free](http://www.db4free.net) as database host.

## Documentation
This README serves as the main documentation of the application.
### UML
UML-diagrams and such is located in the *docs* folder.

## Backend
The backend runs as a separate app serving endpoints to the frontend according to a RESTful URI pattern. Categories and Cards are, aside from created by users in-game, fetched from [JService.io](http://www.jservice.io) which provides over 150,000 authentic trivia questions.

### Build/Run
Alt.1: To build and run from a jar (including cleaning the package and running the tests) run: 
1. `mvn clean package`
2. `java -jar target/gs-rest-service-0.1.0.jar`.  

Alt.2: To run the backend locally at port 8080 run `mvn spring-boot:run`.
### Packages
The backend is divided into several packages where each has it's own responsability:

1. Controllers - The classes serving the endpoints to the frontend.
2. JServices - The service that populates the database if not already populated.
3. Models - All the object oriented models of the Yep-game.
4. Repositories - The interfaces responsible for mapping the oo-model to the MySQL database.

## Frontend
The frontend runs as a separate app using the endpoints from the backend.
### Installation
Make sure node is installed , then:

1. Run: `npm install`
2. Run: `npm start`

#### Build
Just run `npm run build` and webpack will bundle everything together into
bundle.js and style.css and place them in the dist folder. We'll have to update
the webpack build config to fix paths for index.html when going to production
(or just do it manually).

