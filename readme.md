# weatherApp project

## Architecture

- Front-end using React
- Back-end using a restify Node API
- MongoDB Database running in a Docker container

## MongoDB database

Launch the mongoDB database using a docker container.
Docker needs to be installed first. From any directory launch:

    docker run mongo --name mongo -p 27017:27017

## Front-end

From the weatherApp/front directory, install the dependencies and start the app.

    npm i
    npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
