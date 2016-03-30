# TradeBlotter
A trade blotter is a record of each trade that transacted for a given period of time, normally one day. A trader will use a blotter as a way to review his trading day.  

This application uses the following technologies:

###Application Tools
* [Node JS](http://nodejs.org/): Core platform; engine on which all server side code executes.
* [Express JS](http://expressjs.com/): Web server (dynamic pages, web services).
* [Angular JS](https://angularjs.org/): Client side application development framework.
* [Adapt Strap](https://github.com/Adaptv/adapt-strap): Lightweight UI Components/utilities based on AngularJs 1.2+ & Bootstrap 3
* [Angular UI Router](https://github.com/angular-ui/ui-router): AngularUI Router is a routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/): Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

###Development Tools
* [npm](https://www.npmjs.org/): Server side package manager. Manages server side dependencies (node modules).
* [bower](http://bower.io): Client side dependency manager. Helps download client side libraries for the project.
* [grunt](http://gruntjs.com/): Javascript task automater. Used to automate common development tasks - builds, tests, etc.

###Project Structure
The project has the following structure.

```
<ROOT>
 |
 |--- client        [All client side resources (styles/scripts/images/etc.)]
 |  |--- css        [Stylesheets - regular css or less (.css/.less)]
 |  |--- modules    [Javascript files (.js)]
 |  |--- dist       [Deployable files will be generated in this folder]
 |
 |--- server
 |  |--- controller  [Views (jade templates)]
 |  |--- data        [Express.js route definitions]
 |  |--- routes      [Express.js rout definitions]
 |
 |--- server.js         [Configures the express server to run the application]
 |--- GruntFile.js      [Grunt configuration file - provides basic tasks]
 |--- package.json      [Package configuration file - basic app info; node dependencies]
 |--- bower.json        [Client side dependency configuration file]
 |--- .gitignore        [List of files to be ignored by git]

```
##Dev Installation

1.  To starting from scratch, clone the app repo somewhere onto your computer:
    ```
    git clone https://github.com/hareendra69/TradeBlotter.git
    ```

2.  Go to your app's root folder (from whatever directory contains your app folder )
    ```
    cd TradeBlotter
    ```

3.  Install node modules. You might encounter an error, so retry if you have an issue:
    ```
    npm install
    ```

    Start up your app's server:
    ```
    grunt
    ```
4. Open your browser and type http://localhost:3000  to launch the application

5. To run the tests run the below command
   ```
   grunt karma