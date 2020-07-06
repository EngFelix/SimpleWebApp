# SimpleWebApp
A simple web application with an Angular.js frontend and spring boot backend. This application is here fore learning purposes and will grow over time. 

## Launch with gradle wrapper
To launch the SimpleWebApp, type **`gradlew serve`** into a terminal window inside the root project folder.
It will call `:spring-demo-api:bootRun`, which includes the demo-ui project as a dependency.
The demo-ui gradle.build has been configured to first install dependencies, build and then copy everything from the 'dist' folder into a 'static' folder, which is then served by the spring boot application.
