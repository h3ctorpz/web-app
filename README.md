<b>Building and running the App with Docker</b>

  Build the image:

  `docker build -t node-web-app .`

  Locate the image:

  `docker images`
  
  Run a container:

  `docker run -p 3000:3000 -d node-web-app`

  Check if the container is running:

  `docker ps`

  Check logs of the container:

  `docker logs <container>`

  Test the app trhough a web browser using the localhost URL and 3000 port, or trhough the command line:

  `curl localhost:3000/user`

  Run the unit test:

  `docker exec -it <container> npm test`

<b>Run the app without Docker (locally):</b>

  From the `/<directory-path>/web-app/` directory, run:

  `node app.js`

  To run the unit test:

  `npm test`

  
